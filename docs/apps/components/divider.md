# Divider

## Description

A **Divider** in a page builder is a visual element that separates different sections of a page.

It can be used to improve the readability and usability of forms by making it easier for users to scan the form and identify where different sections begin and end.

<img src= "/apps/components/img/divider.png" width="800">

## Use Case

1. To group related form fields.
2. To separate different sections of a form.
3. To create columns in a form.
4. To create sub-headers in a form.

## API

### Methods

| **Name**| **Description**|**Parameters**|
|---------|----------------|--------------|
|`this.hide`|Hides the field|`(fields: String`&#124;`String[])`|
|`this.show`|Displays the field|`(fields: String`&#124;`String[])`|

!!! Info
    1. The show() and hide() methods can also be used to control the visibility of the divider in response to user input.
    2. **Fields** refers to a **component ID** or a **list of component IDs**. You can fetch the ID from the **Component Attribute** panel in the Page Builder.
    3. Before using **this.show(fields)**, make sure the component is **hidden**. This can be done using **this.hide(fields)** or by **enabling** the **Hidden checkbox** in the Component Attribute panel.

#### Steps to use the methods for the Page Builder components

1. Go to Form Attribute :material-menu-right: Action Panel :material-menu-right: Setting :material-menu-right: (Mounted | refresh | click 'Add action').
2. Write the method/code as shown in the **Example** below.
3. Click on `Save`.
4. On the main screen click on `Save` again.
5. Click on `Preview` to see the code in action.
<img src= "/apps/components/img/divider2.png">

!!! Example
    1. `this.hide(fields)`
        ```js linenums="1"
        var fields= ['divider_xjmcv33p']
        this.hide(fields)
        ```

    2. `this.show(fields)`
        ```js linenums="1"
        var fields= ['divider_xjmcv33p']
        this.show(fields)
        ```

## Config

| **Name**|**Description**|**Icon**|
|---------|---------------|--------|
|**ID**| The divider component's unique identifier|<img src= "/apps/components/img/input_id.png">|
|**Name**| [**Optional**] The display name of the divider|<img src= "/apps/components/img/checkbox_name.png">|
|**Content Position**|Specifies how the divider is positioned relative to the form content, like **Left**, **Center** or **Right**|<img src= "/apps/components/img/divider_contentposition.png">|
|**Attribute Action**|Enable **Hidden** action to hide the field|<img src= "/apps/components/img/alert_arrtibuteaction.png">|

## First time User?

If you are using the Page Builder components on the ConnexCS platform for the first time, we request you to use our guide on <a href="https://docs.connexcs.com/apps/page-builder/#steps-to-use-components-in-the-page-builder" target="_blank">steps to use the Components</a>.