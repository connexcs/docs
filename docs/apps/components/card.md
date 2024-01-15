# Card

## Description

A card in a form builder is a type of container that can be used to group related form fields together.

Cards are typically used to create a more organized and visually appealing form layout.

They can also help to improve the user experience by making it easier for users to scan the form and find the information they need.

<img src= "/apps/components/img/card.png">

## Use Case

Some of the use cases are as follows:

1. Grouping related fields together.
2. Creating multi-step forms.
3. Breaking up long forms into smaller chunks.
4. Creating sidebars.
5. Adding visual interest.
6. Creating responsive forms.
7. Improving accessibility.

### Interactivity

**Interactivity** is the ability of a web page or application to respond to user input.

**Card** components can be interactive in a page builder.

They can be used to display information, collect user input, and trigger actions.

Some examples of how card components can be made interactive include:

1. **Adding Input fields to Cards**: You can add input fields, such as text fields, select boxes, and checkboxes, to cards to collect user input.

2. **Displaying Dynamic content**: You can use JavaScript to display dynamic content in cards, such as error messages or additional information based on user input.

3. **Triggering actions**: You can add buttons or links to cards to trigger actions, such as submitting a form or opening a pop-up window.

4. **Adding animations and effects**: You can use CSS to add animations and effects to cards, such as fading in or out elements or highlighting fields upon clicking.

5. **Responding to user interactions**: You can use JavaScript to handle user interactions with cards, such as clicks, selections, and changes. For example, you could use JavaScript to hide or show additional fields based on the user's selection in a dropdown menu.

## API

### Methods

| **Name**| **Description**|**Parameters**|
|----------------------|---------------------------------------------------------------------|-----|
|`this.addClassName`|Add style class to form item|`(fields: String(componentID), String[]; className: String)`|
|`this.removeClassName`|Remove form item style|`(fields: String(componentID), String[]; className: String)`|
|`this.getComponent`|Returns a component whose id has been passed as a parameter|`(component_ID: String(componentID), String[])`|
|`this.getValue`|Get A Value From a component|`(fields: String(componentID)`|
|`this.getValues()`|Get the values of all fields when values change|`(Object: Object)`|
|`this.hide(fields)`|Hides the field|`(fields: String(componentID)`|
|`this.show(fields)`|Displays the field|`(fields: String(componentID)`|

!!! Info
    1. The show() and hide() methods can also be used to control the visibility of an alert in response to user input.
    2. **fields** refer to the component **ID**. You can fetch the ID from the **Component Attribute** panel in the Page Builder.
    3. For using **this.show(fields)** enable the **Hidden** check-box in the **Component Attribute** panel.

#### Steps to place/use the methods for components of the Page Builder

1. Go to Form Attribute :material-menu-right: Action Panel :material-menu-right: Setting :material-menu-right: (Mounted | refresh | click 'Add action').
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
            ```js
            this.addClassName('card_khlorb9y', 'abc')
            ```

    2. `this.removeClassName(fields, className)`
        ```js
        this.removeClassName('card_khlorb9y', 'abc')
        ```
    
    3. `this.getValue(fieldName)`
        ```js
        var cardname = this.getValue('card_khlorb9y');
        console.log('getValue', cardname);
        ```
    4. `this.getValues(fieldName)`
        ```js
        var data = this.getValues();
        console.log(data);
        ```
    5. `this.hide(fields)`
        ```js
        var fields= ['card_khlorb9y']
        this.hide(fields)
        ```
    6. `this.show(fields)`
        ```js
        var fields= ['card_khlorb9y']
        this.show(fields)
        ```

## Config

| **Name**|**Description**|**Icon**|
|---------------|----------------------------------------------------------------------------------------------------------------------------------------|----|
|**ID**|Card's unique Identifier|<img src= "/apps/components/img/input_id.png">|
|**Title**| [**Optional**] The visual identifier label of the field|<img src= "/apps/components/img/alert_title2.png">|
|**Width**| [**Optional**] The width of the field. Example: 20%, 20px, 20rem|<img src= "/apps/components/img/input_width.png">|
|**Padding**| [**Optional**] Specifies the amount of space between an element's content and its border. Example: 20%, 20px, 20rem|<img src= "/apps/components/img/card_padding.png">
|**Show Header**| [**Optional**] Hides/Displays the **Title** of the card|<img src= "/apps/components/img/card_showheader.png">
|**Bordered**| [**Optional**] Adds/Removes the border around the card|<img src= "/apps/components/img/card_bordered.png">
|**Shadow**| [**Optional**]It's used to create a more visually appealing and engaging page. Shadows can also be used to make it easier for users to find and interact with page elements.  the terms "always," "hover," and "never" refer to the visibility of the component's shadow|<img src= "/apps/components/img/card_shadow.png">
|**Custom Class**| An HTML class attribute which allows further customisation **[See Form Attribute > Style Sheets**](**add anchor text**)|<img src= "/apps/components/img/input_customclass.png">|
|**Attribute Action**|Enable **Hidden** action to hide the field|<img src= "/apps/components/img/alert_arrtibuteaction.png">|

## First time User?

If you are using the Page Builder components on the ConnexCS platform first time, we request you to use our guide on <a href="https://bani-appsection--connexcs-docs.netlify.app/apps/page-builder/#steps-to-use-components-in-the-page-builder" target="_blank">steps to use the Components</a>.
