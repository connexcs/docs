# Switch

## Description

A **Switch** component in a form is a visual and interactive element that users can toggle between two distinct states, typically labeled **on** and **off**.

It offers a clear and efficient way for users to select one of two mutually exclusive options within a form field.

<img src= "/apps/components/img/switch.png">

## Use Case

1. Enable/Disable features
2. Select preferences
3. Toggle visibility
4. Confirm binary choices
5. Control notifications
6. Marketing consent
7. Data sharing consent
8. Public/Private visibility
9. Subscription status
10. Content filtering
11. Automatic form submission
12. Form validation control
13. Additional form sections
14. Error correction confirmation
15. Password visibility

### Interactivity

1. Multi-state switches
2. Conditional interactions
3. Animated transitions

## API

### Events

| **Name**| **Description**|
|---------|----------------|
| `onChange (element)`| The onChange event occurs when the value of a field is changed|

### Methods

| **Name**| **Description**|**Parameters**|
|---------|----------------|--------------|
|`this.addClassName`|Add style class to a form item|`(fields: String, String[]; className: String)`|
|`this.removeClassName`|Remove style class from a form item|`(fields: String, String[]; className: String)`|
|`this.getComponent`|Returns a component whose id has been passed as a parameter|`(component_ID: String(), String[]; Object: Object)`|
|`this.getValues`|Get the values of all fields when values change|`Object`|
|`this.hide`|Hides the field|`(fields: String()`|
|`this.show`|Displays the field|`(fields: String()`|
| `this.disable`| Disable input field from user interaction|`(fields: String(), String[])`|
|`this.getValue`|Get A Value From a component|`(fieldName String()`|

!!! Info
    1. The show() and hide() methods can also be used to control the visibility of an alert in response to user input.
    2. **Fields** refers to a **component ID** or a **list of component IDs**. You can fetch the ID from the **Component Attribute** panel in the Page Builder.
    3. Before using **this.show(fields)**, make sure the component is **hidden**. This can be done using **this.hide(fields)** or by **enabling** the **Hidden checkbox** in the Component Attribute panel.

#### Steps to place/use the methods for components of the Page Builder

1. Go to Form Attribute :material-menu-right: Action Panel :material-menu-right: Setting :material-menu-right: (Mounted | refresh | click 'Add action')
2. Write the method/code as shown in the **Example** below.
3. Click on `Save`.
4. On the main screen click on `Save` again.
5. Click on `Preview` to see the code in action.
<img src= "/apps/components/img/check1.png">

!!! Example
    1. `this.addClassName(fields, className)`
          * Go to Form Attribute :material-menu-right: Style Sheets :material-menu-right: add the class
            ```
            .abc{ // abc is the class name
            background-color: red;
            }
            ```
          * Follow the steps mentioned above, under Steps to place/use the methods for components of the Page Builder
          * ```
            this.addClassName('switch_ornfn03c', 'abc')
            ```

    2. `this.removeClassName(fields, className)`
        ```js
        this.removeClassName('switch_ornfn03c', 'abc')
        ```
    
    3. `this.getValues(fieldName)`
        ```js
        var data = this.getValues();
        console.log(data);
        ```
    
    4. `this.hide(fields)`
        ```js
        var fields= ['switch_ornfn03c']
        this.hide(fields)
        ```

    5. `this.show(fields)`
        ```js
        var fields= ['switch_ornfn03c']
        this.show(fields)
        ```
        
    6. `this.disable(['fields'])`
        ```js
        this.disable(['switch_ornfn03c'])
        ```

    7.  `this.getValue('fieldName')`
        ```js
        var switchname = this.getValue('switch_ornfn03c');
        console.log('getValue', switchname);
        ```

    8.  `this.getComponent('component_ID')`
        ```js
        var switchname = this.getComponent('switch_ornfn03c');
        console.log('getComponent', switchname);
        ```

## Config

| **Name**|**Description**|**Icon**|
|---------|---------------|--------|
|**ID**| Switch's unique identifier|<img src= "/apps/components/img/input_id.png">|
|**Name**| [**Optional**] The display name of the switch field|<img src= "/apps/components/img/checkbox_name.png">|
|**Width**| [**Optional**] Width of the field|<img src= "/apps/components/img/input_width.png">|
|**Label Width**|Width of the label associated with an input field. It determines the horizontal space occupied by the label text|<img src= "/apps/components/img/input_labelwidth1.png">|
|**Label Wrap**| If the label is longer than the allowed width the text will continue on another line|<img src= "/apps/components/img/input_labelwrap1.png">|
|**Hide Label**| Hides the label on the form|<img src= "/apps/components/img/input_hidelabel.png">|
|**Text Prompt**| A description to aid the user when completing the field|<img src= "/apps/components/img/input_textprompt.png">|
|**Custom Class**| An HTML class attribute which allows further customisation [See Form Attribute > Style Sheets](https://bani-appsection--connexcs-docs.netlify.app/apps/page-builder/#form-attribute)|<img src= "/apps/components/img/input_customclass.png">|
|**Attribute Action**|Enable **Data Binding** to connect the data to UI. <br> Enable **Hidden** to action to hide the field. <br> Enable **Disabled** action to make the field unusable.|<img src= "/apps/components/img/switch_attributeaction.png">|

### Validation

Form validation is the process of checking the data entered into a form to ensure that it's valid and complete.

This helps to prevent users from submitting forms with invalid data, which can cause problems for the application that's processing the form.

Form validation can be performed using a variety of methods, including:

| **Name**| **Description**|
|---------|----------------|
| **Required**| Single line of text|
|**Custom Validation Rules**|(rule, value, callback) => {|
||**rule**: Verification rule, you can view the verification configuration information through this parameter; rule.fieldcan get the field identifier of the current verification|
||**value**: Value of the current field|
||**callback**: Callback function (must be called) upon completion of validation; **callback('Error message')/ callback(new Error('Error message'))**. These are two ways to return an error message|

<img src= "/apps/components/img/cascader_validation.png">

!!! Info
    1. The **callback()function** is also called to verify success in the custom checkup method.

## First time User?

If you are using the Page Builder components on the ConnexCS platform for the first time, we request you to use our guide on <a href="https://bani-appsection--connexcs-docs.netlify.app/apps/page-builder/#steps-to-use-components-in-the-page-builder" target="_blank">steps to use the Components</a>.