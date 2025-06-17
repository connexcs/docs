# Call Detail Record

**Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: CDR**

The **CDR (Call Detail Record)** is an extensive set of information that's collected and stored for each call. This is primarily used for billing purposes as it contains details such as call duration and destination number.

!!! note "Global CDR"
    View CDRs for all Customers and Carriers in **Global :material-menu-right: CDR**.

    Download and recalculate selected CDRs across several customers.

## Manage displayed Call Detail Records

The Customer **CDR** tab lists Call Detail Records associated with the selected account. Select the entries to display more detailed information. The created queries on the server get displayed on the portal.

* **Columns**: You can enable more CDR fields on the Columns tab on the right.
* **Column filter/sort**: Click the header of each column to filter and sort the displayed entries. Since each call generates a CDR, this function is specifically useful for customers with high call volumes.
* **Download**: Press **`Download`** to save the record to your hard drive in CSV format. You can also select the columns to include in the download.
* The **SQL Query** option allows you to run a query.
  
## Recalculate Call Detail Record

When viewing CDRs for a specific customer, use the **`Recalc CDR`** button to refresh CDR data that may be inaccurate. Each Operation displays different fields.

* **Operations**
    * Refresh Credit (recalculates balances)
    * Refresh Summaries & Credit
    * Re-rate Calls, and Refresh Summaries & Credit
    * Adjust Call Duration, Re-rate Calls, and Refresh Summaries and Credit

* **Date (UTC)** (for Refresh operations)

* **Release Reason** (for Re-rate operations)- Select the reason for the call's termination (multiple selections allowed). This will revise the amount charged for the calls.

* **Min Duration** (for Adjust Call Duration operations) (Minimum Duration of calls that will be considered for re-calculation (3600 seconds))

* **New Duration** (for Adjust Call Duration operations) (All the calls with minimum duration of 3600 seconds will be recalculated with the value in the New Duration, for example 60 seconds).

!!! Example
    |Duration(seconds)|Cost per second($)|Total Cost($)|
    |-----------------|---------------|----------------|
    |3600(minimum duration)|0.0001|0.36|
    |60(new duration)|0.0001|0.006|

![alt text][recalc]

!!! danger "Rerating CDRs"
    If you select either "Rerate" options when recalculating CDRs, this will change your CDRs and isn't reversible.

    Original call durations get modified according to the selected criteria.

## Query Builder

Create advanced filters using any fields of the record. Select either Origination or Termination, or use the Query Builder to customize the data view.

* Match Type: Select "All" or "Any" calls to match.
* Select the CDR field from the drop-down, then "Add Rule" to define parameters to match.
* Select **Add Rule** to select extra fields and parameters to include in the custom query.
* Use **Add Group** to group sets of queries into a series of groups, creating complex, compound, and multi-vector queries.

    ![alt text][querybuilder]

!!! warning "Using Query Builder with large amounts of data"
    It's recommended not to run detailed and complex queries on large amounts of data. It's better to write more compact and pared down queries to retrieve this data.

    Unlike other providers, ConnexCS doesn't use CDRs for debugging. 
    
    You should be able to do all your debugging in the [**Logging**](https://docs.connexcs.com/logging/) section.

## Call Detail Record Time Zone

You can view the rated CDR's stored in UTC; day-to-day totals are also calculated in UTC. You can change the time zone of individual CDR records viewed from the time zone selector, but downloads will always be in UTC.

[querybuilder]: /customer/img/querybuilder.png "Query Builder" style="border: 2px solid #4472C4; border-radius: 8px;"
[recalc]: /customer/img/recalc.png "Recalculate and Rerate" style="border: 2px solid #4472C4; border-radius: 8px;"
