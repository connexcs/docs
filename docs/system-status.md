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

## Overview

The Status feature in ConnexCS allows users to monitor and update the status of different system components, providing transparency to customers about ongoing issues or outages.

Its similar to services like `statuspage.io`, enabling real-time incident reporting and communication.

**Key Features**:

+ **Status Components**: Users can create and manage components representing carriers, routes, or any other arbitrary elements.
+ **Incident Reporting**: Notify customers about service disruptions and updates.
+ **Customizable Visibility**: Choose whether to display status updates publicly or keep them internal.
+ **Automated Customer Communication**: Send bulk notifications via email when downtime and system outages occur.
+ **Managing Status Components**: Users can create status components to track the performance of specific elements within their system.

Use **Status** to create Status Pages for your customer portals, typically for reported outages or issues.

## Create Status Report

Follow these steps to configure outage reporting on Customer Portals:

**Step 1: Define Status Component**

1. Click :material-plus: under **Status Component**.
2. Enter a **Title** and optional **Description**.

    <img src= "/misc/img/systemstatus1.png "system-status-2" style="border: 2px solid #4472C4; border-radius: 8px;">

3. Click **`Save`**.

**Step 2: Setup Report History**

1. Click :material-plus: under **Report History**.

    <img src= "/misc/img/systemstatus2.png "system-status-2" style="border: 2px solid #4472C4; border-radius: 8px;">

2. Enter the **Title** of the Report.
3. Select the **Status** based on the issue like **Fixed**, **Watching**, **Identified**, and **Investigating**.
4. **Visibility (Public/Private)** determines who can see the Report.
5. **Description** allows better communication of the issues clients should expect to see.
6. Select one or more Status Component(s) affected, and the severity of the issue.
      + **Severity Levels**:
        + Partial RTH (Return Traffic Handling issue).
        + Performance Issue.
        + Major Outage

7. Click **`Save`**.

**Step 3: Enable on customer portal**

1. Navigate to **Setup :material-menu-right: Integrations :material-menu-right: Portal**.
2. Click the domain name.
3. Under **User Access Area**, enable **`Status`**.
4. Click **`Save`**.


      + **Customer Communication on Customer Portal**
        + **Portal Display**: Customers logging into the portal can view live status updates.
        + **Email Notifications**: Users can send bulk notifications to customers about service status.
        + **Transparency & Trust**: Keeping customers informed reduces confusion and improves trust.

      + **Benefits**:
        + **Real-time Monitoring**: Track issues as they happen.
        + **Efficient Communication**: Quickly notify customers.
        + **Customizable Tracking**: Define and monitor any service components.
        + **Improved Customer Experience**: Keep users informed about service performance.

[system-status-2]: /misc/img/264.png "system-status-2"
[system-status-3]: /misc/img/265.png "system-status-3"
