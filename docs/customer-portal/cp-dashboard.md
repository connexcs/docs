# Dashboard

The **Customer Portal** provides access to configurations, real-time testing and stats, and more information about your account. The **Dashboard** provides an overview of Call Stats and Summaries.

## Top of Page Functions

![alt text][cp-dash]

+ **Checklist** A Quick view of the outstanding Alerts on the account. Upon initial setup, verification of email and mobile for the account made through Alerts, and a reminder is put across to create customers and setup carriers.

+ **Time Zone** Click on the Date/Time box to select the Time Zone for your site.

+ **Channel Count** Total Live Channels presently in use and total configured Channels.

+ **Account Balance** Displays the current account balance and a link to make a payment using a credit card or PayPal.

+ **Account** Use this to view your Company Profile, view and update your personal Profile, Change Password or Language, or Log Out.

## Graphs

Below is the Current Customer account usage on four default **Graphs**.

|Graph|Description |
|:------------|:-------------------------------------------------|
|**Live Channels** |Details of active channel usage|
|**ASR** |You can view Answer Seizure Ratio as a Total, or isolate traffic on a per-carrier basis (click on a customer to remove or add it from the graph); if some carriers are lower than others, this may create an issue|
|**ACD**|You can view the total average call duration or isolate traffic by carrier (click on a customer to remove or add it to the graph). A lower ACD on one carrier is indicative of potential line quality issues|
|**DTMF** |DTMF (Dual Tone Modulated Frequency) percentages|

## Summary

The Summaries of calls in Live (last 24 hours), Daily, and Monthly formats are all displayed in 24-hour UTC. This data updates hourly.

You can perform the following Functions with this data:

+ **Sum and Average:** Select several cells in a column to get the sum and average values (not a true average, but an average of averages).
+ **Export Data:** Select data from several columns and rows, then right-click to `Copy`, `Copy with Headers`, or `Export`.
+ **Generate Invoice:** Select one or more checkboxes under Action and then select **`Generate Invoice`** in the upper right corner. This will create the invoice based on the Summary time-frame (Daily, Weekly, Monthly). A billing system can then query the invoice.

!!! tip "Data used for billing"
     For billing purposes, consider the data found in the Customer Summary section as valid. Although the same information might be at other locations, you shouldn't use it for billing.

[cp-dash]: /customer-portal/img/cp-dash.png "Top of Page"

## Internal Number Block

Internal Number Block to define the range of numbers a Customer can use for setting up SIP Extensions.

### Why Define Internal Number Blocks?

Within each Account are multiple Customers, each will likely have more than one Contact.

SIP Extensions are unique for the Account, not for individual Customers.

Without defined Internal Number Blocks, there is the risk of a Contact attempting to use an extension that's already in use by another Customer or Contact.

With Internal Number Blocks defined, each Customer will have a predetermined list of Usernames to select for SIP Authentication.
