# ASR Per CLI Report

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Reporting & Analytics / ASR Per CLI Report<br> <strong>Audience</strong>: Administrators, Operations Teams, Support Teams, Billing Teams, Engineers<br> <strong>Difficulty</strong>: Intermediate<br> <strong>Time Required</strong>: Approximately 15–30 minutes<br> <strong>Prerequisites</strong>: Active ConnexCS account with Reports access; familiarity with CLI, ASR, call attempts, connected calls, and basic call reporting concepts.<br> <strong>Related Topics</strong>: <a href="https://docs.connexcs.com/report/">Reports</a>, <a href="https://docs.connexcs.com/report/#breakout">Breakout Report</a><br> <strong>Next Steps</strong>: Navigate to the ASR Per CLI report, specify the required date range, review ASR by CLI, and use the <strong>Columns</strong>, <strong>Filters</strong>, and <strong>Pivot Mode</strong> options to customize the report view.<br>

</details>

**Report :material-menu-right: ASR Per CLI**

## Overview

The **ASR Per CLI** report provides a view of **Answer-Seizure Ratio (ASR)** for individual **Calling Line Identification (CLI)** values.

It allows you to analyze call-answer performance at the CLI level and identify how different originating numbers are performing during a selected reporting period.

Select a date range to generate the report and review the **ASR %** and **Total** values associated with each CLI.

> **Note:** The report uses the selected date and time range when calculating the displayed ASR and call totals.

## Using the ASR Per CLI Report

1. Navigate to ****Reports :material-menu-right: ASR Per CLI****.

2. Select the required **date and time range**.

3. Click **Refresh** to generate the report using the selected date range.

4. Review the **CLI**, **ASR %**, and **Total** values.

5. Use the **Columns** panel to select the fields displayed in the report.

6. Use the **Filters** panel to refine the displayed data.

7. Enable **Pivot Mode** when additional grouping or aggregation of the report data is required.

<img src="/reports/img/asrpercli.png" style="border: 2px solid #4472C4; border-radius: 8px;">

## Report Columns

The **Columns** panel allows you to select which fields are displayed in the ASR Per CLI report.

| Column        | Description |
| ------------- | ----------- |
| **CLI**   | Calling Line Identification (CLI) associated with the calls|
| **ASR %**| Answer-Seizure Ratio expressed as a percentage for the associated CLI. It indicates the proportion of call attempts that resulted in an answered/connected call|
| **Total** | Total number of calls or call attempts included in the ASR calculation for the associated CLI|

The available columns can be selected or cleared from the **Columns** panel to customize the report presentation.

### Understanding ASR

**Answer-Seizure Ratio (ASR)** is a call performance metric used to indicate the percentage of call attempts that result in an answered call.

A higher ASR percentage indicates that a larger proportion of the call attempts associated with the CLI were answered, while a lower percentage indicates that fewer attempts resulted in an answered call.

The **ASR %** column allows you to compare call-answer performance across individual CLI values.

### Filters

The **Filters** panel allows you to refine the data displayed in the ASR Per CLI report by applying conditions to available fields.

Select a field in the **Filters** panel and choose the required filter condition. The available conditions depend on the type of data in the selected field.

#### Filter Conditions

| Condition                        | Description                                                                       |
| -------------------------------- | --------------------------------------------------------------------------------- |
| **Equals**                   | Displays only records where the field exactly matches the specified value.        |
| **Does not equal**           | Excludes records where the field matches the specified value.                     |
| **Less than**                | Displays records where the value is lower than the specified value.               |
| **Less than or equal to**    | Displays records where the value is less than or equal to the specified value.    |
| **Greater than**             | Displays records where the value is higher than the specified value.              |
| **Greater than or equal to** | Displays records where the value is greater than or equal to the specified value. |
| **Between**                  | Displays records where the value falls within the specified range.                |

!!! Example "Example"

    ```
    For the **\*\*ASR %\*\*** field:

   * **\*\*Equals \`50\`\*\*** — shows CLIs with an ASR of exactly 50%.

   * **\*\*Greater than \`50\`\*\*** — shows CLIs with an ASR greater than 50%.

   * **\*\*Less than or equal to \`50\`\*\*** — shows CLIs with an ASR of 50% or lower.
    ```

### Pivot Mode

The **Pivot Mode** option allows you to reorganize and aggregate report data for additional analysis.

Enable **Pivot Mode** from the report interface and configure the available fields through the **Columns** panel.

Pivot Mode can be used when you need to analyze the report using different grouping or aggregation dimensions rather than viewing each CLI as a simple list.

### Custom Settings

The **Custom Settings** panel provides options for adjusting the appearance and presentation of the ASR Per CLI report.

1. **Theme**: The **Theme** setting allows you to select the visual theme used for the report interface. Select a theme from the available options to change the appearance of the report grid.

2. **Row Height**: The **Row Height** setting controls the vertical spacing of rows in the report grid. Use the slider to increase or decrease the amount of information displayed vertically on the screen.

   * **Lower row height**: Displays more rows at once.

   * **Higher row height**: Provides more spacing between rows for easier readability.

Custom settings affect the presentation of the report and do not change the underlying report data.

## Refreshing the Report

Click **Refresh** after changing the date range or other report parameters to ensure the report reflects the current selections.

!!! info "Refreshing the ASR Per CLI Report"

    ```
    Remember to click **\*\*Refresh\*\*** each time parameters change to ensure you see the most recent selections onscreen.

    When refreshing the report, use the **Report Refresh** button rather than the browser refresh button.
    ```

## Use Cases

The ASR Per CLI report can be used to:

* Analyze **ASR** for individual CLI values.

* Identify CLIs with higher or lower call-answer performance.

* Review the total call activity associated with individual CLIs.

* Investigate changes in ASR over a selected date range.

* Compare ASR performance across different CLIs.

* Identify CLIs that may require further investigation based on their ASR.

* Filter the report to focus on specific ASR ranges or CLI values.

* Use **Pivot Mode** to perform additional grouping and analysis.
