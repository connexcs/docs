# Creating a Conference Call
Use this feature when you want to allow multiple callers to communicate with each other over a voice call. The Callers join the call and are presided over by a Moderator. This is configured under **Class5** > **Conference**. 



## New Conference Call
To create a conference call:

1. Click the `+` icon.
2. Enter the following parameters

    * Enter a `Name` for the conference call.
    * Select the `Customer` from the drop-down list
    * Enter the `Extension` for the callers to call (essentially, the dial-in number)
    * A 'PIN' may be configured for additional security 
    * Select the conference `Quality` from the drop-down list. Quality is set by the amount of bandwidth available per caller: `Narrow Band` (8 KHz), `Wide Band1` (16 KHZ), and `Ultra Wide Band` (32 KHz).
    * Set the `Max Members` to limit the number of concurrent callers this conference must allow. Note: the preset of '0' Max Members allows an unlimited number of callers can join the conference. 
      
    ![alt text][conference-popup]
   

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


[conference-popup]: /class5/img/conference-popup.png "conference-popup"
