# Steps

## Description

The "Steps" component, guides users through a complex process by breaking it down into smaller, manageable stages.

It serves as a visual and functional indicator of progress, improving user experience and data collection.

<img src= "/apps/components/img/steps.png">

## Use Case

1. **Improved user experience**
2. **Reduced errors**
3. **Increased data quality**
4. **Better conversion rates**
5. Long registration forms
6. Checkout processes
7. Wizard-based applications
8. Multi-page questionnaires

### Interactivity

1. **Drag and drop reordering**: Allow users to rearrange the order of steps if applicable to their specific needs or preferences.
2. **Conditional branching**: Based on user choices in previous steps, branch out to different sets of subsequent steps, creating a customized form experience.
3. **Skippable steps**: Provide options for users to skip optional steps based on their answers or pre-filled information, saving them time and effort.
4. **Jump-to options**: Enable users to easily jump back and forth between previously completed steps for review or edits, offering flexibility and control.

## API

### Events

| **Name**| **Description**|
|----------------------|---------------------------------------------------------------------|
| **onChange (element)**| The onChange event occurs when the value of an field is changed|

### Methods

| **Name**| **Description**|
|----------------------|---------------------------------------------------------------------|
|**this.addClassName(fields, disabled)**|Add style class to form item|
|**this.removeClassName(fields, disabled)**|Remove form item style|
| **this.disable(fields)**| Disable input field from user interaction|
//| **this.enable(fields)**| Disable input field from user interaction|
| **this.getComponent(name) → {Object}**|Retrieve a component from an object or element|
//| **this.getValue(fieldName)**|Get A Value From An Object|
//| **this.getValues() → {Object}**|Get the values of all fields when values change|
|**this.hide(fields)**|Hides the field|
|**this.show(fields)**|Displays the field|
//|**this.setData(Value)**|Set the data in the field|

## Config

| **Name**|**Description**|**Icon**|
|---------------|----------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|
|**ID**| This is a unique identifier which is used to access the field by the API and the key of the field when the form is saved|<img src= "/apps/components/img/input_id.png">|
|**Name**| [**Optional**] The visual identifier label of the field|<img src= "/apps/components/img/checkbox_name.png">|
|**Width**| [**Optional**] To set the width of the field|<img src= "/apps/components/img/input_width.png">|
|**Label Width**|Width of the label associated with an input field. It determines the horizontal space occupied by the label text|<img src= "/apps/components/img/input_labelwidth1.png">|
|**Label Wrap**| If the label is longer than the allowed width the text will continue on another line|<img src= "/apps/components/img/input_labelwrap1.png">|
|**Hide Label**| Hides the label on the form|<img src= "/apps/components/img/input_hidelabel.png">|
|**Step Options**|**Static Data**: Enter your own step number and description.<br> **Data Source**: Dynamic data are options fetched as needed from sources like databases or APIs.|<img src= "/apps/components/img/step_static.png"> <br> <img src= "/apps/components/img/step_datasource.png">||
|**Display Direction**|Arrangement of Steps either **Horizontally** or **Vertically**|<img src= "/apps/components/img/step_displaydirection.png">|
|**Status of current step**|Choose the status of the current step from **wait**, **process**, **finish**, **error** or **success**|<img src= "/apps/components/img/step_statuscurrent.png">|  
|**Status of end step**|Choose the status of the end step from **wait**, **process**, **finish**, **error** or **success**|<img src= "/apps/components/img/step_statusend.png">|
|**Center title and description**|Enable this option to make the title and description centrally aligned |<img src= "/apps/components/img/step_statusend.png">|
|**Simple Theme**| Toggle this button to switch between themes|<img src= "/apps/components/img/step_simple.png">|
|**Custom Class**| A HTML class attribute which allows further customisation **[See Form Attribute > Style Sheets**](**add anchor text**)|<img src= "/apps/components/img/input_customclass.png">|
|**Attribute Action**|Enable **Data Binding** to connect the data to UI. <br> Enable **Hidden** to action to hide the field.|<img src= "/apps/components/img/step_attributeaction.png">|
