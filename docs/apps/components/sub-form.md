# Sub-Form

---

**Document Metadata** <br>**Category**: Applications & Components</br>
**Audience**: Administrators, Engineers, App Developers
<br>**Difficulty**: Beginner to Intermediate</br>
**Time Required**: Approximately 15–30 minutes
<br>**Prerequisites**: Active ConnexCS account, access to the Applications module, basic understanding of UI component configuration and form-building concepts</br>
**Related Topics**: [Input Component](https://docs.connexcs.com/apps/components/input/), [Page Layout Component](https://docs.connexcs.com/apps/components/page-layout/), [Table / Grid Components](https://docs.connexcs.com/apps/components/grid/)
<br>**Next Steps**: Create a UI form using the Sub-Form component to group related input fields or sections, configure data binding for nested data structures, test form submission and data validation for nested fields.</br>

---

## Description

A **Sub-Form**, is a powerful tool in form creation that allows you to embed one form within another.

Think of it as a smaller form placed within the larger form, providing additional details or related information about a specific section.

Sub-form component, for list (array) type form data, uses Table layout, doesn't support layout nesting.

<img src= "/apps/components/img/subform.png" style="border: 2px solid #4472C4; border-radius: 8px;">

## Use Case

1. Improved organization
2. Reduced redundancy
3. Flexibility and customization
4. Enhanced data accuracy
5. Order forms
6. Employee information forms
7. Project management forms
8. Survey forms
9. Customizable product configuration
10. Team member contributions
11. Feedback aggregation
12. Hierarchical data structures

### Interactivity

1. Show or hide sub-forms based on user choices in the main form.
2. Dynamically reveal additional sub-forms as users complete previous ones.
3. Implement branching logic based on sub-form data.
4. Automatically populate sub-form fields based on data entered in the main form.
5. Enable data manipulation within sub-forms.
6. Use sub-forms as dynamic filters or search features.
7. Integrate drag-and-drop functionality for reordering or prioritizing sub-forms.
8. Implement collaborative editing for shared sub-forms.
9. Use progressive disclosure to reveal sub-form content selectively.

## API

### Events

| **Name**| **Description**|
|---------|----------------|
|`onChange (element)`|The onChange event occurs when the value of a field is changed|
|`onRowAdd (element)`|The onRowAdd event occurs when a row is added|
|`onRowRemove (element)`|The onRowRemove event occurs when a row is removed|
|`onPageChange (element)`|The onPageChange event occurs when a page is changed. This event will fire when Pagination option is on/active|

### Methods

| **Name**| **Description**|**Parameters**|
|---------|----------------|--------------|
|`this.addClassName`|Add style class to a form item|`(fields: String`&#124;`String[], className: String)`|
|`this.removeClassName`|Remove style class from a form item|`(fields: String`&#124;`String[], className: String)`|
|`this.getComponent`|Returns a component whose ID has been passed as a parameter|`(component_ID: String ): Object`|
|`this.hide`|Hides the field|`(fields: String`&#124;`String[])`|
|`this.show`|Displays the field|`(fields: String`&#124;`String[])`|
|`this.disable`| Disable sub-form field from user interaction|`(fields: String`&#124;`String[])`|
|`this.enable`| Enable sub-form field from user interaction|`(fields: String`&#124;`String[])`|
|`this.setData`|Set the data in the field. The Value object should be of type { componentId: componentValue }|`(Value: Object)`|
|`this.getValues`|Gets the current values of all fields|`() : Object`|
|`this.getValue`|Get A Value From a component|`(fieldName: String)`|

!!! Info
    1. The show() and hide() methods can also be used to control the visibility of a sub-form in response to user input.
    2. **Fields** refers to a **component ID** or a **list of component IDs**. You can fetch the ID from the **Component Attribute** panel in the Page Builder.
    3. Before using **this.show(fields)**, make sure the component is **hidden**. This can be done using **this.hide(fields)** or by **enabling** the **Hidden checkbox** in the Component Attribute panel.
    4. Before using **this.enable(fields)**, make sure the component is **disabled**. This can be done using **this.disable(fields)** or by **enabling** the **Disabled checkbox** in the Component Attribute panel.

#### Steps to use the methods for the Page Builder components

1. Go to Form Attribute :material-menu-right: Action Panel :material-menu-right: Setting :material-menu-right: (Mounted | refresh | click 'Add action').
2. Write the method/code as shown in the **Example** below.
3. Click on `Save`.
4. On the main screen click on `Save` again.
5. Click on `Preview` to see the code in action.
<img src= "/apps/components/img/subform3.png" style="border: 2px solid #4472C4; border-radius: 8px;">

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
            this.addClassName('table_n7rs950l', 'abc')
            ```

    2. `this.removeClassName(fields, className)`
        ```js linenums="1"
        this.removeClassName('table_n7rs950l', 'abc')
        ```

    3. `this.hide(fields)`
        ```js linenums="1"
        var fields= ['table_n7rs950l']
        this.hide(fields)
        ```
    
    4. `this.show(fields)`
        ```js linenums="1"
        var fields= ['table_n7rs950l']
        this.show(fields)
        ```
    
    5. `this.disable(['fields'])`
        ```js linenums="1"
        this.disable(['table_n7rs950l'])
        ```
    
    6. `this.enable(['fields'])`
        ```js linenums="1"
        this.enable(['table_n7rs950l'])
        ```

    7.  `this.getComponent('component_ID')`
        ```js linenums="1"
        var subname = this.getComponent('table_n7rs950l');
        console.log('getComponent', subname);
        ```
    
    8. `this.getValues()`
        ```js linenums="1"
        var data = this.getValues();
        console.log(data);
        ```
    
    9. `this.getValue('fieldName')`
        ```js linenums="1"
        var subname = this.getValue('table_n7rs950l');
        console.log('getValue', subname);
        ```
    
    10. `this.setData(Value)`
        ```js linenums="1"
        this.setData({ table_n7rs950l: [ { inputId: '1234', inputId2: 'value2' } ] })
        ```

!!! info Add multiple classes
    Use the following syntax to add multiple classes to a component:
    ```js linenums="1"
    this.addClassName('componentID', 'class1', 'class2')
    ```

## Config

| **Name**|**Description**|**Icon**|
|---------|---------------|--------|
|**ID**| The sub-form component's unique identifier|<img src= "/apps/components/img/input_id.png">|
|**Label Width**|Width of the label associated with an input field. It determines the horizontal space occupied by the label text|<img src= "/apps/components/img/input_labelwidth1.png">|
|**Text Prompt**| A description to aid the user when completing the field|<img src= "/apps/components/img/input_textprompt.png">|
|**Paging**|Enables pagination|<img src= "/apps/components/img/subform_paging.png">|
|**Page Size**| Displays the number of entries per page|<img src= "/apps/components/img/subform_pagesize.png">|
|**Show Control**|Displays control button|<img src= "/apps/components/img/subform_showcontrol.png">|
|**Virtual Table**| Display elements inside the sub-form|<img src= "/apps/components/img/subform_virtualtable.png">|
|**Default Value**| The default value which is filled in the field before the user changes it|<img src= "/apps/components/img/input_defaultvalue.png">|
|**Custom Class**| An HTML class attribute which allows further customisation [See Form Attribute > Style Sheets](https://docs.connexcs.com/apps/page-builder/#form-attribute)|<img src= "/apps/components/img/input_customclass.png">|
|**Attribute Action**|Enable **Data Binding** to connect the data to UI. <br> Enable **Hidden** action to hide the field. <br> Enable **Disabled** action to make the field unusable. <br>Enable **Deletable** to delete the row in the sub-form. <br> Enable **Addible** to add a row in the subform.|<img src= "/apps/components/img/subform_aa.png">|
|**Action Settings**|Click on the drop-down to select the pre-defined methods you wish to apply to your component. In this case, you can choose either **mounted** or **refresh** for `onChange`, `onRowAdd`, `onRowRemove`, `onPageChange`|<img src= "/apps/components/img/subform_ac.png">|

## First time User?

If you are using the Page Builder components on the ConnexCS platform for the first time, we request you to use our guide on <a href="https://docs.connexcs.com/apps/page-builder/#steps-to-use-components-in-the-page-builder" target="_blank">steps to use the Components</a>.