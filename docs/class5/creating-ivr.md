# IVR
**Class 5** :material-menu-right: **IVR**

An **Interactive Voice Response (IVR)**, or phone tree, allows callers to dial in and select an extension for a specific department or group within the company. These extensions can be routed to different SIP addresses, PSTN numbers, internal extension numbers, other IVRs, conference bridges, groups, and Class 5 applications, based on the key they press. When you create an IVR, you specify a 1:1 mapping for all the possible keys on the keypad. 

For individual customers, navigate to **Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: Class5 :material-menu-right: IVR**
    
## IVR Planning 
Complete the following prior to configuring the IVR
    
1. Plan out the keys and desired destinations
2. Create an audio file (.pcm or .wav format) that greets the customer and explains the keypad options and their destinations. Ex: "Press 1 to speak with a sales agent. Press 2 to speak with a technical support agent" and so on. 
3. Upload this audio file to the ConnexCS Control Panel under **Management** :material-menu-right: **File**.

## Create an IVR

1. Click the :material-plus: icon.
2. Enter the **Name** for the IVR.
3. Select the **Customer** from drop-down list.
4. Enter the **Extension** that callers must call to start interacting with the IVR.
5. Select the **Audio File** from the drop-down list which plays the greeting and explains the keypad options. This could be the file created in first step above or one preloaded into [**Files**](https://docs.connexcs.com/files/).

&emsp;![alt text][ivr]

7. After the above fields are completed, **`Edit`** becomes available for each key- numbers 0 to 9, '\*' (asterisk) and '#' (hash) - to configure the Destination (what happens when the caller presses they key).
    
    :material-menu-right: `External`- PSTN numbers that are outside your Class 5 network (ex: someone's mobile).
    
    :material-menu-right: `Internal`- A number or resource on the ConnexCS platform (ex: extension numbers, IVRs, conference bridges, and groups).
   
[ivr]: /customer/img/ivr.png "IVR Setup"
