# Table of Contents

* [Table of Contents](#table-of-contents)
* [Introduction](#introduction)
  * [Prerequisites](#prerequisites)
    * [Email Verification](#email-verification)
    * [Mobile Verification](#mobile-verification)
    * [Customer](#prerequisites-customer)
    * [Carrier](#prerequisites-carrier)
    * [Rate Card](#prerequisites-rate-card)
  * [Customer Setup](#customer-setup)
    * [Authentication](#authentication)
    * [Payments](#payments)
  * [Carrier Setup](#carrier-setup)
    * [Authentication](#authentication_1)
    * [Deploy Server](#deploy-server)
   



# Introduction

Initial set-up will configure a single carrier, single customer and single rate card.

## Prerequisites

This guide will assume: 

1. You have a modern web browser. 
2. You have a basic understanding of Telecoms (Customers, Provider, etc). 
3. You have already created an account with ConnexCS.com.

## Email Verification 

We verify email addresses to ensure that they are genuine.

Steps to Verify Email Address: 

1. Click on the Top Left notification button
2. Click on Verify on Verify Email

    ![alt text][verify-email-1]

3. Click on Send Verification Code
4. Either click the link or copy & paste the verification code sent to your email by clicking the button.

   ![alt text][verify-email-2]


## Mobile Verification 

We verify mobile phone numbers to ensure that they are genuine.

Steps to Verify Mobile Number

1. Click on the Top Left notification button.
2. Click on Verify on Verify Mobile.
3. Click on Edit.
4. Enter the Phone Number in E.164 format and click Save.

 ![alt text][verify-mobile-1]

5. Click on Send Verification Code.
6. Enter the Verification code sent to your mobile and click Verify.

 
## Prerequisites Customer

1. Customer Name
2. Switch IP Address or Username / Password
3. Credit / Debit Limit

## Prerequisites Carrier

1. Carrier Name
2. Switch IP Address

## Prerequisites Rate Card

1. Full Rate Card or List of Codes
2. Profit Margin / Plan for customer prices.

## Customer Setup

Below are the instructions for basic customer setup, for detailed instruction on customer setup click on [Customer Management] 

1. Click on Management > Customers.
  
      ![alt text][customer-dashboard-new]

2. Click on Add Customer.

      ![alt text][add-customer-new]

3. Enter the Customer name. 
4. Select the currency that you wish to setup the account in.
5. Click Save.

      ![alt text][customer-save-new]

### Authentication

1. Click on Authentication.
2. Click '+' under IP Authentication. 

    ![alt text][ip-auth-1]
  
3. Enter the Origination/customer IP address (We support SRV records & domains too).
4. Click Save.

  ![alt text][ip-auth-2]

    
### SIP User Authentication

You can authenticate either using IP to IP or User/Password. Below are the steps to add a SIP extension.

1. Click on Authentication.
2. Click '+' SIP User Authentication.

   ![alt text][sip-user-1]

3. Enter the username of your choice.
4. Enter the password.
5. Click Save.

 ![alt text][sip-user-2]
    

### Payments

1. Click on Payments
2. Click '+' 

   ![alt text][payment-1]

3. Enter the description and the amount in the appropriate field 
4. Select the Status as complete & click Save

    ![alt text][payment-2]

## Carrier Setup

Carriers are your VoIP route providers, below are the basic instructions to setup a carrier. For detailed instructions on carrier setup click on [Carrier Management]

1. Click on Management> Carrier
 
  

2. Enter the Carrier Name
3. Select the Carrier currency
4. Click Save

 

### Authentication

1. Click on Authentication
2. Click '+' under IP Authentication

    

3. Enter the termination IP address (We support SRV records & domains too)
4. Click Save

    

## Provider Card

Below are the instructions to setup the provider rate card manually. There are two ways to setup a provider rate card, upload and manually, we will go through the manual setup instructions here, for detailed instructions click on [Provider Card]
 
1. Click on Management> Rate Card
  
  
  
2. Click on Add Provider Card under Provider Rate Cards

  

3. Name the provider card.
4. Go to properties.
5. Select the Carrier from the dropdown list.
6. Select the desired currency for the provider card.
7. Click Save.

 

8. Go to provider rate card.
9. Click on Create Draft button.

  

8. Click on Add Row

 

9. Complete the Spreadsheet information, Example: Prefix: 441, Name: UK Landline, Cost: 0.006, Billing: 1/1. You can add as many rows as you wish.
10. Click on Save button to publish the rate card.

 


## Customer Card

1. Click on Management> Rate Cards

   

2. Click on Add Customer Card under Customer Rate Cards

 

3. Name the customer card
4. Select the multiple carrier cards(By default it will be LCR)
5. Select the desired currency & Click Save

 
 
6. Click on Profits tab >Click on Add New Row
7. Complete the Spreadsheet, Example: Prefix: 441, Cost: 0.007, Profit Type: Absolute, Billing 1/1, Rounding: 1/1, Status: Profit, Apply To: Cost

  

8. Click on Build From Carrier Cards button & confirm the build.



## Ingress Routing

1. Click on Management> Customer

 

2. Click on the customer name> Routing

 

3. Click '+' under Ingress Routing
4. Select the Customer card from the tariff list & click Save

 

For detailed information about ingress routing click on [Ingress Routing]

## Deploy Server

Deploying a server with Connexcs is very quick, once the checklist is complete you will be able to deploy the server.

1. Click on Setup> Settings> Servers
2. Click on Add Server
  
3. Choose Server Location
4. Enter the Server Name
5. Check the confirmation box and deploy the server.
6. The server IP address will be emailed to your registered email address, the ip address can also be found from the server list section.


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


[carrier-auth]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/13.png "carrier-auth"
[carrier-auth-1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/14.png "carrier-auth-1"



[provider-card-dashbboard]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/12png "provider-card-dashbboard"
[provider-ratecard]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/13.png "provider-ratecard"
[provider-card-1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/14.png "provider-card-1"

[provider-card-5]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/15.png "provider-card-5"
[provider-card-4]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/16.png "provider-card-5"
[provider-card-6]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/17.png "provider-card-5"
[provider-card-7]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/18.png "provider-card-5"

[map8]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/19.png "map8"
[map10]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/20.png "map10"

[customer-card]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/21.png "customer-card"
[customer-card-1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/22.png "customer-card-1"
[customer-card-2]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/23.png "customer-card-2"
[customer-card-3]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/24.png "customer-card-3"
[customer-card-4]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/25.png "customer-card-4"
[customer-card-5]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/26.png "customer-card-5"
[customer-card-6]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/27.png "customer-card-6"



[add-new-provider]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/28.png "add-new-provider"
[add-draft]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/29.png "add-draft"
[add-new-row]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/30.png "add-new-row"
[upload]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/31.png "upload"

[add-new-customer]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/32.png "add-new-customer"
[add-new-customer-1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/33.png "add-new-customer-1"
[add-customer-2]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/34.png "add-customer-2"
[add-customer-3]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/35.png "add-customer-3"

[ingress-1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/36.png "ingress-1"
[ingress-2]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/37.png "ingress-2"
[ingress-3]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/38.png "ingress-3"
