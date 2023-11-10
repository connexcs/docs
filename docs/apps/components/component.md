# Component

## Description

This field can be customized by creating a Vue template component, click Setting in the Field Properties panel - Custom Template for the template configuration.

!!! info
    Vue single-file components cannot be created here. Only Vue template strings are supported, that is, <script>, <template>, and <style> tags cannot be used here. They need to be wrapped in the components themselves.

## Use Case


### Config

| **Name**|**Description**|
|---------------|----------------------------------------------------------------------------------------------------------------------------------------|
|**ID**| This is a unique identifier which is used to access the field by the API and the key of the field when the form is saved|
|**Name**| [**Optional**] The visual identifier label of the field|
|**Width**| [**Optional**] To set the width of the field|
|**Label Width**|Width of the label associated with an input field. It determines the horizontal space occupied by the label text|
|**Label Wrap**| If the label is longer than the allowed width the text will continue on another line|
|**Hide Label**| Hides the label on the form|
|**Text Prompt**| A description to aid the user when completing the field|
|**Custom Templates**| You may add your own templates here|
|**Custom Class**| A HTML class attribute which allows further customisation **[See Form Attribute > Style Sheets**](**add anchor text**)|
|**Attribute Action**|Enable **Data Binding** to connect the data to UI|
||Enable **Hidden** action to hide the field|

### Validation

Form validation is the process of checking the data entered into a form to ensure that it's valid and complete.

This helps to prevent users from submitting forms with invalid data, which can cause problems for the application that's processing the form.

Form validation can be performed using a variety of methods, including:

| **Name**| **Description**|
|----------------------|---------------------------------------------------------------------|
| **Required**| Single line of text|
| **Regular expressions**|Used to match patterns in text. They can be used to validate the format of data, such as email addresses, phone numbers, and dates|
|**Custom Validation Rules**|(rule, value, callback) => {|
||**rule**: Verification rule, you can view the verification configuration information through this parameter; rule.fieldcan get the field identifier of the current verification.|
||**value**: Value of the current field|
||**callback**: Callback function (must be called) upon completion of validation; **callback('Error message')/ callback(new Error('Error message'))**. These are two ways to return an error message.|

!!! Info
    1. **Regular expressions** should be wrapped with //, as in:/^1[3456789]\d{9}$/"
    2. The **callback()function** is also called to verify success in the custom checkup method.

### Events

| **Name**| **Description**|
|----------------------|---------------------------------------------------------------------|
| **onChange (element)**| The onChange event occurs when the value of an field is changed|

### Methods

| **Name**| **Description**|
|----------------------|---------------------------------------------------------------------|

### Interactivity

**Interactivity** is the ability of a web page or application to respond to user input.

The're a number of ways to add interactivity to the **Component** element.

Some of the most common methods include: