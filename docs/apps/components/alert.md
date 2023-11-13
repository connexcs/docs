# Alert

## Description

The Alert component can be used to display success, warning, information or error-type boxes.

## Use Case

You can use alerts to display:

* An Information box is a form is successfully saved.
* An error if it doesn't save.
* A warning if some data is incomplete on the form.
* Information to advise how to better complete a form.

## API

### Methods

| **Name**|**Description**|
|---------------|----------------------------------------------------------------------------------------------------------------------------------------|
|**.show()**|Displays the alert|
|**.hide()**|Hides the alert |

!!! Info The show() and hide() methods can also be used to control the visibility of an alert in response to user input.

### Events

### Config

| **Name**|**Description**|
|---------------|----------------------------------------------------------------------------------------------------------------------------------------|
|**ID**| This is a unique identifier used to access the field by the API and the key of the field when the form is saved |
|**Title**| [**Optional**] The visual identifier label of the field|
|**Description**| [**Optional**] Gives information about the alert|
|**Width**| [**Optional**] To set the width of the field|
|**Hide Label**| Hides the label on the form|
|**Effect**| You can either choose from **Dark** or **Light** Mode|
|**Type**| Sets the icon of the selected alert type. **Success**, **Warning**, **Info** and **Error** will have different icons associated with them|
|**Closable**| The user can close the alert box|
|**Center**| Sets the position of the alert label at the center|
|**Show Icon**|Displays/Hides the symbol associated with each **Type** of alert|
|**Attribute Action**|Enable **Hidden** action to hide the field|

### Events

Events aren't used with Alerts.



### Interactivity

Alerts lack a natural ability for interaction.

They're modal dialogue boxes that remain visible until the user decides to close them.

You would need to make a custom alert element and include event listeners in it in order to add interactivity to an alert.

**Examples may include:**

1. Clicking on a button to dismiss the alert.
2. Typing text into a text box to provide feedback.
3. Selecting an option from a list.
4. Submitting a form.