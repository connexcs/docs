# Campaign Creation

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

         9. **Agents** **(*Only for Preview/Auto Dialer*)**: Select agents for the Auto/Preview Dialer. <br><img src= "/customer-portal/img/adcampaign1.png" style="border: 2px solid #4472C4; border-radius: 8px;"><figcaption><b>Figure 1:</b> Auto Dialer Campaign</figcaption></br> <br><img src= "/customer-portal/img/cc15new1.png" style="border: 2px solid #4472C4; border-radius: 8px; padding: 20px;"></br><br><img src= "/customer-portal/img/66ccnew1.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

5. Click on the `Confirm` button.

!!! Info "Custom Disposition Information"
      `DO NOT CALL`, `NOT INTERESTED`, `SALE MADE`, `CALL TRANSFERRED`, `BUSY`, `CALL BACK`, `DISCONNECTED NUMBER`, `DECLINED SALE`, `WRONG DETAILS` — Predefined Disposition Statuses.

      Users can create custom source statuses and dispositions while creating or updating campaigns.

6. Click on `See More` in the `Details` column.
7. A `Campaign Overview` will open. This interface is used for real-time monitoring of campaigns, lead stats, agent statuses, and calling activity. <br><img src= "/customer-portal/img/88cc.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br> <br><img src="/customer-portal/img/89ccnew.png" width= "800" style="border: 2px solid #4472C4; border-radius: 8px;"></br><br><img src= "/customer-portal/img/pdcampaign1.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
8. `State`: Whether the campaign is `Active` or `Inactive`.
9. `Edit Campaign`: Open the campaign settings for editing.
`Back`: Return to the previous page.
10. `Campaign Stats`: Provides real-time visual insights into the current status of the campaign's calling activities and agent activities.

      1. `Callers Chart`: Shows the current distribution of calls:
         1. `Call In Progress`: How many calls are actively happening (agents talking to leads).
         2. `Call Waiting`: How many calls are waiting to be connected.
      2. `Refresh Button`: To update agent statuses.
11. `Agents Chart` **(*Only for Preview/Auto Dialer*)**: Shows the status of agents:
         1. `Call Active`: How many agents are currently on a call.
         2. `Agent Waiting`: How many agents are idle (ready and waiting for a call).
12. `Campaign Agents` **(*Only for Preview/Auto Dialer*)**: List of agents assigned to the campaign. <br>`Manage Agents` **(*Only for Preview/Auto Dialer*)**: Allows you to add/remove agents from the campaign from the drop-down menu. Click `Confirm`.</br> <br><img src= "/customer-portal/img/34ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
For example: The selected agents will be added. <br><img src= "/customer-portal/img/35ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
13. `Lead Stats`: It shows you the total number of leads loaded into the campaign and what stage they're currently at during the calling process.

      1. `Total Leads`: Everyone you plan to call.

      2. `Dialable Leads`: How many you still can call.

      3. `In Progress`: Live calls happening now.

      4. `Call Answered`: People who actually picked up.

      5. `Failed Calls`: Calls that couldn't connect.

      6. `Dropped Calls`: Calls that got disconnected unexpectedly.
      7. `Agents in Queue` **(*Only for Auto/Preview Dialer*)**: Displays a list of agents who are waiting for a call or are ready to be assigned a call in the campaign.
14.  `Campaign Active Calls` **(*Only for Broadcast Dialer*)**: Allows you to monitor real-time performance and volume.

      1. `Phone`: The phone number being called.

      2. `Start Time`: When the call began.

      3. `Call ID`: A unique identifier for tracking or logging the call.

      4. `Call Status`: The current state (e.g., Ringing, Connected, In Progress, Completed, Failed).
