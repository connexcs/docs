# File

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Customer / Information → Files / Documents<br>
<strong>Audience</strong>: Administrators, Support Team, Customer Account Managers<br>
<strong>Difficulty</strong>: Beginner to Intermediate<br>
<strong>Time Required</strong>: 5–10 minutes<br>
<strong>Prerequisites</strong>: Access to the ConnexCS control panel under a customer account; appropriate permissions to upload or manage customer files<br>
<strong>Related Topics</strong>: <a href="https://docs.connexcs.com/guides/doc-guide/">Document Guide</a> — overview of document types, <a href="https://docs.connexcs.com/customer-portal/cp-documents/">Customer Portal Documents</a> — how customers view files.<br>
<strong>Next Steps</strong>: Use the Files section to upload required documents (e.g., contracts, proof-of-identity, invoices), then manage or request additional customer documents via the customer account interface.<br>

</details>

**Management :material-menu-right: File**

## Overview

The File Management section provides a centralized location to upload, store, and manage various files within the ConnexCS system.

Users can upload different file types for system functionality including (but not limited to), public assets, audio files for PBX (Private Branch Exchange), rate cards, or a logo for your portal.

### Key Features

+ **Default Uploads**: Pre-configured folders for specific file types.

+ **Public File Access**: Allows customers to upload and use publicly accessible files, such as logos.

+ **Audio File Support**: Enables IVR and voicemail greeting uploads.

+ **Text-to-Speech Integration**: Generates high-quality audio files using WaveNet voices.

+ **Bulk Upload**: Supports multiple file uploads at once.

### Benefits

+ **Centralized Storage**: Keeps all necessary files in one place for easy access and retrieval.

+ **Automated Organization**: Pre-configured folders streamline file categorization.

+ **Improved Customer Experience**: Enables seamless integration of logos and audio files.

+ **Time-Saving**: Built-in text-to-speech functionality reduces reliance on third-party services.

+ **Efficient Management**: Bulk upload feature allows rapid file handling.

## File Categories

+ **Default File Storage**: ConnexCS has predefined folders for specific file types.

   + **Provider Cards**: Every provider card uploaded is automatically stored. It retains a copy for reference in case of issues or failures.

   + **Audio Files**: Storage for voicemail greetings, IVR files, and other system-generated audio like IVR prompts, Voicemail greetings, and other system-generated announcements.

+ **Public File Storage**: This section allows files to be publicly accessible.
     + **Use Case**: Customers can upload logos for display on their customer portals.

+ **Text-to-Speech Files**: Uses WaveNet voices for high-quality speech generation.

    + Supports multiple languages and accents (e.g., English with an Indian accent, German, Hindi, etc.).
    + Users can enter text, select a voice, and save it as an audio file.
    + Eliminates the need to use external text-to-speech services.

## Add new file(s)

1. Navigate to Management :material-menu-right: File :material-menu-right: Public then click **`Bulk Upload`** at the top of the page and add the logo.
2. Navigate to the desired directory, select one or more files, then click **`Open`**.
3. The file should appear as the next item on the list if the upload is successful. (You made need to refresh the list.)

!!! note "Recommended dimensions of the logo: **height: 75 px** and **width: 300 px.** "

## Integration of logo

1. Navigate to Setup :material-menu-right: Integrations :material-menu-right: Portal.
2. Click on the name of the **Domain** you want to integrate the logo.
3. A dialog box will appear, click on **Advanced** option.
4. Then click on **Upload logo** and `Save` it.

!!! error "Upload Errors"
    If an error occurs, check your browser settings and operating system for things like firewalls or pop-up blockers which may prevent uploads of a certain type.

## Specific file type functions

* **Text to Speech:** Under Audio files, select ![alt text][texttospeech]. Enter the text, select the voice, and define the file name. To preview the audio, select **`Play Voice`**. When the audio is ready, click **`Save`**. In addition, we also support [SSML](https://cloud.google.com/text-to-speech/docs/ssml) for our TTS.
* **Download:** Use **`Download`** to download a file you've selected.

## Remove files

Select a file from the list and then click the trashcan button.

## Auto Archival

We support the automatic archival of rate cards.
These can be downloaded in `.csv` format for convenient access and record-keeping.

[texttospeech]: /misc/img/texttospeech.png "Text to Speech"
