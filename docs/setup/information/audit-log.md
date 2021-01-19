# Audit Log
**Setup :material-menu-right: Information :material-menu-right: Audit Log**

The **Audit Log**, or Audit Trail, is a chronological set of records which shows all changes that were performed on a system, software, or a device. In other words, it displays all changes made either directly by users or through the API. This includes all activity on the Control Panel as well as in the Customer Portal.

!!!question "Why and when do you need to see audit logs" 
    Audit logs can provide rich insights about what caused downtime, loss of performance, and other unexpected issues. An audit log is a primary source of information to investigate the causes of issues.

## Columns

| Column Name | Description                                    |
|-------------|------------------------------------------------|
| User        | User responsible for the events. An entry will display 'Portal' if the change was made there, all others were made directly in the Control Panel. |
| IP          | IP address from which the action was performed. |
| Date / Time | Date / Time which the change was made.         |
| Primary Key | Unique ID per table related to the event.       |
| Action      | The type of action performed: CREATE, DELETE, GENERATE, LOGIN, POST, PUBLISH, PUT, SEND, or UPDATE.                   |
| Table       | The table in the database that was modified.              |
| Message     | A simple message which defines what the user did.              |
| Data        | A before and after record of the change.                        |

## View Difference
In the Data column, select "View Difference" to view a popup containing a diff. This shows what the data was before and after the action. Here is an example of a View Data Difference pop-up for an action type = PUT.
  
   ![alt text][view-data-difference-audit-logs]
    

## Additional Functions
To view more details about the audit logs:

    * To search for a specific set of audit logs by the values in the columns, enter the search criteria in the Search box and press `Enter`.
    * To sort a column by the ascending or descending order of the values in the column, click the column header.
    * To filter the audit logs by One or more values of a column, click the 3-lines icon in a column, click the Funnel icon, and select or enter values.

 [view-data-difference-audit-logs]: /reports/img/view-data-difference-audit-logs.png "view-data-difference-audit-logs"
