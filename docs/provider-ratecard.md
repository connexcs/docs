# Provider Rate Cards
**Management :material-menu-right: Provider rate Card**

**Provider Rate Cards** determine routing and billing for calls coming from our customers. Before configuring, we suggest you review [Rate Card Overview](https://docs.connexcs.com/rate-card-building/) then "[Rate Card Setup](https://docs.connexcs.com/video-guide/#rate-card-setup)" in the ConnexCS Video Guide. 

## Overview

* **Name**: The name of the provider.  Click this link to see the provider's individual rate card and management options.
* **Direction**: Cards are either *Termination* (calling out to PSTN) or *Origination* (DID numbers receivng calls from PSTN). Termination is the most common type of card used by ConnexCS customers. 
* **Company**: Refers to the Provider, or Carrier, that the card is configured to use. 
* **Currency**: The currency for the provider's region (typically USD, EUR, or GBP).
* **`?`**: Lists dependent Child (or Customer) Rate Cards, which will be impacted by any changes made to the parent card. Click on the [Child Card](https://docs.connexcs.com/customer-ratecard/) to view the configuration. 
* **ID**: A system identifier that acts as a placeholder and prevents confusion between similarly named items. 
+ **Rule Count**: The number of rows in the Rate Card.

!!! note "Warnings and Alerts"
    If a Rate Card name shows a yellow arning or red alert, these will indicate details about the card. It may be stale, or have some sort of error.

## Provider Rate Card Management

**Bulk Edit** Select one or more Provider Cards and click **`Bulk Edit`** to modify multiple cards for settings such as Force Presentation, Dialing, Direction, and Billing Precision.

## Add New Provider Rate Cards
Once created, new **Provider Rate Cards** are completed by either adding rows manually or uploading an existing file. 

1. Click the **`+`** button under **Provider Rate Cards**.
3. Enter a unique name for the provider card.
4. Select the desired carrier(s) from the dropdown list.
5. Select the currency.
6. Click **`Config`**.
7. Set **Force Presentation** to IntER/IntRA/Indeterminate
7. LRN is enabled using the **Dialer** option.
8. Click **`Save`**.
9. From here, you may Manually Add the rate card or perform a Bulk Upload. 

**Option 1: Manual add**
To manually add Rate Card rows, select Draft, and add/modify/delete desired rows. 

**Option 2: Bulk Upload**
The preferred method for adding a Rate Card is to import/upload it:

1. Click **Bulk Upload** > **Upload**.
2. Browse to and select the rate card file.
3. This will display the card sent by the Provider in CSV format (if not provided as CSV, must be converted before proceeding)
4. Right-click the first row under Desitnation and select "Set Start Row"
5. Right-click and map all 3 columns
    * Col 1 - Name
    * Col 2 - Prefix
    * Col 3 - Cost
6. Select **Upload to Sever** and confirm
7. Select whether to make this active immediately

![alt text][confirm-import] 



## Provider Rate Card Settings

### Main tab

#### Functions

![alt text][prc-func] 

#### Overview

**Prefix**: The part of the dialed number which will match to trigger use of the card.

**Name**: Optional name for the card.

**Cost** (or Indeterminate): Refers to international calls, Toll Free (800, 888, etc) numbers, or anything else that isn't classified as Inter or Intra. 

**Intra** (US Only): Refers to **Intra**State dialing (calls between numbers in the same state) and the cost of a call from this prefix to a number in the same state. 

**Inter** (US Only): Refers to **Inter**State dialing (calls between numbers in different states)  and the cost of a call from this prefix to a number in a different state. 

**Billing**: Call will be billed based on the MCD (Minimum Call Duration) and Pulse, represented as x/x. Each call using this Rate Card will be rounded up to MCD, then in increments of Pulse. Example: MCD is set to 30 and Pulse is set to 6. The Billing collumn shows 30/6. Call durations will be rounded up basedon these settings, then that new duration is what will be billed.
   
|Call Duration|MCD?|Pulse|Billed Duration|
|---|---|---|---|
|1 sec|>30|n/a|30 sec|
|20 sec|>30|n/a|30 sec|
|30 sec|>30|n/a|30 sec|
|31 sec|met|6|36 sec|
|35 sec|met|6|36 sec|
|36 sec|met|6|36 sec|
|37 sec|met|6|42 sec|

**Rate Connect**: One time (per call) charge for connecting the call, triggered when call reaches SIP 200OK and ACK is received. 

**Status**: Indicates a call that has been blocked

**Dependent Cards** - These are Customer cards that use the selected rate card. Changes to the Provider Rate Card will be applied to each dependent rate card. 


### Revisions tab 
The Revision tab displays up to 8 most recent changes made to a rate card (ex: previous Rule count, Presentation, Currency, date created, Billing). The two most recent revisions will be available as Active or Inactive, the rest will be in Archive state. 

1. To activate an earlier version from archive, click Archive next to the Revision. This may take a few minutes. 
2. To make the previous version Active, click Active. This may take a few minutes. 

### Properties tab

#### Basic

#### Config

* **Name(Public)** - This optional setting allows you to display an alias or pseudonym for the carrier. 
* **Tech Prefix** - appended to outbound calls
* **Force Presentation options** 

|Option|Example|Usage|
| --- | --- | --- |
|Single Rate|0.0007|Usually a UK Landline|
|IntER/IntRA|1 (NPANXX)|Refers to Interstate and Intrastate calling for USA dialing|
|IntER/IntRA/Indeterminate|1 (NPANXX)|Indeterminate indicates that call is between a USA number and another country|

* **Dialing** - In the US, LRN (Local Routing Number) identifies the switch for a number and is used to determine billing for a call.  When a number is ported from one provider to another, the billing may change based on the new carrier. An LRN dip will correct any pricing discrepancies between the original and new carriers. (ConnexCS owns their own database for this, so the response time is quick.) This helps to reduce billing costs. If the customer wants to do single rates they may not want to do the LRN dip. 

+ **ASR+**: 

#### Advanced

* **Billing Precision** - Round billing on a card to the specified decimal point. 
* **Public Options** - Display or hide provider information externally by toggling check boxes on and off.  You allow the card to be viewed via HTML (on a web page), CSV (a spreadsheet), an API (an external application), and whether to list the rate card in the domain portal.
* **CLI Restrict** - Enable Call Line Identification (CLI) restriction(s). Use regular expressions to set valid number formats. See [CLI Restrict](https://docs.connexcs.com/customer/cli/#cli-restrict) for configuration details. 
* **Capped Rate** - Block calls above the set price
* **Delayed Bye** - On termination rate cards, add the specified duration (in seconds) to the end of each call. Providers may use this in situations where a commercial contract specifies a minimum duration call. This feature should only be used along with full disclosure to both the customer and carrier.


[confirm-import]: /card/img/138.png "Confirm Import"
[prc-func]: /card/img/prc-func.png "Functions"
