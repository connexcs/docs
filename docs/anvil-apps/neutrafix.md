# NeuTrafix App

<details>
<summary><strong>Document Metadata</strong></summary>
<br>
<strong>Category</strong>: Setup / Application Store & App Deployment<br>
<strong>Audience</strong>: Administrators, Support Team, Product Team, Customer Administrators, Telecom Operators<br>
<strong>Difficulty</strong>: Beginner<br>
<strong>Time Required</strong>: Approximately 5–10 minutes for installation and initial configuration. Additional time may be required for account registration, company verification, and marketplace access.<br>
<strong>Prerequisites</strong>: An active ConnexCS account with access to Setup and App Store; permission to install applications; and valid NeuTrafix account credentials or the ability to register a new account. Company verification documents may be required to enable purchasing activities.<br>
<strong>Related Topics</strong>: <a href="/setup/appstore/">App Store</a>, App Deployment, API Authentication, Route Marketplace, Prefix Management, <a href="/rate-card-building/">Rate Cards</a><br>
<strong>Next Steps</strong>: Install NeuTrafix from the Connex Store, configure the application, register or log in to NeuTrafix, complete company verification, and access the route marketplace.<br>
</details>

## Overview

NeuTrafix is a telecom route marketplace integrated with the ConnexCS platform. It enables telecom companies to access marketplace functionality for buying and selling voice routes, managing prefixes, and working with rate cards.

ConnexCS provides the NeuTrafix app through the Connex Store, allowing administrators to install and manage the integration from the ConnexCS portal.

Once installed, NeuTrafix appears as a separate option in the portal's side navigation. The application supports a workflow that connects company registration, authentication, route selection, and billing activities.

NeuTrafix is managed through the Anvil App Store interface, where administrators can review installation status, check version information, view version history, configure application settings, manage custom domains, and uninstall the app when required.

## Why Use the NeuTrafix App?

The NeuTrafix integration provides a centralized way for ConnexCS customers to access the NeuTrafix route marketplace.

It helps customers and administrators:

- Access the NeuTrafix application directly from the ConnexCS portal.
- Browse and purchase telecom voice routes, subject to account eligibility.
- Manage prefixes and rate cards through the marketplace.
- Configure application access and settings.
- Review installed application versions and their approval status.
- Manage the application lifecycle through the Connex Store.

## Key Features

- **App Store Installation**: Install NeuTrafix through the Connex Store.
- **Portal Navigation Integration**: Access NeuTrafix through a dedicated option in the ConnexCS portal navigation.
- **Route Marketplace Access**: Access marketplace functionality for buying and selling telecom routes.
- **Prefix and Rate Card Management**: Support prefix-based routing configuration and seller-specific rate card assignment through NeuTrafix.
- **API Authentication**: Use the appropriate API credentials to authenticate with NeuTrafix.
- **Account Registration and Verification**: Register an account and submit company documents for verification.
- **Version Management**: Review installed versions, latest versions, and version history.
- **Custom Domain Configuration**: Map a custom domain to the application. Creating a custom domain triggers an automatic rebuild and republication.
- **Application Lifecycle Management**: Review installation status and uninstall the app when it is no longer required.

## Benefits

- Simplifies access to the NeuTrafix route marketplace from ConnexCS.
- Provides a centralized application deployment and management workflow.
- Supports telecom route purchasing and selling activities through the marketplace.
- Helps customers manage route-related information, including prefixes and rate cards.
- Separates application deployment from NeuTrafix account registration and verification.
- Enables administrators to review application versions and configuration settings.

## Steps to Install and Configure the App

### Install NeuTrafix

1. Navigate to **Setup :material-menu-right: App Store :material-menu-right: Anvil Store :material-menu-right: Marketplace**, locate **NeuTrafix**, and click `Install`. <br><img src="/apps/img/neutrafix1.png" alt="Connex Store marketplace showing NeuTrafix and the Install button" style="border: 2px solid #4472C4; border-radius: 8px; max-width: 100%;"></br>

2. An **Install Package** confirmation window will appear. Review the application name and version, then click `Install` to confirm. <br><img src="/apps/img/neutrafix2.png" alt="Install Package confirmation window for NeuTrafix version 3" width="300" style="border: 2px solid #4472C4; border-radius: 8px; max-width: 100%;"></br>

3. After installation, open NeuTrafix from the installed applications list. The **Overview** tab displays the installation status, installed version, latest version, and package information. <br><img src="/apps/img/neutrafix3.png" alt="NeuTrafix Overview showing installation status and package information" width="500" style="border: 2px solid #4472C4; border-radius: 8px; max-width: 100%;"></br>

4. To review the application's release history, navigate to the `Versions` tab. This section displays the available versions and their approval status. <br><img src="/apps/img/neutrafix4.png" alt="NeuTrafix Versions tab showing version history and approval status" width="500" style="border: 2px solid #4472C4; border-radius: 8px; max-width: 100%;"></br>

5. Navigate to the `App Settings` tab to review the available application settings. <br><img src="/apps/img/neutrafix5.png" alt="NeuTrafix App Settings showing Custom domains and Assigned buttons" width="500" style="border: 2px solid #4472C4; border-radius: 8px; max-width: 100%;"></br>

6. Review the following sections:
   1. **Custom domains**: Map a domain to the application if required. Click `+ Add` to begin configuring a custom domain. Creating the domain triggers an automatic application rebuild and republication.
   2. **Assigned buttons**: Displays the application entry registered in the ConnexCS portal navigation. The screenshot shows NeuTrafix as a portal navigation entry.

7. To configure the API user, open the application's `Config` option. Select the required **API User** and click `Confirm` to save the configuration. <br><img src="/apps/img/nt3.png" alt="NeuTrafix application configuration showing the API User selection" width="500" style="border: 2px solid #4472C4; border-radius: 8px; max-width: 100%;"></br>

   Review the configuration and confirm that the API user has been assigned as required. <br><img src="/apps/img/nt4.png" alt="NeuTrafix API User configuration confirmation" width="500" style="border: 2px solid #4472C4; border-radius: 8px; max-width: 100%;"></br>

### Using NeuTrafix

#### Sign Up

1. Click the `NeuTrafix` app in the ConnexCS portal sidebar.

2. If you are a new customer, select `Signup` to register a new NeuTrafix account.

3. During registration, a one-time dialog displays the following credentials:

   - **Username**: The username generated or assigned during registration.
   - **Login Password**: The password used to log in to the NeuTrafix account.
   - **API Password**: The password used for API authentication.

4. Save the credentials securely when they're displayed. Don't share them with unauthorized users.

5. The NeuTrafix account is created immediately after registration. However, company verification is a separate process.

6. Submit the required company documents to the NeuTrafix team for review.

7. Wait for the verification process to be completed and approved. Route purchasing remains unavailable until the company documents have been approved.

!!! warning "Store Credentials Securely"
    Store the credentials generated during registration securely, as they may not be displayed again. Do not share API credentials or passwords with unauthorized users.

#### Log In

1. Open the **NeuTrafix** app from the ConnexCS portal sidebar.

2. If you already have a NeuTrafix account, click `Login`. The login window displays the `API Login` and `API Key` fields. Enter the API credentials associated with your NeuTrafix account, then click `Login`. <br><img src="/apps/img/nt6.png" alt="API Login" width= "500" style="border: 2px solid #4472C4; border-radius: 8px; max-width: 100%;"></br>

3. If you can't locate the required API credentials, check the **Profile** section of your NeuTrafix account for the API username and API password. Use the credentials intended for API authentication, not your standard account login credentials.

#### Troubleshooting

| Issue | Recommended Action |
|---|---|
| API authentication fails | Check that the values entered in `API Login` and `API Key` are the API credentials required by NeuTrafix. If authentication fails, verify the credential names and values in the NeuTrafix Profile section or contact the NeuTrafix support team. | Dentials intended for API authentication rather than standard login credentials|

#### Explore the Route Marketplace

After logging in, the route marketplace displays the available search filters and route results. <br><img src="/apps/img/nt7.png" alt="NeuTrafix route marketplace showing filters and search results" style="border: 2px solid #4472C4; border-radius: 8px; max-width: 100%;"></br>

1. **Market View**: Select `See Purchased Routes` to view the list of routes you have already purchased.

2. **Filter Section**: Use the following filters to find routes that match your requirements.

   | Field | Description | Usage |
   |---|---|---|
   | **Prefix** | Destination dialing prefix | Search for routes covering a specific number range, such as 91, 44, or 1. |
   | **Country** | Destination country | Filter routes available for a specific country. |
   | **Route Type** | Route classification | Filter by route quality or type, such as CLI, Non-CLI, or Premium. |
   | **Seller** | Route provider or company | Display routes offered by a specific seller. |
   | **Seller Route** | Seller-specific route category | Filter routes within a seller's inventory. |
   | **Route (Voice / SMS)** | Traffic type | Select whether to search for Voice or SMS routes. |
   | **Minimum Price** | Lower price limit | Filter routes based on the minimum price. |
   | **Maximum Price** | Upper price limit | Filter routes based on the maximum price. |
   | **Order By** | Sorting criteria | Sort results by price, prefix, seller, or other available criteria. |

3. **Search Result Section**: Displays routes matching the selected filter criteria.

4. **Result Table Columns**: The search results table displays the following information.

   | Column | Description | Technical Meaning |
   |---|---|---|
   | **Prefix** | Destination prefix | Dialing code covered by the route. |
   | **Price (USD)** | Route rate | Cost per minute or message offered by the seller. |
   | **Seller** | Route provider or company | Click the seller name to view the seller's profile details. |
   | **Type** | Route type | Indicates the traffic category or route classification. |
   | **Destination** | Destination name | Country or operator served by the route. |
   | **Route Information** | Route details | Provides technical information about route quality or configuration. |
   | **Purchase Route** | Purchase action | Provides the option to purchase a route. |
   | **View More** | Additional information | Displays further route details when available. |

5. **Purchase Route**: To purchase a route, follow these steps:

   1. Click `Purchase` in the **Purchase Route** column. <br><img src="/apps/img/nt8.png" alt="NeuTrafix route purchase window showing account and carrier selection" style="border: 2px solid #4472C4; border-radius: 8px; max-width: 100%;"></br>

   2. In the window that opens, select the **Account** and **Carrier**.

   3. The carrier defaults to `NeuTrafix`. You can select another carrier from the drop-down list if required.

   4. Click **Confirm and Purchase Route** to complete the purchase.

      !!! Note "You must complete company verification before purchasing routes. If purchasing is unavailable, check the verification status of your company documents."

6. **Rate Card Assignment**: A rate card is automatically added whenever a new seller is created.

!!! info "How Rate Card Assignment Works"
      A `NeuTrafix` carrier is used to associate seller-specific rate cards with the ConnexCS configuration. Confirm with the application owner whether this carrier is created on the first login or through another initialization process.

      When a user purchases a route, the corresponding prefixes are automatically added to the relevant seller's rate card. The rate card then functions like a standard rate card within ConnexCS.

## Troubleshooting

| Issue | Recommended Action |
|---|---|
| NeuTrafix isn't visible in the portal navigation. | Confirm that the application is installed and review the **Assigned buttons** section in **App Settings**. |
| Installation fails. | Verify your App Store permissions and retry the installation. |
| API authentication fails. | Confirm that the API credentials are correct. Use the API credentials expected by the login dialog rather than standard login credentials. Check the Profile section for the API credentials. |
| Sign-up succeeds, but purchasing is unavailable. | Confirm that the required company documents have been submitted to the NeuTrafix team and approved. |
| The installed version is outdated. | Review the application's version information and available releases in the Connex Store. |
| A custom domain isn't available. | Review the domain configuration and allow the automatic rebuild and republication process to complete. |
| The expected carrier or rate card is unavailable. | Check the route purchase configuration and confirm the carrier and seller-specific rate card settings with your ConnexCS administrator. |
