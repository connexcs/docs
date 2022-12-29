# Queue

The **Queue**, same as Groups, allows you to create a team of people in a call queue. The caller is then routed to the next available member (who waits for the longest to receive a call).

If you use this routing strategy:

+ You can upload audio files that greet the caller and play music when the caller or the member puts the call on hold.
+ You don't need to specify the members of a group. Individuals who want to join the group must call a specific extension number.

  To leave the group, they dial another number from their phone. This means that a group that uses a Queue routing strategy doesn't necessarily have a fixed number of members.

    ![alt text][queue]

## Edit Existing Queue

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
