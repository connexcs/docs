# Input

## Description

The input box specifies an input field where the user can enter data.

The input field also support client-side validation.

<img src= "/apps/components/img/input.png">

## Use Case

The input box is a core component in allow information to be entered into the system, as well as displaying existing information.

The input box can also be dragged into other components including: [**Sub-Form**](https://bani-appsection--connexcs-docs.netlify.app/apps/components/sub-form/) and [**Sub-Form+**](https://bani-appsection--connexcs-docs.netlify.app/apps/components/sub-form%2B/).

### Interactivity

**Interactivity** is the ability of a web page or application to respond to user input.

The're a number of ways to add interactivity to **Input boxes**.

Some of the most common methods include:

1. **Change events**: Change events are fired when the value of an input box is changed.
   You can use change events to perform a variety of actions, such as:
    * Validating the data entered into the input box
    * Displaying a message to the user
    * Enabling or disabling other input boxes on the form
    * Performing a search
    * Submitting the form

2. **Focus and blur events**: **Focus events** are fired when an input box receives focus. **Blur events** are fired when an input box loses focus.
You can use focus and blur events to perform a variety of actions, such as:
    *Highlighting the input box when it receives focus
    Changing the cursor style when the input box receives focus
    Clearing the value of the input box when it loses focus

## API

### Events

| **Name**| **Description**|
|----------------------|---------------------------------------------------------------------|
| `onChange (element)`| The onChange event occurs when the value of a field is changed|
| `onFocus (element)`| The onfocus event occurs when a field gets focus|
| `onBlur (element)`| The onblur event occurs when a field loses focus|

### Methods

| **Name**| **Description**|**Parameters**|
|----------------------|---------------------------------------------------------------------|----|
|`this.addClassName`|Add style class to page item|`(fields: String(componentID), String[]; className: String)`|
|`this.removeClassName`|Remove page item style|`(fields: String(componentID), String[]; className: String)`|
|`this.getComponent`|Returns a component whose id has been passed as a parameter|`(component_ID: String(componentID), String[]; Object: Object)`|
|`this.getValues()`|Get the values of all fields when values change|`(Object: Object)`|
|`this.hide(fields)`|Hides the field|`(fields: String(componentID)`|
|`this.show(fields)`|Displays the field|`(fields: String(componentID)`|
| `this.disable(fields)`| Disable input field from user interaction|`(fields: String(componentID), String[])`|
|`this.setData`|Set the data in the field|`(Value: String, String[])`|
|`this.getValue`|Get A Value From a component|`(fieldName String(componentID)`|

!!! Info
    1. The show() and hide() methods can also be used to control the visibility of an alert in response to user input.
    2. **fields** refer to the component **ID**. You can fetch the ID from the **Component Attribute** panel in the Page Builder.
    3. For using **this.show(fields)** enable the **Hidden** check-box in the **Component Attribute** panel.

#### Steps to place/use the methods for components of the Page Builder"

1. Go to Form Attribute :material-menu-right: Action Panel :material-menu-right: Setting :material-menu-right: (Mounted | refresh | click 'Add action')
2. Write the method/code as shown in the **Example** below.
3. Click on `Save`.
4. On the main screen click on `Save` again.
5. Click on `Preview` to see the code in action.
<img src= "/apps/components/img/alert1.png">

!!! Example
    1. `this.addClassName(fields, className)`
       * Go to Form Attribute :material-menu-right: Style Sheets :material-menu-right: add the class
        ```js
        .abc{ // abc is the class name
        background-color: red;
        }
        ```
       * Follow the steps in the above **Note**
       * ```js
         this.addClassName('input_h633hysc', 'abc')
         ```

    2. `this.removeClassName(fields, className)`
        ```js
        this.removeClassName('input_h633hysc', 'abc')
        ```
    
    3. `this.getValue(fieldName)`
        ```js
        var inputname = this.getValue('input_h633hysc');
        console.log('getValue', inputname);
        ```
    4. `this.getValues(fieldName)`
        ```js
        var data = this.getValues();
        console.log(data);
        ```
    5. `this.hide(fields)`
        ```js
        var fields= ['input_h633hysc']
        this.hide(fields)
        ```
    6. `this.show(fields)`
        ```js
        var fields= ['input_h633hysc']
        this.show(fields)
        ```
    7. `this.disable(['fields'])`
        ```js
        this.disable(['input_h633hysc'])
        ```
    8.`this.setData(Value)`
        ```js
        this.setData(
         {
         "input_h633hysc": "Hello",}
        );
        ```
    9.  `this.getComponent('component_ID')`
        ```js
        var inputname = this.getComponent('input_h633hysc');
        console.log('getComponent',inputname);

## Config

| **Name**|**Description**|**Icon**|
|---------------|----------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|
|**ID**| Input's unique identifier |<img src= "/apps/components/img/input_id.png">|
|**Name**| [**Optional**] The display name of the input field|<img src= "/apps/components/img/input_name.png">|
|**Width**| [**Optional**] Width of the field|<img src= "/apps/components/img/input_width.png">|
|**Label Width**|Width of the label associated with an input field. It determines the horizontal space occupied by the label text|<img src= "/apps/components/img/input_labelwidth1.png">|
|**Label Wrap**| If the label is longer than the allowed width the text will continue on another line|<img src= "/apps/components/img/input_labelwrap1.png">|
|**Hide Label**| Hides the label on the form|<img src= "/apps/components/img/input_hidelabel.png">|
|**Placeholder**| The short hint is displayed in the input field before the user enters a value|<img src= "/apps/components/img/input_placeholder.png">|
|**Text Prompt**| A description to aid the user when completing the field|<img src= "/apps/components/img/input_textprompt.png">|
|**Max Length**| Limit the amount of characters the field supports|<img src= "/apps/components/img/input_maxlength.png">|
|**Default Value**| The default value which is filled in the field before the user changes it|<img src= "/apps/components/img/input_defaultvalue.png">|
|**Custom Class**| An HTML class attribute which allows further customisation **[See Form Attribute > Style Sheets**](**add anchor text**)|<img src= "/apps/components/img/input_customclass.png">|
|**Attribute Action**|Enable **Data Binding** to connect the data to UI. <br> Enable **Hidden** to action to hide the field. <br> Enable **Disabled** action to make the field unsuable. <br>Enable **Show Clear button** action to make the clear button visible. <br> Enable **Show Password** action make the password visible. <br>Enable **Show word count** action make the word count visible|<img src= "/apps/components/img/input_attributeaction.png">|

### Validation

Form validation is the process of checking the data entered into a form to ensure that it's valid and complete.

This helps to prevent users from submitting forms with invalid data, which can cause problems for the application that's processing the form.

Form validation can be performed using a variety of methods, including:

| **Name**| **Description**|
|----------------------|---------------------------------------------------------------------|
| **Required**| Single line of text|
|**Select**|Several common type checks are provided in single-line text boxes such as string, URL, mailbox, etc.|
| **Regular expressions**|Used to match patterns in text. They can be used to validate the format of data, such as email addresses, phone numbers, and dates|
|**Custom Validation Rules**|(rule, value, callback) => {|
||**rule**: Verification rule, you can view the verification configuration information through this parameter; rule.fieldcan get the field identifier of the current verification|
||**value**: Value of the current field|
||**callback**: Callback function (must be called) upon completion of validation; **callback('Error message')/ callback(new Error('Error message'))**. These are two ways to return an error message|

<img src= "/apps/components/img/input_validation.png">

!!! Info
    1. **Regular expressions** should be wrapped with //, as in:/^1[3456789]\d{9}$/"
    2. The **callback()function** is also called to verify success in the custom checkup method.

## First time User?

If you are using the Page Builder components on the ConnexCS platform first time, we request you to use our guide on <a href="https://bani-appsection--connexcs-docs.netlify.app/apps/page-builder/#steps-to-use-components-in-the-page-builder" target="_blank">steps to use the Components</a>.