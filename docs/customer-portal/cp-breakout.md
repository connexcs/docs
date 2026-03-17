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

## Overview

The **Breakout Report** shows customer activity based on processed CDR data.

### Key Metrics

* Amount billed
* ASR (Answer-Seizure Ratio)
* ACD (Average Call Duration)

### Data Accuracy

All data is **billing-accurate** and matches what is used for customer billing.

### Filters & Customization

* Use **column filters** for quick data refinement
* Manage fields via **Columns**
* Enable **Pivot Mode** to group and summarize data

Use the **`Date`** and **`Select Destination`** fields at the top of the page to filter results.

## Manage Displayed Fields

The Columns display data for each call

| Column | Description |
|------|-------------|
| **Call Time** | The timestamp when the call was initiated in the system |
| **Customer** | The customer account associated with the call |
| **Customer Destination Name** | The destination number dialed by the customer |
| **Attempts** | Total call attempts |
| **Connected** | Successfully connected calls |
| **Customer Duration** | The billable duration of the call from the customer's perspective |
| **Duration** | The total length of the connected call in minutes and seconds |
| **Customer Charge** | The total amount charged to the customer for the call |
| **ACD** | Average Call Duration |
| **ASR** | Answer Seizure Ratio|
| **DTMF** | Dual-Tone Multi-Frequency signals were detected during the call |
| **DTMF Percent** | The percentage of calls where DTMF signals were detected |
| **SDP** | Session Description Protocol information used for media negotiation during call setup |

!!! info "Refreshing the Breakout Report"
    Remember to click **Refresh** each time parameters change to ensure you see the most recent selections onscreen.

    When refreshing the list (typically done after modifying the filtering parameters), use the Report Refresh (by the date filter) and not the Browser Refresh button.
