# Date

## Description

It's a specialized input field designed to collect date information from users.

It typically provides a user-friendly interface for selecting a date, often in the form of a calendar or a date picker.

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

## API

APIs can be used to extend the functionality of the date component, such as:

1. **Pre-filling the date field with relevant information**: For instance, an API could be used to retrieve the user's birthday or the current date from a server and pre-fill the date field accordingly.

2. **Validating the entered date against external data**: An API could be used to check if the entered date is within a valid range, such as a date range for an event registration or a reservation.

3. **Dynamically populating date options based on user input**: For example, an API could be used to populate a drop-down menu with available dates based on the user's selected location or activity.

4. **Synchronizing the selected date with external systems**: An API could be used to send the selected date to a backend server, updating a calendar or scheduling system in real-time.

5. **Customizing the appearance and behavior of the date component**: An API could be used to provide custom date formats, color schemes, or animations for the date component, aligning it with the overall design and branding of the form.

Examples include:

1. Send the selected date value to an API when the form is submitted.
2. Populate the date picker with disabled dates fetched from an API.
3. Disable future/past dates by calling an API to check validity.
4. Show available booking slots by fetching open date slots from an API.
5. Autofill or preselect dates by calling an API to get user info or defaults.
6. Validate selected date against holidays API to prevent bookings.
7. Update date picker styling dynamically based on response from an API.
8. Fetch locale and date format settings from a locale API.
9. Call API on date selection to check availability and show error.
10. POST selected dates to an API to add bookings/appointments to a calendar.
11. Use date range to filter data visualization from an API dynamically.
12. Trigger form validation API on date change to check for errors.
13. Maintain revision history of date changes by sending updates to an API.

### Config

| **Name**|**Description**|
|---------------|----------------------------------------------------------------------------------------------------------------------------------------|
|**ID**| This is a unique identifier which is used to access the field by the API and the key of the field when the form is saved |
|**Name**| [**Optional**] The visual identifier label of the field|
|**Width**| [**Optional**] To set the width of the field|
|**Label Width**|Width of the label associated with an input field. It determines the horizontal space occupied by the label text|
|**Label Wrap**| If the label is longer than the allowed width the text will continue on another line|
|**Hide Label**| Hides the label on the form|
|**Text Prompt**| A description to aid the user when completing the field|
|**Display Type**| You can select from various options including **Year**, **Month**, **Date**, **Week**, **Dates**, **Datetime**, **Datetimerange**, **Daterange**, or **Monthrange**|
|**Placeholder**| The short hint is displayed in the input field before the user enters a value|
|**Format**| You can decide the format of your datelike **YYYY-MM-DD** or **DD/MM/YY**|
|**Default Value**|Specifies the initial value that is displayed in the date field when the form is loaded|
|**Custom Class**| A HTML class attribute which allows further customisation **[See Form Attribute > Style Sheets**](**add anchor text**)|
|**Attribute Action**|Enable **Data Binding** to connect the data to UI
||Enable **Read Only** to make the field non-editable|
||Enable **Disabled** action to make the field unsuable|
||Enable **Text box is editable** to allow users to manually type in a date value instead of only selecting from the date picker. |
||Enable **Show clear button** action make the clear button visible|

### Validation

Form validation is the process of checking the data entered into a form to ensure that it's valid and complete.

This helps to prevent users from submitting forms with invalid data, which can cause problems for the application that's processing the form.

Form validation can be performed using a variety of methods, including:

| **Name**| **Description**|
|----------------------|---------------------------------------------------------------------|
| **Required**| Single line of text|
|**Custom Validation Rules**|(rule, value, callback) => {|
||**rule**: Verification rule, you can view the verification configuration information through this parameter; rule.fieldcan get the field identifier of the current verification.|
||**value**: Value of the current field|
||**callback**: Callback function (must be called) upon completion of validation; **callback('Error message')/ callback(new Error('Error message'))**. These are two ways to return an error message.|

!!! Info
    1. The **callback()function** is also called to verify success in the custom checkup method.

### Events

| **Name**| **Description**|
|----------------------|---------------------------------------------------------------------|
| **onChange (element)**| The onChange event occurs when the value of an field is changed|
| **onFocus (element)**| The onfocus event occurs when an field gets focus|
| **onBlur (element)**| The onblur event occurs when an field loses focus|

### Methods

| **Name**| **Description**|
|----------------------|---------------------------------------------------------------------|
|**GetValue()**: Retrieves the current value of the date component, which is the selected date|
|**SetValue(date)**| Sets the value of the date component to the specified date|
|**SetMinDate(date)**| Sets the minimum selectable date for the date component, ensuring that users cannot select dates before the specified date|
|**SetMaxDate(date)**: Sets the maximum selectable date for the date component, ensuring that users cannot select dates after the specified date|
|**SetFormat(format)**| Sets the date format for the date component, controlling how the selected date is displayed|
|**SetDisabled(isDisabled)**| Enables or disables the date component, preventing users from interacting with it when it is disabled|
|**Validate()**| Validates the selected date, checking for errors or inconsistencies|
|**BindToDateSource(dataSource)**| Binds the date component to a data source, allowing it to update its value dynamically based on changes to the underlying data|
|**AddEventListener(eventName, callback)**| Attaches an event listener to the date component, triggering the specified callback function when the event occurs|
|**RemoveEventListener(eventName, callback)**| Removes an event listener from the date component, preventing the callback function from being triggered when the event occurs|
|**SetPlaceholder(placeholderText)**|Sets placeholder text for the date component when it's empty|
|**SetStep(stepSize)**|Sets the increment/decrement step size for the date component|
|**SetRange(startDate, endDate)**|Sets the range of selectable dates for the date component|
|**SetFormatOptions(formatOptions)**|Sets additional formatting options for the date component|
|**SetCustomFormatter(formatterFunction)**|Replaces the default date formatter with a custom function|
|**SetCustomValidator(validatorFunction)**|Replaces the default date validator with a custom function|
|**SetCustomRenderer(rendererFunction)**|Replaces the default date renderer with a custom function|
|**GetCustomData()**|Retrieves custom data associated with the date component|
|**SetCustomData(data)**|Sets custom data associated with the date component|

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
14. Prefill date based on user info and persist on form reload