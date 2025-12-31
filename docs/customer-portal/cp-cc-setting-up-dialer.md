# Setting Up the Dialer

---

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Customer Portal / Contact Center – Dialer Setup<br> <strong>Audience</strong>: Administrators, Engineers, Support Team<br> <strong>Difficulty</strong>: Intermediate<br> <strong>Time Required</strong>: Approximately 20–40 minutes<br> <strong>Prerequisites</strong>: Active ConnexCS account, Customer Portal module enabled, Contact Center feature installed, and appropriate administrative permissions to configure dialer settings in the Portal.<br> <strong>Related Topics</strong>: <a href="https://docs.connexcs.com/customer-portal/cp-contact-center/">Customer Portal – Contact Center Overview</a>, <a href="https://docs.connexcs.com/customer-portal/cp-cc-dialer-dashboard/">Dialer Dashboard</a>, <a href="https://docs.connexcs.com/customer-portal/cp-cc-install/">Customer Portal – Contact Center Installation</a>, <a href="https://docs.connexcs.com/customer/main/#contacts">Contacts Management</a><br> <strong>Next Steps</strong>: Define dialer configuration parameters (call settings, user permissions, call routing), assign roles, integrate customer/contact data, test outbound and inbound call flows via dialer, and verify dialer behavior under different scenarios.<br>

</details>

---

## Overview

The **Dialer** module automates outbound calling and helps streamline campaigns, agent operations, and customer interactions.

Setting up the dialer involves configuring all essential components, from creating campaigns and agents to preparing scripts and lead sets ensuring a smooth and efficient dialing process.

This guide walks you through each step required to set up and manage your dialer effectively.

---

## Setup Flow Overview

1. **[Campaign Creation](https://e42c09b3.docs-eri.pages.dev/customer-portal/cp-cc-campaign/)**:
   Begin by creating a **Campaign**, which defines your dialing strategy, type (Auto/Preview/Broadcast), and call handling preferences.

2. **[Agent Creation](https://e42c09b3.docs-eri.pages.dev/customer-portal/cp-cc-creating-agents/)**:
   Add and configure **Agents** who will handle calls associated with the campaign. Assign appropriate access and credentials.

3. **[Script Creation](https://e42c09b3.docs-eri.pages.dev/customer-portal/cp-cc-creating-scripts/)**:
   Prepare a **Script** for agents to follow during calls—this ensures consistent communication and better engagement.

4. **[Leadset Creation](https://e42c09b3.docs-eri.pages.dev/customer-portal/cp-cc-creating-leadsets/)**:
   Upload and manage your **Leadset**, which contains the list of numbers the dialer will call.

5. **[Agent Dialer Guide](https://e42c09b3.docs-eri.pages.dev/customer-portal/cp-cc-agent-dialer-guide/)**:
   Once setup is complete, agents can log in to the **Dialer Interface**, select their campaign, and begin handling calls.

!!! warning " Important Note"
      **Agent Creation**, **Script Creation**, and the **Agent Dialer Guide** apply only to `Auto Dialer` and `Preview Dialer`.

---
