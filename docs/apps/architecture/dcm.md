## Introduction

**DCM** is a templating or placeholder syntax used in ConnexCS Page Builder.
These are special placeholders (prefixed with `$`) that get replaced with real user or account data when a page is rendered.
They allow you to personalize content dynamically.

Each component in the Page Builder has their own modules.

!!! Example "Example"
    ```js
    this.$('button1').setLabel('hello')
    ```

## Common Methods

Use these methods across most Page Builder components. Reference them from component tables (component tables should only include component-specific methods).

| Method name | Description | Syntax | Example | Notes |
|-------------|-------------|--------|---------|-------|
| `getID()` | Returns the component's unique ID | `this.$('componentID').getID();` | `console.log(this.$('button').getID());` | Common to all components |
| `hide()` | Hides the component from the UI | `this.$('componentID').hide();` | `this.$('alert').hide();` | Use to toggle visibility client-side |
| `show()` | Shows a previously hidden component | `this.$('componentID').show();` | `this.$('alert').show();` | Use to restore visibility |
| `setloading(true/false)` | Toggles loading spinner / state on the component | `this.$('componentID').setloading(true);` | `this.$('button').setloading(!0);` | Components may implement spinner visuals |

### Alert

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`setLabel()`|Set visible label|`this.$('componentID').setLabel('text')`|`this.$('alert').setLabel('Low balance')`|Sets alert label|

See [Common Methods](#common-methods) for **`getID`/`hide`/`show`/`setloading`** usage.

### Button

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`setButtonLabel()`|Sets the label (**visible text**) on that button.|`this.$('componentID').setLabel('variable')`|`this.$('button').setLabel('hello')`|

See [Common Methods](#common-methods) for **`getID`/`hide`/`show`/`setloading`** usage.

### Card

See [Common Methods](#common-methods) for **`getID`/`hide`/`show`** usage.

### Cascader

See [Common Methods](#common-methods) for **`getID`/`hide`/`show`/`setloading`** usage.

### Chart

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`clear()`|Clears the chart’s data and visuals| `this.$('componentID').clear();`| `this.$('chart').clear();`|Removes all data and resets the chart to a blank state|
|`dump()`|Outputs debug info about the chart to the console| `this.$('componentID').dump();`| `this.$('chart').dump();`|Logs internal chart data/configuration for debugging|
|`getConnectedDataURL()`|Returns data URL (base64) of connected charts|`this.$('componentID').getConnectedDataURL();`|`console.log(this.$('chart').getConnectedDataURL());`|Useful for exporting connected chart images|
|`getDataURL()`|Returns chart image as base64-encoded `png`|`this.$('componentID').getDataURL();`| `console.log(this.$('chart').getDataURL());`|Allows downloading or exporting chart as an image|
|`getHeight()`|Returns height of the chart in `pixels`|`this.$('componentID').getHeight();`| `console.log(this.$('chart').getHeight());`| Returns an integer height value, e.g., `400`|
|`getWidth()`|Returns width of the chart in `pixels`|`this.$('componentID').getWidth();`|`console.log(this.$('chart').getWidth());`|Returns an integer width value, e.g.,`600`|
|`push()`|Dynamically pushes the chart into view |`this.$('componentID').push();`|`this.$('chart').push();`|Makes the component visible or adds it to the layout dynamically|
|`refresh()`| Refreshes or reloads the chart's data or visuals|`this.$('componentID').refresh();`|`this.$('chart').refresh();`|Re-renders the chart, often used after updating data|
|`resize()`|Adjusts the chart’s dimensions based on container or viewport|`this.$('componentID').resize();`|`this.$('chart').resize();`| Ensures chart fits the current layout responsively|
|`setData()`|Injects new data into the chart programmatically|`this.$('componentID').setData(dataObject);`|`this.$('Chart').setData({ xAxis: { data: ['A', 'B', 'C'] }, yAxis: {}, series: [{ type: 'bar', data: [10, 20, 30] }] });`|Updates the chart with new data (usually JSON format)|

See [Common Methods](#common-methods) for **`getID`/`hide`/`show`/`setloading`** usage.

### Checkbox

See [Common Methods](#common-methods) for **`getID`/`hide`/`show`/`setloading`** usage.

### Collapse

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`setActive()`|Programmatically expands a specific panel (by index or key)|`this.$('componentID').setActive(indexOrKey);`|`this.$('collapse').setActive('orderDetails');`|Automatically open the `orderDetails` panel after selecting an order|

See [Common Methods](#common-methods) for **`getID`/`hide`/`show`/`setloading`** usage.

### Color

See [Common Methods](#common-methods) for **`getID`/`hide`/`show`/`setloading`** usage.

### Data Grid

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getSelectedRows()`|Gets currently selected rows as an array of objects|`this.$('componentID').getSelectedRows();`|```const selected = this.$('customerGrid').getSelectedRows();```|Stores the selected rows in a variable for further use (e.g., delete or export)|
|`setData`|Sets new data into the grid|`this.$('componentID').setData(dataArray);`|```this.$('customerGrid').setData(this.$('filteredCustomers').getValue());```|Loads filtered customer data from another component into the grid|

See [Common Methods](#common-methods) for **`getID`/`hide`/`show`/`setloading`** usage.

### Date

See [Common Methods](#common-methods) for **`getID`/`hide`/`show`/`setloading`** usage.
### Dialog

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`clickClick()`|Simulates a click on the confirm (OK) button inside the dialog|`this.$('componentID').clickClick();`|`const { email, name } = this.$('userDialog').getValues(); if (email && name) this.$('dialog').clickClick();`|Automatically clicks the `Confirm` button in the dialog if both email and name fields are filled|
|`close()`|Closes the dialog box|`this.$('componentID').close();`|```this.$('userDialog').close();```|Closes the dialog when user clicks cancel or after saving|
|`confirmLLoading()`|Shows a loading spinner on the confirm (OK) button|`this.$('componentID').confirmLoading(true);`|`this.$('userDialog').confirmLoading(true);`|Shows a loading spinner while saving form data|
|`getValues()`|Retrieves all input values from fields inside the dialog|`this.$('componentID').getValues();`|`const formData = this.$('userDialog').getValues();`|Gets the current form data inside the dialog — for validation or API calls|
|`open()`|Opens (shows) the dialog box|`this.$('componentID').open();`|`this.$('dialog').open();`|Opens the dialog — e.g., to edit a user's details|
|`setData()`|Pre-fills dialog fields with provided data|`this.$('componentID').setData(data);`|`this.$('dialog').setData(this.$('selectedUser').getValue());`|Loads selected user data into the dialog for editing|

### Divider
See [Common Methods](#common-methods) for **`getID`/`hide`/`show`/`setloading`** usage.

### Editor

See [Common Methods](#common-methods) for **`getID`/`hide`/`show`/`setloading`** usage.

### Grid

See [Common Methods](#common-methods) for **`getID`/`hide`/`show`/`setloading`** usage.

### Group

See [Common Methods](#common-methods) for **`getID`/`hide`/`show`/`setloading`** usage.

### HTML

See [Common Methods](#common-methods) for **`getID`/`hide`/`show`/`setloading`** usage.

### IFrame

See [Common Methods](#common-methods) for **`getID`/`hide`/`show`/`setloading`** usage.

### Inline

See [Common Methods](#common-methods) for **`getID`/`hide`/`show`/`setloading`** usage.

### Input

See [Common Methods](#common-methods) for **`getID`/`hide`/`show`/`setloading`** usage.

### Link

See [Common Methods](#common-methods) for **`getID`/`hide`/`show`/`setloading`** usage.

### Number

See [Common Methods](#common-methods) for **`getID`/`hide`/`show`/`setloading`** usage.

### Page Layout

See [Common Methods](#common-methods) for **`getID`/`hide`/`show`/`setloading`** usage.

### Pagination

See [Common Methods](#common-methods) for **`getID`/`hide`/`show`/`setloading`** usage.

### Radio

See [Common Methods](#common-methods) for **`getID`/`hide`/`show`/`setloading`** usage.

### Rate

See [Common Methods](#common-methods) for **`getID`/`hide`/`show`/`setloading`** usage.

### Select

See [Common Methods](#common-methods) for **`getID`/`hide`/`show`/`setloading`** usage.

### Slider

See [Common Methods](#common-methods) for **`getID`/`hide`/`show`/`setloading`** usage.

### Statistic

See [Common Methods](#common-methods) for **`getID`/`hide`/`show`/`setloading`** usage.

### Steps

See [Common Methods](#common-methods) for **`getID`/`hide`/`show`/`setloading`** usage.

### Subform

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`enable()`|Makes the Sub-Form editable|`this.$('componentID').enable();`|`this.$('addressList').enable();`|Enables the address list sub-form for editing|
|`disable()`|Makes the Sub-Form read-only|`this.$('componentID').disable();`|```this.$('employeeRecords').disable();```|Disables editing in the employee records sub-form after submission|

### Subform+

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`enable()`|Makes the entire Subform+ editable|`this.$('componentID').getID();`|`this.$('addressesForm').enable();`|Allows the user to edit the list of addresses|
|`disable()`|Disables the Subform+ making it read-only|`this.$('componentID').disable();`|```this.$('educationForm').disable();```|Prevents users from modifying education history after submission|

### Switch

See [Common Methods](#common-methods) for **`getID`/`hide`/`show`/`setloading`** usage.

### Table

See [Common Methods](#common-methods) for **`getID`/`hide`/`show`/`setloading`** usage.

### Tabs

See [Common Methods](#common-methods) for **`getID`/`hide`/`show`/`setloading`** usage.

### Textarea

See [Common Methods](#common-methods) for **`getID`/`hide`/`show`/`setloading`** usage.

### Text

See [Common Methods](#common-methods) for **`getID`/`hide`/`show`/`setloading`** usage.

### Time

See [Common Methods](#common-methods) for **`getID`/`hide`/`show`/`setloading`** usage.

### Transfer

See [Common Methods](#common-methods) for **`getID`/`hide`/`show`/`setloading`** usage.

### Treeselect

See [Common Methods](#common-methods) for **`getID`/`hide`/`show`/`setloading`** usage.

### Webphone

See [Common Methods](#common-methods) for **`getID`/`hide`/`show`/`setloading`** usage.
