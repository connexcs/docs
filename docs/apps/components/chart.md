# Chart

## Description

**Charts** are visual representations of data that use symbols, colors, and shapes to communicate information clearly and efficiently.

The 3 types of Charts we use are:

1. **Bar charts**: Use bars of different heights to represent data points. Often used for comparing values across categories.
2. **Line charts**: Show trends and changes over time. Connecting data points with lines allows for easy visualization of patterns.
3. **Pie charts**: Show the proportion of each category in a data set as slices of a pie. Useful for highlighting the relative size of different parts of a whole.

<img src= "/apps/components/charts.png">

## Use Case

1. Data Visualization Dashboards
2. Web Analytics
3. Financial Analysis
4. Interactive Presentations and Report
5. Captivating Presentations
6. Interactive Reports
7. Geographic Data Visualization

### Interactivity

1. Connect your forms to external charting services: Google Charts, ChartBlocks, or others.
2. Pass form data to these services to generate interactive charts.
3. Embed the generated charts back into your form using iframes or other techniques.

## API

### Methods

| **Name**| **Description**|**Parameters**|
|---------|----------------|--------------|
|`this.addClassName`|Add style class to a form item|`(fields: String`&#124;`String[], className: String)`|
|`this.removeClassName`|Remove style class from a form item|`(fields: String`&#124;`String[], className: String)`|
|`this.getComponent`|Returns a component whose id has been passed as a parameter|`(component_ID: String) : Object`|
|`this.getValues`|Gets the current values of all fields|`() : Object`|
|`this.hide`|Hides the field|`(fields: String`&#124;`String[])`|
|`this.show`|Displays the field|`(fields: String`&#124;`String[])`|
|`this.getValue`|Get A Value From a component|`(fieldName: String)`|
|`this.setData`|Set the data in the field. The Value object should be of type { componentId: componentValue }|`(Value: Object)`|

!!! Info
    1. The show() and hide() methods can also be used to control the visibility of a chart in response to user input.
    2. **Fields** refers to a **component ID** or a **list of component IDs**. You can fetch the ID from the **Component Attribute** panel in the Page Builder.
    3. Before using **this.show(fields)**, make sure the component is **hidden**. This can be done using **this.hide(fields)** or by **enabling** the **Hidden checkbox** in the Component Attribute panel.

#### Steps to use the methods for the Page Builder components

1. Go to Form Attribute :material-menu-right: Action Panel :material-menu-right: Setting :material-menu-right: (Mounted | refresh | click 'Add action').
2. Write the method/code as shown in the **Example** below.
3. Click on `Save`.
4. On the main screen click on `Save` again.
5. Click on `Preview` to see the code in action.
<img src= "/apps/components/img/chart1.png">

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
            this.addClassName('echarts_moy2lbor', 'abc')
            ```

    2. `this.removeClassName(fields, className)`
        ``js
        this.removeClassName('echarts_moy2lbor', 'abc')
        ```
    
    3. `this.getValue(fieldName)`
        ```js
        var chartname = this.getValue('echarts_moy2lbor');
        console.log('getValue', chartname);
        ```
    
    4. `this.getValues()`
        ```js
        var data = this.getValues();
        console.log(data);
        ```
    
    5. `this.hide(fields)`
        ```js
        var fields= ['echarts_moy2lbor']
        this.hide(fields)
        ```
    
    6. `this.show(fields)`
        ```js
        var fields= ['echarts_moy2lbor']
        this.show(fields)
        ```
    
    7. `this.disable(['fields'])`
        ```js
        this.disable(['echarts_moy2lbor'])
        ```
    
    8. `this.enable(['fields'])`
        ```js
        this.enable(['echarts_moy2lbor'])
        ```

    9.  `this.getValue('fieldName')`
        ```js
        var chartname = this.getValue('echarts_moy2lbor');
        console.log('getValue', chartname);
        ```
    
    10. `this.getComponent('component_ID')`
        ```js
        var chartname = this.getComponent('echarts_moy2lbor');
        console.log('getComponent', chartname);
        ```

        **example of setData**

!!! info Add multiple classes
    Use the following syntax to add multiple classes to a component:
    ```js
    this.addClassName('componentID', 'class1', 'class2')
    ``

## Config

| **Name**|**Description**|**Icon**|
|---------|---------------|--------|
|**ID**| The chart component's unique identifier|<img src= "/apps/components/img/input_id.png">|
|**Width**| [**Optional**] Width of the field|<img src= "/apps/components/img/input_width.png">|
|**Height**| [**Optional**] Height of the field|<img src= "/apps/components/charts_height.png">|
|**Default**| Default data for the charts|<img src= "/apps/components/charts_default.png">|
|**Custom Class**| An HTML class attribute which allows further customisation [See Form Attribute > Style Sheets](https://bani-appsection--connexcs-docs.netlify.app/apps/page-builder/#form-attribute)|<img src= "/apps/components/img/input_customclass.png">|
|**Attribute Action**|Enable **Data Binding** to connect the data to UI|<img src= "/apps/components/charts_attributeaction.png">|

### Chart Config

1. **Basic**: Set the basic fields in a chart.

   * **Sub-Title**: Enter the sub-title of the chart.

   * **Title Vertical Position**: Place the sub-title either at the **Top**, **Center** or **Bottom**.
   * **Title Horizontal Position**: Place the sub-title either at the **Left**, **Center** or **Right**.
   * **Title Gap**: Space between the Main Title and Sub-Title.

   * Enable **Tooltip** open small, contextual pop-up window that provides additional information or guidance when users hover over, point to, or tap an element on a GUI.

   * Enable **Legend** to decode the visual elements used to represent data.

   * Enable **Toolbox** to get options like **Zoom** and **Zoom Reset**.

<img src= "/apps/components/img/charts_basic1.png" width="500">

2.**Series**: When you have more than 2 charts in a single chart.

   * **Type**: Select **Bar**, **Line**, **Pie**, **Area** or **Sankey** charts.
   * **Label Formatter**: It helps you display the following information:
        Model variation includes:
        * {a}: series name.
        * {b}: the name of a data item.
        * {c}: the value of a data item.
        * {@xxx}: the value of a dimension named 'xxx', for example, {@product} refers to the value of 'product' dimension.
        * {@[n]}: the value of a dimension at the index of n, for example, {@[3]} refers to the value at dimensions[3].
   * **Name**: Select the **Series**.
   * **Encode X**:The X-axis index in a graph refers to the numerical values or categories displayed along the bottom horizontal axis.
   * **Encode Y**: The Y-axis index in a graph refers to the numerical values displayed along the vertical axis.

<img src= "/apps/components/img/charts_series1.png" width="400">

!!! Info Line Charts
    When you select **Line Charts** some additional fields are displayed:
    * **Symbol**: Allows you to choose the symbol of the connecting the line.
    * **Connect Nulls**: Whether to connect the line across null points.

!!! Info Area
    When you select **Area** some fields are displayed:
    * **Color**: Select the area under the curve.

!!! Info Sankey Charts
    A **Sankey chart** is a type of diagram that helps you show how things flow from one part to another.

    Sankey charts are handy for understanding and visualizing how resources or information move through complex systems. They're used in various fields to make it easier to see and analyze these flows.

    <img src= "/apps/img/charts_sankey.png">

3.**X-Axis**: To change the settings for X-Axis.

  * **Grid Index**: Select the grid you wish to place your X-Axis.
  * **Name**: Enter the name of the X-Axis.
  * **Formatter**: Select the value you want to display on X-axis like **Duration**, **Millisecond**, **Decimal**, **Percent**, **Bytes**.

<img src= "/apps/components/img/charts_xaxis1.png" width="400">

4.**Y-Axis**: To change the settings for Y-Axis.

* **Grid Index**: Select the grid you wish to place your Y-Axis.
* **Name**: Enter the name of the Y-Axis.
* **Formatter**: Select the value you want to display on X-axis like **Duration**, **Millisecond**, **Decimal**, **Percent**, **Bytes**.

<img src= "/apps/components/img/charts_yaxis1.png" width="400">

4.**Grid**: To change the settings for Grid.

* **Left**: Place the chart on left-side using the slider.
* **Top**: Place the chart on the Top using the slider.
* **Width**: Change the width of the chart using the slider.
* **Height**: Change the height of the chart using the slider.

<img src= "/apps/components/img/charts_grid1.png" width="400">

## First time User?

If you are using the Page Builder components on the ConnexCS platform for the first time, we request you to use our guide on <a href="https://bani-appsection--connexcs-docs.netlify.app/apps/page-builder/#steps-to-use-components-in-the-page-builder"target="_blank">steps to use the Components</a>.
