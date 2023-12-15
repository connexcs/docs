# Tabs

## Description

The **Tabs** component acts as a conductor, orchestrating information flow and streamlining user interaction.

It's like having multiple forms within a single interface, allowing you to organize complex tasks and data into logical, bite-sized chunks.

Tabs visually categorize different sections of a form, preventing users from being overwhelmed by a large, monolithic data entry interface.

Each tab acts as a dedicated space for specific information, guiding users through the form step-by-step and preventing them from getting lost in a maze of fields.

<img src= "/apps/components/img/tabs.png">

## Use Case

1. Enhanced User Experience.
2. Data Management and Efficiency
3. Organize similar sections under one tab

### Interactivity

1. Show or hide specific tabs based on user choices in other sections of the form. For example, displaying advanced options only after basic information is filled out.
2. Progressive disclosure
3. Contextual relevance
4. Drag-and-drop reordering
5. Trigger actions like calculations, validations, or data submission upon clicking on specific tabs
6. Tab highlighting based on data
7. Tab-specific validation rules
8. Dynamic content within tabs

## API

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

## Config

| **Name**|**Description**|**Icon**|
|---------------|----------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|
|**ID**| This is a unique identifier which is used to access the field by the API and the key of the field when the form is saved|<img src= "/apps/components/img/input_id.png">|
|**Type**|Choose the arrangement of tabs from **Default**, **Tabs** or **Border-Card**|<img src= "/apps/components/img/tabs_type.png">|
|**Tab Position**|Choose the tabs from **Top**, **Left** or **Right** or **Bottom**|<img src= "/apps/components/img/tabs_type.png">|
|**Tab Options**|Choose the number of tabs you wish to have in the form|<img src= "/apps/components/img/tabs_options.png">|
|**Custom Class**| A HTML class attribute which allows further customisation **[See Form Attribute > Style Sheets**](**add anchor text**)|<img src= "/apps/components/img/input_customclass.png">|
|**Attribute Action**| Enable **Hidden** to action to hide the field|<img src= "/apps/components/img/alert_arrtibuteaction.png">|
