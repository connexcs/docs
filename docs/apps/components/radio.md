# Radio

## Description

A **Radio** component refers to a group of circular buttons where users can choose only one option at a time.

It's like a set of switches where only one can be "on" at any given moment.

<img src= "/apps/components/img/radio.png" style="border: 2px solid #4472C4; border-radius: 8px;">

## Use Case

1. Choosing a payment method (credit card, debit card, PayPal)
2. Setting language preferences (English, Spanish, French)
3. Picking a subscription tier (basic, premium, enterprise)
4. Yes/No questions
5. Agree/Disagree statements
6. Satisfied/Unsatisfied feedback ratings
7. Male/Female/Other gender identification
8. Selecting product categories

### Interactivity

1. **Conditional formatting**: Change the button appearance based on user input or selected options. For example, disable unavailable options or highlight relevant choices based on other form fields.
2. **Customizable labels**: Allow users to edit or personalize the labels of radio buttons.
3. **Tooltips**: Provide informative pop-up text explaining the details or consequences of choosing each option, especially for complex decisions.

## API

### Events

| **Name**| **Description**|
|---------|----------------|
| `onChange (element)`| The onChange event occurs when the value of a field is changed|

### Methods

| **Name**| **Description**|**Parameters**|
|---------|----------------|--------------|
|`this.addClassName`|Add style class to a form item|`(fields: String`&#124;`String[], className: String)`|
|`this.removeClassName`|Remove style class from a form item|`(fields: String`&#124;`String[], className: String)`|
|`this.getComponent`|Returns a component whose id has been passed as a parameter|`(component_ID: String) : Object)`|
|`this.getValues`|Gets the current values of all fields|`() : Object`|
|`this.hide`|Hides the field|`(fields: String`&#124;`String[])`|
|`this.show`|Displays the field|`(fields: String`&#124;`String[])`|
|`this.disable`| Disable radio field from user interaction|`(fields: String`&#124;`String[])`|
|`this.enable`| Enable radio field from user interaction|`(fields: String`&#124;`String[])`|
|`this.getValue`|Get A Value From a component|`(fieldName: String)`|
|`this.setData`|Set the data in the field. The Value object should be of type { componentId: componentValue }|`(Value: Object)`|

!!! Info
    1. The show() and hide() methods can also be used to control the visibility of the radio component in response to user input.
    2. **Fields** refers to a **component ID** or a **list of component IDs**. You can fetch the ID from the **Component Attribute** panel in the Page Builder.
    3. Before using **this.show(fields)**, make sure the component is **hidden**. This can be done using **this.hide(fields)** or by **enabling** the **Hidden checkbox** in the Component Attribute panel.
    4. Before using **this.enable(fields)**, make sure the component is **disabled**. This can be done using **this.disable(fields)** or by **enabling** the **Disabled checkbox** in the Component Attribute panel.

#### Steps to use the methods for the Page Builder components

1. Go to Form Attribute :material-menu-right: Action Panel :material-menu-right: Setting :material-menu-right: (Mounted | refresh | click 'Add action').
2. Write the method/code as shown in the **Example** below.
3. Click on `Save`.
4. On the main screen click on `Save` again.
5. Click on `Preview` to see the code in action.
<img src= "/apps/components/img/radio2.png" style="border: 2px solid #4472C4; border-radius: 8px;">

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
            this.addClassName('radio_mv3o2rpn', 'abc')
            ```

    2. `this.removeClassName(fields, className)`
        ```js linenums="1"
        this.removeClassName('radio_mv3o2rpn', 'abc')
        ```
    
    3. `this.getValues()`
        ```js linenums="1"
        var data = this.getValues();
        console.log(data);
        ```
    
    4. `this.hide(fields)`
        ```js linenums="1"
        var fields= ['radio_mv3o2rpn']
        this.hide(fields)
        ```
    
    5. `this.show(fields)`
        ```js linenums="1"
        var fields= ['radio_mv3o2rpn']
        this.show(fields)
        ```
    
    6. `this.disable(['fields'])`
        ```js linenums="1"
        this.disable(['radio_mv3o2rpn'])
        ```
    
    7. `this.enable(['fields'])`
        ```js linenums="1"
        this.enable(['radio_mv3o2rpn'])
        ```
    
    8.  `this.getValue('fieldName')`
        ```js linenums="1"
        var radioname = this.getValue('radio_mv3o2rpn');
        console.log('getValue', radioname);
        ```

    9.  `this.getComponent('component_ID')`
        ```js linenums="1"
        var radioname = this.getComponent('radio_mv3o2rpn');
        console.log('getComponent', radioname);
        ```

    10.  `this.setData(Value)`
        ```js linenums="1"
        this.setData(
         {"radio_mv3o2rpn": "Option 3",});
        ```

!!! info Add multiple classes
    Use the following syntax to add multiple classes to a component:
    ```js linenums="1"
    this.addClassName('componentID', 'class1', 'class2')
    ```

## Config

| **Name**|**Description**|**Icon**|
|---------|---------------|--------|
|**ID**| The radio component's unique identifier which is used to access the field by the API and the key of the field when the form is saved|<img src= "/apps/components/img/input_id.png">|
|**Name**| [**Optional**] The display name of the radio field|<img src= "/apps/components/img/checkbox_name.png">|
|**Width**| [**Optional**] Width of the field|<img src= "/apps/components/img/input_width.png">|
|**Label Width**|Width of the label associated with an input field. It determines the horizontal space occupied by the label text|<img src= "/apps/components/img/input_labelwidth1.png">|
|**Label Wrap**| If the label is longer than the allowed width the text will continue on another line|<img src= "/apps/components/img/input_labelwrap1.png">|
|**Hide Label**| Hides the label on the form|<img src= "/apps/components/img/input_hidelabel.png">|
|**Text Prompt**| A description to aid the user when completing the field|<img src= "/apps/components/img/input_textprompt.png">|
|**Layout**|**Block**: Occupy the entire width of their container element.<br> **Inline**: Only occupy the space they need horizontally|<img src= "/apps/components/img/radio_layout.png">|
|**Option**|Choose either **Static** or **Dynamic** way of adding data to the options of the Radio <br><br>**Static data** refers to a fixed set of options that are pre-defined and loaded into the radio at the time of initialization</br></br> **Dynamic data** are options fetched as needed from sources like databases or APIs. The radio updates choices based on user selections. You select from **Data source** which refers to the origin of the data; **Function** which refers to the code that manipulates the data, and **Assigned Value** which refers to the specific value stored or associated with a data element|<img src= "/apps/components/img/checkbox_static.png"> <img src= "/apps/components/img/checkbox_dynamic.png">|
|**Custom Class**| An HTML class attribute which allows further customisation [See Form Attribute > Style Sheets](https://docs.connexcs.com/apps/page-builder/#form-attribute)|<img src= "/apps/components/img/input_customclass.png">|
|**Attribute Action**|Enable **Data Binding** to connect the data to UI<br>Enable **Hidden** action to hide the field</br>Enable **Disabled** action to make the field unusable|<img src= "/apps/components/img/checkbox_attributeaction.png">|
|**Action Settings**|Click on the drop-down to select the pre-defined methods you wish to apply to your component. In this case, you can choose either **mounted** or **refresh** for `onChange`|<img src= "/apps/components/img/radio_ac.png">|

### Validation

Form validation is the process of checking the data entered into a form to ensure that it's valid and complete.

This helps to prevent users from submitting forms with invalid data, which can cause problems for the application that's processing the form.

Form validation can be performed using a variety of methods, including:

| **Name**| **Description**|
|---------|----------------|
| **Required**| If enabled, then the field value can't be empty, otherwise an error message is emitted|
|**Custom Validation Rules**|(rule, value, callback) => {|
||**rule**: Verification rule, you can view the verification configuration information through this parameter; **rule.field** can get the field identifier of the current verification|
||**value**: Value of the current field|
||**callback**: Callback function (must be called) upon completion of validation; **callback('Error message')/ callback(new Error('Error message'))**. These are two ways to return an error message|

<img src= "/apps/components/img/cascader_validation.png" width= "300" style="border: 2px solid #4472C4; border-radius: 8px;">

!!! Info
    1. The **callback() function** is also called to verify success in the custom validation method.

## First time User?

If you are using the Page Builder components on the ConnexCS platform for the first time, we request you to use our guide on <a href="https://docs.connexcs.com/apps/page-builder/#steps-to-use-components-in-the-page-builder" target="_blank">steps to use the Components</a>.