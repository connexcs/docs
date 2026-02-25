# Main

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Customer Account Management<br>
<strong>Audience</strong>: Administrators, Engineers, Support Team<br>
<strong>Difficulty</strong>: Intermediate<br>
<strong>Time Required</strong>: Approximately 30–60 minutes<br>
<strong>Prerequisites</strong>: Active ConnexCS Control Panel account with permission to edit customer-account settings<br>
<strong>Related Topics</strong>: <a href="https://docs.connexcs.com/customer/customer/">Customer – Create & Configure</a>, <a href="https://docs.connexcs.com/customer/documents/">Documents (KYC & File Upload)</a><br>
<strong>Next Steps</strong>: <a href="https://docs.connexcs.com/customer/main/#contacts">Contacts — Add & Manage Customer Contacts</a>, <a href="https://docs.connexcs.com/customer-portal/cp-dashboard/#internal-number-block">Internal Number Block — Setting Extension Ranges</a><br>

</details>

**Management :material-menu-right: Customer :material-menu-right: [Customer Name]**

The first tab in a Customer account is **Main**.

As the name suggests it allows you to manage the critical customer functions.

It offers a comprehensive set of tools to manage customer accounts, including the addition of customer contacts, invoice generation, summary reporting, and internal number allocation.

!!! Question "Why and When do we need the **Main** section?"
    1. **User-Friendly & Flexible System**:
          1. Offers customizable options such as number blocks and verification.
    2. **Improved Organization & Accountability**:
          1. It helps in managing customer's contacts.
          2. Allows multiple logins with unique credentials for each contact.
          3. Provides authentication and password management options to secure customer access.

<img src= "/customer/img/cust-main1.png" style="border: 2px solid #4472C4; border-radius: 8px;">

!!! note "By clicking the dropdown next to the customer's name, you will be redirected to the selected customer's portal. For more information, see [Access Customer Portal](https://docs.connexcs.com/customer-portal/cp-dashboard/)."

## Contacts

The **Contacts** section allows you to manage individuals associated with a customer account.

Each customer can have multiple contacts, providing better visibility and accountability within an organization.

!!! note "Global Contacts"
    Contacts can also be modified in **Global :material-menu-right: Contacts**, which displays all Customer Contacts.

### Add Contact

Click **:material-plus:** to the right of **Contacts**.

* **Name**: The contact's real name.

* **Email**: This is the contact's login and a means to contact them.

* **Phone** or **Mobile**: To communicate with the contact.

* **Contact Type**: This field is only used for informational and organizational purposes; there is no additional function for it.

* **Auto Generate Password**: Select this to have a password generated online and sent via email. Deselect the box to enter a password manually.

    !!! Info "Login and Access Controls"
        1. Each contact can have their own login credentials.
        2. Actions taken by a contact are logged for accountability.
        3. Multiple logins help track system changes by different individuals.

* **Public Notes**: Display on the Customer Portal and is  visible to customers.

* **Private Notes**: Display in the Control Panel and its internal-only for administrative purposes.

* **Mobile Verified** and **Email Verified**: Manually set the status for each. Check in the Customer Details to confirm if the Mobile and Email are verified. Alternatively, the customer can do this in the Customer Portal.

* **IP Whitelist**: Applies to Contacts accessing the Customer Portal.
    * **If IP whitelisting is configured**:
      * The contact may log in only from the whitelisted IP address(es).
      * Login attempts from non-whitelisted IP addresses will be denied.
    * **If no IP restriction is configured**: The contact may log in from any IP address.
    * **Purpose**: This restriction secures customer-level access to the portal.

<img src= "/customer/img/maincontactdetailsnew.png" style="border: 2px solid #4472C4; border-radius: 8px;">

Click **`Save`** to add the Contact.

!!! note "Save Options"
    + **Save and Continue**: Exit the Customer screen
    + **Save and Stay**: Save the customer, but stay in the screen (helpful when adding multiple Customers at a time)
    + **Delay and Save**: Select a time to elapse before saving the Customer, delaying the setup or change.

!!! warning
    DO NOT save passwords in either of the Contact Details notes fields.

### Reset Contact Password

Follow these steps to reset a Contact password:

1. Click the blue `down arrow` to the right of the **Contact**.
2. Select `Change Password`.
3. Select `Auto Generate & Email Password` to email the random password to the contact's email address, or deselect it and enter the password manually. **If auto-generate is disabled, an administrator must manually set a password.**
4. **`Save`**.

### Access the Customer Portal

It's necessary to view the Customer Portal for issues or questions they may have.

To access the Customer Portal:

1. Click the blue `down arrow` to the right of the **Contact**.

2. Choose `Portal Login`.

   This will load the Customer's Portal.

## Internal Number Block

Assign an **Internal Number Block** to define the range of numbers a Customer can use for setting up SIP Extensions (see [**SIP Authentication**](https://docs.connexcs.com/customer/auth/#sip-user-authentication) for configuration details).

The Internal Number Block ensures number allocations are managed efficiently.

### Key Features/Benefits

1. **Namespace and Extension Management**:

      1. Each customer operates within a unique namespace.
      2. Duplicate extensions across multiple customers are prevented.

2. **Number Allocation**:

      1. **Without a Number Block**: Any extension can be added without restrictions.
      2. **With a Number Block**: Extensions must be chosen from a predefined range.
      3. Administrators can assign number blocks to specific users.

### Steps to implement Internal Number Block

1. Click **:material-plus:** next to **Internal Number Block**
2. The next available **Number Block** is assigned.
3. Numbers from the assigned range is then available in **Customer :material-menu-right: [Auth](/customer/auth/) for IP or SIP users**, and in **Class5 :material-menu-right: [Conference](/class5/creating-conference/)**.

!!! info "Why Define Internal Number Blocks?"
    1. Within each Account are multiple Customers, each will likely have more than one Contact.

    2. SIP Extensions are unique for the Account, not for individual Customers. 
    
    3. Without defined Internal Number Blocks, there is the risk of a Contact attempting to use an extension that's already in use by another Customer or Contact. 
    
    4. With Internal Number Blocks defined, each Customer will have a predetermined list of Usernames to select for SIP Authentication.

!!! note "Number Range parameters"
    The Number Range Start and Block Size must be defined under [**Settings :material-menu-right: Options**](https://docs.connexcs.com/setup/settings/options/) before an Internal Number Block can be assigned.

## Summary

Displays the Summaries of calls in **24 hours**, **Daily**, **Weekly**, and **Monthly** formats in 24-hour UTC. **This data is updated hourly**.

You can perform the following functions with this data:

* **Sum and Average**: Select multiple cells in a column to get sum and average values (not a true average, but an average of averages).

* **Export Data**: Select data from multiple columns and rows, then right-click to `Copy`, `Copy with Headers`, `Copy with Group Headers` or `Export`.

* **Generate Invoice**: Select one or more checkboxes under Action, and then select **`Generate Invoice`** in the upper right corner. This will create the invoice based on the Summary time frame (Daily, Weekly, Monthly) which can then be queried by a billing system.

* **Auto Generate Invoice**: Select this to generate an invoice based on the settings found in the Customer configuration (**Edit :material-menu-right: Config :material-menu-right: Invoice Schedule**) for any that are missing.  
  
* **Download CDR Report**: You now have the option to **Download** the **CDR** report in the **.csv** format. You can download the CDR report as a **Daily**, **Weekly** or **Monthly** time-frame. You just need to click on the download icon ![Alt text](image.png).

!!! tip "Data used for billing"
    The data found in the Customer Summary section is considered valid for billing purposes. The same data may be found in other parts of the system, but you shouldn't use it for billing.

[audit-log]: /customer/img/audit-log.png "Audit Log"style="border: 2px solid #4472C4; border-radius: 8px;"

[main-tab]: /customer/img/41.png "Contact Details" style="border: 2px solid #4472C4; border-radius: 8px;"
