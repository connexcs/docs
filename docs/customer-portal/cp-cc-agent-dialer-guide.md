# Agent Dialer Guide

---

<details>
<summary><strong>Document Metadata</strong></summary>
<br>

<strong>Category</strong>: Customer Portal / Contact Center – Agent Guide<br>
<strong>Audience</strong>: Agents, Support Team, Administrators<br>
<strong>Difficulty</strong>: Beginner to Intermediate<br>
<strong>Time Required</strong>: Approximately 15–25 minutes<br>
<strong>Prerequisites</strong>: Active ConnexCS account, Customer Portal module enabled, Contact Center and Dialer configured, and agent account credentials with dialer permissions.<br>
<strong>Related Topics</strong>: <a href="https://docs.connexcs.com/customer-portal/cp-cc-creating-agents/">Creating Agents</a>, <a href="https://docs.connexcs.com/customer-portal/cp-cc-setting-up-dialer/">Dialer Setup</a>, <a href="https://docs.connexcs.com/customer-portal/cp-cc-dialer-dashboard/">Dialer Dashboard</a>, <a href="https://docs.connexcs.com/customer-portal/cp-cc-campaign/">Campaign & Leadset Management</a><br>
<strong>Next Steps</strong>: Log in as an agent via the Customer Portal, access the dialer interface, review calling workflows, make/receive campaign-assigned calls, log outcomes as per script or process guidelines, and report any issues for follow-up.<br>

</details>

---

## Overview

!!! warning "Applies to Auto Dialer and Preview Dialer only"
    This section applies **only to Auto Dialer and Preview Dialer** campaigns.

The Agent Dialer Guide explains how agents log in, join a campaign, and manage calls using the dialer interface. Once logged in, agents can select their assigned campaign and access key tools such as call controls, customer details, and scripts.

- **Auto Dialer**: Calls are automatically connected to available agents when they are active, allowing continuous call flow. Agents can view customer information, flag invalid details, and submit dispositions after each call.
- **Preview Dialer**: Agents manually initiate each call, review customer details before dialing, and can update or edit lead information as needed.

Both dialer types allow agents to manage live calls with features like hold, transfer, mute, and end, ensuring smooth handling of customer interactions and accurate campaign reporting.

---

## Steps for Agent Caller

1. Enter your domain. The screen will prompt the agent to enter the `Username` and `Password`. Click `Login`.

    <img src="/customer-portal/img/agentdialer1.png" width="400" style="border: 2px solid #4472C4; border-radius: 8px;" alt="Agent Login">

2. Select the campaign (`Auto Dialer` / `Preview Dialer`) from the drop-down menu and click `Confirm`.<b><img src="/customer-portal/img/agentdialer2.png" style="border: 2px solid #4472C4; border-radius: 8px;" alt="Auto Dialer Campaign Selection"></br>

3. The Agent Dialer interface appears with the following fields:

    1. `Agent Status` toggle **(*Only for Auto Dialer*)**: Make sure it's **enabled (green)**, meaning the agent is active and ready to take calls.
    2. `Selected Campaign`: The campaign chosen from the drop-down menu.
    3. `Keypad`: For dialing numbers.
    4. `Script`: Displays the call script the agent should follow.<div style="background-color: #f5f5f5a1; padding: 15px; border-radius: 8px; margin: 10px 0;">
    <h4 style="margin-top: 0; margin-bottom: 10px;">Preview Dialer</h4>
    <img src="/customer-portal/img/agentdialer4.png" style="border: 2px solid #4472C4; border-radius: 8px; width: 100%;" alt="Preview Dialer Interface">
    </div>
    5. `Logout`: Lets the agent log off from the system.
    6. `Contact Information`: Customer details sourced from the **uploaded Leadset** or entered manually via the **Lead Form**. The contact information is updated after the agent receives the call.
    7. `Lead Preview` **(*Only for Preview Dialer*)**: Opens lead details for the agent.
    8. `Get Next Lead`: Becomes active after the current call ends and displays the next customer's information.

    <div style="background-color: #f5f5f5a1; padding: 15px; border-radius: 8px; margin: 10px 0;">
    <h4 style="margin-top: 0; margin-bottom: 10px;">Auto Dialer</h4>
    <img src="/customer-portal/img/agentdialer9.png" style="border: 2px solid #4472C4; border-radius: 8px; width: 100%;" alt="Auto Dialer Interface">
    </div>

    <div style="background-color: #f5f5f5a1; padding: 15px; border-radius: 8px; margin: 10px 0;">
    <h4 style="margin-top: 0; margin-bottom: 10px;">Preview Dialer </h4>
    <img src="/customer-portal/img/agentdialer3.png" style="border: 2px solid #4472C4; border-radius: 8px; width: 100%;" alt="Preview Dialer Lead Details">
    </div>

4. **Start the call**:

    - **Auto Dialer**: As soon as `Agent Status` is enabled, the agent starts receiving calls.
    - **Preview Dialer**: Click the `Call` button to phone the customer.

    <img src="/customer-portal/img/agentdialer5.png" width= "700" style="border: 2px solid #4472C4; border-radius: 8px;" alt="Call Button">

5. A `Live Call` window appears with the following controls:

    1. `Mute`: Mutes the agent's microphone.
    2. `End Call`: Disconnects the call.

    <div style="background-color: #f5f5f5a1; padding: 15px; border-radius: 8px; margin: 10px 0;">
    <h4 style="margin-top: 0; margin-bottom: 10px;">Auto Dialer</h4>
    <img src="/customer-portal/img/agentdialer10.png" style="border: 2px solid #4472C4; border-radius: 8px; width: 100%;" alt="Auto Dialer Live Call">
    </div>

    <div style="background-color: #f5f5f5a1; padding: 15px; border-radius: 8px; margin: 10px 0;">
    <h4 style="margin-top: 0; margin-bottom: 10px;">Preview Dialer</h4>
    <img src="/customer-portal/img/agentdialer6.png" style="border: 2px solid #4472C4; border-radius: 8px; width: 100%;" alt="Preview Dialer Live Call">
    </div>

6. After the call ends, the agent can either `Submit` the disposition and get ready for the next call, or click `Submit & Go On Pause` **(*Only for Auto Dialer*)**.

    <img src="/customer-portal/img/agentdialer7.png" width= "300" style="border: 2px solid #4472C4; border-radius: 8px;" alt="Submit Disposition">

7. Agents can also update the customer details using the `Edit` button.

8. Move to the next call:

    - **Preview Dialer**: Click `Get Next Lead` to dial the next customer.
    - **Auto Dialer**: The next call goes through automatically after **30 seconds**.

9. The updated `Leadset Overview` can be viewed.

    <div style="background-color: #f5f5f5a1; padding: 15px; border-radius: 8px; margin: 10px 0;">
    <h4 style="margin-top: 0; margin-bottom: 10px;">Auto Dialer</h4>
    <img src="/customer-portal/img/agentdialer11.png" style="border: 2px solid #4472C4; border-radius: 8px; width: 100%;" alt="Auto Dialer Leadset Overview">
    </div>

    <div style="background-color: #f5f5f5a1; padding: 15px; border-radius: 8px; margin: 10px 0;">
    <h4 style="margin-top: 0; margin-bottom: 10px;">Preview Dialer</h4>
    <img src="/customer-portal/img/agentdialer8.png" style="border: 2px solid #4472C4; border-radius: 8px; width: 100%;" alt="Preview Dialer Leadset Overview">
    </div>