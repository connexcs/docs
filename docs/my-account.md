# Table of Contents

- [Table of Contents](#table-of-contents)
- [My Account](#my-account)
  - [Company Information](#company-information)
  - [General Information](#general-information)
  - [Personal Information](#personal-information)
  - [Two-factor Authentication](#two-factor-authentication)
  - [Users](#users)
  - [API (Application Programming Interface)](#api-application-programming-interface)
    - [Add New API](#add-new-api)
  - [Domains](#domains)
- [Customer Portal with CNAME record](#customer-portal-with-cname-record)
  - [Payments](#payments)
  - [Packages](#packages)
  - [Servers](#servers)


# My Account

This section is an overview of actions that can be performed against each provider account. More specific details about each action exists on the topics' respective pages. 

To open **My Account**, click the **`Setup`** button from the left panel, then **Settings** > **Account**:

![alt text][my-account]
 
An account profile contains two types of information: company and general. 

## Company Information

To add or edit company information, click the pencil icon. In company Information section, the following details are required:

1. Company Name
2. Address Line 1 and Address Line 2. 
3. City, County/ State, Country, Post Code/ ZIP code
4. lick the **`Save`** button.

![alt text][company-info]

## General Information

In General Information, you need to set the following details:

![alt text][general-info]
 
1. Type of currency. 
2. A date Format from the dropdown options.
3. A phone and mobile number in contact information.
4. Check the **Security and Add-ons** receive emails on login.

## Personal Information

Edit individual user information in the **Current User** section. 

1. Click the **`Edit`** icon.
2. Edit details in each text box, same as creating new account.
3. Click the **`Save`** button.


## Two-factor Authentication
**Two-factor authentication**, or 2FA, is a way to confirm user identity using a combination of two different measures.
Use the Google Authenticator or a similar app to generate the security code.

To enable two-factor authentication, click **`Enable`**, as shown in the image below:

![alt text][tfa]
 
You can also edit SMTP Details from the My Accounts screen.

![alt text][smtp]
 
1. Enter an email address that will recieve the details.
2. Enter a username, email address, and password.
3. Enter a server domain.
4. Enter a mobile number
5. Click **`Save`**.

Click the **`Test Email`** button to test if the configration is succesful, or the **`Test Mobile`** button to send a test SMS.  The buttons are found to the far right of the SMTP details window.

## Users 

This section is for adding new user accounts.  It is found under **Setup**>**Settings**>**Users**.

To add a new user:

1. Click the **Users** section highlighted in red (see image below).
2. Click the **`+`** button to add a new user, highlighted in orange.
3. A window will appear where you can fill out details.
4. Click the **`Save`** button.
 
![alt text][users]

The details of the dialog box are as follows:

![alt text][user-config]

* **Name** - the user's name.
* **Password** - the password they will use to log in.
* **Role** - Either user or administrator.
* **Email** - The user's email address.

Once the details are entered, remember to click the **`Save`** button.

**User Groups**

To add new groups to the **Users** section, click the **`+`** button. A window will appear as shown, where you can enter the following details.  

![alt text][group-config]
 
* **Group Name** - A name for the user group.
* There are several drop-down lists below the group name, each of which allows providers to choose Select , Allow, or Deny the respective service for the group. See their individual pages for details.
  * [Cusomer]
  * [Log]
  * [Carrier]
  * [Report]
  * [Card] 
  * [Data]
  * [CDR]
  * [PCAP]
* When you're finished editing or entering a group, click the **`Save`** button.

**Delete Users**

To delete a user, select the user's name from the user list, and click the **`Delete`** button.

## API (Application Programming Interface)

Configuring APIs allows for more intricate control over your system, either by customization or the use of third-party applications.  Go to **Setup**>**Integrations**>**API**. 

![alt text][api]

### Add New API

To add a new API:

1. Click the **`Add`** button.

![alt text][paypal-1]

2. Select **PayPal** or **Stripe** from the drop-list.

![alt text][paypal]

3. Fill in the dialog box and press the **`Save `** button.

**For PayPal**:

![alt text][stripe]
 
1. Select the Mode, between **Test** for testing connections, and **Live** for an active account.
2. Enter a username and password
3. Enter an email and signatures.
4. Select user currency type.

Lean more about the PayPal APi from [here].

**For Stripe**:

![alt text][stripe1]

1. Select the Mode, between **Test** for testing connections, and **Live** for an active account.
2. Enter a **Public Key** and **Private Key** in the respective text fields. These can be obtained from your Stripe account.
3. Select the user's currency type.
4. Click the **`Save`** button.

**Edit APIs**

Edit API information by clicking its name from the list. A window will open similar to the 'Add New' screen where you can edit details.

**Refresh APIs**

Click the **`Refresh`** button to update the current list of APIs on the screen to the most recent. This is to ensure you are working with the most recent information.

**Delete APIs**

To delete an API, select it from the list and click the **`Delete`** button. 

## Domains

The **Domains** screen lets you add a domains and sub domain to the control panel, which the customer can access through the customer portal. Domains can also be whitelabeled here.

1. Go to **Setup** > **Integrations** > **Domains**.

![alt text][domain]

1. Click the **`+`** button under **Portal**.
2. Enter the details in their respective fields of the ensuing window.
3. Select the level of access you wish to allow your customers in their customer portal.
4. Click the **`Save`** button.

![alt text][add-new-domain]

Domains can also be edited here:

1. Click the Domain name from the list.
2. Edit its details.
3. Click the **`Save`** button.

# Customer Portal with CNAME record

1. Sign in to your domain's account at your domain host.
2. Locate the page for updating your domain's DNS records. The page might be called something like DNS Management, Name Server Management, or Advanced Settings.
3. Locate the CNAME records for your domain, and point it towards *portal.connexcs.com*

## Payments

Payments can be made at any time:

1. Go to **Setup** > **Settings** > **Payments**.

![alt text][payments]

1. Click the **`Make Payment`** button.

![alt text][payments-1]

3. Select a payment mode.
4. Select a payment amount.
5. Click the **`Pay`** button.

## Packages

**Packages** lets you access our lookup services, which can be enabled or disabled from this section.

1. Go to **Settings** > **Connex Packages**. A list of availanble packages will appear. The green buttons on the left allow you to turn the packages on or off.

![alt text][package]
![alt text][package-dialog-box]

## Servers

If a server has been deployed on your account, you can view and manage from this menu.

[here]: <https://docs.connexcs.com/en/latest/customer-payments>
[my-account]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/64.png "My Account"
[my-account-1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/65.png "My Account 1"
[company-info]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/company-info.png "Company Info"
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
[domain]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/77.png "Domain"
[stripe1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/76.png "Domain"
[add-new-domain]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/78.png "Add-New-Domain"
[payments]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/79.png "Payments"
[payments-1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/80.png "Payments 1"
[package-user]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/81.png "Package-Users"
[package]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/82.png "Package"
[package-dialog-box]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/83.png "Package-Dialog-Box"
[my-server]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/83.png "My-Server"

[change-pwd]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/change-pwd.png "Change-PWD"
[change-pwd-2]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/change-pwd-2.png "Change-PWD-2"




