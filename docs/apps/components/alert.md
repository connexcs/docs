# Alert

## Description

The Alert component can be used to display success, warning, information or error-type boxes.

<img src= "/apps/components/img/alert.png">

## Use Case

You can use alerts to display:

* An Information box is a form is successfully saved.
* An error if it doesn't save.
* A warning if some data is incomplete on the form.
* Information to advise how to better complete a form.

### Interactivity

Alerts lack a natural ability for interaction.

They're modal dialogue boxes that remain visible until the user decides to close them.

You would need to make a custom alert element and include event listeners in it in order to add interactivity to an alert.

**Examples may include:**

1. Clicking on a button to dismiss the alert.
2. Typing text into a text box to provide feedback.
3. Selecting an option from a list.
4. Submitting a form.

## API

### Methods

| **Name**|**Description**|
|---------------|----------------------------------------------------------------------------------------------------------------------------------------|
| **Name**| **Description**|
**(static) database(name)**|Access database for List(get all records), Read (get a record), Update (update a record), Delete (delete a record). This is an Object of functions|
|**(static) getData(isValidateopt) → {Promise.<Object>}**|To get form data|
| **(static) getValue(fieldName)**|Get A Value From An Object|
|**(static) hide(fields)**|Hides the field|
|**.show()**|Displays the alert|
|**(static) refresh()**|Refresh the form, when the form data changes, you need to call this method for re-render|
|**this.reset()**|Reset Form Fields Data|
|**(static) setData(Value)**|Set the data in the field|

!!! Info The show() and hide() methods can also be used to control the visibility of an alert in response to user input.

### Config

| **Name**|**Description**|**Icon**|
|---------------|----------------------------------------------------------------------------------------------------------------------------------------|
|**ID**| This is a unique identifier used to access the field by the API and the key of the field when the form is saved|<img src= "/apps/components/img/alert_id.png">|
|**Title**| [**Optional**] The visual identifier label of the field|<img src= "/apps/components/img/alert_title.png">|
|**Description**| [**Optional**] Gives information about the alert|<img src= "/apps/components/img/alert_description.png">|
|**Width**| [**Optional**] To set the width of the field|<img src= "/apps/components/img/input_width.png">|
|**Hide Label**| Hides the label on the form|<img src= "/apps/components/img/input_hidelabel.png">|
|**Effect**| You can either choose from **Dark** or **Light** Mode|<img src= "/apps/components/img/alert_effect.png">|
|**Type**| Sets the icon of the selected alert type. **Success**, **Warning**, **Info** and **Error** will have different icons associated with them|<img src= "/apps/components/img/alert_type.png">|
|**Closable**| The user can close the alert box|<img src= "/apps/components/img/alert_closable.png">|
|**Center**| Sets the position of the alert label at the center|img src= "/apps/components/img/alert_center.png">|
|**Show Icon**|Displays/Hides the symbol associated with each **Type** of alert|img src= "/apps/components/img/alert_showicon.png">|
|**Attribute Action**|Enable **Hidden** action to hide the field|img src= "/apps/components/img/alert_attributeaction.png">|
