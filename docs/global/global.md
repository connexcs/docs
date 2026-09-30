# Global

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Platform Administration / Global Configuration<br>
<strong>Audience</strong>: Administrators, Engineers, Operations Team<br>
<strong>Difficulty</strong>: Intermediate to Advanced<br>
<strong>Time Required</strong>: Approximately 1–1.5 hours<br>
<strong>Prerequisites</strong>: Active ConnexCS account with admin access; familiarity with system-wide configuration, global settings, and multi-domain management.<br>
<strong>Related Topics</strong>: <a href="https://docs.connexcs.com/getting-started/">Getting Started</a>, <a href="https://docs.connexcs.com/setup/settings/servers/">Servers & Infrastructure</a><br>
<strong>Next Steps</strong>: Review and modify global settings (language, time-zone, domains), manage global aliases and global transcription settings, implement naming and template conventions, then audit global logs and permissions.<br>

</details>

**:material-menu-right: Global**

## Overview

The **Global** section provides account-wide visibility and management across the ConnexCS platform. It allows administrators to work with information that spans multiple customers and carriers without having to open each individual account.

The Global area brings together commonly used operational, configuration, billing, authentication, and communication data in one place.

## Account-Wide Management

The Global section is designed for tasks that need to be performed or reviewed across the entire account.

It provides centralized access to:

- Customer and carrier communication information
- Call and CDR data
- Active call sessions
- Routing configuration
- CLI and DID management
- Authentication configuration
- Billing and payment information
- SIP registrations and user authentication
- Transcription functionality

This reduces the need to navigate through individual customer or carrier accounts when performing account-wide administration.

## Centralized Visibility

The Global area provides a consolidated view of information that may otherwise be distributed across individual customer or carrier accounts.

Administrators can use it to review:

- **Call activity** — Review CDRs and active calls across customers.
- **Routing** — Review configured routes, customer/provider cards, active channels, and CPS activity.
- **Numbering** — Manage CLIs and DIDs across the account.
- **Authentication** — Review IP authentication and SIP user authentication.
- **Billing** — Review invoices and payments across the account.
- **Registrations** — Monitor active inbound and outbound SIP registrations.
- **Communication** — Access customer contacts and alerts.

## Cross-Account Administration

Many functions available under individual Customer or Carrier accounts can also be accessed from the Global area.

For example, Global provides account-wide access to CDRs, routing, CLI, DID, IP Authentication, invoices, payments, and SIP User Authentication. 

This allows administrators to perform cross-account reviews and management without switching between individual profiles.

## Operational Monitoring

The Global section can also be used for real-time operational visibility.

### Active Calls

The **Dialog** view provides visibility into active calls across the account. 

### SIP Registrations

The **SIP Registration** view provides visibility into active inbound and outbound SIP registrations, including registration users, IP addresses, protocols, registration state, and server information.

### CDR Monitoring

The **CDR** view provides access to CDRs across customers and also allows selected CDRs to be recalculated.

## Number and Identity Management

Global provides centralized management of telephony identities and numbers.

### CLI Management

The **CLI** area allows administrators to view CLIs across customers and configure rules for CLI matching, rewriting, direction, DID usage, databases, and STIR/SHAKEN-related settings.

### DID Management

The **DID** area provides centralized access to DIDs and organizes them into:

- **Assigned**
- **Inventory**
- **Provision**
- **Providers List**

## Billing and Financial Visibility

The Global area provides account-wide access to financial information.

Administrators can use it to:

- Review invoices.
- Review invoice details such as date range, unit price, and tax.
- Assign payments.
- View payments across the account.

## Authentication and Access Management

Global also provides centralized visibility into authentication-related configuration.

This includes:

- **IP Authentication** — View configured IP authentication across the account.
- **SIP User Authentication** — View SIP Users, check their status, reset or generate SIP passwords, and send messages to SIP Users.

## When to Use the Global Section

Use the **Global** section when you need to work across multiple customers or carriers, or when you need an account-wide view of operational and configuration data.

Typical scenarios include:

- Reviewing calls across multiple customers.
- Investigating CDRs and recalculating selected records.
- Monitoring active calls and SIP registrations.
- Reviewing routing across customers and providers.
- Managing CLIs and DIDs centrally.
- Reviewing authentication configuration.
- Managing invoices and payments.
- Reviewing customer contacts and alerts.
- Monitoring account-wide SIP activity.

## Global vs Customer or Carrier

The main difference is the **scope of the view**.

| Area | Global | Customer / Carrier |
|---|---|---|
| **Scope** | Account-wide | Individual account |
| **CDR** | View CDRs across customers | View CDRs for the selected account |
| **Dialog** | View active calls across the account | View calls for the selected customer |
| **Routing** | Account-wide routing overview | Account-specific routing |
| **CLI** | View CLIs across customers | Manage CLI for the selected account |
| **DID** | Centralized DID management | DID management for the selected account |
| **IP Authentication** | View all configured IP authentication | Authentication for the selected account |
| **Invoices** | View invoices across the account | Invoices for the selected customer |
| **Payment** | View payments across the account | Payments for the selected customer |
| **SIP Authentication** | View and manage SIP Users across the account | Authentication for the selected account |

The Global section therefore acts as a **central administration and monitoring layer** for the ConnexCS account.
