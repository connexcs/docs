# Tabs

## Description

<<<<<<< HEAD
The **Tabs** component acts as a conductor, orchestrating information flow and streamlining user interaction.

It's like having multiple forms within a single interface, allowing you to organize complex tasks and data into logical, bite-sized chunks.

Tabs visually categorize different sections of a form, preventing users from being overwhelmed by a large, monolithic data entry interface.

Each tab acts as a dedicated space for specific information, guiding users through the form step-by-step and preventing them from getting lost in a maze of fields.

<img src= "/apps/components/img/tabs.png">

## Use Case

1. Enhanced User Experience.
2. Data Management and Efficiency
3. Organize similar sections under one tab

### Interactivity

1. Show or hide specific tabs based on user choices in other sections of the form. For example, displaying advanced options only after basic information is filled out.
2. Progressive disclosure
3. Contextual relevance
4. Drag-and-drop reordering
5. Trigger actions like calculations, validations, or data submission upon clicking on specific tabs
6. Tab highlighting based on data
7. Tab-specific validation rules
8. Dynamic content within tabs

## API

=======
The input box specifies an input field where the user can enter data.

The input field also support client-side validation.

<img src= "/apps/components/img/input.png">

## Use Case

The input box is a core component in allow information to be entered into the system, as well as displaying existing information.

The input box can also be dragged into other components including: **Sub-Form**[add anchor text] and **Sub-Form+**[add anchor text].

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

## API

### Events

| **Name**| **Description**|
|----------------------|---------------------------------------------------------------------|
| **onChange (element)**| The onChange event occurs when the value of an field is changed|
| **onFocus (element)**| The onfocus event occurs when an field gets focus|
| **onBlur (element)**| The onblur event occurs when an field loses focus|

>>>>>>> 5f66f614f205832cb18ceaf38d8ff2c0ad96a69e
### Methods

| **Name**| **Description**|
|----------------------|---------------------------------------------------------------------|
|**this.addClassName(fields, disabled)**|Add style class to form item|
|**this.removeClassName(fields, disabled)**|Remove form item style|
| **this.disable(fields)**| Disable input field from user interaction|
<<<<<<< HEAD
//| **this.enable(fields)**| Disable input field from user interaction|
| **this.getComponent(name) → {Object}**|Retrieve a component from an object or element|
//| **this.getValue(fieldName)**|Get A Value From An Object|
//| **this.getValues() → {Object}**|Get the values of all fields when values change|
|**this.hide(fields)**|Hides the field|
|**this.show(fields)**|Displays the field|
=======
| **this.enable(fields)**| Disable input field from user interaction|
| **this.getComponent(name) → {Object}**|Retrieve a component from an object or element|
| **this.getValue(fieldName)**|Get A Value From An Object|
| **this.getValues() → {Object}**|Get the values of all fields when values change|
|**this.hide(fields)**|Hides the field|
|**this.show(fields)**|Displays the field|
|**this.setData(Value)**|Set the data in the field|
>>>>>>> 5f66f614f205832cb18ceaf38d8ff2c0ad96a69e

## Config

| **Name**|**Description**|**Icon**|
|---------------|----------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|
|**ID**| This is a unique identifier which is used to access the field by the API and the key of the field when the form is saved|<img src= "/apps/components/img/input_id.png">|
<<<<<<< HEAD
|**Type**|Choose the arrangement of tabs from **Default**, **Tabs** or **Border-Card**|<img src= "/apps/components/img/tabs_type.png">|
|**Tab Position**|Choose the tabs from **Top**, **Left** or **Right** or **Bottom**|<img src= "/apps/components/img/tabs_type.png">|
|**Tab Options**|Choose the number of tabs you wish to have in the form|<img src= "/apps/components/img/tabs_options.png">|
|**Custom Class**| A HTML class attribute which allows further customisation **[See Form Attribute > Style Sheets**](**add anchor text**)|<img src= "/apps/components/img/input_customclass.png">|
|**Attribute Action**| Enable **Hidden** to action to hide the field|<img src= "/apps/components/img/alert_arrtibuteaction.png">|
=======
|**Name**| [**Optional**] The visual identifier label of the field|<img src= "/apps/components/img/input_name.png">|
|**Width**| [**Optional**] To set the width of the field|<img src= "/apps/components/img/input_width.png">|
|**Label Width**|Width of the label associated with an input field. It determines the horizontal space occupied by the label text|<img src= "/apps/components/img/input_labelwidth1.png">|
|**Label Wrap**| If the label is longer than the allowed width the text will continue on another line|<img src= "/apps/components/img/input_labelwrap1.png">|
|**Hide Label**| Hides the label on the form|<img src= "/apps/components/img/input_hidelabel.png">|
|**Placeholder**| The short hint is displayed in the input field before the user enters a value|<img src= "/apps/components/img/input_placeholder.png">|
|**Text Prompt**| A description to aid the user when completing the field|<img src= "/apps/components/img/input_textprompt.png">|
|**Max Length**| Limit the amount of characters the field supports|<img src= "/apps/components/img/input_maxlength.png">|
|**Default Value**| The default value which is filled in the field before the user changes it|<img src= "/apps/components/img/input_defaultvalue.png">|
|**Custom Class**| A HTML class attribute which allows further customisation **[See Form Attribute > Style Sheets**](**add anchor text**)|<img src= "/apps/components/img/input_customclass.png">|
|**Attribute Action**|Enable **Data Binding** to connect the data to UI. <br> Enable **Hidden** to action to hide the field. <br> Enable **Disabled** action to make the field unsuable. <br>Enable **Show clear button** action make the clear button visible. <br> Enable **Show Password** action make the password visible. <br>Enable **Show word count** action make the word count visible|<img src= "/apps/components/img/input_attributeaction.png">|

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
||**rule**: Verification rule, you can view the verification configuration information through this parameter; rule.fieldcan get the field identifier of the current verification|
||**value**: Value of the current field|
||**callback**: Callback function (must be called) upon completion of validation; **callback('Error message')/ callback(new Error('Error message'))**. These are two ways to return an error message|

<img src= "/apps/components/img/input_validation.png">

!!! Info
    1. **Regular expressions** should be wrapped with //, as in:/^1[3456789]\d{9}$/"
    2. The **callback()function** is also called to verify success in the custom checkup method.
>>>>>>> 5f66f614f205832cb18ceaf38d8ff2c0ad96a69e