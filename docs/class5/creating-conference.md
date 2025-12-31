# Conference Calls

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Class 5 Services / Conference Bridge Setup<br>
<strong>Audience</strong>: Administrators, Engineers, Support Team<br>
<strong>Difficulty</strong>: Intermediate<br>
<strong>Time Required</strong>: Approximately 30–60 minutes<br>
<strong>Prerequisites</strong>: Active ConnexCS account with Class 5 module access; familiarity with PBX configuration and multi-party audio bridging<br>
<strong>Related Topics</strong>: <a href="https://docs.connexcs.com/class5/apps/">Class 5 Apps & Workflow Builder</a>, <a href="https://docs.connexcs.com/class5/creating-ivr/">Class 5 IVR Setup</a><br>
<strong>Next Steps</strong>: Create a conference room (name, extension, PINs, quality, max members), assign a PBX server, configure routing to allow external callers if needed, and test the bridge including keypad controls<br>

</details>

**Class 5 :material-menu-right: Conference**

Use this feature to allow several callers to communicate with each other over a voice call. Once it's created, callers join the call, and the moderator presides.

For individual customers, navigate to **Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: Class5 :material-menu-right: Conference**

## Create a Conference Call

To create a Conference room, click :material-plus:.

***Field details:***

* Enter a **Name** for the conference call.
* Select the **Customer** from the drop-down list. By default, the Conference is only available to users in this customer.
    Although, routing can be setup to allow other customers to access it.
* Enter the **Extension** for the callers to call (essentially, the dial-in number).
* Configure the Personal Identification Number (**PIN**) and **Moderator PIN** for more security.
* **Quality** sets the amount of bandwidth available per caller in kilohertz (kHz).

    :material-menu-right: `Narrow Band`- 8 kHz (G711)

    :material-menu-right: `Wide Band1`- 16 kHz

    :material-menu-right: `Ultra Wide Band`- 32 kHz

* **Max Members** limits the number of concurrent callers allowed in the conference.

!!! note
    The preset of '0' Max Members allows an unlimited number of callers to join the conference.

* **PBX Server** You can select from the list of available servers.

Click **`Save`** and the new conference room is available for use.

<img src= "/class5/img/conference1.png" width= "400" style="border: 2px solid #4472C4; border-radius: 8px;">

!!! tip "Conference calls for external callers"
    Only customers internal to ConnexCS can use the standard Conference configuration.

    To allow external numbers to dial into the conference, set up a [**Customer DID**](https://docs.connexcs.com/customer/did/#configure-direct-inward-call) and set the **Destination** to "Internal" (set the internal destination as the extension number of the conference), and then select the available pre-configured conference.

## Conference Call Keypad Options

Callers can use the keypad to control the audio on the conference call.

|Key|Result|Description|
|-------|------|------|
|0|Mute|Mute your microphone. The other callers can't hear you.|
|1|Vol talk -|Decrease the volume (sensitivity) of your microphone by 1 unit.|
|2|Vol talk reset|Reset the volume (sensitivity) of your microphone to the default value.|
|3|Vol talk +|Increase the volume (sensitivity) of your microphone by 1 unit. The other callers hear you louder.|
|4|Vol listen +|Increase the volume of the speakers by 1 unit. You hear other callers louder.|
|5|Vol listen reset|Reset the volume of the speakers to the default value.|
|6|Vol listen -|Decrease the volume of the speakers by 1 unit.|
|7|Energy +|Increase the minimum energy threshold by 1 unit (Only when you speak, the background noise above this threshold bridges into the conference).|
|8|Energy reset|Reset the minimum energy threshold to the default value.|
|9|Energy -|Decrease the minimum energy threshold by 1 unit.|
|\*|Deaf/mute|Mute your speakers and the microphone in one action.|
|#|Hang up|Disconnect the call and leave the conference.|
