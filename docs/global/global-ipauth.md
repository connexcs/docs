# Global IP Authentication

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Global / IP Authentication<br> <strong>Audience</strong>: Administrators, Operations Teams, Network Engineers, Security Teams<br> <strong>Difficulty</strong>: Intermediate<br> <strong>Time Required</strong>: Approximately 15–30 minutes<br> <strong>Prerequisites</strong>: Active ConnexCS account with access to the Global section; familiarity with IP-based authentication and Customer or Carrier configuration.<br> <strong>Related Topics</strong>: <a href="https://docs.connexcs.com/customer/auth/#ip-authentication">IP Authentication</a>, <a href="/global/global">Global</a>, <a href="/customer/customer">Customer Management</a>, <a href="/carrier/">Carrier Management</a><br> <strong>Next Steps</strong>: Navigate to <strong>Global > IP Authentication</strong>, review configured IP Authentication records, and use the available Columns, Filters, and Custom Settings options to manage the view.<br>

</details>

**Global :material-menu-right: IP Authentication**

## Overview

The **Global IP Authentication** section provides a centralized view of **all configured IP Authentication records** across the account.

It allows administrators to review IP-based authentication configurations for Customers and Carriers from a single location without navigating through individual company accounts.

## IP Authentication List

The Global IP Authentication table provides the following fields:

| Field            | Description                                                    |
| ---------------- | -------------------------------------------------------------- |
| **IP Address**   | IP address configured for IP-based authentication.             |
| **Company**      | Company associated with the IP Authentication record.          |
| **Company Type** | Indicates the type of company associated with the record.      |
| **Port**         | Port configured for the IP Authentication record.              |
| **Direction**    | Direction associated with the IP Authentication configuration. |

## Columns

The **Columns** panel allows you to control which IP Authentication fields are displayed in the table.

Use the checkboxes to show or hide fields according to your requirements.

The column controls can also be used to arrange the order in which the fields appear in the table.

## Filters

The **Filters** panel allows you to narrow the IP Authentication records displayed in the table.

Filters can be used to focus on specific authentication configurations based on available fields, such as: **IP Address**, **Company**, **Company Type** etc.

For example, you can use the filters to review IP Authentication records associated with a specific Company or Company Type, or to locate a particular IP address.

## Custom Settings

The **Custom Settings** panel allows you to customize the appearance of the IP Authentication table.

1. **Theme**: The **Theme** setting controls the visual appearance of the IP Authentication table.

2. **Row Height**: The **Row Height** setting controls the amount of vertical space used for each IP Authentication record.

      * **Lower row height** — Displays more records within the available screen space.
      * **Higher row height** — Provides more spacing between records for easier reading.

These settings affect only the presentation of the IP Authentication list and do not change the underlying authentication configuration.

## Use Cases

The Global IP Authentication section can be used to:

* View all configured IP Authentication records across the account.
* Review IP addresses configured for authentication.
* Identify the Company associated with an IP address.
* Review whether an authentication record belongs to a Customer or Carrier.
* Review configured ports and directions.
* Search and filter authentication records.
* Customize the displayed fields using Columns and Custom Settings.
* Support troubleshooting and review of IP-based authentication configuration.

## Alternate Locations

IP Authentication can also be accessed from:

* **Customer :material-menu-right: [Customer Name] :material-menu-right: Auth**
* **Carrier :material-menu-right: [Carrier Name] :material-menu-right: Auth**

The Global IP Authentication view provides centralized access to configured IP Authentication records, while these locations provide access within the respective Customer or Carrier account.

!!! info "More Information"
    *See [**IP Authentication**](https://docs.connexcs.com/customer/auth/#ip-authentication) for configuration details.*
