# Setting Up Your Dialer

## Overview

In this section, we will walk through configuring the dialers. These are only the general settings required to set up the dialing process for campaigns.

## Steps for setting up various Dialers

!!! warning "**Step 1** is applicable **only** for **Broadcast Dialer**. For **Preview and Auto Dialer**, please **start** from **Step 2**."

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

         6. **Flags** **(*Only in Preview Dialer*)**: Select `Transfer` flag to activate the option of call transfer in Preview Dialer.

         7. **Internal Destination** **(*Only in Broadcast Dialer*)**: Select your AI Agent from the drop-down menu.

         8. **Agents** **(*Only in Preview/Auto Dialer*)**: Select agents for the Auto/Preview Dialer. <br><img src= "/customer-portal/img/adcampaign1.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br> <br><img src= "/customer-portal/img/cc15new1.png" style="border: 2px solid #4472C4; border-radius: 8px; padding: 20px;"></br><br><img src= "/customer-portal/img/66ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

5. Click on the `Confirm` button.

!!! Info "Custom Disposition Information"
      `DO NOT CALL`, `NOT INTERESTED`, `SALE MADE`, `CALL TRANSFERRED`, `BUSY`, `CALL BACK`, `DISCONNECTED NUMBER`, `DECLINED SALE`, `WRONG DETAILS` — Predefined Disposition Statuses.

      Users can create custom source statuses and dispositions while creating or updating campaigns.