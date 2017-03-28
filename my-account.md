# Table of Contents

* [Table of Contents](#table-of-contents)
* [My Account](#my-account)
  * [Configuration](#configuration)
  * [Company Information](#company-information)
  * [General Information](#general-information)
  * [Personal Information](#personal-information)
  	* [Users can also change the passwords](#users-can-also-change-the-passwords)
  	* [Users can also edit SMTP Details](#users-can-also-edit-smtp-details)
  * [API (Application Programming Interface)](#api-application-programming-interface)
  	* [Adding New API](#adding-new-api)
  	* [For PayPal](#for-paypal)
  * [Domains](#domains)
  * [Payments](#payments)
  * [Packages](#packages)
  	* [Adding New Package](#adding-new-package)
  * [My Servers](#my-servers)


# My Account

This tutorial will guide you what actions you can perform by being into your account.

In My Account, users can update and manage information of their account, add personal information like name, mobile number, users, groups etc.

To open My Account, just click on the Setup from the left pane and then click on the My Account, shown as re highlighted in the image below. 

There are basically eight functions, as blue highlighted in the figure below:

![alt text][my-account]
 
These functions include:

1. Configuration
2. Users
3. API
4. Domains
5. Payments
6. Usage
7. Packages
8. Settings

Let's discuss each one of the above in more detail.

## Configuration

To add/edit the configuration of an account, click on the Config icon, present on top bar.

This function basically involves two types of information:

1. Company's Information 
2. General Information

## Company Information

To add/edit information, users can click on the pencil icon. In Company's Information, users have to fill out the following details:
 
![alt text][company-info]

1. Name
2. Address Line 1 and Address Line 2. 
3. Country, City, Country, Post Code

After filling all the details, click on Save button.

## General Information

In General Information, users will fill out the following details:

![alt text][general-info]
 
1. Users will write the Currency. 
2. Users will select the Date Format from the dropdown options.
3. In Contact Information, users will write Phone and Mobile number.
4. For security and Add-ons, users can check the box and then they'll receive emails, every time they login.

## Personal Information

Users can also edit their personal information in Current User section. 

1. Click on Edit icon.
2. Enter or change the details.
3. Click on Save button.


## Two factor Authentication
Users can also enable "Two factor Authentication". For this purpose, click on the Two factor Authentication and click on Enable the TFA, as shown in the image below:

![alt text][tfa]
 
### Users can also edit SMTP Details.

![alt text][smtp]
 
1. Enter the Email Address from which the emails will be sent.
2. Enter the Username/email address & password.
3. Enter the server domain.
4. Enter the  From Mobile number & click save.

You can click the Test Email button to check if your configration is succesful. and Test Mobile button to send a test SMS, on the extreme right of the SMTP details.

## Users 

Users can add other users in this section. Names with their emails shall appear in the Users section. Groups can also be made, consisting of different users. 

To add a new user, simply:

1. Click on the Users section, highlighted as red in the image below.
2. Click the '+' icon to add a new user, highlighted as orange in the image below.
3. Pop-up will show up and fill out the details of the dialog box.
4. Click on Save button.
 
![alt text][users]

The details of the dialog box, to add new users, are as follows:

![alt text][user-config]

Users will provide the,

1. Name
2. Password
3. Role (either as User or Administrator)
4. Email of the user

Click on Save button, once the details have been filled out. 

To add new groups to the Users section, click on the '+' sign button and further add the details. 

![alt text][group-config]
 
1. Users will write the name in the given text field.
2. From other options (Customer, Carrier, Card, Cdr, Log, Report etc.), users select the option from dropdown menu as Select, Allow or Deny and press Save button.
3. If you wish to delete a user, select the user and hit delete

## API (Application Programming Interface)

Users can set the APIs also. The overall view of API section is as follows:

![alt text][api]
 
### Adding New API

Users can add the new API by:

1. Click on the Add New button, highlighted as orange.
2. Select either PayPal or Stripe.
3. Fill out the details of the dialog box and press Save button.

### For PayPal:
 
![alt text][paypal]
 
1. Select the Mode, this needs to be set to live
2. Enter the Username & Password
3. Enter the Email and signatures.
4. Select the currencies that you wish to accept the payment.

You can learn more about the PayPal APi from [here]: https://docs.connexcs.com/en/latest/customer-payments/

For Stripe:

![alt text][stripe] 
 
1. Select the Mode,  this needs to be set to live
2. Enter the Public Key and Private Key in the respective text fields, this can be obtained from your stripe account.
3.  Select the currencies that you wish to accept the payment.

Users can also:

1. Refresh and Delete the APIs. 
2. Edit the information regarding API. Click on the name from the list and edit the details.

## Domains

Domains lets you add a domain/sub domain on your control panel, this will let your customer to use the customer portal. the domain can be whitelablled.

![alt text][domain]

To add a new domain, simply:

1. Click on the '+' icon under Portal.
2. Pop-up will show up and add the details in the respective field.
3. Select the access (Carrier Portal, CDR, Rate Card, Balance etc.) that you wish to allow your customers on customer portal.
3. Click on the Save button.

![alt text][add-new-domain]

Users can also edit the Domains.

1. Click on the Domains from the list.
2. Edit the details.
3. Click on Save button.

# Customer Portal with CNAME record

1. Sign in to your domain's account at your domain host.
2. Locate the page for updating your domain's DNS records.
3. The page might be called something like DNS Management, Name Server Management, or Advanced Settings.
4. Locate the CNAME records for your domain & point it towards *portal.connexcs.com*

## Payments

Users can make their payments at any time with such ease. All they have to do is:

1. Click on the Make Payment button.
2. Fill out the details of pop-up.
3. Click on Submit Payment.
	
![alt text][payments]

4. Select the payment mode.
5. Select the amount.

## Packages

These packages lets you access the lookup services offered by us, these can be enabled/disabled from this section.

![alt text][package-user]
 

## My Servers

You can view your servers from the My server menu. 

![alt text][my-server]

[my-account]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/my-account.png "My Account"
[company-info]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/company-info.png "Company-Info"
[general-info]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/general-info.png "General-Info"
[change-pwd]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/change-pwd.png "Change-PWD"
[change-pwd-2]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/change-pwd-2.png "Change-PWD-2"
[tfa]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/tfa.png "TFA"
[smtp]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/smtp.png "SMTP"
[users]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/users.png "Users"
[user-config]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/user-config.png "User-Config"
[group-config]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/group-config.png "Group-Config"
[api]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/api.png "API"
[paypal]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/paypal.png "Paypal"
[stripe]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/stripe.png "Stripe"
[domain]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/domain.png "Domain"
[add-new-domain]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/add-new-domain.png "Add-New-Domain"
[payments]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/payments.png "Payments"
[package-user]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/package-user.png "Package-Users"
[package]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/package.png "Package"
[package-dialog-box]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/package-dialog-box.png "Package-Dialog-Box"
[my-server]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/my-server.png "My-Server"
