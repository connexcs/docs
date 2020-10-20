# API Integrations
Setup :material-menu-right: Integrations :material-menu-right: API

**API Integrations** are configured to allow ConnexCS to connect to external services. For inbound APIs, please see the [API](/api) in the Architecture documentation. 

## Available Integrations

* **Paypal Instant Checkout** - Allows online checkout via the customer portal using a [Paypal](https://www.paypal.com) Account.
* **Paypal IPN** - For customers who wish to use a PayPal feature called MassPay, or want send money from the PayPal portal without using your site, IPN can be enabled. This notifies the system of incoming PayPal payments and we can top-up based on that notification. See [PayPal IPN Integration below](/customer-payments/) for specific details and setup. 
* **Stripe** - Possibly the world's best credit card processor, [Stripe](https://www.stripe.com) can be made available on your customer portal.
* **Duo Security** - With [Duo Security](https://duo.com/) we can provide 2FA (2 Factor Authentication) via an out-of-band push notification to your mobile device when you sign in. This can then be approved and also benefit from fingerprint authentication. 
* **Moneris** - A Canadian Credit Card Processing service, [Moneris](https://www.moneris.com/]) can be made available on your customer portal.
* **ScriptForge** - [ScriptForge](/developers/scriptforge/) is ConnexCS's Javascript Sandbox environment which you can use to write drivers to intermediate connectivity to a large variety of providers.
* **Razor Pay** - [Razor Pay](https://razorpay.com/) is a large payment processor from India.

## Enable API Integration

1. Click the **`Add`** button.
2. Select the desired service from the drop-list.

    ![alt text][api]

3. (PayPal and Stripe only) Select the Mode: **Test** for testing connections or **Live** for an active account.
4. Complete the dialog box and press the **`Save `** button.

!!! info "API Service details"
    Each service requires different details. These can be obtained using your account with the specific provider(s). 
    
## Paypal IPN Integration
PayPal's **Instant Payment Notification (IPN)** is a service that provides notifications for PayPal transactions. IPN messages can be used to automate bulk payment processes, where consumers still send PayPal payments as normal. For this to work, settings need to be configured on the ConnexCS control panel as well as PayPal.

### Mass Payments
**Mass Payment** is a bulk payment method that sends funds in an uploaded file to PayPal, allowing the sender to pay less than the standard PayPal fees using their bulk order discounts. Since this payment doesn't trigger anything our VoIP system, we link into PayPal's IPN to accommodate notifications and balance sheet updates.

**Mass Pay vs Express Checkout**
use this comparison chart listing the differences between Mass Pay and Express Checkout with PayPal to help you decide which to use:

|Mass Pay|Express Checkout|
|---|---|
|A CSV is uploaded to PayPal's website.|Made through customer portal.|
|Slightly lower transaction fees.|Standard Paypal fees (about 3.4% + $0.30).|
|Fees are paid by the sender.|Fees are paid by the recipient.|
|Sender pays a 2% transaction fee, capped at $1 per payment.|Recipient pays by per-transaction deductions.|
|Uses Paypal IPN.|Uses Paypal API Signature.|


### Setup IPN/PayPal Integration
Below are the steps to configure IPN:

**Step 1: Configure ConnexCS**
1. Navigate to Setup :material-menu-right: Integrations :material-menu-right: API
2. Click **`Add`**.
5. Select **PayPal IPN**.
6. Fill in your settings (leave IPN URL blank) and click **`Save`**.
7. To find the IPN URL (needed later in configuration), open the **`paypal_ipn`** now listed in API.

**Step 2: Identify your IPN listener to PayPal**
After you have configured ConnexCS, add it to your PayPal account. (Copied from PayPal instructions [here](https://developer.paypal.com/docs/api-basics/notifications/ipn/IPNSetup/#).)

1. Login to a PayPal Business Account (A PayPal Business Account--not to be confused with a regular PayPal account--is required to perform this task.)
2. Navigate to Settings > Account Settings > Notifications
3. Select **Update** next to **Instant payment notifications**.
4. Click **Choose IPN Settings**.
5. Enter the IPN URL under **Notification URL** and select **Receive IPN Messages (Enabled)** click **Save**. 
6. Fill in the settings, and then copy the API URL.

**Step 3: Insert credentials in your ConnexCS Account**
Enter the new credentials back into your account. (PayPal steps copied from PayPal instructions [here](https://developer.paypal.com/docs/api-basics/notifications/ipn/IPNSetup/#).)

1. Navigate to Setup :material-menu-right: Integrations :material-menu-right: API 
1. Select Add :material-menu-right: PayPal.
1. Select the **Mode**: Test for testing connections or Live for an active account
1. In your PayPal account, navigate to Settings :material-menu-right: Account Settings :material-menu-right: Account Access.
1. Click the **`Update`** button for **API Access**.
1. Select **Manage API Credentials** under **NVP/SOAP API integration (Classic)** section. 
1. Select **Request API signature**, then **`Agree and Submit`**.
1. Copy the **API Username**, **API Password**, and **Signature** credentials from this page into the open PayPal form in ConnexCS. 
    
    ![alt text][paypal-9] 

1. Press **`Save`**.

### Add customer PayPal Email address to ConnexCS customer account
The following are instructions on how to add a PayPal Email address to a ConnexCS customer account:

1. Navigate to Management :material-menu-right: Customer :material-menu-right: [customer name] 
1. Click **`+`** under Contacts
1. Enter the customer's Name and PayPal email address and click **`Save`**.
1. From the customer's main page, select Edit :material-menu-right: Config.
1. Enter the customer PayPal email ID and click **`Save`**.

[paypal-9]: /setup/img/paypal-9.png "Paypal-9"
[api]: /setup/img/api.png "API Integration"
