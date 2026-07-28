# Anvil App Preview

<details>
<summary><strong>Document Metadata</strong></summary>
<br>

<strong>Category</strong>: Development → Anvil → IDE<br>
<strong>Audience</strong>: Frontend Developers, Full-Stack Developers, Solution Engineers, Technical Teams<br>
<strong>Difficulty</strong>: Beginner to Intermediate<br>
<strong>Time Required</strong>: 10–15 minutes<br>
<strong>Prerequisites</strong>: Access to a ConnexCS account, an Anvil project containing frontend resources, and the Anvil IDE.<br>
<strong>Related Topics</strong>: <a href="https://docs.connexcs.com/guides/doc-guide/">Document Guide</a> — documentation standards, Getting Started — signing in and project selection, Anvil IDE Interface — workspace overview, Anvil Apps — frontend development, ScriptForge — backend scripting.<br>
<strong>Next Steps</strong>: Preview frontend components, switch between Vue files, refresh the application, open previews in a browser, edit script metadata, copy endpoint URLs, insert code snippets, and access the relevant documentation for your application.<br>

</details>

## Overview

The **Anvil App Preview** allows you to render and test frontend applications directly within the Anvil IDE.

It provides a live preview environment for `Vue` components, enabling developers to validate UI changes, switch between previewed files, refresh the application, and open previews in an external browser.

The preview also includes quick access to script metadata, endpoint URLs, code snippets, and related documentation, streamlining the frontend development workflow.

## Opening the Preview

- Click the **$(globe) Preview Anvil App** button in the ConnexCS sidebar or editor toolbar to open the default preview (loads your app's `App.vue` entry point).
- Right-click any `.vue` file in the Explorer and choose **Open in Preview** to preview that specific file.

## Multiple Preview Tabs

You can have multiple preview tabs open at the same time. Each new **Open in Preview** action opens a new tab in the right-side panel.

## Switching Files Within a Preview Tab

Each preview tab has a file selector button in its toolbar (showing the current file name with a ▾ arrow). Click it to choose a different file to display in that tab without opening a new one.

## Refresh and External

Each preview panel also has:
- **↻ Reload** — refreshes the embedded preview
- **⧉ Open in browser** — opens the preview URL in your default browser

## More Options

1. **Script Metadata**: Click the **···** menu in the editor toolbar (or the overflow menu on the script tab) to open **Edit Metadata**. From here you can update the script's name and other properties stored in ConnexCS.

2. **Endpoint URL**: If your script is exposed as an HTTP endpoint, use **Copy Endpoint URL** from the toolbar overflow menu to copy the URL. You can then test it with curl or Postman.

3. **Code Snippets**: Use **Insert Snippet** from the overflow menu to browse and insert ready-made code templates for common ConnexCS patterns (socket listeners, API calls, etc.).

4. **Documentation**: Click **Open Docs** in the overflow menu to open the documentation page for the active script.

<img src= "/apps/img/aide27.png" style="border: 2px solid #4472C4; border-radius: 8px;">

---