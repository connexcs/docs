# Dialog

## Description

A "dialog" component in a form builder is a specialized element that allows you to create modal windows or pop-up forms within a larger form.

It typically provides a self-contained interface for collecting additional information or displaying contextual details without disrupting the main form flow.

## Use Case

1. **Alerts**: Quickly show simple alerts for messages, errors, warnings, etc.
2. **Confirmations**:Get user confirmation before key actions like form submission.
3. **Additional Inputs**: Prompt for additional details in a popup without cluttering the form.
4. **Contextual Help**:Provide helpful information for a section in a popup overlay.
5. **Multi-Step Workflows**:Break long forms into shorter modal workflows.
6. **Wizards**:Guide users through a complex process step-by-step in modal wizard.
7. **Edit in Place**: Allow quick inline editing of content in a modal without changing views.
8. **Terms & Conditions**: Display legal agreements in a popup for users to review and accept.
9. **Surveys**: Present follow-up surveys or questionnaires in a dialog overlay.
10. **Media Previews**: Enlarge images and videos for closer inspection in a modal.
11. **Notifications**: Communicate messages non-intrusively using popup notifications.

## API

Here are some examples of how APIs can be integrated with date elements in form builders:

1. **Pre-fill the date field with relevant information**: An API could be used to pre-fill the date field with relevant information, such as the user's birthday or the current date. This can be useful for reducing the amount of time and effort required for users to complete the form.
2. **Validate the entered date against external data**: An API could be used to validate the entered date against external data, such as a database of available dates or a calendar of events. This can help to prevent users from entering invalid dates or booking dates that are not available.
3. **Dynamically populate date options based on user input**: An API could be used to dynamically populate date options based on user input, such as the selected location or activity. This can make it easier for users to find and select the desired date.
4. **Synchronize the selected date with external systems**: An API could be used to synchronize the selected date with external systems, such as a booking system or a calendar. This can help to ensure that the date is always up-to-date and that users are aware of any changes.
5. **Customize the appearance and behavior of the date component**: An API could be used to customize the appearance and behavior of the date component, such as the date format, color scheme, or available date ranges. This can help to match the date component to the overall design and functionality of the form.

### Config

| **Name**|**Description**|
|---------------|----------------------------------------------------------------------------------------------------------------------------------------|
|**ID**| This is a unique identifier which is used to access the field by the API and the key of the field when the form is saved |
|**Title**| [**Optional**] The visual identifier label of the field|
|**Width**| [**Optional**] To set the width of the field|
|**Visible**|Enable visible option to display the Dialog and disable to hide the dialog box|
|**Center**| Enable this option to make the components of the Dialog box centrally aligned|
|**Show Close**| Enable this option for displaying the close button (for closing the dialog box)|
|**Show Cancel Button**| Enable this option for displaying the Cancel button (the button name is editable)|
|**Show Confirm Button**| Enable this option for displaying the confirm button (the button name is editable)|
|| Enable **Loading** option to show the user that the dialog is busy. It prevents the user from interacting with the dialog until the operation is complete|
|**Margin Top**|It defines the position of the dialog box from the top of the screen|
|**Custom Class**| A HTML class attribute which allows further customisation **[See Form Attribute > Style Sheets**](**add anchor text**)|
|**Attribute Action**|Enable **Data Binding** to connect the data to UI|

### Events

| **Name**| **Description**|
|----------------------|---------------------------------------------------------------------|
| **onCancel**| This event is fired when the user clicks the cancel button on a dialog. This event can be used to perform any necessary cleanup or to prevent any unwanted actions from occurring.|
| **onConfirm**| This event is fired when the user clicks the confirm button on a dialog. This event can be used to perform any desired actions, such as submitting a form, deleting a file, or making a change to the system|

### Methods

| **Name**| **Description**|
|----------------------|---------------------------------------------------------------------|

### Interactivity

**Interactivity** is the ability of a web page or application to respond to user input.

The're a number of ways to add interactivity to **Input boxes**.

Some of the most common methods include:
