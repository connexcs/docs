# Dialogs

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Customer Portal / Dialogs (Active Call View)<br>
<strong>Audience</strong>: Administrators, Support Engineers, Customer Success Team<br>
<strong>Difficulty</strong>: Intermediate<br>
<strong>Time Required</strong>: Approximately 15–20 minutes<br>
<strong>Prerequisites</strong>: Active Customer Portal account with permissions to view live-call (dialog) statistics<br>
<strong>Related Topics</strong>: <a href="https://docs.connexcs.com/customer-portal/cp-latest-calls/">Customer Portal – Latest Calls</a>, <a href="https://docs.connexcs.com/customer-portal/cp-cdr/">Customer Portal – CDR Viewer</a><br>
<strong>Next Steps</strong>: Log in to the Customer Portal → Dialogs, click Refresh to view current active calls, identify any sessions with abnormal statuses (e.g., lingering “Ended”), and correlate with logging/trace tools to diagnose tear-down or RTP shutdown issues.<br>

</details>

**Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: Dialogs**

**Dialogs** display the status of presently active calls on the account. Use the **Refresh** button to get up-to-date information.

!!! note "Ended Status"
    "Ended" indicates a call is over, but the telephony switches are still tearing down the call, including the Real-time Transport Protocol (RTP) stream and any final signaling. After that, the server gathers data for billing.
