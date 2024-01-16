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

| **Name**| **Description**|**Parameters**|
|----------------------|---------------------------------------------------------------------|----|
|`this.addClassName`|Add style class to page item|`(fields: String(componentID), String[]; className: String)`|
|`this.removeClassName`|Remove page item style|`(fields: String(componentID), String[]; className: String)`|
|`this.getComponent`|Returns a component whose id has been passed as a parameter|`(component_ID: String(componentID), String[]; Object: Object)`|
|`this.hide(fields)`|Hides the field|`(fields: String(componentID)`|
|`this.show(fields)`|Displays the field|`(fields: String(componentID)`|
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
         this.addClassName('grid_th1wozzk', 'abc')
         ```

    2. `this.removeClassName(fields, className)`
        ```js
        this.removeClassName('grid_th1wozzk', 'abc')
        
        ```
    3. `this.hide(fields)`
        ```js
        var fields= ['grid_th1wozzk']
        this.hide(fields)
        ```
    4. `this.show(fields)`
        ```js
        var fields= ['grid_th1wozzk']
        this.show(fields)
        ```
    5.  `this.getValue('fieldName')`
        ```js
        var gridname = this.getValue('grid_th1wozzk');
        console.log('getValue',datanamee);
        ```
    6. `this.getComponent('component_ID')`
        ```js
        var gridname = this.getComponent('grid_th1wozzk');
        console.log('getComponent',gridname);

## Config

| **Name**|**Description**|**Icon**|
|---------------|----------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|
|**ID**| Grid's unique identifier |<img src= "/apps/components/img/input_id.png">|
|**Grid Spacing**| [**Optional**] Space between various components inside the grid|<img src= "/apps/components/img/grid_gridspacing.png">|
|**Flex Layout**| [**Optional**] Allows flexibility to arrange the various components inside the grid|<img src= "/apps/components/img/grid_flexlayout.png">|
|**Horizontal Arrangement**|Select from various options **Start**, **End**, **Center**, **Space Around**, **Space Between** for horizontal arrangement of the components inside the grid|<img src= "/apps/components/img/grid_horizontal.png">|
|**Vertical Arrangement**|Select from various options **Top**, **Middle**, **Bottom** for vertical arrangement of the components inside the grid|<img src= "/apps/components/img/grid_vertical4.png">|
|**Custom Class**| An HTML class attribute which allows further customisation **[See Form Attribute > Style Sheets**](**add anchor text**)|<img src= "/apps/components/img/input_customclass.png">|
|**Attribute Action**|Enable **Hidden** action to hide the field|<img src= "/apps/components/img/alert_arrtibuteaction.png">|

## First time User?

If you are using the Page Builder components on the ConnexCS platform first time, we request you to use our guide on <a href="https://bani-appsection--connexcs-docs.netlify.app/apps/page-builder/#steps-to-use-components-in-the-page-builder" target="_blank">steps to use the Components</a>.