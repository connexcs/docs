# Number

## Description

**Number** component is a UI element that allows users to input and manipulate numerical values within a form.

It's commonly used for collecting quantitative data, such as age, quantity, price, or measurement values.

<img src= "/apps/components/img/number.png">

## Use Case

1. Text Input with Number Type
2. Number Validation
3. Custom Number Input
4. Number Spinner: It can be used provide a user-friendly interface for inputting quantities or values. You can add custom spin buttons using JavaScript.
5. Range Slider: Based on the drag position, calculate the new min and max values for the range and update the underlying "number" element's value and attribute accordingly.

Examples mat include:

1. Collecting Age
2. Quantity Selection
3. Price Entry
4. Parameter Adjustment
5. Measurement Input

### Interactivity

1. **Real-time Updates**: For instance, as the user changes the quantity in a product order form, the corresponding subtotal or total price can be updated dynamically.

2. **Conditional Logic**: For example, if the user enters a specific age range in a registration form, additional questions or fields relevant to that age group can be shown.

3. **Interactive Calculations**:For instance, in a loan application form, the user can enter the loan amount, interest rate, and repayment period, and the component can dynamically calculate the monthly installment amount.

4. **Data Validation**: For example, in a form collecting age, validate that the input is a positive integer within a reasonable age range.

5. **Visual Enhancements**: For example, create custom input fields with color changes or animations based on input values or provide interactive sliders or spinners for precise value adjustments.

## API

### Events

| **Name**| **Description**|
|---------|----------------|
| `onChange (element)`| The onChange event occurs when the value of a field is changed|
| `onFocus (element)`| The onfocus event occurs when a field gets focus|
| `onBlur (element)`| The onblur event occurs when a field loses focus|

### Methods

| **Name**| **Description**|**Parameters**|
|---------|----------------|--------------|
|`this.addClassName`|Add style class to a form item|`(fields: String`&#124;`String[], className: String)`|
|`this.removeClassName`|Remove style class from a form item|`(fields: String`&#124;`String[], className: String)`|
|`this.getComponent`|Returns a component whose id has been passed as a parameter|`(component_ID: String) : Object)`|
|`this.getValues`|Gets the current values of all fields|`() : Object`|
|`this.hide`|Hides the field|`(fields: String`&#124;`String[])`|
|`this.show`|Displays the field|`(fields: String`&#124;`String[])`|
|`this.disable`| Disable number field from user interaction|`(fields: String`&#124;`String[])`|
|`this.enable`| Enable number field from user interaction|`(fields: String`&#124;`String[])`|
|`this.getValue`|Get A Value From a component|`(fieldName: String)`|
|`this.setData`|et the data in the field. The Value object should be of type { componentId: componentValue }|`(Value: Object)`|

!!! Info
    1. The show() and hide() methods can also be used to control the visibility of an alert in response to user input.
    2. **Fields** refers to a **component ID** or a **list of component IDs**. You can fetch the ID from the **Component Attribute** panel in the Page Builder.
    3. Before using **this.show(fields)**, make sure the component is **hidden**. This can be done using **this.hide(fields)** or by **enabling** the **Hidden checkbox** in the Component Attribute panel.
    4. Before using **this.enable(fields)**, make sure the component is **disabled**. This can be done using **this.disable(fields)** or by **enabling** the **Disabled checkbox** in the Component Attribute panel.

#### Steps to use the methods for the Page Builder components

1. Go to Form Attribute :material-menu-right: Action Panel :material-menu-right: Setting :material-menu-right: (Mounted | refresh | click 'Add action').
2. Write the method/code as shown in the **Example** below.
3. Click on `Save`.
4. On the main screen click on `Save` again.
5. Click on `Preview` to see the code in action.
<img src= "/apps/components/img/num.png">

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
            this.addClassName('number_kzdn0gvb', 'abc')
            ```

    2. `this.removeClassName(fields, className)`
        ```js
        this.removeClassName('number_kzdn0gvb', 'abc')
        ```
    
    3. `this.getValues()`
        ```js
        var data = this.getValues();
        console.log(data);
        ```
    
    4. `this.hide(fields)`
        ```js
        var fields= ['number_kzdn0gvb']
        this.hide(fields)
        ```
    
    5. `this.show(fields)`
        ```js
        var fields= ['number_kzdn0gvb']
        this.show(fields)
        ```
    
    6. `this.disable(['fields'])`
        ```js
        this.disable(['number_kzdn0gvb'])
        ```
    
    7. `this.enable(['fields'])`
        ```js
        this.enable(['number_kzdn0gvb'])
        ```
    
    8.  `this.getValue('fieldName')`
        ```js
        var numbername = this.getValue('number_kzdn0gvb');
        console.log('getValue', numbername);
        ```
    
    9.  `this.setData(Value)`
        ```js
        this.setData(
         {"number_kzdn0gvb": "2024",});
        ```
    
    10.  `this.getComponent('component_ID')`
        ```js
        var numbername = this.getComponent('number_kzdn0gvb');
        console.log('getComponent', numbername);
        ```

## Config

| **Name**|**Description**|**Icon**|
|---------|---------------|--------|
|**ID**| The number component's unique identifier |<img src= "/apps/components/img/input_id.png">|
|**Name**| [**Optional**] The display name of the number field|<img src= "/apps/components/img/checkbox_name.png">|
|**Width**| [**Optional**] Width of the field|<img src= "/apps/components/img/input_width.png">|
|**Label Width**|Width of the label associated with an input field. It determines the horizontal space occupied by the label text|<img src= "/apps/components/img/input_labelwidth1.png">|
|**Label Wrap**| If the label is longer than the allowed width the text will continue on another line|<img src= "/apps/components/img/input_labelwrap1.png">|
|**Hide Label**| Hides the label on the form|<img src= "/apps/components/img/input_hidelabel.png">|
|**Text Prompt**| A description to aid the user when completing the field|<img src= "/apps/components/img/input_textprompt.png">|
|**Minimum**|Users can only enter values above a minimum threshold|<img src= "/apps/components/img/number_min.png">|
|**Maximum**|Users can only enter values below a maximum limit|<img src= "/apps/components/img/number_max.png">|
|**Step**|Minimum increment or decrement by which the value can be changed|<img src= "/apps/components/img/number_step.png">|
|**Precision**|Number of decimal places to be displayed for the input value|<img src= "/apps/components/img/number_precision.png">|
|**Enable the control buttons**|Enable this option for the user to increment or decrement the value|<img src= "/apps/components/img/number_enable.png">|
|**Position of the control buttons**| Place the control button on both sides or on the right of the number component|<img src= "/apps/components/img/number_position.png">|
|**Default Value**| The default number which is filled in the field before the user changes it|<img src= "/apps/components/img/number_default.png">|
|**Custom Class**| An HTML class attribute which allows further customisation [See Form Attribute > Style Sheets](https://bani-appsection--connexcs-docs.netlify.app/apps/page-builder/#form-attribute)|<img src= "/apps/components/img/input_customclass.png">|
|**Attribute Action**|Enable **Data Binding** to connect the data to UI. <br> Enable **Hidden** action to hide the field. <br> Enable **Disabled** action to make the field unusable|<img src= "/apps/components/img/checkbox_attributeaction.png">|

### Validation

Form validation is the process of checking the data entered into a form to ensure that it's valid and complete.

This helps to prevent users from submitting forms with invalid data, which can cause problems for the application that's processing the form.

Form validation can be performed using a variety of methods, including:

| **Name**| **Description**|
----------|----------------|
| **Required**|If enabled, then the field value cannot be empty, otherwise an error message is emitted|
|**Custom Validation Rules**|(rule, value, callback) => {|
||**rule**: Verification rule, you can view the verification configuration information through this parameter; **rule.field** can get the field identifier of the current verification|
||**value**: Value of the current field|
||**callback**: Callback function (must be called) upon completion of validation; **callback('Error message')/ callback(new Error('Error message'))**. These are two ways to return an error message|

<img src= "/apps/components/img/cascader_validation.png">

!!! Info
    1. The **callback() function** is also called to verify success in the custom validation method.

## First time User?

If you are using the Page Builder components on the ConnexCS platform for the first time, we request you to use our guide on <a href="https://bani-appsection--connexcs-docs.netlify.app/apps/page-builder/#steps-to-use-components-in-the-page-builder" target="_blank">steps to use the Components</a>.