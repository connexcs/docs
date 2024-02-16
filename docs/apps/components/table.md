# Table

## Description

The **Table** component isn't just about presenting data in neat rows and columns.

It can be a powerful tool for enhancing user experience, streamlining data entry, and even adding a touch of visual appeal to your forms.

Tables provide a structured format for organizing related data within a form. Users can easily scan information, compare options, and make informed choices.

<img src= "/apps/components/img/table.png">

## Use Case

1. Structure and Flexibility
2. Enhanced User Experience
3. Streamlined Data Entry

### Interactivity

1. Beyond static data display, tables can incorporate interactive elements like checkboxes, dropdown menus, and input fields directly within cells, streamlining data entry and eliminating the need for multiple form sections.
2. Integration with buttons or actions can enable bulk editing, selection, or removal of entries within the table, saving users time and effort.
3. Integrating interactive elements like drag-and-drop reordering or row customization can increase user engagement and make data manipulation more intuitive.
4. Interactive Data Entry

## API

### Methods

| **Name**| **Description**|**Parameters**|
|---------|----------------|--------------|
|`this.addClassName`|Add style class to a form item|`(fields: String`&#124;`String[], className: String)`|
|`this.removeClassName`|Remove style class from a form item|`(fields: String`&#124;`String[], className: String)`|
|`this.getComponent`|Returns a component whose id has been passed as a parameter|`(component_ID: String) : Object`|
|`this.hide`|Hides the field|`(fields: String`&#124;`String[])`|
|`this.show`|Displays the field|`(fields: String`&#124;`String[])`|

!!! Info
    1. The show() and hide() methods can also be used to control the visibility of a table in response to user input.
    2. **Fields** refers to a **component ID** or a **list of component IDs**. You can fetch the ID from the **Component Attribute** panel in the Page Builder.
    3. Before using **this.show(fields)**, make sure the component is **hidden**. This can be done using **this.hide(fields)** or by **enabling** the **Hidden checkbox** in the Component Attribute panel.

#### Steps to use the methods for the Page Builder components

1. Go to Form Attribute :material-menu-right: Action Panel :material-menu-right: Setting :material-menu-right: (Mounted | refresh | click 'Add action').
2. Write the method/code as shown in the **Example** below.
3. Click on `Save`.
4. On the main screen click on `Save` again.
5. Click on `Preview` to see the code in action.
<img src= "/apps/components/img/table1.png">

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
            this.addClassName('report_eahnplzw', 'abc')
            ```

    2. `this.removeClassName(fields, className)`
        ```js
        this.removeClassName('report_eahnplzw', 'abc')
        ```
    
    3. `this.hide(fields)`
        ```js
        var fields= ['report_eahnplzw']
        this.hide(fields)
        ```
    
    4. `this.show(fields)`
        ```js
        var fields= ['report_eahnplzw']
        this.show(fields)
        ```
    
    5. `this.disable(['fields'])`
        ```js
        this.disable(['report_eahnplzw'])
        ```
    
    6. `this.enable(['fields'])`
        ```js
        this.enable(['report_eahnplzw'])
        ```

    6.  `this.getComponent('component_ID')`
        ```js
        var reportname = this.getComponent('report_eahnplzw');
        console.log('getComponent', reportname);
        ```

!!! info Add multiple classes
    Use the following syntax to add multiple classes to a component:
    ```js
    this.addClassName('componentID', 'class1', 'class2')
    ```

## Config

| **Name**|**Description**|**Icon**|
|---------|---------------|--------|
|**ID**| The table component's unique identifier|<img src= "/apps/components/img/input_id.png">|
|**Width**| [**Optional**] Width of the field|<img src= "/apps/components/img/input_width.png">|
|**Border Width**|Choose the width of the table|<img src= "/apps/components/img/table_border.png">|
|**Border Color**|Choose the color of the table|<img src= "/apps/components/img/table_color.png">|
|**Custom Class**| An HTML class attribute which allows further customisation [See Form Attribute > Style Sheets](https://bani-appsection--connexcs-docs.netlify.app/apps/page-builder/#form-attribute)|<img src= "/apps/components/img/input_customclass.png">|
|**Attribute Action**|Enable **Hidden** action to hide the field|<img src= "/apps/components/img/alert_arrtibuteaction.png">|

## First time User?

If you are using the Page Builder components on the ConnexCS platform for the first time, we request you to use our guide on <a href="https://bani-appsection--connexcs-docs.netlify.app/apps/page-builder/#steps-to-use-components-in-the-page-builder" target="_blank">steps to use the Components</a>.