# Contact Center Setup & Usage Guide

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Customer Portal / Contact Center Installation<br>
<strong>Audience</strong>: Administrators, Engineers, Support Team<br>
<strong>Difficulty</strong>: Intermediate<br>
<strong>Time Required</strong>: Approximately 20–40 minutes<br>
<strong>Prerequisites</strong>: Active ConnexCS account, administrative access to the Customer Portal module, and required permissions to install and configure contact-center features in the portal<br>
<strong>Related Topics</strong>: <a href="https://docs.connexcs.com/customer-portal/cp-contact-center/">Customer Portal – Contact Center Overview</a>, <a href="https://docs.connexcs.com/setup/integrations/portal/">Portal Access Configuration</a>, <a href="https://docs.connexcs.com/customer/customer/#customer-dashboard">Customer Dashboard</a>
<strong>Next Steps</strong>: Follow installation steps to enable contact-center features in the Customer Portal, assign roles and permissions, test portal login and functionality, and verify integration with existing customer and contact data<br>

</details>

## Install Contact Center App

1. Login to your **Control Panel**.
2. Navigate to **Setup :material-menu-right: App Store**.
3. Click on the **Contact Center** application. Click on `Install`. <br><img src= "/customer-portal/img/1cc_new.png" style="border: 2px solid #4472C4; padding: 2.5px; border-radius: 8px;"></br>
4. Click `Install` again. <br><img src= "/customer-portal/img/2cc_new.png" width= "300" style="border: 2px solid #4472C4; padding: 2.5px; border-radius: 8px;"></br>
5. Once installed, open the application details page. The **Overview** tab displays the installation status and package information, including: <br><img src= "/customer-portal/img/3cc_new.png" width= "700" style="border: 2px solid #4472C4; padding: 2.5px; border-radius: 8px;"></br>

      - **Package slug**: Unique application identifier.
      - **Visibility**: Indicates whether the application is Public or restricted.
      - **Installed version**: Version currently installed on the account.
      - **Latest version**: Most recent available application version.
      - **Created**: Date and time when the package was created.
      - **Updated**: Date and time when the package was last updated.
      - **Installed package ID**: Unique identifier of the installed package.
      - **Package ID**: Unique identifier assigned to the application package.

   The application status indicates whether the installed version is up to date. <br><img src= "/customer-portal/img/4cc_new.png" width= "500" style="border: 2px solid #4472C4; padding: 2.5px; border-radius: 8px;"></br>

## Configure the Contact Center App

1. Click on `Config`. <br><img src= "/customer-portal/img/5cc_new.png" width= "500" style="border: 2px solid #4472C4; padding: 2.5px; border-radius: 8px;"></br>
2. A window will open with the following details: <br><img src= "/customer-portal/img/6cc_new.png" width= "500" style="border: 2px solid #4472C4; padding: 2.5px; border-radius: 8px;"></br>

### 1. Authentication

This section manages the API token used by the Contact Center backend to communicate with services outside the settings interface.

The backend automatically creates and manages this token as a write-only secret. The token is not displayed on this page and cannot be retrieved by application scripts.

| Field | Description |
|---|---|
| **Status** | Displays the current token creation status. The screenshot shows `Not created`, indicating that an API token has not yet been generated. |
| **Expires in** | Specifies the validity period of the API token. The screenshot shows `30 days` as the selected option. |
| **Create token** | Generates an API token using the selected expiration period. The backend stores the token securely. |

**How to Create an API Token:**

1. Select the required validity period from the `Expires in` drop-down.
2. Click `Create token`.
3. The backend generates and securely stores the token.
4. The authentication status should reflect the token's creation state.

> **Important:** The API token is managed by the backend and isn't exposed through the settings page or application scripts.

### 2. Servers

This section specifies the ConnexCS servers used by the Contact Center for call processing and call control.

| Field | Description |
|---|---|
| **Class 4 Server** | Select or specify the Class 4 server responsible for outbound call routing. |
| **Class 5 Server** | Select the Class 5 server responsible for handling the call-control functionality. |

Both fields are mandatory and are marked with an asterisk (*).

**Configuration:**

1. Select the required **Class 4 Server**.
2. Select the required **Class 5 Server** from the `Search servers` drop-down.
3. Ensure that both servers are configured before saving the settings.

The interface displays validation messages if either mandatory server field is missing.

### 3. Dialling

This section configures the timing parameters that control agent activity after a call ends.

| Field | Description |
|---|---|
| **Disposition Timeout (ms)** | The maximum time an agent has to submit the call disposition (such as the call outcome) after a call ends. Default: `30000` milliseconds (30 seconds). |
| **Wrap-up Time (s)** | The post-call interval an agent has to complete activities related to the previous call before moving on. Default: `30` seconds. |

Both values can be adjusted according to the contact center's operational requirements.

### 4. Domain Configuration

This section allows administrators to configure custom domains for the Contact Center application.

It displays the domains currently associated with the project and provides an option to add new domains.

| Field / Option | Description |
|---|---|
| **Configured Domains** | Displays the custom domains currently associated with the project. The screenshot shows `No domains configured yet`. |
| **Add new domain** | Accepts the domain name that you want to associate with the Contact Center application. |
| **Add** | Adds the entered domain to the project configuration. |

**How to Add a Custom Domain:**

1. Navigate to the **Domain Configuration** section.
2. Enter the required domain name in the `Add new domain` field (for example, `contact.example.com`).
3. Click `Add` to add the domain.
4. Verify that the domain appears in the configured domains list.

> **Note:** Changes to domain configuration apply immediately.

### 5. Save and Reset Settings

The bottom of the window provides two options for managing configuration changes.

| Button | Description |
|---|---|
| **Reset** | Resets the current configuration changes. |
| **Save changes** | Saves the configured authentication, server, dialling, and domain settings. |

After updating the required fields, click `Save changes` to apply the configuration.

### Important Notes

!!! warning "Required Server Configuration"
    Both Class 4 Server and Class 5 Server are mandatory. Ensure that valid servers are selected before saving the configuration.

!!! info "API Token Security"
    The API token is generated and managed by the backend as a write-only secret. It's not exposed through the settings interface or application scripts.

!!! info "Domain Configuration"
    Custom domain changes apply immediately after they're added.


!!! Note "An internal number block range is required to create agents."

After following the above steps, we've successfully installed the Contact Center application.

Next, we proceed to review the Contact Center application's setup process and understand its operational workflow.

You can **Rename** or **Reposition** the Contact Center button in the portal.
