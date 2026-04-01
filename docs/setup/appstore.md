# App Store

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Setup / Application Store & App Deployment<br>
<strong>Audience</strong>: Administrators, Engineers, Product Team<br>
<strong>Difficulty</strong>: Intermediate<br>
<strong>Time Required</strong>: Approximately 30–60 minutes<br>
<strong>Prerequisites</strong>: Active ConnexCS account with Setup privileges; basic understanding of the Apps platform and deployment process.<br>
<strong>Related Topics</strong>: <a href="https://docs.connexcs.com/apps/architecture/app/">Apps Platform – Applications</a><br>
<strong>Next Steps</strong>: Install the required app from <code>Setup → App Store</code>, complete its basic configuration, and then verify it works correctly in your environment.<br>

</details>

**Setup :material-menu-right: App Store**

The **ConnexCS App Store** lets you discover, download, and install applications on your user account.

The Apps created using the IDE are available for use in the App Store when published.

The Apps can be created by other customers or developers and used by ConnexCS's customers.

## Steps to install Apps

1. Login to your account. Navigate to Setup :material-menu-right: App Store. Click on the App you wish to install.
2. Click on **Install**.

<img src= "/setup/img/appstore.png" style="border: 2px solid #4472C4; border-radius: 8px;">

3.After hitting the '**Install**' button, a window appears with two fields. The first field is '**App Name**', where you can either change the name of the application or keep it the same. The second field allows you to select the **Version** of the application.

4.Click on **Install** and the App will be installed on your user account.

<img src= "/setup/img/appstore1.png" width= "500" style="border: 2px solid #4472C4; border-radius: 8px;">

5.You can view the **Description**, **Installed Versions**, **All Versions** and any **Documentation** related to the Application.

<img src= "/setup/img/appstore2.png" width= "500" style="border: 2px solid #4472C4; border-radius: 8px;">

!!! Note
    See this icon? ![owner](image-1.png). It means you built this application and the ownership belongs to you.

## How to Display documentation for your Application

1. You can add information about your specific application by using the **Template** component in the **IDE** section.
2. [Click here](https://docs.connexcs.com/apps/architecture/template/#how-to-add-a-template) to follow the instructions on how to create a template and add documentation, however, note that **template name** should actually be **app_documentation**.

<img src= "/apps/img/appdoc.png" style="border: 2px solid #4472C4; border-radius: 8px;">
<img src= "/apps/img/appdoc1.png" style="border: 2px solid #4472C4; border-radius: 8px;">

## Useful Tools and Applications

### DID Spam Score

#### Overview

This application will help you update the Spam Score of your DIDs and send a report to the provided email ID.

!!! Note "Please note that this service is chargeable. Check [Pricing](https://connexcs.com/pricing) here.

#### Prerequisites

Before using the app, ensure that the [**Spam Score package**](https://docs.connexcs.com/setup/config/packages/) is added to your account.

#### Steps to Use the App

1. Setup Email that will be used as API user.
2. Navigate to **IDE :material-menu-right: DID Spam Score App :material-menu-right: Environmental Variables**.
3. Locate the `cx_api_user`variable. <img src= "/apps/img/fli.png" width= "800" style="border: 2px solid #4472C4; border-radius: 8px;">
4. Enter the email address you use to login in value.<img src= "/apps/img/fli1.png" width= "400" style="border: 2px solid #4472C4; border-radius: 8px;">
5. Select **DIDs** for **Spam Score Check**.
6. Navigate to **Global :material-menu-right: DID**.
7. Select the DIDs you want to check.
8. Once selected, click on the `Spam Score button` at the top of the page.<img src= "/apps/img/fli2.png" width= "800" style="border: 2px solid #4472C4; border-radius: 8px;">
9. Send the `Spam Score Report`.
10. After clicking the Spam Score button, you will be prompted to enter the **email address** to which the DID spam report will be sent.
11. Enter the desired email address and click `Spam Scout`. <img src= "/apps/img/fli3.png" width= "600" style="border: 2px solid #4472C4; border-radius: 8px;">

### Autonomous Calling

#### Overview

This application allows autonomous dialling of numbers from an uploaded list.

#### Steps to Use the App

1. Navigate to **Setup :material-menu-right: App Store :material-menu-right: Autonomous Calling** and click `Install`.<img src= "/apps/img/ac1.png" style="border: 2px solid #4472C4; border-radius: 8px;">
2. A window will appear, select the version of the app and hit `Install` again. <img src= "/apps/img/ac2.png" width= "400" style="border: 2px solid #4472C4; border-radius: 8px;">
3. After refreshing the Control Panel, the `Auto Dial` button will appear on the side bar.
4. Click `Auto Dial`, then `Config` to setup the calling process.
      + Select the `Customer` for the drop-down.
      + Enter the `Outbound Server` in use.
      + Enter the extension in the `Endpoint` field.
      + Enter the `CLI` and click `Confirm`.<img src= "/apps/img/ac3.png" style="border: 2px solid #4472C4; border-radius: 8px;">
5. Click on `Set Numbers` to add the number list for the autonomous dialing process. Click on `Save Numbers`. <img src= "/apps/img/ac4.png" widht= "600" style="border: 2px solid #4472C4; border-radius: 8px;">
6. Hit the `Start` button to dial the numbers automatically. `.<img src= "/apps/img/ac5.png" style="border: 2px solid #4472C4; border-radius: 8px;">

!!! Note "Important Note"
    1. Ensure that all phone numbers are entered in the complete international format (e.g., +44 for the UK, +1 for the US).
    2. When entering multiple phone numbers, list each number on a new line.

### Click-2-Dial (Programmatic API Calling)

#### Overview

**Click-to-Dial API** enables applications, websites, or software systems to initiate phone calls with a single click or programmatic command.

Instead of manually dialing a phone number, users or systems can trigger a call directly from an interface, making the process faster, more efficient, and less error-prone.

#### Steps to Use the App

1. Navigate to **Setup :material-menu-right: App Store :material-menu-right: Click-2-Dial** and click `Install`.<img src= "/apps/img/cd1.png" width= "900" style="border: 2px solid #4472C4; border-radius: 8px;">

2. A window will appear, select the version of the app and hit `Install` again. <img src= "/apps/img/cd2.png" width= "400" style="border: 2px solid #4472C4; border-radius: 8px;">

3. In the `Installed Versions` tab click `Config`.
   <img src= "/apps/img/cd3.png" width= "400" style="border: 2px solid #4472C4; border-radius: 8px;">

4. A window will open, prompting you to enter the following details:
      + Select the `Customer` for the drop-down.
      + Enter the `API Key`. It acts as a gate-keeper in maintaining the security, reliability, and integrity of API-based interactions. API Keys are generated randomly for each customer as soon as you press `+Add`.
      + Enter the `Extension`. It specifies the number you are using to initiate the call.<img src= "/apps/img/cd4.png" style="border: 2px solid #4472C4; border-radius: 8px;">

5. Click `Save`.
6. Now you need to configure an endpoint URL, as it serves as the programmatic entry point required to trigger Click-to-Dial call initiation via ScriptForge. A call will first come from the customer’s number, and then it will be routed further through an extension to connect to the next destination.
7. Navigate to **IDE :material-menu-right: Click-2-Dial application :material-menu-right: Script Forge (Click-2-Dial Originate) :material-menu-right: Click on the `Settings` button :material-menu-right: Endpoint URL's**. It allows external systems (or internal workflows) to trigger a ScriptForge function `(send)` via a `URL (API call)`. <img src= "/apps/img/cd5.png" style="border: 2px solid #4472C4; border-radius: 8px;">.

8. **Technical Explanation**
   + **Domain** → Specifies the base host where the API is exposed.
   + **Function Name (send)** → Maps to the underlying ScriptForge function to be executed.
   + **Final URL** → Fully qualified endpoint that accepts HTTP requests to trigger the function. Enter the `API` from the `Config`. <img src= "/apps/img/cd6.png" style="border: 2px solid #4472C4; border-radius: 8px;">.

9. When this endpoint is called:
   1. The request is routed to the ScriptForge execution layer.
   2. The specified function (send) is invoked.
   3. Any defined logic, integrations, or side effects are executed.

!!! "Note"
    This feature requires the **Programmatic Call Originate** package to be enabled; otherwise, it will not function.


### Yoco Payment

#### Overview

**Yoco** is a payment gateway and merchant services platform that enables businesses to accept, process, and manage digital payments securely through APIs and hosted payment flows.

Instead of handling payment processing, card security, and transaction compliance internally, applications and platforms can integrate with Yoco to initiate charges, collect customer payments, and track transactions programmatically, making payment collection faster, more reliable, and secure.

#### How it works?

To enable payment-related operations via Yoco, the system requires authentication using a `Secret API Key`.
This key determines which Yoco account the API requests are executed against and ensures secure access to subscribed services.

#### Where to Obtain the API Secret Key?

1. The customer logs in to the `Yoco App` / `Yoco Control Panel`.

2. Navigate to the **API :material-menu-right: Developer :material-menu-right: Integration** section.

3. Locate the `Secret Key` under the `account credentials`.

4. Copy the Secret Key for use in the integration.

!!! Note "The `Secret Key` is `account-specific` and must be kept `confidential`."

#### Steps to Use the App

1. Navigate to **Setup :material-menu-right: App Store :material-menu-right: Yoco** and click `Install`.<img src= "/apps/img/yoco1.png" style="border: 2px solid #4472C4; border-radius: 8px;">

2. A window will appear, select the version of the app and hit `Install` again. <br><img src= "/apps/img/yoco2.png" width= "400" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

3. Go to the `Installed Versions` tab, then hover on `settings` icon and click on `Config`. <br><img src= "/apps/img/yoco3.png" width= "400" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

4. A window will open, prompting you to enter the following details:
      + `API User`: The selected API user represents the authenticated entity making API requests.
      + Enter the `Secret Key`. This key is required for authentication. Follow the steps [here](/setup/appstore/#where-to-obtain-the-api-secret-key) to generate and retrieve the API key. **ConnexCS uses this key to securely authenticate and authorise all payment-related API requests**.
      + `Surcharge`: Configure an additional charge to be applied to payments.You can choose one of the following options:
        + **Amount (ZAR)**: Applies a fixed surcharge in South African Rand (ZAR).
        + **Percent**: Applies a percentage-based surcharge on the transaction amount. <img src= "/apps/img/yoco4.png" style="border: 2px solid #4472C4; border-radius: 8px;">

5. Click `Save`.

### Neutrafix

#### Overview

**Neutrafix** is a **telecom routes marketplace integrated within the ConnexCS platform**. It allows telecom companies to buy and sell voice routes through a structured, automated workflow.

**Using Neutrafix, companies can**:

* Browse and purchase telecom routes
* Manage prefixes and rate cards

Neutrafix connects directly with the **ConnexCS Control Panel**, enabling a seamless flow from **company registration → authentication → route selection → billing execution**.

---

#### System Purpose

The Neutrafix application provides:

* Route marketplace access
* Prefix-based routing configuration
* Seller-specific rate card assignment
* API and portal-based access control

---

#### User Onboarding Flow

**1. Sign-Up Process**

Users register through the **Neutrafix** application interface.

**Steps**

a. User clicks **Sign Up**.

b. One-click registration flow begins.

c. Company verification documents must be submitted.

d. After completing sign-up, a **credentials dialog** is displayed containing:

* Username
* Login Password
* API Password

⚠️ **Important:**
Users must securely store these credentials, as they may not be shown again.

!!! Note "Note 1 — Account Creation & Verification"
    * The account is **created immediately after sign-up**, and credentials are generated and shared with the user.
    * Submitted company documents are sent to the **Neutrafix team for verification and review**.
    * Users **cannot perform buying activities** until the document review process is successfully completed by Neutrafix.

!!! Note "Note 2 — Existing Neutrafix Users"
    * Existing Neutrafix users can reuse their **API Username** and **API Password**.
    * These credentials are available inside the **Profile section** of the platform.
    * Standard login credentials should **not** be used for API authentication.

---

#### Steps to Use the App

1. Navigate to **Setup :material-menu-right: App Store :material-menu-right: NeuTrafix** and click `Install`.<img src= "/apps/img/nt1.png" style="border: 2px solid #4472C4; border-radius: 8px;">
2. A window will appear, select the version of the app and hit `Install` again. <br><img src= "/apps/img/nt2.png" width= "400" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
3. Click on `Config` (**settings button**) to assign the `API User` click `Confirm`. <br><img src= "/apps/img/nt3.png" width= "400" style="border: 2px solid #4472C4; border-radius: 8px;"> <br> <img src= "/apps/img/nt4.png" width= "400" style="border: 2px solid #4472C4; border-radius: 8px;"> </br>
4. Click on the `NeuTrafix` app on the sidebar. Complete the `Signup` process if you are a new customer. <img src= "/apps/img/nt5.png" width= "600" style="border: 2px solid #4472C4; border-radius: 8px;">
5. If you are already a customer, click on `Login`. A window will prompt you to enter the `API Login` and `API Key`. Click on `Login`. **You can get the `API Login` and `API Key` from the NeuTrafix `Dashboard`**.<img src= "/apps/img/nt6.png" style="border: 2px solid #4472C4; border-radius: 8px;"><br> ⚠️ **Note:** Use your API Username and API Password from the Profile section for authentication; standard login credentials are not supported.</br>

6. A window will appear with the following fields: <br><img src= "/apps/img/nt7.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

      1. **Market View** allows users to `See Purchased Routes`. Opens list of routes already purchased by the user.

      2. **Filter** Section:

          | Field| Description| Usage|
          | -----|------------|------|
          | **Prefix** |Destination dialing prefix| Used to search routes for a specific number range (e.g., 91, 44, 1)|
          | **Country**| Destination country| Filters routes available for a country|
          | **Route Type**|Route classification | Filters route quality/type (e.g., CLI, Non-CLI, Premium, etc.)|
          | **Seller**| Route provider/company| Shows routes offered by a specific seller|
          | **Seller Route**| Seller-specific route category | Filters routes within seller inventory|
          | **Route (Voice / SMS)** | Traffic type| Select whether searching Voice routes or SMS routes|
          | **Minimum Price**|Lower price limit| Filters routes above specified price|
          | **Maximum Price**| Upper price limit| Filters routes below specified price|
          | **Order By**| Sorting criteria| Sort results (price, prefix, seller, etc.)|

      3. **Search Result Section**: Displays routes matching the filter criteria.

      4. **Result Table** Columns:

          | Column| Description| Technical Meaning |
          | ------|-------------|------------------ |
          | **Prefix**| Destination prefix | Dialing code covered by the route|
          | **Price (USD)**| Route rate| Cost per minute/message offered by seller|
          | **Seller**| When users click on a seller, they can view the seller’s profile details.|
          | **Type**| Route type| Traffic category (Voice/SMS or quality classification)  |
          | **Destination**| Destination name| Country or operator served|
          | **Route Information** | Route details| Technical information about route quality/configuration |
          | **Purchase Route**| Action column| Button to buy/select the route|
          |**View More**|Additional information|Available to display additional information|

      5. **Purchase Route**: When you wish to purchase a route, double-click on the `Purchase` in the `Purchase Route` column. A window will open where you need to select the `Account` and `Carrier`. By default the carrier is `Nuetrafix` but you can also choose the carrier from the drop-down. Click on `Confirm and Purchase Route`. <br><img src= "/apps/img/nt8.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
      6. **Rate Card Assignment**: Whenever a new seller is created, a rate card is automatically added.

!!! Info
     A `NeuTrafix` carrier is automatically created each time a user logs into the application. Within this carrier, multiple seller-specific rate cards are associated. Whenever a user purchases a route, all corresponding prefixes linked to that purchase are automatically added under the respective seller’s rate card, after which they function as a standard rate card within the system.

### ASR per CLI

#### Overview

The **ASR per CLI** application provides a report that displays the **Answer-Seizure Ratio (ASR)** for each CLI (Caller Line Identification), helping users analyze call performance at a granular level.

Instead of manually compiling call metrics, users can view ASR data directly within the application, enabling faster insights, better monitoring, and more informed decision-making.

#### Steps to Use the App

1. Navigate to **Setup :material-menu-right: App Store :material-menu-right: ASR per CLI** and click `Install`.<img src= "/apps/img/apc1.png" style="border: 2px solid #4472C4; border-radius: 8px;">

2. A window will appear, select the version of the app and hit `Install` again. <img src= "/apps/img/apc2.png" style="border: 2px solid #4472C4; border-radius: 8px;">

3. The installed versions are visible.
   <img src= "/apps/img/apc3.png" style="border: 2px solid #4472C4; border-radius: 8px;">

4. The app is installed app can be seen in **Management :material-menu-right: Customer**. <br><img src= "/apps/img/apc4.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

5. Click on the `ASR per CLI` button on the top.
The **UTC Date Range** allows users to filter data based on Coordinated Universal Time (UTC), ensuring consistent time-based analysis across different time zones.

### ConnexCS Control Panel Defaults

#### Overview

The **ConnexCS Control Panel Defaults** application includes predefined configurations for commonly used modules such as **Bulk Run Tests**, **Carrier Win Rate**, **Custom Reports**, **DTMF**, **Latency**, **Route Stats**, **Stats**, **USA Calls**, and **USA Rate Center**.

These defaults help standardize reporting and monitoring setups across the platform while allowing users to customize them as needed.

#### Steps to Use the App

1. Navigate to **Setup :material-menu-right: App Store :material-menu-right: ConnexCS Control Panel Defaults** and click `Install`.<img src= "/apps/img/default1.png" style="border: 2px solid #4472C4; border-radius: 8px;">

2. A window will appear, select the version of the app and hit `Install` again. <img src= "/apps/img/default2.png" style="border: 2px solid #4472C4; border-radius: 8px;">

3. Fill in the `App Name`, `Version` and hit `Install` again. <img src= "/apps/img/default3.png" style="border: 2px solid #4472C4; border-radius: 8px;">

4. The installed versions are visible.
   <img src= "/apps/img/default4.png" style="border: 2px solid #4472C4; border-radius: 8px;">

5. Navigate to **Management :material-menu-right: Customer :material-menu-right: Customer[Name]**. These duplicate features are automatically added when the application is installed and are customizable. <br><img src= "/apps/img/default5.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

### Contact Center

[Click here](/customer-portal/cp-contact-center/) for a comprehensive introduction and step-by-step setup guide for the Contact Center.

### Sequential CLI

#### Overview

The **Sequential CLI application** enables users to automatically assign CLIs (Caller Line Identification) in a sequential order from a selected database.

Instead of manually selecting CLIs for each call, the system retrieves them sequentially based on predefined routing logic, ensuring organized distribution and efficient utilization of available numbers.

#### Steps to Use the App

1. Navigate to **Setup :material-menu-right: App Store :material-menu-right: Sequential CLI** and click `Install`.<img src= "/apps/img/scli1.png" style="border: 2px solid #4472C4; border-radius: 8px;">

2. Fill in the `App Name`, `Version` and hit `Install` again. <img src= "/apps/img/scli2.png" style="border: 2px solid #4472C4; border-radius: 8px;">

3. The installed versions are visible and click on `Config` (settings button). <img src= "/apps/img/scli3.png" style="border: 2px solid #4472C4; border-radius: 8px;">

4. Select the `CLI database` and click on `Confirm`. <img src= "/apps/img/scl4.png" style="border: 2px solid #4472C4; border-radius: 8px;">

5. Navigate to **Management :material-menu-right: Customer :material-menu-right: Customer[Name] :material-menu-right: Routing :material-menu-right: ScriptForge**. Select the `Sequential CLI` and click `Save`. <br><img src= "/apps/img/scli5.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

### Webphone

[Click here](/webphoneapp/) for a comprehensive introduction and step-by-step setup guide for the Webphone.

### Cx MCP

#### Overview

The **Cx MCP** (ConnexCS MCP App) provides an extensible Model Context Protocol (MCP) server for the ConnexCS Application Platform, enabling seamless integration between AI agents, tools, and external services.

Instead of building integrations manually, users can leverage MCP to connect applications, execute actions, and access data through standardized interfaces, enabling scalable automation and AI-driven workflows.

#### Steps to Use the App

1. Navigate to **Setup :material-menu-right: App Store :material-menu-right: Cx MCP** and click `Install`.<img src= "/apps/img/cxmcp1.png" style="border: 2px solid #4472C4; border-radius: 8px;">

2. Fill in the `App Name`, `Version` and hit `Install` again. <img src= "/apps/img/cxmcp2.png" style="border: 2px solid #4472C4; border-radius: 8px;">

3. The installed versions are visible and click on `Config` (settings button). <img src= "/apps/img/scli3.png" style="border: 2px solid #4472C4; border-radius: 8px;">

4. **Point the MCP Server to Your App**: Navigate to **Setup :material-menu-right: Options :material-menu-right: General :material-menu-right: Custom MCP Endpoint**. Selct the app from the drop-down menu. <img src= "/misc/img/mcp_blog_custom.png" style="border: 2px solid #4472C4; border-radius: 8px;">

### Paynamics

#### Overview

The **Paynamics** application in ConnexCS enables users to process payments through the Paynamics payment gateway, providing a secure and streamlined way to handle transactions within the platform.

It supports payments exclusively in Philippine Peso (PHP), ensuring compatibility with Paynamics’ supported currency, and is designed to facilitate billing, top-ups, and payment workflows efficiently.

#### Steps to Use the App

1. Navigate to **Setup :material-menu-right: App Store :material-menu-right: Paynamics** and click `Install`. <img src= "/apps/img/pay1.png" style="border: 2px solid #4472C4; border-radius: 8px;">

2. Fill in the `App Name`, `Version` and hit `Install` again. <img src= "/apps/img/pay2.png" style="border: 2px solid #4472C4; border-radius: 8px;">

3. The installed versions are visible and click on `Config Paynamics` (settings button). <img src= "/apps/img/pay3.png" style="border: 2px solid #4472C4; border-radius: 8px;">

4. Follow the configuration stpes as shown in the following image. <img src= "/apps/img/pay4.png" style="border: 2px solid #4472C4; border-radius: 8px;">
