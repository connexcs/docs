# Time

## Description

**Time** element allows you to input the time in HH: mm :ss format.

<img src= "/apps/components/img/time.png">

## Use Case

1. Ideal for capturing specific times like appointment slots or deadlines.
2. Event registration
3. Delivery or service scheduling
4. Time zone information
5. Recurring events or reminders

### Interactivity

1. Interactive calendars
2. Live preview timelines
3. Countdown timers
4. Shared calendars and booking
5. Personal schedule integration
6. User-defined time slots
7. Time-sensitive rewards or discounts

## API

### Events

| **Name**| **Description**|
|---------|----------------|
|`onChange (element)`| The onChange event occurs when the value of a field is changed|
|`onFocus (element)`| The onfocus event occurs when a field gets focus|
|`onBlur (element)`| The onblur event occurs when a field loses focus|

### Methods

| **Name**| **Description**|**Parameters**|
|---------|----------------|--------------|
|`this.addClassName`|Add style class to a form item|`(fields: String`&#124;`String[], className: String)`|
|`this.removeClassName`|Remove style class from a form item|`(fields: String`&#124;`String[], className: String)`|
|`this.hide`|Hides the field|`(fields: String`&#124;`String[])`|
|`this.show`|Displays the field|`(fields: String`&#124;`String[])`|
|`this.disable`| Disable time field from user interaction|`(fields: String`&#124;`String[])`|
|`this.enable`| Enable time field from user interaction|`(fields: String`&#124;`String[])`|
|`this.getValue`|Get A Value From a component|`(fieldName: String)`|
|`this.getValues`|Gets the current values of all fields|`() : Object`|
|`this.getComponent`|Returns a component whose id has been passed as a parameter|`(component_ID: String) : Object`|
|`this.setData`|Set the data in the field. The Value object should be of type { componentId: componentValue }|`(Value: Object)`|

!!! Info
    1. The show() and hide() methods can also be used to control the visibility of the time component in response to user input.
    2. **Fields** refers to a **component ID** or a **list of component IDs**. You can fetch the ID from the **Component Attribute** panel in the Page Builder.
    3. Before using **this.show(fields)**, make sure the component is **hidden**. This can be done using **this.hide(fields)** or by **enabling** the **Hidden checkbox** in the Component Attribute panel.
    4. Before using **this.enable(fields)**, make sure the component is **disabled**. This can be done using **this.disable(fields)** or by **enabling** the **Disabled checkbox** in the Component Attribute panel.

#### Steps to use the methods for the Page Builder components

1. Go to Form Attribute :material-menu-right: Action Panel :material-menu-right: Setting :material-menu-right: (Mounted | refresh | click 'Add action').
2. Write the method/code as shown in the **Example** below.
3. Click on `Save`.
4. On the main screen click on `Save` again.
5. Click on `Preview` to see the code in action.
<img src= "/apps/components/img/time2.png">

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
            this.addClassName('time_16of90m8', 'abc')
            ```

    2. `this.removeClassName(fields, className)`
        ```js
        this.removeClassName('time_16of90m8', 'abc')
        ```
    
    3. `this.hide(fields)`
        ```js
        var fields= ['time_16of90m8']
        this.hide(fields)
        ```
    
    4. `this.show(fields)`
        ```js
        var fields= ['time_16of90m8']
        this.show(fields)
        ```
    
    5. `this.disable(['fields'])`
        ```js
        this.disable(['time_16of90m8'])
        ```
    
    6. `this.enable(['fields'])`
        ```js
        this.enable(['time_16of90m8'])
        ```
    
    7. `this.getValue('fieldName')`
        ```js
        var timename = this.getValue('time_16of90m8');
        console.log('getValue', timename);
        ```
    8. `this.getValues()`
        ```js
        var data = this.getValues();
        console.log(data);
        ```
    9. `this.getComponent('component_ID')`
        ```js
        var timename = this.getComponent('time_16of90m8');
        console.log('getComponent', timename);
        ```
    10. `this.setData(Value)`
        ```js
        this.setData(
         {
         "time_16of90m8": "10",}
        );
        ```

## Config

| **Name**|**Description**|**Icon**|
|---------|---------------|--------|
|**ID**| The time component's unique identifier|<img src= "/apps/components/img/input_id.png">|
|**Name**| [**Optional**] The display name of the time field|<img src= "/apps/components/img/checkbox_name.png">|
|**Width**| [**Optional**] Width of the field|<img src= "/apps/components/img/input_width.png">|
|**Label Width**|Width of the label associated with an input field. It determines the horizontal space occupied by the label text|<img src= "/apps/components/img/input_labelwidth1.png">|
|**Label Wrap**| If the label is longer than the allowed width the text will continue on another line|<img src= "/apps/components/img/input_labelwrap1.png">|
|**Hide Label**| Hides the label on the form|<img src= "/apps/components/img/input_hidelabel.png">|
|**Text Prompt**| A description to aid the user when completing the field|<img src= "/apps/components/img/input_textprompt.png">|
|**Range Time**| Accept user input for a range of times, rather than a single point in time|<img src= "/apps/components/img/time_range.png">|
|**Placeholder**| The short hint is displayed in the input field before the user enters a value|<img src= "/apps/components/img/input_placeholder.png">|
|**Format**|Define the time format HH: mm :ss|<img src= "/apps/components/img/time_format.png">|
|**Default Value**| The default value which is filled in the field before the user changes it|<img src= "/apps/components/img/time_default.png">|
|**Custom Class**| An HTML class attribute which allows further customisation [See Form Attribute > Style Sheets](https://bani-appsection--connexcs-docs.netlify.app/apps/page-builder/#form-attribute)|<img src= "/apps/components/img/input_customclass.png">|
|**Max Length**| Limit the amount of characters the field supports|<img src= "/apps/components/img/input_maxlength.png">|
|**Attribute Action**|Enable **Data Binding** to connect the data to UI. <br> Enable **Hidden** action to hide the field. <br> Enable **Read Only** to for viewing and not editing the time <br> Enable **Disabled** action to make the field unusable. <br> Enable **Text box is editable** to modify the time text box. <br>Enable **Show Clear button** action to make the clear button visible.|<img src= "/apps/components/img/time_attributionaction.png">|

### Validation

Form validation is the process of checking the data entered into a form to ensure that it's valid and complete.

This helps to prevent users from submitting forms with invalid data, which can cause problems for the application that's processing the form.

Form validation can be performed using a variety of methods, including:

| **Name**| **Description**|
|---------|----------------|
| **Required**| If enabled, then the field value can't be empty, otherwise an error message is emitted|
|**Custom Validation Rules**|(rule, value, callback) => {|
||**rule**: Verification rule, you can view the verification configuration information through this parameter; **rule.field** can get the field identifier of the current verification.|
||**value**: Value of the current field|
||**callback**: Callback function (must be called) upon completion of validation; **callback('Error message')/ callback(new Error('Error message'))**. These are two ways to return an error message.|

<img src= "/apps/components/img/cascader_validation.png">

!!! Info
    1. The **callback() function** is also called to verify success in the custom validation method.
## First time User?

If you are using the Page Builder components on the ConnexCS platform for the first time, we request you to use our guide on <a href="https://docs.connexcs.com/apps/page-builder/#steps-to-use-components-in-the-page-builder" target="_blank">steps to use the Components</a>.