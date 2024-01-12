# Payments

**Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: Payments**

 View a complete list of all previous **Payments**.

!!! note "Global Payments"
    You can also manage Payments under **Global :material-menu-right: Payments**, which displays all Payments across the account.

## Add Payment

To add a new payment

1. Click :material-plus:
    + **Description** is the name of the payment.

        If you wish to hide any information on the customer portal, use **#** followed by the text to hide.
        For example, PayPal 87878787744XXX #payment from the demo.
        Please note add a **#** symbol for starting a private comment to store private information along with the public information.

    + **Total** is the amount of the payment.
    + **Payment Fee (Ref Only)** For payments made through PayPal or another external payment system, the Payment Fee field is automatically filled.
    + **Status** allows you to set the Payment to **Pending, Cancelled or Completed**.
    Pending and Cancelled payments are not included in the balance calculation.
    + **Email Confirmation**: If enabled, once you save the Payment, an email is generated to all Contacts configured on the customer informing them that the payment has been received and applied to the account.

    ![alt text][payments-tab]

1. Click **`Save`**.

!!! tip "Pending Payments"
    When a customer places a payment through their bank, it shows **Pending** status.

    To accept the payment, set it to **Completed** and click **`Save`**.

!!! warning "Negative Payments"
    If a customer has made any kind of purchase on the account, it is shown as a negative amount on the main **Payments** page > **Total** section.

[payments-tab]: /customer/img/53.png "Payment Tab"
