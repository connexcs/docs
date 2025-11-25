# Conference

---

**Document Metadata** <br>**Category**: Customer Portal / Conference (PBX Feature) </br> **Audience**: Administrators, Telecom Engineers, Support & Service Teams <br>**Difficulty**: Intermediate </br> **Time Required**: Approximately 20–30 minutes <br>**Prerequisites**: Active ConnexCS Customer Portal account with PBX (Class 5) rights to create or edit conference rooms </br> **Related Topics**: [IVR (Interactive Voice Response)](https://docs.connexcs.com/customer-portal/cp-ivr/), [Groups (Hunt-Groups & Queues)](https://docs.connexcs.com/customer-portal/cp-group/) <br>**Next Steps**: Create a new conference room with required dial-in extension and PINs, test joining both internal and external callers.</br>

---

Use the **Conference** feature (also known as a Conference Call or Bridge) to allow several callers to communicate with each other over a voice call. Once created, callers join the call, and the moderator presides.

In this section, view all the configured **Conference** groups:

+ **Name:** The name of the Conference.
+ **Extension:** The dial-in numbers for callers to reach the Conference.
+ **Active Participants:** All callers who have joined the Conference.

## Edit Existing Conference

1. Click on the existing Conference name to edit the following fields:

   ***Field details:***

   + **Name:** Conference room identifier.
   + **Extension:** The dial-in number for callers to reach the room.
   + **PIN** and **Moderator PIN:** Configure the Personal Identification Number (PIN) and Moderator PIN for more security. They're required to enter the room.
   + **Quality:** Set the amount of bandwidth available per caller in kilohertz (kHz):

     :material-menu-right: `Narrow Band`- 8 kHz (G711)

     :material-menu-right: `Wide Band1`- 16 kHz

     :material-menu-right: `Ultra Wide Band`- 32 kHz

   + **Max Members:** Limit the number of concurrent callers this conference must allow.
  
     **Note**: The preset of '0' Max Members allows an unlimited number of callers to join the conference.

    <img src= "/class5/img/conference1.png" width= "400" style="border: 2px solid #4472C4; border-radius: 8px;">

2. Click **`Save`** to keep the new settings.

!!! tip "Conference calls for external callers"
    Only internal callers can use the above-mentioned standard Conference configuration.

    To allow external numbers to dial into the conference, set up a [**Customer DID**](https://docs.connexcs.com/customer/did/#configure-direct-inward-call) and set the Destination to Internal, and then select the available pre-configured conference.

*(**DID:** Direct Inward Dialing)*

## Conference call keypad options

Callers can use the keypad to control the audio on the conference call.

|Key|Result|Description|
|-------|------|------|
|**0**|Mute|Mute your microphone. The other callers can't hear you|
|**1**|Vol talk -|Decrease the volume (sensitivity) of your microphone by 1 unit|
|**2**|Vol talk reset|Reset the volume (sensitivity) of your microphone to the default value|
|**3**|Vol talk +|Increase the volume (sensitivity) of your microphone by 1 unit. The other callers hear you louder|
|**4**|Vol listen +|Increase the volume of the speakers by 1 unit. You hear other callers louder|
|**5**|Vol listen reset|Reset the volume of the speakers to it's default value|
|**6**|Vol listen -|Decrease the volume of the speakers by 1 unit|
|**7**|Energy +|Increase the minimum energy threshold by 1 unit (Only when you speak, the background noise above this threshold get bridged into the conference)|
|**8**|Energy reset|Reset the minimum energy threshold to it's default value|
|**9**|Energy -|Decrease the minimum energy threshold by 1 unit|
|**\***|Deaf/mute|Mute your speakers and the microphone in one action|
|**#**|Hang up|Disconnect the call and leave the conference|
