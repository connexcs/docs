# Sub-Form+

## Description

Complex layout subform component for list (array) type form data, supporting nesting of complex layouts.

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
| **onChange (element)**| The onChange event occurs when the value of an field is changed|
| **onRowAdd (element)**|The onRowAdd event occurs when a row is added|
| **onRowRemove (element)**|The onRowRemove event occurs when a row is removed|
|**onPageChange (element)**|The onPageChange event occurs when a page is changed|

### Methods

| **Name**| **Description**|
|----------------------|---------------------------------------------------------------------|
|**this.addClassName(fields, disabled)**|Add style class to form item|
|**this.removeClassName(fields, disabled)**|Remove form item style|
| **this.disable(fields)**| Disable input field from user interaction|
//| **this.enable(fields)**| Disable input field from user interaction|
| **this.getComponent(name) → {Object}**|Retrieve a component from an object or element|
//| **this.getValue(fieldName)**|Get A Value From An Object|
//| **this.getValues() → {Object}**|Get the values of all fields when values change|
|**this.hide(fields)**|Hides the field|
|**this.show(fields)**|Displays the field|
//|**this.setData(Value)**|Set the data in the field|

## Config

| **Name**|**Description**|**Icon**|
|---------------|----------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|
|**ID**| This is a unique identifier which is used to access the field by the API and the key of the field when the form is saved|<img src= "/apps/components/img/input_id.png">|
|**Label Width**|Width of the label associated with an input field. It determines the horizontal space occupied by the label text|<img src= "/apps/components/img/input_labelwidth1.png">|
|**Hide Label**| Hides the label on the form|<img src= "/apps/components/img/input_hidelabel.png">|
|**Text Prompt**| A description to aid the user when completing the field|<img src= "/apps/components/img/input_textprompt.png">|
|**Paging**|Enables pagination|<img src= "/apps/components/img/subform_paging.png">|
|**Page Size**| Displays the number of entries per page|<img src= "/apps/components/img/subform_pagesize.png">|
|**Show Control**|Displays control button|<img src= "/apps/components/img/subform_showcontrol.png">|
|**Virtual Table**| Display elements inside the subform|<img src= "/apps/components/img/subform_virtualtable.png">|
|**Default Value**| The default value which is filled in the field before the user changes it|<img src= "/apps/components/img/input_defaultvalue.png">|
|**Custom Class**| A HTML class attribute which allows further customisation **[See Form Attribute > Style Sheets**](**add anchor text**)|<img src= "/apps/components/img/input_customclass.png">|
|**Attribute Action**|Enable **Data Binding** to connect the data to UI. <br> Enable **Hidden** to action to hide the field. <br> Enable **Disabled** action to make the field unsuable. <br>Enable **Deletable** to delete the row in the subform. <br> Enable **Addible** to add a row in the subform. <br>Enable **Show word count** action make the word count visible|<img src= "/apps/components/img/input_attributeaction.png">|