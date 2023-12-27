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
| **onClick (element)**| Event handler that's triggered when the button is clicked. This event handler can be used to perform any number of actions, such as submitting the form, redirecting the user to a different page, or displaying an error message|

### Methods

| **Name**| **Description**|
|----------------------|---------------------------------------------------------------------|
|**this.addClassName(fields, disabled)**|Add style class to form item|
|**this.removeClassName(fields, disabled)**|Remove form item style|
| **this.disable(fields)**| Disable input field from user interaction|
//| **this.enable(fields)**| Disable input field from user interaction|
| **this.getComponent(name) → {Object}**|Retrieve a component from an object or element|
| **this.getValue(fieldName)**|Get A Value From a component|
|**this.hide(fields)**|Hides the field|
|**this.show(fields)**|Displays the field|

## Config

| **Name**|**Description**|**Icon**|
|---------------|----------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|
|**ID**| This is a unique identifier which is used to access the field by the API and the key of the field when the form is saved|<img src= "/apps/components/img/input_id.png">|
|**Name**| [**Optional**] The visual identifier label of the field|<img src= "/apps/components/img/checkbox_name.png">|
|**Link Name**| [**Optional**] To set the name of the link you wish to provide|<img src= "/apps/components/img/link_linkname.png">|
|**Label Width**|Width of the label associated with an input field. It determines the horizontal space occupied by the label text|<img src= "/apps/components/img/input_labelwidth1.png">|
|**Label Wrap**| If the label is longer than the allowed width the text will continue on another line|<img src= "/apps/components/img/input_labelwrap1.png">|
|**Hide Label**| Hides the label on the form|<img src= "/apps/components/img/input_hidelabel.png">|
|**Text Prompt**| A description to aid the user when completing the field|<img src= "/apps/components/img/input_textprompt.png">|
|**Link Tpye**| You can select from various types of link you can represent including **Default**, **Primary**, **Success**, **Warning**, **Danger**, **Info**|<img src= "/apps/components/img/link_linktype.png">|
|**whether the component has underline**| Enable this option to underline the link component|<img src= "/apps/components/img/link_underline.png">|
|**Whether to open in a new window**| Enable this option to open the link in the new window|<img src= "/apps/components/img/link_newwindow.png">|
|**Custom Class**| A HTML class attribute which allows further customisation **[See Form Attribute > Style Sheets**](**add anchor text**)|<img src= "/apps/components/img/input_customclass.png">|
|**Attribute Action**| Enable **Hidden** to action to hide the field <br> Enable **Disabled** action to make the field unsuable|<img src= "/apps/components/img/link_attributeaction.png">|