# Dashboard
The **Dashboard** for the Customer Portal also serves as the landing page. 

## Top of Page Functions
![alt text][cp-dash]

**Checklist** Quick view of outstanding Alerts on the account which should be addressed. Upon initial setup, there will be Alerts to verify email and mobile for the account, as well as reminder to create your customers, setup carriers, and so on. 

**Time Zone** Click on the Date/Time box to select the Time Zone for your site. 

**Channel Count** Total Live Channels currently in use and total configured Channels.

**Account Balance** Displays the current account balance and a link to make a payment using a credit card or PayPal. 

**Account** Use this to update your Profile, Change Password or Language, or Log Out.

**Documentation** TBD.

## Graphs
There are four default **Graphs** which display current Customer account usage. 

|Graph|Description |
|:------------|:-------------------------------------------------|
|Live Channels |Details active channel usage|
|ASR |Answer Seizure Ratio can be viewed as a Total, or you can isolate traffic on a per carrier basis (click on a customer to remove/add it from the graph); if some carriers are lower than others this may indicate an issue|
|ACD|Average Call Duration can be viewed as a Total, or you can isolate traffic on a per carrier basis (click on a customer to remove/add it from the graph); if ACD is lower on one carrier, that is indicative of potential line quality issues|
|DTMF |DTMF (Dual Tone Modulated Frequency) percentages|

## Summary 
The Summaries of calls in Live (last 24 hours), Daily, and Monthly formats, are all displayed in 24-hour UTC. This data is updated hourly. 

There are several functions that can be performed with this data:

+ **Sum and Average**: Select multiple cells in a column to get sum and average values (not a true average, but an average of averages)
+ **Export Data**: Select data from multiple columns and rows, then right click to `Copy`, `Copy with Headers`, or `Export`.
+ **Generate Invoice**: Check one or more boxes under Action then select **`Generate Invoice`** in the upper right corner. This will create the invoice based on the Summary time frame (Daily, Weekly, Monthly) which can then be queried by a billing system.  

!!! tip "Data used for billing"
    The data found in the Customer Summary section is considered valid for billing purposes. The same data may be found in other parts of the system but should not be used for billing.

!!! tip "Managing Graphs displayed on Dashboard"
    All graphs are managed using the [**Analytics**](/developers/analytics/) section.


[cp-dash]: /customer-portal/img/cp-dash.png "Top of Page"
