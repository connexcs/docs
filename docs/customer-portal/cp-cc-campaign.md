# Campaign Creation

---

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Customer Portal / Contact Center – Campaign Management<br> <strong>Audience</strong>: Administrators, Engineers, Support Team<br> <strong>Difficulty</strong>: Intermediate<br> <strong>Time Required</strong>: Approximately 20–40 minutes<br> <strong>Prerequisites</strong>: Active ConnexCS account, Customer Portal module enabled with Contact Center and Dialler configured, and permissions to manage campaigns and access contact/customer data.<br> <strong>Related Topics</strong>: <a href="https://docs.connexcs.com/customer-portal/cp-contact-center/">Customer Portal – Contact Center Overview</a>, <a href="https://docs.connexcs.com/customer-portal/cp-cc-setting-up-dialer/">Dialler Setup</a>, <a href="https://docs.connexcs.com/customer-portal/cp-cc-dialler-dashboard/">Dialler Dashboard</a>, <a href="https://docs.connexcs.com/customer/main/#contacts">Contacts Management</a><br> <strong>Next Steps</strong>: Create a new campaign, configure target customer/contact lists, assign agents, schedule call sequences, monitor campaign progress via dashboard, and verify call logging and reporting.<br>

</details>

---

## Overview

Campaign is designed to efficiently manage and monitor calling activities, agent performance, and lead engagement.

It involves configuring various elements to optimize outreach, customer service, or sales efforts.

## Steps for Campaign Creation

1. Navigate to **Customer Portal :material-menu-right: Contact Center**.
2. In the `Campaign` tab, click `Add Campaign`.

    <img src="/customer-portal/img/ccrevamp7.png" width= "700" style="border: 2px solid #4472C4; border-radius: 8px;">

3. A window will pop up:
    1. **GENERAL**:
        1. **Name**: Enter the Campaign name.
        2. **Campaign Type**: From the drop-down, select `Auto Dialler` or `Preview Dialler`.
        3. **Agent Script**: Select a pre-configured script for agents to deliver during customer interactions.
        4. **State**: Configure the campaign's operational status by setting it to either `Active` (currently available for use) or `Inactive` (disabled or paused).
    2. **CALL SETTINGS**:
        1. **Caller ID**: The `CLI` used for this campaign.
        2. **Host**: The SIP server or carrier the calls go through.
        3. **CPS** (*Calls Per Second*): How many new calls are started each second.
        4. **Ring Timeout**: Seconds before a call counts as no-answer.
        5. **Tech Prefix** (*Optional*): A code added before each dialed number so the provider can identify your account or route.
        6. **Keypad Access**: Lets the recipient press phone keys during the call, like "press 1."
    3. **LEAD AND AGENT HANDLING**:
        1. **Source Status**: Select `NEW`, `RETRY`, `CALLBACK`, or a Custom Source Status for call origination. If no status is selected, the calls won't be sent.
        2. **Custom Disposition** (*Only for Auto/Preview Dialler*): A user-defined set of call outcome labels that agents are required to select after each call, enabling structured tracking, systematic reporting, and optimized follow-up workflows.
            1. `Agent Unavailable`: Call was made but hung up due to the agent being busy (mostly in Auto Diallers).
            2. `Answered`: Call is connected.
            3. `Connection Error`: Originate method failed to work.
            4. `Error`: An error occurred at the code level.
            5. `Connected`: AI call was answered, but the disposition wasn't saved.
            6. `Rejected`: Call ended without pickup (user or server may have hung up).
            7. `Ringing`: AI-initiated call is ringing.
            8. `In Progress`: Call data is being allocated.
        3. **Agents** (*Only for Auto/Preview Dialler*): Select agents for the Auto/Preview Dialler.
        4. **Outbound Multiplier** (*Only for Auto Dialler*): Controls how many outbound calls your system (or agent/reseller) can make at the same time.
        5. **Flags** (*Only for Preview Dialler*): Select the `Transfer` flag to enable call transfer in Preview Dialler.
    4. **ADDITIONAL**:
        1. **Notes**: An optional field to record any important information.

    **Auto Dialler Campaign**

    <img src="/customer-portal/img/ccrevamp9.png" width= "700" style="border: 2px solid #4472C4; border-radius: 8px;">

    **Preview Dialler Campaign**

    <img src="/customer-portal/img/ccrevamp10.png" width= "700" style="border: 2px solid #4472C4; border-radius: 8px;">

4. Click the `Save` button.
5. Click `See More` in the `Details` column.

    <img src="/customer-portal/img/ccrevamp8.png" style="border: 2px solid #4472C4; border-radius: 8px;">

6. The `Campaign Overview` opens. This interface is used for real-time monitoring of campaigns, lead stats, agent statuses, and calling activity.

    **Auto Dialler Campaign**

    <img src="/customer-portal/img/ccrevamp11.png" style="border: 2px solid #4472C4; border-radius: 8px; width: 100%;" alt="Auto Dialler Campaign Overview">

    **Preview Dialler Campaign**

    <img src="/customer-portal/img/ccrevamp12.png" style="border: 2px solid #4472C4; border-radius: 8px; width: 100%;" alt="Preview Dialler Campaign Overview">

## Campaign Overview Fields

1. **Campaign Name**: Displays the name of the selected campaign, such as `Auto Dialler` or `Preview Dialler`.
2. **Caller ID**: Displays the Caller ID configured for the campaign.
3. **Channels**: Displays the number of channels configured for the campaign.
4. **CPS**: Displays the configured Calls Per Second (CPS) value.
5. **State**: Indicates whether the campaign is `Active` or `Inactive`.
6. **Edit Campaign**: Opens the campaign settings for editing.
7. **Back**: Returns to the campaign listing through the `All Campaigns` button.
8. **Lead Stats**: Displays the total number of leads associated with the campaign and their current status in the calling process.
    1. `Total Leads`: Displays the total number of leads loaded into the campaign.
    2. `Dialable Leads`: Displays the number of leads eligible for dialing.
    3. `In Progress`: Displays the number of leads currently being processed.
    4. `Call Answered`: Displays the number of calls answered by the recipients.
    5. `Call Ringing`: Displays the number of calls that are currently ringing.
    6. `Failed Calls`: Displays the number of calls that failed to connect.
    7. `Dropped Calls`: Displays the number of calls that were disconnected unexpectedly.
    8. `Refresh Button`: Refreshes the lead statistics displayed on the screen.
9. **Campaign Details**: Displays the configuration settings associated with the selected campaign.
    1. `Agent Script`: Displays the agent script associated with the campaign, if configured.
    2. `Host` (*Only for Preview Dialler*): Displays the host configured for the campaign, for example `test1.host.connexcs.net`.
    3. `Ring Timeout`: Displays the configured ring timeout value.
    4. `Tech Prefix`: Displays the technical prefix configured for the campaign, if applicable.
    5. `Outbound Multiplier`: Displays the configured outbound multiplier value.
    6. `Keypad Access`: Indicates whether keypad access is enabled (`Yes`) or disabled (`No`) for the campaign.
    7. `Notes`: Displays any additional notes associated with the campaign.
10. **Campaign Stats**: Provides a real-time overview of caller and agent activity within the campaign.
    1. `Callers`: Displays the current status and distribution of callers.
        1. `On the line`: Displays the number of callers currently on the line.
        2. `Talking to agent`: Displays the number of callers currently connected to an agent.
        3. `Waiting in queue`: Displays the number of callers waiting for an available agent.
    2. `Agents`: Displays the current status and availability of agents.
        1. `In queue`: Displays the number of agents in the queue.
        2. `On a call`: Displays the number of agents currently handling a call.
        3. `Available`: Displays the number of agents available to handle the next call.
    3. `Refresh Button`: Refreshes the campaign statistics displayed in this section.
11. **Agents in Queue** (*Only for Auto Dialler*): Displays the agents listed in the campaign queue.
    1. `Username`: Displays the username of the agent.
    2. `Status`: Displays the current status of the agent, where available.
    3. `Search Agent`: Allows users to search for an agent in the queue.
    4. `Refresh Button`: Refreshes the agent queue information.
    5. `Table Controls`: Provides options for managing the table display, filtering, and settings, where available.
12. **Campaign Agents**: Displays the list of agents assigned to the campaign.
    1. `Username`: Displays the username of the assigned agent.
    2. `Status`: Displays the agent's current status, such as `Online` or `Offline`.
    3. `SIP Profile`: Displays the SIP profile associated with the agent, if configured.
    4. `Channels`: Displays the channel count associated with the agent.
    5. `CPS`: Displays the Calls Per Second value associated with the agent.
    6. `Search Agent`: Allows users to search for an assigned agent.
    7. `Refresh Button`: Refreshes the campaign agent list.
    8. `Manage Agents`: Opens the agent management interface to manage agent assignments for the campaign.
    9. `Table Controls`: Provides options for managing the table display, filtering, and settings, where available.
13. **Associated Leadsets**: Displays the leadsets associated with the selected campaign.
    1. `Name`: Displays the name of the associated leadset.
    2. `Status`: Displays the current status of the leadset, such as `Active`.
    3. `Description`: Displays the leadset description, if available.
    4. `Details`: Provides access to additional leadset information through the `See more` control, where displayed.
    5. `Search Leadset`: Allows users to search for an associated leadset.
    6. `Refresh Button`: Refreshes the associated leadset list.
    7. `Table Controls`: Provides options for managing the table display, filtering, and settings, where available.