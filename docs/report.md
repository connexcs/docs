# Report

**Management :material-menu-right: Report**

View and Download **Reports** that provides extensive insights on historical data such as by Customers or Provider routes, [Dual-Tone Multi-Frequency (DTMF)](https://docs.connexcs.com/report/#dual-tone-multi-frequency) Cost, and [Per Number](https://docs.connexcs.com/report/#per-number) metrics.

The ability to [Schedule reports](https://docs.connexcs.com/report/#schedule-report) adds automation for frequent data requirements.  

!!! tip "Creating additional reports"
    The **Developer :material-menu-right: [Analytics](https://docs.connexcs.com/developers/analytics/)** section of ConnexCS lets providers to manage these reports and create new reports.

## Breakout

The **Breakout** report lists account customers with associated profits, and relevant data such as how much each customer costs, and the cost, the Answer-Seisure Ratio (ASR), and the Average Call Duration (ACD), etc.

The information here is from a processed CDR and considered as "billing accurate," meaning the billing for the customers uses this data.

+ Use the fields at the top of the page to filter by Customers and Providers, and by date range. Each individual column can also filter the grid directly.
+ Use the Columns and Filters to manage data presentation.
+ Enable Pivot Mode (check box at the top of Columns) to setup Row Groups and Values for additional report customization.

**Example**: Drag Provider and Provider Destination to Row Groups to see which routes a provider is using for your calls.

!!! info "Refreshing the Breakout Report"
    Remember to click **Refresh** each time parameters change to ensure you see the most recent selections onscreen.

    When refreshing the list (typically done after you revise the filtering parameters), use the Report Refresh and not the Browser refresh button.

## Dual Tone Multi Frequency

Use the **Dual Tone Multi Frequency (DTMF)** report for customers that send DTMF (for example, voice broadcast systems). This allows you to establish the cost-effectiveness of a route and the cost per DTMF digit.

## Reports

Presently, this provides the same functionality and options as the individual Breakout and DTMF reports. When new reports materialize, it will replace the old ones. This page has the same Pivot and Filtering functionality as the **Breakout** report.

## Per Number

This report displays metrics for a specific number. It's specifically useful if you get a complaint about people dialing a specific number.

Select the number and define the time (max 6 months) to generate a list of all calls for that number, along with call details.

Click **`Numbers`** to search for several numbers.

## Schedule Report

Set a Schedule to email the Breakout Report at designated intervals. To schedule a breakout report, click :material-plus:.

<img src="/reports/img/schedulereport.png" width= "500" style="border: 2px solid #4472C4; border-radius: 8px;">

+ **Name:** The report schedule.
+ **Email:** The report recipient.
+ **Frequency:** You can schedule the report; Daily, Weekly or Monthly.
+ **Group:** Select one or more ways to group the data.
+ **Customers**: Select one or more, or leave it blank for all Customers.
+ **Providers:** Select one or more, or leave it blank for all Providers.
+ **Columns:** Select the columns to include in the report.

Click **`Save`** to schedule the Report.

<img src= "/reports/img/schedulereport11.png" width ="500" style="border: 2px solid #4472C4; border-radius: 8px;">

## USA Rate Center

In the United States, different states (or regions) have varying call rates.
This report provides insights into the volume of calls originating from each rate center.
A rate center represents a specific geographic region for telecommunications billing and routing purposes.

The report gives information of the Prefix, Rate Center (region), Total Customer Charge, Total Provider Charge, and Total Calls.

<img src="/reports/img/usacenter.png" width= "1000" style="border: 2px solid #4472C4; border-radius: 8px;">

## USA Calls

This report provides a breakdown of total call minutes segmented into three categories:

1. **Intra (On-net) Calls**: Minutes for calls made within the same network or account.

2. **Inter (Off-net) Calls**: Minutes for calls made between different networks or accounts, but within the same country.

3. **International Calls**: Minutes for calls made across different countries.

The report helps carriers and customers separate traffic usage by regulatory category, providing clarity for billing, compliance, and routing optimization in the U.S.

Now lets go through the USA Calls report dashboard:

<img src="/reports/img/usacalls.png" width= "1000" style="border: 2px solid #4472C4; border-radius: 8px;">

1. **Type**: Select type of report as `State` or `LATA`.
   1. **State**: It determines regulatory jurisdiction (Intrastate vs. Interstate).
   2. **LATA (Local Access and Transport Area)**: Itdetermines carrier responsibility (local exchange vs. long-distance carrier).
2. **Select Customers**, **Select Providers** from the selector drop-down.
3. Use the date selector to define the specific date range for which the report should be generated.
4. The report consists the following key fields:
   1. **Intrastate**: Total number of calls placed within the same U.S. state (origin and destination are in the same state).
   2. **Interstate**: Total number of calls placed between different U.S. states (origin in one state, destination in another).
   3. **Indeterminate**: Total number of calls where the system cannot definitively classify the call as Intrastate or Interstate (e.g., missing or ambiguous caller/callee location data).
   4. **Intrastate_connected**: Number of successfully connected calls within the same state.
   5. **Interstate_connected**: Number of successfully connected calls between different states.
   6. **Indeterminate_connected**: Number of successfully connected calls where the call classification is unclear.
   7. **Intrastate_duration**: Total duration (in minutes or seconds, depending on system configuration) of connected Intrastate calls.
   8. **Interstate_duration**: Total duration of connected Interstate calls.
   9. **Indeterminate_duration**: Total duration of connected Indeterminate calls.