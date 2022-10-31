## Introduction

Using Page Builder, you can customize the Control Panel, Customer Portal, and Web Phone. Pages help you enhance the functionality of these interfaces. 

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
6. Customers may create their own payment processors. They can create their own interface using Pages on the website. The integration of the processing system can be done using Scriptforge.  
7. Number Porting: You can create a form (using Pages) on the Customer Portal and ask for details. Once the form is submitted, the requests reach Scriptforge for validation purposes. Scriptforge can update the customer on their request processing.

## Build Form

1. Navigate to Developer :material-menu-right: Scriptforge IDE :material-menu-right: Pages and click <img src="/pages/add.png" alt="add" width="60"/> to create a new form.<img src="/pages/pages-page.png" alt="pages-page" width="5000"/>
2. Complete the form's **Name** and **Title** fields, then click **Save**. <img src="/pages/name-and-title.png" alt="name-and-title" width="450"/>
3. When you see the screen with the various pages, click on the form you created (Bani in this case).
4. A screen with options offered as **Basic Field** (anchor text), **Advance Field** (anchor text), **Layout** (anchor text), **Component Attribute** (anchor text), and **Form Attribute** (anchor text) enables you to design attractive interactive interfaces for your customers. 
<img src="/pages/fields.png" alt="fields" width="5000"/>

## Basic Fields

!!! note "Know More"
    Click on each **Icon** to find out more about each element. 

| **Icon**                                                                                                                                                                                                                                                                     | **Description**                                                                                                                                                                                                                                                                |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [<img src="/pages/input-icon.png" alt="input" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#input)                                                                                                                                                                                                                   | The input field allows you to enter single-line text                                                                                                                                                                                                                                                |
| [<img src="/pages/textarea.png" alt="textarea" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#textarea)                                                                                                                                                                                                                  | A textarea is useful when you want to allow users to enter a sizeable amount of free-form text, for example, a review or feedback                                                                                                                                                            |
| [<img src="/pages/number.png" alt="number" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#number)                                                                                                                                                                                                                      | The number field helps to start a counter from a minimum to a maximum value                                                                                                                                                                                                                       |
| [<img src="/pages/radio.png" alt="radio" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#radio)                                                                                                                                                                                                                        | The radio buttons allow one option to be selected out of them all Where multiple controls exist                                                                                                                                                                                |
| [<img src="/pages/checkbox.png" alt="checkbox" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#chechkbox)                                                                                                                                                                                                                  | Checkboxes are used when there are lists of options and the user may select any number of choices, including zero, one, or several. <br><br> In other words, each checkbox is independent of all the other checkboxes in the list, so checking one box doesn't uncheck the others. |
| [<img src="/pages/select.png" alt="select" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#select)                                                                                                                                                                                                                      | The select option is a dropdown list with various options; you can either select one or many options.                                                                                                                                                                                                       |
| [<img src="/pages/time.png" alt="time" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#time)                                                                                                                                                                                                                          | Time picker allows you to pick a time (hh: mm :ss). <br> You can also select the start and end time                                                                                                                                                                                                                                         |
| [<img src="/pages/date.png" alt="date" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#date)                                                                                                                                                                                                                          | Date picker allows you to pick a date (yyyy-mm-dd).<br> You can also select the start and end date                                                                                                                                                                                                                                       |
| [<img src="/pages/rate.png" alt="rate" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#rate)                                                                                                                                                                                                                          | Rating is an evaluation or assessment of something, in terms of quality, quantity, or some combination of both. Therefore, you can add this where you want to rate the quality of a call, or cost or latency                                                                 |
| [<img src="/pages/color.png" alt="color" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#color)                                                                                                                                                                                                                        | Color picker allows you to change the color                                                                                                                                                                                                                                                 |
| [<img src="/pages/switch.png" alt="switch" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#switch)                                                                                                                                                                                                                      | Switch allows switching between ‘true’ and ‘false’ values                                                                                                                                                                                                                             |
| [<img src="/pages/slider.png" alt="slider" width="175"/>]((https://bani--connexcs-docs.netlify.app/developers/pages/#slider))                                                                                                                                                                                                                      | Slider is a  control for selecting a single value from a continuous range of values                                                                                                                                                                                                       |
| [<img src="/pages/text.png" alt="text" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#text)                                                                                                                                                                                                                          | Text displays a non-interactive piece of text to the user. Text elements can be used to provide captions or labels for other GUI controls or to display instructions or other text                                                                                                  |
| [<img src="/pages/html.png" alt="html" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#html)                                                                                                                                                                                                                          | HTML provides you with the option to write the HTML code                                                                                                                                                                                                                                 |
| [<img src="/pages/button.png" alt="button" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#button)                                                                                                                                                                                                                      | Button is responsible for performing an action when clicked either for redirecting or for viewing purposes                                                                                                                                                                 |
| [<img src="/pages/link.png" alt="link" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#link)                                                                                                                                                                                                                          | Link lets you add an external link to the page. When you click on the link you will be redirected to that website, document, etc                                                                                                                                               |
| [<img src="/pages/cascader.png" alt="cascader" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#cascader)                                                                                                                                                                                                                  | Cascader is a multi-level dropdown option. When a data set has a clear hierarchical structure, it can be viewed and selected through the cascade selector.                                                                                                                                                                                                                                            |
| [<img src="/pages/steps.png" alt="steps" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#steps)                                                                                                                                                                                                                        | Steps can be used to show the progress of a process. For each completed step the step number will be highlighted                                                                                                                                                               |

## Advance Fields

!!! note "Know More"
    Click on each **Icon** to know more about each element. 

| **Icon**                                                        | **Description**                                                                                                                                                                                                                           |
|-----------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [<img src="/pages/data-table.png" alt="data table" width="135"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#data-table)      | Data table is a document composed of columns, rows, and cells that contain specific values.<br> They store information that people can retrieve later and update as needed.<br> It can be used for importing/editing multiple entries                                                              |
| [<img src="/pages/advanced-grid.png" alt="advanced-grid" width="135"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#advanced-grid)     | Grid displays a grid-like layout on the various navigation bars like Customers, Carriers, etc.<br> It is more useful for editing and displaying information on the system rather than feeding information                                                                                                                                                 |
| [<img src="/pages/graph.png" alt="graph" width="135"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#graph)           | Graph allows you to display graphs of various parameters like ASR, RTP                                                                                                                                                                          |
| [<img src="/pages/multi-form.png" alt="multi-form" width="135"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#multi-form) | Multi-form feature allows you to prepare multiple forms. <br> If you want multiple duplicate copies (cloning) of the created form, you can use this advanced component                                                                          |
| [<img src="/pages/dialog.png" alt="dialog" width="135"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#dialog)         | Dialog is a small window that prompts the user to make a decision or enter additional information. <br><br> A dialog does not fill the screen and is normally used for modal events that require users to take an action before they can proceed |

## Layout

!!! note "Know More"
    Click on each **Icon** to know more about each element. 

| **Icon**                                                    | **Description**                                                                                                                                                                                                                                                                                          |
|-------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [<img src="/pages/collapse.png" alt="collapse" width="155"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#collapse) | Collapse option allows you to make a section, or group of fields, collapsible. It is useful when there are several sections in your form and you want them to take up less vertical space. <br><br> You may use collapsible or standard sections to adjust your form layout or conditionally hide/show a group of fields |
| [<img src="/pages/inline.png" alt="inline" width="155"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#inline)     | Inline feature allows you to create a reactive layout where each element occupies only the width it requires                                                                                                                                                                                                                     |
| [<img src="/pages/alert.png" alt="alert" width="155"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#alert)       | An alert occurs in response to an event and can potentially trigger a notification. It brings something to the notice of the user and a way for sending a message that can be read without opening the app, e.g., low balance alert                                                                      |
| [<img src="/pages/grid.png" alt="grid" width="155"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#grid)         | Grid layout provides equal size, for two-dimensional layouts                                                                                                                                                                                                                           |
| [<img src="/pages/table.png" alt="table" width="155"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#table)       | Table allows you to arrange the elements in rows and columns. The rows and columns are added dynamically as you build the table                                                                                                                                                                                |
| [<img src="/pages/tabs.png" alt="tabs" width="155"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#tabs)         | Adding tabs to a form can make it more organized and easier to use if the form contains many controls. By placing related controls on separate pages of the tab                                                                                                                                              |    
    
For each component you can change the characteristics of each component. You can click on **Component Attribute** to and chage the properties of the elements.
    
## Basic Elements 
    
### Input

<img src="/pages/caInput.png" alt="add" width="360"/>

**1. ID**: ID is unique name/number for every INPUT component in the form.

**2. Name**: Name displays name of your input field. 

**3. Width**: Width allows you to adjust the width of the Placeholder.

**4. Label Width**: Label width adjusts the distance between each side of the label.

**5. Hide Label**: Set the input visibility when loaded.

**6. Placeholder**: This is the greyed out value which is displayed when the field is empty.

**7. Default Value**: Pre-defined value in the Placeholder.

**8. Custom Class**: !!! danger "Currently Unused"

**9. Attribute Action**: The action attribute defines the action to be performed when the form is submitted. Usually, the form data is sent to a file on the server when the user clicks on the submit button. 

* **Data Binding**: Data Binding helps you connect data from one element (host element) to a property or attribute to another element in the form.

* **Hidden**: To make the element hidden in the form.

* **Disable**: When the diabled option is active, the customer will not be able to enter any information in the input field.

* **Display Clear Button**: Clear button allows you to remove the values from the currently displayed object's fields.

* **Display Password**: Parrword feature allows the customer to hide the characters of the iput to avoid any outflow of sensitive data.

**10. Validation**: Valdation helps you verify that the input entered by the customer is accurate and complete.
!!! example use
Some fields are necessary to be filled, so you can use the **Required** field.
Another example, if you want the answers in a specific format like **e-mail, URL, String, Hexadecimal** then this filed is extremly useful.

* **Custon Validation Rules**: If you want to add some JavaScript and includes a callback. Call back will perform asynchoronous validation. 

**11. Action Settings**: Action settings specify the actions for the Input element . For exmaple, OnChange, OnBLur, etc. You can create your customizable actions and functions by clicking on **New Action +**.

### Textarea
**All fields same as Input*

### Number

**1. Minimum**: Minimum option allows you to set the smallest value for your counter

**2. Maximum**: Maximum option allows you to set the largest value for your counter

**3. Step**: Steps option specifies the interval between the numbers 

**4. Precison**: Precision option will let you introduce decimal places in the counter

**5. Enable the control buttons**: Control buttons allows the customer to increase/decrease the count value

**6. Position of the control buttons**: 

* **Default**: photo
* **Right**: photo


### Radio Button

**1. Layout**: Layout hepls you to position the Radio buttons

* **Block**: Block will place the Radio buttons vertically 
* **Inline**: Inline will place the Inline buttons horizontally 

**2. Option**: Option lets you select the kind data you want to display your options, either **Static** or **Dynamic**
* **Static**: For Static data, customers will only be allowed to select the displayed options that you create
* **Dynamic** Dynamic Data makes the form reactive and interactive. The data can populate with respect to the input values in other elements. You can do load the data three ways, using a **Data Source**, **Assignned Value** or as a **Function**.

!!! info
Data Source can be **External** and you can specify it's URL and you can use methods like GET, POST, PUT, DELETE for data exchange.<br> You can also use **Script Forge** as a data source. Another was of choosing a data source can be through a **Database**.


### Checkbox Button

**All fields same as Radio Button*

!!! info
You can get the value of a checkbox by using getData method and you can set the visibility based on the hide method.


### Select

**1. Multiple**: Multiple feature aloows to select various options from the dropdown list when enabled. 

**2. Searchable**: Search function allows you to quickly find options.


### Time

**1. Range Time**: Range time feature helps you select start and end time.

**2. Place holder of Start Time**: Greyed out value for Start Time displayed when the field is empty.

**3. Place holder of End Time**: Greyed out value for End Time displayed when the field is empty.

**4. Format**: To set the time format.

**5. Default Value**: Default value allows you to set the preset start and end time.

**6. Attribute Action**: 

* Read Only: Read only feature only lets to see the time value and not select the time.
* Text box is editable: Edit feature allows your customers to add/delete information in the form. 


### Date

**1. Diplay Type**:

* Year: Year will allow your customers to toggle between various years. By default the date will be 1st January.
* Month: Month will allow your customers to toggle between various years and months. By default the date will be 1st January.
* Date: Date will allow your customers to select the year, month and date as well. Only single selection is allowed.
* Dates. Multiple date selections are allowed.
* Week:
* Datetime: Datetime feature allows your customers to select a spectic date and time.
* Datetimerange: Datetime range feature allows your customers to select start-date and end-date alongwith start-time and end-time.

**2. Get Time Stamp**: Enabling Time Stamp will record the time of the occuring event. 


!!! tip
The range date and time selector can be pretty useful while selecting the dates and specific time for dispalying information on the graphs.

### Rate

**1. Maximum**: Maximum allows to select the number of stars you require for rating. 

**2. Allow Half**: Enabling Allow Half will let your customers make a semi-selection. 

**3. Default Value**: Default option lets you set a minimum rating score while you create the form. Your customers will only be allowed to rate above the preset score. 

### Color

**1. Support transparency options**: Transparent option lets you decide whether to keep your color transparent or opaque. You can keep the value of alpha between 0 (completely transparent) and 1 (completely opaque).

**2. Default Value**: You can select a default color. 

### Switch

**1. Default Value**: You can select a default 'true' or 'false'.


### Slider

**1. Display input box**: Input box lets you display the value you have selected on the slider. Also, you can change the slider value by entering values in the input box or by increaing/decreasing the value navigating **-** or **+** buttons.

**2. Minimum**: Minimum value of the slider can be set.

**3. Maximum**: Maximum value of the slider can be set.

**4. Step**: Steps allows you to select the rate at which the slider will change the change.<br>For example, if you select step value as 2, the slider will add 2 to the existing value. The same rule is valid for a '-2' step value.

### Text

**1. Default Value**: You can enter a preset value you want your customers to read or follow.


### HTML

**1. Default Value**: Defalut value allows you to enter a preset HTML code.

### Button

**1. Button Type**: 

* Default: A default button indicate a series of actions without priority.<br>For example, **Submit** can be a default button in th forms.
* Primary: Primary button indicates a main action or an important event to be performed by the customer.
* Success: Success button indicates completion of a task.
* Warning: A Warning button can be introduced when you want your customer to pay special attention for a specific condition. 
* Danger:  Danger can be introduced for actions of risk, like deletion or authorization.
* Info: Info buttons are introduced when you want to provide additonal information to the customer where you think the customer might need help.
* Text/Link: Text/Link buttons are generally used whaen you want to redirect the customer to some other website or page.

**2. Shape of the button**: You can select the shpae of the buttons from three options; **Plain**, **Round**, or **Cirle**.


### Link

**1. Link Name**: Sets the name of the external link you want to use in the form.

**2. href**: Href is the hypertext reference which indicates the destination of the hyperlink.

**3. whether the component has underline**: If you want the link to be underlined.

**4. whether to open in a new window**: Eanble to open the link on a new separate window.


### Cascader

**1. Optional any node**: You can make the sub-options in the cascader optional for selection.   

### Steps

**1. Spacing fo each step**: You can decide the spacing between the steps.

**2. Display direction**: Steps can be displayed either in a horizontal or vertical view.

**3. Status of current step/end step**: You can choose the status of your steps from the following

* Wait: The form is on stand-by since the customer is filling information on that page.
* Process: Some information or process is being materialized.
* Finish: Finish means the customers have completed everything at their end.
* Error: Error step is displayed when the system does not accept the information provided by the customer.
* Success: Success setp is displayed when all the information is complete and accepted by the system. 

**4. Center title and description**: Title and description of the step will be centrally aligned.

**5. Simple theme**: Theme lets you decide on the layput of the step feature.

    
## Advance Elements 

### Data Table
### Advanced Grid
### Graph
### Multi Form
### Dialog

* **OnConfirm**: You can write a custom code on what will the OnConfirm button do when clicked
* **OnCancel**: 

The dialog can be manipulated by calling the method of the component instance:

* **show dialog**: this.getComponent('dialog field identifier').open()
* **close dialog**: this.getComponent('dialog field identifier').close()
* **validate data in dialog**: this.getComponent('dialog field identifier').validate()
* **dialog fields show hidden**: this.getComponent('dialog field identifier').hide([name])
this.getComponent('dialog field identifier').display(['name'])

## Layout Elements 

### Collapse
### Inline
### Alert
### Grid mention about grid spans

!!! example use
You can add a Grah and a corresponding Data Table which will give the information on raw data. (add photo)
### Table
### Tabs



Form attribute : Style sheets: You can add custom Style Sheets to make thr interface look more pleasing.
