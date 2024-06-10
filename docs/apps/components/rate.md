# Rate

## Description

A **Rate** component allows users to express their level of satisfaction, preference, or opinion on something using a visual scale.

<img src= "/apps/components/img/rate.png">

## Use Case

1. Evaluating products or services
2. Gauging satisfaction levels
3. Prioritizing user preferences
4. Enhancing user engagement
5. Interactive feedback loops
6. Gathering quantitative data
7. Market research surveys
8. Website usability testing
9. A/B testing

### Interactivity

1. **Tooltips**: Informative pop-ups explaining the implications or meaning of each rating level, especially for complex criteria.
2. **Remember past ratings**: Pre-fill the rating based on the user's previous rating for the same item, saving time and effort.
3. **Contextual recommendations**: Based on the user's rating, suggest similar items or content they might enjoy.
4. **Adaptive interfaces**: Adjust the rating scale or feedback options based on the user's previous interactions or browsing behavior.

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
|`this.getValue`|Get A Value From a component|`(fieldName: String)`|
|`this.hide`|Hides the field|`(fields: String`&#124;`String[])`|
|`this.show`|Displays the field|`(fields: String`&#124;`String[])`|
|`this.disable`| Disable rate field from user interaction|`(fields: String`&#124;`String[])`|
|`this.enable`| Enable rate field from user interaction|`(fields: String`&#124;`String[])`|
|`this.setData`|Set the data in the field. The Value object should be of type { componentId: componentValue }|`(Value: Object)`|

!!! Info
    1. The show() and hide() methods can also be used to control the visibility of the rate component in response to user input.
    2. **Fields** refers to a **component ID** or a **list of component IDs**. You can fetch the ID from the **Component Attribute** panel in the Page Builder.
    3. Before using **this.show(fields)**, make sure the component is **hidden**. This can be done using **this.hide(fields)** or by **enabling** the **Hidden checkbox** in the Component Attribute panel.
    4. Before using **this.enable(fields)**, make sure the component is **disabled**. This can be done using **this.disable(fields)** or by **enabling** the **Disabled checkbox** in the Component Attribute panel.

#### Steps to use the methods for the Page Builder components

1. Go to Form Attribute :material-menu-right: Action Panel :material-menu-right: Setting :material-menu-right: (Mounted | refresh | click 'Add action').
2. Write the method/code as shown in the **Example** below.
3. Click on `Save`.
4. On the main screen click on `Save` again.
5. Click on `Preview` to see the code in action.
<img src= "/apps/components/img/rate2.png">

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
            this.addClassName('rate_2n2vy8wj', 'abc')
            ```

    2. `this.removeClassName(fields, className)`
        ```js
        this.removeClassName('rate_2n2vy8wj', 'abc')
        ```
    
    3. `this.getValues()`
        ```js
        var data = this.getValues();
        console.log(data);
        ```
    
    4. `this.hide(fields)`
        ```js
        var fields= ['rate_2n2vy8wj']
        this.hide(fields)
        ```
    
    5. `this.show(fields)`
        ```js
        var fields= ['rate_2n2vy8wj']
        this.show(fields)
        ```
    
    6. `this.disable(['fields'])`
        ```js
        this.disable(['rate_2n2vy8wj'])
        ```
    
    7. `this.enable(['fields'])`
        ```js
        this.enable(['rate_2n2vy8wj'])
        ```
    
    8.  `this.getValue('fieldName')`
        ```js
        var ratename = this.getValue('rate_2n2vy8wj');
        console.log('getValue', ratename);
        ```
    
    9. `this.getComponent('component_ID')`
        ```js
        var ratename = this.getComponent('rate_2n2vy8wj');
        console.log('getComponent', ratename);
        ```

## Config

| **Name**|**Description**|**Icon**|
|---------|---------------|--------|
|**ID**| The rate component's unique identifier|<img src= "/apps/components/img/input_id.png">|
|**Name**| [**Optional**] The display name of the rate field|<img src= "/apps/components/img/checkbox_name.png">|
|**Width**| [**Optional**] Width of the field|<img src= "/apps/components/img/input_width.png">|
|**Label Width**|Width of the label associated with an input field. It determines the horizontal space occupied by the label text|<img src= "/apps/components/img/input_labelwidth1.png">|
|**Label Wrap**| If the label is longer than the allowed width the text will continue on another line|<img src= "/apps/components/img/input_labelwrap1.png">|
|**Hide Label**| Hides the label on the form|<img src= "/apps/components/img/input_hidelabel.png">|
|**Text Prompt**| A description to aid the user when completing the field|<img src= "/apps/components/img/input_textprompt.png">|
|**Maximum**|Number of stars for rating|<img src= "/apps/components/img/rate_maximum.png">|
|**Allow Half**|Enable this option to allow half rating. Half rating values are decimals like 3.5|<img src= "/apps/components/img/rate_allowhalf.png">|
|**Custom Class**| An HTML class attribute which allows further customisation [See Form Attribute > Style Sheets](https://docs.connexcs.com/apps/page-builder/#form-attribute)|<img src= "/apps/components/img/input_customclass.png">|
|**Attribute Action**|Enable **Data Binding** to connect the data to UI. <br> Enable **Hidden** action to hide the field. <br> Enable **Disabled** action to make the field unusable. <br>Enable **Show Score** for displaying the rate score.|<img src= "/apps/components/img/rate_attributeaction.png">|
|**Action Settings**|Click on the drop-down to select the pre-defined methods you wish to apply to your component. In this case, you can choose either **mounted** or **refresh** for `onChange`|<img src= "/apps/components/img/radio_ac.png">|

### Validation

Form validation is the process of checking the data entered into a form to ensure that it's valid and complete.

This helps to prevent users from submitting forms with invalid data, which can cause problems for the application that's processing the form.

Form validation can be performed using a variety of methods, including:

| **Name**| **Description**|
|---------|----------------|
| **Required**|If enabled, then the field value can't be empty, otherwise an error message is emitted|
|**Custom Validation Rules**|(rule, value, callback) => {|
||**rule**: Verification rule, you can view the verification configuration information through this parameter; **rule.field** can get the field identifier of the current verification|
||**value**: Value of the current field|
||**callback**: Callback function (must be called) upon completion of validation; **callback('Error message')/ callback(new Error('Error message'))**. These are two ways to return an error message|

<img src= "/apps/components/img/cascader_validation.png">

!!! Info
    1. The **callback() function** is also called to verify success in the custom checkup method.

## First time User?

If you are using the Page Builder components on the ConnexCS platform for the first time, we request you to use our guide on <a href="https://docs.connexcs.com/apps/page-builder/#steps-to-use-components-in-the-page-builder" target="_blank">steps to use the Components</a>.