# ScriptForge
The **ScriptForge** allows you to write applications that run during specific system events. Currently, scripting functionality is supported in the routing engine, where it runs alongside the call setup process.  Requests to your application are handled with a messaging bus, and they will be queued if an application can't process them fast enough.  Applications that run in the routing engine must be completed quickly to avoid high PDD.

## Design Considerations

### Language

ScriptForge currently supports JavaScript ES6 (also known as ECMAScript 6 or ECMA6).  

### Memory

For speed enhancement variables in your application may be present between messages, however you should not assume this behaviour. Your application will be automatically distributed across multiple nodes and active variables will not be persistent. If you require persistence across messages you can use the datastore class. The memory of your application may be limited (default to 100MB). You should ensure that you don't try to use more than the allocated amount or your application may crash.

### CPU (Time Limit)

There are no hardcoded CPU restrictions placed on any applications, though its run time is limited to two seconds by default.

### Durability

If a message is not processed in time or fails duing processing, it will reset to an unconsumed state, making it available for further processing.  This mechanic is in place to eliminate lost messages with redundancy.

### Scalability

Applications can run across multiple zones or data centers. By default, one process is allowed per script.  If you find your application is too intensive or having difficulty scaling to business requirements, greater resource allocation may be required.  

### Functionality

Programming environments are locked down to preven human error from changing too much, but we provide classes and help agents to assist clients with more specific functionality. Also, the Knowledge Base contains information about leveragingthis availability.

## API

API code starts in the `main()` function, and 
execution will be marked as complete when `exit(response)`  is called.  Response is the name of the variable that returned to the instantiating system.

To perform the equivalent of an exception,  call `err();`, which takes a single parameter, such as `[404, "Not Found"]`.
Variables are made available through the `vars()` function. This is an example of a basic routing application:

```
function main(){
  var data = vars();
  exit(data);
}
```
ScriptForge  is designed to process one concurrent execution per server by default. It is important to execute `exit()` as soon as possible, since the server is blocked until this operation completes. It is also important to make sure there are no other branches of code executing after `exit()`, as this slows down requests, and can causes unexpected termination and time outs for future requests.

## Libraries
As JavaScript libraries are quite extensive and thus outside the scope of this documentation, we have covered only the basics here. More information about intermediate use of libraries is available to our clients on request, however.

### Lookup
All functions return a promise that contains an object with the same key values pairs found here: https://api2.connexcs.com/

```
api.lookup.asrplus(number);
api.lookup.tps(number);
api.lookup.nnpc(number);
api.lookup.hlr(number);
api.lookup.lrn(number);
api.lookup.ping(number);
api.lookup.userspaceLookup(number);
```
### Send
A way to send messages from the system

```
api.send.email(params);
api.send.sms(params);
api.send.notify(params);
api.send.sip(params);
```

## Examples

### Random CLI

```
function main(vars){
  var cliList = ["11111","22222","33333","44444"];
  vars.routing.cli = cliList[Math.floor(Math.random() * cliList.length)];
  return vars;
}
```
 
### Checking a DNC List

You can upload number lists for Do-not-Call or white lists in the User Space Database inside the main system.  These lists can then be queried from ScriptForge.

```
function main(vars){
	if (!vars.routing) vars.routing = {};
	return api.lookup.userspaceLookup('DNC', vars.routing.dest_number).then(function(rData){
		return Promise.reject([603, "Denied (DNC)"]);
	}).catch(function(err){
		if (err[0] == 603) return Promise.reject([603, "Denied (DNC)"]);
		return Promise.resolve(vars.routing);
	});
}
```

### Performing an ASRPlus Lookup

ASRPlus is a ConnexCS feature for reducing unecessary attempts and providing faster fails on calls. It is most suitable for agressive call-center traffic profiles.

```
function main(vars){
	if (!vars.routing) vars.routing = {};
	return api.lookup.asrplus(vars.routing.dest_number).then(function(asrplusData){
		if (asrplusData.status && asrplusData.status =='Invalid'){
			return Promise.reject([604, "Number not Found (ASRPlus)"]);
		} else {
		  	vars.routing.asrPlus = asrplusData;
			return Promise.resolve(vars.routing);
		}
	});
}
```


## Creating a new script

You can customize your script in the new functionality of Connex and assign it to a specific customer.

1. Select **`Script Forge`** from the side menu.

 ![alt text][side]   
 
2. Add a script by clicking **`+`**.
   
3. Fill in the script's name and type, then click **`Save`**.

 ![alt text][s2]   
 
4. Select your script from the list.
 
5. Enter the code of your script and click the arrow next to **`Save and Restart`**. 
6. From the drop down menu, select **`Save`** .
7. Click **`Start`**.

 ![alt text][s4]   
 
7. Select the **`Run`** button at the top, and the result will be shown onscreen.

If script shows an error, select the arrow button next to **`Run`** and add this:
```
{"routing":{}}
```
Run the script again:

![alt text][s5]

## Assigning the Script to a customer

You can assign scripts to customers:
1. Select **Customer** from the menu. 
2.  Choos a customer from the list by clicking its name.
3.  Navigate to the **Routing** tab 
4.  Select a rate card from the table.

![alt text][s8]  
 
5. A form opens called **Route Ingress**. Find the **ScriptForge** field and select your custom script from the list
6. Click **`Save`**.
 
![alt text][s9] 
 
 
[side]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/175.png "side"
[side-1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/176.png "side-1"
[s2]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/177.png "s2"
[s3]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/178.png "s3"
[s4]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/179.png "s4"
[s5]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/180.png "s5"
[s6]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/181.png "s6"
[s7]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/182.png "s7"
[s8]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/183.png "s8"
[s9]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/184.png "s9"
