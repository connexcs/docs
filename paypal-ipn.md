<h2>Mass Payments with Paypal IPN</h2>

#<h4>Mass Payments</h4>

Mass Payment is a bulk payment method that allows funds to be sent by uploading a file to the Paypal site and allows the sender to pay the fee's. Usually lower than standard PayPal sending fee's.

As there is no direct involvement with the switch when sending this payment we need to use a different strategy to receive notifications about this payments, for that we can link in to PayPal's IPN.

#<h4>What is PayPal IPN?</h4>

Instant Payment Notification (IPN) is a message service that notifies you of events related to PayPal transactions. You can use IPN messages to automate back-office and administrative functions such as to top up your customer account. The customer just needs to follow the standard PayPal send money method to make payment.

In order for this to work you need to configure certain settings on your ConnexCS control panel and on PayPal.

Below are the steps to configure IPN (Instant Payment Notification).

Login to your Connex account and from the left menu select <b>“Setup”</b>.

1. Click on Add New Setup
2. Choose <b>“My Account”</b>

Switch to the <b>“API”</b> tab and click on <b>“PayPal IPN”</b>.
Fill in your settings and copy the URL written beside <b>“IPN URL”</b>.

#<h4>Inserting the IPN URL in your PayPal account:</h4>

Login to your Paypal Business  Account and choose Profile. 

<b>Note:</b> you need to have a PayPal business account for performing this task.

From the side bar menu select <b>“My selling tools”</b>.
Drag down and select“Update” which is beside “Instant payment notification” that is under Getting paid and managing my risk section.

Select <b>“Choose IPN Settings”</b>
Enter the URL you copied from Connex Account under the Notification URL and click <b>“Save”</b>. fill in the settings & copy the API URL.

#<h4>Inserting credentials in your Connex Account:</h4>

Go back to your Connex account and go to Setup>>My Account. Under the tab of API, select <b>“Add New”</b>.  A new form will open.

Go back to your Paypal account and go to Profile.Select <b>“My selling tools”</b> from the side menu bar.

Click on the button <b>“Update”</b> beside API accesswhich is under <b>“Selling online”</b> section.
Click on <b>“Request API Credentials”</b> which is under NVP/SOAP API integration
Select <b>“Request API signature”</b> and click on Agree and Submit button

A new page will open which says <b>“View or Remove API signature”</b>. Copy the credentials from there and press <b>“Done”</b>.
Now, go back to your External API form from your Connex account and add the credential you copied from Paypal account to your Exeternal API form. Press Save when you are done.

#<h4>How to add customer PayPal Email address on ConnexCS customer account?</h4>

Click on Management> Customer> [customer name] > Edit customer
Enter the PayPal main email address and click save.
Click on Management> Customer> [customer name] > + under Contact> enter the customer PayPal email id and click save.

With the successful steps above your customer will be able to send/topup their account accordingly.
