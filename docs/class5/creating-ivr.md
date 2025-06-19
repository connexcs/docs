# Interactive Voice Response

**Class 5 :material-menu-right: IVR**

An **Interactive Voice Response (IVR)**, or phone tree, allows callers to dial in and select an extension for a specific department or group within the company.

These extensions can be routed to different Session Initiation Protocol (SIP) addresses, Public Switched Telephone Network (PSTN) numbers, internal extension numbers, other IVRs, conference bridges, groups, and Class 5 applications, based on the selected key.

When you create an IVR, you can specify a 1:1 mapping for all the possible keys on the keypad.

For individual customers, navigate to **Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: Class5 :material-menu-right: IVR**

## Interactive Voice Response Planning

Complete the following steps before configuring the IVR.

1. Decide on the keys and required destinations.
2. Create an audio file (.pcm or .wav format) that greets the customer and explains the keypad options and their destinations.
    For example, "Press 1 to speak with a sales assistant. Press 2 to speak with a technical support assistant."
3. Upload the audio file to the ConnexCS Control Panel under **Management :material-menu-right: File**.

## Create an Interactive Voice Response

1. Click :material-plus:.
2. Enter the **Name** of the IVR.
3. Select the **Customer** from the drop-down list.
4. Enter the **Extension** for callers to call and start interacting with the IVR.
5. Select the **Audio File** from the drop-down list which plays the greeting and explains the keypad options. This is the file created in the first step of IVR Planning, or one that was pre-loaded into [**Files**](https://docs.connexcs.com/files/).

6. You can select from the list of available **PBX Servers**.

    <img src= "/class5/img/ivr1.png" width= "500" style="border: 2px solid #4472C4; border-radius: 8px;">

7. After the completion of the above fields, **`Edit`** becomes available for each key- numbers 0 to 9, '\*' (asterisk) and '#' (hash) - to configure the Destination (what happens when the caller selects the key).

    :material-menu-right: `External`: PSTN numbers that are outside your Class 5 network.
         For example, someone's mobile).

    :material-menu-right: `Internal`: A number or resource on the ConnexCS platform.
        For example, extension numbers, IVRs, conference bridges, and groups.
