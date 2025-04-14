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

<img src= "/customer/alert_main.png">

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
* **Notice Level**: You can assign alert levels like **Warning** or **Error** for classifying and communicating the severity of events or conditions that require attention or action.

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

## Pushover Notifications

Pushover is an easy-to-use and reliable platform that allows you to deliver push alerts to your desktop computer, smartwatch, and mobile devices.

Even when you're not actively using your devices, it enables you to receive notifications and updates from a variety of applications and websites.

Well it’s good news..!!! You can integrate Pushover notifications with the ConnexCS system.

### Steps for Integration

1. Create an account on https://pushover.net/  and login to your account.
2. Install the Pushover app on your mobile devices and optionally the desktop app on your computer.
3. Click on **Pushover** on the top left.

<img src= "/customer/img/pushover1.png ">

4.Select the **Device**, **Sound**, and **Priority** of the notification.

5.**Title** and **URL** are optional fields. But do fill-out the **Message** field.

6.Click on **Send Notification**.

7.You will see the following message on the top **Your message has been queued for delivery**.

<img src= "/customer/img/pushover2.png ">

8.Received the message on https://client.pushover.net/ .

<img src= "/customer/img/pushover3.png ">

9.You now have Push message on the device.

10.Now, to integrate this with ConnexCS, copy the email under **Your E-Mail Aliases** which will be something like *******@pomail.net**.

11.Login to your ConnexCS account.

12.Navigate to Management :material-menu-right: Customer :material-menu-right: Customer [Name]:material-menu-right:Alert :material-menu-right: blue `+` sign.

13.Enter the **Title** and paste the *****@pomail.net (email) in the Email/Phone field. Fill out rest of the fields according to your alert requirement.

14.Click `Save`.

15.You will receive the pushover notification on your device.

<img src= "/customer/img/pushover4.png ">

[alerts-sample1]: /customer/img/alerts-sample1.png "Alert Sample 1"
[alerts-sample2]: /customer/img/alerts-sample2.png "Alert Sample 2"
[alerts-sample3]: /customer/img/alerts-sample3.png "Alert Sample 3"
