# ConnexCS Reference Data Sets

---

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Architecture → Datasets<br>

<strong>Audience</strong>: Administrators, Engineers, Data Analysts, Compliance Teams<br>

<strong>Difficulty</strong>: Intermediate<br>

<strong>Time Required</strong>: Approximately 20–40 minutes<br>

<strong>Prerequisites</strong>: Access to the ConnexCS platform with dataset visibility enabled; understanding of telecom numbering, compliance filtering, and routing behaviors; optional API access for automated dataset lookups.<br>

<strong>Related Topics</strong>: <a href="https://docs.connexcs.com/developers/database/">Database (User Data Storage)</a>, <a href="https://docs.connexcs.com/routing-strategy/">Routing Strategy</a>, <a href="https://docs.connexcs.com/security/">Security & Fraud Prevention</a><br>

<strong>Next Steps</strong>: Review available dataset types, understand their charging models, integrate datasets into routing or compliance flows, and test lookups (e.g., LRN, IP intelligence, DNC checks, spam filtering) to validate expected call-handling behavior.<br>

</details>

---

## Overview

ConnexCS Data Sets are curated collections of external or internal regulatory, routing, fraud-prevention, and compliance-related information that enhance call processing, verification, and decision-making.

These Data Sets allow the platform to validate phone numbers, check compliance restrictions, identify high‑risk traffic, assess IP reputation, and support intelligent routing — all in real time.

They help customers improve call accuracy, reduce fraud, ensure legal compliance (such as DNC/TCPA rules), and optimize operational efficiency.

This page provides a consolidated overview of all databases available within ConnexCS, including whether they are free (included in the base subscription) or require an additional fee.

---

## Supported Datasets

Below is a consolidated table of all supported data sets.

|Name|Description|Charge|
|----|-----------|------|
|**DNO (Do not Originate)**|A **DNO list** is a database of unassigned, inbound-only, or spoofed numbers that should never originate calls, used to automatically block fraudulent or invalid outbound traffic. [Click here](https://docs.connexcs.com/dnc/#do-not-originate-dno-list-blocking) for more information| **Included**|
|**US Federal DNC**| U.S. national Do Not Call registry for compliance filtering. [Click here](https://docs.connexcs.com/customer/routing/#united-states-federal-do-not-call-dnc) for more information|**Included** |
|**UK TPS**|UK Do Not Call database for consumer marketing restrictions. [Click here](https://docs.connexcs.com/customer/routing/#united-kingdom-telephone-preference-service-tps) for more information.|**Included**|
|**LRN**|**LRN** is a U.S. number-porting method where the receiving carrier assigns a new routing number, allowing call charges to differ from the original NPA-NXX rate based on the resolved LRN. [Click here](https://docs.connexcs.com/routing-usa/#local-routing-number-local-number-portability) for more information|**Included**|
|**International Number Plans**|The **Dial Code / Destination** database provides quick lookup of international numbering plans by country and prefix. [Click here](https://docs.connexcs.com/setup/information/dial-code-destination/) for more information.|**Included**|
|**IP Lookup**|IP Lookup retrieves intelligence about an IP address—such as ISP, location, and risk indicators—by querying the ConnexCS IP-intelligence dataset via the lookup API. [Click here](https://docs.connexcs.com/customer/auth/) for more information.|**Included**|
|**Spam Reported (UK & USA)**| Numbers flagged as spam by carriers or customers. [Click here](https://docs.connexcs.com/guides/spam-callsblock/) for more information.|**Included**|
|**ASR+**| ASR Plus is a proprietary ConnexCS technology that filters known failed, non-existent / working numbers between the customer and the terminating, or destination, carrier. [Click here](https://docs.connexcs.com/customer/routing/#answer-seizure-ratio-plus-details) for more information|**Included**|
|**TCPA**| Blocks outbound calls to phone numbers associated with known TCPA litigators. [Click here](https://docs.connexcs.com/customer/routing/#security-controls) for more information.|**Paid Add‑On**. [Check Pricing here](https://connexcs.com/pricing)|
|**APIBan**| It automatically blocks malicious traffic to your servers. [Click here](https://docs.connexcs.com/setup/settings/servers/#apiban-integration) for more information.|**Included**|
|**SpamScout**|It blocks Spam calls based on the CLIs. [Click here](https://docs.connexcs.com/customer/routing/#security-controls) for more information.| **Paid Add‑On**. [Check Pricing here](https://connexcs.com/pricing)|
|**IPQS**|Blocks calls from CLIs exceeding the selected spam-score threshold. [Click here](https://docs.connexcs.com/customer/routing/#security-controls) for more information.| **Paid Add‑On**. [Check Pricing here](https://connexcs.com/pricing)|
