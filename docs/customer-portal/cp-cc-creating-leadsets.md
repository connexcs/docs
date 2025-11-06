# Creating Leadsets

## Overview

Leadset creation involves adding and organizing the list of contacts that will be used in a call center campaign.

A leadset defines the group of leads (customers or prospects) that agents will call during the campaign.

During this process, you can upload lead data, review the information for accuracy, and assign the leadset to a specific campaign.

Properly configured leadsets ensure that calls are made to the right audience, improve connection rates, and help in tracking campaign performance effectively.

## Steps for creating Leadsets

This section has information on the Leadsets. You can also `Create Leadset` . <br><img src= "/customer-portal/img/21ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

1. A new window will appear, prompting you to enter the required information:
    1. Enter the leadset `Name`.
    2. Pen-down any required `Description`.
    3. Select the `Campaign` from the drop-down for which you wish to associate the leadset.
    4. **State**: Configure the leadset’s operational status by setting it to either Active (available for assignment and dialing) or Inactive (disabled or paused).
    5. Click on `Confirm` to create the leadset. <br><img src= "/customer-portal/img/67ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br><br><img src= "/customer-portal/img/48ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br><br><img src= "/customer-portal/img/22ccnew1.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

2. Click on `See More` in the `Details` column. <br><img src= "/customer-portal/img/69ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

3. **A Leadset Dashboard** monitoring window will appear which displays the metrics of the leadset.(**Note: This image does not represent the dashboard after it has fully loaded**). <br><img src= "/customer-portal/img/24cc.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br> <br><img src= "/customer-portal/img/bd1.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br><br><img src= "/customer-portal/img/50ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

4. Description of the fields in the stats window:
       1. `Status`: Set the leadset to `Active` or `Inactive` state.
       2. Refresh your leadset parameters using `Refresh Lead Stats`.
       3. Click on `Leadset Data` to view the leadset data.
       4. Click on `Upload Leads` to upload the leadset data.
       5. Upload your data via `File`, `URL` or by entering the `Text`.

### Uploading a File

1. Drag and Drop a file or click to upload the `.csv`. <br><img src= "/customer-portal/img/70ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br><br><img src= "/customer-portal/img/51ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br><br><img src= "/customer-portal/img/25ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
2. A new window will open where two actions must be completed to create the leadset. <br><img src="/customer-portal/img/71ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br><br><img src="/customer-portal/img/26ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br><br><img src="/customer-portal/img/52ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
3. `Set row`: To indicate where the upload should start. `Right-click` on the row to want to start the uploading and click on `Set Start Row`. <br><img src="/customer-portal/img/72ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br><br><img src="/customer-portal/img/27ccnew.png" width= "800" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
4. `Map Table Columns`: Refers to the process of aligning or linking columns from one table to another, ensuring data consistency and accurate integration. This is essential when importing, migrating, or syncing data between different databases or systems. `Right-click` on the column you wish to be mapped, click on `Map Column` then `Phone` (required field) and `Status` (required field). Click on `Upload`. This will upload the leadset data to the server. <br><img src="/customer-portal/img/73ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br> <img src="/customer-portal/img/74ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px;"><br><img src="/customer-portal/img/28ccnew.png" width= "800" style="border: 2px solid #4472C4; border-radius: 8px;"></br> <img src="/customer-portal/img/29ccnew.png" width= "800" style="border: 2px solid #4472C4; border-radius: 8px;">
5. The leadset gets uploaded successfully. <br><img src="/customer-portal/img/75ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br><br><img src="/customer-portal/img/36ccnew.png" width= "800" style="border: 2px solid #4472C4; border-radius: 8px;"></br><br><img src="/customer-portal/img/56ccnew.png" width= "800" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
6. The leadset dashboard now displays total uploaded leads and dialable leads as well. <br><img src="/customer-portal/img/76cc.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br><br><img src="/customer-portal/img/37ccnew.png" width= "800" style="border: 2px solid #4472C4; border-radius: 8px;"></br><br><img src="/customer-portal/img/87cc.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
7. **Continue to Modify**: If you click here, it will redirect to the Data Suite. [Click here](https://docs.connexcs.com/datasuite/) to know more.
8. **Edit Leadset**: Modify the details of an existing Leadset. The system will present the same interface as `Create Leadset`.
9. **Add Lead (Form)**: Manually add a lead via a form. <br><img src="/customer-portal/img/31cc.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
10. **Lead Status**: Displays whether a lead is available, being worked on, needs follow-up, or is no longer active
    1. `Total Leads`: The total number of leads uploaded or assigned to the campaign or leadset.
    2. `Dialable Leads`: Leads that are ready to be called (i.e., they're active, have valid numbers, and meet campaign rules).
    3. `Data Recycle`: Recycles leads that didn’t connect (e.g., no answer, busy) by returning them to the dial queue and updating their status based on retry rules.

11. **Call Status**: Displays counts for different call outcomes; like `Call Answered`, `Failed Calls`, `Call In Progress`, `Call Ringing`, `Dropped Calls`.

12. **Disposition Status**: Shows a pie chart for all the call disposition outcomes. Each colored section of the pie chart corresponds to one of these dispositions.

13. **Lead Agents Activity**: It displays performance stats of individual agents. The metrics include `Call Transfered`, `Busy`, `Call Back`, `Do Not Call`, `Not interested`, `Null`, `Sale made`, `Wrong details` etc.

!!! Note "This section is only valid for Broadcast Dialer"
    With your Campaign, Agents, Agent Script, and Leadset configured, the next step is to access the **Agent Dialer** to start placing calls.

    !!! Tip "Disposition in Broadcast Dialer"
        As in the Broadcast Dialer the AI Agent can't set the `Disposition Status`. You need to do the following in order to add the capability for adding the disposition status.
        While creating your AI Agent you need to the following things:
            1. In the `Advanced` tab select `Set Variable` in the `Built-in Function` field.
            2. In the `Model` tab in the `Prompt` field you need to give a prompt which says that the status should be saved in the variable; using the **functions**: `name`=`status` and `value`=`[status]`

    !!! Example "Example Prompt"
        Your first task is to ask the status: "What's your status?", as you don't currently know the status.
        Once the status has been provided, store it in the variable name. Don't store the variable unless you have been given it by the customer. don't save anything until the customer gives you instructions.
        Don't proceed with anything else until you have successfully collected and stored the status by calling the setVariable function with `name`=`status` and `value`=`[status]`.

### Uploading via URL

1. Enter the URL in the CSV format and hit the Upload button. <br><img src="/customer-portal/img/77ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br><br><img src="/customer-portal/img/29cc.png" width= "800" style="border: 2px solid #4472C4; border-radius: 8px;"></br><br><img src="/customer-portal/img/57ccnew.png" width= "800" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
2. Follow the same process as described in the **Upload via File** section, starting from **Step 2** through to the final step.

### Uploading via Text

=== "Broadcast Dialer"

    1. Enter the text in the following format:
        ```bash
        Column 1,Column 2,   
        Phone, Status
        10800, New
        10801, New
        ```

    2. Click on `Upload`. <br><img src="/customer-portal/img/bd2.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
    
    3. Follow the same process as described in the **Upload via File/Upload via URL** section, starting from **Step 2** through to the final step.

=== "Preview/Auto Dialer"

    1. Enter the text in the following format:
        ```bash
        Column 1,Column 2,
        Phone, Status
        44116, Ready
        44117, Ready
        44118, Ready
        44119, Ready
        ```

    2. Click on `Upload`. <br><img src="/customer-portal/img/32cc.png" width= "800" style="border: 2px solid #4472C4; border-radius: 8px;"></br><img src="/customer-portal/img/1ad.png" width= "800" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

    3. Follow the same process as described in the **Upload via File/Upload via URL** section, starting from **Step 2** through to the final step.
