# Call Detail Record

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Customer Analytics & Monitoring / Call-Detail Records (CDR)<br>
<strong>Audience</strong>: Administrators, Engineers, Billing & Finance Teams<br>
<strong>Difficulty</strong>: Intermediate<br>
<strong>Time Required</strong>: Approximately 30–60 minutes<br>
<strong>Prerequisites</strong>: An active ConnexCS account with access to the Customer Portal and permission to view CDRs; familiarity with call-detail records, billing concepts, and SQL-style querying<br>
<strong>Related Topics</strong>: <a href="https://docs.connexcs.com/customer/stats/">Customer – Stats</a>, <a href="https://docs.connexcs.com/customer/latest-calls/">Customer – Latest Calls</a><br>
<strong>Next Steps</strong>: <a href="https://docs.connexcs.com/customer/cdr/#query-builder">Use Query Builder in CDR</a>, <a href="https://docs.connexcs.com/customer/cdr/#recalculate-call-detail-record">Recalculate CDRs</a><br>

</details>

**Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: CDR**

## Overview

The **CDR (Call Detail Record)** is an extensive set of information that's collected and stored for each call. This is primarily used for billing purposes as it contains details such as call duration and destination number.

CDRs provide comprehensive call data, essential for billing and analytics.

## Key Features

+ **Comprehensive Data**: Stores millions of call records efficiently.
+ **Customizable Display**: Users can add extra fields like source IP, reorder fields, and filter data based on parameters.
+ **Filtering & Querying**:
    + Apply filters (e.g., termination, origination).
    + Advanced query builder allows multi-parameter searching (e.g., calls longer than 10 seconds and PDD less than 5 milliseconds).
    + Grouping of query results is limited due to large data sets.
+ **Server-Side Sorting**: Ensures optimal performance when dealing with large datasets.
+ **Data Export**: Download call data as CSV for further analysis.
+ **Recalculation Feature**: Adjusts CDR-based calculations when needed.
+ **Debugging Methodology**:
    + Unlike other systems, ConnexCS doesn't use CDRs for debugging.
    + Debugging is done via the logging section, which retains logs for 14 days.
    + CDRs are used primarily for billing and reporting.
    + Call logs are linked via call IDs for quick access to debugging information.
+ **Billing & Retention**:
    + CDRs are the foundation for billing calculations.

!!! note "Global CDR"
    View CDRs for all Customers and Carriers in **Global :material-menu-right: CDR**.

    Download and recalculate selected CDRs across several customers.

## Manage displayed Call Detail Records

The Customer **CDR** tab lists Call Detail Records associated with the selected account. Select the entries to display more detailed information. The created queries on the server get displayed on the portal.

* **Columns**: You can enable more CDR fields on the Columns tab on the right.
* **Column filter/sort**: Click the header of each column to filter and sort the displayed entries. Since each call generates a CDR, this function is specifically useful for customers with high call volumes.
* **Download**: Press **`Download`** to save the record to your hard drive in CSV format. You can also select the columns to include in the download.
* The **SQL Query** option allows you to run a query.

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

## Meta Fields in CDR

The **Meta** column in the CDR (Call Detail Records) section provides additional call-level attributes generated during call processing.

These fields offer insights into compliance checks and call authentication status.

### DNC (Do Not Call) Status

* **`us_dnc: not_found`**
  Indicates that the dialed number was checked against the **USA Do Not Call (DNC) registry** and was **not found** in the list.

  **Interpretation:**
  The number is not restricted by DNC regulations and is eligible for outbound communication.

---

### STIR/SHAKEN Attestation

* **`stir_shaken_attest: C`**
  Represents the STIR/SHAKEN attestation level assigned to the call.

  **Attestation Levels:**

  * **A** → Full attestation (highest level of trust)
  * **B** → Partial attestation
  * **C** → Gateway attestation (lowest level of trust)

  **Interpretation:**
  Level **C** indicates that the originating carrier cannot fully verify the caller identity and is only attesting to the entry point of the call into the network.

---

### Combined Meta Values

When multiple attributes are present, they are displayed together:

* **`stir_shaken_attest: C, us_dnc: not_found`**

  **Interpretation:**

  * The number is not listed in the USA DNC registry
  * The call has a low level of caller authentication (attestation level C)

---

### Summary

The Meta field enables:

* Visibility into **regulatory compliance checks** (e.g., DNC)
* Monitoring of **call authentication status** (STIR/SHAKEN)
* Better analysis for **routing, filtering, and trust evaluation**

---
  
## Recalculate Call Detail Record

When viewing CDRs for a specific customer, use the **`Recalc CDR`** button to refresh CDR data that may be inaccurate. Each Operation displays different fields.

* **Operations**
    * Refresh Credit (recalculates balances)
    * Refresh Summaries & Credit
    * Re-rate Calls, and Refresh Summaries & Credit
    * Adjust Call Duration, Re-rate Calls, and Refresh Summaries and Credit

* **Date (UTC)** (for Refresh operations)

* **Release Reason** (for Re-rate operations)- Select the reason for the call's termination (multiple selections allowed). This will revise the amount charged for the calls.

* **Min Duration** (for Adjust Call Duration operations) (Minimum Duration of calls that will be considered for re-calculation (3600 seconds))

* **New Duration** (for Adjust Call Duration operations) (All the calls with minimum duration of 3600 seconds will be recalculated with the value in the New Duration, for example 60 seconds).

!!! Example
    |Duration(seconds)|Cost per second($)|Total Cost($)|
    |-----------------|---------------|----------------|
    |3600(minimum duration)|0.0001|0.36|
    |60(new duration)|0.0001|0.006|

<img src= "/customer/img/recalc1png.png" width= "400" style="border: 2px solid #4472C4; border-radius: 8px;">

!!! danger "Rerating CDRs"
    If you select either "Rerate" options when recalculating CDRs, this will change your CDRs and isn't reversible.

    Original call durations get modified according to the selected criteria.

## Query Builder

Create advanced filters using any fields of the record. Select either Origination or Termination, or use the Query Builder to customize the data view.

* Match Type: Select "All" or "Any" calls to match.
* Select the CDR field from the drop-down, then "Add Rule" to define parameters to match.
* Select **Add Rule** to select extra fields and parameters to include in the custom query.
* Use **Add Group** to group sets of queries into a series of groups, creating complex, compound, and multi-vector queries.

    <img src= "/customer/img/querybuilder1.png" width= "500" style="border: 2px solid #4472C4; border-radius: 8px;">

!!! warning "Using Query Builder with large amounts of data"
    It's recommended not to run detailed and complex queries on large amounts of data. It's better to write more compact and pared down queries to retrieve this data.

    Unlike other providers, ConnexCS doesn't use CDRs for debugging. 
    
    You should be able to do all your debugging in the [**Logging**](https://docs.connexcs.com/logging/) section.

## Call Detail Record Time Zone

You can view the rated CDR's stored in UTC; day-to-day totals are also calculated in UTC. You can change the time zone of individual CDR records viewed from the time zone selector, but downloads will always be in UTC.
