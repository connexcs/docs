# ScriptForge API

ConnexCS **ScriptForge** allows you to write ECMAScript 2015 (ES6) (aka Javascript) which is executed in a secure sandbox on the server. It is designed to be low latency and high throughput.

See [ScriptForge Basics](https://staging--connexcs-docs.netlify.app/developers/scriptforge/) for details on design considerations, as well as basic setup and configuration. 

## Execution Types
* **Script** - This is the fastest way to execute custom code and is "synchronous" execution. This should mainly be used for manipulations or calculations. It can not use libraries or work with Promises.
* **App** - Feature rich applications which can include a preset (whitelist) of available modules, the penalty of the extra features is a slightly higher latency.
* **Driver** - A driver works as an intemediary between ConnexCS and any external system. You can write drivers to bridge the ConnexCS DID provisioning system to a provider of your choice, or built more complicated alerts.

## Use Cases
You can find sample scripts in our GitHub repository for [example applications](https://github.com/connexcs/scriptforge-examples/). A few examples are included below, however with a Turing Complete language, the possibilities are endless.

* Do Not Call Lists
* Custom Fraud Detection
* Internal Automations
* Capture and Process control panel and customer portal forms
* Inbound & Outbound Call Filtering
* Class 5 Programmable Voice Applications
* DID Drivers
* Time of Day Restrictions


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



## Basics
Script & Apps typically start in the `main()` function. The first parameter is typically an object called `data`. Execution will be marked as complete when `exit(response)` is called. Response is the name of the variable that returned to the instantiating system.

For optimal application performance, avoid doing anything which will make the execution last longer than 10 seconds (with the exception of Class 5 Programable Voice). 

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

## Class 4 Routing (Routes & DID)
After the routing engine has executed its main function custom ScriptForge run last. It run presenting data as the output to the routing engine and expects the same object structure to be passed out. Use this with care as changes could affect the billing & stability of calls if not done correctly.

function main (data = {}) {
	// data.routing contains the same data you will find in the Logs
	// in the Raw Data Section
}
Class 5 Programmable Voice
The execution of the Programmable Voice script is done synchronously with the call. This means that (for example) you would initially run an await answer(), it would not progress to the next line untill our platform has finished executing the operation.

IMPORTANT - Ensure that ALL async functions are executed with await, otherwise the system will loose the synchronised state with your script and the connection will crash.

Second parameter is a ctx object

function main (data = {}, ctx) {
	// ctx contains class 5 ctx object 
}
Form Submission
Used to receive data from Form Builder in ConnexCS, which can be displayed in the control panel or customer portal.

function main (data = {}) {
	// data contains object containing key/value pairs from the form. 
}
Driver
A driver is a module export and can contain a number of pre-defined functions dependant on the integration, flow is an example for DID Driver.

module.export = {
	search: async function ({number}) {
		// Returns Array of Objects, e.g [{did:'1234'}]
	},
	allocate: async function ({did}) {
		// The information returned by this function will be passed to 
		// https://api-docs.connexcs.com/#api-Did-Create
	},
	release: async function ({did}) {
		// Returns True / False
	},
	list: async function () {
		// Returns Array of Objects, e.g [{did:'1234'}]
	}
}
