# Alerts
**Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: Alerts**

Create **Alerts** to contact Customers when certain events are triggered. **Alerts** are a useful way to track transaction information, especially when your customer lists start to get full.  For example, the mechanism used to send Alerts when a customer's balance gets below a certain threshold can also be used to send Alerts when a specified usage parameter gets too high.  In a business pipeline, the recipient e-mail addresses are assigned to relevant department heads, so a process that would have required manual attention is automated. Since the threshold can be used to represent most numeric traits related to VoIP, it can form the foundation for efficient service operations.

!!! note "Global Alerts"
    Alerts may also be configured for specific Customers or Carriers under **Global :material-menu-right: Alerts**, which displays all configured Alerts.

## Create an Alert
To add a customized alert, click the **`+`** sign. 

Field details:

* **Company**: (only found under Global Alerts)Select the Customer or Carrier the Alert will track.
* **Title**: Must be unique as it is the alert's placeholder in the database.
* **Email/Phone**: Where the alert will be sent when triggered.
* **Area**: The aspect of business being monitored. Ex: a low balance alert for a given group of customers would fall under the "Balance" area.
* **Operator**: The operator tests whether a numeric value is greater than, less than, or equal to the value defined in Threshold below. Attached business values will determine how much weight is placed on each alert. Ex: "=" means "is equal to".
* **Threshold**: This is the triggering value in the alert sequence.  How your system responds to the value depends on which operator is used on it, but the alert itself will trigger whenever the governing conditions are true.
* **Reset Threshold**: A numeric value that works with the threshold to prevent alerts from continually firing unintentionally, which is necessary for values that fluctuate. The purpose is two-fold: to allow the threshold function to have a type of range instead of a concrete number; and to provide the alert system with automation for when a system returns to normal on its own.
* **Sample Period**: (only available for certain "Areas") Sample the data over a period of time and use that against the threshold to determine when to trigger the alert. 
* **Penalty**: The alert will Disable the Customer or Carrier for the selected duration of time. 
* **Template**: This will populate the Alert which is sent. (See [**Templates**](https://docs.connexcs.com/setup/config/templates/) under **Setup** > **Config** for details.)
* **Repeat**: How often the Alert will be resent. 

Click **`Save`**, and a new alert will be created.

## Sample Alerts

+ **"Low ASR Warning"** (Low ASR may indicate issues with call completion). This will email the customer with a custom template whenever their ASR reaches 30% or below. If it goes above 31% then the Alert is reset.

    ![alt text][alerts-sample1]

+ **ASR Penalty** Similarly, you could set the ASR Threshold to 15, and enable a penalty of 1 hour. This would disable the customer for 30 minutes whenever their completed calls dropped below 15% of total calls. 

    ![alt text][alerts-sample2]

+ **Daily Balance** For customers who run close to their balance on a regular basis. 

    ![alt text][alerts-sample3]

+ **Script Forge**  When the Area is set to "Script Forge", it will bypass all the other Alerts fields and allow you to select an existing Script Forge script. For example, a script could check CLIs to see if they have been blocked by a carrier, and then send a regular report with that information. 

Script Forge details can be found [**here**](https://docs.connexcs.com/developers/scriptforge/). 


## Test and Alert
`Feature In Progress`


[alerts-sample1]: /customer/img/alerts-sample1.png "Alert Sample 1"
[alerts-sample2]: /customer/img/alerts-sample2.png "Alert Sample 2"
[alerts-sample3]: /customer/img/alerts-sample3.png "Alert Sample 3"
