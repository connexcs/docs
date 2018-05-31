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

This tutorial will guide you what actions you can perform by in your account.

In My Account, users can update and manage information in their account, add personal information like name, mobile number, users, groups etc.

To open My Account, just click on the Setup from the left pane and then click on My Account, shown highlighted in the image below. 

There are basically eight functions, highlighted in blue in the figure below:

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

To add/edit information, you can click on the pencil icon. In Company's Information, the following details are required:

1. Name
2. Address Line 1 and Address Line 2. 
3. City, County/ State, Country, Post Code/ ZIP code

After filling in all the details, click on Save button.

![alt text][company-info]

## General Information

In General Information, you need to set the following details:

![alt text][general-info]
 
1. The Currency. 
2. The Date Format from the dropdown options.
3. In Contact Information, put the Phone and Mobile number.
4. For security and Add-ons, you can check the box and then they'll receive emails, every time they login.

## Personal Information

You can also edit their personal information in Current User section. 

1. Click on Edit icon.
2. Enter or change the details.
3. Click on Save button.


## Two factor Authentication
Two-factor authentication (also known as 2FA) is a method of confirming a user's claimed identity by utilizing a combination of two different components.
You can use the Google Authenticator or a similar app which can generate the security code.

You can enable "Two factor Authentication". For this purpose, click on the Two factor Authentication and click on Enable the TFA, as shown in the image below:

![alt text][tfa]
 
### You can also edit SMTP Details.

![alt text][smtp]
 
1. Enter the Email Address from which the emails will be sent.
2. Enter the Username/email address & password.
3. Enter the server domain.
4. Enter the  From Mobile number & click save.

You can click the Test Email button to check if your configration is succesful. and Test Mobile button to send a test SMS, on the extreme right of the SMTP details.

## Users 

You can add other users in this section. Names with their emails shall appear in the Users section. Groups can also be made, consisting of different users. 

To add a new user, simply:

1. Click on the Users section, highlighted in red in the image below.
2. Click the '+' icon to add a new user, highlighted in orange in the image below.
3. Pop-up will appear and then you need to fill out the details in the dialog box.
4. Click on Save button.
 
![alt text][users]

The details of the dialog box, to add new users, are as follows:

![alt text][user-config]

You will provide the,

1. Name
2. Password
3. Role (either as User or Administrator)
4. Email of the user

Click on Save button, once the details have been filled out. 

To add new groups to the Users section, click on the '+' sign button and add the details. 

![alt text][group-config]
 
1. Put the name in the text field.
2. From other options (Customer, Carrier, Card, Cdr, Log, Report etc.), select the option from dropdown menu as Select, Allow or Deny and press Save button.
3. If you wish to delete a user, select the user and hit delete

## API (Application Programming Interface)

You can also set the APIs. The overall view of API section is as follows:

![alt text][api]
 
### Adding New API

Users can add the new API by:

1. Click on the Add New button, highlighted in orange.
2. Select either PayPal or Stripe.

![alt text][paypal-1]

3. Fill out the details in the dialog box and press Save button.

### For PayPal:
 
![alt text][paypal]
 
1. Select the Mode, this needs to be set to live
2. Enter the Username & Password
3. Enter the Email and signatures.
4. Select the currencies that you wish to accept the payment.

You can learn more about the PayPal APi from [here].

For Stripe:

![alt text][stripe] 
 
1. Select the Mode,  this needs to be set to live
2. Enter the Public Key and Private Key in the respective text fields, this can be obtained from your stripe account.
3. Select the currencies that you wish to accept the payment.

You can also:

1. Refresh and Delete the APIs. 
2. Edit the information regarding API. Click on the name from the list and edit the details.

## Domains

Domains lets you add a domain/sub domain on your control panel which will let your customer use the customer portal. The domain can be whitelablled.

![alt text][domain]

To add a new domain, simply:

1. Click on the '+' icon under Portal.
2. Pop-up will show up and add the details in the respective field.
3. Select the access (Carrier Portal, CDR, Rate Card, Balance etc.) that you wish to allow your customers on customer portal.
3. Click on the Save button.

![alt text][add-new-domain]

Domains can also be edited.

1. Click on the Domains from the list.
2. Edit the details.
3. Click on Save button.

# Customer Portal with CNAME record

1. Sign in to your domain's account at your domain host.
2. Locate the page for updating your domain's DNS records.
3. The page might be called something like DNS Management, Name Server Management, or Advanced Settings.
4. Locate the CNAME records for your domain & point it towards *portal.connexcs.com*

## Payments

Payments can be made at any time with ease. All they have to do is:

1. Click on the Make Payment button.

![alt text][payments]

3. Select the payment mode.
4. Select the amount.
5. Click on Submit Payment.

![alt text][payments-1]


## Packages

These packages let you access the lookup services offered by us. These can be enabled/disabled from this section.

![alt text][package-user]
 

## My Servers

If the server has been deployed on your account, you can view/manage from this menu.

[here]: <https://docs.connexcs.com/en/latest/customer-payments>
[my-account]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/64.png "My Account"
[my-account-1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/65.png "My Account 1"
[general-info]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/66.png "General-Info"
[tfa]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/67.png "TFA"
[smtp]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/68.png "SMTP"
[users]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/69.png "Users"
[user-config]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/70.png "User-Config"
[group-config]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/71.png "Group-Config"
[api]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/72.png "API"
[paypal-1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/73.png "Paypal 1"
[paypal]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/74.png "Paypal"
[stripe]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/75.png "Stripe"


[change-pwd]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/change-pwd.png "Change-PWD"
[change-pwd-2]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/change-pwd-2.png "Change-PWD-2"

[domain]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/domain.png "Domain"
[add-new-domain]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/add-new-domain.png "Add-New-Domain"
[payments]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/payments.png "Payments"
[payments-1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/payments-1.png "Payments 1"
[package-user]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/package-user.png "Package-Users"
[package]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/package.png "Package"
[package-dialog-box]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/package-dialog-box.png "Package-Dialog-Box"
[my-server]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/my-server.png "My-Server"
