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

**Report**

## Overview

The **Report** section provides comprehensive insights into historical call data, network performance, routing efficiency, and operational activities. It enables users to monitor trends, analyze call statistics, evaluate performance, and gain better visibility into their operations.

Reports can be viewed, analyzed, and downloaded to support day-to-day monitoring and data-driven decision-making.

## Key Features

* **Historical Data Analysis**: Analyze historical data to identify trends, patterns, and changes over time.
* **Detailed Reporting**: Access detailed reports across different operational and performance metrics.
* **Performance Insights**: Review call and network performance to identify potential issues and areas for improvement.
* **Data Filtering**: Refine report data to focus on specific information and reporting requirements.
* **Report Downloads**: View and download report data for further analysis or record keeping.
* **Scheduled Reports**: Configure reports to run automatically at defined intervals and receive recurring reports without manually generating them.
* **Multiple Report Views**: Use different reporting views to analyze operational data from different perspectives.

## Schedule Report

**Schedule Report** allows users to automate the generation of reports based on a defined schedule. Instead of manually running the same report repeatedly, users can configure a report to run automatically at the required frequency.

Scheduled reports are useful for recurring operational reviews, regular performance monitoring, and routine data distribution. This helps ensure that required reports are generated consistently and are available when needed.

## Benefits

* **Improved Visibility**: Gain a clearer understanding of historical and operational data.
* **Faster Analysis**: Quickly access the information required to investigate trends and performance.
* **Better Decision-Making**: Use data-driven insights to support operational and business decisions.
* **Reduced Manual Effort**: Automate recurring reporting requirements with scheduled reports.
* **Consistent Reporting**: Maintain a regular reporting cycle without manually generating each report.
* **Operational Monitoring**: Identify trends and potential issues through regular analysis.
* **Centralized Reporting**: Access multiple reporting capabilities from a single location.

<img src="/reports/img/newreport1.png" style="border: 2px solid #4472C4; border-radius: 8px;">


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