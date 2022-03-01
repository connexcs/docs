# PBX
In **PBX** (Private Branch Exchange) you will find several useful features to help manage calls and interactions. 

## Conference
Use **Conference** (also known as a Conference Call or Bridge) to allow multiple callers to communicate with each other over a voice call. Once created, Callers join the call and are presided over by a Moderator

In this section, view all configured **Conference** groups:

+ **Name**: The name of the Conference
+ **Extension**: The dial-in numbers to callers to reach the Conference
+ **Active Participants**: All callers who have joined the Conference

### Edit Existing Conference
Click on the existing Conference name to edit the following fields:

## IVR
The **IVR (Interactive Voice Response)** (or Phone Tree) presents callers with a menu and options for call routing. Callers dial-in and select an option on the numberpad which is mapped to an extension for a specific department or group within the company. These extensions can be routed to different SIP addresses, PSTN numbers, internal extension numbers, other IVRs, conference bridges, groups, and Class 5 applications. When you create an IVR, you specify a 1:1 mapping for all the possible keys on the keypad.

+ **Name**: The name of the Conference.
+ **Extension**: The dial-in numbers to callers to reach the Conference.

### Edit Existing IVR
Click on the **IVR** Name to edit the following fields:

## Group
A **Group** (or Call Queue) allows you to create a team of individuals to receive calls placed to a specified number or extension based on the routing strategy you configure. (Ex: Create a number that customers can call which routes them to a team of Technical Support Specialists who can fix the technical issues, or to a Sales group.)

+ **Name**: Enter the name for the group (ex: Sale, Customer Support, Office, or Garage).
+ **Extension**: The number/extension callers useto connect to this group.

### Edit Existing Group

### Available Group types
Each Group is configured with a routing strategy which determines how calls will be routed to the members of the group:

1. **Parallel**: Rings a call to all members of the group simultaneously. The members' extensions ring for the length of time specified. Individual members can have unique timeout timers. Note: this rings all members, even if they are already on a call.

    ![alt text][parallel]

2. **Sequential**: Routes a call in a sequential order based on the order under Group Members. By default, a call is routed to the member with the highest value of the extension number (for example, 5021).
    + If the member is busy on another call or does not receive the call for a specific time duration, the call is routed to the member with the second highest value of the extension number (for example, 4097).
    + If the member with second highest extension number does not respond, the call is routed to the extension with the third highest value (for example, 4095). This process continues until a member receives the call.

    ![alt text][sequential]

## Queue
The **Queue** places the caller in a call queue before routing the call to the next available member (whoever has been waiting longest to receive a call). If you use this routing strategy:

+ You can upload audio files that greet the caller and play music when the caller or the member puts the call on hold.
+ You don't need to specify the members of a group. Individuals who want to join the group must dial a specific extension number from their phone. To leave the group, they dial another number from their phone. So, a group that uses a Queue routing strategy does not necessarily have a fixed number of members. 

    ![alt text][queue]



## Audio

Voicemail is managed under specific customers or in a bulk view under Class5 > Voicemail.

Phonebook allows all users to receive the same list of numbers within the customer, essentially a company directory.



[parallel]: /customer-portal/img/parallel.png "Parallel Group"
[sequential]: /customer-portal/img/sequential.png "Sequential Group"
[queue]: /customer-portal/img/queue.png "Call Queue"
