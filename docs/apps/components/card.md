# Card

## Description

A card in a form builder is a type of container that can be used to group related form fields together.

Cards are typically used to create a more organized and visually appealing form layout.

They can also help to improve the user experience by making it easier for users to scan the form and find the information they need.

<img src= "/apps/components/img/card.png">

## Use Case

Some of the Use-Cases are as follows:

1. Grouping related fields together.
2. Creating multi-step forms.
3. Breaking up long forms into smaller chunks.
4. Creating sidebars.
5. Adding visual interest.
6. Creating responsive forms.
7. Improving accessibility.

### Interactivity

**Interactivity** is the ability of a web page or application to respond to user input.

**Card** components can be interactive in a form builder.

They can be used to display information, collect user input, and trigger actions.

Some examples of how card components can be made interactive include:

1. **Adding Input fields to Cards**: You can add input fields, such as text fields, select boxes, and checkboxes, to cards to collect user input.

2. **Displaying Dynamic content**: You can use JavaScript to display dynamic content in cards, such as error messages or additional information based on user input.

3. **Triggering actions**: You can add buttons or links to cards to trigger actions, such as submitting a form or opening a pop-up window.

4. **Adding animations and effects**: You can use CSS to add animations and effects to cards, such as fading in or out elements or highlighting fields upon clicking.

5. **Responding to user interactions**: You can use JavaScript to handle user interactions with cards, such as clicks, selections, and changes. For example, you could use JavaScript to hide or show additional fields based on the user's selection in a dropdown menu.

## API

### Methods

| **Name**| **Description**|
|----------------------|---------------------------------------------------------------------|
|**this.addClassName(fields, disabled)**|Add style class to form item|
|**this.removeClassName(fields, disabled)**|Remove form item style|
//confirm from saurabh|**this.disable(fields)**| Disable input field from user interaction|
| **this.enable(fields)**| Disable input field from user interaction|
| **this.getComponent(name) → {Object}**|Retrieve a component from an object or element|
| **this.getValue(fieldName)**|Get A Value From An Object|
|**this.hide(fields)**|Hides the field|
|**this.show(fields)**|Displays the field|

## Config

| **Name**|**Description**|**Image**|
|---------------|----------------------------------------------------------------------------------------------------------------------------------------|----|
|**ID**| This is a unique identifier which is used to access the field by the API and the key of the field when the form is saved|<img src= "/apps/components/img/input_id.png">|
|**Title**| [**Optional**] The visual identifier label of the field|<img src= "/apps/components/img/alert_title2.png">|
|**Width**| [**Optional**] To set the width of the field|<img src= "/apps/components/img/input_width.png">|
|**Padding**| [**Optional**] Specifies the amount of space between an element's content and its border|<img src= "/apps/components/img/card_padding.png">
|**Show Header**| [**Optional**] Hides/Displays the **Title** of the card|<img src= "/apps/components/img/card_showheader.png">
|**Bordered**| [**Optional**] Adds/Removes the border around the card|<img src= "/apps/components/img/card_bordered.png">
|**Shadow**| [**Optional**]It's used to create a more visually appealing and engaging form. Shadows can also be used to make it easier for users to find and interact with form elements.  the terms "always," "hover," and "never" refer to the visibility of the component's shadow|<img src= "/apps/components/img/card_shadow.png">
|**Custom Class**| A HTML class attribute which allows further customisation **[See Form Attribute > Style Sheets**](**add anchor text**)|<img src= "/apps/components/img/input_customclass.png">|
|**Attribute Action**|Enable **Hidden** action to hide the field|<img src= "/apps/components/img/alert_arrtibuteaction.png">|