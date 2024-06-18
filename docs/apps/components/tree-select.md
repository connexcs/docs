# Tree-Select

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
|---------|----------------|
|`onChange (element)`| The onChange event occurs when the value of an field is changed|
|`onFocus (element)`| The onfocus event occurs when an field gets focus|
|`onBlur (element)`| The onblur event occurs when an field loses focus|

### Methods

| **Name**| **Description**|**Parameters**|
|---------|----------------|--------------|
|`this.addClassName`|Add style class to a form item|`(fields: String`&#124;`String[], className: String)`|
|`this.hide`|Hides the field|`(fields: String`&#124;`String[])`|
|`this.show`|Displays the field|`(fields: String`&#124;`String[])`|
|`this.disable`| Disable tree-select field from user interaction|`(fields: String`&#124;`String[])`|
|`this.enable`| Enable tree-select field from user interaction|`(fields: String`&#124;`String[])`|
|`this.setData`|Set the data in the field. The Value object should be of type { componentId: componentValue }|`(Value: Object)`|
|`this.getValue`|Get A Value From a component|`(fieldName: String)`|
|`this.getValues`|Gets the current values of all fields|`() : Object`|
|`this.removeClassName`|Remove style class from a form item|`(fields: String`&#124;`String[], className: String)`|
|`this.getComponent`|Returns a component whose id has been passed as a parameter|`(component_ID: String) : Object`|
|`this.hide`|Hides the field|`(fields: String`&#124;`String[])`|
|`this.refreshFieldDataSource`|Refresh the datasource data bound to the whole page|

!!! Info
    1. The show() and hide() methods can also be used to control the visibility of the tree-select component in response to user input.
    2. **Fields** refers to a **component ID** or a **list of component IDs**. You can fetch the ID from the **Component Attribute** panel in the Page Builder.
    3. Before using **this.show(fields)**, make sure the component is **hidden**. This can be done using **this.hide(fields)** or by **enabling** the **Hidden checkbox** in the Component Attribute panel.
    4. Before using **this.enable(fields)**, make sure the component is **disabled**. This can be done using **this.disable(fields)** or by **enabling** the **Disabled checkbox** in the Component Attribute panel.

#### Steps to use the methods for the Page Builder components

1. Go to Form Attribute :material-menu-right: Action Panel :material-menu-right: Setting :material-menu-right: (Mounted | refresh | click 'Add action').
2. Write the method/code as shown in the **Example** below.
3. Click on `Save`.
4. On the main screen click on `Save` again.
5. Click on `Preview` to see the code in action.
<img src= "/apps/components/img/treeselect2.png">

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
            this.addClassName('treeselect_4xgiru3n', 'abc')
            ```

    2. `this.hide(fields)`
        ```js
        var fields= ['treeselect_4xgiru3n']
        this.hide(fields)
        ```
    
    3. `this.show(fields)`
        ```js
        var fields= ['treeselect_4xgiru3n']
        this.show(fields)
        ```
    
    4. `this.disable(['fields'])`
        ```js
        this.disable(['treeselect_4xgiru3n'])
        ```
    
    5. `this.enable(['fields'])`
        ```js
        this.enable(['treeselect_4xgiru3n'])
        ```
    
    6. `this.setData(Value)`
        ```js
        this.setData(
        {"treeselect_4xgiru3n": "Option 2",})
        ```
    
    7. `this.getValue('fieldName')`
        ```js
        var fields = this.getValue('treeselect_4xgiru3n');
        console.log('getValue', fields);
        ```
    
    10. `this.getValues()`
        ```js
        var data = this.getValues();
        console.log(data);
        ```
    
    11. `this.removeClassName(fields, className)`
        ```js
        this.removeClassName('treeselect_4xgiru3n', 'abc')
        ```
    
    12. `this.getComponent('component_ID')`
        ```js
        var fields = this.getComponent('treeselect_4xgiru3n');
        console.log('getComponent', fields);
        ```
    
    13. `this.refreshFieldDataSource`
        
        `make the function or data as dynamic`

## Config

| **Name**|**Description**|**Icon**|
|---------|---------------|--------|
|**ID**| The tree-select component's unique identifier|<img src= "/apps/components/img/input_id.png">|
|**Name**| [**Optional**] The display name of the Tree-select field|<img src= "/apps/components/img/checkbox_name.png">|
|**Width**| [**Optional**] Width of the field|<img src= "/apps/components/img/input_width.png">|
|**Label Width**|Width of the label associated with an input field. It determines the horizontal space occupied by the label text|<img src= "/apps/components/img/input_labelwidth1.png">|
|**Label Wrap**| If the label is longer than the allowed width the text will continue on another line|<img src= "/apps/components/img/input_labelwrap1.png">|
|**Hide Label**| Hides the label on the form|<img src= "/apps/components/img/input_hidelabel.png">|
|**Placeholder**| The short hint is displayed in the input field before the user enters a value|<img src= "/apps/components/img/input_placeholder.png">|
|**Text Prompt**| A description to aid the user when completing the field|<img src= "/apps/components/img/input_textprompt.png">|
|**Multiple**|Allows users to choose multiple options from different branches or levels within the tree-select structure|<img src= "/apps/components/img/treeselect_multiple.png">|
|**Searchable**|Allows users to search the from the options|<img src= "/apps/components/img/treeselect_searchable.png">|
|**Optional any Node**|users can choose any node from any level within the tree, including child nodes|<img src= "/apps/components/img/treeselect_optional.png">|
|**Option**|Choose either **Static** or **Dynamic** way of adding data to the options of the Tree Select <br><br>**Static data** refers to a fixed set of options that are pre-defined and loaded into the Tree Select at the time of initialization</br></br> **Dynamic data** are options fetched as needed from sources like databases or APIs. The Tree Select updates choices based on user selections. You select from **Data source** which refers to the origin of the data; **Function** which refers to the code that manipulates the data, and **Assigned Value** which refers to the specific value stored or associated with a data element|<img src= "/apps/components/img/checkbox_static.png"> <img src= "/apps/components/img/checkbox_dynamic.png">|
|**Default Value**| The default value which is filled in the field before the user changes it|<img src= "/apps/components/img/treeselect_default.png">|
|**Custom Class**| An HTML class attribute which allows further customisation [See Form Attribute > Style Sheets](https://bani-appsection--connexcs-docs.netlify.app/apps/page-builder/#form-attribute)|<img src= "/apps/components/img/input_customclass.png">|
|**Attribute Action**|Enable **Data Binding** to connect the data to UI. <br> Enable **Hidden** action to hide the field. <br> Enable **Disabled** action to make the field unusable. <br>Enable **Show Clear button** action to make the clear button visible.|<img src= "/apps/components/img/treeselect_attributionaction.png">|

## First time User?

If you are using the Page Builder components on the ConnexCS platform for the first time, we request you to use our guide on <a href="https://docs.connexcs.com/apps/page-builder/#steps-to-use-components-in-the-page-builder" target="_blank">steps to use the Components</a>.