# Call Detail Record (CDR)

The **CDR (Call Detail Record)** is an extensive set of information that is collected and stored for each call. This is used primarily for billing purposes as it contains details such as call duration and destination number. 

!!! info "Archived Records"
    CDR records are "hot" (instantly queryable) for the last 3 months guaranteed. After this they will be moved to our warm storage server where they are highly compressed and available for bulk download.

All call records for a customer can be found at Customer > <customer name> > CDR. The Customer **CDR** tab lists Call Detail Records associated with the selected account. Selecting the entries will display more detailed information. 

## Manage displayed CDRs

* **Columns**: Additional CDR fields can be enabled on the Columns tab on the right
* **Column filter/sort**: Displayed entries can be filtered and sorted by clicking the header of each column. 
* **Query Builder**: Advanced filters can be created using the Query Builder using any of the fields of the record  
![alt text][querybuilder]
* **Download**: Pressing **`Download`** will save the record to your hard drive. You can also select which columns to include in the download.

## Recalculate CDR

Sometimes long-duration calls may have timed out. Use the "Recalc CDR" button from within the specific customer to refresh this data:

1.	Click the **`Recalc CDR`** button.
   ![alt text][recalc]
2.	Fill the dialogue box by selecting day, maximum duration, etc. 
3.	Click **`Save`**.

## CDR Time Zone
CDR's are rated and stored in UTC, daily totals are also calculated in UTC. You can change the time zone that individual CDR records are viewed from the time zone selector, however downloads will always be in UTC.
    
[querybuilder]: /customer/img/querybuilder.png "Query Builder"
[recalc]: /customer/img/56.png "Recalc"
