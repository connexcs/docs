# Rate Card Management

Rate Cards are an important ConnexCS feature, as they are the means by which most information is organized. This page will guide you through managing provider rate cards.  The Rate Card Management screen is found under **Management** > **Rate Card**. 

You will be presented with a management screen that contains some at-a-glace information about each card.  The actual rate cards are viewds by clicking on the providers name.  The columns are:
* **Name**- The name of the provider.  Click this link to see the provider's individual rate card and management options.
* **Direction**- Choose between *Termination* or *Origination*.  Change this setting in the **Advanced** section.
* **Company** - The company associated with the rate card. 
* **Currency** - The currency relative to the provider's region, between USD, EUR, and GBP.
* **`?`** - Pressing the **`?`** button next to any rate card with give an information overview of that provider.  It includes the name, the card ID, and any dependant children rate cards that could be affected by changes.
* **ID** - The rate card's ID, a system identifier that acts as a placeholder and prevents confusion between similarly-named items.
* **Rule Count** - 

## Add New Rate Card
To add a new rate card to the list:

1. Click **Management** > **Rate Card**.

   a![alt text][provider-card-1] 

2. Click the blue **`+`** button to the top-right of the list.

  ![alt text][provider-card-2] 
  
3. Enter a unique name for the rate card.
4. Select a carrier from the dropdown list.
5. Select the relevant currency for the customer's region.
6. Click **`Save`**.
 
   ![alt text][provider-card-3] 

# Upload a Rate Card
To upload a rate card from an external file:
1. Click **Upload**, then browse your computer and select the rate card file

   ![alt text][provider-card-4]

8. Map the rate card fields against the system fields.

   ![alt text][provider-card-5]

9. You will be notified with a popup when the import completes.
 
## Revision Tab 

The revision tab lets us see the previous changes that have been made to a rate card, for example the previous Rule count, Presentation, Currency, date created, Billing.

# Advanced Rate Card Settings

To find the **Advanced** tab, select a rate card.  In the rate card's screen, click **Properties** > **Advanced**. The advanced tab is used to manipulate two options:

* **Public Options** - Decide which ways information about the provider can be shared externally by togging check boxes on and off.  You allow the card to be viewed via HTML (on a web page), CSV (a spreadsheet), an API (an external application), and whether or not to list the rate card in the domain portal.
* **CLI Restrict** - Enable Call Line Identification (CLI) restriction(s) by entering restricted numbers in the text box.

[provider-card-1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/115.png "provider-card-1"
[provider-card-2]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/116.png "provider-card-2"
[provider-card-3]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/117.png "provider-card-3"
[provider-card-4]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/118.png "provider-card-4"
[provider-card-5]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/119.png "provider-card-5"
[provider-card-6]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/120.png "provider-card-6"
