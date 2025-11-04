# Interactive Voice Response

The **IVR (Interactive Voice Response)** (or Phone Tree) provides callers with a menu and options for call routing.

Callers dial-in and select an option on the number pad that maps to an extension for a specific department or group within the company.

These extensions route to different Session Initiation Protocol (SIP) addresses, Public Switched Telephone Network (PSTN) numbers, internal extension numbers, other IVRs, conference bridges, groups, and Class 5 applications.

When you create an IVR, you specify a 1:1 mapping for all the possible keys on the keypad.

## Key Features

1. Upload custom audio files or select from existing ones
2. Assign numeric keys (0-9) to different actions (e.g., "Press 1 for Sales").
3. Route calls to internal or external numbers.
4. Transfer calls to specific extensions, external destinations, or conferences.
5. Use prefixes for external call transfers.
6. Create multi-level IVR setups.

!!! question "Why use the IVR system?"
    1. Streamlines call handling and improves customer experience.
    2. Reduces the need for human intervention in call routing.
    3. Provides automated assistance to callers.

## Interactive Voice Response Planning

Complete the following steps before configuring the IVR.

1. Decide on the keys and required destinations.
2. Create an audio file (.pcm or .wav format) that greets the customer and explains the keypad options and their destinations. For example, "Press 1 to speak with a sales assistant. Press 2 to speak with a technical support assistant."
3. Upload the audio file to the ConnexCS Control Panel under **Management :material-menu-right: File**.

## Edit Existing Interactive Voice Response

Click on the **IVR** Name to edit the following fields:

+ **Name:** The name of the IVR.
+ **Extension**: The dial-in numbers for callers to reach the Conference.
+ **Audio File:** Select a file from the drop-down list to play the greeting and explain the keypad options.

    You can upload your own audio files under the [**Audio**](/customer-portal/cp-audio/) section below.

+ **Keys (numbers 0 to 9, '\*' (asterisk) and '#' (hash)):** Configure the Destination (what happens when the caller presses the key) for each key using the **`Edit`** field.

    :material-menu-right: `URI`- Specific SIP URI (formatted without the initial `sip:`, for example, you would enter `1-999-123-4567@voip-provider.example.net`)

    :material-menu-right: `External`- External number (for example, someone's mobile)

    :material-menu-right: `Internal`- A number or Private Branch Exchange (PBX) resource (for example, extension numbers, IVRs, conference bridges, and groups).
