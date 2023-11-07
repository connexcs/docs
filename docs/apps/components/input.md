# Input

## Description

The input box specifies an input field where the user can enter data.

The input field also support client-side validation.

## Use Case

The input box is a core component in allow information to be entered into the system, as well as displaying existing information.

The input box can also be dragged into other components including: **Sub-Form**[add anchor text] and **Sub-Form+**[add anchor text].

## API

By using input component APIs, developers can create a wide variety of input fields, including text fields, number fields, checkboxes, radio buttons, select boxes, and more.

1. **Creating input components**: Specifying the type of input field (e.g., text, number, checkbox, select), setting initial values, and defining validation rules.

2. **Binding input data to form values**: Associating input values with form data and handling data changes and updates.

3. **Customizing input appearance**: Applying CSS styles to modify the visual aspects of the input field, including font, color, and borders.

4. **Managing input events**: Handling user interactions with the input field, such as focus, blur, input, and change events.

5. **Validating input values**: Implementing validation rules to ensure that input values are correct and meet the specified criteria.

### Config

| **Name**|**Description**|
|---------------|----------------------------------------------------------------------------------------------------------------------------------------|
|**ID**| This is a unique identifier which is used to access the field by the API and the key of the field when the form is saved |
|**Name**| [**Optional**] The visual identifier label of the field|
|**Width**| [**Optional**] To set the width of the field|
|**Label Width**|Width of the label associated with an input field. It determines the horizontal space occupied by the label text|
|**Label Wrap**| If the label is longer than the allowed width the text will continue on another line|
|**Hide Label**| Hides the label on the form|
|**Placeholder**| The short hint is displayed in the input field before the user enters a value|
|**Text Prompt**| A description to aid the user when completing the field|
|**Max Length**| Limit the amount of characters the field supports|
|**Default Value**| The default value which is filled in the field before the user changes it|
|**Custom Class**| A HTML class attribute which allows further customisation **[See Form Attribute > Style Sheets**](**add anchor text**)|
|**Attribute Action**|Enable **Data Binding** to connect the data to UI
||Enable **Hidden** action to hide the field|
||Enable **Disabled** action to make the field unsuable|
||Enable **Show clear button** action make the clear button visible|
||Enable **Show Password** action make the password visible|
||Enable **Show word count** action make the word count visible|

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
| **onFocus (element)**| The onfocus event occurs when an field gets focus|
| **onBlur (element)**| The onblur event occurs when an field loses focus|

### Methods

| **Name**| **Description**|
|----------------------|---------------------------------------------------------------------|
| **createFormElement()**| This method dynamically generates an input element based on the specified input type (text, number, checkbox, select, etc.) and properties|
| **bindInputValue(inputElement, value)**| This method associates the input element with a specific value, ensuring that the input field reflects the current value|
| **onInputValueChange(event)**| This event handler is triggered when the user changes the input value, updating the corresponding data model and potentially triggering validations|
|**applyInputStyles(inputElement, styles)**|This method applies CSS styles to the input element, customizing its appearance, such as font, color, and borders|
|**updateInputPlaceholder(inputElement, placeholderText)**|This method sets the placeholder text for the input element, providing a hint for the user about the expected input|
|**onInputFocus(event)**|This event handler is triggered when the user focuses on the input element, potentially revealing additional information or enabling input interactions|
|**onInputBlur(event)**|This event handler is triggered when the user blurs the input element, potentially validating the input value or performing actions based on the input|
|**validateInputValue(inputValue)**|This method checks the input value against validation rules, such as required fields, format constraints, or value ranges|
|**displayInputError(inputElement, errorMessage)** |This method displays an error message associated with the input element, providing feedback to the user about invalid input|
|**highlightInputOnFocus(inputElement)**|This method applies a visual cue, such as a highlight or border change, when the input element is focused, indicating active input|
|**showInputSuggestions(inputElement, suggestions)**| This method displays suggestions or autocompletion options based on the user's input, facilitating efficient data entry|
|**onInputKeyDown(event)**| This event handler is triggered when the user presses a key within the input element, potentially handling specific shortcuts or input behaviors|
|**onInputKeyPress(event)**|This event handler is triggered when the user presses and releases a key within the input element, capturing individual key presses|
|**formatInputValue(inputValu)**| This method applies formatting rules to the input value, such as masking sensitive data, converting input to a specific format (e.g., phone number, date), or ensuring consistent input patterns|
|**updateFormData(inputElement, value)**|This method updates the corresponding form data model with the current input value, ensuring that data is synchronized across the form|
|**getFormValue(inputElement)**| This method retrieves the current value of the input element, allowing access to input data for processing or submission|

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