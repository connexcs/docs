# Prefix Sets

<details>
<summary><strong>Document Metadata</strong></summary>

**Category**: Setup & Configuration → Advanced Settings → Prefix Set

<br>**Audience**: Administrators, Engineers, Support Team</br>

**Difficulty**: Intermediate

<br>**Time Required**: 10–15 minutes</br>

**Prerequisites**: ConnexCS account with access to Setup → Advanced → Prefix Set

<br>**Related Topics**: [Routing](https://docs.connexcs.com/customer/routing/), [Global Routing](https://docs.connexcs.com/global-routing/), [Customer Rate Cards](https://docs.connexcs.com/customer-ratecard/), [Dial-Plan Rules](https://docs.connexcs.com/guides/howto/restrict-calling-plan/), [Do Not Call (DNC)](https://docs.connexcs.com/dnc/)</br>

</details>

## Overview

A **Prefix Set** is a reusable collection of telephone number prefixes that can be applied to supported routing and configuration rules in ConnexCS. Instead of entering the same prefixes in multiple locations, you can maintain them in one Prefix Set and reuse them wherever required.

Prefix Sets support plain-text prefixes and regular expressions (RegEx). You can also configure flags to manage global CLI and dialled-number lists, associate a database with the Prefix Set, and control customer read and write access where supported.

**Key Features**

- **Reusable prefix collections**: Maintain prefixes centrally and reuse them across supported configurations.
- **Plain-text and RegEx support**: Match specific number prefixes or patterns.
- **Global lists**: Configure global CLI blacklists, dialled-number blacklists, and CLI allow lists.
- **Database management**: Add, delete, and bulk-upload phone numbers.
- **Customer access**: Configure read and write permissions for the associated customer.

## Configure Prefix Sets

### Step 1: Create a Prefix Set

1\. Navigate to **Setup :material-menu-right: Advanced :material-menu-right: Prefix Set** and click **:material-plus:** in the top toolbar. The **Prefix Set** configuration window will appear. <br><img src="/apps/img/ps1.png" alt="ConnexCS Prefix Set page showing the Add button and configuration window" style="border: 2px solid #4472C4; border-radius: 8px; max-width: 100%;"></br>

2\. Enter a descriptive name in the **Name** field.

3\. Enter the required prefixes in the **Data** field. Add one prefix or regular-expression pattern per line. This field is required when using inline prefix data.

4\. Select a **Customer**, if required, to associate the Prefix Set with a specific customer.

5\. Select the appropriate options in **Flags**. You can select multiple flags depending on the intended use of the Prefix Set.

6\. Click **Save** to create the Prefix Set. <br><img src="/apps/img/ps3.png" alt="Add Number window showing the Phone Number field and Save button" width="600" style="border: 2px solid #4472C4; border-radius: 8px; max-width: 100%;"></br>

### Step 2: Configure Prefix Set Flags

The **Flags** field determines how the Prefix Set is used. The available options include global lists, database management, and customer permissions.

1\. **Global Dialled Number Blacklist**: Use this flag to designate the Prefix Set as a global block list for dialled destination numbers. Matching numbers can be blocked by the applicable global restrictions.

2\. **Global CLI Blacklist**: Use this flag to designate the Prefix Set as a global block list for Calling Line Identification (CLI) numbers. It supports centrally managed restrictions for caller IDs that should be blocked by the applicable system rules.

3\. **Global CLI Allow**: Use this flag to designate the Prefix Set as a global allow list for CLI numbers. A matching CLI can bypass applicable CLI blocking restrictions, including restrictions associated with DID block-source rules or Spam Scout scoring. Use this option carefully because it affects call screening.

4\. **Database**: Enable this flag to manage phone numbers through an associated database rather than maintaining them directly in the Data field. When enabled, the Prefix Set displays a **Numbers** link in the Database column.

5\. **Customer Read**: Use this flag to grant the associated customer read access to the Prefix Set or its relevant information through the customer portal, where supported.

6\. **Customer Write**: Use this flag to grant the associated customer write access to the Prefix Set or its relevant information through the customer portal, where supported.

7\. Select both **Customer Read** and **Customer Write** if the customer requires both types of access and the portal's permission model supports this combination.

!!! Note "Select the appropriate customer and permissions before enabling customer access. Customer Read and Customer Write control access permissions; they don't perform the same function as the global blacklist and allow-list flags."

### Step 3: Open the Prefix Set Database

1\. Navigate to **Setup :material-menu-right: Advanced :material-menu-right: Prefix Set** and locate the required Prefix Set.

2\. In the **Database** column, click **Numbers**. The associated database page will open and display the number of entries stored in the database. <br><img src="/apps/img/ps4.png" alt="Delete confirmation window asking whether to remove selected numbers from the database" style="border: 2px solid #4472C4; border-radius: 8px; max-width: 100%;"></br>

3\. Use the database toolbar to add individual numbers, paste or upload multiple numbers, refresh the list, delete selected entries, or empty the database.

!!! Note "The Numbers link is available when the Prefix Set is configured for database management."

### Step 4: Add an Individual Number

1\. Open the required Prefix Set database and click **:material-plus:** in the toolbar.

2\. An **Add Number** window will appear. Enter the phone number in the **Phone Number** field. <br><img src="/apps/img/ps5.png" alt="Paste or Upload Numbers window showing the text area and file upload option" style="border: 2px solid #4472C4; border-radius: 8px; max-width: 100%;"></br>

3\. Click **Save** to add the number to the database.

4\. Verify that the number appears in the database list.

### Step 5: Add Multiple Numbers Using Paste / Upload

1\. Open the required Prefix Set database and click **Paste / Upload** in the toolbar.

2\. The **Paste / Upload Numbers** window will appear. Enter the numbers in the text area or click **Load from file** to select a supported `.txt` or `.csv` file. 

3\. Enter the numbers using either of the following formats:

   - One number per line.
   - Multiple numbers separated by commas.

4\. Enter numbers in international format without the leading `+` or `00`, as specified by the interface. For example:

   ```text
   441234567890
   442345678090
   ```

5\. Review the number of new entries displayed by the interface.

6\. Click **Add number(s)** to add the numbers to the database. <br><img src="/apps/img/ps6.png" alt="Paste or Upload Numbers window showing the text area and file upload option" style="border: 2px solid #4472C4; border-radius: 8px; max-width: 100%;"></br>

!!! Note "The interface shown supports `.txt` and `.csv` files up to 20 MB. Check the displayed count before confirming the upload."

### Step 6: Delete Selected Numbers (*Only if required*)

1\. Open the Prefix Set database.

2\. Select the checkbox beside the number or numbers you want to delete.

3\. Click the **Delete** (trash) icon in the toolbar. A confirmation window will appear.

4\. Review the number of entries selected for deletion.

5\. Click **Delete** to confirm. <br><img src="/apps/img/ps7.png" alt="Paste or Upload Numbers window showing the text area and file upload option" style="border: 2px solid #4472C4; border-radius: 8px; max-width: 100%;"></br>

!!! Note "Only the selected numbers are removed. Verify your selection before confirming."

### Step 7: Empty the Database (*Only if required*)

1\. Open the required Prefix Set database.

2\. Click **Empty Database** in the toolbar.

3\. An **Empty Database** confirmation window will appear, displaying the total number of entries that will be removed. <br><img src="/apps/img/ps8.png" alt="Empty Database confirmation window warning that all numbers will be removed" width="600" style="border: 2px solid #4472C4; border-radius: 8px; max-width: 100%;"></br>

4\. Review the number of entries and confirm that you have selected the correct database.

5\. Click **Empty Database** to remove all numbers from the database.

!!! Warning "This operation removes all numbers from the selected database and can't be undone."

## Apply Prefix Sets

You can apply Prefix Sets in supported ConnexCS configuration areas.

1\. **Customer Routing**: Navigate to **Customer :material-menu-right: Routing :material-menu-right: Ingress Routing :material-menu-right: Basic :material-menu-right: Dial String Prefix Set**. See [Customer Routing](https://docs.connexcs.com/customer/routing/#basic).

2\. **Global Routing**: Navigate to **Routing :material-menu-right: Routing Global :material-menu-right: Basic :material-menu-right: Dial String Prefix Set**. See [Global Routing](https://docs.connexcs.com/global-routing/).

3\. **Customer Rate Cards**: Navigate to **Customer Rate Cards :material-menu-right: Profits :material-menu-right: Add :material-menu-right: Config :material-menu-right: Prefix Set**. See [Customer Rate Cards](https://docs.connexcs.com/customer-ratecard/#main-tab).

4\. **Ingress Routing Strategy**: Navigate to **Customer :material-menu-right: Routing :material-menu-right: Ingress Routing :material-menu-right: Strategy :material-menu-right: Prefix Set**.

The available options and behaviour depend on the configuration area in which you use the Prefix Set.

## Example Dial Strings for Prefix Sets

Prefix Sets support plain text, regular expressions, or a combination of both. Enter one entry per line.

### Plain-Text Prefixes

```text
441
442
```

This example matches dial strings beginning with `441` or `442`.

### Regular Expression (RegEx)

```regex
^44(1|2)
```

This expression matches dial strings beginning with `441` or `442`.

- `^` matches the beginning of the dial string.
- `44` matches the digits `44`.
- `(1|2)` matches either `1` or `2`.

### Combination: UK Landline and Canadian Area Codes

```text
441
442
^1(204|226|236|249|250|289|306|343|403|416|418|438|450|506|514|519|579|581|587|604|613|647|705|709|778|780|807|819|867|902|905)
```

This example combines UK prefixes with a regular expression matching the listed Canadian area codes.

Validate all entries against your intended numbering plan and calling rules before applying a Prefix Set to a live configuration.

## Best Practices

- **Use descriptive names** to identify the purpose of each Prefix Set.
- **Validate RegEx patterns** before applying them to live routing or call-screening rules.
- **Choose flags carefully** because global blacklists, allow lists, database management, and customer permissions serve different purposes.
- **Review customer access** and grant only the permissions required.
- **Use bulk upload** to manage large number lists efficiently.
- **Confirm destructive operations** before deleting entries or emptying a database.
- **Use the DNC feature when appropriate**. See [Do Not Call (DNC)](https://docs.connexcs.com/dnc/) for dedicated DNC list management.

## Troubleshooting

| Issue | Resolution |
|---|---|
| The Prefix Set can't be saved | Check that the required Name and Data fields are completed when applicable. |
| A number doesn't match the Prefix Set | Verify the prefix, number format, and RegEx syntax. |
| The Numbers link is unavailable | Check that the Prefix Set has the Database flag enabled. |
| A customer can't view the Prefix Set | Verify the selected Customer and the applicable read permissions. |
| A customer can't modify the Prefix Set | Verify the applicable write permissions and any additional portal restrictions. |
| Bulk upload doesn't add the expected numbers | Check the file format, separators, number format, and displayed new-entry count. |

## Summary

Prefix Sets help administrators manage reusable prefixes and number collections across supported ConnexCS configurations. Use inline data for prefix matching, database management for individual or bulk number lists, and the appropriate flags for global call screening and customer access.
