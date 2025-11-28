# Language

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Setup & Configuration → Advanced Settings → Language<br>
<strong>Audience</strong>: Administrators, Engineers, Support Team<br>
<strong>Difficulty</strong>: Beginner<br>
<strong>Time Required</strong>: 5–10 minutes<br>
<strong>Prerequisites</strong>: ConnexCS account with access to the Setup → Advanced section<br>
<strong>Related Topics</strong>: <a href="https://docs.connexcs.com/customer-portal/cp-audio/">Audio Files</a>, <a href="https://docs.connexcs.com/class5/apps/#build-your-call-flow-app">Call Flow</a><br>
<strong>Next Steps</strong>: <a href="https://docs.connexcs.com/customer-portal/pbx/#ivr">IVR Setup</a><br>

</details>

**Setup :material-menu-right: Advanced :material-menu-right: Language**

Use the **Language** interface to customize your selected interface language.

You can add non-English equivalents for words in your preferred language or revise system defaults.

!!! info "Multiple entries for one Key"
    If you add a non-English equivalent for a word, say 'Channel' as 'canal', but there is an existing entry for 'Channel' as 'Canales', the Control Panel replaces the default entry with your new word.

## Add Non-English Equivalents

If you have changed the default language (see [**User Interface Display Language**](https://docs.connexcs.com/changing-language/) for details) but see missing terms, you can add them in the Language panel.

To add non-English equivalents for your preferred language:

1. In the `Language` sub-menu on the left, select the language you want to use.
2. (Optional) Search for the specific word before adding.
3. Click :material-plus: to create a new entry.
    * **Key:** English word in the system.
    * **Translation:** non-English equivalent.
4. Click `Save`.
5. If the new translation isn't displayed, click `Refresh`, located at the top of the page.

    ![alt text][adding-words-in-spanish]

## Modify Non-English Equivalents

To revise existing non-English equivalents that the Control Panel adds by default:

1. In the `Language` sub-menu on the left, select the language you want to use.
2. Search for the specific word or scroll down until you find it.
3. In the Key column, select an English word.
4. In the Translation text box, type in the new text.
5. Click `Save`.
6. If you don't see the change, click Refresh, located at the top of the page.

## Delete or Reset Non-English Equivalents

To delete a non-English equivalent you added or to reset an incorrect change to a default entry:

1. Select the checkbox for the word and click `Reset` (located at the top of the page). A Warning pop-up appears.
2. Click `OK`.
3. The Control Panel deletes the new non-English equivalent or resets the default non-English equivalent to the original translated word.

!!!note "Note"
    You can't delete the default non-English equivalents from this table.

[adding-words-in-spanish]: /setup/img/adding-words-in-spanish.png "adding-words-in-spanish"
