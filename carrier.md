# Table of Contents

* [Table of Contents](#table-of-contents)
* [Carrier Management](#carrier-management)
    * [Add a New Carrier](#add-a-new-carrier)
    * [Deleting Carriers](#deleting-carriers)
    * [Checking the Status](#checking-the-status)
    * [Searching Carrier](#searching-carrier)
    * [Customizing the View](#customizing-the-view)
    * [Edit Carrier](#edit-carrier)
         * [Stats](#stats)
         * [Reply-Management](#reply-management)
         * [Authentication](#authentication)
         * [Latest Calls](#latest-calls)
         * [Failover](#failover)
         * [Payment](#payment)  
         * [CDR](#cdr)  
         * [DID](#did)  
         * [Alerts](#alerts)  
    * [Code Consistency](#code-consistency)


# Carrier Management

Carriers can be easily and efficiently managed with the help of **Connex.** **Connex** allows you to not only add, edit and delete carriers but also lets you view the columns you want to see. 

On the Dashboard, click on the tab. highlighted in the page centre, to go to the **Carrier** or you can expand the **_Management_** tab from the left pane and select **"Carrier".**

![alt text][carrier-list]

## Adding Carrier

![alt text][add-carriers]

Users can add new **Carriers** by following the simple procedure.

1. Click the **Add Carrier** button.
2. Enter the details of the **carrier.**
3. Click the **Save** button when all the details are entered, properly.

Following figure shows the dialog box for adding the **Carrier.**

![alt text][carrier-details]
        
The brief description of fields present in the above form, is given below:
        
**Carrier Name:** Users will add the "Customer Name" in the name text field.

**Channels:** Users will add the "Channels" in the digits, only.

**CPS:** Users will add the "CPS" in the text field but in digits, only.

**PayPal Email:** Users will add the "PayPal Email" of the **Carrier.**

**Website:** "Website" shall also be added by the users.

**Portal URL:** Portal URL shall be added by the users in the given text field.

**Portal Username:** "Portal Username" shall also be written in the text field by the user.

**Portal Password:** "Portal Password" will also be a requirement. 

**Portal Access:** Users will select the "Portal Access" option from dropdown menu either as Yes or No.

**Status:** Users will set/select the "Status" of the **Carrier.** Status dropdown menu options are:

1. Active
2. Inactive
3. Pending Approval

**Currency:** Users will set the "Currency" from the dropdown menu options.

**Address:** Users will write the "Address" of the **Carrier.** Users will add the address including country and postcode/ZIP code.

**Pre Ring Timeout and Post Ring Timeout:** Users will set the "Pre Ring Timeout" and "Post Ring Timeout" in the given text fields.

## Deleting Carriers

Users can delete the existing **Carriers** from the list. 

1. Select the **Carrier** from the list by check marking the entire row.

2. Click on the **Delete** button, i.e. trash icon.

## Checking The Status

![alt text][carriers-sorting]

Users can also check/filter the status of the **Carriers.** 

1. Click on the button named **Active.**
2. Select an option from the dropdown menu.
3. Results will show up according to the selected option.

## Searching Carrier

Users can search anything about a **Carrier** by writing the query in the **Search** text field.

## Customizing The View

![alt text][carriers]

You can customize the view of your **Carriers** page and select only the columns which you want to view.
On the extreme right, click on the menu button, and check the columns you want to view.

## Edit Carrier

In order to edit a **Carrier**, select a **Carrier** from the list. A new page will open. Follow the procedure given below:

1. Press the **"Edit Carrier"** button.
2. Edit the details and press **"Save"** button.

Following figure demonstrates the **Edit Carrier** button:

![alt text][carrier-dashboard]

### Stats

You can view your stats by clicking on the tab “Stats”.  In the image given below, there are no calls placed that’s why the graph is showing a straight line.
 
![alt text][carrier-stats] 

### Reply Management

There is a special module in Connex for replying efficiently and that is Reply Management.
There are codes on the basis of which action and responses are set. You can customize your responses too.
 
Choose the “Replace” radio button and then “New Code” and “New Reason” field would appear. Here, choose a code and fill the reason of your choice.

![alt text][carrier-reply] 
 
### Authentication

Next to the Reply Management tab there is “Authentication” where you can specify your authenticated IP.

![alt text][carrier-authentication] 
 
You can also add new IP for authentication, by clicking on the “+” sign on extreme right. 

![alt text][carrier-ip-1] 
 
Fill Basic and Advanced tab to complete the addition of authenticated IP.

### Latest Calls

“Latest Calls” is the tab next to Authentication. Where you can find all the calls you have made, lately.
 
You can simulate a call too by clicking the green button, named “Simulate”.

![alt text][carrier-calls] 

### Failover
 
 “Failover” are the calls which were not successfully made. A list of failover calls is shown in this tab.
 
![alt text][carrier-failover] 
 
### Payment

“Payment” tab would let you see all the payments made so far. You can add a new payment by clicking on the “+” sign.
 
Fill in the more payment information and click “Save”.

![alt text][carrier-payment] 
 

#### CDR

“CDR” tab let you check all your CDR’s. You can also recalculate a CDR for a specific month by clicking on “Recalc CDR”.

![alt text][carrier-cdr] 
 
### DID

“DID” tab let you check the DID.  You can add a new DID clicking on the “+” on the extreme left.
 
After adding the details, click “Save”.

![alt text][carrier-did]
 
### Alerts

“Alerts” tab is right next to the “DID”. It allows you to generate alerts to someone when some specific events are triggered. You can view all your alerts by clicking on Alerts tab.

![alt text][carrier-alert-1]

You can also add a customize alert by clicking on the “+” sign.

![alt text][carrier-alert-2]

After adding the relevant info for a alert, click “Save” and a new alert will be functional.

##Code Consistency

This measures the changes of response codes on the SAME number that have been returned from the carrier. It is useful for identifying if the carrier is using routes of different quality or generally poor quality overall. Good carriers will have a 100% code consistency.

The metric only takes into account 200 and 404's.

[carrier-dashboard]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/carrier-dashboard.png "Carrier-Dashboard"
[carrier-list]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/carrier-list.png "Carrier-List"
[add-carriers]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/add-carriers.png "Add-Carrier"
[carrier-details]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/carrier-details.png "Carrier-Details"
[carriers-sorting]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/carriers-sorting.png "Carriers-Sorting"
[carriers]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/carriers.png "Carriers"


[carrier-stats]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/carrier-stats.png "Carrier Stats"
[carrier-reply]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/carrier-reply.png "Carrier Reply"
[carrier-reply-2]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/carrier-reply-2.png "Carrier Reply 2"
[carrier-authentication]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/carrier-authentication.png "Carrier Authentication"
[carrier-ip-1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/carrier-ip-1.jpg "Carrier IP 1"
[carrier-calls]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/carrier-calls.png "Carrier Calls"
[carrier-failover]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/carrier-failover.png "Carrier Failover"
[carrier-payment]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/carrier-payment.png "Carrier Payment"
[carrier-cdr]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/carrier-cdr.png "Carrier CDR"
[carrier-did]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/carrier-did.png "Carrier DID"
[carrier-alert-1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/carrier-alert-1.png "Carrier Alert-1"
[carrier-alert-2]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/carrier-alert-2.png "Carrier Alert-2"
