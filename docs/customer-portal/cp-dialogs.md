# Dialogs

**Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: Dialogs**

**Dialogs** display the status of presently active calls on the account. Use the **Refresh** button to get up-to-date information.

**Features and Benefits**:

1. Displays currently active calls.
2. Calls in "Ended" state may still be visible for a short period due to:
   + Ongoing media server teardown processes.
   + Billing system finalization.
3. Ensuring all call-related data is logged correctly.
4. Typically, ended calls disappear within 60 seconds.
5. Helps troubleshoot call termination delays.

!!! note "Ended Status"
    "Ended" indicates a call is over, but the telephony switches are still tearing down the call, including the Real-time Transport Protocol (RTP) stream and any final signaling. After that, the server gathers data for billing.
