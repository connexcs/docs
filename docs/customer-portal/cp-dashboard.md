# Dashboard
The **Customer Portal** provides access to configurations, real-time testing and stats, and additional information about your account. The **Dashboard** provides an overview of Call Stats and Summaries.

## Top of Page Functions
![alt text][cp-dash]

**Checklist** Quick view of outstanding Alerts on the account which need to be addressed. Upon initial setup, there will be Alerts to verify email and mobile for the account, as well as reminder to create your customers, setup carriers, and so on. 

**Time Zone** Click on the Date/Time box to select the Time Zone for your site. 

**Channel Count** Total Live Channels currently in use and total configured Channels.

**Account Balance** Displays the current account balance and a link to make a payment using a credit card or PayPal. 

**Account** Use this to View your Company Profile, view and update your personal Profile, Change Password or Language, or Log Out.


!!! warning "Account Balance functions"
    The "Click to Make Payment" link is currently in development. Please navigate to **Payment** on the left-hand menu for this functionality. 


## Graphs
There are four default **Graphs** which display current Customer account usage. 

|Graph|Description |
|:------------|:-------------------------------------------------|
|Live Channels |Details active channel usage|
|ASR |Answer Seizure Ratio can be viewed as a Total, or you can isolate traffic on a per carrier basis (click on a customer to remove/add it from the graph); if some carriers are lower than others this may indicate an issue|
|ACD|Average Call Duration can be viewed as a Total, or you can isolate traffic on a per carrier basis (click on a customer to remove/add it from the graph); A lower ACD on one carrier is indicative of potential line quality issues|
|DTMF |DTMF (Dual Tone Modulated Frequency) percentages|

## Summary 
The Summaries of calls in Live (last 24 hours), Daily, and Monthly formats, are all displayed in 24-hour UTC. This data updates hourly. 

Functions that can be performed with this data:

+ **Sum and Average**: Select multiple cells in a column to get sum and average values (not a true average, but an average of averages)
+ **Export Data**: Select data from multiple columns and rows, then right click to `Copy`, `Copy with Headers`, or `Export`.
+ **Generate Invoice**: Check one or more boxes under Action then select **`Generate Invoice`** in the upper right corner. This will create the invoice based on the Summary time frame (Daily, Weekly, Monthly) which can then be queried by a billing system.  

!!! tip "Data used for billing"
    The data found in the Customer Summary section is considered valid for billing purposes. The same data may be found in other areas but should not be used for billing.

[cp-dash]: /customer-portal/img/cp-dash.png "Top of Page"
