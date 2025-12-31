# Text

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Applications & Components<br>
<strong>Audience</strong>: Administrators, Engineers, App Developers<br>
<strong>Difficulty</strong>: Beginner to Intermediate<br>
<strong>Time Required</strong>: Approximately 15–30 minutes<br>
<strong>Prerequisites</strong>: Active ConnexCS account, access to the Applications module, basic understanding of UI component configuration and content display elements (static or dynamic text fields)<br>
<strong>Related Topics</strong>: <a href="https://docs.connexcs.com/apps/components/input/">Input Component</a>, <a href="https://docs.connexcs.com/apps/components/page-layout/">Page Layout Component</a>, <a href="https://docs.connexcs.com/apps/components/tabs/">Tabs Component</a>, <a href="https://docs.connexcs.com/apps/components/table/">Table Component</a><br>
<strong>Next Steps</strong>: Add Text components to a sample app UI to display static or dynamic information (labels, instructions, data values); combine Text with other components for layout and interaction; test rendering with different text lengths and dynamic bindings<br>

</details>

## Description

The **Text** element allows you to display any information.

Users can type text, numbers, or symbols into the designated field, providing essential information for the form's purpose.

<img src= "/apps/components/img/text.png" style="border: 2px solid #4472C4; border-radius: 8px;">

## Use Case

1. Data entry
2. Varying formats
3. User interaction
4. Concise and quick

### Interactivity

## API

### Events

| **Name**| **Description**|
|---------|----------------|
|`onChange (element)`| The onChange event occurs when the value of a field is changed|

### Methods

| **Name**| **Description**|**Parameters**|
|---------|----------------|--------------|
|`this.addClassName`|Add style class to a form item|`(fields: String`&#124;`String[], className: String)`|
|`this.removeClassName`|Remove style class from a form item|`(fields: String`&#124;`String[], className: String)`|
|`this.getComponent`|Returns a component whose id has been passed as a parameter|`(component_ID: String) : Object)`|
|`this.getValues`|Gets the current values of all fields|`() : Object`|
|`this.hide`|Hides the field|`(fields: String`&#124;`String[])`|
|`this.show`|Displays the field|`(fields: String`&#124;`String[])`|
|`this.setData`|Set the data in the field. The Value object should be of type { componentId: componentValue }|`(Value: Object)`|
|`this.getValue`|Get A Value From a component|`(fieldName: String)`|

!!! Info
    1. The show() and hide() methods can also be used to control the visibility of the text field in response to user input.
    2. **Fields** refers to a **component ID** or a **list of component IDs**. You can fetch the ID from the **Component Attribute** panel in the Page Builder.
    3. Before using **this.show(fields)**, make sure the component is **hidden**. This can be done using **this.hide(fields)** or by **enabling** the **Hidden checkbox** in the Component Attribute panel.

#### Steps to use the methods for the Page Builder components

1. Go to Form Attribute :material-menu-right: Action Panel :material-menu-right: Setting :material-menu-right: (Mounted | refresh | click 'Add action').
2. Write the method/code as shown in the **Example** below.
3. Click on `Save`.
4. On the main screen click on `Save` again.
5. Click on `Preview` to see the code in action.
<img src= "/apps/components/img/text2.png" style="border: 2px solid #4472C4; border-radius: 8px;">

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
            this.addClassName('text_t1fhz5vb', 'abc')
            ```

    2. `this.removeClassName(fields, className)`
        ```js linenums="1"
        this.removeClassName('text_t1fhz5vb', 'abc')
        ```
    
    3. `this.getValues()`
        ```js linenums="1"
        var data = this.getValues();
        console.log(data);
        ```
    
    4. `this.hide(fields)`
        ```js linenums="1"
        var fields= ['text_t1fhz5vb']
        this.hide(fields)
        ```
    
    5. `this.show(fields)`
        ```js linenums="1"
        var fields= ['text_t1fhz5vb']
        this.show(fields)
        ```
    
    6.  `this.getValue('fieldName')`
        ```js linenums="1"
        var textname = this.getValue('text_t1fhz5vb');
        console.log('getValue', textname);
        ```
    
    7.  `this.setData(Value)`
        ```js linenums="1"
        this.setData(
         {"text_t1fhz5vb": "This is the Text",});
        ```
    
    8.  `this.getComponent('component_ID')`
        ```js linenums="1"
        var textname = this.getComponent('text_t1fhz5vb');
        console.log('getComponent', textname);
        ```

## Config

| **Name**|**Description**|**Icon**|
|---------|---------------|--------|
|**ID**| The text component's unique identifier |<img src= "/apps/components/img/input_id.png">|
|**Name**| [**Optional**] The display name of the text field|<img src= "/apps/components/img/checkbox_name.png">|
|**Width**| [**Optional**] Width of the field|<img src= "/apps/components/img/input_width.png">|
|**Label Width**|Width of the label associated with an input field. It determines the horizontal space occupied by the label text|<img src= "/apps/components/img/input_labelwidth1.png">|
|**Label Wrap**| If the label is longer than the allowed width the text will continue on another line|<img src= "/apps/components/img/input_labelwrap1.png">|
|**Hide Label**| Hides the label on the form|<img src= "/apps/components/img/input_hidelabel.png">|
|**Placeholder**| The short hint is displayed in the input field before the user enters a value|<img src= "/apps/components/img/input_placeholder.png">|
|**Text Prompt**| A description to aid the user when completing the field|<img src= "/apps/components/img/input_textprompt.png">|
|**Default Value**| The default value which is filled in the field before the user changes it|<img src= "/apps/components/img/input_defaultvalue.png">|
|**Custom Class**| An HTML class attribute which allows further customisation [See Form Attribute > Style Sheets](https://docs.connexcs.com/apps/page-builder/#form-attribute)|<img src= "/apps/components/img/input_customclass.png">|
|**Attribute Action**|Enable **Data Binding** to connect the data to UI. <br> Enable **Hidden** action to hide the field.|<img src= "/apps/components/img/text_attributeaction.png">|
|**Action Settings**|Click on the drop-down to select the pre-defined methods you wish to apply to your component. In this case, you can choose either **mounted** or **refresh** for `onChange`|<img src= "/apps/components/img/radio_ac.png">|

### Validation

Form validation is the process of checking the data entered into a form to ensure that it's valid and complete.

This helps to prevent users from submitting forms with invalid data, which can cause problems for the application that's processing the form.

Form validation can be performed using a variety of methods, including:

| **Name**| **Description**|
|---------|----------------|
|**Required**|If enabled, then the field value can't be empty, otherwise an error message is emitted|

<img src= "/apps/components/img/text_validation.png" width= "300" style="border: 2px solid #4472C4; border-radius: 8px;">

## First time User?

If you are using the Page Builder components on the ConnexCS platform for the first time, we request you to use our guide on <a href="https://docs.connexcs.com/apps/page-builder/#steps-to-use-components-in-the-page-builder" target="_blank">steps to use the Components</a>.