# Alerts
**Alerts** provides a Global view of all **Alerts**. You can create alerts to track specific Customers or Carriers when certain events are triggered. 

!!! note "Customer and Carrier Alerts"
    Alerts may also be configured within specific Customers or Carriers. All configured Alerts will display under this Global view.

## Create an Alert
To add a customized alert, click the **`+`** sign. Field details:

* **Company**: Select the Customer or Carrier the Alert will track.
* **Title**: Must be unique as it is the alert's placeholder in the database.
* **Email/Phone**: Where the alert will be sent when triggered.
* **Area**: The aspect of business being monitored. Ex: a low balance alert for a given group of customers would fall under the "Balance" area.
* **Operator**: The operator tests whether a numeric value is greater than, less than, or equal to the value defined in Threshold below. Attached business values will determine how much weight is placed on each alert. Ex: "=" means "is equal to".
* **Threshold**: This is the triggering value in the alert sequence.  How your system responds to the value depends on which operator is used on it, but the alert itself will trigger as long as the governing conditions are true.
* **Reset Threshold**: A numeric value that works with the threshold to prevent alerts from continually firing unintentionally, which is necessary for values that fluctuate. The purpose is two-fold: to allow the threshold function to have a type of range instead of a concrete number; and to provide the alert system with automation for when a system returns to normal on its own.
* **Penalty**: The alert will Disable the Customer or Carrier for the selected duration of time. 
* **Template**: This will populate the Alert which is sent. (See [Templates](https://docs.connexcs.com/setup/config/templates/) under **Setup** > **Config** for details.)
* **Repeat**: How often the Alert will be resent. 

Click **`Save`**, and a new alert will be created.

![alt text][alert-global]


!!! info "Benefits of Alerts"
    **Alerts** are a useful way to track transaction information, especially when your customer lists start to get full.  For example, the mechanism used to send Alerts when a customer's balance gets below a certain threshold can also be used to send Alerts when a specified usage parameter gets too high.  In a business pipeline, the recipient e-mail addresses are assigned to relevant department heads, so a process that would have required manual attention is automated. Since the threshold can be used to represent most numeric traits related to VoIP, it can form the foundation for efficient service operations.

[alert-global]: misc/img/alert-global.png "Global Alerts"
