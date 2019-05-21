# Mass Payments with Paypal IPN

## Mass Payments

**Mass Payment** is a bulk payment method that sends funds in an uploaded file to Paypal, allowing the sender to pay less than the standard PayPal fees using their bulk order discounts. Since this payment doesn't trigger anything a VoIP sysetem, we link into PayPal's IPN to accomodate notifications and balance sheet updates.

## What is PayPal IPN?

Instant Payment Notification (IPN) is a service that provides notifications about PayPal transactions. IPN messages can be used to automate bulk payment processes, where consumers still send PayPal payments as normal. For this to work, settings need to be connected on the ConnexCS control panel as well as PayPal.

### Mass Pay and Express Checkout
The following lists the differences between Mass Pay and Express Checkout with PayPal, to help you decide which to use before you run the setup processes below:

**Mass Pay**
- A CSV is uploaded to PayPal's website.
- Slightly lower transaction fees.
- Fees are paid by the sender.
- Sender pays a 2% transaction fee, capped at $1 per payment.
- Uses Paypal IPN.

**Express Checkout**
- Made through customer portal.
- Standard Paypal fees (about 3.4% + $0.30).
- Fees are paid by the recipient.
- Recipient pays by per-transaction deductions.
- Uses Paypal API Signature.

### Configure an IPN
Below are the steps to configure an IPN:

1. Login to your ConnexCS account.
2. Click **`Setup`**.
3. Choose **Integrations**.
4. Switch to the **API** tab. 
5. Cick **PayPal IPN**.
6. Fill in your settings.
7. Copy the URL written beside **IPN URL**.

### Inserting the IPN URL in your PayPal account
After you've followed the configuration steps, you should have the IPN URL copied as your last item on your OS clipboard. Follow these steps to insert it into a PayPal account.

1. Login to a Paypal Business Account and choose **Profile**. A PayPal Business Account--not to be confused with a regular paypal account--is required to perform this task.
2.  From the side menu select **my selling tools**.
3.  Select **Update** from the drop-down list.
4.  Select **Choose IPN Settings**.
5.  Enter the IPN URL under **Notification URL** and click **Save**. 
6.  Fill in the settings, and then copy the API URL.

### Inserting credentials in your Connex Account
The following are instructions for entering the credentials you created in the previous steps back into your Connex account:
* Return to Connex and go to **Setup**>**My Account**. 
* Under the API tab, select **Add New** A form will open.
* Go back to your Paypal account and go to Profile. 
* Select **My selling tools** from the side bar.
* Click the **`Update`** button.
* Select **Request API Credentials** under **NVP/SOAP API integration**.
* Select **Request API signature**, then **`Agree and Submit`**.
* The **View or Remove API signature** page opens. Copy the credentials from this page and press **`Done`**.
* Return to the External API form from your Connex account, and add the credentials you copied from the Paypal account there.
* Press **`Save`**.

### How to add customer PayPal Email address on ConnexCS customer account
The following are instructions on how to add a PayPal Email address to a ConnexCS customer account:
* Click **Management** > **Customer** >**[customer name]**> **Edit customer**.
* Enter the customer's main PayPal email address and click **`Save`**.
* Click on **Management** > **Customer** > **[customer name]**> **Contact**.  
* Enter the customer PayPal email ID and click **`Save`**.

## Paypal Integration

These are the steps to integrate a PayPal account into a ConnexCS account.

1. Login to Connex, then click **Setup** > **Integrations** > **API**.
2. Click **Add**.
3. Select the **`PayPal IPN`** button.

 ![alt text][paypal-2]

4. Check **IPN Enabled** and **Verify Transaction**.
5. Select **Payment Types** and **Currencies**.
6.	Copy the IPN URL.

 ![alt text][paypal-2b]

7.	Click **`Save`**.
8.	Login to PayPal.
9.	Click **Profile**.
10.	Find **Instant payment notifications** and click **Update**.

 ![alt text][paypal-3]
 
11.	Return to ConnexCS.
1.  Select **Setup Integrations**.
2.  Select **API** > **Add** > **PayPal**

 ![alt text][paypal-12]

 ![alt text][paypal-6]

14.	In PayPal, select **Profile** > **API** > **Access Update**.
15.	Select **View API Signature**
 
 ![alt text][paypal-8] 
 
16.	Copy the following credentials:
API Username, API Password , and Signature.
 
 ![alt text][paypal-9] 
 
17.	Paste these credentials in **PayPal API** in the  ConnexCS Account.

 ![alt text][paypal-16]

18.	Click **`Save`**.

## Setting the Customer Paypal Email Address into ConnexCS
To add a customer PayPal email address: 
1.	Click **Management** > **Customer** > **[customer name]** > **Edit customer**.
2.	Enter the customer's main PayPal email address and click **`Save`**.
3.	Click **Management** > **Customer** > **[customer name]** > **Contact**, and then enter the customer PayPal email ID.
1. Click **`Save`**.

[paypal-2]: /setup/img/84.png "Paypal-2"
[paypal-3]: /setup/img/paypal-3.png "Paypal-3"
[paypal-6]: /setup/img/paypal-6.png "Paypal-6"
[paypal-8]: /setup/img/paypal-8.png "Paypal-8"
[paypal-9]: /setup/img/paypal-9.png "Paypal-9"
[paypal-12]: /setup/img/paypal-12.png "Paypal-12"
[paypal-16]: /setup/img/85.png "Paypal-16"
[paypal-2b]: /setup/img/84-b.png "Paypal-2b"

