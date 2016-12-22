# Table of Contents

* [Table of Contents](#table-of-contents)
* [Introduction](#introduction)
  * [Prerequisites](#prerequisites)
    * [Customer](#prerequisites-customer)
    * [Carrier](#prerequisites-carrier)
    * [Rate Card](#prerequisites-rate-card)
          * [Customer Rate Card Management](#customer-rate-card)
             * [Adding Customer Card](#adding-customer-card)
               * [Basic Level](#basic-level)
               * [Advanced Level](#advanced-level)
             * [Refreshing the list](#refreshing-the-list)
             * [Uploading a file](#uploading-a-file)
             * [Deleting the Customer Rate Card](#deleting-the-customer-rate-card)
             * [Customer Rate Card details](#customer-rate-card-details)
             * [Profit](#profit)
             * [Searching Text field](#searching-text-field)
             * [Email Ratecard](#email-rate-card)
  * [Ingress Routing](#ingress-routing)
     * [Tariff](#tariff)
     * [Tech Prefix](#tech-prefix)
     * [Channels](#channels)
     * [Dial String](#dial-string)
     * [Missing BYE Protection](#missing-bye-protection)
     * [Maximum Duration](#maximum-duration)
     * [Time-out Methods](#time-out-methods)
     * [Profit Assurance](#profit-assurance)
     * [Lock Parent Card](#lock-parent-card)
     * [Exclude Parent Cards](#exclude-parent-cards)
     * [ScriptForge](#scriptforge)
     * [RTP Proxy Modes](#rtp-proxy-modes)
     * [Options](#options)
     * [CPS Limitation ](#cps-limitation)
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
         * [Authentication](#authentication)
         * [Payment](#payment)
    * [Code Consistency](#code-consistency)
  * [Provider Rate Card Management](#provider-rate-card)
       * [Adding New Provider Card](#adding-new-provider-card)
        * [At Basic level](#at-basic-level)
        * [At Advanced level](#at-advanced-level)
        * [Uploading a File](#uploading-a-file)
       * [Deleting a Provider Rate Card](#deleting-a-provider-rate-card)
 * [Email Verification](#email-verification)
 * [Mobile Verification](#mobile-verification)
    

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
 
### Authentication

Next to the Reply Management tab there is “Authentication” where you can specify your authenticated IP.

![alt text][carrier-authentication] 
 
You can add new IP for authentication, by clicking on the “+” sign on extreme right. 

![alt text][carrier-ip-1] 
 
Fill Basic and Advanced tab to complete the addition of authenticated IP.

### Payment

“Payment” tab would let you see all the payments made so far. You can add a new payment by clicking on the “+” sign.
 
Fill in the more payment information and click “Save”.

![alt text][carrier-payment] 
 
## Customer Rate Card

Now the users can also make the rate cards. Rate cards can be accessed two ways:

1. From the dashboard, click on Rate Card icon present, highlighted as orange in the image below. 

Or

2.	Go to the Management from the left pane and click on Rate Card, highlighted as red in an image below:

![alt text][ratecard-dashboard]

After going to the Rate Card, click on the Customer Rate Card option, as shown in the image below:

![alt text][customer-ratecard]
 
In this section, the following actions can be performed.

1.	Adding Customer Card.
2.	Refreshing the list.
3.	Uploading a file.
4.	Deleting the customer rate card.

### Adding Customer Card

Users can add a new customer rate card by following simple steps:
1.	Click on the Add Customer Card button.
2.	Pop-up will appear. Fill in the details in the dialogue box.
3.	Click Save button once the details have been entered.

There are two types of table in the customer rate card. One is of Basic level and the other one is of Advanced level.

#### Basic Level

In this level, the following basic information is to be added:

1.	Users will add the Name in the text field.
2.	Users will select the Rate Card from dropdown menu options.
3.	Users will select the Rate Compact from the dropdown menu options as minimum, average or maximum.
4.	Users will select the Currency from dropdown menu. 

![alt text][basic]
 
#### Advanced Level

In advanced level, users are required to fill in more details.

1.	Users will add the Name that will be public.
2.	Users can add the notes, both public and private, in the respective fields.
3.	Users will select the Public Options from the given check-list. 
4.	Users will select Force Presentation from drop-down menu options as default, single rate or intER/intRA.
5.	Users will select the dialling type from dropdown menu.
6.	Users will select the strategy options as LCR, random, round robin or reverse LCR.
7.	Users will select the Collapse Option.
8.	User can use the Dynamic Routing when a Custom Rate card is uploaded. You can select the provider rate cards to which you want to send traffic.

![alt text][advance]

### Refreshing the list

Rate cards list can be refreshed by simply clicking on the Refresh button.

### Uploading a file

Users can upload a file by clicking on the Upload File button and browse the desired file.

### Deleting the Customer Rate Card

Users can also delete the customer rate card by simply selecting the name from the list and then click the trash icon, which is right next to the Upload File button.

Note: Users can take any help about the Rate Card by clicking on the button with the sign of “?”. 

### Other functions of the Customer Rate Card section includes:

1.	Customer Rate Card details.
2.	Searching text field.

#### Customer Rate Card details

By clicking on the name of the Customer Rate Card, three options appear. 

•	Main
•	Profits
•	Edit

![alt text][card-details]
 
In Main tab, there are three further options:

1.	Add Draft (where users can add the draft).
2.	Upload (where users can upload the Customer Rate Card).
3.	Build (where users can build or compile the carrier cards).

In Profits tab, users can add a new row by simply clicking on the Add New Row button or they can import it from the parent carrier card by clicking on the Import From Parent Carrier Card button.

In Edit tab, users can edit the details of the card both at basic and advanced levels.

#### Profit

In *_Profit_* tab, there are three main functionalities:
1. Add new row
2. Building the card
3. Applying filtered transformation.

![alt text][profittab]

1. *Adding New Rows*

You can add the new row by simply clicking on the *Add New Row* button. The content of the row can be changed, afterwards.

2. *Building the card*

The generation of a Rate card can be completed, based on these rows, by clicking on *“Build FromCarrier Cards”*, which is next to *“Add New Row”* button. A pop-up would appear, confirming the generation of the rate card.

![alt text][popup]

3. Applying Filtered Transformation

You can apply filtered transformation by clicking on *Filtered* button, which is next to *“Build FromCarrier Cards”* button.

4. Editing the Customer Card information

In *_Edit_* tab, users can edit the details of the card both at basic and advanced levels and press *“Save”* to commit changes.

![alt text][edittab]

#### Searching Text field

Users can also search any details related to Customer Rate Card, by simply writing in the search text field and the results will appear instantly.

### Email Rate Card

With this feature you can email the rate card to your customer's email address as an attachment.

1. Click on Management> Rate Card> Customer Rate Card
2. Click on the rate card name

![alt text][email-ratecard-1]

3. Click on Email button

![alt text][email-ratecard-2]

4. Enter the email address and click on send

![alt text][email-ratecard-3]


## Provider Rate Card

From the Dashboard, click on the tab of rate card, highlighted in the centre of the page, and also you can go to the **Management** and select **_Rate Cards_**.

![alt text][ratecard-dashboard-new]

Users can manage the rate cards by performing following actions.

1. Adding New Provider Card
2. Upload File
3. Deleting the Provider Card

### Adding New Provider Card

![alt text][add-new-provider]

Users can add new provider card at both basic and advanced level. 

#### At Basic level

1. Users can add the Name of provider.
2. Carrier can be selected from the drop down menu.
3. User can select a currency.
4. Finally users will press the **Save** button. 

![alt text][ratecard]

#### At Advanced level

Users will fill out the following text fields:

1. Name
2. Tech Prefix
3. Notes (Private)
4. Notes (Public)
5. Users can select Public options from the checklist.
6. Users can select the "Force Presentation" from the dropdown menu. The options include: Default, Single Rate, IntER, IntRA etc.
7. Users can also add "Dialling" information.

![alt text][edit-provider-card]

### Uploading a File

Next to the **Add New Provider Card** button, there is an **"Upload File"** button. Click on it and a new page will open, showing the files that are already uploaded, if any.

![alt text][upload-file]

Users can upload a file by following these steps:
1. Click on **Upload** file button. 
2. Browse a file from the system. 
3. Upload it.

### Deleting a Provider Rate Card

Users can delete the Provider cards that were saved earlier. Just follow the steps mentioned below:

1. Select the Provider Card by check marking the entire row from the list.
2. Press the **Delete** button which is next to the **"Upload File"** button.

## Ingress Routing

Ingress routing allows incoming attempts to be sent to the correct rate card which in turn egress through the specified provider.

Ingress routing allows for lots of rate cards to be used with or without a prefix. This is checked according to the longest prefix first through to the shortest for a match. If no prefix is matched then it will begin matching the rules of the rate cards. Rate cards with mutually exclusive destinations will route without problems, but rate cards which have prefixes with collisions will have no guarantee which the calls will be sent to.

### Tariff

Tariff lets you select the rate card to be used on the customer account

### Tech Prefix

It is possible for multiple customers to share the same IP address and to be distinguished by Tech Prefix. Multiple rate cards can be separated with the help of a tech prefix

### Channels

This will impose a limit on how many channels are allowed through this ingress route. This is an independent setting from any customer imposed channel limitations which will still apply.

### Missing BYE Protection

A VoIP call is stateful, however its protocol is stateless. This means that both sides of the conversation have to be told when to finish the call. They do this with a BYE message, if the BYE message goes missing, then the call will continue forever, we have the following preventions put in place to stop this happening.

### Maximum Duration

In the event that a BYE gets missed, the Maximum Duration will be the maximum amount of time that the call will be allowed to exist before being terminated.

### Time-out Methods

* SIP Ping

This sends a SIP packet to the remote end of the conversation roughly every 30 seconds. This helps to check if the other side is still aware of an ongoing conversation. If this is not received back, or is told that the conversation is not active then it shuts off the call.

* RTP Time-out

Another way to check for an active call is to detect if there is audio passing. If there is no audio passing for a pre-set interval, our RTP array will notify the switch and instruct it to terminate the call.

**Note:** this will not work if RTP Mode is set direct

### Profit Assurance

If you wish to check every call to ensure it is profitable you can enable Profit Assurance here. This is very useful for A-Z routes or NPA-NXX rate cards, however if you have a very simple rate card, where you know you will always be profitable on ALL upstream routes, you can disable this.

The default option here is disabled, as Enabled can add additional PDD to the call while the checks take place.

### Lock Parent Card

If you wish to lock a particular rate card from the list of providers you have added, you can choose this option. This will allow only the rate cards which have been selected.

### Exclude Parent Cards

If you wish to access rate cards from all the providers on your list except for one particular rate card that has to be excluded you can choose this option.

### ScriptForge

The PHP ScriptForge allows your own custom code to be run from within the ConnexCS platform.

### RTP Proxy Modes

When a call is established between customer and provider, there are two ways in which the audio can be set-up.

|  |      **With RTP Proxy**      |  **Without RTP Proxy** |
|----------|:-------------:|------:|
| **Audio Path** |  Indirect | Direct |
| **Audio Quality** |    Excellent  |  Unbeatable|
| **Latency** | Low |    Lowest |
| **Information Leakage**| No |   Yes* |

 	
**Note:** It is important to be aware, although its doubtful that any information will be logged in the customer/providers switch where the audio is engaged. It is entirely possible for an engineer to find this information out from a SIP trace, pcap or watching transit locations.

Please note DTMF Detection ONLY works when RTP Proxy mode is enabled

**When should I use with/without RTP Proxy?**

You should use an RTP Proxy if:

You don't want your customers to know your providers.

You could not use an RTP Proxy if:

1. You have other equipment in your SIP set-up which will act as a Media Relay.
2. You want to run a test to see if audio problems are related to the Connex Cloud Switch.

### Options

* RTP Media Proxy

Selection of which (if any RTP Proxy you want engaged).

Auto will select the least cost path between your customer and provider.

1. Various countries will be listed, its recommended that you choose a location that is near your provider or your customer.
2. Direct (No RTP Proxy) - This will DISABLE RTP Proxy Engagement.

**RTP Proxy Mode**

1. Strict - This will enforce the proxy engagement, if the proxy cant engage with the call, the call will not be established. Note: Free accounts are limited to how many RTP Proxy channels are enabled, this may prevent calls connecting if you have more channels than our free accounts allow you to have.

2. Relaxed - This will perform best efforts to engage the RTP Proxy, if it can't be engaged because of either network errors, or because you don't have enough RTP capacity, the calls will connect directly.

**Strategy**

Strategy lets you pass the calls based on the routing strategy you set.

### Dial string

Dial string will let only the entered prefixes through, listed as one per line. Note: Both prefix and regular expressions are allowed, for example, if you only wanted to allow UK Landline you could use

* Prefix

```
441
442
```

* Regular Expression (RegEx)
```
44(1|2)
```
* Combination (UK Landline & Canada)
```
441
442
^1(204|226|236|249|250|289|306|343|403|416|418|438|450|506|514|519|579|581|587|604|613|647|705|709|778|780|807|819|867|902|905)
```
## CPS limitation 

The Calls Per Second can be limited on Ingress Routing, this means you can set the CPS limitation on each customer card that you assign on the customer account


## Email Verification 

We verify email addresses to ensure that they are genuine.

Steps to Verify Email Address: 

1. Click on the Top Left notification button
2. Click on Verify on Verify Email
3. Click on Send Verification Code
4. Enter the Verification code sent to your email address and click Verify.


![alt text][verify-email-1]

![alt text][verify-email-2]


## Mobile Verification 

We verify mobile phone numbers to ensure that they are genuine.

Steps to Verify Mobile Number

1. Click on the Top Left notification button
2. Click on Verify on Verify Mobile
3. Click on Edit
4. Enter the phone number in e.164 format and click save
5. Click on Send Verification Code
6. Enter the Verification code sent to your mobile and click Verify.


![alt text][verify-mobile-1]

![alt text][verify-mobile-3]

![alt text][verify-mobile-2]



[verify-mobile-1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/verify-mobile-1.png "verify-mobile-1"
[verify-mobile-3]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/verify-mobile-3.png "verify-mobile-3"
[verify-mobile-2]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/verify-mobile-2.png "verify-mobile-2"


[verify-email-1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/verify-email-1.png "verify-mobile-1"
[verify-email-2]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/verify-email-2.png "verify-mobile-2"

[ratecard-dashboard-new]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/ratecard-dashboard-new.png "ratecard1"
[add-new-provider]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/add-new-provider.png "add-new-provider"
[ratecard]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/ratecard.png "ratecard"
[edit-provider-card]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/edit-provider-card.png "edit-provider-card"
[upload-file]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/upload-file.png "upload-file"
[other-options]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/other-options.png "other-options"
[using-ratecard1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/using-ratecard1.png "using-ratecard1"

[email-ratecard-1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/email-ratecard-1.png "Email-Ratecard-1"
[email-ratecard-2]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/email-ratecard-2.png "Email-Ratecard-2"
[email-ratecard-3]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/email-ratecard-3.png "Email-Ratecard-3"


[ratecard-dashboard]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/ratecard-dashboard.png "Ratecard-Dashboard"
[customer-ratecard]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/customer-ratecard.png "Customer-Ratecard"
[basic]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/basic.png "basic"
[advance]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/advance.png "advance"
[card-details]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/card-details.png "Card-Details"
[profittab]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/profittab.png "Profit-Tab"
[popup]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/popup.jpg "Popup"
[edittab]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/edittab.png "Edit-Tab"


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
