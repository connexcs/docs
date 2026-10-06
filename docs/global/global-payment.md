# Global Payment

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Global / Payments<br> <strong>Audience</strong>: Administrators, Billing Teams, Finance Teams, Operations Teams<br> <strong>Difficulty</strong>: Intermediate<br> <strong>Time Required</strong>: Approximately 15–30 minutes<br> <strong>Prerequisites</strong>: Active ConnexCS account with access to the Global section; familiarity with Customers, Companies, payments, and billing information.<br> <strong>Related Topics</strong>: <a href="https://docs.connexcs.com/customer/payment">Payment</a>, <a href="/customer/invoices">Invoices</a>, <a href="/global/global">Global</a>, <a href="/customer/customer">Customer Management</a><br> <strong>Next Steps</strong>: Navigate to <strong>Global > Payment</strong>, review payments across the account, create or update payment records where required, and use the available Columns, Filters, and Custom Settings options to manage the payment view.<br>

</details>

**Global :material-menu-right: Payment**

## Overview

The **Global Payment** section provides a centralized view of **all Payments across the account**.

It allows administrators and billing teams to review payment records associated with different Companies from a single location.

The Payment view provides information such as the Company, payment description, payment date, total amount, and payment status.

## Creating a Payment

To create a payment:

1. Navigate to **Global :material-menu-right: Payment**.
2. Click **`+`** in the top-right corner.
3. Complete the payment fields. *Payment Fields are described below*.
4. Click **`Save`**.

### Payment Fields

The Payment window shown in the interface contains the following fields:

| Field                      | Description                                                                             |
| -------------------------- | --------------------------------------------------------------------------------------- |
| **Company**                | Required field used to select the Company associated with the payment.                  |
| **Description**            | Required field used to enter a description or reference for the payment.                |
| **Total**                  | Required field used to specify the payment amount.                                      |
| **Payment Fee (Ref Only)** | Provides a place to record payment-fee information for reference|
| **Status**                 | Defines the current status of the payment example Cancelled, Pending or Complated.|

### Columns

The **Columns** panel allows you to control which Payment fields are displayed in the table.

Use the column controls to show or hide fields according to your requirements.

### Filters

The **Filters** panel allows you to narrow the Payment records displayed in the table.

For example, filters can be used to locate payments for a particular Company, review payments within a specific date range, or identify payments with a particular status.

!!! note "The exact filter conditions available depend on the type of field being filtered."

### Custom Settings

The **Custom Settings** panel allows you to customize the appearance of the IP Authentication table.

1. **Theme**: The **Theme** setting controls the visual appearance of the IP Authentication table.

2. **Row Height**: The **Row Height** setting controls the amount of vertical space used for each IP Authentication record.

      * **Lower row height** — Displays more records within the available screen space.
      * **Higher row height** — Provides more spacing between records for easier reading.

These settings affect only the presentation of the IP Authentication list and do not change the underlying authentication configuration.

<img src="/misc/img/globalpaymen.png" style="border: 2px solid #4472C4; border-radius: 8px;">

## Payment Actions

The Global Payment page provides controls for working with payment records, including:

* **Add (`+`)** — Create a payment record.
* **Refresh** — Reload the payment list.
* **Delete** — Delete selected records where permitted.
* **Search** — Locate payment records.
* **Columns** — Configure the fields displayed in the table.
* **Filters** — Narrow the payment list based on available fields.
* **Custom Settings** — Customize the table presentation.

## Use Cases

The Global Payment section can be used to:

* View all payments across the account.
* Review payments associated with Companies.
* Check payment dates and amounts.
* Review payment descriptions and statuses.
* Create payment records.
* Search for specific payments.
* Filter payment records for billing and financial review.
* Customize the Payment table using Columns and Custom Settings.

## Alternate Location

Payments can also be accessed from:

* **Customer :material-menu-right: [Customer Name] :material-menu-right: Payment**

The Global Payment view provides centralized access to payments across the account, while the Customer-level view provides payment information for an individual Customer.

!!! info "More Information"
    *See [**Payment**](https://docs.connexcs.com/customer/payment) for configuration details.*
