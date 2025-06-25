# Dynamic Content Module (DCM)

## Introduction

**DCM** is a templating or placeholder syntax used in ConnexCS Page Builder.
These are special placeholders (prefixed with `$`) that get replaced with real user or account data when a page is rendered.
They allow you to personalize content dynamically.

Each component in the Page Builder has their own modules.

!!! Example "Example"
    ```js
    this.$('button1').setLabel('hello')
    ```

## DCM for Page Builder Components

### Alert

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('alert_nbsalvtp').getID());`|alert_nbsalvtp|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|`if (customer balance > 100) { this.$('alert').hide();`|Hide the alert if balance is above 100|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (customer balance < 100) { this.$('alert').show();```|Show the alert if balance is below 100|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('alert').setloading(!0);`|This triggers the loading animation on the Alert component|

### Button

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('button_7uueb2rm').getID());`|button_7uueb2rm|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|`if (customer balance > 100) { this.$('button').hide();`|Hide the button if balance is above 100|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if ($customer.balance < 100) { this.$('button').show();```|Show the button if balance is below 100|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('button').setloading(!0);`|This triggers the loading animation on the button component|
|`setButtonLabel()`|Sets the label (**visible text**) on that button.|`this.$('componentID').setLabel('variable')`|`this.$('button').setLabel('hello')`|

### Card

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('card_2j40vlrh').getID());`|card_2j40vlrh|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|`if (customer balance > 100) { this.$('card').hide();`|Hide the card if balance is above 100|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if ($customer.balance < 100) { this.$('card').show();```|Show the card if balance is below 100|

### Cascader

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('cascader_2oqcetfs').getID());`|cascader_2oqcetfs|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```if (customer country === 'US') { this.$('cascader').hide(); }```|Hide the country selector if the user is already from the US|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (customer country) { this.$('cascader').hide(); }```|Show the country selector if no country is selected yet|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('cascader').setloading(!0);`|Shows the spinner or disables interaction while data loads|

### Chart

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`clear()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('cascader_2oqcetfs').getID());`|cascader_2oqcetfs|
|`dump()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```if (customer country === 'US') { this.$('cascader').hide(); }```|Hide the country selector if the user is already from the US|
|`getConnectedDataURL()`|Gets the URL of the connected data source (if bound to external data)|`this.$('componentID').getConnectedDataURL()|`console.log(this.$('myChart').getConnectedDataURL());`|Log the backend data source URL|
|`getDataURL()`|Returns a base64 PNG image of the current chart|`this.$('componentID').getDataURL()`|`let image = this.$('myChart').getDataURL();`|Export chart as image|
|`getHeight()`|Returns height of the chart (in pixels)|`this.$('componentID').getHeight()`|`console.log(this.$('myChart').getHeight());`|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('myChart').getID());`|echarts_p64dgi2b|
|`getWidth()`|Returns width of the chart (in pixels)|`this.$('componentID').getWidth()`|`console.log(this.$('myChart').getWidth());	`|Show the country selector if no country is selected yet|
|`hide()`|Hides the selected component from the user interface|`this.$('myChart).hide();`|`if (customer balance > 100) { this.$('alert').hide();`|Hide the alert if balance is above 100|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (customer balance < 100) { this.$('alert').show();```|Show the alert if balance is below 100|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('alert').setloading(!0);`|This triggers the loading animation on the Alert component|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|`if (customer balance > 100) { this.$('alert').hide();`|Hide the alert if balance is above 100|
|`push()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (customer balance < 100) { this.$('alert').show();```|Show the alert if balance is below 100|
|`refresh()`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('alert').setloading(!0);`|This triggers the loading animation on the Alert component|
|`resize()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|`if (customer balance > 100) { this.$('alert').hide();`|Hide the alert if balance is above 100|
|`setData()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (customer balance < 100) { this.$('alert').show();```|Show the alert if balance is below 100|

### Checkbox

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('cascader_2oqcetfs').getID());`|{checkbox_e5hw7ssn|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```if (customer country === 'US') { this.$('cascader').hide(); }```|Hide the country selector if the user is already from the US|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (customer country) { this.$('cascader').hide(); }```|Show the country selector if no country is selected yet|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('cascader').setloading(!0);`|Shows the spinner or disables interaction while data loads|

### Collapse

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('cascader_2oqcetfs').getID());`|collapse_8phtdr17|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```if (customer country === 'US') { this.$('cascader').hide(); }```|Hide the country selector if the user is already from the US|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (customer country) { this.$('cascader').hide(); }```|Show the country selector if no country is selected yet|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('cascader').setloading(!0);`|Shows the spinner or disables interaction while data loads|
|`setActive()`|||

### Color

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('cascader_2oqcetfs').getID());`|color_7twlgxqb|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```if (customer country === 'US') { this.$('cascader').hide(); }```|Hide the country selector if the user is already from the US|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (customer country) { this.$('cascader').hide(); }```|Show the country selector if no country is selected yet|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('cascader').setloading(!0);`|Shows the spinner or disables interaction while data loads|

### Data Grid

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('cascader_2oqcetfs').getID());`|aggrid_y09a12fh|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```if (customer country === 'US') { this.$('cascader').hide(); }```|Hide the country selector if the user is already from the US|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (customer country) { this.$('cascader').hide(); }```|Show the country selector if no country is selected yet|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('cascader').setloading(!0);`|Shows the spinner or disables interaction while data loads|
|`getSelectedRows()`||
|`setData`||

### Date

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('cascader_2oqcetfs').getID());`|date_pdik5uqa|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```if (customer country === 'US') { this.$('cascader').hide(); }```|Hide the country selector if the user is already from the US|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (customer country) { this.$('cascader').hide(); }```|Show the country selector if no country is selected yet|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('cascader').setloading(!0);`|Shows the spinner or disables interaction while data loads|

### Dialog dialog_oi7y6aba

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`clickClick()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('cascader_2oqcetfs').getID());`|dialog_oi7y6aba|
|`clickClick()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```if (customer country === 'US') { this.$('cascader').hide(); }```|Hide the country selector if the user is already from the US|
|`close()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (customer country) { this.$('cascader').hide(); }```|Show the country selector if no country is selected yet|
|`confirmLLoading()`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('cascader').setloading(!0);`|Shows the spinner or disables interaction while data loads|
|`getValues()`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('cascader').setloading(!0);`|Shows the spinner or disables interaction while data loads|
|`open()`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('cascader').setloading(!0);`|Shows the spinner or disables interaction while data loads|
|`setData()`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('cascader').setloading(!0);`|Shows the spinner or disables interaction while data loads|

### Divider divider_v4ey5q0l

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('cascader_2oqcetfs').getID());`|date_pdik5uqa|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```if (customer country === 'US') { this.$('cascader').hide(); }```|Hide the country selector if the user is already from the US|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (customer country) { this.$('cascader').hide(); }```|Show the country selector if no country is selected yet|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('cascader').setloading(!0);`|Shows the spinner or disables interaction while data loads|

### Editor editor_23j60xn3

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('cascader_2oqcetfs').getID());`|date_pdik5uqa|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```if (customer country === 'US') { this.$('cascader').hide(); }```|Hide the country selector if the user is already from the US|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (customer country) { this.$('cascader').hide(); }```|Show the country selector if no country is selected yet|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('cascader').setloading(!0);`|Shows the spinner or disables interaction while data loads|

### Grid grid_k5y3127h

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('cascader_2oqcetfs').getID());`|date_pdik5uqa|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```if (customer country === 'US') { this.$('cascader').hide(); }```|Hide the country selector if the user is already from the US|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (customer country) { this.$('cascader').hide(); }```|Show the country selector if no country is selected yet|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('cascader').setloading(!0);`|Shows the spinner or disables interaction while data loads|

### Group group_con7xndw

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('cascader_2oqcetfs').getID());`|date_pdik5uqa|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```if (customer country === 'US') { this.$('cascader').hide(); }```|Hide the country selector if the user is already from the US|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (customer country) { this.$('cascader').hide(); }```|Show the country selector if no country is selected yet|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('cascader').setloading(!0);`|Shows the spinner or disables interaction while data loads|

### HTML html_xon9lq1k

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('cascader_2oqcetfs').getID());`|date_pdik5uqa|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```if (customer country === 'US') { this.$('cascader').hide(); }```|Hide the country selector if the user is already from the US|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (customer country) { this.$('cascader').hide(); }```|Show the country selector if no country is selected yet|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('cascader').setloading(!0);`|Shows the spinner or disables interaction while data loads|

### IFrame iframe_95v831jv

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('cascader_2oqcetfs').getID());`|date_pdik5uqa|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```if (customer country === 'US') { this.$('cascader').hide(); }```|Hide the country selector if the user is already from the US|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (customer country) { this.$('cascader').hide(); }```|Show the country selector if no country is selected yet|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('cascader').setloading(!0);`|Shows the spinner or disables interaction while data loads|

### Inline inline_vuse49xr

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('cascader_2oqcetfs').getID());`|date_pdik5uqa|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```if (customer country === 'US') { this.$('cascader').hide(); }```|Hide the country selector if the user is already from the US|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (customer country) { this.$('cascader').hide(); }```|Show the country selector if no country is selected yet|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('cascader').setloading(!0);`|Shows the spinner or disables interaction while data loads|

### Input input_amrpraqw

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('cascader_2oqcetfs').getID());`|date_pdik5uqa|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```if (customer country === 'US') { this.$('cascader').hide(); }```|Hide the country selector if the user is already from the US|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (customer country) { this.$('cascader').hide(); }```|Show the country selector if no country is selected yet|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('cascader').setloading(!0);`|Shows the spinner or disables interaction while data loads|

### Link link_l312yjzl

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('cascader_2oqcetfs').getID());`|date_pdik5uqa|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```if (customer country === 'US') { this.$('cascader').hide(); }```|Hide the country selector if the user is already from the US|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (customer country) { this.$('cascader').hide(); }```|Show the country selector if no country is selected yet|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('cascader').setloading(!0);`|Shows the spinner or disables interaction while data loads|

### Number number_8g52wzxh

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('cascader_2oqcetfs').getID());`|date_pdik5uqa|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```if (customer country === 'US') { this.$('cascader').hide(); }```|Hide the country selector if the user is already from the US|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (customer country) { this.$('cascader').hide(); }```|Show the country selector if no country is selected yet|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('cascader').setloading(!0);`|Shows the spinner or disables interaction while data loads|

### Page Layout page-layout_b6e5ay1d

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('cascader_2oqcetfs').getID());`|date_pdik5uqa|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```if (customer country === 'US') { this.$('cascader').hide(); }```|Hide the country selector if the user is already from the US|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (customer country) { this.$('cascader').hide(); }```|Show the country selector if no country is selected yet|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('cascader').setloading(!0);`|Shows the spinner or disables interaction while data loads|

### Pagination 
pagination_cyzs7gol

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('cascader_2oqcetfs').getID());`|date_pdik5uqa|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```if (customer country === 'US') { this.$('cascader').hide(); }```|Hide the country selector if the user is already from the US|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (customer country) { this.$('cascader').hide(); }```|Show the country selector if no country is selected yet|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('cascader').setloading(!0);`|Shows the spinner or disables interaction while data loads|

### Radio radio_fikucxql

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('cascader_2oqcetfs').getID());`|date_pdik5uqa|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```if (customer country === 'US') { this.$('cascader').hide(); }```|Hide the country selector if the user is already from the US|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (customer country) { this.$('cascader').hide(); }```|Show the country selector if no country is selected yet|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('cascader').setloading(!0);`|Shows the spinner or disables interaction while data loads|

### Rate rate_9qqkjfni

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('cascader_2oqcetfs').getID());`|date_pdik5uqa|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```if (customer country === 'US') { this.$('cascader').hide(); }```|Hide the country selector if the user is already from the US|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (customer country) { this.$('cascader').hide(); }```|Show the country selector if no country is selected yet|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('cascader').setloading(!0);`|Shows the spinner or disables interaction while data loads|

### Select select_71qo53hk

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('cascader_2oqcetfs').getID());`|date_pdik5uqa|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```if (customer country === 'US') { this.$('cascader').hide(); }```|Hide the country selector if the user is already from the US|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (customer country) { this.$('cascader').hide(); }```|Show the country selector if no country is selected yet|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('cascader').setloading(!0);`|Shows the spinner or disables interaction while data loads|

### Slider slider_fkqubhrn

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('cascader_2oqcetfs').getID());`|date_pdik5uqa|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```if (customer country === 'US') { this.$('cascader').hide(); }```|Hide the country selector if the user is already from the US|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (customer country) { this.$('cascader').hide(); }```|Show the country selector if no country is selected yet|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('cascader').setloading(!0);`|Shows the spinner or disables interaction while data loads|

### Statistic statistic_bej7nxlx

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('cascader_2oqcetfs').getID());`|date_pdik5uqa|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```if (customer country === 'US') { this.$('cascader').hide(); }```|Hide the country selector if the user is already from the US|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (customer country) { this.$('cascader').hide(); }```|Show the country selector if no country is selected yet|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('cascader').setloading(!0);`|Shows the spinner or disables interaction while data loads|

### Subform 
table_wkphbd43

|`enable()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('cascader_2oqcetfs').getID());`|date_pdik5uqa|
|`disable()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```if (customer country === 'US') { this.$('cascader').hide(); }```|Hide the country selector if the user is already from the US|

### Subform+ 
subform_mz6h60h7

|`enable()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('cascader_2oqcetfs').getID());`|date_pdik5uqa|
|`disable()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```if (customer country === 'US') { this.$('cascader').hide(); }```|Hide the country selector if the user is already from the US|

### Switch switch_lvbm1m19

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('cascader_2oqcetfs').getID());`|date_pdik5uqa|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```if (customer country === 'US') { this.$('cascader').hide(); }```|Hide the country selector if the user is already from the US|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (customer country) { this.$('cascader').hide(); }```|Show the country selector if no country is selected yet|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('cascader').setloading(!0);`|Shows the spinner or disables interaction while data loads|

### Table report_be2krwix

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('cascader_2oqcetfs').getID());`|date_pdik5uqa|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```if (customer country === 'US') { this.$('cascader').hide(); }```|Hide the country selector if the user is already from the US|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (customer country) { this.$('cascader').hide(); }```|Show the country selector if no country is selected yet|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('cascader').setloading(!0);`|Shows the spinner or disables interaction while data loads|

### Textarea textarea_cy7wd7ki

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('cascader_2oqcetfs').getID());`|date_pdik5uqa|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```if (customer country === 'US') { this.$('cascader').hide(); }```|Hide the country selector if the user is already from the US|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (customer country) { this.$('cascader').hide(); }```|Show the country selector if no country is selected yet|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('cascader').setloading(!0);`|Shows the spinner or disables interaction while data loads|

### Text text_jjzhkvx5

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('cascader_2oqcetfs').getID());`|date_pdik5uqa|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```if (customer country === 'US') { this.$('cascader').hide(); }```|Hide the country selector if the user is already from the US|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (customer country) { this.$('cascader').hide(); }```|Show the country selector if no country is selected yet|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('cascader').setloading(!0);`|Shows the spinner or disables interaction while data loads|

### Time time_jbzt4qae

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('cascader_2oqcetfs').getID());`|date_pdik5uqa|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```if (customer country === 'US') { this.$('cascader').hide(); }```|Hide the country selector if the user is already from the US|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (customer country) { this.$('cascader').hide(); }```|Show the country selector if no country is selected yet|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('cascader').setloading(!0);`|Shows the spinner or disables interaction while data loads|

### Transfer transfer_egd2s5ct

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('cascader_2oqcetfs').getID());`|date_pdik5uqa|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```if (customer country === 'US') { this.$('cascader').hide(); }```|Hide the country selector if the user is already from the US|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (customer country) { this.$('cascader').hide(); }```|Show the country selector if no country is selected yet|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('cascader').setloading(!0);`|Shows the spinner or disables interaction while data loads|

### Treeselect treeselect_sym561lx

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('cascader_2oqcetfs').getID());`|date_pdik5uqa|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```if (customer country === 'US') { this.$('cascader').hide(); }```|Hide the country selector if the user is already from the US|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (customer country) { this.$('cascader').hide(); }```|Show the country selector if no country is selected yet|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('cascader').setloading(!0);`|Shows the spinner or disables interaction while data loads|

### Webphone webphone_rspavhts

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('cascader_2oqcetfs').getID());`|date_pdik5uqa|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```if (customer country === 'US') { this.$('cascader').hide(); }```|Hide the country selector if the user is already from the US|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (customer country) { this.$('cascader').hide(); }```|Show the country selector if no country is selected yet|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('cascader').setloading(!0);`|Shows the spinner or disables interaction while data loads|