# Table of Contents

* [Table of Contents](#table-of-contents)
* [Introduction](#introduction)
  * [Prerequisites](#prerequisites)
    * [Customer](#prerequisites-customer)
    * [Carrier](#prerequisites-carrier)
    * [Rate Card](#prerequisites-rate-card)
  * [Customer Setup](#customer-setup)
    * [Customer Authentication](#customer---authentication)
    * [Customer Payments](##customer---payments)
  * [Carrier Setup](#carrier-setup)
    * [Carrier - Authentication](#carrier---authentication)
   



# Introduction

Initial set-up will configure a single carrier, single customer and single rate card.

## Prerequisites

This guide will assume: 

1. You have a modern web browser. 
2. You have a basic understanding of Telecoms (Customers, Provider, etc). 
3. You have already created an account with ConnexCS.com.

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

Below are the instructions for basic customer setup, for detailed instruction on customer setup click (here) 

1. Click on Management > Customers.
  
    ![alt text][customer-dashboard-new]

2. Click on Add Customer.

    ![alt text][add-customer-new]

3. Enter the Customer name. 
4. Select the currency that you wish to setup the account in.
5. Click Save.

    ![alt text][customer-save-new]

### Customer - Authentication

1. Click on Authentication.
2. Click '+' under IP Authentication. 

    ![alt text][ip-auth-new]

3. Enter the Origination/customer IP address (We support SRV records & domains too).
4. Click Save.

    ![alt text][ip-auth-2-new]

### Customer - User / Password Authentication

You can authenticate either using IP to IP or User/Password. Below are the steps to add an SIP extension.

1. Click on Authentication.
2. Click '+' under User / Password Authentication.

    ![alt text][user-auth-1-new]

3. Enter the username of your choice.
4. Enter the password.
5. Click Save.

    ![alt text][user-auth-new]

### Customer - Payments

1. Click on Payments
2. Click '+' 

    ![alt text][payment-1-new]

3. Enter the description and the amount in the appropriate field 
4. Select the Status as complete & click Save

    ![alt text][payment-2-new]

## Carrier Setup

Carriers are your VoIP route providers, below are the instructions to setup carrier. for detailed instruction on carrier setup click (here)

1. Click on Management> Carrier
2. Enter the Carrier Name
3. Select the Carrier currency
4. Click Save

### Carrier - Authentication

1. Click on Authentication
2. Click '+' under IP Authentication

    ![alt text][carrier-auth]

3. Enter the termination IP address (We support SRV records & domains too)
4. Click Save

    ![alt text][carrier-auth-1]

## Provider Card

Below are the instructions to setup the provider rate card manually. Basically there are two ways to setup a provider rate card, upload and manually, we will go through the manual setup instructions here, for detailed instructions click (here)
 
1. Click on Management> Rate Card
2. Click on Add New under Provider Rate Cards
3. Name the provider card
4. Select the Carrier from the dropdown list
5. Select the desired currency for the provider card
6. Click Save
7. Click on Add Draft button
8. Click on Add New Row
9. Complete the Spreadsheet information, Example Prefix: 441 Name: UK Landline, Cost: 0.006, Billing: 1/1. You can add as many rows as you wish.
10. Click on Publish button to publish the rate card.

## Customer Card

1. Click on Management> Rate Cards
2. Click on Add New under Provider Rate Cards
3. Name the customer card
4. Select the carrier cards
5. Select the desired currency & Click Save
6. Click on Profits tab >Click on Add New Row
7. Complete the Spreadsheet, Example: Prefix: 441, Cost: 0.007, Profit Type: Absolute, Billing 1/1, Rounding: 1/1, Status: Profit, Apply To: Cost
8. Click on Build From Carrier Cards button & confirm the build.

## Ingress Routing

1. Click on Management> Customer
2. Click on the customer name> Routing
3. Click '+' under Ingress Routing
4. Select the Customer card from the tariff list & click Save

For details information about ingress routing click (here)



[customer-dashboard-new]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/customer-dashboard-new.png "customer-dashboard-new"
[add-customer-new]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/add-customer-new.png "add-customer-new"
[customer-save-new]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/customer-save-new.png "customer-save-new"
[ip-auth-new]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/ip-auth-new.png "ip-auth-new"
[ip-auth-2-new]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/ip-auth-2-new.png "ip-auth-2-new"
[user-auth-1-new]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/user-auth-1-new.png "user-auth-1-new"
[user-auth-new]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/user-auth-new.png "user-auth-new"
[payment-2-new]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/payment-2-new.png "ip-auth-new"
[payment-1-new]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/payment-1-new.png "payment-1-new"

[carrier-auth]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/carrier-auth.png "carrier-auth"
[carrier-auth-1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/carrier-auth-1.png "carrier-auth-1"

