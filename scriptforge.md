# Table of Contents

* [Table of Contents](#table-of-contents)
* [ScriptForge](#scriptforge)
    * [Language](#language)
    * [Memory](#memory)
    * [CPU (Time Limit)](#cpu-time-limit)
    * [Durability](#durability)
    * [Scalability](#scalability)
    * [Functionality](#functionality)
    * [API](#api)
    * [Libraries](#libraries)
        * [Lookup](#lookup)
        * [Send](#send)
    * [Examples](#examples)
        * [Random CLI](#random-cli)
        * [Checking a DNC List](#checking-a-dnc-list)
        * [Performing an ASRPlus Lookup](#performing-an-asrplus-lookup)
	* [Creating a New Script](#creating-a-new-script)
	* [Assigning the Script to a customer](#assigning-the-script-to-a-customer)
	* [Form Builder](#form-builder)


# ScriptForge
The **ScriptForge** allows you to write your own applications which can be run at specific events in the system, currently the following places support scripting functionality:

* Routing Engine (runs in line of the call setup process)

Requests to your application are processed via a messaging bus and will be queued if your application cannot process them fast enough. If you run your application in the routing engine you must ensure that it can complete quickly so as not to induce high PDD.

## Design Considerations

### Language

ScriptForge currently supports Java script (ECMA6)

### Memory

For speed enhancement variables in your application may be present between messages, however you should not assume this behaviour. Your application will be automatically distributed across multiple nodes and active variables will not be persistent. If you require persistence across messages you can use the datastore class. The memory of your application may be limited (default to 100MB). You should ensure that you don't try to use more than the allocated amount or your application may crash.

### CPU (Time Limit)

There are no hard CPU restrictions on your application, however its run time is limited (default 2 seconds).

### Durability

If a message is not processed in time or fails half way through processing, it will be reset to the unconsumed state and will be available for further processing. A message should never be lost.

### Scalability

Your application may run across multiple zones (data centres) and by default is allowed 1 process per script.

If your application is intensive and/or you need to scale further please contact us to arrange more resources to be dedicated to your application.

### Functionality

Your programming environment is locked down for security reasons, but we provide classes/helpers to achieve greater functionality, you can find out more about them in the Knowledge Base.

## API

Code will start in the `main()` function
Execution will be marked as complete when the `exit(response)` function is called, response is the variable that will be returned to the instantiating system.
If you wish to do the equivalent of throwing an exception, you can call the `err();` which takes a single parameter for example `[404, "Not Found"]`
Variables can be made available through the `vars()` function.

A basic routing application will look something like this:

```
function main(){
  var data = vars();
  exit(data);
}
```


ScriptForge as default is designed to process 1 concurrent execution per server. It is therefore important to execute `exit()` as soon as possible as the server will be blocked until this operation completes. It is also important to ensure that there are no other branches of your code executing after the `exit()` has been called as this will slow down subsequent requests and could also cause unexpected termination & time outs of subsequent requests.

## Libraries
This section is lightly documented, if you have any questions please ask us.

### Lookup
All functions return a promise which contains an object with the same key values pairs as can be found here: https://api2.connexcs.com/

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

You can upload your own number lists for Do-not-Call, or white lists in the User Space Database inside the main system. You can then query it from ScriptForge.

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

ASRPlus is a ConnexCS feature for reducing unecessary attempts and providing faster fails on calls. It's most suitable for agressive call-center traffic profiles.

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

You can customize your script in the new functionality of Connex and also can assign it to a specific customer. Follow the simple steps to do so.

1. Login to your Connex account and from the side menu select “Script Forge”.

	![alt text][side]   
 
2. Now, add your own script by clicking on “Add New” button.

	![alt text][s2]   
 
3. Fill in the name of your script and click on “Save”.

	![alt text][s3]   
 
4. Now, select your script from the list and click on it.

	![alt text][s4]   
 
5. Enter the code of your script and click the arrow next to “Save and Restart”. From the drop down menu, select “Save” and then click on “Start”.

	![alt text][s5]   
 
6. Click the “Run” button on the top. The script should show the result.

In case, the script shows error click the arrow button next to “Run” and add this:
{"routing":{}}

And then run the script again.

![alt text][s6]

## Assigning the Script to a customer

You can assign the script to a customer by selecting “Customer” from the side menu.

![alt text][side-1]   
 
Select a specific customer from the list by clicking on the names of customers.

![alt text][s7]

Navigate to “Routing” tab and select a rate card from the table.

![alt text][s8]  
 
A form will open named “Route Ingress”, find the “ScriptForge” field and select the script you just created. Click on “Save” when you are done.
 
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

# Form Builder
Form Builder
Form Builder can be used when you write your own ephemeral scripts in ScriptForge. It allows you to define your own custom user interface by selecting specific input fields. These fields will be passed to variables on the corresponding application.
