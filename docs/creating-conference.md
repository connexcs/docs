# Creating a Conference Call

You create a conference call when you want to allow multiple callers to communicate with each other over a voice call. The callers who join the call are presided over by a caller known as the 'moderator'. 

!!! question "How do I ask callers to join the conference" 
    Use the email or messaging services to specify the exact time and day the call must start, the duration of the call, and the pass codes the callers and the moderator must use to join the call. Your callers can use this conference setup until the details of this conference are deleted from the ConnexCS Control Panel. 

!!! question "How can I use the keypad to control the audio on the conference call?"
    Use the following keypad options for the conference calls you create on the ConnexCS Control Panel.
    
    |Keypad option|Result|Description|
    |-------|------|------|
    |0|mute|mute your microphone. The other callers cannot hear you.|
    |1|vol talk down|decrease the volume (sensitivity) of your microphone, by 1 unit.|
    |2|vol talk zero|reset the volume (sensitivity) of your microphone to the default value.|
    |3|vol talk up|increase the volume (sensitivity) of your  microphone by 1 unit. The other callers hear you louder.|
    |4|vol listen up|increase the volume of the speakers by 1 unit. You hear other callers louder.|
    |5|vol listen zero|reset the volume of the speakers to the default value.|
    |6|vol listen down|decrease the volume of the speakers by 1 unit.|
    |7|energy up|increase the minimum energy threshold by 1 unit. If the background noise is above this threshold, the background noise is bridged into the conference and only when you speak.|
    |8|energy equal|reset the minimum energy threshold to the default value.|
    |9|energy down|decrease the minimum energy threshold by 1 unit.|
    |*|deaf mute|mute your speakers and the microphone, in one action.|
    |#|hangup|disconnect the call and drop out of the conference.|

To create a conference call:

1.  Log into the ConnexCS Control Panel.
	 
    ConnexCS displays the page you were on when you logged out of the Control Panel.
    
2.  Click `Class 5 > Conference` in the navigation panel (located on the left of the page).
	 
    The Conference page appears.
    
3.  Click the `+` icon (located at the top-right corner of the page).
	 
    The Conference pop-up appears.
    
4.  Do the following to create a conference call:

    * In the `Name` text box, enter a name for the conference call.
    
    * From the `Customer` drop-down list, select the name of a customer who wants to use this conference call.

    * In the `Extension` text box, enter the extension number that callers must call, to join the conference. This number is similar to the dial-in number you use for conference calls.
    
    * (Optional) If you want all callers, including the moderator of the conference call, to enter a pass code to join the conference call, enter a numeric pass code in the `PIN` text box.

    * From the `Quality` drop-down list, select the level of quality (amount of bandwidth) per caller, for this conference call.
	
      The options available are: **Narrow Band** (8 KHz), **Wide Band** (16 KHZ), and **Ultra Wide Band** (32 KHz).
      
    * (Optional) In the `Max Members` text box, enter the maximum number of concurrent callers this conference must allow. 
    
      By design, the Max Members text box displays '0'. This means an unlimited number of callers can join the conference. 
      
    !!! question "What happens if more callers want to join the conference call?"
    	If the maximum number of callers are actively connected to a conference call and there are additional callers waiting to join the conference, the callers who are waiting can join the call when the active callers exit the call.
	  	
      The following image illustrates the Conference pop-up with some sample values.
      
      ![alt text][conference-popup]
      
     * Click `Save`.
	
       ConnexCS Control Panel confirms that it has created a new conference.
	    
       You can see an entry for the new conference on the Conference page.
       
5.    (Optional) To abort creating the new conference, click `X` located at the top-right corner of the pop-up.

[conference-popup]: /class5/img/conference-popup.png "conference-popup"
