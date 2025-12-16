# Terminal Tools

---

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Tools & Utilities / Terminal Tools<br> <strong>Audience</strong>: Network Engineers, Administrators, Support Team<br> <strong>Difficulty</strong>: Intermediate to Advanced<br> <strong>Time Required</strong>: Approximately 20–30 minutes<br> <strong>Prerequisites</strong>: Access to command-line interface on relevant systems (e.g., Linux gateway, firewall, SBC) and permissions to run diagnostic utilities.<br> <strong>Related Topics</strong>: <a href="https://docs.connexcs.com/guides/tshoot-signal/">Troubleshooting – Signalling</a>, <a href="https://docs.connexcs.com/guides/tshoot-media/">Troubleshooting – Media</a>, <a href="https://docs.connexcs.com/guides/debugging/">Debugging Guide</a><br> <strong>Next Steps</strong>: After reviewing the terminal-tools guide, pick one of the utility tools (e.g., packet capture, SIP trace, network latency checker), practice running it in a lab environment, document the command syntax and output format, and add it to your incident response checklist for future use.<br>

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
