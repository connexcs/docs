# Number

## Description

Number component is a UI element that allows users to input and manipulate numerical values within a form.

It's commonly used for collecting quantitative data, such as age, quantity, price, or measurement values.

<img src= "/apps/components/img/number.png">

## Use Case

1. Text Input with Number Type
2. Number Spinner
3. Range Slider
4. Number Validation
5. Custom Number Input

Examples mat include:

1. Collecting Age
2. Quantity Selection
3. Price Entry
4. Parameter Adjustment
5. Measurement Input

### Interactivity

1.  **Real-time Updates**: For instance, as the user changes the quantity in a product order form, the corresponding subtotal or total price can be updated dynamically.

2. **Conditional Logic**: For example, if the user enters a specific age range in a registration form, additional questions or fields relevant to that age group can be shown.

3. **Interactive Calculations**:For instance, in a loan application form, the user can enter the loan amount, interest rate, and repayment period, and the component can dynamically calculate the monthly installment amount.

4. **Data Validation**: For example, in a form collecting age, validate that the input is a positive integer within a reasonable age range.

5. **Visual Enhancements**: For example, create custom input fields with color changes or animations based on input values or provide interactive sliders or spinners for precise value adjustments.

## API

### Events

| **Name**| **Description**|
|----------------------|---------------------------------------------------------------------|
| **onChange (element)**| The onChange event occurs when the value of an field is changed|
| **onFocus (element)**| The onfocus event occurs when an field gets focus|
| **onBlur (element)**| The onblur event occurs when an field loses focus|

### Methods

| **Name**| **Description**|
|----------------------|---------------------------------------------------------------------|
|**this.addClassName(fields, disabled)**|Add style class to form item|
|**this.removeClassName(fields, disabled)**|Remove form item style|
| **this.disable(fields)**| Disable input field from user interaction|
| **this.enable(fields)**| Disable input field from user interaction|
| **this.getComponent(name) → {Object}**|Retrieve a component from an object or element|
//| **this.getValue(fieldName)**|Get A Value From a component|
//| **this.getValues() → {Object}**|Get the values of all fields when values change|
|**this.hide(fields)**|Hides the field|
|**this.show(fields)**|Displays the field|
//|**this.setData(Value)**|Set the data in the field|

## Config

| **Name**|**Description**|**Icon**|
|---------------|----------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|
|**ID**| This is a unique identifier which is used to access the field by the API and the key of the field when the form is saved|<img src= "/apps/components/img/input_id.png">|
|**Name**| [**Optional**] The visual identifier label of the field|<img src= "/apps/components/img/checkbox_name.png">|
|**Width**| [**Optional**] To set the width of the field|<img src= "/apps/components/img/input_width.png">|
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
|**Custom Class**| A HTML class attribute which allows further customisation **[See Form Attribute > Style Sheets**](**add anchor text**)|<img src= "/apps/components/img/input_customclass.png">|
|**Attribute Action**|Enable **Data Binding** to connect the data to UI. <br> Enable **Hidden** to action to hide the field. <br> Enable **Disabled** action to make the field unsuable|<img src= "/apps/components/img/checkbox_attributeaction.png">|

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
