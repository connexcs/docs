# Creating Agents

---

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Customer Portal / Contact Center – Agent Management<br> <strong>Audience</strong>: Administrators, Engineers, Support Team<br> <strong>Difficulty</strong>: Intermediate<br> <strong>Time Required</strong>: Approximately 15–25 minutes<br> <strong>Prerequisites</strong>: Active ConnexCS account, Customer Portal module enabled, Contact Center and Dialer configured, and appropriate administrative permissions to create and manage agents in the portal.<br> <strong>Related Topics</strong>: <a href="https://docs.connexcs.com/customer-portal/cp-contact-center/">Customer Portal – Contact Center Overview</a>, <a href="https://docs.connexcs.com/customer-portal/cp-cc-setting-up-dialer/">Dialer Setup</a>, <a href="https://docs.connexcs.com/customer-portal/cp-cc-campaign/">Campaign Management</a>, <a href="https://docs.connexcs.com/customer-portal/cp-cc-dialer-dashboard/">Dialer Dashboard</a><br> <strong>Next Steps</strong>: Add or import agent user accounts, assign appropriate roles and permissions, verify agent login to the Customer Portal, and test agent-specific call workflows (dialer access, call handling, agent reporting).<br>

</details>

---

## Overview

**Agent creation** is the process of setting up the agents who will be part of a call center campaign.

You can specify how many agents will be assigned to the campaign and add them to the system.

Additionally, bulk agent creation allows you to quickly set up multiple agents at once.

## Steps to add the Agent

### Create Bulk Agents

!!! Note "Important Note"
      Ensure the [**Internal Number Block**](https://docs.connexcs.com/customer/main/#steps-to-implement-internal-number-block) is configured before proceeding to Agent creation.

1. Click on `Bulk Create`. <br><img src= "/customer-portal/img/ccrevamp13.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

2. Select a `SIP Profile`.

3. Add the `Number of Agents` for participation in this campaign.

4. Click on `Create`. <br><img src= "/customer-portal/img/ccrevamp14.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

### Create a single Agent

1. `Add Agent`: Opens the New Agent window, allowing users to create and configure a single agent.
2. A window with the following fileds will appear:
   1. `SIP Profile` **(Required)**: Select the SIP profile to assign to the agent from the drop-down list.
   2. `Username` **(Required)**: Select an internal number from the drop-down list to use as the agent's username.
   3. `Password` **(Required)**: Enter a password or click the key icon to generate a strong password automatically.
      - `Copy Password`: Copies the generated or entered password using the copy icon.
      - **Note:** The password field allows users to enter their own password or generate one using the key icon.
   4. `Cancel`: Closes the New Agent window without saving the agent.
   5. `Save`: Saves the agent configuration and creates the agent.
   6. `Close (×)`: Closes the New Agent window. <br><img src= "/customer-portal/img/ccrevamp15.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>