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