# Customer Rate Card
**Management :material-menu-right: Customer Rate Cards**

**Customer Rate Cards** let you manage the rates for customers, edit customer profiles, and view important information. Before configuring, we suggest you review [**Rate Card Overview**](https://docs.connexcs.com/rate-card-building/) then "[**Rate Card Setup**](https://docs.connexcs.com/video-guide/#rate-card-setup)" in the ConnexCS Video Guide. You will also want to have at least one [**Provider Rate Card**](https://docs.connexcs.com/provider-ratecard/) configured. 

## Overview
**Name**: Click the name of the provider to see individual rate card and management options. (If a Rate Card name shows a yellow warning or red alert, these will indicate details about the card. It may be stale or have some sort of error.)

**Direction**: Cards are either *Termination* (calling out to PSTN) or *Origination* (DID numbers receiving calls from PSTN). Termination is the most common type of card used by ConnexCS customers. 

**Currency**: The currency for the provider's region (typically USD, EUR, or GBP).

**?**: Lists the Upstream Providers (parent cards), as well as the total Customers associated to the card (set under Customer > Routing), which will be impacted by any changes made to this card. Click on the Provider ID or Customer Name to view the configuration. 

**ID**: A system identifier that acts as a placeholder and prevents confusion between similarly named items. 

**Rule Count**: The number of rows in the Rate Card.

**Compile**: Displays which Customer Rate Cards are in sync with the Provider Rate Cards. 

&emsp; ![alt text][compile1] 
&emsp;Stale (needs to be compiled)

&emsp; ![alt text][compile2] 
&emsp;In sync


!!! tip "Compile Example"
    Provider updates their rates and the customer uploads the new Provider Rate Card into ConnexCS, which increments the revision. All associated customer cards will be out of sync (orange pause icon). To correct this, select all stale cards, then click **`Bulk Build`** to update the new rates and routes. 


## Customer Rate Card Management 

**Bulk Build**: Select multiple cards to perform build. This is typically done after Properties and Profit are setup, or when you need to Compile multiple customers after a rate change. 

**Bulk Edit**: Edit multiple cards at a time for some Properties settings. 

**Delete**: Delete a customer rate card by selecting its name from the list and then clicking the trash bin icon. 


## Add new Customer Rate Card
Once created, there are several options to complete the card. 

1. Click the **`+`** button. 
3. Complete desired fields. (For details, see [**Customer Rate Card Settings**](https://docs.connexcs.com/customer-ratecard/#customer-rate-card-settings) below.)
4. Click **`Save`**.
5. In the new card, select **Profits** then click the **`+`** button. (For details, see [**Profits**](https://docs.connexcs.com/customer-ratecard/#functions) under Functions below).

**Option 1: Build from Provider Card**
This is the preferred method and requires that a Provider Rate Card was selected in Properties > Basic. Click the **`Build`** button and confirm.  A notification will tell you if the build was successful. You may need to refresh the card to see the new settings. 

**Option 2: Manual Add**
To manually add Rate Card rows, select **`Create Draft`** then add/modify/delete desired rows from the browser. 

**Option 2: Bulk Upload**
The final method for configuring a Customer Rate Card is to import/upload it:

1. Click **Bulk Upload** > **Upload**.
2. Select the file and click `Open`.
4. Right-click the first row of data (not headers) and select `Set Start Row`.
5. Right-click and map the columns. It is important to map all fields based on the Rate Card columns. For example:
    * Col 1 - Prefix
    * Col 2 - Name
    * Col 3 - Cost
6. Select **Upload to Sever** and confirm
7. Select **Yes** to make this active immediately 
7. Once complete, the new card will display with the Provider rules and the Profit rules.
   
    
## Customer Rate Card settings

### Main tab

**Email**: This feature allows providers to email rate cards to customers as an attachment. It is a convenient way to send customers official information relevant to their accounts. Click the **`Email`** button, enter the email address and click **`Send`**.

**Audit Log** Review any changes made to the card settings. 

#### Functions

&emsp;&emsp; ![alt text][prc-func] 

+ **Revision**: List all versions of changes on the card. 
+ **Create Draft**: Create a blank revision to manually add all prefixes and rows. This will only contain rows added manually, none of the previous revision is retained. 
+ **Edit Revision**: Make inline edits to the current revision. Upon `Save`, you can select to make this new revision Active. This will keep previous revision plus and changes that were made. 
+ **Delete Revision**: Select a revision to delete. 
+ **Download**: Download a CSV file of the Rate Card.

&emsp; ![alt text][crc-func] 

* **Parent Cards** are the Provider Rate Cards associated to this card.
* **Customers** lists the specific Customers using this card.
* **Profits** allows you to configure profit rules. This is most useful on cards with a high number of rules.

&emsp; ![alt text][profit] 

*click each tab for configuration details*

=== "Basic"
    
    * **Match**: Enter the prefix to match, either as a Regular Expression or a standard prefix (numeric only, typically an international country code, not a provider or customer tech prefix). Adding an up arrow `^` on the prefix draws all associated prefixes from the provider card. For example, if you enter '49, it will include '491', '492', '4912345', and so on.
    * **Profit Type**: Select how to add profit:
        * Absolute - actual value charged
        * Relative - amount entered is added to the cost from the carrier
        * Percent - cost from the carrier multiplied by this percent
    + **Apply To** - Setup rules to govern how Profit is applied to different types of calls
    * **Status** - Use Blocked, here or after importing a Carrier Rate Card, to disable specific prefixes. 


=== "Config"

    + **Prefix Set**: Select Prefix Sets (configured [**here**](https://docs.connexcs.com/setup/advanced/prefix-set/) to simplify the Profit configuration. 
    * When **MCD (Minimum Call Duration)**, **Pulse**, or **Rounding** are disabled, that setting will select the worst case scenario as defined by the carrier. 
    * **Name**: You may choose to add a name to identify the Profit rule 
    * **Connect Cost**: one-time fee for connecting the call. 

!!! note "Profit Type"
    Using Absolute and Relative can be useful, especially when dealing with large cards and your providers prices change; a single click is all that is needed to regenerate the customer rate cards.

### Revisions tab
The Revision tab displays up to 8 most recent changes made to a rate card. The two most recent revisions will be available as Active or Inactive, the rest will be in Archive state. 

To change Revision status:

+ Click `Archive` next to the Revision to send it to the Archive. This may take a few minutes. 
+ Click `Inactive` to make that version Active. This may take a few minutes. 
+ Use the "Date Live" function by the Revision to set a future date to make the revision Active. 

### Properties tab

#### Basic

+ **Name (Private)**: The name of the card, this will only be seen within the ConnexCS Control Panel (not visible to end-customers). 
+ **Rate Cards**: Associate the customer to one or more Provider Cards, this will define how customer routing is built as well as how customer prices are derived.
* **Rate Compacts**: Select how to calculate cost using the Minimum, Maximum, or Average cost, based on the routing and cost rules from the Rate Cards selected on the right. This is applied after **Collapse Using**.
+ **Currency**: The card will be billed with this currency. 

#### Config

* **Name (Public)**: (Optional) Allows you to display an alias or pseudonym for the carrier. 
* **Collapse Using**: Select how you want to merge rate data from the carrier cards.
* **Force Presentation**: Determine how many rows to display for rates, this is visible to the customer: 

|Option|Example|Usage|# of Rows in table|
| --- | --- | --- |---|
|Single Rate|0.0007|Usually a UK Landline|1|
|IntER/IntRA|1 (NPANXX)|Refers to Interstate and Intrastate calling for USA dialing|2|
|IntER/IntRA/Indeterminate|1 (NPANXX)|Indeterminate indicates that call is between a USA number and another country|3|

* **Dialing**: Select whether to bill based on the carrier of the Dialed Number or using an LRN Database (US only). The LRN (Local Routing Number) identifies the switch for a number and is used to determine billing for a call.  When a number is ported from one provider to another, the billing may change based on the new carrier. An LRN dip will correct any pricing discrepancies between the original and new carriers. This helps to reduce billing costs. If the customer wants to do single rates they may not want to do the LRN dip. 

!!! tip "ConnexCS LRN Database"
    ConnexCS maintains an inhouse LRN database. This ensures a quick response time and the rates are update daily. There are no charges associated with using this service, so customers have unlimited dips into the database. 

+ **Strategy**: Manage how calls are distributed across Carriers when a Customer Card is associate with multiple Provider Cards. 

!!! info "Routing Strategy"
    The Strategy selected in the Customer Card will be overwritten by the global Routing Strategy. For description of each Strategy as well as configuration for a comprehensive Routing Strategy, see [**Routing Strategy**](https://docs.connexcs.com/routing-strategy/) . 

#### Advanced

* **Direction**: Configure the card as Termination (calling out to PSTN) or Origination (DID numbers receiving calls from PSTN). Termination is most common. 
* **Billing Precision** - Round billing on a card to the specified decimal point (typically set to 4). 
* **Rounding Method**: Specify how to handle the n+1 digit (e.g if your card is billed to 4 decimal places, this cares about the 5th digit). For our example: 0.1234**5** (rounded to 4 decimal places):
 
   |Method|Explanation|
   | --- | --- |
   |Up|Rounded up regardless of n+1 digit (0.1235)|
   |Down|Rounded down regardless of n+1 digit (0.1234)|
   |Half-Up|Values 5-9 are rounded up (0.1235)|
   |Half-Down|Values 0-5 are rounded down (0.1234)|

* **Duration Rounding**: The same rounding options but for the call duration.
* **Public Options**: Choose what can be done with the card information: viewed via HTML (on a web page), download CSV (a spreadsheet), and whether to list the rate card in the customer portal (customer can view cards not currently on their account and select them for use). (Note: API Querying is no longer available.)
* **Dynamic Routing**: Cards that were created manually (added via upload or edited in-browser) have the option to use Dynamic Routing to select routes for the card, essentially changing the routing without creating new cards. Customer Cards that were generated from the Provider card use predetermined LCR (Least Cost Routing) based on the Parent card.
* **Default RTP**: If set, and the customer adds the route themselves, then this will be used. Otherwise, this is an unused setting. 
+ **Contract**: Specify a default contract that applies to a specific rate card. This only applies if the customer selects the rate card from the Customer Portal, not when it is added using the Dashboard. 
* **Manual Ordering** - Allow granular ordering of specific prefixes and which carriers to use. See [**Manual Ordering**](https://docs.connexcs.com/customer-ratecard/#manual-ordering-tab) below for details. 
* **Reseller**: Select Resellers who will be associated with this card. When the Reseller logs into the Portal, they see the settings from the perspective of a Provider Card, even though they are configured as a Customer Card. 

#### Notes
**Notes (Private)**: Only visible in the ConnexCS Control Panel (not visible to the Customer).

**Notes (Public)**: These are visible to the Customer in their Portal.

### Manual Ordering tab
This tab will only be available if "Manual Ordering" has been enabled under Properties > Advanced. For each Prefix you can manually order the Provider Rate Cards for a high degree of control over how calls are routed. 


    


[compile1]: /card/img/compile1.png "Paused"
[compile2]: /card/img/compile2.png "Synced"

[prc-func]: /card/img/prc-func.png "Functions"
[crc-func]: /card/img/crc-func.png "Customer Functions"

[profit]: /card/img/profit.png "Edit Profits"


