# Page Builder

## Config

### API

{{ external_markdown('https://cdn.cnxcdn.com/cnxapp/docs/api.md', '') }}

!!! Info 
    Form Attribute :material-menu-right: Datasource :material-menu-right: ScriptForge :material-menu-right: Websocket
    WebSocket enables you to create and manage WebSocket connections within your application. WebSockets are a powerful technology for establishing persistent, two-way communication channels between a web browser and a server, enabling real-time data exchange without the need for constant polling.
    **Example**:
    ```js
    const socket = this.scriptForge('myScriptForge')//creates a new WebSocket connection using the scriptForge function
    socket.send({hello: 'World'}) // sending a message
    socket.on('error', console.log) // handling errors
    socket.on('data', data => { // receiving data
        console.log('New Data In', data)
    })
    socket.close(); // closing the socket

!!! Info
    Form Attribute :material-menu-right: Datasource :material-menu-right: Stores
    Stores accesses Datasource form the Control Panel only.

!!! Info
    Form Attribute :material-menu-right: Datasource :material-menu-right: Databases
    Stores accesses Datasource form the Control Panel only.

!!! Info
    Form Attribute :material-menu-right: Datasource :material-menu-right: Saved Query
    Using the Page Builder interface we can run a complicated query (runs behind the scenes) and it returns the data. the Saved Queries can be accssed via ScriptForge.
    1. A query can be ran against different endpoints, (CDR, Primary Database, G3 Analytics), so we will need a selector.
    2. From the IDE perspective, we should be able to run an ad-hoc query, e.g we shouldn't need to create a new item and save it before we can run it.
    3. There should be a section for variables to be filled in, for example: 
    SELECT * FROM customers WHERE customer_id = :customer_id
    :customer_id is the replacement syntax
    4. Then when we run the query it will automatically replace :customer_id with the value associated with that variable.
    5. When the query is saved (/api/cp/setup/query) you can run it /api/cp/setup/query/1234/run with POST or GET and pass the variable along with it. Then it will inject the variables into the saved query and execute it.
    6. This query will then be accessible from ScriptForge or via the Page-builder.

!!! Info
    Form Attribute :material-menu-right: Datasource :material-menu-right: External
    Access information externally.

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

<img src= "/apps/img/page1.png" width="400">

4.Enter the **Name** and **Title** of the Page Builder. Select the **App** for the Page Builder. Click `Save`.

<img src= "/apps/img/page2.png" width="300">

5.The created **Page Builder** will be visible on the IDE panel under **Page Builder**. Click on the created Page Builder (test12).

<img src= "/apps/img/page3.png" width="300">

6.Click on the created page builder, it shows with page builder sections where you can **Drag and Drop** the components from the left navigation (Layout).

<img src= "/apps/img/page4.png">

