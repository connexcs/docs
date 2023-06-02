# Pages

Using Page Builder, you can customise the Control Panel, Customer Portal, and Web Phone. Pages help you enhance the functionality of these interfaces.

You can add Pages to several areas of these interfaces, such as Carrier, Customers, and Rate cards.

A page can be interactive, containing completed forms and then processed by ScriptForge.

!!! note "**Pages work together with [Button Builder](https://docs.connexcs.com/developers/button-builder/) to display a page on any Navigation bars.**"

The **Elements** in the Pages are powerful and increase flexibility for the features you want to include in your portal.

## Usage Cases

1. You can use Pages to redirect to any rule-book or manuals that you want to show your customers.

    **For example**, you can create a rule-book on how to use Script Forge with forms.

    **Another example** may include a manual with all the information on the offered services and the corresponding payments.

2. Interaction with external links using [**Scriptforge**](https://docs.connexcs.com/developers/scriptforge/) and integration with Pages.

3. You can use Pages to create interactive content. **For example**, getting input from the customers.
  
4. Server-side and client-side validation.

5. If you are using **Webphone**, you can collect the data in the form created in Pages.

6. Customers may create their payment processors. They can create their interface using Pages on the website. The integration of the processing system uses Scriptforge for execution.
  
7. Number Porting: You can create a form (using Pages) on the Customer Portal and ask for details. Once the form gets submitted, the requests reach Scriptforge for validation purposes. Scriptforge can update the customer on the status of their processed request.

## Build Form

1. Navigate to Developer :material-menu-right: Scriptforge IDE :material-menu-right: Pages and click <img src="/pages/add.png" alt="add" width="60"/> to create a new form.<img src="/pages/pages-page.png" alt="pages-page" width="5000"/>

2. Complete the form's **Name** and **Title** fields, then click **Save**. <img src="/pages/name-and-title.png" alt="name-and-title" width="450"/>

3. When you see the screen with the various pages, click on the form you created (Bani in this case).

4. A screen with options such as [**Basic Field**](https://bani--connexcs-docs.netlify.app/developers/pages/basic-field/), [**Advance Field**](https://bani--connexcs-docs.netlify.app/developers/pages/advance-field/), [**Layout**](https://bani--connexcs-docs.netlify.app/developers/pages/layout/), **Component Attribute**, and [**Form Attribute**](https://bani--connexcs-docs.netlify.app/developers/pages/introduction/#form-attribute) enables you to design attractive and interactive interfaces for your customers.

<img src="/pages/fields.png" alt="fields" width="5000"/>

## [Basic Fields](https://bani--connexcs-docs.netlify.app/developers/pages/basic-field/)

!!! note "Know More"
    Click on each **Icon** to find out more about each element.

| **Icon**| **Description**|
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [<img src="/pages/input-icon.png" alt="input" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/basic-field/#input-and-textarea)| The input field allows you to enter single-line text.|
| [<img src="/pages/textarea.png" alt="textarea" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/basic-field/#input-and-textarea)| A textarea is useful when you want to allow users to enter a sizeable amount of free-form text, for example, a review or feedback.|
| [<img src="/pages/number.png" alt="number" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/basic-field/#number)| The number field helps to start a counter from a minimum to a maximum value.|
| [<img src="/pages/radio.png" alt="radio" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/basic-field/#radio-button-and-checkbox-button)| Radio buttons allow you to select one option out of the several options.|
| [<img src="/pages/checkbox.png" alt="checkbox" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/basic-field/#radio-button-and-checkbox-button)| You can use Checkboxes when there is a list of options and the user may select any number of choices, including zero, one, or several. <br><br> In other words, each checkbox is independent of all the other checkboxes in the list, so checking one box doesn't un-check the others.|
| [<img src="/pages/select.png" alt="select" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/basic-field/#select)| The select option is a drop-down list with various options; you can either select one or several options.|
| [<img src="/pages/time.png" alt="time" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/basic-field/#time)| The time picker allows you to pick a time (hh: mm :ss). <br> You can also select the start and end time.|
| [<img src="/pages/date.png" alt="date" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/basic-field/#date)| The date picker allows you to pick a date (yyyy-mm-dd).<br> You can also select the start and end dates.|
| [<img src="/pages/rate.png" alt="rate" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/basic-field/#rate)| A rating is an evaluation or assessment of something related to quality, quantity, or some combination of both. Thus, you can add this wherever you want to rate the quality of a call, cost, or latency.|
| [<img src="/pages/color.png" alt="color" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/basic-field/#color)| The color picker allows you to change the color.|
| [<img src="/pages/switch.png" alt="switch" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/basic-field/#switch)| The switch allows switching between "true" and "false" values.|
| [<img src="/pages/slider.png" alt="slider" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/basic-field/#slider)| The slider is a  control for selecting a single value from a continuous range of values.|
| [<img src="/pages/text.png" alt="text" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/basic-field/#text)| Text displays a non-interactive piece of text to the user. You can use Text elements to provide captions or labels for other GUI controls or to display instructions or other texts.|
| [<img src="/pages/html.png" alt="html" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/basic-field/#html)| HTML provides you with the option of writing the HTML code.|
| [<img src="/pages/button.png" alt="button" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/basic-field/#button)| The button performs an action when clicked, either for redirecting or for viewing purposes.|
| [<img src="/pages/link.png" alt="link" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/basic-field/#link)| Link lets you add an external link to the page. When you click on the link, you will be redirected to that website, document, etc.|
| [<img src="/pages/cascader.png" alt="cascader" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/basic-field/#cascader)| Cascader is a multi-level dropdown option. When a data set has a clear hierarchical structure, it can be viewed and selected through the cascading selector.|
| [<img src="/pages/steps.png" alt="steps" width="175"/>](https://bani--connexcs-docs.netlify.app/developers/pages/basic-field/#steps)| Use Steps to show the progress of a process. For each completed step, the corresponding step number gets highlighted.|

## [Advance Fields](https://bani--connexcs-docs.netlify.app/developers/pages/advance-field/)

!!! note "Know More"
    Click on each **Icon** to learn more about each element.

| **Icon**| **Description**|
|-----------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [<img src="/pages/data-table.png" alt="data table" width="135"/>](https://bani--connexcs-docs.netlify.app/developers/pages/advance-field/#data-table-advanced-grid-and-multi-form)      | A Data table is a document composed of columns, rows, and cells that contain specific values.<br> They store information that people can retrieve later and update as required.<br> Use it for importing or editing several entries.|
| [<img src="/pages/advanced-grid.png" alt="advanced-grid" width="135"/>](https://bani--connexcs-docs.netlify.app/developers/pages/advance-field/#data-table-advanced-grid-and-multi-form)| The grid displays a grid-like layout on the various navigation bars like Customers, Carriers, etc.<br> It's more useful for editing and displaying information on the system than feeding it information.|
| [<img src="/pages/graph.png" alt="graph" width="135"/>](https://bani--connexcs-docs.netlify.app/developers/pages/advance-field/#graph)| A graph allows you to display graphs of various parameters like ASR, RTP.|
| [<img src="/pages/multi-form.png" alt="multi-form" width="135"/>](https://bani--connexcs-docs.netlify.app/developers/pages/advance-field/#data-table-advanced-grid-and-multi-form) | The Multi-form feature allows you to prepare several forms. <br> If you want several duplicate copies (cloning) of the created form, you can use this advanced component.|
| [<img src="/pages/dialog.png" alt="dialog" width="135"/>](https://bani--connexcs-docs.netlify.app/developers/pages/advance-field/#dialog)| A dialog is a small window that prompts the user to make a decision or enter extra information.<br>A dialog doesn't fill the screen and is normally used for events that require users to take an action before they can proceed.|

## [Layout](https://bani--connexcs-docs.netlify.app/developers/pages/layout/)

!!! note "Know More"
    Click on each **Icon** to learn more about each element.

| **Icon**| **Description**|
|-------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [<img src="/pages/collapse.png" alt="collapse" width="155"/>](https://bani--connexcs-docs.netlify.app/developers/pages/layout/#collapse) | The collapse option allows you to make a section, or group of fields, collapsible. It's useful when there are several sections in your form and you want them to take up less vertical space. <br><br> You may use collapsible or standard sections to adjust your form layout or conditionally hide or show a group of fields. |
| [<img src="/pages/inline.png" alt="inline" width="155"/>](https://bani--connexcs-docs.netlify.app/developers/pages/layout/#inline)| The inline feature allows you to create a reactive layout where each element occupies only the width it requires.|
| [<img src="/pages/alert.png" alt="alert" width="155"/>](https://bani--connexcs-docs.netlify.app/developers/pages/layout/#alert)| An alert occurs in response to an event and can trigger a notification. It brings something to the user's attention and provides a way of sending a message that the user can read without opening the app, for example, a low-balance alert.|
| [<img src="/pages/grid.png" alt="grid" width="155"/>](https://bani--connexcs-docs.netlify.app/developers/pages/layout/#grid)| A grid layout provides equal size for two-dimensional layouts.|
| [<img src="/pages/table.png" alt="table" width="155"/>](https://bani--connexcs-docs.netlify.app/developers/pages/layout/#table)| A table allows you to arrange the elements in rows and columns. The rows and columns are added dynamically as you build the table.|
| [<img src="/pages/tabs.png" alt="tabs" width="155"/>](https://bani--connexcs-docs.netlify.app/developers/pages/layout/#tabs)| Adding tabs to a form can make it more organised and easier to use if the form contains several controls. You can place the related controls on separate pages of the tab.|

You can change the characteristics of each component. You can click on **Component Attribute** to change the properties of the elements.

## Form Attribute

<img src="/pages/caformattribute.png" alt="formattribute" width="260"/>

The Form attribute helps you specify values for the following parameters for all the fields in the form:

1. **Form Width**: Form width helps you decide the dimensions of the complete form.

2. **Label Position**: Label position helps you position the field labels.<br> You can decide between Left, Right and Top.

3. **Size**: Size describes the dimensions of all the fields in the form. <br> You can choose from **Large**, **Small**, and **Mini**.

4. **Style sheets**: You can add custom Style Sheets to make the interface look more pleasing.

5. **Data Source**: Data Source can be External, from Script Forge or a Database.

**6. Action Panel**: Action Panel allows you to specify the actions for buttons and link controls.

### Configure Data Source

<img src="/pages/datasource.png" alt="datasource" width="52600"/>

1. Click on the **Data Source Setting**.

2. Click on **Add Data Source**, and the data source setting will appear on the right-side of the panel.

3. **Name**: The data source name, which must be unique, its used to display and select data sources.

4. You can select the Data Source from 3 options: [**Script Forge**](https://bani--connexcs-docs.netlify.app/developers/scriptforge/), **External** ( allows you to get data from external services to your end users.), and **Database** [(Refer for API documentation)](https://page-builder-api-docs.connexcs.com/database.html).

4.1. **External Data Source**.

4.2 When you select **External** database you can select from 4 HTTP requests:

<img src="/pages/datasourceexternal.png" alt="datasourceexternal" width="6260"/>

| **Request Name** | **Description**|
|------------------|----------------------------------------------------------------------------------|
| **GET**          | Use GET request to read / retrieve data from a web server|
| **POST**         | Use POST request to send data (file, form data, etc.) to the server|
| **PUT**          | Use PUT request to revise the data on the server.|
| **DELETE**|Use DELETE request to delete the data on the server at a specified location.|

* **Header**:

    * To send meta data
    * Content Type - text/html or text/JSON
    * Request authorization - authentication information
    * Response caching
    * Response cookies

* **Params**:By using the params keyword, you can specify a method parameter that takes a variable number of arguments.

5. **Whether the form is initialized to send the request**: It's an asynchronous activity that sends an HTTP request and waits for a response from the web server.

6. **Data Processing**

| **Data Processing Type**| **Description**| **Parameters**|
|---------------------------------------------|----------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Before the request is sent**| Before the request is sent, configure the parameters, headers, address and other options of the request. | **1. Modify the request address**<br>config.url = 'new request URL'.<br>**2. Modify the request** headerconfig.headers = {'X-Requested-With': 'XMLHttpRequest'}.<br>**3. Modify request query** parametersconfig.params = {ID: 12345}.<br>**4. Request the data sent by the body, not applicable to GET requests**<br>config.data = {firstName: 'Fred'}. |
| **When requesting to return response data** | After the interface request is successful, the returned data can be processed.| **res: The data returned by the interface can be processed here**.|
| **When an error occurs in the request**| PUT request modifies the data on the server.||

**7. Request Test**

After completing the data source configuration, you can click on **Request Test** to verify the data source interface to check whether the filling is successful and whether the returned data is correct.

## Preview Options

<img src="/pages/previewoptions.png" alt="previewoptions" width="320"/>

Click on the **Preview** button to view the form.

You can choose between the **Monitor** view, **Tablet** view, and **Cellphone** view.

1. **Get Data**: Get Data displays the raw data from the form.

2. **Reset**: Resetting will erase all the data filled in the form.

3. **Disabled or Enabled Edit**: Disabled edit won't allow you or your customer to enter data in the form; Enabled edit will allow you or your customer to enter the data in the form.

4. **Print Read Mode**: Print Read mode allows you to view the form before printing.

5. **Print**: The print option will let you print the filled form.

6. **Close**: Close will you exit from the preview window.
<!--stackedit_data:
eyJoaXN0b3J5IjpbMjAxMTgxMzczXX0=
-->