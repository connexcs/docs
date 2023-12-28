# Chart

## Description

Charts are visual representations of data that use symbols, colors, and shapes to communicate information clearly and efficiently.

The 3 types of Charts we use are:

1. **Bar charts**: Use bars of different heights to represent data points. Often used for comparing values across categories.
2. **Line charts**: Show trends and changes over time. Connecting data points with lines allows for easy visualization of patterns.
3. **Pie charts**: Show the proportion of each category in a data set as slices of a pie. Useful for highlighting the relative size of different parts of a whole.

<img src= "/apps/components/img/charts.png">

## Use Case

1. Data Visualization Dashboards
2. Web Analytics
3. Financial Analysis
4. Interactive Presentations and Report
5. Captivating Presentations
6. Interactive Reports
7. Geographic Data Visualization

### Interactivity

1. Connect your forms to external charting services: Google Charts, ChartBlocks, or others.
2. Pass form data to these services to generate interactive charts.
3. Embed the generated charts back into your form using iframes or other techniques.

## API

### Methods

| **Name**| **Description**|
|----------------------|---------------------------------------------------------------------|
|**this.addClassName(fields, disabled)**|Add style class to form item|
|**this.removeClassName(fields, disabled)**|Remove form item style|
| **this.disable(fields)**| Disable input field from user interaction|
| **this.enable(fields)**| Disable input field from user interaction|
| **this.getComponent(name) → {Object}**|Retrieve a component from an object or element|
| **this.getValue(fieldName)**|Get A Value From a component|
| **this.getValues() → {Object}**|Get the values of all fields when values change|
|**this.hide(fields)**|Hides the field|
|**this.show(fields)**|Displays the field|
|**this.setData(Value)**|Set the data in the field|

## Config

| **Name**|**Description**|**Icon**|
|---------------|----------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|
|**ID**| This is a unique identifier which is used to access the field by the API and the key of the field when the form is saved|<img src= "/apps/components/img/input_id.png">|
|**Name**| [**Optional**] The visual identifier label of the field|<img src= "/apps/components/img/input_name.png">|
|**Width**| [**Optional**] To set the width of the field|<img src= "/apps/components/img/input_width.png">|
|**Label Width**|Width of the label associated with an input field. It determines the horizontal space occupied by the label text|<img src= "/apps/components/img/input_labelwidth1.png">|
|**Label Wrap**| If the label is longer than the allowed width the text will continue on another line|<img src= "/apps/components/img/input_labelwrap1.png">|
|**Hide Label**| Hides the label on the form|<img src= "/apps/components/img/input_hidelabel.png">|
|**Placeholder**| The short hint is displayed in the input field before the user enters a value|<img src= "/apps/components/img/input_placeholder.png">|
|**Text Prompt**| A description to aid the user when completing the field|<img src= "/apps/components/img/input_textprompt.png">|
|**Max Length**| Limit the amount of characters the field supports|<img src= "/apps/components/img/input_maxlength.png">|
|**Default Value**| The default value which is filled in the field before the user changes it|<img src= "/apps/components/img/input_defaultvalue.png">|
|**Custom Class**| A HTML class attribute which allows further customisation **[See Form Attribute > Style Sheets**](**add anchor text**)|<img src= "/apps/components/img/input_customclass.png">|
|**Attribute Action**|Enable **Data Binding** to connect the data to UI. <br> Enable **Hidden** to action to hide the field. <br> Enable **Disabled** action to make the field unsuable. <br>Enable **Show clear button** action make the clear button visible. <br> Enable **Show Password** action make the password visible. <br>Enable **Show word count** action make the word count visible|<img src= "/apps/components/img/input_attributeaction.png">|

### Validation

Form validation is the process of checking the data entered into a form to ensure that it's valid and complete.

This helps to prevent users from submitting forms with invalid data, which can cause problems for the application that's processing the form.

Form validation can be performed using a variety of methods, including:

| **Name**| **Description**|
|----------------------|---------------------------------------------------------------------|
| **Required**| Single line of text|
|**Select**|Several common type checks are provided in single-line text boxes such as string, URL, mailbox, etc.|
| **Regular expressions**|Used to match patterns in text. They can be used to validate the format of data, such as email addresses, phone numbers, and dates|
|**Custom Validation Rules**|(rule, value, callback) => {|
||**rule**: Verification rule, you can view the verification configuration information through this parameter; rule.fieldcan get the field identifier of the current verification|
||**value**: Value of the current field|
||**callback**: Callback function (must be called) upon completion of validation; **callback('Error message')/ callback(new Error('Error message'))**. These are two ways to return an error message|

<img src= "/apps/components/img/input_validation.png">

!!! Info
    1. **Regular expressions** should be wrapped with //, as in:/^1[3456789]\d{9}$/"
    2. The **callback()function** is also called to verify success in the custom checkup method.
