# ScriptForge Basics 

**ScriptForge** allows you to write applications that run during specific system events. Currently, scripting functionality is supported in the routing engine, where it runs alongside the call setup process.  Requests to your application are handled with a messaging bus which will queue applications that can't be processed fast enough.  Applications that run in the routing engine must be completed quickly to avoid high PDD.

!!! note "ScriptForge API"
    See [ScriptForge API](https://staging--connexcs-docs.netlify.app/developers/scriptforge-api.md) for details on scripts and API reference.

## Design Considerations

### Language

ScriptForge currently supports JavaScript ES6 (also known as ECMAScript 6 or ECMA6).  

### Memory

For speed enhancement, variables in your application may be present between messages, but don't assume this behaviour. The application is automatically distributed across multiple nodes; active variables are not persistent. Use the datastore class if persistence is required across messages. The memory of your application may be limited (default to 100MB). Using more than the allocated amount may cause your application to crash.

### CPU (Time Limit)

There are no hardcoded CPU restrictions placed on any applications, though its run time is limited to two seconds by default.

### Durability

If a message is not processed in time, or fails during processing, it will reset to an unconsumed state, making it available for further processing.  This mechanism is in place to eliminate lost messages with redundancy.

### Scalability

Applications can run across multiple zones or data centers. By default, one process is allowed per script.  If you find your application is too intensive or having difficulty scaling to business requirements, greater resource allocation may be required. See [Scaling and Load Balancing](https://docs.connexcs.com/scaling-load-balancing/) for details. 

### Functionality

Programming environments are locked down to prevent human error from changing too much. ConnexCS provides classes and help agents to assist clients with more specific functionality. Also, the Knowledge Base contains information about leveraging this availability.


## Creating a new script
Create a customized script and assign it to a specific customer.

### Build the new script

1. Select **`Script Forge`** from Developer under the side menu.
2. Add a script by clicking **`+`**.
3. Fill in the script's name and type, then click **`Save`**.

   ![alt text][s2]   
 
4. Select your script from the list.
5. Enter the code of your script
6. Click the green arrow to **`Save and Run`**. 
7. The results will be shown onscreen.

If script shows an error, add this then run the script again:
```
{"routing":{}}
```

### Assign the Script to a customer

To assign scripts to customers:

1. Select **Customer** > [**customer]** 
3. Navigate to **Routing**
4. Select a rate card from the table.

    ![alt text][s8]  
 
5. Go to **ScriptForge**
5. Select the script
6. Set the **Timeout** to specify how long it will run before timing out
6. The **Timeout Action** is entered manually and must be formatted as **`[sip response code] [sip response message]`**. 
6. Click **`Save`**.
 
 
[s2]: /developers/img/176.png "s2"
[s8]: /developers/img/183.png "s8"
