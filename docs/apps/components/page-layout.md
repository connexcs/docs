# Page Layout

## Description

Page Layout helps to the overall arrangeme and organize different form elements on a single page or screen.

It's like the skeleton that holds all the individual form parts together and determines how they will be displayed to users.

Think of it like the floor plan of a house. Just like how a house layout arranges rooms, windows, and doors, a page layout in a form determines the placement, size, and spacing of various form elements.

You can arrange elements as **Header**, **Aside**, **Footer** or in the **Main** body.

<img src= "/apps/components/img/pagelayout.png">

## Use Case

1. **Usability**: Makes the form easier to understand and navigate, ultimately leading to a smoother user experience and higher completion rates.

2. **Visual appeal**: A clean and organized layout makes the form more visually appealing and engaging for users.

3. **Data organization**: Grouping related elements helps users understand the relationships between different pieces of information they need to provide.

4. **Accessibility**: A logical layout ensures that users with disabilities can easily access and interact with all form elements.

## API


### Methods

| **Name**| **Description**|
|----------------------|---------------------------------------------------------------------|
//|**this.addClassName(fields, disabled)**|Add style class to form item|
//|**this.removeClassName(fields, disabled)**|Remove form item style|
//| **this.disable(fields)**| Disable input field from user interaction|
//| **this.enable(fields)**| Disable input field from user interaction|
//| **this.getComponent(name) → {Object}**|Retrieve a component from an object or element|
//| **this.getValue(fieldName)**|Get A Value From a component|
//| **this.getValues() → {Object}**|Get the values of all fields when values change|
//|**this.hide(fields)**|Hides the field|
//|**this.show(fields)**|Displays the field|

## Config

| **Name**|**Description**|**Icon**|
|---------------|----------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|
|**ID**| This is a unique identifier which is used to access the field by the API and the key of the field when the form is saved|<img src= "/apps/components/img/input_id.png">|
|**Custom Class**| A HTML class attribute which allows further customisation **[See Form Attribute > Style Sheets**](**add anchor text**)|<img src= "/apps/components/img/input_customclass.png">|
|**Attribute Action**|Enable **Hidden** to action to hide the field|<img src= "/apps/components/img/alert_arrtibuteaction.png">|