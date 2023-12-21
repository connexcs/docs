# Input

## Description

**Tree-select** refers to a special type of dropdown menu element used in forms, presenting information in a hierarchical, tree-like structure.

Unlike a standard dropdown menu with a flat list of options, a tree-select organizes options into parent-child relationships, letting users navigate through nested categories to find the specific choice they need.

<img src= "/apps/components/img/treeselect.png">

## Use Case

1. Nesting levels
2. Multiple selection
3. Improved organization
4. Visual clarity
5. User-friendly navigation
6. Enhanced accessibility
7. Project breakdown structure
8. Issue categorization
9. Resource allocation
10. Data Aggregation and Filtering

### Interactivity

1. Integrate a search bar within the tree-select. As users type, highlight matching options across all levels, dynamically filtering the displayed nodes.
2. Contextual suggestions
3. Show previews of selected options or additional information when hovering over nodes.
4. Based on the chosen branch or category in the tree, show or hide additional fields in the form.
5. Perform calculations based on user selections within the tree-select.
6. Enable multiple users to collaboratively choose options in the tree-select and leave annotations or comments on specific nodes.

## API

### Events

| **Name**| **Description**|
|----------------------|---------------------------------------------------------------------|
| **onChange (element)**| The onChange event occurs when the value of an field is changed|
| **onFocus (element)**| The onfocus event occurs when an field gets focus|
| **onBlur (element)**| The onblur event occurs when an field loses focus|

### Methods

| **Name**| **Description**|
|----------------------|---------------------------------------------------------------------|
|**this.addClassName(fields, disabled)**|Add style class to form item|
//|**this.removeClassName(fields, disabled)**|Remove form item style|
| **this.disable(fields)**| Disable input field from user interaction|
//| **this.enable(fields)**| Disable input field from user interaction|
//| **this.getComponent(name) → {Object}**|Retrieve a component from an object or element|
//| **this.getValue(fieldName)**|Get A Value From An Object|
//| **this.getValues() → {Object}**|Get the values of all fields when values change|
|**this.hide(fields)**|Hides the field|
|**this.show(fields)**|Displays the field|
|**this.setData(Value)**|Set the data in the field|

## Config

| **Name**|**Description**|**Icon**|
|---------------|----------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|
|**ID**| This is a unique identifier which is used to access the field by the API and the key of the field when the form is saved|<img src= "/apps/components/img/input_id.png">|
|**Name**| [**Optional**] The visual identifier label of the field|<img src= "/apps/components/img/checkbox_name.png">|
|**Width**| [**Optional**] To set the width of the field|<img src= "/apps/components/img/input_width.png">|
|**Label Width**|Width of the label associated with an input field. It determines the horizontal space occupied by the label text|<img src= "/apps/components/img/input_labelwidth1.png">|
|**Label Wrap**| If the label is longer than the allowed width the text will continue on another line|<img src= "/apps/components/img/input_labelwrap1.png">|
|**Hide Label**| Hides the label on the form|<img src= "/apps/components/img/input_hidelabel.png">|
|**Placeholder**| The short hint is displayed in the input field before the user enters a value|<img src= "/apps/components/img/input_placeholder.png">|
|**Text Prompt**| A description to aid the user when completing the field|<img src= "/apps/components/img/input_textprompt.png">|
|**Multiple**|Allows users to choose multiple options from different branches or levels within the tree-select structure|<img src= "/apps/components/img/treeselect_multiple.png">|
|**Searchable**|Allows users to search the from the options|<img src= "/apps/components/img/treeselect_searchable.png">|
|**Optional any Node**|users can choose any node from any level within the tree, including child nodes|<img src= "/apps/components/img/treeselect_optional.png">|
|**Option**|Choose either **Static** or **Dynamic** way of adding data to the oprions of the Cascader <br><br>**Static data** refers to a fixed set of options that are predefined and loaded into the cascader at the time of initialization</br></br> **Dynamic data** are options fetched as needed from sources like databases or APIs. The cascader updates choices based on user selections. You select from **Data source** which refers to the origin of the data; **Function** which refers to the code that manipulates the data, and **Assigned Value** which refers to the specific value stored or associated with a data element|<img src= "/apps/components/img/checkbox_static.png"> <img src= "/apps/components/img/checkbox_dynamic.png">|
|**Default Value**| The default value which is filled in the field before the user changes it|<img src= "/apps/components/img/treeselect_default.png">|
|**Custom Class**| A HTML class attribute which allows further customisation **[See Form Attribute > Style Sheets**](**add anchor text**)|<img src= "/apps/components/img/input_customclass.png">|
|**Attribute Action**|Enable **Data Binding** to connect the data to UI. <br> Enable **Hidden** to action to hide the field. <br> Enable **Disabled** action to make the field unsuable. <br>Enable **Show clear button** action make the clear button visible.|<img src= "/apps/components/img/treeselect_attributionaction.png">|
