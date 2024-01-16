# Radio

## Description

A radio component refers to a group of circular buttons where users can choose only one option at a time.

It's like a set of switches where only one can be "on" at any given moment.

<img src= "/apps/components/img/radio.png">

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
|----------------------|---------------------------------------------------------------------|
| `onChange (element)`| The onChange event occurs when the value of a field is changed|

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

|**this.refreshFieldDataSource(field, args)**|Refresh the datasource data bound to the form field
|**this.getFieldDataSource**|Gets data from a datasource|

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
         this.addClassName('radio_mv3o2rpn', 'abc')
         ```

    2. `this.removeClassName(fields, className)`
        ```js
        this.removeClassName('radio_mv3o2rpn', 'abc')
        ```
    
    3. `this.getValues(fieldName)`
        ```js
        var data = this.getValues();
        console.log(data);
        ```
    
    4. `this.hide(fields)`
        ```js
        var fields= ['radio_mv3o2rpn']
        this.hide(fields)
        ```
    
    5. `this.show(fields)`
        ```js
        var fields= ['radio_mv3o2rpn']
        this.show(fields)
        ```
    
    6. `this.disable(['fields'])`
        ```js
        this.disable(['radio_mv3o2rpn'])
        ```
    
    7.`this.getValue('fieldName')`
        ```js
        var radioname = this.getValue('radio_mv3o2rpn');
        console.log('getValue',radioname);
        ```

    8.  `this.getComponent('component_ID')`
        ```js
        var radioname = this.getComponent('radio_mv3o2rpn');
        console.log('getComponent',radioname);

    9.`this.setData(Value)`
        ```js
        this.setData(
         {
         "radio_mv3o2rpn": "Option 3",}
        );
        ```

## Config

| **Name**|**Description**|**Icon**|
|---------------|----------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|
|**ID**| Radio's unique identifier which is used to access the field by the API and the key of the field when the form is saved|<img src= "/apps/components/img/input_id.png">|
|**Name**| [**Optional**] The display name of the radio field|<img src= "/apps/components/img/checkbox_name.png">|
|**Width**| [**Optional**] Width of the field|<img src= "/apps/components/img/input_width.png">|
|**Label Width**|Width of the label associated with an input field. It determines the horizontal space occupied by the label text|<img src= "/apps/components/img/input_labelwidth1.png">|
|**Label Wrap**| If the label is longer than the allowed width the text will continue on another line|<img src= "/apps/components/img/input_labelwrap1.png">|
|**Hide Label**| Hides the label on the form|<img src= "/apps/components/img/input_hidelabel.png">|
|**Text Prompt**| A description to aid the user when completing the field|<img src= "/apps/components/img/input_textprompt.png">|
|**Layout**|**Block**: Occupy the entire width of their container element.<br> **Inline**: Only occupy the space they need horizontally|<img src= "/apps/components/img/radio_layout.png">|
|**Option**|Choose either **Static** or **Dynamic** way of adding data to the options of the Radio <br><br>**Static data** refers to a fixed set of options that are predefined and loaded into the radio at the time of initialization</br></br> **Dynamic data** are options fetched as needed from sources like databases or APIs. The radio updates choices based on user selections. You select from **Data source** which refers to the origin of the data; **Function** which refers to the code that manipulates the data, and **Assigned Value** which refers to the specific value stored or associated with a data element|<img src= "/apps/components/img/checkbox_static.png"> <img src= "/apps/components/img/checkbox_dynamic.png">|
|**Custom Class**| An HTML class attribute which allows further customisation **[See Form Attribute > Style Sheets**](**add anchor text**)|<img src= "/apps/components/img/input_customclass.png">|
|**Attribute Action**|Enable **Data Binding** to connect the data to UI<br>Enable **Hidden** action to hide the field</br>Enable **Disabled** action to make the field unsuable|<img src= "/apps/components/img/checkbox_attributeaction.png">|

### Validation

Form validation is the process of checking the data entered into a form to ensure that it's valid and complete.

This helps to prevent users from submitting forms with invalid data, which can cause problems for the application that's processing the form.

Form validation can be performed using a variety of methods, including:

| **Name**| **Description**|
|----------------------|---------------------------------------------------------------------|
| **Required**| Single line of text|
|**Custom Validation Rules**|(rule, value, callback) => {|
||**rule**: Verification rule, you can view the verification configuration information through this parameter; rule.fieldcan get the field identifier of the current verification|
||**value**: Value of the current field|
||**callback**: Callback function (must be called) upon completion of validation; **callback('Error message')/ callback(new Error('Error message'))**. These are two ways to return an error message|

<img src= "/apps/components/img/cascader_validation.png">

!!! Info
    1. The **callback()function** is also called to verify success in the custom checkup method.

## First time User?

If you are using the Page Builder components on the ConnexCS platform first time, we request you to use our guide on <a href="https://bani-appsection--connexcs-docs.netlify.app/apps/page-builder/#steps-to-use-components-in-the-page-builder" target="_blank">steps to use the Components</a>.