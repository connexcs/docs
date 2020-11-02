# Getting Started

The initial setup in ConnexCS will configure a single carrier, a single customer and a single rate card.

!!! note "What is my server IP Address?"
    IP addresses are deployed *after* you have completed the getting started steps.
    
!!! help "Need Help?"
    If you need help we offer free 1:1 training, you can book this at <https://connexcs.youcanbook.me/>

## Prerequisites
  * You have a modern web browser such as Google Chrome, Firefox, Safari, or their equivalent.
  * You have a basic understanding of Telecoms--customers, providers, and rates.
  * You have created an account with ConnexCS.com.

## Verify Contact Details
Before you configure your account, you need to verify your email and mobile number. You can do this using the Alerts icon at the top left of the screen. 

![notification-icon][notification-icon]

This will show you all outstanding items necessary to complete initial setup. 

![alt text][verify-mobile-1]

### Email Verification
We verify email addresses to ensure that they are genuine. 

To verify your email address:

1. Select `Verify Email`.
2. An **Email Verification Sent** popup confirms the email was sent to your address.
3. Click the link in the email, or copy & paste the verification code into the Verification Code field and and click the `Verify` button.

### Mobile Verification
Mobile verification ensures all mobile devices associated with your account are genuine.  Before you verify a mobile number, make sure the information is correct. 

!!! note "Number Format"
    The number must be in E.164 format. E.164 numbers are formatted [+] [country code] [subscriber number including area code] and have a maximum of fifteen digits.

To verify a mobile number:

1. Select `Verify Mobile`.
2. A **Mobile Verification Sent** popup confirms the verification code was sent to your mobile phone.
5. Click the link in the SMS, or enter the verification code into the Verification Code field and and click the `Verify` button.

## Setup Personal Profile
While not strictly necessary to configure your Personal Profile to complete basic setup, this is a good time to get it done. This can be found by clicking your name in the upper right corner and selecting `Profile`. 

--- "Basic"

    View account details such as Name, Role, Email and Mobile. Only the Mobile field is editable. 
    
    **Two Factor Authentication** - This adds additional security against password guessing and theft, includng brute force attacks (details [here](https://www.ncsc.gov.uk/guidance/multi-factor-authentication-online-services). This is configured on ConnexCS by clicking the `Enable` button and following prompts for QR code. You must install a 2FA/TFA app on your phone. 
    
    **Web Auth N / FIDO2** -  This allows you to enable hardware security keys/tokens, which is more secure that basic password protection (details [here](https://www.ncsc.gov.uk/collection/mobile-device-guidance/enterprise-authentication-policy). This is configured on ConnexCS by clicking the `Enroll` button. Once setup, there will be a special button to click/tap upon login to the ConnexCS portal. 

--- "Advanced"
     
    Manage your email subscriptions by clicking the blue `Edit` button. 


## Customer Setup
Below are the instructions for basic customer setup, including the mandatory fields you need to complete to create a profile, and authenticate account details like IP addresses and payments.  For more detailed instructions about setting up customers, see [Customer Management](https://docs.connexcs.com/customer/customer/) and following sections.

Navigate to Management :material-menu-right: Customer:

Here you can modify customer details, filter the customer list, and perform bulk actions. To view outstanding actions on a customer, hover over the Warning icon. In the example below, you can see that routing has not been set. In that case, you would click on the customer's name to update their routing details.

![alt text][warning-icon]  

### Create a new Customer
1. Click on the `+` icon. 
2. Enter the customer's Name.
3. Select the currency to use for this account. Please note this cannot be changed later.
4. Add a tax percentage, which will be calculated for each added payment.
5. Click `Save`.

      ![alt text][customer-save-new]

### Set Authentication

1. Select the customer to authenticate.
2. Click on the Auth menu item.
3. Under IP Authentication, click on the '+' icon.
4. Enter the Origination/Customer IP address
5. Click Save.

!!! note "Additional Authentication Support"
    We support SRV (service) records & domains too. A Service record identifies servers that provide
special services to a domain, e.g. defining where a SIP service may be found.


### SIP User Authentication

You can authenticate a customer using IP-to-IP or User/Password. Session Initiation Protocol (SIP) is used for call establishment and  management. It enables secure authentication, and centralizes VoIP communication using a unique number to link all a customer's devices to one address.  Below are the steps to add a SIP extension:

1. On the Customers screen, select a customer to authenticate.
2. Click on the Auth menu item.
3. Under SIP User Authentication, click on the `+` icon.

   ![alt text][sip-user-1]

4. Enter a username and password, then click `Save`
   

 ![alt text][sip-user-2]


### Payments

You can create multiple payment records to cover a customer's invoices and receipts, e.g. the deposit they used to join ConnexCS.

1. Select a cusomter the **Customers** screen to add payment.
2. Click on the Payment menu item
3. Click on the `+` icon.

   ![alt text][payment-1]

4. Enter a Description and Total amount, and select `Completed` from the drop-down menu if the payment has been made.
5. Click `Save`.

    ![alt text][payment-2]

## Carrier Setup

Carriers are your VoIP route providers. Below, we include only the required fields to set up a carrier.  For detailed instructions on carrier setup, see [Carrier Management]
  ![alt text][carrier-1]

1. Select Management> Carrier
2. Enter the Carrier Name
3. Select the Carrier's currency type, e.g. dollars, pounds, or euros.
4. Click `Save`

 ![alt text][carrier-2]

### Authentication

1. Select **Authentication** from the dashboard's side panel
2. Click `+` under IP Authentication

  ![alt text][carrier-auth-1]

3. Enter the termination IP address. Note that we also support SRV records & domains.
4. Click `Save`

 ![alt text][carrier-auth-2]


## Rate Cards

**Rate Cards** are an important ConnexCS feature as this is how most information is organized.

Before getting started, we recommend you review [Building Cards](https://docs.connexcs.com/rate-card-building/). You can also watch our [Rate Card Setup video](https://docs.connexcs.com/video-guide/#rate-card-setup). 

To beging building rate cards, you will first setup your [Provider Rate Card(s)](https://docs.connexcs.com/provider-ratecard/) as customer cards will build off those. 

Once this is complete, build [Customer Rate Cards](https://docs.connexcs.com/customer-ratecard/) as needed. Make sur eyou review the Building Cards section for 

## Ingress Routing
To manage ingress routing setups:
1. Click on **Management** > **Customer**

  ![alt text][ingress-1]

2. Click on the customer's name, then **Routing**

 ![alt text][ingress-2]

3. Click `+` under **Ingress Routing**
4. Select the customer card from the tariff list, then `Save`

 ![alt text][ingress-3]

For detailed information about ingress routing, see [Ingress Routing]

## Deploying Servers

Deploying a server with ConnexCS is an efficient operatation.  You should be able to deploy once you've completed this checklist.

1. Select **Setup** > **Settings** > **Servers**.
2. Select **Add Server**

  ![alt text][server-1]

3. Choose a server location.
4. Enter a server name.
5. Check the confirmation box and deploy the server.
6. The server's IP address will be emailed to your registered email address. It can also be found in the server list section.

 ![alt text][server-2]

[Carrier Management]: <https://docs.connexcs.com/en/latest/carrier/>
[Customer Management]: <https://docs.connexcs.com/en/latest/customer/>
[Provider Card]: <https://docs.connexcs.com/en/latest/provider-ratecard/>
[Ingress Routing]: <https://docs.connexcs.com/en/latest/ingress-routing/>

[verify-email-1]: /getting-started/img/1.png "verify-mobile-1"
[verify-mobile-1]: /getting-started/img/3.png "verify-mobile-1"

[customer-dashboard-new]: /getting-started/img/4.png "customer-dashboard-new"
[add-customer-new]: /getting-started/img/5.png "add-customer-new"
[customer-save-new]: /getting-started/img/6.png "customer-save-new"

[ip-auth-1]: /getting-started/img/7.png "ip-auth-1"
[ip-auth-2]: /getting-started/img/8.png "ip-auth-2"

[sip-user-1]: /getting-started/img/9.png "sip-user-1"
[sip-user-2]: /getting-started/img/10.png "sip-user-2"

[payment-1]: /getting-started/img/11.png "payment-1"
[payment-2]: /getting-started/img/12.png "payment-2"

[carrier-1]: /getting-started/img/13.png "carrier-1"
[carrier-2]: /getting-started/img/14.png "carrier-2"

[carrier-auth-1]: /getting-started/img/15.png "carrier-auth-1"
[carrier-auth-2]: /getting-started/img/16.png "carrier-auth-2"


[ingress-1]: /getting-started/img/28.png "ingress-1"
[ingress-2]: /getting-started/img/29.png "ingress-2"
[ingress-3]: /getting-started/img/30.png "ingress-3"

[server-1]: /getting-started/img/31.png "server-1"
[server-2]: /getting-started/img/32.png "server-2"

[notification-icon]: /getting-started/img/notification-icon.png "notification icon"
[warning-icon]: /getting-started/img/warning-icon.png "warning-icon"


