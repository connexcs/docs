# Direct Inward Dial (DID)

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Customer Account Management / Direct Inward Dial (DID)<br>
<strong>Audience</strong>: Administrators, Engineers, Account Managers<br>
<strong>Difficulty</strong>: Intermediate to Advanced<br>
<strong>Time Required</strong>: Approximately 45–90 minutes<br>
<strong>Prerequisites</strong>: Active ConnexCS account; knowledge of DID / inbound routing, customer- and carrier-rate-card setup<br>
<strong>Related Topics</strong>: <a href="https://docs.connexcs.com/customer/routing/">Customer – Routing</a>, <a href="https://docs.connexcs.com/customer/did/#range-holders">Global DID Management</a><br>
<strong>Next Steps</strong>: <a href="https://docs.connexcs.com/customer/did/#bulk-upload">Bulk DID Upload</a>, <a href="https://docs.connexcs.com/customer/did/#advanced">Advanced DID Features: ScriptForge, STIR/SHAKEN settings</a><br>

</details>

**Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: DID**

## Overview

A **Direct Inward Dial (DID)** number is one that exists on the public telephone network. It enables customers to receive calls from the public telephone network.

!!! question "How it works?"
    When you dial the number, the carrier delivers the call to ConnexCS. ConnexCS then passes it to the customer based on the configured settings.
    It allows inbound calls to bypass a PBX (Private Branch Exchange) or another routing to connect directly to the destination number.

    ```mermaid
    graph TD
    A[Dialed Number] --> B[Carrier Delivers Call to ConnexCS]
    B --> C[ConnexCS Processes Call]
    C --> D{Check Routing Rules}
    
    D -- Direct Routing --> E[Forward Call to Customer]
    D -- PBX Bypass --> F[Connect Directly to Destination Number]
    
    E --> G[Call Successfully Connected]
    F --> G[Call Successfully Connected]
    ```

!!! note "Global DID"
    You can also configure and manage a DID for specific Customers or Carriers in **Global :material-menu-right: DID**, which displays all configured DID.

## Key Features

+ **Inbound Call Routing**: Calls from the public network are directed to customer systems.
+ **Custom Destination Management**: Calls can be forwarded to SIP URIs, external numbers, or internal extensions.
+ **Retain Display Name Option**: Configurable settings to preserve caller name information. By default, the display name is stripped to prevent unnecessary data exposure.
+ **Capacity Limits**: Manage call flow with channel restrictions.
+ **Media and Call Recording Settings**: Control media proxy modes and enable call recording.
+ **Billing Packages**: Assign recurring cost structures to DIDs.
+ **ScriptForge Integration**: Custom script-based call handling.

## Configure Direct Inward Call

To configure individual DIDs, click :material-plus:

### Basic

+ **Customer**: Assign the number to the customer.
+ **Customer Card**: Select the required billing (see [**Customer Rate Cards**](https://docs.connexcs.com/customer-ratecard/) for configuration).
+ **Provider**: Select the Carrier required for routing.
+ **Provider Card**: Select from Carrier Cards assigned to that Carrier (see [**Provider Rate Cards**](https://docs.connexcs.com/provider-ratecard/) for configuration).
+ **DID**: Enter the specific number.
+ **Retain Display Name**: If Enabled, it displays the Name in the FROM field of the SIP INVITE.
+ **Enabled**: Enable or Disable the DID.

!!! info
    Make sure when you select the **Customer Rate Card** or **Provider Rate Card** for creating the DID, the [Advanced settings in Provider Rate Card](https://docs.connexcs.com/provider-ratecard/#advanced) or  [Advanced settings in Customer Rate Card](https://docs.connexcs.com/customer-ratecard/#advanced) the **Direction** field should be **Origination**.

### Destination

Select the destination to deliver incoming calls for the DID:

+ **URI**: Set the Destination DID (number or extension) and IP to forward calls to a specific SIP URI (Session Initiation Protocol, Uniform Resource Identifier).
+ **External**: To send the call back out to the internet(public network) through a different carrier.
Use a prefix (defined in Customer :material-menu-right: Routing ) to select the outbound route, then the number to send the call to.
+ **Internal**: Send internally to an extension, a Class5 feature, or even to another customer.
+ **Circuit Test**: Enables users to verify the integrity and performance of call routing. By pointing a Direct Inward Dialing (DID) number back to the Circuit Test system, users can evaluate critical metrics such as MOS, DTMF, and Caller ID consistency. This process ensures that the purchased routes meet expected standards.
+ **ConneXML**: The incoming call is routed to a ConneXML script, which defines the subsequent call behavior.

!!! question "How it works?"
    ```mermaid
    graph TD
        A[Call Initiated through Carrier] --> B[Call Enters through Assigned DID]
        B --> C[System Identifies Call as Part of Circuit Test]
        C --> D[Call Redirected back to Circuit Test System]
        D --> E[System Evaluates and Logs Key Quality Parameters]
    ```

### Capacity Limits

Set the maximum number of INBOUND concurrent calls in **Channels**, and Calls Per Second (CPS) in **Flow Speed**.

It Defines channel restrictions for inbound calls.
This feature also controls the rate at which calls enter the system.

### Media

For more details on these fields, see [**Media in Customer Routing**](https://docs.connexcs.com/customer/routing/#media).

+ **RTP Proxy Mode**: If relaxed is chosen and a connection through our service fails, we will attempt to send the call out to your carrier direct. This will expose your customer IP address to your carrier and vice versa.

    :material-menu-right: `Strict`- This will enforce the proxy engagement.

    :material-menu-right: `Relaxed`- This will make every effort to connect to the RTP proxy; if it can't, the calls will connect directly.

+ **RTP Media Proxy**: The **recommended** RTP Media Proxy server is the **Closest (Elastic) Server**. The following options allow you to set the RTP media server for this route for this customer:

    :material-menu-right: `Direct RTP (no proxy)`- Bypass ConnexCS, so media flows directly between the customer and carrier.

    :material-menu-right: `Zone (recommended)`- Select any of the regional servers.

+ **Call Recording**: Its an optional feature for compliance and quality monitoring.
Select the % of calls to record for this customer:
    + Disabled- never record calls
    + 1% Sampling
    + 5% Sampling
    + 25% Sampling
    + 50% Sampling
    + Enabled (Always On)

+ **Timeout**: Set various options to help with call timeout for missed BYEs.

+ **Max Duration**: Set the maximum amount of time (in seconds) to allow the call to exist before it's terminated, typically in case of a missed BYE.

+ **Transcoding**: Enter the number of channels allowed for transcoding. This is a limited option. The best use case is for customers in low-bandwidth areas that want to use G.729. If you don't have enough transcoding capacity, calls might start failing.

+ **Flags**: Enable this option if you want to remove STIR/SHAKEN information from an inbound call before forwarding it to the destination.

+ **RTP Codec**: This fields allows you to have more specific control over the Codecs you choose for your system. After the selection you can assign various **Permissions** to the Codecs you select.

    + **Types of Permissions include**:
        + **Except**: This permission allows you to block all the codecs apart from the ones in the Whitelist. Codecs that weren't included in the carrier's initial codec list won't be taken into consideration.
        +  **Offer**: Offer also blocks the codecs apart from the ones in the whitelist and provides flexibility to change the order of the codecs in the list as well. Thus, the first codec in the list is treated as the primary codec (at the output) even if it was the last codec in the list.
        +  **Consume**: Identical to mask but enables the transcoding engine even if no other transcoding related options are given.
        +  **Transcode**: Allows the addition of codecs in the offered codec list even if the codecs weren't included in the original list of codecs. Here, transcoding engine will be engaged meaning  behind-the-scenes translation process is happening to ensure communication.<br> You can only add those codecs which are supported by your device for both encoding and decoding process. <br>One limitation of using this option is that it will strip-off all the unsupported codecs. Note that using this option doesn't necessarily always engage the transcoding engine. If all codecs given in the transcode list were present in the original list of offered codecs, then no transcoding will be done.<br> When you use this permission it enables you to mark/modify the Ptime.
        +  **Strip**: This permission allows you to remove the selected codecs or RTP Payload types from the SDP. Codecs removed using this option behaves as if they never existed in the SDP.
  
        |Strip|Transcode|Explanation|
        |-----|---------|-----------|
        |G729A|Opus|G729A is unavailable for transcoding|

        +  **Mask**: This option allows you to filter-out the selected codec from the output. Mask works well in combination with **Transcode** option. For example,

        |Input/Offering side|Mask|Transcode|Output/Outgoing Offer|Explanation|
        |-------------------|-----|---------|--------------------|-----------|
        |G729A|G729A|Opus|Opus|Transcoding happens between G729A and Opus but output is Opus, G729A is filtered out from outgoing offer|
        |G729A||Opus|G729A and Opus| Transcoding happens between G729A and Opus but outputs are both Opus and G729A since G729A wasn't filtered out|

         + **Accept**: This option is similar to **Strip** and **Mask** but it isn't removed from the codecs offered list. When you select this option, the selected codec is offered to the remote peer (output/outgoing offer), if the remote peer rejects the offered (incoming) codec it will be used for transcoding and is accepted by the input/offering side.
        In short, Accept permission allows your device to use codecs offered by the remote peer even if they weren't your initial choice.

        |Input/Offering side|Accept|Transcode|Output/Outgoing Offer|Explanation|
        |-------------------|------|---------|---------------------|-----------|
        |G729A|G729A|Opus|Reject|Transcoding still happens between G729A and Opus|

    + **Ptime(ms)**: This value determines the length of time each box (RTP packet) can hold. A higher ptime means each packet carries a longer chunk of audio/video data (bigger box), while a lower ptime means shorter chunks (smaller boxes).

### Billing

Select a predefined [**Package**](https://docs.connexcs.com/customer/package/) to determine costs and billing. This will deduct Frequency Match and Setup Cost from the account's package.

For each Package there is an associated **Minimum Days** the package is valid for. If some packages you don't have pre-defined days, you can mention the days you wish to use a particular package.

### Advanced

+ **Stir Shaken Min Attest**: It enables the selection of STIR/SHAKEN attestation levels for validating incoming calls. Users can configure the system to permit only calls that meet specific attestation standards. The available validation levels are as follows:
    + **A**: Permits only calls with attestation level A, the highest level of trust. Calls with attestation levels B or C will be blocked.
    + **A + B**: Restricts incoming calls to only those with attestation levels A or B. Calls with attestation level C will be blocked.
    + **A + B + C**: Allows calls with any attestation level (A, B, or C) to pass through.
!!! Note
    In all cases, calls without attestation will also be blocked.

+ **Tags**: Tags allow users to categorize DIDs for reference (e.g., High Capacity, Failure). Add these for informational purposes.

+ **P-Asserted-ID**: Either `Remove` the P-Asserted-ID so it doesn't reach the customer, or leave it `Default` to preserve it.

+ **Block Source Type**: You can select and block the calls to various destinations (carriers) like Mobile, Fixed, Paging, etc. [Click here to know about Destination Type Lookup & Fallback Logic — USA and International](/customer/routing/#destination-type-lookup-fallback-logic-usa-and-international).

+ **Spam Scout Scoring**: It blocks Spam calls based on the CLIs. You can either Block All, Allow All, Block Most Spam, or Block Least Spam.

+ **IP Quality Score (IPQS)**: IP Quality Score (IPQS) blocks calls based on CLIs. It prevents CLIs with a specific spam score that you've selected from passing through the system. For more information on IPQS, [click here](https://www.ipqualityscore.com/).

    !!! Warning
        The **IPQS** feature requires a paid subscription. To enable this feature navigate to **Setup :material-menu-right: Settings :material-menu-right: Account** and enable this feature.
        Check [Pricing](https://connexcs.com/pricing) here.

    You can set a **Max Daily Quantity** for your customer's lookups. This restricts them to using only the specific number you allocate, ensuring controlled usage.

+ **Flags**: Configuration options used to enable or disable specific call processing behaviors or rules.
    + `Strip Stir Shaken`: Removes STIR/SHAKEN headers received from downstream before forwarding the call upstream.
    + `Random`: When this option is enabled, calls will be distributed randomly across the configured DID destinations.  

### Script Forge

Run a custom script on calls to the DID to perform actions such as routing based on the time of day or if specific users or numbers are active.

Use ScriptForge for **Dynamic Call Management**.

+ **Script Forge**: Select the script you wish to run for the **DID**.
+ **Timeout**: Select the time for how long your script should.
+ **Timeout Action**: You can specify the timeout action if some issue occurs while the script runs. You can specify the action as: **[sip response code] [sip message]**, example: 200 OK.
+ **Vars** [**TOML**](https://en.wikipedia.org/wiki/TOML): This is a data storage mechanism for configuration, similar to INI files. It allows you to create advanced customization to set values, etc, for Script Forge to reference later.

## Bulk Upload

### Overview

**New Bulk Upload** is a tool for **loading large volumes of records** (DIDs, Prefix Set numbers and Rate Card entries) from a file, a public URL or pasted text.

It reads your data in the browser, **automatically matches your columns to destination fields**, lets you link and correct values before anything is written, **validates every row**, and then uploads in batches, confirming each one with the destination.

Uploads keep running in the background. You can close the window, keep working, run several uploads at once, move an upload between browser tabs, and reopen an upload after its tab closes.

Column matching is **AI-assisted**. The uploader guesses which destination field each column belongs to and shows how confident it is in each guess, so you only need to check the ones it isn't sure about. In a production environment most files are already close to the destination's format, so the uploader's job is usually to get the mapping right and let you make the few small corrections a file needs.

### What problem it solves: Simplifying large data imports

Importing thousands of records by hand, or with an uploader that fails silently, usually goes wrong in a few predictable ways:

* Columns in the file don't line up with the fields the system expects
* Values such as customer or provider names don't match existing records
* A few bad rows block, or quietly corrupt, an entire import
* A browser tab closes halfway through and nobody knows which rows made it

**New Bulk Upload handles each of these explicitly.** It matches columns for you and flags weak matches, links values to existing records, reports invalid rows before sending, counts only rows the destination has confirmed, and lets you retry without sending the same row twice.

!!! Note "Why mapping matters"
    Data can only be uploaded into fields that exist in the destination. For example, the DID table has a **DID** field but no field called *phone*. If your file has a column named `phone`, it has to be mapped to **DID** before it can be uploaded. Mapping makes sure every column in your file lands in exactly the field it belongs to, even when the column names in your file don't match the destination's names.

| Stage | What happens | Purpose |
|-------|--------------|---------|
| **Choose data** | Read a file, URL or pasted text in the background | Load data without freezing the workspace |
| **Map** | Match file columns to destination fields | Make sure each value lands in the right field |
| **Prepare** | Link values to records, replace values, edit cells | Fix the data before upload instead of after |
| **Validate** | Check every row against the destination's rules | Catch problems before anything is written |
| **Upload** | Send rows in batches and track confirmations | Know exactly what was written |
| **Review** | See results, download failures, retry | Recover from failures safely |

### Benefits

* **Automatic column matching** by name, aliases and sample values, with weak matches flagged for review.
* **Nothing dropped silently**: every column that isn't uploaded says why.
* **Links values to existing records** (such as *Customer* or *Provider card*) without creating anything new.
* **Spreadsheet-style editing** in the preview, with every change undoable. Your original file is never modified.
* **Validation before upload**, with issues grouped by reason and highlighted in the preview.
* **Accurate progress** that counts only rows the destination has acknowledged.
* **Safe retries**: rows already written are never sent again.
* **Runs in the background** and across browser tabs, with a clear upload history.
* **Resumable** after a tab, page or browser closes.
* **Fully keyboard accessible** and screen-reader friendly.

### Where to find it

| Page | Menu items |
|------|-----------|
| **Global :material-menu-right: DID**, and the DID tab of a customer or carrier | **New Bulk Upload** opens the new uploader. **Bulk Upload (Data Suite)** opens the previous uploader. |
| **Setup :material-menu-right: Advanced :material-menu-right: Prefix Set**, then **Numbers** on a set with the Database flag | **Paste / Upload** is a menu: **New Bulk Upload** opens the new uploader and **Paste / Upload (Classic)** opens the previous dialog. **Bulk Delete** opens the uploader to delete the numbers in a file (see [Deleting records](#deleting-records)). |
| **Management :material-menu-right: Rate Card**, then open a card | **New Bulk Upload** opens the new uploader. **Bulk Upload (Classic)** opens the previous uploader. Both are unavailable while editing a revision. |

!!! Tip
    When you open the uploader from a customer's or carrier's DID tab, that customer or carrier is set as the default, so your file doesn't need a column for it.

Each New Bulk Upload opens in its own full-screen window, titled **Bulk Upload DIDs** or **Bulk Upload Rate Card**. You can run several at once.

### Upload names

Every upload is given a **three-word name** when it starts, for example *amber-falcon-river*. The name appears at the top of the window, ahead of the file name, in the upload history and in every message about that upload. Use it to tell uploads apart, especially when files have similar names.

### How to use Bulk Upload

#### Step 1: Choose your data

1. Open **New Bulk Upload** from one of the pages above. For example, to upload DIDs for a customer, go to **Management :material-menu-right: Customer**, open the customer, select the **DID** tab, click **Bulk Upload** and choose **New Bulk Upload**.<br><img src= "/customer/img/nbu1.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
2. The **Bulk Upload DIDs** window opens with the upload's name at the top (here, *ivory-eagle-yak*). Pick a source:<br><img src= "/customer/img/nbu2.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

      | Source | Use it for |
      |--------|-----------|
      | **File** | A file on your computer. Drag it onto **Choose or drop a CSV, TSV, or SpreadsheetML XML file**, or click the area to pick a file. |
      | **URL** | A file at a public `http://` or `https://` address that needs no sign-in. Enter it under **Load a public data URL** and click **Load URL**. |
      | **Text** | Data pasted into **Paste CSV or TSV text** (up to 5 MB). Click **Use pasted text**. Blank lines are skipped. |

3. Wait while the file is read. The progress line shows each step: **Checking file format**, **Starting the background reader**, **Finding header and delimiter**, **Profiling columns in the background** and **Preparing the preview**. Click **Cancel** to stop at any time.

**Supported formats:** CSV, TSV (tab-separated) and Excel 2003 XML Spreadsheet (`.xml`, also called SpreadsheetML).

!!! Note "Modern Excel workbooks (`.xlsx`) are not supported. Save the workbook as CSV first."

The uploader detects the delimiter and which of the first ten rows holds the column headings. If there is no heading row, columns are named **Column 1**, **Column 2** and so on.

!!! Tip "Testing with sample files"
    To try the uploader without your own data, use the sample files on the [Papa Parse demo page](https://www.papaparse.com/demo). It offers a **normal** file, a **large** file (about a million records) and **malformed** files for testing error handling. To test a **URL** upload, copy the sample file's link from the demo page, then replace `demo` in `https://www.papaparse.com/demo` with that link to get the full file address, and paste it under **Load a public data URL**.

#### Step 2: Map columns to fields

After reading, the uploader shows a **preview** of your data with a **preparation panel** beside it. The toolbar shows the destination (for example **DID**), the upload's name, the file name and how many rows will be uploaded.

The **Mappings** tab lists each destination field and the column that feeds it. In the example below, the file *bd.csv* has the columns `phone`, `status` and `customer`. The uploader mapped `phone` to **DID**, `status` to **Destination** and `customer` to **Customer**. Fields with no matching column show **No column mapped**.<br><img src= "/customer/img/nbu3.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

| Feature | Description |
|---------|-------------|
| **Automatic matching** | Columns are matched by name, aliases and values, and applied immediately. Point at a field's arrow for an explanation, such as *"Matched Number to DID automatically with a strong match."* |
| **Match confidence** | A percentage shown only for matches **below 60%**. These are applied but should be checked before uploading. |
| **Required fields** | Marked with an asterisk (\*). Rows missing a required value are reported during validation. |
| **Change a match** | Choose a different column for the field. The list marks the **Suggested** column. Clear a field to stop uploading its column. Each field can be fed by only one column. |
| **Columns not uploaded** | Never dropped silently. The preview heading reads **Not uploaded: no field matched** or **Not uploaded: you excluded it**. Pick a field to include it. |
| **Search and filter** | Search by name, or filter to **All fields**, **Mapped**, **Unmapped** or **Worth checking** (weak matches and unmatched columns). |
| **Linked fields** | Fields that link to existing records (such as *Customer*, *Call Recording* or *Package*) show a broken-link icon and how many values still need linking, **Review associations**, or **Map a column first**. Click to open in Associations. Once every value is linked, the icon changes to a connected link. |

#### Understanding match confidence

Every time the uploader guesses a mapping, it records how confident it is that the guess is right. Point at the percentage to see what it means. <br><img src= "/customer/img/nbu4.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

* If your file's column were named `DID`, the names would match exactly and confidence would be close to **100%**, so no percentage is shown.
* In the example, the column is named `phone`. The uploader judged that `phone` most likely holds DIDs and mapped it, but with only **14%** confidence, because only part of the name and values matched.
* Matches below **60%** appear under the **Worth checking** filter. This is the uploader asking: *"Did I map this correctly?"* Confirm the mapping or choose a different column.

> **Note**: The uploader is good at obvious matches such as `phone` to **DID**. When a column doesn't clearly correspond to any field (for example, a generic `status` column), check its mapping yourself, because even a person might not know which destination field it belongs to.

#### Mapping from the preview

You can also map a column directly from the preview. Right-click any cell in the column and open **Map column**. The menu lists every destination field, marks the field the column feeds as **Current**, offers **Use DID suggestion** (the suggested field) and **Do not upload**.<br><img src= "/customer/img/nbu4.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

When a field is already fed by another column, the menu shows that column's name beside the field. In the example below, **DID** is already fed by `phone`; choosing **DID** for the `status` column would move the mapping to `status`.<br><img src= "/customer/img/nbu5.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

!!! Tip "Anything you can do in the preparation panel, you can also do directly in the preview table, and the other way round. The panel is a visual helper for people who prefer working with fields and values; the table suits people who prefer working like a spreadsheet."

!!! Tip "Every change can be undone. The undo button beside **Validate & upload** reverses the latest change. The arrow beside it opens the change history: a list of every change made to the data in this upload, newest first. If you've made a mistake, choose an earlier point in the list to go back to it and undo several changes at once. The back arrow beside the destination name returns to file selection."

The preparation panel can be collapsed for more preview space and reopened with the **Mappings** handle at the left edge.

#### Step 3: Prepare the data (optional)

The preparation panel has the following tabs. Use the arrow keys, `Home` and `End` to move between them.

| Tab | Description |
|-----|-------------|
| **Mappings** | Column-to-field matching (Step 2). |
| **Associations** | Links values in your file to records that **already exist**, such as *Customer* or *Provider card*. Nothing new is created. Appears when a mapped field links to records. |
| **Populate** | **Sets or replaces** a column's values with one value you type, for every row or for selected value groups. The value is written as typed and not matched to a record. |
| **Setup** | **First data row**, **Existing records**, **Invalid rows**, **Action** and **Export**. |
| **Issues** | Appears after validation finds problems. |

##### Associations

Some fields don't accept just any value. A **Customer** field, for example, only accepts customers that actually exist in your account. Your file may name customers (for example *A* or *B*), but the destination stores each customer by its internal ID, not its name. Associations link each distinct value in your file to a specific existing record, so the correct ID is uploaded. This also acts as validation: you can't upload a customer that doesn't exist.

!!! Note
    A field appears in **Associations** only after a column is mapped to it, because a column that isn't mapped can't be associated.

1. Open a field (for example *Customer*). The tab lists its **value groups**: each distinct value, its row count and its status, most frequent first.
2. Link values to existing records in one of two ways:
      * Choose a record from a group's own **Choose value** list. It applies at once.
      * Tick several groups, choose a record in the **Choose value** box at the top, and click **Apply** or press `Enter`.
3. Use the scope picker (**Sel** or **Unres**) to apply to the **Selected** groups or to every **Unresolved** group.

In the example below, the **Customer** field has two value groups, **A** and **B**, each appearing in one row and marked **unresolved**. The field shows **2 to associate**.<br><img src= "/customer/img/nbu6.png" width ="200" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

After both groups are linked to the existing customer *demo*, they show **associated**, the field shows **Associated**, and the preview's **CUSTOMER** column shows *demo* with a connected-link icon.<br><img src= "/customer/img/nbu7.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br> <br><img src= "/customer/img/nbu8.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

!!! Tip "You can also associate a single cell from the preview: double-click a cell in a linked column to open its **Choose association** list of existing records."

> **Note**: When you open Associations from a preview cell (right-click :material-menu-right: **Column** :material-menu-right: **Review value associations**), that cell's value is pinned to the top and marked **This cell**. It is not selected; only a ticked checkbox selects a group.

##### Populate

1. Choose a column from **Add a column to populate**, or right-click a column in the preview and choose **Populate column…**.
2. Type a replacement in a group's **Replacement value** box and press `Enter` or click **Apply**. `Escape` discards what you typed.
3. Or tick several groups, type a value in the top box, and click **Apply**. With the scope set to **Unres**, one value covers every group without its own value.

The **Add a column to populate** list shows the columns in your file that can be populated (here, `phone` and `status`).

In the example below, the `phone` column (mapped to **DID**) was populated: *10800* is replaced with *10900* and *10801* with *10901*. Each group shows **will be replaced**, the column shows **Configured**, and the preview shows the new values.<br><img src= "/customer/img/nbu9.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br><br><img src= "/customer/img/nbu10.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

!!! Tip "For one-off changes, you can also edit a value inline: double-click any cell in the preview and type, just as you would in a spreadsheet."

> **Note**: Columns that link to records are set in **Associations**, not Populate.

##### Associations vs Populate

Both tabs work on **value groups** (the distinct values in a column), but they set different kinds of values.

| | Associations | Populate |
|---|---|---|
| **What you set** | A record that already exists, chosen from a list (for example, an existing customer) | Any value you type (for example, `1260`) |
| **What is uploaded** | The record's internal ID | The value exactly as typed |
| **Validation** | Only records the field accepts can be chosen | No matching against records |
| **Used for** | Fields that link to records, such as *Customer* or *Call Recording* | Plain fields, such as *DID* or *Destination* |

##### Common behaviour in Associations and Populate

* Applying to **Selected** groups clears the ticks, ready for the next groups. Groups with a value keep it.
* When the top box is empty and the chosen groups already have a value, the button reads **Reset**. It restores automatic values (Associations) or the file's original values (Populate). Use **Reset** or press `Ctrl+Enter` (`Cmd+Enter` on Mac). Plain `Enter` never resets.
* The **×** beside a field:
      * In **Associations**, **Unmap** unmaps the column and clears every linked record.
      * In **Populate**, **Remove** clears every replacement value; the mapping does not change.

##### Statuses

| Status | Where | Meaning |
|--------|-------|---------|
| **Associate** / **N to associate** | Associations field | The column is mapped, but its values still need linking. |
| **N left** | Associations field | This many value groups still need a record. |
| **Associated** | Associations | Linked to an existing record. |
| **Unresolved** | Associations | Not linked yet. Choose a record before uploading. |
| **Default** | Associations | Uses the value applied to all unresolved groups. |
| **Ready** | Populate column | Added, but no value set yet; file values upload unchanged. |
| **Configured** | Populate column | A replacement value is set for some or all groups. |
| **Replacement value** | Populate | The value you type, written in place of the file's value. |
| **Will be replaced** | Populate group | These rows upload with the replacement value. |
| **Source unchanged** | Populate group | These rows keep the file's value. |

##### Setup options

The uploader usually sets these correctly, so most uploads never need the **Setup** tab. Use it when you want to change what was detected.<br><img src= "/customer/img/nbu11.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

| Option | Description |
|--------|-------------|
| **First data row** | The row your records start on. Detected automatically (*"Detected automatically: row N"*). Change it and click **Apply** if your file has titles, notes or blank lines above the data. Skipped rows stay visible, struck through. |
| **Existing records** | For DIDs and Rate Cards: **Replace it** (default) updates matching records; **Keep the existing record** skips those rows. |
| **Invalid rows** | **Fix them first** holds the upload until every invalid cell is fixed. **Skip them** uploads valid rows only. Prefix Set databases default to **Skip them**; everything else defaults to **Fix them first**. |
| **Action** | Where supported, switches between **Add the rows** and **Delete the matching records**. |
| **Export** | Downloads the data as it will be uploaded, as **CSV** or **JSON**. |

!!! Example "When to change the First data row"
    * **Notes above the data.** A customer asks *their* customer for a do-not-call list. The file comes back with notes at the top, such as the company name, who created the file, or *"some of these numbers are from another company, do not upload them"*. If the real data starts on row 5, set **First data row** to 5 so the notes aren't uploaded.
    * **Continuing a failed upload.** A colleague's upload failed partway through and they aren't sure how to continue. Someone more experienced can open the file, set **First data row** to where the upload stopped (for example, the last five rows that failed), and upload only those rows.

##### Deleting records

Some destinations, such as a Prefix Set database, can delete the records named in a file. **Bulk Delete** opens the uploader ready to delete, or switch with **Setup :material-menu-right: Action** before sending starts.

When deleting:

* Only the identifying column is used (for a Prefix Set, **Phone Number**).
* A **Deleting records** marker appears beside the title, and the action button reads **Validate & delete**.
* You are asked to confirm how many records will be deleted before anything is sent.
* **Retry delete** resends unconfirmed rows without asking, because deleting a record that's already gone changes nothing.

!!! Danger "Deleting records cannot be undone."

##### Working in the preview

The preview works like a spreadsheet.

| Action | How |
|--------|-----|
| **Select a cell** | Click it or use the arrow keys. |
| **Edit a cell** | Double-click, or select and press `Enter` or `F2`. Press `Enter` to save; `Escape` cancels. |
| **Linked cells** | Open a searchable **Choose association** list: pick a record, **Use automatic or default association**, or **Set this cell empty**. |
| **Multi-part fields** | Fields such as a Rate Card's **MCD / Pulse** (for example `60/6`) open with one box per part and a list of common values. |
| **Add a fixed column** | Choose the **Field** and the **Value** every row gets, then click **Add column**. |
| **Hidden columns** | Bring them back with **Show N hidden** in the toolbar. |

**Right-click menu:**

| Menu | Options |
|------|---------|
| **Map column** | Search and pick a field, use the suggested field, or **Do not upload**. |
| **Cell** | **Copy cell**. |
| **Row** | **Copy row**, **Start uploading from here**, **Hide N skipped rows**, **Add row before**, **Add row after**, **Delete row**. |
| **Column** | **Review value associations**, **Populate column…**, **Add a fixed column before…**, **Add a fixed column after…**, **Move column left**, **Move column right**, **Remove added column**, **Hide from preview**. |
| **Export** | **Transformed CSV** or **Transformed JSON**. |

> **Note**: Edits are stored as small changes on top of your file. The original file is never modified.

#### Step 4: Validate

1. Click **Validate & upload**. Every row is checked against the destination's rules (required fields, numbers, digits-only fields, known records) in the background.
2. Watch progress in the validation panel (**Validating rows**). Open it with **Show validation log**, or click **Stop**.
3. Act on the result:

      | Result | What to do |
      |--------|-----------|
      | **Validation passed** | The upload starts automatically. Warnings alone do not stop it. |
      | **Issues found** | Click **Review N issues**. The **Issues** tab groups problems by reason with affected cell counts and sample rows. Use **Show column** or **Resolve values**, then click **Validate again**. |
      | **Partial validation results** | Shown if you stopped validation; covers the rows checked so far. |

> **Note**: Browser checks give quick feedback, but the destination makes the final decision. A row can still be rejected during upload, for example a DID that already exists elsewhere.

!!! Example "Rate Cards"
    Once validation passes, you are asked **Do you wish to set this as the Active Revision?** The upload goes into a new revision either way, and retries or reopened uploads keep using that revision. If you choose **Yes**, the card switches to it only after every row is uploaded, so a partial upload never leaves the card on an incomplete revision.

#### Step 5: Upload

The upload screen shows:

| Field | Description |
|-------|-------------|
| **Overall progress** | Counts only rows the destination has confirmed, for example *2,000 acknowledged of 10,000 rows*. |
| **Time remaining** | An estimate, for example *About 2 min remaining*. |
| **Batch activity** | For larger uploads, each batch with its status: **Preparing**, **Sending**, **Processing by destination**, **Acknowledged**, **Rejected** or **Unconfirmed**. |

You don't need to watch it. Close the window at any time and the upload keeps running. If a batch takes more than a few seconds to confirm, **Continue in background** also appears. Progress moves to the **Bulk uploads** tab in the workspace toolbar at the bottom of the screen.

* Uploads to the **same destination** run one after another, across all your tabs. Waiting uploads show **Queued** and *Waiting for DID* (or the destination's name).
* Uploads to **different destinations** run at the same time.
* Large uploads (hundreds of thousands to a million records) take time. You don't have to wait: close the window, go to another page and keep working. The Control Panel stays responsive while uploads run.
* You can run several uploads from different parts of the Control Panel at once, or chain uploads by starting another one on the same page (for example, a second DID file). They are queued and sent to the same destination one after another.
* **Cancel** stops the remaining rows but does not remove rows already uploaded.

!!! Warning
    If you try to leave the page during an upload, you're asked **Terminate active uploads?** with **Terminate and leave** or **Stay**. Closing the browser tab anyway stops the upload; you can reopen it later (see [Reopening after a tab closes](#reopening-after-a-tab-closes)).

#### Step 6: Review the result

When every row is written, the window shows **Upload complete** at 100%.<br><img src= "/customer/img/nbu12.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

| Result | Meaning |
|--------|---------|
| **Upload complete** | Every row was written. Click **Done**. |
| **Uploaded with failures** | Some rows were **rejected** or **unconfirmed**; the rest were written. Unconfirmed rows lost their connection before the destination answered, so they may or may not have been written. |
| **Upload cancelled** | You stopped the upload, or its tab closed. Rows written before that remain. |
| **Upload failed** | The upload could not run; the message says why. |

For failures, the result lists each reason with the number of rows affected. Expand a reason to see the rows. Then:

1. Click **Review failed rows** to return to the preview at the first failed row, under **Reviewing failed batch**. **Show all context** shows the whole file again.
2. Or click **Download failed rows** to save the failed rows and reasons as CSV.
3. Fix the problem (edit cells, change a mapping, or fix the record in the destination).
4. Click **Retry upload**.

**Back to preview** returns to the preview after a cancelled upload.

After you click **Done**, the uploaded records appear on the destination page. In the example, the customer's **DID** tab now lists DIDs *10900* and *10901* with their destinations.<br><img src= "/customer/img/nbu12.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

##### Retry upload

**Retry upload** remains available on the result screen, and beside each rejected or unconfirmed batch, until every row is uploaded. It continues the same upload:

* Rows already written are **never sent again**.
* Rejected rows and rows never sent are uploaded.
* For **unconfirmed rows**, a **Retry upload** window asks what to do:

      | Destination | Options |
      |-------------|---------|
      | With **Existing records** (DIDs, Rate Cards) | **Replace the existing record with the file's values** or **Keep the existing record**. A row that already landed is not added twice. Your choice becomes the upload's **Existing records** setting. |
      | Other destinations | **Skip them and upload the rest** (default) or **Send them again**. Only send again if you've checked they're missing, because a row that already landed would be added twice. |

### Upload history

The **Bulk uploads** tab at the bottom left of the workspace toolbar lists both your current and previous uploads under **Bulk upload activity**, so you have a history of what you've been working on. Uploads are kept on your computer, in this browser, even if you closed them without finishing. Click an upload to return to where you left it.

The tab lists your uploads under **Bulk upload activity**. Its label summarises them, for example **2 bulk uploads active**, **1 bulk upload needs attention** or **1 bulk upload ready for review**.

Each upload is a card:

| Part | Description |
|------|-------------|
| **Heading** | The upload's name, its file (or **Pasted data** / **Data from a link**) and start time, for example *Started 10:08 AM*. |
| **Status line** | Current state (such as **Validating**, **Ready for review**, **Upload failed**, **Complete**), a progress bar, the step (*Step 2 of 4*), row counts, time remaining and overall percentage. |
| **Expanded view** | The four steps (**Prepare**, **Validate**, **Queue**, **Upload**), each with progress and status (**Complete**, **In progress**, **Waiting**, **Failed**, **Cancelled**). |
| **Open upload** / **Review & retry** | Reopens the upload's window. |

**Deleting an upload** with the bin button:

* **Discards** an unfinished upload that can still be reopened, after a confirmation: **Discard *name*?** Its mappings and edits are lost; rows already uploaded stay in the destination. **Keep** is the default, so `Enter` and `Escape` never delete by accident.
* **Removes** a finished upload, or one that can no longer be reopened, straight away.
* Is unavailable while an upload is running: **Cancel this upload before discarding it**.

> **Note**: Closing the **Bulk uploads** tab only hides it until another upload starts or finishes. It does not delete anything.

### Working across browser tabs

The upload history shows your uploads from every Control Panel tab open in the **same browser** and signed in as you. Other browsers and devices don't see each other's uploads.

An upload runs in one tab at a time. Clicking **Open upload** on an upload running in another tab moves it:

1. A message says **Opening upload *name* in this tab…**, and this tab opens the upload's page.
2. The other tab pauses the upload at a safe point and hands over everything: mappings, associations, populated values, cell edits and undo history.
3. The upload continues here. Sending resumes from the last confirmed batch; reading or validation restarts that step (nothing is written until upload).

If the move can't happen, the upload continues in its original tab with a message such as **The tab running this upload did not respond.** or **This upload is already moving to another tab.**

If the other tab closes or stops responding, its uploads show **Stopped: the tab running this upload was closed** or **Lost contact with the tab running this upload; it may have been closed**, and can be reopened.

### Reopening after a tab closes

While an upload can be resumed, its file and your work are kept in this browser. If the tab, page or browser closes, the upload shows **Stopped when its tab closed** in the history. Click **Open upload** to reopen it.

| Stopped during | What happens |
|----------------|-------------|
| **Upload** | The result screen shows **Stopped when its tab closed. N of M rows were uploaded.** The in-flight batch is **Unconfirmed** with **Retry available**. Nothing is sent until you click **Retry upload**. |
| **Validation** | **Validation stopped when its tab closed.** Click **Validate & upload** again. |
| **Reading the file** | Reading restarts automatically. |
| **URL download** | **The download stopped when its tab closed. Load the URL again to continue.** |
| **Preparation** | Reopens with your mappings, associations and edits intact. |

Some uploads can't be reopened, for example a completed upload (only its status is kept) or one whose saved copy is gone (**This upload can no longer be reopened: its saved copy is gone.**). An upload open in another tab can't be reopened twice.

!!! Warning
    If the browser can't save an upload (for example, storage is full), you'll see **Upload *name* could not be saved in this browser, so it may not reopen if this tab closes.** The upload itself continues.

### Signing out and session expiry

Signing out, or your session expiring, clears every upload kept in this browser for you, in every tab. An upload still running stops. Another person signing in on the same browser sees only their own uploads.

Uploads kept in the browser are also removed automatically **7 days** after their last update.

### Getting help

Click **Help** at the top of the uploader to open **How bulk upload works**, with a short walkthrough video and the flow in four steps. The video loads only when you open the card.

### Limits

| Limit | Value |
|-------|-------|
| File size (file or URL) | 1 GB |
| Pasted text | 5 MB |
| Rows | 2,000,000 |
| Columns | 10,000 |
| Characters in one cell | About 4 million |
| Cells edited by hand in one upload | 10,000 (use Populate for larger changes) |
| Failures listed individually | 5,000 (totals remain exact) |
| Uploads kept in the browser | 7 days after last update |

### Accessibility

* Fully usable with a keyboard. The preview follows spreadsheet conventions (arrow keys move, `Enter` or `F2` edits, `Enter` saves, `Escape` cancels).
* Preparation tabs and change history follow the arrow keys; value groups apply with `Enter`.
* Required fields are announced as required.
* States such as *resolved* and *unresolved* use text and icons, not colour alone.
* Progress and completion are announced to screen readers without moving focus.
* Motion is limited and respects the system's reduced-motion setting.

### Understanding Privacy in Bulk Upload

| Data | Handling |
|------|----------|
| **Your file** | Read in your browser and sent only to the destination you upload to. |
| **Saved copy for resuming** | Kept in this browser while the upload can be resumed. Removed when the upload completes, when you delete it, when you sign out or your session expires, and in any case 7 days after its last update. |
| **Status messages** | Progress and status messages shown elsewhere in the Control Panel, including other tabs, never include cell values. |

!!! Note "Tracking uploads from the Bulk uploads panel"
    Even if you leave the DID page and go elsewhere in the Control Panel, your uploads' progress stays visible in the **Bulk uploads** tab at the bottom of the screen. Each upload shows its name, file, start time, status (for example **Ready for review** or **Complete**), a progress bar with one segment per step, and the overall percentage.<br><img src= "/customer/img/nbu14.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

    The buttons at the top right of the panel control how it is displayed:

    | Button | Description |
    |--------|-------------|
    | **Minimise** | Collapses the panel back to its tab at the bottom of the screen. Uploads keep running. |
    | **Maximise** | Expands the panel to give the upload history more room. |
    | **Pin / Unpin floater launcher** | **Pin** keeps the panel docked and open while you move around the Control Panel, so you can keep an eye on progress. **Unpin** releases it, so it closes back to its launcher tab when you're done looking. |

## Range Holders

Following are the steps to configure the Range Holder cards.

1. We create a new **Carrier** which is basically a **Range Holder**. This is a pseudo-carrier. This carrier (Range Holder) isn't going to send any calls and we need not provide it with any **Authentication**.<img src= "/customer/img/RH1.jpg" style="border: 2px solid #4472C4; border-radius: 8px;">
2. Next, we build a **Provider Rate Card** for the Range Holder.
3. Under the **Provider Rate Card** we've **Tier 1 Interconnect** and **Tier 2 Interconnect** for different providers.
4. Then you go to the **Carrier** click on **Edit** and then click on **Range Holder** and select **Provider Rate Card** and click on `Save`. This gives them access to the whole range of numbers.<img src= "/customer/img/RH2.jpg" width="1300" style="border: 2px solid #4472C4; border-radius: 8px;"> <img src= "/customer/img/RH3.jpg" style="border: 2px solid #4472C4; border-radius: 8px;">
5. Then go to **Management :material-menu-right: Global :material-menu-right: DID**.
6. Select the number.
7. In **Basic** select your **Customer**.
8. From the **Provider** drop-down select **None/Range Holder** and the **Provider Rate card** disappears.
9. Click on `Save` and you can see the updated card.
   <img src= "/customer/img/RH4.jpg" width="1300" style="border: 2px solid #4472C4; border-radius: 8px;">
