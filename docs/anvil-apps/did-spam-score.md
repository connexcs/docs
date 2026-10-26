# DID Spam Score

<details>
<summary><strong>Document Metadata</strong></summary>
<br>
<strong>Category</strong>: Setup / Application Store & App Deployment<br>
<strong>Audience</strong>: Administrators, Support Team, Product Team, Customer Administrators<br>
<strong>Difficulty</strong>: Beginner<br>
<strong>Time Required</strong>: Approximately 5–10 minutes for installation and configuration; additional time may be required to process DID spam score checks.<br>
<strong>Prerequisites</strong>: An active ConnexCS account with access to Setup and App Store; permission to install applications and access the DID management interface; the Spam Score package added to the account; and access to the DIDs you want to check.<br>
<strong>Related Topics</strong>: <a href="/setup/appstore/">App Store</a>, <a href="/setup/config/packages/">Packages</a>, <a href="/global/global-did/">Global DID Management</a>, <a href="/guides/spam-callsblock/#64-using-spam-scout-scoring">Spam Scout Scoring</a><br>
<strong>Next Steps</strong>: Install the DID Spam Score app, configure the default email address, select the DIDs to check, submit the spam score request, and review the results.<br>
</details>

## Overview

The DID Spam Score app is developed by ConnexCS to help customers check the spam scores of their Direct Inward Dialing (DID) numbers through the ConnexCS platform.

The app integrates with [Spam Scout scoring](https://docs.connexcs.com/guides/spam-callsblock/#64-using-spam-scout-scoring) to process selected DIDs and retrieve their spam score information. Users can select one or more DIDs and submit a request to check their spam scores.

When more than five DIDs are checked, the configured default email address is used to send the relevant notification. After processing, the app displays the status and spam score for each selected DID. The results can help customers identify numbers that may have been flagged as spam.

The app is available through the Connex Store and can be managed from the Anvil App Store interface.

!!! note "Chargeable Service"
    The DID Spam Score service is chargeable. Review the [ConnexCS Pricing](https://connexcs.com/pricing/) page for applicable charges.

## Why Use the DID Spam Score App?

The app provides a convenient way to check DID spam scores without manually processing each number individually.

It helps users:

- Check the spam scores of multiple DIDs in a single request.
- Identify DIDs that may have been flagged as spam.
- View the processing status and available spam score for each DID.
- Receive notifications when more than five DIDs are checked.
- Access the functionality directly from the ConnexCS DID management interface.

## Key Features

- **App Store Installation**: Install the app through the Connex Store.
- **Bulk DID Selection**: Select multiple DIDs and submit them for spam score checks.
- **Spam Scout Integration**: Submit selected DIDs to Spam Scout for processing.
- **Email Notifications**: Configure a default email address to receive notifications when more than five DIDs are checked.
- **Processing Status**: View the status of each DID, including whether it was processed or data was unavailable.
- **Spam Score Results**: Display the returned spam score for each successfully processed DID.
- **Application Management**: Review the installed version, version history, and application settings.

## Benefits

- Simplifies the process of checking DID spam scores.
- Saves time when checking multiple numbers.
- Helps customers identify potentially spam-flagged numbers.
- Provides a centralized interface for submitting requests and viewing results.
- Makes results easier to review through a table showing each DID, its status, and its spam score.

## How to Install and Use the DID Spam Score App

### Install the App

1. Navigate to **Setup :material-menu-right: App Store :material-menu-right: Anvil Store :material-menu-right: Marketplace**, locate **DID Spam Score**, and click `Install`. <br><img src="/apps/img/didss1.png" alt="Connex Store marketplace showing the DID Spam Score app and Install button" style="border: 2px solid #4472C4; border-radius: 8px; max-width: 100%;"></br>

2. An **Install Package** window will appear. Review the package name and version, then click `Install` again to confirm. <br><img src="/apps/img/didss2.png" alt="Install Package confirmation window for DID Spam Score" width="350" style="border: 2px solid #4472C4; border-radius: 8px; max-width: 100%;"></br>

3. Once installed, open **DID Spam Score** from the installed applications list. The Overview tab displays the installation status, installed version, latest version, and package information. <br><img src="/apps/img/didss3.png" alt="DID Spam Score application Overview showing installation status and package information" width="500" style="border: 2px solid #4472C4; border-radius: 8px; max-width: 100%;"></br>

4. To review the available application versions, navigate to the `Versions` tab. This section displays version numbers, approval status, submission details, and version history. <br><img src="/apps/img/didss4.png" alt="DID Spam Score Versions tab showing approved versions and version history" width="600" style="border: 2px solid #4472C4; border-radius: 8px; max-width: 100%;"></br>

### Configure the App

1. Navigate to the `App Settings` tab to review the app's configuration. The **Assigned buttons** section displays the **Spam Score** button and its location in the portal, `/global/did`. <br><img src="/apps/img/didss5.png" alt="DID Spam Score App Settings showing the Spam Score button assigned to the Global DID page" width="500" style="border: 2px solid #4472C4; border-radius: 8px; max-width: 100%;"></br>

2. Click `Config` to open the configuration window. Enter the default email address that should receive notifications when more than five DIDs are checked. <br><img src="/apps/img/didss7.png" alt="Configuration window showing the Default Email field and Save Config button" width="600" style="border: 2px solid #4472C4; border-radius: 8px; max-width: 100%;"></br>

3. Click `Save Config` to save the configuration.

### Run a Spam Score Check

1. Navigate to **Global :material-menu-right: DID** in the ConnexCS portal. <br><img src="/apps/img/didss8.png" alt="ConnexCS Global DID page showing the DID list and Spam Score button" style="border: 2px solid #4472C4; border-radius: 8px; max-width: 100%;"></br>

2. Select the DIDs you want to check by using the checkboxes beside the DID entries. You can select multiple DIDs for a single request.

3. Click the `Spam Score` button at the top of the DID page.

4. The DID Spam Score window will open and display the selected DIDs. <br><img src="/apps/img/didss9.png" alt="DID Spam Score request window showing selected DIDs, an email field, and the Spam Scout button" width="500" style="border: 2px solid #4472C4; border-radius: 8px; max-width: 100%;"></br>

5. Enter the email address to which the spam score report should be sent, if prompted.

6. Click `Spam Scout` to submit the selected DIDs for processing.

7. Review the results displayed in the table. Each row contains the DID, its processing status, and the spam score when available. <br><img src="/apps/img/didss10.png" alt="DID Spam Score results table showing each DID, its processing status, and spam score" width="600" style="border: 2px solid #4472C4; border-radius: 8px; max-width: 100%;"></br>

## Troubleshooting

| Issue | Recommended Action |
|---|---|
| The Spam Score button isn't visible. | Verify that the app is installed and that you have access to **Global :material-menu-right: DID**. |
| The request can't be submitted. | Verify that the Spam Score package is available on your account and that the application is configured correctly. |
| Results show `No data available`. | The service didn't return a score for that DID. Review the result and retry later if appropriate. |
| The report isn't received. | Verify the configured default email address and, if an email address was entered in the request, check that address as well. Check the recipient's spam or junk folder. |
| API access or configuration fails. | Check that the Default Email field contains the correct email address and that the configuration has been saved. |