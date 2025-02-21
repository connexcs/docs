# Dialogs

**Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: Dialogs**

## OVerview

**Dialogs** display the status of current (real-time) active calls on the account.

Use the **Refresh** button to get up-to-date information.

**Dialogs** display the status of presently active calls on the account. Use the **Refresh** button to get up-to-date information.

## Features and Benefits:

1. Displays currently active calls.
2. Calls in "Ended" state may still be visible for a short period due to:
   + Ongoing media server teardown processes.
   + Billing system finalization.
   + Ensuring all call-related data is logged correctly.
3. Typically, ended calls disappear within **60 seconds**.
4. Helps troubleshoot **call termination delays**.

!!! note "Ended Status"
    "Ended" indicates a call is over, but the telephony switches are still tearing down the call, including the Real-time Transport Protocol (RTP) stream and any final signaling. After that, the server gathers data for billing.

!!! note "Global Dialogs"
    You can also see the status of all the calls for specific Customers in **Global :material-menu-right: Dialogs**.

    Also, you can select and end the calls using **End Calls** and the calls are terminated using the MI Termination.
