# Auto Dialer

## Dialer Dashboard: Features and Functions

In this section, we will cover the **Dialer Dashboard**, which provides real-time insights into ongoing campaigns.

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

<img src= "/customer-portal/img/9cc.png" style="border: 2px solid #4472C4; border-radius: 8px;">

=== "Campaigns"

    Summarizes ongoing campaigns, including parameters like status, campaign type, source status, CPS, Channels etc. You also have an option to **Add Campaign**.

    <img src= "/customer-portal/img/10ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px;">

=== "Agents"

    Summarizes ongoing agent activity, displaying parameters like status, SIP profile, protocol, bandwidth, CPS, channels, dial pattern, and other SIP metrics.
    You can also upload agents in bulk using **Create Bulk Agents**.

    <img src= "/customer-portal/img/11ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px;">

=== "Script"

    Displays all the created scripts in the Contact Center. You can also **Add a New Script**. 

      <img src= "/customer-portal/img/12ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px;">

=== "Leadset"

    Manages leadsets for outbound campaigns, showing parameters like name, associated campaign, status, and description.
    You can also create new leadsets individually or upload them in bulk using **Create Leadset**.

      <img src= "/customer-portal/img/13ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px;">

## Setting Up Your Auto Dialer

In this section, we will walk through configuring the **Auto Dialer** and demonstrate how to use it to make calls.

1. Navigate to **Customer Portal :material-menu-right: Contact Center**.
2. In the `Campaign` tab, click `Add Campaign`. <br><img src= "/customer-portal/img/14ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
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
         4. **Custom Disposition**: A user-defined set of call outcome labels that agents are required to select after each call, enabling structured tracking, systematic reporting, and optimized follow-up workflows.
            1. `Agent Unavailable`: Call was made but hung up due to agent being busy (mostly in auto dialers).
            2. `Answered`: Call is connected.
            3. `Connection Error`: Originate method failed to work.
            4. `Error`: An error occurred at the code level.
            5. `Connected`: AI call was answered, but disposition wasn't saved.
            6. `Rejected`: Call ended without pickup (user or server may have hung up).
            7. `Ringing`: AI-initiated call is ringing.
            8. `In Progress`: Call data is being allocated.
         5. **Agents**: Select agents for the Auto Dialer. <br><img src= "/customer-portal/img/adcampaign1.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

4. Click on the `Confirm` button.

!!! Info "Custom Disposition Information"
      `DO NOT CALL`, `NOT INTERESTED`, `SALE MADE`, `CALL TRANSFERRED`, `BUSY`, `CALL BACK`, `DISCONNECTED NUMBER`, `DECLINED SALE`, `WRONG DETAILS` — Predefined Disposition Statuses.

      Users can create custom source statuses and dispositions while creating or updating campaigns.

### Campaign Configuration

1. Click on `See More` in the `Details` column.

2. A `Campaign Overview` window will open. This interface is used for real-time monitoring of campaigns, lead statistics, agent statuses, and calling activity. <br><img src="/customer-portal/img/89ccnew.png" width= "800" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

   1. `State`: Whether the campaign is `Active` or `Inactive`.

   2. `Edit Campaign`: Open the campaign settings for editing.

   3. `Back`: Return to the previous page.

   4. `Campaign Stats`: Provides real-time visual insights into the current status of the campaign's calling activities and agent activities.

      1. `Callers Chart`: Shows the current distribution of calls:

         1. `Call In Progress`: How many calls are actively happening (agents talking to leads).

         2. `Call Waiting`: How many calls are waiting to be connected.

      2. `Agents Chart`: Shows the status of agents.

         1. `Call Active`: How many agents are currently on a call.

         2. `Agent Waiting`: How many agents are idle (ready and waiting for a call).

   5. `Campaign Agents`: List of agents assigned to the campaign.

      1. `Manage Agents`: Allows you to add/remove agents from the campaign from the drop-down menu. Click `Confirm`. <br><img src= "/customer-portal/img/34ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
             For example: The selected agents will be added. 

             <br><img src= "/customer-portal/img/35ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

      2. `Refresh Button`: To update agent statuses.

   6. `Lead Stats`: It shows you the total number of leads loaded into the campaign and what stage they're currently at during the calling process.

      1. `Total Leads`: Everyone you plan to call.

      2. `Dialable Leads`: How many you still can call.

      3. `In Progress`: Live calls happening now.

      4. `Call Answered`: People who actually picked up.

      5. `Failed Calls`: Calls that couldn't connect.

      6. `Dropped Calls`: Calls that got disconnected unexpectedly.

      7. `Agents in Queue`: Displays a list of agents who are waiting for a call or are ready to be assigned a call in the campaign.

### Creating Agents

This section has information on the agents. You can also `Create Bulk Agents`. <br><img src= "/customer-portal/img/16ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

1. Select a `SIP Profile`.

2. Add the `Number of Agents` for participation in this campaign.

3. Click on `Create`. <br><img src= "/customer-portal/img/17ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

### Creating Scripts

The Script section enables you to create structured call scripts for agents to follow during customer interactions.

1. Click on `Add a new Script`. <br><img src= "/customer-portal/img/18ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

2. Enter the `Script Name` and `Script`.

3. Click `Confirm` to save the script. <br><img src= "/customer-portal/img/46ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

4. The created script will be displayed in the window; click on `Preview` to view the script. <br><img src= "/customer-portal/img/47cc.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

#### Creating Leadsets

This section has information on the Leadsets. You can also `Create Leadset`. <br><img src= "/customer-portal/img/21ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

1. A new window will appear, prompting you to enter the required information:

   1. Enter the leadset `Name`.

   2. Pen-down any required `Description`.

   3. Select the `Campaign` from the drop-down for which you wish to associate the leadset.

   4. **State**: Configure the leadset’s operational status by setting it to either Active (available for assignment and dialing) or Inactive (disabled or paused).

   5. Click on `Confirm` to create the leadset. <br><img src= "/customer-portal/img/48ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

   6. Click on `See More` in the `Details` column. <br><img src= "/customer-portal/img/49cc.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

2. **A Leadset Dashboard** monitoring window will appear which displays the metrics of the leadset. <br><img src= "/customer-portal/img/50ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

3. Description of the fields in the stats window:

   1. `Status`: Set the leadset to `Active` or `Inactive` state.

   2. Refresh your leadset parameters using `Refresh Lead Stats`.

   3. Click on `Leadset Data` to view the leadset data.

   4. Click on `Upload Leads` to upload the leadset data. 

   5. Upload your data via `File`, `URL` or by entering the `Text`.

#### File

1. Drag and Drop a file or click to upload the `.csv`. <br><img src= "/customer-portal/img/51ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

2. A new window will open where two actions must be completed to create the leadset. <br><img src="/customer-portal/img/52ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

3. `Set row`: To indicate where the upload should start. `Right-click` on the row to want to start the uploading and click on `Set Start Row`. <br><img src="/customer-portal/img/27ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

4. `Map Table Columns`: Refers to the process of aligning or linking columns from one table to another, ensuring data consistency and accurate integration. This is essential when importing, migrating, or syncing data between different databases or systems. `Right-click` on the column you wish to be mapped, click on `Map Column` then `Phone` (required field) and `Status` (required field). Click on `Upload`. This will upload the leadset data to the server. <br><img src="/customer-portal/img/28ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br> <img src="/customer-portal/img/29ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px;">

5. Upon successful upload, the leadset will appear as shown below. <br><img src="/customer-portal/img/56ccnew.png" width= "800" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

6. **Continue to Modify**: If you click here, it will redirect to the Data Suite. [Click here](https://docs.connexcs.com/datasuite/) to know more.

7. **Edit Leadset**: Modify the details of an existing Leadset. The system will present the same interface as `Create Leadset`.

8. **Add Lead (Form)**: Manually add a lead via a form. <br><img src="/customer-portal/img/31cc.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

9. **Lead Status**: Displays whether a lead is available, being worked on, needs follow-up, or is no longer active.

       1. `Total Leads`: The total number of leads uploaded or assigned to the campaign or leadset.

       2. `Dialable Leads`: Leads that are ready to be called (i.e., they're active, have valid numbers, and meet campaign rules).

       3. `Data Recycle`: Recycles leads that didn’t connect (e.g., no answer, busy) by returning them to the dial queue and updating their status based on retry rules.

10. **Call Status**: Displays counts for different call outcomes; like `Call Answered`, `Failed Calls`, `Call In Progress`, `Call Ringing`, `Dropped Calls`.
11. **Disposition Status**: Shows a pie chart for all the call disposition outcomes. Each colored section of the pie chart corresponds to one of these dispositions.
12. **Lead Agents Activity**: It displays performance stats of individual agents. The metrics include `Call Transfered`, `Busy`, `Call Back`, `Do Not Call`, `Not interested`, `Null`, `Sale made`, `Wrong details` etc.

#### Uploading via URL

1. Enter the URL in the CSV format and hit the Upload button. <br><img src="/customer-portal/img/57ccnew.png" width= "800" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
2. A new window will open where two actions must be completed to create the leadset. <br><img src="/customer-portal/img/52ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
3. `Set row`: To indicate where the upload should start. `Right-click` on the row to want to start the uploading and click on `Set Start Row`. <br><img src="/customer-portal/img/27ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
4. `Map Table Columns`: Refers to the process of aligning or linking columns from one table to another, ensuring data consistency and accurate integration. This is essential when importing, migrating, or syncing data between different databases or systems. `Right-click` on the column you wish to be mapped, click on `Map Column` then `Phone` (required field) and `Status` (required field). Click on `Upload`. This will upload the leadset data to the server. <br><img src="/customer-portal/img/28ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br> <img src="/customer-portal/img/29ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
5. The successful upload can be seen in the image. <br><img src="/customer-portal/img/56ccnew.png" width= "800" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
6. The updated `Leadset Dashboard` can be seen as. <br><img src="/customer-portal/img/87cc.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
7. **Continue to Modify**: If you click here, it will redirect to the Data Suite. [Click here](https://docs.connexcs.com/datasuite/) to know more.

8. **Edit Leadset**: Modify the details of an existing Leadset. The system will present the same interface as `Create Leadset`.

9. **Add Lead (Form)**: Manually add a lead via a form. <br><img src="/customer-portal/img/31cc.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

10. **Lead Status**: Displays whether a lead is available, being worked on, needs follow-up, or is no longer active.

       1. `Total Leads`: The total number of leads uploaded or assigned to the campaign or leadset.

       2. `Dialable Leads`: Leads that are ready to be called (i.e., they're active, have valid numbers, and meet campaign rules).

       3. `Data Recycle`: Recycles leads that didn’t connect (e.g., no answer, busy) by returning them to the dial queue and updating their status based on retry rules.

11. **Call Status**: Displays counts for different call outcomes; like `Call Answered`, `Failed Calls`, `Call In Progress`, `Call Ringing`, `Dropped Calls`.
12. **Disposition Status**: Shows a pie chart for all the call disposition outcomes. Each colored section of the pie chart corresponds to one of these dispositions.
13. **Lead Agents Activity**: It displays performance stats of individual agents. The metrics include `Call Transfered`, `Busy`, `Call Back`, `Do Not Call`, `Not interested`, `Null`, `Sale made`, `Wrong details` etc.

#### Uploading via Text

1. Enter the text in the following format:
   ```bash
      Column 1,Column 2,
      Phone, Status
      44116, Ready
      44117, Ready
      44118, Ready
      44119, Ready
   ```

2. Click on `Upload`. <br><img src="/customer-portal/img/1ad.png" width= "800" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
3. A new window will open where two actions must be completed to create the leadset. <br><img src="/customer-portal/img/adnew1.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
4. `Set row`: To indicate where the upload should start. `Right-click` on the row to want to start the uploading and click on `Set Start Row`. <br><img src="/customer-portal/img/adsetrow.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
5. `Map Table Columns`: Refers to the process of aligning or linking columns from one table to another, ensuring data consistency and accurate integration. This is essential when importing, migrating, or syncing data between different databases or systems. `Right-click` on the column you wish to be mapped, click on `Map Column` then `Phone` (required field) and `Status` (required field). Click on `Upload`. This will upload the leadset data to the server. <br><img src="/customer-portal/img/adphone.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br> <img src="/customer-portal/img/adstatus.png" style="border: 2px solid #4472C4; border-radius: 8px;">
6. The successful upload can be seen in the image. <br><img src="/customer-portal/img/ad2.png" widht= "800" style="border: 2px solid #4472C4; border-radius: 8px;">
7. The updated `Leadset Dashboard` can be seen as. <br><img src="/customer-portal/img/ad3.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

8. **Continue to Modify**: If you click here, it will redirect to the Data Suite. [Click here](https://docs.connexcs.com/datasuite/) to know more.

9. **Edit Leadset**: Modify the details of an existing Leadset. The system will present the same interface as `Create Leadset`.

10. **Add Lead (Form)**: Manually add a lead via a form. <br><img src="/customer-portal/img/31cc.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

11. **Lead Status**: Displays whether a lead is available, being worked on, needs follow-up, or is no longer active.

       1. `Total Leads`: The total number of leads uploaded or assigned to the campaign or leadset.

       2. `Dialable Leads`: Leads that are ready to be called (i.e., they're active, have valid numbers, and meet campaign rules).

       3. `Data Recycle`: Recycles leads that didn’t connect (e.g., no answer, busy) by returning them to the dial queue and updating their status based on retry rules.

12. **Call Status**: Displays counts for different call outcomes; like `Call Answered`, `Failed Calls`, `Call In Progress`, `Call Ringing`, `Dropped Calls`.

13. **Disposition Status**: Shows a pie chart for all the call disposition outcomes. Each colored section of the pie chart corresponds to one of these dispositions.

14. **Lead Agents Activity**: It displays performance stats of individual agents. The metrics include `Call Transfered`, `Busy`, `Call Back`, `Do Not Call`, `Not interested`, `Null`, `Sale made`, `Wrong details` etc.

## Agent Dialer Guide

1. Enter your domain. The screen will prompt the agent to enter the `Username` and `Password`. Click on `Login`. <br><img src="/customer-portal/img/37cc.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
2. Select the campaign `Auto Dialer` from the drop-down menu and click `Confirm`. <br><img src="/customer-portal/img/59ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
3. An Agent Dialer interface with the following fields will appear:
      1. `Agent Status` toggle: Make sure its `enabled (green)`, meaning the agent is active and ready to take calls
      2. `Selected Campgain` from the drop-down menu.
      3. `Keypad` for dialing the numbers.
      4. `Script`: Displays the call script the agent should follow.
      5. `Logout` for the agent to log off from the system. <br><img src="/customer-portal/img/60ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
      6. `Contact information` of the customer sourced from the **uploaded Leadset** or entered manually via the **Lead Form**. The contact information of the customer will be updated after the agent receives the call.
      7. As soon as the `Agent Status` is enabled, the agent starts getting calls.
      8. A `Live Call` window will appear. <br><img src="/customer-portal/img/61ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
          1. `Hold`: Allows your agent to place the call on hold.
          2. `Transfer`: Transfer call to another agent or manager.
          3. `Mute`: Allows your agent to mute your call.
          4. `Park`: **Currently *NOT IN USE***.
          5. `Conference`: **Currently *NOT IN USE***.
          6. `Keypad`: Displays the number keypad.
          7. `End`: Allows your agent to disconnect the call.
4. After the call ends, your agent can either `Submit` the disposition and get ready for the next call or `Submit & Go On Pause`. <br><img src="/customer-portal/img/62ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
5. `Invalid Details`: Lets the agent flag the lead if information is incorrect or incomplete.
6. Your agents can also the update the customer details using the `Edit` button.
7. The updated `Campaign Overview` can be seen. <br><img src="/customer-portal/img/851ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
8. The updated `Leadset Overview` can be seen. <br><img src="/customer-portal/img/8511ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

!!! Note
    The next call will go through after **30 seconds**.
