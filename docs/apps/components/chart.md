# Chart

## Description

Charts are visual representations of data that use symbols, colors, and shapes to communicate information clearly and efficiently.

The 3 types of Charts we use are:

1. **Bar charts**: Use bars of different heights to represent data points. Often used for comparing values across categories.
2. **Line charts**: Show trends and changes over time. Connecting data points with lines allows for easy visualization of patterns.
3. **Pie charts**: Show the proportion of each category in a data set as slices of a pie. Useful for highlighting the relative size of different parts of a whole.

<img src= "/apps/components/img/charts.png">

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

| **Name**| **Description**|
|----------------------|---------------------------------------------------------------------|
|**this.addClassName(fields, disabled)**|Add style class to form item|
|**this.removeClassName(fields, disabled)**|Remove form item style|
| **this.disable(fields)**| Disable input field from user interaction|
| **this.enable(fields)**| Disable input field from user interaction|
| **this.getComponent(name) → {Object}**|Retrieve a component from an object or element|
| **this.getValue(fieldName)**|Get A Value From a component|
| **this.getValues() → {Object}**|Get the values of all fields when values change|
|**this.hide(fields)**|Hides the field|
|**this.show(fields)**|Displays the field|
|**this.setData(Value)**|Set the data in the field|

## Config

| **Name**|**Description**|**Icon**|
|---------------|----------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|
|**ID**| This is a unique identifier which is used to access the field by the API and the key of the field when the form is saved|<img src= "/apps/components/img/input_id.png">|
|**Width**| [**Optional**] To set the width of the field|<img src= "/apps/components/img/input_width.png">|
|**Height**| [**Optional**] To set the height of the field|<img src= "/apps/components/img/input_height.png">|
|**Default**| Set any default data for the charts|<img src= "/apps/components/img/charts_default.png">|
|**Custom Class**| A HTML class attribute which allows further customisation **[See Form Attribute > Style Sheets**](**add anchor text**)|<img src= "/apps/components/img/input_customclass.png">|
|**Attribute Action**|Enable **Data Binding** to connect the data to UI|<img src= "/apps/components/img/charts_attributeaction.png">|

1. **Basic**: Set the basic fields in a chart.
   * Sub-Title: Enter the sub-title of the chart.
   * Alignment: Place the sub-title either at the top using **Title Top Margin**, **Center Alignment**, or **Title Vertical Gap**.
   * Enable **Tooltip** open small, contextual pop-up window that provides additional information or guidance when users hover over, point to, or tap an element on a GUI.
   * Enable **Legend** to decode the visual elements used to represent data.
   * Enable **Toolbox** to get options like **Zoom** and **Zoom Reset**.

<img src= "/apps/components/img/charts_basic.png">

2.**Series**: When you have more than 2 charts in a single chart.
   * **Type**: Select **Bar**, **Line** or **Pie** charts.
   * **Encode X, Encode Y**: Swap the contents of X and Y axis.
   * **X-Axis Index**:The X-axis index in a graph refers to the numerical values or categories displayed along the bottom horizontal axis.
   * **Y-Axis Index**: The Y-axis index in a graph refers to the numerical values displayed along the vertical axis

<img src= "/apps/components/img/charts_series.png">

3.**X-Axis**: To change the settings for X-Axis.
    * **Grid Index**: Select the grid you wish to place your X-Axis.
    * **Type**: Select the type of value you want to display on the chart.
    * **Name**: Enter the name of the X-Axis.
    * **Formatter-X**: Select the value you want to display on X-axis like **Duration**, **Millisecond**, **Decimal**, **Percent**, **Bytes**.

<img src= "/apps/components/img/charts_xaxis.png">

4.**Y-Axis**: To change the settings for Y-Axis.
    * **Grid Index**: Select the grid you wish to place your Y-Axis.
    * **Type**: Select the type of value you want to display on the chart.
    * **Name**: Enter the name of the Y-Axis.
    * **Formatter-Y**: Select the value you want to display on X-axis like **Duration**, **Millisecond**, **Decimal**, **Percent**, **Bytes**.

<img src= "/apps/components/img/charts_yaxis.png">

4.**Grid**: To change the settings for Grid.
    * **Left**: Place the chart on left-side using the slider.
    * **Right**: Place the chart on right-side using the slider.
    * **Width**: Change the width of the chart using the slider.
    * **Height**: Change the height of the chart using the slider.

<img src= "/apps/components/img/charts_grid.png">
