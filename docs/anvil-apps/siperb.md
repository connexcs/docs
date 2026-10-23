# Siperb App

<details>
<summary><strong>Document Metadata</strong></summary>
<br>

<strong>Category</strong>: Setup / Application Store & App Deployment<br>
<strong>Audience</strong>: Administrators, Support Team, Product Team, Customer Administrators, End Customers<br>
<strong>Difficulty</strong>: Beginner<br>
<strong>Time Required</strong>: Approximately 5–10 minutes for installation and initial setup; additional time may be required for custom domain configuration.<br>
<strong>Prerequisites</strong>: An active ConnexCS account with access to Setup and App Store; permission to install applications; a Siperb account or service access, as applicable; and a valid domain if using a custom domain.<br>
<strong>Related Topics</strong>: <a href="https://docs.connexcs.com/setup/appstore/">App Store</a>, App Deployment, Customer Portal, Custom Domains<br>
<strong>Next Steps</strong>: Install Siperb from the Connex Store, verify its installation status, configure a custom domain if required, and confirm that the Siperb navigation option is available in the appropriate portal. Test the integration with an authorized customer account.

</details>

## Overview

The Siperb app is an application developed by ConnexCS to integrate Siperb with the ConnexCS platform. It is distributed through the Connex Store and can be installed by an authorized administrator.

Once installed, Siperb is available as a separate option in the ConnexCS portal navigation, allowing authorized users to access the integration directly from their account.

The app also supports custom domain configuration, enabling administrators to map a domain to the application. Creating a custom domain triggers an automatic rebuild and republication of the app.

The Siperb app is managed through the Connex Store's Anvil App Store interface, where administrators can review the installed version, check its status, view version history, manage application settings, and uninstall the app when necessary.

## Why Use the Siperb App?

Integrating Siperb into ConnexCS provides a centralized way to make the Siperb service accessible through the ConnexCS portal.

The integration helps administrators:

- Deploy the Siperb app through the Connex Store.
- Provide users with a dedicated Siperb entry in the portal navigation.
- Manage the installed application and its version through a centralized interface.
- Configure a custom domain for the application when required.
- Review application status and version history.
- Remove the application if it's no longer required.

## Key Features

- **App Store Installation**: Install Siperb directly from the Connex Store without manually deploying the application.
- **Application Version Management**: View the installed version, latest available version, and version history.
- **Installation Status**: Check whether the app is installed and up to date.
- **Custom Domain Configuration**: Associate a domain with the Siperb app. Creating a domain automatically rebuilds and republishes the application.
- **Portal Navigation Integration**: Display a dedicated Siperb option in the portal's side navigation for convenient access.
- **Application Lifecycle Management**: Manage the app through the Connex Store, including installation and uninstallation.
- **Version Change History**: Review version approval status, submission details, and changelog information.

## Benefits

- Simplifies the deployment of Siperb within the ConnexCS environment.
- Provides centralized access to the Siperb integration.
- Reduces the need to navigate to a separate application listing each time the service is required.
- Makes it easier for administrators to review application versions and update status.
- Supports custom domain mapping for deployment requirements.
- Provides a straightforward application management workflow through the Connex Store.

## Steps to Install and Use the app

1. Navigate to **Setup :material-menu-right: App Store :material-menu-right: Anvil Store :material-menu-right: Marketplace**, locate **Siperb**, and click `Install`. <br><img src="/apps/img/siperb1.png" alt="Connex Store marketplace showing the Siperb app and Install button" style="border: 2px solid #4472C4; border-radius: 8px; max-width: 100%;"></br>

2. An installation confirmation window will appear. Review the package details and click `Install` again. <br><img src="/apps/img/siperb2.png" alt="Connex Store marketplace showing the Siperb app and Install button" width="400" style="border: 2px solid #4472C4; border-radius: 8px; max-width: 100%;"></br>

3. Once installed, open Siperb from the installed applications list. The application details page displays the installation status, installed version, latest version, and package information.<br><img src="/apps/img/siperb3.png" alt="Connex Store marketplace showing the Siperb app and Install button" width="500" style="border: 2px solid #4472C4; border-radius: 8px; max-width: 100%;"></br>

4. To review the installed version and its changelog, navigate to the `Versions` tab. This section displays the version information, approval status, submission details, and changes included in the release.<br><img src="/apps/img/siperb4.png" alt="Connex Store marketplace showing the Siperb app and Install button" width="500" style="border: 2px solid #4472C4; border-radius: 8px; max-width: 100%;"></br>

5. To configure a custom domain, navigate to the `App Settings` tab. Under **Custom Domains**, click `+ Add`.<img src="/apps/img/siperb5.png" alt="Connex Store marketplace showing the Siperb app and Install button" width="500" style="border: 2px solid #4472C4; border-radius: 8px; max-width: 100%;">

6. A window will open, prompting you to enter the following details:

      1. `Domain`: Enter the domain you want to associate with the Siperb application (for example, `test.cnx.page`).
      2. Click `Create` to save the domain configuration. The application will be automatically rebuilt and republished after the domain is created. <br><img src="/apps/img/siperb6.png" alt="Connex Store marketplace showing the Siperb app and Install button" width="500" style="border: 2px solid #4472C4; border-radius: 8px; max-width: 100%;"></br>

7. To access Siperb, log in to the ConnexCS portal and click `Siperb` in the left-hand navigation menu. This opens the Siperb application integrated with your ConnexCS account.<br><img src="/apps/img/siperb7.png" alt="Connex Store marketplace showing the Siperb app and Install button" width= "270" style="border: 2px solid #4472C4; border-radius: 8px; max-width: 100%;"></br>
8. A new window will where you need to enter the `Siperb API Token`. <br><img src="/apps/img/siperb11.png" alt="Connex Store marketplace showing the Siperb app and Install button" style="border: 2px solid #4472C4; border-radius: 8px; max-width: 100%;"></br>
9. Steps to get the `Siperb API Token`:
      1. Login to your **Siperb Account**.
      2. Click on **Settings :material-menu-right: Developer Settings**. Click on `Generate Token`. <br><img src="/apps/img/siperb8.png" alt="Connex Store marketplace showing the Siperb app and Install button" style="border: 2px solid #4472C4; border-radius: 8px; max-width: 100%;"></br>
      3. A **Personal Access Token** window will appear, enter the **Token Name**, select the **Expiration** days from the drop-down and click on **Generate Token**. <br><img src="/apps/img/siperb9.png" alt="Connex Store marketplace showing the Siperb app and Install button" style="border: 2px solid #4472C4; border-radius: 8px; max-width: 100%;"></br>
      4. Copy the generated token. <br><img src="/apps/img/siperb10.png" alt="Connex Store marketplace showing the Siperb app and Install button" style="border: 2px solid #4472C4; border-radius: 8px; max-width: 100%;"></br>
10. Navigate to the **Control Panel**, click on the **Siperb** application. Paste the generated token and click on `Save and Sign In`.<br><img src="/apps/img/siperb12.png" alt="Connex Store marketplace showing the Siperb app and Install button" style="border: 2px solid #4472C4; border-radius: 8px; max-width: 100%;"></br>
11. **Siperb Dashboard** window will open-up. It provides a quick overview of the account, registered devices, and configured connections. It allows users to monitor their setup and quickly access device and connection management options.<br><img src="/apps/img/siperb13.png" alt="Connex Store marketplace showing the Siperb app and Install button" style="border: 2px solid #4472C4; border-radius: 8px; max-width: 100%;"></br>

    **Key sections of the dashboard**:

      - **Account Overview**: Displays a welcome message and the account user's name, along with shortcuts to create a new device or connection.

      - **Devices**: Shows the total number of registered devices. The Recent devices section lists recently added devices and their types, such as webpage or Electron.

      - **Connections**: Displays the total number of configured connections, including trunks and routes.

      - **Active Connections**: Shows the number of connections currently enabled.

      - **Recent Connections**: Lists recently configured connections, their names, matching patterns, and current status (On or Off).

      - **Quick Actions**: The **New device** and **New connection** buttons provide shortcuts to create devices and connections.

12. **Siperb Profile**: It displays the user's account information, SIP identity, account details, permissions, and domain information. Users can review their profile and, where permitted, update their details.

=== "Details"

    The `Details` tab displays the user's account information, SIP identity, permissions, and domain details.

    - **Profile Information**: Displays the user's name, email address, account type, and membership date. Click `Edit profile` to update editable profile details.
    - **SIP Identity**: Displays the SIP user, SIP domain, and Address of Record (AOR), where configured.
    - **Account**: Shows the User ID, user type, billing plan, creation date, last modified date, and account description.
    - **Permissions**: Displays the features the user can access, such as Connections, Devices, Support, Apps, Domain Users, Developer Settings, Domain Admin, and SIP Traces.
    - **Other Details**: Displays the domain, domain owner status, and parent account details, where available.
    - **Refresh**: Reloads the displayed profile information.
    <img src="/apps/img/siperb15.png" alt="Siperb Profile Details tab showing profile information, SIP identity, account details, permissions, and domain information" style="border: 2px solid #4472C4; border-radius: 8px; max-width: 100%;">

=== "vCard"

    The `vCard` tab displays the user's contact information.

    - **Email**: The email address associated with the contact card.
    - **Mobile**: The user's mobile number, if configured.
    - **Number1**: An additional contact number.
    - **Number2**: Another contact number.
    - **Title Desc**: The contact's name or descriptive title.
    - **Edit vCard**: Allows the user to update contact card information, where permitted.
    - **Refresh**: Reloads the displayed contact information.
    <img src="/apps/img/siperb16.png" alt="Siperb Profile vCard tab showing contact card details and Edit vCard button" style="border: 2px solid #4472C4; border-radius: 8px; max-width: 100%;">

13.**Domain Users** page allows administrators to manage users who can access the Siperb domain. Administrators can view existing users, check their roles, and invite new users. <br><img src="/apps/img/siperb17.png" alt="Siperb Domian" style="border: 2px solid #4472C4; border-radius: 8px; max-width: 100%;"></br>

* **The page includes the following sections**:
    - **Total Users**: Displays the total number of users with access to the domain.
    - **Domain Owners**: Shows the number of users with full administrative rights.
    - **Members**: Displays the number of standard domain users.
    - **All Domain Users**: Lists domain users and provides a search bar to find users by email address or description.
    - **Invite Domain User**: Opens the invitation form to add a new user.
    - **Refresh**: Reloads the user information.

  * **How to Invite a Domain User**?

    1. Navigate to **Siperb :material-menu-right: Domain Users**.
    2. Click `Invite domain user`. The invitation window opens. <br><img src="/apps/img/siperb18.png" alt="Siperb Domian" style="border: 2px solid #4472C4; border-radius: 8px; max-width: 100%;"></br>
    3. Enter the following details:
      - **Email**: Enter the email address of the person you want to invite.
      - **Description**: Enter an optional description to identify the user.
      - **Send welcome email**: Enable this option to send a welcome email to the invited user.
      - **Join mailing list**: Enable this option to add the user to the mailing list.
    4. Click `Send invite` to send the invitation. Click `Cancel` to close the window without sending it.

1.  The **Devices** page allows users to create and manage devices registered with their Siperb account. Users can view device details, access diagnostic logs, and edit or delete devices. <br><img src="/apps/img/siperb19.png" alt="Siperb Devices list showing registered devices and available actions" style="border: 2px solid #4472C4; border-radius: 8px; max-width: 100%;"></br>

      **The page includes the following options**:

    - **Search**: Find devices by description, platform, or other searchable details.
    - **Refresh**: Reload the device list.
    - **New device**: Register a new device.
    - **Description**: Displays the device name.
    - **Platform**: Shows the device platform, such as `webpage` or `electron`.
    - **Mode**: Displays the registration mode, such as `Proxy`.
    - **SIP contact**: Displays SIP contact information, where available.
    - **Created**: Shows when the device was created.
    - **Actions**: Use `Edit` to modify a device or `Delete` to remove it.
  
      - **How to Create a Device**?

        1. Navigate to **Siperb :material-menu-right: Devices**.
        2. Click `New device`. The New device window opens. <br><img src="/apps/img/siperb21.png" alt="Siperb New device form with device name, platform, registration mode, and WebSocket settings" style="border: 2px solid #4472C4; border-radius: 8px; max-width: 100%;"></br>
        3. Enter the following details:
              - **Name**: Enter a descriptive name for the device, such as `Reception desk phone`.
              - **Platform**: Enter the platform identifier expected by the Siperb API, such as `script`.
              - **Registration mode**: Select the required registration mode. The screenshot shows `Proxy`.
              - **WebSocket server**: Enter the WebSocket server address when using WebSocket mode. This field is required only for WebSocket mode.
              - **SIP domain (WebSocket)**: Enter the SIP domain used for the WebSocket connection.
              - **SIP username (WebSocket)**: Enter the SIP username for authentication.
              - **SIP password (WebSocket)**: Enter the corresponding SIP password.

        4. Click `Create device` to register the device. Click `Cancel` to close the window without creating it.

!!! note "What happens when you click on `proxy`?"

    - **Overview:** Displays the device description, platform, registration mode, SIP contact, provisioning token, and creation date.
    - **Console log:** Provides access to console logs for troubleshooting.
    - **Register log:** Displays registration-related logs.
    - **Network latency:** Provides network latency information for diagnosing connectivity or performance issues.
    - **SIP traces:** Provides SIP signaling information for call and registration troubleshooting.

    Click `Edit device` to modify the device configuration or `Refresh` to reload its details.

    The **Destructive actions** section contains the `Delete device` option. Deleting a device permanently removes the device and its provisioning, and the action cannot be undone.

    <br><img src="/apps/img/siperb20.png" alt="Siperb device details showing overview and diagnostic tabs" style="border: 2px solid #4472C4; border-radius: 8px; max-width: 100%;"></br>

15.The **Connections** page allows users to create and manage SIP connections in Siperb. Connections define how calls are routed to external trunks or registration-based endpoints using dial patterns and connection settings.<br><img src="/apps/img/siperb22.png" alt="Siperb Connections page showing connection names, types, dial patterns, weights, enabled status, and actions" style="border: 2px solid #4472C4; border-radius: 8px; max-width: 100%;"></br>

The page includes the following options:

- **Search**: Find connections by name, type, or dial pattern.
- **Refresh**: Reload the connection list.
- **New connection**: Create a new SIP connection.
- **Name**: Displays the connection name.
- **Type**: Identifies the connection type, such as `OutboundTrunk` or `OutboundRegistration`.
- **Dial pattern**: Defines which dialed numbers match the connection.
- **Weight**: Determines priority when multiple connections match. Lower values are tried first.
- **Enabled**: Indicates whether the connection is enabled.
- **Actions**: Use `Edit` to modify a connection or `Delete` to remove it.

* **How to Create a New Connection**?

      1. Navigate to **Siperb :material-menu-right: Connections** and click `New connection`. <br><img src="/apps/img/siperb23.png" alt="Siperb New Connection form showing connection type, routing, registration, and advanced settings" style="border: 2px solid #4472C4; border-radius: 8px; max-width: 100%;"></br>

      2. Configure the connection details.

      **Connection Details**

      - **Connection type**: Select the type of connection, such as `Outbound Registration` or an outbound trunk type.
      - **Connection name**: Enter a descriptive name to identify the connection.

      **Connection Routing**

      - **Dial pattern**: Select the dial pattern that determines which numbers the connection handles. `Catch All` is shown as an available option.
      - **Weight**: Set the connection priority. Lower values are prioritized when multiple connections match.
      - **Outbound routing disabled**: Enable this option to disable outbound routing through the connection.
      - **Connection expiry**: Configure whether the connection should expire, where applicable.
      - **Restrict SIP methods**: Enable this option if SIP method restrictions are required.

      **Registration**: This section contains settings for connections that use SIP registration.

      - **Registration server**: Enter the hostname or IP address of the remote PBX or registration server.
      - **Port**: Specify the SIP port. The screenshot shows `5060`.
      - **SIP username**: Enter the SIP username used for registration.
      - **Authentication**: Select the required authentication method. The screenshot shows `Set Username and Password`.
      - **Auth username**: Enter the authentication username, if required.
      - **Auth password**: Enter the authentication password.
      - **Allow source IP / subnet**: Specify which source IP addresses or subnets are allowed.
      - **Transport**: Select the SIP transport protocol, such as UDP.
      - **Binding type**: Select the required binding method. The screenshot shows `DNS with SRV`.
      - **Contact URI parameters**: Configure additional parameters for the SIP Contact URI.
      - **Contact header parameters**: Configure additional SIP Contact header parameters.
      - **Register binding SBC**: Displays the associated SBC binding information, where applicable.
      - **Registration disabled**: Enable this option to disable registration.

      **Media Handling and Advanced Settings**: Expand these sections to configure additional options required for the connection. The available settings depend on the connection type and deployment requirements.
      
      Review the configuration and click `Create connection` to save the connection. Click `Cancel` to leave without creating it.

16.The **Create Interconnect** page allows administrators to create an outbound registration connection for a selected domain user. It configures the SIP registration server, authentication credentials, media handling, and advanced settings required for the connection. <br><img src="/apps/img/siperb24.png" alt="Siperb Create Interconnect form showing domain user, connection type, registration, and advanced settings" style="border: 2px solid #4472C4; border-radius: 8px; max-width: 100%;"></br>

* **Configuration Fields**
    - **Domain user**: Select the domain user under whose account the connection will be created.
    - **Connection type**: Displays the connection type. The screenshot shows `Outbound Registration`.
    - **Connection name**: Enter a descriptive name for the connection, such as `Nairobi PBX trunk`.

* **Connection Routing**: Expand the **Connection Routing** section to configure the routing rules for the connection, including the dial pattern and related routing options.

* **Registration**: Configure the SIP registration details required to connect to the remote PBX.
    - **Registration server**: Select the configured registration server or the internet-reachable PBX.
    - **Port**: Specify the SIP registration port. The default shown is `5060`.
    - **SIP username**: Select the SIP username used for registration. This sets the `To` and `From` headers in the registration.
    - **Authentication**: Select the authentication method. The screenshot shows `Set Username and Password`.
    - **Auth username**: Enter the authentication username, if required.
    - **Auth password**: Enter the corresponding authentication password.

* **Media Handling**: Expand **Media Handling** to configure media-related options for the interconnect, according to the requirements of the SIP connection.

* **Advanced Settings** provides additional configuration options.
    - **Reformat**: Add a row to define number-reformatting rules, where required.
    - **Outbound call concurrency**: Specify the maximum number of concurrent outbound calls permitted for the connection. The screenshot shows `3`.

* **Create the Interconnect**
    1. Select the required **Domain user**.
    2. Enter a **Connection name**.
    3. Configure the routing and registration details.
    4. Review the Media Handling and Advanced Settings sections.
    5. Click `Create interconnect` to create the connection. Click `Cancel` to exit without creating it.