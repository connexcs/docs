# Campaign Creation

---

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Customer Portal / Contact Center – Campaign Management<br> <strong>Audience</strong>: Administrators, Engineers, Support Team<br> <strong>Difficulty</strong>: Intermediate<br> <strong>Time Required</strong>: Approximately 20–40 minutes<br> <strong>Prerequisites</strong>: Active ConnexCS account, Customer Portal module enabled with Contact Center and Dialer configured, and permissions to manage campaigns and access contact/customer data.<br> <strong>Related Topics</strong>: <a href="https://docs.connexcs.com/customer-portal/cp-contact-center/">Customer Portal – Contact Center Overview</a>, <a href="https://docs.connexcs.com/customer-portal/cp-cc-setting-up-dialer/">Dialer Setup</a>, <a href="https://docs.connexcs.com/customer-portal/cp-cc-dialer-dashboard/">Dialer Dashboard</a>, <a href="https://docs.connexcs.com/customer/main/#contacts">Contacts Management</a><br> <strong>Next Steps</strong>: Create a new campaign, configure target customer/contact lists, assign agents, schedule call sequences, monitor campaign progress via dashboard, and verify call logging and reporting.<br>

</details>

---

## Overview

Campaign is designed to efficiently manage and monitor calling activities, agent performance, and lead engagement.

It involves configuring various elements to optimize outreach, customer service, or sales efforts.

!!! warning "**Step 1** is applicable **only** for **Broadcast Dialer**. For **Preview and Auto Dialer**, please **start** from **Step 2**."

## Steps for Campaign Creation

1. [Click here](https://docs.connexcs.com/class5/ai-agent/#steps-to-create-ai-agent) to create an AI Agent.
2. Navigate to **Customer Portal :material-menu-right: Contact Center**.
3. In the `Campaign` tab, click `Add Campaign`. <br><img src= "/customer-portal/img/14ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
4. A Window will pop-up with two sections:
      1. **Basic Info**:
         1. **Name**: Enter the Campaign name.
         2. **Campaign Type**: From the drop-down select `Auto Dialer/Preiew Dialer/Broadcast`.
         3. **Agent Script**: Select a pre-configured script for agents to deliver during customer interactions.
         4. **State**: Configure the campaign's operational status by setting it to either `Active` (currently available for use) or `Inactive` (disabled or paused).
         5. **Notes**: An optional field to pen down any important information.
      2. **Config**:
         1. **Caller ID**: The `CLI` used for this campaign.
         2. **Channels (*Only for Boradcast Dialer*)**: Number of calls to initiate concurrently.
         3. **Source Status**: Select `Ready`/`New` or Custom Source Status for call origination. If no status is selected the calls won't be sent.
         4. **Outbound Multiplier** **(*Only for Auto Dialer*)**: It controls how many outbound calls your system (or agent/reseller) can make at the same time.
         5. **Custom Disposition (*Only for Auto/Preview Dialer*)**: A user-defined set of call outcome labels that agents are required to select after each call, enabling structured tracking, systematic reporting, and optimized follow-up workflows.
            1. `Agent Unavailable`: Call was made but hung up due to agent being busy (mostly in auto dialers).
            2. `Answered`: Call is connected.
            3. `Connection Error`: Originate method failed to work.
            4. `Error`: An error occurred at the code level.
            5. `Connected`: AI call was answered, but disposition wasn't saved.
            6. `Rejected`: Call ended without pickup (user or server may have hung up).
            7. `Ringing`: AI-initiated call is ringing.
            8. `In Progress`: Call data is being allocated.

         6. **Flags** **(*Only for Preview Dialer*)**: Select `Transfer` flag to activate the option of call transfer in Preview Dialer.
         7. **Non AI Destination** **(*Only for Broadcast Dialer*)**:
            1. When the **toggle switch** is turned **ON**, the system activates **IVR mode**. In this mode, the Internal Destination field displays a list of available IVR options for selection.
            2. When the **IVR switch** is turned **OFF**, the system operates in **AI Agent mode**. In this mode, the Internal Destination field displays a list of configured AI Agents to choose from.

         8. **Internal Destination** **(*Only for Broadcast Dialer*)**: Select your AI Agent from the drop-down menu.

         9. **Agents** **(*Only for Preview/Auto Dialer*)**: Select agents for the Auto/Preview Dialer. <div style="background-color: #f5f5f5a1; padding: 15px; border-radius: 8px; margin: 10px 0;">
         <h4 style="margin-top: 0; margin-bottom: 10px;">Auto Dialer Campaign</h4>
         <img src="/customer-portal/img/adcampaign1.png" style="border: 2px solid #4472C4; border-radius: 8px; width: 100%;" alt="Auto Dialer Campaign Configuration">
         </div> <div style="background-color: #f5f5f5a1; padding: 15px; border-radius: 8px; margin: 10px 0;">
         <h4 style="margin-top: 0; margin-bottom: 10px;">Preview Dialer Campaign</h4>
         <img src="/customer-portal/img/cc15new1.png" style="border: 2px solid #4472C4; border-radius: 8px; width: 100%;" alt="Preview Dialer Campaign Setup">
         </div><div style="background-color: #f5f5f5a1; padding: 15px; border-radius: 8px; margin: 10px 0;">
         <h4 style="margin-top: 0; margin-bottom: 10px;">Broadcast Dialer Campaign</h4>
         <img src="/customer-portal/img/66ccnew1.png" style="border: 2px solid #4472C4; border-radius: 8px; width: 100%;" alt="Broadcast Dialer Campaign Interface">
         </div>

5. Click on the `Confirm` button.
6. Click on `See More` in the `Details` column.
7. A `Campaign Overview` will open. This interface is used for real-time monitoring of campaigns, lead stats, agent statuses, and calling activity.<div style="background-color: #f5f5f5a1; padding: 15px; border-radius: 8px; margin: 10px 0;">
         <h4 style="margin-top: 0; margin-bottom: 10px;">Broadcast Dialer Campaign</h4>
         <img src="/customer-portal/img/88cc.png" style="border: 2px solid #4472C4; border-radius: 8px; width: 100%;" alt="Auto Dialer Campaign Configuration">
         </div> <div style="background-color: #f5f5f5a1; padding: 15px; border-radius: 8px; margin: 10px 0;">
         <h4 style="margin-top: 0; margin-bottom: 10px;">Auto Dialer Campaign</h4>
         <img src="/customer-portal/img/89ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px; width: 100%;" alt="Preview Dialer Campaign Setup">
         </div><div style="background-color: #f5f5f5a1; padding: 15px; border-radius: 8px; margin: 10px 0;">
         <h4 style="margin-top: 0; margin-bottom: 10px;">Preview Dialer Campaign</h4>
         <img src="/customer-portal/img/pdcampaign1.png" style="border: 2px solid #4472C4; border-radius: 8px; width: 100%;" alt="Broadcast Dialer Campaign Interface">
         </div>
8. `State`: Whether the campaign is `Active` or `Inactive`.
9. `Edit Campaign`: Open the campaign settings for editing.
10. `Back`: Return to the previous page.
11. `Campaign Stats`: Provides real-time visual insights into the current status of the campaign's calling activities and agent activities.

      1. `Callers Chart`: Shows the current distribution of calls:
         1. `Call In Progress`: How many calls are actively happening (agents talking to leads).
         2. `Call Waiting`: How many calls are waiting to be connected.
      2. `Refresh Button`: To update agent statuses.
      3. `Agents Chart` **(*Only for Preview/Auto Dialer*)**: Shows the status of agents:
         1. `Call Active`: How many agents are currently on a call.
         2. `Agent Waiting`: How many agents are idle (ready and waiting for a call).
         3. `Campaign Agents` **(*Only for Preview/Auto Dialer*)**: List of agents assigned to the campaign. <br>`Manage Agents` **(*Only for Preview/Auto Dialer*)**: Allows you to add/remove agents from the campaign from the drop-down menu. Click `Confirm`.</br> <br><img src= "/customer-portal/img/34ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br> For example: The selected agents will be added. <br><img src= "/customer-portal/img/35ccnew.png" width = "400" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
         4. `Lead Stats`: It shows you the total number of leads loaded into the campaign and what stage they're currently at during the calling process.
         5. `Total Leads`: Everyone you plan to call.
         6. `Dialable Leads`: How many you still can call.
         7. `In Progress`: Live calls happening now.
         8. `Call Answered`: People who actually picked up.
         9. `Failed Calls`: Calls that couldn't connect.
         10. `Dropped Calls`: Calls that got disconnected unexpectedly.
         11. `Agents in Queue` **(*Only for Auto/Preview Dialer*)**: Displays a list of agents who are waiting for a call or are ready to be assigned a call in the campaign.
         12. `Campaign Active Calls` **(*Only for Broadcast Dialer*)**: Allows you to monitor real-time performance and volume.
         13. `Phone`: The phone number being called.
         14. `Start Time`: When the call began.
         15. `Call ID`: A unique identifier for tracking or logging the call.
         16. `Call Status`: The current state (e.g., Ringing, Connected, In Progress, Completed, Failed).

!!! Info "Custom Disposition Information"
      `DO NOT CALL`, `NOT INTERESTED`, `SALE MADE`, `CALL TRANSFERRED`, `BUSY`, `CALL BACK`, `DISCONNECTED NUMBER`, `DECLINED SALE`, `WRONG DETAILS` — Predefined Disposition Statuses.
      Users can create custom source statuses and dispositions while creating or updating campaigns.
