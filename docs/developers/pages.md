## Introduction

Using Page Builder, you can customize the Control Panel, Customer Portal, and Web Phone. Pages help you enhance the functionality of these interfaces. 

You can add Pages to multiple areas of these interfaces, such as Carrier, Customers, and Rate cards. 

A page can be interactive, containing forms that can be completed and then processed by ScriptForge.

!!! note "**Pages work together with [Button Builder](https://docs.connexcs.com/developers/button-builder/) to display a page on any Navigation bars.**"
    
The **Elements** in the Pages are extremely powerful and increase flexibility for the features you want to include in your portal.

### Usage Cases

1. For displaying any rules or manuals to the customers, you can use Pages to redirect to these manuals or rulebooks.  
2. Interaction with external links using [**Scriptforge**](https://docs.connexcs.com/developers/scriptforge/) and integration with Pages. 
3. You can use it for creating interactive content. For example, getting input from the customers.  
4. Server-side and client-side validation.  
5. If you are using **Webphone**, the data can be collected in the form created in Pages.
6. Customers may create their own payment processors. They can create their own interface using Pages. The integration of the processing system can be done using Scriptforge.  
7. Number Porting: You can create a form (using Pages) on the Customer Portal and ask for details. Once the form is submitted, the requests reach Scriptforge for validation purposes. Scriptforge can update the customer on their request processing.

## Build Form

1. Go to Developer :material-menu-right: Scriptforge IDE :material-menu-right: Pages and click <img src="/pages/add.png" alt="add" width="60"/> to create a new form.<img src="/pages/pages-page.png" alt="pages-page" width="5000"/>
2. Complete the form's **Name** and **Title** fields, then click **Save**. <img src="/pages/name-and-title.png" alt="name-and-title" width="450"/>
3. When you see the screen with the various pages, click on the form you created (Bani in this case).
4. A screen with options offered as **Basic Field** (anchor text), **Advance Field** (anchor text), **Layout** (anchor text), **Component Attribute** (anchor text), and **Form Attribute** (anchor text) enables you to design attractive interactive interfaces for your customers. 
<img src="/pages/fields.png" alt="fields" width="5000"/>

## Basic Fields

| **Icon**                                                                                                                                                                                                                                                                     | **Description**                                                                                                                                                                                                                                                                |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [<img src="/pages/input-icon.png" alt="input" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#input)                                                                                                                                                                                                                   | User can enter single line text                                                                                                                                                                                                                                                |
| [<img src="/pages/textarea.png" alt="textarea" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#textarea)                                                                                                                                                                                                                  | Useful when you want to allow users to enter a sizeable amount of free-form text, for example, a review or feedback                                                                                                                                                            |
| [<img src="/pages/number.png" alt="number" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#number)                                                                                                                                                                                                                      | Helps to start a counter from a minimum to maximum value                                                                                                                                                                                                                       |
| [<img src="/pages/radio.png" alt="radio" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#radio)                                                                                                                                                                                                                        | Where multiple controls exist, radio buttons allows one option to be selected out of them all                                                                                                                                                                                  |
| [<img src="/pages/checkbox.png" alt="checkbox" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#chechkbox)                                                                                                                                                                                                                  | Checkboxes are used when there are lists of options and the user may select any number of choices, including zero, one, or several. <br><br> In other words, each checkbox is independent of all other checkboxes in the list, so checking one box doesn't uncheck the others. |
| [<img src="/pages/select.png" alt="select" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#select)                                                                                                                                                                                                                      | Dropdown with various options; you can either select one or many options                                                                                                                                                                                                       |
| [<img src="/pages/time.png" alt="time" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#time)                                                                                                                                                                                                                          | Allows you to pick a time (hh: mm :ss)                                                                                                                                                                                                                                         |
| [<img src="/pages/date.png" alt="date" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#date)                                                                                                                                                                                                                          | Allows you to pick a date (yyyy-mm-dd)                                                                                                                                                                                                                                         |
| [<img src="/pages/rate.png" alt="rate" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#rate)                                                                                                                                                                                                                          | A rating is an evaluation or assessment of something, in terms of quality, quantity, or some combination of both. Therefore, you can add this where you want to rate the quality of a call, or cost or latency                                                                 |
| [<img src="/pages/color.png" alt="color" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#color)                                                                                                                                                                                                                        | Allows you to change the color                                                                                                                                                                                                                                                 |
| [<img src="/pages/switch.png" alt="switch" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#switch)                                                                                                                                                                                                                      | Allows switching between ‘true’ and ‘false’ values                                                                                                                                                                                                                             |
| [<img src="/pages/slider.png" alt="slider" width="175"/>]((https://bani--connexcs-docs.netlify.app/developers/pages/#slider))                                                                                                                                                                                                                      | A control for selecting a single value from a continuous range of values                                                                                                                                                                                                       |
| [<img src="/pages/text.png" alt="text" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#text)                                                                                                                                                                                                                          | Displays a non-interactive piece of text to the user. Text elements can be used to provide captions or labels for other GUI controls or to display instructions or other text                                                                                                  |
| [<img src="/pages/html.png" alt="html" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#html)                                                                                                                                                                                                                          | It gives you the option to write the HTML code                                                                                                                                                                                                                                 |
| [<img src="/pages/button.png" alt="button" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#button)                                                                                                                                                                                                                      | The button is responsible for performing an action when clicked either for redirecting or for viewing purposes                                                                                                                                                                 |
| [<img src="/pages/link.png" alt="link" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#link)                                                                                                                                                                                                                          | Link lets you add an external link to the page. When you click on the link you will be redirected to that website, document, etc                                                                                                                                               |
| [<img src="/pages/cascader.png" alt="cascader" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#cascader)                                                                                                                                                                                                                  | It is a multi-level dropdown option. When a data set has a clear hierarchical structure, it can be viewed and selected through the cascade selector.                                                                                                                                                                                                                                            |
| [<img src="/pages/steps.png" alt="steps" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#steps)                                                                                                                                                                                                                        | Steps can be used to show the progress of a process. For each completed step the step number will be highlighted                                                                                                                                                               |

## Advance Fields

| **Icon**                                                        | **Description**                                                                                                                                                                                                                           |
|-----------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [<img src="/pages/data-table.png" alt="data table" width="135"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#data-table)      | A data table is a document composed of columns, rows, and cells that contain specific values.<br> They store information that people can retrieve later and update as needed                                                              |
| [<img src="/pages/advanced-grid.png" alt="advanced-grid" width="135"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#advanced-grid)     | To display a grid-like layout on the various navigation bars like Customers, Carriers, etc                                                                                                                                                |
| [<img src="/pages/graph.png" alt="graph" width="135"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#graph)           | Allows you to display graphs of various parameters like ASR, RTP                                                                                                                                                                          |
| [<img src="/pages/multi-form.png" alt="multi-form" width="135"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#multi-form) | This feature allows you to prepare multiple forms. <br> If you want multiple duplicate copies (cloning) of the created form, you can use this advanced component                                                                          |
| [<img src="/pages/dialog.png" alt="dialog" width="135"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#dialog)         | A dialog is a small window that prompts the user to make a decision or enter additional information. <br><br> A dialog does not fill the screen and is normally used for modal events that require users to take an action before they can proceed |

## Layout

| **Icon**                                                    | **Description**                                                                                                                                                                                                                                                                                          |
|-------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [<img src="/pages/collapse.png" alt="collapse" width="155"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#collapse) | Allows you to make a section, or group of fields, collapsible. It is useful when there are several sections in your form and you want them to take up less vertical space. <br><br> You may use collapsible or standard sections to adjust your form layout or conditionally hide/show a group of fields |
| [<img src="/pages/inline.png" alt="inline" width="155"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#inline)     | Allows you to create a layout where each element occupies only the width it requires                                                                                                                                                                                                                     |
| [<img src="/pages/alert.png" alt="alert" width="155"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#alert)       | An alert occurs in response to an event and can potentially trigger a notification. It brings something to the notice of the user and a way for sending a message that can be read without opening the app, e.g., low balance alert                                                                      |
| [<img src="/pages/grid.png" alt="grid" width="155"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#grid)         | All components in the layout are given equal size, for two-dimensional layouts                                                                                                                                                                                                                           |
| [<img src="/pages/table.png" alt="table" width="155"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#table)       | Allows you to arrange the elements in rows and columns. The rows and columns are added dynamically as you build the table                                                                                                                                                                                |
| [<img src="/pages/tabs.png" alt="tabs" width="155"/>](https://bani--connexcs-docs.netlify.app/developers/pages/#tabs)         | Adding tabs to an can make it more organized and easier to use if the form contains many controls. By placing related controls on separate pages of the tab                                                                                                                                              |    

!!! note "Know More"
    Click on each **Icon** to know more about each element. 
    
 For each component you can change the characteristics of each component. You can click on **Component Attribute** to and chage the properties of the elements.
    
## Basic Elements 
    
### Input

<img src="/pages/caInput.png" alt="add" width="360"/>

**1. ID**: Unique number for every INPUT component in the form.

**2. Name**: Display name of your input field. 

**3. Width**: Allows you to adjust the width of the Placeholder.

**4. Label Width**: Allows you to adjust the distance between each side of the label. You can customize the value.

**5. Hide Label**: Set the input visibility when loaded.

**6. Placeholder**: This is the greyed out value which is displayed when the field is empty.

**7. Default Value**: Pre-defined value in the Placeholder.

**8. Custom Class**: !!! danger "Currently Unused"

**9. Attribute Action**: The action attribute defines the action to be performed when the form is submitted. Usually, the form data is sent to a file on the server when the user clicks on the submit button. 

* **Data Binding**: Helps you connect data from one element (host element) to a property or attribute to another element in the form.

!!! example "Data Binding" 
    if (name === 'XYZ') {
        this.setData({output: 'Welcome XYZ'});
    } else {
        this.setData({output: 'Please enter your name'});
}

The above code the data binding is between **Input** and **Textarea**. When your enter a name it will dislay 'Welcome name' in the Textarea, and if the Input field is empty the field will display  'Please enter your name'.


In the above code when you write your name 

* **Hidden**: To make the element dissapear from the form

* **Disable**: When checked the diabled option, the customer will not be able to enter any information on the input field

* **Display Clear Button**: Allows you to put clear the  

* **Display Password**: Allows the customer to hide the characters of the iput to avoid any outflow of sensitive

**10. Validation**: Helps you verify that the input entered by the customer is accurate and complete.
For example, some fields are necessary to be filled, so you can use the **Required** field.
Another example, if you want the answers in a specific format like **e-mail, URL, String, Hexadecimal** then this filed is extremly useful.

* **Custon Validation Rules**: If you want to add some JavaScript and include a callback. Call back will perform asynchoronous validation. 

**11. Action Settings**: Allows you to specify the actions for the Input element . For exmaple, OnChange, OnBLur, etc. You can create your customizable actions and functions by clicking on **New Action +**.

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
* **Static**: For Static data, customers will only be allowed to select the displayed options
* **Dynamic** Dynamic Data makes the form reactive and interactive. The data can populate with respect to the input values in other elements. You can do load the data three ways, using a **Data Source**, **Assignned Value** or as a **Function**.

!!! example "Function" 
function yesnoCheck() {
    if (document.getElementById('yesCheck').checked) {
        document.getElementById('ifYes').style.visibility = 'visible';
    }
    else document.getElementById('ifYes').style.visibility = 'hidden';

}

In the above code when you select the *Yes* radio button, the input fieilds will be shown, if you select the *No* radio button the input field is hidden.

!!! tip "Data Binding"
The above example displays the relationship between **Input** and **RTextarea**, but the process can be carried betwwen other elements as well.  


### Checkbox Button

**All fields same as Radio Button*


### Select
### Time
### Date
### Rate
### Color
### Switch
### Slider
### Text
### HTML
### Button
### Link
### Cascader
### Steps
    
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
### Grid
### Table
### Tabs
    
