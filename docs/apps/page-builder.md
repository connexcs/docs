# Page Builder

## Config

### Javascript CDN Library

Javascript CDN Library allows you to load external javascript libaries. Our search feature lets you quickly search for libraries from `cdnjs.cloudflare.com`

### API

| Method & Params                          | Description                      |
|------------------------------------------|---------------------------------------------------------------|
| addClassName(fields = [], className)     | Programmatically add a Class to a fields                      |
| removeClassName(fields, className)       | Programmatically remove a class from fields                   |
| disable(fields = [])                     | Disables components                                           |
| enable(fields = [])                      | Enables components                                            |
| show(fields = [])                        | Shows components                                              |
| hide(fields)                             | Hides components                                              |
| getComponent(name)                       | Returns an object allowing direct API access to the component |
| getData(isValidate = true)               | Get data from the page, optionally validate                   |
| getFieldDataSource(field)                | Get the datasource from complex fields                        |
| getValue(fieldName)                      | Get the value from a specific field                           |
| getValues()                              | Get all the values from the form                              |
| refresh()                                | Refresh the page                                              |
| refreshFieldDataSource(field, args)      | Refresh a datasource                                          |
| reset()                                  | Reset the form to what it was when it was loaded              |
| setData(value)                           | Set the value of a field                                      |
| setOptionData(fields, data)              | Set options on a multiple multi-select                        |
| setOptions(fields, options)              | Set options on a multi-select field                           |
| setRules(field, rules)                   | Programmatically add validation rules to a field              |
| validate(fields)                         | Run validate on the page                                      |

### Events

| Name    | Description                                                       |
|---------|-------------------------------------------------------------------|
| mounted | When the page is first loaded                                     |
| refresh | When the page is first loaded and every time .refresh() is called |

## Form Attribute

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
