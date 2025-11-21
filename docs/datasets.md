# ConnexCS Reference Data Sets

ConnexCS Data Sets are curated collections of external or internal regulatory, routing, fraud-prevention, and compliance-related information that enhance call processing, verification, and decision-making.

These Data Sets allow the platform to validate phone numbers, check compliance restrictions, identify high‑risk traffic, assess IP reputation, and support intelligent routing — all in real time.

They help customers improve call accuracy, reduce fraud, ensure legal compliance (such as DNC/TCPA rules), and optimize operational efficiency.

This page provides a consolidated overview of all databases available within ConnexCS, including whether they are free (included in the base subscription) or require an additional fee.

---

## **Data Set Overview**

Below is a consolidated table of all supported data sets.

|Name|Description|Charge|
|----|-----------|------|
|**DNO (Do not Originate)**|A **DNO list** is a database of unassigned, inbound-only, or spoofed numbers that should never originate calls, used to automatically block fraudulent or invalid outbound traffic.
[Click here](https://docs.connexcs.com/dnc/#do-not-originate-dno-list-blocking) for more information| **Included**|
|**US Federal DNC**| U.S. national Do Not Call registry for compliance filtering. [Click here](https://www.donotcall.gov/) for more information|**Included** |
|**UK TPS**|UK Do Not Call database for consumer marketing restrictions|**Included**|
|**LRN**|**LRN** is a U.S. number-porting method where the receiving carrier assigns a new routing number, allowing call charges to differ from the original NPA-NXX rate based on the resolved LRN. [Click here]([https://docs.connexcs.com/dnc/#do-not-originate-dno-list-blocking](https://docs.connexcs.com/routing-usa/#local-routing-number-local-number-portability)) for more information
| **Included**|
|**International Number Plans**|The **Dial Code / Destination** database provides quick lookup of international numbering plans by country and prefix.
[Click here](https://docs.connexcs.com/setup/information/dial-code-destination/) for more information.|**Included**|
|**IP Lookup**|IP Lookup retrieves intelligence about an IP address—such as ISP, location, and risk indicators—by querying the ConnexCS IP-intelligence dataset via the lookup API. [Click here](https://docs.connexcs.com/customer/auth/) for more information.|**Included**|
|**Spam Reported (UK & USA)**| Numbers flagged as spam by carriers or customers. [Click here](https://docs.connexcs.com/guides/spam-callsblock/) for more information.|**Included**|
|**ASR+**| ASR Plus is a proprietary ConnexCS technology that filters known failed, non-existent / working numbers between the customer and the terminating, or destination, carrier. [Click here](https://docs.connexcs.com/customer/routing/#answer-seizure-ratio-plus-details) for more information|**Included**|
|**TCPA**| Blocks outbound calls to phone numbers associated with known TCPA litigators. [Click here](https://docs.connexcs.com/customer/routing/#security-controls) for more information.
|**Paid Add‑On**. [Check Pricing here](https://connexcs.com/pricing)|
|**APIBan**| It automatically blocks malicious traffic to your servers. [Click here](https://docs.connexcs.com/setup/settings/servers/#apiban-integration) for more information.|**Included**|
|**SpamScout**|It blocks Spam calls based on the CLIs. [Click here](https://docs.connexcs.com/customer/routing/#security-controls) for more information.| **Paid Add‑On**. [Check Pricing here](https://connexcs.com/pricing)|
|**IPQS**|Blocks calls from CLIs exceeding the selected spam-score threshold. [Click here](https://docs.connexcs.com/customer/routing/#security-controls) for more information.| **Paid Add‑On**. [Check Pricing here](https://connexcs.com/pricing)|
