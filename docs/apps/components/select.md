# Select

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Applications & Components<br>
<strong>Audience</strong>: Administrators, Engineers, App Developers<br>
<strong>Difficulty</strong>: Beginner to Intermediate<br>
<strong>Time Required</strong>: Approximately 15–30 minutes<br>
<strong>Prerequisites</strong>: Active ConnexCS account, access to the Applications module, basic understanding of UI component configuration and form input components (dropdown/select behavior)<br>
<strong>Related Topics</strong>: <a href="https://docs.connexcs.com/apps/components/input/">Input Component</a>, <a href="https://docs.connexcs.com/apps/components/number/">Number Component</a>, <a href="https://docs.connexcs.com/apps/components/radio/">Radio Component</a>, <a href="https://docs.connexcs.com/apps/components/grid/">Grid Component</a><br>
<strong>Next Steps</strong>: Build a sample form or UI using the Select component to present dropdown options; test selection behavior and data binding (single/multiple select, default value, option loading) for different use-cases<br>

</details>

## Description

The **Select** component is a dropdown menu that allows users to choose one option from a predefined list.

It's a versatile tool for collecting user input in situations where there are multiple, but not limitless, choices.

<img src= "/apps/components/img/select.png" style="border: 2px solid #4472C4; border-radius: 8px;">

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
|---------|----------------|
| `onChange (element)`| The onChange event occurs when the value of a field is changed|
| `onFocus (element)`| The onfocus event occurs when a field gets focus|
| `onBlur (element)`| The onblur event occurs when a field loses focus|

### Methods

| **Name**| **Description**|**Parameters**|
|---------|----------------|--------------|
|`this.addClassName`|Add style class to a form item|`(fields: String`&#124;`String[], className: String)`|
|`this.removeClassName`|Remove style class from a form item|`(fields: String`&#124;`String[], className: String)`|
|`this.getComponent`|Returns a component whose id has been passed as a parameter|`(component_ID: String) : Object`|
|`this.getValues`|Gets the current values of all fields|`() : Object`|
|`this.hide`|Hides the field|`(fields: String`&#124;`String[])`|
|`this.show`|Displays the field|`(fields: String`&#124;`String[])`|
|`this.disable`| Disable select field from user interaction|`(fields: String`&#124;`String[])`|
|`this.enable`| Enable select field from user interaction|`(fields: String`&#124;`String[])`|
|`this.getValue`|Get A Value From a component|`(fieldName: String)`|
|`this.setData`|Set the data in the field. The Value object should be of type { componentId: componentValue }|`(Value: Object)`|
|`this.refreshFieldDataSource`|Refresh the datasource data bound to the whole page|

!!! Info
    1. The show() and hide() methods can also be used to control the visibility of a select component in response to user input.
    2. **Fields** refers to a **component ID** or a **list of component IDs**. You can fetch the ID from the **Component Attribute** panel in the Page Builder.
    3. Before using **this.show(fields)**, make sure the component is **hidden**. This can be done using **this.hide(fields)** or by **enabling** the **Hidden checkbox** in the Component Attribute panel.
    4. Before using **this.enable(fields)**, make sure the component is **disabled**. This can be done using **this.disable(fields)** or by **enabling** the **Disabled checkbox** in the Component Attribute panel.

#### Steps to use the methods for the Page Builder components

1. Go to Form Attribute :material-menu-right: Action Panel :material-menu-right: Setting :material-menu-right: (Mounted | refresh | click 'Add action').
2. Write the method/code as shown in the **Example** below.
3. Click on `Save`.
4. On the main screen click on `Save` again.
5. Click on `Preview` to see the code in action.
<img src= "/apps/components/img/select2.png" style="border: 2px solid #4472C4; border-radius: 8px;">

!!! Example
    1. `this.addClassName(fields, className)`
          * Go to Form Attribute :material-menu-right: Style Sheets :material-menu-right: add the class
            ```
            .abc{ // abc is the class name
            background-color: red;
            }
            ```
          * Follow the steps mentioned above, under Steps to use the methods for the Page Builder components
          * ```
            this.addClassName('select_rzaltclo', 'abc')
            ```

    2. `this.removeClassName(fields, className)`
        ```js linenums="1"
        this.removeClassName('select_rzaltclo', 'abc')
        ```
    
    3. `this.getValues()`
        ```js linenums="1"
        var data = this.getValues();
        console.log(data);
        ```
    
    4. `this.hide(fields)`
        ```js linenums="1"
        var fields= ['select_rzaltclo']
        this.hide(fields)
        ```
    
    5. `this.show(fields)`
        ```js linenums="1"
        var fields= ['select_rzaltclo']
        this.show(fields)
        ```
    
    6. `this.disable(['fields'])`
        ```js linenums="1"
        this.disable(['select_rzaltclo'])
        ```
    
    7. `this.enable(['fields'])`
        ```js linenums="1"
        this.enable(['select_rzaltclo'])
        ```
    
    8.  `this.getValue('fieldName')`
        ```js linenums="1"
        var selectname = this.getValue('select_rzaltclo');
        console.log('getValue', selectname);
        ```
      
    9.  `this.getComponent('component_ID')`
        ```js linenums="1"
        var selectname = this.getComponent('select_rzaltclo');
        console.log('getComponent', selectname);
        ```

    10.  `this.setData(Value)`
        ```js linenums="1"
        this.setData(
         {"select_rzaltclo": "Option 2",});
        ```
    
    11. `this.refreshFieldDataSource(datasource)`
        ```js linenums="1"
        const dataSource = 'Name Of The Data Source Function'
        this.refreshFieldDataSource(dataSource)
        ```

## Config

| **Name**|**Description**|**Icon**|
|---------|---------------|--------|
|**ID**| The select component's unique identifier|<img src= "/apps/components/img/input_id.png">|
|**Name**| [**Optional**] The display name of the select field|<img src= "/apps/components/img/input_name.png">|
|**Width**| [**Optional**] Width of the field|<img src= "/apps/components/img/checkbox_name.png">|
|**Label Width**|Width of the label associated with an input field. It determines the horizontal space occupied by the label text|<img src= "/apps/components/img/input_labelwidth1.png">|
|**Label Wrap**| If the label is longer than the allowed width the text will continue on another line|<img src= "/apps/components/img/input_labelwrap1.png">|
|**Hide Label**| Hides the label on the form|<img src= "/apps/components/img/input_hidelabel.png">|
|**Placeholder**| The short hint is displayed in the input field before the user enters a value|<img src= "/apps/components/img/input_placeholder.png">|
|**Text Prompt**| A description to aid the user when completing the field|<img src= "/apps/components/img/input_textprompt.png">|
|**Multiple**|Choose multiple options from the available list|<img src= "/apps/components/img/select_multiple.png">|
|**Searchable**|Enable this option to search the options from the list|<img src= "/apps/components/img/select_searchable.png">|
|**Option**|Choose either **Static** or **Dynamic** way of adding data to the options of the Select <br><br>**Static data** refers to a fixed set of options that are pre-defined and loaded into the select at the time of initialization</br></br> **Dynamic data** are options fetched as needed from sources like databases or APIs. The select updates choices based on user selections. You select from **Data source** which refers to the origin of the data; **Function** which refers to the code that manipulates the data, and **Assigned Value** which refers to the specific value stored or associated with a data element|<img src= "/apps/components/img/checkbox_static.png"> <img src= "/apps/components/img/checkbox_dynamic.png">|
|**Custom Class**| An HTML class attribute which allows further customisation [See Form Attribute > Style Sheets](https://docs.connexcs.com/apps/page-builder/#form-attribute)|<img src= "/apps/components/img/input_customclass.png">|
|**Attribute Action**|Enable **Data Binding** to connect the data to UI. <br> Enable **Hidden** action to hide the field. <br> Enable **Disabled** action to make the field unusable. <br>Enable **Show Clear button** action to make the clear button visible.|<img src= "/apps/components/img/select_attributeaction.png">|
|**Action Settings**|Click on the drop-down to select the pre-defined methods you wish to apply to your component. In this case, you can choose either **mounted** or **refresh** for `onChange`, `onFocus`, or `onBlur`|<img src= "/apps/components/img/input_ac.png">|

### Validation

Form validation is the process of checking the data entered into a form to ensure that it's valid and complete.

This helps to prevent users from submitting forms with invalid data, which can cause problems for the application that's processing the form.

Form validation can be performed using a variety of methods, including:

| **Name**| **Description**|
|---------|----------------|
| **Required**| If enabled, then the field value can't be empty, otherwise an error message is emitted|
|**Custom Validation Rules**|(rule, value, callback) => {|
||**rule**: Verification rule, you can view the verification configuration information through this parameter; **rule.field** can get the field identifier of the current verification|
||**value**: Value of the current field|
||**callback**: Callback function (must be called) upon completion of validation; **callback('Error message')/ callback(new Error('Error message'))**. These are two ways to return an error message|

<img src= "/apps/components/img/input_validation.png" width= "300" style="border: 2px solid #4472C4; border-radius: 8px;">

!!! Info
    1. The **callback() function** is also called to verify success in the custom validation method.

## First time User?

If you are using the Page Builder components on the ConnexCS platform for the first time, we request you to use our guide on <a href="https://docs.connexcs.com/apps/page-builder/#steps-to-use-components-in-the-page-builder" target="_blank">steps to use the Components</a>.