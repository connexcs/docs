# Report

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

&emsp;![alt text][schedulereport]

+ **Name:** The report schedule.
+ **Email:** The report recipient.
+ **Frequency:** You can schedule the report; Daily, Weekly or Monthly.
+ **Group:** Select one or more ways to group the data.
+ **Customers**: Select one or more, or leave it blank for all Customers.
+ **Providers:** Select one or more, or leave it blank for all Providers.
+ **Columns:** Select the columns to include in the report.

Click **`Save`** to schedule the Report.

[schedulereport]: /reports/img/schedulereport1.png "Schedule Reports"
