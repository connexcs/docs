# ConnexCS Anvil IDE — User Guide

<details>
<summary><strong>Document Metadata</strong></summary>
<br>

<strong>Category</strong>: Development → Anvil → IDE<br>
<strong>Audience</strong>: Developers, Solution Engineers, Administrators, Technical Teams<br>
<strong>Difficulty</strong>: Beginner to Intermediate<br>
<strong>Time Required</strong>: 15–20 minutes<br>
<strong>Prerequisites</strong>: Access to a ConnexCS account, an Anvil project, and either the hosted Anvil IDE or the ConnexCS Connect extension for a compatible IDE (such as VS Code, Cursor, or VS Codium).<br>
<strong>Related Topics</strong>: <a href="https://docs.connexcs.com/guides/doc-guide/">Document Guide</a> — documentation standards, ScriptForge — backend scripting, Query Builder — SQL development, Anvil Apps — frontend development, CX Terminal — command-line tools.<br>
<strong>Next Steps</strong>: Sign in to the Anvil IDE, select a project, explore the project structure, edit or create files, run ScriptForge scripts, preview Anvil applications, and use the built-in Assistant and CX Terminal to accelerate development.<br>

</details>

---

## Overview

The **Anvil IDE** is ConnexCS's integrated development environment for building Anvil apps — the scripts, page templates, frontend components, and supporting resources that power your ConnexCS platform.

It gives you a full code editor experience with built-in tools specifically designed for ConnexCS development.

## Who Is It For?

The Anvil IDE is designed for anyone developing or maintaining applications on the ConnexCS platform, including:

- **Developers** building backend logic with ScriptForge or creating frontend applications with Anvil.
- **Solution Engineers** developing customer-specific integrations and workflows.
- **Technical Teams** managing project files, templates, and SQL queries.
- **Platform Administrators** maintaining Anvil projects and collaborating with development teams.

---

## Benefits

Using the Anvil IDE provides several advantages for developing on the ConnexCS platform:

- **Unified Development Environment** for backend and frontend development.
- **Flexible Access** through either the hosted web IDE or the ConnexCS Connect extension for your preferred editor.
- **Real-Time File Synchronization** to keep projects up to date across collaborators.
- **Built-in Preview Tools** for scripts, templates, and frontend applications.
- **Integrated AI Assistance** to help explain code, answer questions, and accelerate development.
- **Native ConnexCS Integration** with projects, authentication, and platform resources.
- **Improved Developer Productivity** through intelligent tools, automation, and streamlined workflows.

---

## Key Features

The Anvil IDE includes a comprehensive set of development tools:

- Hosted web IDE and VS Code-compatible extension.
- Secure authentication using browser API tokens.
- Project Explorer for browsing and managing Anvil project files.
- ScriptForge execution with **Run** and **Run with Vars** actions.
- Live execution results with formatted output.
- Structured logging through the **CX Logs** panel.
- Live HTML template preview.
- Interactive Anvil application preview.
- Integrated **CX Terminal** for ConnexCS CLI commands.
- File history with version restoration.
- SQL auto-completion for Query Builder scripts.
- Script and template metadata management.
- Built-in AI-powered ConnexCS Assistant.
- Automatic synchronization of project files.

---

## Applications

The Anvil IDE can be used for a variety of ConnexCS development tasks, including:

- Developing and testing ScriptForge backend scripts.
- Building Anvil frontend applications.
- Creating and maintaining HTML email and SMS templates.
- Writing and testing SQL Query Builder scripts.
- Managing application files and project resources.
- Testing HTTP endpoint scripts.
- Previewing frontend applications during development.
- Debugging applications using integrated logs and execution results.
- Collaborating on shared Anvil projects with automatic synchronization.
- Developing customer-specific integrations and automation.

## Ways to Access the Anvil IDE

| Where | How to access |
|---|---|
| **Hosted web IDE** | Go to [code.connexcs.com](https://code.connexcs.com) directly, or open it from within your ConnexCS account at **app.connexcs.com → Anvil → IDE** (opens in a new tab) |
| **Your own IDE** | Install the **ConnexCS Connect** extension from the VS Code Marketplace, Open VSX, or any IDE that supports VS Code extensions (VS Code desktop, VS Codium, Cursor, etc.) |

Both options give you the same features. The hosted IDE is the quickest way to get started; the extension lets you work inside whichever editor you already use.

---

## Getting Started

### Signing In

1. Login to your **Control Panel**.
2. Click on **Anvil IDE** from the left-menu.
3. A new tab will open and redirect you to [`code.connexcs.com`](code.connexcs.com).
4. Click on `Sign In to ConnexCS`.
5. When you open the IDE for the first time, the ConnexCS panel on the left sidebar shows two sign-in options:

   - **Sign in via Browser** — Opens a browser window for ssign-in with your ConnexCS account. Recommended for most users.

   - **Sign in with API Token** — Paste a ConnexCS API token directly if you prefer token-based access.<br><img src= "/apps/img/aide1.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

6. After signing in you will see your files and a status bar entry at the bottom of the screen showing your active project. <br><img src= "/apps/img/aide2.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

### Selecting a Project

After signing in, a **Welcome** panel appears if you have not yet selected a project. From here you can:

- Search and select from your existing ConnexCS projects
- Browse recently used projects

Once a project is selected, the file explorer shows all your Anvil project files (scripts, templates, frontend components, and other resources).

To switch projects at any time, click the **project name** in the status bar at the bottom, or use the **Switch Project** option in the ConnexCS sidebar.

---

## The Interface

### Activity Bar (left edge)

| **Option**    | **Description**  |
| -------------|-------------------|
| **Menu** | Opens the main application menu, providing access to file management, editing tools, navigation, terminal, preferences, and other settings|
| **File** | Contains options for creating, opening, saving, and managing files, folders, workspaces, and application preferences|
| **Edit** | Provides standard editing actions such as Undo, Redo, Cut, Copy, Paste, Find, and Replace|
| **Selection** | Includes commands for selecting text, expanding or shrinking selections, and performing multi-cursor operations|
| **View** | Lets you customize the editor layout, toggle panels, zoom, and control the appearance of the workspace|
| **Go** | Provides quick navigation to files, symbols, line numbers, definitions, and other locations within the workspace|
| **Run** | Contains options to run, debug, or manage the execution of applications and scripts|
| **Terminal**  | Opens and manages integrated terminal sessions for executing command-line operations|
| **Help** | Provides access to documentation, keyboard shortcuts, release notes, and application support resources|

<img src= "/apps/img/aide3.png" style="border: 2px solid #4472C4; border-radius: 8px;">

### Explorer

Opens the Explorer view, where you can browse, create, rename, move, and delete files and folders within your workspace. It serves as the primary file management panel for your project.

<img src= "/apps/img/aide4.png" style="border: 2px solid #4472C4; border-radius: 8px;">

### Search

1. Opens the **Search** view, allowing you to search and replace text across the entire workspace.
2. You can narrow the search by specifying **Files to Include** or **Files to Exclude**, making it easier to search within specific files or folders while ignoring others.
3. Advanced options such as **Match Case**, **Whole Word**, and **Regular Expression** are also available to refine search results.

<img src= "/apps/img/aide5.png" style="border: 2px solid #4472C4; border-radius: 8px;">

### Source Control

Opens the **Source Control** view, where you can manage version-controlled files and track changes in your workspace.

It allows you to view modified files, stage and commit changes, review differences, and synchronize your project with a supported source control provider such as `Git`. 

If no provider is configured, a message indicating that no source control providers are registered is displayed.

<img src= "/apps/img/aide6.png" style="border: 2px solid #4472C4; border-radius: 8px;">

### Run and Debug

Opens the **Run and Debug** view, where you can run, test, and debug your applications.

It provides tools for launching programs, setting breakpoints, inspecting variables, and troubleshooting code.

If no debug extension is installed or enabled, a message prompting you to enable or install one is displayed.

<img src= "/apps/img/aide7.png" style="border: 2px solid #4472C4; border-radius: 8px;">

### Extensions

Opens the **Extensions** view, where you can browse, install, update, enable, disable, and manage extensions from the `Visual Studio Code` Marketplace.

Extensions add support for additional programming languages, debugging tools, themes, integrations, and other features to enhance your development experience.

<img src= "/apps/img/aide8.png" style="border: 2px solid #4472C4; border-radius: 8px;">

### ConnexCS Sidebar

Shows your sign-in status, active project name, and quick-action buttons. When you are signed in it displays:

| Section|Description|
| -------|---------- |
| **Explorer** | Displays the project structure, including files and folders in your workspace. It allows you to browse, open, create, rename, move, and delete files and directories. The Explorer also provides quick access to ConnexCS tools such as **Open ConnexCS Assistant**, **Open Assistant in Editor Tab**, **Refresh Explorer**, **Copy Status Report**, and **Sign Out**|
| **File History** | Tracks changes made to files in your project and maintains previous versions. You can switch between the **Files** view to see version history for individual files or the **Timeline** view to view project-wide changes in chronological order. It also allows you to compare versions, restore previous file revisions, or roll back the entire project to an earlier point in time|

<img src= "/apps/img/aide9.png" style="border: 2px solid #4472C4; border-radius: 8px;">

### Accounts

Opens the **Accounts menu**, where you can manage your **signed-in account** and **synchronization settings**.

From this menu, you can view your current account, configure **Backup and Sync settings**, enable **Cloud Changes**, and manage account preferences for **extensions** and other supported services.

<img src= "/apps/img/aide10.png" style="border: 2px solid #4472C4; border-radius: 8px;">

### Manage

Opens the **Manage** menu, where you can access and configure editor settings and preferences.

From here, you can open the **Command Palette**, manage **Profiles**, **Settings**, **Extensions**, **Keyboard Shortcuts**, **Snippets**, **Tasks**, and **Themes**, as well as configure Backup and Sync and other application preferences.

<img src= "/apps/img/aide11.png" style="border: 2px solid #4472C4; border-radius: 8px;">

### Outline and Timeline

| Section| Description|
| --------|---------- |
| **Outline** | Displays the structure of the currently active file by listing its symbols, such as classes, functions, methods, variables, and headings. This allows you to quickly navigate to different sections of the file. If the active file does not support outlines, no information is displayed|
| **Timeline** | Shows the history of the currently active file, including changes, commits, or saved versions provided by supported source control or extensions. This helps you review previous modifications and track the file's evolution over time. If timeline information is unavailable, the panel remains empty|

<img src= "/apps/img/aide12.png" style="border: 2px solid #4472C4; border-radius: 8px;">

### Open a Remote Window

Opens the **Remote Development** menu, allowing you to connect to and work in remote environments directly from the editor. You can connect using **SSH**, **Dev Containers**, **WSL**, **GitHub Codespaces**, or **Remote Repositories**. If a required extension is not installed, you will be prompted to install it before connecting.

<img src= "/apps/img/aide13.png" style="border: 2px solid #4472C4; border-radius: 8px;">

### Problems Panel

| Section| Description|
| --------|---------- |
| **Problems** | Displays errors, warnings, and informational messages detected in the current workspace. Selecting an issue navigates directly to the corresponding file and line, making it easier to identify and resolve problems. When no issues are found, the panel displays **"No problems have been detected in the workspace."** |
| **Output** | Displays output generated by the editor, extensions, build tasks, and other tools. Use the drop-down menu to switch between different output sources|
| **Terminal**| Opens the integrated terminal, allowing you to execute command-line operations without leaving the editor. Multiple terminal sessions can be created and managed|
| **CX Logs**| Displays logs generated by ConnexCS extensions and services. These logs help monitor extension activity and troubleshoot issues related to ConnexCS features|
| **CX Terminal** | Provides a ConnexCS-specific terminal for running supported commands and interacting with ConnexCS development tools directly from the editor|

<img src= "/apps/img/aide14.png" style="border: 2px solid #4472C4; border-radius: 8px;">

### Workspace

Represents the current project or collection of folders opened in the editor.

The **Workspace** search box allows you to quickly find files, run commands, search text, navigate to symbols, start debugging, and perform other workspace-related actions without manually browsing the project.

<img src= "/apps/img/aide15.png" style="border: 2px solid #4472C4; border-radius: 8px;">

### Chat

The Chat panel allows you to interact with the AI assistant for help with coding, debugging, code explanations, code generation, documentation, and other development tasks.

You can provide a prompt and add relevant project context when required. The assistant uses the available project context to provide more relevant responses. <br><img src="/apps/img/aide16.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

1. **Generate Agent Instructions** — Helps the assistant understand your codebase.
2. **Add Context (+)** — Attach relevant files, folders, instructions, or other workspace information to your prompt. <br><img src="/apps/img/aide17.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

3. **Models** — Select the AI model to use for the conversation.
4. **Configure Tools** — Control the tools available to the AI assistant during the chat:

    | Tool | Description |
    |------|-------------|
    | **Agent** | Delegate tasks to specialized agents |
    | **Execute** | Run code/apps locally (with approval) |
    | **Read** | Read workspace files |
    | **Todo** | Manage task lists |
    | **VS Code** | Interact with VS Code features |

    <img src="/apps/img/aide18.png" style="border: 2px solid #4472C4; border-radius: 8px;">

5. **New Chat** — Start a new conversation, or open it in a separate editor tab, new window, background agent, cloud agent, or Codex agent.
6. **Views and More Actions** — Undo/redo last edit, move chat to editor area or new window, show voice transcripts, or set chat to open by default.

7. `ConnexCS Assistant`: [Click here](https://docs.connexcs.com/globalaiagent/) for more full details.

### Status Bar

The bottom bar shows your active project name. Click it to switch projects. <br><img src= "/apps/img/aide19.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

### Layout

| **Field**  | **Description** |
| -----------|---------------- |
| **Select Keyboard Layout** | Allows you to search for and select the keyboard layout used by the editor. The selected layout ensures that keyboard shortcuts and key mappings match your physical keyboard|
| **Auto Detect** | Automatically detects and applies the keyboard layout based on your operating system and connected keyboard|
| **Configure Keyboard Layout** | Opens the keyboard layout configuration settings, allowing you to manually select or change the active keyboard layout|
| **Keyboard Layout List** | Displays all available keyboard layouts (such as **Belgian**, **Czech**, **French**, **German**, **India**, and others). Select a layout to apply it to the editor. The currently active layout is marked with **Current layout** |
| **Current Layout Indicator**  | Displays the active keyboard layout in the status bar (for example, **Layout: India**). Click the indicator to quickly switch to a different keyboard layout|

<br><img src= "/apps/img/aide20.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

## Working with Files

### Opening and Editing Files

Click any file in the Explorer to open it in the editor. Files are saved directly to ConnexCS — there is no local copy. <br><img src= "/apps/img/aide21.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

### Creating Files and Folders

Right-click any folder in the Explorer and choose **New File** or **New Folder**. The new item is created inside the folder you right-clicked, or inside the last folder you selected in the tree. <br><img src= "/apps/img/aide22.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

Another option is to click on the `New Folder` or `New File` icons when you hover over the project. <br><img src= "/apps/img/aide23.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

### Saving

Files are saved automatically when you press `Ctrl+S` / `Cmd+S`. A save indicator appears in the editor toolbar when there are unsaved changes. If saving fails (for example due to a network issue) a warning button appears — click it to retry.

### Real-Time Sync

If another person or process changes a file on the server while you have the IDE open, the Explorer and open editors automatically refresh to show the latest version. You do not need to manually reload.

---

## ScriptForge

ScriptForge is ConnexCS's backend scripting system. Scripts live in the `backend/` folder and are JavaScript files.

### Running a Script

Open a `.js` script. You will see **▶ Run** and **▶ Run with Vars** links appear directly above each exported `async function` in the code (these are called CodeLens actions). You can also use the toolbar buttons at the top of the editor.

- **Run** — Executes the script's `main()` function immediately. The result appears in the **Preview** panel to the right.
- **Run with Vars** — Opens a dialog where you can enter input variables before running. Useful when your script expects parameters. <br><img src= "/apps/img/aide24.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

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

<br><img src= "/apps/img/caa6_results.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

### Console Logs

While a script runs, any `console.log()` calls appear in the **CX Logs** panel at the bottom. Logs are structured — objects, arrays, maps, and other types are displayed in a tree you can expand. You can:
- Filter logs by level (info, warn, error) or search by text
- Pause and clear the log output
- Switch between logs from different scripts

<img src= "/apps/img/caa6_console.png" style="border: 2px solid #4472C4; border-radius: 8px;">

---

## Anvil App Preview

The Anvil Preview lets you see your frontend app running live inside the IDE.

### Opening the Preview

- Click the **$(globe) Preview Anvil App** button in the ConnexCS sidebar or editor toolbar to open the default preview (loads your app's `App.vue` entry point).
- Right-click any `.vue` file in the Explorer and choose **Open in Preview** to preview that specific file.

### Multiple Preview Tabs

You can have multiple preview tabs open at the same time. Each new **Open in Preview** action opens a new tab in the right-side panel.

### Switching Files Within a Preview Tab

Each preview tab has a file selector button in its toolbar (showing the current file name with a ▾ arrow). Click it to choose a different file to display in that tab without opening a new one.

### Refresh and External

Each preview panel also has:
- **↻ Reload** — refreshes the embedded preview
- **⧉ Open in browser** — opens the preview URL in your default browser

### More Options

1. **Script Metadata**: Click the **···** menu in the editor toolbar (or the overflow menu on the script tab) to open **Edit Metadata**. From here you can update the script's name and other properties stored in ConnexCS.

2. **Endpoint URL**: If your script is exposed as an HTTP endpoint, use **Copy Endpoint URL** from the toolbar overflow menu to copy the URL. You can then test it with curl or Postman.

3. **Code Snippets**: Use **Insert Snippet** from the overflow menu to browse and insert ready-made code templates for common ConnexCS patterns (socket listeners, API calls, etc.).

4. **Documentation**: Click **Open Docs** in the overflow menu to open the documentation page for the active script.

<img src= "/apps/img/aide27.png" style="border: 2px solid #4472C4; border-radius: 8px;">

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

- Click the **Open Assistant** button in the ConnexCS sidebar.
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

---

*ConnexCS Anvil IDE — v2.5 | [connexcs.com](https://connexcs.com) | [Support](https://connexcs.com/support)*
