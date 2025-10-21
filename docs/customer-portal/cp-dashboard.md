# Dashboard

The **Customer Portal** provides access to configurations, real-time testing and stats, and more information about your account.

The Dashboard provides a real-time overview of `Balance`, `Channels`, and key system metrics. It includes interactive elements for monitoring traffic, analyzing trends, and customizing data displays.

## Overview

+ Displays a summary of Live Channels, Active Customers, Carriers, and Rate Cards.
+ Quick access to essential functions.
+ For detailed account activities, use the Menu System on the left.

## Top of Page Functions

![alt text][cp-dash]

+ **Checklist** A Quick view of the outstanding Alerts on the account. Upon initial setup, verification of email and mobile for the account made through Alerts, and a reminder is put across to create customers and setup carriers.

+ **Time Zone** Click on the Date/Time box to select the Time Zone for your site.

+ **Channel Count** Total Live Channels presently in use and total configured Channels.

+ **Balance** Displays the current account balance and a link to make a payment using a credit card or PayPal. [Click here](https://docs.connexcs.com/customer-portal/cp-payment/) to know more about **Payments**.

+ **Account** Use this to view your Company Profile, view and update your personal Profile, Change Password or Language, or Log Out.

### Setup Personal Profile

To setup, click your name in the upper right corner and select `My Profile`.

View account details such as Name, Role, Email, Department, Phone, Mobile and Skype.

You can only edit the Name, Phone, Mobile, Skype fields. To change email or name, contact ConnexCS Support.

**Two Factor Authentication**: This adds additional security against password guessing and theft, including brute force attacks (details [**here**](https://www.ncsc.gov.uk/guidance/multi-factor-authentication-online-services)).

To configure this on ConnexCS, click `Enable` and follow prompts for QR code. You must install a 2FA/TFA app on your phone.

<img src= "/customer-portal/img/profile.png" width= "500" style="border: 2px solid #4472C4; border-radius: 8px;">

## Graphs

Below is the Current Customer account usage on four default **Graphs**.

|Graph|Description |
|:----|:-----------|
|**Live Channels**|Details of active channel usage. Diaplays the number of active channels in real time through a Graph. Option to view the maximum channel value across all servers.|
|**ASR**|You can view Answer Seizure Ratio as a Total, or isolate traffic on a per-carrier basis. If some carriers are lower than others, this may create an issue|
|**ACD**|You can view the total average call duration or isolate traffic by carrier, A lower ACD on one carrier is indicative of potential line quality issues|
|**DTMF**|DTMF (Dual Tone Modulated Frequency) percentages|

## Summary

The Summaries of calls in Live (last 24 hours), Daily, and Monthly formats are all displayed in 24-hour UTC. This data updates hourly.

You can perform the following Functions with this data:

+ **Sum and Average:** Select several cells in a column to get the sum and average values (not a true average, but an average of averages).
+ **Export Data:** Select data from several columns and rows, then right-click to `Copy`, `Copy with Headers`, or `Export`.

!!! tip "Data used for billing"
     For billing purposes, consider the data found in the Customer Summary section as valid. Although the same information might be at other locations, you shouldn't use it for billing.

[cp-dash]: /customer-portal/img/cp-dash.png "Top of Page"

## Internal Number Block

Internal Number Block to define the range of numbers a Customer can use for setting up SIP Extensions.

Without defined Internal Number Blocks, there is the risk of a Contact attempting to use an extension that's already in use by another Customer or Contact.

With Internal Number Blocks defined, each Customer will have a predetermined list of Usernames to select for SIP Authentication.
