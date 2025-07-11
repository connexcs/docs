# Text Area

## Description

The **Text-Area** element allows users to write freely across multiple lines, ideal for capturing extensive information or detailed responses.

<img src= "/apps/components/img/textarea.png" style="border: 2px solid #4472C4; border-radius: 8px;">

## Use Case

1. Capture intensive feedback information
2. Open-ended survey questions
3. Customer support requests
4. Comment section
5. Personalized descriptions
6. Bug reporting

### Interactivity

1. Text areas can be linked with APIs or functionalities within your form, like spell-checking, word count indicators, or even live collaboration features.
2. Enable real-time co-editing of text within the "text-area," empowering teamwork and streamlining brainstorming sessions.
3. Integrate spell-checking and grammar suggestions.
4. Word count and character limit indicators.
5. Conditional content based on keywords.
6. Social media integration.

## API

### Events

| **Name**| **Description**|
|---------|---------------|
|`onChange (element)`| The onChange event occurs when the value of a field is changed|
|`onFocus (element)`| The onfocus event occurs when a field gets focus|
|`onBlur (element)`| The onblur event occurs when a field loses focus|

### Methods

| **Name**| **Description**|**Parameters**|
|---------|----------------|--------------|
|`this.addClassName`|Add style class to a form item|`(fields: String`&#124;`String[], className: String)`|
|`this.removeClassName`|Remove style class from a form item|`(fields: String`&#124;`String[], className: String)`|
|`this.getComponent`|Returns a component whose id has been passed as a parameter|`(component_ID: String) : Object`|
|`this.hide`|Hides the field|`(fields: String`&#124;`String[])`|
|`this.show`|Displays the field|`(fields: String`&#124;`String[])`|
|`this.disable`| Disable text-area field from user interaction|`(fields: String`&#124;`String[])`|
|`this.enable`| Enable text-area field from user interaction|`(fields: String`&#124;`String[])`|
|`this.setData`|Set the data in the field. The Value object should be of type { componentId: componentValue }|`(Value: Object)`|
|`this.getValue`|Get A Value From a component|`(fieldName: String)`|
|`this.getValues`|Gets the current values of all fields|`() : Object`|

!!! Info
    1. The show() and hide() methods can also be used to control the visibility of a text-area in response to user input.
    2. **Fields** refers to a **component ID** or a **list of component IDs**. You can fetch the ID from the **Component Attribute** panel in the Page Builder.
    3. Before using **this.show(fields)**, make sure the component is **hidden**. This can be done using **this.hide(fields)** or by **enabling** the **Hidden checkbox** in the Component Attribute panel.
    4. Before using **this.enable(fields)**, make sure the component is **disabled**. This can be done using **this.disable(fields)** or by **enabling** the **Disabled checkbox** in the Component Attribute panel.

#### Steps to use the methods for the Page Builder components

1. Go to Form Attribute :material-menu-right: Action Panel :material-menu-right: Setting :material-menu-right: (Mounted | refresh | click 'Add action').
2. Write the method/code as shown in the **Example** below.
3. Click on `Save`.
4. On the main screen click on `Save` again.
5. Click on `Preview` to see the code in action.
<img src= "/apps/components/img/textarea2.png" style="border: 2px solid #4472C4; border-radius: 8px;">

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
            this.addClassName('textarea_hl6emwsb', 'abc')
            ```

    2. `this.removeClassName(fields, className)`
        ```js linenums="1"
        this.removeClassName('textarea_hl6emwsb', 'abc')
        ```
    
    3. `this.hide(fields)`
        ```js linenums="1"
        var fields= ['textarea_hl6emwsb']
        this.hide(fields)
        ```
    
    4. `this.show(fields)`
        ```js linenums="1"
        var fields= ['textarea_hl6emwsbi']
        this.show(fields)
        ```
    
    5. `this.disable(['fields'])`
        ```js linenums="1"
        this.disable(['textarea_hl6emwsb'])
        ```
    
    6. `this.enable(['fields'])`
        ```js linenums="1"
        this.enable(['textarea_hl6emwsb'])
        ```
        
    7.  `this.setData(Value)`
        ```js linenums="1"
        this.setData(
         {"textarea_hl6emwsb": "Hi...I am Joe",});
        ```
    
    8.  `this.getComponent('component_ID')`
        ```js linenums="1"
        var textareaname = this.getComponent('textarea_hl6emwsb');
        console.log('getComponent', textareaname);
        ```
    
    9. `this.getValue('fieldName')`
        ```js linenums="1"
        var textareanamename = this.getValue('textarea_hl6emwsb');
        console.log('getValue', textareaname);
        ```
    
    10. `this.getValues()`
        ```js linenums="1"
        var data = this.getValues();
        console.log(data);
        ```

## Config

| **Name**|**Description**|**Icon**|
|---------|---------------|--------|
|**ID**| The text-area component's unique identifier|<img src= "/apps/components/img/input_id.png">|
|**Name**| [**Optional**] The display name of the text-area|<img src= "/apps/components/img/checkbox_name.png">|
|**Width**| [**Optional**] Width of the field|<img src= "/apps/components/img/input_width.png">|
|**Label Width**|Width of the label associated with an input field. It determines the horizontal space occupied by the label text|<img src= "/apps/components/img/input_labelwidth1.png">|
|**Label Wrap**| If the label is longer than the allowed width the text will continue on another line|<img src= "/apps/components/img/input_labelwrap1.png">|
|**Hide Label**| Hides the label on the form|<img src= "/apps/components/img/input_hidelabel.png">|
|**Placeholder**| The short hint is displayed in the input field before the user enters a value|<img src= "/apps/components/img/input_placeholder.png">|
|**Text Prompt**| A description to aid the user when completing the field|<img src= "/apps/components/img/input_textprompt.png">|
|**Max Length**| Limit the amount of characters the field supports|<img src= "/apps/components/img/input_maxlength.png">|
|**Rows**|Add more rows for additional information|<img src= "/apps/components/img/textarea_rows.png">|
|**Autosize**| Enable autosize to automatically adjust the element's height to fit the content it holds|<img src= "/apps/components/img/textarea_autosize.png">|
|**Default Value**| The default value which is filled in the field before the user changes it|<img src= "/apps/components/img/input_defaultvalue.png">|
|**Custom Class**| An HTML class attribute which allows further customisation [See Form Attribute > Style Sheets](https://docs.connexcs.com/apps/page-builder/#form-attribute)|<img src= "/apps/components/img/input_customclass.png">|
|**Attribute Action**|Enable **Data Binding** to connect the data to UI. <br> Enable **Hidden** action to hide the field. <br> Enable **Disabled** action to make the field unusable. <br>Enable **Show Clear button** action to make the clear button visible.<br>Enable **Show word count** action make the word count visible|<img src= "/apps/components/img/textarea_attributeaction.png">|
|**Action Settings**|Click on the drop-down to select the pre-defined methods you wish to apply to your component. In this case, you can choose either **mounted** or **refresh** for `onChange`, `onFocus`, or `onBlur`|<img src= "/apps/components/img/input_ac.png">|

### Validation

Form validation is the process of checking the data entered into a form to ensure that it's valid and complete.

This helps to prevent users from submitting forms with invalid data, which can cause problems for the application that's processing the form.

Form validation can be performed using a variety of methods, including:

| **Name**| **Description**|
|---------|----------------|
| **Required**|If enabled, then the field value can't be empty, otherwise an error message is emitted|
| **Regular expressions**|Used to match patterns in text. They can be used to validate the format of data, such as email addresses, phone numbers, and dates|
|**Custom Validation Rules**|(rule, value, callback) => {|
||**rule**: Verification rule, you can view the verification configuration information through this parameter; **rule.field** can get the field identifier of the current verification|
||**value**: Value of the current field|
||**callback**: Callback function (must be called) upon completion of validation; **callback('Error message')/ callback(new Error('Error message'))**. These are two ways to return an error message|

<img src= "/apps/components/img/textarea_validation.png" width= "300" style="border: 2px solid #4472C4; border-radius: 8px;">

!!! Info
    1. **Regular expressions** should be wrapped with //, as in:/^1[3456789]\d{9}$/"
    2. The **callback() function** is also called to verify success in the custom validation method.

## First time User?

If you are using the Page Builder components on the ConnexCS platform for the first time, we request you to use our guide on <a href="https://docs.connexcs.com/apps/page-builder/#steps-to-use-components-in-the-page-builder" target="_blank">steps to use the Components</a>.