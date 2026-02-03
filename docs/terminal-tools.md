# Terminal Tools

## Overview

**CX-Tools ("cx")/Terminal Tools**is the official ConnexCS **Command‑Line Interface (CLI)** that provides a compact, scriptable, and developer‑friendly modality to interact with ConnexCS services.

It is aimed at **developers**, **system administrators**, and **power users** who prefer working in terminal environments.

CX-Tools exposes common operational tasks like script management, SQL queries, key‑value store access, deployments, and application management via a single, extensible CLI.

CX-Tools is distributed as an npm package:

👉 @connexcs/tools  
[https://www.npmjs.com/package/@connexcs/tools](https://www.npmjs.com/package/@connexcs/tools)


!!! Info
    Currently, CX-Tools is primarily targeted at development workflows. The CLI is functionally language-agnostic in how it interacts with ConnexCS services, however it requires the Node.js runtime because the tooling itself is implemented in **Node.js**.

For installation instructions, usage examples, and version details, see the npm package:
[https://www.npmjs.com/package/@connexcs/tools](https://www.npmjs.com/package/@connexcs/tools)

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
