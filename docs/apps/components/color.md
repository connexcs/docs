# Color

## Description

A Color component is a form element that allows users to select a color from a palette or input a color code.

This type of component is commonly used for forms that require users to specify colors for design elements, text formatting, or other visual aspects.

<img src= "/apps/components/img/color.png">

## Use Case

1. **Highlighting important fields**: Enhance form usability by drawing attention to critical fields.

2. **Providing visual cues for input validation**: Guide users with color-coded feedback for input correctness.

3. **Creating a more visually appealing form**: Elevate form aesthetics and user engagement through color schemes.

Here are some examples:

1. **Input fields**: Use different border colors to indicate required, optional, and disabled fields.

2. **Labels**: Use different text colors to indicate required, optional, and disabled labels.

3. **Error messages**: Use different text colors to indicate error severity (critical, warning, informational).

4. **Buttons**: Use different background colors to indicate button type (submit, delete, cancel).
5. **Highlighting progress**: You could use a progress bar with different colors to indicate the current stage of the form.
6. **Grouping related fields**: You could use a different color for each section of a form, or you could use a color gradient to indicate the sequence of fields.
7. **Reducing Cognitive Load**: Limiting color palettes can alleviate cognitive load on users, particularly for long or complex forms, facilitating better focus on the form itself.

### Interactivity

**Interactivity** is the ability of a web page or application to respond to user input.

The're a number of ways to add interactivity to the **Color** component.

Some of the most common methods include:

1. **Disable/enable** the color picker based on other form values using the enable() and disable() methods. For example, disable if a checkbox is unchecked.

2. **Show/hide** the picker conditionally by calling show() and hide() methods. For example, only show it if a radio button is selected.

3. **Validate** the selected color using validate() and display errors for invalid values.

4. **Change** available colors in the palette dynamically based on other form selections.

5. **Preselect** the color based on logic and calculations when the form initializes.

6. **Update** styles of other elements based on the selected color using CSS custom properties.

7. **Display** color preview swatches elsewhere in the form when the color changes.

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
| **this.enable(fields)**| Disable input field from user interaction|
| **this.getComponent(name) → {Object}**|Retrieve a component from an object or element|
| **this.getValue(fieldName)**|Get A Value From An Object|
|**this.hide(fields)**|Hides the field|
|**this.show(fields)**|Displays the field|
|**this.setData(Value)**|Set the data in the field|

## Config

| **Name**|**Description**|**Image**
|---------------|----------------------------------------------------------------------------------------------------------------------------------------|--|
|**ID**| This is a unique identifier which is used to access the field by the API and the key of the field when the form is saved|<img src= "/apps/components/img/input_id.png">|
|**Name**| [**Optional**] The visual identifier label of the field|<img src= "/apps/components/img/checkbox_name.png">|
|**Width**| [**Optional**] To set the width of the field|<img src= "/apps/components/img/input_width.png">|
|**Label Width**|Width of the label associated with an input field. It determines the horizontal space occupied by the label text|<img src= "/apps/components/img/input_labelwidth1.png">|
|**Label Wrap**| If the label is longer than the allowed width the text will continue on another line|<img src= "/apps/components/img/input_labelwrap1.png">|
|**Hide Label**| Hides the label on the form|<img src= "/apps/components/img/input_hidelabel.png">|
|**Text Prompt**| A description to aid the user when completing the field|<img src= "/apps/components/img/input_textprompt.png">|
|**Support Transparency Options**|Ability to specify the transparency level of a color|<img src= "/apps/components/img/color_support.png">
|**Default Value**| Controls the initial color selection in a color picker, while still allowing the user to change it if desired|<img src= "/apps/components/img/color_default.png">
|**Custom Class**| A HTML class attribute which allows further customisation **[See Form Attribute > Style Sheets**](**add anchor text**)|<img src= "/apps/components/img/input_customclass.png">|
|**Attribute Action**|Enable **Data Binding** to connect the data to UI<br>Enable **Hidden** action to hide the field</br>Enable **Disabled** action to make the field unsuable|<img src= "/apps/components/img/checkbox_attributeaction.png">|

### Validation

Form validation is the process of checking the data entered into a form to ensure that it's valid and complete.

This helps to prevent users from submitting forms with invalid data, which can cause problems for the application that's processing the form.

Form validation can be performed using a variety of methods, including:

| **Name**| **Description**|
|----------------------|---------------------------------------------------------------------|
| **Required**| Single line of text|
|**Custom Validation Rules**|(rule, value, callback) => {|
||**rule**: Verification rule, you can view the verification configuration information through this parameter; rule.fieldcan get the field identifier of the current verification.|
||**value**: Value of the current field|
||**callback**: Callback function (must be called) upon completion of validation; **callback('Error message')/ callback(new Error('Error message'))**. These are two ways to return an error message.|

<img src= "/apps/components/img/input_validation.png">

!!! Info
    1. The **callback()function** is also called to verify success in the custom checkup method.
