# ScriptForge

ScriptForge is ConnexCS's backend scripting system. Scripts live in the `backend/` folder and are JavaScript files.

### Running a Script

Open a `.js` script. You will see **▶ Run** and **▶ Run with Vars** links appear directly above each exported `async function` in the code (these are called CodeLens actions). You can also use the toolbar buttons at the top of the editor.

- **Run** — Executes the script's `main()` function immediately. The result appears in the **Preview** panel to the right.
- **Run with Vars** — Opens a dialog where you can enter input variables before running. Useful when your script expects parameters. <br><img src= "/apps/img/aide24.png" width= "200" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

### Viewing Results (Show ScriptForge Preview)

When a script runs, the **Preview** panel opens on the right side of the screen. It shows:
- Whether the run succeeded or failed
- The return value displayed as formatted JSON, plain text, or raw
- How long the run took

| **Tab**    | **Description** |
| ---------- | --------------- |
| **Result** | Displays the output returned after executing the script or function. If the execution is successful, the result is shown here. If an error occurs, the error message, status code, and related details are displayed to help with troubleshooting|
| **Docs**   | Displays the documentation for the selected function, API, or module. This tab provides reference information such as parameters, return values, and usage details, helping you understand how to use the function correctly|
| **JSON**   | Displays the execution result in raw JSON format, making it easier to inspect the complete response structure for debugging or integration purposes|
| **Text**   | Displays the execution result as plain text for improved readability. This view is useful when you want to review the response without JSON formatting|
| **Raw**    | Displays the unprocessed response exactly as returned by the server or runtime, including all original formatting and data|
| **Copy**   | Copies the currently displayed output to the clipboard, allowing you to paste it into another application or share it with others|

<img src= "/apps/img/aide25.png" style="border: 2px solid #4472C4; border-radius: 8px;">

### Console Logs

While a script runs, any `console.log()` calls appear in the **CX Logs** panel at the bottom. Logs are structured — objects, arrays, maps, and other types are displayed in a tree you can expand. You can:
- Filter logs by level (info, warn, error) or search by text
- Pause and clear the log output
- Switch between logs from different scripts

<img src= "/apps/img/aide26.png" style="border: 2px solid #4472C4; border-radius: 8px;">

---

## Templates (HTML Email & SMS)

Templates live in the `backend/` folder and are `.html` files used for email or SMS messages.

### Live Preview

Open a template file. Click the **$(preview) Show Template Preview** button in the editor toolbar. A preview panel opens to the right showing how your HTML renders. The preview updates as you type (with a short debounce delay).

### Metadata

Use **Edit Metadata** from the overflow menu to set the template's name, subject, app association, and other properties.

---

## CX Terminal

The **CX Terminal** panel (at the bottom of the screen) is an interactive terminal connected to the ConnexCS `cx-cli` command-line tool. Use it to run ConnexCS CLI commands directly from the IDE.

To open it, click the **CX TERMINAL** tab in the bottom panel.

Type `help` to see available commands. The terminal supports standard cx-cli commands for managing your project environment, environment variables, and more.

<img src= "/apps/img/aide28.png" style="border: 2px solid #4472C4; border-radius: 8px;">

---

## ConnexCS Assistant

The ConnexCS Assistant is an AI-powered chat interface built into the IDE.

### Opening the Assistant

- Click the **$(sparkle) Open Assistant** button in the ConnexCS sidebar
- Or use the assistant icon in the secondary sidebar (right side panel)

### Using the Assistant

Type questions or requests in the chat input. The assistant is aware of your open files and active project, so you can ask it things like:
- "Explain what this script does"
- "Help me write a ScriptForge function that sends an SMS"
- "What parameters does the cxSend function accept?"

### Editor Tab Mode

Click **Open in Editor Tab** to open the assistant as a full-width editor tab if you prefer more space.

---

## SQL Auto-Complete

When editing `.sql` files (Query Builder scripts), the editor provides intelligent auto-completion including:
- SQL keywords
- Table names from your ConnexCS database schema
- Column names relevant to the current table

Auto-complete suggestions appear as you type, or press `Ctrl+Space` / `Cmd+Space` to trigger them manually.

---

## Extension Settings (for extension users)

These settings are available when using the ConnexCS Connect extension in your own IDE. Open Settings (`Ctrl+,` / `Cmd+,`) and search for **ConnexCS**.

| Setting | What it does |
|---|---|
| `connexcs.apiHost` | Override the ConnexCS API base URL. Leave blank for the default. |
| `connexcs.oauthHost` | Override the OAuth server URL. Leave blank for the default. |
| `connexcs.assistant.enabled` | Turn the ConnexCS Assistant on or off. |
| `connexcs.preview.urlTemplate` | Customise the URL used for the Anvil app preview. You can use `{app_id}` and `{file_path}` as placeholders. |
| `connexcs.cli.url` | Override the full WebSocket URL for the CX Terminal. |
| `connexcs.cli.path` | Override just the path portion of the CX Terminal WebSocket URL. |
| `connexcs.watch.enabled` | Enable/disable real-time file sync from the server. |

---

## Keyboard Shortcuts

The IDE inherits all standard VS Code keyboard shortcuts. The most relevant ones:

| Action | Shortcut |
|---|---|
| Save file | `Ctrl+S` / `Cmd+S` |
| Open command palette | `Ctrl+Shift+P` / `Cmd+Shift+P` |
| Quick file open | `Ctrl+P` / `Cmd+P` |
| Toggle sidebar | `Ctrl+B` / `Cmd+B` |
| Toggle terminal panel | `` Ctrl+` `` |
| Trigger auto-complete | `Ctrl+Space` / `Cmd+Space` |
| Search in file | `Ctrl+F` / `Cmd+F` |

---

## Tips

- **Stay signed in:** The IDE remembers your session. If you see a 401 error, your session may have expired — the IDE will automatically attempt to renew it. If it cannot, a sign-in prompt will appear.
- **One right column:** All side panels (ScriptForge preview, Run with Vars dialog, Template preview, Anvil preview) open as tabs in the same right-side column so they never clutter your screen.
- **Right-click for context actions:** Right-clicking files and folders in the Explorer shows available actions for that file type (Run, Preview, Show History, etc.).
- **Project switching does not require a reload:** You can switch projects from the status bar at any time without restarting the IDE.

---

## Signing Out

To sign out, open the ConnexCS sidebar and click **Sign Out** from the quick-actions list. This clears your session from the IDE.