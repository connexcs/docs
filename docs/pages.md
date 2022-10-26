 

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
| <img src="/docs/pages/input-icon.png" alt="input" width="200"/>     | **Input**           | User can enter single line text                                                                                                                                                                                                                                       |
|      | **Textarea**        | Useful when you want to allow users to enter a sizeable amount of free-form text, for example, a review or feedback                                                                                                                                                   |
|      | **Number**          | Helps to start a counter from a minimum to maximum value                                                                                                                                                                                                              |
|      | **Radio Button**    | Where multiple controls exist, radio buttons allow one to be selected out of them all                                                                                                                                                                                 |
|      | **Checkbox Button** | Checkboxes are used when there are lists of options and the user may select any number of choices, including zero, one, or several. In other words, each checkbox is independent of all other checkboxes in the list, so checking one box doesn't uncheck the others. |
|      | **Select**          | Dropdown with various options; you can either select one or many options                                                                                                                                                                                              |
|      | **Time**            | Allows you to pick a time (hh: mm :ss)                                                                                                                                                                                                                                  |
|      | **Date**            | Allows you to pick a date (yyyy-MM-dd)                                                                                                                                                                                                                                |
|      | **Rate**            | A rating is an evaluation or assessment of something, in terms of quality, quantity, or some combination of both. Therefore, you can add this where you want to rate the quality of a call, or cost or latency                                                        |
|      | **Color**           | Allows you to change the color                                                                                                                                                                                                                                        |
|      | **Switch**          | Allows switching between ‘true’ and ‘false’ values                                                                                                                                                                                                                    |
|      | **Sider**           | A control for selecting a single value from a continuous range of values                                                                                                                                                                                              |
|      | **Text**            | The UI text element displays a non-interactive piece of text to the user. Text elements can be used to provide captions or labels for other GUI controls or to display instructions or other text                                                                     |
|      | **HTML**            | It gives you the option to write the HTML code                                                                                                                                                                                                                        |
|      | **Button**          | The button is responsible for performing an action when clicked either for redirecting or for viewing purposes                                                                                                                                                        |
|      | **Link**            | Link lets you add an external link to the page. When you click on the link you will be redirected to that website, document, etc                                                                                                                                      |
|      | **Cascader**        | It is a multi-level dropdown option (Select option)                                                                                                                                                                                                                        |
|      | **Steps**           | Steps can be used to show the progress of a process. For each completed step the step number will highlighted                                                                                                                                                         |
