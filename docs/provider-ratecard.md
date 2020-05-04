# Rate Card Management

Rate Cards are an important ConnexCS feature as they are how most information is organized. This page will guide you through managing provider rate cards.  The Rate Card Management screen, found under **Management** > **Rate Card**, contains some at-a-glance information about each card.  The actual rate cards are viewed by clicking on the providers name.  The columns are:

* **Name** - The name of the provider.  Click this link to see the provider's individual rate card and management options.
* **Direction** - Choose between *Termination* or *Origination*.  Change this setting in the **Advanced** section.
* **Company** - The company associated with the rate card. 
* **Currency** - The currency relative to the provider's region, between USD, EUR, and GBP.
* **`?`** - Pressing the **`?`** button next to any rate card displays an overview of that provider.  It includes the name, the card ID, and any dependent children rate cards that could be affected by changes.
* **ID** - The rate card's ID is a system identifier that acts as a placeholder and prevents confusion between similarly named items.


## Add New Rate Card
To add a new rate card to the list:

1. Click **Management** > **Rate Card**.

    ![alt text][provider-card-1] 

2. Click the blue **`+`** button to the top-right of the list.

    ![alt text][provider-card-2] 
  
3. Enter a unique name for the rate card.
4. Select a carrier from the dropdown list.
5. Select the relevant currency for the customer's region.
6. Click **`Save`**.
 
   ![alt text][provider-card-3] 

## Upload a Rate Card
To upload a rate card from an external file:

1. Click **Upload**, then browse to the rate car file on your computer

    ![alt text][provider-card-4]

8. Map the rate card fields against the system fields.

    ![alt text][provider-card-5]

9. You will be notified with a popup when the import completes.
 
## Revision Tab 

The revision tab lets us see the previous changes that have been made to a rate card, for example the previous Rule count, Presentation, Currency, date created, Billing.

## Advanced Rate Card Settings

The **Advanced** tab, found in a rate card under **Properties** > **Advanced**, is used to manipulate several advanced features:

* **Public Options** - Display or hide provider information externally by togging check boxes on and off.  You allow the card to be viewed via HTML (on a web page), CSV (a spreadsheet), an API (an external application), and whether to list the rate card in the domain portal.
* **CLI Restrict** - Enable Call Line Identification (CLI) restriction(s) by entering restricted numbers in the text box.
* **Delayed Bye** - On termination rate cards, the Delayed Bye feature adds the specified duration (in seconds) to the end of each call. Providers may use this in situations where a commercial contract specifies a minimum duration call. This feature should only be used along with full disclosure to both the customer and carrier.

[provider-card-1]: /card/img/115.png "provider-card-1"
[provider-card-2]: /card/img/116.png "provider-card-2"
[provider-card-3]: /card/img/117.png "provider-card-3"
[provider-card-4]: /card/img/118.png "provider-card-4"
[provider-card-5]: /card/img/119.png "provider-card-5"
[provider-card-6]: /card/img/120.png "provider-card-6"
