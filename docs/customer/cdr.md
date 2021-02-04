# Call Detail Record (CDR)
**Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: CDR**

The **CDR (Call Detail Record)** is an extensive set of information that is collected and stored for each call. This is used primarily for billing purposes as it contains details such as call duration and destination number. 

!!! info "Archived Records"
    CDR records are "hot" (instantly queries) for the last 3 months guaranteed. After this they will be moved to our warm storage server where they are highly compressed and available for bulk download.

!!! note "Global CDR"
    View CDRs for all Customers and Carriers under **Global :material-menu-right: CDR**. Download and Reclaculate selected CDRs across multiple customers.

## Manage displayed CDRs
The Customer **CDR** tab lists Call Detail Records associated with the selected account. Selecting the entries will display more detailed information. These queries are made on the server then displayed in the portal. 

* **Columns**: Additional CDR fields can be enabled on the Columns tab on the right
* **Column filter/sort**: Displayed entries can be filtered and sorted by clicking the header of each column. Since each call generates a CDR, this function is especially useful for customers with high call volume. 
* **Download**: Pressing **`Download`** will save the record to your hard drive in CSV format. You can also select which columns to include in the download.

## Recalculate CDR
Use the **`Recalc CDR`** button from within the specific customer to refresh CDR data that is inaccurate. 

+ **Operations**
    + Refresh Credit- to recalculate balances
    + Refresh Summaries & Credit
    + Rerate Calls, and Refresh Summaries & Credit
    + Adjust Call Duration, Rerate Calls, and Refresh Summaries & Credit
+ **Date (UTC)** (for Refresh operations)- 
+ **Release Reason** (for Rerate operations)- select the reason the call was ended, multiple selections are allowed. This will modify the amount that was charged for the calls. 
+ **Min Duration** (for Adjust Call Duration operations)- 
+ **New Duration** (for Adjust Call Duration operations)- 

    ![alt text][recalc]

!!! danger "Rerating CDRs"
    If you select either Rerate" option when recalculating CDRs, please be aware this will change your CDRs and is not reversible. Original call durations will be modified according to the criteria selected.
    
## Query Builder
Create advanced filters using any fields of the record. Quickly select either Origination or Termination, or use the Query Builder to customize the data view.

* Match Type: Select "All" or "Any" calls to match.
* Select the CDR field from the drop-down, then "Add Rule" to define parameters to match.
* Select **Add Rule** to select additional fields and parameters to include in the custom query. 
* Use **Add Group** to group sets of queries into a series of groups, creating complex, compound, and multi-vector queries. 
    
    ![alt text][querybuilder]

!!! warning "Using Query Builder with large amounts of data"
    Running detailed and complex queries on large amounts of data is not recommended. It is better to write more compact and pared down queries to retrieve this data. Unlike other providers, ConnexCS doesn't use CDRs for debugging. You should be able to do all debugging in the [**Logging**](https://docs.connexcs.com/logging/) section. 
    
## CDR Time Zone
CDR's are rated and stored in UTC, daily totals are also calculated in UTC. You can change the time zone that individual CDR records are viewed from the time zone selector, however downloads will always be in UTC.
    
[querybuilder]: /customer/img/querybuilder.png "Query Builder"
[recalc]: /customer/img/56.png "Recalc"
