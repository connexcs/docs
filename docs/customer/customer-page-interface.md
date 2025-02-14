# Customer Page Interface

## Overview

The Customer Page Interface provides a comprehensive, customizable grid system to manage customer data efficiently. 

This system ensures up-to-date customer information and facilitates quick actions like filtering, editing, and notifying customers in bulk.

## Key Features/Benefits include**:

+ **Customizable Grid System**:

  + Modify layouts to suit your needs.
  + Apply filters to refine searches (e.g., filter by credit balance).
  + Group data for better organization.
  + Perform grouping and pivoting of data (similar to Excel functionality).
  + Automatic background updates to ensure real-time data accuracy.

+ **Robust Data Management Tools**:

  + Real-time updates ensure that customer information is always up-to-date.
  + Bulk management options allow you to manage multiple customer records simultaneously.
  + Integrated communication tools facilitate quick actions such as filtering, editing, and notifying customers in bulk.

+ **Customer Indicators**:

  + **Warning Signs**: Hover over warnings to identify potential issues (e.g., missing authentication sets or routing issues).

  + **Customer Status**: View and update the status of a customer:
    + Active
    + Inactive
    + Pending
    + Penalty

  + **Last Call Details**: Track the last time a customer was active.

  + **Key Metrics**
    + **Credit & Currency**: Displays available balance in the system.
    + **Active Channels**: Shows live active call channels.
    + **ASR (Answer Seizure Ratio)**: Measures the percentage of connected calls vs. total calls. 
      + **Calculation**: (Connected Calls / Total Calls) * 100.
    + **ACD (Average Call Duration)**: Calculates the average length of customer calls.
      + **Calculation**: Total Call Duration / Total Number of Calls.
    + **PDD (Post Dial Delay)**: Measures the time delay between dialing a number and hearing the ringtone.
    A high PDD (e.g., 10 seconds) can indicate carrier issues.
    + **CPS (Calls Per Second)**: Displays the number of calls processed per second.

+ **Customer Management**: Adding a New Customer:

    Click the `blue +` box to create a new customer entry.

+ **Bulk Upload**: Upload multiple customers at once.
    Users can dynamically map columns (e.g., customer name, channels, status).

    Define the first row as the start row before importing data.

+ **Bulk Edit**: Select multiple customers and modify attributes in bulk.

!!! Example
    Change multiple customers to inactive in one action.

+ Refresh Data:

Use the refresh button to update displayed information.

Delete Customers:

Select customers and confirm deletion with a prompt before removal.

1. Communication Tools

Email Notifications:

Select customers and send bulk emails.

Customers do not see other recipients.

Use cases: Service downtime alerts, marketing updates, new product announcements.

SMS Alerts:

Send instant SMS messages to selected customers.

Use cases: System updates, routing issues, urgent notifications.

6. Search & Filtering

Search Box: Instantly find customers by entering keywords.

Filters: Apply specific criteria to narrow down search results.
