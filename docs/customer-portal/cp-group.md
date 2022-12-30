# Group

A **Group** allows you to create a team of individuals to receive calls placed to a specified number or extension based on the routing strategy you configure.

For example, create a number that customers can call that routes them to a team of Technical Support Specialists who can fix the technical issues or to a Sales group.of

+ **Name:** Enter the name of the group (for example, Sale, Customer Support, Office, or Garage).
+ **Extension:** The number / extension callers use to connect to this group.

## Edit Existing Group

Click on the Group name, then click **`Edit`** to revise the following:

+ **Name:** The Group Name. You can mention the group name for easy reference.
+ **Extensions:** Not available for editing; please contact support.
+ **Group Type:** Each Group type uses a different routing strategy to determine how the calls route to the specified members.
    + **Parallel:** Rings a call to all members of the group simultaneously. The members' extensions ring for the length of time specified. Individual members can have unique timeout timers.

      **Note:** Rings all members, even if they're already on a call.

    ![alt text][parallel]

    + **Sequential**: Routes a call in a sequential order based on the order under Group Members. By default, the  call routes to the member whose extension number has the highest value (for example, 5021).
      + If the member with the second-highest extension number doesn't respond, the call gets routed to the extension with the third-highest value (for example, 4097).
      + If the member with second highest extension number doesn't respond, the call gets routed to the extension with the third highest value (for example, 4095). This process continues until a member receives the call.

    ![alt text][sequential]

+ **Destination**: Click :material-plus:, then click `Edit` to enter the Destination (External number or Internal extension, SIP User, group, DID, etc.), and Ring Timeout (maximum amount of time for a call to ring before moving to next group member).

(**SIP:** Session Initiation Protocol; **DID:** Direct Inward Dialing)

[parallel]: /customer-portal/img/parallel.png "Parallel Group"
[sequential]: /customer-portal/img/sequential.png "Sequential Group"
