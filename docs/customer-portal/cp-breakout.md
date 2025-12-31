# Breakout

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Customer Portal / Breakout Report<br>
<strong>Audience</strong>: Administrators, Customer Success Team, Finance & Billing Staff<br>
<strong>Difficulty</strong>: Intermediate<br>
<strong>Time Required</strong>: Approximately 20–30 minutes<br>
<strong>Prerequisites</strong>: Active ConnexCS account with access to the Customer Portal and permission to view Breakout reports<br>
<strong>Related Topics</strong>: <a href="https://docs.connexcs.com/customer-portal/cp-dashboard/">Customer Portal – Dashboard</a>, <a href="https://docs.connexcs.com/customer-portal/cp-cdr/">Customer Portal – CDR Viewer</a>, <a href="https://docs.connexcs.com/report/">Reporting – Breakout & DTMF Reports</a><br>
<strong>Next Steps</strong>: After reviewing the Breakout Report guide, filter the report by date and destination, review per-customer profitability metrics (Revenue vs Cost, ASR, ACD), identify under-performing routes or customers, and schedule a monthly review of Breakout metrics to optimise routing and customer billing<br>

</details>

The **Breakout** report lists account customers with the following:

* associated profits, and
* relevant data such as cost per customer, amount billed, Aggregation Services Router (ASR), and Automatic Call Distribution Service (ACD).

    The information here is from a processed Call Detail Record (CDR) and is thus considered "billing accurate." You can use this data to bill your customers.
 
 Use the **`Date`** and **`Select Destination`** fields at the top of the page to filter results.

 The **Select Destination** allows you to filter out the calls made to a particular destination.

## Manage Displayed Fields

The Columns display data for each call

|Column|Description |
|:------------|:-------------------------------------------------|
|**Destination**|The destination number of the call|
|**Attempts**|The number of retries|
|**Connected**|Final status of the call|
|**Total Provider Charge**|How much your provider is charging you|
|**Total Customer Charge**|How much you are charging your customer|
|**Duration**|Length of the call, in minutes and seconds|
|**ASR (Answer Seizure Ratio)**|ASR is the number of connected calls divided by the total calls (represented as a %)|
|**ACD**|Average Call Duration|
|**DTMF**|Dual-Tone Multi-Frequency|
|**Customer Charge**|Pending|

!!! info "Refreshing the Breakout Report"
    Remember to click **Refresh** each time parameters change to ensure you see the most recent selections onscreen.

    When refreshing the list (typically done after modifying the filtering parameters), use the Report Refresh (by the date filter) and not the Browser Refresh button.
