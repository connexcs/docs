# CX-Tools

## Overview

**CX-Tools ("cx")** is the official ConnexCS **Command‑Line Interface (CLI)** that provides a compact, scriptable, and developer‑friendly modality to interact with ConnexCS services.

It is aimed at **developers**, **system administrators**, and **power users** who prefer working in terminal environments.

CX-Tools exposes common operational tasks like script management, SQL queries, key‑value store access, deployments, and application management via a single, extensible CLI.

!!! Info
    Currently, CX-Tools is primarily targeted at development workflows. The CLI is functionally language-agnostic in how it interacts with ConnexCS services, however it requires the Node.js runtime because the tooling itself is implemented in **Node.js**.

[Click here](https://www.npmjs.com/package/connexcs-tools) for more comprehensive documentation, examples and codes.

## Who is this for?

* **Developers**: To build, edit, test and push multi‑file scripts from a terminal or editor (VS Code) and run remote scripts for quick feedback.
* **System administrators / Operators**: To run ad‑hoc SQL queries, fetch CDRs, investigate numbers, and perform routine maintenance using powerful piping and text tools.
* **Power users / SREs**: To embed ConnexCS operations into automation pipelines (CI, cron, scripts), and glue ConnexCS to existing UNIX toolchains.

---

## Authentication & Security

### Flow (high level)

1. `cx configure` — prompts for username & password (or accepts `CX_BASE_URL` + `CX_TOKEN` env vars)
2. Server authenticates and issues a *refresh token* (longer lifetime) and a short‑lived *access token* (used for requests)
3. CX stores only tokens (not plain username/password) in local config (`~/.cx/config` by default)
4. For each request, CX exchanges the refresh token for a valid access token (server validates and issues)
5. Tokens are revocable; admins can revoke tokens at server end

## Use Case: Debugging and Updating Cached Records via Key–Value Store

* **Scenario:**
A developer has implemented a custom number caching system that temporarily stores call-related data or lead information using the ConnexCS Key–Value (KV) store. Each dialed number is cached along with associated metadata (e.g., timestamp, lead details, or processing status).

* **Objective:**
To debug and inspect cached entries, verify stored values, and programmatically update specific records directly from the command line.

* **Steps:**

1. **List existing records**
   Use the `cx kv:list` command to view all stored records.

   ```bash
   cx kv:list
   ```

   > ⚠️ This may return a large dataset; use filtering to narrow down results as needed.

2. **Retrieve a specific record**
   To inspect a particular record (for example, a cached number or lead ID):

   ```bash
   cx kv:get record
   ```

   **Example output**:

   ```json
   {
     "message": "hello world",
     "last_updated": "2025-11-07T10:20:00Z"
   }
   ```

3. **Update the record value**
   Modify a record programmatically by setting a new value:

   ```bash
   cx kv:set record -v "hello everyone"
   ```

   The system returns a confirmation indicating that the update request was processed successfully.

4. **Verify the update**
   Retrieve the record again to confirm the change:

   ```bash
   cx kv:get record
   ```

   **Expected result**:

   ```json
   {
     "message": "hello everyone",
     "last_updated": "2025-11-07T10:21:00Z"
   }
   ```

* **Outcome:**
Developers can efficiently inspect and update cached records from within the command-line interface without accessing the ConnexCS web UI. This enables rapid debugging, validation, and fine-tuning of applications that depend on temporary KV storage (such as number caches or lead capture systems).

---
