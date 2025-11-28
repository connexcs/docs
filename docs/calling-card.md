# Pinless Calling Cards

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Customer Services / Calling Card Systems<br>
<strong>Audience</strong>: Administrators, Engineers, Services Team<br>
<strong>Difficulty</strong>: Intermediate<br>
<strong>Time Required</strong>: Approximately 30–40 minutes<br>
<strong>Prerequisites</strong>: Active ConnexCS account with access to the Apps Platform (Script Forge) and DID routing setup<br>
<strong>Related Topics</strong>: <a href="https://docs.connexcs.com/feature-list/#calling-cards">Calling Card Feature List</a>, <a href="https://docs.connexcs.com/apps/architecture/scriptforge/">ScriptForge Programming Guide</a><br>
<strong>Next Steps</strong>: After implementing the pinless calling-card flow, review DID configuration for customer access and integrate reporting via the Customer Stats module for usage tracking.<br>

</details>

A **Pinless Calling Card** system allows the user to dial in through a Direct Inward Dial (DID).

Verification depends on their CLI (Caller Line Identification), so a Personal Identification Number (PIN) isn't required. The caller is then presented with an Interactive Voice Response (IVR) message requesting the destination number, and the call is then routed out through their account.

While not a native feature of ConnexCS, you can add this functionality to your account using the following 3 steps.

**Step 1: [Create a new script in ScriptForge](https://docs.connexcs.com/apps/architecture/script/#build-script) with the following code**

```javascript linenums="1"
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
    This script will look at the CLI of the incoming call and associate it with any accounts that have this CLI in the allow list.

**Step 2: Create a Class 5 App**

1. Navigate to **Class 5 :material-menu-right: Apps**, and then click :material-plus:.
2. Name the App, then set **Destination** to `calling_card`.
3. Drag IVR to the top slot on the right, and then click the small grey arrow on the far right to edit (see image below).
    ![alt text][pinless]

4. Set the File to "IVR > ivr-please."
5. Enter the phone number Min (11) and Max (14).
6. Result Variable: `ivr_destination`.
7. Click **`Save`**.
8. Drag Destination to the second slot on the right, then edit.
9. Select External and enter: `${ivr_destination}`.
10. **`Save`** the Destination.
11. **`Save`** the App.

**Step 3: Setup a DID in the system**

1. [**Create a new DID**](https://docs.connexcs.com/customer/did/#configure-direct-inward-call).
2. Set the new ScriptForge to the new App .
3. Set the destination to `calling_card`.
4. Verify if the origination CLI in the allow list is in the customer account.

Your customer should now be able to dial in, enter their number, and the customer will be able to place the call.

!!! note "Unrestricted dialing"
    If the customer requires unrestricted dialing for non-calling card calls, you can still add `^.*` as a CLI option.

[pinless]: /misc/img/pinless.png "Pinless Setup" style="border: 2px solid #4472C4; border-radius: 8px;"
