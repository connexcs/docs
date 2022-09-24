# Group
A **Group** allows you to create a team of individuals to receive calls placed to a specified number or extension based on the routing strategy you configure. (Ex: Create a number that customers can call which routes them to a team of Technical Support Specialists who can fix the technical issues, or to a Sales group.)

+ **Name**: Enter the name for the group (ex: Sale, Customer Support, Office, or Garage).
+ **Extension**: The number/extension callers use to connect to this group.


## Edit Existing Group
Click on the Group name, then click **`Edit`** to modify the following:

+ **Name**: The Group Name (The group type can be mentioned for easy reference).
+ **Extensions**: Not available for edit, please contact support.
+ **Group Type**: Each Group type uses a different routing strategy to find how calls route to the specified members.
    + **Parallel**: Rings a call to all members of the group simultaneously. The members' extensions ring for the length of time specified. Individual members can have unique timeout timers. Note: Rings all members, even if they're already on a call.

    ![alt text][parallel]

    + **Sequential**: Routes a call in a sequential order based on the order under Group Members. By default, a call is routed to the member whose extension number has the highest value (for example, 5021). 
      + If the member is busy on another call or does'nt receive the call for a specific time duration, the call is routed to the member with the second highest value of the extension number (for example, 4097). 
      + If the member with second highest extension number does'nt respond, the call is routed to the extension with the third highest value (for example, 4095). This process continues until a member receives the call. 

    ![alt text][sequential]

+ **Destination**: Click **:material-plus:**, then click `Edit` to enter the Destination (External number or Internal extension, SIP User, group, DID, etc.) and Ring Timeout (maximum amount of time for a call to ring before moving to next group member).

*(**SIP:** Session Initiation Protocol, **DID:** Direct Inward Dialing)*

[parallel]: /customer-portal/img/parallel.png "Parallel Group"
[sequential]: /customer-portal/img/sequential.png "Sequential Group"


