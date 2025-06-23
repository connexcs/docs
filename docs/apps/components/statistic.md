# Statistic

## Description

The **Statistic** allows you to display values/numbers.

<img src= "/apps/components/img/statistic.png" style="border: 2px solid #4472C4; border-radius: 8px;">

## Use Case

1. Highlight a **number or a group of numbers**, such as **statistical value**, **amount**, and **ranking**.
2. Countdown component, support to add other components control countdown.
3. Card usage display, can be freely combined.

### Interactivity

**Interactivity** is the ability of a web page or application to respond to an input.

There're a number of ways to add interactivity to the **Statistic** component.

Some of the most common methods include:

1. **Change events**: Change events are fired when the value changes.
   You can use change events to perform a variety of actions, such as:
    * Pre-Populated Statistics
    * Real-time Updates
    * Triggering Form Sections
    * Enabling/Disabling Options
    * Comparative Analysis
    * Highlighting Trends

## API

### Events

| **Name**| **Description**|
|---------|----------------|
| `onChange (element)`| The onChange event occurs when the value of a field is changed|

### Methods

| **Name**| **Description**|**Parameters**|
|---------|----------------|--------------|
|`this.addClassName`|Add style class to a form item|`(fields: String`&#124;`String[], className: String)`|
|`this.removeClassName`|Remove style class from a form item|`(fields: String`&#124;`String[], className: String)`|
|`this.getComponent`|Returns a component whose id has been passed as a parameter|`(component_ID: String) : Object`|
|`this.getValues`|Gets the current values of all fields|`() : Object`|
|`this.hide`|Hides the field|`(fields: String`&#124;`String[])`|
|`this.show`|Displays the field|`(fields: String`&#124;`String[])`|
|`this.disable`| Disable statistic field from user interaction|`(fields: String`&#124;`String[])`|
|`this.enable`| Enable statistic field from user interaction|`(fields: String`&#124;`String[])`; `(Value: Object){'field-id': 'field-value'}`|
|`this.getValue`|Get A Value From a component|`(fieldName: String)`|
|`this.setData`|Set the data in the field. The Value object should be of type { componentId: componentValue }|`(Value: Object)`|

!!! Info
    1. The show() and hide() methods can also be used to control the visibility of the statistic component in response to user input.
    2. **Fields** refers to a **component ID** or a **list of component IDs**. You can fetch the ID from the **Component Attribute** panel in the Page Builder.
    3. Before using **this.show(fields)**, make sure the component is **hidden**. This can be done using **this.hide(fields)** or by **enabling** the **Hidden checkbox** in the Component Attribute panel.
    4. Before using **this.enable(fields)**, make sure the component is **disabled**. This can be done using **this.disable(fields)** or by **enabling** the **Disabled checkbox** in the Component Attribute panel.

#### Steps to use the methods for the Page Builder components

1. Go to Form Attribute :material-menu-right: Action Panel :material-menu-right: Setting :material-menu-right: (Mounted | refresh | click 'Add action').
2. Write the method/code as shown in the **Example** below.
3. Click on `Save`.
4. On the main screen click on `Save` again.
5. Click on `Preview` to see the code in action.
<img src= "/apps/components/img/statistic1.png" style="border: 2px solid #4472C4; border-radius: 8px;">

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
            this.addClassName('statistic_15bwvfwi', 'abc')
            ```

    2. `this.removeClassName(fields, className)`
        ```js linenums="1"
        this.removeClassName('statistic_15bwvfwi', 'abc')
        ```
    
    3. `this.getValue(fieldName)`
        ```js linenums="1"
        var statname = this.getValue('statistic_15bwvfwi');
        console.log('getValue', statname);
        ```
    
    4. `this.getValues()`
        ```js linenums="1"
        var data = this.getValues();
        console.log(data);
        ```
    
    5. `this.hide(fields)`
        ```js linenums="1"
        var fields= ['statistic_15bwvfwi']
        this.hide(fields)
        ```
    
    6. `this.show(fields)`
        ```js linenums="1"
        var fields= ['statistic_15bwvfwi']
        this.show(fields)
        ```
    
    7. `this.disable(['fields'])`
        ```js linenums="1"
        this.disable(['statistic_15bwvfwi'])
        ```
    
    8. `this.enable(['fields'])`
        ```js linenums="1"
        this.enable(['statistic_15bwvfwi'])
        ```
    
    9.  `this.setData(Value)`
        ```js linenums="1"
        this.setData(
         {"statistic_15bwvfwi": "1234",});
        ```
    
    10. `this.getComponent('component_ID')`
        ```js linenums="1"
        var statname = this.getComponent('statistic_15bwvfwi');
        console.log('getComponent', statname);
        ```

## Config

| **Name**|**Description**|**Icon**|
|---------|---------------|--------|
|**ID**| The statistic component's unique identifier |<img src= "/apps/components/img/input_id.png">|
|**Name**| [**Optional**] The display name of the statistic field|<img src= "/apps/components/img/checkbox_name.png">|
|**Label Width**|Width of the label associated with the statistic field. It determines the horizontal space occupied by the label text|<img src= "/apps/components/img/input_labelwidth1.png">|
|**Prefix**|Sets the prefix (before) of a number|<img src= "/apps/components/img/sta_prefix.png">|
|**Suffix**|Sets the suffix (after) of a number|<img src= "/apps/components/img/sta_suffix.png">|
|**Default Value**| The default value which is filled in the field before the user changes it|<img src= "/apps/components/img/input_defaultvalue.png">|
|**Custom Class**| An HTML class attribute which allows further customisation [See Form Attribute > Style Sheets](https://docs.connexcs.com/apps/page-builder/#form-attribute)|<img src= "/apps/components/img/input_customclass.png">|
|**Attribute Action**|Enable **Data Binding** to connect the data to UI. <br> Enable **Hidden** action to hide the field. <br> Enable **Disabled** action to make the field unusable|<img src= "/apps/components/img/checkbox_attributeaction.png">|
|**Action Settings**|Click on the drop-down to select the pre-defined methods you wish to apply to your component. In this case, you can choose either **mounted** or **refresh** for `onChange`|<img src= "/apps/components/img/radio_ac.png">|

## First time User?

If you are using the Page Builder components on the ConnexCS platform for the first time, we request you to use our guide on <a href="https://docs.connexcs.com/apps/page-builder/#steps-to-use-components-in-the-page-builder" target="_blank">steps to use the Components</a>.