# Customer

**Management :material-menu-right: Customer**

The **Customer**  section will help you navigate the key functionalities of our system, from adding customers to configuring settings, managing invoices, and understanding audit logs.
Follow the sections below to get started.

## Create Customer

The following sections will appear when you click on the `blue +` sign.

*Click each tab for field explanations:*

=== "Basic"

    * **Name:** A name or unique identifier for each customer.
    * **Channels:** Set the maximum number of channels (essentially a channel is a live call). 
    * **Flow Speed:** Set the CPS (Calls Per Second) for the customer.
    * **Status:** Defines the customer's account status as follows:
           * **Active:** The customer is able to send and receive calls.
           * **Inactive:** When the customer's account is unused or non-functional.
           * **Penalty:** When the customer's account is penalised due to balance or any other reason. The customer's account gets blocked and cannot use any of the services.
           * **Pending Approval:** If a customer has asked for any service and it requires some approval before using it, you can set the status as pending approval.
    * **Debit Limit:** How much negative balance is allowed,  typically only relevant for post-pay customers. See [**Credit Control**](/credit-control/) for details. 
    * **Minimum Payment:** Set the minimum payment a customer can add to recharge the account (required for account top-ups). 
    *  **Restrict Topup Currencies**: Enables you to restrict or define the specific currency types that customers can use to add funds to their wallet or account.
    * **Tax:** Tax is added as a percentage that is charged on top of costs. (UK = VAT; US = Sales Tax)
    * **Currency:** Select the currency from the drop-down menu.

=== "Config"

    + **PayPal Email:** The email address associated with the customer's PayPal account. (This is relevant when using the IPN API which lets customers make payments directly through PayPal instead of using the Customer Portal. See our API documentation for details on [**PayPal IPN**](https://docs.connexcs.com/setup/integrations/api/#paypal-ipn-integration). It enables mass payments without requiring customer login.
    + **Website:** The customer's website address.
    + **P-Asserted-ID:**
    + **Portal Access:** It allows you to **Show** and **Hide** parameters like Balance, CDR, Breakout etc on your customer portal. 
    + **Tags**: Use this to add meta-data identifiers to a customer. If a customer routing is created using a template from [**Global Routing**](https://docs.connexcs.com/global-routing/), this will be the tag configured in the template. Used to apply global routing rules to customers.
    + Vars<sup>[**TOML**](https://en.wikipedia.org/wiki/TOML)</sup>: This is a data storage mechanism for configuration, similar to INI files. It allows you to create advanced customization to set values, etc, for Script Forge to reference later. 
    + **Reseller**: Associate the customer to a preset Reseller Group (see [**Create Groups**](https://docs.connexcs.com/setup/settings/users/#create-groups) for more details.)
    + **Account Manager**: Designating the control of this account to a specific user.
    + **Invoice Schedule**: Specify frequency for invoice generation like Daily, Weekly or Monthly.
    + **Flags**: Select the **Create Invoice on Payment** flag and if payment done then invoice will be generated.
    + **Invoice Due Days**: Set the allowed number of days past the due date that the invoice can go unpaid. 
    + **Invoice Template**: Select from a list of existing Templates found in **Setup :material-menu-right: Config :material-menu-right: [Templates](/setup/config/templates/)**
    + **Ext.Accounting ID**: This is used to fill in work an external accounting field to correlate between Connexcs and the external accountancy system.
    + **RTP Firewall**: It will bypass the media Firewall.<br>To let the customer strictly use the existing RTP firewall under **Locked** and its flexibility to use RTP Firewall under **Unlocked**.
    + **Call Recording Retention Days**: How long the customer wants to keep the recorded calls.
    + **Domain**: You can select the [domain](https://docs.connexcs.com/setup/integrations/portal/#configuration-options) you wish wish to access from the drop-down menu. A customer can sign into the various domains available in the system.Each domain can have different price points, support levels, features, etc.
    + **Daily Spend Limit**: The maximum limit for a customer for making calls in their chosen currency. Once the limit is reached it won't allow any new calls to connect.
    + **Default STIR Shaken Attestation**: The attestation level you select here is the same attestation level that will be applied to the CLIs that your customer adds from customer portal.

=== "Address"

    * **Address:** Complete the customer's physical address.

=== "Verification"

    + **Approved CLI's Only**: Allows the customer to add numbers in the [**Customer Portal CLI**](/customer-portal/cp-cli/) section. This generates a test call with a code that the customer must enter in the portal. Once complete, their CLI will be added to the system. It basically, r  restricts calls to pre-approved caller IDs.
    + **Email Verification** and/or **Mobile Verification**: Used to force the customer to go to the portal for verification. (This is important to select when you create a customer manually.) If the customer doesn't verify these, they won't be able to dial. 

    !!! attention
        Mobile messages are sent globally, but there are some reports of issues with SMS being delivered to numbers in India. These messages are sent on the Twilio network, so ConnexCS can only deliver what they deliver.

=== "Notes"

    These are arbitrary notes that can be entered onto an account at your discretion. 

    !!! note "Save Options"
        + **Save and Continue**:  Saves and exits.
        + **Save and Stay**: Saves the customer data but keeps the form open for additional entries (stay on the screen). It's helpful when adding several Customers at a time.
        + **Delay and Save**: Allows scheduling changes (e.g., updating debit limits at a later date).

=== "Day/Time Restrict"

    With this feature you can refrain your customers from calling at speficied time slots.
    1. Choose the **Timezone** from the drop-down.
    2. Drag the time slider between the time-slots you wish to aloow your customers to dial.
    3. Click `Save`.

    !!! Example
        In the image below you can see the time slider starts from 12:00 AM till 8:00 AM, this means your customers are only allowed to dial between 12:00 AM and 8:00 AM. After 8:00 AM your customers won't be able to call. The rest of the slots (grey color) are restricted slots.

        <img src= "/customer/img/restrict.png" width="400">

!!! note
    The daily spend day is defined from 00:00 UTC to 00:00 UTC.

!!! note "Note that you won't be able to change the account currency once you create the account."

## Configure Customers

Once you create a customer, click on the customer name to view details and provide additional configuration. For documentation on that configuration, navigate to the sub-section on the left:

&emsp; ![alt text][customersubs]

___

## Edit Customers

Click an existing customer name from the Customer section, then click **`Edit`**. For all field details, see **[Create Customers](https://docs.connexcs.com/customer/customer/#create-customer)** above.

!!! question "How many customers can I add?"
    You can add unlimited customers, and we won't charge per customer, only on their individual usage.

## White-Labeling Solutions

At ConnexCS Pvt. Ltd., we offer comprehensive white-labeling solutions, enabling our partners to re-brand and deliver our cutting-edge services as their own.

With full customization of branding, user interfaces, and features, we ensure a seamless integration into your existing offerings.

Our flexible platform supports easy API integration and scalable infrastructure, allowing you to provide reliable, fully branded services to your customers without the need for in-house development.

[customer-status]: /customer/img/39.png "Customer Status"
[customersubs]: /customer/img/customersubs.png "Customer Sub-Sections"