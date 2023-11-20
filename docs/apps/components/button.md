# Button

## Description

A button can be used to trigger an event when it's clicked.

Buttons are typically used to submit forms, navigate between pages, or perform other actions.

## Use Case

Some Use Cases are listed as follows:

1. Submit Form
2. Navigate Through Multi-step Forms/Different Pages (Next, Continue, Previous, Back)
3. Trigger Specific Actions:
    * Display or hide additional fields or sections
    * Perform calculations or validations
    * Open pop-up windows or dialogs
    * Reset or Clear Form

4. Trigger Custom Workflows

### Interactivity

**Interactivity** is the ability of a web page or application to respond to user input.

Here are some examples of how interactivity can be implemented for **Button** components:

1. **Submit forms**: A common use of button interactivity is to submit forms to a server for processing. When a user clicks the submit button, the form data is validated and sent to the server, resulting in actions such as saving data, creating accounts, or processing orders.

2. **Display or Hide elements**: Buttons can be used to toggle the visibility of specific elements on the form. For instance, clicking a "Show Advanced Options" button might reveal additional fields or sections of the form, providing more granular control to users.

3. **Perform Data Manipulation or Calculations**: It's useful for real-time validation, dynamic calculations, or updating form fields based on other inputs.

4. **Navigate to Different Pages or Sections**: It allows for multi-step forms, progressive disclosure, or branching based on user choices.

5. **Trigger Animations or Visual Effects**: Buttons can initiate animations or visual effects to enhance the user experience and provide visual feedback. It can include highlighting fields upon clicking, fading in or out elements, or displaying progress indicators.

6. **Open pop-up windows or dialogs**: Buttons can be used to open pop-up windows or dialogs for displaying additional information, collecting supplementary data, or providing context-sensitive guidance.

7. **Trigger custom actions or workflows**: It allows for extending the form builder's functionality and integrating it with external systems.

## API

### Events

| **Name**| **Description**|
|----------------------|---------------------------------------------------------------------|
| **onClick (element)**| Event handler that's triggered when the button is clicked. This event handler can be used to perform any number of actions, such as submitting the form, redirecting the user to a different page, or displaying an error message|

### Methods

| **Name**| **Description**|
|----------------------|---------------------------------------------------------------------|
|**(static) addClassName(fields, disabled)**|Add style class to form item|
| **this.disabled(fields,true)**| Disable input field from user interaction|
| **(static) getComponent(name) → {Object}**|Retrieve a component from an object or element|
|**(static) getData(isValidateopt) → {Promise.<Object>}**|To get form data|
| **(static) getValue(fieldName)**|Get A Value From An Object|
|**(static) hide(fields)**|Hides the field|
|**(static) refresh()**|Refresh the form, when the form data changes, you need to call this me
thod for re-render|
|**(static) removeClassName(fields, disabled)**|Remove form item style|
|**this.reset()**|Reset Form Fields Data|
//|**(static) scriptForge(name, data, fn, args) → {Promise.<Boolean>}**|Access scriptForge|
//|**sendrequest**|
|**(static) setRules(field, rules)**|Set Form Field Validation Rules|



### Config

| **Name**|**Description**|
|---------------|----------------------------------------------------------------------------------------------------------------------------------------|
|**ID**| This is a unique identifier which is used to access the field by the API and the key of the field when the form is saved|
|**Name**| [**Optional**] An identifier for the button within the form. It is used by the form builder to associate the button with the data it is submitting. The name is typically not displayed to the user|
|**Button Name**| [**Optional**] The visual identifier label of the field|
|**Width**| [**Optional**] To set the width of the field|
|**Label Width**| [**Optional**] Sets the width of the label|
|**Label Wrap**| If the label is longer than the allowed width the text will continue on another line|
|**Hide Label**| Hides the label on the form|
|**Placeholder**| The short hint is displayed in the input field before the user enters a value|
|**Text Prompt**| A description to aid the user when completing the field|
|**Button Size**| Select the size of the button from 3 choices; **Large**, **Default** or **Small**|
|**Button Type**| Select the type of button from: **Default**, **Primary**, **Success**, **Warning**, **Danger**, **Info**, **Text**, or **Link**|
|**Determine whether it's**|You may select the shape of the button as **plain**, **round** or **circle**|
|**Custom Class**| A HTML class attribute which allows further customisation **[See Form Attribute > Style Sheets**](**add anchor text**)|
|**Attribute Action**|Enable **Hidden** action to hide the field|
||Enable **Disabled** action to make the field unsuable|

