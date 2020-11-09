# Conference Calls
**Class5** :material-menu-right: **Conference**
Use this feature when you want to allow multiple callers to communicate with each other over a voice call. The Callers join the call and are presided over by a Moderator. 

## Create Conference Call
To create a conference call:

1. Click the `+` icon.
2. Enter the following parameters

    * Enter a **Name** for the conference call.
    * Select the **Customer** from the drop-down list. By default, the Conference is only available to users in this customer, however routing can be setup to allow other custoemrs to access it.
    * Enter the **Extension** for the callers to call (essentially, the dial-in number)
    * Configure the **PIN** and **Moderator PIN** for additional security 
    * **Quality** sets the amount of bandwidth available per caller
        * `Narrow Band` = 8 KHz (G711)
        * `Wide Band1` = 16 KHZ
        * `Ultra Wide Band` = 32 KHz
    * **Max Members** limits the number of concurrent callers this conference must allow. Note: the preset of '0' Max Members allows an unlimited number of callers can join the conference. 
   

## Conference Call keypad options
Callers may use the keypad to control the audio on the conference call. 

    |Keypad option|Result|Description|
    |-------|------|------|
    |0|mute|mute your microphone. The other callers cannot hear you.|
    |1|vol talk down|decrease the volume (sensitivity) of your microphone, by 1 unit.|
    |2|vol talk zero|reset the volume (sensitivity) of your microphone to the default value.|
    |3|vol talk up|increase the volume (sensitivity) of your microphone by 1 unit. The other callers hear you louder.|
    |4|vol listen up|increase the volume of the speakers by 1 unit. You hear other callers louder.|
    |5|vol listen zero|reset the volume of the speakers to the default value.|
    |6|vol listen down|decrease the volume of the speakers by 1 unit.|
    |7|energy up|increase the minimum energy threshold by 1 unit. If the background noise is above this threshold, the background noise is bridged into the conference and only when you speak.|
    |8|energy equal|reset the minimum energy threshold to the default value.|
    |9|energy down|decrease the minimum energy threshold by 1 unit.|
    |*|deaf mute|mute your speakers and the microphone, in one action.|
    |#|hangup|disconnect the call and drop out of the conference.|


