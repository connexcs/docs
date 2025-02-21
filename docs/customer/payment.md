# Payments

**Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: Payments**

The Payments section allows users to manage transactions efficiently by adding and tracking payments including the previous payments.

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
    + **Status** allows you to set the Payment to 
      + **Pending**: Not included in balance calculations
      + **Cancelled**: Ignored in balance calculations.
      +  **Completed**: Marked as an active payments.
    + **Email Confirmation**: If enabled, once you save the Payment, an email is generated to all Contacts configured on the customer informing them that the payment has been received and applied to the account.

    ![alt text][payments-tab]

2. Click **`Save`**.

!!! tip "Pending Payments"
    1. When a customer places a payment through their bank, it shows **Pending** status.
    2. The customer can manually update the status from **Pending** to **Completed** after confirming the bank transfer.
    3. Ensures accurate tracking and verification of bank payments before they reflect in the system.

    To accept the payment, set it to **Completed** and click **`Save`**.

!!! warning "Negative Payments"
    If a customer has made any kind of purchase on the account, it's shown as a negative amount on the main **Payments** page > **Total** section.

[payments-tab]: /customer/img/53.png "Payment Tab"
