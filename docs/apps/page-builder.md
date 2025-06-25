# Page Builder

## Introduction

Our **Page Builder** allows users to easily create and design forms/pages without needing or minimalist requirement to write code.

It provides a user-friendly interface with drag-and-drop functionality and various pre-built elements, making form creation accessible even to those with limited technical expertise.

### Key features and functionalities of the  Page builder:

1. **Drag-and-drop interface**: You can drag and drop various form elements e.g. *text fields, checkboxes, radio buttons, drop-down menus*, and more onto a visual canvas.
2. **Customization options**: You can customize the appearance of your form by changing colors, fonts, layouts, and adding your own branding elements.
3. **Conditional logic**: You can set up conditional logic, where certain form fields appear or disappear depending on the user's selections in other fields.
4. **Data validation**: Page builders offer built-in validation rules to ensure users enter data in the correct format (e.g., email address, phone number).
5. **Integrations**: You have the option to integrate with various services like email marketing platforms, payment gateways, and CRM systems.
6. **Charts**: You can display your data using various types of charts.

## Create a new Page

1. Login to your account.

2. Navigate to **IDE** :material-menu-right: `+` icon :material-menu-right: **Page Builder**.

<img src= "/apps/img/pageb1.png" style="border: 2px solid #4472C4; border-radius: 8px;">

3.Enter the **Name** and **Title** of your Page. From the **App** drop-down you can select the application for which you wish to create for the page for and click on **Save and Continue**.

<img src= "/apps/img/pageb2.png" width="600" style="border: 2px solid #4472C4; border-radius: 8px;">

4.The created **Page** will be visible on the IDE panel under **Page Builder**. Click on the created blank page to create your customize form/page.

<img src= "/apps/img/pageb3.png" style="border: 2px solid #4472C4; border-radius: 8px;">

<img src= "/apps/img/pb1.png" width="1000" style="border: 2px solid #4472C4; border-radius: 8px;">

!!! Tip
    Use the **Search Components** feature to find the components in the **Layout**, **Collection**, **Basic Fields** or **Advance Fields**.

## Component Attribute

A **component attribute** is a piece of data associated with a specific component within a Page.

It serves as a way to customize the component's behavior, appearance, or functionality.

Components in a Page Builder include Alert, Buttons, Sub-Form, Sub-Form+, Table etc.

We've explained the **Component Attribute** for each component individually in the [**Components section**](https://docs.connexcs.com/apps/components/alert/).

## Form Attribute

The Form attribute helps you specify values for the following parameters for all the fields in the form or on the form itself:

|**Name of the Component**|**Description**|**Icon**|
|-------------------------|---------------|---------|
|**UI**|User Interface refers to the graphical layout of an application. **Element and Ant Design** are for desktop components design and **Vuetify** focuses on designing for mobile components|<img src= "/apps/img/page_ui.png">|
|**Form Width**| Form width helps you decide the dimensions of the complete form|<img src= "/apps/img/page_formwidth.png">|
|**Label Position**|Label position helps you position the field labels.<br> You can decide between Left, Right and Top|<img src= "/apps/img/page_labelposition.png">|
|**Label Width**|Refers to the horizontal space allocated for displaying labels in a form or dialog box|<img src= "/apps/img/page_labelwidth.png">|
|**Label Suffix**| A label suffix typically refers to a set of characters or symbols that are added to the end of a label or identifier to provide additional information or context|<img src= "/apps/img/page_labelsuffix.png">|
|**Size**| Size describes the dimensions of all the fields in the form. <br> You can choose from **Large**, **Default**, and **Small**|<img src= "/apps/img/page_size.png">|
|**Style Sheets**|You can add custom Style Sheets to make the interface look more pleasing|<img src= "/apps/img/page_stylesheets.png">|
|**Custom Class**|You can select class names created in Style Sheets|<img src= "/apps/components/img/input_customclass.png">|
|**Log Level**|Log messages based on the severity of the event they describe, helping users prioritize and interpret the vast amount of information typically found in logs. <br><br>1.**Disabled** signifies is entirely turned off. No messages, regardless of their severity (error, warning, info, etc.), will be written to the log file.</br></br> 2. Use **Error** log level that should be used when the application hits an issue preventing one or more functionalities from properly functioning. <br><br> 3. Use **Warn** log for unexpected behavior happened inside the application, but it's continuing its work and the key business features are operating as expected. <br><br>4. **Info** An event happened, the event is purely informative and can be ignored during normal operations. <br><br>5. Use **Debug** level for troubleshooting or test environments to diagnose potential issues. <br><br> 6. **Trace** Detailed code execution for deep debugging, ignored during normal operation.<br><br>{ label: 'Disabled', value: 5 }, <br>{ label: 'Error', value: 4 },<br>{ label: 'Warn', value: 3 },<br>{ label: 'Info', value: 2 },<br>{ label: 'Debug', value: 1 },<br>{ label: 'Trace', value: 0 }|<img src= "/apps/img/page_loglevel.png">|
|**Data Source**| Data Source can be External, from Script Forge or a Database|<img src= "/apps/img/page_datasource.png">|
|**Action Panel**| Allows you to create functions/JavaScript methods to specify the actions for various components in the form/page|<img src= "/apps/img/page_actionpanel.png">|
|**Javascript CDN Library**|Allows you to load external javascript libaries. Our search feature lets you quickly search for libraries from `cdnjs.cloudflare.com`|<img src= "/apps/img/page_js.png">|

## Config

### Events

| Name| Description|
|-----|------------|
| mounted | When the page is first loaded|
| refresh | When the page is first loaded and every time .refresh() is called |

### API

{{ external_markdown('https://cdn.cnxcdn.com/cnxapp/docs/api.md', '') }}

!!! Info
    Form Attribute :material-menu-right: Datasource :material-menu-right: ScriptForge :material-menu-right: Websocket
    WebSocket enables you to create and manage WebSocket connections within your application. WebSockets are a powerful technology for establishing persistent, two-way communication channels between a web browser and a server, enabling real-time data exchange without the need for constant polling.

    **Example**:
    ```js linenums="1"
    const socket = this.scriptForge('myScriptForge')//creates a new WebSocket connection using the scriptForge function
    socket.send({hello: 'World'}) // sending a message
    socket.on('error', console.log) // handling errors
    socket.on('data', data => { // receiving data
        console.log('New Data In', data)
    })
    socket.close(); // closing the socket
    ```

!!! Info
    Form Attribute :material-menu-right: Datasource :material-menu-right: Stores
    Stores accesses Datasource form the Control Panel only.

!!! Info
    Form Attribute :material-menu-right: Datasource :material-menu-right: Databases
    Stores accesses Datasource form the Control Panel only.

!!! Info
    Form Attribute :material-menu-right: Datasource :material-menu-right: Saved Query
    Using the Page Builder interface we can run a complicated query (runs behind the scenes) and it returns the data. the Saved Queries can be accessed via ScriptForge.

    1. A query can be ran against different endpoints, (CDR, Primary Database, G3 Analytics), so we will need a selector.
    2. From the IDE perspective, we should be able to run an ad-hoc query, e.g we shouldn't need to create a new item and save it before we can run it.
    3. There should be a section for variables to be filled in, for example:
    SELECT * FROM customers WHERE customer_id = :customer_id
    :customer_id is the replacement syntax.
    4. Then when we run the query it will automatically replace :customer_id with the value associated with that variable.
    5. When the query is saved (/api/cp/setup/query) you can run it /api/cp/setup/query/1234/run with POST or GET and pass the variable along with it. Then it will inject the variables into the saved query and execute it.
    6. This query will then be accessible from ScriptForge or via the Page-builder.

!!! Info
    Form Attribute :material-menu-right: Datasource :material-menu-right: External
    Access information externally.

!!! Info
    **window.cx**: This function, when called, returns an object with the name **ctx**. This can be accessed using the browser's console.
    When any functions are being executed, "this" context is equivalent to "ctx." It's an incredibly efficient method for modifying code directly from the browser console.
    For example, using the below code you can interact with the Page Builder from the Console.

    1. **Example 1**

    ```js linenums="1"
    window.cx().ctx.$('echarts').loading // Charts component is loading
    ```
    <img src= "/apps/img/pageb6.png" width= "800" style="border: 2px solid #4472C4; border-radius: 8px;">

    ```js linenums="1"
    window.cx().ctx.$('echarts').loading(false) // Charts component is not loading
    ```
    <img src= "/apps/img/pageb7.png" width= "800" style="border: 2px solid #4472C4; border-radius: 8px;">
    
    2.**Example 2**: Set the Log Level
    ``` js linenums="1"
    window.cx().ctx.setLogLevel(`debug`) // Setting log level to debug
    ```
    <img src= "/apps/img/pageb6.png" width= "800" style="border: 2px solid #4472C4; border-radius: 8px;">

## Platform Features

Drag & Drop Admin Interface Builder, using the following components.

1. Alert
2. Button
3. Card
4. Cascader
5. Chart
6. Checkbox
7. Collapse
8. Color
9. Data Grid
10. Date
11. Dialog
12. Divider
13. Editor
14. Grid
15. Group
16. HTML
17. I-Frame
18. Inline
19. Input
20. Link
21. Number
22. Page Layout
23. Pagination
24. Portal
25. Radio
26. Rate
27. Select
28. Slider
29. Steps
30. Sub-Form
31. Sub-Form+
32. Switch
33. Table
34. Tabs
35. Text Area
36. Text
37. Time
38. Transfer
39. Tree-Select
40. WebPhone

### Steps to use Components in the Page Builder

1. Create an Application. [Click here](https://bani-appsection--connexcs-docs.netlify.app/apps/architecture/app/#step-to-create-an-app) for creating an Application.

2. Select the created application from the dropdown.

3. After selecting the app it shows a `+` on the right side which is a drop down list, select Page Builder.

<img src= "/apps/img/page1.png" width="400" style="border: 2px solid #4472C4; border-radius: 8px;">

4.Enter the **Name** and **Title** of the Page Builder. Select the **App** for the Page Builder. Click `Save`.

<img src= "/apps/img/page2.png" width="300" style="border: 2px solid #4472C4; border-radius: 8px;">

5.The created **Page Builder** will be visible on the IDE panel under **Page Builder**. Click on the created Page Builder (test12).

<img src= "/apps/img/page3.png" width="300" style="border: 2px solid #4472C4; border-radius: 8px;">

6.Click on the created page builder, it shows with page builder sections where you can **Drag and Drop** the components from the left navigation (Layout).

<img src= "/apps/img/pb2.png" style="border: 2px solid #4472C4; border-radius: 8px;">
