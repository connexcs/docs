# ConnexCS MCP Server

## Overview

The **ConnexCS MCP Server** allows AI assistants to securely access ConnexCS tools and platform data.

The **Model Context Protocol (MCP)** is a standardized framework that enables AI agents to interact with external systems using natural language.

With the ConnexCS MCP server, your AI assistant can retrieve platform data, run diagnostics, and perform analysis directly from conversational requests.

---

## What You Can Do

Once connected, your AI assistant can help with tasks such as:

* Investigate failed calls
* Run **SIP-Trace** diagnostics
* Analyze **Call Detail Records (CDR)**
* Generate call analytics reports
* Identify routing failures
* Retrieve customer usage information

This allows users to troubleshoot issues and analyze switch activity without manually navigating the UI.

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

#### Step 1

Open **Claude Desktop**.

#### Step 2

Navigate to:

```
Settings → Connectors
```

#### Step 3

Click **Add Connector**.

#### Step 4

Enter the following information:

```
Name: ConnexCS
MCP Server URL: https://app.connexcs.com/api/cp/mcp/
```

#### Step 5

Provide your **JWT access token** when prompted.

Your AI assistant is now connected to the ConnexCS MCP server.

---

## Connect to VS Code

You can also connect MCP from **Visual Studio Code**.

### Step 1

Create the following folder:

```
.vscode
```

### Step 2

Create a configuration file:

```
mcp.json
```

### Step 3

Add the following configuration:

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

Restart VS Code after saving the file.

---

## Authentication

The MCP server requires a **JWT access token**.

Generate a token from your ConnexCS account:

```
Setup → Integrations → JWT Tokens
```

Steps:

1. Click **Create Token**
2. Select **Access Token**
3. Choose expiration period
4. Copy the generated token
5. Use this token when connecting your MCP client

---

## Example Requests

After connecting your AI assistant, you can ask questions such as:

**Call troubleshooting**

```
Investigate this call ID
```

**Routing diagnostics**

```
Why are calls failing to this prefix?
```

**Call analytics**

```
Give me a 30-day call report
```

**C-Trace investigation**

```
Run C-Trace on this failed call
```

The AI assistant automatically uses ConnexCS tools to retrieve and analyze the information.

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

## Security

To keep your data secure:

* Access requires authentication
* JWT tokens should be stored securely
* Tokens should not be committed to repositories
* Use expiration limits where possible

---

## Summary

The ConnexCS MCP server enables AI assistants to interact directly with ConnexCS tools and data.

After connecting your MCP client, you can:

* Debug calls
* Run diagnostics
* Generate reports
* Investigate routing issues

All through natural language queries.

---
