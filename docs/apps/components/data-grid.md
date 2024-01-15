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
|----------------------|---------------------------------------------------------------------|
| `onCellClicked`| The onCellClicked event occurs when the cell in a data grid is clicked|
| `onLinkClicked`| The onLinkClicked event occurs when the link is clicked|

### Methods

| **Name**| **Description**|**Parameters**|
|----------------------|---------------------------------------------------------------------|----|
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
         this.addClassName('aggrid_nd93m43c', 'abc')
         ```

    2. `this.removeClassName(fields, className)`
    ```js
    this.removeClassName('aggrid_nd93m43c', 'abc')
    ```
    
    3. `this.getValue(fieldName)`
    ```js
    var dataname = this.getValue('aggrid_nd93m43c');
    console.log('getValue', dataname);
    ```
    4. `this.getValues(fieldName)`
    ```js
    var data = this.getValues();
    console.log(data);
    ```
    5. `this.hide(fields)`
        ```js
        var fields= ['aggrid_nd93m43c']
        this.hide(fields)
        ```
    6. `this.show(fields)`
        ```js
        var fields= ['aggrid_nd93m43c']
        this.show(fields)
        ```
    7. `this.disable(['fields'])`
        ```js
        this.disable(['aggrid_nd93m43c'])
        ```
    8.`this.getValue('fieldName')`
        ```js
        var dataname = this.getValue('aggrid_nd93m43c');
        console.log('getValue',datanamee);
        ```

## Config

| **Name**|**Description**|**Icon**|
|---------------|----------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|
|**ID**| Data-grid's unique identifier|<img src= "/apps/components/img/input_id.png">|
|**Width**| [**Optional**] To set the width of the field|<img src= "/apps/components/img/input_width.png">|
|**Status Bar**|Displays information about the number of rows and columns|<img src= "/apps/components/img/datagrid_statusbar.png">|
|**Side Bar**|Displays the side bar with Columns and Filters|<img src= "/apps/components/img/datagrid_sidebar.png">|
|**Enable Range Selection**|Enable to select multiple cells in the data-grid and it provides you with minimum value, maximum value, average, sum, count|<img src= "/apps/components/img/datagrid_rangeselection.png">|
|**Suppress Context Menu**|When disabled, it enables the mouse right-click which has options like export into `.CSV` file or `Excel`, copy or copy with headers etc|<img src= "/apps/components/img/datagrid_suppress.png">|
|**Context Menu**|You can select from various options to add to your context menu|<img src= "/apps/components/img/datagrid_contextmenu.png">|
|**Attribute Action**|Enable **Data Binding** to connect the data to UI. <br> Enable **Hidden** to action to hide the field|<img src= "/apps/components/img/datagrid_attributeaction.png">|

We're talking about **Column Config** separately as it's a comprehensive component. Click on `+` to add a new column.

1. **Basic**
      * **Field**: Write the Field name.
      * **Title**: Give the Title to your column.
      * **Hide**: Toggle this option to either hide or show the column.
      * **Sortable**: Enable to sort the columns
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
  
   * **Resizable**: Enable to resize the column width.

<img src= "/apps/components/img/datagrid_width.png" width="400">

3.**Value Format**
Value format in a datagrid is a feature that controls how raw data values are displayed within individual cells.

It allows you to customize the appearance of data to improve readability, highlight specific information, and ensure consistency across the grid.

<img src= "/apps/components/img/datagrid_valueformat.png" width="400">

4.**Display format**
   
   * **Format Type**: You can select the format options for a column from Date, Currency, Duration, Percent from Decimal, Percent from Number, Decimal, Second, Bytes.
   
   * **Link**: which is used to link from one page to another.

<img src= "/apps/components/img/datagrid_displayformat.png" width="400">

5.**Header**

   * **Header Checkbox Selection**: a single checkbox, typically placed in the header row, allows you to select all rows (or filtered/current page rows) in the grid with a single click.

   * **Wrap Header Text**:Allows the text in header cells to automatically wrap onto multiple lines if it exceeds the available space.

<img src= "/apps/components/img/datagrid_header.png" width="400">

6.**Pivot**

   * **Pivot**: Allows you to dynamically rearrange and restructure the data by rotating the grid's axis, switching rows and columns to create different views and perspectives.

   * **Enable Pivot**: Enable/Disable pivot.

<img src= "/apps/components/img/datagrid_header.png" width="400">

7.**Charts**
   
   * **Charts Data Type**:
       
       * Excluded: Data in columns marked as "excluded" aren't included in the visual representation of the chart.
       
       * Category: Data in columns marked as "category" are used to group data points into distinct categories or segments.
       
       * Series: Data in columns marked as "series" create separate lines or sets of data points within the chart, often for comparison purposes.
       
       * Time: Data in columns marked as "time" represent temporal information, often used for time-series charts that track trends or changes over time.

<img src= "/apps/components/img/datagrid_charts.png" width="400">

!!! Info
    1. The **callback()function** is also called to verify success in the custom checkup method.

## Steps to use the Components

<a href="https://bani-appsection--connexcs-docs.netlify.app/apps/page-builder/#steps-to-use-components-in-the-page-builder" target="_blank">Click here</a> for the detailed steps on how to use the components.
