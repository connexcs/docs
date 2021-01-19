# Portal
**Setup :material-menu-right: Integrations :material-menu-right: Portal**

The **Portal** lets you add a domains and sub-domain to the Control Panel, which the customer can access through the **Customer Portal**. You can provide multiple domains for your customers through different brands, and each domain can have different permissions, currencies, default, etc.

## Portal Setup

Step 1: Set up CNAME record

1. Access your domain account at your domain host.
2. Locate the page for updating your domain's DNS records. The page might be called something like DNS Management, Name Server Management, or Advanced Settings.
3. Locate the `CNAME` records for your domain.
4. Add a new domain record (such as `portal.yourdomain.com`, where `yourdomain.com` is the domain that you own).
5. Point it towards `portal.connexcs.com.`
6. If asked, we recommend setting `TTL` at 300 (seconds), which is 5 minutes.
7. Once the domain has been configured with your provider you can add it on ConnexCS.

!!! note
    Your Customer Portal must be exposed via a `CNAME` which you setup. This won't work with `A` records or pointing directly.
	
Step 2: Add Domain to Portal

1. Click the **`+`** button under **Portal**.
2. Enter the details in their respective fields of the ensuing window.
3. Click the **`Save`** button. A certificate will be issued for the domain soon afterwards.

![alt text][portal]

## Configuration Options
*Click each tab to view configuration details*

=== "Basic"

    * **Domain** - The URL your customers use to access their portal. 
    * **Brand Name** - The brand which will be displayed on the portal to your customers.
    * **Customer Signup** - Allow customers to sign up independently.
    * **Carrier Signup** - Allow carriers to sign up independently.
    * **Template Customer** - Select a pre-configured template customer on your account with preset with default values which will be set when a customer creates their account independently via the portal. Available values for this template are:
        * Customer [Fields in the customer itself, such as debit limit]
        * Routes
        * Payments
        * Alerts
        * Packages
        * Contracts
    * **Currencies** - Choose what currencies are available for your customers to choose when they signup.
    
    !!! example "Template Customer example"
	You want to give all of your customers $5.00 credit. Create an account from: Management :material-menu-right: Customer. Under Payments for that account, add $5.00. When a new customer creates an account from the Customer Portal, they will see a payment created for $5.00 at the same the time account was created.

=== "User Access Area"

    Select which sections/features are displayed to your customers.

    !!! note "Override Options"
    To override these options for specific customers, go to **Management :material-menu-right: Customer :material-menu-right: [Choose Customer] :material-menu-right: Edit :material-menu-right: Config :material-menu-right: Portal Access**. Select items from the "Show" heading to force the feature to be displayed, or from the Hide options to stop it from being shown.

=== "Breakout"

    Select which columns will display in the **Report :material-menu-right: Breakout Report**.

=== "CDR"

    Select which columns will display in the **Management :material-menu-right: Customer :material-menu-right: [Choose Customer] :material-menu-right: CDR Report**.

=== "Advanced"

    * **Javascript** - Custom Javascript may be added either in the form of raw Javascript Ex:

    ```
    	alert('Hello World');
    ```

    Or in reference to an external Javascript File. Ex:

    ```
    	<script src="https://www.mydomain.com/custom.js"></script>
    ```

    * **CSS** Add custom CSS to modify the how various elements are displayed. Ex:

    ```
    h1 {
      display: block;
      font-size: 2em;
    }
    ```

    * **Upload Logo** - Upload your logo in `jpg`, `png` or `gif` format (max 350px wide) to **Management :material-menu-right: File :material-menu-right: Public**. A list of available files will now appear in the "Upload Logo" Box.
    * **Footer** - Enter text to display at the bottom of the page, for example _Copyright My Company_

[portal]: /setup/img/portal.png "Portal"
