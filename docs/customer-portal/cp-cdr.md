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

### CDR Fields Explanation

| Field Name | Description | What It Represents / Usage |
| -----------|-------------|----------------------------| 
| **Call ID**| Unique identifier for a call record | Used for troubleshooting, support tracing, and correlating logs across systems |
| **Switch**| Switching server handling the call| Indicates which switching node processed the call|
| **Call Time**| Call start timestamp | Date & time when the call attempt began (based on system timezone)|
| **Source Number**| Caller ID (CLI)| Number initiating the call from customer side |
| **Card ID** | Customer account/card identifier| Internal account or billing identity used for authorization |
| **Tech Prefix**| Routing technical prefix | Prefix added for routing logic (carrier selection or manipulation)|
| **Destination**| Dialed number| Final number dialed after processing|
| **LRN Number**| Location Routing Number| Number after portability lookup (used in number portability routing)|
| **Duration**| Actual talk time| Time (seconds) the call was connected and active|
| **Recording File**| Call recording reference| File path or identifier for stored recording (if enabled)|
| **Play Audio**| Recording playback control| Allows listening to call recording directly from portal|
| **Release Reason**| Disconnect cause (human readable)| Why the call ended (Normal Clearing, Busy, Failed, etc.)|
| **PDD In**| Post Dial Delay (incoming)| Time between dialing and first response signal received|
| **Ring Duration**| Ringing time| Duration call rang before answer or termination|
| **SIP Code**| SIP response code| Protocol-level result (e.g., 200, 486, 503)|
| **SIP Reason**| SIP response message| Text explanation of SIP code (Busy Here, Declined, etc.)|
| **DTMF**| DTMF digits captured| Keypad tones entered during the call (IVR interaction)|
| **Direction**| Call direction| Indicates Inbound or Outbound call|
| **Source IP**| Originating IP address| IP address sending SIP signaling|
| **Destination Code** | Billing destination code| Rate deck destination classification used for billing|
| **Destination Name** | Billing destination name| Human-readable destination (Country/Region/Operator)|
| **Billed Duration**| Charged call duration| Rounded duration used for billing calculation  |
| **Rate**| Per-unit call rate| Price per minute or billing interval applied|
| **Connect Cost**| Connection fee| One-time charge applied when call connects|
| **PDD**| Post Dial Delay (overall)| Total delay before call setup response|
| **Charge**| Total call cost| Final billed amount deducted for the call|

### Important Conceptual Differences

| Field | Meaning |
| ------|---------|
| **Duration vs Billed Duration** | **Duration** = actual talk time <br>**Billed Duration** = rounded time used for charging</br> |
| **Destination vs Destination Name** | **Destination** = dialed digits <br>**Destination Name** = billing classification</br>|
| **SIP Code vs Release Reason**| **SIP Code** = protocol response <br>**Release Reason** = simplified explanation</br>|
| **PDD vs Ring Duration**| **PDD** = setup delay <br>**Ring Duration** = time phone rang</br>|

### Typical Customer Use Cases

| Goal| Fields Used |
| ----|-------------|
| **Billing verification** | Billed Duration, Rate, Charge |
| **Call troubleshooting** | SIP Code, SIP Reason, Release Reason |
| **Fraud monitoring**| Source IP, Destination, Duration |
| **Quality analysis**| PDD, Ring Duration|
| **Recording review**| Recording File, Play Audio|

## Call Detail Record Time Zone

Coordinated Universal Time (UTC) rates and stores the CDRs.

Daily totals are also calculated in UTC.

You can change the display time zone for each CDR record and saves the time zone selector, but downloads will always be in UTC.

!!! Info
    When a call enters the CDR table and if a recording of the call is present, you have the option to **Play** the recording and **Download** it as well.


