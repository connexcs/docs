# IVR

An **Interactive Voice Response (IVR)** allows callers to call an extension number, and then get routed to different SIP addresses, PSTN numbers, internal extension numbers, other IVRs, conference bridges, groups, and Class 5 applications, based on the key they press. When you create an **IVR**, you specify a 1:1 mapping for all the possible keys on the keypad. This is managed under **Class5** > **IVR**.
    
## IVR Planning 
Complete the following prior to configuring the **IVR**
    
1. Plan out the keys and desired destinations
2. Create an audio file (.pcm or .wav format) that greets the customer and explains the keypad options and their destinations. For example, 'press 1 to speak with a sales agent, press 2 to speak with a technical support agent' and so on. 
3. Upload this audio file to the ConnexCS Control Panel under **Management** > **File**.

## Create an IVR

1. Under `Class 5 > IVR` click the `+` icon (located at the top-right corner of the page).
2. Configure the `Name` for the IVR.
3. Select the `Customer` from drop-down list
4. Enter the `Extension` that callers must call to start interacting with the IVR.
5. Select the `Audio File` from the drop-down list. Created in first step, this file plays the greeting and explains the keypad options. 
6. Once these fields are completed, you will be able to edit each key- numbers 0 to 9, '\*' (asterisk) and '#' (hash) - and configure what happens when the caller presses it
7. Click `Edit` next to each of the Keys 0 to Key # to edit the Destination
    
    *   **External** - PSTN numbers that are outside your Class 5 network
    *   **Internal** - user extension numbers, IVRs, conference bridges, and groups.
   
