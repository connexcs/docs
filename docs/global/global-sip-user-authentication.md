# SIP User Authentication

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Global / SIP User Authentication<br>
<strong>Audience</strong>: Administrators, Operations Teams, Network Engineers, Support Teams<br>
<strong>Difficulty</strong>: Intermediate<br>
<strong>Time Required</strong>: Approximately 15–30 minutes<br>
<strong>Prerequisites</strong>: Active ConnexCS account with access to the Global section; familiarity with SIP users and SIP authentication.<br>
<strong>Related Topics</strong>: <a href="/customer/auth/#sip-user-authentication">SIP User Authentication</a>, <a href="/global/">SIP Registration / Global</a>, <a href="/setup/config/sip-profile/">SIP Profile</a>, <a href="/customer-portal/cp-user-reg/">User Registration</a><br>
<strong>Next Steps</strong>: Navigate to <strong>Global . SIP User Authentication</strong> to review SIP users, manage SIP passwords, send messages, and access available user-management features.<br>

</details>

**Global :material-menu-right: SIP User Authentication**

## Overview

The **SIP User Authentication** section provides a centralized view of SIP Users across the account.

It allows administrators to:

* View the status of SIP Users.
* Reset a SIP User's password.
* Generate a new SIP password.
* Send a message to a SIP User.
* Select multiple SIP Users for **Bulk Edit**.
* Review **SIP User Latency** for an individual user.

For configuration details, see the [**SIP User Authentication**](https://docs.connexcs.com/customer/auth/#sip-user-authentication) documentation.

## SIP User Management

The SIP User Authentication section provides access to common actions for managing SIP Users.

1. **View SIP User Status**

    The page provides the current status information available for SIP Users, allowing administrators to review the users configured within the account.

2. **Reset SIP Password**

    Administrators can reset the SIP password for a user.

    The password reset functionality also provides an option to **generate a password**, allowing a new password to be created rather than manually entering one.

!!! note "Resetting or generating a SIP password changes the authentication credentials associated with the SIP User. Verify the affected user before applying the change."

### Send a Message

The SIP User Authentication interface provides an option to send a message to a SIP User.

This can be used to communicate with a selected SIP User without leaving the authentication interface.

## Bulk Edit

The **Bulk Edit** feature allows administrators to update supported settings for multiple SIP Users simultaneously.

To use Bulk Edit:

1. Select the SIP Users that you want to modify.
2. Click **Bulk Edit**.
3. Enable the toggle beside each field that you want to update.
4. Enter or select the required value.
5. Review the selected users and changes.
6. Save the changes.

The Bulk Edit window includes fields such as:

| Field               | Description                                                            |
| ------------------- | ---------------------------------------------------------------------- |
| **SIP Profile**     | Selects the SIP Profile to apply to the selected users.                |
| **Channels**        | Specifies the configured channel value for the selected users.         |
| **Flow Speed**      | Specifies the call flow rate in **CPS (Calls Per Second)**.            |
| **Protocol**        | Specifies the SIP protocol used by the users.                          |
| **Dial Pattern**    | Specifies the dialing pattern used by the users.                       |
| **NAT / SIP Ping**  | Controls the NAT/SIP Ping setting.                                     |
| **Voicemail**       | Controls the voicemail setting.                                        |
| **Retain DID**      | Controls the Retain DID setting.                                       |
| **Smart Extension** | Controls the Smart Extension setting.                                  |
| **Tech Prefix**     | Specifies the technical prefix.                                        |
| **CLI Prefix**      | Specifies the CLI prefix.                                              |
| **Strip Digits**    | Specifies the number of digits to strip.                               |
| **IP Whitelist**    | Specifies the IP addresses or ranges permitted for the selected users. |

## Latency

The **SIP User Latency** feature allows administrators to view latency information for a selected SIP User over time.

To view latency:

1. Select a SIP User.
2. Open **Latency**.
3. Review the **User Latency** chart.

Latency is displayed in **milliseconds (ms)** against a time-based axis.

The chart can be used to observe changes in the user's latency over the displayed period.

## Columns

The **Columns** panel allows you to control which SIP User Authentication fields are displayed in the table.

Use the available column controls to:

* Show or hide fields.
* Select the information relevant to your review.
* Adjust the information displayed in the SIP User list.

The exact complete list of columns is dependent on the fields exposed by the current SIP User Authentication interface.

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

The **SIP User Authentication** section can be used to:

* Review the status of SIP Users across the account.
* Reset a SIP User password.
* Generate a new SIP password.
* Send messages to SIP Users.
* Apply configuration changes to multiple SIP Users using **Bulk Edit**.
* Review SIP User latency over time.
* Search and filter SIP User records.
* Customize the SIP User Authentication table using available Columns and Custom Settings.

## Alternate Locations

SIP User Authentication can also be accessed from:

* **Customer :material-menu-right: [Customer Name] :material-menu-right: Auth**
* **Carrier :material-menu-right: [Carrier Name] :material-menu-right: Auth**

The Global view provides centralized access to SIP User Authentication records, while the Customer and Carrier views provide access within the respective account.

!!! info "More Information"
    For configuration details, see the [Customer :material-menu-right: SIP User Authentication](https://docs.connexcs.com/customer/auth/#sip-user-authentication).
