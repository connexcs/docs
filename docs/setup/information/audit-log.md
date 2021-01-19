# Audit Log
**Setup :material-menu-right: Information :material-menu-right: Audit Log**

The **Audit Log** displays all recorded user and API changes. This includes all activity on the Control Panel as well as in the Customer Portal.

### Columns

| Column Name | Description                                    |
|-------------|------------------------------------------------|
| User        | User responsible for the events. An entry will display 'Portal' if the change was made there, all others were made directly in the Control Panel.                |
| IP          | IP address from which the action was performed. |
| Date / Time | Date / Time which the event was raised.         |
| Primary Key | Unique ID per table related to the event.       |
| Action      | The type of action performed.                   |
| Table       | Which type of record was modified.              |
| Message       | Message type.              |
| Data        | Details about the event.                        |

!!! note "View Difference"
    In the data column, select "View Difference" to view a popup containing a diff. This shows what the data was before and after the action.
