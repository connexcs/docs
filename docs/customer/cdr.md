The **CDR (Customer Detail Record)** is an extensive set of information that is collected and stored for each call. This is used primarly for billing purposes as it contains details such as call duration and destination number. 

## Columns
The default columns are:
* Call Time (when the call was made)
* Destination CLI (the desintation telephone number)
* Duration (call length)
* Retail 
* Name

The columns can be modified by using the Columns tab on the right. Columns can be selected and de-selected. Additionally, you can set Row Groups and aggregate Values by dragging to the boxes at the bottom of the Columns tab.  

![alt text][cdr-c]

## Filters
Displayed data can also be filtered using the Filter tab on the right

![alt text][cdr-f]
	
## Timezone
CDR's are rated and stored in UTC, daily totals are also calculated in UTC. You can change the timezone that individual CDR records are viewed from the timezone selector, however downloads will always be in UTC.

## Archived Records
CDR records are "hot" (instantly queryable) for the last 3 months guaranteed. After this they will be moved to our warm storage server where they are highly compressed and available for bulk download.



[cdr-c]: /customer/img/cdr-c.png "CDR Columns"
[cdr-f]: /customer/img/cdr-f.png "CDR Filters"
