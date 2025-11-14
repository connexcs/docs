# Provider Rate Cards

**Management :material-menu-right: Provider Rate Cards**

## Introduction

A **Provider Rate Card** outlines the pricing structure applied by a carrier for call termination or origination.

It defines per-minute rates, billing increments, rounding rules, connection charges, and associated routing parameters. This information serves as the core reference for your billing logic, routing decisions, cost analysis, and margin calculations.

Before configuring Provider Rate Cards, we suggest you review [**Rate Card Overview**](https://docs.connexcs.com/rate-card-building/) then [**Rate Card Setup**](https://docs.connexcs.com/video-guide/#rate-card-setup) in the ConnexCS Video Guide.

## Key Benefits

1. **Efficient Routing**: Tech prefixes and LRN ensure optimal call routing.

2. **Transparent Billing**: Customizable rounding and precision prevent billing disputes.

3. **Carrier Compliance**: Helps meet carrier ACD requirements without violating policies.

4. **Enhanced Control**: Advanced settings allow granular restrictions on call flow, CLI, and rates.

5. **Zero-cost LRN Lookups**: Free DIPs reduce operational costs compared to third-party LRN providers.

## Provider Rate Card Grid

### Available Options

When you open the **Provider Rate Card** section, the initial screen presents a grid listing all the provider rate cards you’ve created.

This serves as your primary management dashboard, allowing you to quickly search, review, edit, or delete any existing rate card.

+ **Create New**: Click the `+` icon to create a new provider rate card.

+ **Bulk Edit**: Select multiple cards to adjust shared properties such as direction or currency.

+ **Delete**: Remove one or more cards (only possible when all revisions are inactive).

+ **View / Edit**: Click a card name to open its details and manage prefixes, rates, and settings.

!!! warning "Before deleting a Provider Rate Card"
    Before deleting a Provider Rate Card, we need to delete the [**Active Revision**](/provider-ratecard/#revisions-tab).

!!! Note "In ConnexCS, the terms provider and carrier are used interchangeably."

|Column|Description|
|------|-----------|
|**Name**|  The name of the provider rate card. Click the name of the provider to see an individual rate card and management options. If a Rate Card name shows a yellow warning or red alert, these will show details about the card. It may be stale (if changes are made, but the rate card is not updated,) or have some sort of error.|
|**Force Presentation**| [Click here](https://docs.connexcs.com/provider-ratecard/#config) to know more.|
|**Direction**|Cards are either *Termination* (calling out to the PSTN) or *Origination* (DID numbers receiving calls from the PSTN). **Termination is the most common card type used by ConnexCS customers**.|
|**Company**|Refers to the Provider, or Carrier, for using the configured card. It assigns the rate card to a provider (carrier).|
|**Currency**| The billing currency in use.|
|**?**|Lists dependent Child (or Customer) Rate Cards. The changes made on the parent impact the lists.<br>Click on the [**Child Card**](https://docs.connexcs.com/customer-ratecard/) to view the configuration.</br>|
|**ID**|A system identifier that acts as a placeholder and prevents confusion between similarly named items.|
|**Rule Count**|Displays the total number of rows (rules) within a rate card. Also determines the various conditions and charges applied to calls.|
|**Public Options**|Choose what you can do with the card information: view it via HTML (on a web page), download CSV (a spreadsheet), and whether to list the rate card in the customer portal (allows customers to view rate cards that aren't in their account and add them). (**Note: API Querying is no longer available.**)|
|**Active Revision**|Only one active revision at a time. Previous revisions can be archived and reactivated if needed.|
|**Max Revision**|Its the latest revision. Additional currencies can be added upon request, but this is rare.|

!!! Note "Parent-Child Rate Card Relationship"
    1. Provider Rate Cards are parent rate cards.
    2. Customer Rate Cards are child rate cards derived from provider rate cards.
    3. Users can check dependent (child) rate cards linked to a provider rate card.

## Create Provider Rate Cards

Once created, you can either add rows manually or upload an existing file for the new **Provider Rate Cards**.

1. **Step 1**

a. When you click the `+` icon, a `Create New` Provider Rate Card window appears.
b. This window is divided into three sections **Basic**, **Config**, and **Advanced** where you define the core properties of the card.
c. You only need to complete a few key fields to get started.
d. Once the card is saved, you can explore detailed configuration options in the next section which is the [Properties Section](https://docs.connexcs.com/provider-ratecard/#properties-tab).

    **Required fields**:

    |Field|Description|Example|
    |-----|-----------|-------|
    |**Name (Private)**| Internal label used to identify the rate card| Carrier-XYZ_Nov2025|
    |**Provider / Carrier**|Select your upstream provider| Carrier XYZ Ltd|

e. Click on `Save`. (Once it’s saved, new configuration sections will appear.)

f. At this stage, your rate card is created but not yet functional it doesn’t have any rate data.

g. Once saved, the interface will expand to show additional tabs such as **Bulk Upload**, **Create draft** , **Revisions**, and **Properties**.

    **This next stage is where you’ll add rate data and complete the configuration.**

2. **Step 2**

a. After saving, you must define your rates either by uploading a rate sheet or manually adding prefixes.
This is what makes the rate card operational for billing and routing.

b. Two primary options are now visible:

   + **Bulk Upload**: Import rates via a CSV file (recommended for full rate sheets).
   + **Manual Create**: Add prefixes and rates one by one directly in the interface.

c. **Bulk Upload**: The preferred method for adding a Rate Card is to import/upload it:
   1. Click **`Bulk Upload`**, then **`Upload`**.
   2. Select the file, typically sent by the Provider in CSV format (if not provided as CSV, conversion required before proceeding).
   3. Right-click on the first row of data and select "Set Start Row."
   4. Right-click and map the columns. It's important to map all fields based on the Rate Card columns. For example:
       + Col 1 - Prefix
       + Col 2 - Name
       + Col 3 - Cost
   5. Choose **`Upload to Sever`** and confirm the upload.
   6. Select whether to make this active instantly.

        !!! danger "Manually generated cards"
            When users create Provider Rate Card CSV files manually in Excel (rather than generating them from a rate card management system), they may introduce errors such as empty rows or duplicate prefixes, which could cause the file upload to error.

d. **Manual add**: To manually add Rate Card rows, select **`Create Draft`** and then add / modify / delete required rows.

## Configure Provider Rate Card

Once you create the Provider Rate Card, click on the Rate Card name to access additional configuration.

### Main tab

**Bulk Upload**: Upload the Provider Rate Card using a CSV file, typically provided by the carrier.

**Email**: You can send the CSV file to the mentioned email address.

**Audit Log**: Review/track any changes made to the card settings. Its useful for resolving disputes and understanding past modifications.

**Functions**
![alt text][prc-func]

+ **Revision**: List all versions of changes on the card. Each modification to a rate card creates a new revision. Allows for audit trails and tracking of past changes. Customers can verify disputes by reviewing older revisions.

+ **Create Draft**: Create a blank revision to manually add all prefixes and rows. This will only contain rows added manually and doesn't keep any previous revisions.
+ **Edit Revision**: Make inline edits to the current revision. Upon `Save`, you can select to make this new revision Active. This will keep previous revisions and alterations.
+ **Delete Revision**: Select a revision to delete.
+ **Download**: Download a CSV file of the Rate Card.

#### Prefix and Billing Columns

+ **Prefix**: The part of the dialled number that will match to trigger use of the card.
  + **Prefix and Carrier Mapping**:
      + Each rate card contains prefixes that define the destination.
      + Names are assigned to group prefixes under specific carriers.
      + Allows easy identification of which numbers belong to which carrier.

+ **Name**: Optional name for the card.

+ **Cost** (or Indeterminate): The charge per unit (e.g., per minute) for the call. Refers to international calls, Toll Free (800, 888, etc) numbers, or anything else that isn't classified as Inter or Intra.

  + **Intra** (US-Only): Refers to **Intra**State dialing (calls between numbers in the same state) and the cost of a call from this prefix to a number in the same state.

  + **Inter** (US-Only): Refers to **Inter**State dialing (calls between numbers in different states) and the cost of a call from this prefix to a number in a different state.

+ **Billing**: Call billing depends on the MCD (Minimum Call Duration) and Pulse, represented as x/x.

Each call using this Rate Card rounds-up to MCD, then in increments of Pulse.

These settings round-up the call durations and the call billing is based on the new duration.

!!! Example "Billing Example"
    In our example, MCD has a value of 30 and Pulse has a 6. The Billing column shows 30/6.

    You can see the process of call billing:

    |Call Duration|MCD?|Pulse|Billed Duration|
    |---|---|---|---|
    |1 sec| round up to 30|n/a|30 sec|
    |20 sec|round up to 30|n/a|30 sec|
    |30 sec|round up to 30|n/a|30 sec|
    |31 sec|met|6|36 sec|
    |35 sec|met|6|36 sec|
    |36 sec|met|6|36 sec|
    |37 sec|met|6|42 sec|

    
    + **Billing Increments**: Calls are billed based on two key values: Minimum Call Duration (MCD) and Pulse.
        
        + **MCD (Minimum Call Duration)**: The shortest duration for which a call is billed.
        
        + **Pulse**: Defines the increments in which calls are billed after the MCD.
  
        !!! Example
            1. **6/1 Billing**: Minimum charge is for 6 seconds; further billing increments are 1 second.
            2. **0/6 Billing**: Calls shorter than 30 seconds are billed at 30 seconds; increments of 6 seconds thereafter.

**Rate Connect**: One-time (per call) charge for connecting the call, triggered upon `SIP 200OK` and `ACK`.

!!! Example
    If the rate connector charge is 0.01, this is added as a flat fee, independent of duration.

**Status**: It indicates the state of a prefix or carrier. Set the status to `Blocked` to prevent call routing.

**Dependent Cards**: Customer cards that use the selected Rate Card. Changes to the Provider Rate Card apply to each dependent card.

### Revisions Tab

The Revision Tab displays up to 8 most recent changes made to a rate card. The two most recent revisions are available as Active or Inactive, the rest are in Archive state.

To change Revision status:

+ Click `Archive` next to the Revision to send it to the Archive. This may take some minutes.
+ To make that version Active, click `Inactive`. This may take some minutes.
+ Use the **Date Live** function by the Revision to set a future date to make the revision Active. Allows scheduling of a rate card to become active at a specific date/time. Its beneficial for advance notice of rate changes.

### Properties tab

#### Basic

+ **Name (Private)**: The name of the card; this is visible within the ConnexCS Control Panel (not visible to end-customers).
+ **Carrier**: Select the carrier associated with this card. Additional currencies can be added upon request, but this is rare.
+ **Currency**: Card billing done using this currency.

#### Config

+ **Name (Public)** (Optional)customer: Allows you to display an alias or pseudonym for the carrier.
+ **Tech Prefix**: Appended to outbound calls, this should be unique per carrier so it can allow route manipulation. Its used to add a tech prefix for the carrier card on outbound routes. Its essential for route identification. Each route should have its own rate card if using tech prefixes for route identification. Enables route manipulation by altering call destinations dynamically.
+ **Force Presentation**: Find the number of rows to display for rates:

|Option|Example|Usage|# of Rows in table|
| --- | --- | --- |---|
|**Single Rate**|0.0007|Uses a single column for rates, usually a UK Landline|1|
|**IntER/IntRA**|1 (NPANXX)|Refers to Interstate (different states) and Intrastate (same state) calling for USA dialing|2|
|**IntER/IntRA/Indeterminate**|1 (NPANXX)|Indeterminate indicates that call is between a USA number and another country. Calls with unknown or unclassifiable origin. Includes: International calls, Withheld numbers, Toll-free (1-800) numbers. These are charged based on the Cost Column.|3|

!!! Note
    Billing depends on the originating caller ID (CLI) and the destination number.
    If a call doesn't match intrastate rules, it defaults to interstate billing.

+ **Dialing**: Select whether to bill based on the carrier of the Dialed Number or using an LRN Database (US-only).  

    !!! Info "LRN (Local Routing Number)"
        + **Purpose**:
            + LRN ensures accurate call routing based on number portability.
            + Prevents incorrect billing by mapping calls to the correct terminating provider. It identifies the switch for a number and used to determine billing for a call.
        + **How It Works**:
            + A phone number might be assigned to one provider but actually be serviced by another.
            + LRN lookup ensures the call is billed correctly based on the actual provider.
            + When a customer ports the number from one provider to another, the billing may change based on the new carrier. An LRN dip will correct any pricing discrepancies between the original and new carriers. This helps to reduce billing costs.
            + If the customer wants to do single rates, they may not want to do the LRN dip.
            ```mermaid
            graph TD
                A[Phone Number Assignment] --> B{Is Number Serviced by Different Provider?}
                B -->|Yes| C[Perform LRN Lookup]
                B -->|No| D[No Action Required]
                C --> E[Update Billing Information]
                E --> F{Customer Ports Number to New Carrier?}
                F -->|Yes| G[Perform LRN Dip to Correct Billing]
                F -->|No| H[No Further Action Required]
                G --> I[Adjust Pricing Based on New Carrier]
                I --> J{Customer Wants Single Rate?}
                J -->|Yes| K[Avoid LRN Dip for Single Rate]
                J -->|No| L[Continue with Updated Billing]
            ```

!!! tip "ConnexCS LRN Database"
    ConnexCS maintains an in-house LRN database. This ensures a quick response time and updates the rates daily.

    **No charges for using this service**, so customers have unlimited dips into the database.

+ **ASR+**: Filter known failed, non-existent / working numbers. See [**ASR Plus Details**](https://docs.connexcs.com/customer/routing/#asr-answer-seizure-ratio-plus-details) for additional information.

#### Advanced

+ **Direction**: Configure the card to be either termination (calling out to PSTN) or origination (DID numbers receiving PSTN calls). Termination is the most common.
+ **Billing Precision**: Round billing on a card to the specified decimal point (typically set to 4). Basically determines the decimal places used for billing.
+ **Rounding Method**: Specify how to handle the n+1 digit (For example, if your card bill has 4 decimal places, this cares about the 5th digit). For our example: 0.1234**5** (rounded to 4 decimal places):

    |Method|Explanation|
    | --- | --- |
    |**Up**|Rounded up regardless of n+1 digit (0.1235)|
    |**Down**|Rounded down regardless of n+1 digit (0.1234)|
    |**Half-Up**|Rounds up if at mid-point (0.5 and above).Values 5 through 9; rounded up (0.1235)|
    |**Half-Down**|Rounds down even at mid-point. Values from 0 through 5; rounded down (0.1234)|

+ **Duration Rounding**: It determines how call durations are rounded. It ensures consistent and fair billing calculations.The rounding options are same as above, but for the call duration.
+ **Public Options**: Choose what you can do with the card information: view it via HTML (on a web page), download CSV (a spreadsheet), and whether to list the rate card in the customer portal (allows customers to view rate cards that aren't in their account and add them). (**Note: API Querying is no longer available.**)
+ **CLI Restrict**: Enable Call Line Identification (CLI) restriction(s) using regular expressions to set valid number formats.
See [**CLI**](/customer/cli/) for additional details.
+ **PAID Restrict**: Enable Pre-Asserted-Identity (PAID) restriction(s) using regular expressions to set valid number formats.
See [**Filter PAID by Number or Pattern**](/customer/cli/#filter-paid-by-number-or-pattern) for additional details.
+ **SMS URL**: *not in use*

+ **Default RTP**: If set and the customer adds the route themselves, then it deploys the Default RTP. Otherwise, this is an unused setting.

!!! Note "Sets a default RTP value but doesn't modify live routes."

+ **Capped Rate**: Block calls above the set price; preventing excessive charges.

+ **Force RTP**:

    |Option|Explanation|
    | --- | --- |
    |**Disabled**|Selects the least expensive path between your customer and provider.|
    |**Direct RTP (No Proxy)**|Bypass ConnexCS, so media flows directly between the customer and carrier.|
    |**Closest (To ConnexCS) Server**|Media will use the server geographically closest to ConnexCS|
    |**Closest (Elastic) Server**|This will allow traffic to traverse new deployed servers. Would only cause issues if the customer runs a firewall, in which case the servers aren't authorized.|

+ **Block Destination Type**: Block calls to one or more types of destination (example: Mobile, Paging, or Satellite) using SIP Message `403 Destination Blocked'.
+ **Block Connect Cost**: Disable / enable the per-call connection cost across the carrier.
+ **P-Time**: Packetization time, or P-Time, refers to the length of an SDP packet based on the media time in milliseconds.
    + Default: Use the default setting in the end-device's firmware (don't change what's sent.)
    + 20 through 20 ms
    + 30 through 30 ms
+ **Delayed Bye**: see [**Delayed Bye**](/provider-ratecard/#delayed-bye) below.
+ **Flow Speed (CPS)**: Set the number of Calls Per Second allowed on this card.
+ **Delayed Bye MCD**: see [**Delayed Bye**](/provider-ratecard/#delayed-bye) below.
+ **Channels**: Set the number of concurrent active calls allowed on the card.
+ **Delayed Bye Customer Charge**: see [**Delayed Bye**](/provider-ratecard/#delayed-bye) below.

#### Delayed Bye

**Delayed Bye** allows for an extended call by delaying the call's release.

!!! question "When to use?"
    This is useful when a carrier contract specifies a minimum duration call but you have customers who frequently make short duration calls.

!!! warning "Use with caution"
    1. Both the customer and ConnexCS are billed for the extra duration.
    2. This feature should be disclosed to customers as it impacts billing.
    3. If undisclosed, this practice could be deemed fraudulent (False Answer Supervision - FAS).

    ConnexCS doesn't endorse fraudulent activities. 
    
    **This feature bends the rules; if you don't use realistic figures or understand how this is working, you will get unexpected results, use with caution.**

Consider the following when using **Delayed Bye**.

+ Only works for termination calls.
+ Only BYE messages from Downstream get delayed.
+ When a message gets delayed, a `200OK` is sent Downstream instantly informing that the call has ended.
+ We only allow extending a call for a maximum of 30 seconds.
+ If a Downstream BYE message gets delayed and an Upstream BYE interupts:
  + We will instantly inform the upstream carrier about the terminated call.
  + The charge recorded in the carrier's CDR will be the actual call duration + Delay. It won't take into consideration the incoming Upstream BYE.

##### Fields

+ **Delayed Bye**: Establishes the number of additional seconds for each call.
+ **Delayed Bye MCD**: Sets a minimum duration to calculate a delta. For example, if you set the Delayed BYE MCD to 10 seconds and the call lasts for 8 seconds, the call gets extended by 2 seconds.
+ **Delayed Bye Customer Charge**: Determines if the customer should be charged for the extended call.

!!! warning "Incorrect Billing"
    Any attempt at artificially adjusting packets may cause billing problems.

    Some limitations exist within the protocol, the real world, and our implementation. 
    
    You must understand what you are doing before using this feature.

#### Notes

Private Notes aren't visible to the end Customer. Not typically used on Provider Rate Cards.

[confirm-import]: /card/img/138.png "Confirm Import"
[prc-func]: /card/img/prc-func.png "Functions"
