# Advance Field

You can further enhance your form with Advance Fields

You can organise your data using Advanced Grid fields and DataTables.

You can create data with effective visual effects by using options like Graphs and Dialog.

## Data Table, Advanced Grid and Multi-Form

<img src="/pages/cadatatable.png" alt="datatable" width="260"/><br><img src="/pages/cadvancedgrid.png" alt="advancedgrid" width="260"/><br><img src="/pages/camultiform.png" alt="multiform" width="260"/>

1. **Paging**: DataTables can split the rows in tables into individual pages, which is an efficient method of showing several records in a small space.

    The minimum value of a page is 5.

2. **Page Size**: Page size defines the number of rows to display on a single page when using paging.

3. **Show Control**: The show control either lets you hide or display the serial number column.

4. **Default Value**: A default value is a value that's automatically assigned to the column when you create a DataRow.

5. **Attribute Action**:

* **Deletable**: Deletable option will remove the selected row from the DataTable entirely.
* **Addible**:  Addible option will add a row to the DataTable.

6. **Action Settings**:

| **Event Name**| **Description**|
|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **onChange**| This option allows users to define custom functionality that should occur whenever a change to the selection within a Datatable occurs.<br>For example, when the selected user changes, you can update the selected user's phone number or email.  |
| **onRowAdd**| Triggers when a new row adds to the Datatable. You can call a function to perform any operation.|
| **onRowRemove**  | Triggers when a new row adds to the Datatable. You can call a function to perform any operation after the row gets deleted.|
| **onPageChange** | Triggers each time you navigate to a new page from the pagination control.|

### Example of creating an Advanced Grid (Cars Information)

1. Drag and Drop a **Button** from the **Basic Field**.
2. Drag and Drop the **Advanced Grid** from the **Advance Field**.
3. Drag and Drop 3 **Input** fields from the **Basic Field**  to the Advanced Gird field.
4. Rename the **Input fields** as **Make**, **Model**, and **Price**.
5. Drag and Drop a **Button** from the **Basic Field** to the Advanced Gird field and rename the button to **View Data**.

<img src= "/pages/ag1.png" width= "450">

6. Now we will add some actions when we click the button.
7. The first thing is that the data should load when we click the `Preview` button.
8. Click on **Form Attribute > Action Panel > Setting > Function refresh**. Then add the code.

```js
    this.setData({
	aggrid: [
		{ make: 'Toyota', model: 'Celica', price: 35000 },
		{ make: 'Ford', model: 'Mondeo', price: 32000 },
		{ make: 'Porsche', model: 'Boxster', price: 72000 }
	]
    });
```
9. Create a new function `viewButton`. For this function, when we click the it will show you some details in the `Console Log`.
    ```js
    console.log('Starting Arguments');

    // Declare and define the variables (You might want to replace the values with actual data)
    let args = 'This is Toyota';
    let arg = 'Its a good car';

    // Check if the variables exist and log messages accordingly
    if (args) console.log('This is Toyota', args);
    if (typeof arguments !== 'undefined') console.log('Hello Userland', arguments);
    if (arg) console.log('This is Toyota', arg);
    ```

10. Click on the **Preview** button to view the output.

<img src= "/pages/ag2.png", width= "1500">

<iframe width="760" height="515" src="/pages/agv.mp4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Graph

<img src="/pages/cagraph.png" alt="graph" width="260"/>

1. **Width**: Width allows you to decide the horizontal width of the graph.

2. **Height**: Width allows you to decide the vertical height of the graph.

3. **Label Width**: Label width helps you change the dimensions of the Name of the graph.

[**Click here for API documentation for Graphs actions with examples**](https://page-builder-api-docs.connexcs.com/echart) for more examples on graphs.

## Dialog

<img src="/pages/cadialog.png" alt="dailog" width="260"/>

1. **Width**: Width allows you to set the dimension of the Dialog box.

2. **Visible**: The visible option decides whether to display or hide the Dialog box.

3. **Show Close**: Whether to show a close button for closing the dialog box.

4. **Show Cancel button**: Whether to show a cancel button on the dialog box.

* **Button Text:** Button text lets you rename the cancel button.

5. **Show Confirm button**: Whether to show a confirm button on the dialog box.

* **Button Text:** Button text lets you rename the confirm button.
* **Loading:** Check the loading option to show animation while loading data before the customer clicks on the confirm button.

6. **Center**: Center option lets you place the confirm and cancel buttons in the center of the dialog box.

7. **Margin Top**: Margin Top lets you decide the position of the dialog box from the top of the form.  

8. **Action Settings**:

| **Event Name** | **Description** |
|----------------    |---------------------------------------------------------------------------------------|
| **onConfirm**| You can write custom code for what will happen when the customer clicks the onConfirm button. |
| **onCancel** | You can write a custom code for what will happen when the customer clicks the onCancel button.|

!!! info "The dialog can be manipulated by calling the method of the component instance:"
    * **show dialog**: this.getComponent('dialog field identifier').open()
    * **close dialog**: this.getComponent('dialog field identifier').close()
    * **validate data in dialog**: this.getComponent('dialog field identifier').validate()
    * **dialog fields show hidden**: this.getComponent('dialog field identifier').hide([name]).
                                     this.getComponent('dialog field identifier').display(['name'])
 [**Click here for the API documentation on Dialog**](https://page-builder-api-docs.connexcs.com/dialog.html) for more methods and examples on dialog.
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTIxMjgwMjM0ODNdfQ==
-->