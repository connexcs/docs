# Checkbox

## Description

A checkbox is a type of input field in a form builder that allows users to select multiple options from a set of choices.

Checkboxes are typically used to collect data about user preferences or choices.

<img src= "/apps/components/img/checkbox.png">

## Use Case

1. Allowing users to select multiple options
2. Enabling or disabling other fields
3. Collecting preferences
4. Accepting terms and conditions
5. Gathering consent
6. Filtering search results

### Interactivity

There are a number of ways to add interactivity to **Checkboxes**.

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

### Events

| **Name**| **Description**|
|---------|----------------|
| `onChange (element)`| The onChange event occurs when the value of a field is changed|

### Methods

| **Name**| **Description**|**Parameters**|
|---------|----------------|--------------|
|`this.addClassName`|Add style class to a form item|`(fields: String`&#124;`String[], className: String)`|
|`this.removeClassName`|Remove style class from a form item|`(fields: String`&#124;`String[], className: String)`|
|`this.getComponent`|Returns a component whose id has been passed as a parameter|`(component_ID: String) : Object`|
|`this.getValues`|Gets the current values of all fields|`() : Object`|
|`this.hide`|Hides the field|`(fields: String`&#124;`String[])`|
|`this.show`|Displays the field|`(fields: String`&#124;`String[])`|
|`this.disable`| Disable checkbox from user interaction|`(fields: String`&#124;`String[])`|
|`this.enable`| Enable checkbox from user interaction|`(fields: String`&#124;`String[])`|
|`this.getValue`|Get A Value From a component|`(fieldName: String)`|
|`this.setData`|Set the data in the field. The Value object should be of type { componentId: componentValue }|`(Value: Object)`|
|`this.refreshFieldDataSource`|Refresh the datasource data bound to the whole page|

!!! Info
    1. The show() and hide() methods can also be used to control the visibility of the checkbox component in response to user input.
    2. **Fields** refers to a **component ID** or a **list of component IDs**. You can fetch the ID from the **Component Attribute** panel in the Page Builder.
    3. Before using **this.show(fields)**, make sure the component is **hidden**. This can be done using **this.hide(fields)** or by **enabling** the **Hidden checkbox** in the Component Attribute panel.
    4. Before using **this.enable(fields)**, make sure the component is **disabled**. This can be done using **this.disable(fields)** or by **enabling** the **Disabled checkbox** in the Component Attribute panel.

#### Steps to use the methods for the Page Builder components

1. Go to Form Attribute :material-menu-right: Action Panel :material-menu-right: Setting :material-menu-right: (Mounted | refresh | click 'Add action').
2. Write the method/code as shown in the **Example** below.
3. Click on `Save`.
4. On the main screen click on `Save` again.
5. Click on `Preview` to see the code in action.
<img src= "/apps/components/img/check1.png">

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
            this.addClassName('checkbox_g0x4pt54z', 'abc')
            ```

    2. `this.removeClassName(fields, className)`
        ```js
        this.removeClassName('checkbox_g0x4pt54z', 'abc')
        ```
    
    3. `this.getValues()`
        ```js
        var data = this.getValues();
        console.log(data);
        ```
    
    4. `this.hide(fields)`
        ```js
        var fields= ['checkbox_g0x4pt54z']
        this.hide(fields)
        ```
    
    5. `this.show(fields)`
        ```js
        var fields= ['checkbox_g0x4pt54z']
        this.show(fields)
        ```
    
    6. `this.disable(['fields'])`
        ```js
        this.disable(['checkbox_g0x4pt54z'])
        ```
    
    7. `this.enable(['fields'])`
        ```js
        this.enable(['checkbox_g0x4pt54z'])
        ```
    
    8. `this.getValue('fieldName')`
        ```js
        var checkname = this.getValue('checkbox_g0x4pt54z');
        console.log('getValue', checkname);
        ```
    
    9. `this.getComponent('component_ID')`
        ```js
        var checkname = this.getComponent('checkbox_g0x4pt54z');
        console.log('getComponent', checkname);
        ```
    
    10. `this.setData(Value)`
        ```js
        this.setData(
         {
         "checkbox_g0x4pt54z": "Option 1", "Option 2",}
        );
        ```

## Config

| **Name**|**Description**|**Icon**|
|---------|---------------|--------|
|**ID**| The checkbox component's unique identifier|<img src= "/apps/components/img/input_id.png">|
|**Name**| [**Optional**] The display name of the checkbox|<img src= "/apps/components/img/checkbox_name.png">|
|**Width**| [**Optional**] Width of the field|<img src= "/apps/components/img/input_width.png">|
|**Label Width**|Width of the label associated with an input field. It determines the horizontal space occupied by the label text|<img src= "/apps/components/img/input_labelwidth1.png">|
|**Label Wrap**| If the label is longer than the allowed width the text will continue on another line|<img src= "/apps/components/img/input_labelwrap1.png">|
|**Hide Label**| Hides the label on the form|<img src= "/apps/components/img/input_hidelabel.png">|
|**Text Prompt**| A description to aid the user when completing the field|<img src= "/apps/components/img/input_textprompt.png">|
|**Layout**| Select the format of the Checkbox as **Block** or **Inline**|<img src= "/apps/components/img/checkbox_layout.png">|
|**Option**|Choose either **Static** or **Dynamic** way of adding data to the options of the Checkbox <br><br>**Static data** refers to a fixed set of options that are pre-defined and loaded into the Checkbox at the time of initialization</br></br> **Dynamic data** option refers to the ability to automatically populate form/page fields or modify the form's/page behavior based on various sources like databases or APIs. The checkbox updates choices based on user selections. <br>You select from **Data source** takes information from databases, APIs etc; **Assigned Variable** refers to the specific value stored or associated with a data element and serve as a way to capture and manage dynamic data within the form/page and **Function** refers specific block of code that performs a particular task related to manipulating data and influencing the form's behavior. These functions operate on the data obtained from various sources like databases, APIs, user inputs and use them to dynamically modify the form experience.|<img src= "/apps/components/img/checkbox_static.png"> <img src= "/apps/components/img/checkbox_dynamic.png">|
|**Custom Class**| An HTML class attribute which allows further customisation [See Form Attribute > Style Sheets](https://bani-appsection--connexcs-docs.netlify.app/apps/page-builder/#form-attribute)|<img src= "/apps/components/img/input_customclass.png">|
|**Attribute Action**|Enable **Data Binding** to connect the data to UI<br>Enable **Hidden** action to hide the field</br>Enable **Disabled** action to make the field un-suable|<img src= "/apps/components/img/checkbox_attributeaction.png">|
|**Action Settings**|Click on the drop-down to select the pre-defined methods you wish to apply to your component. In this case, you can choose either **mounted** or **refresh** for `onChange`|<img src= "/apps/components/img/radio_ac.png">|

### Validation

Form validation is the process of checking the data entered into a form to ensure that it's valid and complete.

This helps to prevent users from submitting forms with invalid data, which can cause problems for the application that's processing the form.

Form validation can be performed using a variety of methods, including:

| **Name**| **Description**|
|---------|----------------|
| **Required**|If enabled, then the field value can't be empty, otherwise an error message is emitted|
|**Custom Validation Rules**|(rule, value, callback) => {|
||**rule**: Verification rule, you can view the verification configuration information through this parameter; **rule.field** can get the field identifier of the current verification.|
||**value**: Value of the current field|
||**callback**: Callback function (must be called) upon completion of validation; **callback('Error message')/ callback(new Error('Error message'))**. These are two ways to return an error message.|

!!! Info
    1. The **callback() function** is also called to verify success in the custom validation method.

<img src= "/apps/components/img/cascader_validation.png">

## First time User?

If you are using the Page Builder components on the ConnexCS platform for the first time, we request you to use our guide on <a href="https://docs.connexcs.com/apps/page-builder/#steps-to-use-components-in-the-page-builder" target="_blank">steps to use the Components</a>.
