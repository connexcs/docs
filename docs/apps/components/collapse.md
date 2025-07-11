# Collapse

## Description

**Collapse** helps to hide or conceal a section of a form, typically by minimizing or folding it into a smaller, more compact view.

This feature is often used to organize lengthy or complex forms, making them easier to navigate and reducing visual clutter.

<img src= "/apps/components/img/collapse12.png" width="2000" style="border: 2px solid #4472C4; border-radius: 8px;">

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

There are a number of ways to add interactivity to the **Collapse** component.

Some of the most common methods include:

1. **Toggle Visibility**: Implement the collapse/expand functionality to switch an element's state between being visible and hidden on a user interface.
2. **Attach JavaScript Event Listeners**: Attach event listeners to the toggle button or link using JavaScript. These listeners will detect clicks or other user interactions and trigger the collapse/expand functionality.
3. **Add a Toggle Button or Link**: Create a toggle button or link that will trigger the collapse/expand action. This element can be placed within the header element or alongside the container element.
4. **Conditional Collapse**: Show or hide specific collapse sections based on user input or form data.
5. **Nested Collapse**: Organize complex forms with multiple levels of collapsible sections.
6. **Enhanced animations and transitions**: Improve the visual appeal of the collapse/expand action.
7. **Accessibility considerations**: Optimize the collapse component for users with disabilities.

## API

### Methods

| **Name**| **Description**|**Parameters**|
|---------|----------------|--------------|
|`this.addClassName`|Add style class to a form item|`(fields: String`&#124;`String[], className: String)`|
|`this.removeClassName`|Remove style class from a form item|`(fields: String`&#124;`String[], className: String)`|
|`this.getComponent`|Returns a component whose id has been passed as a parameter|`(component_ID: String) : Object`|
|`this.hide`|Hides the field|`(fields: String`&#124;`String[])`|
|`this.show`|Displays the field|`(fields: String`&#124;`String[])`|

!!! Info
    1. The show() and hide() methods can also be used to control the visibility of the collapse component in response to user input.
    2. **Fields** refers to a **component ID** or a **list of component IDs**. You can fetch the ID from the **Component Attribute** panel in the Page Builder.
    3. Before using **this.show(fields)**, make sure the component is **hidden**. This can be done using **this.hide(fields)** or by **enabling** the **Hidden checkbox** in the Component Attribute panel.

#### Steps to use the methods for the Page Builder components

1. Go to Form Attribute :material-menu-right: Action Panel :material-menu-right: Setting :material-menu-right: (Mounted | refresh | click 'Add action').
2. Write the method/code as shown in the **Example** below.
3. Click on `Save`.
4. On the main screen click on `Save` again.
5. Click on `Preview` to see the code in action.
<img src= "/apps/components/img/collapse4.png" style="border: 2px solid #4472C4; border-radius: 8px;">

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
            this.addClassName('collapse_itxbeisp', 'abc')
            ```

    2. `this.removeClassName(fields, className)`
        ```js linenums="1"
        this.removeClassName('collapse_itxbeisp', 'abc')
        ```
    
    3. `this.hide(fields)`
        ```js linenums="1"
        var fields= ['collapse_itxbeisp']
        this.hide(fields)
        ```
    
    4. `this.show(fields)`
        ```js linenums="1"
        var fields= ['collapse_itxbeisp']
        this.show(fields)
        ```
    
    5. `this.getComponent('component_ID')`
        ```js linenums="1"
        var collapsename = this.getComponent('collapse_itxbeisp');
        console.log('getComponent', collapsename);
        ```

## Config

| **Name**|**Description**|**Icon**|
|---------|---------------|--------|
|**ID**| The collapse component's unique identifier|<img src= "/apps/components/img/input_id.png">|
|**Collapse Options**|Allows you to add/delete multiple Collapses|<img src= "/apps/components/img/collapse_collapseoptions.png">|
|**Accordian Mode**|Enable this mode if you want to display only one Collapse section at a time (this is helpful when you have to avoid clutter when you have multiple Collapse sections)|<img src= "/apps/components/img/collapse_accordionmode.png">
|**Custom Class**| An HTML class attribute which allows further customisation [See Form Attribute > Style Sheets](https://docs.connexcs.com/apps/page-builder/#form-attribute)|<img src= "/apps/components/img/input_customclass.png">|
|**Attribute Action**|Enable **Hidden** action to hide the field|<img src= "/apps/components/img/alert_arrtibuteaction.png">|

## First time User?

If you are using the Page Builder components on the ConnexCS platform for the first time, we request you to use our guide on <a href="https://docs.connexcs.com/apps/page-builder/#steps-to-use-components-in-the-page-builder" target="_blank">steps to use the Components</a>.
