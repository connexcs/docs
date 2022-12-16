# Firewall

**Setup :material-menu-right: Advanced :material-menu-right: Firewall**

The ConnexCS **Firewall** uses a threat detection system to blacklist attackers.

## Threat Detection System

**Threat Detection** is always on and, along with other key identifiers, analysing traffic hitting our platform. It primarily pays attention to authentication failures on both registration and the firewall at a particular threshold. If it exceeds certain criteria, the system will issue a system-wide block.

## Remove an IP from the Blocked list

If you inadvertently blocked a valid attempt from your client or carrier, you can unblock it by selecting the checkbox next to the IP address and clicking on the delete icon.

!!! note "Updating removed IP"
    After you remove an IP from the block list, it can take up to 15 minutes to get updated across the entire platform.

## False Positive

If you have a customer or carrier who sends a large volume of *unauthorized* calls, it's possible that they get added to the Block list.

## False Negatives

You may see attempts hit your switch that aren't authorized and then fail. These are attempts that our system has effectively declined the call to process. You don't need to take further action to stop these calls.

It's important that calls such as these are visible for two reasons:

1. If we block an IP address too soon, this may be a customer who is trying to connect with you. Once blocked, you lose the ability to view debugging information since the packets are dropped before logging.
2. If we block an IP address too soon, we lose the ability to identify any attack patterns and profiling information on an attack. Having some data allows us to see progressive attacks spanning many IP addresses.

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE0NjA2MzgyMV19
-->