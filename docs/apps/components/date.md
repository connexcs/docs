# Date

## Description

**Date** is a specialized input field designed to collect date information from users.

It typically provides a user-friendly interface for selecting a date, often in the form of a calendar or a date picker.

<img src= "/apps/components/img/date.png" style="border: 2px solid #4472C4; border-radius: 8px;">

## Use Case

1. **Calendar interface**: A visual calendar grid allows users to select dates by clicking or tapping on specific days.

2. **Date picker**: A compact pop-up calendar appears when the user clicks on the input field, providing a more focused way to choose a date.

3. **Range selection**: Users can select a range of dates, such as a check-in and check-out date for a reservation.

4. **Time selection**: Date components can be combined with time input fields to collect both date and time information simultaneously.

5. **Pre-filled values**: Date components can be pre-filled with default values, such as the current date or a date from a previous form submission.

6. **Validation messages**: Date components can display error messages when users enter invalid dates, providing clear feedback and helping them correct their input.

Examples may include:

1. **Date of Birth**: For collecting and validating DOB in forms like signups, profiles etc.
2. **Event registration**: Selecting a date for an event, conference, workshop registration.
3. **Schedule appointments**: Choosing date/time slots for appointments, meetings, classes.
4. **Reservation systems**: Hotel, flight, venue booking for reserving dates.
5. **Time-sheets**: Selecting dates for shifts, clock-in/out in timesheets.
6. **Patient records**: Storing visit dates, admit/discharge dates for healthcare.
7. **Order forms**: Allow selecting delivery or start dates for orders.
8. **Job applications**: Entering start availability date on application forms.
9. **Reports & Analytics**:Choosing date ranges to filter reports and analytics.
10. **Expiration date**: Set expiry date for deals, offers, trials, memberships.
11. **Reminders**: Choosing future dates to set reminders and deadlines.
12. **Release planners**: Manage product/project release dates.

### Interactivity

**Interactivity** is the ability of a web page or application to respond to user input.

The're a number of ways to add interactivity to **Date** component.

Some of the most common methods include:

1. **Event Handling**: Event listeners can be attached to the date component to capture user interactions, such as clicks, changes, or selections. These events can then be used to trigger actions, update data, or modify the appearance of the component.
For example, when a user clicks on a calendar day, an event handler can update the selected date and display a tooltip with additional information about that date.

2. **Data Binding**: The date component can be bound to a data source, allowing it to update its content dynamically based on changes to the underlying data. This enables real-time feedback and data synchronization between the component and the form.
   For instance, a date component could be linked to a user's birthday data, automatically updating the date field when the user updates their birthday in their profile.

3. **State Management**: State management techniques can be implemented to track the internal state and behavior of the date component. This allows for dynamic responses to user actions and ensures that the component's state is consistent across different interactions.
   For example, a date picker component could maintain its open/closed state, allowing users to toggle the calendar display programmatically.

4. **Animations and Transitions**: Animations and transitions can be incorporated to enhance the visual appeal and user experience of the date component. Libraries like GSAP or CSS animations can be used to add smooth transitions, visual feedback, and engaging interactions to the component.
   For instance, a date component could animate the calendar slide-in transition when the user clicks on the input field.

5. **Accessibility**: Accessibility measures should be considered to ensure that the date component is usable by users with disabilities. This includes providing keyboard navigation, screen reader support, and appropriate color contrast.
   For example, a date component could provide keyboard navigation shortcuts for selecting dates, making it accessible to users who rely on keyboard input.

Examples may include:

1. Change date picker styling based on user input or events.
2. Show/hide date picker conditionally using logic and other field values.
3. Disable specific dates if they fall on weekends or holidays.
4. Trigger confirmation if date selected is a significant one.
5. Update multiple date pickers together when a single one changes.
6. Validate date as user navigates and show errors dynamically.
7. Disable future/past dates outside of allowed range.
8. Prevent form submission until a valid date is selected.
9. Populate data visualizations and charts based on selected date range.
10. Make API calls when date is selected to check availability.
11. Trigger animations and transitions when date is changed.
12. Allow typing date directly or via shortcuts for power users.
13. Sync date selection across multiple instances of the form.
14. Pre-fill date based on user info and persist on form reload

## API

### Events

| **Name**| **Description**|
|---------|----------------|
| `onChange (element)`| The onChange event occurs when the value of a field is changed|
| `onFocus (element)`| The onfocus event occurs when a field gets focus|
| `onBlur (element)`| The onblur event occurs when a field loses focus|

### Methods

| **Name**| **Description**|**Parameters**|
|---------|----------------|--------------|
|`this.addClassName`|Add style class to a form item|`(fields: String`&#124;`String[], className: String)`|
|`this.removeClassName`|Remove style class from a form item|`(fields: String`&#124;`String[], className: String)`|
|`this.getComponent`|Returns a component whose id has been passed as a parameter|`(component_ID: String) : Object`|
|`this.getValues`|Gets the current values of all fields|`() : Object)`|
|`this.hide`|Hides the field|`(fields: String`&#124;`String[])`|
|`this.show`|Displays the field|`(fields: String`&#124;`String[])`|
|`this.disable`| Disable date field from user interaction|`(fields: String`&#124;`String[])`|
|`this.enable`| Enable date field from user interaction|`(fields: String`&#124;`String[])`|
|`this.getValue`|Get A Value From a component|`(fieldName: String)`|
|`this.setData`|Set the data in the field. The Value object should be of type { componentId: componentValue }|`(Value: Object)` {'field-id': 'field-value'}|

!!! Info
    1. The show() and hide() methods can also be used to control the visibility of the date component in response to user input.
    2. **Fields** refers to a **component ID** or a **list of component IDs**. You can fetch the ID from the **Component Attribute** panel in the Page Builder.
    3. Before using **this.show(fields)**, make sure the component is **hidden**. This can be done using **this.hide(fields)** or by **enabling** the **Hidden checkbox** in the Component Attribute panel.
    4. Before using **this.enable(fields)**, make sure the component is **disabled**. This can be done using **this.disable(fields)** or by **enabling** the **Disabled checkbox** in the Component Attribute panel.

#### Steps to use the methods for the Page Builder components

1. Go to Form Attribute :material-menu-right: Action Panel :material-menu-right: Setting :material-menu-right: (Mounted | refresh | click 'Add action').
2. Write the method/code as shown in the **Example** below.
3. Click on `Save`.
4. On the main screen click on `Save` again.
5. Click on `Preview` to see the code in action.
<img src= "/apps/components/img/date2.png" style="border: 2px solid #4472C4; border-radius: 8px;">

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
            this.addClassName('date_0gprgpvi', 'abc')
            ```

    2. `this.removeClassName(fields, className)`
        ```js linenums="1"
        this.removeClassName('date_0gprgpvi', 'abc')
        ```
    
    3. `this.getValues()`
        ```js linenums="1"
        var data = this.getValues();
        console.log(data);
        ```
    
    4. `this.hide(fields)`
        ```js linenums="1"
        var fields= ['date_0gprgpvi']
        this.hide(fields)
        ```
    
    5. `this.show(fields)`
        ```js linenums="1"
        var fields= ['date_0gprgpvi']
        this.show(fields)
        ```
    
    6. `this.disable(['fields'])`
        ```js linenums="1"
        this.disable(['date_0gprgpvi'])
        ```
    
    7. `this.enable(['fields'])`
        ```js linenums="1"
        this.enable(['date_0gprgpvi'])
        ```

    8. `this.getValue('fieldName')`
        ```js linenums="1"
        var datename = this.getValue('date_0gprgpvi');
        console.log('getValue', datename);
        ```
    
    9.  `this.setData(Value)`
        ```js linenums="1"
        this.setData(
         {
         "date_0gprgpvi": "2023-11-30",}
        );
        ```
    
    10.  `this.getComponent('component_ID')`
        ```js linenums="1"
        var datename = this.getComponent('date_0gprgpvi');
        console.log('getComponent', datename);
        ```

!!! info Add multiple classes
    Use the following syntax to add multiple classes to a component:
    ```js linenums="1"
    this.addClassName('componentID', 'class1', 'class2')
    ```

## Config

| **Name**|**Description**|**Icon**|
|---------|---------------|--------|
|**ID**| The date component's unique identifier|<img src= "/apps/components/img/input_id.png">|
|**Name**| [**Optional**] The display name of the date field|<img src= "/apps/components/img/checkbox_name.png">|
|**Width**| [**Optional**] Width of the field|<img src= "/apps/components/img/input_width.png">|
|**Label Width**|Width of the label associated with an input field. It determines the horizontal space occupied by the label text|<img src= "/apps/components/img/input_labelwidth1.png">|
|**Label Wrap**| If the label is longer than the allowed width the text will continue on another line|<img src= "/apps/components/img/input_labelwrap1.png">|
|**Hide Label**| Hides the label on the form|<img src= "/apps/components/img/input_hidelabel.png">|
|**Text Prompt**| A description to aid the user when completing the field|<img src= "/apps/components/img/input_textprompt.png">|
|**Display Type**| You can select from various options including **Year**, **Month**, **Date**, **Week**, **Dates**, **Datetime**, **Datetimerange**, **Daterange**, or **Monthrange**|<img src= "/apps/components/img/date_displaytype.png">|
|**Placeholder**| The short hint is displayed in the input field before the user enters a value|<img src= "/apps/components/img/input_placeholder.png">|
|**Format**| You can decide the format of your date like **YYYY-MM-DD** or **DD/MM/YY**|<img src= "/apps/components/img/date_format.png">|
|**Default Value**|Specifies the initial value that's displayed in the date field when the form is loaded|<img src= "/apps/components/img/date_defaultvalue.png">|
|**Custom Class**| An HTML class attribute which allows further customisation [See Form Attribute > Style Sheets](https://docs.connexcs.com/apps/page-builder/#form-attribute)|<img src= "/apps/components/img/input_customclass.png">|
|**Attribute Action**|Enable **Data Binding** to connect the data to UI. <br>Enable **Read Only** to make the field non-editable. <br>Enable **Disabled** action to make the field unusable. <br> Enable **Text box is editable** to allow users to manually type in a date value instead of only selecting from the date picker. <br>Enable **Show Clear button** action to make the clear button visible|<img src= "/apps/components/img/date_attributeaction.png">|
|**Action Settings**|Click on the drop-down to select the pre-defined methods you wish to apply to your component. In this case, you can choose either **mounted** or **refresh** for `onChange`, `onFocus`, or `onBlur`|<img src= "/apps/components/img/input_ac.png">|

### Validation

Form validation is the process of checking the data entered into a form to ensure that it's valid and complete.

This helps to prevent users from submitting forms with invalid data, which can cause problems for the application that's processing the form.

Form validation can be performed using a variety of methods, including:

| **Name**| **Description**|
|---------|----------------|
| **Required**|If enabled, then the field value can't be empty, otherwise an error message is emitted|
|**Custom Validation Rules**|(rule, value, callback) => {|
||**rule**: Verification rule, you can view the verification configuration information through this parameter; **rule.field** can get the field identifier of the current verification.|
||**value**: Value of the current field|
||**callback**: Callback function (must be called) upon completion of validation; **callback('Error message')/ callback(new Error('Error message'))**. These are two ways to return an error message.|

<img src= "/apps/components/img/cascader_validation.png" width= "300" style="border: 2px solid #4472C4; border-radius: 8px;">

!!! Info
    1. The **callback() function** is also called to verify success in the custom checkup method.

## First time User?

If you are using the Page Builder components on the ConnexCS platform for the first time, we request you to use our guide on <a href="https://docs.connexcs.com/apps/page-builder/#steps-to-use-components-in-the-page-builder" target="_blank">steps to use the Components</a>.