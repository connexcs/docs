# Contact Center

## Overview

The ConnexCS Dialer is a comprehensive contact center solution designed to streamline outbound and inbound campaigns.

It includes a Dialer Dashboard, Agent Management, Campaign Management, and Lead Management functionalities.

The dialer supports both Auto Dialer and Preview Dialer modes for flexibility in call operations.

## Types of Dialer

At ConnexCS we've three types of dialers at your disposal.

### **Auto Dialers**

 Its an outbound dialing system that automatically dials numbers from a contact list and connects answered calls to available agents in real-time.

This auto dialer dials one number per available agent only after they finish their current call. It’s safer but a bit slower.

**Pros**:

+ **Accuracy**: Reduction in dropped calls as calls are made only when agent is available.
+ **Better agent control**: Agents aren't overwhelmed with back-to-back calls.
+ **Improved call quality**: Agents get better to prepare between calls.
+ **Easier integration and implementation**

**Cons**:

+ Lower call volume throughput.
+ More dropped calls as the system may over-dial.
+ Shorter lead time for agents.
+ Back-to-back calls can make agents frustrated.

!!! question "How it works?"
    ```mermaid
    flowchart TD
        style A fill:#E0F7FA,stroke:#006064,stroke-width:2,rx:10,ry:10
        style B fill:#FFF3E0,stroke:#EF6C00,stroke-width:2,rx:10,ry:10
        style C fill:#F1F8E9,stroke:#33691E,stroke-width:2,rx:10,ry:10
        style D fill:#F3E5F5,stroke:#6A1B9A,stroke-width:2,rx:10,ry:10
        style E fill:#E8F5E9,stroke:#2E7D32,stroke-width:2,rx:10,ry:10
        style F fill:#FFEBEE,stroke:#C62828,stroke-width:2,rx:10,ry:10

        A(["👩‍💼 Agent finishes call<br/>🔄 Marks as 'Ready'"]) --> B(["📋 System pulls<br/>next number from list"])
        B --> C(["📞 System auto-dials<br/>the contact"])
        C --> D{"📲 Call Answered?"}
        D -- "✅ Yes" --> E(["🤝 Connect call<br/>to agent immediately"])
        D -- "❌ No<br/>(Busy / Voicemail / No Answer)" --> F(["⏭️ Skip to next number"])
        F --> B
        E --> A
    ```

**Key Features**:

+ 1:1 dialing ratio is one call per agent.
+ No calls are made unless the agents are available/ready.
+ Skips busy, no-answer, or failed numbers automatically. **DO WE HAVE THIS FEATURE?**
+ Minimizes downtime between calls without overwhelming agents. **DOES THIS HAPPEN WITH OUR DIALER?**

### Preview Dialer

A Preview Dialer is an outbound dialing system, where the agent has detailed information about the customer before dialing.

The agent gets enough time to review and decide whether to call the person and hit the call button to initiate the call

!!! question "How it works?"
    ```mermaid
    flowchart TD
        style A fill:#E1F5FE,stroke:#0277BD,stroke-width:2,rx:10,ry:10
        style B fill:#FFF3E0,stroke:#EF6C00,stroke-width:2,rx:10,ry:10
        style C fill:#F3E5F5,stroke:#6A1B9A,stroke-width:2,rx:10,ry:10
        style D fill:#E8F5E9,stroke:#2E7D32,stroke-width:2,rx:10,ry:10
        style E fill:#FFEBEE,stroke:#C62828,stroke-width:2,rx:10,ry:10
        style F fill:#E0F2F1,stroke:#00796B,stroke-width:2,rx:10,ry:10

        A(["👩‍💼 Agent becomes available<br/>🟢 Marks as 'Ready'"]) --> B(["📋 System selects next contact<br/>🔍 Displays profile:<br/>- First/Last Name<br/>- Address, Contact<br/>- City, Gender<br/>- Call Count, Email<br/>- Comments"])
        B --> C(["🧠 Agent reviews info:<br/>📜 Assess script<br/>🎯 Prepare pitch<br/>⏭️ Decide to dial or skip"])
        C --> D(["📞 Agent clicks 'Dial'<br/>(Manual Mode)"])
        D --> E(["📝 Call ends<br/>Agent adds:<br/>- Notes<br/>- Tags<br/>- Disposition"])
        E --> F(["🔄 Next preview pops up"])
        F --> B
    ```
Best for: Complex or high-value calls where agents need context (e.g., sales or support follow-ups).

**Pros**:

+ Personalization, higher quality interactions.
+ Agents feel more in control, less rushed.
+ Agents align calls to customer needs.

**Cons**:

+ Slower pace.
+ Fewer calls per hour as compared to Auto Dialer.
+ Skips Lead Automation.
+ More agent involvement leads to inconsistent flow.

### Broadcast Dialer (AI Agent)

A Broadcast Dialer is an automated outbound calling system where an AI Agent initiates and handles the entire interaction with the customer. This dialer involves no human intervention.

Once activated, the system starts dialing contacts in bulk. The AI Agent engages with each person using natural conversation, guided by a predefined script and logic.

You can create your own personal AI Agent with ConnexCS. [Click here](https://docs.connexcs.com/class5/ai-agent/) to know more.

!!! question "How it works?"
    ```mermaid
    flowchart TD
        style A fill:#F3E5F5,stroke:#6A1B9A,stroke-width:2,rx:10,ry:10
        style B fill:#E8F5E9,stroke:#2E7D32,stroke-width:2,rx:10,ry:10
        style C fill:#FFEBEE,stroke:#C62828,stroke-width:2,rx:10,ry:10
        style D fill:#E1F5FE,stroke:#0277BD,stroke-width:2,rx:10,ry:10
        style E fill:#FFF3E0,stroke:#EF6C00,stroke-width:2,rx:10,ry:10

        A(["🤖 AI Agent becomes active<br/>🟢 Starts broadcast campaign"]) --> B(["📞 System auto-dials next contact"])
        B --> C(["🧠 AI Agent interacts:<br/>- Uses custom script<br/>- Detects intents<br/>- Responds in real-time"])
        C --> D(["📝 AI logs outcome:<br/>- Call summary<br/>- Sentiment<br/>- Disposition<br/>- Optional transcription"])
        D --> E(["🔄 Moves to next contact automatically"])
        E --> B

**Pros**:

+ High speed and efficiency — thousands of calls per hour.
+ Consistent, 24/7 availability.
+ Reduced cost due to no human involvement.

**Cons**:

+ Limited to structured or semi-structured conversations.
+ May not handle highly emotional or unpredictable interactions as well as a human.
+ Requires upfront setup and testing for smooth operation.

## Contact Center Setup & Usage Guide

### Step-I: Install Contact Center App

1. Login to your **Control Panel**.
2. Navigate to **Setup :material-menu: App Store**. <img src= "/customer-portal/img/cc1.png">
3. Click on the **Contact Center** application. Click on `Install`. <img src= "/customer-portal/img/cc2.png">
4. Modify the `App Name` (optional) and select the app `Version` (optional). Click `Install`. <img src= "/customer-portal/img/cc3.png">
5. Click on `Config`. <img src= "/customer-portal/img/cc4.png">
6. A window will pop-up where you need to select the `User API`, `Class 5 Server` and `Class 4 Server` and hit the `Next Step` button. <img src= "/customer-portal/img/cc5new.png">

!!! Note "Important Note"
    Make sure to select a **Class 4 server** where **WebRTC** and **TLS** are enabled.

7. Select a pre-loaded database or click on `Continue With New Database`. [Click here](https://docs.connexcs.com/datasuite/) to follow the steps for database creation. Click `Confirm`. <img src= "/customer-portal/img/cc6new.png">.

8. **Adding the Domain**
      1. Navigate to **IDE :material-menu-right: Select the Contact Center App (you created) :material-menu-right: Domain**. Click on `Domain`. <img src= "/customer-portal/img/cc7.png">
      2. Click on the blue `+` sign.
      3. Select the `App` and enter the `domain` for your dialer. Click `Save`. <img src= "/customer-portal/img/cc8new.png">
      [Click here](https://docs.connexcs.com/apps/architecture/domain/) to get more information on domains.

!!! Note "An internal number block range is required to create agents."

After following the above step, we've successfully installed the Contact Center application.

Next, proceed to the **Customer Portal** to review the Contact Center application's setup process and understand its operational workflow.

### Dialer Dashboard: Features and Functions

1. Navigate to **Customer Portal :material-menu-right: Contact Center**.
2. **Accessing the Dialer**:
      1. The dashboard provides a real-time overview of campaign activities, agent statuses, data remaining and call progress.
3. **Dashboard Features**:
      1. **Agents Logged In**: Tracks number of active agents.
      2. **Agents Paused**: Number of agents currently not available take calls but are logged in the system.
      3. **Agents Waiting**: Number of agents available and ready to take the call.
      4. **Agents in Call**: Number of agents actively involved in a live conversation.
      5. **Active Calls**: Total number of live and ongoing calls.
      6. **Calls Waiting**: Displays the number of queued calls.
      7. **Calls Ringing**: Total number of calls initiated but not answered yet.
      8. **Data Remaining**: Shows the number of contacts left to be dialed.

!!! Note "Please Note"
      1. `Agents Waiting`, `Agents in Call`, `Calls Ringing`, and `Active Calls` are the stats only for the **Auto Dialer**.
      2. `AI Calls Ringing`, `AI Calls Active`: These stats are only for **Broadcast Dialer**.
      3. `Agents Logged In`, `Agents Paused`, `Data Remaining` for **all three dialers**.

<img src= "/customer-portal/img/cc9.png">

=== "Campaigns"

    Summarizes ongoing campaigns, including parameters like status, campaign type, source status, CPS, Channels etc. You also have an option to **Add Campaign**.

    <img src= "/customer-portal/img/cc10new.png">

=== "Agents"

    Summarizes ongoing agent activity, displaying parameters like status, SIP profile, protocol, bandwidth, CPS, channels, dial pattern, and other SIP metrics.
    You can also upload agents in bulk using **Create Bulk Agents**.

    <img src= "/customer-portal/img/cc11new.png">

=== "Script"

    Displays all the created scripts in the Contact Center. You can also **Add a New Script**. 

      <img src= "/customer-portal/img/cc12new.png">

=== "Leadset"

    Manages leadsets for outbound campaigns, showing parameters like name, associated campaign, status, and description.
    You can also create new leadsets individually or upload them in bulk using **Create Leadset**.

      <img src= "/customer-portal/img/cc13new.png">

### Step-II: Setup Dialers 

You can configure multiple dialers based on your specific campaign requirements.

#### Preview Dialer

1. Navigate to **Customer Portal :material-menu-right: Contact Center**.
2. In the `Campaign` tab, click `Add Campaign`. <img src= "/customer-portal/img/cc14.png">
3. A Window will pop-up with two sections:
   1. **Basic Info**:
      1. **Name**: Enter the Campaign name.
      2. **Campaign Type**: From the drop-down select `Preview Dialler`.
      3. **Agent Script**: Select a pre-configured script for agents to deliver during customer interactions.
      4. **State**: Configure the campaign's operational status by setting it to either `Active` (currently available for use) or `Inactive` (disabled or paused).
      5. **Notes**: An optional field to pen down any important information.
   2. **Config**:
      1. **Caller ID**: The `CLI` used for this campaign.
      2. **Source Status**: Select `Ready`/`New` or Custom Source Status for call origination. If no status is selected the calls won't be sent.
      3. **Outbound Multiplier**: It controls how many outbound calls your system (or agent/reseller) can make at the same time.
      4. **Custom Disposition**: A user-defined set of call outcome labels that agents are required to select after each call, enabling structured tracking, systematic reporting, and optimized follow-up workflows. <img src= "/customer-portal/img/cc15new.png">
         1. `Agent Unavailable`: Call was made but hung up due to agent being busy (mostly in auto dialers.
         2. `Answered`: Call is connected.
         3. `Connection Error`: Originate method failed to work.
         4. `Error`: An error occurred at the code level.
         5. `Connected`: AI call was answered, but disposition wasn't saved.
         6. `Rejected`: Call ended without pickup (user or server may have hung up).
         7. `Ringing`: AI-initiated call is ringing.
         8. `In Progress`: Call data is being allocated.
      5. **Agents**: Select human agents or AI agents for the Preview Dialer.
      6. Click on the `Confirm` button.

      !!! Note
            `DO NOT CALL`, `NOT INTERESTED`, `SALE MADE`, `CALL TRANSFERRED`, `BUSY`, `CALL BACK`, `DISCONNECTED NUMBER`, `DECLINED SALE`, `WRONG DETAILS` — Predefined Disposition Statuses.
            Users can create custom source statuses and dispositions while creating or updating campaigns.
   3. Click on `See More` in the `Details` column.
      1. A `Campaign Overview` will open. This interface is used for real-time monitoring of campaigns, lead stats, agent statuses, and calling activity. <img src= "/customer-portal/img/cc45new.png">
      2. `State`: Whether the campaign is `Active` or `Inactive`.
      3. `Edit Campaign`: Open the campaign settings for editing.
      4. `Back`: Return to the previous page.
      5. `Campaign Stats`: Provides real-time visual insights into the current status of the campaign's calling activities and agent activities.
         1. `Callers Chart`: Shows the current distribution of calls:
               1. `Call In Progress`: How many calls are actively happening (agents talking to leads).
               2. `Call Waiting`: How many calls are waiting to be connected.
         2. `Agents Chart`: Shows the status of agents.
               1. `Call Active`: How many agents are currently on a call.
               2. `Agent Waiting`: How many agents are idle (ready and waiting for a call).
      6. `Campaign Agents`: List of agents assigned to the campaign.
         1. `Manage Agents`: Allows you to add/remove agents from the campaign from the drop-down menu. Click `Confirm`. <img src= "/customer-portal/img/cc34new.png">
         2. For example: The select agents will be added.<img src= "/customer-portal/img/cc35.png">
         3. `Refresh Button`: To update agent statuses.
      7. `Lead Stats`: It shows you the total number of leads loaded into the campaign and what stage they're currently at during the calling process.
         1. `Total Leads`: Everyone you plan to call.
         2. `Dialable Leads`: How many you still can call.
         3. `In Progress`: Live calls happening now.
         4. `Call Answered`: People who actually picked up.
         5. `Failed Calls`: Calls that couldn't connect.
         6. `Dropped Calls`: Calls that got disconnected unexpectedly.
      8. `Agents in Queue`: Displays a list of agents who are waiting for a call or are ready to be assigned a call in the campaign.
4. **Agents**: This section has information on the agents. You can also `Create Bulk Agents` . <img src= "/customer-portal/img/cc16.png">
      1. Select a `SIP Profile`.
      2. Add the `Number of Agents` for participation in this campaign.
      3. Click on `Create`. <img src= "/customer-portal/img/cc17.png">
5. **Script**: The Script section enables you to create structured call scripts for agents to follow during customer interactions.
      1. Click on `Add a new Script`. <img src= "/customer-portal/img/cc18.png">
      2. Enter the `Script Name` and `Script`.
      3. Click `Confirm` to save the script. <img src= "/customer-portal/img/cc19.png">
      4. The created script will be displayed in the window; click on `Preview` to view the script. <img src= "/customer-portal/img/cc20.png">
6. **Leadset**: This section has information on the Leadsets. You can also `Create Leadset` . <img src= "/customer-portal/img/cc21.png">
   1. A new window will appear, prompting you to enter the required information:
         1. Enter the leadset `Name`.
         2. Pen-down any required `Description`.
         3. Select the `Campaign` from the drop-down for which you wish to associate the leadset.
         4. **State**: Configure the leadset’s operational status by setting it to either Active (available for assignment and dialing) or Inactive (disabled or paused).
         5. Click on `Confirm` to create the leadset. <img src= "/customer-portal/img/cc22.png">
         6. Click on `See More` in the `Details` column.
         7. **A Leadset Dashboard** monitoring window will appear which displays the metrics of the leadset. <img src= "/customer-portal/img/cc23.png">
         8. Description of the fields in the stats window:
            1. `Status`: Set the leadset to `Active` or `Inactive` state.
            2. Refresh your leadset parameters using `Refresh Lead Stats`.
            3. Click on `Leadset Data` to view the leadset data.
            4. Click on `Upload Leads` to upload the leadset data.
            5. Upload your data via `File`, `URL` or by entering the `Text`.
               1. **File**: Drag and Drop a file or click to upload the `.csv`. <img src= "/customer-portal/img/cc25.png">
                  1. A new window will open where two actions must be completed to create the leadset. <img src="/customer-portal/img/cc26.png">
                  2. `Set row`: To indicate where the upload should start. `Right-click` on the row to want to start the uploading and click on `Set Start Row`. <img src="/customer-portal/img/cc27.png">
                  3. `Map Table Columns`: Refers to the process of aligning or linking columns from one table to another, ensuring data consistency and accurate integration. This is essential when importing, migrating, or syncing data between different databases or systems. `Right-click` on the column you wish to be mapped, click on `Map Column` then `Phone` and `Status`. Click on `Upload`. This will upload the leadset data to the server. <img src="/customer-portal/img/cc28.png">
                  4. The successful upload can be seen in the image. <img src="/customer-portal/img/cc36.png">
                  5. The `Leadset Dashboard` is also modified. <img src= "/customer-portal/img/cc30.png">
               2. **Uploading via URL**: Enter the URL in the CSV format and hit the Upload button. <img src="/customer-portal/img/cc29.png">
                     1. A new window will open where two actions must be completed to create the leadset. <img src="/customer-portal/img/cc26.png">
                     2. `Set row`: To indicate where the uploaad should start. `Right-click` on the row to want to start the uploading and click on `Set Start Row`. <img src="/customer-portal/img/cc27.png">
                     3. `Map Table Columns`: Refers to the process of aligning or linking columns from one table to another, ensuring data consistency and accurate integration. This is essential when importing, migrating, or syncing data between different databases or systems. `Right-click` on the column you wish to be mapped, click on `Map Column` then `Key`. Click on `Upload`. This will upload the leadset data to the server. <img src="/customer-portal/img/cc28.png">
                     4. The successful upload can be seen in the image. <img src="/customer-portal/img/cc36.png">
                     5. The `Leadset Dashboard` is also modified. <img src= "/customer-portal/img/cc30.png">
               3. **Uploading via Text**:

                    1. Enter the text in the following format:

                    ```bash
                        Column 1,Column 2,
                        Phone, Status
                        44116, Ready
                        44117, Ready
                        44118, Ready
                        44119, Ready
                    ```
                    2. Click on `Upload`. <img src="/customer-portal/img/cc32.png">
                    3. A new window will open where two actions must be completed to create the leadset. <img src="/customer-portal/img/cc26.png">
                    4. `Set row`: To indicate where the uploaad should start. `Right-click` on the row to want to start the uploading and click on `Set Start Row`. <img src="/customer-portal/img/cc27.png">
                    5. `Map Table Columns`: Refers to the process of aligning or linking columns from one table to another, ensuring data consistency and accurate integration. This is essential when importing, migrating, or syncing data between different databases or systems. `Right-click` on the column you wish to be mapped, click on `Map Column` then `Key`. Click on `Upload`. This will upload the leadset data to the server. <img src="/customer-portal/img/cc28.png">
                    6. The successful upload can be seen in the image. <img src="/customer-portal/img/cc36.png">
                    7. The `Leadset Dashboard` is also modified. <img src= "/customer-portal/img/cc30.png">
            6. `Continue to Modify`: If you click here, it will redirect to ConnexCS's Data Sure. [Click here](https://docs.connexcs.com/datasuite/) to know more.
        1.  **Edit Leadset**: Modify the details of an existing Leadset. The system will present the same interface as `Create Leadset`.
        2.  **Add Lead (Form)**: Manually add a lead via a form. <img src="cc31.png">
        3.  **Lead Status**: Displays whether a lead is available, being worked on, needs follow-up, or is no longer active.
               1.  `Total Leads`: The total number of leads uploaded or assigned to the campaign or leadset.
               2.  `Dialable Leads`: Leads that are ready to be called (i.e., they're active, have valid numbers, and meet campaign rules).
               3.  `Data Recycle`: Recycles leads that didn’t connect (e.g., no answer, busy) by returning them to the dial queue and updating their status based on retry rules.
        4.  **Call Status**: Displays counts for different call outcomes; like `Call Answered`, `Failed Calls`, `Call In Progress`, `Call Ringing`, `Dropped Calls`.
        5.  **Disposition Status**: Shows a pie chart for all the call disposition outcomes. Each colored section of the pie chart corresponds to one of these dispositions.
        6.  **Lead Agents Activity**: It displays performance stats of individual agents. The metrics include `Call Transfered`, `Busy`, `Call Back`, `Do Not Call`, `Not interested`, `Null`, `Sale made`, `Wrong details` etc.

#### Auto Dialer

1. Navigate to **Customer Portal :material-menu-right: Contact Center**.
2. In the `Campaign` tab, click `Add Campaign`. <img src= "/customer-portal/img/cc14.png">
3. A Window will pop-up with two sections:
   1. **Basic Info**:
      1. **Name**: Enter the Campaign name.
      2. **Campaign Type**: From the drop-down select `Auto Dialler`.
      3. **Agent Script**: Select a pre-configured script for agents to deliver during customer interactions.
      4. **State**: Configure the campaign's operational status by setting it to either `Active` (currently available for use) or `Inactive` (disabled or paused).
      5. **Notes**: An optional field to pen down any important information.
   2. **Config**:
      1. **Caller ID**: The `CLI` used for this campaign.
      2. **Source Status**: Select `Ready`/`New` or Custom Source Status for call origination. If no status is selected the calls won't be sent.
      3. **Outbound Multiplier**: It controls how many outbound calls your system (or agent/reseller) can make at the same time.
      4. **Custom Disposition**: A user-defined set of call outcome labels that agents are required to select after each call, enabling structured tracking, systematic reporting, and optimized follow-up workflows. <img src= "/customer-portal/img/cc44.png">
             1. `Agent Unavailable`: Call was made but hung up due to agent being busy (mostly in auto dialers.
            2. `Answered`: Call is connected.
            3. `Connection Error`: Originate method failed to work.
            4. `Error`: An error occurred at the code level.
            5. `Connected`: AI call was answered, but disposition wasn't saved.
            6. `Rejected`: Call ended without pickup (user or server may have hung up).
            7. `Ringing`: AI-initiated call is ringing.
            8. `In Progress`: Call data is being allocated.
      5. Click on the `Confirm` button.
        !!! Note
            `DO NOT CALL`, `NOT INTERESTED`, `SALE MADE`, `CALL TRANSFERRED`, `BUSY`, `CALL BACK`, `DISCONNECTED NUMBER`, `DECLINED SALE`, `WRONG DETAILS` — Predefined Disposition Statuses.
            Users can create custom source statuses and dispositions while creating or updating campaigns.
   3. Click on `See More` in the `Details` column.
      1. A `Campaign Overview` will open. This interface is used for real-time monitoring of campaigns, lead stats, agent statuses, and calling activity. <img src= "/customer-portal/img/86.png">
      2. `State`: Whether the campaign is `Active` or `Inactive`.
      3. `Edit Campaign`: Open the campaign settings for editing.
      4. `Back`: Return to the previous page.
      5. `Campaign Stats`: Provides real-time visual insights into the current status of the campaign's calling activities and agent activities.
            1. `Callers Chart`: Shows the current distribution of calls:
               1. `Call In Progress`: How many calls are actively happening (agents talking to leads).
               2. `Call Waiting`: How many calls are waiting to be connected.
            2. `Agents Chart`: Shows the status of agents.
               1. `Call Active`: How many agents are currently on a call.
               2. `Agent Waiting`: How many agents are idle (ready and waiting for a call).
      6. `Campaign Agents`: List of agents assigned to the campaign.
         1. `Manage Agents`: Allows you to add/remove agents from the campaign from the drop-down menu. Click `Confirm`. <img src= "/customer-portal/img/cc34.png">
         2. For example: The select agents will be added.<img src= "/customer-portal/img/cc35.png">
         3. `Refresh Button`: To update agent statuses.
      7. `Lead Stats`: It shows you the total number of leads loaded into the campaign and what stage they're currently at during the calling process.
         1. `Total Leads`: Everyone you plan to call.
         2. `Dialable Leads`: How many you still can call.
         3. `In Progress`: Live calls happening now.
         4. `Call Answered`: People who actually picked up.
         5. `Failed Calls`: Calls that couldn't connect.
         6. `Dropped Calls`: Calls that got disconnected unexpectedly.
      8. `Agents in Queue`: Displays a list of agents who are waiting for a call or are ready to be assigned a call in the campaign.
4. **Agents**: This section has information on the agents. You can also `Create Bulk Agents` . <img src= "/customer-portal/img/cc16.png">
      1. Select a `SIP Profile`.
      2. Add the `Number of Agents` for participation in this campaign.
      3. Click on `Create`. <img src= "/customer-portal/img/cc17.png">
5. **Script**: The Script section enables you to create structured call scripts for agents to follow during customer interactions.
      1. Click on `Add a new Script`. <img src= "/customer-portal/img/cc18.png">
      2. Enter the `Script Name` and `Script`.
      3. Click `Confirm` to save the script. <img src= "/customer-portal/img/cc46.png">
      4. The created script will be displayed in the window; click on `Preview` to view the script. <img src= "/customer-portal/img/cc47.png">
6. **Leadset**: This section has information on the Leadsets. You can also `Create Leadset` . <img src= "/customer-portal/img/cc21.png">
   1. A new window will appear, prompting you to enter the required information:
         1. Enter the leadset `Name`.
         2. Pen-down any required `Description`.
         3. Select the `Campaign` from the drop-down for which you wish to associate the leadset.
         4. **State**: Configure the leadset’s operational status by setting it to either Active (available for assignment and dialing) or Inactive (disabled or paused).
         5. Click on `Confirm` to create the leadset. <img src= "/customer-portal/img/cc48.png">
         6. Click on `See More` in the `Details` column.
         7. **A Leadset Dashboard** monitoring window will appear which displays the metrics of the leadset. <img src= "/customer-portal/img/cc49.png">
         8. Description of the fields in the stats window:
            1. `Status`: Set the leadset to `Active` or `Inactive` state.
            2. Refresh your leadset parameters using `Refresh Lead Stats`.
            3. Click on `Leadset Data` to view the leadset data.
            4. Click on `Upload Leads` to upload the leadset data.  <img src= "/customer-portal/img/cc50.png">
            5. Upload your data via `File`, `URL` or by entering the `Text`.
               1. **File**: Drag and Drop a file or click to upload the `.csv`. <img src= "/customer-portal/img/cc51.png">
                  1. A new window will open where two actions must be completed to create the leadset. <img src="/customer-portal/img/cc52.png">
                  2. `Set row`: To indicate where the upload should start. `Right-click` on the row to want to start the uploading and click on `Set Start Row`. <img src="/customer-portal/img/cc53.png">
                  3. `Map Table Columns`: Refers to the process of aligning or linking columns from one table to another, ensuring data consistency and accurate integration. This is essential when importing, migrating, or syncing data between different databases or systems. `Right-click` on the column you wish to be mapped, click on `Map Column` then `Phone` and `Status`. Click on `Upload`. This will upload the leadset data to the server. <img src="/customer-portal/img/cc54.png"> <img src="/customer-portal/img/cc55.png">
                  4. Upon successful upload, the leadset will appear as shown below. <img src="/customer-portal/img/cc56.png">
               2. **Uploading via URL**: Enter the URL in the CSV format and hit the Upload button. <img src="/customer-portal/img/cc57.png">
                     1. A new window will open where two actions must be completed to create the leadset. <img src="/customer-portal/img/cc52.png">
                     2. `Set row`: To indicate where the uploaad should start. `Right-click` on the row to want to start the uploading and click on `Set Start Row`. <img src="/customer-portal/img/cc53.png">
                     3. `Map Table Columns`: Refers to the process of aligning or linking columns from one table to another, ensuring data consistency and accurate integration. This is essential when importing, migrating, or syncing data between different databases or systems. `Right-click` on the column you wish to be mapped, click on `Map Column` then `Phone` and `Status`. Click on `Upload`. This will upload the leadset data to the server. <img src="/customer-portal/img/cc54.png"> <img src="/customer-portal/img/cc55.png"> 
                     4. Upon successful upload, the leadset will appear as shown below. <img src="/customer-portal/img/cc56.png">
               3. **Uploading via Text**:

                    1. Enter the text in the following format:

                    ```bash
                        Column 1,Column 2,
                        Phone, Status
                        44116, Ready
                        44117, Ready
                        44118, Ready
                        44119, Ready
                    ```
                    2. Click on `Upload`. <img src="/customer-portal/img/cc58.png">
                    3. A new window will open where two actions must be completed to create the leadset. <img src="/customer-portal/img/cc52.png">
                    4. `Set row`: To indicate where the upload should start. `Right-click` on the row to want to start the uploading and click on `Set Start Row`. <img src="/customer-portal/img/cc53.png">
                    5. `Map Table Columns`: Refers to the process of aligning or linking columns from one table to another, ensuring data consistency and accurate integration. This is essential when importing, migrating, or syncing data between different databases or systems. `Right-click` on the column you wish to be mapped, click on `Map Column` then `Phone` and `Status`. Click on `Upload`. This will upload the leadset data to the server. <img src="/customer-portal/img/cc54.png"> <img src="/customer-portal/img/cc55.png">
                    6. The successful upload can be seen in the image. <img src="/customer-portal/img/cc56.png">
                    7. The updated `Leadset Dashboard` can be seen as. <img src="/customer-portal/img/cc87.png">
            6. `Continue to Modify`: If you click here, it will redirect to ConnexCS's Data Sure. [Click here](https://docs.connexcs.com/datasuite/) to know more.
        1.  **Edit Leadset**: Modify the details of an existing Leadset. The system will present the same interface as `Create Leadset`.
        2.  **Add Lead (Form)**: Manually add a lead via a form. <img src="/customer-portal/img/cc31.png">
        3.  **Lead Status**: Displays whether a lead is available, being worked on, needs follow-up, or is no longer active.
               1.  `Total Leads`: The total number of leads uploaded or assigned to the campaign or leadset.
               2.  `Dialable Leads`: Leads that are ready to be called (i.e., they're active, have valid numbers, and meet campaign rules).
               3.  `Data Recycle`: Recycles leads that didn’t connect (e.g., no answer, busy) by returning them to the dial queue and updating their status based on retry rules.
        4.  **Call Status**: Displays counts for different call outcomes; like `Call Answered`, `Failed Calls`, `Call In Progress`, `Call Ringing`, `Dropped Calls`.
        5.  **Disposition Status**: Shows a pie chart for all the call disposition outcomes. Each colored section of the pie chart corresponds to one of these dispositions.
        6.  **Lead Agents Activity**: It displays performance stats of individual agents. The metrics include `Call Transfered`, `Busy`, `Call Back`, `Do Not Call`, `Not interested`, `Null`, `Sale made`, `Wrong details` etc.

#### Broadcast

1. [Click here](https://docs.connexcs.com/class5/ai-agent/#steps-to-create-ai-agent) to create an AI Agent.
2. Navigate to **Customer Portal :material-menu-right: Contact Center**.
3. In the `Campaign` tab, click `Add Campaign`. <img src= "/customer-portal/img/cc44.png">
4. A Window will pop-up with two sections:
   1. **Basic Info**:
      1. **Name**: Enter the Campaign name.
      2. **Campaign Type**: From the drop-down select `Broadcast`.
      3. **Agent Script**: Select a pre-configured script for agents to deliver during customer interactions.
      4. **State**: Configure the campaign's operational status by setting it to either `Active` (currently available for use) or `Inactive` (disabled or paused).
      5. **Notes**: An optional field to pen down any important information.
   2. **Config**:
      1. **Caller ID**: The `CLI` used for this campaign.
      2. **Channels**: Number of calls to initiate concurrently.
      3. **Source Status**: Select `Ready`/`New` or Custom Source Staus for call origination. If no status is selected the calls won't be sent.
      4. **Internal Destination**: Select your AI Agent from the drop-down menu.
      5. Click on the `Confirm` button. <img src= "/customer-portal/img/cc66.png">

   3. Click on `See More` in the `Details` column.
      1. A `Campaign Overview` will open. This interface is used for real-time monitoring of campaigns, lead stats, agent statuses, and calling activity. <img src= "/customer-portal/img/cc88.png">
      2. `State`: Whether the campaign is `Active` or `Inactive`.
      3. `Edit Campaign`: Open the campaign settings for editing.
      4. `Back`: Return to the previous page.
      5. `Campaign Stats`: Provides real-time visual insights into the current status of the campaign's calling activities and agent activities.
            1. `Callers Chart`: Shows the current distribution of calls:
               1. `Call In Progress`: How many calls are actively happening (agents talking to leads).
               2. `Call Waiting`: How many calls are waiting to be connected.
5. `Refresh Button`: To update agent statuses.
6. `Lead Stats`: It shows you the total number of leads loaded into the campaign and what stage they're currently at during the calling process.
         1. `Total Leads`: Everyone you plan to call.
         2. `Dialable Leads`: How many you still can call.
         3. `In Progress`: Live calls happening now.
         4. `Call Answered`: People who actually picked up.
         5. `Failed Calls`: Calls that couldn't connect.
         6. `Dropped Calls`: Calls that got disconnected unexpectedly.
7. `Campaign Active Calls`: Allows you to monitor real-time performance and volume.
         1. `Phone`: The phone number being called.
         2. `Start Time`: When the call began.
         3.  `Call ID`: A unique identifier for tracking or logging the call.
         4.  `Call Status`: The current state (e.g., Ringing, Connected, In Progress, Completed, Failed).
8. **Script**: The Script section enables you to create structured call scripts for agents to follow during customer interactions.
      1. Click on `Add a new Script`. <img src= "/customer-portal/img/cc18.png">
      2. Enter the `Script Name` and `Script`.
      3. Click `Confirm` to save the script. <img src= "/customer-portal/img/cc64.png">
      4. The created script will be displayed in the window; click on `Preview` to view the script. <img src= "/customer-portal/img/cc65.png">
9. **Leadset**: This section has information on the Leadsets. You can also `Create Leadset` . <img src= "/customer-portal/img/cc21.png">
   1. A new window will appear, prompting you to enter the required information: <img src="/customer-portal/img/cc65.png">
         1. Enter the leadset `Name`.
         2. Pen-down any required `Description`.
         3. Select the `Campaign` from the drop-down for which you wish to associate the leadset.
         4. **State**: Configure the leadset’s operational status by setting it to either Active (available for assignment and dialing) or Inactive (disabled or paused).
         5. Click on `Confirm` to create the leadset. <img src= "/customer-portal/img/cc67.png">
         6. Click on `See More` in the `Details` column.
         7. **A Leadset Dashboard** monitoring window will appear which displays the metrics of the leadset. <img src= "/customer-portal/img/cc69.png">
         8. Description of the fields in the stats window:
            1. `Status`: Set the leadset to `Active` or `Inactive` state.
            2. Refresh your leadset parameters using `Refresh Lead Stats`.
            3. Click on `Leadset Data` to view the leadset data. <img src= "/customer-portal/img/cc68.png">
            4. Click on `Upload Leads` to upload the leadset data.
            5. Upload your data via `File`, `URL` or by entering the `Text`.
               1. **File**: Drag and Drop a file or click to upload the `.csv`. <img src= "/customer-portal/img/cc70.png">
                  1. A new window will open where two actions must be completed to create the leadset. <img src="/customer-portal/img/cc71.png">
                  2. `Set row`: To indicate where the upload should start. `Right-click` on the row to want to start the uploading and click on `Set Start Row`. <img src="/customer-portal/img/cc72.png">
                  3. `Map Table Columns`: Refers to the process of aligning or linking columns from one table to another, ensuring data consistency and accurate integration. This is essential when importing, migrating, or syncing data between different databases or systems. `Right-click` on the column you wish to be mapped, click on `Map Column` then `Phone` and `Status`. Click on `Upload`. This will upload the leadset data to the server. <img src="/customer-portal/img/cc73.png"> <img src="/customer-portal/img/cc74.png">
                  4. The leadset gets uploaded sucessfully. <img src="/customer-portal/img/cc75.png">
                  5. The leadset dasbordnow and total uploaded leads and dialable leads as well. <img src="/customer-portal/img/cc76.png">
               2. **Uploading via URL**: Enter the URL in the CSV format and hit the Upload button. <img src="/customer-portal/img/cc77.png">
                     1. A new window will open where two actions must be completed to create the leadset. <img src="/customer-portal/img/cc71.png">
                     2. `Set row`: To indicate where the uploaad should start. `Right-click` on the row to want to start the uploading and click on `Set Start Row`. <img src="/customer-portal/img/cc72.png">
                     3. `Map Table Columns`: Refers to the process of aligning or linking columns from one table to another, ensuring data consistency and accurate integration. This is essential when importing, migrating, or syncing data between different databases or systems. `Right-click` on the column you wish to be mapped, click on `Map Column` then `Phone` and `Status`. Click on `Upload`. This will upload the leadset data to the server. <img src="/customer-portal/img/cc73.png"> <img src="cc74.png">
                     4. The leadset gets uploaded sucessfully. <img src="/customer-portal/img/cc75.png">
                     5. The leadset dashboard now displays total uploaded leads and dialable leads as well. <img src="/customer-portal/img/cc76.png">
               3. **Uploading via Text**:

                    1. Enter the text in the following format:

                    ```bash
                        Column 1,Column 2,
                        Phone, Status
                        10800, New
                        10801, New
                    ```
                    2. Click on `Upload`. <img src="/customer-portal/img/cc77.png">
                    3. A new window will open where two actions must be completed to create the leadset. <img src="/customer-portal/img/cc71.png">
                    4. `Set row`: To indicate where the uploaad should start. `Right-click` on the row to want to start the uploading and click on `Set Start Row`. <img src="/customer-portal/img/cc72.png">
                    5. `Map Table Columns`: Refers to the process of aligning or linking columns from one table to another, ensuring data consistency and accurate integration. This is essential when importing, migrating, or syncing data between different databases or systems. `Right-click` on the column you wish to be mapped, click on `Map Column` then `Key`. Click on `Upload`. This will upload the leadset data to the server. <img src="/customer-portal/img/cc73.png"> <img src="/customer-portal/img/cc74.png">
                    6. The successful upload can be seen in the image. <img src="/customer-portal/img/cc75.png">
                    7. The leadset dashboard now displays total uploaded leads and dialable leads as well. <img src="/customer-portal/img/cc76.png">
            6. `Continue to Modify`: If you click here, it will redirect to ConnexCS's Data Sure. [Click here](https://docs.connexcs.com/datasuite/) to know more.
        1.  **Edit Leadset**: Modify the details of an existing Leadset. The system will present the same interface as `Create Leadset`.
        2.  **Add Lead (Form)**: Manually add a lead via a form. <img src="/customer-portal/img/cc31.png">
        3.  **Lead Status**: Displays whether a lead is available, being worked on, needs follow-up, or is no longer active.
               1.  `Total Leads`: The total number of leads uploaded or assigned to the campaign or leadset.
               2.  `Dialable Leads`: Leads that are ready to be called (i.e., they're active, have valid numbers, and meet campaign rules).
               3.  `Data Recycle`: Recycles leads that didn’t connect (e.g., no answer, busy) by returning them to the dial queue and updating their status based on retry rules.
        4.  **Call Status**: Displays counts for different call outcomes; like `Call Answered`, `Failed Calls`, `Call In Progress`, `Call Ringing`, `Dropped Calls`.
        5.  **Disposition Status**: Shows a pie chart for all the call disposition outcomes. Each colored section of the pie chart corresponds to one of these dispositions.
        6.  **Lead Agents Activity**: It displays performance stats of individual agents. The metrics include `Call Transfered`, `Busy`, `Call Back`, `Do Not Call`, `Not interested`, `Null`, `Sale made`, `Wrong details` etc.

With your Campaign, Agents, Agent Script, and Leadset configured, the next step is to access the **Agent Dialer** to start placing calls.

!!! Tip "Disposition in Broadcast Dialer"
      As in the Broadcast Dialer the AI Agent cannot set the `Disposition Status`. You need to do the following in order to add the capability for ading the disposition status.
      While creating your AI Agent you need to the following things:
      1. In the `Advanced` tab select `Set Variable` in the `Built-in Function` field.
      2. In the `Model` tab in the `Prompt` field you need to give a prompt which says that the status should be saved in the variable; using the **functions**: `name`=`status` and `value`=`[status]`

         !!! Example "Example Prompt"
               Your first task is to ask the staus: "What is your status?", as you don't currently know the status.
               Once the status has been provided, store it in the variable name. Do not store the variable unless you have been given it by the customer. don't save anything until the customer gives you 
               Do not proceed with anything else until you have successfully collected and stored the status by calling the setVariable function with `name`=`status` and `value`=`[status]`.

### Step-III: Setup Dialers

#### Preview Dialer

1. Enter the domain as entered in the **IDE** in [Step-I](add link). The screen will prompt the agent to enter the `Username` and `Password`. Click on `Login`. <img src="/customer-portal/img/cc37.png">
2. Select the campaign `Preview Dialler` from the drop-down menu and click `Confirm`. <img src="/customer-portal/img/cc38.png">
3. An Agent Dialer interface with the following fields will appear:
   1. `Selected Campgain` from the drop-down menu.
   2. `Keypad` for dialing the numbers.
   3. `Script`: Displays the call script the agent should follow.
   4. `Logout` for the agent to log off from the system. <img src="/customer-portal/img/cc39.png">
   5. `Contact information` of the customer sourced from the **uploaded Leadset** or entered manually via the **Lead Form**.
   6. `Lead Preview`: Opens lead details for the agent.
   7. `Invalid Details`: Lets the agent flag the lead if information is incorrect or incomplete.
   8. `Get Next Led`: It becomes active after the current call is concluded and displays the information of the next customer.
   9. `Call`: Hit the call button to phone the customer. <img src="/customer-portal/img/cc40.png">
   10. When your agent hits the `Call` button, a `Live Call` window will appear. <img src="/customer-portal/img/cc41.png">
       1.  `Hold`: Allows your agent to place the call on hold.
       2.  `Transfer`: Transfer call to another agent or manager.
       3.  `Mute`: Allows your agent to mute your call.
       4.  `Park`: **Currently *NOT IN USE***.
       5.  `Conference`: **Currently *NOT IN USE***.
       6.  `Keypad`: Displays the number keypad.
       7.  `End`: Allows your agent to disconnect the call.
   11. A window will prompt you to either `Set Disposition` or `Update User Details`.  <img src="cc42.png"> <img src="/customer-portal/img/cc43.png">
   12. Your agents can also the updte the customer details using the `Edit` button.
   13. Click on `Get Next Lead` to dial the next customer.
   14. The updated `Campaign Overview` can be seen. <img src="/customer-portal/img/cc84.png">

#### Auto Dialer

1. Enter the domain as entered in the **IDE** in [Step-I](add link). The screen will prompt the agent to enter the `Username` and `Password`. Click on `Login`. <img src="/customer-portal/img/cc37.png">
2. Select the campaign `Auto Dialer` from the drop-down menu and click `Confirm`. <img src="/customer-portal/img/cc59.png">
3. An Agent Dialer interface with the following fields will appear:
   1. `Agent Status` toggle: Make sure its `enabled (green)`, meaning the agent is active and ready to take calls
   2. `Selected Campgain` from the drop-down menu.
   3. `Keypad` for dialing the numbers.
   4. `Script`: Displays the call script the agent should follow.
   5. `Logout` for the agent to log off from the system. <img src="/customer-portal/img/cc60.png">
   6. `Contact information` of the customer sourced from the **uploaded Leadset** or entered manually via the **Lead Form**. The contact information of the customer will be updated after the agent receives the call.
   7. As soon as the `Agent Status` is enabled, the agent starts getting calls.
   8. A `Live Call` window will appear. <img src="/customer-portal/img/cc61.png">
       1. `Hold`: Allows your agent to place the call on hold.
       2. `Transfer`: Transfer call to another agent or manager.
       3. `Mute`: Allows your agent to mute your call.
       4. `Park`: **Currently *NOT IN USE***.
       5. `Conference`: **Currently *NOT IN USE***.
       6. `Keypad`: Displays the number keypad.
       7. `End`: Allows your agent to disconnect the call.
    9. After the call ends, your agent can either `Submit` the disposition and get ready for the next call or `Submit & Go On Pause`. <img src="/customer-portal/img/cc62.png">
    10. `Invalid Details`: Lets the agent flag the lead if information is incorrect or incomplete.
    11. Your agents can also the updte the customer details using the `Edit` button.
    12. The updated `Campaign Overview` can be seen. <img src="/customer-portal/img/cc85.png">

!!! Note
      The next call will go through after **30 seconds**.

#### Broadcast Dialer

1. Login to your webphone (eg: webphone.cnx.page).
2. Enter the `Username` and `Password`.
3. Select the `Server` from the drop-down menu. Hit `Login` button. <img src="/customer-portal/img/cc79.png">
4. Once logged in, the system will begin receiving calls automatically. <img src="/customer-portal/img/cc80.png">
5. The call is live. <img src="/customer-portal/img/cc81.png"> 
6. Here, the person has asked the virtual assistant to change the `status` to **The sale has been made**. The change can be seen as in the `Broadcast Leadset`. <img src="/customer-portal/img/cc82.png">
7. The `Braodcast Campaign Overview` display is also updated. <img src="/customer-portal/img/cc83.png">
