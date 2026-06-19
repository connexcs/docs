# Jobs

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Setup & Configuration → Information → Jobs<br>
<strong>Audience</strong>: Administrators, Engineers, Support Team<br>
<strong>Difficulty</strong>: Intermediate<br>
<strong>Time Required</strong>: 5–10 minutes<br>
<strong>Prerequisites</strong>: Access to the Setup → Information section of the ConnexCS control panel; permissions to view system jobs/queues.<br>
<strong>Related Topics</strong>: <a href="https://docs.connexcs.com/setup/information/audit-log/">Audit Log</a>, <a href="https://docs.connexcs.com/setup/information/change-log/">Change Log</a><br>
<strong>Next Steps</strong>: Review job results and export logs for job monitoring or troubleshooting.<br>

</details>

**Setup :material-menu-right: Information :material-menu-right: Job**

## Overview

**Jobs** is an interesting feature that lets you check the status of tasks created or initiated for you.

## Types of Status

1. **Completed**: When the task has been fully accomplished
2. **Failed**: When the process doesn't complete successfully.
3. **Active**: The task is ongoing.
4. **Delayed**: When the task has been delayed.
5. **Wait**: The task has been paused.

## Types of Tasks

1. **Send**: You can check the status of the e-mails you send. You can even re-try to send the e-mail along with failed reasons.
2. **ORC**: You can check the status of any server which has been added or restarted.
3. **SIP Test**: You can check the status of any Circuit Tests.
4. **Card**: You can check the status of the Rate Card, when you build it.
5. **ScriptForge**: You can check the status of the ScriptForge running in the background.
6. **CDR**: You can check the status of any re-rate.
7. **Switch**: You can check the status of any changes are made to the OpenSIPS.
8. **E-mail**: You can check the status of emails sent by the system, view delivery results, identify failed emails, and retry sending when required.

!!! Note
    You can see the information like **ID**, **Attempts made/Attempts**, **Start Latency**, **Run Time**, **Started At**, **Finished At** and **Failed Reason** for all the statuses discussed above.

<img src= "/setup/img/job123.png" style="border: 2px solid #4472C4; border-radius: 8px;">
