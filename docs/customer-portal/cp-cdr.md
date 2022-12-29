# Call Detail Record

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
* **Search:** Search for calls from a specific phone number and verify that the number is the destination or source.

## Call Detail Record Time Zone

Coordinated Universal Time (UTC) rates and stores the CDRs.

Daily totals are also calculated in UTC.

You can change the display time zone for each CDR record and saves the time zone selector, but downloads will always be in UTC.
