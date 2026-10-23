# Dial Phone Number Verification

<details>
<summary><strong>Document Metadata</strong></summary>
<br>

<strong>Category</strong>: Setup / Application Store & App Deployment<br>
<strong>Audience</strong>: Administrators, Support Team, Product Team, Customer Administrators<br>
<strong>Difficulty</strong>: Intermediate<br>
<strong>Time Required</strong>: Approximately 10–15 minutes for installation and initial configuration; additional time may be required to configure routing and CLI registration.<br>
<strong>Prerequisites</strong>: An active ConnexCS account with Setup and App Store access; permission to install and configure applications; a configured Class 4 switch server and Class 5 server; a valid Caller ID (CLI); and access to the applicable customer billing configuration.<br>
<strong>Related Topics</strong>: <a href="https://docs.connexcs.com/setup/appstore/">App Store</a>, Class 4 Routing, Class 5, CLI, STIR/SHAKEN<br>
<strong>Next Steps</strong>: Install the Dial Phone Number Verification app, generate an API token, configure the switch server and Class 5 server, set the Caller ID and verification charge, configure CLI registration options, and test the voice OTP verification workflow.

</details>

## Overview

The Dial Phone Number Verification app is developed by ConnexCS to integrate phone number verification with the ConnexCS platform. It enables a voice OTP verification workflow in which a user verifies a phone number through a call.

The app uses an API token to authorize operations such as adding Caller IDs (CLIs) and charging customers for verification requests. Administrators can configure call routing, the Caller ID displayed during verification, per-verification charges, and CLI registration behavior.

The application is available through the Connex Store and is managed using the Anvil App Store interface. After installation, administrators can configure the app through its **Config** button.

## Why Use the Dial Phone Number Verification App?

Phone number verification is useful when a service needs to confirm that a user can receive a verification call at a particular number.

The Dial Phone Number Verification app helps administrators:

- Configure the voice verification call route through a Class 4 switch server and a Class 5 server.
- Define the Caller ID displayed on the verification call.
- Generate an API token for authorized application operations.
- Configure optional charges for each successful number verification.
- Register verified numbers as CLIs using the configured authentication and registration settings.
- Configure Caller ID presentation and registration controls.
- Select a STIR/SHAKEN certificate where applicable.

## Key Features

- **API Token Authentication**: Generate a token used by the app to perform authorized operations, including CLI registration and customer charging.
- **Token Expiration**: Choose an expiration period for the API token.
- **Call Routing Configuration**: Select the Class 4 switch server and Class 5 server used by the voice OTP workflow.
- **Caller ID Configuration**: Specify the CLI displayed on the verification call.
- **Per-Verification Charging**: Configure the amount charged to the customer for each number verification.
- **Automatic CLI Registration**: Register verified phone numbers as CLIs using the configured token and registration settings.
- **Caller ID Controls**: Configure P-Asserted-Identity rewriting and forced CLI behavior.
- **Registration Limits**: Configure a hit limit and hit interval for registration-related controls.
- **STIR/SHAKEN Certificate Selection**: Select a certificate for the verification workflow when required and supported by the account configuration.

## Benefits

- Provides a dedicated integration for voice-based phone number verification.
- Centralizes authentication, routing, and charging configuration.
- Reduces manual effort associated with registering verified numbers as CLIs.
- Allows administrators to define verification charges.
- Provides configurable controls for Caller ID handling.
- Supports certificate selection for applicable STIR/SHAKEN requirements.

## How to Install the App

1. Navigate to **Setup :material-menu-right: App Store :material-menu-right: Anvil Store :material-menu-right: Marketplace**, locate **Dial Phone Number Verification**, and click `Install`. <br><img src="/apps/img/dialapp1.png" alt="Connex Store Marketplace showing Dial Phone Number Verification and the Install button" style="border: 2px solid #4472C4; border-radius: 8px; max-width: 100%;"></br>

2. An installation confirmation window will appear. Review the package name and version, then click `Install` again.<br><img src="/apps/img/dialapp2.png" alt="Install Package confirmation window for Dial Phone Number Verification" width= "400" style="border: 2px solid #4472C4; border-radius: 8px; max-width: 100%;"></br>

3. Once installed, open the app from the installed applications list. Verify that the application status is **Installed** and that the displayed version is up to date.<br><img src="/apps/img/dialapp3.png" alt="Dial Phone Number Verification application overview with Config button" width="500" style="border: 2px solid #4472C4; border-radius: 8px; max-width: 100%;"></br>

4. To review the application version and its release status, open the `Versions` tab. Review the available version information and approval status.<br><img src="/apps/img/dialapp4.png" alt="Dial Phone Number Verification Versions tab showing the approved version" width= "350" style="border: 2px solid #4472C4; border-radius: 8px; max-width: 100%;"></br>

## How to Configure Dial Phone Number Verification

1. Navigate to **Setup :material-menu-right: App Store :material-menu-right: Anvil Store :material-menu-right: Installed Apps** and open **Dial Phone Number Verification**.

2. Click `Config` to open the Phone Verification Settings page. <br><img src="/apps/img/dialapp5.png" alt="Phone Verification Settings showing Authentication, Routing, and CLI Registration fields" width= "500" style="border: 2px solid #4472C4; border-radius: 8px; max-width: 100%;"></br>

3. Configure the following settings.

### Authentication

The Authentication section manages the API token used by the app.

- **Token Status**: Indicates whether an authentication token has been created.
- **Expires in**: Select how long the token remains valid. The screenshot shows `30 days` as the selected value.
- **Create token**: Generate the API token required for authorized application operations.

To generate a token:

1. Select the required duration under `Expires in`.
2. Click `Create token`.
3. If the token is displayed after creation, copy it and store it securely according to your organization's credential-handling procedures.

The app identifies the API token as a **write-only secret**. It is not shown again and cannot be read back by application scripts. Store the token securely when it is generated. If it is lost or expires, use the application's supported token-generation process to create a replacement.

!!! tip "Important"
    The token is used by the app to add CLIs and charge customers. Treat it as a sensitive credential and do not share it in screenshots, tickets, or documentation.

### Routing

The Routing section defines the servers used by the voice OTP verification workflow.

| Setting | Description |
|---|---|
| **Switch Server** | Select the Class 4 switch server through which the call is routed. |
| **Class 5 Server** | Select the Class 5/PBX server hosting the verification application. |
| **Caller ID (CLI)** | Enter the phone number displayed as the Caller ID on the verification call. |
| **Charge per verification** | Specify the amount deducted from the customer's balance when a number is verified. |
| **Currency** | Displays the currency used for the verification charge. The screenshot shows USD. |

Both the Switch Server and Class 5 Server are marked as required fields.

For `Caller ID (CLI)`, enter the number you want displayed on the verification call, using the format accepted by your ConnexCS configuration.

For `Charge per verification`, enter the amount to deduct from the customer's balance for each successful number verification. The interface indicates that the amount supports up to three decimal places and that setting the value to `0` disables charging. The balance may go negative, according to the displayed configuration guidance.

### CLI Registration

The CLI Registration section defines how verified phone numbers are added as CLIs.

The interface states that every number that passes OTP verification is added as a CLI on the company using the API token and the configured settings. The CLI is added using the digits of the verified number, without the `+` prefix.

Configure the following options as appropriate for your routing and registration requirements.

| Setting | Description |
|---|---|
| **Rewrite P-Asserted-Identity** | Controls whether the P-Asserted-Identity header is rewritten for the relevant call flow. |
| **Forced** | Controls the forced behavior associated with CLI registration or handling. Confirm the precise behavior for your configuration before enabling it. |
| **Hit limit** | Sets the configured limit for registration-related hits. |
| **Hit interval** | Specifies the interval associated with the hit limit. |
| **STIR/SHAKEN certificate** | Selects the certificate used for the applicable STIR/SHAKEN workflow. The screenshot shows `None` as the selected value. |

Use the options according to your organization's Caller ID, routing, and authentication requirements. Confirm the intended behavior with your ConnexCS administrator before changing advanced registration settings.

After configuring Authentication, Routing, and CLI Registration, click `Save changes` to apply the settings.

Use `Reset` only when you intend to discard the current unsaved changes or restore the form's previous state, according to the application's behavior. <br><img src="/apps/img/dialapp6.png" alt="Phone Verification Settings with Save changes and Reset buttons" width= "500" style="border: 2px solid #4472C4; border-radius: 8px; max-width: 100%;"></br>

This application will be visible in the **Customer Portal**.

## How to use Dial Phone Number Verification on Customer Portal

!!! note "Prerequisite"
    You must be logged in to the **Webphone** before using this feature.

1. Login to **Customer Portal**.
2. Click on `CLI` then `Add CLI`. <br><img src="/apps/img/dialapp7.png" alt="Add CLI" style="border: 2px solid #4472C4; border-radius: 8px; max-width: 100%;"></br>
3. The Phone Number Verification window opens. Enter the phone number you want to verify, then click `Call with Code` to initiate the verification call. <br><img src="/apps/img/dialapp8.png" alt="Verification code" width= "300" style="border: 2px solid #4472C4; border-radius: 8px; max-width: 100%;"></br>
4. You will receive the call on the Webphone with the verification code. <br><img src="/apps/img/dialapp9.png" alt="Call on Webphone" style="border: 2px solid #4472C4; border-radius: 8px; max-width: 100%;"></br>
5. Enter the verification code and click on `Verify`. <br><img src="/apps/img/dialapp10.png" alt="Call on Webphone" width= "500" style="border: 2px solid #4472C4; border-radius: 8px; max-width: 100%;"></br>
6. The CLI will be added and is visible on the CLI list. <br><img src="/apps/img/dialapp11.png" alt="Call on Webphone" width="500" style="border: 2px solid #4472C4; border-radius: 8px; max-width: 100%;"></br>