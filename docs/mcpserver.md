# ConnexCS MCP Server

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Integrations → AI & Automation (MCP Server)<br>
<strong>Audience</strong>: Developers, System Administrators, Operators, SREs, AI Integrators<br>
<strong>Difficulty</strong>: Intermediate<br>
<strong>Time Required</strong>: 10–20 minutes<br>
<strong>Prerequisites</strong>: ConnexCS account with appropriate permissions; MCP-compatible client (e.g., Claude Desktop, VS Code, ChatGPT); ability to authenticate using JWT, OAuth, or credentials; basic understanding of ConnexCS tools such as CDR, SIP Trace, and routing.<br>
<strong>Related Topics</strong>: <a href="https://docs.connexcs.com/ai-agent/">AI Agent</a>, <a href="https://docs.connexcs.com/scriptforge/">ScriptForge</a>, <a href="https://docs.connexcs.com/troubleshooting/signalling/">Troubleshooting – Signalling</a>, <a href="https://docs.connexcs.com/troubleshooting/media/">Troubleshooting – Media</a>, <a href="https://docs.connexcs.com/developer/api/">API Integrations</a><br>
<strong>Next Steps</strong>: Connect your MCP client to the ConnexCS MCP server, authenticate using JWT or OAuth, test example queries (call diagnostics, SIP trace, analytics), explore available tools via natural language prompts, and extend MCP functionality using custom endpoints or integrations.<br>

</details>

## Overview

The **ConnexCS MCP Server** allows AI assistants to securely access ConnexCS tools and platform data.

The **Model Context Protocol (MCP)** is a standardized framework that enables AI agents to interact with external systems using natural language.

With the ConnexCS MCP server, your AI assistant can:

+ Retrieve platform data
+ Run diagnostics
+ Perform analysis

— **all through conversational requests**.

---

## What You Can Do

Once connected, your AI assistant can help with tasks such as:

* Investigate failed calls
* Run **SIP-Trace** diagnostics
* Analyze **Call Detail Records (CDR)**
* Generate call analytics reports
* Identify routing failures
* Retrieve customer usage information

This eliminates the need to manually navigate the UI for troubleshooting and analysis.

---

## Supported MCP Clients

The ConnexCS MCP server works with any MCP-compatible client, including:

* Claude Desktop
* Claude Code
* Visual Studio Code
* Cursor (code editor)
* ChatGPT
* Custom MCP-compatible AI clients

Any client that implements the MCP specification can connect to the ConnexCS MCP server.

---

## Connect Your AI Assistant

Below are setup instructions for some of the most common AI assistants.

---

### Connect to Claude

1. Open **Claude Desktop**.

2. Navigate to: **Settings :material-menu-right: Connectors**.

3. Click **Add Connector**.

4. Enter the following information:

      + **Name**: ConnexCS
      + **MCP Server URL**: `https://app.connexcs.com/api/cp/mcp/`

5. Authenticate using **OAuth**.

Your AI assistant is now connected to the ConnexCS MCP server.

---

### Connect to VS Code

You can also connect MCP from **Visual Studio Code**.

1. Create the following folder: `.vscode`

2. Create a configuration file: `mcp.json`

3. Add the following configuration:

```json
{
  "servers": {
    "connexcs": {
      "type": "http",
      "url": "https://app.connexcs.com/api/cp/mcp/",
      "headers": {
        "Authorization": "Bearer YOUR_JWT_TOKEN"
      }
    }
  }
}
```

4.Restart VS Code after saving the file.

---

## Authentication

When connecting to the MCP server, authentication is required.

+ **Supported Methods**

  1. `JSON Web Token (JWT)` (recommended)
  2. `OAuth` (if supported by the client)
  3. `Username & Password`

**Recommended by Client**

|Client|Recommended Method|
|-----|-------------------|
|**Claude Desktop**|OAuth|
|**VS Code**|JWT|
|**Others**|Any supported method|

---

## How It Works

When you ask your AI assistant a question:

1. The AI identifies the required ConnexCS tool.
2. The request is sent to the MCP server.
3. The server executes the tool.
4. ConnexCS APIs return the requested data.
5. The AI summarizes the results.

This allows complex diagnostics and analysis to be performed through simple conversational requests.

---

## Examples

You can interact with the system by simply describing what you need and providing any details you already have, such as a customer ID, phone number, or call ID. The system will understand your request and automatically perform the required actions.

1. If you want to check a customer’s balance, you can say:

    **Question**: `Get the balance for customer ID 12345.`

    **Expected Output**: The system will use the provided customer ID to retrieve the current balance, including the available credit and debit limit.

2. If you need to find a customer, you can say:

    **Question**: `“Find customer Acme Corp.”` **or**, `if you already know the ID: “Get details for customer ID 12345.”`

    **Expected Output**: The system will search and return the relevant customer information.

3. If you are investigating a call issue, you can include the call ID in your request, such as:

    **Question**: `“Investigate this call: abc123xyz@192.168.1.1.”`

    **Expected Output**: The system will use the call ID to perform a full analysis, including SIP trace, call flow, and quality checks.

4. You can also request reports by including filters like date range or customer ID. For example:

    **Question**: `“Show call analytics for customer 12345 from 1st Jan to 31st Jan.”`

    **Expected Output**: The system will analyze the data and provide insights such as successful vs failed calls and overall performance.

---

## Things You can Do

| Workflow | Steps | Tools Used |
|---|---|---|
| **Debug Failed Call** | 1. Find the call<br>2. Full investigation<br>3. Check quality if needed | → `searchCallLogs`<br>→ `investigateCall`<br>→ `getCallQuality` |
| **Check Customer Status** | 1. Find customer<br>2. Check balance<br>3. Review activity<br>4. Check payments | → `searchCustomers`<br>→ `getCustomerBalance`<br>→ `getCustomerCallStatistics`<br>→ `getLastTopup` |
| **Analyze Call Quality** | 1. Get success rates<br>2. Find failed calls<br>3. Debug SIP issues<br>4. Check audio quality | → `getCallAnalytics`<br>→ `searchCallLogs`<br>→ `getSipTrace`<br>→ `getCallQuality` |
| **Profitability Report** | 1. List top customers<br>2. Get specific details<br>3. See destinations | → `listCustomersByProfitability`<br>→ `getCustomerProfitability`<br>→ `getCustomerDestinationStatistics` |
| **Rate Card Analysis** | 1. Get customer's cards<br>2. Get card details<br>3. Get pricing rules | → `getCustomerRateCards`<br>→ `getRateCardDetails`<br>→ `getRateCardRules` |

---

## Exending MCP

If you want to customize or extend MCP functionality, the ConnexCS MCP framework is designed to be flexible and extensible.

The MCP implementation is **open source and fully customizable**, allowing you to build additional capabilities tailored to your workflows or integrate with your internal systems.

**What You Can Customize**
You can extend MCP to:

+ Add custom tools and actions
+ Integrate internal systems or third-party APIs
+ Modify how data is retrieved or processed

### Steps to Extend MCP

1. Install the `cxMCP App`
2. **Point the MCP Server to Your App**: Navigate to **Setup :material-menu-right: Options :material-menu-right: General :material-menu-right: Custom MCP Endpoint**. Selct the app from the drop-down menu.

<img src= "/misc/img/mcp_blog_custom.png" style="border: 2px solid #4472C4; border-radius: 8px;">

!!! Tip
    Because MCP is **open source and extensible**, you can fully tailor it to match your operational needs—whether that’s advanced analytics, automated troubleshooting, or deeper system integrations.
