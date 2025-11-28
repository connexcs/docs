# Firewall

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Setup & Configuration → Advanced Settings → Firewall<br>
<strong>Audience</strong>: Administrators, Engineers, Support Team<br>
<strong>Difficulty</strong>: Intermediate<br>
<strong>Time Required</strong>: 10–15 minutes<br>
<strong>Prerequisites</strong>: ConnexCS account with access to the Setup → Advanced section<br>
<strong>Related Topics</strong>: <a href="https://docs.connexcs.com/security/">Security</a>, <a href="https://docs.connexcs.com/customer/auth/#ip-authentication">IP Authentication</a>, <a href="https://docs.connexcs.com/setup/settings/servers/">Servers</a><br>
<strong>Next Steps</strong>: Access Control<br>

</details>

**Setup :material-menu-right: Advanced :material-menu-right: Firewall**

The ConnexCS **Firewall** uses a threat detection system to blacklist attackers.

## Configure Firewall

1. Click on the blue `+` button.
2. Enter the **IP Address** you want to block in the first field. You can only enter a **single IP Address**.
3. Select **Block** from the **Action** dropdown menu.
4. You can add additional information in the **Notes** section.

<img src= "/setup/img/firewall1.png" width= "400" style="border: 2px solid #4472C4; border-radius: 8px;">

## Threat Detection System

**Threat Detection** is always on and, along with other key identifiers, analysing traffic hitting our platform.

It primarily pays attention to authentication failures on both registration and the firewall at a particular threshold.

If it exceeds certain criteria, the system will issue a system-wide block.

## Remove an IP from the Blocked list

If you inadvertently blocked a valid attempt from your client or carrier, you can unblock it by selecting the checkbox next to the IP address and clicking on the delete icon.

!!! note "Updating removed IP"
    After you remove an IP from the block list, it can take up to 15 minutes to get updated across the entire platform.

## False Positive

If you have a customer or carrier who makes several unauthorised calls, they may get added to the Block list.

## False Negatives

You may see attempts hit your switch that aren't authorized and then fail.

These are attempts that our system has effectively declined to process.

You don't need to take further action to stop these calls.

It's important that calls such as these are visible for two reasons:

1. If we block an IP address too soon, this may be a customer who is trying to connect with you. Once blocked, you lose the ability to view debugging information since the packets get dropped before logging.
2. If we block an IP address too soon, we lose the ability to identify attack patterns and profile an attack. Having some data allows us to see progressive attacks spanning several IP addresses.
