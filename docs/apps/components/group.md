# Group

## Description

A **Group** component in form making is a UI element that allows you to logically group related form fields together.

It provides a visual and organizational structure to the form, making it easier for users to understand the relationships between different fields and navigate through the form.

<img src= "/apps/components/img/group.png">

## Use Case

1. Organize related form fields

2. Enhance visual hierarchy

3. Improve form navigation

4. Provide contextual feedback

Examples may include:

1. Grouping Personal Information
2. Organizing Address Details
3. Separating Contact Information
4. Grouping Conditional Fields
5. Encapsulating Optional Fields
6. Organizing Payment Information
7. Grouping Order Details
8. Separating Review and Submit Actions
9. Grouping Error Messages
10. Organizing Multi-Step Forms

## API

### Methods

| **Name**| **Description**|**Parameters**|
|---------|----------------|--------------|
|`this.addClassName`|Add style class to a form item|`(fields: String`&#124;`String[], className: String)`|
|`this.removeClassName`|Remove style class from a form item|`(fields: String`&#124;`String[], className: String)`|
|`this.getComponent`|Returns a component whose id has been passed as a parameter|`(component_ID: String) : Object`|
|`this.getValue`|Get A Value From a component|`(fieldName: String)`|
|`this.hide`|Hides the field|`(fields: String`&#124;`String[])`|
|`this.show`|Displays the field|`(fields: String`&#124;`String[])`|
|`this.setData`|Set the data in the field. The Value object should be of type { componentId: componentValue }|`(Value: Object)`|
|`this.getValues`|Gets the current values of all fields|`() : Object`|

!!! Info
    1. The show() and hide() methods can also be used to control the visibility of the group in response to user input.
    2. **Fields** refers to a **component ID** or a **list of component IDs**. You can fetch the ID from the **Component Attribute** panel in the Page Builder.
    3. Before using **this.show(fields)**, make sure the component is **hidden**. This can be done using **this.hide(fields)** or by **enabling** the **Hidden checkbox** in the Component Attribute panel.

#### Steps to use the methods for the Page Builder components

1. Go to Form Attribute :material-menu-right: Action Panel :material-menu-right: Setting :material-menu-right: (Mounted | refresh | click 'Add action').
2. Write the method/code as shown in the **Example** below.
3. Click on `Save`.
4. On the main screen click on `Save` again.
5. Click on `Preview` to see the code in action.
<img src= "/apps/components/img/group2.png">

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
            this.addClassName('group_j9o3pb2i', 'abc')
            ```

    2. `this.removeClassName(fields, className)`
        ```js linenums="1"
        this.removeClassName('group_j9o3pb2i', 'abc')
        ```
    
    3. `this.getValue(fieldName)`
        ```js linenums="1"
        var groupname = this.getValue('group_j9o3pb2i');
        console.log('getValue', groupname);
        ```

    4. `this.hide(fields)`
        ```js linenums="1"
        var fields= ['group_j9o3pb2i']
        this.hide(fields)
        ```
    5. `this.show(fields)`
        ```js linenums="1"
        var fields= ['group_j9o3pb2i']
        this.show(fields)
        ```
   
    6.  `this.getComponent('component_ID')`
        ```js linenums="1"
        var groupname = this.getComponent('group_j9o3pb2i');
        console.log('getComponent', groupname);
        ```
    
    7. `this.setData(Value)`
        ```js linenums="1"
        this.setData({
        group : {
        input: 'hello'
        }
        })
        ```

    8. `this.getValues()`
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
|**ID**| The group component's unique identifier|<img src= "/apps/components/img/input_id.png">|
|**Name**| [**Optional**] The display name of the grid|<img src= "/apps/components/img/checkbox_name.png">|
|**Width**| [**Optional**] Width of the field|<img src= "/apps/components/img/input_width.png">|
|**Label Width**|Width of the label associated with an input field. It determines the horizontal space occupied by the label text|<img src= "/apps/components/img/input_labelwidth1.png">|
|**Label Wrap**| If the label is longer than the allowed width the text will continue on another line|<img src= "/apps/components/img/input_labelwrap1.png">|
|**Hide Label**| Hides the label on the form|<img src= "/apps/components/img/input_hidelabel.png">|
|**Text Prompt**| A description to aid the user when completing the field|<img src= "/apps/components/img/input_textprompt.png">|
|**Custom Class**| An HTML class attribute which allows further customisation [See Form Attribute > Style Sheets](https://docs.connexcs.com/apps/page-builder/#form-attribute)|<img src= "/apps/components/img/input_customclass.png">|
|**Attribute Action**|Enable **Data Binding** to connect the data to UI. <br> Enable **Hidden** action to hide the field.|<img src= "/apps/components/img/group_attributionaction.png">|

### Validation

Form validation is the process of checking the data entered into a form to ensure that it's valid and complete.

This helps to prevent users from submitting forms with invalid data, which can cause problems for the application that's processing the form.

Form validation can be performed using a variety of methods, including:

| **Name**| **Description**|
|---------|----------------|
|**Custom Validation Rules**|(rule, value, callback) => {|
||**rule**: Verification rule, you can view the verification configuration information through this parameter; **rule.field** can get the field identifier of the current verification|

<img src= "/apps/components/img/group_validation.png">

## First time User?

If you are using the Page Builder components on the ConnexCS platform for the first time, we request you to use our guide on <a href="https://docs.connexcs.com/apps/page-builder/#steps-to-use-components-in-the-page-builder" target="_blank">steps to use the Components</a>.