# CX-Tools

## Overview

**CX-Tools ("cx")** is the official ConnexCS **Command‑Line Interface (CLI)** that provides a compact, scriptable, and developer‑friendly modality to interact with ConnexCS services.

It is aimed at **developers**, **system administrators**, and **power users** who prefer working in terminal environments.

CX-Tools exposes common operational tasks like script management, SQL queries, key‑value store access, deployments, and application management via a single, extensible CLI.

---

## Who is this for?

* **Developers**: To build, edit, test and push multi‑file scripts from a terminal or editor (VS Code) and run remote scripts for quick feedback.
* **System administrators / Operators**: To run ad‑hoc SQL queries, fetch CDRs, investigate numbers, and perform routine maintenance using powerful piping and text tools.
* **Power users / SREs**: To embed ConnexCS operations into automation pipelines (CI, cron, scripts), and glue ConnexCS to existing UNIX toolchains.

---

## Key features (at-a-glance)

* **Installable via npm**: `npm install -g connecxcs-tools` (CLI binary: `cx`)
* **Authentication via JWT + refresh token** (server issues 30‑day JWT; CX fetches short‑lived access tokens for requests)
* **Script management**: `cx pull`, `cx push`, `cx run`
* **SQL query runner**: `cx sql "SELECT ..."
* **Key‑Value store**: `cx kv:list`
* **Output formatting options**:`CX_REFRESH_TOKEN="your_refresh_token_here"`

---

## Authentication & Security

### Flow (high level)

1. `cx configure` — prompts for username & password (or accepts `CX_BASE_URL` + `CX_TOKEN` env vars)
2. Server authenticates and issues a *refresh token* (longer lifetime) and a short‑lived *access token* (used for requests)
3. CX stores only tokens (not plain username/password) in local config (`~/.cx/config` by default)
4. For each request, CX exchanges the refresh token for a valid access token (server validates and issues)
5. Tokens are revocable; admins can revoke tokens at server end

### Local storage

* Store tokens in an OS‑specific secure path (prefer OS keychain when available). If storing on disk, use a config file with strict permissions.
* Avoid saving raw username/password.

### Token lifecycle

* **Refresh tokens**: ~30 days (configurable on server)
* **Access tokens**: short lived (minutes/hours)
* Provide developers instructions to rotate tokens and revoke when compromised.

## Examples

### Admin: Investigate TPS complaint (CDR query)

```bash
# find CDR entries for a destination number
cx sql "SELECT * FROM cdr.cdr WHERE dest = '1234567890' LIMIT 100" -s
```

### Developer: Edit, push, and run a script

```bash
# Pull latest scripts
cx pull
# edit file in VS Code
code scripts/hello_world.js
# push changes
cx push
# run remote script by id
cx run 17194
```

### Automation: Upload DID file from CLI (future example)

```bash
# hypothetical command once implemented
cx api did upload --file my_dids.csv
```

---
