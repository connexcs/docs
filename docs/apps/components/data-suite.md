# Data Suite

## Description

The **Data Suite Component** allows any ConnexCS Page Builder application to embed a full-featured data management interface inside a page. This enables users to:

* Upload bulk data (CSV, JSON; Excel support coming January)

* Map uploaded fields to backend database schemas

* Run SQL-like queries inside the browser

* View, filter, and edit database tables

* Download data (CSV, JSON, Parquet)

* Process local files without uploading to server

* Provide customers access to the full Data Suite inside their portal

**Operational modes supported**:

1. **Quick Mode** – Opens directly into a specific feature (e.g., Bulk Upload).

2. **Full Mode** – Displays the complete Data Suite start screen.

<img src= "/apps/components/img/color.png" style="border: 2px solid #4472C4; border-radius: 8px;">

## Use Case

**2.1 Bulk Upload (Primary Use Case)**

Embed Data Suite to allow structured bulk uploads for:

* DIDs

* Routing

* Customers

* Custom database tables

**2.2 Full Data Management Interface**

Expose complete Data Suite functionality in the customer portal, including:

* Viewing tables

* Query editor

* Inline editing

* Data exports

**2.3 Local File Processing**

Users can:

* Load CSV/JSON from their local machine

* Clean and transform data

* Run queries on local datasets

* Export updated files

**No data is uploaded unless explicitly selected**.

### Interactivity

Interactivity is the ability of a component to respond to user actions and trigger dynamic behavior in the application.

There are several ways to add interactivity to the Data Suite component.

Some of the most common methods include:

1. Reacting to lifecycle events such as `onReady`, allowing you to initialize data, load tables, or update the UI when the component becomes available.

2. Handling file import results using `onTableImportSuccess` and `onTableImportFail` to display messages, validate uploaded datasets, or trigger additional processing.

3. Responding to query execution with `onQueryRunSuccess` and `onQueryRunFail`, enabling custom rendering of results or error handling.

4. Validating data before upload through `onBeforeTableUpload`, where you can block the upload, append metadata, or transform the dataset.

5. Performing post-upload actions with onTableUploadComplete, such as refreshing related components, notifying the user, or updating state.

Controlling visibility or access within Page Builder, enabling or disabling upload/query features based on user roles or selections.

Integrating Data Suite with other components by triggering workflows, refreshing grids, or updating forms in response to Data Suite events.

## API

### Events

| **Name**| **Description**|
|---------|----------------|
| `onChange (element)`| The onChange event occurs when the value of the color field changes.|

### Methods

| **Name**| **Description**|**Parameters**|
|---------|----------------|--------------|
|`this.addClassName`|Add style class to a form item|`(fields: String`&#124;`String[], className: String)`|
|`this.removeClassName`|Remove style class from a form item|`(fields: String`&#124;`String[], className: String)`|
|`this.getComponent`|Returns a component whose id has been passed as a parameter|`(component_ID: String) : Object)`|
|`this.getValues`|Gets the current values of all fields|`() : Object`|
|`this.hide`|Hides the field|`(fields: String`&#124;`String[])`|
|`this.show`|Displays the field|`(fields: String`&#124;`String[])`|
|`this.disable`| Disable color field from user interaction|`(fields: String`&#124;`String[])`|
|`this.enable`| Enable color field from user interaction|`(fields: String`&#124;`String[])`|
|`this.getValue`|Get A Value From a component|`(fieldName: String)`|
|`this.setData`|Set the color by passing an object of type, { component_Id: String }. The String should a color in hexadecimal format. e.g. '#443214'|`(Value: Object)`|

!!! Info
    1. The show() and hide() methods can also be used to control the visibility of the color in response to user input.
    2. **Fields** refers to a **component ID** or a **list of component IDs**. You can fetch the ID from the **Component Attribute** panel in the Page Builder.
    3. Before using **this.show(fields)**, make sure the component is **hidden**. This can be done using **this.hide(fields)** or by **enabling** the **Hidden checkbox** in the Component Attribute panel.
    4. Before using **this.enable(fields)**, make sure the component is **disabled**. This can be done using **this.disable(fields)** or by **enabling** the **Disabled checkbox** in the Component Attribute panel.

#### Steps to use the methods for the Page Builder components

1. Go to Form Attribute :material-menu-right: Action Panel :material-menu-right: Setting :material-menu-right: (Mounted | refresh | click 'Add action').
2. Write the method/code as shown in the **Example** below.
3. Click on `Save`.
4. On the main screen click on `Save` again.
5. Click on `Preview` to see the code in action.
<img src= "/apps/components/img/color2.png" style="border: 2px solid #4472C4; border-radius: 8px;">

!!! Example
    1. `this.addClassName(fields, className)`
          * Go to Form Attribute :material-menu-right: Style Sheets :material-menu-right: add the class
            ```
            .abc{ // abc is the class name
            background-color: red;
            }
            ```
          * Follow the Steps to use the methods for the Page Builder components
          * ```
            this.addClassName('color_zxqxhwlh', 'abc')
            ```

    2. `this.removeClassName(fields, className)`
        ```js linenums="1"
        this.removeClassName('color_zxqxhwlh', 'abc')
        ```
    
    3. `this.getValues()`
        ```js linenums="1"
        var data = this.getValues();
        console.log(data);
        ```
    
    4. `this.hide(fields)`
        ```js linenums="1"
        var fields= ['color_zxqxhwlh']
        this.hide(fields)
        ```
    
    5. `this.show(fields)`
        ```js linenums="1"
        var fields= ['color_zxqxhwlh']
        this.show(fields)
        ```
    
    6. `this.disable(['fields'])`
        ```js linenums="1"
        this.disable(['color_zxqxhwlh'])
        ```
    
    7. `this.getValue('fieldName')`
        ```js linenums="1"
        var colorname = this.getValue('color_zxqxhwlh');
        console.log('getValue', colorname);
        ```
    
    8. `this.getComponent('component_ID')`
        ```js linenums="1"
        var colorname = this.getComponent('color_zxqxhwlh');
        console.log('getComponent', colorname);
        ```
    
    9. `this.setData(Value)`
        ```js linenums="1"
        this.setData(
         {""color_o1cfjhoq": "#AEE710",});
        ```

!!! info Add multiple classes
    Use the following syntax to add multiple classes to a component:
    ```js linenums="1"
    this.addClassName('componentID', 'class1', 'class2')
    ```

## Config

| **Name**|**Description**|**Icon**|
|---------|---------------|--------|
|**ID**| The color component's unique identifier|<img src= "/apps/components/img/input_id.png">|
|**Name**| [**Optional**] The display name of the color field|<img src= "/apps/components/img/checkbox_name.png">|
|**Width**| [**Optional**] Width of the field|<img src= "/apps/components/img/input_width.png">|
|**Label Width**|Width of the label associated with an input field. It determines the horizontal space occupied by the label text|<img src= "/apps/components/img/input_labelwidth1.png">|
|**Label Wrap**| If the label is longer than the allowed width the text will continue on another line|<img src= "/apps/components/img/input_labelwrap1.png">|
|**Hide Label**| Hides the label on the form|<img src= "/apps/components/img/input_hidelabel.png">|
|**Text Prompt**| A description to aid the user when completing the field|<img src= "/apps/components/img/input_textprompt.png">|
|**Support Transparency Options**|Ability to specify the transparency level of a color|<img src= "/apps/components/img/color_support.png">
|**Default Value**| Controls the initial color selection in a color picker, while still allowing the user to change it if desired|<img src= "/apps/components/img/color_default.png">
|**Custom Class**| An HTML class attribute which allows further customisation [See Form Attribute > Style Sheets](https://bani-appsection--connexcs-docs.netlify.app/apps/page-builder/#form-attribute)|<img src= "/apps/components/img/input_customclass.png">|
|**Attribute Action**|Enable **Data Binding** to connect the data to UI<br>Enable **Hidden** action to hide the field</br>Enable **Disabled** action to make the field unusable|<img src= "/apps/components/img/checkbox_attributeaction.png">|
|**Action Settings**|Click on the drop-down to select the pre-defined methods you wish to apply to your component. In this case, you can choose either **mounted** or **refresh** for `onChange`|<img src= "/apps/components/img/radio_ac.png">|

### Validation

Form validation is the process of checking the data entered into a form to ensure that it's valid and complete.

This helps to prevent users from submitting forms with invalid data, which can cause problems for the application that's processing the form.

Form validation can be performed using a variety of methods, including:

| **Name**| **Description**|
|---------|----------------|
| **Required**|If enabled, then the field value can't be empty, otherwise an error message is emitted|
|**Custom Validation Rules**|(rule, value, callback) => {|
||**rule**: Verification rule, you can view the verification configuration information through this parameter; **rule.field** can get the field identifier of the current verification.|
||**value**: Value of the current field|
||**callback**: Callback function (must be called) upon completion of validation; **callback('Error message')/ callback(new Error('Error message'))**. These are two ways to return an error message.|

<img src= "/apps/components/img/cascader_validation.png" width= "300" style="border: 2px solid #4472C4; border-radius: 8px;">

!!! Info
    1. The **callback() function** is also called to verify success in the custom validation method.

## First time User?

If you are using the Page Builder components on the ConnexCS platform for the first time, we request you to use our guide on <a href="https://docs.connexcs.com/apps/page-builder/#steps-to-use-components-in-the-page-builder" target="_blank">steps to use the Components</a>.
