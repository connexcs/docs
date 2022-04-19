# IVR
The **IVR (Interactive Voice Response)** (or Phone Tree) presents callers with a menu and options for call routing. Callers dial-in and select an option on the numberpad which is mapped to an extension for a specific department or group within the company. These extensions can be routed to different SIP addresses, PSTN numbers, internal extension numbers, other IVRs, conference bridges, groups, and Class 5 applications. When you create an IVR, you specify a 1:1 mapping for all the possible keys on the keypad.

## Edit Existing IVR
Click on the **IVR** Name to edit the following fields:

+ **Name**: The name of the IVR.
+ **Extension**: The dial-in numbers to callers to reach the Conference.
+ **Audio File**: Select a file from the drop-down list to play the greeting and explain the keypad options. You can upload your own audio files under the [**Audio**](/customer-portal/cp-audio/) section below. 
+ **Keys (numbers 0 to 9, '\*' (asterisk) and '#' (hash))**: Configure the Destination (what happens when the caller presses they key) for each key using the **`Edit`** ield.
    
    :material-menu-right: `URI`- Specific SIP URI (formatted without the initial `sip:`, ex: you would enter `1-999-123-4567@voip-provider.example.net`)
    
    :material-menu-right: `External`- External number (ex: someone's mobile).
    
    :material-menu-right: `Internal`- A number or PBX resource (ex: extension numbers, IVRs, conference bridges, and groups).
