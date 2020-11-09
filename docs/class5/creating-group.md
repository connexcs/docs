# Groups
**Class5** :material-menu-right: **Group**

A **Group**, or Call Queue, allows you to construct a team of individuals to receive calls placed to a specified number or extension based on the routing strategy you configure. (Ex: Create a number that customers can call which routes them to a team of Technical Support Specialists who can fix the technical issues with their laptop.)

## Group Call Routing strategies
When you create a **Group**, you specify how calls will be routed to the members of the group using one of the following routing strategies:

* **Parallel** - Rings a call to all members of the group, simultaneously. The members' extensions ring for the length of time you specify. You can assign unique timeout timers for individual members.
* **Sequential** - Routes a call in a sequential order, based on the order under Group Members.  By default, a call is routed to the member with the highest value of the extension number (for example, 5021).
    * If the member is busy on another call or does not receive the call for a specific time duration, the call is routed to the member with the second highest value of the extension number (for example, 4097). 
    * If the member with second highest extension number does not respond, the call is routed to the extension with the third highest value (for example, 4095). This process continues until a member receives the call. 
* **Queue** - Places the caller in a call queue before routing the call to the next available member (whoever has been waiting longest to receive a call). If you use this routing strategy:
    * You can upload audio files that greet the caller and play music when the caller or the member puts the call on hold.
    * You don't need to specify the members of a group. Individuals who want to join the group must dial a specific extension number from their phone. To leave the group, they dial another number from their phone. So, a group that uses a Queue routing strategy does not necessarily have a fixed number of members. 

## Group planning 
If you want to use audio files for the group, they will need to be uploaded to the system first. 
    
1. Download or create the audio files to greet the caller, chime tunes, and the music that will be played while on hold, in the .pcm or .wav format.
2. Upload the audio files to **ConnexCS** under **Management** :material-menu-right: **File**.

## Create a Group

1. Click the '+' icon (located at the top-right corner of the page).
2. Enter a **Name** for the group.
3. Select the **Customer** from the drop-down list.
4. Select the **Extension** that callers will use to connect to this group from the drop-down list.
5. Select the **Group Type** from the drop-down list (see **Group call routing strategies** above).
6. For **Parallel** and **Sequential** groups will also have a Group Members tab: 

    * Click the **`+`** to add a new member
    * Set the `Ring Timeout`. This is especially helpful when calling mobile numbers as you can cancel the call before it hits the voicemail, allowing it to roll to the next Group Member.
    * Click Edit to enter an External number of Internal User, Conference, or Group
    
6. If you select **Queue**, you will have the following additional fields:

|Field |Description|
|------|----------------------|
|`On Hold Music` |The audio file to play to the member and caller when the call is placed on hold.|
|`Join Message` |The audio file that contains the Welcome Message played to the caller after they dial the group extension.|
|`Chime List` |A list of audio files with the messages played to the call if no members of the group are available and the caller is waiting to be routed to the next available member. The message could thank them for waiting, play an advertisement, reference them to online or email support, and so on.|
|`Chime Interval` |The time duration between successive chime messages. During this interval, the system will play the selected On Hold Music.|
|`Agent Login Destination` |The extension number an individual must dial to join the group.|
|`Agent Logout Destination` |The extension number an individual must dial to quit the group.|
|`Agent Offhook Destination` |An extension number an individual must dial to receive calls immediately after joining the group.|
    
    
![alt text][groups-popup]

[groups-popup]: /class5/img/groups-popup.png "groups-popup"
