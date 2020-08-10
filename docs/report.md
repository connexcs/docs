# Reports
ConnexCS **Reports** provide extensive insights on historical data such as by Customers or Provider routes, DTMF Cost, and Per Number metrics. The ability to Schedule reports adds automation for frequent data requirements. View and download **Reports** under **Management** > **Report**.

## Breakout Report
The **Breakout** report allows you to filter the overall display by Customers and Providers, as well as by date range. Each individual column can also be filtered directly in the grid. 

!!! info "Refreshing the Breakout Report"
    When refreshing the list (typically done after modifying the filtering parameters), use the Report Refresh and not the Browser refresh button. 

### Select Multiples
Select multiple Customers, Providers, or Groups, by clicking more than one from the dropdown list when choosing which to display.  Remember to click the refresh button each time parameters change to ensure you see the most recent selections onscreen.

### Select the Range of Dates
To select a range of dates, enter a date and time in the first and second boxes.  Entering a single date will only display activity for that day.  After the range of dates is selected, click the **`OK`** button.
 
### Columns and Filters
This report is particularly useful if you take advantage of the Column and Filter slide-outs on the right. These allow you to group and drill down by Rows, Values, and so on. Ex: Drag Provider and Provider Destination to Row Groups to see which routes a provider is using for your calls. 

!!! note "Pivot Mode"
    Enable Pivot Mode (check box at the top of Columns) to swap columns and rows for additional report customization. 
    
## DTMF Report
Use the **DTMF** report for customers that send DTMF (ex: voice broadcast systems). This allows you to establish cost effectiveness for a route, and the cost per DTMF digit. 

## Reports
Currently this provides the same functionality and options as the individual Breakout and DTMF reports. Eventually they will be replaced by this page and additional reports will be added. 

## Per Number
This report displays metrics for a specific number. It is particularly useful if you get a complaint about people dialing a specific number. Select the number and define the time frame (max 6 months) to generate a list of all calls for that number, along with call details. 

## Schedule Reports
This feature emails the Breakout Report at designated intervals. To schedule a breakout report:

1. From the **Report** menu, select **Schedule Report**.
2. Click the **`+`** icon.

    ![alt text][schedulereport]

3. Enter the report Name and Email where the report will be sent, along with any other desired parameters. 
4. Click **`Save`**.


The **Scheduled Report** screen will update to show the new report. 

[schedulereport]: /reports/img/schedulereport1.png "Schedule Reports"
