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

2. Click on the installed App and click on `Config`. <br><img src= "/apps/img/yp2.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

3. A window will open, prompting you to enter the following details:
      + `API User`: The selected API user represents the authenticated entity making API requests.
      + Enter the `Secret Key`. This key is required for authentication. Follow the steps [here](/anvil-apps/yoco-payments/#where-to-obtain-the-api-secret-key) to generate and retrieve the API key. **ConnexCS uses this key to securely authenticate and authorise all payment-related API requests**.
      + `Surcharge`: Configure an additional charge to be applied to payments. You can choose one of the following options:
        + **Amount (ZAR)**: Applies a fixed surcharge in South African Rand (ZAR).
        + **Percent**: Applies a percentage-based surcharge on the transaction amount. Click `Save`.</br><img src= "/apps/img/yp3.png" width= "500" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
4. The YoCco button is displayed in the Customer Portal under the Payments section, where end customers can securely complete their payment transactions.
