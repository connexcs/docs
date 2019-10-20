# Creating a Group (Call Queue)

You can create a group when you want to gather a team of individuals and construct a call queue. When a caller calls the primary extension number for the group, the call is routed to the extension that is selected by the routing strategy used for the group, 

For example, you can gather a team of Technical Support Specialists who will receive calls from customers and fix the technical issues with their laptops.

!!! question "How does the Group feature route calls?" 
    When you create a Group, you specify how calls must be routed to the members of the group. You can use one of the following routing strategies to route calls:
    
    1. Sequential - This routing strategy routes a call in a sequential order (by the member's extension number).  By default, a call is routed to the member with the highest value of the extension number (for example, 5021). If the member is busy on another call or does not receive the call for a specific time duration, the call is routed to the member with the second highest value of the extension number (for example, 4097). If the member with second highest extension number does not respond, the call is routed to the extension with the third highest value (for example, 4095). This process continues until a member receives the call. 
    
    2. Parallel - This routing strategy routes a call to all members of the group, at the same time. The members' extensions ring for the length of time you specify. You can assign unique timeout timers for the members.
    
    3. Queue - This routing strategy places the caller in a call queue before routing the call to the next available member. If you use this routing strategy:
    	
	a.You can upload audio files that greet the caller and play music when the caller or the member puts the call on hold.
	
	b.You don't need to specify the members of a group. Individuals who want to join the group must dial a specific extension number from their extensions. When individuals want to quit the group, they must dial another, specific extension number. So, a group that uses a Queue routing strategy does not have a fixed number of members. Calls are not routed to members after they quit the group. 
	
	c.The call is routed to a member who has been waiting the longest to receive a call.

!!! info "Before you begin" 
    You must do the following to use audio files for the group:
    
    1.	Download or create the audio files to greet the caller, chime tunes, and the music that must be played while on hold, in the .pcm or .wav format.
    
    2.	Upload the audio files to the ConnexCS Control Panel from the `Management > File` menu item

To create a conference call:

1.  Log into the ConnexCS Control Panel.
	 
    ConnexCS displays the page you were on when you logged out of the Control Panel.
    
2.  Click `Class 5 > Groups` in the navigation panel (located on the left of the page).
	 
    The Conference page appears.

3.  Click the '+' icon (located at the top-right corner of the page).

    The Groups pop-up appears.

4.  Do the following to create a group:

    * In the `Name` text box, enter a name for the group.
    
    * From the `Customer` drop-down list, select the name of a customer who wants to use this group.

    * From the `Extension` drop-down list, select the extension number that callers must call, to connect to the group.

    * From the `Group` Type drop-down list, select how the calls must be routed to the members of the group.
    
