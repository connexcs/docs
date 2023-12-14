# Slider

## Description

 A **Slider** component allows users to visually select a numerical value within a predefined range.
 
 It typically consists of a horizontal bar with a handle that users can drag to set their chosen value.

<img src= "/apps/components/img/slider.png">

## Use Case

1. Setting price filters
2. Choosing age brackets
3. Choose quantities of products or services

### Interactivity

1. **Dependent sliders**: Link multiple sliders together, where changing one value automatically updates the others based on predefined relationships.
2. **Conditional settings**: Based on the slider value, dynamically show or hide specific elements, customize options, or trigger different functionalities.
3. **Real-time previews**: When users adjust the slider, show immediate previews of the resulting changes, like product images based on filter selections.
4. **Adaptive interfaces**: Change the slider range, labels, or behavior based on user preferences or context, offering personalized experiences.

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
|**Display Input Box**|Displays the number selected on the slider|<img src= "/apps/components/img/slider_displayinputbox.png">|
|**Minimum**|Least value for the slider range|<img src= "/apps/components/img/slider_minimum.png">|
|**Minimum**|Highest value for the slider range|<img src= "/apps/components/img/slider_maximum.png">|
|**Step**|Smallest increment or jump by which the value of the slider can change|<img src= "/apps/components/img/slider_step.png">|
|**Custom Class**| A HTML class attribute which allows further customisation **[See Form Attribute > Style Sheets**](**add anchor text**)|<img src= "/apps/components/img/input_customclass.png">|
|**Attribute Action**|Enable **Data Binding** to connect the data to UI. <br> Enable **Hidden** to action to hide the field. <br> Enable **Disabled** action to make the field unsuable.|<img src= "/apps/components/img/checkbox_attributeaction.png">|

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
