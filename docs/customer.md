# Table of Contents

- [Table of Contents](#table-of-contents)
- [Customer Management](#customer-management)
  - [Adding Customer](#adding-customer)
  - [Delete Customers](#delete-customers)
  - [Checking the status](#checking-the-status)
  - [Searching Customers](#searching-customers)
  - [Editing Customers](#editing-customers)
    - [Main](#main)
    - [Stats](#stats)
    - [Routing](#routing)
  - [Ingress Routing](#ingress-routing)
    - [Call Recording](#call-recording)
    - [Adding CLI](#adding-cli)
    - [Authentication](#authentication)
      - [IP Authentication](#ip-authentication)
      - [User/ Password Authentication](#user-password-authentication)
    - [Latest Calls](#latest-calls)
    - [Dialogs](#dialogs)
    - [Payments](#payments)
    - [Alerts](#alerts)
    - [Call Detail Record (CDR)](#call-detail-record-cdr)
    - [Recalculate CDR](#recalculate-cdr)
    - [DID](#did)
    - [Packages](#packages)
  - [Contacts](#contacts)
      


# Customer Management

In Connex, Customers are managed through customer cards. Each card has tabs that hold different management options, which we will explain below.  

Customer Management is found in the **Management** tab, the four horizontal lines beneath the **Home** icon in the dashboard:

![alt text][customer-dashboard]

## Adding Customer
The following explains how to add new customers using the Customer Management screen:

1. Click the  **`+`** button.

![alt text][add-Customer-new]

2. Enter relevant details in each text box.
3. Click the **`Save`** button.

![alt text][add-Customer]

Above is an image of the new customer window.  The following is a descrtption of each entry:

* **Customer Name:** - A name or unique identifier for each customer.
* **Paypal Email:** The email address associated witht he customer's PayPal account.
* **Website:** The customer's website address.
* **Status:** The customer's status, i.e.:
  *  Active : The customer is active and allowed to pass calls. 
  *  Inactive: The account is disabled, and 
  *  Pending Approval: New signups will be listed as pending approval.  The customer cannot pass calls or become active until this phase is completed. 
* **Debit Limit:**  Sets the debit limit for postpay customers.
* **Minimum Payment:** Set the minimum payment to keep accounts active. 
* **Tax:**  Tax is added as a percentage that is charged on top of costs.
* **Currency:** Select the currency from the dropdown menu. Note that you wont be able to change the account currency once the account is created.

**Portal Access:**  Users can turn **Portal Access** to yes(on) or no(off).  Selecting 'no' will restrict user access to the Customer Portal
**Address:** Complete the customer's physical address, not to be confused with email addresses.

## Delete Customers

You can delete customers from the list by selecting them and pressing the **Delete** button.

![alt text][del-customer]

## Checking the status

You can also check/filter **Customers** by status:

1.	Click the button to the right of the trash bin labeled  **`Active`**.
2.	Select a filter option from the dropdown menu.
3.	Results will automatically arrange themselves according to the filter.

![alt text][customer-status]

## Searching Customers

Search for **Customer** information by adding a query in the **Search** text field and clicking the search icon or pressing `Enter`.

## Editing Customers

Editing customers by clicking their name in the customer list, then **Edit Customer**. The screen that opens is similar to the new customer screen, except the details should already be filled.  You can edit these, and click **`Save`**.

### Main 

In the **Main** tab, users can view or add customer contacts. Summaries are available in live, daily, and monthly formats, as shown above.


![alt text][main-tab]

### Stats

In the **Stats** tab, you can view items such as Channels, Calls Per Second (CPS), ACD, ASR, Attempts, Codes, PDD, and filter them by day or month.

### Routing

## Ingress Routing

In **Ingress Routing** you can assign a Customer Rate Card to a customer account. 

1.	Click on the **`+`** button.
2.	Select the customer card and fill in the relevant details.
3.	Press **`Save`**.

The details of the dialogue box can be seen in the image below:

![alt text][ingress-routing-tab]

See our [Ingress Routing] page in these for more in-depth information.

### Call Recording

1. Click **Management**>**Customer**.
2. Click the **Customer Name**>**Routing**>**Proxy Info**.
3. Click the rate card name, and then select **Enable** from Recording.

![alt text][recording-1]

4. Recorded files are accessed from the file section
5. Select **Management**>**File**>**Recording**.
6. Click the **`Download`** button to download the file.

![alt text][recording-2]

### Adding CLI

CLI / ANI is the From part of the SIP INVITE message and contains the information about who the call was placed from, more specifically we are referring to the number that is presented to have sent the call. 
The detailed functions are explained on [CLI]

1.	Click on the **'+'** button.
2.	Popup will appear. Fill out the details in the dialogue box.
3.	Press **Save** once the details are correctly entered.

Details of the dialogue box can be seen below:

![alt text][edit-cli]

### Authentication

Under the **Authentication** tab,  users can choose either IP Authentication or User/Password Authentication.

![alt text][auth]

#### IP Authentication
To set 
1.	Click the **`+`** button.
2.	Enter the IP address and click save

![alt text][edit-switch-basic]

In a **Basic** dialogue box, Users can add the IP/Hostname, Channels, and Flow Speed in numeric digits, as shown in an image above. In the image below, there is a description of the **Advanced** dialogue box.

![alt text][edit-switch-advance]

1.	Select the codecs.
2.	Enter the switch manufacturer and Version of your customer in the respective text field.
3.	Select the SIP Protocol, Port and Dial Pattern.
4.	Optionally you can add CLI Prefix.
5.	Enter the Tech Prefix, Strip Digits and Bandwidth in digits only.
6.	You can Force From in the given text field.
7.	And you need to select one of the options: Ingress or Egress.

#### User/ Password Authentication

You can set the **User/Password authentication**.

1.	Click on the **'+'** button.
1. Enter the username & password & click save.

![alt text][user-pwd-auth]

### Latest Calls

Here you can check the **latest call** from this tab, look up calls and refresh the list of simulated calls.
For simulating the call: 

1.	Click on the **Simulate** button.
2.	Popup will appear.
3.	Fill out the details of the dialogue box like **Dialed Number, CLI/ANI, Switch IP** etc., as mentioned in the image below:
4.	Finally press **Simulate** button.

![alt text][simulate-call]

### Dialogs

The **Dialogs** tab shows the active calls on the account so you can easily see the Active calls with just one click.

### Payments 

In this tab, you can make a list of all the **payments** that have been made so far and you can also add new payments by:

1.	Click on the **'+'** button.
2.	Fill out the dialogue box as shown in the image below. Add the Description of the payment, the total amount in digits and finally        select the status of it whether it’s Completed, Pending or Cancelled.
3.	Finally press the **Save** button.

![alt text][payments-tab]


### Alerts

The last tab is the "Alerts" tab. It allows you to generate alerts to your customers when some specific events are triggered. You can view all your alerts by clicking on this tab.

You can also add a customised alert by clicking on the "+" sign.

![alt text][carrier-alert-1]

You need to give the alert a name such as: Low Balance Alert

Next select the email address or phone number to whom you wish the alert to go to

The Area is the place that is being monitored ie Balance

The Operator is the comparitor to which the threshold is compared. If the Operator is set to eg >$50 and the Threshold is set to $50 then the Alert will be triggered and sent out to the recipient

Click "Save" and a new alert will be created.

![alt text][carrier-alert-2]

### Call Detail Record (CDR)

You can check the details of the calls by following a simple procedure:

1. Click on CDR to view the CDR.
2. You can click on the download CDR buttton to download the CDR.

### Recalculate CDR

This feature lets you recalculate the long duration calls which have been timed out.

1.	Click on the **Recalc CDR** button.
2.	Fill the dialogue box. Here you can select the day, maximum duration and new duration as shown in an image below:

   ![alt text][recalc]

3.	And finally press **Save** once the details have been entered correctly.

### DID

You can assign **DID** in an account by following these steps:

1.	Click on the **‘+’** button which is at the extreme right of the page.
2.	Popup will appear. Add DID name, set the Destination; select the Provider name, Provider Card, Customer name and Customer Card from the dropdown menu options respectively; Cost in digits and Retail as shown in the image below:
3.	And Press **Save** button.

![alt text][edit-did]

### Packages

You are able to add the customer package and its quantity for their ease in just one click.

1.	Click the **`+`** button.
2.	Fill in the dialogue box with relevant details.  Checking **Auto Decrement** will debit the package amount from the customer account depending on the quantity.
3.	Press **Save** button.

![alt text][customer-package]

You can also choose package duration, quantity, cost, and frequency by clicking the drop down arrow in the Package box. 

![alt text][customer-package1]


## Contacts

1. Click **Management**>**Customers**.
2. Select a customer from the list.

   ![alt text][customer]

3. Enter the contact name.
4. Enter the email address used to log in.
5. Check the **Auto Generate Password** box to have a password generated online and sent via email. Unchecking the box will let you manually set the password.
6. You may enter any information on **public** notes. These notes will be displayed on the customer portal when logged in. Private notes will display in the control panel. 
7. Click **`Save`**.

 ![alt text][contacts-2]
 


[customer-dashboard]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/33.png "Customer-Dashboard"
[add-customer-new]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/34.png "Add-Customer"
[add-customer]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/35.png "Add-Customer"

[del-customer]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/36.png "del-customer"
[customer-status]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/39.png "Customer-Status"
[edit-customer]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/40.png "Edit-Customer"

[main-tab]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/41.png "Main Tab"
[stats-tab]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/42.png "Stats Tab"
[routing-tab]:  https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/43.png "Routing Tab"
[ingress-routing-tab]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/44.png "Ingress Routing Tab"


[recording-1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/45.png "recording-1"
[recording-2]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/46.png "recording-2"

 
[edit-cli]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/47.png "Edit CLI"
[auth]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/48.png "Auth"
[edit-switch-basic]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/49.png "Edit Switch Basic"
[edit-switch-advance]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/50.png "Edit Switch Advance"
[user-pwd-auth]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/51.png "User Pwd Auth"

[CLI]: <https://docs.connexcs.com/en/latest/cli>
[Ingress Routing]: <https://docs.connexcs.com/en/latest/ingress-routing>

[simulate-call]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/52.png "Simulate Call"
[payments-tab]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/53.png "Payments Tab" 

[carrier-alert-1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/54.png "Carrier Alert-1"
[carrier-alert-2]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/55.png "Carrier Alert-2"
[recalc]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/56.png "Recalc"
[edit-did]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/57.png "Edit-DID"
[customer-package]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/58.png "Customer-Package"
[customer-package1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/59.png "Customer-Package1"
[customer]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/60.png "customer"
[contacts]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/61.png "contacts"
[contacts-2]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/62.png "contacts-2"

[alert]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/alert.png "Alerts"
