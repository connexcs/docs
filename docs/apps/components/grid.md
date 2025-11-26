# Grid

---
**Document Metadata**
<br>**Category**: Applications Platform / UI Components — Grid Component</br>
**Audience**: Developers, Engineers, UI Designers, Data & Form Builders
<br>**Difficulty**: Intermediate</br>
**Time Required**: Approximately 15–25 minutes
<br>**Prerequisites**: Access to the ConnexCS Apps IDE → Page Builder, familiarity with form & UI design, basic understanding of tabular data and form-based layouts</br>
**Related Topics**: [Page Builder – Layout & Component Usage](https://docs.connexcs.com/apps/page-builder/)
<br>**Next Steps**: Add Grid for layout → configure rows/columns with components → use API for dynamic control → test responsiveness.</br>

---

## Description

A **Grid** component in a form is a UI element that allows you to display and organize data in a tabular format within a form.

It typically consists of a set of rows and columns, each containing a specific data element or input field.

Grid components are commonly used to present structured data in a clear and organized manner, making it easier for users to understand and interact with the form.

<img src= "/apps/components/img/grid.png" style="border: 2px solid #4472C4; border-radius: 8px;">

## Use Case

1. **Data Organization**
2. **Visual Representation**
3. **User Input Management**
4. **Responsive Layout**

Examples may include:

1. Data Validation
2. Product Order Forms
3. Employee Management Forms
4. Inventory Management Forms
5. Data Collection Forms

## API

### Methods

| **Name**| **Description**|**Parameters**|
|---------|----------------|--------------|
|`this.addClassName`|Add style class to a form item|`(fields: String`&#124;`String[], className: String)`|
|`this.removeClassName`|Remove style class from a form item|`(fields: String`&#124;`String[], className: String)`|
|`this.getComponent`|Returns a component whose id has been passed as a parameter|`(component_ID: String) : Object)`|
|`this.hide`|Hides the field|`(fields: String`&#124;`String[])`|
|`this.show`|Displays the field|`(fields: String`&#124;`String[])`|
|`this.getValues`|Gets the current values of all fields|`() : Object`|

!!! Info
    1. The show() and hide() methods can also be used to control the visibility of the grid in response to user input.
    2. **Fields** refers to a **component ID** or a **list of component IDs**. You can fetch the ID from the **Component Attribute** panel in the Page Builder.
    3. Before using **this.show(fields)**, make sure the component is **hidden**. This can be done using **this.hide(fields)** or by **enabling** the **Hidden checkbox** in the Component Attribute panel.

#### Steps to use the methods for the Page Builder components

1. Go to Form Attribute :material-menu-right: Action Panel :material-menu-right: Setting :material-menu-right: (Mounted | refresh | click 'Add action').
2. Write the method/code as shown in the **Example** below.
3. Click on `Save`.
4. On the main screen click on `Save` again.
5. Click on `Preview` to see the code in action.
<img src= "/apps/components/img/grid2.png" style="border: 2px solid #4472C4; border-radius: 8px;">

!!! Example
    1. `this.addClassName(fields, className)`
          * Go to Form Attribute :material-menu-right: Style Sheets :material-menu-right: add the class
            ```
            .abc{ // abc is the class name
            background-color: red;
            }
            ```
          * Follow the steps mentioned above, under Steps to use the methods for the Page Builder components
          * ```
            this.addClassName('grid_th1wozzk', 'abc')
            ```

    2. `this.removeClassName(fields, className)`
        ```js linenums="1"
        this.removeClassName('grid_th1wozzk', 'abc')
        
        ```
    
    3. `this.hide(fields)`
        ```js linenums="1"
        var fields= ['grid_th1wozzk']
        this.hide(fields)
        ```
    
    4. `this.show(fields)`
        ```js linenums="1"
        var fields= ['grid_th1wozzk']
        this.show(fields)
        ```
    
    5. `this.getComponent('component_ID')`
        ```js linenums="1"
        var gridname = this.getComponent('grid_th1wozzk');
        console.log('getComponent', gridname);
        ```
    
    6.  `this.getValues()`
        ```js linenums="1"
        var data = this.getValues();
        console.log(data);
        ``` 

!!! info Add multiple classes
    Use the following syntax to add multiple classes to a component:
    ```js linenums="1"
    this.addClassName('componentID', 'class1', 'class2')
    ```

## Config

| **Name**|**Description**|**Icon**|
|---------|---------------|--------|
|**ID**| The grid component's unique identifier |<img src= "/apps/components/img/input_id.png">|
|**Grid Spacing**| [**Optional**] Space between various components inside the grid|<img src= "/apps/components/img/grid_gridspacing.png">|
|**Flex Layout**| [**Optional**] Allows flexibility to arrange the various components inside the grid|<img src= "/apps/components/img/grid_flexlayout.png">|
|**Horizontal Arrangement**|Select from various options **Start**, **End**, **Center**, **Space Around**, **Space Between** for horizontal arrangement of the components inside the grid|<img src= "/apps/components/img/grid_horizontal.png">|
|**Vertical Arrangement**|Select from various options **Top**, **Middle**, **Bottom** for vertical arrangement of the components inside the grid|<img src= "/apps/components/img/grid_vertical4.png">|
|**Custom Class**| An HTML class attribute which allows further customisation [See Form Attribute > Style Sheets](https://docs.connexcs.com/apps/page-builder/#form-attribute)|<img src= "/apps/components/img/input_customclass.png">|
|**Attribute Action**|Enable **Hidden** action to hide the field|<img src= "/apps/components/img/alert_arrtibuteaction.png">|

## First time User?

If you are using the Page Builder components on the ConnexCS platform for the first time, we request you to use our guide on <a href="https://docs.connexcs.com/apps/page-builder/#steps-to-use-components-in-the-page-builder" target="_blank">steps to use the Components</a>.