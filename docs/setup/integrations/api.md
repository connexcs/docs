# Application Programming Interface Integrations

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Setup & Configuration → Integrations → API<br>
<strong>Audience</strong>: Administrators, Engineers, Support Team<br>
<strong>Difficulty</strong>: Intermediate to Advanced<br>
<strong>Time Required</strong>: 15–30 minutes<br>
<strong>Prerequisites</strong>: ConnexCS account with API access enabled, basic knowledge of REST APIs and authentication<br>
<strong>Related Topics</strong>: <a href="https://docs.connexcs.com/ide/">Developer Guide</a>, <a href="https://docs.connexcs.com/setup/settings/users/#users">Permissions & Roles</a><br>
<strong>Next Steps</strong>: <a href="https://docs.connexcs.com/webphone/">WebPhone Integrations</a><br>

</details>

## Introduction

**Setup :material-menu-right: Integrations :material-menu-right: API**

Configure **API Integrations** to let ConnexCS connect to external services. It provides seamless connectivity to external systems and payment processors.

For inbound APIs, please see the [**API**](https://api-docs.connexcs.com/) in the Architecture documentation.

!!! note "These integrations are custom written, offering similar capabilities as drivers."

## Available Integrations

+ **PayPal Express Checkout**: Lets you do online checkout via the customer portal using a [**PayPal**](https://www.paypal.com) Account.
    + **Configuration Options**:
        + Mode: Choose between live or test.
        + Details: Enter all required PayPal account details.
        + Fee Management: Option to automatically deduct PayPal fees.
        + Save & Activate: Once configured, the system is enabled to accept PayPal payments.
  + **Key Benefits**:
      + Simplified payment processing.
      + Flexible fee management.

+ **PayPal IPN**: Enable Instant Payment Notification (IPN) to use MassPay or to send money from the PayPal portal without using your site.

    This also notifies the system of incoming PayPal payments, and we can top up based on that notification.

    + **Functionality**:
        + Operates in the reverse direction compared to Express Checkout.
        + Requires you to log into your PayPal account and enter a specific detail.

    + **Notification Workflow**:
        + When a customer makes a payment (via mass pay or send money), PayPal sends a request to the server.
        + The system then logs back into PayPal to verify the transaction.
  
  + **Additional Settings**:
      + Specify which currencies to accept.
      + Option to deduct PayPal fees.
      + Automatically top up the customer’s account when funds are received.

  + **Key Benefits**:
      + Real-time payment verification.
      + Increased security and accuracy in transaction processing.

+ **Stripe**: Possibly the world's best credit card processor, [**Stripe**](https://www.stripe.com); we can help with its availability on the portal. It enables streamlined credit card processing

+ **Duo Security**: [**Duo Security**](https://duo.com/) provides 2FA (2 Factor Authentication) via an out-of-band push notification to your mobile device to approve login.

    It also provides fingerprint authentication for extra security.

    + **Functionality**:
        + Sends push notifications to mobile devices.
        + Deployable for individual sites to secure customer accounts.

+ **Moneris**: [**Moneris**](https://www.moneris.com/) is  a Canadian Credit Card Processing service.

+ **ScriptForge**: [**ScriptForge**](/developers/scriptforge/) is the ConnexCS JavaScript Sandbox environment, where you can write drivers to intermediate connectivity to a large variety of providers.

+ **Razor Pay**: [**Razor Pay**](https://razorpay.com/) is a large payment processor from India.

+ **Xero**: Utilising any domestic bank account, [**Xero Pay**](https://www.xero.com/us/accounting-software/accept-payments/) with Wise enables you to pay all your vendors through Xero and reconcile transactions.

+ **Paystack**: With the help of [**Paystack**](https://paystack.com/), you may take payments from clients using a variety of methods, including cards, mobile money accounts, QR codes, bank account direct deposits, and USSD.

+ **PayMongo**: With the help of [**PayMongo**](https://www.paymongo.com/), your company can conveniently take payments from customers using credit cards, e-wallets, and over-the-counter transactions.

+ **NOWPayments**: With the support for auto coin conversion and the ability to take payments in over 75+ cryptocurrencies, [**NOWPayments**](https://nowpayments.io/) is a non-custodial cryptocurrency payment gateway enabling users to accept payments in any coin they choose.

+ **Emetec**: [**Emetec**](https://www.linkedin.com/company/emetec/) provides Merchant services, Payments processing, eCommerce Payment Gateway,  Real-Time-Payments, Online Transfers.

## Enable API Integration

1. Login to your Control Panel.
2. Navigate to **Setup :material-menu-right: Integrations :material-menu-right: API**.
3. Select the required service from the available options.

    <img src= "/setup/img/api1new.png" style= "border: 2px solid #4472C4; border-radius: 8px;"> 

4. Complete the available fields (see individual API integrations below for details for each provider).
5. Click **`Save`**.

!!! info "API Service details"
    Each service requires different details.

    You can find these using your account with the specific provider(s).

## Compare PayPal Options

**Mass Payment** is a bulk payment method that sends funds in an uploaded file to PayPal, allowing the sender to pay less than the standard PayPal fees using their bulk order discounts.

Since this payment doesn't trigger anything in our VoIP system, we link into PayPal's IPN to accommodate notifications and balance sheet updates.

**Mass Pay vs Express Checkout**

Use this comparison chart to decide between Mass Pay and Express Checkout with PayPal.

|Mass Pay|Express Checkout|
|---|---|
|PayPal's website receives an upload of a CSV (Comma-Separated Values)|Made through customer portal|
|Slightly lower transaction fees|Standard PayPal fees (about 3.4% + $0.30)|
|Sender pays the fee|Recipient pays the fee|
|Sender pays a 2% transaction fee, capped at $1 per payment|Recipient pays by per-transaction deductions|
|Uses PayPal IPN|Uses PayPal API Signature|

## PayPal Express Checkout Integration

Enter your PayPal account information.

1. Click `Integrate` under the **PayPal** option. A window will appear prompting you to complete the various fields.
2. **Mode**: Use `Test` for testing connections or `Live` for an active account.
3. To find your **Username**, **Password**, and **Signature**:
    + Access your PayPal account and navigate to **Settings :material-menu-right: Account Settings :material-menu-right: Account Access**.
    + Click **`Update`** for **API Access**.
    + In **NVP/SOAP API integration (Classic)** section, select **Manage API Credentials**

       *(NVP: Name-Value Pair, SOAP: Simple Object Access Protocol)*

    + Select **Request API signature**, and then click **`Agree and Submit`**.
4. Copy the **API Username**, **API Password**, and **Signature** credentials from this page into the open PayPal form in ConnexCS.

    <img src= "/setup/img/paypal-91.png" style="border: 2px solid #4472C4; border-radius: 8px;">

5. **Currency**: Select one or more currencies that you will accept.
6. **Deduct Payment Fees**: Set whether you will deduct the fees or not.
7. **Surcharge**: A fixed amount added to the invoice total for PayPal transactions.
8. **Surcharge Percent**: A percentage-based amount added to the invoice total for PayPal transactions.
9. Click **`Save`**.

<img src= "/setup/img/paypalnew.png" style="border: 2px solid #4472C4; border-radius: 8px;">

## PayPal IPN Integration

PayPal's **Instant Payment Notification (IPN)** is a service that provides notifications for PayPal transactions.

Automation of Bulk payment processes uses IPN messages, where consumers still send PayPal payments as usual.

Payments made using this integration will automatically top up the customer's account in ConnexCS.

For this to work, you need to configure the settings on the ConnexCS control panel and in PayPal.

### Configure PayPal IPN

Steps to configure IPN:

**Step 1: Configure ConnexCS**

1. Click `Integrate` under the **PayPal IPN** option. A window will appear prompting you to complete the various fields.
1. Update the following:
    + **IPN URL:** You should never revise this; it's required later to complete the integration.
    + **Payment Type:** Select "Mass Pay" (described above) or "Send Money" (fees may apply).
    + **Verify Transaction:** If selected, ConnexCS will check with PayPal to make sure the transaction is correct.
    + **Currency:** Select one or more currencies that you will accept.
    + **Deduct Payment Fees:** Set whether you will deduct the fees or not.
2. Click **`Save`**.
3. To find the IPN URL (needed later in configuration), open the **`paypal_ipn`** now listed in API.

<img src= "/setup/img/paypalipnnew.png" style="border: 2px solid #4472C4; border-radius: 8px;">

**Step 2: Identify your IPN listener to PayPal**

After you have configured ConnexCS, add it to your PayPal account (taken from PayPal support [**here**](https://developer.paypal.com/docs/api-basics/notifications/ipn/IPNSetup/)).

1. Login to a PayPal Business Account (must be a Business account, not a regular PayPal account).
2. Navigate to **Settings :material-menu-right: Account Settings :material-menu-right: Notifications**.
3. Select **Update** next to **Instant payment notifications**.
4. Click **Choose IPN Settings**.
5. Enter the IPN URL under **Notification URL** and select **Receive IPN Messages (Enabled)**,and then click **Save**.
6. Fill in the settings, and then copy the API URL.

### Configure Customer with PayPal Email address

The following are instructions on how to add a PayPal Email address to a ConnexCS customer account:

1. Navigate to **Management :material-menu-right: Customer :material-menu-right: [Customer name]**.
2. In Contacts, click :material-plus:.
3. Enter the customer's Name and PayPal email address, and then click **`Save`**.
4. From the customer's main page, select Edit :material-menu-right: Config.
5. Enter the customer's PayPal email ID and click **`Save`**.

### View PayPal IPN Payment Log

You can view these payments under **Setup :material-menu-right: Information :material-menu-right: Payment Log**.

<img src= "/setup/img/api2.png" width="350" style="border: 2px solid #4472C4; border-radius: 8px;">

## Stripe Integration

Configure the Stripe API Keys in ConnexCS:

1. Click `Integrate` under the **Stripe** option. A window will appear prompting you to complete the various fields.
2. **Mode**: Use `Test` for testing connections or `Live` for an active account.
3. **Public Key** (Publishable) and **Private Key** (Secret): Access the [**Stripe Dashboard**](https://dashboard.stripe.com/account/apikeys) (login if necessary) to access your keys (from [**Stripe Support**](https://stripe.com/docs/keys); `Test` keys are also found in that link).
4. **Currencies**: Select one or more currencies that you will accept.
5. **Surcharge**: Amount charged for each transaction.
6. **Surcharge Precent**: It's the percentage of the total charge that's added as an extra fee.

<img src= "/setup/img/api3.png" width="350" style="border: 2px solid #4472C4; border-radius: 8px;">

## Duo Security Integration

Configure Duo Security Settings in ConnexCS:

1. Click `Integrate` under the **Duo Security** option. A window will appear prompting you to complete the various fields.
2. **Integration Key**, **Secret**, and **Host**: Access the [**Duo Admin Panel**](https://admin.duosecurity.com/), locate the **`Auth API`**, click `Protect` (from [**Duo Auth support**](https://duo.com/docs/authapi)). Find the **Integration Key**, **Secret Key**, and **API Hostname** to complete setup in ConnexCS.
3. **AKey (Application Key)**: It's a secret key that's used to authenticate your application with Duo Security. You will need to provide the AKey to Duo Security when you configure your application to use Duo Security.

<img src= "/setup/img/api4.png" width="350" style="border: 2px solid #4472C4; border-radius: 8px;">

## Moneris Integration

Link Moneris to ConnexCS:

1. Click `Integrate` under the **Moneris** option. A window will appear prompting you to complete the various fields.
2. **Store ID**: You can find this in the MRC Welcome emails (contact [**Moneris**](https://www.moneris.com/) for help finding it).
3. **Signature**: It's used to verify the identity of the cardholder to prevent frauds.

<img src= "/setup/img/api5.png" width="350" style="border: 2px solid #4472C4; border-radius: 8px;">

## Scriptforge Integration

**Usage**:

+ Allows selection of a company from the list of carriers

+ Facilitates linking integrations to DID drivers.

+ Supports connection to an individual ScriptForge instance (e.g., as a DID provider).

**Key Benefit**:

+ Streamlines the process of linking carrier information for DID driver functionality.

1. Click `Integrate` under the **Scriptforge** option. A window will appear prompting you to complete the various fields.
2. **Mode**: Use `Test` for testing connections or `Live` for an active account.
3. **Company**: Select the customer to integrate.
4. **Script Forge**: Select the predefined script (details found under [**Developer :material-menu-right: Scriptforge**](/developers/scriptforge/)).

<img src= "/setup/img/api6.png" width="350" style="border: 2px solid #4472C4; border-radius: 8px;">

## Razor Pay Integration

Enter Razorpay settings into ConnexCS:

1. Click `Integrate` under the **Razor Pay** option. A window will appear prompting you to complete the various fields.
2. **Mode**: Use `Test` for testing connections or `Live` for an active account.
3. **Key ID** and **Key Secret**: Access the [**Razorpay Dashboard**](http://dashboard.razorpay.com/), go to Settings and Generate Test Key (from [**Razorpay support**](https://razorpay.com/docs/payments/dashboard/support/))
4. **Currency**: Select one or more currencies that you will accept.
5. **Deduct Payment Fees**: Set whether you will deduct the fees or not.
6. **Surcharge**: A fixed amount added to the invoice total for Razor Pay transactions.
8. **Surcharge Percent**: A percentage-based amount added to the invoice total for Razor Pay transactions.

<img src= "/setup/img/razorpay.png" width="350" style="border: 2px solid #4472C4; border-radius: 8px;">

## Xero Integration

*Coming soon*

## Paystack Integration

Configure the Paystack Payment settings in ConnexCS:

1. Click `Integrate` under the **Paystack** option. A window will appear prompting you to complete the various fields.
2. **Mode**: Use Test for testing connections or Live for an active account.
3. **Public Key (Publishable) and Private Key (Secret)**: Access the [Paystack Support Link](https://support.paystack.com/hc/en-us/articles/360009881600-Paystack-Test-Keys-Live-Keys-and-Webhooks) to access the Test keys and Live keys.
4. **Currencies**: Select one or more currencies that you will accept.

<img src= "/setup/img/api8.png" width="350" style="border: 2px solid #4472C4; border-radius: 8px;">

## PayMongo Integration

Configure the PayMongo Payment settings in ConnexCS:

1. Click `Integrate` under the **PayMongo** option. A window will appear prompting you to complete the various fields.
2. **Mode**: Use Test for testing connections or Live for an active account.
3. **Public Key (Publishable) and Private Key (Secret)**: Access the [PayMongo API Reference Guide](https://developers.paymongo.com/reference/getting-started-with-your-api) to retrieve the Secret keys.
4. **Currencies**: Select PHP (Philippine Peso) as the currency.

<img src= "/setup/img/api9.png" width="350" style="border: 2px solid #4472C4; border-radius: 8px;">

## NOWPayments  Integration

Configure the NOWPayments settings in ConnexCS:

1. Click `Integrate` under the **NOWPayments** option. A window will appear prompting you to complete the various fields.
2. **Mode**: Use Test for testing connections or Live for an active account.
3. **API Key**: Access the [NOWPAyments API Reference Guide](https://nowpayments.io/help/dashboard/how-to-create-an-api-key) to retrieve the Secret keys.
4. **IPN Key**: Access the [IPN Key guide](https://nowpayments.io/help/what-is/what-is-ipn).
5. **Currencies**: You have several curriencies to choose from.

<img src= "/setup/img/api10.png" width="350" style="border: 2px solid #4472C4; border-radius: 8px;">

[paypal-9]: /setup/img/paypal-9.png "Paypal-9" style="border: 2px solid #4472C4; border-radius: 8px;"

[paypal-9]: /setup/img/paypal-9.png "Paypal-9"

The `Integrated` APIs can be seen under the **My Installed Integrations** tab.

<img src= "/setup/img/myintegrations.png" style="border: 2px solid #4472C4; border-radius: 8px;">
