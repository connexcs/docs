# Table of Contents

* [Table of Contents](#table-of-contents)
* [Customer Management](#customer-management)
    * [Adding Customer](#adding-customer)
    * [Delete Customers](#delete-customers)
    * [Checking the Status](#checking-the-status)
    * [Searching Customers](#searching-customers)
    * [Edit Customers](#edit-customers)
      * [Main Tab](#main)
      * [Stats Tab](#stats)
      * [Routing](#routing)
      * [Ingress Routing](#ingress-routing)
      * [Adding CLI](#adding-cli)
      * [Authentication](#authentication)
         * [IP Authentication](#ip-authentication)
         * [User/Password Authentication](#user-password-authentication)
      * [Latest Calls](#latest-calls)
      * [Dialogs](#dialogs)
      * [Payments](#payments)
      * [Alerts](#alerts)
      * [Call Detail Records](#call-detail-record-cdr)
      * [DID](#did)
      * [Packages](#packages)
      * [Contacts](#contacts)


# Customer Management

In Connex, you can create your own **Customer** and assign **credit, routing, CLI, authentication. Also you can check the Latest calls, channels ASR, ACD, PDD and CPS Stats**

Managing customers is quite easy with **Connex.** Follow the procedures given in this tutorial, to learn how to efficiently manage your customers.

On the Dashboard, click on the tab, highlighted in the centre of the page, to go to the **Customer** or you can also click on  **_Management_** from the left pane and select **"Customer".**

![alt text][customer-dashboard]

## Adding Customer

![alt text][add-Customer-new]

You can add new **Customers** by following the simple procedure.

1. Click on **Add Customer** button.
2. Enter the details of the Customer.
3. Click the **Save** button, once all the details are entered properly.

Following figure shows the dialog box for adding a **Customer:**

![alt text][add-Customer]

Brief description, of the fields present in above dialog box, is as follows:

**Customer Name:** Add the name of the customer.

**Paypal Email:** Enter the Paypal Email of the customer in the text field.

**Website:** Add the customer's website address.

**Status:** Users can choose the "Status" of the customer as:

1. Active : Enables the account, this will let the customer's calls pass through
2. Inactive: Disables the account, all calls will be blocked
3. Pending Approval: When a customer signs up it will be listed under pending approval, setting pending approval won't let the calls        pass through.

**Debit Limit:**  You can set the debit limit on this field, you usually this is done for postpay customers.

**Tax:**  You can add the Tax as a percentage, this will be calculated on the payment that gets added.

**Currency:** Select the currency from the dropdown menu.

**_Note:_** _You wont be able to change the account currency once the account is created._

**Portal Access:**  Users will select the "Portal Access" from the options either Yes or No, selecting to NO will restrict your users to access your Customer Portal

**Address:** Complete the customer's address.

## Delete Customers

You can delete **Customers** from the list, by following the steps given below. 

1. Select a **Customer** from the list.
2.	Click on the **Delete** button.

![alt text][del-customer]

![alt text][del-confirm]

![alt text][del-confirm-1]

## Checking the status

![alt text][customer-status]

YOu can also check/filter the **Customers** by the status. 

1.	Click on the button, to the right of the trash bin, labelled  **"Active".**
2.	Select an option from the dropdown menu, against which you want to filter the customers.
3.	Results will show up according to the selected option.

## Searching Customers

You can search anything about a **Customer** by writing the query in the **Search** text field. You can search for a name, IP address, users.

## Editing Customers

In order to edit a **Customer**, select **Customer** from the list and a new page will open up. Follow the procedure given below to edit a specific customer:

1.	Click the **"Edit Customer"** button.
2.	Edit the details and click **"Save"** button.

Following demonstrates the various buttons:

![alt text][edit-customer]

### Main 

In **Main** tab, users can view/add the customer contacts. You can also check the summary in three different forms i.e. Live/Daily/Monthly as shown in an image above.

## Contacts
Steps to create a new contact on the Main tab.

1.	Click on the *‘plus sign’* button on the contacts pane.
2.	Fill out the details, you can choose to generate password automatically OR set the password manually, the generated password will be emailed. 
3.	Press *Save* button once the details have been filled out, correctly.

These credentials should be used to login on your customer portal.

![alt text][main-tab]

### Stats

In **Stats** tab, you can view the Channels, Calls Per Second (CPS), ACD, ASR, Attempts, Codes, PDD stats, you can also filter it by the day/month of your choice.

![alt text][stats-tab]

### Routing

#	Ingress Routing

Under Ingress Routing you can assign a customer rate card to your customer account, the detailed functions are explained on [Ingress Routing]

![alt text][routing-tab]

### Ingress Routing

1.	Click on the **Add New** button.
2.	Select the customer card & Fill out the details of the dialogue box. 
3.	Press **Save** once the details are filled in, correctly.

The details of the dialogue box can be shown in the image below:

![alt text][ingress-routing-tab]

More information about Ingress Routing is explained on [Ingress Routing]

### Adding CLI

CLI / ANI is the From part of the SIP INVITE message and contains the information about who the call was placed from, more specifically we are refering to the number that is presented to have sent the call. 
The detailed functions are explained on [CLI]

1.	Click on the **Add New** button.
2.	Popup will appear. Fill out the details in the dialogue box.
3.	Press **Save** once the details are correctly entered.

Details of the dialogue box can be seen in an image below:

![alt text][edit-cli]

### Authentication

Under the **Authentication** tab, there are two types of authentication as shown in the image below:

![alt text][auth]

1.	IP Authentication
2.	User/ Password Authentication

#### IP Authentication

1.	Click on the **Add new** button.
2.	Enter the IP address & click save

![alt text][edit-switch-basic]

In **Basic** dialogue box, Users will add the IP/Hostname, Channels (in digits only) and Flow Speed (in digits only) as shown in an image above.
In the image below, there is description of the Advanced dialogue box.

![alt text][edit-switch-advance]

1.	You can optionally select the codecs.
2.	Enter the switch Manufacturer and Version of your customer in the respective text field.
3.	Select the SIP Protocol, Port and Dial Pattern.
4.	Optionally you can add CLI Prefix.
5.	Enter the Tech Prefix, Strip Digits and Bandwidth in digits only.
6.	You can Force From in the given text field.
7.	Users checks one of the options: Ingress or Egress.

#### User/ Password Authentication

Users can set the **User/Password authentication**.

1.	Click on the **Add new** button.
2. Enter the username & password & click save.

![alt text][user-pwd-auth]

### Latest Calls

Users can check the **latest call** from this tab, look up for calls and refresh the list of simulated calls.
For simulating the call, 

1.	Click on the **Simulate** button.
2.	Popup will appear.
3.	Fill out the details of the dialogue box like **Dialed Number, CLI/ANI, Switch IP** and all other as mentioned in the image below:
4.	Finally press **Simulate** button.

![alt text][simulate-call]

### Dialogs

**Dialogs** is the tab that shows the active calls on the account. You can easily find out the Active calls in just one click.

### Payments 

In this tab, users can make a list of all the **payments** that have been done so far. Users can add new payments by:

1.	Click on the **Add New** button.
2.	Fill out the dialogue box as shown in an image below. Users will add the Description of the payment, the total amount in digits and finally select the status of it whether it’s Completed, Pending or Cancelled.
3.	Finally press the **Save** button.

![alt text][payments-tab]


### Alerts

The last tab is the "Alerts" tab. It allows you to generate alerts to your customers when some specific events are triggered. You can view all your alerts by clicking on this tab.

You can also add a customised alert by clicking on the "+" sign.

![alt text][carrier-alert-1]

You need to give the alert a name such as: Low Balance Alert,

Next select the email address or phone number to whom you wish the alert to go to,

The Area is the place that is being monitored ie Balance,

The Operator is the comparitor to which the threshold is compared. If the Operator is set to eg >$50 and the Threshold is set to $50 then the Alert will be triggered and sent out to the recipient.

Click "Save" and a new alert will be created.

![alt text][carrier-alert-2]

### Call Detail Record (CDR)

You can check the details of the calls by following a simple procedure:

1. Click on CDR to view the CDR.
2. You can click on the download CDR buttton to download the CDR.

### Recalculate CDR

This feature lets you recalculate the long duration calls which have been timed out.

1.	Click on the **Recalc CDR** button.
2.	Fill the dialogue box. In the dialogue box, users will select the day, maximum duration and new duration as shown in an image below:

![alt text][recalc]

3.	And finally press **Save** once the details have been entered correctly.

### DID

Users can assign **DID** in an account by following these steps:

1.	Click on the **‘Plus sign’** button which is at the extreme right of the page.
2.	Popup will appear. Users will add DID name, set the Destination; select the Provider name, Provider Card, Customer name and Customer Card from the dropdown menu options respectively; Cost in digits and Retail as shown in the image below:
3.	And Press **Save** button.

![alt text][edit-did]

### Packages

Users can add the customer package and its quantity for their ease in just one click.

1.	Click on the **‘Plus Sign’** button.
2.	Fill out the details of the dialogue box which includes: Package name and quantity in digits and also check or uncheck the Auto Decrement Credit as you shown in an image below:
3.	Press **Save** button.

![alt text][customer-package]

After adding a new package, you can also take an action by clicking on the Action and set the further details as daily package, weekly package, etc. 

![alt text][customer-package1]


## Contacts

1. Click on Management> Customers
2. Click on the customer name

  ![alt text][customer]

  ![alt text][contacts]

3. Enter the contact name
4. Enter the Email address, this email address will be used for login
5. Check the Auto generate password box if you would like the password to be generated online and the generated password will be sent via email. Unchecking the box will let you manually set the password
6. You may enter any information on public notes, this notes will be displayed on the customer portal when logged in. The private notes is limited to display only on the control panel, this notes will not be displayed on the customer portal.
7. Click Save

 ![alt text][contacts-2]

[CLI]: <https://docs.connexcs.com/en/latest/cli>
[Ingress Routing]: <https://docs.connexcs.com/en/latest/ingress-routing>
[customer-dashboard]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/customer-dashboard-new.png "Customer-Dashboard"
[add-customer-new]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/add-customer-new.png "Add-Customer"
[add-customer]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/add-customer.png "Add-Customer"
[customer-status]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/customer-status.png "Customer-Status"
[edit-customer]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/edit-customer-new.png "Edit-Customer"

[stats-tab]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/stats-tab.png "Stats Tab"
[main-tab]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/main-tab.png "Main Tab"
[routing-tab]:  https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/routing-tab.png "Routing Tab"
[ingress-routing-tab]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/ingress-routing-tab.png "Ingress Routing Tab"
[edit-cli]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/edit-cli.png "Edit CLI"
[auth]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/auth.png "Auth"
[edit-switch-basic]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/edit-switch-basic.png "Edit Switch Basic"
[edit-switch-advance]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/edit-switch-advance.png "Edit Switch Advance"
[user-pwd-auth]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/user-pwd-auth.png "User Pwd Auth"
[simulate-call]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/simulate-call.png "Simulate Call"
[payments-tab]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/payments-tab.png "Payments Tab" 
[alert]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/alert.png "Alerts"
[recalc]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/recalc.png "Recalc"
[edit-did]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/edit-did.png "Edit-DID"
[customer-package]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/customer-package.png "Customer-Package"
[customer-package1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/customer-package1.png "Customer-Package1"

[customer]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/customer.png "customer"
[contacts]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/contacts.png "contacts"
[contacts-2]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/contacts-2.png "contacts-2"



[del-customer]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/del-customer.png "del-customer"
[del-confirm]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/del-confirm.png "del-confirm"
[del-confirm-1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/del-confirm-1.png "del-confirm-1"

[carrier-alert-1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/carrier-alert-1.png "Carrier Alert-1"
[carrier-alert-2]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/carrier-alert-2.png "Carrier Alert-2"

