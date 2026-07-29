# Class 4 Softswitch

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Infrastructure & Connectivity / SIP Devices<br>
<strong>Audience</strong>: Network Engineers, Administrators, Support Team<br>
<strong>Difficulty</strong>: Intermediate to Advanced<br>
<strong>Time Required</strong>: Approximately 30–45 minutes<br>
<strong>Prerequisites</strong>: Active ConnexCS account with permissions to manage SIP devices (DIDs, gateways, SIP endpoints) and access to Device Configuration modules.<br>
<strong>Related Topics</strong>: 
<a href="https://docs.connexcs.com/sip-devices/">SIP Device</a><br>
<strong>Next Steps</strong>: After configuring your SIP devices, perform end-to-end call tests (inbound/outbound), monitor device registration and usage in the Reporting module, and schedule regular review of firmware and configuration settings for security compliance.<br>

</details>

## Overview

**ConnexCS** is a Class 4 Cloud-based Softswitch (software switch).

This means the call never terminates with the **ConnexCS** system.

The platform only handles call routing.

**Class 5 switches** perform call termination functions such as answering calls, playing messages, and more.

**ConnexCS** is delivered as a service, more precisely as a **PaaS (Platform as a Service)**.

It enables clients to deploy a massively scalable distributed system across the globe with minimal technical expertise.

!!! question "SBC, Class 4 Softswitch, or Proxy?"
    We've given extensive consideration to whether to brand our system as a Class 4 cloudswitch or an **SBC (Session Border Controller).**

    The typical Border part of the Session Border Controller blurs out because our platform delivers Over The Top (OTT), sitting on cloud architecture.
 An SBC is almost always a Class 4 switch, but a Class 4 switch doesn't have to be an SBC.

 You can also deploy Class 5 switches or your dialers to communicate using our Class 4 Switch.

## Class 4 Softswitch

### Routing Engine

The Class 4 platform routes calls using one of the following strategies, configurable per route or per prefix:

- **Least Cost Routing (LCR)** — selects the lowest-cost healthy carrier for a given destination.
- **Round Robin** — distributes calls sequentially across a defined carrier set.
- **Weighted Random** — distributes calls probabilistically according to assigned weight values per carrier.
- **Tiered Distribution** — applies a priority order across carrier tiers, falling through to lower tiers on failure or exhaustion of higher tiers.

Custom routing logic beyond these built-in strategies can be implemented using **ScriptForge**, a JavaScript-based scripting environment that allows routing decisions (LCR, round robin, weighted, tiered, or fully custom logic) to be defined programmatically per route.

See: [Routing Strategy](https://docs.connexcs.com/routing-strategy/), [Routing Overview](https://docs.connexcs.com/routing/)

---

### ASR+ (Answer-Seizure Ratio Prediction)

ASR+ is a connectivity-prediction mechanism that evaluates cached historical call data to estimate the likelihood that a given number will connect successfully, prior to the call leaving the switch.

- Numbers with a low predicted connection probability can be filtered before dialing, reducing carrier setup attempts on non-connecting numbers.
- The mechanism operates on a rolling cache of prior call outcomes per number/prefix rather than real-time carrier state.

See: [Ingress Routing / ASR+ details](https://docs.connexcs.com/customer/routing/#answer-seizure-ratio-plus-details)

---

### Rate Card Engine

Customer rate cards are derived from carrier (provider) rate cards through configurable margin rules, rather than being built or maintained as separate flat files.

Supported capabilities:
- **NPA-NXX and LRN routing**, including unlimited LRN dips at no additional per-dip cost.
- **Multi-currency support** with configurable rounding behavior.
- **Full revision history** retained for every rate card, including carrier and customer cards.
- Margin rules applied at compile time when generating a customer card from one or more carrier cards.

See: [Rate Card Overview](https://docs.connexcs.com/rate-card-building/), [Provider Rate Card](https://docs.connexcs.com/provider-ratecard/), [Customer Rate Card](https://docs.connexcs.com/customer-ratecard/)

---

### CPS Buffering

The platform can buffer inbound call-per-second (CPS) bursts that exceed a configured carrier's CPS limit, smoothing traffic spikes rather than rejecting calls that arrive above the limit.

- Buffering capacity is rated up to 5x the configured carrier CPS limit.
- CPS and channel caps are configurable independently per customer, per carrier, and per route.

See: [Channel Limitation Settings](https://docs.connexcs.com/guides/channel-limitations/), [Capacity Limiting](https://docs.connexcs.com/limiting-cps/)

---

### Ingress Architecture — AnyEdge

A single SIP ingress point represents a single point of failure. **AnyEdge** provides an Anycast-based, globally distributed SIP entry layer in front of the Class 4 switch.

- Traffic is routed to the nearest healthy edge node via Anycast.
- Each node supports 10,000+ CPS capacity and 10 Gbps DDoS mitigation.
- If a node becomes unhealthy, traffic is redirected to the next-nearest healthy node without manual intervention.

See: [AnyEdge](https://docs.connexcs.com/anyedge/anyedge/)

---

### MCP Server (AI Agent Integration)

The ConnexCS MCP (Model Context Protocol) Server exposes platform diagnostics, call data, and reporting functions to AI agents (e.g., Claude) over a JWT-secured connection.

Supported operations include (non-exhaustive):
- `searchCallLogs` — query historical call log data.
- `getSipTrace` — retrieve SIP signaling traces for a given call.
- `investigateCall` — run a diagnostic investigation across routing, carrier response codes, and failover events for a given call or time window.

The MCP Server sits between the AI agent and the platform's internal APIs, and is accessed via ScriptForge tool functions or the CX MCP App layer.

See: [MCP Server](https://docs.connexcs.com/mcpserver/)

---

### Compliance & Fraud Controls

Regional compliance and fraud mitigation are enforced at the platform level:

- **STIR/SHAKEN** attestation and certificate management (USA), including LRN routing/free dips and FCC-oriented compliance tooling.
- **TPS scrubbing** (UK) and other region-specific regulatory controls.
- **Fraud profiles** and **capped rate limits** to constrain exposure from anomalous traffic patterns.
- **DDoS protection** enforced at the ingress layer (see AnyEdge, above).
- **Granular permissions** covering 80+ definable functional areas, with support for hardware-based two-factor authentication (2FA).

See: [Security](https://docs.connexcs.com/security/), [STIR/SHAKEN Cert](https://docs.connexcs.com/setup/information/stir-shaken/), [Fraud Profile](https://docs.connexcs.com/setup/advanced/fraud/)

---

### Observability

- **Always-on SIP capture** allows any call to be reconstructed and rendered as a signaling ladder diagram after the fact, including calls from prior weeks, subject to retention limits.
- **Real-time CDRs** are generated per call.
- **Circuit tests** measure MOS (Mean Opinion Score), PDD (Post-Dial Delay), and DTMF signaling accuracy on demand.
- Diagnostic data captured through this layer is queryable by the MCP Server (see above).

See: [Logging](https://docs.connexcs.com/logging/), [SIP Traces, Pings and Messages](https://docs.connexcs.com/guides/sip-traces/)

---
