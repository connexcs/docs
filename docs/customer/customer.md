# Customers

In Connex, Customers are managed through customer cards. Each card has tabs that hold different management options, which we will explain below.  

Customer Management is found in the **Management** tab, the four horizontal lines beneath the **Home** icon in the dashboard:

![alt text][customer-dashboard]


### Managing Customers
From the **Customers** board, you can perform several management operations. 

#### View Modification
* **Columns** popout on the right allows you to add/remove options, change column order, in some cases you can create row groups and aggregate values for pivot functionality
* **Filters** popout on the right allows you to filter your customers

#### Bulk Customer Modifications
* Bulk upload to add multiple customers at a time
* Bulk edit to modify fields such as Channels, Status, Flow Speed (CPS), and so on

#### Send Email & SMS
ConnexCS comes with Email and SMS included for your customers.
1. Select multiple customers using the tickbox selector on the left side of each row.
2. Click on "Send" at the top right then choose email or SMS.
3. Fill in Subject line and body details and send. 
   * Emails are sent FROM the email address populated in Setup > Settings, and TO every email address listed under Contacts for each customer. 
   * SMS are sent to the Mobile number in each Contact. 

!!! note "Custom Email Servers."
    You can change the Email Server and SMS. Settings from Setup > Settings. 


### Adding Customers
The following explains how to add new customers using the **Customer Management** screen:

1. Click the  **`+`** button.

![alt text][add-Customer-new]

2. Enter the relevant details in each text box.
3. Click the **`Save`** button.

![alt text][add-Customer]

The following is a descrtption of each entry found in the customer window:

* **Customer Name:** - A name or unique identifier for each customer.
* **Paypal Email:** The email address associated witht he customer's PayPal account. (This is releveant when using the IPN API. Customer can make payments directly through PayPal instead of using the Customer Portal.) 
* **Website:** The customer's website address.
* **Status:** The customer's status, i.e.:

  *  Active : The customer is active and allowed to pass calls. 
  *  Inactive: The account is disabled, and 
  *  Pending Approval: New signups will be listed as pending approval.  The customer cannot pass calls or become active until this phase is completed. 

* **Debit Limit:**  Sets the debit limit for postpay customers.
* **Minimum Payment:** Set the minimum payment to keep accounts active. 
* **Tax:**  Tax is added as a percentage that is charged on top of costs.
* **Currency:** Select the currency from the dropdown menu. Note that you wont be able to change the account currency once the account is created.
* **Portal Access:**  Users can turn **Portal Access** to yes(on) or no(off).  Selecting 'no' will restrict user access to the Customer Portal. Since ereyone uses the portal at this time, this should alayws be set to 'yes'. 
* **Address:** Complete the customer's physical address, not to be confused with email addresses.

### Delete Customers

You can delete customers from the list by selecting them and pressing the **Delete** button.

![alt text][del-customer]

### Checking Customer Status

You can also check and filter **Customers** by status:

1.	Click the button to the right of the trash bin labeled  **`Active`**.
2.	Select a filter option from the drop-down menu.
3.	Results on the page will automatically arrange themselves according to the filter.

![alt text][customer-status]

### Searching Customers

Search for **Customer** information by adding a query in the **Search** text field and clicking the search icon or pressing **`Enter`**.

### Editing Customers

Access the Customer Card by clicking their name in the customer list, then **Edit Customer**. The screen that opens is the same as the New Customer screen, with infomration already populated. Edit any field then click **`Save`**. For all field details, see **[Adding Customers](../customer/#adding-customers)**. Some specific details are below: 

**Basic** tab

+ Status: For more information on Penalty, see **[Alerts](../customer/alerts.md)**

**Config** tab

+ TOML: This is a data storage mechanism for configuration. Similar to INI files, you can create advanced customization to set values, etc, for script forge to reference later. 

**Verification** tab

+ Select **Email Verification** and/or **Mobile Verification** to force the customer to go to the portal for verification. (This is important to select when you create a customer manually.) If the customer doesn't verify these, they won't be able to dial. 
+ Select **Approved CLI's Only** to force the customer to log into the Portal and enter their CLI number. This generates a test call with a code which the customer enters into the portal. Once complete, their CLI will be added to the system. 

!!! attention
    Mobile messages will be sent globally, but there are some reports of issues with SMS being delivered to numbers in India. These messages are sent on the Twilio network, so whatever they deliver ConnexCS will deliver. 

## Customer Cards
Open a Customer Card by clicking their name from the Customer Managment screen.  The following sections detail the tabs lined up on the left side of the customer card, starting at the top.

### Main
The top of the **Main** tab displays a summary of the Status, Balance, Debit Limit, and Current in use Channels. From here you can manage contacts, block internal numbers, and view call summaries.

#### Contacts
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
    DO NOT save passwords in either of the notes field in the Cotact Details.

![alt text][contacts-2]
![alt text][main-tab]
!!! note 
    Check in the Customer Details to confirm the Mobile and Email have been verified. You can modify these in the contact or the customer can do this in the Customer Portal. 

To reset a Contact password:

1. Click the small **`key`** icon to the right of the Contact
2. Select to "Auto Generate & Email Password" or enter it manually
3. Save

#### Internal Number Block
Used to assign internal customer number ranges which can be used for fuctions such as SIP authentication

1. Click **`+`** button
2. Number block will be assigned

!!! note 
    The Number Range Parameters must be defined before an Internal Number Block can be assigned. 

#### Summary
The Summaries of calls in Live, Daily, and Monthly Formats, are all displayed in 24-hour UTC. There are several functions that can be performed with this data. 
+ Select multiple cells in a column to get sum and average values (not a true average, but an avergage of averages)
+ Select data from multiple columns and rows, then right click to **`Copy`**, **`Copy wth Headers`**, and **`Export`**
+ Check the box under the Action column then select **`Generate Invoice`** in the upper right corner. This will create the invoice which can then be queried by a billing system. 
+ Select **View Audit Log** to see when the customer was created and view any modifications that have been made to the account. (View Difference displays data in JSON format.)


### Authentication

Under the authentication tab, labeled **Auth**,  users can choose between IP or User/Password Authentication.

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

### Routing

#### Ingress Routing

With **Ingress Routing**, you can assign a Customer Rate Card to a customer account. To set up ingress routing:

1.	Click on the **`+`** button.
2.	Select the customer card and fill in the relevant details.
3.	Press **`Save`**.

The details of the dialogue box can be seen in the image below:

![alt text][ingress-routing-tab]

See our [Ingress Routing] page in these for more in-depth information.

#### Call Recording
To enable call recording:
1. Click **Management** > **Customer**.
2. Click the **Customer Name** > **Routing** > **Proxy Info**.
3. Click the rate card name, and then select **Enable** from Recording.

![alt text][recording-1]

4. Recorded files are accessed from the file section
5. Select **Management** > **File** > **Recording**.
6. Click the **`Download`** button to download the file.

![alt text][recording-2]

#### CLI

CLI / ANI is the From part of the SIP INVITE message and contains the information about who the call was placed from, more specifically we are referring to the number that is presented to have sent the call. 
The detailed functions are explained on [CLI]

1.	Click on the **`+`** button.
2.	Fill out the details in the dialogue box.
3.	Press **`Save`**.

Details of the dialogue box can be seen below:

![alt text][edit-cli]


### Stats

In the **Stats** tab, you can view items such as Channels, Calls Per Second (CPS), ACD, ASR, Attempts, Codes, PDD, and filter them by day or month.

### Latest Calls

Here you can check the **latest call** from this tab, look up calls and refresh the list of simulated calls.
For simulating the call: 

1.	Click on the **Simulate** button.
2.	Popup will appear.
3.	Fill out the details of the dialogue box like **Dialed Number, CLI/ANI, Switch IP** etc., as mentioned in the image below:
4.	Finally press **Simulate** button.

![alt text][simulate-call]

### Dialogs

The **Dialogs** tab shows the active calls on the account so you can easily see active calls with one click.

### Payments 

In this tab, you can make a list of all the **payments** that have been made so far and you can also add new payments by:

1.	Click on the **'+'** button.
2.	Fill out the dialogue box as shown in the image below. Add the Description of the payment, the total amount in digits and finally        select the status of it whether it’s Completed, Pending or Cancelled.
3.	Finally press the **Save** button.

![alt text][payments-tab]

### DID

You can assign **DID** in an account by following these steps:

1.	Click on the **‘+’** button which is at the extreme right of the page.
2.	Popup will appear. Add DID name, set the Destination; select the Provider name, Provider Card, Customer name and Customer Card from the dropdown menu options respectively; Cost in digits and Retail as shown in the image below:
3.	And Press **Save** button.

![alt text][edit-did]

### Call Detail Record (CDR)

The **CDR** tab shows a listing of Call Detail Records associated with the selected account.  Selecting the entries will display more detailed information, and pressing the **`download CDR`** buttton will save the record to your hard drive.

#### Recalculate CDR

To recalculate long-duration calls that timed out:

1.	Click the **`Recalc CDR`** button.
2.	Fill the dialogue box. Here you can select the day, maximum duration:

   ![alt text][recalc]

3.	Click **`Save`**.

### Packages

To add customer packages and quantities:

1.	Click the **`+`** button.
2.	Fill in the dialogue box with relevant details.  Checking **Auto Decrement** will debit the package amount from the customer account depending on the quantity.
3.	Click the **`Save`** button.

![alt text][customer-package]

To choose package duration, quantity, cost, and frequency, click the drop down arrow in the Package box. 

![alt text][customer-package1]

### Invoices

The **Invoices** tab displays a record of invoices sent to the account. Clicking the entries will display more detailed information.

### Contracts
 
 The **Contracts** tab shows a listing of provider contracts associated with the active customer account. Select the records by clicking their names to see more details.


[customer-dashboard]: /customer/img/33.png "Customer-Dashboard"
[add-customer-new]: /customer/img/34.png "Add-Customer"
[add-customer]: /customer/img/35.png "Add-Customer"

[del-customer]: /customer/img/36.png "del-customer"
[customer-status]: /customer/img/39.png "Customer-Status"
[edit-customer]: /customer/img/40.png "Edit-Customer"

[main-tab]: /customer/img/41.png "Main Tab"
[stats-tab]: /customer/img/42.png "Stats Tab"
[routing-tab]:  /customer/img/43.png "Routing Tab"
[ingress-routing-tab]: /customer/img/44.png "Ingress Routing Tab"


[recording-1]: /customer/img/45.png "recording-1"
[recording-2]: /customer/img/46.png "recording-2"

 
[edit-cli]: /customer/img/47.png "Edit CLI"
[auth]: /customer/img/48.png "Auth"
[edit-switch-basic]: /customer/img/49.png "Edit Switch Basic"
[edit-switch-advance]: /customer/img/50.png "Edit Switch Advance"
[user-pwd-auth]: /customer/img/51.png "User Pwd Auth"

[CLI]: <https://docs.connexcs.com/en/latest/cli>
[Ingress Routing]: <https://docs.connexcs.com/en/latest/ingress-routing>

[simulate-call]: /customer/img/52.png "Simulate Call"
[payments-tab]: /customer/img/53.png "Payments Tab" 

[recalc]: /customer/img/56.png "Recalc"
[edit-did]: /customer/img/57.png "Edit-DID"
[customer-package]: /customer/img/58.png "Customer-Package"
[customer-package1]: /customer/img/59.png "Customer-Package1"
[customer]: /customer/img/60.png "customer"
[contacts]: /customer/img/61.png "contacts"
[contacts-2]: /customer/img/62.png "contacts-2"
