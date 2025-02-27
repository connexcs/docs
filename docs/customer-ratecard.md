# Customer Rate Card

**Management :material-menu-right: Customer Rate Cards**

## Overview

**Customer Rate Cards** let you manage the rates for customers, edit customer profiles, and view important information.

Customer Rate Cards are designed to streamline the process of managing rates for customers. These cards can be generated from provider rate cards, allowing for efficient rate management and minimizing manual errors.

!!! tip
    Before configuring, we suggest you review [**Rate Card Overview**](https://docs.connexcs.com/rate-card-building/) then [**Rate Card Setup**](https://docs.connexcs.com/video-guide/#rate-card-setup) in the ConnexCS Video Guide.

!!! note "Important Note"
    You will also want to have at least one [**Provider Rate Card**](https://docs.connexcs.com/provider-ratecard/) configured.

### Rate Definition Properties

These fields define individual rates within the rate card.

+ **Destination Prefix**: The numerical prefix used to match destinations (e.g., 44 for the UK).

+ **Rate per Minute**: The cost applied for each minute of a call.

+ **Billing Interval**: Defines how calls are charged, typically in seconds (e.g., 30/6 means the first 30 seconds are charged fully, followed by 6-second increments).

+ **Min Charge Duration**: The minimum call duration before charging begins.

+ **Connection Charge**: A one-time fee applied when a call is connected.

+ **Grace Period**: A short duration (e.g., 2 seconds) before billing starts.

## Key Features

+ **Automatic Rate Generation**: Customer rate cards can be built from provider rate cards.

+ **Manual and Automated Control**: Users can choose between auto-generated or manually edited cards.

+ **Customizable Naming**: Allows internal naming for clarity while presenting a different name to customers.

+ **Subscription-Based Usage**: Customers subscribe to a rate card when it's assigned to their route. This is done via the customer section by adding the customer card to a route.

+ **Dynamic Routing Compatibility**: Allows for flexible and optimized routing.

+ **Flexible Pricing Structure**: Assign different rates based on customer agreements.

+ **Automated Billing Accuracy**: Ensures correct pricing without manual intervention.

+ **Customizable Rules**: Set up rate-specific properties tailored to business needs.

+ **Real-Time Updates**: Modify and apply changes dynamically without service disruption.

+ **Enhanced Revenue Management**: Optimize pricing strategies for different customers.

!!! Note "Multiple Carrier Rate Cards"
    + A single customer rate card can have multiple carrier rate cards.
    + The system allows the selection of different strategies:
      + Random
      + Round Robin
      + Reverse RCR
      + LCR (Least Cost Routing)
    + The default strategy is overridden if a routing strategy is set.

## Benefits

+ **Improved Efficiency**: Automating rate card generation reduces manual effort and errors.
+ **Enhanced Customization**: Manual overrides and dynamic routing provide flexibility.
+ **Reseller-Friendly**: Ensures sensitive provider details are not exposed to resellers.
+ **Optimized Routing**: Supports various routing strategies for cost and quality optimization.
+ **Contract Compliance**: Ensures legal and business compliance through contract enforcement.

## Customer Rate Card Functions

+ `+`: Add a new customer card.

+ **Bulk Build**: Select multiple cards to perform the build. This is usually done after you've set up your properties and profit, or when you need to gather several customers after a rate change.

+ **Bulk Edit**: Edit multiple cards at a time for some Properties settings.

+ **Delete**: Delete a customer rate card by selecting its name from the list and then clicking the trash bin icon.

## Overview

+ **Name**: Click the name of the provider to see an individual rate card and management options.
     If a Rate Card name shows a yellow warning or red alert, these will show details about the card. It may be stale or have some sort of error.

+ **Force Presentation**: Find the number of rows to display for rates; this is visible to the customer:

|Option|Example|Usage|# of Rows in table|
| --- | --- | --- |---|
|**Single Rate**|0.0007|Usually a UK Landline|1|
|**IntER/IntRA**|1 (NPANXX)|Refers to Interstate and Intrastate calling for USA dialing|2|
|**IntER/IntRA/Indeterminate**|1 (NPANXX)|Indeterminate indicates that call is between a USA number and another country|3|

+ **Direction**: Cards are either *Termination* (calling out to PSTN) or *Origination* (DID numbers receiving calls from the PSTN). Termination is the most common card used by ConnexCS customers.

+ **Currency**: The currency for the provider's region (typically USD, EUR, or GBP).

+ **?**: Lists the upstream providers (parent cards) as well as the total number of customers associated with the card (as specified in Customer: material-menu-right: routing). Any changes made to this card will impact the customers associated with the card.

    Click on the Provider ID or Customer Name to view the configuration.

+ **ID**: A system identifier that acts as a placeholder and prevents confusion between similarly named items.

+ **Rule Count**: The number of rows in the Rate Card.

+ **Compile**: Displays the upstream provider cards associated with the customer card.
    + Shows total customers using a specific card.
    + Allows users to track which customers are subscribed to a particular card.

&emsp; ![alt text][compile1] Stale (needs compilation)

&emsp; ![alt text][compile2] In sync

!!! tip "Reasons a card marked as Stale"
    You can refer to a Rate Card as **Stale** when the information presented isn't the same as the live / active revision.

    Some common examples of this are when the customer generates Customer cards from Carrier cards (preferred method) OR when they revise a carrier card. 
    
    In both cases, cards are marked as Stale and require compilation.

!!! tip "Compile Example"
    Provider updates their rates and the customer uploads the new Provider Rate Card into ConnexCS, which increments the revision.

    All associated customer cards will be out of sync (orange pause icon). To correct this, select all stale cards, then click **`Bulk Build`** to update the new rates and routes.

## Create a Customer Rate Card

Once created, there are several options to complete the card.

1. Click :material-plus:.
2. Complete the required fields. (For details, see [**Configure Customer Rate Card**](https://docs.connexcs.com/customer-ratecard/#create-a-customer-rate-card) below.)
3. Click **`Save`**.
4. In the new card, select **Profits** and then click :material-plus:. (For details, see [**Profits**](https://docs.connexcs.com/customer-ratecard/#customer-rate-card-functions) under Functions below).

**Option 1: Build from Provider Card**
This is the preferred method and requires you to select a Provider Rate Card in Properties > Basic.

Click **`Build`** and confirm.

A notification will tell you if the build was successful. You may need to refresh the card to see the new settings.

**Option 2: Manual Add**
To manually add Rate Card rows, select **`Create Draft`** and then add / modify / delete required rows from the browser.

**Option 3: Bulk Upload**
The final method for configuring a Customer Rate Card is to import/upload it:

1. Click **Bulk Upload** > **Upload**.
2. Select the file and click `Open`.
3. Right-click the first row of data (not headers) and select `Set Start Row`.
4. Right-click and map the columns. It's important to map all fields based on the Rate Card columns. For example:
    + Col 1 - Prefix
    + Col 2 - Name
    + Col 3 - Cost
5. Select **Upload to Sever** and confirm.
6. Select **Yes** to make this active instantly.
7. Once complete, the new card will display the Provider rules and the Profit rules.

!!! Info "Generated vs. Manual Cards"
    + **Generated Cards**: Created automatically from provider cards, ensuring the latest rate updates.
    + **Manual Cards**: Created or edited manually, allowing for custom rate configurations.

## Configure the Customer Rate Card

### Main tab

**Bulk Upload**: [Click here](https://docs.connexcs.com/customer-ratecard/#create-a-customer-rate-card) and see "Option 3".

**Email**: This feature allows providers to email rate cards to customers as an attachment.

It's a convenient way to send customers official information relevant to their accounts.

Click **`Email`**, enter the email address and click **`Send`**.

**Clone Card**: Create an exact copy of an existing Rate Card.

**Audit Log**: Review any changes made to the card settings.

**Functions**:
&emsp;![alt text][prc-func]

+ **Revision**: List all versions of changes on the card.
+ **Create Draft**: Create a blank revision to manually add all prefixes and rows. This will only contain rows added manually and doesn't hold any previous revisions.
+ **Edit Revision**: Make inline edits to the current revision. Upon `Save`, you can select to make this new revision Active. This keeps the previous revision and the changes made.
+ **Delete Revision**: Select a revision to delete.
+ **Download**: Download a CSV file of the Rate Card.

    ![alt text][crc-func]

+ **Parent Cards** are the Provider Rate Cards associated to this card.
+ **Customers** lists the specific Customers using this card.
+ **Profits** lets you configure profit rules. This is most useful on cards with a high number of rules.

    ![alt text][profit]

**Click each tab for configuration details**

=== "Basic"

    * **Match**: Enter the prefix to match, either as a Regular Expression or a standard prefix (numeric only, typically an international country code, not a provider or customer tech prefix). Adding an up arrow `^` on the prefix draws all associated prefixes from the provider card. For example, if you enter '49, it will include '491', '492', '4912345', and so on.
    + **Profit Type**: Select how to add profit:
        
        :material-menu-right: `Absolute`- actual value charged
        
        :material-menu-right: `Relative`- amount entered is added to the cost from the carrier
        
        :material-menu-right: `Percent`- cost from the carrier multiplied by this percent
        
    + **Apply To**: Setup rules to govern how Profit is applied to different types of calls.
    + **Status**: Use Blocked, here or after importing a Carrier Rate Card, to disable specific prefixes. 

=== "Config"

    + **Prefix Set**: Select Prefix Sets (check [**here**](https://docs.connexcs.com/setup/advanced/prefix-set/) to simplify the Profit configuration). 
    + When you disable **MCD (Minimum Call Duration)**, **Pulse**, or **Rounding**, that setting will select the worst case scenario as defined by the carrier. 
    + **Name**: You may choose to add a name to identify the Profit rule 
    + **Connect Cost**: one-time fee for connecting the call. 

!!! note "Profit Type"
    Using **Absolute** and **Relative** can be useful, specially when dealing with large cards and your providers prices change; with a single click you can regenerate the customer rate cards.

### Revisions tab

The Revision tab displays up to 8 most recent changes made to a rate card. The two most recent revisions are available as Active or Inactive, the rest will be in Archive state.

To change Revision status:

+ Click `Archive` next to the Revision to send it to the Archive. This may take some minutes.
+ To make that version Active, click `Inactive`. This may take some minutes.
+ Use the **Date Live** function by the Revision to set a future date to make the revision Active.

### Properties tab

#### Basic

+ **Name (Private)**: You can see the name of the card, only within the ConnexCS Control Panel (not visible to end-customers).
+ **Rate Cards**: Associate the customer with one or more Provider Cards. This will define the build of customer routing and the process of extracting of customer prices.
+ **Rate Compacts**: Select how to calculate cost using the Minimum, Maximum, or Average cost, based on the routing and cost rules from the Rate Cards selected on the right. It's applicable after Collapse Using.
+ **Currency**:  Card billing done using this currency.

#### Config

+ **Name (Public)**: (Optional) Allows you to display an alias or pseudonym for the carrier.
+ **Collapse Using**: Select how you want to merge rate data from the carrier cards.
+ **Force Presentation**: Find the number of rows to display for rates; this is visible to the customer:

|Option|Example|Usage|# of Rows in table|
| --- | --- | --- |---|
|**Single Rate**|0.0007|Usually a UK Landline|1|
|**IntER/IntRA**|1 (NPANXX)|Refers to Interstate and Intrastate calling for USA dialing|2|
|**IntER/IntRA/Indeterminate**|1 (NPANXX)|Indeterminate indicates that call is between a USA number and another country|3|

+ **Dialing**: Select whether to bill based on the carrier of the Dialed Number or using an LRN Database (US-only).

    The LRN (Local Routing Number) identifies the switch for a number and used to determine billing for a call.

    When a customer ports the number from one provider to another, the billing may change based on the new carrier. An LRN dip will correct any pricing discrepancies between the original and new carriers. This helps to reduce billing costs.

    If the customer wants to do single rates, they may not want to do the LRN dip.

!!! tip "ConnexCS LRN Database"
    ConnexCS maintains an in-house LRN database. This ensures a quick response time and updates the rates on daily basis.

    No charges for using this service, so customers have unlimited dips into the database.

+ **Strategy**: Manage the distribution of calls among Carriers when a Customer Card has an association with multiple Provider Cards.

!!! info "Routing Strategy"
    The Global Routing strategy overwrites the Strategy selected in the customer card.

    For a description of each Strategy and configuration for a comprehensive Routing Strategy, see [**Routing Strategy**](https://docs.connexcs.com/routing-strategy/).

#### Advanced

+ **Direction**: Configure the card to be either Termination (calling out to the PSTN) or Origination (DID numbers receiving PSTN calls). Termination is the most common card.
+ **Billing Precision** - Round billing on a card to the specified decimal point (typically set to 4).
+ **Rounding Method**: Specify how to handle the n+1 digit (For example, if your card bill has 4 decimal places, this cares about the 5th digit). For our example, 0.12345 (rounded to 4 decimal places):

    |Method|Explanation|
    | --- | --- |
    |**Up**|Rounded up regardless of n+1 digit (0.1235)|
    |**Down**|Rounded down regardless of n+1 digit (0.1234)|
    |**Half-Up**|Values 5 through 9; rounded up (0.1235)|
    |**Half-Down**|Values 0 through 5; rounded down (0.1234)|

+ **Duration Rounding**: The same rounding options, but for the call duration.
+ **Public Options**: Choose what you can do with the card information: view it via HTML (on a web page), download CSV (a spreadsheet), and whether to list the rate card in the customer portal (customers can view cards not presently on their account and select them for use). (**Note: API Querying is no longer available.**)
+ **Dynamic Routing**: Manually created cards (added via upload or edited in-browser) have the option to use Dynamic Routing to select routes for the card, essentially changing the routing without creating new cards.
    + Used when an automatically generated card is not preferred.
    + Allows users to add extra routes without modifying the existing rate card.
    + Ensures flexible routing by enabling on-the-fly adjustments without regenerating cards.

   Customer Cards generated from the Provider card use predetermined LCR (Least Cost Routing) based on the Parent card.

+ **Default RTP**: If set and the customer adds the route themselves, then it deploys the Default RTP. Otherwise, this is an unused setting.
  
+ **Contract**: Specify a default contract that applies to a specific rate card. This only applies if the customer selects the rate card from the Customer Portal, not when it's added using the Dashboard. 
    + Contracts can be linked to rate cards for customer approval.
    + If a customer adds a route via the customer portal, they must approve the contract before activation.
    + If an administrator adds a route manually, no contract approval is required.

!!! Warning "If you don't approve the contract, the rate card will not work that specific route"

+ **Manual Ordering**: Allow granular ordering of specific prefixes and which carriers to use. See [**Manual Ordering**](https://docs.connexcs.com/customer-ratecard/#manual-ordering-tab) below for details.
    + Allows precise rule-based manual control over route selection.
    + Rarely used but provides in-depth customization for advanced users.

+ **Reseller**: Select Resellers to associate with this card. When the Reseller logs into the Portal, they see the settings from the perspective of a Provider Card, even though they're configured as a Customer Card.
  + In a reseller model, the provider and customer cards are bifurcated.
  + Resellers do not see actual provider details; they only see the cards assigned to them.
  + The provider card in the reseller’s account behaves as a customer card.

#### Notes

+ **Notes (Private)**: Only visible in the ConnexCS Control Panel (not visible to the Customer).
+ **Notes (Public)**: These are visible to the Customer in their Portal.

### Manual Ordering Tab

This tab is only available if you enable "Manual Ordering" in **Properties :material-menu-right: Advanced**.

For each Prefix you can manually order the Provider Rate Cards for a high degree of control over the routing of calls.

[compile1]: /card/img/compile1.png "Paused"
[compile2]: /card/img/compile2.png "Synced"

[prc-func]: /card/img/prc-func.png "Functions"
[crc-func]: /card/img/crc-func.png "Customer Functions"

[profit]: /card/img/profit.png "Edit Profits"

!!! tip "**Rate Compact**, **Collapse Using**, and **Force Presentation**.
    + These properties relate to profit calculation and rate structure presentation.
    + Ensures rate structure efficiency while providing profit visibility.