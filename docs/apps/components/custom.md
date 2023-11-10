# Custom

## Description

A custom zone is a scope slot that allows you to introduce custom content to a form.

Custom components can be used to add new types of form fields, to add custom validation rules, or to implement custom behaviors.

Custom components are typically written in HTML, JavaScript, and CSS. They can be used in any form builder that supports custom components.

## Use Case

1. Drag and drop the Custom field into the form canvas area.

2. Specify the data type (string, object, array) for the custom field.
3. Custom components add versatility and adaptability to form builders.
4. Custom components enhance user experience by simplifying form interactions.
5. Custom components improve form aesthetics and alignment with brand identity.

## API

 By leveraging APIs, you can connect your forms to various data sources, external services, and other applications, enabling real-time data exchange, dynamic content generation, and advanced form functionalities.

Here are some examples of how APIs can be integrated with custom components in a form builder:

1. **Data retrieval and validation**: Connect to APIs to retrieve data from external sources, such as customer databases, product catalogs, or geographic information systems. Use this data to pre-populate form fields, validate user input, or provide context-relevant suggestions.

2. **Payment processing**: Integrate with payment gateway APIs to securely process online payments directly from the form. This eliminates the need for redirection to external payment pages and provides a seamless user experience.

3. **Email notifications and automations**: Utilize messaging APIs to send automated email notifications based on form submissions, such as order confirmations, delivery updates, or customer feedback responses.

4. **User authentication and authorization**: Integrate with authentication APIs to verify user identities and restrict access to sensitive information or form functionalities based on user roles or permissions.

5. **External data synchronization**: Connect to APIs to synchronize form data with external systems, such as CRM platforms, project management tools, or marketing automation software. This ensures that data is kept up-to-date and consistent across different applications.

### Config

| **Name**|**Description**|
|---------------|----------------------------------------------------------------------------------------------------------------------------------------|
|**ID**| This is a unique identifier which is used to access the field by the API and the key of the field when the form is saved |
|**Name**| [**Optional**] The visual identifier label of the field|
|**Width**| [**Optional**] To set the width of the field|
|**Label Width**|Width of the label associated with an input field. It determines the horizontal space occupied by the label text|
|**Label Wrap**| If the label is longer than the allowed width the text will continue on another line|
|**Hide Label**| Hides the label on the form|
|**Placeholder**| The short hint is displayed in the input field before the user enters a value|
|**Text Prompt**| A description to aid the user when completing the field|
|**Data Type**| From the drop-down select Data Type as **String**, **Object** or **Array**|
|**Custom Class**| A HTML class attribute which allows further customisation **[See Form Attribute > Style Sheets**](**add anchor text**)|
|**Attribute Action**|Enable **Data Binding** to connect the data to UI
||Enable **Hidden** action to hide the field|

### Validation

Form validation is the process of checking the data entered into a form to ensure that it's valid and complete.

This helps to prevent users from submitting forms with invalid data, which can cause problems for the application that's processing the form.

Form validation can be performed using a variety of methods, including:

| **Name**| **Description**|
|----------------------|---------------------------------------------------------------------|
| **Required**| Single line of text|
|**Select**|Several common type checks are provided in single-line text boxes such as string, URL, mailbox, etc.|
| **Regular expressions**|Used to match patterns in text. They can be used to validate the format of data, such as email addresses, phone numbers, and dates|
|**Custom Validation Rules**|(rule, value, callback) => {|
||**rule**: Verification rule, you can view the verification configuration information through this parameter; rule.fieldcan get the field identifier of the current verification.|
||**value**: Value of the current field|
||**callback**: Callback function (must be called) upon completion of validation; **callback('Error message')/ callback(new Error('Error message'))**. These are two ways to return an error message.|

!!! Info
    1. **Regular expressions** should be wrapped with //, as in:/^1[3456789]\d{9}$/"
    2. The **callback()function** is also called to verify success in the custom checkup method.

### Events

| **Name**| **Description**|
|----------------------|---------------------------------------------------------------------|
| **onChange (element)**| The onChange event occurs when the value of an field is changed|

### Methods

| **Name**| **Description**|
|----------------------|---------------------------------------------------------------------|
|**refresh()**|Re-renders the component UI/data. Useful for live updates|
|**reset()**|Resets the component's state and data to default values|
|**clear()**|Clears any user-entered values in the component UI|
|**validate()**| Validates the component's data, returns any errors|
|**focus()**| Sets focus on a specific element within the component|
|**show()**| Makes the component visible if hidden|
|**hide()**|Hides the component UI|
|**enable()**|Enables user interaction if disabled|
|**disable()**|Disables user interaction with component|
|**getData()**|Returns the component's current data object|
|**setData(data)**|Populates the component with the provided data|
|**getValue(name)**|Returns value of a specific field|
setValue(name, value) - Sets value of a specific field|
|**on(event, handler)**|Listen for events like 'change'|
|**once(event, handler)**|Listen for event once|
|**off(event, handler)**|Remove event listener|
|**AddComponent(componentType,options)**| Adds a custom component to the form|
|**RemoveComponent(componentID)**| Deletes a custom component from the form|
|**ModifyComponent(componentId, property, value)**| Changes a property of a custom component|
|**GetComponent(componentId)**| Returns the custom component with the given ID|
|**GetComponents()**| Gets all custom components in the form|
|**ValidateComponent(componentId)**| Checks the validity of data entered in a custom component|
|**ResetComponent(componentId)**| Sets the state of a custom component to its initial values|
|**BindComponentData(componentId, data)**|Links a custom component to a data source|

### Interactivity

**Interactivity** is the ability of a web page or application to respond to user input.

The're a number of ways to add interactivity to the **Custom** components.

Some of the most common methods include:

1. **Event handling**: Attach event listeners to custom components to capture user interactions, such as clicks, changes, or selections. Use these events to trigger actions, update data, or modify the appearance of the component.

2. **Data binding**: Bind custom components to data sources, allowing them to update their content dynamically based on changes to the underlying data. This enables real-time feedback and data synchronization between the component and the form.

3. **State management**: Implement state management mechanisms for custom components to track their internal state and behavior. Use this state information to control the component's appearance, interactions, and data manipulation.

4. **Animation and transitions**: Utilize animation libraries or frameworks to add visual transitions, effects, and feedback to custom components. This enhances the user experience and makes the form more engaging.

5. **Accessibility**: Ensure that custom components are accessible to users with disabilities by following accessibility guidelines and providing appropriate keyboard navigation, screen reader support, and color contrast.

Here are some examples of how interactivity can be integrated with custom components:

1. A **custom date picker** component could update the selected date in real-time as the user clicks on different calendar days.

2. A **custom color picker** component could dynamically adjust the color preview as the user drags the color picker slider.

3. A **custom input field** component could provide real-time validation feedback, highlighting errors or suggestions as the user types.

4. A **custom dropdown menu** component could dynamically populate its options based on the user's selection in a previous field.

5. A **custom progress bar** component could update its progress based on the completion status of the form, providing a visual indication of the user's progress.