# Audit Log

**Setup :material-menu-right: Information :material-menu-right: Audit Log**

## Overview

The **Audit Log**, or Audit Trail, is a chronological set of records that shows all changes (activities) performed on a system, software, or device, or both customers and carriers. It even displays **timestamps** and **IP addresses**.

Displays HTTP verbs (PUT, POST, GET, DELETE) for actions taken.

Enables viewing differences between previous and current configurations.

It displays all changes made, either directly by users or through the API. This includes all activity on the Control Panel and in the Customer Portal.

You can search using Account ID, Ingress ID, etc.

!!!question "Why and when do you need to see audit logs"
    1. Audit logs can offer rich insights about what caused downtime, loss of performance, and other unexpected issues.
    2. An audit log is a primary source of information to investigate the causes of issues.
    3. Provides proof of customer changes.
    4. Prevents disputes about unauthorized setting modifications.

### Key Features & Benefits

+ **Breakout Reporting**:
    + Offers a breakout report that can be customized to display different levels of information based on user roles.
    + Allows sensitive data to be selectively hidden or shown.

+ **Customizable CDR Fields**:
    + Administrators can choose which fields in the CDR should be available.
    + Supports both customer and carrier-specific configurations.

+ **Enhanced Oversight**:
    + Tracks changes made in portal settings (e.g., custom JavaScript, CSS, logos, and footer details).
    + Helps maintain a detailed history of system interactions and modifications.

## Columns

| Column Name | Description|
|-------------|------------|
| **User** | User responsible for the events. An entry will display 'Portal' if you make a change there; all others were directly made in the Control Panel|
| **IP** | IP address of the computer which performed the action|
| **Date / Time** | Date / Time when the User made the change|
| **Primary Key** | Unique ID of the record in the database that the User modified with this action|
| **Action** | The action type performed: CREATE, DELETE, GENERATE, LOGIN, POST, PUBLISH, PUT, SEND, or UPDATE|
| **Table**| The table in the database that the User modified|
| **Message**| A simple message that defines what the user did|
| **Data**| A before and after record of the change|

## View Difference

In the Data column, select "View Difference" to view a popup containing a diff. This shows the data before and after the action.

Here is an example of a View Data Difference pop-up for an action type = PUT.
  
   ![alt text][view-data-difference-audit-logs]

## Supplementary Functions

To view more details about the audit logs:

* To search for a specific set of audit logs by the values in the columns, enter the search criteria in the Search box and press `Enter`.
* To sort a column by the ascending or descending order of the values in the column, click the column header.
* To filter the audit logs by one or more values in a column, click the 3-lines icon in a column, click the Funnel icon, and select or enter values.

!!! tip "Data Synchronization"
    To avert the impact of data synchronisation issues and get the latest set of audit logs, click **Refresh**, located at the top-right of the table.
 [view-data-difference-audit-logs]: /setup/img/view-data-difference-audit-logs.png "view-data-difference-audit-logs"
