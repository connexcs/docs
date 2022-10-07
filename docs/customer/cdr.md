# Call Detail Record (CDR)
**Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: CDR**

The **CDR (Call Detail Record)** is an extensive set of information that's collected and stored for each call. This is used primarily for billing purposes as it contains details such as call duration and destination number. 

!!! info "Archived Records"
    CDR records are "hot" (instantly queries) for the last 3 months guaranteed. After that, they're moved to the warm storage server where they are highly compressed and available for bulk download.

!!! note "Global CDR"
    View CDRs for all Customers and Carriers in **Global :material-menu-right: CDR**. Download and recalculate selected CDRs across multiple customers.

## Manage displayed CDRs
The Customer **CDR** tab lists Call Detail Records associated with the selected account. Select the entries to display more detailed information. These queries are made on the server and then displayed in the portal. 

* **Columns**: You can enable more CDR fields on the Columns tab on the right.
* **Column filter/sort**: Click the header of each column to filter and sort the displayed entries. Since each call generates a CDR, this function is especially useful for customers with high call volume. 
* **Download**: Press **`Download`** to save the record to your hard drive in CSV format. You can also select the columns to include in the download.

## Recalculate CDR
When viewing CDRs for  specific customer, use the **`Recalc CDR`** button to refresh CDR data that may be inaccurate. Each Operation displays different fields. 

+ **Operations**
    + Refresh Credit (recalculates balances)
    + Refresh Summaries & Credit
    + Rerate Calls, and Refresh Summaries & Credit
    + Adjust Call Duration, Rerate Calls, and Refresh Summaries & Credit
+ **Date (UTC)** (for Refresh operations) 
+ **Release Reason** (for Rerate operations)- Select the reason for call end, multiple selections are allowed. This will modify the amount that was charged for the calls. 
+ **Min Duration** (for Adjust Call Duration operations) 
+ **New Duration** (for Adjust Call Duration operations) 

    ![alt text][recalc]

!!! danger "Rerating CDRs"
    If you select either "Rerate" options when recalculating CDRs, this will change your CDRs and isn't reversible. Original call durations are modified according to the selected criteria.
    
## Query Builder
Create advanced filters using any fields of the record. Quickly select either Origination or Termination, or use the Query Builder to customize the data view.

* Match Type: Select "All" or "Any" calls to match.
* Select the CDR field from the drop-down, then "Add Rule" to define parameters to match.
* Select **Add Rule** to select additional fields and parameters to include in the custom query. 
* Use **Add Group** to group sets of queries into a series of groups, creating complex, compound, and multi-vector queries. 
    
    ![alt text][querybuilder]

!!! warning "Using Query Builder with large amounts of data"
    We recommend not to run detailed and complex queries on large amounts of data. It is better to write more compact and pared down queries to retrieve this data. Unlike other providers, ConnexCS doesn't use CDRs for debugging. You should be able to do all debugging in the [**Logging**](https://docs.connexcs.com/logging/) section. 
    
## CDR Time Zone
CDR's are rated and stored in UTC, daily totals are also calculated in UTC. You can change the time zone that individual CDR records are viewed from the time zone selector, but downloads will always be in UTC.
    
[querybuilder]: /customer/img/querybuilder.png "Query Builder"
[recalc]: /customer/img/recalc.png "Recalculate and Rerate"
