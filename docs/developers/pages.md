## Introduction

Using Page Builder, you can customize the Control Panel, Customer Portal, and Web Phone. Pages help you enhance the functionality of these interfaces. 

You can add Pages to multiple areas of these interfaces, such as Carrier, Customers, and Rate cards. 

A page can be interactive, containing forms that can be completed and then processed by ScriptForge.

ℹ️: **Pages work together with [Button Builder](https://docs.connexcs.com/developers/button-builder/) to display a page on any Navigation bars.**

The **Elements** in the Pages are extremely powerful and increase flexibility for the features you want to include in your portal.

### Usage Cases

1. For displaying any rules or manuals to the customers, you can use Pages to redirect to these manuals or rulebooks.  
2. Interaction with external links using [**Scriptforge**](https://docs.connexcs.com/developers/scriptforge/) and integrate with Pages. 
3. You can use it for creating interactive content. For example, getting input from the customers.  
4. Server-side and client-side validation.  
5. If you are using **Webphone**, the data can be collected in the form created in Pages.
6. Customers may create their own payment processors. They can create their own interface using Pages. The integration of the processing system can be done using Scriptforge.  
7. Number Porting: You can create a form (using Pages) on the Customer Portal and ask for details; once the form is submitted, the requests reach Scriptforge for validation purposes. Scriptforge can update the customer on their request processing.

## Build Form

1. Go to Developer :material-menu-right: Scriptforge IDE :material-menu-right: Pages and click <img src="/pages/add.png" alt="add" width="60"/> to create a new form.<img src="/pages/pages-page.png" alt="pages-page" width="5000"/>
2. Complete the form's **Name** and **Title** fields, then click **Save**. <img src="/pages/name-and-title.png" alt="name-and-title" width="450"/>
3. When you see the screen with the various pages, click on the form you created (Bani in this case).
4. A screen with options offered as **Basic Field** (anchor text), **Advance Field** (anchor text), **Layout** (anchor text), **Component Attribute** (anchor text), and **Form Attribute** (anchor text) enables you to design attractive interactive interfaces for your customers. 
<img src="/pages/fields.png" alt="fields" width="5000"/>

## Basic Fields

| **Icon** | **Field Name**      | **Description**                                                                                                                                                                                                                                                           |
|------|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|<img src="/pages/input-icon.png" alt="input" width="275"/>     | **Input**           | User can enter single line text                                                                                                                                                                                                                                       |
|<img src="/pages/textarea.png" alt="textarea" width="175"/>    | **Textarea**        | Useful when you want to allow users to enter a sizeable amount of free-form text, for example, a review or feedback                                                                                                                                                   |
|<img src="/pages/number.png" alt="number" width="175"/>     | **Number**          | Helps to start a counter from a minimum to maximum value                                                                                                                                                                                                              |
|<img src="/pages/radio.png" alt="radio" width="175"/>      | **Radio Button**    | Where multiple controls exist, radio buttons allow one to be selected out of them all                                                                                                                                                                                 |
|<img src="/pages/checkbox.png" alt="checkbox" width="175"/>      | **Checkbox Button** | Checkboxes are used when there are lists of options and the user may select any number of choices, including zero, one, or several. In other words, each checkbox is independent of all other checkboxes in the list, so checking one box doesn't uncheck the others. |
|<img src="/pages/select.png" alt="select" width="175"/>      | **Select**          | Dropdown with various options; you can either select one or many options                                                                                                                                                                                              |
|<img src="/pages/time.png" alt="time" width="175"/>      | **Time**            | Allows you to pick a time (hh: mm :ss)                                                                                                                                                                                                                                  |
|<img src="/pages/date.png" alt="date" width="175"/>      | **Date**            | Allows you to pick a date (yyyy-MM-dd)                                                                                                                                                                                                                                |
|<img src="/pages/rate.png" alt="rate" width="175"/>      | **Rate**            | A rating is an evaluation or assessment of something, in terms of quality, quantity, or some combination of both. Therefore, you can add this where you want to rate the quality of a call, or cost or latency                                                        |
|<img src="/pages/color.png" alt="color" width="175"/>      | **Color**           | Allows you to change the color                                                                                                                                                                                                                                        |
|<img src="/pages/switch.png" alt="switch" width="175"/>      | **Switch**          | Allows switching between ‘true’ and ‘false’ values                                                                                                                                                                                                                    |
|<img src="/pages/slider.png" alt="slider" width="175"/>      | **Slider**           | A control for selecting a single value from a continuous range of values                                                                                                                                                                                              |
|<img src="/pages/text.png" alt="text" width="175"/>      | **Text**            | The UI text element displays a non-interactive piece of text to the user. Text elements can be used to provide captions or labels for other GUI controls or to display instructions or other text                                                                     |
|<img src="/pages/html.png" alt="html" width="175"/>      | **HTML**            | It gives you the option to write the HTML code                                                                                                                                                                                                                        |
|<img src="/pages/button.png" alt="button" width="175"/>      | **Button**          | The button is responsible for performing an action when clicked either for redirecting or for viewing purposes                                                                                                                                                        |
|<img src="/pages/link.png" alt="link" width="175"/>      | **Link**            | Link lets you add an external link to the page. When you click on the link you will be redirected to that website, document, etc                                                                                                                                      |
|<img src="/pages/cascader.png" alt="cascader" width="175"/>      | **Cascader**        | It is a multi-level dropdown option (Select option)                                                                                                                                                                                                                        |
|<img src="/pages/steps.png" alt="steps" width="175"/>      | **Steps**           | Steps can be used to show the progress of a process. For each completed step the step number will highlighted                                                                                                                                                         |

## Advance Fields

| **Icon** | **Field Name**      | **Description**                                                                                                                                                                                                                                |
|------|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|<img src="/pages/data-table.png" alt="data-table" width="275"/>      | **Data Table**    |  A data table is a document composed of columns, rows and cells that contain specific values. They store information that people can retrieve later and update as needed.                                                                                                                                                           |
|<img src="/pages/advanced-grid.png" alt="advanced-grid" width="275"/>      | **Advanced Grid** | To display a grid-like layout on the various navigation bars like Customers, Carriers, etc                                                                                                                                                 |
|<img src="/pages/graph.png" alt="graph" width="275"/>      | **Graph**         | Allows you to display graphs of various parameters like ASR, RTP                                                                                                                                                                                 |
|<img src="/pages/multi-form.png" alt="multi-form" width="275"/>      | **Multi form**    | This feature allows you to prepare multiple forms. If you want multiple duplicate copies (cloning) of the created form, you can use this advanced component.                                                                               |
|<img src="/pages/dialog.png" alt="dialog" width="275"/>      | **Dialog**        | A dialog is a small window that prompts the user to make a decision or enter additional information. A dialog does not fill the screen and is normally used for modal events that require users to take an action before they can proceed. |

## Layout


| **Icon** | **Field Name**      | **Description**                                                                                                                                                                                                                                |
|------|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|<img src="/pages/collapse.png" alt="collapse" width="375"/>      | **Collapse**    |  Allows you to make a section, or group of fields, collapsible. It is useful when there are several sections in your form and you want them to take up less vertical space. You may use collapsible or standard sections to adjust your form layout or conditionally hide/show a group of fields                                                                                                                       
|<img src="/pages/inline.png" alt="inline" width="375"/>      | **Inline** | Allows you to create a layout where each element occupies only the width it requires                                                                                                                                                 |
|<img src="/pages/alert.png" alt="alert" width="375"/>      | **Alert**         | An alert occurs in response to an event and can potentially trigger a notification. It brings something to the notice of the user and a way for sending a message that can be read without opening the app, e.g., low balance alert                                                                                                                                                                                 |
|<img src="/pages/grid.png" alt="grid" width="375"/>      | **Grid**    | All components in the layout are given equal size, for two-dimensional layouts                                                                             |
|<img src="/pages/table.png" alt="table" width="375"/>      | **Table**        | Allows you to arrange the elements in rows and columns. The rows and columns are added dynamically as you build the table                                                                                                                                                                       |
|<img src="/pages/tabs.png" alt="tabs" width="375"/>          | **Tabs**       | Adding tabs to an can make it more organized and easier to use if the form contains many controls. By placing related controls on separate pages of the tab 
                                                   
