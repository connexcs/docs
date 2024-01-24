# Slider

## Description

 A **Slider** component allows users to visually select a numerical value within a predefined range.
 
 It typically consists of a horizontal bar with a handle that users can drag to set their chosen value.

<img src= "/apps/components/img/slider.png">

## Use Case

1. Setting price filters
2. Choosing age brackets
3. Choose quantities of products or services

### Interactivity

1. **Dependent sliders**: Link multiple sliders together, where changing one value automatically updates the others based on predefined relationships.
2. **Conditional settings**: Based on the slider value, dynamically show or hide specific elements, customize options, or trigger different functionalities.
3. **Real-time previews**: When users adjust the slider, show immediate previews of the resulting changes, like product images based on filter selections.
4. **Adaptive interfaces**: Change the slider range, labels, or behavior based on user preferences or context, offering personalized experiences.

## API

### Events

| **Name**| **Description**|
|---------|----------------|
| `onChange (element)`| The onChange event occurs when the value of a field is changed|

### Methods

| **Name**| **Description**|**Parameters**|
|---------|----------------|--------------|
|`this.addClassName`|Add style class to a form item|`(fields: String, String[]; className: String)`|
|`this.removeClassName`|Remove style class from a form item|`(fields: String, String[]; className: String)`|
|`this.getComponent`|Returns a component whose id has been passed as a parameter|`(component_ID: String(), String[]; Object: Object)`|
|`this.getValues`|Get the values of all fields when values change|`Object`|
|`this.hide`|Hides the field|`(fields: String()`|
|`this.show`|Displays the field|`(fields: String()`|
| `this.disable`| Disable input field from user interaction|`(fields: String(), String[])`|
|`this.setData`|Set the data in the field|`(Value: Object)`|
|`this.getValue`|Get A Value From a component|`(fieldName String()`|

!!! Info
    1. The show() and hide() methods can also be used to control the visibility of an alert in response to user input.
    2. **Fields** refers to a **component ID** or a **list of component IDs**. You can fetch the ID from the **Component Attribute** panel in the Page Builder.
    3. Before using **this.show(fields)**, make sure the component is **hidden**. This can be done using **this.hide(fields)** or by **enabling** the **Hidden checkbox** in the Component Attribute panel.

#### Steps to place/use the methods for components of the Page Builder

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
          * Follow the steps mentioned above, under Steps to place/use the methods for components of the Page Builder
          * ```
            this.addClassName('slider_k9cacr9r', 'abc')
            ```

    2. `this.removeClassName(fields, className)`
        ```js
        this.removeClassName('slider_k9cacr9r', 'abc')
        ```
    
    3. `this.getValues(fieldName)`
        ```js
        var data = this.getValues();
        console.log(data);
        ```
    
    4. `this.hide(fields)`
        ```js
        var fields= ['slider_k9cacr9r']
        this.hide(fields)
        ```
    
    5. `this.show(fields)`
        ```js
        var fields= ['slider_k9cacr9r']
        this.show(fields)
        ```
    
    6. `this.disable(['fields'])`
        ```js
        this.disable(['slider_k9cacr9r'])
        ```
    
    7.  `this.getValue('fieldName')`
        ```js
        var slidername = this.getValue('slider_k9cacr9r');
        console.log('getValue', slidername);
        ```
    
    8.  `this.setData(Value)`
        ```js
        this.setData(
         {
         "slider_k9cacr9r": "45",}
        );
        ```
    
    9.  `this.getComponent('component_ID')`
        ```js
        var slidername = this.getComponent('slider_k9cacr9r');
        console.log('getComponent', slidername);
        ```

## Config

| **Name**|**Description**|**Icon**|
|---------|---------------|--------|
|**ID**| Slider's unique identifier|<img src= "/apps/components/img/input_id.png">|
|**Name**| [**Optional**] The display name of the slider field|<img src= "/apps/components/img/checkbox_name.png">|
|**Width**| [**Optional**] Width of the field|<img src= "/apps/components/img/input_width.png">|
|**Label Width**|Width of the label associated with an input field. It determines the horizontal space occupied by the label text|<img src= "/apps/components/img/input_labelwidth1.png">|
|**Label Wrap**| If the label is longer than the allowed width the text will continue on another line|<img src= "/apps/components/img/input_labelwrap1.png">|
|**Hide Label**| Hides the label on the form|<img src= "/apps/components/img/input_hidelabel.png">|
|**Text Prompt**| A description to aid the user when completing the field|<img src= "/apps/components/img/input_textprompt.png">|
|**Display Input Box**|Displays the number selected on the slider|<img src= "/apps/components/img/slider_displayinputbox.png">|
|**Minimum**|Least value for the slider range|<img src= "/apps/components/img/slider_minimum.png">|
|**Maximum**|Highest value for the slider range|<img src= "/apps/components/img/slider_maximum.png">|
|**Step**|Smallest increment or jump by which the value of the slider can change|<img src= "/apps/components/img/slider_step.png">|
|**Custom Class**| An HTML class attribute which allows further customisation [See Form Attribute > Style Sheets](https://bani-appsection--connexcs-docs.netlify.app/apps/page-builder/#form-attribute)|<img src= "/apps/components/img/input_customclass.png">|
|**Attribute Action**|Enable **Data Binding** to connect the data to UI. <br> Enable **Hidden** to action to hide the field. <br> Enable **Disabled** action to make the field unusable.|<img src= "/apps/components/img/checkbox_attributeaction.png">|

### Validation

Form validation is the process of checking the data entered into a form to ensure that it's valid and complete.

This helps to prevent users from submitting forms with invalid data, which can cause problems for the application that's processing the form.

Form validation can be performed using a variety of methods, including:

| **Name**| **Description**|
|---------|----------------|
| **Required**| Single line of text|
|**Custom Validation Rules**|(rule, value, callback) => {|
||**rule**: Verification rule, you can view the verification configuration information through this parameter; rule.fieldcan get the field identifier of the current verification|
||**value**: Value of the current field|
||**callback**: Callback function (must be called) upon completion of validation; **callback('Error message')/ callback(new Error('Error message'))**. These are two ways to return an error message|

<img src= "/apps/components/img/cascader_validation.png">

!!! Info
    1. The **callback()function** is also called to verify success in the custom checkup method.

## First time User?

If you are using the Page Builder components on the ConnexCS platform for the first time, we request you to use our guide on <a href="https://bani-appsection--connexcs-docs.netlify.app/apps/page-builder/#steps-to-use-components-in-the-page-builder" target="_blank">steps to use the Components</a>.