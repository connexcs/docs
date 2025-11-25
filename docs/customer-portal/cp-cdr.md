# Call Detail Record

---

**Document Metadata** <br>**Category**: Customer Portal / CDR (Call Detail Record) Viewer</br>
**Audience**: Administrators, Customer Success Team, Support Team
<br>**Difficulty**: Intermediate</br>
**Time Required**: Approximately 20–30 minutes <br>**Prerequisites**: Active ConnexCS Customer Portal account with permissions to access CDR data and export logs</br>
**Related Topics**: [Customer Portal – Dashboard Overview](https://docs.connexcs.com/customer-portal/cp-dashboard/), [Logging & Audit Trails](https://docs.connexcs.com/logging/)
<br>**Next Steps**: After reviewing the CDR Viewer guide, navigate to the CDR section in the portal, apply filters (date, customer, DID/CLI), export data as needed, and schedule recurring exports or reports to monitor usage trends and identify anomalies.</br>

---

The **CDR (Call Detail Record)** is an extensive set of information collected and stored for each call.

It's primarily used for billing purposes, as it contains details such as call duration and destination number.

!!! info "Archived Records"
    CDR records are "hot" (instantly queries) for the last 3 months guaranteed. After this, they move to a warm storage server, where they're highly compressed and available for bulk download.

## Manage Displayed Call Detail Records

The **CDR** section lists details from the Call Detail Record for each call. You can revise and display the records as follows:

* **Connected Only:** Use this to only view connected calls and filter the calls with zero duration.
* **Download:** Save the record to your hard drive in CSV format.
* **View Columns:** Select the CDR fields that display in the table.
* **Date Ranges:** Limit displayed calls based on preset date ranges or a custom date range.
* **Search:** Search for calls from a specific phone number and verify that the number is the **Destination** or **Source**.

## Call Detail Record Time Zone

Coordinated Universal Time (UTC) rates and stores the CDRs.

Daily totals are also calculated in UTC.

You can change the display time zone for each CDR record and saves the time zone selector, but downloads will always be in UTC.

!!! Info
    When a call enters the CDR table and if a recording of the call is present, you have the option to **Play** the recording and **Download** it as well.


