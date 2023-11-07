# Alert

## Description

The Alert component can be used to display success, warning, information or error-type boxes.

## Use Case

You can use alerts to display:

* An Information box is a form is successfully saved.
* An error if it doesn't save.
* A warning if some data is incomplete on the form.
* Information to advise how to better complete a form.

## API

Here are some examples of how APIs can be integrated with Alerts:

1. **Data-driven alerts**: Connect APIs to external data sources to trigger alerts based on real-time data updates.

2. **Personalized alerts**: Utilize user data and preferences to personalize alert content and timing.

3. **Actionable alerts**: Integrate APIs with alert actions to enable users to take immediate action from within the alert.

4. **Context-aware alerts**: Use APIs to gather contextual information and tailor alerts to the current state of the app or user activity.

5. **Dynamic alert content**: Integrate APIs to dynamically generate alert content based on specific criteria.

6. **Real-time feedback alerts**: Utilize APIs to provide real-time feedback to user actions.

7. **Contextual help alerts**: Integrate APIs with help desk or knowledge base systems to provide contextual help alerts when users encounter errors or difficulties.

8. **Proactive alerts**: Use APIs to analyze user behavior and proactively trigger alerts to prevent potential issues.

9. **Multi-channel alerts**: Integrate APIs with various communication channels, such as email, SMS, or push notifications, to ensure users receive alerts even when they are not actively using the app.

10. **Customizable alert configurations**: Allow users to customize alert preferences, such as frequency, severity levels, and notification channels, to personalize their alert experience.

### Config

| **Name**|**Description**|
|---------------|----------------------------------------------------------------------------------------------------------------------------------------|
|**ID**| This is a unique identifier used to access the field by the API and the key of the field when the form is saved |
|**Title**| [**Optional**] The visual identifier label of the field|
|**Description**| [**Optional**] Gives information about the alert|
|**Width**| [**Optional**] To set the width of the field|
|**Hide Label**| Hides the label on the form|
|**Effect**| You can either choose from **Dark** or **Light** Mode|
|**Type**| Sets the icon of the selected alert type. **Success**, **Warning**, **Info** and **Error** will have different icons associated with them|
|**Closable**| The user can close the alert box|
|**Center**| Sets the position of the alert label at the center|
|**Show Icon**|Displays/Hides the symbol associated with each **Type** of alert|
|**Attribute Action**|Enable **Hidden** action to hide the field|

### Events

Events aren't used with Alerts.

### Methods

| **Name**|**Description**|
|---------------|----------------------------------------------------------------------------------------------------------------------------------------|
|**.show()**|Displays the alert|
|**.hide()**|Hides the alert |

!!! Info The show() and hide() methods can also be used to control the visibility of an alert in response to user input.

### Interactivity

Alerts lack a natural ability for interaction.

They're modal dialogue boxes that remain visible until the user decides to close them.

You would need to make a custom alert element and include event listeners in it in order to add interactivity to an alert.

**Examples may include:**

1. Clicking on a button to dismiss the alert.
2. Typing text into a text box to provide feedback.
3. Selecting an option from a list.
4. Submitting a form.