# Dialer Dashboard: Features and Functions

---

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Customer Portal / Contact Center Dashboard<br> <strong>Audience</strong>: Administrators, Engineers, Support Team<br> <strong>Difficulty</strong>: Intermediate<br> <strong>Time Required</strong>: Approximately 20–40 minutes<br> <strong>Prerequisites</strong>: Active ConnexCS account, Customer Portal module enabled, Contact Center feature installed and configured in portal dialer settings, and relevant user permissions for dashboard access.<br> <strong>Related Topics</strong>:
Customer Portal – Contact Center Installation<br>
Customer Portal – Contact Center Overview<br>
Contacts Management<br>
Customer Dashboard<br> <strong>Next Steps</strong>: Log in to the portal as a Dialer-Dashboard user, review dashboard metrics and controls, test outbound/inbound call workflows, monitor call logs and performance metrics, and integrate with customer & contact data for workflow validation.<br>

</details>

---

## Introduction

In this section, we will cover the **Dialer Dashboard**, which provides real-time insights into ongoing campaigns.

## Dashboard Overview

1. Navigate to **Customer Portal :material-menu-right: Contact Center**.
2. **Accessing the Dialer**:
      1. The dashboard provides a real-time overview of campaign activities, agent statuses, data remaining and call progress.
3. **Dashboard Features**:
      1. **Agents Logged In**: Tracks number of active agents.
      2. **Agents Paused**: Number of agents currently not available take calls but are logged in the system.
      3. **Agents Waiting**: Number of agents available and ready to take the call.
      4. **Agents in Call**: Number of agents actively involved in a live conversation.
      5. **Active Calls**: Total number of live and ongoing calls.
      6. **Calls Waiting**: Displays the number of queued calls.
      7. **Calls Ringing**: Total number of calls initiated but not answered yet.
      8. **Data Remaining**: Shows the number of contacts left to be dialed.

!!! Note "Please Note"
      1. `Agents Waiting`, `Agents in Call`, `Calls Ringing`, and `Active Calls` are the stats only for the **Auto Dialer**.
      2. `AI Calls Ringing`, `AI Calls Active`: These stats are only for **Broadcast Dialer**.
      3. `Agents Logged In`, `Agents Paused`, `Data Remaining` for **all three dialers**.

<img src= "/customer-portal/img/9cc.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

=== "Campaigns"

    Summarizes ongoing campaigns, including parameters like status, campaign type, source status, CPS, Channels etc. You also have an option to **Add Campaign**.

    <img src= "/customer-portal/img/10ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px;">

=== "Agents"

    Summarizes ongoing agent activity, displaying parameters like status, SIP profile, protocol, bandwidth, CPS, channels, dial pattern, and other SIP metrics.
    You can also upload agents in bulk using **Create Bulk Agents**.

    <img src= "/customer-portal/img/11ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px;">

=== "Script"

    Displays all the created scripts in the Contact Center. You can also **Add a New Script**. 

      <img src= "/customer-portal/img/12ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px;">

=== "Leadset"

    Manages leadsets for outbound campaigns, showing parameters like name, associated campaign, status, and description.
    You can also create new leadsets individually or upload them in bulk using **Create Leadset**.

      <img src= "/customer-portal/img/13ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px;">