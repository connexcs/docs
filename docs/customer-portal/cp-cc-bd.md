# Broadcast Dialer

In this section, we will cover the **Dialer Dashboard**, which provides real-time insights into ongoing campaigns.

We will also walk through configuring the **Broadcast Dialer** and demonstrate how to use it to make calls.

## Dialer Dashboard: Features and Functions

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

<img src= "/customer-portal/img/9cc.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

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

## Setting Up Your Broadcast Dialer

1. [Click here](https://docs.connexcs.com/class5/ai-agent/#steps-to-create-ai-agent) to create an AI Agent.
2. Navigate to **Customer Portal :material-menu-right: Contact Center**.
3. In the `Campaign` tab, click `Add Campaign`. <br><img src= "/customer-portal/img/88cc.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
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
         3. **Source Status**: Select `Ready`/`New` or Custom Source Status for call origination. If no status is selected the calls won't be sent.
         4. **Internal Destination**: Select your AI Agent from the drop-down menu.

5. Click on the `Confirm` button. <br><img src= "/customer-portal/img/66ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

6. Click on `See More` in the `Details` column.

7. A `Campaign Overview` will open. This interface is used for real-time monitoring of campaigns, lead stats, agent statuses, and calling activity. <br><img src= "/customer-portal/img/88cc.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

      1. `State`: Whether the campaign is `Active` or `Inactive`.

      2. `Edit Campaign`: Open the campaign settings for editing.

      3. `Back`: Return to the previous page.

      4. `Campaign Stats`: Provides real-time visual insights into the current status of the campaign's calling activities and agent activities.

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

         3. `Call ID`: A unique identifier for tracking or logging the call.

         4. `Call Status`: The current state (e.g., Ringing, Connected, In Progress, Completed, Failed).

8. **Script**: The Script section enables you to create structured call scripts for agents to follow during customer interactions.
    1. Click on `Add a new Script`. <br><img src= "/customer-portal/img/cc18new.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
    2. Enter the `Script Name` and `Script`.
    3. Click `Confirm` to save the script. <br><img src= "/customer-portal/img/cc64.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
    4. The created script will be displayed in the window; click on `Preview` to view the script. <br><img src= "/customer-portal/img/cc65.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

9. **Leadset**: This section has information on the Leadsets. You can also `Create Leadset` . <br><img src= "/customer-portal/img/cc21new.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

10. A new window will appear, prompting you to enter the required information:
    1. Enter the leadset `Name`.
    2. Pen-down any required `Description`.
    3. Select the `Campaign` from the drop-down for which you wish to associate the leadset.
    4. **State**: Configure the leadset’s operational status by setting it to either Active (available for assignment and dialing) or Inactive (disabled or paused).
    5. Click on `Confirm` to create the leadset. <br><img src= "/customer-portal/img/cc67new.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

11. Click on `See More` in the `Details` column.

12. **A Leadset Dashboard** monitoring window will appear which displays the metrics of the leadset. <br><img src= "/customer-portal/img/cc69new.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

13. Description of the fields in the stats window:
    1. `Status`: Set the leadset to `Active` or `Inactive` state.
    2. Refresh your leadset parameters using `Refresh Lead Stats`.
    3. Click on `Leadset Data` to view the leadset data. <br><img src= "/customer-portal/img/cc68new.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
    4. Click on `Upload Leads` to upload the leadset data.
    5. Upload your data via `File`, `URL` or by entering the `Text`.
          1. **File**: Drag and Drop a file or click to upload the `.csv`. <br><img src= "/customer-portal/img/cc70new.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
             1. A new window will open where two actions must be completed to create the leadset. <br><img src="/customer-portal/img/cc71new.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
             2. `Set row`: To indicate where the upload should start. `Right-click` on the row to want to start the uploading and click on `Set Start Row`. <br><img src="/customer-portal/img/cc72new.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
             3. `Map Table Columns`: Refers to the process of aligning or linking columns from one table to another, ensuring data consistency and accurate integration. This is essential when importing, migrating, or syncing data between different databases or systems. `Right-click` on the column you wish to be mapped, click on `Map Column` then `Phone` and `Status`. Click on `Upload`. This will upload the leadset data to the server. <br><img src="/customer-portal/img/cc73new.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br> <img src="/customer-portal/img/cc74new.png" style="border: 2px solid #4472C4; border-radius: 8px;">
             4. The leadset gets uploaded successfully. <br><img src="/customer-portal/img/cc75new.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
             5. The leadset dasboard displays the total uploaded leads and dialable leads as well. <br><img src="/customer-portal/img/cc76.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

         1. **Uploading via URL**: Enter the URL in the CSV format and hit the Upload button. <br><img src="/customer-portal/img/cc77new.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
            1. A new window will open where two actions must be completed to create the leadset. <br><img src="/customer-portal/img/cc71new.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
            2. `Set row`: To indicate where the uploaad should start. `Right-click` on the row to want to start the uploading and click on `Set Start Row`. <br><img src="/customer-portal/img/cc72new.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
            3. `Map Table Columns`: Refers to the process of aligning or linking columns from one table to another, ensuring data consistency and accurate integration. This is essential when importing, migrating, or syncing data between different databases or systems. `Right-click` on the column you wish to be mapped, click on `Map Column` then `Phone` and `Status`. Click on `Upload`. This will upload the leadset data to the server. <br><img src="/customer-portal/img/cc73new.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br> <img src="/customer-portal/img/cc74new.png" style="border: 2px solid #4472C4; border-radius: 8px;">
            4. The leadset gets uploaded successfully. <br><img src="/customer-portal/img/cc75new.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
            5. The leadset dashboard now displays total uploaded leads and dialable leads as well. <br><img src="/customer-portal/img/cc76.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

         2. **Uploading via Text**:
            1. Enter the text in the following format:
               ```bash
               Column 1,Column 2,   
               Phone, Status
               10800, New
               10801, New
               ```
            2. Click on `Upload`. <br><img src="/customer-portal/img/cc77new.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
            3. A new window will open where two actions must be completed to create the leadset. <br><img src="/customer-portal/img/cc71new.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
            4. `Set row`: To indicate where the upload should start. `Right-click` on the row to want to start the uploading and click on `Set Start Row`. <br><img src="/customer-portal/img/cc72new.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
            5. `Map Table Columns`: Refers to the process of aligning or linking columns from one table to another, ensuring data consistency and accurate integration. This is essential when importing, migrating, or syncing data between different databases or systems. `Right-click` on the column you wish to be mapped, click on `Map Column` then `Phone` and `Status`. Click on `Upload`. This will upload the leadset data to the server. <br><img src="/customer-portal/img/cc73new.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br> <img src="/customer-portal/img/cc74new.png" style="border: 2px solid #4472C4; border-radius: 8px;">
            6. The successful upload can be seen in the image. <br><img src="/customer-portal/img/cc75new.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
            7. The leadset dashboard now displays total uploaded leads and dialable leads as well. <br><img src="/customer-portal/img/cc76.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

14. **Continue to Modify**: If you click here, it will redirect to the Data Sure. [Click here](https://docs.connexcs.com/datasuite/) to know more.

15. **Edit Leadset**: Modify the details of an existing Leadset. The system will present the same interface as `Create Leadset`.

16. **Add Lead (Form)**: Manually add a lead via a form. <br><img src="/customer-portal/img/cc31.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

17. **Lead Status**: Displays whether a lead is available, being worked on, needs follow-up, or is no longer active
    1. `Total Leads`: The total number of leads uploaded or assigned to the campaign or leadset.
    2. `Dialable Leads`: Leads that are ready to be called (i.e., they're active, have valid numbers, and meet campaign rules).
    3. `Data Recycle`: Recycles leads that didn’t connect (e.g., no answer, busy) by returning them to the dial queue and updating their status based on retry rules.

18. **Call Status**: Displays counts for different call outcomes; like `Call Answered`, `Failed Calls`, `Call In Progress`, `Call Ringing`, `Dropped Calls`.

19. **Disposition Status**: Shows a pie chart for all the call disposition outcomes. Each colored section of the pie chart corresponds to one of these dispositions.

20. **Lead Agents Activity**: It displays performance stats of individual agents. The metrics include `Call Transfered`, `Busy`, `Call Back`, `Do Not Call`, `Not interested`, `Null`, `Sale made`, `Wrong details` etc.

With your Campaign, Agents, Agent Script, and Leadset configured, the next step is to access the **Agent Dialer** to start placing calls.

!!! Tip "Disposition in Broadcast Dialer"
      As in the Broadcast Dialer the AI Agent can't set the `Disposition Status`. You need to do the following in order to add the capability for adding the disposition status.
      While creating your AI Agent you need to the following things:
      1. In the `Advanced` tab select `Set Variable` in the `Built-in Function` field.
      2. In the `Model` tab in the `Prompt` field you need to give a prompt which says that the status should be saved in the variable; using the **functions**: `name`=`status` and `value`=`[status]`

!!! Example "Example Prompt"
      Your first task is to ask the status: "What's your status?", as you don't currently know the status.
      Once the status has been provided, store it in the variable name. Don't store the variable unless you have been given it by the customer. don't save anything until the customer gives you 
      Don't proceed with anything else until you have successfully collected and stored the status by calling the setVariable function with `name`=`status` and `value`=`[status]`.

### Agent Dialer Guide

1. Login to your webphone (eg: webphone.cnx.page).
2. Enter the `Username` and `Password`.
3. Select the `Server` from the drop-down menu. Hit `Login` button. <br><img src="/customer-portal/img/cc79.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
4. Once logged in, the system will begin receiving calls automatically. <br><img src="/customer-portal/img/cc80.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
5. The call is live. <br><img src="/customer-portal/img/cc81.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
6. Here, the person has asked the virtual assistant to change the `status` to **The sale has been made**. The change can be seen as in the `Broadcast Leadset`. <br><img src="/customer-portal/img/cc83new.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
7. The `Braodcast Campaign Overview` display is also updated. <br><img src="/customer-portal/img/cc831new.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>