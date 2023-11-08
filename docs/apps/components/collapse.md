# Collapse

## Description

Collapse helps to hide or conceal a section of a form, typically by minimizing or folding it into a smaller, more compact view.

This feature is often used to organize lengthy or complex forms, making them easier to navigate and reducing visual clutter.

## Use Case

1. Improved form organization
2. Reduced visual clutter
3. Enhanced user experience
4. Conditional visibility
5. Registration forms
6. Survey forms
7. Order forms
8. Contact forms
9. Customer feedback forms

## API

Here are some specific ways APIs can be integrated with Collapse component in a form builder:


1. **API-driven collapse**: Programmatically control section collapse based on interactions or data changes.
2. **Real-time collapse updates**: Ensure consistent form state with APIs for real-time section updates.
3. **Progressive disclosure with API**: Reveal sections gradually based on interactions or data updates using APIs.
4. **Automated form updates**: Trigger section changes based on events or external triggers using APIs.
5. **Dynamically populate form sections**: Retrieve and display relevant data based on user selections.
6. **Integrate with external validation services**: Validate user inputs in real time within collapsible sections.
7. **Trigger external actions**: Perform actions when sections are collapsed or expanded.
8. **Dynamically adjust form layout**: Adapt collapsible sections to different devices and screen sizes.
9. **Personalize form content**: Tailor form content based on user preferences or history.
10. **Integrate with chatbots or virtual assistants**: Enable conversational form completion through chatbots.
11. **Real-time data synchronization**: Keep form data consistent with external sources in real time.
12. **Automate form routing and submission**: Streamline form processing based on user interactions.
13. **Integrate with analytics platforms**: Gain insights into user behavior and form effectiveness
14. **Enable data export and formatting**: Export collapsible section data in various formats.

### Config

| **Name**|**Description**|
|---------------|----------------------------------------------------------------------------------------------------------------------------------------|
|**ID**| This is a unique identifier which is used to access the field by the API and the key of the field when the form is saved |
|**Collapse Options**|Allows you to add/delete multiple Collapses|
|**Accordian Mode**|Enable this mode if you want to display only one Collaspse section at a time (this is helful when you have to avoid clutter when you have multiple Collapse sections)
|**Custom Class**| A HTML class attribute which allows further customisation **[See Form Attribute > Style Sheets**](**add anchor text**)|
|**Attribute Action**|Enable **Hidden** action to hide the field|


### Events


### Methods

| **Name**| **Description**|
|----------------------|---------------------------------------------------------------------|
| **Element.classList.toggle()**| This method toggles a class on an element, which can be used to show or hide the element|
| **Element.setAttribute()and  Element.removeAttribute()**| These methods can be used to set or remove a custom attribute on an element, which can be used to toggle its visibility|
| **Element.style.display**| This method can be used to directly set the display property of an element, which can be used to show or hide the element|
|**.collapse('hide')**|This code will collapse/hide the element by setting its display property to "none"|
|**.collapse('show')**|This code will expand/show the element by setting its display property to "none"|

### Interactivity

**Interactivity** is the ability of a web page or application to respond to user input.

The're a number of ways to add interactivity to the **Collapse** component.

Some of the most common methods include:

1. **Toggle Visibility**: Implement the collapse/expand functionality using JavaScript, CSS, or a combination of both. When the toggle button or link is clicked, the content element's visibility should be toggled between hidden and visible.
2. **Attach JavaScript Event Listeners**: Attach event listeners to the toggle button or link using JavaScript. These listeners will detect clicks or other user interactions and trigger the collapse/expand functionality.
3. **Add a Toggle Button or Link**: Create a toggle button or link that will trigger the collapse/expand action. This element can be placed within the header element or alongside the container element.
4. **Conditional Collapse**: Show or hide specific collapse sections based on user input or form data.
5. **Nested Collapse**: Organize complex forms with multiple levels of collapsible sections.
6. **Enhanced animations and transitions**: Improve the visual appeal of the collapse/expand action.
7. **Accessibility considerations**: Optimize the collapse component for users with disabilities.
