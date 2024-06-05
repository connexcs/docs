# Data Grid

## Description

**Data Grid** is a tabular data display component. It enables you to add different functionalities.

<img src= "/apps/components/img/datagrid.png">

## Use Case

1. Displaying and Editing Tabular Data.
2. Collecting and Managing Lists.
3. Building Dynamic Forms.
4. Integrating with External Data.

### Interactivity

1. Allow users to directly edit data within cells, eliminating the need for separate edit forms or modals.
2. Provide tools for users to sort data by different columns and apply filters to narrow down the displayed information.
3. Pagination
4. Expandable Rows
5. Enforce data integrity by implementing validation rules to ensure data accuracy and consistency.

## API

### Events

| **Name**| **Description**|
|---------|----------------|
| `onCellClicked`| The onCellClicked event occurs when the cell in a data grid is clicked|
| `onLinkClicked`| The onLinkClicked event occurs when the link is clicked|

### Methods

| **Name**| **Description**|**Parameters**|
|---------|----------------|--------------|
|`this.getComponent`|Returns a component whose id has been passed as a parameter|`(component_ID: String) : Object`|
|`this.getValues`|Gets the current values of all fields|`() : Object`|
|`this.getValue`|Get A Value From a component|`(fieldName: String)`|
|`this.setData`|Set the data in the field. The Value object should be of type { componentId: componentValue }|`(Value: Object)`|

!!! Info
    1. The show() and hide() methods can also be used to control the visibility of the datagrid in response to user input.
    2. **Fields** refers to a **component ID** or a **list of component IDs**. You can fetch the ID from the **Component Attribute** panel in the Page Builder.
    3. Before using **this.show(fields)**, make sure the component is **hidden**. This can be done using **this.hide(fields)** or by **enabling** the **Hidden checkbox** in the Component Attribute panel.

#### Steps to use the methods for the Page Builder components

1. Go to Form Attribute :material-menu-right: Action Panel :material-menu-right: Setting :material-menu-right: (Mounted | refresh | click 'Add action').
2. Write the method/code as shown in the **Example** below.
3. Click on `Save`.
4. On the main screen click on `Save` again.
5. Click on `Preview` to see the code in action.
<img src= "/apps/components/img/datagrid12.png">

!!! Example

    1. `this.getValue(fieldName)`
        ```js
        var dataname = this.getValue('aggrid_nd93m43c');
        console.log('getValue', dataname);
        ```
    
    2. `this.getValues()`
        ```js
        var data = this.getValues();
        console.log(data);
        ```
    
    3. `this.getComponent('component_ID')`
        ```js
        var dataname = this.getComponent('aggrid_nd93m43c');
        console.log('getComponent', dataname);
        ```
    
    4. `this.setData`
        ```js
        this.setData(
        {
    	"grid_qwer": [
		{
			"make": "suzuki",
			"model": "Celica",
			"price": 350000,
			"date": "2019-01-01"
		},
		{
			"make": "audi",
			"model": "Mondeo",
			"price": 42000,
        }
        ]
        }
        )
        ```

!!! info Add multiple classes
    Use the following syntax to add multiple classes to a component:
    ```js
    this.addClassName('componentID', 'class1', 'class2')
    ```

## Config

| **Name**|**Description**|**Icon**|
|---------|---------------|--------|
|**ID**| The data-grid component's unique identifier|<img src= "/apps/components/img/input_id.png">|
|**Width**| [**Optional**] Width of the field|<img src= "/apps/components/img/input_width.png">|
|**Status Bar**|Displays information about the number of rows and columns|<img src= "/apps/components/img/datagrid_statusbar.png">|
|**Side Bar**|Displays the side bar with Columns and Filters|<img src= "/apps/components/img/datagrid_sidebar.png">|
|**Enable Range Selection**|Enable to select multiple cells in the data-grid and it provides you with minimum value, maximum value, average, sum, count|<img src= "/apps/components/img/datagrid_rangeselection.png">|
|**Suppress Context Menu**|When disabled, it disables the mouse right-click feature which has custom options like export into `.CSV` file or Excel, copy or copy with headers, etc. and instead the browser default and generic right-click options become available|<img src= "/apps/components/img/datagrid_suppress.png">|
|**Context Menu**|You can select from various options to add to your context menu. This option is ONLY effective if suppress Context Menu is Disabled|<img src= "/apps/components/img/datagrid_contextmenu.png">|
|**Attribute Action**|Enable **Data Binding** to connect the data to UI. <br> Enable **Hidden** action to hide the field|<img src= "/apps/components/img/datagrid_attributeaction.png">|

We're talking about **Column Config** separately as it's a comprehensive component. Click on `+` to add a new column.

1. **Basic**
      * **Field**: Write the Field name.
      * **Title**: Give the Title to your column.
      * **Hide**: Toggle this option to either hide or show the column.
      * **Sortable**: Enable to allow sorting of the table rows by this column.
      * **Checkbox Selection**: Allow users to choose multiple choices from a list.
      * **Cell Data Type**: Choose data type from various options like Auto, Text, Number, Boolean, Date, Date String.
      * **Auto Height**: Automatically adjusts the height of the column.
      * **Wrap Text**: Automatically adjusts the arrangement of text to fit within a specified area.
      * **Lock Visible**: It keeps key columns or rows always in view, even when scrolling, for focused data navigation and analysis.
      * **Lock Position**: Set the Lock Position to either **Left**, **Right** or **None**.
      * **Suppress Movable**: It locks the grid's layout, preventing manual reordering and ensuring consistent data presentation.

<img src= "/apps/components/img/datagrid_basic.png" width="400">

2.**Width**

   * **Width**: Enter the width of the column in pixels.

   * **Min Width**: Enter the minimum value width of the column in pixels.
  
   * **Max Width**: Enter the maximum value width of the column in pixels.
  
   * **Re-sizable**: Enable to resize the column width.

<img src= "/apps/components/img/datagrid_width.png" width="400">

3.**Value Format**
Value format in a data-grid is a feature that controls how raw data values are displayed within individual cells.

It allows you to customize the appearance of data to improve readability, highlight specific information, and ensure consistency across the grid.

<img src= "/apps/components/img/datagrid_valueformat.png" width="400">

4.**Display format**

   * **Format Type**: You can select the format options for a column from Date, Currency, Duration, Percent from Decimal, Percent from Number, Decimal, Second, Bytes.

   * **Link**:This property is used to turn the values in the column into links that emit the onLinkClicked event.

<img src= "/apps/components/img/datagrid_displayformat.png" width="400">

5.**Header**

   * **Header Checkbox Selection**: Refers to a feature in data tables or grids that allows you to select all or multiple rows by clicking a checkbox in the header row.

   * **Wrap Header Text**:Allows the text in header cells to automatically wrap onto multiple lines if it exceeds the available space.

<img src= "/apps/components/img/datagrid_header.png" width="400">

6.**Pivot**

   * **Pivot**: Allows you to dynamically rearrange and restructure the data by rotating the grid's axis. You can switch rows and columns to create different view of the information in the grid. You can also filter the required fields, which you wish to see on the screen.

   * **Enable Pivot**: Enable/Disable pivot mode.

<img src= "/apps/components/img/datagrid_header.png" width="400">

7.**Charts**

!!! note To use the Charts option, first enable the *Enable Range Selection* option. Click on *Preview*, select the values on the grid, right-click on the selected the area then Charts. Below are further filters you can apply on the charts under Column Config.

   * **Charts Data Type**:

       * Excluded: Data in columns marked as "excluded" aren't included in the visual representation of the chart.

       * Category: Data in columns marked as "category" are used to group data points into distinct categories or segments.

       * Series: Data in columns marked as "series" create separate lines or sets of data points within the chart, often for comparison purposes.

       * Time: Data in columns marked as "time" represent temporal information, often used for time-series charts that track trends or changes over time.

<img src= "/apps/components/img/datagrid_charts.png" width="400">

## First time User?

If you are using the Page Builder components on the ConnexCS platform for the first time, we request you to use our guide on <a href="https://docs.connexcs.com/apps/page-builder/#steps-to-use-components-in-the-page-builder" target="_blank">steps to use the Components</a>.