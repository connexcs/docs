# Provider Rate Cards

**Rate Cards** are an important ConnexCS feature as they are how most information is organized. The Rate Card Management screen is found under **Management** > **Rate Card**

![alt text][provider-card-1] 

The Provider Rate Card screen display at-a-glance information for each card:  

* **Name** - The name of the provider.  Click this link to see the provider's individual rate card and management options.
* **Direction** - Choose between *Termination* or *Origination*.  Change this setting in the **Advanced** section.
* **Company** - The company associated with the rate card. 
* **Currency** - The currency relative to the provider's region, between USD, EUR, and GBP.
* **`?`** - Pressing the **`?`** button next to any rate card displays an overview of that provider.  It includes the name, the card ID, and any dependent children rate cards that could be affected by changes.
* **ID** - The rate card's ID is a system identifier that acts as a placeholder and prevents confusion between similarly named items.

## Add New Rate Cards
New Provider Rate Cards may be added manually or by uploading an existing file. 

1. Manual additions: Add a new rate card to an existing carrier by selecting the blue **`+`** button to the top-right of the list, select the appropriate carrier, and set card details manually. 
2. Bulk Upload: From within the carrier, select **Upload**, select the appropriate file, then map the rate card fields against the system fields. You will be notified with a popup when the import completes.

![alt text][provider-card-4] 

## Manage existing Provider Rate Cards

### Dependent Cards
These are Customer cards that use the selected rate card. Changes to the Provider Rate Card will be applied to each dependent rate card. 

### Revision Tab 
The Revision tab displays up to 8 most recent changes made to a rate card (ex: previous Rule count, Presentation, Currency, date created, Billing). The two most recent revisions will be available as Active or Inactive, the rest will be in Archive state. 

1. To activate an earlier version from archive, click Archive next to the Revision. This may take a few minutes. 
2. To make the previous version Active, click Active. This may take a few minutes. 

### Properties tab

Config:

* **Name(Public)** - This optional setting allows you to display an alias or pseudonym for the carrier. 
* **Tech Prefix** - appended to outbound calls
* **Force Presentation options**
|Option|Example|Usage|
|Single Rate|0.0007|Usually a UK Landline|
|IntER/IntRA|1 (NPANXX)|Refers to Interstate and Intrastate calling, typically for USA dialing|
|IntER/IntRA/Indeterminate|1 (NPANXX)|Indeterminate indicates that call is between a USA number and another country|
* **Dialing** - In the US, LRN (Local Routing Number) identifies the switch for a number and is used to determine billing for a call.  When a number is ported from one provider to another, the billing may change based on the new carrier. An LRN dip will correct any pricing discrepancies between the original and new carriers. (ConnexCS owns their own database for this, so the response time is quick.) This helps to reduce billing costs. If the customer wants to do single rates they may not want to do the LRN dip. 

Advanced:

* **Billing Precision** - used to round billing on a card to the specified decimal point. 
* **Public Options** - Display or hide provider information externally by toggling check boxes on and off.  You allow the card to be viewed via HTML (on a web page), CSV (a spreadsheet), an API (an external application), and whether to list the rate card in the domain portal.
* **CLI Restrict** - Enable Call Line Identification (CLI) restriction(s) to only accept valid number formats by entering restricted numbers in the text box using regular expressions.
* **Capped Rate** - Blocks any calls above the set price
* **Delayed Bye** - On termination rate cards, the Delayed Bye feature adds the specified duration (in seconds) to the end of each call. Providers may use this in situations where a commercial contract specifies a minimum duration call. This feature should only be used along with full disclosure to both the customer and carrier.

[provider-card-1]: /card/img/115.png "provider-card-1"
[provider-card-4]: /card/img/118.png "provider-card-4"
