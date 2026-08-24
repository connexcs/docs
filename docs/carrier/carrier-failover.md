---
description: Review the Carrier Failover report in ConnexCS to see calls that failed on one carrier and connected through another, a possible sign of FAS activity.
---
# Failover

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Carrier Management / Fail-over & Redundancy Configuration<br>
<strong>Audience</strong>: Administrators, Engineers, Support Team<br>
<strong>Difficulty</strong>: Intermediate to Advanced<br>
<strong>Time Required</strong>: Approximately 1–2 hours<br>
<strong>Prerequisites</strong>: Active ConnexCS account with Carrier-module access; understanding of SIP routing, carrier fail-over strategies, and rate-card sequencing<br>
<strong>Related Topics</strong>: <a href="https://docs.connexcs.com/carrier/carrier-main/">Carrier Main Configuration</a>, <a href="https://docs.connexcs.com/carrier/carrier-reply-management/">Reply Management</a><br>
<strong>Next Steps</strong>: Define fail-over settings for carriers (including alternative IPs or backup carriers), configure sequential fail-over logic per SIP response codes, test fail-over via real-call scenarios, and monitor using fail-over logs<br>

</details>

**Management :material-menu-right: Carrier :material-menu-right: Failover**

## Overview

The **Failover** tab lists calls that failed with one carrier but were successfully connected through another carrier.

This helps you:

- Troubleshoot carrier routing issues.
- Identify carriers with poor performance or routing failures.
- Detect potential **False Answer Supervision (FAS)** billing fraud.

---

## False Answer Supervision (FAS)

### What is FAS?

**False Answer Supervision (FAS)** is a fraudulent practice in which a carrier falsely indicates that a call has been successfully connected while routing it to an unintended destination, such as a recorded announcement, radio station, or a low-cost number.

As a result:

- The caller is charged for the call.
- The intended recipient is never reached.
- The fraudulent carrier avoids paying the proper termination charges.

### How FAS Affects Failover Reporting

Calls appearing in the **Failover** report may indicate potential FAS activity.

For example:

- Carrier A falsely reports the call as answered.
- ConnexCS detects the unsuccessful call attempt and routes the call through another carrier.
- The call successfully connects via the alternate carrier, while the failed attempt remains visible in the Failover report for investigation.

---

## SIP Response Codes That Do Not Trigger Failover

ConnexCS halts routing and **does not perform failover** for the following SIP response codes:

| SIP Code | Description |
|----------|-------------|
| **3XX** | Redirection responses *(rewritten internally to **503 Service Unavailable**)* |
| **404** | Not Found |
| **480** | Temporarily Unavailable |
| **486** | Busy Here |
| **6XX** | Global Failure responses *(for example: **600 Busy Everywhere**, **603 Decline**, **604 Does Not Exist Anywhere**, **606 Not Acceptable**)* |
