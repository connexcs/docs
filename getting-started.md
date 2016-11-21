# Table of Contents

* [Table of Contents](#table-of-contents)
* [Introduction](#introduction)
  * [Prerequisites](#prerequisites)
    * [Customer](#prerequisites-customer)
    * [Carrier](#prerequisites-carrier)
    * [Rate Card](#prerequisites-rate-card)
  * [Video Guide](#video-guide)
    * [Adding Customer & Carrier](#adding-a-customer-carrier)
    * [Uploading Provider Card](#uploading-a-provider-rate-card-and-create-customer-rate-card)
    * [Manually Create Provider Card](#manually-create-provider-rate-card-and-create-customer-rate-card)
    * [Ingress Routing](#ingress-routing)
  * [Customer Management](#customer)
    * [Add Customers](#add-customers)
    * [Edit Customers](#edit-customers)
  * [Carrier Management](#carrier-management)
    * [Add a New Carrier](#add-a-new-carrier)
    * [Deleting Carriers](#deleting-carriers)
         * [Reply-Management](#reply-management)
         * [Authentication](#authentication)
         * [Latest Calls](#latest-calls)
         * [Failover](#failover)
         * [Payment](#payment)
         * [CDR](#cdr)  
         * [DID](#did)  
         * [Alerts](#alerts)  
    * [Code Consistency](#code-consistency)

# Introduction
Initial set-up will configure a single carrier, single customer and single rate card.

## Prerequisites
This guide will assume:
1. You have a modern web browser.
2. You have a basic understanding of Telecoms (Customers, Provider, etc).
3. You have already created an account with ConnexCS.com.

### Prerequisites Customer
1. Customer Name
2. Switch IP Address or Username / Password
3. Credit / Debit Limit

### Prerequisites Carrier
1. Carrier Name
2. Switch IP Address

### Prerequisites Rate Card
1. Full Rate Card or List of Codes
2. Profit Margin / Plan for customer prices.

## Video Guide

**Note: Our control panel interface has been updated, however the video references our old site. Functionality is the same, however it may look a little different**

The videos on this page are to show a quick example of how to setup your account.
### Adding a Customer &amp; Carrier
<video controls="controls" width="320" height="240"><source src="https://www.connexcs.com/wiki_media/customer_carrier_setup.ogv" type="video/ogg; codecs=&quot;theora, vorbis&quot;" /><source src="https://www.connexcs.com/wiki_media/customer_carrier_setup.webm" type="video/webm" /><source src="https://www.connexcs.com/wiki_media/customer_carrier_setup.mp4" type="video/mp4" />Your browser does not support the HTML5 video.</video>
### Uploading a Provider Rate Card (and create Customer Rate Card)
<video controls="controls" width="320" height="240"><source src="https://www.connexcs.com/wiki_media/upload_rate_card.ogv" type="video/ogg; codecs=&quot;theora, vorbis&quot;" /><source src="https://www.connexcs.com/wiki_media/upload_rate_card.webm" type="video/webm" /><source src="https://www.connexcs.com/wiki_media/upload_rate_card.mp4" type="video/mp4" />Your browser does not support the HTML5 video.</video>
### Manually Create Provider Rate Card (and create Customer Rate Card)
<video controls="controls" width="320" height="240"><source src="https://www.connexcs.com/wiki_media/manual_rate_card.ogv" type="video/ogg; codecs=&quot;theora, vorbis&quot;" /><source src="https://www.connexcs.com/wiki_media/manual_rate_card.webm" type="video/webm" /><source src="https://www.connexcs.com/wiki_media/manual_rate_card.mp4" type="video/mp4" />Your browser does not support the HTML5 video.</video>
### Ingress Routing
<video controls="controls" width="320" height="240"><source src="https://www.connexcs.com/wiki_media/ingress_routing.ogv" type="video/ogg; codecs=&quot;theora, vorbis&quot;" /><source src="https://www.connexcs.com/wiki_media/ingress_routing.webm" type="video/webm" /><source src="https://www.connexcs.com/wiki_media/ingress_routing.mp4" type="video/mp4" />Your browser does not support the HTML5 video.</video>

## Customer Management
### Add Customers

Users can add customers by following the simple instructions.

1. Click on the Add Customer button.

2. Fill out the customer details on the dialog box.

3. Press Save button to add customers on the list. 

Following figure shows the details of the modal window opened to add a new customer:

![alt text][add-customer]

Brief description of the fields present in the above dialog box is as follows:


* Customer Name: Users will add the name of their customer.

* Paypal Email: Users will add Paypal Email of the customers in the text field.

* Website: Users will add website of the customer.

* Status: Users can choose the "Status" of the customer as:

  1. Active
  2. Inactive
  3. Pending Approval

* Debit Limit: "Debit Limit" will be added by the user.

* Tax: "Tax" in percentage will also be added by the user.

* Currency: "Currency" will also be selected from the dropdown menu.

* Portal Access: Users will select the "Portal Access" from the options either Yes or No.

* Address: "Address" of the customers will be filled out by the user. 

### Edit Customers
For a saved customer;
1. Click on the name of the particular customer you wish to edit the details for.
2. Click on "Edit Customer" button.
3. Edit the details and then Save.

## Carrier Management

Carriers can be easily and efficiently managed with the help of **Connex.** **Connex** allows you to not only add, edit and delete carriers but also lets you view the columns you want to see. 

On the Dashboard, click on the tab. highlighted in the page centre, to go to the **Carrier** or you can expand the **_Management_** tab from the left pane and select **"Carrier".**

![alt text][carrier-list]

### Adding Carrier

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

**Pre Ring Timeout and Post Ring Timeout:** Users will set the "Pre Ring Timeout" and "Post Ring Timeout" in the given text fields. The default value for each is 30 Seconds.

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
 
You can add new IP for authentication, by clicking on the “+” sign on extreme right. 

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


[add-customer]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/add-customer.png "Add Customer"
[add-dashboard]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/customer-dashboard.png "Customer Dashboard"
[add-customer]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/add-Customer1.png "Add Customer Image 1"
[customer-status]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/customer-status.png "Customer Status"
[carrier-list]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/carrier-list.png "Carrier List"
[add-carrier]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/add-carriers.png "Add Carrier"
[carrier-details]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/carrier-details.png "Carrier Details"
[carrier-sorting]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/carriers-sorting.png "Carrier Sorting"
[carrier-dashboard]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/carrier-dashboard.png "Carrier Dashboard"
[carriers]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/carriers.png "Carriers"
