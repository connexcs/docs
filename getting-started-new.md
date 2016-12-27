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

3.Enter the Origination/customer IP address (We support SRV records & domains too).

4.Click Save.

![alt text][ip-auth-2-new]

### Customer - User / Password Authentication

You can authenticate either using IP to IP or User/Password. Below are the steps to add an SIP extension.

1. Click on Authentication
2. Click '+' under User / Password Authentication b

![alt text][user-auth-1-new]

3. Enter the username of your choice
4. Enter the password
5. Click Save

![alt text][user-auth-new]

### Customer - Payments

1. Click on Payments
2. Click '+' 

![alt text][payment-1-new]

3. Enter the description and the amount in the appropriate field 
4. Select the Status as complete & click Save

![alt text][payment-2-new]


[customer-dashboard-new]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/customer-dashboard-new.png "customer-dashboard-new"
[add-customer-new]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/add-customer-new.png "add-customer-new"
[customer-save-new]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/customer-save-new.png "customer-save-new"
[ip-auth-new]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/ip-auth-new.png "ip-auth-new"
[ip-auth-2-new]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/ip-auth-2-new.png "ip-auth-2-new"
[user-auth-1-new]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/user-auth-1-new.png "user-auth-1-new"
[user-auth-new]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/user-auth-new.png "user-auth-new"
[payment-2-new]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/payment-2-new.png "ip-auth-new"
[payment-1-new]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/payment-1-new.png "payment-1-new"

