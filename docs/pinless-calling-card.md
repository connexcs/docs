# Pinless Calling Cards

A **Pinless Calling Card** system allows the user to dial in through a DID. Verification is based on their CLI so no PIN is required. The caller is then presented with an IVR message requesting the destination number, and the call is then routed out through their account.

This is not a native feature of ConnexCS, but with 3 simple steps it you can add this functionality to your account.

#### Step 1: [Create a new script in ScriptForge](https://docs.connexcs.com/developers/scriptforge/#creating-a-new-script) with following code: 
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

#### Step 2: Create a Class 5 App in the system call 

1. Navigate to Class 5 > Apps and click the **`+`** button
2. Set the destination as `calling_card`.
3. Drag IVR to the first slot
3. Set the File to "IVR > ivr-please" 
3. Enter the phone number (Min: 11, Max 14)
3. Result Variable: `ivr_destination`
4. Drag Destination to the second slot, set it to external and enter the following: `${ivr_destination}`

#### Step 3: Create a DID in the system
1. Set the new ScriptForge to the new App 
1. Set the destination to `calling_card`
6. Verify the origination CLI is whitelisted in the customer account.
7. Your customer should be able to dial in, enter their number and the call to be sent out.

!!! note "Unrestricted dialing"
    If the customer requires unrestricted dialing for non-calling card calls, you can still add `^.*` as a CLI option.
