# Date

## Description

It's a specialized input field designed to collect date information from users.

It typically provides a user-friendly interface for selecting a date, often in the form of a calendar or a date picker.

<img src= "/apps/components/img/date.png">

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
5. **Timesheets**: Selecting dates for shifts, clock-in/out in timesheets.
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

5. Accessibility: Accessibility measures should be considered to ensure that the date component is usable by users with disabilities. This includes providing keyboard navigation, screen reader support, and appropriate color contrast.
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
|----------------------|---------------------------------------------------------------------|
| `onChange (element)`| The onChange event occurs when the value of a field is changed|
| `onFocus (element)`| The onfocus event occurs when a field gets focus|
| `onBlur (element)`| The onblur event occurs when a field loses focus|

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
            this.addClassName('date_0gprgpvi', 'abc')
            ```

    2. `this.removeClassName(fields, className)`
        ```js
        this.removeClassName('date_0gprgpvi', 'abc')
        ```
    
    3. `this.getValues(fieldName)`
        ```js
        var data = this.getValues();
        console.log(data);
        ```
    
    4. `this.hide(fields)`
        ```js
        var fields= ['date_0gprgpvi']
        this.hide(fields)
        ```
    
    5. `this.show(fields)`
        ```js
        var fields= ['date_0gprgpvi']
        this.show(fields)
        ```
    
    6. `this.disable(['fields'])`
        ```js
        this.disable(['date_0gprgpvi'])
        ```
    
    7.`this.getValue('fieldName')`
        ```js
        var datename = this.getValue('date_0gprgpvi');
        console.log('getValue',datename);
        ```
    
    8.`this.setData(Value)`
        ```js
        this.setData(
         {
         "date_0gprgpvi": "2023-11-30",}
        );
        ```
    
    7.  `this.getComponent('component_ID')`
        ```js
        var datename = this.getComponent('date_0gprgpvi');
        console.log('getComponent',datename);
        ```

## Config

| **Name**|**Description**|**Icon**|
|---------|---------------|---------|
|**ID**| Date's unique identifier|<img src= "/apps/components/img/input_id.png">|
|**Name**| [**Optional**] The display name of the date field|<img src= "/apps/components/img/checkbox_name.png">|
|**Width**| [**Optional**] Width of the field|<img src= "/apps/components/img/input_width.png">|
|**Label Width**|Width of the label associated with an input field. It determines the horizontal space occupied by the label text|<img src= "/apps/components/img/input_labelwidth1.png">|
|**Label Wrap**| If the label is longer than the allowed width the text will continue on another line|<img src= "/apps/components/img/input_labelwrap1.png">|
|**Hide Label**| Hides the label on the form|<img src= "/apps/components/img/input_hidelabel.png">|
|**Text Prompt**| A description to aid the user when completing the field|<img src= "/apps/components/img/input_textprompt.png">|
|**Display Type**| You can select from various options including **Year**, **Month**, **Date**, **Week**, **Dates**, **Datetime**, **Datetimerange**, **Daterange**, or **Monthrange**|<img src= "/apps/components/img/date_displaytype.png">|
|**Placeholder**| The short hint is displayed in the input field before the user enters a value|<img src= "/apps/components/img/input_placeholder.png">|
|**Format**| You can decide the format of your datelike **YYYY-MM-DD** or **DD/MM/YY**|<img src= "/apps/components/img/date_format.png">|
|**Default Value**|Specifies the initial value that's displayed in the date field when the form is loaded|<img src= "/apps/components/img/date_defaultvalue.png">|
|**Custom Class**| An HTML class attribute which allows further customisation **[See Form Attribute > Style Sheets**](**add anchor text**)|<img src= "/apps/components/img/input_customclass.png">|
|**Attribute Action**|Enable **Data Binding** to connect the data to UI. <br>Enable **Read Only** to make the field non-editable. <br>Enable **Disabled** action to make the field unsuable. <br> Enable **Text box is editable** to allow users to manually type in a date value instead of only selecting from the date picker. <br>Enable **Show Clear button** action to make the clear button visible|<img src= "/apps/components/img/date_attributeaction.png">

### Validation

Form validation is the process of checking the data entered into a form to ensure that it's valid and complete.

This helps to prevent users from submitting forms with invalid data, which can cause problems for the application that's processing the form.

Form validation can be performed using a variety of methods, including:

| **Name**| **Description**|
|---------|----------------|
| **Required**| Single line of text|
|**Custom Validation Rules**|(rule, value, callback) => {|
||**rule**: Verification rule, you can view the verification configuration information through this parameter; rule.fieldcan get the field identifier of the current verification.|
||**value**: Value of the current field|
||**callback**: Callback function (must be called) upon completion of validation; **callback('Error message')/ callback(new Error('Error message'))**. These are two ways to return an error message.|

<img src= "/apps/components/img/cascader_validation.png">

!!! Info
    1. The **callback()function** is also called to verify success in the custom checkup method.

## First time User?

If you are using the Page Builder components on the ConnexCS platform first time, we request you to use our guide on <a href="https://bani-appsection--connexcs-docs.netlify.app/apps/page-builder/#steps-to-use-components-in-the-page-builder" target="_blank">steps to use the Components</a>.