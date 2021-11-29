# Payments 
**Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: Payments**

View a list of all the **Payments** that have been made so far. 

!!! note "Global Payments"
    Payments may also be managed for under **Global :material-menu-right: Payments**, which displays all Payments across the account.

## Add Payment
To add a new payment

1. Click on the :material-plus: button
    + **Description** is the name of the payment. 
        If you wish to hide any information on the customer portal please use **#** followed by the text example: PayPal 87878787744XXX #payment from demo.
    + **Total** is the amount of the payment. 
    + **Payment Fee (Ref Only)** is filled in automatically for payments made using PayPal or another external payment system. 
    + **Status** allows you to set the Payment to Pending, Cancelled or Completed. (Pending and Cancelled will not be included in the balance calculation.)
    + **Email Confirmation**: If enabled, once you save the Payment an email will be generated to the customer to let them know it was received and applied to the account. 

    ![alt text][payments-tab]

2. Click **`Save`**.

!!! tip "Pending Payments"
    When a customer places a payment through their bank, this will show up here with a status of **Pending**. To accept the payment, set it to **Completed** and **`Save`**. 
    
!!! warning "Negative Payments"
    If a customer has made some sort of purchase on the account, this will be shown as a negative amount under Total on the main Payments page. 

    
[payments-tab]: /customer/img/53.png "Payment Tab"
