# Report
**Management :material-menu-right: Report**

View and download **Reports** which provide extensive insights on historical data such as by Customers or Provider routes, Dual-Tone Multi-Frequency (DTMF) Cost, and [Per Number](https://docs.connexcs.com/report/#per-number) metrics. The ability to Schedule reports adds automation for frequent data requirements.  

!!! tip "Creating additional reports"
    The **Developer :material-menu-right: [Analytics](https://docs.connexcs.com/developers/analytics/)** section of ConnexCS lets providers to manage these reports and create new reports.

## Breakout
The **Breakout** report lists account customers with associated profits, and relevant data such as how much each customer costs, how much they have been charged, Answer-Seisure Ratio (ASR) and Average Call Duration (ACD), etc. The information here is from processed CDR and considered "billing accurate", meaning this data is used to bill customers. 

+ Use the fields at the top of the page to filter by Customers and Providers, and by date range. Each individual column can also filter the grid directly. 
+ Use the Columns and Filters to manage data presentation. 
+ Enable Pivot Mode (check box at the top of Columns) to setup Row Groups and Values for additional report customization. 

Example: Drag Provider and Provider Destination to Row Groups to see which routes a provider is using for your calls. 

!!! info "Refreshing the Breakout Report"
    Remember to click **Refresh** each time parameters change to ensure you see the most recent selections onscreen. When refreshing the list (typically done after you modify the filtering parameters), use the Report Refresh and not the Browser refresh button. 
    
## DTMF
Use the **DTMF** report for customers that send DTMF (ex: voice broadcast systems). This allows you to establish cost effectiveness for a route, and the cost per DTMF digit. 

## Reports
Currently, this provides the same functionality and options as the individual Breakout and DTMF reports. Eventually, it will replace them when additional reports are added. This page has the same Pivot and Filtering functionality as the **Breakout** report. 

## Per Number
This report displays metrics for a specific number. It's particularly useful if you get a complaint about people dialing a specific number. Select the number and define the time frame (max 6 months) to generate a list of all calls for that number, along with call details. Click **`Numbers`** to search for multiple numbers. 

## Schedule Report
Set a Schedule to email the Breakout Report at designated intervals. To schedule a breakout report, click :material-plus:.

&emsp;![alt text][schedulereport]

+ **Name** the report schedule.
+ **Email**: The report recipient. 
+ **Group**: Select one or more ways to group the data.
+ **Customers**: Select one or more, or leave it blank for all Customers. 
+ **Providers**: Select one or more, or leave it blank for all Providers. 
+ **Columns**: Select the columns to include in the report. 

Click **`Save`** to schedule the Report. 

[schedulereport]: /reports/img/schedulereport1.png "Schedule Reports"
<!--stackedit_data:
eyJoaXN0b3J5IjpbMjA5NjY5MjkyM119
-->