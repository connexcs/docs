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

| **Name**| **Description**|**Datatype**|
|---------|----------------|------------|
|**this.hide(fields)**|Hides the field|string, array|
|**this.show(fields)**|Displays the field|string, array|

!!! Info
    1. The show() and hide() methods can also be used to control the visibility of an alert in response to user input.
    2. **fields** refer to the component **ID**. You can fetch the ID from the **Component Attribute** panel in the Page Builder.
    3. For using **this.show(fields)** enable the **Hidden** check-box in the **Component Attribute** panel.

#### Steps to place/use the methods for components of the Page Builder"

1. Go to Form Attribute :material-menu-right: Action Panel :material-menu-right: Setting :material-menu-right: (Mounted | refresh | click 'Add action')
2. Write the method/code as shown in the **Exmaple** below
3. Click on `Save`.
4. On the main screen click on `Save` again.
5. Click on `Preview` to see the code in action.
<img src= "/apps/components/img/alert1.png">

!!! Example
    1. **this.hide(fields)**
        ```js
        var fields= ['alert_ilqsq5xq']
        this.hide(fields)
        ```
    2. **this.show(fields)**
        ```js
        var fields= ['alert_ilqsq5xq']
        this.show(fields)
        ```

## Config

|**Name**|**Description**|**Icon**|
|--------|---------------|--------|
|**ID**| This is a unique identifier used to access the field by the API and the key of the field when the form is saved|<img src= "/apps/components/img/alert_id2.png">|
|**Title**| [**Optional**] The visual identifier label of the field|<img src= "/apps/components/img/alert_title2.png">|
|**Description**| [**Optional**] Gives information about the alert|<img src= "/apps/components/img/alert_description2.png">|
|**Width**| [**Optional**] To set the width of the field. Example: 20%, 20px, 20rem|<img src= "/apps/components/img/alert_width2.png">|
|**Effect**| You can either choose from **Dark** or **Light** Mode|<img src= "/apps/components/img/alert_effect2.png">|
|**Type**| Sets the icon of the selected alert type. **Success**, **Warning**, **Info** and **Error** will have different icons associated with them|<img src= "/apps/components/img/alert_effect3.png">|
|**Closable**| The user can close the alert box|<img src= "/apps/components/img/alert_closable2.png">|
|**Center**| Sets the position of the alert label at the center|<img src= "/apps/components/img/alert_center2.png">|
|**Show Icon**|Displays/Hides the symbol associated with each **Type** of alert|<img src= "/apps/components/img/alert_showicon2.png">|
|**Attribute Action**|Enable **Hidden** action to hide the alert|<img src= "/apps/components/img/alert_arrtibuteaction.png">|

## Steps to use the Components

<a href="https://bani-appsection--connexcs-docs.netlify.app/apps/page-builder/#steps-to-use-components-in-the-page-builder" target="_blank">Click here</a> for the detailed steps on how to use the components.
