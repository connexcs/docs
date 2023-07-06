# Account

**Setup :material-menu-right: Settings :material-menu-right: Account**

The **Account** overview allows you to edit Company and General Information, set Simple Mail Transfer Protocol (STMP) Details, view Packages and the Service Agreement.

## Edit Account Details

To add or edit Company information, click the blue pencil icon. This allows you to edit:

+ Name
+ Email
+ Company
+ Company Registration ID
+ OCN: It is the Operating Company Number
+ FRN: It is the Firm Registration Number
+ VAT Registration ID

Under General Information, you can check the following:

+ Currency
+ Account Balance
+ Billing Method (Click on the blue text to toggle between **per channel** and **per-minute** billing; it changes once every 30 days)
+ Contact Information for the account: You can edit this field.
+ Address

    &emsp; ![alt text][accountprofile1]

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

&emsp;![alt text][smtp]

!!! tip "TLS SMTP"
    To use TLS SMTP, set the Server format as "mail.yourdomain.com:465."

    If not specified, the system will use the default SMTP port 25.

## Packages

You can see below the Company information, a list of the applied ConnexCS packages, along with Quantity, Name (of the package), and the Cost (in per minute changes).

Click **Enable Call Recording** to add the feature to the Account. First, you need to enable this on individual accounts under **Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: Routing :material-menu-right: Ingress routing :material-menu-right: [Media](https://docs.connexcs.com/customer/routing/#media)**.

&emsp;![alt text][call-recording]

## ConnexCS Service Agreement

To view the full ConnexCS Service Agreement, click on the below link:

[ConnexCS Service Agreement](https://cdn.cnxcdn.com/ConnexCS%20Service%20Agreement.pdf)

[accountprofile]: /setup/img/accountprofile1.png "Account Profile"
[smtp]: /setup/img/smtp.png "SMTP"
[call-recording]: /setup/img/call-recording.png "Call Recording"
[service-agreement]: /setup/img/service-agreement.png "Service Agreement"
