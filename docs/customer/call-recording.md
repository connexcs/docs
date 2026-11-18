# Call Recording

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Management / Call Recording<br> <strong>Audience</strong>: Administrators, Operations Teams, Support Teams, Billing Teams<br> <strong>Difficulty</strong>: Intermediate<br> <strong>Time Required</strong>: Approximately 15–30 minutes<br> <strong>Prerequisites</strong>: Active ConnexCS account with access to Account Settings, Customer Routing, Customer DID, Logging, CDR, and Files.<br> <strong>Related Topics</strong>: CDR, Logging, Customer Routing, DID, Files, Media and Session Control<br> <strong>Next Steps</strong>: Enable the Call Recording package, configure recording for outbound or inbound calls, and use Logging, CDR, or Files to access recorded calls.<br>

</details>

## Overview

The **Call Recording** feature allows ConnexCS to record calls and make the resulting recordings available for review and playback or download.

Call Recording can be enabled for **outbound** and **inbound** calls through the relevant call-routing and DID configuration.

Once enabled, recordings can be accessed through several areas of ConnexCS, including **Logging**, **CDR**, and **Files**.

## Key Features

The Call Recording feature provides the following capabilities:

* **Call recording for outbound calls** — Enable recording through the Customer's Routing configuration.
* **Call recording for inbound calls** — Enable recording through the Customer's DID configuration.
* **Call Recording package** — Enable the required **Wholesale Call Recording (per minute)** package from Account Settings.
* **Playback from Logging** — Access a recording directly from the Call ID details.
* **Download from CDR** — Add the Call Recording column to the CDR view and access the recording download option.
* **Access through Files** — Locate recordings through the **Files :material-menu-right: recording** folder.

## Benefits

Call Recording can help with:

* **Call review** — Listen to recorded calls when reviewing call activity.
* **Troubleshooting** — Use recordings when investigating call-related issues.
* **Support** — Review calls when assisting with customer or operational queries.
* **Call verification** — Listen to recordings when validating call behavior or outcomes.
* **Centralized access** — Access recordings through Logging, CDR, or Files.

!!! note "Call Recording must first be enabled at the account level through the **Wholesale Call Recording (per minute)** package before configuring recording for inbound or outbound calls."

## How to Use This Feature

### How to Enable Call Recording?

Before enabling recording for individual calls, the Call Recording package must be enabled for the account.

1. Navigate to **Setup :material-menu-right: Settings :material-menu-right: Account**.
2. Locate the **Wholesale Call Recording (per minute)** package.
3. Click on **Subscribe** to enable the package.

<img src= "/customer/img/callrecord1.png" style="border: 2px solid #4472C4; border-radius: 8px;">

Once the package is enabled, Call Recording can be configured for outbound and inbound calls.

---

### Where to Use/Enable This Feature for Outbound Calls?

To enable Call Recording for **outbound calls**:

1. Navigate to **Management :material-menu-right: Customer**.
2. Select the required **Customer**.
3. Navigate to **Routing**.
4. Open **Media and Session Control**.
5. Locate **Call Recording**.
6. Click the dropdown.
7. Enable from various options:

    | Option                  | Meaning                                                                 |
    | ----------------------- | ----------------------------------------------------------------------- |
    | **Disabled**            | Call recording is not enabled.                                          |
    | **1% Sampling**         | Approximately 1% of eligible calls are selected for recording.          |
    | **5% Sampling**         | Approximately 5% of eligible calls are selected for recording.          |
    | **25% Sampling**        | Approximately 25% of eligible calls are selected for recording.         |
    | **50% Sampling**        | Approximately 50% of eligible calls are selected for recording.         |
    | **Enabled (Always On)** | Recording is enabled for all eligible calls rather than using sampling. |

!!! Example "Example"
    If **1,000 eligible calls** are handled and **1% Sampling** is selected, approximately **10 calls** would be selected for recording.

    With the same 1,000 calls:

   * **5%** → approximately 50 calls
   * **25%** → approximately 250 calls
   * **50%** → approximately 500 calls
   * **Always On** → all eligible calls

<img src= "/customer/img/callrecord2.png" style="border: 2px solid #4472C4; border-radius: 8px;">

---

### Where to Use/Enable This Feature for Inbound Calls?

To enable Call Recording for **inbound calls**:

1. Navigate to **Management :material-menu-right: Customer**.
2. Select the required **Customer**.
3. Navigate to **DID**.
4. Click on the required DID. <br><img src= "/customer/img/callrecord3.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
5. Open **Media**.
6. Locate **Call Recording**.
7. Click the dropdown.
8. Enable Call Recording.

<br><img src= "/customer/img/callrecord4.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

This enables Call Recording for the applicable inbound DID configuration.

## Call View Recordings

Once Call Recording has been enabled, recordings can be accessed from several locations.

### Option 1: View the Recording from Logging

1. Navigate to the **Logging** section.
2. Locate the required **Call ID**.
3. Click the **Call ID**.
4. Locate the **Call Recording** parameter.
5. Use the available playback option to play the recording.

<br><img src= "/customer/img/callrecord5.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

This provides a convenient way to listen to a recording directly from the call's logging information.

### Option 2: Download the Recording from CDR

1. Navigate to **Management :material-menu-right: Customer :material-menu-right: CDR**.
2. Open the **Columns** panel.
3. Add the **Call Recording** column.
4. Refresh the CDR list.
5. Locate the required call.
6. Use the option available in the **Call Recording** column to download the recording.

<img src= "/customer/img/callrecord6.png" style="border: 2px solid #4472C4; border-radius: 8px;">

!!! note "The **Call Recording** column must be added to the CDR view before the recording download option is displayed."

### Option 3: Access Recordings from Files

1. Navigate to the **Files** section.
2. Open the **recording** folder.
3. Locate the required recording.

<img src= "/customer/img/callrecord7.png" style="border: 2px solid #4472C4; border-radius: 8px;">

The Files section provides direct access to the stored call recordings.

## Call Recording Workflow

The overall workflow is:

**Enable Package**
:material-arrow-right: **Configure Outbound/Inbound Recording**
:material-arrow-right: **Make/Receive Recorded Call**
:material-arrow-right: **Access Recording**
:material-arrow-right: **Play or Download Recording**

!!! tip "Quick Reference"
    **Account-level enablement:** `Setup :material-menu-right: Settings :material-menu-right: Account :material-menu-right: Wholesale Call Recording (per minute)`
    **Outbound:** `Management :material-menu-right: Customer :material-menu-right: Routing :material-menu-right: Media and Session Control :material-menu-right: Call Recording`
    **Inbound:** `Management :material-menu-right: Customer :material-menu-right: DID :material-menu-right: Media :material-menu-right: Call Recording`
    **View:** `Logging :material-menu-right: Call ID :material-menu-right: Call Recording`
    **Download:** `Management :material-menu-right: Customer :material-menu-right: CDR :material-menu-right: Call Recording`
    **Files:** `Files :material-menu-right: recording`
