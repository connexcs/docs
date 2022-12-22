# Portal

**Setup :material-menu-right: Integrations :material-menu-right: Portal**

The **Portal** lets you add domains and sub-domains to the Control Panel, which the customer can access through the **Customer Portal**.

You can provide several domains for your customers through different brands, and each domain can have different permissions, currencies, default, etc.

## Portal Setup

**Step 1: Set up the CNAME record**

1. Access your domain account at your domain host.
2. Locate the page for updating your domain's DNS (Domain Name System) records.

    You can refer the page to as DNS Management, Name Server Management, or Advanced Settings.

3. Locate the `CNAME` records for your domain.

4. Add a new domain record (such as `portal.yourdomain.com`, where `yourdomain.com` is the domain that you own).

5. Point it toward `portal.connexcs.com.`

6. If asked, we recommend setting `TTL` at 300 (seconds), which is 5 minutes.

7. You can add the domain to ConnexCS as soon as you configure it.

!!! note "Your should expose your Customer Portal via a `CNAME` which you set up. This won't work with `A` records or pointing directly."

**Step 2: Add a Domain to Portal**

1. In **Portal**, click :material-plus:.
2. Enter the details in their respective fields of the ensuing window.
3. Click the **`Save`** button. Soon after, a certificate gets issued for the domain.

    ![alt text][portal]

## Configuration Options

**_Click each tab to view the configuration details_**

=== "Basic"

* **Domain:** The URL your customers use to access their portal.
* **Brand Name:** The name that appears on the portal for your customers.
* **Customer Sign up:** Allow customers to sign up independently.
* **Carrier Sign up:** Allow carriers to sign up independently.
* **Template Customer:** Select a pre-configured template customer on your account, preset with default values and gets set when a customer independently creates their account via the portal (See "Template Customer example" below).
Available values for this template are:
    * Customer [Fields in the customer itself, such as debit limit]
    * Routes
    * Payments
    * Alerts
    * Packages
    * Contracts
* **Currencies:** Choose the currencies available for your customers.


!!! note "Override Options"
    To override these options for specific customers, go to **Management :material-menu-right: Customer :material-menu-right: [Choose Customer] :material-menu-right: Edit :material-menu-right: Config :material-menu-right: Portal Access**.

    Select items from the "Show" heading to display the feature, or from the Hide options to prevent it from appearing.

## User Access

To configure Users to access the Customer Portal, follow the steps to [**Add Contact**](https://docs.connexcs.com/customer/main/#contacts).

Any Contact configured on the account can login to the Customer Portal.

[portal]: /setup/img/portal.png "Portal"
