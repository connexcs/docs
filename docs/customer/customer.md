# Customer

ConnexCS **Customers** are organized through customer cards located under **Management :material-menu-right: Customers**. 
![alt text][customers]

## Customer View Modification

* **Columns** pop out on the right allows you to add/remove options, change column order, in some cases you can create row groups and aggregate values for pivot functionality
* **Filters** pop out on the right allows you to filter your customers

## Top of Page functions
From the **Customers** page, you can perform several management operations. 


**+**: Add new Customers (see [**Adding Customers**](https://docs.connexcs.com/customer/customer/#adding-customers) below for details.)

**Bulk Upload**: Upload multiple Customers at the same time, by importing a spreadsheet file into ConnexCS. Once the data is uploaded, you can map columns and set the fields as needed, then click **`Upload to Server`**. 

**Bulk Edit**: Click the button to modify multiple Customers simultaneously. Select the field (such as Channels, Status, Flow Speed (CPS), etc) then set the desired change.

**Refresh**: Refresh the page, helpful when making edits or looking at real-time changes.  

**Delete**: Delete multiple customers at a time. 

**?**: Link to documentation for the current page. 

**Send**: ConnexCS comes with Email and SMS included for your customers.

1. Select multiple customers using the tickbox selector on the left side of each row. (Customers are not visible to each other in the sent message.)
2. Click on "Send" at the top right then choose email or SMS.
3. Fill in Subject line and body details and send. 
   * Emails are sent FROM the email address populated in Setup > Settings, and TO every email address listed under Contacts for each customer. 
   * SMS are sent to the Mobile number in each Contact. 

!!! note "Custom Email Servers"
    Change the outbound Email Server and SMS origination number in **Setup :material-menu-right: Settings". 

**Active**: Filter customer(s) based on account status. Results on the page will automatically arrange themselves according to the filter.

![alt text][customer-status]

## Adding Customers

1. Click the **`+`** button.
2. Enter the relevant details in each text box.
3. Click the **`Save`** button.

*Click each tab for field explanations:*

=== "Basic"

    * **Customer Name:** A name or unique identifier for each customer.
    * **Status:** The customer's status, i.e.:
       * Active : The customer is active and allowed to pass calls. 
     * Inactive: The account is disabled, and 
      * Pending Approval: New signups will be listed as pending approval.  The customer cannot pass calls or become active until this phase is completed. 
    * **Debit Limit:**  Sets the debit limit for postpay customers.
    * **Minimum Payment:** Set the minimum payment to keep accounts active. 
    * **Tax:**  Tax is added as a percentage that is charged on top of costs.
    * **Currency:** Select the currency from the dropdown menu. Note that you won't be able to change the account currency once the account is created.

=== "Config"

    * **PayPal Email:** The email address associated with the customer's PayPal account. (This is relevant when using the IPN API. Customer can make payments directly through PayPal instead of using the Customer Portal.) 
    * **Website:** The customer's website address.
    * **Portal Access:**  Users can turn **Portal Access** to yes(on) or no(off).  Selecting 'no' will restrict user access to the Customer Portal. Since everyone uses the portal at this time, this should always be set to 'yes'. 
    * **Tags**: use this to add meta-data
    + **TOML**: This is a data storage mechanism for configuration. Similar to INI files, you can create advanced customization to set values, etc, for Script Forge to reference later. 

=== "Address"
    
    * **Address:** Complete the customer's physical address, not to be confused with email addresses.

=== "Verification"

    + **Approved CLI's Only**: Used to force the customer to log into the Portal and enter their CLI number. This generates a test call with a code which the customer must enter into the portal. Once complete, their CLI will be added to the system. 
    + **Email Verification** and/or **Mobile Verification**: Used to force the customer to go to the portal for verification. (This is important to select when you create a customer manually.) If the customer doesn't verify these, they won't be able to dial. 

!!! attention
    Mobile messages will be sent globally, but there are some reports of issues with SMS being delivered to numbers in India. These messages are sent on the Twilio network, so ConnexCS can only deliver what they deliver. 

___

## Managing Customers
Click an existing customer name from Customer Management screen then **Edit**. For all field details, see **[Adding Customers](../customer/#adding-customers)** above. 



[customers]: /customer/img/customers.png "Customer-Dashboard"
[add-customer]: /customer/img/35.png "Add-Customer"


[customer-status]: /customer/img/39.png "Customer-Status"
[edit-customer]: /customer/img/40.png "Edit-Customer"

[stats-tab]: /customer/img/42.png "Stats Tab"

[CLI]: <https://docs.connexcs.com/en/latest/cli>
[Ingress Routing]: <https://docs.connexcs.com/en/latest/ingress-routing>

[customer]: /customer/img/60.png "customer"
[contacts]: /customer/img/61.png "contacts"
