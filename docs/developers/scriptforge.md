# ScriptForge

**Developer :material-menu-right: ScriptForge**

Use ConnexCS **ScriptForge** to write ECMAScript 2015 (ES6) (aka JavaScript) and execute in a secure sandbox on the server. It is designed to be low latency and high throughput.

It is made for scripts and small applications. Any larger applications are best executed on external hardware through ScriptForge.

A fair-usage policy applies, and if there is unnecessary resource use or if there are any attempts to break the sandbox, your script may not function as expected.

It's designed to work as FaaS (Functions as a Service), and our redundant infrastructure handles your application's auto scaling needs.

## Developer Documentation

ConnexCS offers several libraries specifically for use with ConnexCS. [**Developer API Documentation is available here**](https://scriptforge-docs.connexcs.com).

### Available Modules

You can include some more modules (from npm), available for applications and drivers only.

The objective is to keep the sandbox lightweight and include only necessary modules:

|Modules||||
|---|---|---|---|
|**axios**|axios-cookiejar-support|card-validator|csv-parse/lib/sync|
|**data-forge**|decompress-zip|elasticemail-webapiclient|fast-csv|
|**fast-toml**|ftp|helpscout-2.0|moment|
|**rss-parser**|soap|stripe|tough-cookie|

### Sample Scripts

You can find sample scripts in our GitHub repository > [**example applications**](https://github.com/connexcs/scriptforge-examples/).

A few uses cases are included below, but with a Turing Complete language, the possibilities are endless.

* Do Not Call Lists
* Custom Fraud Detection
* Internal Automations
* Capture and Process control panel and customer portal forms
* Inbound & Outbound Call Filtering
* Class 5 Programmable Voice Applications
* DID Drivers
* Time of Day Restrictions

## Coding Basics

Script & Apps typically start in the `main()` function and expects to return a promise. The first parameter is typically an object called `data`.

### Throwing Errors (Class 4)

Errors can be thrown in the format [SIP code] :space: [Error Message]. For example: To throw a 404 Not Found, you can use the following

``` js
 throw new Error('404 Not Found');
```

*(**SIP:** Session Initiation Protocol, **DID:** Direct Inward Dialing)

### Class 4 Routing (Routes & DID)

After the routing engine has executed its main function, the system will run the custom ScriptForge script. This presents data as the output to the routing engine and is expected to send along the same object structure.

``` js
function main (data = {}) {
 // data.routing contains the same data you will find in the Logs
 // in the Raw Data Section
 return data;
}
```

### Class 5 Programmable Voice

You can use Programmable Voice to write smart voice applications controlled in modern JavaScript. The execution of the Programmable Voice script is done synchronously with the call, simplifying the entire process.

For example, you would initially run an `await answer()`, it would not progress to the next line until the platform has finished executing the operation.

See the [**ConnexCS ScriptForge documents**](https://scriptforge-docs.connexcs.com/ctx.html) for more JavaScript examples.

Second parameter is a ctx object

``` js
function main (data = {}, ctx) {
 // ctx contains class 5 ctx object 
}
```

!!! warning "Potential Sync Issues"
   To prevent the system from losing the synchronised state with your script and connection crash, make sure to execute ALL async functions with `await`. If it isn't implemented correctly, billing and call stability are impacted.

### Form Submission

Used to receive data from Form Builder in ConnexCS, and is displayed in the control panel or customer portal.

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

1. To add a script, click :material-plus:.
2. Specify the script **Name**.
3. Select the **Type**:
   * `Script`- This is the fastest way to execute custom code and is "synchronous" execution. This is mainly used for manipulations or calculations. It can't use libraries or work with Promises.
   * `App`- Feature rich applications which can include a preset (whitelist) of available modules, the penalty of the extra features is a slightly higher latency.
   * `Driver`- A driver works as an intermediary between ConnexCS and any external system. You can write drivers to bridge the ConnexCS DID provisioning system to a provider of your choice or build more complicated alerts.
  
4. Click **`Save`**.

    ![alt text][s2]  

5. Select your script from the list.
6. Enter the code of your script.
7. Click the green arrow to **`Save and Run`**.
8. The results are shown onscreen.

If script shows an error, add this and then run the script again:

```{"routing":{}}```

### Assign the Script to a Customer

1. Select **Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: Routing**
2. Select a Rate Card from Ingress Routing.

    ![alt text][s8]  

3. Go to **ScriptForge**
4. Select the script.
5. Click **`Save`**.

### Assign the script to other functions

ScriptForge was initially designed to run from the routing-engine only, but it's available for the following scenarios:

**Class 4 Routing (Termination) - (App or Script)**:
Management :material-menu-right: Customer :material-menu-right: [Your Customer] :material-menu-right: Routing :material-menu-right: [Your Route] :material-menu-right: ScriptForge

**Class 4 Routing (Origination) - (App or Script)**:
Management :material-menu-right: Customer :material-menu-right: [Your Customer] :material-menu-right: DID :material-menu-right: [Your DID] :material-menu-right: ScriptForge

**Class 5 Programmable Voice - (App only)**

**Drivers - (App only)**:
Currently available for Alert & DID

[s2]: /developers/img/176.png "s2"
[s8]: /developers/img/183.png "s8"
