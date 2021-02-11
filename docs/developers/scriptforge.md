# ScriptForge 
**Developer :material-menu-right: ScriptForge**

ConnexCS **ScriptForge** allows you to write ECMAScript 2015 (ES6) (aka JavaScript) which is executed in a secure sandbox on the server. It is designed to be low latency and high throughput.

It is made for scripts and small applications. Any larger applications are best executed on external hardware with ScriptForge intermediating it.

A fair-usage policy applies, and your script may not function as expected if there is unnecessary resource utilisation or if there are any attempts to break the sandbox.

It is designed to work as FaaS (Functions as a Service) and auto-scaling your application is handled by our redundant infrastructure

## Developer Documentation
ConnexCS provide a number of libraries specifically for use with ConnexCS. [**Developer API Documentation is available here**](https://scriptforge-docs.connexcs.com). 

### Available Modules
You can include some additional modules (from npm), available for applications and drivers only. Our objective is to keep the sandbox lightweight and only include modules which are necessary:

|Modules||||
|---|---|---|---|
|axios|axios-cookiejar-support|card-validator|csv-parse/lib/sync|
|data-forge|decompress-zip|elasticemail-webapiclient|fast-csv|
|fast-toml|ftp|helpscout-2.0|moment|
|rss-parser|soap|stripe|tough-cookie|

### Sample Scripts
You can find sample scripts in our GitHub repository for [**example applications**](https://github.com/connexcs/scriptforge-examples/). A few uses cases are included below, however with a Turing Complete language, the possibilities are endless.

* Do Not Call Lists
* Custom Fraud Detection
* Internal Automations
* Capture and Process control panel and customer portal forms
* Inbound & Outbound Call Filtering
* Class 5 Programmable Voice Applications
* DID Drivers
* Time of Day Restrictions

## Coding Basics
Script & Apps typically start in the `main()` function and expects a promise to be returned. The first parameter is typically an object called `data`.

### Throwing Errors (Class 4)

Errors can be thrown in the format [SIP code] :space: [Error Message], for example to throw a 404 Not Found you can use the following
``` js
	throw new Error('404 Not Found');
```

### Class 4 Routing (Routes & DID)
After the routing engine has executed its main function, the system will run the custom ScriptForge script. This presents data as the output to the routing engine and expects the same object structure to be passed along. 

``` js
function main (data = {}) {
	// data.routing contains the same data you will find in the Logs
	// in the Raw Data Section
	return data;
}
```

### Class 5 Programmable Voice
Programmable Voice allows you to write smart voice applications controlled in modern JavaScript. The execution of the Programmable Voice script is done synchronously with the call, simplifying the entire process. This means that (for example) you would initially run an `await answer()`, it would not progress to the next line until our platform has finished executing the operation. See the [**ConnexCS ScriptForge documents**](https://scriptforge-docs.connexcs.com/ctx.html) for additional JavaScript examples.

Second parameter is a ctx object
``` js
function main (data = {}, ctx) {
	// ctx contains class 5 ctx object 
}
```

!!! warning "Potential Sync Issues"
    Ensure that ALL async functions are executed with `await`, otherwise the system will lose the synchronised state with your script and the connection will crash. If not implemented correctly, billing and call stability could be impacted.

### Form Submission
Used to receive data from Form Builder in ConnexCS, which can be displayed in the control panel or customer portal.

``` js
function main (data = {}) {
	// data contains object containing key/value pairs from the form. 
}
```

### Driver
A driver is a module export which may contain several pre-defined functions dependent on the integration, flow is an example for DID Driver.

``` js
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
```

## Configuration

### Build Script
1. Add a script by clicking **`+`**.
2. **Name** the script.
3. Select the **Type**:

    + `Script`- This is the fastest way to execute custom code and is "synchronous" execution. This should mainly be used for manipulations or calculations. It can't use libraries or work with Promises.
    + `App`- Feature rich applications which can include a preset (whitelist) of available modules, the penalty of the extra features is a slightly higher latency. 
    + `Driver`- A driver works as an intermediary between ConnexCS and any external system. You can write drivers to bridge the ConnexCS DID provisioning system to a provider of your choice or build more complicated alerts.

3. Click **`Save`**.

    ![alt text][s2]   
    
4. Select your script from the list.
5. Enter the code of your script
6. Click the green arrow to **`Save and Run`**. 
7. The results will be shown onscreen.

If script shows an error, add this then run the script again:
```
{"routing":{}}
```

### Assign the Script to a Customer

1. Select **Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: Routing**
4. Select a Rate Card from Ingress Routing.

    ![alt text][s8]  
 
5. Go to **ScriptForge**
5. Select the script
6. Set the **Timeout** to specify how long it will run before timing out
6. The **Timeout Action** is entered manually and must be formatted as **`[sip response code] [sip response message]`**. 
6. Click **`Save`**.

### Assign the script to other functions
ScriptForge was initially designed to run from the routing-engine only, however it is available for the following scenarios:

**Class 4 Routing (Termination) - (App or Script)**: 
Management :material-menu-right: Customer :material-menu-right: [Your Customer] :material-menu-right: Routing :material-menu-right: [Your Route] :material-menu-right: ScriptForge

**Class 4 Routing (Origination) - (App or Script)**: 
Management :material-menu-right: Customer :material-menu-right: [Your Customer] :material-menu-right: DID :material-menu-right: [Your DID] :material-menu-right: ScriptForge

**Class 5 Programmable Voice - (App only)**

**Drivers - (App only)**: 
Currently available for Alert & DID
 
[s2]: /developers/img/176.png "s2"
[s8]: /developers/img/183.png "s8"
