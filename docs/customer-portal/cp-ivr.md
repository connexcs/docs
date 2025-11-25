# Interactive Voice Response

---
**Document Metadata** <br>**Category**: Customer Portal / IVR (Interactive Voice Response) Configuration </br> **Audience**: Administrators, Telecom Engineers, Support & Service Teams <br>**Difficulty**: Intermediate</br> **Time Required**: Approximately 25–35 minutes <br>**Prerequisites**: Active ConnexCS Customer Portal account with PBX- or IVR-authoring permissions, and access to upload or record audio prompts</br> **Related Topics**: [Conference Rooms](https://docs.connexcs.com/customer-portal/cp-conference/), [Hunt Groups & Queues](https://docs.connexcs.com/customer-portal/cp-group/) , [DID Management](https://docs.connexcs.com/customer-portal/cp-did/) <br>**Next Steps**: Create or upload your introductory greeting, define menu options (e.g., “Press 1 for Sales, 2 for Support”), map each option to the appropriate destination (extension, queue, voicemail), test calls through the menu to ensure correct routing.</br>

---

The **IVR (Interactive Voice Response)** (or Phone Tree) provides callers with a menu and options for call routing.

Callers dial-in and select an option on the number pad that maps to an extension for a specific department or group within the company.

These extensions route to different Session Initiation Protocol (SIP) addresses, Public Switched Telephone Network (PSTN) numbers, internal extension numbers, other IVRs, conference bridges, groups, and Class 5 applications.

When you create an IVR, you specify a 1:1 mapping for all the possible keys on the keypad.

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
