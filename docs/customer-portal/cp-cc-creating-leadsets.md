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

This section has information on the Leadsets. You can also `Add Leadset` . <br><img src= "/customer-portal/img/ccrevamp19_new.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

1. A new window will appear, prompting you to enter the required information:
    1. Enter the leadset `Name`.
    2. Pen-down any required `Description`.
    3. Select the `Campaign` from the drop-down for which you wish to associate the leadset.
    4. **Status**: Configure the leadset’s operational status by setting it to either Active (available for assignment and dialing) or Inactive (disabled or paused).
    5. Click on `Save` to create the leadset. <br><img src= "/customer-portal/img/ccrevamp20_new.png" width= "600" style="border: 2px solid #4472C4; border-radius: 8px;"></br>  

2. Click on `See More` in the `Details` column. <br><img src= "/customer-portal/img/ccrevamp21_new.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

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

### Upload Lead Bulk Upload data

#### Uploading via File

1. Drag and Drop a **file** or click to upload the `.csv`. The uploaded file name and total number of rows are displayed.<br><img src= "/customer-portal/img/70ccnew1_new9.png" width= "600" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

2. **Mappings**: Use the `Mappings` tab to map the CSV columns (such as `phone` and `status`) to the corresponding lead fields in ConnexCS; mandatory fields are marked with an asterisk (\*). <br><img src= "/customer-portal/img/newleadset1.png" width= "600" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

3. **Populate**: Use the `Populate` tab to add or replace column values with a common value that will be applied to all uploaded records. <br><img src= "/customer-portal/img/newleadset2.png" width= "600" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

4. **Setup**: Use the `Setup` tab to configure the `First data row` from which the system should read the CSV data and export the uploaded data in `CSV` or `JSON` format if required.<br><img src= "/customer-portal/img/newleadset3.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

5. **Validate & Upload**: Click `Validate & upload` to validate the mapped data; once validation passes, the system starts uploading the leads and displays the upload progress. <br><img src= "/customer-portal/img/newleadset4.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

6. **Upload Confirmation**: Once the upload is complete, a success message confirms that all leads have been uploaded successfully.<br><img src= "/customer-portal/img/newleadset5.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

7. **Lead Stats**: After uploading, navigate to the Leads dashboard to view lead statistics, including `Total Leads`, `Dialable Leads`, `In Progress`, `Call Answered`, `Call Ringing`, `Failed Calls`, and `Dropped Calls`. <br><img src= "/customer-portal/img/newleadset6.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
8. **Data Recycle**: The Data Recycle window allows users to change the status of existing lead records in bulk. It helps move leads from one call status to another without manually updating each record.<br><img src= "/customer-portal/img/newleadset7.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
   1. `Old Status`: Select the existing status of the leads you want to update.
   2. `New Status`: Select the status to which the selected leads should be changed.
   3. `Recycle`: Click Recycle to apply the new status to the matching lead records.
   4. `Cancel`: Click Cancel to close the window without applying the changes. <br><img src= "/customer-portal/img/newleadset8.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
9. **Edit Leadset**: Modify the details of an existing Leadset. The system will present the same interface as `Create Leadset`.
10. **Lead Status**: Displays whether a lead is available, being worked on, needs follow-up, or is no longer active
    1. `Total Leads`: The total number of leads uploaded or assigned to the campaign or leadset.
    2. `Dialable Leads`: Leads that are ready to be called (i.e., they're active, have valid numbers, and meet campaign rules).
    3. `Data Recycle`: Recycles leads that didn’t connect (e.g., no answer, busy) by returning them to the dial queue and updating their status based on retry rules.

#### Uploading via URL

1. Enter the URL in the CSV format and hit the Upload button. <br><img src="/customer-portal/img/newleadset9.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
2. Follow the same process as described in the **Upload via File** section, starting from **Step 2** through to the final step.

#### Uploading via Text

1. Enter the text in the following format:

    ```bash  
        Phone, Status
        10800, New
        10801, New
    ```

2. Click on `Upload`. <br><img src="/customer-portal/img/newleadset10_new.png" width= "600" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

3. Follow the same process as described in the **Upload via File/Upload via URL** section, starting from **Step 2** through to the final step.

#### Single Lead

The `Single lead` option allows users to manually add an individual lead by entering their contact information, personal details, location, and other relevant attributes. <br><img src="/customer-portal/img/newleadset11.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

The following table describes the available fields:

| Field            | Description                                                                                    |
| ---------------- | ---------------------------------------------------------------------------------------------- |
| **Phone**            | Enter the lead's primary phone number. This is a mandatory field.                              |
| **Status**           | Select the current status of the lead from the available options.                              |
| **First Name**       | Enter the lead's first name.                                                                   |
| **Last Name**        | Enter the lead's last name or surname.                                                         |
| **Middle Initial**   | Enter the middle initial of the lead.                                                          |
| **Title**            | Enter the lead's professional or personal title, such as Mr., Mrs., Dr., or a job designation. |
| **Gender**           | Specify the lead's gender.                                                                     |
| **Date of Birth**    | Enter the lead's date of birth in `YYYY-MM-DD` format.                                         |
| **Email**            | Enter the lead's email address.                                                                |
| **Alt Phone**        | Enter an alternative contact number for the lead.                                              |
| **Phone Code**       | Enter the international dialing code associated with the phone number.                         |
| **Address 1**        | Enter the primary street address of the lead.                                                  |
| **Address 2**        | Enter additional address details, such as an apartment, suite, or building number.             |
| **Address 3**        | Enter any further address information, if applicable.                                          |
| **City**             | Enter the city where the lead is located.                                                      |
| **State**            | Enter the state or region associated with the lead's address.                                  |
| **Province**         | Enter the province or administrative region where the lead resides.                            |
| **Postal Code**      | Enter the postal or ZIP code of the lead's location.                                           |
| **Country Code**     | Enter the country code associated with the lead's location.                                    |
| **Vendor Lead Code** | Enter the lead identification code provided by the lead vendor, if applicable.                 |
| **Source ID**        | Enter the identifier used to track the source from which the lead originated.                  |
| **Security Phrase**  | Enter the security phrase associated with the lead, if applicable.                             |
| **Business**         | Enter the name of the company or business associated with the lead.                            |
| **Rank**             | Specify the lead's priority or ranking using the available numeric control.                    |
| **GMT Offset Now**   | Specify the GMT offset associated with the lead's current time zone.                           |
| **User**             | Enter or associate the user assigned to the lead.                                              |
| **Comments**         | Add additional notes, remarks, or relevant information about the lead.                         |
