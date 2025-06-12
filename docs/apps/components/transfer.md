# Transfer

## Description

A **Transfer** component in a form is a user interface element that allows users to move items between two lists or collections.

It's commonly used to create interactive selections, manage data assignments, or filter content.

<img src= "/apps/components/img/transfer.png">

## Use Case

1. Assigning items: Allocate tasks, resources, or responsibilities to individuals or groups.
2. Creating custom lists: Build personalized selections of products, features, or preferences.
3. Filtering content: Narrow down options based on specific criteria or preferences.
4. Managing group memberships: Add or remove users from teams or access lists.
5. Product configuration: Select desired features or components for a product.
6. Email management: Move emails between folders or categorize them.

### Interactivity

## API

### Events

| **Name**| **Description**|
|---------|----------------|
|`onChange (element)`| The onChange event occurs when the value of a field is changed|

### Methods

| **Name**| **Description**|**Parameters**|
|---------|----------------|--------------|
|`this.addClassName`|Add style class to a form item|`(fields: String`&#124;`String[], className: String)`|
|`this.removeClassName`|Remove style class from a form item|`(fields: String`&#124;`String[], className: String)`|
|`this.hide`|Hides the field|`(fields: String`&#124;`String[])`|
|`this.show`|Displays the field|`(fields: String`&#124;`String[])`|
|`this.disable`| Disable transfer field from user interaction|`(fields: String`&#124;`String[])`|
|`this.enable`| Enable transfer field from user interaction|`(fields: String`&#124;`String[])`|
|`this.getValues`|Gets the current values of all fields|`() : Object`|
|`this.getValue`|Get A Value From a component|`(fieldName: String)`|
|`this.setData`|Set the data in the field. The Value object should be of type { componentId: componentValue }|`(Value: Object)`|
|`this.refreshFieldDataSource`|Refresh the datasource data bound to the whole page|

!!! Info
    1. The show() and hide() methods can also be used to control the visibility of the transfer component in response to user input.
    2. **Fields** refers to a **component ID** or a **list of component IDs**. You can fetch the ID from the **Component Attribute** panel in the Page Builder.
    3. Before using **this.show(fields)**, make sure the component is **hidden**. This can be done using **this.hide(fields)** or by **enabling** the **Hidden checkbox** in the Component Attribute panel.
    4. Before using **this.enable(fields)**, make sure the component is **disabled**. This can be done using **this.disable(fields)** or by **enabling** the **Disabled checkbox** in the Component Attribute panel.

#### Steps to use the methods for the Page Builder components

1. Go to Form Attribute :material-menu-right: Action Panel :material-menu-right: Setting :material-menu-right: (Mounted | refresh | click 'Add action').
2. Write the method/code as shown in the **Example** below.
3. Click on `Save`.
4. On the main screen click on `Save` again.
5. Click on `Preview` to see the code in action.
<img src= "/apps/components/img/transfer2.png">

!!! Example
    1. `this.addClassName(fields, className)`
          * Go to Form Attribute :material-menu-right: Style Sheets :material-menu-right: add the class
            ```
            .abc{ // abc is the class name
            background-color: red;
            }
            ```
          * Follow the steps mentioned above, under Steps to use the methods for the Page Builder components
          * ```
            this.addClassName('transfer_jhg5bttj', 'abc')
            ```

    2. `this.removeClassName(fields, className)`
        ```js
        this.removeClassName('transfer_jhg5bttj', 'abc')
        ```
    
    3. `this.hide(fields)`
        ```js
        var fields= ['transfer_jhg5bttj']
        this.hide(fields)
        ```
    
    4. `this.show(fields)`
        ```js
        var fields= ['transfer_jhg5bttj']
        this.show(fields)
        ```
    
    5. `this.disable(['fields'])`
        ```js
        this.disable(['transfer_jhg5bttj'])
        ```
    
    6. `this.enable(['fields'])`
        ```js
        this.enable(['transfer_jhg5bttj'])
        ```
    
    7. `this.getValue(fieldName)`
        ```js
        var fields = this.getValue('transfer_jhg5bttj');
        console.log('getValue', fields);
        ```
    
    8. `this.getValues()`
        ```js
        var data = this.getValues();
        console.log(data);
        ```
    9. `this.setData()`
        ```js
        this.setData({
	    "transfer_8pd5pfng": [
		"2",
		"3"
	    ] // 2 and 3 are keys
        })
        ```
    10. `this.refreshFieldDataSource`
        
        `make the function or data as dynamic`

## Config

| **Name**|**Description**|**Icon**|
|---------|---------------|--------|
|**ID**| The transfer component's unique identifier|<img src= "/apps/components/img/input_id.png">|
|**Name**| [**Optional**] The display name of the Transfer field|<img src= "/apps/components/img/checkbox_name.png">|
|**Width**| [**Optional**] Width of the field|<img src= "/apps/components/img/input_width.png">|
|**Label Width**|Width of the label associated with an input field. It determines the horizontal space occupied by the label text|<img src= "/apps/components/img/input_labelwidth1.png">|
|**Label Wrap**| If the label is longer than the allowed width the text will continue on another line|<img src= "/apps/components/img/input_labelwrap1.png">|
|**Hide Label**| Hides the label on the form|<img src= "/apps/components/img/input_hidelabel.png">|
|**Text Prompt**| A description to aid the user when completing the field|<img src= "/apps/components/img/input_textprompt.png">|
|**Searchable**| Make the Source and Target options searchable|<img src= "/apps/components/img/transfer_searchable.png">|
|**Option**|Choose either **Static** or **Dynamic** way of adding data to the options of the Transfer <br><br>**Static data** refers to a fixed set of options that are pre-defined and loaded into the transfer at the time of initialization</br></br> **Dynamic data** are options fetched as needed from sources like databases or APIs. The transfer updates choices based on user selections. You select from **Data source** which refers to the origin of the data; **Function** which refers to the code that manipulates the data, and **Assigned Value** which refers to the specific value stored or associated with a data element|<img src= "/apps/components/img/checkbox_static.png"> <img src= "/apps/components/img/checkbox_dynamic.png">|
|**Titles**|Change the titles of your transfer lists|<img src= "/apps/components/img/transfer_titles.png">|
|**Custom Class**| An HTML class attribute which allows further customisation [See Form Attribute > Style Sheets](https://docs.connexcs.com/apps/page-builder/#form-attribute)|<img src= "/apps/components/img/input_customclass.png">|
|**Attribute Action**|Enable **Data Binding** to connect the data to UI. <br> Enable **Hidden** action to hide the field. <br> Enable **Disabled** action to make the field unusable.|<img src= "/apps/components/img/transfer_attributeaction.png">|
|**Action Settings**|Click on the drop-down to select the pre-defined methods you wish to apply to your component. In this case, you can choose either **mounted** or **refresh** for `onChange`|<img src= "/apps/components/img/radio_ac.png">|

### Validation

Form validation is the process of checking the data entered into a form to ensure that it's valid and complete.

This helps to prevent users from submitting forms with invalid data, which can cause problems for the application that's processing the form.

Form validation can be performed using a variety of methods, including:

| **Name**| **Description**|
|---------|----------------|
| **Required**|If enabled, then the field value can't be empty, otherwise an error message is emitted|
|**Custom Validation Rules**|(rule, value, callback) => {|
||**rule**: Verification rule, you can view the verification configuration information through this parameter; **rule.field** can get the field identifier of the current verification|
||**value**: Value of the current field|
||**callback**: Callback function (must be called) upon completion of validation; **callback('Error message')/ callback(new Error('Error message'))**. These are two ways to return an error message|

<img src= "/apps/components/img/cascader_validation.png">

!!! Info
    1. The **callback() function** is also called to verify success in the custom validation method.

## First time User?

If you are using the Page Builder components on the ConnexCS platform for the first time, we request you to use our guide on <a href="https://docs.connexcs.com/apps/page-builder/#steps-to-use-components-in-the-page-builder" target="_blank">steps to use the Components</a>.
