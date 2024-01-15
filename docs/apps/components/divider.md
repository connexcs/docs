# Divider

## Description

A divider in a page builder is a visual element that separates different sections of a page.

It can be used to improve the readability and usability of forms by making it easier for users to scan the form and identify where different sections begin and end.

<img src= "/apps/components/img/divider.png">

## Use Case

1. To group related form fields.
2. To separate different sections of a form.
3. To create columns in a form.
4. To create sub-headers in a form.

## API

### Methods

| **Name**| **Description**|
|----------------------|---------------------------------------------------------------------|
|`this.hide(fields)`|Hides the field|
|`this.show(fields)`|Displays the field|

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
    1. `this.hide(fields)`
        ```js
        var fields= ['alert_ilqsq5xq']
        this.hide(fields)
        ```
    2. `this.show(fields)`
        ```js
        var fields= ['alert_ilqsq5xq']
        this.show(fields)
        ```

## Config

| **Name**|**Description**|**Image**
|---------------|----------------------------------------------------------------------------------------------------------------------------------------|--|
|**ID**| Divider's unique identifier which is used to access the field by the API and the key of the field when the form is saved |<img src= "/apps/components/img/input_id.png">|
|**Name**| [**Optional**] The visual identifier label of the field|<img src= "/apps/components/img/checkbox_name.png">|
|**Content Position**|Specifies how the divider is positioned relative to the form content, like **Left**, **Center** or **Right**|<img src= "/apps/components/img/divider_contentposition.png">|
|**Attribute Action**|Enable **Hidden** action to hide the field|<img src= "/apps/components/img/alert_arrtibuteaction.png">|

## First time User?

If you are using the Page Builder components on the ConnexCS platform first time, we request you to use our guide on <a href="https://bani-appsection--connexcs-docs.netlify.app/apps/page-builder/#steps-to-use-components-in-the-page-builder" target="_blank">steps to use the Components</a>.