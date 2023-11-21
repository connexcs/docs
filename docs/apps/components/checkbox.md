# Checkbox

## Description

A checkbox is a type of input field in a form builder that allows users to select multiple options from a set of choices.

Checkboxes are typically used to collect data about user preferences or choices.

## Use Case

1. Allowing users to select multiple options
2. Enabling or disabling other fields
3. Collecting preferences
4. Accepting terms and conditions
5. Gathering consent
6. Filtering search results
7. Personalizing user experiences
8. Streamlining multi-step processes

### Interactivity

The're a number of ways to add interactivity to **Checkboxes**.

Some of the most common methods include:

1. **Conditional logic and dynamic content updates**: Checkboxes can dynamically control other form fields based on selections, enhancing personalization.

2. **Validation checks and error prevention**: Checkboxes can enforce validation rules, ensuring correct user input and data integrity.

3. **Data collection and processing**: Checkboxes allow for collecting user preferences and tailoring experiences accordingly.

4. **Visual feedback and user engagement**: Visual feedback from checkboxes improves user interaction and form engagement.

5. **Accessibility and inclusive design**: Accessible checkboxes ensure inclusive participation and form usability for all.

6. **Conditional page navigation**: Dynamically switch between form pages based on checkbox selections
7. **Real-time progress indicators**: Keep users engaged by showing their progress and remaining tasks
8. **Autofill and smart suggestions**: Suggest relevant options based on user choices, reducing input effort.
9. **Contextual tooltips and pop-ups**: Provide additional context and explanations for specific checkboxes.
10. **Interactive visuals and animations**: Enhance visual feedback and engagement with dynamic responses.
11. **Conditional page navigation**: Dynamically switch between form pages based on checkbox selections
12. **Real-time progress indicators**: Keep users engaged by showing their progress and remaining tasks
13. **Autofill and smart suggestions**: Suggest relevant options based on user choices, reducing input effort.
14. **Contextual tooltips and pop-ups**: Provide additional context and explanations for specific checkboxes.
15. **Interactive visuals and animations**: Enhance visual feedback and engagement with dynamic responses.

## API



## Config

| **Name**|**Description**|
|---------------|----------------------------------------------------------------------------------------------------------------------------------------|
|**ID**| This is a unique identifier which is used to access the field by the API and the key of the field when the form is saved |
|**Name**| [**Optional**] The visual identifier label of the field|
|**Width**| [**Optional**] To set the width of the field|
|**Label Width**|Width of the label associated with an input field. It determines the horizontal space occupied by the label text|
|**Label Wrap**| If the label is longer than the allowed width the text will continue on another line|
|**Hide Label**| Hides the label on the form|
|**Text Prompt**| A description to aid the user when completing the field|
|**Layout**| Select the format of the Checkbox as **Block** or **Inline**|
|**Option**|Choose either **Static** or **Dynamic** way of adding data to the oprions of the Cascader|
||**Static data** refers to a fixed set of options that are predefined and loaded into the cascader at the time of initialization|
||**Dynamic data** are options fetched as needed from sources like databases or APIs. The cascader updates choices based on user selections. You select from **Data source** which refers to the origin of the data; **Function** which refers to the code that manipulates the data, and **Assigned Value** which refers to the specific value stored or associated with a data element|
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
|**(static) addClassName(fields, disabled)**|Add style class to form item|
| **this.disabled(fields,true)**| Disable input field from user interaction|
| **(static) getComponent(name) → {Object}**|Retrieve a component from an object or element|
|**(static) getData(isValidateopt) → {Promise.<Object>}**|To get form data|
| **(static) getValue(fieldName)**|Get A Value From An Object|
|**(static) hide(fields)**|Hides the field|
|**(static) refresh()**|Refresh the form, when the form data changes, you need to call this method for re-render|
|**(static) setOptions(fields, options)**|Set Form Field Configuration Item|
|**(static) removeClassName(fields, disabled)**|Remove form item style|
|**this.reset()**|Reset Form Fields Data|
//|**(static) scriptForge(name, data, fn, args) → {Promise.<Boolean>}**|Access scriptForge|
//|**sendrequest**|
//|**(static) setData(Value)**|Set the data in the field|
//|**(static) setOptions(fields, options)**|Set Form Field Configuration item|
