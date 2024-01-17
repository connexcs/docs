# Dialog

## Description

A "dialog" component in a page builder is a specialized element that allows you to create modal windows or pop-up forms within a larger form.

It typically provides a self-contained interface for collecting additional information or displaying contextual details without disrupting the main form flow.

<img src= "/apps/components/img/dialog.png">

## Use Case

1. **Alerts**: Quickly show simple alerts for messages, errors, warnings, etc.
2. **Confirmations**:Get user confirmation before key actions like form submission.
3. **Additional Inputs**: Prompt for additional details in a popup without cluttering the form.
4. **Contextual Help**:Provide helpful information for a section in a popup overlay.
5. **Multi-Step Workflows**:Break long forms into shorter modal workflows.
6. **Wizards**:Guide users through a complex process step-by-step in modal wizard.
7. **Edit in Place**: Allow quick inline editing of content in a modal without changing views.
8. **Terms & Conditions**: Display legal agreements in a popup for users to review and accept.
9. **Surveys**: Present follow-up surveys or questionnaires in a dialog overlay.
10. **Media Previews**: Enlarge images and videos for closer inspection in a modal.
11. **Notifications**: Communicate messages non-intrusively using popup notifications.

### Interactivity

1. **Responsive Inputs**: Utilize input fields that respond to user actions, such as providing real-time validation or updating related form fields based on input changes.

2. **Dynamic Content**: Incorporate dynamic content that changes based on user input or dialog interactions. This could involve updating text, images, or other elements within the dialog.

3. **Conditional Actions**: Implement conditional actions that trigger based on specific user inputs or dialog events. For instance, enable or disable certain buttons or sections of the dialog based on user choices.

4. **Progressive Disclosure**: Employ progressive disclosure techniques to gradually reveal more information or options as the user interacts with the dialog. This helps to avoid overwhelming the user with too much information at once.

5. **Error Handling**: Implement proper error handling to gracefully inform the user of any errors or invalid inputs within the dialog. This could involve displaying error messages, highlighting invalid fields, or providing corrective suggestions.

6. **User Feedback**: Provide visual or auditory feedback to user actions within the dialog. This could include animations, transitions, or sound effects to enhance the interactive experience.

7. **Accessibility**: Ensure that the interactive elements within the dialog are accessible to users with disabilities. This may involve providing keyboard navigation, screen reader compatibility, and alternative input methods.

8. **Cross-Platform Compatibility**: Consider the compatibility of the interactive elements across different browsers and devices. Ensure that the dialog component functions consistently and responsively across various platforms.

## API

### Events

| **Name**| **Description**|
|----------------------|---------------------------------------------------------------------|
|`onCancel`| This event is fired when the user clicks the cancel button on a dialog. This event can be used to perform any necessary cleanup or to prevent any unwanted actions from occurring.|
|`onConfirm`| This event is fired when the user clicks the confirm button on a dialog. This event can be used to perform any desired actions, such as submitting a form, deleting a file, or making a change to the system|

### Methods

| **Name**| **Description**|**Parameters**|
|---------|----------------|--------------|
|`this.getComponent`|Returns a component whose id has been passed as a parameter|`(component_ID: String(componentID), String[]; Object: Object)`|
|`this.getValue`|Get A Value From a component|`(fieldName String(componentID)`|

#### Steps to place/use the methods for components of the Page Builder"

1. Go to Form Attribute :material-menu-right: Action Panel :material-menu-right: Setting :material-menu-right: (Mounted | refresh | click 'Add action')
2. Write the method/code as shown in the **Example** below.
3. Click on `Save`.
4. On the main screen click on `Save` again.
5. Click on `Preview` to see the code in action.
<img src= "/apps/components/img/alert1.png">

!!! Example
    1. `this.getComponent('component_ID')`
        ```js
        var dialogname = this.getComponent('dialog_icubvv8x');
        console.log('getComponent',datename);
        ```
    
    2.  `this.getValue('fieldName')`
        ```js
        var dialogname = this.getValue('dialog_icubvv8x');
        console.log('getValue',dialogname);
        ```

## Config

| **Name**|**Description**|**Icon**|
|---------------|----------------------------------------------------------------------------------------------------------------------------------------|--|
|**ID**| Dialog's unique identifier|<img src= "/apps/components/img/input_id.png">|
|**Title**| [**Optional**] The display name of the dialog field|<img src= "/apps/components/img/alert_title.png">|
|**Width**| [**Optional**] Width of the field|<img src= "/apps/components/img/input_width.png">|
|**Visible**|Enable visible option to display the Dialog and disable to hide the dialog box|<img src= "/apps/components/img/dialog_visible.png">|
|**Center**| Enable this option to make the components of the Dialog box centrally aligned|<img src= "/apps/components/img/dialog_center.png">|
|**Show Close**| Enable this option for displaying the close button (for closing the dialog box)|<img src= "/apps/components/img/dialog_showclose.png">|
|**Show Cancel Button**| Enable this option for displaying the Cancel button (the button name is editable)|<img src= "/apps/components/img/dialog_showcancelbuttonpng.png">|
|**Show Confirm Button**| Enable this option for displaying the confirm button (the button name is editable)<br>Enable **Loading** option to show the user that the dialog is busy. It prevents the user from interacting with the dialog until the operation is complete|<img src= "/apps/components/img/dialog_showconfirmbutton.png">|
|**Margin Top**|It defines the position of the dialog box from the top of the screen|<img src= "/apps/components/img/dialog_magintop.png">|
|**Custom Class**| An HTML class attribute which allows further customisation **[See Form Attribute > Style Sheets**](**add anchor text**)|<img src= "/apps/components/img/input_customclass.png">|
|**Attribute Action**|Enable **Data Binding** to connect the data to UI|<img src= "/apps/components/img/dialog_attributeaction.png">|

!!! Info
    1. The **callback()function** is also called to verify success in the custom checkup method.

## First time User?

If you are using the Page Builder components on the ConnexCS platform first time, we request you to use our guide on <a href="https://bani-appsection--connexcs-docs.netlify.app/apps/page-builder/#steps-to-use-components-in-the-page-builder" target="_blank">steps to use the Components</a>.
