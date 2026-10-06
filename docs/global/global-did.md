# Global DID

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Global / Direct Inward Dial (DID)<br> <strong>Audience</strong>: Administrators, Operations Teams, Telecom Teams, Engineers<br> <strong>Difficulty</strong>: Intermediate<br> <strong>Time Required</strong>: Approximately 15–30 minutes<br> <strong>Prerequisites</strong>: Active ConnexCS account with access to the Global section; familiarity with DIDs, Customers, Providers, and telephone number management.<br> <strong>Related Topics</strong>: <a href="https://docs.connexcs.com/customer/did">DID</a>, <a href="/apps/architecture/scriptforge/">ScriptForge</a>, <a href="/global/global">Global</a>, <a href="/customer/customer">Customer Management</a>, <a href="/carrier/">Carrier Management</a><br> <strong>Next Steps</strong>: Navigate to <strong>Global > DID</strong>, review DID assignments and inventory, manage available numbers, and use the available Columns, Filters, and Custom Settings options.<br>

</details>

**Global :material-menu-right: DID**

## Overview

The **Global DID** section provides a centralized view of **Direct Inward Dialing (DID) numbers** across the account.

Unlike the Customer DID section, the Global DID section organizes numbers into different views based on their assignment and provisioning status.

The Global DID section provides the following views:

* **Assigned** — Numbers currently assigned to accounts.
* **Inventory** — Unassigned numbers available in the inventory.
* **Provision** — Uses ConnexCS [**ScriptForge**](/apps/architecture/scriptforge/) Drivers to interface with DID provider APIs so that new numbers can be assigned.
* **Providers List** — Lists DIDs together with their associated Providers.

## DID Views

### Assigned

The **Assigned** view displays numbers that are currently assigned to accounts.

This allows administrators to review which DIDs are in use and the Customer or Provider associated with each number.

### Inventory

The **Inventory** view displays **unassigned numbers**.

These numbers are available in the DID inventory and can be reviewed before being assigned to an account.

### Provision

The **Provision** view is used for provisioning new numbers.

It uses ConnexCS **ScriptForge Drivers** to interface with DID Provider APIs, allowing new numbers to be assigned through supported provider integrations.

### Providers List

The **Providers List** view lists DIDs together with their associated Providers.

This provides visibility into which Provider is associated with each DID.

## DID Fields

The Global DID view provides the following fields:

| Field                       | Description                                                          |
| --------------------------- | -------------------------------------------------------------------- |
| **DID**                     | The Direct Inward Dialing number.                                    |
| **Customer**                | Parent grouping containing Customer-related DID information.         |
| **Customer Name**           | Name of the Customer associated with the DID.                        |
| **Customer Card**           | Customer Card associated with the DID.                               |
| **Provider**                | Parent grouping containing Provider-related DID information.         |
| **Provider Name**           | Name of the Provider associated with the DID.                        |
| **Provider Card**           | Provider Card associated with the DID.                               |
| **Destination**             | Primary destination configured for the DID.                          |
| **Destination 2**           | Secondary destination configured for the DID.                        |
| **Destination 3**           | Additional destination configured for the DID.                       |
| **Package**                 | Package associated with the DID.                                     |
| **Tags**                    | Tags associated with the DID.                                        |
| **RTP Proxy**               | Indicates the RTP Proxy configuration associated with the DID.       |
| **RTP Media Proxy**         | Indicates the RTP Media Proxy configuration associated with the DID. |
| **FTC Reported**            | Indicates the FTC reporting information associated with the DID.     |
| **IP Quality Score (IPQS)** | IPQS-related information associated with the DID.                    |
| **Flags**                   | Additional configuration flags associated with the DID.              |
| **Created Date**            | Date on which the DID record was created.                            |
| **Assigned Date**           | Date on which the DID was assigned.                                  |
| **Last Called**             | Indicates when the DID was last called.                              |
| **Spam Score**              | Spam-related score associated with the DID.                          |

## Columns

The **Columns** panel allows you to control which DID fields are displayed in the table.

Use the checkboxes to show or hide fields according to your requirements.

The available fields can also be arranged to control the order in which they appear in the table.

## Filters

The **Filters** panel allows you to narrow the DID records displayed in the table.

Filters can be used to focus the DID list based on available information, such as: **DID**, **Customer**, **Provider** etc.

This is useful when locating specific numbers or reviewing DIDs associated with a particular Customer, Provider, Package, or configuration.

## Custom Settings

The **Custom Settings** panel allows you to customize the appearance of the DID table.

1. **Theme**: The **Theme** setting controls the visual appearance of the DID table.

2. **Row Height**: The **Row Height** setting controls the amount of vertical space used for each DID record.

      * **Lower row height** — Displays more DID records within the available screen space.
      * **Higher row height** — Provides more spacing between records for easier reading.

    These settings affect the presentation of the DID list and do not change the underlying DID configuration.

## Managing DIDs

The Global DID section can be used to review and manage DID information across the account.

Depending on the selected DID view, you can review:

* Numbers currently **assigned** to accounts.
* Numbers available in **inventory**.
* Numbers being **provisioned** through supported Provider APIs.
* DIDs grouped or listed according to their associated **Providers**.

## Use Cases

The Global DID section can be used to:

* View DIDs across the entire account.
* Review which DIDs are assigned to Customers.
* Review unassigned numbers in the DID inventory.
* Review DIDs associated with Providers.
* Review DID destinations.
* Review Customer and Provider Cards associated with DIDs.
* Review DID tags and packages.
* Monitor DID creation and assignment dates.
* Review when a DID was last called.
* Review available DID-related scoring and reporting information.
* Filter and customize the DID list for operational investigations.

## Alternate Locations

DIDs can also be accessed from:

* **Customer :material-menu-right: [Customer Name] :material-menu-right: DID**
* **Carrier :material-menu-right: [Carrier Name] :material-menu-right: DID**

The Global DID view provides centralized access to DID information across the account, while these locations provide DID management within the respective Customer or Carrier account.

!!! info "More Information"
    *See [**DID**](https://docs.connexcs.com/customer/did) for configuration details, including Bulk Upload.*

!!! info "DID Provisioning"
    For information about using [**ScriptForge**](/apps/architecture/scriptforge/).
