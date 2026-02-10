# Payments

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Customer Portal / Payment Methods & Billing Setup<br>
<strong>Audience</strong>: Administrators, Finance & Billing Staff, Support Team<br>
<strong>Difficulty</strong>: Beginner to Intermediate<br>
<strong>Time Required</strong>: Approximately 15–20 minutes<br>
<strong>Prerequisites</strong>: Active ConnexCS Customer Portal account with permissions to view and update payment methods and billing information<br>
<strong>Related Topics</strong>: <a href="https://docs.connexcs.com/customer-portal/cp-invoice/">Customer Portal – Invoice & Billing Documents</a>, <a href="https://docs.connexcs.com/customer-portal/cp-dashboard/">Customer Portal – Dashboard Overview</a><br>
<strong>Next Steps</strong>: Verify current payment method and billing address, update or change payment method if required (e.g., credit-card, bank-transfer, direct debit), download or schedule notifications for upcoming invoices, and document your internal billing & payment verification process.<br>

</details>

View the list of all **Payments** made to date.

+ **Date / Time**: When the selected payment gets completed.
+ **Total**: Payment amount.
+ **Status**: The payment may show Pending, Cancelled, or Completed.

    **Note:** Pending and Cancelled payments aren't included in the balance calculation.

+ **Description**: Name of the payment.

!!! info "Bulk Payment Download"
    If you wish to download all the Payment details click on <img src= "/customer-portal/img/bd.png"> on the extreme right side and a **.csv** file will be downloaded to your system.

## Make payment

To add a new payment, select **`Make Payment`**.

1. **Pay via**: (required)
    + **Bank Transfer**: You can select the Payment Amount and Currency. This sets the Payment Status to Pending until it's processed.
    + **PayPal**: You can select the Payment Amount and Currency.
    + **Credit Card**: Enter your Credit Card Number, Month and Year of expiry and CVC. Then you can select the Amount and Currency.
    + **Razor Pay**: You can select the Payment Amount and Currency.
    + **Pay Stack**: You can select the Payment Amount and Currency.
    + **Now Payments**: You can select the Payment Amount and Currency.
    + **Voucher**: Requires Voucher number and Currency.

2. Click **`Pay`**.

<img src= "/customer-portal/img/payment2.png" style="border: 2px solid #4472C4; border-radius: 8px;">

!!! warning "Negative Payments"
    If you make some kind of purchase on the account, it will appear as a negative amount under **Total**.

## Yoco Payment

### Overview

**Yoco Payments** is a payment processing service that enables applications and customer portals to **initiate, authorise, and complete payment transactions** through a secure, hosted checkout provided by Yoco.

Yoco manages the full payment lifecycle, including transaction authorisation, validation, and settlement, while the platform initiating the payment remains out of scope for handling sensitive payment data.

<img src= "/customer-portal/img/yococp.png" style="border: 2px solid #4472C4; border-radius: 8px;">

+ **Amount**: Enter the amount to be paid. The amount must be greater than ZAR 2.

    !!! Note "Any configured **surcharge** (fixed or percentage) is applied automatically."

+ **Currency**: Displays the currency in which the payment will be processed. **Currency is fixed to ZAR (South African Rand)**.
