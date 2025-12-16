# Agent Dialer Guide

---

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Customer Portal / Contact Center – Agent Guide<br> <strong>Audience</strong>: Agents, Support Team, Administrators<br> <strong>Difficulty</strong>: Beginner to Intermediate<br> <strong>Time Required</strong>: Approximately 15–25 minutes<br> <strong>Prerequisites</strong>: Active ConnexCS account, Customer Portal module enabled, Contact Center and Dialer configured, and agent account credentials with dialer permissions.<br> <strong>Related Topics</strong>: <a href="https://docs.connexcs.com/customer-portal/cp-cc-creating-agents/">Creating Agents</a>, <a href="https://docs.connexcs.com/customer-portal/cp-cc-setting-up-dialer/">Dialer Setup</a>, <a href="https://docs.connexcs.com/customer-portal/cp-cc-dialer-dashboard/">Dialer Dashboard</a>, <a href="https://docs.connexcs.com/customer-portal/cp-cc-campaign/">Campaign & Leadset Management</a><br> <strong>Next Steps</strong>: Log in as an agent via the Customer Portal, access the dialer interface, review calling workflows, make/receive campaign-assigned calls, log outcomes as per script or process guidelines, and report any issues for follow-up.<br>

</details>

---

## Overview

!!! warning "This section applies **only to Auto Dialer and Preview Dialer** campaigns."

The Agent Dialer Guide explains how agents log in, join a campaign, and manage calls using the dialer interface. Once logged in, agents can select their assigned campaign and access key tools such as call controls, customer details, and scripts.

For **Auto Dialer**, calls are automatically connected to available agents when they are active, allowing continuous call flow. Agents can view customer information, flag invalid details, and submit dispositions after each call.

For **Preview Dialer**, agents manually initiate each call, review customer details before dialing, and can update or edit lead information as needed.

Both dialer types allow agents to manage live calls with features like hold, transfer, mute, and end, ensuring smooth handling of customer interactions and accurate campaign reporting.

## Steps for Agent Caller

1. Enter your domain. The screen will prompt the agent to enter the `Username` and `Password`. Click on `Login`. <br><img src="/customer-portal/img/37cc.png" width= "400" style="border: 2px solid #4472C4; border-radius: 8px;">
2. Select the campaign `Auto Dialer/Preview Dialer` from the drop-down menu and click `Confirm`. <div style="background-color: #f5f5f5a1; padding: 15px; border-radius: 8px; margin: 10px 0;">
         <h4 style="margin-top: 0; margin-bottom: 10px;">Auto Dialer</h4>
         <img src="/customer-portal/img/59ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px; width: 100%;" alt="Auto Dialer Campaign Configuration">
         </div>

3. An Agent Dialer interface with the following fields will appear:
      1. `Agent Status` toggle **(*Only for Auto Dialer*)**: Make sure its `enabled (green)`, meaning the agent is active and ready to take calls
      2. `Selected Campgain` from the drop-down menu.
      3. `Keypad` for dialing the numbers.
      4. `Script`: Displays the call script the agent should follow.
      5. `Logout` for the agent to log off from the system. <div style="background-color: #f5f5f5a1; padding: 15px; border-radius: 8px; margin: 10px 0;">
         <h4 style="margin-top: 0; margin-bottom: 10px;">Auto Dialer</h4>
         <img src="/customer-portal/img/60ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px; width: 100%;" alt="Auto Dialer">
         </div><div style="background-color: #f5f5f5a1; padding: 15px; border-radius: 8px; margin: 10px 0;">
         <h4 style="margin-top: 0; margin-bottom: 10px;">Preview Dialer</h4>
         <img src="/customer-portal/img/39ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px; width: 100%;" alt="Preview Dialer">
         </div>
      6. `Contact information` of the customer sourced from the **uploaded Leadset** or entered manually via the **Lead Form**. The contact information of the customer will be updated after the agent receives the call.
      7. `Lead Preview` **(*Only for Preview Dialer*)**: Opens lead details for the agent.
      8. `Invalid Details` **(*Only for Auto Dialer*)**: Lets the agent flag the lead if information is incorrect or incomplete.
      9. `Get Next Led` **(*Only for Auto Dialer*)**: It becomes active after the current call is concluded and displays the information of the next customer.
      10. As soon as the `Agent Status` is enabled, the agent starts getting calls. **(*Only for Auto Dialer*)** 
      11. `Call` **(*Only for Preview Dialer*)**: Hit the call button to phone the customer. <br><img src="/customer-portal/img/cc40new1.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
      12. A `Live Call` window will appear. <div style="background-color: #f5f5f5a1; padding: 15px; border-radius: 8px; margin: 10px 0;">
         <h4 style="margin-top: 0; margin-bottom: 10px;">Auto Dialer</h4>
         <img src="/customer-portal/img/61ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px; width: 100%;" alt="Auto Dialer">
         </div><div style="background-color: #f5f5f5a1; padding: 15px; border-radius: 8px; margin: 10px 0;">
         <h4 style="margin-top: 0; margin-bottom: 10px;">Preview Dialer</h4>
         <img src="/customer-portal/img/41ccnew1.png" style="border: 2px solid #4472C4; border-radius: 8px; width: 100%;" alt="Preview Dialer">
         </div>
          1. `Hold`: Allows your agent to place the call on hold.
          2. `Transfer`: Transfer call to another agent or manager.
          3. `Mute`: Allows your agent to mute your call.
          4. `Park`: **Currently *NOT IN USE***.
          5. `Conference`: **Currently *NOT IN USE***.
          6. `Keypad`: Displays the number keypad.
          7. `End`: Allows your agent to disconnect the call.
4. After the call ends, your agent can either `Submit` the disposition and get ready for the next call or `Submit & Go On Pause`. **(*For Auto Dialer*)** <br><img src="/customer-portal/img/62ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
5. A window will prompt you to either `Set Disposition` or `Update User Details`.  **(*For Preview Dialer*)** <br><img src="/customer-portal/img/42cc.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br> <img src="/customer-portal/img/43ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px;">
6. `Invalid Details`: Lets the agent flag the lead if information is incorrect or incomplete.
7. Your agents can also the update the customer details using the `Edit` button.
8. Click on `Get Next Lead` to dial the next customer. **(* Only For Preview Dialer*)**
9. The next call will go through after **30 seconds**. **(* Only For Auto Dialer*)**
10. The updated `Campaign Overview` can be seen. <div style="background-color: #f5f5f5a1; padding: 15px; border-radius: 8px; margin: 10px 0;">
         <h4 style="margin-top: 0; margin-bottom: 10px;">Auto Dialer</h4>
         <img src="/customer-portal/img/851ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px; width: 100%;" alt="Auto Dialer">
         </div><div style="background-color: #f5f5f5a1; padding: 15px; border-radius: 8px; margin: 10px 0;">
         <h4 style="margin-top: 0; margin-bottom: 10px;">Preview Dialer</h4>
         <img src="/customer-portal/img/84ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px; width: 100%;" alt="Preview Dialer">
11. The updated `Leadset Overview` can be seen. <div style="background-color: #f5f5f5a1; padding: 15px; border-radius: 8px; margin: 10px 0;">
         <h4 style="margin-top: 0; margin-bottom: 10px;">Auto Dialer</h4>
         <img src="/customer-portal/img/8511ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px; width: 100%;" alt="Auto Dialer">
         </div><div style="background-color: #f5f5f5a1; padding: 15px; border-radius: 8px; margin: 10px 0;">
         <h4 style="margin-top: 0; margin-bottom: 10px;">Preview Dialer</h4>
         <img src="/customer-portal/img/85ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px; width: 100%;" alt="Preview Dialer">
