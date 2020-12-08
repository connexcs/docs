# Main
**Management :material-menu-right: Customer :material-menu-right: [Customer Name]**

The first tab in a Customer account is **Main** which displays a summary of the Status, Balance, Debit Limit, and current Channels in use. From here you can manage contacts, block internal numbers, and view call summaries.

## Audit Log
![alt text][audit-log]

Select **View Audit Log** to see when the customer was created and view any modifications that have been made to the account. 

* **User**: User that made the change.
* **IP**: IP the change came from.
* **Date Time**: When the change was made.
* **Action**: Uses HTTP verbs (Put, Post, Get, Delete) to describe the action taken.
* **Table**: Part of the table that was updated. 
* **Message**: What was done (Update, New, etc)
* **Data**: Click `View Difference` to see the fields changed, plus previous and current values. (Data displayed in JSON format.)

## Contacts
The **Contacts** section shows an overview of contacts associated with the Customer. Each Customer may have an unlimited number of Contacts.  

To add a new Contact:

1. Press the **`+`** button to the right of the word **Contacts**.
4. Enter the contact **Name** and login **Email** address.
3. Select **Contact Type**.
4. Enter the **Phone** or **Mobile**. 
5. Check the **Auto Generate Password** box to have a password generated online and sent via email. Uncheck the box to enter a password manually.
6. You may enter any information on **Public Notes** which are displayed on the Customer Portal when logged in. 
7. **Private Notes** will display in the control panel.
7. Manually set whether this Contact's **Mobile Verified** and **Email Verified** status. 
7. Click **`Save`**.

!!! note "Save Options"
    Select **Save and Continue** to exit the Contact screen. **Save and Stay** is helpful when adding multiple Contacts at a time. **Delay and Save** allows you to select a time from to elapse before saving the Contact and making them available for use.

!!! warning 
    DO NOT save passwords in either of the notes field in the Contact Details.

![alt text][main-tab]

!!! note 
    Check in the Customer Details to confirm the Mobile and Email have been verified. You can modify these in the Contact or the customer can do this in the Customer Portal. 

To reset a Contact password:

1. Click the small **`key`** icon to the right of the Contact
2. Select to "Auto Generate & Email Password" or enter it manually
3. Save

!!! note "Global Contacts"
    Contacts can also be modified under **Global :material-menu-right: Contacts**, which displays all Customer Contacts.

## Internal Number Block
Assign an **Internal Number Block** to define the range of numbers a Customer can use for setting up SIP Extensions (see [SIP Authentication](https://docs.connexcs.com/customer/auth/#sip-user-authentication) for configuration details). 

1. Click **`+`** button next to **Internal Number Block**.
2. The Number Block will be assigned.

!!! info "Why Define Internal Number Blocks?"
    Within each Account are multiple Customers, each will likely have more than one Contact. SIP Extensions are unique for the Account, not for individual Customers. Without defined Internal Number Blocks, there is the risk of a Contact attempting to use an extension that is already in use by another Customer or Contact. With Internal Number Blocks defined, each Customer will have a predetermined list of Usernames to select for SIP Authentication. 

!!! note "Number Range parameters"
    The Number Range Start and Block Size must be defined under [Settings :material-menu-right: Options](https://docs.connexcs.com/setup/settings/options/) before an Internal Number Block can be assigned. 
    
## Summary
The Summaries of calls in Live (last 24 hours), Daily, and Monthly formats, are all displayed in 24-hour UTC. This data is updated hourly. 

There are several functions that can be performed with this data:

+ **Sum and Average**: Select multiple cells in a column to get sum and average values (not a true average, but an average of averages)
+ **Export Data**: Select data from multiple columns and rows, then right click to **`Copy`**, **`Copy with Headers`**, and **`Export`**
+ **Generate Invoice**: Check one or more boxes under Action then select **`Generate Invoice`** in the upper right corner. This will create the invoice based on the Summary time frame (Daily, Weekly, Monthly) which can then be queried by a billing system. 
+ **Auto Generate Invoice**: When selected, this will generate an invoice based on the setting found in the Customer confiugration (Edit>Config?Invoice Schedule) for any that are missing.  

!!! tip "Data used for billing"
    The data found in the Customer Summary section is considered valid for billing purposes. The same data may be found in other parts of the system but should not be used for billing.

[audit-log]: /customer/img/audit-log.png "Audit Log"
[main-tab]: /customer/img/41.png "Main Tab"
