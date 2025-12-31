# Account

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Setup / Account Configuration<br>
<strong>Audience</strong>: Administrators, Engineers, Support Team<br>
<strong>Difficulty</strong>: Beginner to Intermediate<br>
<strong>Time Required</strong>: Approximately 10–20 minutes<br>
<strong>Prerequisites</strong>: Active ConnexCS account<br>
<strong>Related Topics</strong>: Company Settings, Security Settings, Users & Roles, Notifications, Billing & Subscription<br>
<strong>Next Steps</strong>: Review and update account-level information, then verify that changes reflect across billing, user access, and system defaults.<br>

</details>

**Setup :material-menu-right: Settings :material-menu-right: Account**

The **Account** overview allows you to edit Company and General Information, set Simple Mail Transfer Protocol (SMTP) Details, view Packages and the Service Agreement.

## Edit Account Details

To add or edit Company information, click the blue pencil icon. This allows you to edit:

+ Name
+ Email
+ Company
+ Company Registration ID
+ OCN: It's the Operating Company Number
+ FRN: It's the Firm Registration Number
+ VAT Registration ID

Under General Information, you can check the following:

+ Currency
+ Account Balance
+ Billing Method (Click on the blue text to toggle between **per channel** and **per-minute** billing; it changes once every 30 days)
+ Contact Information for the account: You can edit this field.
+ Address

    <img src= "/setup/img/accountprofile1.png" style="border: 2px solid #4472C4; border-radius: 8px;">

!!! note "Additional Configuration"
    To change any other settings, please contact Technical Support.

## SMTP Details

To add or edit SMTP information, click the blue pencil icon:

+ **From Address** is the email address that will receive the details.
+ **Username** and **Password** should match your server configuration.
+ **Server** is your server domain.
+ **SMS From** is the mobile number that sends SMS messages.
+ Click **`Save`**.

**`Test Email`** or **`Test SMS`** buttons send test messages via each method. You can find the buttons on the far right of the SMTP details window.

<img src= "/setup/img/smtp1.png" width= "500" style="border: 2px solid #4472C4; border-radius: 8px;">

!!! tip "TLS SMTP"
    To use TLS SMTP, set the Server format as "mail.yourdomain.com:465."

    If not specified, the system will use the default SMTP port 25.

## Packages

You can see below the Company information, a list of the applied ConnexCS packages, along with Quantity, Name (of the package), and the Cost (in per minute changes).

Click **Enable Call Recording** to add the feature to the Account. First, you need to enable this on individual accounts under **Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: Routing :material-menu-right: Ingress routing :material-menu-right: [Media](https://docs.connexcs.com/customer/routing/#media)**.

<img src= "/setup/img/callrec.png" width= "500" style="border: 2px solid #4472C4; border-radius: 8px;">

## ConnexCS Service Agreement

To view the full ConnexCS Service Agreement, click on the below link:

[ConnexCS Service Agreement](https://cdn.cnxcdn.com/ConnexCS%20Service%20Agreement.pdf)

[service-agreement]: /setup/img/service-agreement.png "Service Agreement"
