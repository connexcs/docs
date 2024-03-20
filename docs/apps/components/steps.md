# Steps

## Description

The **Steps** component, guides users through a complex process by breaking it down into smaller, manageable stages.

It serves as a visual and functional indicator of progress, improving user experience and data collection.

<img src= "/apps/components/img/steps1.png">

## Use Case

1. Improved user experience
2. Reduced errors
3. Increased data quality
4. Easy Checkout processes
5. Multi-page questionnaires

### Interactivity

1. **Skippable steps**: Provide options for users to skip optional steps based on their answers or pre-filled information, saving them time and effort.
2. **Jump-to options**: Enable users to easily jump back and forth between previously completed steps for review or edits, offering flexibility and control.

## API

### Events

| **Name**| **Description**|
|---------|----------------|
| `onChange (element)`| The onChange event occurs when the value of a field is changed|

### Methods

| **Name**| **Description**|**Parameters**|
----------|----------------|--------------|
|`this.addClassName`|Add style class to a form item|`(fields: String `&#124;`String[], className: String)`|
|`this.removeClassName`|Remove style class from a form item|`(fields: String `&#124;`String[], className: String)`|
|`this.getComponent`|Returns a component whose id has been passed as a parameter|`(component_ID: String) : Object`|
|`this.getValues`|Gets the current values of all fields change|`() : Object`|
|`this.hide`|Hides the field|`(fields: String`&#124;`String[])`|
|`this.show`|Displays the field|`(fields: String`&#124;`String[])`|
|`this.getValue`|Get A Value From a component|`(fieldName: String)`|
|`this.setData`|Set the data in the field. The Value object should be of type { componentId: componentValue }|`(Value: Object)`|

!!! Info
    1. The show() and hide() methods can also be used to control the visibility of a step component in response to user input.
    2. **Fields** refers to a **component ID** or a **list of component IDs**. You can fetch the ID from the **Component Attribute** panel in the Page Builder.
    3. Before using **this.show(fields)**, make sure the component is **hidden**. This can be done using **this.hide(fields)** or by **enabling** the **Hidden checkbox** in the Component Attribute panel.

#### Steps to use the methods for the Page Builder components

1. Go to Form Attribute :material-menu-right: Action Panel :material-menu-right: Setting :material-menu-right: (Mounted | refresh | click 'Add action').
2. Write the method/code as shown in the **Example** below.
3. Click on `Save`.
4. On the main screen click on `Save` again.
5. Click on `Preview` to see the code in action.
<img src= "/apps/components/img/steps22.png">

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
            this.addClassName('steps_2bpjtc5m', 'abc')
            ```

    2. `this.removeClassName(fields, className)`
        ```js
        this.removeClassName('steps_2bpjtc5m', 'abc')
        ```
    
    3. `this.getValues()`
        ```js
        var data = this.getValues();
        console.log(data);
        ```
    
    4. `this.hide(fields)`
        ```js
        var fields= ['steps_2bpjtc5m']
        this.hide(fields)
        ```
    
    5. `this.show(fields)`
        ```js
        var fields= ['steps_2bpjtc5m']
        this.show(fields)
        ```
    
    6. `this.disable(['fields'])`
        ```js
        this.disable(['steps_2bpjtc5m'])
        ```
    
    7. `this.enable(['fields'])`
        ```js
        this.enable(['steps_2bpjtc5m'])
        ```
    
    8.  `this.getValue('fieldName')`
        ```js
        var stepname = this.getValue('steps_2bpjtc5m');
        console.log('getValue', stepname);
        ```
    
    9.  `this.setData(Value)`
        ```js
        this.setData(
         {
         "steps_2bpjtc5m": "2023-11-30",}
        );
        ```
    
    10.  `this.getComponent('component_ID')`
        ```js
        var stepname = this.getComponent('steps_2bpjtc5m');
        console.log('getComponent', stepname);
        ```

## Config

| **Name**|**Description**|**Icon**|
|---------|---------------|--------|
|**ID**| The step component's unique identifier|<img src= "/apps/components/img/input_id.png">|
|**Name**| [**Optional**] The display name of the Steps field|<img src= "/apps/components/img/checkbox_name.png">|
|**Width**| [**Optional**] Width of the field|<img src= "/apps/components/img/input_width.png">|
|**Label Width**|Width of the label associated with an input field. It determines the horizontal space occupied by the label text|<img src= "/apps/components/img/input_labelwidth1.png">|
|**Label Wrap**| If the label is longer than the allowed width the text will continue on another line|<img src= "/apps/components/img/input_labelwrap1.png">|
|**Hide Label**| Hides the label on the form|<img src= "/apps/components/img/input_hidelabel.png">|
|**Step Options**|**Static Data**: Enter your own step number and description.<br> **Data Source**: Dynamic data are options fetched as needed from sources like databases or APIs. Steps can also e generated from external data source.|<img src= "/apps/components/img/step_static.png"> <br> <img src= "/apps/components/img/step_datasourece.png">|
|**Display Direction**|Arrangement of Steps either **Horizontally** or **Vertically**|<img src= "/apps/components/img/step_displaydirection.png">|
|**Status of current step**|Choose the status of the current step from **wait**, **process**, **finish**, **error** or **success**|<img src= "/apps/components/img/step_statuscurrent.png">|  
|**Status of end step**|Choose the status of the end step from **wait**, **process**, **finish**, **error** or **success**|<img src= "/apps/components/img/step_statusend.png">|
|**Center title and description**|Enable this option to make the title and description centrally aligned |<img src= "/apps/components/img/step_statusend.png">|
|**Simple Theme**| Toggle this button to switch between themes|<img src= "/apps/components/img/step_simple.png">|
|**Custom Class**| An HTML class attribute which allows further customisation [See Form Attribute > Style Sheets](https://bani-appsection--connexcs-docs.netlify.app/apps/page-builder/#form-attribute)|<img src= "/apps/components/img/input_customclass.png">|
|**Attribute Action**|Enable **Data Binding** to connect the data to UI. <br> Enable **Hidden** action to hide the field.|<img src= "/apps/components/img/step_attributeaction.png">|

## First time User?

If you are using the Page Builder components on the ConnexCS platform for the first time, we request you to use our guide on <a href="https://bani-appsection--connexcs-docs.netlify.app/apps/page-builder/#steps-to-use-components-in-the-page-builder" target="_blank">steps to use the Components</a>.