# Document Content Model (DCM)

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

| Method name | Description | Syntax |
|-------------|-------------|--------|
| `getId()` | Returns the component's unique ID | `this.$('componentID').getId();` |
| `hide()` | Hides the component from the UI | `this.$('componentID').hide();` |
| `show()` | Shows a previously hidden component | `this.$('componentID').show();` |
| `loading(true/false)`| Toggles loading spinner / state on the component | `this.$('componentID').loading(true);` |

## Components

### Alert

|Method name|Description|Syntax|
|-----------|-----------|------|
|`setLabel()`|Set visible label|`this.$('componentID').setLabel('text')`|

See [Common Methods](#common-methods) for **`getId`/`hide`/`show`** usage.

### Button

|Method name|Description|Syntax|
|-----------|-----------|------|
|`setButtonLabel()`|Sets the label (**visible text**) on that button.|`this.$('componentID').setLabel('variable')`|

See [Common Methods](#common-methods) for **`getId`/`hide`/`show`/`loading`** usage.

### Card

See [Common Methods](#common-methods) for **`getId`/`hide`/`show`/`loading`** usage.

### Cascader

See [Common Methods](#common-methods) for **`getId`/`hide`/`show`** usage.

### Chart

|Method name|Description|Syntax|
|----|-----------|------|
|`clear()`|Removes all data and resets the chart to a blank state| `this.$('componentID').clear();`|
|`dump()`|Outputs debug info about the chart to the console| `this.$('componentID').dump();`|Logs internal chart data/configuration for debugging|
|`getConnectedDataURL()`|Returns data URL (base64) of connected charts|`this.$('componentID').getConnectedDataURL();`|Useful for exporting connected chart images|
|`getDataURL()`|Returns chart image as base64-encoded `png`|`this.$('componentID').getDataURL();`|Allows downloading or exporting chart as an image|
|`getHeight()`|Returns height of the chart in `pixels`|`this.$('componentID').getHeight();`| Returns an integer height value, e.g., `400`|
|`getWidth()`|Returns width of the chart in `pixels`|`this.$('componentID').getWidth();`|Returns an integer width value, e.g.,`600`|
|`push()`|Dynamically pushes the chart into view |`this.$('componentID').push();`|Makes the component visible or adds it to the layout dynamically|
|`refresh()`| Refreshes or reloads the chart's data or visuals|`this.$('componentID').refresh();`|Re-renders the chart, often used after updating data|
|`resize()`|Adjusts the chart’s dimensions based on container or viewport|`this.$('componentID').resize();`| Ensures chart fits the current layout responsively|
|`setData()`|Injects new data into the chart programmatically|`this.$('componentID').setData(dataObject);`|Updates the chart with new data (usually JSON format)|

See [Common Methods](#common-methods) for **`getId`/`hide`/`show`/`loading`** usage.

### Checkbox

See [Common Methods](#common-methods) for **`getId`/`hide`/`show`** usage.

### Collapse

|Method name|Description|Syntax|
|----|-----------|------|
|`setActive()`|Programmatically expands a specific panel (by index or key)|`this.$('componentID').setActive(indexOrKey);`|

See [Common Methods](#common-methods) for **`getId`/`hide`/`show`/`loading`** usage.

### Color

See [Common Methods](#common-methods) for **`getId`/`hide`/`show`** usage.

### Data Grid

|Method name|Description|Syntax|
|----|-----------|------|
|`getSelectedRows()`|Gets currently selected rows as an array of objects|`this.$('componentID').getSelectedRows();`|
|`setData`|Sets new data into the grid|`this.$('componentID').setData(dataArray);`|

See [Common Methods](#common-methods) for **`getId`/`hide`/`show`** usage.

### Date

See [Common Methods](#common-methods) for **`getId`/`hide`/`show`** usage.

### Dialog

|Method name|Description|Syntax|
|----|-----------|------|
|`clickClick()`|Simulates a click on the confirm (OK) button inside the dialog|`this.$('componentID').clickClick();`|
|`close()`|Closes the dialog box|`this.$('componentID').close();`|
|`confirmLoading()`|Shows a loading spinner on the confirm (OK) button|`this.$('componentID').confirmLoading(true);`|
|`getValues()`|Retrieves all input values from fields inside the dialog|`this.$('componentID').getValues();`|
|`open()`|Opens (shows) the dialog box|`this.$('componentID').open();`|
|`setData()`|Pre-fills dialog fields with provided data|`this.$('componentID').setData(data);`|

### Divider

See [Common Methods](#common-methods) for **`getId`/`hide`/`show`** usage.

### Editor

See [Common Methods](#common-methods) for **`getId`/`hide`/`show`** usage.

### Grid

See [Common Methods](#common-methods) for **`getId`/`hide`/`show`/`loading`** usage.

### Group

See [Common Methods](#common-methods) for **`getId`/`hide`/`show`** usage.

### HTML

See [Common Methods](#common-methods) for **`getId`/`hide`/`show`/`loading`** usage.

### IFrame

See [Common Methods](#common-methods) for **`getId`/`hide`/`show`** usage.

### Inline

See [Common Methods](#common-methods) for **`getId`/`hide`/`show`/`loading`** usage.

### Input

See [Common Methods](#common-methods) for **`getId`/`hide`/`show`/`loading`** usage.

### Link

See [Common Methods](#common-methods) for **`getId`/`hide`/`show`** usage.

### Number

See [Common Methods](#common-methods) for **`getId`/`hide`/`show`** usage.

### Page Layout

See [Common Methods](#common-methods) for **`getId`/`hide`/`show`/`loading`** usage.

### Pagination

See [Common Methods](#common-methods) for **`getId`/`hide`/`show`** usage.

### Radio

See [Common Methods](#common-methods) for **`getId`/`hide`/`show`** usage.

### Rate

See [Common Methods](#common-methods) for **`getId`/`hide`/`show`** usage.

### Select

See [Common Methods](#common-methods) for **`getId`/`hide`/`show`** usage.

### Slider

See [Common Methods](#common-methods) for **`getId`/`hide`/`show`** usage.

### Statistic

See [Common Methods](#common-methods) for **`getId`/`hide`/`show`/`loading`** usage.

### Steps

See [Common Methods](#common-methods) for **`getId`/`hide`/`show`/`loading`** usage.

### Subform

|Method name|Description|Syntax|
|----|-----------|------|
|`enable()`|Makes the Sub-Form editable|`this.$('componentID').enable();`|
|`disable()`|Makes the Sub-Form read-only|`this.$('componentID').disable();`|

### Subform+

|Method name|Description|Syntax|
|----|-----------|------|
|`enable()`|Makes the entire Subform+ editable|`this.$('componentID').enable();`|
|`disable()`|Disables the Subform+ making it read-only|`this.$('componentID').disable();`|

### Switch

See [Common Methods](#common-methods) for **`getId`/`hide`/`show`** usage.

### Table

See [Common Methods](#common-methods) for **`getId`/`hide`/`show`/`loading`** usage.

### Tabs

See [Common Methods](#common-methods) for **`getId`/`hide`/`show`/`loading`** usage.

### Textarea

See [Common Methods](#common-methods) for **`getId`/`hide`/`show`** usage.

### Text

See [Common Methods](#common-methods) for **`getId`/`hide`/`show`** usage.

### Time

See [Common Methods](#common-methods) for **`getId`/`hide`/`show`** usage.

### Transfer

See [Common Methods](#common-methods) for **`getId`/`hide`/`show`** usage.

### Treeselect

See [Common Methods](#common-methods) for **`getId`/`hide`/`show`** usage.

### Webphone

See [Common Methods](#common-methods) for **`getId`/`hide`/`show`** usage.
