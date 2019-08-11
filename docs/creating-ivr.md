# Creating an IVR Setup

You can create an Interactive Voice Response (IVR) setup when you want to let callers call an extension number, press a key on the keypad, and get routed to different SIP addresses, PSTN numbers, internal extension numbers, IVRs, conference bridges, groups, and Class 5 applications, based on the key they press.

!!! question "How does the IVR setup route calls?" 
    When you create an IVR setup, you specify a 1:1 mapping for all the possible keys on the keypad (0, 1, 2, 3, 4, 5, 6, 7, 8, 9, * (asterisk), and # (hash)). When the caller presses a key, the IVR setup analyzes the input provided by the caller, and routes the call to the appropriate destination.
    
!!! tip "Before you create an IVR setup" 
    You must do the following to configure the keypad options for the IVR setup:
    
    1. Think of what destinations the keys on the keypad must route to, and create an audio file that greets the customer and explains the keypad options and their destinations. For example, 'press 1 to speak with a sales agent, press 2 to speak with a technical support agent' and so on. 
    2. Create the audio file in the .pcm or .wav format. 
    3. Upload this audio file to the ConnexCS Control Panel from the Management > File menu item.

To create an IVR setup:

1.  Log into the ConnexCS Control Panel.
    
    ConnexCS Control Panel displays the page you were on when you logged out of the Control Panel.
    
2.  Click `Class 5 > IVR` in the navigation panel (located at the left of the page).

    The IVR page appears.
    
3.  Click the `+` icon (located at the top-right corner of the page).

  	The IVR pop-up appears.
    
4.  Do the following to create an IVR setup:

     *  In the `Name` text box, enter a name for the IVR setup.
     
     *  From the `Customer` drop-down list, select the name of a customer who wants to use this IVR setup.
     
     *  In the `Extension` text box, enter the extension number that callers must call, to start interacting with the IVR.
     
     *  From the `Audio File` drop-down list, select an audio file that contains the greeting and explains what the options on the keypad do. 
        The callers hear this interactive audio message when they dial the extension number.
        
5.  Next, configure what should happen when the caller presses a key on the numeric keypad (in accordance with the audio file you created for the interactive voice message) that contains numbers 0 to 9, '*' (asterisk) and '#' (hash):
  
     *  Click `Edit` next to any of the Keys 0 to Key #, for example, Key 1.
	    
        The Destination pop-up appears.
	    
        You can route calls to one of the following destinations:
        
        *   **URI** - SIP addresses in the sip:<*extension number or username*>@<*domain name or IP address*> format;
        
        *   **External** - PSTN numbers that are outside your Class 5 network;

        *   **Internal** - extension numbers, IVRs, conference bridges, call queues, and Class 5 applications in your Class 5 network.
	        
        The following figure illustrates the Destination pop-up.
	        
        By design, the URI tab appears. 
	        
        To route the call to a SIP address do the following:
        
        *   In the `Destination DID` text box, enter the DID or the username for the SIP account.
       
        *   From the `Destination URL` drop-down list, select the IP address or the domain name of the SIP address.
        
            You will see that the ConnexCS Control Panel automatically creates a SIP address in the sip:<DID or userame>@<domain name or IP address> format.
            
        To route the call to an external PSTN number:
        
        *   Click the `External` tab.

        *   In the `External` text box, enter the PSTN number.
	
        To route the call to an internal resource:

        *   Click the `Internal` tab.

        *   In the `Internal` text box, enter the PSTN number.
        
        *   From the `Internal` drop-down list, select one of the following: extension number, conference, group, or a Class 5 application.
        
    *   To save the routing settings for this key, click `Save`.
    
    *   (Optional) To abort configuring the routing settings for this key, click `Cancel`.

    *   (Optional) To clear the routing settings, click `Reset` and enter new values.
    
6.  Repeat step 5 for all keys that callers can use (in accordance with the audio file you created for the interactive voice message), to reach the different destinations through the IVR setup.

7.  Click `Save`.
	
    ConnexCS Control Panel confirms that it has created a new IVR setup.
	
    You can see an entry for the new IVR setup on the IVR page.
    
8.  Optional) To abort creating the IVR setup, click `X` located at the top-right corner of the pop-up.
