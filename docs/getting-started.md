# Table of Contents

- [Table of Contents](#table-of-contents)
- [Introduction](#introduction)
  - [Prerequisites](#prerequisites)
  - [Verifying Personal Details](#verifying-personal-details)
  - [Customer Setup](#customer-setup)
    - [Authentication](#authentication)
    - [SIP User Authentication](#sip-user-authentication)
    - [Payments](#payments)
  - [Carrier Setup](#carrier-setup)
    - [Authentication](#authentication)
  - [Provider Card](#provider-card)
  - [Customer Card](#customer-card)
  - [Ingress Routing](#ingress-routing)
  - [Deploy Server](#deploy-server)

# Introduction

The initial setup in ConnexCS will configure a single carrier, a single customer and a single rate card.

## Prerequisites

This guide assumes:

1. You have a modern web browser such as Google Chrome, Firefox, Safari, or their equivalent.
2. You have a basic understanding of Telecoms (Customers, Provider, etc).
3. You have already created an account with ConnexCS.com.

## Verifying Personal Details
Before you configure you account, you need to verify your email and mobile number. You can do this in the Personal Profile pane.  The Personal Profile pane is found by clicking the notification icon at the top left of the screen. 

![notification-icon](new-images/notification-icon.png)


**Email Verification**

We verify email addresses to ensure that they are genuine. To verify your email address, select the Notification icon at the top left of the screen, then Verify Email.

    ![alt text][verify-email-1]

1. In the Personal Profile pane, click the Verify Email icon.
![verification-icon](images/2018/08/verification-icon.png)  
2. An **Email Verification Sent** popup confirms the email was sent to your address.
3. Click the link in the email, or copy & paste the verification code into the Verification Code field and and click the `Verify` button.

   ![alt text][verify-email-2]

**Mobile Verification**

Mobile verification is to ensure all mobile devices associated with your account are genuine.  Before you verify a mobile number, make sure the information is correct. To modify or add a mobile number, select the Edit icon in the Personal Profile pane, make your changes, and click `Save`. 

>The number must be in E.164 format. E.164 numbers are formatted [+] [country code] [subscriber number including area code] and have a maximum of fifteen digits.

To verify a mobile number:

1. Select the Notification icon at the top left of the screen.
2. Select `Verify Mobile`.
3. In the Personal Profile pane, click on the Verify Mobile icon. ![verification-icon](images/2018/08/verification-icon.png)
4. A **Mobile Verification Sent** popup confirms the email was sent to your email address.
5. Click the link in the email, or copy & paste the verification code into the Verification Code field and and click the `Verify` button.

 ![alt text][verify-mobile-1]


## Customer Setup

Below are the instructions for basic customer setup.  It will include the mandatory fields you need to complete to create a profile, and authenticate account details like IP addresses and payments.  For more detailed instructions about setting up customers, see [Customer Management].

First, o to Management > Customer:

      ![alt text][customer-dashboard-new]


On this screen, you can modify customer details,filter the list of customers, and perform bulk actions. To view outstanding actions on a customer, hover over the Warning icon. In the example below, you can see that routing has not been set. Click on the customer's name to update their routing details.
>
>![warning-icon](images/2018/08/warning-icon.png)  

1. To add a new customer, click on the `+` icon. 

      ![alt text][add-customer-new]

2. Enter the customer's Name.
3. Select the currency to use for this  account. Please note this cannot be changed latger
4. Add a tax percentage, which will be calculated for each added payment.
5. Click `Save`.

      ![alt text][customer-save-new]

### Authentication

1. On the Customers screen, select a customer to authenticate.
2. Click on the Auth menu item.
3. Under IP Authentication, click on the '+' icon.

    ![alt text][ip-auth-1]

4. Enter the Origination/Customer IP address
> Note: We support SRV (service) records & domains too. A Service record identifies servers that provide
special services to a domain, e.g. defining where a SIP service may be found).
5. Click Save.

  ![alt text][ip-auth-2]


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


## Provider Card

Below are the instructions to setup the provider rate card manually. There are two ways to setup a provider rate card: via upload and manually.  We cover the manual setup instructions here.  For detailed instructions select [Provider Card].

1. Click on Management> Rate Card

   ![alt text][provider-card-1]

2. Click `+` button under **Provider Rate Cards**

  ![alt text][provider-card-2]

3. Name the provider card.
4. Select a carrier from the drop-down list.
5. Select the currency for the provider card.
6. Click `Save`.

  ![alt text][provider-card-3]

7. Go to the provider's rate card, and select the `Create Draft` button.

8. Select **Add Row**


9. Complete the spreadsheet information, which works similar to any common office programs.
10. Click `Save` to publish the rate card.


## Customer Card

1. Select Management> Rate Cards

  ![alt text][customer-card-1]

2. Click on ‘+’ button under Customer Rate Cards

 ![alt text][customer-card-2]

3. Name the customer card
4. Select the multiple carrier cards (default: LCR)
5. Select the desired currency and click `Save`

 ![alt text][customer-card-3]

6. Select the Profits tab, then **Add New Row**
7. Complete the spreadsheet

   ![alt text][customer-card-4]

8. Select `Build From Carrier Cards` and confirm the build.

 ![alt text][customer-card-5]

## Ingress Routing

1. Click on Management> Customer

  ![alt text][ingress-1]

2. Click on the customer's name, then **Routing**

 ![alt text][ingress-2]

3. Click `+` under **Ingress Routing**
4. Select the customer card from the tariff list, then `Save`

 ![alt text][ingress-3]

For detailed information about ingress routing, see [Ingress Routing]

## Deploy Server

Deploying a server with ConnexCS is an efficient operatation.  You should be able to deploy once you've completed this checklist.

1. Select **Setup> Settings> Servers**
2. Select **Add Server**

  ![alt text][server-1]

3. Choose a server location
4. Enter a server name
5. Check the confirmation box and deploy the server.
6. The server's IP address will be emailed to your registered email address. It can also be found in the server list section.

 ![alt text][server-2]

[Carrier Management]: <https://docs.connexcs.com/en/latest/carrier/>

[Customer Management]: <https://docs.connexcs.com/en/latest/customer/>

[Provider Card]: <https://docs.connexcs.com/en/latest/provider-ratecard/>

[Ingress Routing]: <https://docs.connexcs.com/en/latest/ingress-routing/>

[verify-email-1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/1.png "verify-mobile-1"
[verify-email-2]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/2.png "verify-email-2"
[verify-mobile-1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/3.png "verify-mobile-1"

[customer-dashboard-new]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/4.png "customer-dashboard-new"
[add-customer-new]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/5.png "add-customer-new"
[customer-save-new]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/6.png "customer-save-new"

[ip-auth-1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/7.png "ip-auth-1"
[ip-auth-2]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/8.png "ip-auth-2"

[sip-user-1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/9.png "sip-user-1"
[sip-user-2]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/10.png "sip-user-2"

[payment-1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/11.png "payment-1"
[payment-2]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/12.png "payment-2"

[carrier-1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/13.png "carrier-1"
[carrier-2]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/14.png "carrier-2"

[carrier-auth-1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/15.png "carrier-auth-1"
[carrier-auth-2]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/16.png "carrier-auth-2"

[provider-card-1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/17.png "provider-card-1"
[provider-card-2]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/18.png "provider-card-2"
[provider-card-3]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/19.png "provider-card-3"

[provider-card-4]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/20.png "provider-card-4"
[provider-card-5]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/21.png "provider-card-5"
[provider-card-6]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/22.png "provider-card-6"
[provider-card-7]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/18.png "provider-card-7"

[customer-card-1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/23.png "customer-card-1"
[customer-card-2]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/24.png "customer-card-2"
[customer-card-3]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/25.png "customer-card-3"
[customer-card-4]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/26.png "customer-card-4"
[customer-card-5]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/27.png "customer-card-5"
[customer-card-5]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/25.png "customer-card-5"
[customer-card-6]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/26.png "customer-card-6"


[ingress-1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/28.png "ingress-1"
[ingress-2]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/29.png "ingress-2"
[ingress-3]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/30.png "ingress-3"

[server-1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/31.png "server-1"
[server-2]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/32.png "server-2"
