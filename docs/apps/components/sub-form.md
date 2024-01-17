# Sub-Form

## Description

A **Sub-form**, is a powerful tool in form creation that allows you to embed one form within another.

Think of it as a smaller form placed within the larger form, providing additional details or related information about a specific section.

Sub-form component, for list (array) type form data, uses Table layout, doesn't support layout nesting.

<img src= "/apps/components/img/subform.png">

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

1. Show or hide subforms based on user choices in the main form.
2. Dynamically reveal additional subforms as users complete previous ones.
3. Implement branching logic based on subform data.
4. Automatically populate subform fields based on data entered in the main form.
5. Enable data manipulation within subforms.
6. Use subforms as dynamic filters or search features.
7. Integrate drag-and-drop functionality for reordering or prioritizing subforms.
8. Implement collaborative editing for shared subforms.
9. Use progressive disclosure to reveal subform content selectively.

## API

### Events

| **Name**| **Description**|
|----------------------|---------------------------------------------------------------------|
|`onChange (element)`|The onChange event occurs when the value of a field is changed|
|`onRowAdd (element)`|The onRowAdd event occurs when a row is added|
|`onRowRemove (element)`|The onRowRemove event occurs when a row is removed|
|`onPageChange (element)`|The onPageChange event occurs when a page is changed|

### Methods

| **Name**| **Description**|**Parameters**|
|----------------------|---------------------------------------------------------------------|----|
|`this.addClassName`|Add style class to page item|`(fields: String(componentID), String[]; className: String)`|
|`this.removeClassName`|Remove page item style|`(fields: String(componentID), String[]; className: String)`|
|`this.getComponent`|Returns a component whose id has been passed as a parameter|`(component_ID: String(componentID), String[]; Object: Object)`|
|`this.hide(fields)`|Hides the field|`(fields: String(componentID)`|
|`this.show(fields)`|Displays the field|`(fields: String(componentID)`|
| `this.disable(fields)`| Disable input field from user interaction|`(fields: String(componentID), String[])`|

!!! Info
    1. The show() and hide() methods can also be used to control the visibility of an alert in response to user input.
    2. **fields** refer to the component **ID**. You can fetch the ID from the **Component Attribute** panel in the Page Builder.
    3. For using **this.show(fields)** enable the **Hidden** check-box in the **Component Attribute** panel.

#### Steps to place/use the methods for components of the Page Builder"

1. Go to Form Attribute :material-menu-right: Action Panel :material-menu-right: Setting :material-menu-right: (Mounted | refresh | click 'Add action')
2. Write the method/code as shown in the **Example** below.
3. Click on `Save`.
4. On the main screen click on `Save` again.
5. Click on `Preview` to see the code in action.
<img src= "/apps/components/img/alert1.png">

!!! Example
    1. `this.addClassName(fields, className)`
          * Go to Form Attribute :material-menu-right: Style Sheets :material-menu-right: add the class
            ```js
            .abc{ // abc is the class name
            background-color: red;
            }
            ```
          * Follow the steps in the above **Note**
          * ```js
            this.addClassName('table_n7rs950l', 'abc')
            ```

    2. `this.removeClassName(fields, className)`
        ```js
        this.removeClassName('table_n7rs950l', 'abc')
        ```

    3. `this.hide(fields)`
        ```js
        var fields= ['table_n7rs950l']
        this.hide(fields)
        ```
    
    4. `this.show(fields)`
        ```js
        var fields= ['table_n7rs950l']
        this.show(fields)
        ```
    
    5. `this.disable(['fields'])`
        ```js
        this.disable(['table_n7rs950l'])
        ```

    6.  `this.getComponent('component_ID')`
        ```js
        var subname = this.getComponent('table_n7rs950l');
        console.log('getComponent',subname);
        ```

## Config

| **Name**|**Description**|**Icon**|
|---------|---------------|--------|
|**ID**| Sub-form's unique identifier|<img src= "/apps/components/img/input_id.png">|
|**Label Width**|Width of the label associated with an input field. It determines the horizontal space occupied by the label text|<img src= "/apps/components/img/input_labelwidth1.png">|
|**Hide Label**| Hides the label on the form|<img src= "/apps/components/img/input_hidelabel.png">|
|**Text Prompt**| A description to aid the user when completing the field|<img src= "/apps/components/img/input_textprompt.png">|
|**Paging**|Enables pagination|<img src= "/apps/components/img/subform_paging.png">|
|**Page Size**| Displays the number of entries per page|<img src= "/apps/components/img/subform_pagesize.png">|
|**Show Control**|Displays control button|<img src= "/apps/components/img/subform_showcontrol.png">|
|**Virtual Table**| Display elements inside the subform|<img src= "/apps/components/img/subform_virtualtable.png">|
|**Default Value**| The default value which is filled in the field before the user changes it|<img src= "/apps/components/img/input_defaultvalue.png">|
|**Custom Class**| An HTML class attribute which allows further customisation **[See Form Attribute > Style Sheets**](**add anchor text**)|<img src= "/apps/components/img/input_customclass.png">|
|**Attribute Action**|Enable **Data Binding** to connect the data to UI. <br> Enable **Hidden** to action to hide the field. <br> Enable **Disabled** action to make the field unsuable. <br>Enable **Deletable** to delete the row in the subform. <br> Enable **Addible** to add a row in the subform. <br>Enable **Show word count** action make the word count visible|<img src= "/apps/components/img/input_attributeaction.png">|

## First time User?

If you are using the Page Builder components on the ConnexCS platform first time, we request you to use our guide on <a href="https://bani-appsection--connexcs-docs.netlify.app/apps/page-builder/#steps-to-use-components-in-the-page-builder" target="_blank">steps to use the Components</a>.