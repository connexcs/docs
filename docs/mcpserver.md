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

2. Navigate to: Settings :material-menu-right: Connectors

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

You can authenticate using:

1. `JSON Web Token (JWT)` (recommended)
2. `OAuth` (if supported by the client)
3. `Username & Password`

!!! Warning "The MCP server does not require JWT specifically — the method depends on your client."

**Recommended by Client**

|Client|Recommended Method|
|-----|-------------------|
|Claude Desktop|OAuth|
|VS Code|JWT|
|Others|Any supported method|

---

## Tool List with Examples

| # | Tool Name | Purpose | Example Parameters |
|---|-----------|---------|-------------------|
| **CALL INVESTIGATION & DEBUGGING** |
| 1 | `connexcs__searchCallLogs` | Search call logs by phone number, Call-ID, or IP address | `search: "+442071234567"` <br> `search: "abc123@192.168.1.1"` <br> `search: "203.0.113.45"` |
| 2 | `connexcs__searchCdr` | Search completed/successful calls using date ranges | `start_date: "2024-01-15"` <br> `customer_id: 12345` <br> `dst: "442071234567"` <br> `limit: 500` |
| 3 | `connexcs__getCallAnalytics` | Analyze call patterns - failed vs successful calls | `start_date: "2024-01-08"` <br> `end_date: "2024-01-15"` <br> `cli: "442071234567"` <br> `customer_id: 12345` |
| 4 | `connexcs__getSipTrace` | Fetch SIP trace - PRIMARY debugging tool | `callid: "abc123xyz@192.168.1.1"` <br> `callidb: "internal-12345"` (optional) |
| 5 | `connexcs__getCallQuality` | Fetch RTCP quality metrics (MOS, jitter, packet loss) | `callid: "abc123xyz@192.168.1.1"` |
| 6 | `connexcs__investigateCall` | Comprehensive investigation (SIP + Class 5 + RTCP) | `callid: "abc123xyz@192.168.1.1"` <br> `callidb: "internal-12345"` (optional) |
| 7 | `connexcs__getTranscription` | Fetch call transcription (if enabled) | `callid: "abc123xyz@192.168.1.1"` |
| 8 | `connexcs__getAiAgentLogs` | Fetch AI Agent interaction logs | `callid: "abc123xyz@192.168.1.1"` <br> `date: "2024-01-15"` |
| **CUSTOMER MANAGEMENT** |
| 9 | `connexcs__searchCustomers` | Search customers by ID, name, SIP username, or IP | `query: "Acme Corp"` <br> `search_type: "name"` <br> `limit: 10` <br><br> `query: "12345"` <br> `search_type: "id"` <br><br> `query: "user123"` <br> `search_type: "sip_user"` |
| 10 | `connexcs__getCustomerBalance` | Get customer balance (credit + debit limit) | `customer_id: "12345"` |
| 11 | `connexcs__getLastTopup` | Get most recent payment/top-up | `customer_id: "12345"` |
| 12 | `connexcs__getCustomerPackages` | Get customer packages (recurring, one-time, free minutes) | `customerId: "12345"` <br> `type: "all"` <br><br> `customerId: "12345"` <br> `type: "recurring"` <br><br> `customerId: "12345"` <br> `type: "free-minutes"` |
| 13 | `connexcs__getCustomerRateCards` | Get all rate cards assigned to customer | `customerId: "12345"` |
| **ANALYTICS & STATISTICS** |
| 14 | `connexcs__getCustomerProfitability` | Analyze revenue, costs, profit margins | `customer_id: "12345"` <br><br> `customer_id: "12345"` <br> `start_date: "2024-01-01"` <br> `end_date: "2024-01-31"` <br> `group_by: "month"` |
| 15 | `connexcs__listCustomersByProfitability` | Ranked list of customers by profitability | `sort_by: "total_profit"` <br> `sort_order: "desc"` <br> `limit: 10` <br><br> `sort_by: "profit_margin"` <br> `min_profit: 1000` <br> `limit: 50` |
| 16 | `connexcs__getCustomerCallStatistics` | Call stats: attempts, duration, charges, ACD, ASR | `company_id: "12345"` <br><br> `company_id: "12345"` <br> `start_date: "2024-01-01"` <br> `end_date: "2024-01-31"` |
| 17 | `connexcs__getCustomerDestinationStatistics` | Breakdown of calls by destination | `customer_id: "12345"` <br> `limit: 20` <br><br> `customer_id: "12345"` <br> `start_date: "2024-01-01"` <br> `end_date: "2024-01-31"` <br> `limit: 50` |
| **RATE CARD TOOLS** |
| 18 | `connexcs__getRateCardDetails` | Get complete rate card information | `rateCardId: "OF7H-xk1B"` |
| 19 | `connexcs__getRateCardRules` | Get pricing rules and prefix information | `rateCardId: "fbIL-EJoJ"` <br> `activeRev: "19"` <br> `include_prefixes: true` <br> `prefix_limit: 1000` <br><br> `rateCardId: "fbIL-EJoJ"` <br> `activeRev: "19"` <br> `prefix_limit: 5000` <br> `offset: 1000` |
| **INFRASTRUCTURE** |
| 20 | `connexcs__getRtpServerGroups` | List RTP server zones (London, NY, Singapore, etc.) | *(no parameters needed)* |
| 21 | `connexcs__listRtpServers` | Detailed list of RTP servers with capacity & status | *(no parameters - all servers)* <br><br> `zone: "Frankfurt 2 (High Capacity)"` <br><br> `geozone: "Europe"` <br><br> `server_id: 42` <br><br> `alias: "rtpserver01.connexcs.com"` |
| **DOCUMENTATION** |
| 22 | `connexcs__searchDocumentation` | Search ConnexCS docs, help articles, API docs | `query: "how to add DID"` <br> `limit: 10` <br><br> `query: "rate card configuration"` <br> `limit: 5` |
| 23 | `connexcs__getDocumentation` | Get full article content by path | `path: "customer/did"` <br><br> `path: "api/rest"` |
| **UTILITY** |
| 24 | `get_current_time` | Get current date and time in ISO format (UTC) | *(no parameters needed)* |

---

### Common Workflow Patterns

| Workflow | Steps | Tools Used |
|----------|-------|------------|
| **Debug Failed Call** | 1. Find the call <br> 2. Full investigation <br> 3. Check quality if needed | → `searchCallLogs` <br> → `investigateCall` <br> → `getCallQuality` |
| **Check Customer Status** | 1. Find customer <br> 2. Check balance <br> 3. Review activity <br> 4. Check payments | → `searchCustomers` <br> → `getCustomerBalance` <br> → `getCustomerCallStatistics` <br> → `getLastTopup` |
| **Analyze Call Quality** | 1. Get success rates <br> 2. Find failed calls <br> 3. Debug SIP issues <br> 4. Check audio quality | → `getCallAnalytics` <br> → `searchCallLogs` <br> → `getSipTrace` <br> → `getCallQuality` |
| **Profitability Report** | 1. List top customers <br> 2. Get specific details <br> 3. See destinations | → `listCustomersByProfitability` <br> → `getCustomerProfitability` <br> → `getCustomerDestinationStatistics` |
| **Rate Card Analysis** | 1. Get customer's cards <br> 2. Get card details <br> 3. Get pricing rules | → `getCustomerRateCards` <br> → `getRateCardDetails` <br> → `getRateCardRules` |

---

### Important Notes

| Category | Note |
|----------|------|
| **Date Formats** | All dates must be in **UTC time** (YYYY-MM-DD format) |
| **Call Debugging** | Always start with `searchCallLogs` to get Call-IDs first |
| **SIP Traces** | 7 days retention - use `getSipTrace` as primary debug tool |
| **RTCP Quality** | Only available if RTCP was enabled on both call endpoints |
| **Search Types** | `searchCustomers` supports: id, name, sip_user, ips, auto |
| **Package Types** | `getCustomerPackages` supports: all, recurring, one-time, free-minutes |
| **Profitability Sort** | Sort by: total_profit, profit_margin, total_revenue, total_cost |

---

### Detailed Examples by Category

#### Call Investigation Examples

+ **Search Call Logs**

```yaml
# Search by phone number
search: "+442071234567"

# Search by Call-ID
search: "abc123xyz@192.168.1.1"

# Search by IP address
search: "203.0.113.45"
```

+ **Search CDR (Successful Calls)**

```yaml
# Basic date range search
start_date: "2024-01-15"
customer_id: 12345

# Search with destination filter
start_date: "2024-01-10"
end_date: "2024-01-15"
dst: "442071234567"
limit: 500
```

+ **Get Call Analytics**

```yaml
# Analyze calls for a specific number
start_date: "2024-01-08"
end_date: "2024-01-15"
cli: "442071234567"

# Analyze customer's success rate
start_date: "2024-01-15"
customer_id: 12345
```

+ **Get SIP Trace**

```yaml
# Basic SIP trace
callid: "abc123xyz@192.168.1.1"

# With internal identifier
callid: "abc123xyz@192.168.1.1"
callidb: "internal-12345"
```

+ **Get Call Quality (RTCP)**

```yaml
# Check audio quality metrics
callid: "abc123xyz@192.168.1.1"
```

+ **Investigate Call (Comprehensive)**

```yaml
# Full investigation
callid: "abc123xyz@192.168.1.1"

# With internal identifier
callid: "abc123xyz@192.168.1.1"
callidb: "internal-12345"
```

---

#### Customer Management Examples

+ **Search Customers**

```yaml
# Search by name (partial match)
query: "Acme Corp"
search_type: "name"
limit: 10

# Search by ID (exact match)
query: "12345"
search_type: "id"

# Search by SIP username
query: "user123"
search_type: "sip_user"

# Auto-detect search type
query: "acme"
search_type: "auto"
```

+ **Get Customer Balance**

```yaml
# Check balance and credit
customer_id: "12345"
```

+ **Get Last Top-up**

```yaml
# Get most recent payment
customer_id: "12345"
```

+ **Get Customer Packages**

```yaml
# Get all packages
customerId: "12345"
type: "all"

# Get only recurring charges
customerId: "12345"
type: "recurring"

# Get one-time fees
customerId: "12345"
type: "one-time"

# Get free minute bundles
customerId: "12345"
type: "free-minutes"
```

+ **Get Customer Rate Cards**

```yaml
# Get all assigned rate cards
customerId: "12345"
```

---

#### Analytics & Statistics Examples

+ **Get Customer Profitability**

```yaml
# Last 30 days (default)
customer_id: "12345"

# Specific date range
customer_id: "12345"
start_date: "2024-01-01"
end_date: "2024-01-31"

# Group by month
customer_id: "12345"
start_date: "2023-01-01"
end_date: "2023-12-31"
group_by: "month"

# Group by day
customer_id: "12345"
start_date: "2024-01-01"
end_date: "2024-01-07"
group_by: "day"
```

+ **List Customers by Profitability**

```yaml
# Top 10 most profitable
sort_by: "total_profit"
sort_order: "desc"
limit: 10

# Best profit margins
sort_by: "profit_margin"
sort_order: "desc"
limit: 20

# Top revenue generators
sort_by: "total_revenue"
sort_order: "desc"
limit: 25

# Filter by minimum profit
sort_by: "total_profit"
min_profit: 1000
limit: 50
```

+ **Get Customer Call Statistics**

```yaml
# Last 30 days (default)
company_id: "12345"

# Specific date range
company_id: "12345"
start_date: "2024-01-01"
end_date: "2024-01-31"
```

+ **Get Customer Destination Statistics**

```yaml
# Top 20 destinations
customer_id: "12345"
limit: 20

# Specific date range
customer_id: "12345"
start_date: "2024-01-01"
end_date: "2024-01-31"
limit: 50
```

---

#### Rate Card Examples

+ **Get Rate Card Details**

```yaml
# Get rate card information
rateCardId: "OF7H-xk1B"
```

+ **Get Rate Card Rules**

```yaml
# Get pricing rules and prefixes
rateCardId: "fbIL-EJoJ"
activeRev: "19"
include_prefixes: true
prefix_limit: 1000

# Get more prefixes with pagination
rateCardId: "fbIL-EJoJ"
activeRev: "19"
include_prefixes: true
prefix_limit: 5000
offset: 1000

# Without prefixes (metadata only)
rateCardId: "fbIL-EJoJ"
activeRev: "19"
include_prefixes: false
```

#### Infrastructure Examples

+ **Get RTP Server Groups**

```yaml
# No parameters needed - returns all zones
```

+ **List RTP Servers**

```yaml
# Get all servers
# (no parameters)

# Filter by zone
zone: "Frankfurt 2 (High Capacity)"

# Filter by geozone
geozone: "Europe"

# Get specific server
server_id: 42

# Filter by alias/hostname
alias: "rtpserver01.connexcs.com"
```

#### Documentation Examples

+ **Search Documentation**

```yaml
# Search for DID help
query: "how to add DID"
limit: 10

# Search for rate cards
query: "rate card configuration"
limit: 5

# Search API docs
query: "API authentication"
limit: 20
```

+ **Get Documentation**

```yaml
# Get DID article
path: "customer/did"

# Get API docs
path: "api/rest"

# Get routing docs
path: "routing/index"
```

#### Quick Reference - Parameter Types

1. **Date Parameters (Always UTC)**

      - `start_date`: "2024-01-15" (YYYY-MM-DD)
      - `end_date`: "2024-01-31" (YYYY-MM-DD)
      - `date`: "2024-01-15" (YYYY-MM-DD)

2. **ID Parameters**

      - `customer_id`: "12345" or 12345
      - `company_id`: "12345"
      - `customerId`: "12345"
      - `provider_id`: 12345
      - `server_id`: 42

3. **Search Parameters**
      - `search`: "+442071234567" or "CallID" or "IP"
      - `query`: "search term"
      - `cli`: "442071234567" (caller number)
      - `dst`: "442071234567" (destination)

4. **Call Identifiers**
      - `callid`: "abc123xyz@192.168.1.1" (SIP Call-ID)
      - `callidb`: "internal-12345" (internal identifier)

5. **Filters & Options**
      - `search_type`: "auto", "id", "name", "sip_user", "ips"
      - `type`: "all", "recurring", "one-time", "free-minutes"
      - `sort_by`: "total_profit", "profit_margin", "total_revenue", "total_cost"
      - `sort_order`: "desc", "asc"
      - `group_by`: "day", "week", "month"

6. **Limits & Pagination**
      - `limit`: 10, 100, 1000, 5000
      - `offset`: 0, 100, 1000
      - `prefix_limit`: 1000, 5000, 10000

### Tips for Success

1. **Start with Search**: Always use `searchCallLogs` or `searchCustomers` first to get IDs
2. **Use UTC Dates**: All dates must be in UTC timezone (YYYY-MM-DD format)
3. **Check Retention**: SIP traces are kept for 7 days
4. **RTCP Availability**: Call quality data only exists if RTCP was enabled
5. **Pagination**: Use `offset` and `limit` for large datasets
6. **Call-ID Format**: Include the full Call-ID with domain (e.g., "abc@192.168.1.1")
7. **Customer vs Company**: Some tools use `customer_id`, others use `company_id` (they're the same)

## How It Works

When you ask your AI assistant a question:

1. The AI identifies the required ConnexCS tool.
2. The request is sent to the MCP server.
3. The server executes the tool.
4. ConnexCS APIs return the requested data.
5. The AI summarizes the results.

This allows complex diagnostics and analysis to be performed through simple conversational requests.

---

## Security Best Practices

1. MCP access uses the same permissions as your ConnexCS account.
2. AI assistants can only access what your user account can
Recommended Setup.
3. Create a read-only user account for MCP integrations to limit risk.
4. Store tokens securely.
5. Do not commit tokens to repositories.
6. Use short expiration periods.
7. Rotate tokens regularly

---

## Extending MCP

If you want to customize or extend MCP functionality, the ConnexCS MCP framework is designed to be flexible and extensible.

The MCP implementation is **open source and fully customizable**, allowing you to build additional capabilities tailored to your workflows or integrate with your internal systems.

### What You Can Customize

You can extend MCP to:

* Add custom tools and actions
* Integrate internal systems or third-party APIs
* Modify how data is retrieved or processed
* Build domain-specific automation workflows

---

### Steps to Extend MCP

1. **Install the ConnexCS App**
   Set up your custom app within the ConnexCS platform.

2. **Point the MCP Server to Your App**: Navigate to **Setup :material-menu-right: Options :material-menu-right: General :material-menu-right: Custom MCP Endpoint**. Selct the app from the drop-down menu.

<img src= "/misc/img/mcp1.png" style="border: 2px solid #4472C4; border-radius: 8px;">

!!! Tip
    Because MCP is **open source and extensible**, you can fully tailor it to match your operational needs—whether that’s advanced analytics, automated troubleshooting, or deeper system integrations.
