# I-Frame

## Description

An iframe component, short for "inline frame", is an HTML element that embeds an external web page within another web page.

In the context of forms, iframe components can be used to integrate third-party content, such as maps, calendars, or payment gateways, into a form without disrupting the form's layout or functionality.

<img src= "/apps/components/img/iframe.png">

## Use Case

1. Integrating Third-Party Content
2. Encapsulating External Resources
3. Responsive and Adaptable
4. Dynamic Content Injection
5. Cross-Origin Communication

Some of the examples may include:

1. Embedding Maps
2. Integrating Calendars
3. Incorporating Payment Gateways
4. Displaying Dynamic Content
5. Encapsulating External Tools

### Interactivity

1. Passing Data to the Embedded Content.
2. Triggering Actions Based on Embedded Content.
3. Communicating Between Multiple I-frames.
4. Handling Security Considerations:

## API

### Methods

| **Name**| **Description**|
|----------------------|---------------------------------------------------------------------|
//|**this.addClassName(fields, disabled)**|Add style class to form item|
//|**this.removeClassName(fields, disabled)**|Remove form item style|
| **this.disable(fields)**| Disable input field from user interaction|
//| **this.enable(fields)**| Disable input field from user interaction|
//| **this.getComponent(name) → {Object}**|Retrieve a component from an object or element|
//| **this.getValue(fieldName)**|Get A Value From An Object|
//| **this.getValues() → {Object}**|Get the values of all fields when values change|
//|**this.hide(fields)**|Hides the field|
//|**this.show(fields)**|Displays the field|
//|**this.setData(Value)**|Set the data in the field|

## Config

| **Name**|**Description**|**Icon**|
|---------------|----------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|
|**ID**| This is a unique identifier which is used to access the field by the API and the key of the field when the form is saved|<img src= "/apps/components/img/input_id.png">|
|**Width**| [**Optional**] To set the width of the field|<img src= "/apps/components/img/input_width.png">|
|**Height**|Adjust the height of the I-Frame window|<img src= "/apps/components/img/iframe_height.png">|
|**URL**|Provide the link for the webpage you wish to displayin the I-Frame|<img src= "/apps/components/img/iframe_url.png">|
|**Custom Class**| A HTML class attribute which allows further customisation **[See Form Attribute > Style Sheets**](**add anchor text**)|<img src= "/apps/components/img/input_customclass.png">|
|**Attribute Action**|Enable **Hidden** to action to hide the field|<img src= "/apps/components/img/alert_attributeaction.png">|