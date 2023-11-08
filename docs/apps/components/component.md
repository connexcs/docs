# Component

## Description

This field can be customized by creating a Vue template component, click Setting in the Field Properties panel - Custom Template for the template configuration.

!!! info
    Vue single-file components cannot be created here. Only Vue template strings are supported, that is, <script>, <template>, and <style>tags cannot be used here. They need to be wrapped in the components themselves.

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
|**Custom Templates**|

|**Support Transparency Options**|Ability to specify the transparency level of a color|
|**Default Value**| Controls the initial color selection in a color picker, while still allowing the user to change it if desired|
|**Custom Class**| A HTML class attribute which allows further customisation **[See Form Attribute > Style Sheets**](**add anchor text**)|
|**Attribute Action**|Enable **Data Binding** to connect the data to UI|
||Enable **Hidden** action to hide the field|
||Enable **Disabled** action to make the field unsuable|

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

!!! Info
    1. The **callback()function** is also called to verify success in the custom checkup method.

### Events

| **Name**| **Description**|
|----------------------|---------------------------------------------------------------------|
| **onChange (element)**| The onChange event occurs when the value of an field is changed|

### Methods

| **Name**| **Description**|
|----------------------|---------------------------------------------------------------------|
| **setColor(value)**| Sets the selected color programmatically, accepts CSS color values like hex codes or rgb()|
| **getColor()**|Returns the currently selected color value|
| **openPicker()**|Opens the color picker interface to allow selecting a color|
|**reset()**|Resets the selected color back to the default value|
|**enable()**|Enables the color picker if it's disabled|
|**disable()**|Disables the color picker from being changed|
|**isEnabled()**|Returns true/false indicating if the picker is enabled|
|**onChange(callback)**|Registers a callback to execute when the color value changes|
|**refresh()**| Refreshes the UI of the color picker|
|**validate()**| Validates the currently selected color|
|**showHistory()**| Displays a history of recently selected colors|
|**showPalette()**| Displays a preset palette of colors for the user to choose from|
|**hidePalette()**| Hides the palette|
|**addColorToPalette(color)**|Adds a new color to the end of the palette|
|**removeColorFromPalette(color)**|Removes a color from the palette|
|**clearPalette()**|Removes all colors from the palette, resetting it|
|**setPalette(arrayOfColors)**|Accepts an array of CSS color values to set the palette|
|**setColorFormat(format)**|Sets the color format, e.g. 'hex', 'rgb', 'hsl'|
|**getColorFormat()**|Returns the current color format|
|**getColorOptions()**|Returns current color options object|
|**supportsCustomColors()**|Returns true if custom colors can be used|
|**openCustomColorDialog()**|Opens a dialog for user to input custom color|
|**addCustomColor(color)**|Adds a custom color swatch|
|**removeCustomColor(color)**|Removes a custom color|
|**clearCustomColors()**|Removes all custom colors.
|**setCustomColors(array)**|Sets the array of custom colors|
|**getCustomColors()**|Returns the custom colors array|
|**insertColor(color, index)**|Inserts a color at specified index in palette|
|**appendColor(color)**|Appends a color to the end of the palette|

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
