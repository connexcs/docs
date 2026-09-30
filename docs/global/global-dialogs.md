# Global Dialogs

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Global / Dialogs<br> <strong>Audience</strong>: Administrators, Operations Teams, Engineers, Support Teams<br> <strong>Difficulty</strong>: Intermediate<br> <strong>Time Required</strong>: Approximately 15–30 minutes<br> <strong>Prerequisites</strong>: Active ConnexCS account with access to the Global section; familiarity with active calls and call routing.<br> <strong>Related Topics</strong>: <a href="https://docs.connexcs.com/customer/dialogs">Dialogs</a>, Global, Customer Management, Routing<br> <strong>Next Steps</strong>: Navigate to <strong>Global :material-menu-right: Dialog</strong>, review active calls across the account, use the available columns and filters to locate specific calls, and monitor their current state.<br>

</details>

**Global :material-menu-right: Dialogs**

## Overview

The **Global Dialogs** section provides a centralized view of **all active calls across the entire account**.

It allows administrators and operations teams to monitor active calls without navigating through individual Customer accounts.

The Dialog view provides information about the call, including its identifier, destination, current state, associated Customer and Provider, source, duration, and the ConnexCS server handling the call.

## Dialog List

The Global Dialogs table provides the following fields:

| Field           | Description                                                 |
| --------------- | ----------------------------------------------------------- |
| **Call ID**     | Unique identifier assigned to the active call.              |
| **Destination** | Destination number or endpoint associated with the call.    |
| **State**       | Current state of the active call.                           |
| **Customer**    | Customer associated with the call.                          |
| **Provider**    | Provider handling the call.                                 |
| **Source**      | Source or originating information associated with the call. |
| **Duration**    | Current duration of the active call.                        |
| **CX Server**   | ConnexCS server currently handling the call.                |

## Columns

The **Columns** panel allows you to control which fields are displayed in the Dialog table.

Use the column selection options to show or hide fields according to your monitoring requirements.

## Searching

Use the **Search** field to quickly locate an active call or narrow the displayed Dialog records.

Searching can be useful when looking for a specific **Call ID, Customer, Provider, Destination**, or other available information.

## Filters

The **Filters** panel allows you to narrow the active call list based on available Dialog fields.

For example, filters can be used to focus the view on:

* A specific **Customer**
* A specific **Provider**
* A particular **State**
* A specific **Destination**
* A particular **CX Server**

This is useful when investigating active traffic or monitoring calls associated with a particular customer or provider.

## Custom Settings

The **Custom Settings** panel allows you to adjust the presentation of the Dialog table like **Theme** or **Row Height/Width**.

These settings change how the active call information is displayed without changing the underlying call data.

## Monitoring Active Calls

The Global Dialog view can be used to monitor calls currently active across the account.

The available fields provide visibility into:

* **Which call** is active — using the Call ID.
* **Where the call is going** — using Destination.
* **Current call state** — using State.
* **Which Customer** is associated with the call.
* **Which Provider** is handling the call.
* **Where the call originated** — using Source.
* **How long the call has been active** — using Duration.
* **Which ConnexCS server** is handling the call.

## Use Cases

The Global Dialog view can be used to:

* Monitor active calls across the entire account.
* Locate a specific active call using its Call ID.
* Review active calls for a particular Customer.
* Review traffic being handled by a specific Provider.
* Monitor the current state and duration of active calls.
* Identify which CX Server is handling a call.
* Support real-time troubleshooting and operational monitoring.

## Alternate Location

Dialogs can also be accessed from:

* **Customer :material-menu-right: [Customer Name] :material-menu-right: Dialogs**

The Global Dialog view provides an account-wide view, while the Customer Dialog view provides access to active calls for an individual Customer.

!!! info "More Information"
    For more information about **Dialogs**, including configuration details, see the [Customer > Dialogs](https://docs.connexcs.com/customer/dialogs/) section.
