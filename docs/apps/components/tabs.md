# Tabs

## Description

The **Tabs** component acts as a conductor, orchestrating information flow and streamlining user interaction.

It's like having multiple forms within a single interface, allowing you to organize complex tasks and data into logical, bite-sized chunks.

Tabs visually categorize different sections of a form, preventing users from being overwhelmed by a large, monolithic data entry interface.

Each tab acts as a dedicated space for specific information, guiding users through the form step-by-step and preventing them from getting lost in a maze of fields.

<img src= "/apps/components/img/tabs.png" style="border: 2px solid #4472C4; border-radius: 8px;">

## Use Case

1. Enhanced User Experience
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
|`this.getComponent`|Returns a component whose id has been passed as a parameter|`(component_ID: String) : Object`|
|`this.hide`|Hides the field|`(fields: String`&#124;`String[])`|
|`this.show`|Displays the field|`(fields: String`&#124;`String[]`|
|`this.getValues`|Gets the current values of all fields|`() : Object`|
|`this.disable`| Disable time field from user interaction|`(fields: String`&#124;`String[])`|

!!! Info
    1. The show() and hide() methods can also be used to control the visibility of tabs in response to user input.
    2. **Fields** refers to a **component ID** or a **list of component IDs**. You can fetch the ID from the **Component Attribute** panel in the Page Builder.
    3. Before using **this.show(fields)**, make sure the component is **hidden**. This can be done using **this.hide(fields)** or by **enabling** the **Hidden checkbox** in the Component Attribute panel.

#### Steps to use the methods for the Page Builder components

1. Go to Form Attribute :material-menu-right: Action Panel :material-menu-right: Setting :material-menu-right: (Mounted | refresh | click 'Add action').
2. Write the method/code as shown in the **Example** below.
3. Click on `Save`.
4. On the main screen click on `Save` again.
5. Click on `Preview` to see the code in action.
<img src= "/apps/components/img/tabs2.png" style="border: 2px solid #4472C4; border-radius: 8px;">

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
            this.addClassName('tabs_8r5c1t2n', 'abc')
            ```

    2. `this.removeClassName(fields, className)`
        ```js linenums="1"
        this.removeClassName('tabs_8r5c1t2n, 'abc')
        ```
    
    3. `this.hide(fields)`
        ```js linenums="1"
        var fields= ['tabs_8r5c1t2n']
        this.hide(fields)
        ```
    
    4. `this.show(fields)`
        ```js linenums="1"
        var fields= ['tabs_8r5c1t2n']
        this.show(fields)
        ```
    
    5. `this.disable(['fields'])`
        ```js linenums="1"
        this.disable(['tabs_8r5c1t2n'])
        ```
    
    6. `this.enable(['fields'])`
        ```js linenums="1"
        this.enable(['tabs_8r5c1t2n'])
        ```
    
    7. `this.getValues()`
        ```js linenums="1"
        var data = this.getValues();
        console.log(data);
        ```
    
    8.  `this.getComponent('component_ID')`
        ```js linenums="1"
        var tabsname = this.getComponent('tabs_8r5c1t2n');
        console.log('getComponent', tabsname);
        ```

## Config

| **Name**|**Description**|**Icon**|
|---------|---------------|--------|
|**ID**| The tab component's unique identifier|<img src= "/apps/components/img/input_id.png">|
|**Type**|Choose the arrangement of tabs from **Default**, **Tabs** or **Border-Card**|<img src= "/apps/components/img/tabs_type.png">|
|**Tab Position**|Choose the tabs from **Top**, **Left** or **Right** or **Bottom**|<img src= "/apps/components/img/tabposition2.png">|
|**Tab Options**|Choose the number of tabs you wish to have in the form|<img src= "/apps/components/img/tabs_options.png">|
|**Custom Class**| An HTML class attribute which allows further customisation [See Form Attribute > Style Sheets](https://docs.connexcs.com/apps/page-builder/#form-attribute)|<img src= "/apps/components/img/input_customclass.png">|
|**Attribute Action**| Enable **Hidden** action to hide the field|<img src= "/apps/components/img/alert_arrtibuteaction.png">|

## First time User?

If you are using the Page Builder components on the ConnexCS platform for the first time, we request you to use our guide on <a href="https://docs.connexcs.com/apps/page-builder/#steps-to-use-components-in-the-page-builder" target="_blank">steps to use the Components</a>.