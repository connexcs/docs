# Status

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: System Operations / System Status & Health<br>
<strong>Audience</strong>: Administrators, Engineers, Support Team<br>
<strong>Difficulty</strong>: Beginner to Intermediate<br>
<strong>Time Required</strong>: Approximately 10–15 minutes<br>
<strong>Prerequisites</strong>: Active ConnexCS account with access to the status portal or system-health dashboard<br>
<strong>Related Topics</strong>:
<a href="https://docs.connexcs.com/guides/monitoring/">Monitoring Overview</a>,
<a href="https://docs.connexcs.com/customer/alerts/#global-alerts">Alerts & Thresholds</a><br>
<strong>Next Steps</strong>: Keep checking for any new developments.<br>

</details>

**Management :material-menu-right: Status**

Use **Status** to create Status Pages for your customer portals, typically for reported outages or issues. This automates communication of downtime and system outages to your customers.

## Create Status Report

Follow these steps to configure outage reporting on Customer Portals:

### Step 1: Define Status Component

1. Click :material-plus: under **Status Component**.
2. Enter a **Title** and optional **Description**.

    <img src= "/misc/img/systemstatus1.png "system-status-2" style="border: 2px solid #4472C4; border-radius: 8px;">

3. Click **`Save`**.

### Step 2: Setup Report History

1. Click :material-plus: under **Report History**.

    <img src= "/misc/img/systemstatus2.png "system-status-2" style="border: 2px solid #4472C4; border-radius: 8px;">

2. Enter the **Title** of the Report.
3. Select the **Status** based on the issue.
4. **Visibility** determines who can see the Report.
5. **Description** allows better communication of the issues clients should expect to see.
6. Select one or more Status Component(s) affected, and the severity of the issue.
7. Click **`Save`**.

#### Incident Progression

Each report moves through a set of statuses as you work on the issue. Update the status as things change so customers can follow progress on their Status page.

| Status | Use it when |
|---|---|
| **Investigating** | The issue has been reported and you're looking into it. |
| **Identified** | You've found the cause and are working on a fix. |
| **Watching** | A fix is in place and you're monitoring to confirm it holds. |
| **Fixed** | The issue is resolved. |

To update an incident:

1. Click the report under **Report History**.
2. Change the **Status**, and update the **Description** with what's changed.
3. Click **`Save`**.

Customers see the latest status in **Report History** on their [**Status page**](/customer-portal/status/).

### Step 3: Enable on customer portal

1. Navigate to **Setup :material-menu-right: Integrations :material-menu-right: Portal**.
2. Click the domain name.
3. Under **User Access Area**, enable **`Status`**.
4. Click **`Save`**.
