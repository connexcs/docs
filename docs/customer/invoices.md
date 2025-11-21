# Invoice

---
**Document Metadata**
<br>**Category**: Customer Account Management / Invoices & Billing Documents</br>
**Audience**: Administrators, Engineers, Billing & Finance Teams
<br>**Difficulty**: Intermediate</br>
**Time Required**: Approximately 30 – 60 minutes
<br>**Prerequisites**: Active ConnexCS account with Customer module access; user permissions to view/generate invoices</br>
**Related Topics**: [Customer → Main](https://docs.connexcs.com/customer/main/), [Document Guide – Invoices](https://docs.connexcs.com/guides/doc-guide/)
<br>**Next Steps**: [Configure Invoice Schedule & Template](https://docs.connexcs.com/customer/invoices/#automatic-invoice-generation), [Download or View Generated Invoices](https://69fd1317.docs-eri.pages.dev/customer/invoices/#download-invoices)</br>

---

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

## Add new Invoices

To add a new invoice:

1. Click :material-plus: at the top of the page.
2. Select the customer from the drop-down menu.
3. Set an Invoice Date in the bottom right.
4. Click **`Edit Invoice Item`**.

    <img src= "/misc/img/2291.png" style="border: 2px solid #4472C4; border-radius: 8px;">

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

## Download Invoices

1. Login to your account.
2. Navigate to **Management :material-menu-right: Customer :material-menu-right: Customer [Name] :material-menu-right: Main :material-menu-right: Summary :material-menu-right: Daily, Weekly or Monthly :material-menu-right: Download Invoice** (csv format).

<img src= "/misc/img/in1.png" style="border: 2px solid #4472C4; border-radius: 8px;">

## Allocate Payment

To allocate customer payments to a specific invoice:

1. Click `View Payments` next to the Invoice.
2. Click :material-plus:.
3. Select the required payment.
4. Enter the total paid.
5. Click **`Save`**.

## Automatic Invoice Generation

To generate invoices atomatically:

1. Login to your **Control Panel**.
2. Navigate to **Management :material-menu-right: Customer :material-menu-right: Customer [Name] :material-menu-right: `Edit` :material-menu-right: Config :material-menu-right: Invoice Schedule**.
3. Select `Daily`, `Weekly`, or `Monthly` for the Invoice Schedule for automatic invoice generation.
4. Once enabled, the option to auto-generate an invoice will appear under **Customer :material-menu-right: Main :material-menu-right: Auto Generate Invoice**. Click this option to generate the invoice.

[invoice-8]: /misc/img/229.png "Invoice-8"

[invoice-pdf]: /misc/img/invoice-pdf.png "Invoice PDF"
[invoice-edit]: /misc/img/invoice-edit.png "Edit Invoice"
