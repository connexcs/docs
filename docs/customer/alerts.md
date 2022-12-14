# Alerts

**Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: Alerts**

Create **Alerts** to contact customers when specific occurrences occur.

**Alerts** are a useful way to track transaction information, mainly when your customer lists fill up.

For example, the mechanism used to send Alerts when a customer's balance gets below a certain threshold. To send Alerts when a specified usage parameter gets too high.

Assigning the recipient's e-mail address to the relevant department heads in a business pipeline automates a procedure that would require manual attention.

Since the threshold represents the most numeric traits related to VoIP, it can form the foundation for efficient service operations.

!!! note "Global Alerts"
    You can also configure Alerts for specific Customers or Carriers under **Global :material-menu-right: Alerts**, which displays all configured Alerts.

## Create an Alert

To add a customized alert, click :material-plus:.

Field details:

* **Company**: (Found only under Global Alerts) Select the Customer or Carrier that the Alert will track.
* **Title**: Must be unique as it's the alert's placeholder in the database.
* **Email/Phone**: Specify where to send the alert when triggered.
* **Area**: Monitoring the aspect of business.
For example, a low balance alert for a given group of customers would fall under the "Balance" area.
* **Operator**: The operator tests whether a numeric value is greater than, less than, or equal to the value defined in the Threshold below.
The Attached business values will determine the amount of weight placed on each alert.
For example, "=" means "is equal to."
* **Threshold**: This is the triggering value in the alert sequence.  
  How your system responds to the value depends on the operator used, but the alert itself will trigger whenever the governing conditions are true.
* **Reset Threshold**: A numeric value that works with the threshold to prevent alerts from triggering continuously and accidentally, which is necessary for values that fluctuate.  
  **The purpose is two-fold:** to allow the threshold function to have a range type instead of a concrete number; and to provide the alert system with automation when a system returns to usual on its own.
* **Sample Period**: (**available only for certain "Areas"**) Sample the data over a period of time and use that against the threshold to determine when to trigger the alert.
* **Penalty**: The alert will Disable the Customer or Carrier for the selected duration of time.
* **Template**: This will populate the sent Alert. (See **Setup :material-menu-right: Config** :material-menu-right: [**Templates**](https://docs.connexcs.com/setup/config/templates/) for details.)
* **Repeat**: How often to resend the Alert.

Click **`Save`**, and it creates a new alert.

## Sample Alerts

**"Low ASR Warning"** (Low ASR may show issues with call completion).

This will email the customer with a custom template, whenever their ASR (Answer Seizure Ratio) reaches 30% or below.

If it goes above 31%, then the Alert is reset.

&emsp;![alt text][alerts-sample1]

**ASR Penalty** Similarly, you could set the ASR Threshold to 15, and enable a penalty of 1 hour. This would disable the customer for 1 hour whenever their completed calls drop below 15% of total calls.

&emsp;![alt text][alerts-sample2]

**Daily Balance** For customers who run close to their balance on a regular basis.

&emsp;![alt text][alerts-sample3]

**Script Forge**  When you set the Area to "Script Forge," it will bypass all the other Alerts fields and allow you to select an existing Script Forge script.

For example, a script could check locked CLIs by a carrier and then send a regular report with that information.

[**Click here**](https://docs.connexcs.com/developers/scriptforge/) for details on Script Forge.

## Test and Alert

You can test the created alert under a specific customer.

You can receive alert messages in e-mails or via SMS.

[alerts-sample1]: /customer/img/alerts-sample1.png "Alert Sample 1"
[alerts-sample2]: /customer/img/alerts-sample2.png "Alert Sample 2"
[alerts-sample3]: /customer/img/alerts-sample3.png "Alert Sample 3"
<!--stackedit_data:
eyJoaXN0b3J5IjpbNDgwMDM1NjExXX0=
-->