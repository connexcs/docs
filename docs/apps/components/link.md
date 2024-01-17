# Link

## Description

Link components can be used in forms to provide additional functionality, such as opening external resources, navigating to different sections of the form, or triggering specific actions.

<img src= "/apps/components/img/link.png">

## Use Case

1. Opening External Resources
2. Navigating Form Sections
3. Triggering Specific Actions
4. Providing Contextual Help and Resources
5. Enhancing Accessibility and Usability

### Interactivity

1. A link could be used to display a message indicating that a required field has been left blank.

2. Links can be used to trigger validation of user input before the form is submitted.

## API

### Events

| **Name**| **Description**|
|----------------------|---------------------------------------------------------------------|
| `onClick (element)`| Event handler that's triggered when the button is clicked. This event handler can be used to perform any number of actions, such as submitting the form, redirecting the user to a different page, or displaying an error message|

### Methods

| **Name**| **Description**|**Parameters**|
|----------------------|---------------------------------------------------------------------|----|
|`this.addClassName`|Add style class to page item|`(fields: String(componentID), String[]; className: String)`|
|`this.removeClassName`|Remove page item style|`(fields: String(componentID), String[]; className: String)`|
|`this.getComponent`|Returns a component whose id has been passed as a parameter|`(component_ID: String(componentID), String[]; Object: Object)`|
|`this.hide(fields)`|Hides the field|`(fields: String(componentID)`|
|`this.show(fields)`|Displays the field|`(fields: String(componentID)`|
| `this.disable(fields)`| Disable input field from user interaction|`(fields: String(componentID), String[])`|
|`this.getValue`|Get A Value From a component|`(fieldName String(componentID)`|

!!! Info
    1. The show() and hide() methods can also be used to control the visibility of an alert in response to user input.
    2. **fields** refer to the component **ID**. You can fetch the ID from the **Component Attribute** panel in the Page Builder.
    3. For using **this.show(fields)** enable the **Hidden** check-box in the **Component Attribute** panel.

#### Steps to place/use the methods for components of the Page Builder"

1. Go to Form Attribute :material-menu-right: Action Panel :material-menu-right: Setting :material-menu-right: (Mounted | refresh | click 'Add action')
2. Write the method/code as shown in the **Example** below.
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
            this.addClassName('link_0t4yixc3', 'abc')
            ```

    2. `this.removeClassName(fields, className)`
        ```js
        this.removeClassName('link_0t4yixc3', 'abc')
        ```
    
    3. `this.hide(fields)`
        ```js
        var fields= ['link_0t4yixc3']
        this.hide(fields)
        ```
    4. `this.show(fields)`
        ```js
        var fields= ['link_0t4yixc3']
        this.show(fields)
        ```
    5. `this.disable(['fields'])`
        ```js
        this.disable(['link_0t4yixc3'])
        ```
    7.`this.getValue('fieldName')`
        ```js
        var linkname = this.getValue('link_0t4yixc3');
        console.log('getValue',linkname);
        ```
    6.  `this.getComponent('component_ID')`
        ```js
        var linkname = this.getComponent('link_0t4yixc3');
        console.log('getComponent',linkname);
        ```

## Config

| **Name**|**Description**|**Icon**|
|---------------|----------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|
|**ID**| Link's unique identifier|<img src= "/apps/components/img/input_id.png">|
|**Name**| [**Optional**] The display name of the date field|<img src= "/apps/components/img/checkbox_name.png">|
|**Link Name**| [**Optional**] Name of the link you wish to provide|<img src= "/apps/components/img/link_linkname.png">|
|**Label Width**|Width of the label associated with an input field. It determines the horizontal space occupied by the label text|<img src= "/apps/components/img/input_labelwidth1.png">|
|**Label Wrap**| If the label is longer than the allowed width the text will continue on another line|<img src= "/apps/components/img/input_labelwrap1.png">|
|**Hide Label**| Hides the label on the form|<img src= "/apps/components/img/input_hidelabel.png">|
|**Text Prompt**| A description to aid the user when completing the field|<img src= "/apps/components/img/input_textprompt.png">|
|**Link Type**| You can select from various types of link you can represent including **Default**, **Primary**, **Success**, **Warning**, **Danger**, **Info**|<img src= "/apps/components/img/link_linktype.png">|
|**whether the component has underline**| Enable this option to underline the link component|<img src= "/apps/components/img/link_underline.png">|
|**Whether to open in a new window**| Enable this option to open the link in the new window|<img src= "/apps/components/img/link_newwindow.png">|
|**Custom Class**| An HTML class attribute which allows further customisation **[See Form Attribute > Style Sheets**](**add anchor text**)|<img src= "/apps/components/img/input_customclass.png">|
|**Attribute Action**| Enable **Hidden** to action to hide the field <br> Enable **Disabled** action to make the field un-suable|<img src= "/apps/components/img/link_attributeaction.png">|

## First time User?

If you are using the Page Builder components on the ConnexCS platform first time, we request you to use our guide on <a href="https://bani-appsection--connexcs-docs.netlify.app/apps/page-builder/#steps-to-use-components-in-the-page-builder" target="_blank">steps to use the Components</a>.