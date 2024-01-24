# Color

## Description

A **Color** component is a form element that allows users to select a color from a palette or input a color code.

This type of component is commonly used for forms that require users to specify colors for design elements, text formatting, or other visual aspects.

<img src= "/apps/components/img/color.png">

## Use Case

1. **Highlighting important fields**: Enhance form usability by drawing attention to critical fields.

2. **Providing visual cues for input validation**: Guide users with color-coded feedback for input correctness.

3. **Creating a more visually appealing form**: Elevate form aesthetics and user engagement through color schemes.

Here are some examples:

1. **Input fields**: Use different border colors to indicate required, optional, and disabled fields.

2. **Labels**: Use different text colors to indicate required, optional, and disabled labels.

3. **Error messages**: Use different text colors to indicate error severity (critical, warning, informational).

4. **Buttons**: Use different background colors to indicate button type (submit, delete, cancel).
5. **Highlighting progress**: You could use a progress bar with different colors to indicate the current stage of the form.
6. **Grouping related fields**: You could use a different color for each section of a form, or you could use a color gradient to indicate the sequence of fields.
7. **Reducing Cognitive Load**: Limiting color palettes can alleviate cognitive load on users, particularly for long or complex forms, facilitating better focus on the form itself.

### Interactivity

**Interactivity** is the ability of a web page or application to respond to user input.

There are a number of ways to add interactivity to the **Color** component.

Some of the most common methods include:

1. **Disable/enable** the color picker based on other form values using the enable() and disable() methods. For example, disable if a checkbox is unchecked.

2. **Show/hide** the picker conditionally by calling show() and hide() methods. For example, only show it if a radio button is selected.

3. **Validate** the selected color using validate() and display errors for invalid values.

4. **Change** available colors in the palette dynamically based on other form selections.

5. **Preselect** the color based on logic and calculations when the form initializes.

6. **Update** styles of other elements based on the selected color using CSS custom properties.

7. **Display** color preview swatches elsewhere in the form when the color changes.

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
|`this.getValue`|Get A Value From a component|`(fieldName String()`|
|`this.setData`|Set the default color|`(Value: Hexadecimal color code)`|

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
            this.addClassName('color_zxqxhwlh', 'abc')
            ```

    2. `this.removeClassName(fields, className)`
        ```js
        this.removeClassName('color_zxqxhwlh', 'abc')
        ```
    
    3. `this.getValues(fieldName)`
        ```js
        var data = this.getValues();
        console.log(data);
        ```
    
    4. `this.hide(fields)`
        ```js
        var fields= ['color_zxqxhwlh']
        this.hide(fields)
        ```
    
    5. `this.show(fields)`
        ```js
        var fields= ['color_zxqxhwlh']
        this.show(fields)
        ```
    
    6. `this.disable(['fields'])`
        ```js
        this.disable(['color_zxqxhwlh'])
        ```
    
    7. `this.getValue('fieldName')`
        ```js
        var colorname = this.getValue('color_zxqxhwlh');
        console.log('getValue', colorname);
        ```
    
    8. `this.getComponent('component_ID')`
        ```js
        var colorname = this.getComponent('color_zxqxhwlh');
        console.log('getComponent', colorname);
        ```
    
    9. `this.setData(Value)`
        ```js
        this.setData(
         {
         ""color_o1cfjhoq": "#AEE710",}
        );
        ```

## Config

| **Name**|**Description**|**Icon**|
|---------|---------------|--------|
|**ID**| Color's unique identifier|<img src= "/apps/components/img/input_id.png">|
|**Name**| [**Optional**] The display name of the color field|<img src= "/apps/components/img/checkbox_name.png">|
|**Width**| [**Optional**] Width of the field|<img src= "/apps/components/img/input_width.png">|
|**Label Width**|Width of the label associated with an input field. It determines the horizontal space occupied by the label text|<img src= "/apps/components/img/input_labelwidth1.png">|
|**Label Wrap**| If the label is longer than the allowed width the text will continue on another line|<img src= "/apps/components/img/input_labelwrap1.png">|
|**Hide Label**| Hides the label on the form|<img src= "/apps/components/img/input_hidelabel.png">|
|**Text Prompt**| A description to aid the user when completing the field|<img src= "/apps/components/img/input_textprompt.png">|
|**Support Transparency Options**|Ability to specify the transparency level of a color|<img src= "/apps/components/img/color_support.png">
|**Default Value**| Controls the initial color selection in a color picker, while still allowing the user to change it if desired|<img src= "/apps/components/img/color_default.png">
|**Custom Class**| An HTML class attribute which allows further customisation [See Form Attribute > Style Sheets](https://bani-appsection--connexcs-docs.netlify.app/apps/page-builder/#form-attribute)|<img src= "/apps/components/img/input_customclass.png">|
|**Attribute Action**|Enable **Data Binding** to connect the data to UI<br>Enable **Hidden** action to hide the field</br>Enable **Disabled** action to make the field unusable|<img src= "/apps/components/img/checkbox_attributeaction.png">|

### Validation

Form validation is the process of checking the data entered into a form to ensure that it's valid and complete.

This helps to prevent users from submitting forms with invalid data, which can cause problems for the application that's processing the form.

Form validation can be performed using a variety of methods, including:

| **Name**| **Description**|
|---------|----------------|
| **Required**| Single line of text|
|**Custom Validation Rules**|(rule, value, callback) => {|
||**rule**: Verification rule, you can view the verification configuration information through this parameter; rule.fieldcan get the field identifier of the current verification.|
||**value**: Value of the current field|
||**callback**: Callback function (must be called) upon completion of validation; **callback('Error message')/ callback(new Error('Error message'))**. These are two ways to return an error message.|

<img src= "/apps/components/img/cascader_validation.png">

!!! Info
    1. The **callback()function** is also called to verify success in the custom checkup method.

## First time User?

If you are using the Page Builder components on the ConnexCS platform for the first time, we request you to use our guide on <a href="https://bani-appsection--connexcs-docs.netlify.app/apps/page-builder/#steps-to-use-components-in-the-page-builder" target="_blank">steps to use the Components</a>.
