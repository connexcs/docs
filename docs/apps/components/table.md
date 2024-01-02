# Table

## Description

The **Table** component isn't just about presenting data in neat rows and columns.

It can be a powerful tool for enhancing user experience, streamlining data entry, and even adding a touch of visual appeal to your forms.

Tables provide a structured format for organizing related data within a form. Users can easily scan information, compare options, and make informed choices.

<img src= "/apps/components/img/table.png">

## Use Case

1. Structure and Flexibility
2. Enhanced User Experience
3. Streamlined Data Entry

### Interactivity

1. Beyond static data display, tables can incorporate interactive elements like checkboxes, dropdown menus, and input fields directly within cells, streamlining data entry and eliminating the need for multiple form sections.
2. Integration with buttons or actions can enable bulk editing, selection, or removal of entries within the table, saving users time and effort.
3. Integrating interactive elements like drag-and-drop reordering or row customization can increase user engagement and make data manipulation more intuitive.
4. Interactive Data Entry

## API

### Methods

| **Name**| **Description**|
|----------------------|---------------------------------------------------------------------|
|**this.addClassName(fields, disabled)**|Add style class to form item|
|**this.removeClassName(fields, disabled)**|Remove form item style|
| **this.disable(fields)**| Disable input field from user interaction|
| **this.getComponent(name) → {Object}**|Retrieve a component from an object or element|
|**this.hide(fields)**|Hides the field|
|**this.show(fields)**|Displays the field|

## Config

| **Name**|**Description**|**Icon**|
|---------------|----------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|
|**ID**| This is a unique identifier which is used to access the field by the API and the key of the field when the form is saved|<img src= "/apps/components/img/input_id.png">|
|**Width**| [**Optional**] To set the width of the field|<img src= "/apps/components/img/input_width.png">|
|**Border Width**|Choose the width of the table|<img src= "/apps/components/img/table_border.png">|
|**Border Color**|Choose the color of the table|<img src= "/apps/components/img/table_color.png">|
|**Custom Class**| A HTML class attribute which allows further customisation **[See Form Attribute > Style Sheets**](**add anchor text**)|<img src= "/apps/components/img/input_customclass.png">|
|**Attribute Action**|Enable **Hidden** to action to hide the field|<img src= "/apps/components/img/alert_arrtibuteaction.png">|
