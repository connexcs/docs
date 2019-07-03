#Viewing Audit Logs for Actions Performed on the ConnexCS Control Panel

You can view the audit logs, if you want to view the history of actions that users performed on the ConnexCS Control Panel. 

An audit log, also known as an audit trail is a chronological set of records that provide documentary evidence of the sequence of activities that were performed on a system, software, or a device.

!!!question "Why and when do you need to see audit logs" 
    Audit logs can provide rich insights about what caused downtime, loss of performance, and other unexpected issues. An audit log is a primary source of information to investigate the causes of issues.

To view the audit logs:

1.  Log into the ConnexCS Control Panel.
   
    ConnexCS Control Panel displays the page you were on when you logged out of the Control Panel.
   
2.  Click `Setup > Information > Audit Log` in the navigation panel (located at the left of the page).

    The Audit Log page appears.

    You can see the audit logs for the actions that users performed on the Control Panel, in a tabular format.
   
    You can see the following details in the table, as columns:
    
    * User - the name of user, as in the account for the Control Panel

    * IP - the IP address of the computer that the user used to access the Control Panel

    * Date Time - the date and time when the user performed this action

    * Primary Key - the unique identification number of the record in the database that the user modified with this action

    * Action - the type of action the user performed: CREATE, DELETE, GENERATE, LOGIN, POST, PUBLISH, PUT, SEND, or UPDATE.

    * Table - the table in the database that the user modified with this action

    * Message - a simple message that defines what the user did

    * Data - the data before the user performed the action and the data after the user performed the action

3.  (Optional) To avert the impact of data synchronization issues and get the latest set of audit logs, click the `Refresh` button located at top-right of the table.

4.  Do the following on this page to view more details about the audit logs:

    * (Optional) To search for a specific set of audit logs by the values in the columns, enter the search criteria in the Search box and press `Enter`.

    * To sort a column by the ascending or descending order of the values in the column, click the column header.

    * To filter the audit logs by One or more values of a column, click the 3-lines icon in a column, click the Funnel icon, and select or enter values.

    * To view the complete details of what the user changed during an action, click `View Difference` in the row for the action.
      
      A View Data Difference pop-up appears.
      
      The following image illustrates a View Data Difference pop-up for an action type = PUT.
  
   ![alt text][view-data-difference-audit-logs]
   
 [view-data-difference-audit-logs]: /reports/img/view-data-difference-audit-logs.png "view-data-difference-audit-logs"
