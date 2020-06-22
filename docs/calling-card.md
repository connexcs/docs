# Calling Card

A [calling card](https://en.wikipedia.org/wiki/Telephone_card) allows customers to pre-allocate credit and configuration data based on a unique identification method, such as a PIN code. 


## Mobile Application 
*This is not currently available*

In **ConnexCS**, calling cards are created in bulk, and then assigned with credit and routing configuration.

### Provisioning Strategy
*The ConnexCS Mobile Dialer application is not currently available for download.*

Once a provisioning code is entered, the application requires two pieces of information from our servers:

* Branding information for the providing company.
* Provision information to auto-setup credentials.

### Top-up
In the application, an HTML Browser connects to a pre-setup ConnexCS Portal, where regular payment options are available for top-up.

## Make Your Own
ConnexCS has a full API for users and customers, and softphone can be integrated with ConnexCS API with end user credentials.

From the dashboard, expand the Management tab and look for Calling Card. This module allows lets you manage calling cards.

![alt text][cc-1]

## Managing Calling Cards

The following is a list of available actions in the calling card management screen, with explanations about how they work.

### Generate New Calling Card

To generate a new calling card:

1. From the dashboard, select **Management** > **Calling Cards**.
2. Click the **`+`** button.  Complete the requested customer information:
  * The **Customer** box lists customers available in the current system. Note the red asterisk that indicates it is the only required field to save a calling card.   
  * **Credit** is a way for ConnexCS to pass balances and overage limits in a clean, ID-based operation.
  * The **Count** is how many calling cards can be created at a time.
  * A card's **Status** can be set to available, used, or disabled, and each status has its own assigned colour.
  * Click **`Save`**. 

![alt text][cc-3]

### Edit a Card

To edit an existing calling card:

1. Select the desired row and click **`Edit Selected Rows`**. An entry form opens to allow parameter edits.  Note that **Count** can no longer be changed.
3. Click **`Save`**.
![alt text][cc-5]

### Delete a Card

To delete an existing card, select the desired row and click the trash bin icon.

![alt text][cc-6]

### Refresh List

Provides an updated list of calling cards, ensuring recent changes are presented.  To enact, simply click **`Refresh`**.

![alt text][cc-8]

## Setup Pinless Calling Cards

A **Pinless Calling Card** system allows the user to dial in through a DID. Verification is based on their CLI so a PIN is not required. The caller is then presented with an IVR message requesting the destination number, and the call is then routed out through their account.

While not a native feature of ConnexCS, this funtionality can be added to your account using the following 3 steps.

**Step 1: [Create a new script in ScriptForge](https://docs.connexcs.com/developers/scriptforge/#creating-a-new-script) with following code** 
```javascript
/*
  This function will allow a call that comes in on a "shared", CLI to be sent to the Class 5 system
  impersonating a different customer. The customer will be chosen based upon a pre-entered CLI.
  
  This technique allows the system to then be used for pinless calling card services
*/

const rest = require('cxRest');
const helper = require('cxHelper');

async function main(data){
	var clis = await rest.auth("api@yourdomain.com").get('cli', {cli: data.routing.cli});
	if (!clis.length) throw new Error('401 CLI Not Authorized');
	
	data.routing.egress_routing.forEach(row => {
		var kvCustomerId = row.headers.find(hdr => hdr.key === 'X-Customer-ID')
		kvCustomerId.value = clis[0].company_id

		var kvCxSec = row.headers.find(hdr => hdr.key === 'X-CX-Sec')
		kvCxSec.value = helper.generatePbxSecurityKey(clis[0].company_id, data.routing.server);
	})
	
	return data;
}
```

!!! info 
    This script will look at the CLI of the incoming call and associate it with any accounts which have this CLI whitelisted.

**Step 2: Create a Class 5 App**

1. Navigate to Class 5 > Apps and click the **`+`** button
2. Name the App then set **Destination** as `calling_card`.
3. Drag IVR to the top slot on the right, then edit by clicking the small grey arrow on the far right (see image below)

    ![alt text][pinless]
    
3. Set the File to "IVR > ivr-please".
3. Enter the phone number Min (11) and Max (14)
3. Result Variable: `ivr_destination`
3. Click **`Save`**.
4. Drag Destination to the second slot on the right, then edit
4. Select External and enter: `${ivr_destination}`
4. **`Save`** the Destination
4. **`Save`** the App

**Step 3: Setup a DID in the system**

1. [Create a new DID](https://docs.connexcs.com/did/#add-a-did)
1. Set the new ScriptForge to the new App 
2. Set the destination to `calling_card`
3. Verify the origination CLI is whitelisted in the customer account.

Your customer should now be able to dial in, enter their number, and the call will be sent out.

!!! note "Unrestricted dialing"
    If the customer requires unrestricted dialing for non-calling card calls, you can still add `^.*` as a CLI option.




[cc-1]: /misc/img/193.png "CC-1"
[cc-3]: /misc/img/195.png "CC-3"
[cc-5]: /misc/img/197.png "CC-5"
[cc-6]: /misc/img/198.png "CC-6"
[cc-8]: /misc/img/200.png "CC-8"
[pinless]: /misc/img/pinless.png "Pinless Setup"



