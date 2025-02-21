# Invoice

**Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: Invoice**

The invoice system allows for seamless customer billing and payment tracking.

The tool is another way to end gaps in communication between providers and customers.

!!! note "Global Invoices"
    You can also manage Invoices in **Global :material-menu-right: Invoices**.

**Key Features**:

+ **Invoice Generation**:
    + **View**, **select**, and **manage** invoices within the portal.
    + **Modify** invoice details, including line items, tax descriptions, and unit prices.
    + **Generate** invoices based on defined packages and usage.

+ **Exports**:
    + Download invoices as PDFs for external sharing and for offline use.

+ **Payments & Reconciliation**:
    + Add and allocate payments against invoices.
    + Displays outstanding balances and payment history.

+ **External Accounting System Integration**:
    + Supports export to **ClearBooks**, **Xero**, and **FreshBooks** for enhanced tax, depreciation, and discount management.
    + Export invoices to ClearBooks via API.

!!! Tip "ConnexCS Invoice Philosophy"
    While invoices can be managed within ConnexCS, external accounting systems are recommended for advanced financial tracking.

## Add new Invoices

To add a new invoice:

1. Click :material-plus: at the top of the page.
2. Select the customer from the drop-down menu.
3. Set an Invoice Date in the bottom right.
4. Click **`Edit Invoice Item`**.

    ![alt text][invoice-8]

5. The selected **Package** will autocomplete the Quantity, Unit Price, and Tax. You can revise these parameters as needed.
6. Set a date range.
7. Click **`Save`**, and then **`Save`** the Invoice.

## View and Edit Invoices

**View**
To download a PDF version of an Invoice, select ![alt text][invoice-pdf].

**Edit**
Click ![alt text][invoice-edit] to change the date, then click **`Edit Invoice Item`** to revise additional parameters.

!!! note "Invoice Line Grouping"
    Use Invoice Line Grouping to group the invoice based on the destination or day. You can set this in **My Account** > **Settings**.

## Allocate Payment

To allocate customer payments to a specific invoice:

1. Click `View Payments` next to the Invoice.
2. Click :material-plus:.
3. Select the required payment.
4. Enter the total paid.
5. Click **`Save`**.

## Automatic Invoice Generation

You can also generate an invoice through **Schedule Report**.

[Click here](https://docs.connexcs.com/report/#schedule-report) to check the process for creating the invoice.

[invoice-8]: /misc/img/229.png "Invoice-8"

[invoice-pdf]: /misc/img/invoice-pdf.png "Invoice PDF"
[invoice-edit]: /misc/img/invoice-edit.png "Edit Invoice"
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTAzNjY4NTkzMl19
-->