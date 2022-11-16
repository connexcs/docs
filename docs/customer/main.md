# Main
**Management :material-menu-right: Customer :material-menu-right: [Customer Name]**

The first tab in a Customer account is **Main**. It displays a summary of the Status, Balance, Debit Limit, and current Channels in use. You can manage contacts, block internal numbers, and view call summaries.

![alt text][cust-main]

Each specific customer's portal can be accessed by clicking on the dropdown against the customer's name.

## Audit Log
![alt text][audit-log]

Select **View Audit Log** to see when the customer was created and view any modifications that are made to the account. 

* **User**: User that made the change.
* **IP**: IP the change came from.
* **Date Time**: When the change was made.
* **Action**: Uses HTTP verbs (Put, Post, Get, Delete) to describe the action taken.
* **Table**: Part of the table that was updated. 
* **Message**: What was done (Update, New, etc.)
* **Data**: Click `View Difference` to see the fields changed, plus previous and current values. (Data displayed in JSON format.)

## Contacts
The **Contacts** section shows an overview of contacts associated with the Customer. Each Customer may have an unlimited number of Contacts.  

!!! note "Global Contacts"
    Contacts can also be modified in **Global :material-menu-right: Contacts**, which displays all Customer Contacts.

### Add Contact
Click **:material-plus:** to the right of **Contacts**.

+ **Name**: Contact's real name
+ **Email**: This is the contact's login and a means to contact them. 
+ **Phone** or **Mobile**: To reach the contact. 
+ **Contact Type**: This field is only used for informational and organizational purposes, there is no additional function for it. 
+ **Auto Generate Password**: Select this to have a password generated online and sent via email. Deselect the box to enter a password manually.
+ **Public Notes**: Display on the Customer Portal. 
+ **Private Notes**: Display in the Control Panel.
+ **Mobile Verified** and **Email Verified**: Manually set the status for each. Check in the Customer Details to confirm if the Mobile and Email are verified. Alternately, the customer can do this in the Customer Portal.

    ![alt text][main-tab]

Click **`Save`** to add the Contact.

!!! note "Save Options"
    + **Save and Continue** = Exit the Customer screen
    + **Save and Stay** = Save the customer, but stay in the screen (helpful when adding multiple Customers at a time)
    + **Delay and Save** = Select a time to elapse before saving the Customer, delaying the setup or change. 

!!! warning 
    DO NOT save passwords in either of the notes field in the Contact Details.

### Reset Contact Password

To reset a Contact password:

1. Click the down arrow to the right of the Contact

    ![alt text][reset-password]

2. Select `Change Password`.
3. Select `Auto Generate & Email Password` to email the random password to the contact email, or deselect it and enter the password manually.
3. **`Save`**.

### Access Customer Portal
It's necessary to view the Customer's Portal for issues or questions they may have. 

To access the Customer Portal:

1. Click the down arrow to the right of the Contact

    ![alt text][reset-password]

2. Select `Portal Login`.
   
   This will load the Customer's Portal. 

## Internal Number Block
Assign an **Internal Number Block** to define the range of numbers a Customer can use for setting up SIP Extensions (see [**SIP Authentication**](https://docs.connexcs.com/customer/auth/#sip-user-authentication) for configuration details). 

1. Click **:material-plus:** next to **Internal Number Block**.
2. The next available **Number Block** is assigned.
3. Numbers from the assigned range is then available in **Customer :material-menu-right: [Auth](/customer/auth/) for IP or SIP users**, and in **Class5 :material-menu-right: [Conference](/class5/creating-conference/)**.

!!! info "Why Define Internal Number Blocks?"
    Within each Account are multiple Customers, each will likely have more than one Contact. SIP Extensions are unique for the Account, not for individual Customers. Without defined Internal Number Blocks, there is the risk of a Contact attempting to use an extension that's already in use by another Customer or Contact. With Internal Number Blocks defined, each Customer will have a predetermined list of Usernames to select for SIP Authentication. 

!!! note "Number Range parameters"
    The Number Range Start and Block Size must be defined under [**Settings :material-menu-right: Options**](https://docs.connexcs.com/setup/settings/options/) before an Internal Number Block can be assigned. 
    
## Summary
Displays the Summaries of calls in Live (last 24 hours), Daily, and Monthly formats in 24-hour UTC. This data is updated hourly. 

You can perform the following functions with this data:

+ **Sum and Average**: Select multiple cells in a column to get sum and average values (not a true average, but an average of averages).
+ **Export Data**: Select data from multiple columns and rows, then right-click to `Copy`, `Copy with Headers`, or `Export`.
+ **Generate Invoice**: Select one or more checkboxes under Action, and then select **`Generate Invoice`** in the upper right corner. This will create the invoice based on the Summary time frame (Daily, Weekly, Monthly) which can then be queried by a billing system. 
+ **Auto Generate Invoice**: Select this to generate an invoice based on the setting found in the Customer configuration (**Edit :material-menu-right: Config :material-menu-right: Invoice Schedule**) for any that are missing.  

!!! tip "Data used for billing"
    The data found in the Customer Summary section is considered valid for billing purposes. The same data may be found in other parts of the system but you shouldn't use it for billing.

[cust-main]: /customer/img/cust-main.png "Customer Main"
[audit-log]: /customer/img/audit-log.png "Audit Log"
[reset-password]: /customer/img/reset-password.png "Reset Password"
[main-tab]: /customer/img/41.png "Contact Details"
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTcxNjc4MDg2MSwtMTI5ODU0NDkzNSwtMT
Q5NDg3NzczM119
-->