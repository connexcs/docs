# Grid

## Description

A grid component in a form is a UI element that allows you to display and organize data in a tabular format within a form.

It typically consists of a set of rows and columns, each containing a specific data element or input field.

Grid components are commonly used to present structured data in a clear and organized manner, making it easier for users to understand and interact with the form.

<img src= "/apps/components/img/grid.png">

## Use Case

1. **Data Organization**
2. **Visual Representation**
3. **User Input Management**
4. **Responsive Layout**

Examples may include:

1. Data Validation
2. Product Order Forms
3. Employee Management Forms
4. Inventory Management Forms
5. Data Collection Forms

## API

### Methods

| **Name**| **Description**|
|----------------------|---------------------------------------------------------------------|
|**this.addClassName(fields, disabled)**|Add style class to form item|
|**this.removeClassName(fields, disabled)**|Remove form item style|
//| **this.disable(fields)**| Disable input field from user interaction|
//| **this.enable(fields)**| Disable input field from user interaction|
| **this.getComponent(name) → {Object}**|Retrieve a component from an object or element|
| **this.getValue(fieldName)**|Get A Value From An Object|
//| **this.getValues() → {Object}**|Get the values of all fields when values change|
|**this.hide(fields)**|Hides the field|
|**this.show(fields)**|Displays the field|
//|**this.setData(Value)**|Set the data in the field|

## Config

| **Name**|**Description**|**Image**|
|---------------|----------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|
|**ID**| This is a unique identifier which is used to access the field by the API and the key of the field when the form is saved|<img src= "/apps/components/img/input_id.png">|
|**Grid Spacing**| [**Optional**] Space between various components inside the grid|<img src= "/apps/components/img/grid_gridspacing.png">|
|**Flex Layout**| [**Optional**] Allows flexibility to arrange the various components inside the grid|<img src= "/apps/components/img/grid_flexlayout.png">|
|**Horizontal Arangement**|Select from various options **Start**, **End**, **Center**, **Space Around**, **Space Between** for horizontal arrangement of the compoents inside the grid|<img src= "/apps/components/img/grid_horizontal.png">|
|**Vertical Arangement**|Select from various options **Top**, **Middle**, **Bottom** for vertical arrangement of the compoents inside the grid|<img src= "/apps/components/img/grid_vertical2.png">|
|**Custom Class**| A HTML class attribute which allows further customisation **[See Form Attribute > Style Sheets**](**add anchor text**)|<img src= "/apps/components/img/input_customclass.png">|
|**Attribute Action**|Enable **Hidden** action to hide the field|<img src= "/apps/components/img/alert_arrtibuteaction.png">|
