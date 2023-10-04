# ScriptForge

**Developer :material-menu-right: ScriptForge**

Use ConnexCS **ScriptForge** to write ECMAScript 2015 (ES6) (aka JavaScript) and execute it in a secure sandbox on the server. It's designed to have low latency and high throughput.

It's made for scripts and small applications. Any larger applications are best executed on external hardware through ScriptForge.

A fair-usage policy applies, and if there is unnecessary resource use or if there are any attempts to break the sandbox, your script may not function as expected.

It's designed to work as FaaS (Functions as a Service), and our redundant infrastructure handles your application's auto scaling needs.

## Developer Documentation

ConnexCS offers several libraries specifically for use with ConnexCS. [**Developer API Documentation is available here**](https://scriptforge-docs.connexcs.com).

### Available Modules

You can include some more modules (from npm), available for applications and drivers only.


The purpose is to keep the sandbox lightweight and include only the necessary modules:

|Modules||||
|---|---|---|---|
|**axios**|axios-cookiejar-support|card-validator|csv-parse/lib/sync|
|**data-forge**|decompress-zip|elasticemail-webapiclient|fast-csv|
|**fast-toml**|ftp|helpscout-2.0|moment|
|**rss-parser**|soap|stripe|tough-cookie|

### Sample Scripts

You can find sample scripts in our GitHub repository > [**example applications**](https://github.com/connexcs/scriptforge-examples/). Below is a list of some use cases. But with a Turing Complete language, the possibilities are endless.

* Do Not Call Lists
* Custom Fraud Detection
* Internal Automations
* Capture and process the Control Panel and Customer Portal forms
* Inbound and Outbound Call Filtering
* Class 5 Programmable Voice Applications
* DID Drivers
* Time of Day Restrictions

## Coding Basics

Scripts and Apps typically start in the `main()` function and expect to return a promise. The first parameter is typically an object called `data`.

### Throwing Errors (Class 4)

Follow the following format; [SIP code] :space: [Error Message], for throwing errors.

**For example**, to throw a 404 Not Found, you can use the following

``` js
throw new Error('404 Not Found');
```

*(**SIP:** Session Initiation Protocol, **DID:** Direct Inward Dialing)


### Class 4 Routing (Routes and Direct Inward Dial)

After the routing engine has executed its main function, the system will run the custom ScriptForge script.

This presents data as the output to the routing engine and expects the same object structure.

``` js
function main (data = {}) {
 // data.routing contains the same data you will find in the Logs
 // in the Raw Data Section
 return data;
}
```

### Class 5 Programmable Voice

You can use Programmable Voice to write smart voice applications controlled in modern JavaScript.

The call and the Programmable Voice script are both executed simultaneously, simplifying the entire process. This means that (for example) you would initially run an `await answer()`, it would not progress to the next line until the platform has finished executing the operation.

See the [**ConnexCS ScriptForge documents**](https://scriptforge-docs.connexcs.com/ctx.html) for more JavaScript examples.

Second parameter is a ctx object

``` js
function main (data = {}, ctx) {
 // ctx contains class 5 ctx object 
}
```

!!! warning "Potential Sync Issues"
    To avoid the system losing synchronisation with your script and the connection crashing, execute ALL async functions with `await`.
	If it isn't implemented correctly, it affects thatbilling and call stability.

### Form Submission

Used to receive data from Form Builder in ConnexCS.

You can view it in the control panel or customer portal.

``` js
function main (data = {}) {
 // data contains object containing key/value pairs from the form. 
}
```

## Configuration

### Build Script

1. To add a script, click :material-plus:.
2. Specify the script **Name**.
3. Select the **Type**:
   * `Script`- This is the fastest way to execute custom code and is "synchronous" execution. This is mainly used for manipulations or calculations. It can't use libraries or work with Promises.
   * `App`- Feature rich applications which can include a preset (whitelist) of available modules, the penalty of the extra features is a slightly higher latency.
   * `Driver`- A driver works as an intermediary between ConnexCS and any external system. You can write drivers to bridge the ConnexCS DID provisioning system to a provider of your choice or build more complicated alerts.
  
4. Click **`Save`**.

    * `Script`- This is the fastest way to execute custom code and is "synchronous" execution.
	    This is mainly used for manipulations or calculations.
		It can't use libraries or work with Promises.
    * `App`- As a penalty, feature-rich applications with a predefined list (allow list) of available modules have slightly higher latency.
    * `Driver`- A driver works as an intermediary between ConnexCS and any external system.
	   You can write drivers to bridge the ConnexCS DID provisioning system to a provider of your choice or build more complicated alerts.

4. Click **`Save`**.

    ![alt text][s2]

5. Select your script from the list.
6. Enter the code of your script.
7. Click the green arrow to **`Save and Run`**.
8. You can view the results onscreen.

If script shows an error, add this and then run the script again:

```
{"routing":{}}
```

### Assign the Script to a Customer

1. Select **Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: Routing**
2. Select a Rate Card from Ingress Routing.

    ![alt text][s8]  

3. Go to **ScriptForge**
4. Select the script.
5. Set the **Timeout** to specify the duration you want it to run before it times out.
6. Enter the **Timeout Action** manually and format it as **`[sip response code] [sip response message]`**.
7. Click **`Save`**.

### Assign the script to other functions

ScriptForge was initially designed to run from the routing-engine only, but it's available for the following scenarios:

**Class 4 Routing (Termination) - (App or Script)**:
Management :material-menu-right: Customer :material-menu-right: [Your Customer] :material-menu-right: Routing :material-menu-right: [Your Route] :material-menu-right: ScriptForge

**Class 4 Routing (Origination) - (App or Script)**:
Management :material-menu-right: Customer :material-menu-right: [Your Customer] :material-menu-right: DID :material-menu-right: [Your DID] :material-menu-right: ScriptForge

**Class 5 Programmable Voice - (App only)**

**Drivers - (App only)**:
Currently available for Alert & DID

## Manipulating headers from ScriptForge

This feature helps you manipulate or remove headers.

Below are some examples for removing headers for all or specific destinations.

```

function main(data) {

// Delete headers for ALL destinations
	data.remove_headers = [
		{key: 'X-Customer-ID'}
	]; 
// Delete headers for first destination
	data.egress_routing[0].remove_headers = [
		{key: 'X-Customer-ID'}
	];
// Add Headers for ALL Destinations
	data.headers = [
		{key: 'X-Customer-ID', value: '1234'}
	];
// Add Headers for first destination
	data.egress_routing[0].headers = [
		{key: 'X-Customer-ID', value: 1234}
	];
// If you want to replace a header, you must remove it, then add it.
	return data;
}
```

[s2]: /developers/img/176.png "s2"
[s8]: /developers/img/183.png "s8"
