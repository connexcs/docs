# Portal
Setup :material-menu-right: Integrations :material-menu-right: Portal

The **Portal** screen lets you add a domains and sub domain to the control panel, which the customer can access through the **Customer Portal**. You can provide multiple domains for your customers through different brands, and each domain can have different permissions, currencies, default, etc.

## Set up CNAME record

1. Sign in to your domain's account at your domain host.
2. Locate the page for updating your domain's DNS records. The page might be called something like DNS Management, Name Server Management, or Advanced Settings.
3. Locate the `CNAME` records for your domain.
4. Add a new domain record (such as `portal.yourdomain.com`, where `yourdomain.com` is the domain that you own).
5. Point it towards `portal.connexcs.com.`
6. If asked, we recommend setting `TTL` at 300 (seconds), which is 5 minutes.
7. Once the domain has been configired with your provider you can add it on ConnexCS.

!!! note
	Your Customer Portal must be exposed via a `CNAME` which you setup. This wont work with `A` records, or pointing directly.
	
## Add Domain in ConnexCS

1. Click the **`+`** button under **Portal**.
2. Enter the details in their respective fields of the ensuing window.
3. Click the **`Save`** button. A certificate will be issued for the domain soon afterwards

![alt text][add-new-domain]

## Config Options

### Basic

* **Domain** - The FQDN which you will send your customers to.
* **Brand Name** - The brand which will be displayed on the portal to your customers.
* **Customer Signup** - Allow customers to self sign up.
* **Carrier Signup** - Allow customers to self sign up.
* **Currencies** - Choose what currencies are available for your customers to choose when they signup.

#### Template Customer
A template customer is a customer which you configure in your account to hold the default values for any self created customers.

!!! example
	You may wish to give all of your customers $5.00 credit. You can create an account from: Management :material-menu-right: Customer.
	Go to Payments and add $5.00 payment to the account.
	When a new customer created an account from the customer portal, they will see a payment created for $5.00 at the same the time account was created

##### Available Options

* Customer [Fields in the customer itself, such as debit limit]
* Routes
* Payments
* Alerts
* Packages
* Contracts

### User Access

Choose which sections/features you wish to be displayed to your customers.

!!! note "Override Options"
	You can override specific customers on this area by going to:
	Management :material-menu-right: Customer :material-menu-right: [Choose Customer] :material-menu-right: Edit :material-menu-right: Config :material-menu-right: Portal Access
	You can choose anything from the "Show" heading to force the feature to be displated, or hide to stop it from being shown.

### Breakout

Choose which columns you wish to be displayed in the breakout report.

### CDR

Choose which columns you wish to be displayed in the CDR.

### Advanced

#### Javascript

Custom Javascript may be added either in the form of raw javascript e.g:

```
	alert('Hello World');
```

Or in refernce to an external Javascript File

```
	<script src="https://www.mydomain.com/custom.js"></script>
```

### CSS
You can add custom CSS to modify the how various elements are displayed, for example

```
h1 {
  display: block;
  font-size: 2em;
}
```

### Upload Logo

First you must upload your logo in `jpg`, `png` or `gif` format to Management :material-menu-right: File :material-menu-right: public.
Your logo width should be no more than 350px wide.
A list of available files will now appear in the "Upload Logo" Box.

### Footer

You may enter a text message to be displayed at the bottom of the page, for example _Copyright My Company_



[add-new-domain]: /setup/img/78.png "Add-New-Domain"
