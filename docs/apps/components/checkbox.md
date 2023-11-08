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

## API

Here are some specific ways APIs can be integrated with checkboxes in a form builder:

1. **Dynamically generate Checkbox fields**: APIs can be used to programmatically create checkbox fields, including their labels, values, and default states. This allows for dynamic form generation based on user input or data from external sources.

2. **Handle Checkbox interactions**: APIs enable developers to respond to user interactions with checkboxes, such as when a checkbox is checked or unchecked. This allows for conditional logic, dynamic content updates, and validation checks.

3. **Access Checkbox values**: APIs provide a means to retrieve the current values of checkboxes, allowing developers to collect and process user selections. This is essential for gathering user data and making informed decisions based on user preferences.

4. **Manage Checkbox groups**: APIs facilitate the management of checkbox groups, enabling developers to handle multiple checkboxes within a single form element. This allows for group validation, collective data handling, and conditional interactions.

5. **Customize Checkbox appearance**: APIs can be used to customize the appearance of checkboxes, including their styling, positioning, and layout. This allows for branding consistency, enhanced user experience, and accessibility.

6. **Perform validation and Error handling**: APIs enable developers to implement validation rules for checkboxes, ensuring that user input meets specific criteria. This helps maintain data integrity and prevent erroneous submissions.

7. **Integrate with External Services**: APIs can be used to integrate checkboxes with external services, such as data storage systems or third-party applications. This allows for seamless data exchange and enhanced functionality.

### Config

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
| **createCheckbox()**|Create a new checkbox field in your form|
| **getCheckboxState()**| Allows you to get the current state of a checkbox. This will return a boolean value of true if the checkbox is checked and false if it is not|
| **setCheckboxState()**| Allows you to set the state of a checkbox. This will either check or uncheck the checkbox, depending on the value of the argument you pass to the method|
|**addCheckboxEventListener()**|Allows you to add an event listener to a checkbox. This will allow you to run code whenever the checkbox is checked or unchecked|
|**removeCheckboxEventListener()**|Allows you to remove an event listener from a checkbox. This will prevent the code from running whenever the checkbox is checked or unchecked|
|**disableCheckbox()**|Allows you to disable a checkbox so that it cannot be checked or unchecked|
|**enableCheckbox()**|Allows you to enable a checkbox so that it can be checked or unchecked|
|**getCheckboxValue()**|Allows you to get the value that will be submitted when the checkbox is checked|
|**setCheckboxLabel()** |Allows you to set the label for a checkbox|
|**setCheckboxName()**|Allows you to set the name for a checkbox. The name is the identifier that will be used to submit the checkbox value|
|**setCheckboxId()**|Allows you to set the ID for a checkbox|
|**validateCheckbox()**|Allows you to validate the value of a checkbox. This can be used to ensure that the user has selected a checkbox before submitting the form|
|**getCheckboxCheckedCount()**|Allows you to get the number of checked checkboxes in a group of checkboxes|
|**getCheckboxValues()**|Allows you to get all of the values of the checked checkboxes in a group of checkboxes|
|**clearCheckboxes()**|Allows you to clear all of the checked checkboxes in a group of checkboxes|
|**toggleCheckbox()**|Allows you to toggle the state of a checkbox. This will either check the checkbox if it is unchecked or uncheck the checkbox if it is checked|
|**setCheckboxRequired()**|Allows you to set a checkbox to be required. This means that the user will be required to check the checkbox before submitting the form|
|**getCheckboxRequired()**| Allows you to check if a checkbox is required|
|**getCheckboxGroup()**|Retrieves the checkbox group to which a specific checkbox belongs|
|**setCheckboxAppearance()**|Allows you to customize the appearance of a checkbox, such as its size, color, and style|
|**getCheckboxAppearance()**|This method retrieves the current appearance style of a checkbox|
|**addCheckboxChangeListener()**|This method allows you to add a change listener to a checkbox. A change listener is a function that is called whenever the state of the checkbox changes|
|**removeCheckboxChangeListener()**|This method removes a change listener from a checkbox|

### Interactivity

**Interactivity** is the ability of a web page or application to respond to user input.

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

