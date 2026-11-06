# Numbers List

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Customer Portal → Numbers List<br>
<strong>Audience</strong>: Customers, Support Team<br>
<strong>Difficulty</strong>: Beginner<br>
<strong>Time Required</strong>: 5–10 minutes<br>
<strong>Prerequisites</strong>: Customer portal login, and a number list shared with your account by your provider<br>
<strong>Related Topics</strong>: <a href="https://docs.connexcs.com/setup/advanced/prefix-set/">Prefix Sets</a><br>
<strong>Next Steps</strong>: Add or remove numbers in the list. Your provider decides how the list is used, for example as numbers you can't dial (DNC list) or as caller IDs for your calls.<br>

</details>

## Overview

**Numbers List** in the customer portal shows the number lists your provider has shared with you. You can view the numbers in each list and, if your provider allows it, add or delete numbers yourself.

Each list is a [Prefix Set](https://docs.connexcs.com/setup/advanced/prefix-set/) that your provider has created with the **Database** flag on and shared with your account:

| Provider setting | What you can do |
|---|---|
| **Customer Read** | View the lists and the numbers in them. |
| **Customer Write** | Add and delete numbers. |

If a list is missing, or you can't add or delete numbers, contact your provider.

## Open a number list

1. In the customer portal, click **Numbers List** in the left menu. The lists shared with you are shown in the **Name** column.

    <img src="/customer-portal/img/nl1.png" alt="Customer portal Numbers List page showing a shared list named Test" style="border: 2px solid #4472C4; border-radius: 8px;">

2. Click the name of a list to open it. The **Phone Number** column shows the numbers in the list.

The toolbar has these buttons:

| Button | Action |
|---|---|
| **Back** | Return to the lists. |
| **Refresh** | Reload the numbers. |
| **+ Add Numbers** | Add numbers via text or by uploading a file. |
| **Delete** (trash) | Delete the selected numbers. |

## Add numbers

There are two ways to add numbers. Both use the **Add Numbers** window, and both accept the same number format:

- One number per line, or numbers separated by commas.
- International format without the leading `+` or `00`, for example `441234567890`.

### Method 1: Add numbers via text

Use this method for a few numbers that you can type or paste.

1. Open the list and click **+ Add Numbers**. The **Add Numbers** window appears.

    <img src="/customer-portal/img/nl2.png" alt="Add Numbers window with an empty text area and the Add Numbers button highlighted" style="border: 2px solid #4472C4; border-radius: 8px;">

2. Type or paste the numbers into the text area.

3. Check the green badge below the text area. It shows how many new numbers will be added, for example **2 new**.

4. Click **Add *n* number(s)**.

    <img src="/customer-portal/img/nl3.png" alt="Add Numbers window with two numbers entered, a 2 new badge, and the Add 2 numbers button" width="600" style="border: 2px solid #4472C4; border-radius: 8px;">

5. Check that the numbers appear in the list.

    <img src="/customer-portal/img/nl4.png" alt="Number list showing the newly added numbers" style="border: 2px solid #4472C4; border-radius: 8px;">

### Method 2: Upload a .csv file

Use this method for a large list of numbers. The window also accepts `.txt` files.

1. Prepare a `.csv` file with one number per line, or numbers separated by commas, in international format without the leading `+` or `00`:

    ```text
    441234567890
    441234567891
    ```

2. Open the list and click **+ Add Numbers**. The **Add Numbers** window appears.

3. Click **Load from file (.txt / .csv)** and select your file.

    <img src="/customer-portal/img/nl5.png" alt="Add Numbers window with the Load from file button highlighted" width="600" style="border: 2px solid #4472C4; border-radius: 8px;">

4. Check the file name and size shown in the window, and the green badge showing how many new numbers will be added. To choose a different file, click **Remove** and load it again.

5. Click **Add *n* number(s)**.

    <img src="/customer-portal/img/nl6.png" alt="Add Numbers window showing a loaded CSV file, a 2 new badge, and the Add 2 numbers button" width="600" style="border: 2px solid #4472C4; border-radius: 8px;">

6. Check that the numbers appear in the list.

    <img src="/customer-portal/img/nl7.png" alt="Number list showing the numbers added from the CSV file" style="border: 2px solid #4472C4; border-radius: 8px;">

!!! Tip "If the badge shows fewer new numbers than you expected, check the file for wrong separators or numbers with a leading + or 00 before clicking Add."

## Delete numbers

1. Open the list and select the checkbox beside each number you want to delete.

2. Click the **Delete** (trash) icon in the toolbar. A confirmation window shows how many numbers are selected.

3. Check the count, then click **Delete**.

!!! Warning "Deleted numbers are removed straight away. If the list is used as a DNC list, you can dial those numbers again immediately."

## Troubleshooting

| Issue | Resolution |
|---|---|
| **Numbers List** is empty or a list is missing | Your provider hasn't shared the list with your account. Contact your provider. |
| **+ Add Numbers** or **Delete** isn't available | Your account has view-only access to the list. Ask your provider for write access. |
| The **Delete** icon is greyed out | Select at least one number first. |
| The badge shows **0 new** | Check the format: one number per line or comma-separated, without `+` or `00`. Numbers already in the list aren't added again. |
| A file won't load | Use a `.csv` or `.txt` file. |