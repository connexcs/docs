# Webphone Setup
##### Setup :material-menu-right: Integrations :material-menu-right: Webphone

More information about the WebPhone can be found [here](/webphone)

Setup of the webphone is similar to the customer portal (using the same address to point the CNAME to).

!!! note
	The webphone will be exposed via a `CNAME` which you setup. This wont work with A records, or pointing directly

# Setting up CNAME record

1. Sign in to your domain's account at your domain host.
2. Locate the page for updating your domain's DNS records. The page might be called something like DNS Management, Name Server Management, or Advanced Settings.
3. Locate the CNAME records for your domain.
4. Add a new domain record, (such as `webphone.yourdomain.com`, where `yourdomain.com` is the domain that you own.
5. Point it towards `portal.connexcs.com.`
6. If you get asked for a TTL, we recommend setting this at 300 (seconds) - 5 minutes
7. Once the domain has been configired with your provider you can add it on ConnexCS.

# Add Domain in ConnexCS

1. Click the **`+`** button under **WebPhone**.
2. Enter the details in their respective fields of the ensuing window.
3. Click the **`Save`** button. A certificate will be issued for the domain soon afterwards

## Config Options

### Basic

* **Domain** - The FQDN which you will send your users to.
* **Brand Name** - The brand which will be displayed on the webphone to your users
* **WebRTC Host** - This is the default WebRTC Endpoint that new accounts will point to
* **Register Success** - Content which will be displayed once the users completes the registration process.

#### Template Customer
A template customer is a customer which you configure in your account to hold the default values for any self created customers.

!!! example
	You may wish to give all of your customers $5.00 credit. You can create an account from: Management :material-menu-right: Customer.
	Go to Payments and add $5.00 payment to the account.
	When a new customer created an account from the customer portal, they will see a payment created for $5.00 at the same the time account was created

## Menu

The bottom menu on the webphone is controled here

* **Title** - The label used for this page
* **Icon** - The webphone uses Material Design, if you wish to change an icon, you can find a list [here](https://cdn.materialdesignicons.com/5.2.45/)
* **Position** - The menu order, Starting from 1 Leftmost. you can seelct disabled if you don't wish to show this item.

### Custom Page

A Custom page can be used to display custom static & dynamic content. This is generated from a [template](/setup/config/templates/).

## Flags

* **Hide UUID** - UUID is a unique deploy & version identifier, this is what you should ask your end user for if you need to report a problem to us. It is displayed in the side menu.
* **Menu Right** - Change the normally left menu into a right menu.
* **Display Balance** - Show the balance of the account.
* **Edit Settings** - As standard settings are non-editable, if you wish to allow a user to change settings, you can change this.
* **Register** - Allow registration of new accounts. - Alternatively only existing SIP Username / Passwords can login.
* **Username as Title** - Change the title of the page to the username logged in.
* **Accept Payment** - Accept payments on the softphone, similar to on the customer portal.
* **Auto Answer** - Automatically answer an incoming call.