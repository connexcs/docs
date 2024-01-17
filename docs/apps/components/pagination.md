# Pagination

## Description

Pagination is a mechanism for presenting and navigating through large chunks of information within a form in a structured way.

Imagine you have a form with hundreds of items to choose from, like products in a catalog. Without pagination, users would have to scroll through an endless list, making it incredibly time-consuming and frustrating.

<img src= "/apps/components/img/pagination.png">

## Use Case

1. **Dividing content**: When there's a large amount of data which split into smaller, bite-sized pages.
2. **Displaying current page**: Only a specific number of items are shown on each page, usually indicated by a page number or counter.
3. **Navigation controls**: Users can easily navigate between pages using various controls like page numbers, links, buttons, or arrows. This allows them to quickly find the information they need without scrolling through every single item.
4. **Improved user experience**: Reduces frustration and simplifies browsing large amounts of data, keeping users engaged and efficient.
5. **Better visual design**: Breaks down information into manageable chunks, making the form appear less overwhelming and cluttered.
6. **Performance optimization**: Reduces loading times by displaying only the necessary data on each page, especially for complex forms.
7. **Accessibility**: Makes the form easier to navigate for users with disabilities who may rely on keyboard navigation or screen readers.

### Interactivity

1. Animated Page Numbers
2. Interactive Thumbnails
3. Progress Bar
4. Smart Buttons
5. Scrolling Controls

## API

### Events

| **Name**| **Description**|
|----------------------|---------------------------------------------------------------------|
| `onChange (element)`| The onChange event occurs when the value of a field is changed|

### Methods

| **Name**| **Description**|**Parameters**|
|----------------------|---------------------------------------------------------------------|----|
|`this.addClassName`|Add style class to page item|`(fields: String(componentID), String[]; className: String)`|
|`this.removeClassName`|Remove page item style|`(fields: String(componentID), String[]; className: String)`|
|`this.getComponent`|Returns a component whose id has been passed as a parameter|`(component_ID: String(componentID), String[]; Object: Object)`|
|`this.hide(fields)`|Hides the field|`(fields: String(componentID)`|
|`this.show(fields)`|Displays the field|`(fields: String(componentID)`|
| `this.disable(fields)`| Disable input field from user interaction|`(fields: String(componentID), String[])`|
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
            this.addClassName('pagination_oet28hkk', 'abc')
            ```

    2. `this.removeClassName(fields, className)`
        ```js
        this.removeClassName('pagination_oet28hkk', 'abc')
         ```
    
    3. `this.hide(fields)`
        ```js
        var fields= ['pagination_oet28hkk']
        this.hide(fields)
        ```
    4. `this.show(fields)`
        ```js
        var fields= ['pagination_oet28hkk']
        this.show(fields)
        ```
    5. `this.disable(['fields'])`
        ```js
        this.disable(['pagination_oet28hkk'])
        ```
    6.`this.getValue('fieldName')`
        ```js
        var pagename = this.getValue('pagination_oet28hkk');
        console.log('getValue',pagename);
        ```
    
    6.  `this.getComponent('component_ID')`
        ```js
        var pagename = this.getComponent('pagination_oet28hkk');
        console.log('getComponent',pagename);
        ```

## Config

| **Name**|**Description**|**Icon**|
|---------------|----------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|
|**ID**| Pagination's unique identifier|<img src= "/apps/components/img/input_id.png">|
|**Name**| [**Optional**] The display name of the pagination field|<img src= "/apps/components/img/checkbox_name.png">|
|**Label Width**|Width of the label associated with an input field. It determines the horizontal space occupied by the label text|<img src= "/apps/components/img/input_labelwidth1.png">|
|**Label Wrap**| If the label is longer than the allowed width the text will continue on another line|<img src= "/apps/components/img/input_labelwrap1.png">|
|**Hide Label**| Hides the label on the form|<img src= "/apps/components/img/input_hidelabel.png">|
|**Page Size**|The page size determines how much information users see at a glance. A larger size shows more items per page, while a smaller size displays fewer|<img src= "/apps/components/img/pagination_pagesize.png">|
|**Pager Count**| Refers to the total number of visible page numbers displayed at once|<img src= "/apps/components/img/pagination_pagercount.png">|
|**Total**| Total number of pages you wish to keep for navigation|<img src= "/apps/components/img/pagination_total.png">|
|**Background**|Enable this option to add backdrop to the pages while navigating|<img src= "/apps/components/img/pagination_background.png">|
|**Custom Class**| An HTML class attribute which allows further customisation **[See Form Attribute > Style Sheets**](**add anchor text**)|<img src= "/apps/components/img/input_customclass.png">|
|**Attribute Action**|Enable **Data Binding** to connect the data to UI. <br> Enable **Hidden** to action to hide the field. <br> Enable **Disabled** action to make the field un-suable|<img src= "/apps/components/img/checkbox_attributeaction.png">|

## First time User?

If you are using the Page Builder components on the ConnexCS platform first time, we request you to use our guide on <a href="https://bani-appsection--connexcs-docs.netlify.app/apps/page-builder/#steps-to-use-components-in-the-page-builder" target="_blank">steps to use the Components</a>.