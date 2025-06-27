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
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('alert').getID());`|alert_nbsalvtp|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|`if (customer balance > 100) { this.$('alert').hide();`|Hide the alert if balance is above 100|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (customer balance < 100) { this.$('alert').show();```|Show the alert if balance is below 100|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('alert').setloading(!0);`|This triggers the loading animation on the Alert component|

### Button

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('button').getID());`|button_7uueb2rm|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|`if (customer balance > 100) { this.$('button').hide();`|Hide the button if balance is above 100|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (customer balance < 100) { this.$('button').show();```|Show the button if balance is below 100|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('button').setloading(!0);`|This triggers the loading animation on the button component|
|`setButtonLabel()`|Sets the label (**visible text**) on that button.|`this.$('componentID').setLabel('variable')`|`this.$('button').setLabel('hello')`|

### Card

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('card').getID());`|card_2j40vlrh|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|`if (customer balance > 100) { this.$('card').hide();`|Hide the card if balance is above 100|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (customer balance < 100) { this.$('card').show();```|Show the card if balance is below 100|

### Cascader

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('cascader').getID());`|cascader_2oqcetfs|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```if (customer country === 'US') { this.$('cascader').hide(); }```|Hide the country selector if the user is already from the US|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (customer country) { this.$('cascader').show(); }```|Show the country selector if no country is selected yet|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('cascader').setloading(!0);`|Shows the spinner while data loads|

### Chart

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`clear()`|Clears the chart’s data and visuals| `this.$('componentID').clear();`| `this.$('chart').clear();`|Removes all data and resets the chart to a blank state|
|`dump()`|Outputs debug info about the chart to the console| `this.$('componentID').dump();`| `this.$('chart').dump();`|Logs internal chart data/configuration for debugging|
|`getConnectedDataURL()`|Returns data URL (base64) of connected charts|`this.$('componentID').getConnectedDataURL();`|`console.log(this.$('chart').getConnectedDataURL());`|Useful for exporting connected chart images|
|`getDataURL()`|Returns chart image as base64-encoded `png`|`this.$('componentID').getDataURL();`| `console.log(this.$('chart').getDataURL());`|Allows downloading or exporting chart as an image|
|`getHeight()`|Returns height of the chart in `pixels`|`this.$('componentID').getHeight();`| `console.log(this.$('chart').getHeight());`| Returns an integer height value, e.g., `400`|
|`getID()`|Returns the component’s unique ID|`this.$('componentID').getID();`| `console.log(this.$('chart').getID());`|echarts_p64dgi2b|
|`getWidth()`|Returns width of the chart in `pixels`|`this.$('componentID').getWidth();`|`console.log(this.$('chart').getWidth());`|Returns an integer width value, e.g.,`600`|
|`hide()`|Hides the chart component from the UI|`this.$('componentID').hide();`|`this.$('chart').hide();`|Chart disappears from the view but is not removed|
|`show()`|Displays the chart if it was previously hidden|`this.$('componentID').show();`|`this.$('chart').show();`|Makes the chart visible again|
|`loading(true/false)`|Shows or hides the chart’s loading spinner|`this.$('componentID').setloading(true/false);`|`this.$('chart').setloading(!0);`|Shows loading animation|
|`push()`|Dynamically pushes the chart into view |`this.$('componentID').push();`|`this.$('chart').push();`|Makes the component visible or adds it to the layout dynamically|
|`refresh()`| Refreshes or reloads the chart's data or visuals|`this.$('componentID').refresh();`|`this.$('chart').refresh();`|Re-renders the chart, often used after updating data|
|`resize()`|Adjusts the chart’s dimensions based on container or viewport|`this.$('componentID').resize();`|`this.$('chart').resize();`| Ensures chart fits the current layout responsively|
|`setData()`|Injects new data into the chart programmatically|`this.$('componentID').setData(dataObject);`|`this.$('Chart').setData({ xAxis: { data: ['A', 'B', 'C'] }, yAxis: {}, series: [{ type: 'bar', data: [10, 20, 30] }] });`|Updates the chart with new data (usually JSON format)|

### Checkbox

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('checkbox').getID());`|checkbox_e5hw7ssn|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```if (this.$('userType').getValue() === 'admin') this.$('checkbox').hide();```|Hides the checkbox if the user type is `admin`|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (this.$('hasConsent').getValue()) this.$('checkbox').show();```|Shows the checkbox if the `hasConsent` checkbox is checked|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('checkbox').setloading(!0);`|Shows a loading spinner on the checkbox|

### Collapse

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('collapse').getID());`|collapse_8phtdr17|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```if (!this.$('showDetails').getValue()) this.$('collapse').hide();```|Hides the collapse section if `showDetails` checkbox is not checked|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (this.$('userRole').getValue() === 'manager') this.$('collapse').show();```|Shows the collapse section if the user role is manager|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('collapse').setloading(!0);`|Displays a loading spinner on the collapse section (e.g., while fetching data)|
|`setActive()`|Programmatically expands a specific panel (by index or key)|`this.$('componentID').setActive(indexOrKey);`|`this.$('collapse').setActive('orderDetails');`|Automatically open the `orderDetails` panel after selecting an order|

### Color

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('color').getID());`|color_7twlgxqb|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```if (!this.$('useCustomColor').getValue()) this.$('color').hide();```|Hides the color picker if the `useCustomColor` checkbox is not checked.|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (this.$('themeOption').getValue() === 'custom') this.$('color').show();```|Shows the color picker only if the selected theme option is `custom`|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`	if (!this.$('themeColors').getValue()) this.$('cascader').setloading(!0);`|Shows loading spinner if no theme colors are loaded yet|

### Data Grid

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('aggrid').getID());`|aggrid_y09a12fh|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```if (!this.$('showResults').getValue()) this.$('aggrid').hide();```|Hides the grid if the `showResults` toggle is off|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (this.$('searchInput').getValue()) this.$('aggrid').show();```|Shows the grid when there’s something in the search input|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('aggrid').setloading(!0);`|Displays loading animation while data is being loaded|
|`getSelectedRows()`|Gets currently selected rows as an array of objects|`this.$('componentID').getSelectedRows();`|```const selected = this.$('customerGrid').getSelectedRows();```|Stores the selected rows in a variable for further use (e.g., delete or export)|
|`setData`|Sets new data into the grid|`this.$('componentID').setData(dataArray);`|```this.$('customerGrid').setData(this.$('filteredCustomers').getValue());```|Loads filtered customer data from another component into the grid|

### Date

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('date').getID());`|date_pdik5uqa|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```if (!this.$('isScheduled').getValue()) this.$('date').hide();```|Hides the date field if the user did not select `isScheduled`|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (this.$('deliveryOption').getValue() === 'later') this.$('date').show();```|Shows the date picker only if "Deliver Later" option is selected|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('date').setloading(!0);`|Displays a spinner on the date picker (e.g., while validating or loading preset dates)|

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

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('divider').getID());`|divider_v4ey5q0l|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```if (!this.$('showDivider').getValue()) this.$('divider').hide();```|Hides the divider if the "Show Advanced" toggle is off|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (this.$('showDetails').getValue()) this.$('divider').show();```|Shows the divider only if the user checks a `showDetails` checkbox|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('cascader').setloading(!0);`|Shows a loading spinner on the divider — useful if the layout is temporarily updating|

### Editor

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('editor').getID());`|editor_23j60xn3|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```if (!this.$('isEditing').getValue()) this.$('editor').hide();```|Hides the editor when the user is not in editing mode|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (!this.$('isEditing').getValue()) this.$('editor').show();```|Shows the editor when the user switches to editing mode|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('editor').setloading(!0);`|Shows a spinner while the editor loads content|

### Grid

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('grid').getID());`|grid_k5y3127h|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```if (!this.$('showGrid').getValue()) this.$('grid').hide();```|Hides the grid when the `showGrid` checkbox is unchecked|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (this.$('showGrid').getValue()) this.$('grid').show();```|Shows the grid when the user enables `showGrid`|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('grid').setloading(!0);`|Displays a loading spinner — e.g., while fetching settings or initializing content|

### Group

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('group').getID());`|group_con7xndw|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```if (!this.$('isAdmin').getValue()) this.$('group').hide();```|Hides admin settings group if the user is not an admin|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (this.$('isAdmin').getValue()) this.$('adminGroup').show();```|Shows admin settings group if the user is an admin|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('group').setloading(!0);`|Shows a loading indicator while admin data is loading|

### HTML

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('html').getID());`|html_xon9lq1k|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```if (!this.$('userLoggedIn').getValue()) this.$('html').hide();```|Hide HTML if the user is not logged in|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (this.$('showMoreInfo').getValue()) this.$('html').show();```|Show HTML content when the `showMoreInfo` button is clicked|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('html').setloading(!0);`|Shows a loading spinner while the HTML content loads|

### IFrame

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('iframe').getID());`|iframe_95v831jv|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```if (!this.$('showMap').getValue()) this.$('iframe').hide();```|Hides the embedded map iframe if the user opts not to view the map|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (this.$('showMap').getValue()) this.$('iframe').show();```|Shows the embedded map iframe when the user wants to view the map|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('iframe').setloading(!0);`|Shows the spinner or disables interaction while data loads|

### Inline

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('inline').getID());`|inline_vuse49xr|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```if (!this.$('toggleSearch').getValue()) this.$('inline').hide();```|Hides the inline search bar when the user disables search|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (this.$('toggleSearch').getValue()) this.$('inline').show();```|Displays the inline search bar when user toggles it on|
|`loading(true/false)`|Toggles a loading spinner over the inline layout area|`this.$('componentID').setloading(!0);`|`this.$('inline').setloading(!0);`| Shows a spinner while user form fields (like name & email) are loading|

### Input

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('input').getID());`|input_amrpraqw|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```this.$('emailInput').hide();```|Hide the email field when not needed|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (this.$('addPhoneCheckbox').getValue()) this.$('phoneInput').show();'``|shows the `phoneInput` field only if the `addPhoneCheckbox` is checked|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('usernameInput').setloading(!0);`|Show spinner while validating username|

### Link

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('link').getID());`|link_l312yjzl|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```this.$('termsLink').hide();```|Hides the `Terms & Conditions` link when not relevant|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```this.$('privacyLink').show();```|Shows the `Privacy Policy` link after user logs in|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('downloadLink').setloading(!0);`|Displays spinner while the download link is being prepared|

### Number

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('number').getID());`|number_8g52wzxh|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```if (this.$('ageGroup').getValue() === 'Under 13') this.$('ageInput').hide();```|Hides the age input if the user selects "Under 13" from the `ageGroup` dropdown|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (this.$('customPricingToggle').getValue()) this.$('priceInput').show();```|Shows the price field when the user enables Custom Pricing using a toggle or checkbox|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('quantityInput').setloading(!0);`|Displays a spinner while updating stock availability|

### Page Layout

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('page layout').getID());`|page-layout_b6e5ay1d|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```this.$('sidebar').hide();```|Hides the sidebar to give more space for the main form|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```this.$('footer').show();```|Displays the footer section after form submission|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('mainBody').setloading(!0);`|Shows a spinner while loading form data in the main section|

### Pagination

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('pagination').getID());`|pagination_cyzs7gol|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```this.$('productPages').hide();```|Hides the product list pages when not applicable|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```this.$('surveyPages').show();```|Shows additional survey pages when a user opts in|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('orderPages').setloading(!0);`|Shows a spinner while loading next set of order pages|

### Radio

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('radio').getID());`|radio_fikucxql|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```this.$('genderRadio').hide();```|Hides gender selection when not required|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```this.$('checkoutBtn').onClick(() => { this.$('paymentMethodRadio').show();});```|Shows payment method options if user clicks `Proceed to checkout` button|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('shippingOptionRadio').setloading(!0);`|Shows a spinner while fetching available shipping methods|

### Rate

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('rate').getID());`|rate_9qqkjfni|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```this.$('rateChoice').onChange(v => { if (v !== 'yes') this.$('feedbackRating').hide(); });```|Hide feedback rating when user selects `rateChoice`|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```this.$('rateChoice').onChange(v => { if (v === 'yes') this.$('feedbackRating').show(); });```|Show feedback rating when user selects `rateChoice`|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('cascader').setloading(!0);`|Shows the spinner or disables interaction while data loads|

### Select

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('select').getID());`|select_71qo53hk|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```if (this.$('upgradeCheckbox').getValue() === true) {this.$('planSelect').hide();```|Hides the plan selection if user rejects the upgrade|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (this.$('upgradeCheckbox').getValue() === true) { this.$('planSelect').show();```|Shows the plan dropdown when user chooses to upgrade|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('citySelect').setloading(!0);`|Shows a spinner while loading cities based on selected country|

### Slider

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('slider').getID());`|slider_fkqubhrn|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```!this.$('cameraToggle').getValue() && this.$('zoomSlider').hide();```|Hide the Zoom slider when camera is off|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```this.$('cameraToggle').getValue() && this.$('zoomSlider').show();```|Show the Zoom slider when camera is on|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('cameraToggle').getValue() && this.$('zoomSlider').setloading(!0);`|If camera is ON show loading on the zoom slide|

### Statistic

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('statistic').getID());`|statistic_bej7nxlx|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```this.$('totalSalesStat').hide();```|Hides the `Total Sales` metric when user has no access|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```this.$('activeUsersStat').show();```|Shows the `Active Users` count on dashboard load|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('conversionRateStat').setloading(!0);`|Shows a spinner while fetching the latest conversion rate|

### Steps

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('steps').getID());`|steps_n8gnnunq|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```if (user.role !== 'admin') { this.$('onboardingSteps').hide(); }```|Hides the step-by-step guide for non-admin users|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (user.role == 'admin') { this.$('onboardingSteps').show(); }```|Shows the step-by-step guide for admin users|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('checkoutSteps').setloading(!0);`|Displays a spinner while loading the next step in checkout|

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

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('switch').getID());`|switch_lvbm1m19|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```if (user.isSubscribed) this.$('newsletterSwitch').hide();```|Hide the newsletter if the user has already subscribed|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (!user.isSubscribed) this.$('newsletterSwitch').show();```|Show the newsletter if the user hasn't already subscribed|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('newsletterSwitch').setloading(!0);`|Shows shows a loading spinner on the `newsletterSwitch`, e.g., while saving or checking subscription status|

### Table

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('table').getID());`|report_be2krwix|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```if (orders.length === 0) this.$('orderTable').hide();```|Hide table if there are no orders to show|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (orders.length > 0) this.$('orderTable').show();```|Show table if there are orders available|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`if (loadingOrders) this.$('orderTable').setloading(!0);`|Show a spinner while orders are loading|

### Tabs

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('tabs').getID());`|tabs_ir0hf9n4|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```if (userRole !== 'admin') { this.$('settingsTabs').hide(); }```|Hides settings tabs for non-admin users|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (isAdvancedMode) { this.$('advancedTabs').show(); }```|Shows advanced tabs only in advanced mode|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`if (isSavingFeedback) { this.$('profileTabs').setloading(!0); }`|Displays spinner while profile data loads|

### Textarea

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('textarea').getID());`|textarea_cy7wd7ki|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```if (!user.wantsFeedback) { this.$('feedbackBox').hide(); }```|Hides the feedback box if the user opts out|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (user.wantsFeedback) this.$('feedbackTextarea').show();```|Shows the feedback textarea only if the user wants to give feedback|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`if (isSavingFeedback) { this.$('feedbackBox').setloading(!0); }`|Displays a loading spinner inside the textarea while feedback is being saved|

### Text

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('text').getID());`|text_jjzhkvx5|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```if (customer country === 'US') { this.$('cascader').hide(); }```|Hide the country selector if the user is already from the US|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (user.wantsHelp) { this.$('helpText').show(); }```|Shows help text when user requests help|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`if (data.isFetching) { this.$('statusText').setloading(!0); }`|Displays spinner while data is being fetched|

### Time

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('time').getID());`|time_jbzt4qae|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```if (user.role === 'guest') { this.$('timePicker').hide(); }```|Hides the time input for guest users|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (user.role === 'admin') { this.$('timePicker').show(); }```|Shows the time input for admins|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('timeInput').setloading(!0);`|Shows loading while time is being auto-set|

### Transfer

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('transfer').getID());`|transfer_egd2s5ct|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```if (userRole !== 'admin') { this.$('assignTeams').hide(); }```|Hides the team assignment list for non-admin users|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (projectSelected) { this.$('assignTeams').show(); }```|Shows the Transfer list when a project is selected|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('assignUsers').setloading(!0);`|Displays a spinner while user data is being fetched|

### Treeselect

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('treeselect').getID());`|treeselect_sym561lx|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```if (userRole !== 'admin') { this.$('regionTree').hide(); }```|Hides the region selector for non-admin users|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (customer.country === 'US') { this.$('regionTree').show(); }```|Shows region selector when country is US|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('categoryTree').setloading(!0);`|Shows a loading spinner while fetching categories|

### Webphone

|Method name|Description|Syntax|Example|Explanation/Output|
|----|-----------|------|-------|---|
|`getID()`|Returns the ID of the current UI component|`this.$('componentID').getID();`|`console.log(this.$('webphone').getID());`|webphone_rspavhts|
|`hide()`|Hides the selected component from the user interface|`this.$('componentID).hide();`|```if (userType === 'agent') { this.$('webphone').hide(); }```|Hides the Webphone for agents not allowed to make calls|
|`show()`|Displays a previously hidden component|`this.$('componentID').show();`|```if (userLoggedIn) { this.$('webphone').show(); }```|Shows Webphone once user logs in|
|`loading(true/false)`|Performs the logic of showing or hiding a loading spinner|`this.$('componentID').setloading(!0);`|`this.$('webphone').setloading(!0);`|Shows spinner while Webphone initializes or registers|