# Portal

---

**Document Metadata** <br>**Category**: Setup & Configuration → Integrations → Portal</br>
**Audience**: Administrators, Engineers, Support Team <br>**Difficulty**: Intermediate</br>
**Time Required**: 10–20 minutes <br>**Prerequisites**: ConnexCS account with Integrations and Branding permissions, custom domain / CNAME record access <br>**Related Topics**: [API Integrations](https://docs.connexcs.com/setup/integrations/api/), [Multi-Brand Support](https://docs.connexcs.com/setup/integrations/portal/#multi-brand-support) <br>**Next Steps**: [API Integrations](https://docs.connexcs.com/setup/integrations/api/), [JWT Keys / Tokens](https://docs.connexcs.com/setup/integrations/jwt/)

---

**Setup :material-menu-right: Integrations :material-menu-right: Portal**

The **Portal** lets you add domains and sub-domains to the Control Panel, which the customer can access through the **Customer Portal**.

You can provide several domains for your customers through different brands, and each domain can have different permissions, currencies, default, etc.

!!! Note "Deployment"
    Customers are instructed to point a CNAME record to portal.connexcs.com; secure certificates are deployed automatically upon configuration.

## Portal Setup

**Step 1: Set up the CNAME record**

1. Access your domain account at your domain host.

2. Locate the page for updating your domain's DNS (Domain Name System) records.

    You can refer the page to as DNS Management, Name Server Management, or Advanced Settings.

3. Locate the `CNAME` records for your domain.

4. Add a new domain record (such as `portal.yourdomain.com`, where `yourdomain.com` is the domain that you own).

5. Point it toward `portal.connexcs.com.`

6. If asked, we recommend setting `TTL` at 300 (seconds), which is 5 minutes.

7. You can add the domain to ConnexCS as soon as you configure it.

!!! note "Your should expose your Customer Portal via a `CNAME` which you set up. This won't work with `A` records or pointing directly."

**Step 2: Add a Domain to Portal**

1. In **Portal**, click :material-plus:.
2. Enter the details in their respective fields of the ensuing window.
3. Click the **`Save`** button. Soon after, a certificate gets issued for the domain.

!!! note
    You should expose your Customer Portal via a `CNAME` that you setup. This won't work with `A` records or by pointing directly.

    <img src= "/setup/img/portal12.png"style="border: 2px solid #4472C4; border-radius: 8px;"

## Configuration Options

**_Click each tab to view the configuration details_**

=== "Basic"

    * **Domain:** The URL your customers use to access their portal.
    * **Brand Name:** The name that appears on the portal for your customers.
    * **Customer Sign up:** Allow customers to sign up independently.
    * **Carrier Sign up:** Allow carriers to sign up independently.
    * **Currencies:** Choose the currencies available for your customers when they sign up.
    * **Template Customer:** Select a pre-configured template customer on your account, preset with default values and gets set when a customer independently creates their account via the portal (See "Template Customer example" below). Automatically replicate settings for new customers.
    Available values for this template are:
        + Customer [Fields in the customer itself, such as debit limit]
        + Routes
        + Payments (Any associated payment configurations are copied)
        + Alerts
        + Packages
        + Contracts (Required contracts (e.g., if two contracts are needed at sign-up) are duplicated automatically)

=== "User Access Area"

    Select the sections/features displayed to your customers (see "Override Options" below). Individual settings can be customized per customer.

    **Common**

    |Feature|Description|
    |-------|-----------|
    |**Balance**|Customer's current account balance|
    |**Call Detail Record (CDR)**| Displays detailed information of each call like call details, destination etc. [Click here to know more.](https://docs.connexcs.com/customer/cdr/)|
    |**Breakout**|Offers billing-accurate CDR insights, including customer profits, costs, billed amounts, ASR, and ACD. [Click here to know more.](https://docs.connexcs.com/customer-portal/cp-breakout/)
    |**Latest Calls**|Provides records of recent incoming and outgoing calls, their SIP traces, and run simulated calls. [Click here to know more.](https://docs.connexcs.com/customer/latest-calls/)|
    |**CLI**|Displays the number of an incoming call. [Click here to know more.](https://docs.connexcs.com/customer-portal/cp-cli/#steps-to-add-approved-clis)|
    |**Customer ACD**|View Average Call Duration as a total or per-carrier basis. [Click here to know more.](https://docs.connexcs.com/customer/stats/)|
    |**Customer ASR**|View Average Call Duration as a total or per-carrier basis. [Click here to know more.](https://docs.connexcs.com/customer/stats/)|
    |**Customer CPS**|View calls per second over time. [Click here to know more](https://docs.connexcs.com/customer/stats/)|
    |**Customer Channels**|View ccustomer channels. [Click here to know more.](https://docs.connexcs.com/dashboard/#channels)|
    |**Customer DTMF**|View DTMF percentages of each carrier. [Click here to know more.](https://docs.connexcs.com/customer/stats/#customer-carrier)|
    |**Carrier CPS**|View carrier's calls per second. [Click here to know more.](https://docs.connexcs.com/customer/stats/#customer-carrier)|
    |**Carrier Channels**|View carrier's channels. [Click here to know more.](https://docs.connexcs.com/customer/stats/#main)|
    |**Carrier DTMF**|View DTMF percentages of each carrier. [Click here to know more.](https://docs.connexcs.com/customer/stats/#customer-carrier)|
    |**Carrier Portal**|Allow portal access to your carrier, just like customer portal.|
    |**Rate Cards**|View Customer Rate Cards and Provider Rate Cards of your customer. [Click here to know more](https://docs.connexcs.com/rate-card-building/).|
    |**DID**|View the list of DIDs. [Click here to know more.](https://docs.connexcs.com/customer/did/)|
    |**DID (Editable)**|Allows customer to edit the DIDs.|
    |**DID Destination Lock**|Locks DID Destination so that it cannot be changed (in url destination).|
    |**DID Tags**|Add tags for informational purposes. [Click here to know more.](https://docs.connexcs.com/customer/did/#advanced)|
    |**IP Auth (Editable)**|Allows your customer to edit the IP Auth settings. [Click here to know more.](https://docs.connexcs.com/customer/auth/#ip-authentication)|
    |**SIP Auth (Editable)**|Allows your customer to edit the SIP Auth settings. [Click here to know more.](https://docs.connexcs.com/customer/auth/#sip-user-authentication)|
    |**User Registration**|View active registrations. [Click here to know more.](https://docs.connexcs.com/customer-portal/cp-user-reg/)|
    |**Queue**|The **Queue**, like **Groups**, routes calls to the longest-idle agent in a team-based call queue. [Click here to know more.](https://docs.connexcs.com/customer-portal/cp-queue/)|
    |**Audio**|Allow your customer to upload and store audios for IVR or Queue PBX functions. [Click here to know more.](https://docs.connexcs.com/customer-portal/cp-audio/)|
    |**Interconnect Info**|Information on termination and origination address. [Click here to know more.](https://docs.connexcs.com/customer-portal/interconnect/)|
    |**Packages**|Packages to offer predefined products and services. [Click here to know more.](https://docs.connexcs.com/customer/package/)|
    |**Show RTP Servers**|It will display the RTP Servers used by your customers.|
    |**Routes (Editable)**|View, configure and edit Routing options for customers. [Click here to know more.](https://docs.connexcs.com/customer/routing/#configure-routing)|
    |**Summary**|Display the summaries of live calls (last 24 hours), Daily, Monthly. This data updates every hour. [Click here to know more.](https://docs.connexcs.com/customer-portal/cp-dashboard/#summary)|
    |**Data Management (Data Suite)**|Allows customers to create custom persistent data storage. [Click here to know more.](https://docs.connexcs.com/customer-portal/cp-data-management/)|
    |**Allow Route Public Note**|Notes entered here get displayed on the Customer Portal when logged in. [Click here to know more.](https://docs.connexcs.com/customer/routing/#notes)|
    |**Recording**|The Recording area allows you to listen to recorded calls, provided this feature is available on your account. [Click here to know more.](https://docs.connexcs.com/customer-portal/cp-recording/)|
    |**Download Recording**|Allows your customer to download call recordings. [Click here to know more.](https://docs.connexcs.com/customer-portal/cp-recording/)|
    |**Invoice**|Allows customers to generation invoices. [Click here to know more.](https://docs.connexcs.com/customer/invoices/)|
    |**Status**|Use **Status** to create customer-facing status pages, automating outage and downtime notifications. [Click here to know more.](https://docs.connexcs.com/system-status/)|
    |**Public Status**|Make the status visibility as public.|
    |**Alert**|Allows your customers to apply Alerts for Balance, ASR, ACD, CDR etc. [Click here to know more.](https://docs.connexcs.com/customer/alerts/)|
    |**Editable Balance Alert**|Allows your customers to edit Blalance alert threshold. [Click here to know more.](https://docs.connexcs.com/customer/alerts/)|
    |**Payments**| Displays various payment modes. [Click here to know more.](https://docs.connexcs.com/customer/payment/)|
    |**Pending Bank Payments**| Displays any pending bank payments.|
    |**Block PayPal**|Allows your customers to block PayPal payment mode.|
    |**Block Stripe**|Allows your customers to block Stripe payment mode.|
    |**Voucher**|Enable pre-generated codes with monetary value to be used for account top-ups. [Click here to know more](https://docs.connexcs.com/voucher/)|
    |**Dialog**|Display the status of current active calls on the account. [Click here to know more.](https://docs.connexcs.com/customer/dialogs/)|

    
    **Class 5 Access**

    |Feature|Description|
    |-------|-----------|
    |**AI Agent**|It replaces AI Call Center Agents.|
    |**App**| It helps to create small drag and drop applications. Use [ConneXML](https://docs.connexcs.com/class5/connexml/) here. [Click here to know more.](https://docs.connexcs.com/class5/apps/).|
    |**Conference**|Allows multiple participants to interact simultaenuously. [Click here to know more.](https://docs.connexcs.com/class5/creating-conference/)|
    |**IVR**|An anutomated telephone system that allows customers to interact with the system via keypad inputs or voice. [Click here to know more.](https://docs.connexcs.com/class5/creating-ivr/)|
    |**Group**|route calls to a designated team based on your configured strategy. [Click here to know more.](https://docs.connexcs.com/class5/creating-group/)|
    

=== "Breakout"

    Customized report view that shows different levels of detail depending on whether the user is a carrier or a customer.Select the columns to display in the **Report :material-menu-right: Breakout Report**.

=== "CDR"

    Select which CDR fields are available for viewing by different user types. Select the columns to display in the **Management :material-menu-right: Customer :material-menu-right: [Choose Customer] :material-menu-right: CDR Report**.

=== "Advanced"

    * **Javascript:** You can ad Custom Javascript in the form of raw Javascript.

    For example,

    ```
    alert('Hello World');
    ```

    Or in reference to an external Javascript File. Ex:

    ```
    <script src="https://www.mydomain.com/custom.js"></script>

    ```

    * **CSS** Add custom CSS to modify how various elements are displayed. For example,

    ```
    h1 {
      display: block;
      font-size: 2em;
    }
    ```

    * **Upload Logo** - Upload your logo in `jpg`, `png` or `gif` format (max 350px wide) to **Management :material-menu-right: File :material-menu-right: Public**. 
    
        A list of available files will now appear in the "Upload Logo" Box.
    * **Footer** - Enter text to display at the bottom of the page, for example _Copyright My Company_

=== "SMTP"

    You can now associate brands with Portal, and send an e-mail with your brand or domain name with this feature.

    A customer can sign into the various domains available in the system.

    Each domain can have different price points, support levels, features, etc.

!!! example "Template Customer example"
    If you want to give all your customers $5.00 credit, create an account from: Management :material-menu-right: Customer. Add $5.00 in Payments for that account.

    When a new customer creates an account from the Customer Portal, they will see a payment created for $5.00 at the same time of account creation.

!!! note "Override Options"
    To override these options for specific customers, go to **Management :material-menu-right: Customer :material-menu-right: [Choose Customer] :material-menu-right: Edit :material-menu-right: Config :material-menu-right: Portal Access**.

    Select items from the "Show" heading to display the feature, or from the Hide options to prevent it from appearing.

**Steps to create a new Domain**:

1. Go to **Setup :material-menu-right: Integrations :material-menu-right: Portal**. <img src= "/setup/img/smtp2.jpg" style="border: 2px solid #4472C4; border-radius: 8px;">

2. Click on `+` button and click on the **SMTP** tab.

3. A window with several fields will appear. You need to fill out the fields:

    3.1 **Server**: ConnexCS defines the SMTP server for your brand or domain.

    3.2 **Username**: Define the name you want for the domain.

    3.3 **Password**: Define the password for the e-mail address.

    3.4 **From Email Address**: This defines the name of your domain e-mail.

**Steps to add Domain to the Customer**:

1. Go to **Management :material-menu-right: Customer :material-menu-right: Customer Name**.
2. Select the customer you want to associate with the brand.
3. Click on **`Edit`.**
4. Click on **`Config`** and in the **Domain** field you can select the domain from the dropdown menu.
5. Click on `Save` and the customer will be associated with that particular Domain/ Brand.
<img src= "/setup/img/smtp1.jpg" style="border: 2px solid #4472C4; border-radius: 8px;">

!!! Note
    1. Multiple customers can be associated with one domain.
    2. Only one customer can log in to one Domain.

## User Access

To configure Users to access the Customer Portal, follow the steps to [**Add Contact**](https://docs.connexcs.com/customer/main/#contacts).

Any Contact configured on the account can login to the Customer Portal.

## Multi Brand Support

By leveraging a single ConnexCS account, customers can seamlessly run multiple brands, each with its own distinct identity and customer base.

It's achieved by deploying independent customer portals tailored to the specific needs and preferences of each target market.

### Key Benefits

+ **Enhanced Market Penetration**:

Effectively reach and engage customers across various market segments, such as residential, business, wholesale, and international, with tailored offerings and pricing strategies for each.

Enter new markets and capture new customer bases without the overhead of managing separate infrastructure or systems.

+ **Improved Customer Segmentation**:

Maintain clear separation between customer groups, ensuring data privacy and preventing cross-contamination of services.

Deliver personalized experiences to each customer segment with customized features, pricing plans, and support channels within their dedicated portal.

+ **Increased Profitability**:

Develop and implement distinct pricing and service packages for each brand, maximizing revenue generation from each customer segment.

Reduce operational costs and improve efficiency by managing multiple brands from a single, centralized platform.

+ **Enhanced Brand Differentiation**:

Preserve the unique identity and brand image of each brand within the ConnexCS ecosystem.

Foster stronger customer loyalty by providing a seamless and personalized experience for each brand's customer base.

### ConnexCS Multi-Brand Management empowers businesses to:

+ **Operate on all levels of the market**:
  From SMBs to enterprises and wholesale, effectively serve diverse customer needs with tailored offerings.

+ **Maximize revenue potential**:
  Capture a larger market share and increase profitability by effectively targeting and serving distinct customer segments.

+ **Gain a competitive edge**:
  Differentiate themselves in the market by offering a unique and personalized experience to each customer segment.
