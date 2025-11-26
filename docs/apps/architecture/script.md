# Script Forge

---

**Document Metadata** <br>**Category**: Applications Architecture / Scripting Engine</br>
**Audience**: Engineers, Developers, Architects
<br>**Difficulty**: Intermediate to Advanced</br>
**Time Required**: Approximately 30–60 minutes
<br>**Prerequisites**: Active ConnexCS account, access to the Applications / Developer module, familiarity with scripting basics and ConnexCS architecture concepts</br>
**Related Topics**: [ConnexCS Applications Overview](https://docs.connexcs.com/apps/architecture/architecture), [ScriptForge Scripting Reference](https://docs.connexcs.com/apps/architecture/scriptforge/), [Database Integration](https://docs.connexcs.com/apps/architecture/database/)
<br>**Next Steps**: Review the ScriptForge architecture documentation; plan how scripts will integrate with your application logic or data flows; experiment with example scripts; validate integration with existing modules.</br>


## Introduction

**ScriptForge** is a powerful scripting engine that allows users to extend and customize the functionality of ConnexCS.

It provides a JavaScript-based environment where users can develop scripts and applications.

Use ConnexCS **ScriptForge** to write ECMAScript 2015 (ES6) (aka JavaScript) and execute it in a secure sandbox on the server. It's designed to have low latency and high throughput.

It's made for scripts and small applications. Any larger applications are best executed on external hardware through ScriptForge.

A fair-usage policy applies, and if there is unnecessary resource use or if there are any attempts to break the sandbox, your script may not function as expected.

It's designed to work as **FaaS** (Functions as a Service), and our redundant infrastructure handles your application's auto scaling needs.

## Developer Documentation

ConnexCS offers several libraries specifically for use with ConnexCS. Developer API Documentation is available here : <https://api-docs.connexcs.com/>

### Available Modules

You can include some more modules (from npm), available for applications and drivers only.

The purpose is to keep the sandbox lightweight and include only the necessary modules:

|Modules||||
|-------|-|-|-|
|**axios**|axios-cookiejar-support|card-validator|csv-parse/lib/sync|
|**data-forge**|decompress-zip|elasticemail-webapiclient|fast-csv|
|**fast-toml**|ftp|helpscout-2.0|moment|
|**rss-parser**|soap|stripe|tough-cookie|

### Sample Scripts

You can find sample scripts in our GitHub repository > [**example applications**](https://github.com/connexcs/scriptforge-examples/). Below is a list of some use cases. But with a Turing Complete language, the possibilities are endless.

* Do Not Call Lists
* Custom Fraud Detection
* Internal Automation
* Capture and process the Control Panel and Customer Portal forms
* Inbound and Outbound Call Filtering
* Class 5 Programmable Voice Applications
* DID Drivers
* Time of Day Restrictions

## Coding Basics

Scripts and Apps typically start in the `main()` function and expect to return a promise. The first parameter is typically an object called `data`.

### Creating a Basic Script

This script takes an input variable name and returns a greeting message.

```js
function main(vars) {
    return "Hello, " + vars.name;
}
```

### Throwing Errors (Class 4)

Follow the following format; [SIP code] :space: [Error Message], for throwing errors.

**For example**, to throw a 404 Not Found, you can use the following

``` js linenums="1"
throw new Error('404 Not Found');
```

*(**SIP:** Session Initiation Protocol, **DID:** Direct Inward Dialing)

### Class 4 Routing (Routes and Direct Inward Dial)

After the routing engine has executed its main function, the system will run the custom ScriptForge script.

This presents data as the output to the routing engine and expects the same object structure.

``` js linenums="1"
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

``` js linenums="1"
function main (data = {}, ctx) {
 // ctx contains class 5 ctx object 
}
```

!!! warning "Potential Sync Issues"
    To avoid the system losing synchronisation with your script and the connection crashing, execute ALL async functions with `await`.
	If it isn't implemented correctly, it affects that billing and call stability.

### Form Submission

Used to receive data from Form Builder in ConnexCS.

You can view it in the control panel or customer portal.

``` js linenums="1"
function main (data = {}) {
 // data contains object containing key/value pairs from the form. 
}
```

### Export/Import

+ **Export**: You can `export` functions, objects, or primitives from a module so they can be used in other modules.

!!! Note "Important Note"
    The filename from which the function is exported must be in **lowercase** and must **not contain any spaces or special characters**.

!!! Example "Export module example"
    ```js linenums="1"
    function run () {
        return 4 + 10

    }
    module.exports = {run}
    ```

+ **Import**: Use `import` to bring in code from other modules.
  
!!! Example "Import module example"
    ```js linenums="1"
    const { run } = require('fileName')

    function main() {
        return run() // result is 14
    }
    ```

## Configuration

### Build Script

=== "Basic"

    1. To add a script, login to your Control Panel. Click on IDE :material-menu-right: +, and select `Scriptforge`.
    <img src= "/apps/img/app_scriptforge1.png" width= "400" style="border: 2px solid #4472C4; border-radius: 8px;">>

    2. Specify the script **Name**.

    3. Select the **Type**:
          * `Script`- This is the fastest way to execute custom code and is "synchronous" execution. This is mainly used for manipulations or calculations. It can't use libraries or work with Promises. You can also select the Global Routing Priority from **Disable**, **Run First** or **Run Last**.
          * `App`- Feature rich applications which can include a preset (whitelist) of available modules, the penalty of the extra features is a slightly higher latency. You can enter the **Class 5 Destination** for the Script.
          * `Worker`- You can consider it as a Stricter Sandbox. It's persistant. *Please note, its Work In Progress*.

    4. The **App** field allow you to integrate the created applications with the ScriptForge.

    5. Click `Save`.

    <img src= "/apps/img/app_scriptforge2.png" width= "350" style="border: 2px solid #4472C4; border-radius: 8px;">

    6.Your saved Script becomes available on the main IDE section.

    7.Click on ScriptForge.

    8.Select your script from the list.

    <img src= "/apps/img/app_scriptforge6.png" width= "250" style="border: 2px solid #4472C4; border-radius: 8px;">
    
    9.Enter the code of your script.

    10.Click the green arrow to `Saved` and `Run`.

    11.You can view the results onscreen.

    <img src= "/apps/img/app_scriptforge7.png" width= "550" style="border: 2px solid #4472C4; border-radius: 8px;">

    12.You can `Run` and `Save` the code, `Toggle Console`, `Preview (errors)`, `Request Cancellation` for cancelling any ongoing requests, for example taking longer to execute, `Settings` you can edit, Set Vars, Copy file ID, Copy UUID using Settings.

    <img src= "/apps/img/sc.png" width= "320" style="border: 2px solid #4472C4; border-radius: 8px;">

    !!! note
        Global Routing Priority means the script will run for every single call. You have 3 options to choose from:

        <br> 1. You can **disable** it if you don't want to use it</br>
        <br> 2. **Run first** or **Run Last** means this script will run first or after the Script Forge enabled in the Routing section.</br>

=== "Schedule"

    The **Schedule** option allows to you run your Script Forge based on pre-determined **dates in month**, **days of a week** and you can even select the time by selecting the values of **minutes** and **hours** from the drop-down menu.

    <img src= "/developers/img/sf2.png" width= "400" style="border: 2px solid #4472C4; border-radius: 8px;">

If script shows an error, add this and then run the script again:

```
{"routing":{}}
```

!!! Note
    A **File ID** serves as the unique identifier for a file, while a **UUID** is used to expose a **ScriptForge File** to external systems.

#### Some In-Built Environmental Variables in ScriptForge

* **SCRIPTFORGE_ID**: File ID of the ScriptForge file. `process.env.SCRIPTFORGE_ID`
* **SCRIPTFORGE_UUID**: UUID of the ScriptForge file. `process.env.SCRIPTFORGE_UUID`
* **SCRIPTFORGE_NAME**: Name of the ScriptForge file. `process.env.SCRIPTFORGE_NAME`
* **APP_ID**: ID of the application. `process.env.APP_ID`
* **EXEC_HOST**: Host name of the server executing the script. `process.env.EXEC_HOST`

You can get the environmental variables using `process.env`.

!!! Example

    1. Navigate to **IDE :material-menu-right: Script Forge**.
    2. Use the following code to get the **UUID** of the file.

    ```js
    async function main () {
     return process.env.SCRIPTFORGE_UUID
    }
    ```
    <img src= "/apps/img/sf22.png" style= "border: 2px solid #4472C4; border-radius: 8px;">

### Assign the Script to a Customer

1. Select **Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: Routing**
2. Select a Rate Card from Ingress Routing.

    <img src= "/customer/img/ingress-routing1.png" style="border: 2px solid #4472C4; border-radius: 8px;">  

3. Go to **ScriptForge**.
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

## Script Forge Background Job Queue Support

You can access and view background jobs running through Script Forge.

1. You can view the jobs under Global :material-menu-right: Queue. <img src= "/apps/img/job1.png" width= "900" style="border: 2px solid #4472C4; border-radius: 8px;">
2. Click on the job `Name`  to view the status. <img src= "/apps/img/queuejs2.png" width= "800" style="border: 2px solid #4472C4; border-radius: 8px;">