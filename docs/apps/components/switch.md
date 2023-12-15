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
|----------------------|---------------------------------------------------------------------|
| **onChange (element)**| The onChange event occurs when the value of an field is changed|

### Methods

| **Name**| **Description**|
|----------------------|---------------------------------------------------------------------|
|**this.addClassName(fields, disabled)**|Add style class to form item|
|**this.removeClassName(fields, disabled)**|Remove form item style|
| **this.disable(fields)**| Disable input field from user interaction|
//| **this.enable(fields)**| Disable input field from user interaction|
| **this.getComponent(name) → {Object}**|Retrieve a component from an object or element|
| **this.getValue(fieldName)**|Get A Value From An Object|
| **this.getValues() → {Object}**|Get the values of all fields when values change|
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
|**Custom Class**| A HTML class attribute which allows further customisation **[See Form Attribute > Style Sheets**](**add anchor text**)|<img src= "/apps/components/img/input_customclass.png">|
|**Attribute Action**|Enable **Data Binding** to connect the data to UI. <br> Enable **Hidden** to action to hide the field. <br> Enable **Disabled** action to make the field unsuable.|<img src= "/apps/components/img/switch_attributeaction.png">|

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

<img src= "/apps/components/img/input_validation.png">

!!! Info
    1. The **callback()function** is also called to verify success in the custom checkup method.
