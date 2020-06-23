# Main
The top of the **Main** tab displays a summary of the Status, Balance, Debit Limit, and current Channels in use. From here you can manage contacts, block internal numbers, and view call summaries.

## Contacts
The **Contacts** section shows an overview of contacts associated with the account.  

To add a new contact:

1. Click **Management** > **Customers**.
2. Select a customer from the list.  
3. Press the **`+`** button to the right of the word **Contacts**.
4. Enter the contact name and their login email address.
5. Check the **Auto Generate Password** box to have a password generated online and sent via email. Uncheck the box to enter a password manually.
6. You may enter any information on **public** notes. These notes will be displayed on the customer portal when logged in. Private notes will display in the control panel.
7. Click **`Save`**.

!!! warning 
    DO NOT save passwords in either of the notes field in the Contact Details.

![alt text][contacts-2]
![alt text][main-tab]
!!! note 
    Check in the Customer Details to confirm the Mobile and Email have been verified. You can modify these in the contact or the customer can do this in the Customer Portal. 

To reset a Contact password:

1. Click the small **`key`** icon to the right of the Contact
2. Select to "Auto Generate & Email Password" or enter it manually
3. Save

## Internal Number Block
Used to assign internal customer number ranges which can be used for functions such as SIP authentication

1. Click **`+`** button
2. Number block will be assigned

!!! note 
    The Number Range Parameters must be defined before an Internal Number Block can be assigned. 

## Summary
The Summaries of calls in Live, Daily, and Monthly Formats, are all displayed in 24-hour UTC. There are several functions that can be performed with this data. 

+ Select multiple cells in a column to get sum and average values (not a true average, but an average of averages)
+ Select data from multiple columns and rows, then right click to **`Copy`**, **`Copy with Headers`**, and **`Export`**
+ Check the box under the Action column then select **`Generate Invoice`** in the upper right corner. This will create the invoice which can then be queried by a billing system. 
+ Select **View Audit Log** to see when the customer was created and view any modifications that have been made to the account. (View Difference displays data in JSON format.)


[contacts-2]: /customer/img/62.png "contacts-2"
[main-tab]: /customer/img/41.png "Main Tab"
