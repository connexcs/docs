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


# Customer Management

In Connex, you can create your own **Customer** and assign **credit, status, channel, last call, ASR, ACD, PDD and CPS** to them.
Managing customers is quite easy with **Connex.** Follow the procedures given in this tutorial, to learn how to efficiently manage customers.

On the Dashboard, click on the tab, highlighted in centre of page, to go to the **Customer** or you can also click on  **_Management_** from the left pane and select **"Customer".**

![alt text][customer-dashboard]

## Adding Customer

![alt text][add-Customer-new]

Users can add new **Customers** by following the simple procedure.

1. Click on **Add Customer** button.
2. Enter the details of the Customer.
3. Click the **Save** button, once all the details are entered properly.

Following figure shows the dialog box for adding a **Customer:**

![alt text][add-Customer]

Brief description of the fields present in above dialog box is as follows:

**Customer Name:** Users will add the name of the customer.

**Paypal Email:** Users will add Paypal Email of the customer in the text field.

**Website:** Users will add customer's website.

**Status:** Users can choose the "Status" of the customer as:

1. Active : Enables the account, this will let the customer calls to pass through
2. Inactive: Disables the account, all calls will be blocked
3. Pending Approval: When a customer signups it will be listed under pending approval, setting pending approval won't let the calls to    pass through.

**Debit Limit:**  "Debit Limit" will be added by the user.

**Tax:**  "Tax" in percentage will also be added by the user.

**Currency:** "Currency" will also be selected from the dropdown menu.

**Portal Access:**  Users will select the "Portal Access" from the options either Yes or No.

**Address:**  "Address" of the customers will be filled out by the user. 

## Delete Customers

Users can delete the **Customers** from the list, by following the steps given below. 

1. Select a **Customer** from the list.
2.	Click on the **Delete** button.

## Checking the status

![alt text][customer-status]

Users can also check/filter the status of the **Customers**. 

1.	Click on the button, to the right of the trash bin, labelled  **"Active".**
2.	Select an option from the dropdown menu, against which you want to filter the customers.
3.	Results will show up according to the selected option.

## Searching Customers

Users can search anything about a **Customers** by writing the query in the **Search** text field.

## Edit Customers

In order to edit a **Customer**, select **Customer** from the list and a new page will open up. Follow the procedure given below to edit a specific customer:

1.	Click the **"Edit Customer"** button.
2.	Edit the details and click **"Save"** button.

Following figure demonstrates the **Edit Customer** button:

![alt text][edit-customer]

### Main 

In **Main** tab, users can view all his contacts. Users can also check the summary in three different forms i.e. Live/Daily/Monthly as shown in an image above.

Users can also create a new contact on the Main .

1.	Click on the *‘plus sign’* button on the contacts pane.
2.	Fill out the details.
3.	Press *Save* button once the details have been filled out, correctly.

![alt text][main-tab]

### Stats

In **Stats** tab, create and assign channels to customers. Click on the **Channels** to make them functional. Users can have record of **Calls Per Second (CPS)** under the **Stats** tab and can also check the details of the CPS by the day/month of their choice as highlighted with a yellow rectangle in the image below:

![alt text][stats-tab]

Moreover, in the same tab, **Stats**, users can check the details of **ACD, ACR, Attempts, Codes** and **PDD**.

### Routing

Now, coming towards to the next tab which is **Routing**, there are basically two types routing as shown in an image below:

1.	Ingress Routing
2.	CLI

![alt text][routing-tab]

### Ingress Routing

1.	Click on the **Add New** button.
2.	Pop up will show up. Fill out the details of the dialogue box. 
3.	Press **Save** once the details are filled up, correctly.

The details of the dialogue box can be shown in the image below:

![alt text][ingress-routing-tab]

1.	Users will add the name of the Rate Card and write the Tech Prefix and Capped Rate in digits only.
2.	Users will select the Sandbox, Profit Assurance and Block Connect Costfrom the dropdown menu options.
3.	Users will add the Channel and Maximum Duration.
4.	Users will write the Dial String in the given text field.
5.	Users can select the Lock Parent Card and Exclude Parent Cards from the dropdown menu option.
6.	Moreover, other than Route Ingress, users will fill out the details of Proxy Info where users will add the RTP Media Proxy and RTP Proxy Mode.
7.	Users can also add the Strategy by clicking on the *Add New* button.

### Adding CLI

1.	Click on the **Add New** button.
2.	Popup will show up. Fill out the details of the dialogue box.
3.	Press **Save** once the details are correctly entered.

Details of the dialogue box can be in an image below:

![alt text][edit-cli]

1.	Fill out the CLI text field.
2.	Rewrite the CLI and write the P Asserted ID.

### Authentication

In the **Authentication** tab, there are two types of authentication as shown in the image below:

![alt text][auth]

1.	IP Authentication
2.	User/ Password Authentication

#### IP Authentication

1.	Click on the **Add new** button.
2.	Popup will show up. Fill out the details of the dialogue box.
3.	Press **Save** once the details are correctly entered.

![alt text][edit-switch-basic]

In **Basic** dialogue box, Users will add the IP/Hostname, Channels (In digits only) and Flow Speed (In digits only) as shown in an image above.
In the image below, there is description of the Advanced dialogue box.

![alt text][edit-switch-advance]

1.	Users will add the Codecs
2.	Users will write the Manufacturer and Version in the respective text field.
3.	Users will select the options on the Protocol, Port and Dial Pattern.
4.	Users will add the CLI Prefix.
5.	Users will write the Tech Prefix, Strip Digits and Bandwidth in digits only.
6.	Users will write Force Forum in the given text field.
7.	Users checks one of the options: Ingress or Egress.

#### User/ Password Authentication

Users can set the **User/Password authentication**.

1.	Click on the **Add new** button.
2.	Popup will show up. Fill out the details of the dialogue box.
3.	Press **Save** once the details are correctly entered.

![alt text][user-pwd-auth]

### Latest Calls

Users can simulate **latest call**, look up for calls and refresh the list of simulated calls.
For simulating the call, 

1.	Click on the **Simulate** button.
2.	Popup will show up.
3.	Fill out the details of the dialogue box like **Dialed Number, CLI/ANI, Switch IP** and all other as mentioned in an image below:
4.	Finally press **Simulate** button.

![alt text][simulate-call]

### Dialogs

**Dialogs** is the tab that shows the active calls on the account. Users can easily find out the Active calls in just one click.

### Payments 

In this tab, users can make a list of all the **payments** that have been done so far. Users can add new payments by:

1.	Click on the **Add New** button.
2.	Fill out the dialogue box as shown in an image below. Users will add the Description of the payment, the total amount in digits and finally selects the status of it whether it’s Completed, Pending or Cancelled.
3.	Finally press the **Save** button.
4.	Users can also take an action after every button to confirm its status. Just click on the Action button which is right next to the Status in the main page of the **Payments** tab.

![alt text][payments-tab]


### Alerts

Users can set the **Alerts** for important notifications. Users can add new alert by:

1.	Click on the **‘plus sign’** button.
2.	Fill the details of the dialogue box as shown in an image below: Title of the alert, Email/phone number, Area, Operator and Threshold.

![alt text][alert]

3.	Press **Save** once the details have been filled out.

### Call Detail Record (CDR)

Users can check the details of the calls by following a simple procedure:

1.	Click on the **Recalc CDR** button.
2.	Fill the dialogue box. In the dialogue box, users will select the day, maximum duration and new duration as shown in an image below:

![alt text][recalc]

3.	And finally press **Save** once the details have been entered correctly.
4.	Users can also switch the dates from today to any other date and month.

### DID

Users can assign **DID** in an account by following the simple procedure:

1.	Click on the **‘Plus sign’** button which is at the extreme right of the page.
2.	Popup will show up. Users will add DID name, set the Destination; select the Provider name, Provider Card, Customer name and Customer Card from the dropdown menu options respectively; Cost in digits and Retail as shown in an image below:
3.	And Press **Save** button.

![alt text][edit-did]

### Packages

Users can add the customer package and its quantity for their ease in just one click.

1.	Click on the **‘Plus Sign’** button.
2.	Fill out the details of the dialogue box which includes: Package name and quantity in digits and also check or uncheck the Auto Decrement Credit as you shown in an image below:
3.	Press **Save** button.

![alt text][customer-package]

After adding a new package, users can also take an action by clicking on the Action andset the further details as daily package, weekly package, etc. 

![alt text][customer-package1]


[customer-dashboard]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/customer-dashboard-new.png "Customer-Dashboard"
[add-customer-new]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/add-Customer-new.png "Add-Customer"
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


