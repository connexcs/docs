# Customer

In ConnexCS, Customers are managed through customer cards, under the **Management** tab, the four horizontal lines beneath the **Home** icon in the dashboard.

![alt text][customer-dashboard]

## Customers overview
From the **Customers** board, you can perform several management operations. 

### View Modification
* **Columns** pop out on the right allows you to add/remove options, change column order, in some cases you can create row groups and aggregate values for pivot functionality
* **Filters** pop out on the right allows you to filter your customers

### Top of page

#### Bulk Edit
Modify multiple Customers simultaneously
* Bulk upload to add multiple customers at a time
* Bulk edit to modify fields such as Channels, Status, Flow Speed (CPS), and so on

#### Generate Invoice
**Generate Invoice** to send to one or more customers selected from the list below. 

#### Send 
ConnexCS comes with Email and SMS included for your customers.
1. Select multiple customers using the tickbox selector on the left side of each row.
2. Click on "Send" at the top right then choose email or SMS.
3. Fill in Subject line and body details and send. 
   * Emails are sent FROM the email address populated in Setup > Settings, and TO every email address listed under Contacts for each customer. 
   * SMS are sent to the Mobile number in each Contact. 

!!! note "Custom Email Servers."
    You can change the Email Server and SMS. Settings from Setup > Settings. 

#### Active
Filter the customer of customers listed based on account status. 

### Adding Customers
The following explains how to add new customers manually:

1. Click the **`+`** button.
2. Enter the relevant details in each text box.
3. Click the **`Save`** button.

![alt text][add-Customer]

The following is a description of each entry found in the customer window:

* **Customer Name:** A name or unique identifier for each customer.
* **PayPal Email:** The email address associated with the customer's PayPal account. (This is relevant when using the IPN API. Customer can make payments directly through PayPal instead of using the Customer Portal.) 
* **Website:** The customer's website address.
* **Status:** The customer's status, i.e.:
  * Active : The customer is active and allowed to pass calls. 
  * Inactive: The account is disabled, and 
  * Pending Approval: New signups will be listed as pending approval.  The customer cannot pass calls or become active until this phase is completed. 

* **Debit Limit:**  Sets the debit limit for postpay customers.
* **Minimum Payment:** Set the minimum payment to keep accounts active. 
* **Tax:**  Tax is added as a percentage that is charged on top of costs.
* **Currency:** Select the currency from the dropdown menu. Note that you won't be able to change the account currency once the account is created.
* **Portal Access:**  Users can turn **Portal Access** to yes(on) or no(off).  Selecting 'no' will restrict user access to the Customer Portal. Since everyone uses the portal at this time, this should always be set to 'yes'. 
* **Address:** Complete the customer's physical address, not to be confused with email addresses.



### Checking Customer Status

You can also check and filter **Customers** by status:

1.	Click the button to the right of the trash bin labeled **`Active`**.
2.	Select a filter option from the drop-down menu.
3.	Results on the page will automatically arrange themselves according to the filter.

![alt text][customer-status]

### Searching Customers

Search for **Customer** information by adding a query in the **Search** text field and clicking the search icon or pressing **`Enter`**.

### Editing Customers

## Managing Customers
Open a Customer Card by clicking their name from the Customer Management screen. 

Access the Customer Card by clicking their name in the customer list, then **Edit Customer**. The screen that opens is the same as the New Customer screen, with information already populated. Edit any field then click **`Save`**. For all field details, see **[Adding Customers](../customer/#adding-customers)**. Additional details are below: 

**Basic** tab

+ Status: For more information on Penalty, see **[Alerts](../customer/alerts.md)**

**Config** tab

+ Tags: use this to add meta-data
+ TOML: This is a data storage mechanism for configuration. Similar to INI files, you can create advanced customization to set values, etc, for script forge to reference later. 

**Verification** tab

+ Select **Email Verification** and/or **Mobile Verification** to force the customer to go to the portal for verification. (This is important to select when you create a customer manually.) If the customer doesn't verify these, they won't be able to dial. 
+ Select **Approved CLI's Only** to force the customer to log into the Portal and enter their CLI number. This generates a test call with a code which the customer must enter into the portal. Once complete, their CLI will be added to the system. 

!!! attention
    Mobile messages will be sent globally, but there are some reports of issues with SMS being delivered to numbers in India. These messages are sent on the Twilio network, so whatever they deliver ConnexCS will deliver. 





[customer-dashboard]: /customer/img/33.png "Customer-Dashboard"
[add-customer]: /customer/img/35.png "Add-Customer"


[customer-status]: /customer/img/39.png "Customer-Status"
[edit-customer]: /customer/img/40.png "Edit-Customer"

[stats-tab]: /customer/img/42.png "Stats Tab"

[CLI]: <https://docs.connexcs.com/en/latest/cli>
[Ingress Routing]: <https://docs.connexcs.com/en/latest/ingress-routing>

[customer]: /customer/img/60.png "customer"
[contacts]: /customer/img/61.png "contacts"
