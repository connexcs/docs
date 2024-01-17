# Chart

## Description

Charts are visual representations of data that use symbols, colors, and shapes to communicate information clearly and efficiently.

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
|`this.addClassName`|Add style class to page item|`(fields: String(componentID), String[]; className: String)`|
|`this.removeClassName`|Remove page item style|`(fields: String(componentID), String[]; className: String)`|
|`this.getComponent`|Returns a component whose id has been passed as a parameter|`(component_ID: String(componentID), String[]; Object: Object)`|
|`this.getValues()`|Get the values of all fields when values change|`(Object: Object)`|
|`this.hide(fields)`|Hides the field|`(fields: String(componentID)`|
|`this.show(fields)`|Displays the field|`(fields: String(componentID)`|
| `this.disable(fields)`| Disable input field from user interaction|`(fields: String(componentID), String[])`|
|`this.setData`|Set the data in the field|`(Value: String, String[])`|
|`this.getValue`|Get A Value From a component|`(fieldName String(componentID)`|

!!! Info
    1. The show() and hide() methods can also be used to control the visibility of an alert in response to user input.
    2. **fields** refer to the component **ID**. You can fetch the ID from the **Component Attribute** panel in the Page Builder.
    3. For using **this.show(fields)** enable the **Hidden** check-box in the **Component Attribute** panel.

#### Steps to place/use the methods for components of the Page Builder"

1. Go to Form Attribute :material-menu-right: Action Panel :material-menu-right: Setting :material-menu-right: (Mounted | refresh | click 'Add action')
2. Write the method/code as shown in the **Example** below
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
    
    4. `this.getValues(fieldName)`
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
    
    8.  `this.getValue('fieldName')`
        ```js
        var chartname = this.getValue('echarts_moy2lbor');
        console.log('getValue',chartname);
        ```
    
    9. `this.getComponent('component_ID')`
        ```js
        var chartname = this.getComponent('echarts_moy2lbor');
        console.log('getComponent',chartname);
        ```

        **example of setData**

## Config

| **Name**|**Description**|**Icon**|
|---------|---------------|--------|
|**ID**| Chart's unique identifier|<img src= "/apps/components/img/input_id.png">|
|**Width**| [**Optional**] Width of the field|<img src= "/apps/components/img/input_width.png">|
|**Height**| [**Optional**] Height of the field|<img src= "/apps/components/charts_height.png">|
|**Default**| Default data for the charts|<img src= "/apps/components/charts_default.png">|
|**Custom Class**| An HTML class attribute which allows further customisation **[See Form Attribute > Style Sheets**](**add anchor text**)|<img src= "/apps/components/img/input_customclass.png">|
|**Attribute Action**|Enable **Data Binding** to connect the data to UI|<img src= "/apps/components/charts_attributeaction.png">|

1. **Basic**: Set the basic fields in a chart.

   * Sub-Title: Enter the sub-title of the chart.

   * Alignment: Place the sub-title either at the top using **Title Top Margin**, **Center Alignment**, or **Title Vertical Gap**.

   * Enable **Tooltip** open small, contextual pop-up window that provides additional information or guidance when users hover over, point to, or tap an element on a GUI.

   * Enable **Legend** to decode the visual elements used to represent data.

   * Enable **Toolbox** to get options like **Zoom** and **Zoom Reset**.

<img src= "/apps/components/charts_basic.png">

2.**Series**: When you have more than 2 charts in a single chart.

   * **Type**: Select **Bar**, **Line** or **Pie** charts.

   * **Encode X, Encode Y**: Swap the contents of X and Y axis.

   * **X-Axis Index**:The X-axis index in a graph refers to the numerical values or categories displayed along the bottom horizontal axis.

   * **Y-Axis Index**: The Y-axis index in a graph refers to the numerical values displayed along the vertical axis.

<img src= "/apps/components/charts_series.png">

3.**X-Axis**: To change the settings for X-Axis.

    * **Grid Index**: Select the grid you wish to place your X-Axis.
    
    * **Type**: Select the type of value you want to display on the chart.
    
    * **Name**: Enter the name of the X-Axis.
    
    * **Formatter-X**: Select the value you want to display on X-axis like **Duration**, **Millisecond**, **Decimal**, **Percent**, **Bytes**.

<img src= "/apps/components/charts_xaxis.png">

4.**Y-Axis**: To change the settings for Y-Axis.

    * **Grid Index**: Select the grid you wish to place your Y-Axis.
    
    * **Type**: Select the type of value you want to display on the chart.
    
    * **Name**: Enter the name of the Y-Axis.
    
    * **Formatter-Y**: Select the value you want to display on X-axis like **Duration**, **Millisecond**, **Decimal**, **Percent**, **Bytes**.

<img src= "/apps/components/charts_yaxis.png">

4.**Grid**: To change the settings for Grid.

    * **Left**: Place the chart on left-side using the slider.
    
    * **Right**: Place the chart on right-side using the slider.
    
    * **Width**: Change the width of the chart using the slider.
    
    * **Height**: Change the height of the chart using the slider.

<img src= "/apps/components/charts_grid.png">

## First time User?

If you are using the Page Builder components on the ConnexCS platform first time, we request you to use our guide on <a href="https://bani-appsection--connexcs-docs.netlify.app/apps/page-builder/#steps-to-use-components-in-the-page-builder" target="_blank">steps to use the Components</a>.
