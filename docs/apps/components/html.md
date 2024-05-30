# HTML

## Description

The <html> tag represents the root of an HTML document.

The <html> tag is the container for all other HTML elements (except for the <!DOCTYPE> tag).

<img src= "/apps/components/img/html.png">

## Use Case

### setHTML and set Template

setHTML and set Template are data setting capabilities of HTML using the [Templating Language](https://handlebarsjs.com/guide/#what-is-handlebars).

#### setHTML

The setHTML capability allows you to set and display data.

This capability injects variable into a template.

!!! Example
    HTML Code:
    {% raw %}
    ```js
    <b style="color: red;">
        Hi my name is {{name}} //{{}}➡️templating language
    </b>
    ```
    {% endraw %}

    HTML Output:
    {% raw %}
    <span style="color:red">Hi my name is {{name}}</span>
    {% endraw %}

    setHTML Code:
    ```js
    this.setData({html: I don't need no template})
    ```
    
    HTML Output:
    
    I don't need no template

#### set Template

The set Template capability allow you to use it for dynamic HTML solutions like rendering or updating dynamic data.

It uses a Template and an input object to generate HTML.

It always reads from the default value.

This capability will override the entire HTML text.

!!! Example
    HTML Code:
    {% raw %}
    ```js
    <b style="color: red;">
        Hi my name is {{name}} //{{}}➡️templating language
    </b>
    ```
    {% endraw %}

    HTML Output:
    {% raw %}
    <span style="color:red">Hi my name is {{name}}</span>
    {% endraw %}

    set Template Code:
    ```js
    this.setData({html: {name: `Alice`}}) // in the HTML field setting an object here
    ```
    
    HTML Output:
    
    <span style="color:red">Hi my name is Alice</span>

This capability uses Handlebars to create the template.

To know more about Handlebars [click here](https://handlebarsjs.com/guide/#html-escaping).

## API

### Methods

| **Name**| **Description**|**Parameters**|
|---------|----------------|--------------|
|`this.hide`|Hides the field|`(fields: String`&#124;`String[])`|
|`this.show`|Displays the field|`(fields: String`&#124;`String[])`|

!!! Info
    1. The show() and hide() methods can also be used to control the visibility of an HTML component in response to user input.
    2. **Fields** refers to a **component ID** or a **list of component IDs**. You can fetch the ID from the **Component Attribute** panel in the Page Builder.
    3. Before using **this.show(fields)**, make sure the component is **hidden**. This can be done using **this.hide(fields)** or by **enabling** the **Hidden checkbox** in the Component Attribute panel

#### Steps to use the methods for the Page Builder components

1. Go to Form Attribute :material-menu-right: Action Panel :material-menu-right: Setting :material-menu-right: (Mounted | refresh | click 'Add action').
2. Write the method/code as shown in the **Example** below.
3. Click on `Save`.
4. On the main screen click on `Save` again.
5. Click on `Preview` to see the code in action.
<img src= "/apps/components/img/html2.png">

!!! Example

    1. `this.hide(fields)`
        ```js
        var fields= ['html_0h6cj3iv']
        this.hide(fields)
        ```
    2. `this.show(fields)`
        ```js
        var fields= ['html_0h6cj3iv']
        this.show(fields)
        ```

## Config

| **Name**|**Description**|**Icon**|
|---------|---------------|--------|
|**ID**| The HTML component's unique identifier|<img src= "/apps/components/img/input_id.png">|
|**Name**| [**Optional**] The display name of the HTML field|<img src= "/apps/components/img/checkbox_name.png">|
|**Width**| [**Optional**] Width of the field|<img src= "/apps/components/img/input_width.png">|
|**Label Width**|Width of the label associated with an input field. It determines the horizontal space occupied by the label text|<img src= "/apps/components/img/input_labelwidth1.png">|
|**Label Wrap**| If the label is longer than the allowed width the text will continue on another line|<img src= "/apps/components/img/input_labelwrap1.png">|
|**Hide Label**| Hides the label on the form|<img src= "/apps/components/img/input_hidelabel.png">|
|**Text Prompt**| A description to aid the user when completing the field|<img src= "/apps/components/img/input_textprompt.png">|
|**Attribute Action**|Enable **Data Binding** to connect the data to UI. <br> Enable **Hidden** action to hide the field|<img src= "/apps/components/img/group_attributionaction.png">|

## First time User?

If you are using the Page Builder components on the ConnexCS platform for the first time, we request you to use our guide on <a href="https://docs.connexcs.com/apps/page-builder/#steps-to-use-components-in-the-page-builder" target="_blank">steps to use the Components</a>.
