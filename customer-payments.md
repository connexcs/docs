# Table of Contents

* [Table of Contents](#table-of-contents)
* [Mass Payments with Paypal IPN](#mass-payments-with-paypal-ipn)
  * [Mass Payments](#mass-payments)
  * [What is PayPal IPN?](#what-is-paypal-ipn-?)
    * [Inserting the IPN URL in your PayPal account](#inserting-the-ipn-url-in-your-paypal-account)
    * [Inserting credentials in your Connex Account](#inserting-credentials-in-your-connex-account)
    * [How to add customer PayPal Email address on ConnexCS customer account](#how-to-add-customer-paypal-email-address-on-connexcs-customer-account)


# Mass Payments with Paypal IPN

## Mass Payments

Mass Payment is a bulk payment method that allows funds to be sent by uploading a file to the Paypal site and allows the sender to pay the fees which are usually lower than standard PayPal sending fees.

As there is no direct involvement with the switch when sending this payment we need to use a different strategy to receive notifications about these payments, and for that we can link into PayPal's IPN.

## What is PayPal IPN?

Instant Payment Notification (IPN) is a message service that notifies you of events related to PayPal transactions. You can use IPN messages to automate back-office and administrative functions such as to top up your customer account. The customer just needs to follow the standard PayPal send money method to make payment.

In order for this to work you need to configure certain settings on your ConnexCS control panel and on PayPal.

Below are the steps to configure IPN (Instant Payment Notification).

Login to your Connex account and from the left menu select <b>“Setup”</b>.

1. Click on Add New Setup
2. Choose _My Account_

Switch to the _API_ tab and click on _PayPal IPN_.

Fill in your settings and copy the URL written beside **IPN URL**.

### Inserting the IPN URL in your PayPal account

Login to your Paypal Business  Account and choose Profile. 

**Note**: You need to have a PayPal business account to perform this task.

From the side bar menu select _My selling tools_.
Drag down and select“Update” which is beside “Instant payment notification” that is under Getting paid and Managing my risk section.

Select _Choose IPN Settings_
Enter the URL you copied from Connex Account under the Notification URL and click <b>“Save”</b>. Fill in the settings & copy the API URL.

### Inserting credentials in your Connex Account

Go back to your Connex account and go to Setup>>My Account. Under the tab of API, select _Add New_. A new form will open.

Go back to your Paypal account and go to Profile. Select _My selling tools_ from the side menu bar.

* Click on the button _Update_ beside API access which is under _Selling online_ section.
* Click on _Request API Credentials_ which is under NVP/SOAP API integration
* Select _Request API signature_ and click on Agree and Submit button


A new page will open which says _View or Remove API signature_. Copy the credentials from there and press _Done_.
Now, go back to your External API form from your Connex account and add the credential you copied from Paypal account to your Exeternal API form. Press Save when you are done.

### How to add customer PayPal Email address on ConnexCS customer account

* Click on Management> Customer> [customer name] > Edit customer
* Enter the PayPal main email address and click save.
* Click on Management> Customer> [customer name] > + under Contact > enter the customer PayPal email id and click save.
* With the successful steps above your customer will be able to send/topup their account accordingly.
