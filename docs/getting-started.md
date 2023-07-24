# Getting Started

The initial setup in ConnexCS will configure a single carrier, a single customer, and a single rate card.

!!! info "Changing the UI language"
    To change the display language for the UI, click your name in the upper-right corner and select [**Change Language**](https://docs.connexcs.com/changing-language/).

!!! note "What's my server's IP Address?"
    IP addresses are deployed *after* you complete the Getting Started steps.

!!! help "Need Help?"
    If you need help, we offer free 1:1 training, which you can book at **<https://connexcs.youcanbook.me/>**.

___

## Prerequisites

* You have a modern web browser such as Google Chrome, Firefox, Safari, or their equivalent.
* You have a basic understanding of Telecoms--customers, providers, and rates.
* You have created an account with ConnexCS.com.

___

## Verify Contact Details

Before you configure your account, you need to verify your email and mobile number. Use the **Alerts** icon at the top left of the screen to view all outstanding items:

&emsp; ![alt text][verify-email-1]

### Email Verification

Email verification is the process by which ConnexCS determines if an email address is genuine.
It's a measure against unauthorized users accessing customer accounts. It works similarly to most email verification mechanisms.
The system sends a verification code to the user's email, which is verified when the user enters the code back into the verification.

To verify your email address:

1. Select `Verify Email`. The Personal Profile Screen pops up.
2. Click the orange `!` next to Email, this generates a code and sends it to the email address.
3. Click the link in the email or copy & paste the code into the Verification Code field in the Verify Email pop-up
4. Click `Verify`.

    ![alt text][verify-email-2]

### Mobile Verification

**Mobile Verification** is the process by which we verify mobile phone numbers to ensure that they're genuine, and is an extension of **Email Verification**.

Mobile Verification ensures all mobile devices associated with your account are genuine. Before verifying a mobile number, make sure the information is correct.

!!! note "Number Format"
    The number must be in E.164 format. E.164 numbers are formatted [+] [country code] [subscriber number including area code] and have a maximum of fifteen digits.

To verify a mobile number:

1. Select `Verify Mobile`. The Personal Profile Screen pops-up.
2. Make sure the number is correct and in E.164 format: [+] [country code] [subscriber number including area code] with maximum of fifteen digits.
3. Click the orange `!` next to Mobile, this will generate a code and send it to mobile number.
4. Enter the code into the Verification Code field in the Verify Mobile pop-up.
5. Click `Verify`.

    ![alt text][verify-mobile]

___

## Setup Personal Profile

While it's not necessary to configure your Personal Profile to complete basic setup, this is a good time to get it done. To find this, click your name in the upper right corner and select `Profile`.

=== "Basic"

    View account details such as Name, Role, Email and Mobile. 
    
    **You can only edit the Mobile field. To change email or name, contact ConnexCS Support.**
    
    **Two Factor Authentication**: This adds additional security against password guessing and theft, including brute force attacks (details [**here**](https://www.ncsc.gov.uk/guidance/multi-factor-authentication-online-services)). 
    
    To configure this on ConnexCS, click `Enable` and follow prompts for QR code. You must install a 2FA/TFA app on your phone. 
    
    **Web Auth N / FIDO2**: This lets you to enable hardware security keys/tokens, which is more secure that basic password protection (details [**here**](https://www.ncsc.gov.uk/collection/mobile-device-guidance/enterprise-authentication-policy)). 
    
    To configure this on ConnexCS, click `Enroll`. Once it's setup, there is a special button to click/tap upon login to the ConnexCS portal. 

    You can also add **Biometric Security** by using **Face Verification**.

    Other options include **PIN** and **Security**.

    The interesting thing is that you get these options on your browser using the [**Windows Hello application**](https://support.microsoft.com/en-us/windows/learn-about-windows-hello-and-set-it-up-dae28983-8242-bb2a-d3d1-87c9d265a5f0).
    
    <img src= "/getting-started/img/2fa.png" width= "350">

=== "Advanced"

    Click the blue `Edit` button to manage your email subscriptions. 

___

## Customer Setup

These instructions for basic **Customer** setup help you create a profile and setup account details like IP addresses and payments.

For more detailed instructions about setting up customers, see [**Customer Management**](https://docs.connexcs.com/customer/customer/) and the following sections.

Navigate to **Management :material-menu-right: Customer** to modify customer details, filter the customer list, and perform bulk actions.

To view outstanding actions on a customer, hover over the **Warning icon**.

In the example below, you can see that routing hasn't been set. In that case, click on the customer's name to update their routing details.

&emsp; ![alt text][warning-icon]  

### Create a new Customer

1. Click on the `+` icon.
2. Enter the Customer's Name.
3. Select the currency to use for this account. **Please note that you can't change this later**.
4. Add a tax percentage, which is calculated for each added payment.
5. Click `Save`.

      ![alt text][customer-save-new]

### Set IP Authentication

1. Select the customer to authenticate.
2. Click on the Auth menu item.
3. Under IP Authentication, click on the `+` icon.
4. Enter the Origination/Customer IP address.
5. Click **Save**.

!!! note "Additional Authentication Support"
    We support SRV (service) records & domains. A Service record identifies servers that provide special services to a domain.
    Ror example, defining the location of a SIP service.

### Set SIP User Authentication

You can authenticate a customer using IP-to-IP or User / Password.

Use Session Initiation Protocol (SIP) for call establishment and management. It enables secure authentication and centralizes VoIP communication using a unique number to link all a customer's devices to one address.

Below are the steps to add a SIP extension:

1. Select the customer to authenticate.
2. Click on the Auth menu item.
3. Under SIP User Authentication, click on the `+` icon.
4. Enter a username and password, then press the `Save` button.

### Payments

You can create multiple payment records to cover a customer's invoices and receipts.

For example, the deposit they used to join ConnexCS.

1. Select the customer.
2. Click on the Payment menu item.
3. Click on the `+` icon.
4. Enter a Description and Total amount and select `Completed` from the drop-down menu, if the payment is made.
5. Click `Save`.

___

## Carrier Setup

**Carriers** are your VoIP route providers.

Below, we include only the required fields to set up a carrier.

For detailed instructions on carrier setup, see [**Carrier**](https://docs.connexcs.com/carrier/).

1. Navigate to **Management :material-menu-right: Carrier**:
2. Click on the `+` icon.
3. Enter the Carrier Name.
4. Select the Carrier's currency type, for example: dollars, pounds, or euros.
5. Click `Save`
6. Select **Auth** from the Carrier screen.
7. Click `+` under IP Authentication.
8. Enter the termination IP address. **Note: We also support SRV records & domains.**
9. Click `Save`

    ![alt text][carrier-auth-2]

## Rate Cards

**Rate Cards** are an important ConnexCS feature because they organise the majority of information.

1. Before getting started, we recommend you review **[Building Rate Cards](https://docs.connexcs.com/rate-card-building/)**. You can also watch our **[Rate Card Setup video](https://docs.connexcs.com/video-guide/#rate-card-setup)**.
2. Setup the [**Provider Rate Cards**](https://docs.connexcs.com/provider-ratecard/) as customer cards will build off those.
3. Build the [**Customer Rate Cards**](https://docs.connexcs.com/customer-ratecard/) as needed.  

___

## Ingress Routing

To manage **Ingress Routing**,

1. Navigate to **Management :material-menu-right: Customer**:
2. Click on the customer's name.
3. Select **Routing**.
4. Click `+` under **Ingress Routing**.
5. Select the **Rate Card**.
6. Click `Save`.

For detailed routing configuration, see [**Routing**](https://docs.connexcs.com/customer/routing/).

___

## Deploy Servers

**Deploy Servers** using these instructions.

1. Navigate to **Setup :material-menu-right: Settings :material-menu-right: Servers**:
2. Select **Deploy a Server**.
3. Choose a server location.
4. Enter a server name.
5. Check the confirmation box and deploy the server.
6. The server's IP address is emailed to your registered email address. You can also find it in the server list section.

For detailed server configuration, see **[Servers](https://docs.connexcs.com/setup/settings/servers/)**.

[verify-email-1]: /getting-started/img/1.png "Verify Contact"
[verify-email-2]: /getting-started/img/verify-email.png "Verify Email"
[verify-mobile]: /getting-started/img/verify-mobile.png "Verify Mobile"
[warning-icon]: /getting-started/img/warning-icon.png "Warning Icon"
[customer-save-new]: /getting-started/img/6.png "New Customer"
[carrier-auth-2]: /getting-started/img/16.png "Carrier Setup"
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTUxMTA1Mjg3XX0=
-->