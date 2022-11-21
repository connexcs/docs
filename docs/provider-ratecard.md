# Provider Rate Cards
**Management :material-menu-right: Provider Rate Cards**

**Provider Rate Cards** determine routing and billing for calls being placed by customers. Before configuring Provider Rate Cards, we suggest you review [**Rate Card Overview**](https://docs.connexcs.com/rate-card-building/) then [**Rate Card Setup**](https://docs.connexcs.com/video-guide/#rate-card-setup) in the ConnexCS Video Guide. 

## Provider Rate Card Functions

+ **Bulk Edit**: Select one or more Provider Cards and click **`Bulk Edit`** to modify multiple cards for settings such as Force Presentation, Dialing, Direction, and Billing Precision.

+ **Delete**: To delete a Provider rate card, select its name from the list and then click the trash bin icon. 

!!! warning "Before deleting a Provider Rate Card"
    Before deleting a Provider Rate Card, we need to delete the [**Active Revision**](/provider-ratecard/#revisions-tab).

## Overview
+ **Name**: Click the name of the provider to see individual rate card and management options. (If a Rate Card name shows a yellow warning or red alert, these will indicate details about the card. It may be stale or have some sort of error.)

+ **Direction**: Cards are either *Termination* (calling out to PSTN) or *Origination* (DID numbers receiving calls from PSTN). Termination is the most common card type used by ConnexCS customers. 

+ **Company**: Refers to the Provider, or Carrier, that the card is configured to use. 

+ **Currency**: The currency for the provider's region (typically USD, EUR, or GBP).

+ **?**: Lists dependent Child (or Customer) Rate Cards, which is impacted by any changes made to the parent card. Click on the [**Child Card**](https://docs.connexcs.com/customer-ratecard/) to view the configuration. 

+ **ID**: A system identifier that acts as a placeholder and prevents confusion between similarly named items. 

+ **Rule Count**: The number of rows in the Rate Card.
    
## Create Provider Rate Cards
Once created, new **Provider Rate Cards** are completed by either adding rows manually or uploading an existing file. 

1. Click :material-plus:.
3. Complete required fields. (For details, see [**Configure Provider Rate Card**](https://docs.connexcs.com/provider-ratecard/#configure-provider-rate-card) below.)
4. Click **`Save`**.
9. From here, you may add the Provider Rate Card manually or perform a Bulk Upload. 

**Option 1: Manual add**
To manually add Rate Card rows, select **`Create Draft`** and then add/modify/delete required rows. 

**Option 2: Bulk Upload**
The preferred method for adding a Rate Card is to import/upload it:

1. Click **`Bulk Upload`**, then **`Upload`**.
2. Select the file, typically sent by the Provider in CSV format (if not provided as CSV, must be converted before proceeding).
4. Right-click on the first row of data and select "Set Start Row".
5. Right-click and map the columns. It's important to map all fields based on the Rate Card columns. For example:
    * Col 1 - Prefix
    * Col 2 - Name
    * Col 3 - Cost
6. Select **`Upload to Sever`** and confirm upload. 
7. Select whether to make this active immediately

!!! danger "Manually generated cards"
    When users create Provider Rate Card CSV files manually in Excel (rather than generating them from a rate card management system) errors such as empty rows or duplicate prefixes may be introduced which could cause the file upload to error. 

## Configure Provider Rate Card
Once the Provider Rate Card is created, click on the Rate Card name to access additional configuration. 

### Main tab
**Bulk Upload**: Upload the Provider Rate Card using a CSV file, typically provided by the carrier. 

**Email**: Enter an email address where the CSV file will be sent. 

**Audit Log**: Review any changes made to the card settings. 

**Functions**
![alt text][prc-func] 

+ **Revision**: List all versions of changes on the card. 
+ **Create Draft**: Create a blank revision to manually add all prefixes and rows. This will only contain rows added manually, none of the previous revision is retained. 
+ **Edit Revision**: Make inline edits to the current revision. Upon `Save`, you can select to make this new revision Active. This will keep previous revision plus and changes that were made. 
+ **Delete Revision**: Select a revision to delete. 
+ **Download**: Download a CSV file of the Rate Card.

#### Prefix and Billing Columns

**Prefix**: The part of the dialed number which will match to trigger use of the card.

**Name**: Optional name for the card.

**Cost** (or Indeterminate): Refers to international calls, Toll Free (800, 888, etc) numbers, or anything else that isn't classified as Inter or Intra. 

**Intra** (US Only): Refers to **Intra**State dialing (calls between numbers in the same state) and the cost of a call from this prefix to a number in the same state. 

**Inter** (US Only): Refers to **Inter**State dialing (calls between numbers in different states) and the cost of a call from this prefix to a number in a different state. 

**Billing**: Call is billed based on the MCD (Minimum Call Duration) and Pulse, represented as x/x. Each call using this Rate Card is rounded up to MCD, then in increments of Pulse. Call durations is rounded up based on these settings, then that new duration is what is billed.

!!! abstract "Billing Example"
    In our example, MCD is set to 30 and Pulse is set to 6. The Billing column shows 30/6. Calls are billed as follows:
   
    |Call Duration|MCD?|Pulse|Billed Duration|
    |---|---|---|---|
    |1 sec| round up to 30|n/a|30 sec|
    |20 sec|round up to 30|n/a|30 sec|
    |30 sec|round up to 30|n/a|30 sec|
    |31 sec|met|6|36 sec|
    |35 sec|met|6|36 sec|
    |36 sec|met|6|36 sec|
    |37 sec|met|6|42 sec|

**Rate Connect**: One-time (per call) charge for connecting the call, triggered upon `SIP 200OK` and `ACK`. 

**Status**: Indicates a call that has been blocked.

**Dependent Cards**: Customer cards that use the selected Rate Card. Changes to the Provider Rate Card is applied to each dependent card. 


### Revisions tab 
The Revision tab displays up to 8 most recent changes made to a rate card. The two most recent revisions is available as Active or Inactive, the rest is in Archive state. 

To change Revision status:

+ Click `Archive` next to the Revision to send it to the Archive. This may take a few minutes. 
+ Click `Inactive` to make that version Active. This may take a few minutes. 
+ Use the "Date Live" function by the Revision to set a future date to make the revision Active. 

### Properties tab

#### Basic

+ **Name (Private)**: The name of the card, this will only be seen within the ConnexCS Control Panel (not visible to end-customers). 
+ **Carrier**: Select the carrier associated with this card.
+ **Currency**: The card is billed with this currency. 

#### Config

* **Name (Public)**: (Optional) Lets you to display an alias or pseudonym for the carrier. 
* **Tech Prefix**: Appended to outbound calls, this should be unique per carrier so it can allow route manipulation.
* **Force Presentation**: Find how many rows to display for rates: 

|Option|Example|Usage|# of Rows in table|
| --- | --- | --- |---|
|Single Rate|0.0007|Usually a UK Landline|1|
|IntER/IntRA|1 (NPANXX)|Refers to Interstate and Intrastate calling for USA dialing|2|
|IntER/IntRA/Indeterminate|1 (NPANXX)|Indeterminate indicates that call is between a USA number and another country|3|

* **Dialing**: Select whether to bill based on the carrier of the Dialed Number or using an LRN Database (US only). The LRN (Local Routing Number) identifies the switch for a number and is used to determine billing for a call. When a number is ported from one provider to another, the billing may change based on the new carrier. An LRN dip will correct any pricing discrepancies between the original and new carriers. This helps to reduce billing costs. If the customer wants to do single rates they may not want to do the LRN dip. 

!!! tip "ConnexCS LRN Database"
    ConnexCS maintains an inhouse LRN database. This ensures a quick response time and the rates are update daily. There are no charges associated with using this service, so customers have unlimited dips into the database. 

+ **ASR+**: Filter known failed non-existent/working numbers. See [**ASR Plus Details**](https://docs.connexcs.com/customer/routing/#asr-plus-details) for additional information. 

#### Advanced

* **Direction**: Configure the card as Termination (calling out to PSTN) or Origination (DID numbers receiving calls from PSTN). Termination is most common. 
* **Billing Precision** - Round billing on a card to the specified decimal point (typically set to 4). 
* **Rounding Method**: Specify how to handle the n+1 digit (ex: if your card is billed to 4 decimal places, this cares about the 5th digit). For our example: 0.1234**5** (rounded to 4 decimal places):
 
    |Method|Explanation|
    | --- | --- |
    |Up|Rounded up regardless of n+1 digit (0.1235)|
    |Down|Rounded down regardless of n+1 digit (0.1234)|
    |Half-Up|Values 5–9 are rounded up (0.1235)|
    |Half-Down|Values 0–5 are rounded down (0.1234)|

* **Duration Rounding**: The same rounding options but for the call duration.
* **Public Options**: Choose what can be done with the card information: viewed via HTML (on a web page), download CSV (a spreadsheet), and whether to list the rate card in the customer portal (customer can view cards not currently on their account and select them for use). (Note: API Querying is no longer available.)
* **CLI Restrict**: Enable Call Line Identification (CLI) restriction(s) using regular expressions to set valid number formats. See [**CLI**](/customer/cli/) for additional details.
* **PAID Restrict**: Enable Pre-Asserted-Identity (PAID) restriction(s) using regular expressions to set valid number formats. See [**Filter PAID by Number or Pattern**](/customer/cli/#filter-paid-by-number-or-pattern) for additional details.
* **SMS URL**: *not in use*
* **Default RTP**: If set, and the customer adds the route themselves, then this will be used. Otherwise, this is an unused setting. 
* **Capped Rate**: Block calls above the set price. 
* **Force RTP**:

    |Option|Explanation|
    | --- | --- |
    |Disabled|Selects the least expensive path between your customer and provider.|
    |Direct RTP (No Proxy)|Bypass ConnexCS, so media flows directly between the customer and carrier.|
    |Closest (To ConnexCS) Server|Media will use the server geographically closest to ConnexCS|
    |Closest (Elastic) Server|This will allow traffic to traverse new servers which may be deployed. Would only cause issues if the customer runs a firewall, in which case the servers are not authorized.|

* **Block Destination Type**: Block calls one or more types of destination (ex: Mobile, Paging, or Satellite) using SIP Message `403 Destination Blocked'.
* **Block Connect Cost**: Disable/enable the per call connection cost across the carrier. 
* **P-Time**: Packetization time, or P-Time, refers to the length of an SDP packet, based on the media time in milliseconds. 
    * Default- Use whatever is set in the end-devices firmware (don't change what's sent)
    * 20–20 ms
    * 30–30 ms
* **Delayed Bye**: see [**Delayed Bye**](/provider-ratecard/#delayed-bye) below
* **Flow Speed (CPS)**: Set the number of Calls Per Second allowed on this card.
* **Delayed Bye MCD**: see [**Delayed Bye**](/provider-ratecard/#delayed-bye) below
* **Channels**: Set the number of concurrent active calls allowed on the card. 
* **Delayed Bye Customer Charge**: see [**Delayed Bye**](/provider-ratecard/#delayed-bye) below

#### Delayed Bye
**Delayed Bye** allows a call to be extended by delaying the release of the call. This is helpful in situations where a contract with a carrier specifies a minimum duration call but you have customers who routinely do very short duration calls. 

!!! warning "Use with caution"
    You should only use this feature along with full disclosure to both the customer as they are billed for additional duration. Failing to notify the customer of this is considered Late Disconnection FAS (False Answer Supervision), ConnexCS doesn't endorse fraudulent activities. **This feature bends the rules, if you don't use realistic figures or understand how this is working you will get unexpected results, use with caution.**

Consider the following when using **Delayed Bye**.

* Only works for termination calls.
* Only BYE messages from Downstream will be delayed.
* When a message is delayed, a `200OK` will be sent Downstream instantly informing that the call has been ended.
* We only allow extending a call a maximum of 30 seconds.
* If a Downstream BYE message is delayed and an Upstream BYE interupts:
    * We will instantly inform the upstream carrier that the call has been ended.
    * The charge recorded in the carrier CDR will be the actual call duration + Delay. It won't take into consideration the incoming Upstream BYE.

##### Fields

* **Delayed Bye**: Sets how many seconds the call will be extended by.
* **Delayed Bye MCD**: Sets a minimum duration to calculate a delta. For example, if you set the Delayed BYE MCD to 10 seconds and the call last 8 seconds the call will be extended by 2 seconds.
* **Delayed Bye Customer Charge**: Determines if the customer should be charged for the extended call.

!!! note "Incorrect Billing"
    Any attempt at artificially adjusting packets may cause billing problems. There are limitations within the protocol, the real world, and our implementation. You must understand what you are doing before using this feature.

#### Notes
Private Notes aren't visible to the end Customer. Not typically used on Provider Rate Cards. 

[confirm-import]: /card/img/138.png "Confirm Import"
[prc-func]: /card/img/prc-func.png "Functions"
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTkyMTY4NDMwNl19
-->