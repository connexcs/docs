# Dashboard

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Dashboard & Monitoring<br>
<strong>Audience</strong>: Administrators, Engineers, Support Team<br>
<strong>Difficulty</strong>: Beginner to Intermediate<br>
<strong>Time Required</strong>: Approximately 30–45 minutes<br>
<strong>Prerequisites</strong>: Active ConnexCS Platform account with access to the Customer Portal<br>
<strong>Related Topics</strong>: <a href="https://docs.connexcs.com/customer-portal/cp-dashboard/">Customer Portal Overview</a>, <a href="https://docs.connexcs.com/logging/">Logging & Call Trace</a>, <a href="https://docs.connexcs.com/report/">Analytics & Reporting</a><br>
<strong>Next Steps</strong>: <a href="https://docs.connexcs.com/customer/alerts/">Configuring Alerts & Balance Notifications</a>, <a href="https://docs.connexcs.com/customer/stats/">Detailed Call Stats</a>, <a href="https://docs.connexcs.com/customer/cdr/">CDR Export</a><br>

</details>

The ConnexCS **Dashboard** provides a real-time overview of active customers, channels, and key system metrics. It includes interactive elements for monitoring traffic, analyzing trends, and customizing data displays.

## Overview

+ Displays a summary of Live Channels, Active Customers, Carriers, and Rate Cards.

+ Quick access to essential functions.

+ For detailed account activities, use the **Menu** System on the left.

<img src= "/misc/img/dash1.png" style="border: 2px solid #4472C4; border-radius: 8px;">

### Channels

Table view of active channels for **Customers**, **Carriers** and **DIDs** sorted by Channels in Use (highest and lowest).

### Live Channels

Displays the number of active channels in real time through a **Graph**.

### Graphs

With this new feature, you can view parameters:

+ **Channels** (historical data).
+ **CPS** (calls per second).
+ **Customer/Provider Spend**
+ **Profit** (daily stats on profit and loss, good for analysis).
+ **Registration Count** (currently registered end-points).

!!! Note "**This information is available for 7 days**"

=== "Channels"

    <img src= "/misc/img/dash2.png" style="border: 2px solid #4472C4; border-radius: 8px;">

=== "CPS"

    <img src= "/misc/img/dash3.png" style="border: 2px solid #4472C4; border-radius: 8px;">

=== "Customer/Provider Spend"

    <img src= "/misc/img/dash4.png" style="border: 2px solid #4472C4; border-radius: 8px;">

=== "Profit"

    <img src= "/misc/img/dash5.png" style="border: 2px solid #4472C4; border-radius: 8px;">

=== "Registration Count"

    <img src= "/misc/img/dash6.png" style="border: 2px solid #4472C4; border-radius: 8px;">

## Customization

+ Fully Customizable using [Custom Pages](/setup/settings/options/)

+ Users can modify and integrate analytics into the dashboard.

+ New reports and insights can be pushed dynamically.

This structured dashboard guide ensures customers can effectively monitor system performance, analyze data, and customize their experience with ConnexCS.
!!! Info " Download Control Panel Application"
    To download our Control Panel Application. Click ![alt text](image-4.png) on your browser while you are logged into your account and hit Install.
    <img src= "/customer/img/controlpanelapp.png" style="border: 2px solid #4472C4; border-radius: 8px;">

## Version of the Control Panel

The **Version** represents the deployed build or release identifier of the Control Panel currently running for the customer.

It reflects the exact codebase snapshot deployed in that environment.

---

### Purpose

The Version field enables:

- Identification of outdated deployments
- Correlation with known bugs or release notes
- Feature availability verification
- Upgrade or rollback decision-making
- Regression analysis
- Behaviour comparison across deployments

---

### When It Is Used

Version becomes relevant when:

- A feature behaves unexpectedly
- UI inconsistencies are reported
- A newly released feature is not visible
- A previously fixed bug appears again
- Behaviour differs across customers
- Engineering requires build verification

---

### Escalation & Governance Requirements

When handling control panel issues:

1. Confirm and log the Version.
2. Compare against the latest stable deployment.
3. If outdated:
   1. Confirm upgrade schedule.
   2. Check if issue is resolved in a newer release.
4. If on latest version:
   1. Escalate as potential new defect.
   2. Include Version in engineering report.

**Version must always be logged in technical escalations**

## Zone of the Control Panel

### Definition

The **Zone** identifies the infrastructure cluster or server environment where the customer instance is hosted.

It indicates the specific infrastructure region or deployment cluster responsible for serving that account.

---

### Purpose

The Zone field enables:

- Infrastructure-level debugging
- Identification of environment-specific issues
- Correlation of incidents affecting multiple accounts
- Faster routing to the correct DevOps / Network team
- Impact assessment during outages

---

### When It Is Used

Zone becomes relevant when:

- Call routing behaviour is inconsistent
- Performance degradation is reported
- SSL or domain configuration issues occur
- Database or service latency is observed
- Multiple customers report similar symptoms
- Infrastructure alerts are triggered

---

### Escalation & Governance Requirements

When escalating a technical issue:

1. Zone **must** be captured in the support ticket.
2. Verify whether other accounts in the same Zone are impacted.
3. If multi-account impact is identified, classify as a potential zone-level incident.
4. Route to the responsible infrastructure team.

**Zone is mandatory metadata for infrastructure debugging.**

[top of page]: /misc/img/topofpage.png "Top of Page"
[dashboard]: /misc/img/dashboard.png "Dashboard"
[profit]: /misc/img/profit.png "Graph Actions"
