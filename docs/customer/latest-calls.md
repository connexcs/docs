# Latest Calls

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Customer Analytics & Monitoring / Real-Time Call Tracking<br>
<strong>Audience</strong>: Administrators, Engineers, Support Team<br>
<strong>Difficulty</strong>: Beginner to Intermediate<br>
<strong>Time Required</strong>: Approximately 15–30 minutes<br>
<strong>Prerequisites</strong>: Active ConnexCS account with Customer Portal access and permission to view call logs<br>
<strong>Related Topics</strong>: <a href="https://docs.connexcs.com/customer/cdr/">Customer → CDR</a>, <a href="https://docs.connexcs.com/customer/dialogs/">Customer → Dialogs</a><br>
<strong>Next Steps</strong>: After checking real-time call activity, drill into individual call details, export the list if needed, or continue to CDR and Dialogs for deeper analysis<br>

</details>

**Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: Latest Calls**

## Overview

The **Latest Calls** tab provides records of incoming and outgoing calls, along with powerful debugging tools. You can view recent calls and their full SIP traces, as well as simulate calls for testing and troubleshooting.

See [**Logging**](https://docs.connexcs.com/logging/) section for details on these functions. To view Latest Calls for all customers, go to the Logging section in ConnexCS.

## Features & Insights:

1. **Displays**:
      1. Carrier handling the call.
      2. Caller and receiver numbers.

2. **Useful for**:
      1. Debugging real-time call flow.
      2. Analyzing SIP trace logs at the packet level.

3. **Allows users to**:
      1. Simulate calls.
      2. View raw call data.

## Simulate Calls

To simulate a call:

1. Click on the `Call ID`.
2. Click **`Simulate`**.
3. Complete details for **Dialed Number, CLI/ANI, Switch IP** etc.
4. Click **`Simulate`**.

*(*CLI: Command Line Interface; ANI: Automatic Number Identification*)

![alt text][simulate-call]

[simulate-call]: /customer/img/52.png "Simulate Call"

!!! note "The simulate button simulates a closed circuit call. This closed circuit call identifies the Routing Issues."

!!! note "Know More"
     1. To know more about Providers [click here](https://docs.connexcs.com/feature-list/#providers).
     2. To know more about Billing [click here](https://docs.connexcs.com/billing/).
     3. To know more about Logs [click here](https://docs.connexcs.com/logging/#searching-the-logs).
     4. To know more about Graphs [click here](https://docs.connexcs.com/customer-portal/cp-dashboard/#graphs).
