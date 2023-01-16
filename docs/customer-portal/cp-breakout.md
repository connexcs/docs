# Breakout

The **Breakout** report lists account customers with the following:

* associated profits, and
* relevant data such as cost per customer, amount billed, Aggregation Services Router (ASR), and Automatic Call Distribution Service (ACD).

    The information here is from a processed Call Detail Record (CDR) and is thus considered "billing accurate." You can use this data to bill your customers.

 Toggle **Group Destination** to show calls based on the destination number.  
 Use the **`Date`** and **`Select Destination`** fields at the top of the page to filter results.

!!! warning "Group Destination toggle"
    Presently, this toggle feature is still under development, so it may generate an error.

## Manage Displayed Fields

The Columns display data for each call

|Column|Description |
|:------------|:-------------------------------------------------|
|**Destination**|The destination number of the call|
|**Attempts**|The number of retries|
|**Connected**|Final status of the call|
|**Total Customer Charge**|Pending|
|**Duration**|Length of the call, in minutes and seconds|
|**ASR (Answer Seizure Ratio)**|ASR is the number of connected calls divided by the total calls (represented as a %)|
|**ACD**|Average Call Duration|
|**DTMF**|Dual-Tone Multi-Frequency|
|**Customer Charge**|Pending|

!!! info "Refreshing the Breakout Report"
    Remember to click **Refresh** each time parameters change to ensure you see the most recent selections onscreen.

    When refreshing the list (typically done after modifying the filtering parameters), use the Report Refresh (by the date filter) and not the Browser Refresh button.
