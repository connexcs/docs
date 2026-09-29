# USA Rate Center

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Reporting & Analytics / USA Rate Center<br> <strong>Audience</strong>: Administrators, Billing Teams, Operations Teams, Routing Teams, Engineers<br> <strong>Difficulty</strong>: Intermediate<br> <strong>Time Required</strong>: Approximately 15–30 minutes<br> <strong>Prerequisites</strong>: Active ConnexCS account with Reports access; familiarity with US telephone prefixes, rate centers, customer charges, provider charges, and call volume.<br> <strong>Related Topics</strong>: <a href="https://docs.connexcs.com/report/">Reports</a>, <a href="https://docs.connexcs.com/report/#breakout">Breakout Report</a>, Rate Card Management<br> <strong>Next Steps</strong>: Navigate to <strong>Reports :material-menu-right: USA Rate Center</strong>, select the required date range, review rate-center activity, and use the <strong>Columns</strong> and <strong>Filters</strong> panels to refine the displayed results.<br>

</details>

**Report :material-menu-right: USA Rate Center**

## Overview

In the United States, different states and regions can have varying call rates. The ****USA Rate Center**** report provides insights into the volume of calls associated with each rate center.

A **rate center** represents a specific geographic region used for telecommunications billing and routing purposes.

The report provides information about the telephone ****Prefix****, associated ****Rate Center****, customer charges, provider charges, and call volume.

## Using the USA Rate Center Report

1. Navigate to **Reports :material-menu-right: USA Rate Center**.

2. Select the required **date and time range**.

3. Click **Refresh** to generate the report using the selected date range.

4. Review the results by **Prefix** and **Rate Center**.

5. Review the associated **Total Customer Charge**, **Total Provider Charge**, and **Total Calls**.

6. Use the **Columns** and **Filters** panels to customize and refine the displayed results.

<img src="/reports/img/usaratecenter.png" style="border: 2px solid #4472C4; border-radius: 8px;">

## Report Columns

The **Columns** panel allows you to select which fields are displayed in the report.

| Column | Description |
| -------|-------------|
| **Prefix**| Telephone number prefix associated with the call traffic|
| **Rate Center** | Geographic region associated with the telephone prefix for telecommunications billing and routing purposes|
| **Total Customer Charge** | Total amount charged to the customer for calls associated with the prefix and rate center|
| **Total Provider Charge**| Total amount charged by the provider for calls associated with the prefix and rate center|
| **Total Calls**| Total number of calls associated with the prefix and rate center|

## Filters

The **Filters** panel allows you to refine the data displayed in the USA Rate Center report.

Filters can be applied to available report fields, including:

* **Prefix**
* **Rate Center**
* **Total Customer Charge**
* **Total Provider Charge**
* **Total Calls**

Select a field in the ****Filters**** panel and choose the required filter condition.

### Filter Conditions

| Condition                    | Description                                                                       |
| -----------------------------| --------------------------------------------------------------------------------- |
| **Equals**                   | Displays only records where the field exactly matches the specified value.        |
| **Does not equal**           | Excludes records where the field matches the specified value.                     |
| **Less than**                | Displays records where the value is lower than the specified value.               |
| **Less than or equal to**    | Displays records where the value is less than or equal to the specified value.    |
| **Greater than**             | Displays records where the value is higher than the specified value.              |
| **Greater than or equal to** | Displays records where the value is greater than or equal to the specified value. |
| **Between**                  | Displays records where the value falls within the specified range.                |

!!! Example "Example"

    ```
    For the **\*\*Total Calls\*\*** field:

    * **\*\*Equals \`10\`\*\*** — shows records with exactly 10 calls.

    * **\*\*Greater than \`10\`\*\*** — shows records with more than 10 calls.

    * **\*\*Less than or equal to \`10\`\*\*** — shows records with 10 or fewer calls.
    ```

## Custom Settings

The **Custom Settings** panel provides options for adjusting the appearance and presentation of the USA Rate Center report.

1. **Theme**: The **Theme** setting allows you to select the visual theme used for the report interface.

2. **Row Height**: The **Row Height** setting controls the vertical spacing of rows in the report grid.

   * **Lower row height**: Displays more rows at once.

   * **Higher row height**: Provides more spacing between rows for easier readability.

Custom settings affect the presentation of the report and do not change the underlying report data.

## Refreshing the Report

Click **Refresh** after changing the date range or other report parameters to ensure the report reflects the current selections.

!!! info "Refreshing the USA Rate Center Report"

    ```
    Remember to click **\*\*Refresh\*\*** each time parameters change to ensure you see the most recent selections onscreen.

    When refreshing the report, use the **Report Refresh** button rather than the browser refresh button.
    ```

## Use Cases

The USA Rate Center report can be used to:

* Review call volume by US rate center.
* Identify prefixes associated with specific geographic regions.
* Review customer charges by rate center.
* Review provider charges by rate center.
* Compare call activity across rate centers.
* Analyze call volumes associated with specific prefixes.
* Investigate geographic differences in call activity and associated charges.
* Review customer and provider charges for a selected reporting period.
