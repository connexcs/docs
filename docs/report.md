# Report

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Reporting & Analytics / Standard Reports<br>
<strong>Audience</strong>: Administrators, Engineers, Billing & Product Teams<br>
<strong>Difficulty</strong>: Intermediate<br>
<strong>Time Required</strong>: Approximately 30–60 minutes<br>
<strong>Prerequisites</strong>: Active ConnexCS account with Reports access; familiarity with call metrics (ASR, ACD), traffic segmentation, and prefix/rate-center concepts.<br>
<strong>Related Topics</strong>: 
<a href="https://docs.connexcs.com/rate-card-building/">Rate Card Overview</a>,
<a href="https://docs.connexcs.com/customer/custom-reports/">Analytics & Custom Reports</a><br>
<strong>Next Steps</strong>: Navigate to the Report module, select the appropriate report type (e.g., Breakout, USA Calls, Per Number), apply filters (date range, customers, providers), generate the report, then use exports or schedule email delivery for continuous monitoring.<br>

</details>

**Management :material-menu-right: Report**

## Overview

The Reports section in ConnexCS provides comprehensive insights into system performance, customer profitability, and call routing efficiency.

This section includes various reporting tools that allow users to filter, analyze, and pivot data for better decision-making.

View and Download **Reports** that provides extensive insights on historical data such as by Customers or Provider routes, [Dual-Tone Multi-Frequency (DTMF)](https://docs.connexcs.com/report/#dual-tone-multi-frequency) Cost, and [Per Number](https://docs.connexcs.com/report/#per-number) metrics.

The ability to [Schedule reports](https://docs.connexcs.com/report/#schedule-report) adds automation for frequent data requirements.  

!!! tip "Creating additional reports"
    The **Developer :material-menu-right: [Analytics](https://docs.connexcs.com/developers/analytics/)** section of ConnexCS lets providers to manage these reports and create new reports.

## Breakout

The Breakout Report gives a detailed view of customer profitability and call metrics.

The **Breakout** report lists account customers with associated profits, and relevant data such as how much each customer costs, and the cost, the Answer-Seisure Ratio (ASR), and the Average Call Duration (ACD), etc.

The information here is from a processed CDR and considered as "billing accurate," meaning the billing for the customers uses this data.

+ Use the fields at the top of the page to filter by Customers and Providers, and by date range. Each individual column can also filter the grid directly.
+ Use the Columns and Filters to manage data presentation.
+ Enable Pivot Mode (check box at the top of Columns) to setup Row Groups and Values for additional report customization.

!!! Example
    Drag Provider and Provider Destination to Row Groups to see which routes a provider is using for your calls.

!!! info "Refreshing the Breakout Report"
    Remember to click **Refresh** each time parameters change to ensure you see the most recent selections onscreen.

    When refreshing the list (typically done after you revise the filtering parameters), use the Report Refresh and not the Browser refresh button.

### Key Features

+ Displays customer lists with details on profit, cost, and charges.
+ Provides cost breakdowns in USD and GBP.
+ Shows percentage profit margins per customer.
+ Includes connected call attempts, duration, and DTMF (Dual-Tone Multi-Frequency) usage.
+ Displays ASR (Answer-Seizure Ratio) statistics.
+ Filter options to view specific customers (e.g., SkyCore).
+ Expandable reports to display different carrier details.
+ Ability to segment information per destination.
+ Option to view provider-specific routing details.
+ Enables analysis of carrier usage per destination.
+ Offers insights into call routing, including distinctions between different UK mobile carriers (e.g., O2, Orange, T-Mobile, Vodafone).
+ Supports data analysis over the last 7 days.
+ Billing Accuracy: Can be used for billing calculations.

### Benefits

+ Helps in identifying profitability per customer.
+ Provides granular visibility into call routing and carrier distribution.
+ Enables better cost management by optimizing carrier selection.

## Per Number

This report is used to analyze metrics specific phone numbers over a selected period.

It's specifically useful if you get a complaint about people dialing a specific number.

Select the number and define the time (max 6 months) to generate a list of all calls for that number, along with call details.

Click **`Numbers`** to search for several numbers.

**Key Features**:

+ Search and filter calls based on a specific phone number.
+ Provides call statistics for the searched number.
+ Search by CLI (Caller Line Identification) or destination number.
+ Works with DID Reports for analyzing number-level data.
+ Supports bulk number search.

**Key Benefits**:

+ Helps troubleshoot individual number call performance.
+ Enables quick lookup for call analytics.
+ Useful for debugging call delivery issues.

## Dual Tone Multi Frequency

Use the **Dual Tone Multi Frequency (DTMF)** report for customers that send DTMF (for example, voice broadcast systems).

This allows you to establish the cost-effectiveness of a route and the cost per DTMF digit including efficiency of calls using DTMF signals.

**Key Features**:

+ Displays time-segmented DTMF data.
+ Compares cost per call with DTMF.
+ Identifies cost variations across different carriers
+ Highlights carriers not delivering all DTMF messages.
+ Enables route optimization by selecting cost-effective carriers.

**Key Benefits**:

+ Essential for call centers using DTMF-heavy workflows.
+ Helps optimize carrier selection for cost savings.
+ Enhances call routing efficiency.

## Schedule Report

The Scheduled Report feature automates report generation and delivery.

You can set a `Schedule` to email the Breakout Report at designated intervals.

**Key Features**:

+ Allows users to define report parameters.
+ Customizable grouping options.
+ Supports selecting specific customers or all customers.
+ Offers customization of report columns.
+ Delivers reports via email at daily, weekly, or monthly intervals.
+ Format similar to the Breakout Report.

**Key Benefits**:

+ Automates reporting for efficiency.
+ Ensures regular monitoring without manual effort.
+ Helps in tracking business performance over time.

### Steps to Schedule the Report

To schedule a breakout report, click :material-plus:.

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
      1. **State**: Calls rated based on the state where they originate or terminate.
      2. **LATA (Local Access and Transport Area)**: Calls rated based on Local Access and Transport Area boundaries.
2. **Select Customers**, **Select Providers** from the selector drop-down.
3. Use the **date selector** to define the specific date range for which the report should be generated.
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
