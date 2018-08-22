# Table of Contents

- [Table of Contents](#table-of-contents)
- [Alerts](#alerts)
    
# Alerts
![alt text][carrier-alert-1]
The farthest to the right is the "Alerts" tab. It allows you to generate specific alerts to customers when certain events are triggered. The tab provides a list view of all alerts affecting a system, which can be selected to view management screens for their respective entries.

To add a customized alert, click the `+` sign.  The individual alert management screen will open, as it is below:

![alt text][carrier-alert-2]

**Fields**   
The following is an explanation of the fields shown in the alert managment window shown above:
* **Title** is a unique name for the alert.  As it is necessary to save the alert to database, it is the only required field.  It is a useful way to create placeholders for future alerts without having to fill out its parameters on the spot.
* **Area** reflects the area of business being monitored, which would be set up naturally when you sign on.  For example, a low balance alert for a given group of customers would fall under the "Balance" area.
used to 
* **Operator** represents the active function operator--e.g. "is equal to" shown by `= `--that is used to test the threshold.  Primarily, the operator tests whether a numeric value pased from a given function is greater than, less than, or equal to a value.  Attached business values will determine how much weight is placed on each alert.
* **Threshold** represents the triggering value in the alert sequence.  How your system responds to the value depends on which operator is used on it, but the alert itself will trigger as long as the governing conditions are true.
* **Reset Thresshold** as a numeric value that works with the threshold to prevent alerts from continually firing unintentionally, which is necessary for values that fluctuate. The purpose is two-fold: to allow the threshold function to have a type of range instead of a concrete number; and to provide the alert system with automation for when a system returns to normal on its own.
  
Click "Save" and a new alert will be created.

**Alerts** are a useful way to keep track of transaction information, especially when your customer lists start to get full.  For example, the same mechanic used to send alerts when a consumer's balance gets below a certain threshold can be used to send alerts when a specified usage parameter gets too high.  In a business pipeline, the recipient e-mail addresses are assigned to relevant department heads, so a process that would have equired manual attention is automated. As the threshold can be used to represent most numeric traits related VoIP-related, it can form at least part of the foundation for an operation based on efficient service.

[carrier-alert-1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/carrier-alert-1.png "Carrier Alert-1"
[carrier-alert-2]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/carrier-alert-2.png "Carrier Alert-2"
