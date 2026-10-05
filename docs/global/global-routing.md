# Global Routing

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Global / Routing<br> <strong>Audience</strong>: Administrators, Operations Teams, Routing Teams, Engineers<br> <strong>Difficulty</strong>: Intermediate to Advanced<br> <strong>Time Required</strong>: Approximately 15–30 minutes<br> <strong>Prerequisites</strong>: Active ConnexCS account with access to the Global section; familiarity with routing, Customer Cards, Provider Cards, Channels, and CPS.<br> <strong>Related Topics</strong>: <a href="/routing">Routing Overview</a>, <a href="/rate-card-building">Rate Card Overview</a>, <a href="/global/global">Global</a>, <a href="/customer/customer">Customer Management</a>,<br> <strong>Next Steps</strong>: Navigate to <strong>Global > Routing</strong>, review configured routes and account-wide routing activity, and use the available views to analyze routing information.<br>

</details>

**Global :material-menu-right: Routing**

## Overview

The **Global Routing** section provides an account-wide overview of configured routes and current routing activity.

It allows administrators and operations teams to review routing information across the account without navigating through individual Customer accounts.

The Global Routing view provides information grouped by:

* **Customer**
* **Customer Card**
* **Provider Card**
* **Active Channels**
* **Current CPS calls per account**

!!! note "**This page is for viewing only.** You can set up routing from within the **Customer account**."

## Reviewing Routing Information

The Global Routing view can be used to review routing from multiple perspectives:

| View                  | Description                                        |
| --------------------- | -------------------------------------------------- |
| **Customer**          | Groups configured routing information by Customer. |
| **Customer Card**     | Groups routing information by Customer Card.       |
| **Provider Card**     | Groups routing information by Provider Card.       |
| **Active Channels**   | Provides visibility into active Channels.          |
| **Current CPS Calls** | Displays current CPS call activity per account.    |

## Routing Fields (Columns)

The **Routing** view provides the following fields for reviewing Customer or Provider Card routing configuration:

| Field                      | Description                                                                                  |
| -------------------------- | -------------------------------------------------------------------------------------------- |
| **Company**                | Company associated with the routing Card.                                                    |
| **Card ID**                | Unique identifier of the routing Card.                                                       |
| **Card Name**              | Name assigned to the routing Card.                                                           |
| **Prefix**                 | Prefix associated with the routing Card and used as part of the routing configuration.       |
| **Call Recording**         | Indicates whether call recording is configured for the Card.                                 |
| **Channels**               | Number or configuration of Channels associated with the Card.                                |
| **RTP Proxy**              | Indicates the RTP Proxy configuration associated with the Card.                              |
| **Enabled**                | Indicates whether the routing Card is enabled.                                               |
| **Timeout**                | Timeout value configured for the routing Card.                                               |
| **Exclude Card**           | Indicates whether the Card is configured to be excluded from the applicable routing process. |
| **Lock Card**              | Indicates whether the Card is locked.                                                        |
| **SMS URL**                | URL configured for SMS-related functionality associated with the Card.                       |
| **CPS**                    | Calls Per Second (CPS) configured for the Card.                                              |
| **Name**                   | Name associated with the routing configuration or route.                                     |
| **SIP Ping**               | Indicates whether SIP Ping is configured for the Card.                                       |
| **SIP Session Timers**     | Indicates whether SIP Session Timers are configured for the Card.                            |
| **Profit Assurance**       | Indicates whether Profit Assurance is configured for the Card.                               |
| **Strategy**               | Routing strategy configured for the Card.                                                    |
| **RTP Codec**              | RTP codec configuration associated with the Card.                                            |
| **Block Destination Type** | Defines the destination type configured to be blocked.                                       |
| **DNC List**               | Do Not Call (DNC) list associated with the routing configuration.                            |
| **Flags**                  | Additional flags configured for the routing Card.                                            |

## Filters

The **Filters** panel allows you to narrow the Routing records displayed in the table.

Filters can be applied to the available Routing fields to focus on specific routing configurations. For example, you can filter the displayed records based on fields such as: **Company**, **Card ID**, **Card Name** etc.

Use the filter options to display only the routing records relevant to your analysis or investigation.

## Custom Settings

The **Custom Settings** panel allows you to customize the appearance of the Routing table.

You can use the available settings to adjust how Routing information is presented without changing the underlying routing configuration.

1. **Theme**: The **Theme** setting controls the visual appearance of the Routing table.

2. **Row Height**: The **Row Height** setting controls the amount of vertical space used for each Routing record.

      * **Lower row height** — Displays more Routing records within the available screen space.
      * **Higher row height** — Provides more spacing between records for easier reading.

## Use Cases

The Global Routing section can be used to:

* Review configured routes across the account.
* View routing grouped by Customer.
* Review Customer Card routing.
* Review Provider Card routing.
* Monitor active Channels.
* Review current CPS calls per account.
* Support routing analysis and operational monitoring.
* Investigate routing configuration without navigating through individual Customer accounts.

## Alternate Location

Routing can also be accessed from:

* **Customer :material-menu-right: [Customer Name] :material-menu-right: Routing :material-menu-right: Ingress Routing**

The Global Routing view provides an account-wide routing overview, while the Customer Routing view provides routing information for an individual Customer.

!!! info "More Information"
    *See [**Routing Overview**](/routing) and [**Rate Card Overview**](/rate-card-building) for details.*
