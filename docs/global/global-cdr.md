# Global CDR

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Global / Call Detail Records<br> <strong>Audience</strong>: Administrators, Operations Teams, Billing Teams, Engineers<br> <strong>Difficulty</strong>: Intermediate<br> <strong>Time Required</strong>: Approximately 15–30 minutes<br> <strong>Prerequisites</strong>: Active ConnexCS account with access to the Global section; familiarity with Call Detail Records (CDRs).<br> <strong>Related Topics</strong>: <a href="https://docs.connexcs.com/customer/cdr">CDR</a>, <a href="/global/global">Global</a>, <a href="/customer/customer">Customer Management</a>, <a href="/carrier/">Carrier Management</a><br> <strong>Next Steps</strong>: Navigate to <strong>Global > CDR</strong>, review CDRs across Customers, and select specific CDRs for recalculation when required.<br>

</details>

**Global :material-menu-right: CDR**

## Overview

The **Global CDR** section provides a centralized view of **Call Detail Records (CDRs) for all Customers**.

Instead of navigating to an individual Customer account, administrators can use the Global CDR view to access CDRs across the account from a single location. The Global view also allows specific CDRs to be selected for **Recalculation**.

## CDR List

The Global CDR page provides access to CDRs across Customers.

The CDR list can be used to review call records and select specific records for further action, including recalculation.

## Recalculation

The Global CDR view allows you to select specific CDRs for **Recalculation**.

To recalculate a CDR:

1. Navigate to **Global :material-menu-right: CDR**.
2. Locate the required CDR.
3. Select the CDR using the selection option.
4. Use the available **Recalculation** action.

This allows specific CDRs to be recalculated rather than requiring the entire CDR dataset to be processed.

!!! info
    The ability to select specific CDRs for **Recalculation** is available from the Global CDR view.

## Searching and Filtering

The Global CDR view can be used to locate the required CDRs across the account.

Use the available table controls to narrow the displayed records and locate specific call records.

!!! note
    The exact CDR fields and filter options depend on the CDR view configuration. The supplied source does not specify the individual CDR columns or filter conditions, so they are not defined here.

## Columns

The Global CDR view displays CDR information in a table.

Use the **Columns** option, when available, to control the information displayed in the CDR list.

The supplied CDR documentation does not specify the individual column names, so the column definitions should be documented from the CDR interface or the detailed CDR documentation rather than inferred.

## CDR Metadata Fields

The **CDR Metadata** fields provide detailed information about the call, including call timing, destination, customer and provider billing, routing, SIP information, and authentication details.

### Call Information

| Field                         | Description                                                                  |
| ----------------------------- | ---------------------------------------------------------------------------- |
| **Call Time**                 | Date and time when the call was placed or recorded in the CDR.               |
| **LRN Number**                | Local Routing Number associated with the destination number, when available. |
| **Call ID**                   | Unique identifier assigned to the call.                                      |
| **Destination CLI**           | Caller ID associated with the destination side of the call.                  |
| **Destination**               | Number or destination that the call was placed to.                           |
| **Duration**                  | Total duration of the call.                                                  |
| **Call Recording**            | Information associated with the call recording, when recording is available. |
| **Recording Cost**            | Cost associated with recording the call.                                     |
| **Switch IP**                 | IP address of the switch involved in processing the call.                    |
| **Source IP**                 | IP address from which the call originated.                                   |
| **Source CLI**                | Caller ID presented by the source of the call.                               |
| **Source Destination Number** | Destination number received from the source side of the call.                |
| **Tech Prefix**               | Technical prefix associated with the call and used as part of routing.       |
| **Jurisdiction**              | Jurisdiction classification associated with the call.                        |

### Customer Information

| Field                              | Description                                                       |
| ---------------------------------- | ----------------------------------------------------------------- |
| **Customer**                       | Parent grouping containing customer-related CDR information.      |
| **Customer Name**                  | Name of the Customer associated with the call.                    |
| **Customer Charge**                | Amount charged to the Customer for the call.                      |
| **Customer Duration**              | Duration of the call measured on the Customer side.               |
| **Customer PDD**                   | Post-Dial Delay measured on the Customer side.                    |
| **Customer Card Name**             | Name of the Customer Card used for the call.                      |
| **Customer Rate Card**             | Rate Card associated with the Customer traffic.                   |
| **Customer Card Destination Code** | Destination code used by the Customer Card for rating or routing. |
| **Customer Card Destination Name** | Destination name associated with the Customer Card destination.   |
| **Customer Card MCD**              | MCD value associated with the Customer Card.                      |
| **Customer Card Pulse**            | Pulse or billing increment configured for the Customer Card.      |
| **Customer Card Connect Cost**     | Connection cost associated with the Customer Card.                |
| **Customer Card Currency**         | Currency configured for the Customer Card.                        |
| **Customer RTP IP**                | RTP IP address associated with the Customer side of the call.     |

### Reseller Information

| Field                              | Description                                                     |
| ---------------------------------- | --------------------------------------------------------------- |
| **Reseller**                       | Parent grouping containing reseller-related CDR information.    |
| **Reseller Name**                  | Name of the Reseller associated with the call.                  |
| **Reseller Charge**                | Amount charged to the Reseller for the call.                    |
| **Reseller Duration**              | Duration of the call measured for the Reseller.                 |
| **Reseller Currency**              | Currency associated with the Reseller charge.                   |
| **Reseller Rate Card**             | Rate Card associated with the Reseller traffic.                 |
| **Reseller Card Destination Code** | Destination code used by the Reseller Card.                     |
| **Reseller Card Destination Name** | Destination name associated with the Reseller Card destination. |
| **Reseller Card MCD**              | MCD value associated with the Reseller Card.                    |
| **Reseller Card Pulse**            | Pulse or billing increment configured for the Reseller Card.    |
| **Reseller Card Connect Cost**     | Connection cost associated with the Reseller Card.              |
| **Reseller Card Currency**         | Currency configured for the Reseller Card.                      |

### Provider Information

| Field                              | Description                                                     |
| ---------------------------------- | --------------------------------------------------------------- |
| **Provider**                       | Parent grouping containing provider-related CDR information.    |
| **Provider Name**                  | Name of the Provider that handled the call.                     |
| **Provider Charge**                | Amount charged by the Provider for the call.                    |
| **Provider Duration**              | Duration of the call measured on the Provider side.             |
| **Provider PDD Out**               | Post-Dial Delay measured on the outbound Provider side.         |
| **Provider Card Name**             | Name of the Provider Card used for the call.                    |
| **Provider Rate Card**             | Rate Card associated with the Provider traffic.                 |
| **Provider Card Destination Code** | Destination code used by the Provider Card.                     |
| **Provider Card Destination Name** | Destination name associated with the Provider Card destination. |
| **Provider Card MCD**              | MCD value associated with the Provider Card.                    |
| **Provider Card Pulse**            | Pulse or billing increment configured for the Provider Card.    |
| **Provider Card Connect Cost**     | Connection cost associated with the Provider Card.              |
| **Provider Card Currency**         | Currency configured for the Provider Card.                      |
| **Provider RTP IP**                | RTP IP address associated with the Provider side of the call.   |

### Call and SIP Information

| Field              | Description                                                            |
| ------------------ | ---------------------------------------------------------------------- |
| **Release Reason** | Reason recorded for why the call was released or terminated.           |
| **Ring Duration**  | Length of time the call remained in the ringing state.                 |
| **SIP Code**       | SIP response code associated with the call outcome.                    |
| **SIP Reason**     | Textual reason associated with the SIP response or call outcome.       |
| **DTMF**           | DTMF information recorded during the call.                             |
| **Call ID B**      | Identifier associated with the B-leg or corresponding second call leg. |
| **Ingress ID**     | Identifier associated with the ingress side of the call.               |
| **Billing ID**     | Identifier associated with billing information for the call.           |
| **Auth User**      | Authenticated SIP user associated with the call.                       |

!!! note
    Some fields are grouped in the interface, such as **Customer**, **Reseller**, and **Provider**. These groups can be expanded or collapsed to show their related metadata fields. The exact value populated in a field depends on the call flow and configuration.

## Custom Settings

The **Custom Settings** option can be used to adjust the presentation of the CDR list when available.

These settings affect how the CDR information is displayed and do not change the underlying CDR data.

## Alternate Locations

CDRs can also be accessed from:

* **Customer :material-menu-right: [Customer Name] :material-menu-right: CDR**
* **Carrier :material-menu-right: [Carrier Name] :material-menu-right: CDR**

The Global CDR view provides centralized access across Customers, while these locations provide CDR access within the respective Customer or Carrier account. 

## Use Cases

The Global CDR section can be used to:

* View CDRs across all Customers.
* Locate specific call records from a centralized view.
* Select individual CDRs for recalculation.
* Review call records without navigating through individual Customer accounts.
* Support operational and billing investigations involving specific CDRs.

!!! info "More Information"
    For more information about **CDRs**, including configuration details, see the [Customer CDRs](https://docs.connexcs.com/customer/cdr/).
