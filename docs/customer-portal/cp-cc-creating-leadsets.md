# Creating Leadsets

---

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Customer Portal / Contact Center – Leadset Management<br> <strong>Audience</strong>: Administrators, Engineers, Support Team<br> <strong>Difficulty</strong>: Intermediate<br> <strong>Time Required</strong>: Approximately 15–25 minutes<br> <strong>Prerequisites</strong>: Active ConnexCS account, Customer Portal module enabled, Contact Center and Dialer configured, and permissions to create or import leadsets in the Contact Center module.<br> <strong>Related Topics</strong>: <a href="https://docs.connexcs.com/customer-portal/cp-contact-center/">Contact Center Overview</a>, <a href="https://docs.connexcs.com/customer-portal/cp-cc-creating-agents/">Creating Agents</a>, <a href="https://docs.connexcs.com/customer-portal/cp-cc-campaign/">Campaign Management</a>, <a href="https://docs.connexcs.com/customer-portal/cp-cc-setting-up-dialer/">Dialer Setup</a><br> <strong>Next Steps</strong>: Build or upload leadsets (lists of leads/contacts), associate leadsets with specific campaigns, assign leads to agents, test lead distribution and calling workflows, and verify lead assignment and call logging.<br>

</details>

---

## Overview

Leadset creation involves adding and organizing the list of contacts that will be used in a call center campaign.

A leadset defines the group of leads (customers or prospects) that agents will call during the campaign.

During this process, you can upload lead data, review the information for accuracy, and assign the leadset to a specific campaign.

Properly configured leadsets ensure that calls are made to the right audience, improve connection rates, and help in tracking campaign performance effectively.

## Steps for creating Leadsets

This section has information on the Leadsets. You can also `Create Leadset` . <br><img src= "/customer-portal/img/ccrevamp19.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

1. A new window will appear, prompting you to enter the required information:
    1. Enter the leadset `Name`.
    2. Pen-down any required `Description`.
    3. Select the `Campaign` from the drop-down for which you wish to associate the leadset.
    4. **Status**: Configure the leadset’s operational status by setting it to either Active (available for assignment and dialing) or Inactive (disabled or paused).
    5. Click on `Save` to create the leadset. <br><img src= "/customer-portal/img/ccrevamp20.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>  

2. Click on `See More` in the `Details` column. <br><img src= "/customer-portal/img/ccrevamp21.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

   1. `All Leadsets`: Returns to the list of all leadsets.

   2. `Leadset Name`: Displays the name of the selected leadset, such as `test2`.

   3. `Campaign`: Displays the campaign associated with the leadset, such as `Preview Dialler`.

   4. `State`: Indicates whether the leadset is `Active` or `Inactive`.

   5. `Activation Toggle`: Allows users to enable or disable the leadset.

   6. `Edit Leadset`: Opens the leadset settings for editing.

   7. `Lead Stats`: Displays the total number of leads in the leadset and their current status in the calling process.

      1. `Total Leads`: Displays the total number of leads added to the leadset.
      2. `Dialable Leads`: Displays the number of leads eligible for dialing.
      3. `In Progress`: Displays the number of leads currently being processed.
      4. `Call Answered`: Displays the number of calls answered by recipients.
      5. `Call Ringing`: Displays the number of calls that are currently ringing.
      6. `Failed Calls`: Displays the number of calls that failed to connect.
      7. `Dropped Calls`: Displays the number of calls that were disconnected unexpectedly.
      8. `Live`: Indicates that the lead statistics are displayed in live mode.
      9. `Refresh Button`: Refreshes the lead statistics displayed on the screen.

   8. `Leads`: Displays the list of leads associated with the selected leadset. The heading also indicates the total number of leads, such as `Leads (0)`.

      1. `Refresh Button`: Refreshes the lead list.
      2. `Delete`: Allows users to delete selected leads, where applicable.
      3. `Recycle`: Opens the lead recycling functionality to manage leads for reuse, where supported.
      4. `Bulk Upload`: Opens the interface for uploading multiple leads in a single operation.
      5. `Upload Lead`: Opens the form for adding an individual lead.
      6. `Search Leads`: Allows users to search for leads in the leadset.

   9. `Leads Table`: Displays the details of leads associated with the leadset.

      1. `Phone`: Displays the lead's phone number.
      2. `Status`: Displays the current status of the lead.
      3. `Summary`: Displays the summary associated with the lead, if available.
      4. `First Name`: Displays the lead's first name.
      5. `Last Name`: Displays the lead's last name.
      6. `Middle Name`: Displays the lead's middle name, if available.
      7. `Title`: Displays the lead's title, if available.
      8. `Gender`: Displays the lead's gender, if available.
      9. `Date of Birth`: Displays the lead's date of birth, if available.
      10. `Email`: Displays the lead's email address.
      11. `Alt Phone`: Enter an alternative phone number for the lead, if available.
      12. `Phone Code`: Enter the telephone dialing code associated with the lead's phone number.
      13. `Address 1`: Enter the lead's primary street address.
      14. `Address 2`: Enter additional address details, such as an apartment, suite, or building number.
      15. `Address 3`: Enter any further address details, if applicable.
      16. `City`: Enter the city where the lead is located.
      17. `State`: Enter the state associated with the lead's address.
      18. `Province`: Enter the province or other regional subdivision associated with the lead's address, if applicable.
      19. `Postal Code`: Enter the postal or ZIP code associated with the lead's address.
      20. `Country Code`: Enter the country code associated with the lead.
      21. `Vendor Lead Code`: Enter the lead identifier assigned by the external vendor, if applicable.
      22. `Source Id`: Enter the identifier used to identify the lead's source.
      23. `Security Phrase`: Enter the security phrase associated with the lead, if applicable.
      24. `Business`: Enter the name of the business associated with the lead, if applicable.
      25. `Rank`: Specify the lead's rank using the `−` and `+` buttons to decrease or increase the value. The default value displayed is `0`.
      26. `GMT Offset Now`: Specify the lead's current GMT offset using the `−` and `+` buttons to decrease or increase the value. The default value displayed is `0`.
      27. `User`: Enter the user associated with the lead, if applicable.
      28. `Comments`: Enter additional notes or comments about the lead.
      29. `Cancel`: Closes the Upload Lead form without uploading the lead.
      30. `Upload`: Submits the entered information to add the lead to the leadset.

### Uploading leadset

#### Bulk Upload

This option allows you to upload  up to **100000** rows per file.

1. Click on the `Bulk Upload` button.
2. Upload the `.csv` file.<br><img src= "/customer-portal/img/ccrevamp23.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
3. Click on `Upload Leads`. <br><img src= "/customer-portal/img/ccrevamp24.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>


3. **A Leadset Dashboard** monitoring window will appear which displays the metrics of the leadset.(**Note: This image does not represent the dashboard after it has fully loaded**). <br><img src= "/customer-portal/img/24ccnew12.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

4. Description of the fields in the stats window:
       1. `Status`: Set the leadset to `Active` or `Inactive` state.
       2. Refresh your leadset parameters using `Refresh Lead Stats`.
       3. Click on `Leadset Data` to view the leadset data.
       4. Click on `Upload Leads` to upload the leadset data.
       5. Upload your data via `File`, `URL` or by entering the `Text`.