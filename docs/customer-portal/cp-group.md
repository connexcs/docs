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

    + **Queue**: The **Queue**, same as Groups, allows you to create a team of people in a call queue. The caller is then routed to the next available member (who waits for the longest to receive a call).

      If you use this routing strategy:

      + You can upload audio files that greet the caller and play music when the caller or the member puts the call on hold.
      + You don't need to specify the members of a group. Individuals who want to join the group must call a specific extension number.

        To leave the group, they dial another number from their phone. This means that a group that uses a Queue routing strategy doesn't necessarily have a fixed number of members.

        ![alt text][queue]

      
      **Edit Existing Queue**

      Click on the **Queue** name to edit the following:

      + **Name:** Enter the name of the queue.
      + **Extension:** Callers will use this extension to reach the queue.
      + **On Hold Music:** The audio file to play when the call is on hold.
      + **Join Message:** The audio file that contains the Welcome Message plays after the customer dials the group extension.
      + **Chime List:** A list of audio files with the messages played to the caller if they're awaiting routing to the next available member.
      The message could thank them for waiting, play an advertisement, or refer them to online or email support.
      + **Chime Interval:** The time duration between successive chime messages. During this interval, the system will play the selected On Hold Music.
      + **Agent Login Destination:** The extension number an individual must dial to join the group.
      + **Agent Logout Destination:** The extension number an individual must dial to quit the group.
      + **Agent Offhook Destination:** An extension number an individual must dial to receive calls instantly after joining the group.

      [queue]: /customer-portal/img/queue.png "Call Queue"

+ **Destination**: Click :material-plus:, then click `Edit` to enter the Destination (External number or Internal extension, SIP User, group, DID, etc.), and Ring Timeout (maximum amount of time for a call to ring before moving to next group member).

(**SIP:** Session Initiation Protocol; **DID:** Direct Inward Dialing)

[parallel]: /customer-portal/img/parallel.png "Parallel Group"
[sequential]: /customer-portal/img/sequential.png "Sequential Group"
