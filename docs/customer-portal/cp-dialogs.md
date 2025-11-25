# Dialogs

---
**Document Metadata** <br>**Category**: Customer Portal / Dialogs (Active Call View) </br>
**Audience**: Administrators, Support Engineers, Customer Success Team
<br>**Difficulty**: Intermediate </br>
**Time Required**: Approximately 15–20 minutes <br>**Prerequisites**: Active  Customer Portal account with permissions to view live-call (dialog) statistics </br>
<br>**Related Topics**: [Customer Portal – Latest Calls](https://docs.connexcs.com/customer-portal/cp-latest-calls/), [Customer Portal – CDR Viewer](https://docs.connexcs.com/customer-portal/cp-cdr/) </br>
**Next Steps**: After reviewing the Dialogs guide, log in to the Customer Portal → Dialogs, click the **Refresh** button to view up-to-date active calls, locate any sessions with abnormal status (e.g., “Ended” status lingering), then correlate those sessions with your logging/trace tools to identify any failed tear-down or RTP shutdown issues.

---

**Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: Dialogs**

**Dialogs** display the status of presently active calls on the account. Use the **Refresh** button to get up-to-date information.

!!! note "Ended Status"
    "Ended" indicates a call is over, but the telephony switches are still tearing down the call, including the Real-time Transport Protocol (RTP) stream and any final signaling. After that, the server gathers data for billing.
