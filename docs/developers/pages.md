## Introduction

Using Page Builder, you can customise the Control Panel, Customer Portal, and Web Phone. Pages help you enhance the functionality of these interfaces. 

You can add Pages to multiple areas of these interfaces, such as Carrier, Customers, and Rate cards. 

A page can be interactive, containing forms that can be completed and then processed by ScriptForge.

!!! note "**Pages work together with [Button Builder](https://docs.connexcs.com/developers/button-builder/) to display a page on any Navigation bars.**"
    
The **Elements** in the Pages are extremely powerful and increase flexibility for the features you want to include in your portal.

### Usage Cases

1. You can use Pages to redirect to any rulebook or manuals that you want to show your customers.  
2. Interaction with external links using [**Scriptforge**](https://docs.connexcs.com/developers/scriptforge/) and integration with Pages. 
3. You can use it to create interactive content. For example, getting input from the customers.  
4. Server-side and client-side validation.  
5. If you are using **Webphone**, the data can be collected in the form created in Pages.
6. Customers may create their payment processors. They can create their interface using Pages on the website. The integration of the processing system can be done using Scriptforge.  
7. Number Porting: You can create a form (using Pages) on the Customer Portal and ask for details. Once the form is submitted, the requests reach Scriptforge for validation purposes. Scriptforge can update the customer on the status of their processed request.

## Build Form
1. Navigate to Developer :material-menu-right: Scriptforge IDE :material-menu-right: Pages and click <img src="/pages/add.png" alt="add" width="60"/> to create a new form.<img src="/pages/pages-page.png" alt="pages-page" width="5000"/>
2. Complete the form's **Name** and **Title** fields, then click **Save**. <img src="/pages/name-and-title.png" alt="name-and-title" width="450"/>
3. When you see the screen with the various pages, click on the form you created (Bani in this case).
4. A screen with options such as **Basic Field** (anchor text), **Advance Field** (anchor text), **Layout** (anchor text), **Component Attribute** (anchor text), and **Form Attribute** (anchor text) enables you to design attractive interactive interfaces for your customers. 
<img src="/pages/fields.png" alt="fields" width="5000"/>

## Basic Fields

!!! note "Know More"
    Click on each **Icon** to find out more about each element. 

| **Icon**                                                                                                                                                                                                                                                                     | **Description**                                                                                                                                                                                                                                                                |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [<img src="/pages/input-icon.png" alt="input" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#input)                                                                                                                                                                                                                   | The input field allows you to enter single-line text.                                                                                                                                                                                                                                                |
| [<img src="/pages/textarea.png" alt="textarea" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#textarea)                                                                                                                                                                                                                  | A textarea is useful when you want to allow users to enter a sizeable amount of free-form text, for example, a review or feedback.                                                                                                                                                            |
| [<img src="/pages/number.png" alt="number" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#number)                                                                                                                                                                                                                      | The number field helps to start a counter from a minimum to a maximum value.                                                                                                                                                                                                                       |
| [<img src="/pages/radio.png" alt="radio" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#radio)                                                                                                                                                                                                                        | The radio buttons allow one option to be selected out of the multiple options.                                                                                                                                                                                |
| [<img src="/pages/checkbox.png" alt="checkbox" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#chechkbox)                                                                                                                                                                                                                  | Checkboxes are used when there are lists of options and the user may select any number of choices, including zero, one, or several. <br><br> In other words, each checkbox is independent of all the other checkboxes in the list, so checking one box doesn't uncheck the others. |
| [<img src="/pages/select.png" alt="select" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#select)                                                                                                                                                                                                                      | The select option is a drop-down list with various options; you can either select one or many options.                                                                                                                                                                                                       |
| [<img src="/pages/time.png" alt="time" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#time)                                                                                                                                                                                                                          | The time picker allows you to pick a time (hh: mm :ss). <br> You can also select the start and end time.                                                                                                                                                                                                                                         |
| [<img src="/pages/date.png" alt="date" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#date)                                                                                                                                                                                                                          | The date picker allows you to pick a date (yyyy-mm-dd).<br> You can also select the start and end dates.                                                                                                                                                                                                                                       |
| [<img src="/pages/rate.png" alt="rate" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#rate)                                                                                                                                                                                                                          | A rating is an evaluation or assessment of something in terms of quality, quantity, or some combination of both. Therefore, you can add this wherever you want to rate the quality of a call, cost, or latency.                                                                 |
| [<img src="/pages/color.png" alt="color" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#color)                                                                                                                                                                                                                        | The color picker allows you to change the color.                                                                                                                                                                                                                                                 |
| [<img src="/pages/switch.png" alt="switch" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#switch)                                                                                                                                                                                                                      | The switch allows switching between "true" and "false" values.                                                                                                                                                                                                                             |
| [<img src="/pages/slider.png" alt="slider" width="175"/>]((https://bani--connexcs-docs.netlify.app/developers/pages/#slider))                                                                                                                                                                                                                      | The slider is a  control for selecting a single value from a continuous range of values.                                                                                                                                                                                                       |
| [<img src="/pages/text.png" alt="text" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#text)                                                                                                                                                                                                                          | Text displays a non-interactive piece of text to the user. Text elements can be used to provide captions or labels for other GUI controls or to display instructions or other text                                                                                                  |
| [<img src="/pages/html.png" alt="html" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#html)                                                                                                                                                                                                                          | HTML provides you with the option of writing the HTML code.                                                                                                                                                                                                                                 |
| [<img src="/pages/button.png" alt="button" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#button)                                                                                                                                                                                                                      | The button is responsible for performing an action when clicked, either for redirecting or for viewing purposes.                                                                                                                                                                 |
| [<img src="/pages/link.png" alt="link" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#link)                                                                                                                                                                                                                          | Link lets you add an external link to the page. When you click on the link, you will be redirected to that website, document, etc.                                                                                                                                               |
| [<img src="/pages/cascader.png" alt="cascader" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#cascader)                                                                                                                                                                                                                  | Cascader is a multi-level dropdown option. When a data set has a clear hierarchical structure, it can be viewed and selected through the cascading selector.                                                                                                                                                                                                                                            |
| [<img src="/pages/steps.png" alt="steps" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#steps)                                                                                                                                                                                                                        | Steps can be used to show the progress of a process. For each completed step, the corresponding step number will be highlighted.                                                                                                                                                               |

## Advance Fields

!!! note "Know More"
    Click on each **Icon** to learn more about each element. 

| **Icon**                                                        | **Description**                                                                                                                                                                                                                           |
|-----------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [<img src="/pages/data-table.png" alt="data table" width="135"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#data-table)      | A Data table is a document composed of columns, rows, and cells that contain specific values.<br> They store information that people can retrieve later and update as required.<br> It can be used for importing or editing multiple entries.                                                              |
| [<img src="/pages/advanced-grid.png" alt="advanced-grid" width="135"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#advanced-grid)     | The grid displays a grid-like layout on the various navigation bars like Customers, Carriers, etc.<br> It is more useful for editing and displaying information on the system than feeding it information.                                                                                                                                                 |
| [<img src="/pages/graph.png" alt="graph" width="135"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#graph)           | A graph allows you to display graphs of various parameters like ASR, RTP.                                                                                                                                                                          |
| [<img src="/pages/multi-form.png" alt="multi-form" width="135"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#multi-form) | The Multi-form feature allows you to prepare multiple forms. <br> If you want multiple duplicate copies (cloning) of the created form, you can use this advanced component.                                                                          |
| [<img src="/pages/dialog.png" alt="dialog" width="135"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#dialog)         | A dialog is a small window that prompts the user to make a decision or enter additional information. <br>A dialog does not fill the screen and is normally used for events that require users to take an action before they can proceed.|

## Layout

!!! note "Know More"
    Click on each **Icon** to learn more about each element. 

| **Icon**                                                    | **Description**                                                                                                                                                                                                                                                                                          |
|-------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [<img src="/pages/collapse.png" alt="collapse" width="155"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#collapse) | The collapse option allows you to make a section, or group of fields, collapsible. It is useful when there are several sections in your form and you want them to take up less vertical space. <br><br> You may use collapsible or standard sections to adjust your form layout or conditionally hide or show a group of fields. |
| [<img src="/pages/inline.png" alt="inline" width="155"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#inline)     | The inline feature allows you to create a reactive layout where each element occupies only the width it requires.                                                                                                                                                                                                                     |
| [<img src="/pages/alert.png" alt="alert" width="155"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#alert)       | An alert occurs in response to an event and can potentially trigger a notification. It brings something to the user's attention and provides a way of sending a message that can be read without opening the app, e.g., a low-balance alert.|
| [<img src="/pages/grid.png" alt="grid" width="155"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#grid)         | A grid layout provides equal size for two-dimensional layouts.                                                                                                                                                                                                                      |
| [<img src="/pages/table.png" alt="table" width="155"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#table)       | A table allows you to arrange the elements in rows and columns. The rows and columns are added dynamically as you build the table.                                                                                                                                                                                |
| [<img src="/pages/tabs.png" alt="tabs" width="155"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#tabs)         | Adding tabs to a form can make it more organised and easier to use if the form contains many controls. You can place the related controls on separate pages of the tab.                                                                                                                                              |    
    
You can change the characteristics of each component. You can click on **Component Attribute** to change the properties of the elements.
   
## Basic Elements 

### Input and Textarea

<img src="/pages/caInput.png" alt="add" width="260"/>

**1. ID**: An ID is a distinct name or number that is assigned to each INPUT component in the form.

**2. Name**: The name of your input field is displayed.

**3. Width**: Width allows you to adjust the width of the Placeholder.

**4. Label Width**: Label width adjusts the distance between each side of the label.

**5. Hide Label**: Set the input visibility when loaded.

**6. Placeholder**: This is the greyed-out value that is displayed when the field is empty.

**7. Default Value**: A placeholder with a pre-defined value.

**8. Custom Class**:

!!! danger "Currently Unused"

**9. Action Attribute**: The action attribute specifies the action that will be taken when the form is submitted. Usually, the form data is sent to a file on the server when the user clicks on the submit button.

* **Data Binding**: Data Binding is a feature that allows you to connect data from one element (the host element) to a property or attribute of another element in the form.

* **Hidden**: To make the element hidden in the form.

* **Disable**: When the disable option is active, the customer will not be able to enter any information in the input field.

* **Display Clear Button**: The Clear button allows you to remove the values from the currently displayed object's fields.

* **Display Password**: The password feature allows the customer to hide the characters of the input to avoid any outflow of sensitive data.

**10. Validation**: Validation helps you verify that the input entered by the customer is accurate and complete.

!!! example "Validation Examples" 
    Some fields are required to be filled in, so you can use the **Required** field.<br>Another example is if you want the answers in a specific format like **e-mail**, **URL**, **String**, or **Hexadecimal** then this field is extremely useful.


* **Custom Validation Rules**: If you want to add some JavaScript and include a callback. A callback will be performed via the callback function.

**11. Action Settings**: Action settings specify the actions for the input element. For example, OnChange, OnBLur, etc. You can create your own customizable actions and functions by clicking on **New Action +**.

| **Event Name** | **Description**                                                                                                       |
|------------    |-----------------------------------------------------------------------------------------------------------------------|
| **onChange**   | When the element loses focus after the content has been changed.                                                      |
| **onFocus**    | Focus on the input element.<br> For example, it's called when the user clicks on a text input.                         |
| **onBlur**     | Blur is used to remove focus from the input field.<br> For example, when the user moves to another field or another page. |


### Number

**1. Minimum**: Use the Minimum option to specify the smallest value for your counter.

**2. Maximum**: With the Maximum option, you can specify the maximum value for your counter.

**3. Step**: The Steps option specifies the number interval.

**4. Precision**: Using the precision option, you can add decimal places to the counter.

**5. Enable the control buttons**: The control buttons allow the customer to increase or decrease the count value.

**6. Position of the control buttons**: 

* **Default**: photo
* **Right**: photo

**7. Action Settings**: 

| **Event Name** | **Description**                  |
|------------    |----------------------------------|
| **onChange**   | Triggers when the value changes. |
| **onFocus**    | Triggers when Input focuses.     |
| **onBlur**     | Triggers when Input blurs.       |


### Radio Button and Checkbox Button

**1. Layout**: Layout aids in the positioning of radio buttons.

* **Block**: Block will place the radio buttons vertically. 
* **Inline**: Inline will place the Inline buttons horizontally.

**2. Option**: Option allows you to specify whether you want your options to display static or dynamic data. <br>For **Static data**, customers will only be allowed to select the displayed options that you create. 
* **Dynamic data** makes the form reactive and interactive. The data can be populated with respect to the input values in other elements. You can load the data in three ways: using a **Data Source**, **Assigned Value** or as a **Function**.

**3. Action Settings**:

| **Event Name** | **Description**                               |
|------------    |---------------------------------------------------|
| **onChange**   | Triggers when the checked state has been changed. |

!!! info "Dynamic Data Sources" 
          Data sources can be **External**, with URLs specified and data exchange methods such as GET, POST, PUT, and DELETE. <br> You can also use **Script Forge** as a data source. <br>Another way of choosing a data source is through a **Database**. 

!!! tip "You can get the value of a checkbox by using the getData method, and you can set the visibility based on the hide method."


### Select

**1. Multiple**: When enabled, the Multiple feature allows you to select many options from a drop-down list of options.

**2. Searchable**: The search function allows you to quickly find options.

**3. Action Settings**: 

| **Event Name** | **Description**                                  |
|------------    |--------------------------------------------------|
| **onChange**   | Triggers when the selected value changes.        |
| **onFocus**    | Focus on the Input component.                       |
| **onBlur**     | Blur the Input component and hide the dropdown. |


### Time

**1. Range Time**: With the Range Time feature, you can specify a start and end time.

**2. Placeholder of Start Time**: A greyed-out value for the Start Time is displayed when the field is empty.

**3. Placeholder of End Time**: A greyed-out value for End Time is displayed when the field is empty.

**4. Format**: To configure the time format

**5. Default Value**: The default value allows you to specify a predetermined start and end time.

**6. Attribute Action**: 

* Read Only: The Read-only feature allows you to view but not select the time value.

* Text box is editable: The Edit feature allows your customers to add or delete information from the form.

**7. Action Settings**:

| **Event Name** | **Description**                            |
|------------    |----------------------------------------|
| **onChange**   | Triggers when user the confirms the value. |
| **onFocus**    | Focus on the Input component.             |
| **onBlur**     | Blur the Input component.              |


### Date

**1. Display Type**:

* Year: Year enables your customers to switch between years. By default, the date will be January 1. 
* Month: Month enables your customers to switch between years and months. By default, the date will be January 1.
* Date: With Date, your customers can select the year, month, and date. Only a single selection is allowed. 
* Dates. Multiple date selections are allowed. 
* Week:
* DateTime: With the DateTime feature, your customers can choose a specific date and time. 
* Datetimerange: The DateTime range feature allows your customers to specify a start and stop date, as well as a start and stop time.


**2. Get Time Stamp**: Enabling Time Stamp records the event's time of occurrence.

**3. Action Settings**: 

| **Event Name** | **Description**                                     |
|----------------|-----------------------------------------------------|
| **onChange**   | onChange can be executed when the selected date changes. |
| **onFocus**    | Focus on the Input component.                          |
| **onBlur**     | Blur the Input component.                           |


!!! tip "The range date and time selector can be pretty useful for selecting the dates and specific times for displaying information on the graphs."


### Rate

**1. Maximum**: Maximum allows you to enter the number of stars required for a rating.

**2. Allow Half**: Enabling Allow Half will let your customers make a semi-selection. 

**3. Default Value**: The default option lets you set a minimum rating score while you create the form. Your customers will only be allowed to rate above the preset score.

**4. Action Settings**: 

| **Event Name** | **Description**                      |
|----------------|--------------------------------------|
| **onChange**   | Triggers when the rate value is changed. |

### Color

**1. Support transparency options**: The Transparent option lets you decide whether to keep your color transparent or opaque. You can keep the value of alpha between 0 (completely transparent) and 1 (completely opaque).

**2. Default Value**: You can select a default color.

**3. Action Settings**:

| **Event Name** | **Description**                        |
|----------------|----------------------------------------|
| **onChange**   | Triggers when the color value changes. |

### Switch

**1. Default Value**: You can select a default value of 'true' or 'false'.

**2. Action Settings**:

| **Event Name** | **Description**                              |
|----------------|----------------------------------------------|
| **onChange**   | Triggers when the selected state is changing. |


### Slider

**1. Display input box**: The input box lets you display the value you have selected on the slider. You can also change the value of the slider by entering values into the input box or by navigating the **-** or **+** buttons.

**2. Minimum**: The minimum value of the slider can be set.

**3. Maximum**: The maximum value of the slider can be set.

**4. Step**: Steps allow you to select the rate at which the slider will change.<br>For example, if you select the step value as 2, the slider will add 2 to the existing value. The same rule is valid for a '-2' step value.

**5. Action Settings**:

| **Event Name** | **Description**                                                                                                    |
|----------------|--------------------------------------------------------------------------------------------------------------------|
| **onChange**   | Triggers when the value changes (if the mouse is being dragged, this event only fires when the mouse is released). |

### Text

**1. Default Value**: You can enter a preset value you want your customers to read or follow.

**2. Action Settings**:

| **Event Name** | **Description**                                                                                                                                                                                 |
|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **onChange**   | Triggers whenever the contents of the TextBox control are changed, either by a user or programmatically. This event fires when the TextBox control is created and initially populated with text. |


### HTML

**1. Default Value**: The default value allows you to enter a preset HTML code.

**2. Action Settings**:

| **Event Name** | **Description**                                                                                                              |
|----------------|------------------------------------------------------------------------------------------------------------------------------|
| **onChange**   | Triggers when the element value changes in the HTML code.<br>For example, "The input value has changed. The new value is: hi". |

### Button

**1. Button Type**: 

* Default: A default button indicates a series of actions without priority. <br>For example, **"Submit"** can be a default button in the forms. 
* Primary: The primary button indicates the main action or an important event to be performed by the customer. 
* Success: The success button indicates the completion of a task. 
* Warning: A warning button can be introduced when you want your customer to pay special attention to a specific condition. 
* Danger: Danger can be introduced by risk-taking actions such as deletion or authorization. 
* Info: Info buttons are introduced when you want to provide additional information to the customer where you think the customer might need help. 
* Text/Link: Text/Link buttons are generally used when you want to redirect the customer to some other website or page.

**2. Button shape**: There are three button shapes to choose from: plain, round, and circular.

**3. Action Settings**:

| **Event Name** | **Description**                                                                                                                           |
|----------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| **onClick**    | The onclick event occurs when the user clicks on the button.<br>For example, click on the button to display the date or change the color. |


### Link

**1. Link Name**: The link name specifies the external link to be used in the form.

**2. href**: href is a hypertext reference that indicates the hyperlink's destination.

**3. whether the component has underline**:  If the link is to be underlined.

**4. whether to open in a new window**: The option to open the link in a new separate window.

**5. Action Settings**:

| **Event Name** | **Description**                                                                                                                                                                                                                                                                     |
|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **onClick**    | onClick event can be integrated with the Link element. The purpose is data processing.<br>For example, before the link redirects the customer to the external website or document, it may ask the customer to fill in some details, and only then will they be allowed to go to the page. |


### Cascader

**1. Optional any node**: You can make the cascader's sub-options selectable.

**2. Action Settings**:

| **Event Name** | **Description**                                                                                                                                                                                                        |
|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **onClick**    | Triggers when the binding value changes. <br>For example, if the cascader has multiple streams like Science, Commerce, and the Arts, then the option in the next dropdown will change with respect to the selected stream. |
| **onFocus**    | Focus the on Input component.                                                                                                                                                                                             |
| **onBlur**     | Blur the Input component and hide the dropdown.                                                                                                                                                                       |

### Steps

**1. Spacing for each step**: You can set the spacing between the steps.

**2. Display direction**: Steps can be displayed in either a horizontal or vertical view.

**3. Current step status/end step**: You can select the status of your steps from the options below.

* Wait: The form is on standby since the customer is filling in information on that page. 
* Process: Some information or process is being materialized. 
* Finish: Finish means that the customers have completed all of their tasks. 
* Error: The error step is displayed when the system does not accept the information provided by the customer. 
* Success: The success step is displayed when all the information is complete and accepted by the system.

**4. Center title and description**: The step's title and description will be centered.

**5. Simple theme**: The theme lets you decide on the layout of the step feature.

**6. Action Settings**:

| **Event Name** | **Description**                        |
|----------------|----------------------------------------|
| **onChange**   | Triggers when the step number changes. |

    
## Advance Elements 

### Data Table, Advanced Grid and Multi-Form

**1. Paging**: DataTables can split the rows in tables into individual pages, which is an efficient method of showing a large number of records in a small space.<br>The minimum value of a page is 5.

**2. Page Size**: Page size defines the number of rows to display on a single page when using paging.

**3. Show Control**: The show control either lets you hide or display the serial number column.

**4. Default Value**: A default value is a value that is automatically assigned to the column when a DataRow is created.

**5. Attribute Action**: 

* Deletable: Deletable option will remove the selected row from the DataTable completely.
* Addible:  Deletable option will add a row to the DataTable.

**6. Action Settings**:

| **Event Name**   | **Description**                                                                                                                                                                                                                                    |
|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **onChange**     | This option allows users to define custom functionality that should occur whenever a change to the selection within a Datatable occurs.<br>For example, when the selected user changes, you can update the selected user's phone number or email.  |
| **onRowAdd**     | Triggers when a row is added to the Datatable. You can call a function to perform any operation.                                                                                                                                                  |
| **onRowRemove**  | Triggers when a row is added to the Datatable. You can call a function to perform any operation after the row has been deleted.                                                                                                                    |
| **onPageChange** | Triggers each time you navigate to a new page from the pagination control.                                                                                                                                                                         |

### Graph

**1. Width**: Width allows you to decide the horizontal width of the graph.

**2. Height**: Width allows you to decide the vertical height of the graph.

**3. Label Width**: Label width helps you change the dimensions of the Name of the graph.

### Dialog

**1. Width**: Width allows you to set the dimension of the Dialog box.

**2. Visible**: The visible option decides whether to display or hide the Dialog box.

**3. Show Close**: Whether to show a close button for closing the dialog box. 

**4. Show Cancel button**: Whether to show a cancel button on the dialog box. 

* Button Text: Button text lets you rename the cancel button.

**5. Show Confirm button**: Whether to show a confirm button on the dialog box. 

* Button Text: Button text lets you rename the confirm button.
* Loading: Check the loading option to show animation while loading data before the customer clicks on the confirm button.

**6. Center**: Center option lets you place the confirm and cancel buttons in the center of the dialog box.

**7. Margin Top**: Margin Top lets you decide the position of the dialog box from the top of the form.  

**8. Action Settings**:

| **Event Name**     | **Description**                                                                       |
|----------------    |---------------------------------------------------------------------------------------|
| **onConfirm**      | You can write custom code for what will happen when the onConfirm button is clicked. |
| **onCancel**       | You can write a custom code for what will happen when the onCancel button is clicked.  |

!!! info "The dialog can be manipulated by calling the method of the component instance:"
    * **show dialog**: this.getComponent('dialog field identifier').open()
    * **close dialog**: this.getComponent('dialog field identifier').close()
    * **validate data in dialog**: this.getComponent('dialog field identifier').validate()
    * **dialog fields show hidden**: this.getComponent('dialog field identifier').hide([name]).
                                     this.getComponent('dialog field identifier').display(['name'])
                                   

## Layout Elements 

### Collapse

**1. Collapse Options**: The collapse options let you add and delete the collapse options for your form.

**2. Accordion Mode**: Accordion mode allows you to show or hide particular content for a collapsible option.

### Inline

**1. Space Size**: The space size increases or decreases the space between the added fields.

### Alert

**1. Title**: The title gives a name to your Alert message.

**2. Description**: Describe your alert message in the description field.

**3. Width**: Width lets you decide the dimensions of the alert box.

**4. Effect**:

* Light: The light effect will display a light background with dark text in the alert box.
* Dark: The dark effect will display a dark background with light text in the alert box.

**5. Type**:

* Success: A success alert indicates a successful or positive action.
* Warning: A warning alert indicates a dangerous or potentially negative action. 
* Info: An info alert is a simple message indicating an event, facts or an instruction.
* Error: An error alert occurs when an unforseen or invalid event takes place.

**6. Closable**: Closable allows you to close the alert box.

**7. Center**: Center allows you to position the alert text in the centre of the alert box.

**8. Show Icon**: Show Icon will display the alert icons corresponding to the type of alert. 

### Grid 

**1. Grid Spacing**: Grid spacing allows you to add spaces between the added fields. 

**2. Flex Layout**: Flex Layout helps you place your elements horizontally and vertically according to your requirements.

* Horizontal Arrangement: 
* *Start: Fields are placed toward the start line.
* *End: Fields are placed toward the end line.
* *Center: Fields are placed along the center of the line.
* *Space Around: Fields are evenly distributed in the line with equal space around them.
* *Space Between: Fields are evenly distributed in the line; the first item is on the start line, and the last item is on the end line.

* Vertical Arrangement: 
  * *Top: Fields are placed at the top of the grid.
  * *Middle: Fields are placed at the center of the grid.
  * *Bottom: Fields are placed at the bottom of the grid.

#### Common Attribute of each field inside the Grid

**1. Grid Span**: Grid span allows you to set the field size inside the grid.

**2. Offset**: Offset allows you to move all fields in the grid to the right side.

**3. Push**: Push allows you to move a specific field in the grid to the right side.

**4. Pull**: Pull allows you to move a specific field in the grid to the left side.
    

!!! example "You can add a Graph and a corresponding Data Table which will give the information on raw data. (add photo)"

### Table

**1. Border Width**: Border width allows you to set the width of the rows and columns of the table.

**2. Border Color**: Border color allows you to set the color of the rows and columns of the table.

#### Common Attribute of each field inside the Table

**1. Width**:: Width allows you to set the width of each cell in the table.

**2. Height**:: Height allows you to set the height of each cell in the table.


### Tabs

**1. Type**: Type lets you select the tab style from 3 options: **Default, Tabs** and **Border-cards**.

**2. Tab Position**: Tab Position lets you decide the position of the tabs: Top, Left, Right, and Bottom.

**3. Tab Options**: Tab Options let you increase and decrease the number of tabs.


## Form attribute

The Form attribute helps you specify values for the following parameters for all the fields in the form:

**1. Form Width**: Form width helps you decide the dimensions of the overall form.

**2. Label Position**: Label position helps you position the field labels.<br> You can decide between Left, Right and Top. 

**3. Size**: Size describes the dimensions of all the fields in the form. <br> You can choose from **Large**, **Small**, and **Mini**. 

**4. Style sheets**: You can add custom Style Sheets to make the interface look more pleasing.

**5. Data Source**: Data Source can be External, from Script Forge or a Database.

**6. Action Panel**: Action Panel allows you to specify the actions for buttons and link controls.

## Preview Options

Click on the **Preview** button to view the form.<br> You can choose between the **Monitor** view, **Tablet** view, and **Cellphone** view. 

**1. Get Data**: Get Data displays the raw data from the form.

**2. Reset**: Resetting will erase all the data filled in the form.

**3. Disabled\Enabled Edit**: Disabled edit will not allow your customer to enter data in the form; Enabled edit will allow you to enter the data in the form.

**4. Print Read Mode**: Print Read mode allows you to view the form before printing.

**5. Print**: The print option will let you print the filled form.

**6. Close**: Close will make you exit from the preview window.
