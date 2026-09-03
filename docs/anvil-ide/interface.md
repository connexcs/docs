# The IDE Interface

<details>

<summary><strong>Document Metadata</strong></summary>

<br>

<strong>Category</strong>: Development → Anvil → IDE<br>

<strong>Audience</strong>: Developers, Solution Engineers, Administrators, Technical Teams<br>

<strong>Difficulty</strong>: Beginner to Intermediate<br>

<strong>Time Required</strong>: 15–20 minutes<br>

<strong>Prerequisites</strong>: Access to a ConnexCS account, an Anvil project, and familiarity with the Anvil IDE.<br>

<strong>Related Topics</strong>: <a href="https://docs.connexcs.com/guides/doc-guide/">Document Guide</a> — documentation standards, Getting Started — signing in and project selection, ScriptForge — backend scripting, Query Builder — SQL development, Anvil Apps — frontend development, CX Terminal — command-line tools, ConnexCS Assistant — AI-powered development assistance.<br>

<strong>Next Steps</strong>: Explore the workspace, navigate the project structure, configure the development environment, use the integrated AI assistant, run and debug applications, manage file history, and customize the IDE layout to suit your workflow.<br>

</details>

## Overview

The **Anvil IDE Interface** provides a complete development workspace for building, debugging, and managing Anvil applications.

It combines file management, source control, integrated debugging, AI-assisted development, project history, and workspace management within a single interface.

Understanding the purpose of each panel, tool, and workspace component enables developers to navigate projects efficiently and make full use of the development environment.

## Activity Bar (left edge)

| Option | Description |
| -------| ------------|
| **Menu**      | Opens the main application menu, providing access to file management, editing tools, navigation, terminal, preferences, and other settings|
| **File**      | Contains options for creating, opening, saving, and managing files, folders, workspaces, and application preferences|
| **Edit**      | Provides standard editing actions such as Undo, Redo, Cut, Copy, Paste, Find, and Replace|
| **Selection** | Includes commands for selecting text, expanding or shrinking selections, and performing multi-cursor operations|
| **View**      | Lets you customize the editor layout, toggle panels, zoom, and control the appearance of the workspace|
| **Go**  | Provides quick navigation to files, symbols, line numbers, definitions, and other locations within the workspace|
| **Run**       | Contains options to run, debug, or manage the execution of applications and scripts|
| **Terminal**  | Opens and manages integrated terminal sessions for executing command-line operations|
| **Help**      | Provides access to documentation, keyboard shortcuts, release notes, and application support resources|

<img src="/apps/img/aide3.png" width="500" style="border: 2px solid #4472C4; border-radius: 8px;">

## Explorer

Opens the Explorer view, where you can browse, create, rename, move, and delete files and folders within your workspace. It serves as the primary file management panel for your project.

<img src="/apps/img/aide4.png" width="200" style="border: 2px solid #4472C4; border-radius: 8px;">

## Search

1. Opens the **Search** view, allowing you to search and replace text across the entire workspace.

2. You can narrow the search by specifying **Files to Include** or **Files to Exclude**, making it easier to search within specific files or folders while ignoring others.

3. Advanced options such as **Match Case**, **Whole Word**, and **Regular Expression** are also available to refine search results.

<img src="/apps/img/aide5.png" width="400" style="border: 2px solid #4472C4; border-radius: 8px;">

## Extensions

Opens the **Extensions** view, where you can browse, install, update, enable, disable, and manage extensions from the `Visual Studio Code` Marketplace.

Extensions add support for additional programming languages, debugging tools, themes, integrations, and other features to enhance your development experience.

<img src="/apps/img/aide8.png" width="400" style="border: 2px solid #4472C4; border-radius: 8px;">

## ConnexCS Sidebar

The **ConnexCS Sidebar** provides access to your project workspace, ConnexCS tools, and project-related actions.

### Explorer

The **Explorer** provides access to project selection, ConnexCS Assistant, and related workspace actions.

| Option    | Description |
| ----------|-------------|
| **Select a Project** | Selects a project to load and work with in the Explorer|
| **Open ConnexCS Assistant** | Opens the ConnexCS Assistant to interact with the assistant and get help with your project|
| **Open Assistant in Editor Tab** | Opens the ConnexCS Assistant in a dedicated editor tab, allowing you to use the assistant while working on the project|
| **Refresh Explorer** | Refreshes the Explorer to update the project and workspace information|
| **Copy Status Report** | Copies the current status information, which can be useful for troubleshooting or sharing with the support team |
| **Sign Out** | Signs you out of the ConnexCS Assistant|

<img src="/apps/img/anvilexplorer.png" style="border: 2px solid #4472C4; border-radius: 8px;">

#### Refresh Explorer

When you click **Refresh Explorer**, the Explorer refreshes and displays the current project workspace and its associated files and information.

The refreshed Explorer window is divided into several sections:

| Section | Description  |
| --------|-=====------- |
| **Open Editors** | Displays files or editors that are currently open in the workspace|
| **Workspace**    | Displays the selected project and its folder structure. In the example, the **Test** project contains `backend` and `frontend` folders. You can expand these folders to browse their contents|
| **Outline**      | Displays the structure or outline of the currently selected file when applicable|
| **Timeline**     | Provides a timeline of changes or activity associated with the selected file|
| **Domains**      | Displays domains associated with the selected project or workspace, such as the deployed project domain|
| **File History** | Displays the project's file history, including folders and files along with their versions and modification information|

**Workspace**

The **Workspace** section provides a hierarchical view of the selected project. Expand a folder to view its files and subfolders.

For example:

```text
Test
├── backend
└── frontend
```

The **File History** section provides additional information about previously modified files, including their version and when they were last updated.

> **Note:** Clicking **Refresh Explorer** refreshes the Explorer and opens this workspace view, allowing you to view the latest project structure, files, domains, and file history.

<img src="/apps/img/refreshexplorer.png" style="border: 2px solid #4472C4; border-radius: 8px;">

**Files- File History**

The **Files** view displays the current file and folder structure of the selected project, along with version and modification information.

| Element | Description|
|---------|------------|
| **Project name** | Displays the currently selected project. In this example, the project is **Test**|
| **Folder**       | Displays project folders such as `frontend` and `backend`. Click the arrow to expand or collapse a folder|
| **File**         | Displays the files available within each folder|
| **Version**      | Shows the current version number of a file, such as `v46`, `v119`, or `v115`|
| **Last Updated** | Shows when the file was last modified. The time may be displayed as a relative value such as **9d ago** or as a specific date. |
| **Refresh**      | Refreshes the File History view to display the latest file and version information|

**File Structure**

The project structure shown in the example is:

```text
Test
├── frontend
│   └── App.vue
│
└── backend
    ├── data
    ├── buttons.json
    ├── cxCallControl.js
    ├── cxRegistry.js
    ├── hearth.js
    ├── index.js
    └── test.js
```

The **Files** view is useful for quickly checking the project's current structure, identifying available files, and viewing their latest versions and modification dates.

**Timeline- File History**

The **Timeline** view in **File History** shows the project's saved points in time. It allows you to review when files were changed and provides an option to restore the **entire project** to an earlier point.

The message **“Points in time across the project. Restoring rolls every file back to its version at that moment.”** means that restoring a timeline point does not affect just one file—it restores **all project files to the versions they had at that specific time**.

**Timeline Options**

| Option                      | Description                                                                                   |
| --------------------------- | --------------------------------------------------------------------------------------------- |
| **File Name**               | Shows the file associated with that timeline entry.                                           |
| **Date & Time**             | Shows when the file was last updated at that point in the project history.                    |
| **Open file**               | Opens the selected file so you can review its contents.                                       |
| **Restore project to here** | Restores the **entire project** to the versions of all files available at that point in time. |

**Example**

If you select:

**`App.vue — 8/25/2026, 6:29:21 PM`**

* **Open file** → Opens the `App.vue` file from that point.
* **Restore project to here** → Rolls the **entire project** back to its state as of that timeline point, not just `App.vue`.

> **Important:** Use **Restore project to here** carefully, as it affects the project as a whole and rolls all files back to their versions at the selected point in time.

<img src="/apps/img/timeline.png" style="border: 2px solid #4472C4; border-radius: 8px;">

### Version Control

The **Version Control** section allows you to manage branches, snapshots, and changes in your project.

<img src="/apps/img/vc1.png" style="border: 2px solid #4472C4; border-radius: 8px;">

| Icon / Element | Function |
| ---------------|----------|
| 📷 **Camera** | Captures a new snapshot of the project's current state|
| **Branch/Fork icon** | Creates a new branch|
| **↻ Refresh** | Refreshes or re-syncs the panel with the current project state|
| **"main ✓" dropdown** | Displays the active branch. Click it to switch to another branch|
| **+ (plus)** | Creates a new branch|
| **Merge icon** | Merges a branch into the current branch|
| **Changes** | Lists uncommitted changes or edits in the project|
| **Snapshots**  | Displays snapshots saved for the project. A snapshot is a manually or automatically created save point that captures the full state of the project at a specific point in time|
| **Snapshot count** | The blue number badge shows the current number of snapshots taken for the project. <br> **+ (plus) in Snapshots**: Manually creates a new snapshot. <br>**Snapshot entry**: Displays the saved snapshot, such as **Publish ce1c39958c64**<br> **Timestamp**: Shows when the snapshot was created, such as **1d ago**. </br>

## Create Project

The **Create Project** option allows you to create a new Anvil project.

<br><img src="/apps/img/caa3.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

## Accounts

Opens the **Accounts menu**, where you can manage your **signed-in account** and **synchronization settings**.

From this menu, you can view your current account, configure **Backup and Sync settings**, enable **Cloud Changes**, and manage account preferences for **extensions** and other supported services.

<img src="/apps/img/aide10.png" width="300" style="border: 2px solid #4472C4; border-radius: 8px;">

## Manage

Opens the **Manage** menu, where you can access and configure editor settings and preferences.

From here, you can open the **Command Palette**, manage **Profiles**, **Settings**, **Extensions**, **Keyboard Shortcuts**, **Snippets**, **Tasks**, and **Themes**, as well as configure Backup and Sync and other application preferences.

<img src="/apps/img/aide11.png" width="400" style="border: 2px solid #4472C4; border-radius: 8px;">

## Outline

| Section | Description |
| --------|------------ | 
| **Outline**  | Displays the structure of the currently active file by listing its symbols, such as classes, functions, methods, variables, and headings. This allows you to quickly navigate to different sections of the file. If the active file does not support outlines, no information is displayed|

<img src="/apps/img/aide30.png" width="350" style="border: 2px solid #4472C4; border-radius: 8px;">

## Open a Remote Window

Opens the **Remote Development** menu, allowing you to connect to and work in remote environments directly from the editor. You can connect using **SSH**, **Dev Containers**, **WSL**, **GitHub Codespaces**, or **Remote Repositories**. If a required extension is not installed, you will be prompted to install it before connecting.

<img src="/apps/img/aide13.png" style="border: 2px solid #4472C4; border-radius: 8px;">

## Problems Panel

| Section | Description |
| --------|------------ | 
| **Problems** | Displays errors, warnings, and informational messages detected in the current workspace. Selecting an issue navigates directly to the corresponding file and line, making it easier to identify and resolve problems. When no issues are found, the panel displays **"No problems have been detected in the workspace."** |
| **Output**  | Displays output generated by the editor, extensions, build tasks, and other tools. Use the drop-down menu to switch between different output sources|
| **Terminal**    | Opens the integrated terminal, allowing you to execute command-line operations without leaving the editor. Multiple terminal sessions can be created and managed|
| **CX Logs**     | Displays logs generated by ConnexCS extensions and services. These logs help monitor extension activity and troubleshoot issues related to ConnexCS features|
| **CX Terminal** | Provides a ConnexCS-specific terminal for running supported commands and interacting with ConnexCS development tools directly from the editor|

<img src="/apps/img/aide14.png" style="border: 2px solid #4472C4; border-radius: 8px;">

## Workspace

Represents the current project or collection of folders opened in the editor.

The **Workspace** search box allows you to quickly find files, run commands, search text, navigate to symbols, start debugging, and perform other workspace-related actions without manually browsing the project.

<img src="/apps/img/aide15.png" style="border: 2px solid #4472C4; border-radius: 8px;">

## Chat

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

## Status Bar

The bottom bar shows your active project name. Click it to switch projects.

<br><img src="/apps/img/aide19.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

## Layout

| Field | Description |
| -----|--------------|
| **Select Keyboard Layout**| Allows you to search for and select the keyboard layout used by the editor. The selected layout ensures that keyboard shortcuts and key mappings match your physical keyboard|
| **Auto Detect** | Automatically detects and applies the keyboard layout based on your operating system and connected keyboard|
| **Configure Keyboard Layout** | Opens the keyboard layout configuration settings, allowing you to manually select or change the active keyboard layout|
| **Keyboard Layout List**| Displays all available keyboard layouts, such as **Belgian**, **Czech**, **French**, **German**, **India**, and others. Select a layout to apply it to the editor. The currently active layout is marked with **Current layout**|
| **Current Layout Indicator**| Displays the active keyboard layout in the status bar, for example, **Layout: India**. Click the indicator to quickly switch to a different keyboard layout|

<br><img src="/apps/img/aide20.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
