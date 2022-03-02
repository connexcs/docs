# Call Detail Record (CDR)
The **CDR (Call Detail Record)** is an extensive set of information collected and stored for each call. This is used primarily for billing purposes as it contains details such as call duration and destination number. 

!!! info "Archived Records"
    CDR records are "hot" (instantly queries) for the last 3 months guaranteed. After this they move to our warm storage server where they are highly compressed and available for bulk download.

## Manage displayed CDRs
The **CDR** section lists details from the Call Detail Record for each call. You can modify and display the records as follows:

* **Connected Only**: Use this to only view calls that have connected, and to filter out calls with zero duration.
* **Download**: Save the record to your hard drive in CSV format.
* **View Columns**: Select which CDR fields display in the table.
* **Date Ranges**: Limit displayed calls based on preset date ranges or a customer date range
* **Search**: Search for calls from a specific phone number, and whether that number is the Destination or Source. 

## CDR Time Zone
CDR's are rated and stored in UTC, daily totals are also calculated in UTC. You can change the display time zone for individual CDR records the time zone selector, however downloads will always be in UTC.
