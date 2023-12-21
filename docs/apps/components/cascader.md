# Cascader

## Description

A **Cascader**, also known as a **Cascade Select** or **Dependent Drop-down**, is a type of input field in a form builder that allows users to select options dynamically based on their previous selections in other fields.

It enables users to navigate through a hierarchical structure of options, narrowing down their choices as they progress through the form.

<img src= "/apps/components/img/cascader.png">

## Use Case

1. **Location Selection Forms**: Cascaders can be used to collect location information in a structured manner, ensuring that the selected options are compatible and reducing the risk of invalid entries.

2. **Product Configuration Forms**: Cascaders are ideal for product configuration forms, allowing users to narrow down their choices step by step and get the exact product configuration they need.

3. **Category-based Search Forms**: Cascaders can be used to refine search queries by enabling users to navigate through a hierarchy of categories, making it easier to find specific products or items.

4. **Organization-based Forms**: Cascaders can be used to collect organizational information, ensuring that the selected options are consistent and accurate and making it easier to identify the appropriate person or group to contact.

5. **Scheduling Forms**: Cascaders can be used to schedule appointments or events by allowing users to select available time slots based on the selected criteria, streamlining the scheduling process and reducing conflicts.

6. **Multi-level Address Forms**: Cascaders can be used to collect detailed address information in a structured manner, ensuring that the address information is complete and accurate.

7. **Hierarchical Classification Forms**: Cascaders can be used to classify items or data into a hierarchical structure, making it easier to organize and manage information.

8. **Dynamic Form Generation**: Cascaders can be dynamically generated based on user input, enabling forms to adapt to specific scenarios and collect relevant information.

9. **Data Validation and Error Prevention**: Cascaders can be used to enforce data integrity and prevent invalid selections, helping users avoid errors and ensure that the selected data is consistent and accurate.

10. **Accessibility Enhancements**: Cascaders can improve form accessibility for users with visual impairments or limited motor skills, making it easier for them to navigate through options and make informed choices.

### Interactivity

Integrating interactivity with cascaders in a form builder involves  scripting languages to control the cascader's behavior and respond to user interactions.

Here's a general approach to integrating interactivity:

1. **Identify interactive scenarios**: Determine the specific scenarios where interactivity should be implemented, such as updating options based on selections, providing real-time feedback, or triggering form actions.

2. **Attach event listeners**: Attach event listeners to the cascader components to capture user interactions. Common events include 'change', 'select', and 'blur'.

3. **Implement event handlers**: Write event handler functions that respond to the captured events. These functions should perform the desired interactive behavior, such as updating options, displaying feedback, or triggering actions.

4. **Utilize data sources**: Access and manipulate data sources, such as external APIs or local data structures, to provide dynamic content and context-aware interactions.

5. **Update cascader options**: Dynamically update the cascader's options based on user interactions or data retrieval. Use methods like loadOptions() or enableOption() to modify the options.

6. **Provide real-time feedback**: Display visual or textual feedback to users based on their selections. Use methods like highlightOption() or displayMessage() to provide feedback.

7. **Trigger form actions**: Trigger specific form actions based on user interactions in the cascader. Use methods like submitForm() or showAdditionalFields() to perform actions.

8. **Handle errors and exceptions**: Implement error handling mechanisms to gracefully handle invalid selections or unexpected input. Use try-catch blocks to catch and handle errors.

9. **Test and refine**: Thoroughly test the interactive cascaders to ensure smooth functionality and user-friendly interactions. Gather user feedback and refine the implementation accordingly.

**Examples may include:**

1. A **product configuration form** could use interactivity to dynamically update the available variants and pricing based on the selected product model and other options.

2. A **location selection form** could use interactivity to provide real-time feedback on the validity of the selected address and suggest alternative options if necessary.

3. A **scheduling form** could use interactivity to highlight available time slots based on the selected date, service provider, and other criteria.

4. A **multi-level categorization** form could use interactivity to reveal additional subcategories or filters based on the user's previous selections, refining the categorization process.

5. A **dynamic form generation tool** could use interactivity to dynamically generate new cascader options or form fields based on the user's input and choices.

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
| **this.getValue(fieldName)**|Get A Value From An Object|
| **this.getValues() → {Object}**|Get the values of all fields when values change|
|**this.hide(fields)**|Hides the field|
|**this.show(fields)**|Displays the field|
|**this.setData(Value)**|Set the data in the field|
|**this.refreshFieldDataSource**|Refresh the datasource data bound to the form field|
|**this.setOptions(fields, options)**|Set Form Field Configuration Item|

## Config

| **Name**|**Description**|**Image**|
|---------------|----------------------------------------------------------------------------------------------------------------------------------------|---|
|**ID**| This is a unique identifier used to access the field by the API and the key of the field when the form is saved|<img src= "/apps/components/img/input_id.png">|
|**Name**| [**Optional**] The visual identifier label of the field|<img src= "/apps/components/img/checkbox_name.png">|
|**Width**| [**Optional**] To set the width of the field|<img src= "/apps/components/img/input_width.png">|
|**Label Width**|Width of the label associated with an input field. It determines the horizontal space occupied by the label text|<img src= "/apps/components/img/input_labelwidth1.png">|
|**Label Wrap**| If the label is longer than the allowed width the text will continue on another line|<img src= "/apps/components/img/input_labelwrap1.png">|
|**Hide Label**| Hides the label on the form|<img src= "/apps/components/img/input_hidelabel.png">|
|**Placeholder**| The short hint is displayed in the input field before the user enters a value|<img src= "/apps/components/img/input_placeholder.png">|
|**Text Prompt**| A description to aid the user when completing the field|<img src= "/apps/components/img/input_textprompt.png">|
|**Multiple**|Enable this option if you want  your users to select multiple options from the cascader's list of choices|<img src= "/apps/components/img/cascader_mutiple.png">
|**Searchable**|This method makes it easier for users to find and select options in forms with many choices, especially when they're organized hierarchically|<img src= "/apps/components/img/cascader_searchable.png">
|**Optional any node**|Allow users to pick any node in the hierarchy, even if it's unrelated to their previous choices, offering flexibility in option selection|<img src= "/apps/components/img/cascader_optional.png">
|**Option**|Choose either **Static** or **Dynamic** way of adding data to the oprions of the Cascader <br><br>**Static data** refers to a fixed set of options that are predefined and loaded into the cascader at the time of initialization</br></br> **Dynamic data** are options fetched as needed from sources like databases or APIs. The cascader updates choices based on user selections. You select from **Data source** which refers to the origin of the data; **Function** which refers to the code that manipulates the data, and **Assigned Value** which refers to the specific value stored or associated with a data element|<img src= "/apps/components/img/checkbox_static.png"> <img src= "/apps/components/img/checkbox_dynamic.png">|
|**Default Value**|It Specifies the initial option that is selected when the form is loaded|<img src= "/apps/components/img/input_defaultvalue.png">|
|**Custom Class**| A HTML class attribute which allows further customisation **[See Form Attribute > Style Sheets**](**add anchor text**)|<img src= "/apps/components/img/input_customclass.png">|
|**Attribute Action**|Enable **Data Binding** to connect the data to UI<br>Enable **Hidden** action to hide the field</br>Enable **Disabled** action to make the field unsuable<br>Enable **Show clear button** action make the clear button visible|<img src= "/apps/components/img/cascader_attributeaction.png">|

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

<img src= "/apps/components/img/cascader_validation.png">

!!! Info
    1. The **callback()function** is also called to verify success in the custom checkup method.