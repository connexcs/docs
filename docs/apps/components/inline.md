# Inline

## Description

The **Inline** layout approach allows for a more compact and organized form layout, making it easier for users to navigate and interact with the form elements.

<img src= "/apps/components/img/inline.png">

## Use Case

1. Improved Form Organization
2. Enhanced User Experience:
3. Compact Form Design
4. Visual Consistency
5. Responsive Form Layout
6. Form Legibility
7. Limited Spacing
8. Accessibility Considerations

## API

### Methods

| **Name**| **Description**|**Parameters**|
|---------|----------------|--------------|
|`this.addClassName`|Add style class to a form item|`(fields: String, String[]; className: String)`|
|`this.removeClassName`|Remove style class from a form item|`(fields: String, String[]; className: String)`|
|`this.hide`|Hides the field|`(fields: String()`|
|`this.show`|Displays the field|`(fields: String()`|

!!! Info
    1. The show() and hide() methods can also be used to control the visibility of an alert in response to user input.
    2. **Fields** refers to a **component ID** or a **list of component IDs**. You can fetch the ID from the **Component Attribute** panel in the Page Builder.
    3. Before using **this.show(fields)**, make sure the component is **hidden**. This can be done using **this.hide(fields)** or by **enabling** the **Hidden checkbox** in the Component Attribute panel

#### Steps to place/use the methods for components of the Page Builder

1. Go to Form Attribute :material-menu-right: Action Panel :material-menu-right: Setting :material-menu-right: (Mounted | refresh | click 'Add action')
2. Write the method/code as shown in the **Example** below.
3. Click on `Save`.
4. On the main screen click on `Save` again.
5. Click on `Preview` to see the code in action.
<img src= "/apps/components/img/check1.png">

!!! Example
    1. `this.addClassName(fields, className)`
          * Go to Form Attribute :material-menu-right: Style Sheets :material-menu-right: add the class
            ```
            .abc{ // abc is the class name
            background-color: red;
            }
            ```
          * Follow the steps mentioned above, under Steps to place/use the methods for components of the Page Builder
          * ```
            this.addClassName('inline_1lm561y7', 'abc')
            ```

    2. `this.removeClassName(fields, className)`
        ```js
        this.removeClassName('inline_1lm561y7', 'abc')
        ```
    
    3. `this.hide(fields)`
        ```js
        var fields= ['inline_1lm561y7']
        this.hide(fields)
        ```
    4. `this.show(fields)`
        ```js
        var fields= ['inline_1lm561y7']
        this.show(fields)
        ```

## Config

| **Name**|**Description**|**Icon**|
|---------|---------------|--------|
|**ID**| Inline's unique identifier |<img src= "/apps/components/img/input_id.png">|
|**Space Size**| It's the space between the components. Adjust the size using keys [**Optional**] |<img src= "/apps/components/img/inline_spacesize.png">|
|**Custom Class**| An HTML class attribute which allows further customisation [See Form Attribute > Style Sheets](https://bani-appsection--connexcs-docs.netlify.app/apps/page-builder/#form-attribute)|<img src= "/apps/components/img/input_customclass.png">|
|**Attribute Action**|Enable **Hidden** action to hide the field|<img src= "/apps/components/img/alert_arrtibuteaction.png">|

## First time User?

If you are using the Page Builder components on the ConnexCS platform for the first time, we request you to use our guide on <a href="https://bani-appsection--connexcs-docs.netlify.app/apps/page-builder/#steps-to-use-components-in-the-page-builder" target="_blank">steps to use the Components</a>.