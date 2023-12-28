# Page Builder

## Config

### API

| Method & Params| Description|
|------------------------------------------|---------------------------------------------------------------|
| addClassName(fields = [], className)| Programmatically add a Class to a fields|
| removeClassName(fields, className)| Programmatically remove a class from fields|
| disable(fields = []) | Disables components|
| enable(fields = [])| Enables components |
| show(fields = []) | Shows components|
| hide(fields)| Hides components|
| getComponent(name) | Returns an object allowing direct API access to the component |
| getData(isValidate = true) | Get data from the page, optionally validate|
| getFieldDataSource(field)| Get the datasource from complex fields |
| getValue(fieldName)| Get the value from a specific field|
| getValues()| Get all the values from the form|
| refresh()| Refresh the page|
| refreshFieldDataSource(field, args) | Refresh a datasource|
| reset() | Reset the form to what it was when it was loaded|
| setData(value)| Set the value of a field|
| setOptionData(fields, data)| Set options on a multiple multi-select|
| setOptions(fields, options)| Set options on a multi-select field|
| setRules(field, rules)| Programmatically add validation rules to a field|
| validate(fields) | Run validate on the page|

### Events

| Name| Description|
|-----|------------------------------------------------|
| mounted | When the page is first loaded|
| refresh | When the page is first loaded and every time .refresh() is called |

## Form Attribute

The Form attribute helps you specify values for the following parameters for all the fields in the form:

|**Name of the Component**|**Description**|**Icon**|
|-------------------------|---------------|---------|
|**UI**|User Interface refers to the graphical layout of an application. **Element and Ant Design** are for desktop components design and **Vuetify** focuses on designing for mobile components|<img src= "/apps/img/page_ui.png">|
|**Form Width**| Form width helps you decide the dimensions of the complete form|<img src= "/apps/img/page_formwidth.png">|
|**Label Position**|Label position helps you position the field labels.<br> You can decide between Left, Right and Top|<img src= "/apps/img/page_labelposition.png">|
|**Label Width**|Refers to the horizontal space allocated for displaying labels in a form or dialog box|<img src= "/apps/img/page_labelwidth.png">|
|**Label Suffix**| A label suffix typically refers to a set of characters or symbols that are added to the end of a label or identifier to provide additional information or context|<img src= "/apps/img/page_labelsuffix.png">|
|**Size**| Size describes the dimensions of all the fields in the form. <br> You can choose from **Large**, **Default**, and **Small**|<img src= "/apps/img/page_size.png">|
|**Style sheets**|You can add custom Style Sheets to make the interface look more pleasing|<img src= "/apps/img/page_stylesheets.png">|
|**Custom Class**| A HTML class attribute which allows further customisation|<img src= "/apps/components/img/input_customclass.png">|
|**Data Source**| Data Source can be External, from Script Forge or a Database|<img src= "/apps/img/page_datasource.png">|
|**Action Panel**| Action Panel allows you to specify the actions for buttons and link controls|<img src= "/apps/img/page_actionpanel.png">|
|**Javascript CDN Library**|Allows you to load external javascript libaries. Our search feature lets you quickly search for libraries from `cdnjs.cloudflare.com`|<img src= "/apps/img/page_js.png">|

## Platform Features

Drag & Drop Admin Interface Builder, using the following components.

1. Alert
2. Button
3. Card
4. Cascader
5. Chart
6. Checkbox
7. Collapse
8. Color
9. Data Grid
10. Date
11. Dialog
12. Divider
13. Editor
14. Grid
15. Group
16. HTML
17. I-Frame
18. Inline
19. Input
20. Link
21. Number
22. Page Layout
23. Pagination
24. Portal
25. Radio
26. Rate
27. Select
28. Slider
29. Steps
30. Sub-Form
31. Sub-Form+
32. Switch
33. Table
34. Tabs
35. Text Area
36. Text
37. Time
38. Transfer
39. Tree-Select
40. Webphone
