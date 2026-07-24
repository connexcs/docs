# ConnexCS Terminal

<details>
<summary><strong>Document Metadata</strong></summary>
<br>

<strong>Category</strong>: Developer Tools → Terminal → ConnexCS Terminal<br>

<strong>Audience</strong>: Developers, System Administrators, Operators, DevOps Engineers, Support Engineers<br>

<strong>Difficulty</strong>: Beginner to Intermediate<br>

<strong>Time Required</strong>: 5–15 minutes<br>

<strong>Prerequisites</strong>:<br>
<ul>
<li>A ConnexCS account with access to the Control Panel</li>
<li>Permission to access the ConnexCS Terminal</li>
<li>Basic familiarity with command-line interfaces (CLI)</li>
<li>Knowledge of ConnexCS commands and workflows (recommended)</li>
</ul>

<strong>Related Topics</strong>: Terminal Tools (CX-Tools), ScriptForge, Anvil, Apps Platform, CLI Commands, JWT Authentication<br>

<strong>Next Steps</strong>: Open the ConnexCS Terminal from the Control Panel, familiarize yourself with the available commands using <code>help</code>, authenticate if required, and begin executing supported CLI commands for development, troubleshooting, and operational tasks.<br>

</details>

!!! Warning "The ConnexCS Terminal is currently available as a **Beta** feature. Functionality and available commands may change as the feature continues to evolve."

## Overview

The **ConnexCS Terminal** is an integrated command-line interface (**CLI**) available directly within the ConnexCS Control Panel. It allows authenticated users to execute supported ConnexCS CLI commands without leaving the web interface.

Once launched, the terminal automatically uses the **authenticated Control Panel session**, providing a convenient environment for developers and administrators to perform operational tasks, manage applications, and interact with ConnexCS services.

The terminal provides a familiar command-line experience while remaining fully integrated with the ConnexCS platform.

## Key Features

* Integrated directly into the ConnexCS Control Panel
* Automatically authenticated using your current ConnexCS session
* Interactive command-line interface
* Execute supported ConnexCS CLI commands
* Access developer and operational tools from within the platform
* Suitable for development, testing, and administrative workflows

## Use Cases

### Network Diagnostics

Perform network troubleshooting by verifying connectivity, resolving DNS records, tracing network paths, validating TLS certificates, checking SIP endpoint availability, and investigating IP ownership or registration details. These capabilities help identify and resolve network-related issues efficiently.

---

### Call Investigation

Search and investigate call activity, inspect SIP signaling, analyze packet captures (PCAPs), and review call information to diagnose call quality issues and support operational troubleshooting.

---

### Database Management

Access and manage application data by executing database queries, working with Hearth schemas and tables, and managing key-value data used by applications and services.

---

### Script Execution

Execute ScriptForge backend scripts directly from the terminal to test application logic, validate workflows, automate operational tasks, and debug backend functionality.

---

### API Testing

Interact directly with ConnexCS API endpoints for development, testing, debugging, and integration, eliminating the need for external API clients during routine development.

---

### AI Assistance

Use the integrated ConnexCS AI assistant to ask platform-related questions, receive troubleshooting guidance, explore documentation, and obtain contextual assistance while working in the terminal.

---

### Documentation Search

Search the ConnexCS documentation directly from the terminal to quickly locate configuration guides, feature documentation, API references, and technical resources without leaving the Control Panel.

---

### System Administration

Perform routine administrative tasks such as monitoring system activity, reviewing audit logs, inspecting server information, verifying authenticated sessions, and managing operational workflows.

---

### File Management

Navigate the virtual filesystem, manage files and directories, edit Anvil project files, and organize application resources within the terminal environment.

---

### Data Processing

Process, filter, transform, and analyze command output using built-in text processing capabilities, making it easier to work with logs, query results, and operational data as part of development and troubleshooting workflows.

## How to use ConnexCS Terminal

1. Login to your account.
2. Click on th `CLI Terminal` icon.
3. A command-line terminal appears, where you can execute supported commands and view the results. <br><img src= "/misc/img/cterminal1.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
4. Type `help` to get started. You will see a list of commands for your use. <br><img src= "/misc/img/cterminal2.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

## Commands

### ANVIL Commands

Anvil commands are command-line interface (CLI) commands that enable users to manage project versions, compare revisions, publish builds, and create or restore project snapshots.

These commands provide version control and build management capabilities directly from the terminal, allowing users to track changes, review modifications, and maintain project history efficiently.

| Command | Description | Example Use Case |
| --------|------------ | ---------------- |
| `backward` | Moves a file **one version back** in its history, restoring the previous version | You made a mistake in the latest edit and want to revert to the version before it |
| `build` | Manages **published builds** of your project. It includes subcommands like `activate`, `forward`, `backward`, and `list` to publish, switch, or view builds | Publish a new documentation version or roll back to an earlier published build|
| `diff` | Compares **two versions of a file** and displays the differences between them | Review what changed between Version 5 and Version 7 before publishing |
| `forward`  | Moves a file **one version forward** in its history after it has been moved backward | You reverted a file but later decide to restore the newer version|
| `snapshot` | Creates and manages **project snapshots**, which capture the state of the entire project at a specific point in time| Create a snapshot before making major changes so you can restore the entire project if needed|

### Commands

The terminal provides a comprehensive set of commands for interacting with the platform. These commands enable you to navigate the virtual workspace, manage files and directories, perform network diagnostics, execute scripts, access documentation, and retrieve system information directly from the command line.

| Command | Description | Example Use Case |
| --------|------------ | ---------------- |
| `audit` |  Displays the setup audit log| Review configuration changes or verify the platform setup after deployment|
| `cd` -- **ask**|  Changes the current virtual directory| Navigate from your home directory to a project folder before editing files|
| `clear`|  Clears the terminal screen| Remove previous command output to start with a clean terminal view|
| `date` | Displays the current server time in UTC| Verify the server time when troubleshooting scheduled jobs or log timestamps|
| `dig` | Performs DNS lookups for common record types (A, AAAA, MX, NS, TXT, CNAME, SOA, PTR, SRV, and ANY)| Verify that a domain resolves to the correct IP address or inspect its DNS records|
| `docs`|  Searches the ConnexCS documentation| Quickly locate documentation for a feature or command without leaving the terminal|
| `dog` | Alias for the `dig` command| Perform DNS lookups using an alternative command name|
| `exit`| Ends the current terminal session| Close the terminal after completing administrative tasks|
| `help` | Displays help information for commands and topics| Learn how a command works or view its available options|
| `history` | Displays the command history for the current session| Review previously executed commands or repeat a recent operation|
| `ip`  | Retrieves information about an IP address| Identify the location, ASN, or ownership details of an IP address |
| `log` | Queries or streams the system log in real time | Monitor logs while troubleshooting a service or verifying system activity|
| `ls` | Lists files and directories in the current virtual directory| View the contents of the current directory before opening or modifying files|
| `mkdir` | Creates a new directory *(not supported under `/anvil`)*| Organize project files by creating a new folder|
| `mtr`| Combines ping and traceroute to analyze the network path to a host| Diagnose packet loss or latency between the platform and a destination|
| `mv` | Renames or moves a file or directory *(not supported under `/anvil`)*| Rename a configuration file or move it to another directory|
| `nano` | Opens an Anvil file in a full-screen text editor| Edit a configuration or documentation file directly from the terminal|
| `network-ping` | Sends ping requests from the platform's network instead of the current terminal session| Verify connectivity from the platform to a remote host|
| `ping` | Sends ICMP echo requests to a host | Confirm whether a server or network device is reachable|
| `ping-sip` | Sends a SIP OPTIONS request and displays the response| Verify that a SIP endpoint is online and responding to SIP requests|
| `pwd` | Displays the current virtual directory| Confirm your current location before running file management commands|
| `rdap` | Retrieves domain or IP registration information using RDAP| View ownership and registration details for a domain or IP address|
| `rm` | Removes a file or directory| Delete obsolete files or directories from the workspace|
| `rmdir`| Removes an empty directory *(not supported under `/anvil`)*| Delete an empty folder that is no longer required|
| `run`| Executes a ScriptForge backend script| Run an automation or backend script as part of your workflow|
| `tls` | Displays TLS certificate details, including issuer, subject, expiration, and trust status| Verify a server's SSL/TLS certificate before establishing a secure connection|
| `tools`| Lists data manipulation tools available for use in pipelines| Explore the available utilities when building or debugging a pipeline|
| `traceroute`| Displays the network path to a host hop by hop| Identify where network latency or routing issues occur|
| `version`| Displays build information, session details, JWT claims, expiration, and rate limit information| Confirm the current platform version or inspect session details|
|`whoami`| Displays the authenticated user for the current session| Verify which account is currently authenticated|
| `whois`| Performs a WHOIS lookup for a domain or IP address *(alias for `rdap`)*| Check the registration information for a domain or public IP address|


<br><img src= "/misc/img/cterminal3.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>