# Payments

---
**Document Metadata**
<br>**Category**: Customer Account Management / Payments & Billing</br>
<br>**Audience**: Administrators, Engineers, Support Team</br>
<br>**Difficulty**: Intermediate</br>
<br>**Time Required**: Approximately 30–60 minutes</br>
<br>**Prerequisites**: Active ConnexCS account with Customer-module permissions; ability to manage customer accounts and access payment / top-up functions.</br>
<br>**Related Topics**: [Billing Overview](https://docs.connexcs.com/billing/), [API / Payment Integrations](https://docs.connexcs.com/setup/integrations/api/)</br>
<br>**Next Steps**: [Add & Manage Payments for a Customer](https://docs.connexcs.com/customer/payment/#add-payment), [Configure Global Payments and Integration with Processors](https://docs.connexcs.com/setup/integrations/api/#payments)</br>

---

**Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: Payments**

The Payments section enables users to efficiently add, track, and manage transactions, including a complete history of previous payments.

!!! note "Global Payments"
    You can also manage Payments under **Global :material-menu-right: Payments**, which displays all Payments across the account.

## Add Payment

To add a new payment

1. Click :material-plus:
    + **Description** is the name of the payment.

        If you wish to hide any information on the customer portal, use **#** followed by the text to hide.

        !!! Example
            PayPal 87878787744XXX #payment from the demo.
        !!! Note
            Add a **#** symbol for starting a private comment to store private information along with the public information.

    + **Total** is the amount of the payment.
    + **Payment Fee (Ref Only)** For payments made through PayPal or another external payment system, the Payment Fee field is automatically filled.
    + **Status** allows you to set the Payment to:
        + **Pending**: Not included in balance calculations
        + **Cancelled**: Ignored in balance calculations.
        +  **Completed**: Marked as an active payments.
    + **Email Confirmation**: If enabled, once you save the Payment, an email is generated to all Contacts configured on the customer informing them that the payment has been received and applied to the account.

    <img src= "/customer/img/531.png" style="border: 2px solid #4472C4; border-radius: 8px;">

2. Click **`Save`**.

!!! tip "Pending Payments"
    1. When a customer places a payment through their bank, it shows **Pending** status.
    2. The customer can manually update the status from **Pending** to **Completed** after confirming the bank transfer.
    3. Ensures accurate tracking and verification of bank payments before they reflect in the system.

!!! warning "Negative Payments"
    If a customer has made any kind of purchase on the account, it's shown as a negative amount on the main **Payments** page > **Total** section.
