# Table of Contents

* [Table of Contents](#table-of-contents)
* [Mass Payments with Paypal IPN](#mass-payments-with-paypal-ipn)
  * [Mass Payments](#mass-payments)
  * [What is PayPal IPN?](#what-is-paypal-ipn)
    * [Inserting the IPN URL in your PayPal account](#inserting-the-ipn-url-in-your-paypal-account)
    * [Inserting credentials in your Connex Account](#inserting-credentials-in-your-connex-account)
    * [How to add customer PayPal Email address on ConnexCS customer account](#how-to-add-customer-paypal-email-address-on-connexcs-customer-account)
    * [Paypal Integration](#paypal-integration)
      * [Login to ConnexCS account](#login-to-connexcs-account)
      * [Setting the Customer Paypal Email Address into ConnexCS](#setting-the-customer-paypal-email-address-into-connexcs)


# Mass Payments with Paypal IPN

## Mass Payments

Mass Payment is a bulk payment method that allows funds to be sent by uploading a file to the Paypal site and allows the sender to pay the fees which are usually lower than standard PayPal sending fees.

As there is no direct involvement with the switch when sending this payment we need to use a different strategy to receive notifications about these payments, and for that we can link into PayPal's IPN.

## What is PayPal IPN?

Instant Payment Notification (IPN) is a message service that notifies you of events related to PayPal transactions. You can use IPN messages to automate back-office and administrative functions such as to top up your customer account. The customer just needs to follow the standard PayPal send money method to make payment.

In order for this to work you need to configure certain settings on your ConnexCS control panel and on PayPal.

Difference between **Mass Pay** & **Express Checkout**
**Mass Pay**
- Made via a CSV upload to paypal website.
- Lower Slightly Transaction fee's
- Sender pays the fee's
- If I send $100, $100 arrives and sender pays an extra 2% Transaction fee, capped at $1 per payment.
- Uses Paypal IPN

**Express Checkout**
- Made through customer portal
- Standard Paypal Fee's - (about 3.4% + $0.30)
- Receiver pays these fee's
- If I send $100, 94.30 arrives
- Uses Paypal API Signature

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

## Paypal Integration

### Login to ConnexCS account.

1. Click on Setup> My Account> API.
2. Click on the PayPal IPN button.

 ![alt text][paypal-2]

3. Check IPN Enabled, Verify Transaction.
4. Select Payment Types & Currencies.
5.	Copy the IPN URL.

 ![alt text][paypal-5]

6.	Click Save.
7.	Login to your PayPal account.
8.	Click “Profile”.
9.	Find the “Instant payment notifications”, click “Update”.

 ![alt text][paypal-3]
 
10.	Go back to ConnexCS Account 
11.	Click on Setup -> My Account
12.	API -> Add New> PayPal

 ![alt text][paypal-12]

 ![alt text][paypal-6]

13.	On the PayPal account Click “Profile”  ->  “API  access   -  update”
14.	Select “View API Signature”
 
 ![alt text][paypal-8] 
 
15.	Copy the following credentials
"API Username" , "API Password" , "Signature"
 
 ![alt text][paypal-9] 
 
16.	Paste the above credentials  into the “PayPal API” in ConnexCS Account

 ![alt text][paypal-16]

17.	Click Save

## Setting the Customer Paypal Email Address into ConnexCS

1.	Click on Management> Customer> [customer name] > Edit customer
2.	Enter the PayPal main email address and click save.
3.	Click on Management> Customer> [customer name] > + under Contact> enter the customer PayPal email id and click save.


[paypal-3]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/paypal-3.png "Paypal-3"
[paypal-6]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/paypal-6.png "Paypal-6"
[paypal-8]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/paypal-8.png "Paypal-8"
[paypal-9]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/paypal-9.png "Paypal-9"
[paypal-2]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/84.png "Paypal-2"
[paypal-5]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/paypal-5.png "Paypal-5"
[paypal-12]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/paypal-12.png "Paypal-12"
[paypal-16]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/85.png "Paypal-16"

