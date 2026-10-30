# Yoco Payment

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Setup / Application Store & App Deployment<br>
<strong>Audience</strong>: Administrators, Finance Team, Product Team<br>
<strong>Difficulty</strong>: Beginner<br>
<strong>Time Required</strong>: Approximately 10–15 minutes<br>
<strong>Prerequisites</strong>: Active ConnexCS account with Setup privileges; an active Yoco merchant account with access to the Yoco App / Control Panel; API Developer Integration access to retrieve the Secret Key.<br>
<strong>Related Topics</strong>: <a href="https://docs.connexcs.com/setup/appstore/">App Store</a><br>
<strong>Next Steps</strong>: Install and configure the Yoco app with your Secret Key and surcharge preferences, then verify the Yoco payment button appears correctly in the Customer Portal for end customers to complete transactions.<br>

</details>

## Overview

**Yoco** is a payment gateway and merchant services platform that enables businesses to accept, process, and manage digital payments securely through APIs and hosted payment flows.

Instead of handling payment processing, card security, and transaction compliance internally, applications and platforms can integrate with Yoco to initiate charges, collect customer payments, and track transactions programmatically, making payment collection faster, more reliable, and secure.

## How it works?

To enable payment-related operations via Yoco, the system requires authentication using a `Secret API Key`.
This key determines which Yoco account the API requests are executed against and ensures secure access to subscribed services.

## Where to Obtain the API Secret Key?

1. The customer logs in to the `Yoco App` / `Yoco Control Panel`.

2. Navigate to the **API :material-menu-right: Developer :material-menu-right: Integration** section.

3. Locate the `Secret Key` under the `account credentials`.

4. Copy the Secret Key for use in the integration.

!!! Note "The `Secret Key` is `account-specific` and must be kept `confidential`."

## Steps to Use the App

1. Navigate to **Setup :material-menu-right: App Store :material-menu-right: Yoco** and click `Install`. A window will open hit the `Install` button again. <br><img src= "/apps/img/yp1.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

2. Click on the installed App and click on `Config`. <br><img src= "/apps/img/yococonfignew1.png" width= "700" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

3. A window will open, prompting you to enter the following details: <br><img src= "/apps/img/yococonfignew2.png" width= "500" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
      + `ConnexCS auth token`: Lets the app record completed payments in ConnexCS. Select how long the token stays valid (for example, **Valid for 1 year**) and click `Create token`. The token is stored as a write-only secret and is never shown again. **Create the token before taking payments, because completed payments cannot be recorded without one**.
      + Enter the `Yoco secret key`. This key is used to create checkouts and register the payment webhook. Follow the steps [here](/anvil-apps/yoco-payments/#where-to-obtain-the-api-secret-key) to generate and retrieve the key. **The key is encrypted at rest and is never sent back to the browser**.
      + `Surcharge` (optional): A processing fee deducted from each payment before the customer is credited. You can choose one of the following options:
        + **Fixed amount**: Deducts a fixed surcharge from each payment.
        + **Percentage**: Deducts a percentage of the transaction amount.
4. Click `Save configuration`. Changes apply to new payments straight away.
5. The YoCco button is displayed in the Customer Portal under the Payments section, where end customers can securely complete their payment transactions.
