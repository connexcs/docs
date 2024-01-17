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

There are a number of ways to add interactivity to the **Collapse** component.

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

| **Name**| **Description**|**Parameters**|
|---------|----------------|--------------|
|`this.addClassName`|Add style class to form item|`(fields: String(componentID), String[]; className: String)`|
|`this.removeClassName`|Remove form item style|`(fields: String(componentID), String[]; className: String)`|
|`this.getComponent`|Returns a component whose id has been passed as a parameter|`(component_ID: String(componentID), String[]; Object: Object)`|
|`this.hide`|Hides the field|`(fields: String(componentID)`|
|`this.show`|Displays the field|`(fields: String(componentID)`|
|`this.disable`| Disable input field from user interaction|`(fields: String(componentID), String[])`|
|`this.getValue`|Get A Value From a component|`(fieldName String(componentID)`|

!!! Info
    1. The show() and hide() methods can also be used to control the visibility of an alert in response to user input.
    2. **fields** refer to the component **ID**. You can fetch the ID from the **Component Attribute** panel in the Page Builder.
    3. For using **this.show(fields)** enable the **Hidden** check-box in the **Component Attribute** panel.

#### Steps to place/use the methods for components of the Page Builder"

1. Go to Form Attribute :material-menu-right: Action Panel :material-menu-right: Setting :material-menu-right: (Mounted | refresh | click 'Add action')
2. Write the method/code as shown in the **Example** below
3. Click on `Save`.
4. On the main screen click on `Save` again.
5. Click on `Preview` to see the code in action.
<img src= "/apps/components/img/alert1.png">

!!! Example
    1. `this.addClassName(fields, className)`
          * Go to Form Attribute :material-menu-right: Style Sheets :material-menu-right: add the class
            ```js
            .abc{ // abc is the class name
            background-color: red;
            }
            ```
          * Follow the steps in the above **Note**
          * ```js
            this.addClassName('collapse_itxbeisp', 'abc')
            ```

    2. `this.removeClassName(fields, className)`
        ```js
        this.removeClassName('collapse_itxbeisp', 'abc')
        ```
    
    3. `this.hide(fields)`
        ```js
        var fields= ['collapse_itxbeisp']
        this.hide(fields)
        ```
    
    4. `this.show(fields)`
        ```js
        var fields= ['collapse_itxbeisp']
        this.show(fields)
        ```
    
    5. `this.disable(['fields'])`
        ```js
        this.disable(['collapse_itxbeisp'])
        ```
    
    6. `this.getValue('fieldName')`
        ```js
        var collapsename = this.getValue('collapse_itxbeisp');
        console.log('getValue', collapsename);
        ```
    
    7. `this.getComponent('component_ID')`
        ```js
        var collapsename = this.getComponent('collapse_itxbeisp');
        console.log('getComponent', collapsename);
        ```

## Config

| **Name**|**Description**|**Icon**|
|---------|---------------|--------|
|**ID**| Collapse's unique identifier|<img src= "/apps/components/img/input_id.png">|
|**Collapse Options**|Allows you to add/delete multiple Collapses|<img src= "/apps/components/img/collapse_collapseoptions.png">|
|**Accordian Mode**|Enable this mode if you want to display only one Collaspse section at a time (this is helpful when you have to avoid clutter when you have multiple Collapse sections)|<img src= "/apps/components/img/collapse_accordionmode.png">
|**Custom Class**| An HTML class attribute which allows further customisation **[See Form Attribute > Style Sheets**](https://bani-appsection--connexcs-docs.netlify.app/apps/page-builder/#form-attribute)|<img src= "/apps/components/img/input_customclass.png">|
|**Attribute Action**|Enable **Hidden** action to hide the field|<img src= "/apps/components/img/alert_arrtibuteaction.png">|

## First time User?

If you are using the Page Builder components on the ConnexCS platform first time, we request you to use our guide on <a href="https://bani-appsection--connexcs-docs.netlify.app/apps/page-builder/#steps-to-use-components-in-the-page-builder" target="_blank">steps to use the Components</a>.