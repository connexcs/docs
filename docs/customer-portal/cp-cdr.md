# Call Detail Record

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Customer Portal / CDR (Call Detail Record) Viewer<br>
<strong>Audience</strong>: Administrators, Customer Success Team, Support Team<br>
<strong>Difficulty</strong>: Intermediate<br>
<strong>Time Required</strong>: Approximately 20–30 minutes<br>
<strong>Prerequisites</strong>: Active ConnexCS Customer Portal account with permissions to access CDR data and export logs<br>
<strong>Related Topics</strong>: <a href="https://docs.connexcs.com/customer-portal/cp-dashboard/">Customer Portal – Dashboard Overview</a>, <a href="https://docs.connexcs.com/logging/">Logging & Audit Trails</a><br>
<strong>Next Steps</strong>: After reviewing the CDR Viewer guide, navigate to the CDR section in the portal, apply filters (date, customer, DID/CLI), export data as needed, and schedule recurring exports or reports to monitor usage trends and identify anomalies<br>

</details>

## Overview

The **CDR (Call Detail Record)** is an extensive set of information collected and stored for each call.

It's primarily used for billing purposes, as it contains details such as call duration and destination number.

CDRs provide comprehensive call data, essential for billing and analytics.

!!! info "Archived Records"
    CDR records are "hot" (instantly quarriable) for the last 3 months guaranteed. After this, they move to a warm storage server, where they're highly compressed and available for bulk download.

### Key Features

+ **Comprehensive Data:** Stores millions of call records efficiently.
+ **Customizable Display:** Users can add extra fields like source IP, reorder fields, and filter data based on parameters.
+ **Filtering & Querying:**
    + Apply filters (e.g., termination, origination).
    + Advanced query builder allows multi-parameter searching (e.g., calls longer than 10 seconds and PDD less than 5 milliseconds).
+ **Server-Side Sorting:** Ensures optimal performance when dealing with large datasets.
+ **Data Export:** Download call data as CSV for further analysis.
+ **Long-Term Storage:** CDRs are stored indefinitely unless customers request deletion.
+ **Billing & Retention:**
    + CDRs are the foundation for billing calculations.
    + Retained indefinitely unless the customer requests deletion.

## Manage Displayed Call Detail Records

The **CDR** section lists details from the Call Detail Record for each call. You can revise and display the records as follows:

* **Connected Only:** Use this to only view connected calls and filter the calls with zero duration.
* **Download:** Save the record to your hard drive in CSV format.
* **View Columns:** Select the CDR fields that display in the table.
* **Date Ranges:** Limit displayed calls based on preset date ranges or a custom date range.
* **Search:** Search for calls from a specific phone number and verify that the number is the **Destination** or **Source**.
* **Columns:** You can enable additional CDR fields from the Columns tab on the right.
* **Column filter/sort:** Click the header of each column to filter and sort the displayed entries. Since each call generates a CDR, this function is specifically useful for customers with high call volumes.
* **Download:** Press Download to save the record to your hard drive in CSV format. You can also select the columns to include in the download. The SQL Query option allows you to run a query.

## Call Detail Record Time Zone

Coordinated Universal Time (UTC) rates and stores the CDRs.

Daily totals are also calculated in UTC.

You can change the display time zone for each CDR record and saves the time zone selector, but downloads will always be in UTC.

!!! Info
    When a call enters the CDR table and if a recording of the call is present, you have the option to **Play** the recording and **Download** it as well.

