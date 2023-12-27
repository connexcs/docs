# Select

## Description

The **Select** component is a dropdown menu that allows users to choose one option from a predefined list.

It's a versatile tool for collecting user input in situations where there are multiple, but not limitless, choices.

<img src= "/apps/components/img/select.png">

## Use Case

1. **Filtering and Selection**
   * Product Catalog
   * Search Results
   * Event Calendar
2. **Dynamically Changing Options**
   * Dependent Dropdowns
   * Conditional Options
   * Personalized Offer
3. **Data Collection and Analytics**
   * Survey Questions
   * Feedback Forms
   * Market Research
4. **Interactive and Engaging Designs**
   * Customizable Options

### Interactivity

1. **Search functionality**: Integrate a search bar within the dropdown menu for quickly finding specific options in long lists.
2. **Dependent dropdowns**: Link multiple select components, making the options in the second dropdown dependent on the selection in the first.
3. **Conditional options**: Based on user input in other form fields, dynamically hide or show irrelevant options in the select list.
4. **Preview features**: When users hover over an option, display a preview of what happens if they select it.

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
//| **this.enable(fields)**| Disable input field from user interaction|
| **this.getComponent(name) → {Object}**|Retrieve a component from an object or element|
//| **this.getValue(fieldName)**|Get A Value From a component|
| **this.getValues() → {Object}**|Get the values of all fields when values change|
|**this.hide(fields)**|Hides the field|
|**this.show(fields)**|Displays the field|
|**this.setData(Value)**|Set the data in the field|
|**this.getFieldDataSource**|Get information from the data source.
|**this.refreshFieldDataSource**|Refresh the datasource data bound to the form field

## Config

| **Name**|**Description**|**Icon**|
|---------------|----------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|
|**ID**| This is a unique identifier which is used to access the field by the API and the key of the field when the form is saved|<img src= "/apps/components/img/input_id.png">|
|**Name**| [**Optional**] The visual identifier label of the field|<img src= "/apps/components/img/input_name.png">|
|**Width**| [**Optional**] To set the width of the field|<img src= "/apps/components/img/checkbox_name.png">|
|**Label Width**|Width of the label associated with an input field. It determines the horizontal space occupied by the label text|<img src= "/apps/components/img/input_labelwidth1.png">|
|**Label Wrap**| If the label is longer than the allowed width the text will continue on another line|<img src= "/apps/components/img/input_labelwrap1.png">|
|**Hide Label**| Hides the label on the form|<img src= "/apps/components/img/input_hidelabel.png">|
|**Placeholder**| The short hint is displayed in the input field before the user enters a value|<img src= "/apps/components/img/input_placeholder.png">|
|**Text Prompt**| A description to aid the user when completing the field|<img src= "/apps/components/img/input_textprompt.png">|
|**Multiple**|Choose multiple options from the available list|<img src= "/apps/components/img/select_multiple.png">|
|**Searchable**|Enable this option to search the options from the list|<img src= "/apps/components/img/select_searchable.png">|
|**Option**|Choose either **Static** or **Dynamic** way of adding data to the options of the Select <br><br>**Static data** refers to a fixed set of options that are predefined and loaded into the select at the time of initialization</br></br> **Dynamic data** are options fetched as needed from sources like databases or APIs. The select updates choices based on user selections. You select from **Data source** which refers to the origin of the data; **Function** which refers to the code that manipulates the data, and **Assigned Value** which refers to the specific value stored or associated with a data element|<img src= "/apps/components/img/checkbox_static.png"> <img src= "/apps/components/img/checkbox_dynamic.png">|
|**Custom Class**| A HTML class attribute which allows further customisation **[See Form Attribute > Style Sheets**](**add anchor text**)|<img src= "/apps/components/img/input_customclass.png">|
|**Attribute Action**|Enable **Data Binding** to connect the data to UI. <br> Enable **Hidden** to action to hide the field. <br> Enable **Disabled** action to make the field unsuable. <br>Enable **Show clear button** action make the clear button visible.|<img src= "/apps/components/img/select_attributeaction.png">|

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
