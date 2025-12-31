# Terminal Tools

---

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Tools & Utilities / Terminal Tools (CX-Tools)<br>

<strong>Audience</strong>: Developers, System Administrators, Operators, SREs, Power Users<br>

<strong>Difficulty</strong>: Intermediate to Advanced<br>

<strong>Time Required</strong>: Approximately 20–40 minutes<br>

<strong>Prerequisites</strong>:
Node.js runtime installed (CX-Tools requires Node.js), access to a ConnexCS account, permissions to run operational tasks (SQL queries, script management, key-value operations, deployments), and ability to authenticate via CX tokens or environment variables.<br>

<strong>Related Topics</strong>: <a href="https://docs.connexcs.com/guides/debugging/">Debugging Guide</a>, <a href="https://docs.connexcs.com/developers/scriptforge/">ScriptForge</a>, <a href="https://docs.connexcs.com/guides/tshoot-signal/">Troubleshooting – Signalling</a>, <a href="https://docs.connexcs.com/guides/tshoot-media/">Troubleshooting – Media</a><br>

<strong>Next Steps</strong>:
Install and configure CX-Tools, authenticate using `cx configure` or environment variables, explore core commands (scripts, SQL queries, KV store, deployments), integrate CLI usage into your development or operational workflows, and automate recurring tasks via scripts or CI pipelines.<br>

</details>

---

## Overview

**CX-Tools ("cx")/Terminal Tools**is the official ConnexCS **Command‑Line Interface (CLI)** that provides a compact, scriptable, and developer‑friendly modality to interact with ConnexCS services.

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

1. `cx configure` — prompts for username & password (or accepts `CX_BASE_URL` + `CX_TOKEN` env vars).
2. Server authenticates and issues a *refresh token* (longer lifetime) and a short‑lived *access token* (used for requests).
3. CX stores only tokens (not plain username/password) in local config (`~/.cx/config` by default).
4. For each request, CX exchanges the refresh token for a valid access token (server validates and issues).
5. Tokens are revocable; admins can revoke tokens at server end.
