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
| **onChange (element)**| The onChange event occurs when the value of an field is changed|

### Methods

| **Name**| **Description**|
|----------------------|---------------------------------------------------------------------|
|**this.addClassName(fields, disabled)**|Add style class to form item|
|**this.removeClassName(fields, disabled)**|Remove form item style|
| **this.disable(fields)**| Disable input field from user interaction|
| **this.enable(fields)**| Disable input field from user interaction|
| **this.getComponent(name) → {Object}**|Retrieve a component from an object or element|
| **this.getValue(fieldName)**|Get A Value From An Object|
//| **this.getValues() → {Object}**|Get the values of all fields when values change|
|**this.hide(fields)**|Hides the field|
|**this.show(fields)**|Displays the field|
//|**this.setData(Value)**|Set the data in the field|

## Config

| **Name**|**Description**|**Icon**|
|---------------|----------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|
|**ID**| This is a unique identifier which is used to access the field by the API and the key of the field when the form is saved|<img src= "/apps/components/img/input_id.png">|
|**Name**| [**Optional**] The visual identifier label of the field|<img src= "/apps/components/img/checkbox_name.png">|
|**Label Width**|Width of the label associated with an input field. It determines the horizontal space occupied by the label text|<img src= "/apps/components/img/input_labelwidth1.png">|
|**Label Wrap**| If the label is longer than the allowed width the text will continue on another line|<img src= "/apps/components/img/input_labelwrap1.png">|
|**Hide Label**| Hides the label on the form|<img src= "/apps/components/img/input_hidelabel.png">|
|**Page Size**|The page size determines how much information users see at a glance. A larger size shows more items per page, while a smaller size displays fewer|<img src= "/apps/components/img/pagination_pagesize.png">|
|**Pager Count**| Refers to the total number of visible page numbers displayed at once|<img src= "/apps/components/img/pagination_pagercount.png">|
|**Total**| Total number of pages you wish to keep for navigation|<img src= "/apps/components/img/pagination_total.png">|
|**Background**|Enable this option to add backdrop to the pages while navigating|<img src= "/apps/components/img/pagination_background.png">|
|**Custom Class**| A HTML class attribute which allows further customisation **[See Form Attribute > Style Sheets**](**add anchor text**)|<img src= "/apps/components/img/input_customclass.png">|
|**Attribute Action**|Enable **Data Binding** to connect the data to UI. <br> Enable **Hidden** to action to hide the field. <br> Enable **Disabled** action to make the field unsuable|<img src= "/apps/components/img/checkbox_attributeaction.png">|