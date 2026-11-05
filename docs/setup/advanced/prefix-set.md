# Prefix Sets

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Setup & Configuration → Advanced Settings → Prefix Set<br>
<strong>Audience</strong>: Administrators, Engineers, Support Team<br>
<strong>Difficulty</strong>: Intermediate<br>
<strong>Time Required</strong>: 10–15 minutes<br>
<strong>Prerequisites</strong>: ConnexCS account with access to Setup → Advanced → Prefix Set<br>
<strong>Related Topics</strong>: <a href="https://docs.connexcs.com/customer/routing/">Routing</a>, <a href="https://docs.connexcs.com/global-routing/">Global Routing</a>, <a href="https://docs.connexcs.com/routing-strategy/">Routing Strategy</a>, <a href="https://docs.connexcs.com/customer-ratecard/">Customer Rate Cards</a>, <a href="https://docs.connexcs.com/guides/howto/restrict-calling-plan/">Dial-Plan Rules</a><br>
<strong>Next Steps</strong>: Apply the Prefix Set where it's needed: as a prefix list in routing or a rate card, as a global block or allow list through its flags, or as a number database selected in Routing → Security & Controls → DNC list or Routing → CLI → Database.<br>

</details>

## Overview

A **Prefix Set** is a reusable list of telephone number prefixes or numbers. You maintain the list in one place and select it wherever it's needed, instead of entering the same entries in several configurations.

A Prefix Set has three uses:

| Use | What it holds | Where it takes effect |
|---|---|---|
| [**1. Prefix list**](#use-1-prefix-list) | Prefixes or RegEx patterns in the **Data** field | Routing → Dial String Prefix Set, Routing → Strategy → Prefix Set, Customer Rate Card → Profits → Config → Prefix Set |
| [**2. Global lists**](#use-2-global-lists) | Prefixes or RegEx patterns, plus a global flag | System-wide, for all customers. Nothing needs to be selected elsewhere. |
| [**3. Number database**](#use-3-number-database) | Individual numbers stored in a database | Routing → Security & Controls → DNC list, Routing → CLI → Database |

One Prefix Set can have several flags at once. For example, you can turn on both **Database** and **Global CLI Blacklist**.

## Create a Prefix Set

These fields are shared by all three uses.

1. Navigate to **Setup :material-menu-right: Advanced :material-menu-right: Prefix Set** and click **:material-plus:** in the top toolbar. The **Prefix Set** configuration window will appear. <br><img src="/apps/img/ps1.png" alt="ConnexCS Prefix Set page showing the Add button and configuration window" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

2. Enter a descriptive **Name** that identifies the purpose of the set, for example `UK Landlines` or `Blocked CLIs`.

3. Enter the entries in the **Data** field, one prefix or RegEx pattern per line. Required unless the Database flag is on. See [Use 1](#use-1-prefix-list) for examples.

4. Select a **Customer** if the set belongs to a specific customer. This is needed for [customer access](#customer-access).

5. Select one or more **Flags**:

   | Flag | Purpose | See |
   |---|---|---|
   | **Global Dialled Number Blacklist** | Blocks matching destination numbers for all customers | [Use 2](#use-2-global-lists) |
   | **Global CLI Blacklist** | Blocks calls from matching CLIs for all customers | [Use 2](#use-2-global-lists) |
   | **Global CLI Allow** | Lets matching CLIs bypass CLI blocking | [Use 2](#use-2-global-lists) |
   | **Database** | Stores numbers in a database instead of the Data field | [Use 3](#use-3-number-database) |
   | **Customer Read** | Lets the selected customer view the set in their portal | [Customer access](#customer-access) |
   | **Customer Write** | Lets the selected customer edit the set in their portal | [Customer access](#customer-access) |

6. Click **Save**.

## Use 1: Prefix list

A prefix list is a Prefix Set whose **Data** field holds the prefixes or patterns. Select it in any of these places:

| Where | Path | What it does |
|---|---|---|
| **Customer routing** | **Customer :material-menu-right: Routing :material-menu-right: Ingress Routing :material-menu-right: Basic :material-menu-right: Dial String Prefix Set**. See [Customer Routing](https://docs.connexcs.com/customer/routing/#basic). | Only dialled numbers that match the set are allowed on this route. |
| **Global routing** | **Routing :material-menu-right: Routing Global :material-menu-right: Basic :material-menu-right: Dial String Prefix Set**. See [Global Routing](https://docs.connexcs.com/global-routing/). | Only dialled numbers that match the set are allowed on routes that use this template. |
| **Routing strategy** | **Customer :material-menu-right: Routing :material-menu-right: Ingress Routing :material-menu-right: Strategy :material-menu-right: Prefix Set**. See [Routing Strategy](https://docs.connexcs.com/routing-strategy/). | Applies the selected routing strategy to matching numbers. Select **Drop** as the strategy to block them. |
| **Customer rate card** | **Customer Rate Cards :material-menu-right: Profits :material-menu-right: Add :material-menu-right: Config :material-menu-right: Prefix Set**. See [Customer Rate Cards](https://docs.connexcs.com/customer-ratecard/#main-tab). | The profit rule applies only to the prefixes in the set. |

### Example entries

The Data field accepts plain text, regular expressions, or a mix of both. Enter one entry per line.

**Plain-text prefixes**

```text
441
442
```

Matches dial strings beginning with `441` or `442`.

**Regular expression**

```regex
^44(1|2)
```

Matches the same dial strings as above:

- `^` matches the beginning of the dial string.
- `44` matches the digits `44`.
- `(1|2)` matches either `1` or `2`.

**Combination: UK landlines and Canadian area codes**

```text
441
442
^1(204|226|236|249|250|289|306|343|403|416|418|438|450|506|514|519|579|581|587|604|613|647|705|709|778|780|807|819|867|902|905)
```

Combines UK prefixes with a regular expression matching the listed Canadian area codes.

!!! Tip "Test RegEx patterns against sample numbers and your numbering plan before applying a Prefix Set to live routing. A pattern that's too broad can allow or block more traffic than intended."

## Use 2: Global lists

The three global flags turn a Prefix Set into a system-wide list. They apply to **all customers**, and **nothing needs to be selected anywhere else**: saving the Prefix Set with the flag on is enough.

- **Global Dialled Number Blacklist**: Any call to a destination number that matches the set is rejected, whichever customer places it.
- **Global CLI Blacklist**: Any call whose CLI (caller ID) matches the set is rejected, whichever customer places it.
- **Global CLI Allow**: A call whose CLI matches the set bypasses CLI blocking, including DID block-source rules and Spam Scout scoring. It also overrides the Global CLI Blacklist.

!!! Warning "Global flags affect every customer on the system immediately. Check the entries carefully before saving, and use Global CLI Allow sparingly because it disables call screening for matching CLIs."

## Use 3: Number database

Turn on the **Database** flag when you need a list of individual numbers rather than prefixes, typically a large list that you upload. When the flag is on, the **Data** field is removed from the form and a note says that numbers are managed in the Database. <br><img src="/apps/img/ps3.png" alt="Prefix Set form with the Database flag selected" width="600" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

Select the database in either of these places:

| Where | Path | What it does |
|---|---|---|
| **DNC list** | **Routing :material-menu-right: Security & Controls :material-menu-right: DNC list** | The customer can't dial the numbers in the database. |
| **CLI database** | **Routing :material-menu-right: CLI :material-menu-right: Database** | The numbers are used as the CLI or PAID pool, selected randomly, by performance, or persistently. |

### Open the database

1. Navigate to **Setup :material-menu-right: Advanced :material-menu-right: Prefix Set** and locate the Prefix Set.

2. In the **Database** column, click **Numbers**. The database page opens and shows the number of entries stored. <br><img src="/apps/img/ps4.png" alt="Prefix Set list showing the Numbers link" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

The toolbar lets you add numbers, paste or upload numbers, refresh the list, delete selected entries, or empty the database.

### Add a single number

1. In the database, click **:material-plus:** in the toolbar. The **Add Number** window appears.

2. Enter the number in the **Phone Number** field, in international format without the leading `+` or `00` (for example `441234567890`). <br><img src="/apps/img/ps5.png" alt="Add Number window" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

3. Click **Save** and check that the number appears in the list.

### Paste or upload numbers

For large lists, bulk upload is quicker than adding numbers one at a time.

1. In the database, click **Paste / Upload** in the toolbar. The **Paste / Upload Numbers** window appears.

2. Paste the numbers into the text area, or click **Load from file** to select a `.txt` or `.csv` file (up to 20 MB). Put one number per line, or separate numbers with commas. Use international format without the leading `+` or `00`:

   ```text
   441234567890
   442345678090
   ```

3. Check the count of new entries shown in the window.

4. Click **Add number(s)**. <br><img src="/apps/img/ps6.png" alt="Paste or Upload Numbers window showing the text area and file upload option" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

### Delete selected numbers

1. In the database, select the checkbox beside each number to delete.

2. Click the **Delete** (trash) icon in the toolbar. A confirmation window shows how many entries are selected.

3. Check the count, then click **Delete**. Only the selected numbers are removed. <br><img src="/apps/img/ps7.png" alt="Delete confirmation window" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

### Empty the database

1. In the database, click **Empty Database** in the toolbar. A confirmation window shows the total number of entries that will be removed. <br><img src="/apps/img/ps8.png" alt="Empty Database confirmation window warning that all numbers will be removed" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

2. Check that you're in the correct database, then click **Empty Database**.

!!! Warning "Emptying the database removes every number in it and can't be undone. If the database is in use as a DNC list, the customer can dial those numbers again straight away."

## Customer access

To share a Prefix Set with a customer, select the customer in the **Customer** field, then turn on one or both access flags:

- **Customer Read**: The customer can see the Prefix Set and its entries in their customer portal, but can't change them.
- **Customer Write**: The customer can add, edit, and remove entries in the Prefix Set from their customer portal.

Grant only the access the customer needs. Customer Read and Customer Write control portal access only; they don't block or allow any calls.

## Troubleshooting

| Issue | Resolution |
|---|---|
| The Prefix Set can't be saved | Check that **Name** is filled in, and that **Data** is filled in unless the Database flag is on. |
| A number doesn't match the Prefix Set | Check the prefix, number format, and RegEx syntax. |
| The Data field is missing | The Database flag is on. Manage numbers through the **Numbers** link instead. |
| The Numbers link is unavailable | Turn on the **Database** flag. |
| A global block or allow list has no effect | Check that the correct global flag is selected and that the entries match the number format in the call. |
| A customer can't view the Prefix Set | Check the selected **Customer** and the **Customer Read** flag. |
| A customer can't modify the Prefix Set | Check the **Customer Write** flag. |
| Bulk upload doesn't add the expected numbers | Check the file type, separators, number format, and the new-entry count shown before confirming. |