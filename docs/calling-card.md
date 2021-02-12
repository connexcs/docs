# Pinless Calling Cards

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

1. Navigate to **Class 5 :material-menu-right: Apps** and click the :material-plus: button.
2. Name the App then set **Destination** as `calling_card`.
3. Drag IVR to the top slot on the right, then edit by clicking the small grey arrow on the far right (see image below).

    ![alt text][pinless]
    
3. Set the File to "IVR > ivr-please".
3. Enter the phone number Min (11) and Max (14).
3. Result Variable: `ivr_destination`.
3. Click **`Save`**.
4. Drag Destination to the second slot on the right, then edit.
4. Select External and enter: `${ivr_destination}`.
4. **`Save`** the Destination.
4. **`Save`** the App.

**Step 3: Setup a DID in the system**

1. [**Create a new DID**](https://docs.connexcs.com/did/#add-a-did).
1. Set the new ScriptForge to the new App .
2. Set the destination to `calling_card`.
3. Verify the origination CLI is whitelisted in the customer account.

Your customer should now be able to dial in, enter their number, and the call will be sent out.

!!! note "Unrestricted dialing"
    If the customer requires unrestricted dialing for non-calling card calls, you can still add `^.*` as a CLI option.

[pinless]: /misc/img/pinless.png "Pinless Setup"



