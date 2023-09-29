# Input

## Description

The input box specifies an input field where the user can enter data. The input field also support client-side validation

## Use Case

The input box is a core component in allow information to be entered into the system, as well as displaying existing information.

The input box can also be dragg into other components including: Sub-Form and Sub-Form+

## Config

| Name          | Description                                                                                                                            |
|---------------|----------------------------------------------------------------------------------------------------------------------------------------|
| ID            | This is a unique identifier which is used which is used to access the field by the API and the key of the field when the form is saved |
| Name          | [Optional] The visual identifier label of the field                                                                                    |
| Width         | [Optional] To set the width of the field                                                                                               |
| Label Width   | [Optional] Sets the width of the label                                                                                                 |
| Label Wrap    | If the label is longer than the allowed width the text will continue on another line                                                   |
| Hide Label    | Hides the label on the form                                                                                                            |
| Placeholder   | The short hint is displayed in the input field before the user enters a value                                                          |
| Text Prompt   | A description to aid the user when completing the field                                                                                |
| Max Length    | Limit the amount of characters the field supports                                                                                      |
| Default Value | The default value which is filled in the field before the user changes it                                                              |
| Custom Class  | A HTML class attribute which allows further customisation [See Form Attribute > Style Sheets]                                          |

## Events

| Name                 | Description                                                         |
|----------------------|---------------------------------------------------------------------|
| onChange (element)   | The onChange event occurs when the value of an field is changed.    |
| onFocus (element)    | The onfocus event occurs when an field gets focus.                  |
| onBlur (element)     | The onblur event occurs when an field loses focus.                  |
