# Collapse

## Description

Collapse helps to hide or conceal a section of a form, typically by minimizing or folding it into a smaller, more compact view.

This feature is often used to organize lengthy or complex forms, making them easier to navigate and reducing visual clutter.

<img src= "/apps/components/img/collapse.png">

## Use Case

1. Improved form organization
2. Reduced visual clutter
3. Enhanced user experience
4. Conditional visibility
5. Registration forms
6. Survey forms
7. Order forms
8. Contact forms
9. Customer feedback forms

### Interactivity

The're a number of ways to add interactivity to the **Collapse** component.

Some of the most common methods include:

1. **Toggle Visibility**: Implement the collapse/expand functionality using JavaScript, CSS, or a combination of both. When the toggle button or link is clicked, the content element's visibility should be toggled between hidden and visible.
2. **Attach JavaScript Event Listeners**: Attach event listeners to the toggle button or link using JavaScript. These listeners will detect clicks or other user interactions and trigger the collapse/expand functionality.
3. **Add a Toggle Button or Link**: Create a toggle button or link that will trigger the collapse/expand action. This element can be placed within the header element or alongside the container element.
4. **Conditional Collapse**: Show or hide specific collapse sections based on user input or form data.
5. **Nested Collapse**: Organize complex forms with multiple levels of collapsible sections.
6. **Enhanced animations and transitions**: Improve the visual appeal of the collapse/expand action.
7. **Accessibility considerations**: Optimize the collapse component for users with disabilities.

## API

### Methods

| **Name**| **Description**|
|----------------------|---------------------------------------------------------------------|
|**this.addClassName(fields, disabled)**|Add style class to form item|
|**this.removeClassName(fields, disabled)**|Remove form item style|
| **this.disable(fields)**| Disable input field from user interaction|
| **this.enable(fields)**| Disable input field from user interaction|
| **this.getComponent(name) → {Object}**|Retrieve a component from an object or element|
| **this.getValue(fieldName)**|Get A Value From An Object|
|**this.hide(fields)**|Hides the field|
|**this.show(fields)**|Displays the field|

## Config

| **Name**|**Description**|**Image**|
|---------------|----------------------------------------------------------------------------------------------------------------------------------------|--|
|**ID**| This is a unique identifier which is used to access the field by the API and the key of the field when the form is saved|<img src= "/apps/components/img/input_id.png">|
|**Collapse Options**|Allows you to add/delete multiple Collapses|<img src= "/apps/components/img/collapse_collapseoptions.png">|
|**Accordian Mode**|Enable this mode if you want to display only one Collaspse section at a time (this is helful when you have to avoid clutter when you have multiple Collapse sections)|<img src= "/apps/components/img/collapse_accordionmode.png">
|**Custom Class**| A HTML class attribute which allows further customisation **[See Form Attribute > Style Sheets**](**add anchor text**)|<img src= "/apps/components/img/input_customclass.png">|
|**Attribute Action**|Enable **Hidden** action to hide the field|<img src= "/apps/components/img/alert_arrtibuteaction.png">|