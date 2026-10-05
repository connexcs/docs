# SIP Registration

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Global / SIP Registration<br>
<strong>Audience</strong>: Administrators, Operations Teams, Network Engineers, Support Teams<br>
<strong>Difficulty</strong>: Intermediate<br>
<strong>Time Required</strong>: Approximately 15–30 minutes<br>
<strong>Prerequisites</strong>: Active ConnexCS account with access to the Global section; familiarity with SIP registration and SIP users.<br>
<strong>Related Topics</strong>: 
<a href="/customer/auth/#sip-user-authentication">SIP User Authentication</a>,
<a href="/customer/auth/">Authentication</a>,
<a href="/setup/config/sip-profile/">SIP Profile</a>,
<a href="/customer-portal/cp-user-reg/">User Registration</a><br>
<strong>Next Steps</strong>: Navigate to <strong>Global :material-menu-right: SIP Registration</strong> and review the current inbound and outbound SIP registrations.<br>
</details>

**Global :material-menu-right: SIP Registrations**

## Overview

The **SIP Registration** section provides a view of the current list of registered SIP users.

It provides two registration views:

* **Inbound Registrations** — Displays active registrations of desk phones or SIP users into ConnexCS.
* **Outbound Registrations** — Displays active registrations from ConnexCS to external SIP endpoints.

!!! note "**SIP Registration has no supplementary documentation or configuration options.** This section is intended for viewing the current registration state."

## Inbound Registrations

**Inbound Registrations** display active registrations from desk phones or SIP users into ConnexCS.

This view can be used to review the current registration information for SIP users, including their username, IP address, protocol, NAT status, registration timing, and SIP-related details.

### Inbound Registration Fields

| Field                  | Description |
| ---------------------- | ----------- |
| **Username**           | Registered SIP user|
| **IP**                 | Current IP address of the registered SIP user|
| **Via**                | SIP Via information associated with the registration|
| **Received**           | Information about where the SIP request was received|
| **Protocol**           | Protocol from which the SIP user is registered|
| **Socket**             | Socket associated with the registration|
| **NAT**                | Indicates that far-end NAT traversal has modified the registration entry|
| **Contact**            | Contact information provided by the registered SIP endpoint|
| **Time to Live (TTL)** | Time associated with the registration request|
| **Last Modified**      | Time when the registration entry was last modified|
| **User Agent**         | User-agent information reported by the registered SIP device or client|
| **Expires**            | Registration expiry information|
| **Send**               | Allows you to send a message to the selected registration. Multiple entries can be selected if required|
| **Q**                  | SIP `q` value associated with the registration|
| **Cseq**               | SIP sequence number associated with the registration|
| **Flags**              | Flags associated with the registration|
| **Path**               | SIP Path information associated with the registration|
| **Methods**            | SIP methods associated with the registered endpoint|
| **SIP Instance**       | SIP instance information associated with the registered endpoint|
| **KV Store**           | Key-value store information associated with the registration|
| **Attr**               | Additional attributes associated with the registration|
| **Domain**             | SIP domain associated with the registration|
| **AOR**                | Address of Record associated with the SIP registration|
| **Registrar**          | Registrar associated with the SIP registration|
| **Binding**            | Binding information associated with the registered SIP endpoint|

### Sending a Message

The **Send** field allows you to send a message to a registered SIP user.

To send a message:

1. Select the required registration.
2. Click **Bulk Message Send**.
3. Enter the required message.
4. Send the message.

Multiple registration entries can be selected when required.

## Outbound Registrations

**Outbound Registrations** display active registrations from ConnexCS to external SIP endpoints.

This view allows you to review the registration state and connection information for outbound SIP registrations.

### Outbound Registration Fields

| Field                  | Description                                                           |
| ---------------------- | --------------------------------------------------------------------- |
| **AOR**                | The username and address that the ConnexCS switch has connected with. |
| **Registrar**          | Registrar associated with the outbound registration.                  |
| **Binding**            | Binding information associated with the outbound registration.        |
| **Expires**            | Time until the registration expires.                                  |
| **State**              | Current state of the outbound registration.                           |
| **Enabled**            | Indicates whether the outbound registration is enabled.               |
| **Proxy**              | Proxy associated with the outbound registration.                      |
| **Destination IP**     | Destination IP address for the outbound registration.                 |
| **IP**                 | IP address associated with the outbound registration.                 |
| **Cx Server**          | Server responsible for the outbound connection.                       |
| **Last Register Sent** | Time when the last registration was sent.                             |
| **Register Timeout**   | Expected timeout associated with the outbound registration.           |

## Columns

The **Columns** panel allows you to control which SIP Registration fields are displayed.

You can select or clear fields to customize the information shown in the Inbound or Outbound Registration view.

The available fields include the registration information described in the **Inbound Registration Fields** and **Outbound Registration Fields** tables above.

## Filters

The **Filters** panel allows you to narrow the displayed SIP Registration records based on available registration fields.

!!! note "The exact filter conditions available depend on the type of field being filtered."

## Custom Settings

### Custom Settings

The **Custom Settings** panel allows you to customize the appearance of the IP Authentication table.

1. **Theme**: The **Theme** setting controls the visual appearance of the IP Authentication table.

2. **Row Height**: The **Row Height** setting controls the amount of vertical space used for each IP Authentication record.

      * **Lower row height** — Displays more records within the available screen space.
      * **Higher row height** — Provides more spacing between records for easier reading.

These settings affect only the presentation of the IP Authentication list and do not change the underlying authentication configuration.

## Use Cases

The SIP Registration section can be used to:

* View the current list of registered SIP users.
* Review active inbound registrations.
* Review active outbound registrations.
* Check the current IP address of a registered SIP user.
* Review the protocol used for a registration.
* Identify NAT-related registration information.
* Review registration expiry information.
* Check the current state of outbound registrations.
* Identify the ConnexCS server responsible for an outbound registration.
* Review when the last outbound registration was sent.
* Send a message to selected inbound registrations.
* Customize the displayed registration fields using **Columns**.
