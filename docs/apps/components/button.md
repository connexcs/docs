# Button

## Description

A **Button** can be used to trigger an event when it's clicked.

Buttons are typically used to submit forms, navigate between pages, or perform other actions.

<img src= "/apps/components/img/button.png">

## Use Case

Some use cases are listed as follows:

1. Submit Form
2. Navigate Through Multi-step Forms/Different Pages (Next, Continue, Previous, Back)
3. Trigger Specific Actions:
    * Display or hide additional fields or sections
    * Perform calculations or validations
    * Open pop-up windows or dialogs
    * Reset or Clear Form

4. Trigger Custom Workflows

### Interactivity

**Interactivity** is the ability of a web page or application to respond to user input.

Here are some examples of how interactivity can be implemented for **Button** components:

1. **Submit forms**: A common use of button interactivity is to submit forms to a server for processing. When a user clicks the submit button, the form data is validated and sent to the server, resulting in actions such as saving data, creating accounts, or processing orders.

2. **Display or Hide elements**: Buttons can be used to toggle the visibility of specific elements on the form. For instance, clicking a "Show Advanced Options" button might reveal additional fields or sections of the form, providing more granular control to users.

3. **Perform Data Manipulation or Calculations**: It's useful for real-time validation, dynamic calculations, or updating form fields based on other inputs.

4. **Navigate to Different Pages or Sections**: It allows for multi-step forms, progressive disclosure, or branching based on user choices.

5. **Trigger Animations or Visual Effects**: Buttons can initiate animations or visual effects to enhance the user experience and provide visual feedback. It can include highlighting fields upon clicking, fading in or out elements, or displaying progress indicators.

6. **Open pop-up windows or dialogs**: Buttons can be used to open pop-up windows or dialogs for displaying additional information, collecting supplementary data, or providing context-sensitive guidance.

7. **Trigger custom actions or workflows**: It allows for extending the form builder's functionality and integrating it with external systems.

## API

### Events

| **Name**| **Description**|
|---------|----------------|
| `onClick (element)`| Event handler that's triggered when the button is clicked. This event handler can be used to perform any number of actions, such as submitting the form, redirecting the user to a different page, or displaying an error message|

### Methods

| **Name**| **Description**|**Parameters**|
|---------|----------------|--------------|
|`this.addClassName`|Add style class to a form item|`(fields: String`&#124;`String[], className: String)`|
|`this.removeClassName`|Remove style class from a form item|`(fields: String`&#124;`String[], className: String)`|
|`this.getComponent`|Returns a component whose id has been passed as a parameter|`(component_ID: String) : Object`|
|`this.getValues`|Gets the current values of all fields|`() : Object`|
|`this.hide`|Hides the field|`(fields: String`&#124;`String[])`|
|`this.show`|Displays the field|`(fields: String`&#124;`String[])`|
|`this.disable`| Disable button from user interaction|`(fields: String`&#124;`String[])`|
|`this.enable`| Enable button from user interaction|`(fields: String`&#124;`String[])`|

!!! Info
    1. The show() and hide() methods can also be used to control the visibility of the button in response to user input.
    2. **Fields** refers to a **component ID** or a **list of component IDs**. You can fetch the ID from the **Component Attribute** panel in the Page Builder.
    3. Before using **this.show(fields)**, make sure the component is **hidden**. This can be done using **this.hide(fields)** or by **enabling** the **Hidden checkbox** in the Component Attribute panel.

#### Steps to use the methods for the Page Builder components

1. Go to Form Attribute :material-menu-right: Action Panel :material-menu-right: Setting :material-menu-right: (Mounted | refresh | click 'Add action').
2. Write the method/code as shown in the **Example** below.
3. Click on `Save`.
4. On the main screen click on `Save` again.
5. Click on `Preview` to see the code in action.
<img src= "/apps/components/img/button2.png">

!!! Example
    1. `this.addClassName(fields, className)`
          * Go to Form Attribute :material-menu-right: Style Sheets :material-menu-right: add the class
            ```
            .abc{ // abc is the class name
            background-color: red;
            }
            ```
          * Follow the steps mentioned above, Steps to use the methods for the Page Builder components
          * ```
            this.addClassName('button_815t5dfs', 'abc')
            ```

    2. `this.removeClassName(fields, className)`
        ```js
        this.removeClassName('button_815t5dfs', 'abc')
        ```
    
    3. `this.getValues()`
        ```js
        var data = this.getValues();
        console.log(data);
        ```
    
    4. `this.hide(fields)`
        ```js
        var fields= ['button_815t5dfs']
        this.hide(fields)
        ```
    
    5. `this.show(fields)`
        ```js
        var fields= ['button_815t5dfs']
        this.show(fields)
        ```
    
    6. `this.disable(['fields'])`
        ```js
        this.disable(['button_6ytj0ne9'])
        ```
    
    7. `this.getComponent('component_ID')`
        ```js
        var butonname = this.getComponent('button_815t5dfs');
        console.log('getComponent', buttonname);
        ```
    
    8. `this.enable(['fields'])`
        ```js
        this.enable(['button_6ytj0ne9'])
        ```

!!! info Add multiple classes
    Use the following syntax to add multiple classes to a component:
    ```js
    this.addClassName('componentID', 'class1', 'class2')
    ```

## Config

| **Name**|**Description**|**Icon**|
|---------|---------------|--------|
|**ID**| The button component's unique Identifier |<img src= "/apps/components/img/alert_id2.png">|
|**Name**| [**Optional**] An identifier for the button within the page. It's used by the page builder to associate the button with the data it's submitting. The name is typically not displayed to the user|<img src= "/apps/components/img/button_name.png">|
|**Button Name**| [**Optional**] The display name of the button|<img src= "/apps/components/img/button_buttonname.png">|
|**Width**| [**Optional**] The width of the field|<img src= "/apps/components/img/input_width.png">|
|**Label Width**| [**Optional**] The width of the label field|<img src= "/apps/components/img/input_labelwidth1.png">|
|**Label Wrap**| If the label is longer than the allowed width the text will continue on another line|<img src= "/apps/components/img/input_labelwrap1.png">|
|**Hide Label**| Hides the label on the page|<img src= "/apps/components/img/input_hidelabel.png">|
|**Text Prompt**| A description to aid the user when completing the field|<img src= "/apps/components/img/input_textprompt.png">|
|**Button Size**| Select the size of the button from 3 choices; **Large**, **Default** or **Small**|<img src= "/apps/components/img/button_buttonsize.png">|
|**Button Type**| Select the type of button from: **Default**, **Primary**, **Success**, **Warning**, **Danger**, **Info**, **Text**, or **Link**|<img src= "/apps/components/img/button_buttontype.png">|
|**Determine whether it's**|You may select the shape of the button as **plain**, **round** or **circle**|<img src= "/apps/components/img/button_shape.png">|
|**Custom Class**| An HTML class attribute which allows further customisation [See Form Attribute > Style Sheets](https://docs.connexcs.com/apps/page-builder/#form-attribute)|<img src= "/apps/components/img/input_customclass.png">|
|**Attribute Action**|Enable **Hidden** action to hide the field <br>Enable **Disabled** action to make the field unusable</br>|<img src= "/apps/components/img/button_attributeaction.png">|
|**Action Settings**|Click on the drop-down to select the pre-defined methods you wish to apply to your component. In this case, you can choose either **mounted** or **refresh** for `onClick`|<img src= "/apps/components/img/button_ac.png">|

## First time User?

If you are using the Page Builder components on the ConnexCS platform for the first time, we request you to use our guide on <a href="https://docs.connexcs.com/apps/page-builder/#steps-to-use-components-in-the-page-builder" target="_blank">steps to use the Components</a>.

