# Interconnect

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Customer Portal / Interconnect Setup<br>
<strong>Audience</strong>: Administrators, Wholesale Engineers, Support Team<br>
<strong>Difficulty</strong>: Intermediate to Advanced<br>
<strong>Time Required</strong>: Approximately 30–40 minutes<br>
<strong>Prerequisites</strong>: Active ConnexCS account with carrier/wholesale permissions, knowledge of SIP trunking and interconnect protocols<br>
<strong>Related Topics</strong>: <a href="https://docs.connexcs.com/setup/integrations/portal/">Portal – Setup & Domains</a>, <a href="https://docs.connexcs.com/customer/routing/">Routing Overview</a><br>

</details>

## Overview

The **Interconnect** section in the Customer Portal allows users to configure and manage **call routing between ConnexCS and external systems or carriers**.

It defines how calls are:

* **Sent out (Termination)** to external destinations
* **Received (Origination)** from external sources

This is a core component for enabling **inbound and outbound voice connectivity** with your providers, customers, or infrastructure.

---

## Common Use Cases

* Connecting to a **VoIP carrier for call termination**
* Receiving calls from a **DID provider**
* Linking ConnexCS with an **external PBX or softswitch**

## Key Concepts

### 1. Termination Address

* The **destination endpoint** where outbound calls are sent
* Typically used to route calls to:

  * Carriers
  * Upstream providers
  * External SIP systems

👉 Example: Sending calls to a wholesale VoIP provider

---

### 2. Origination Address

* The **source endpoint** from which inbound calls are received
* Used to accept calls from:

  * Providers
  * Customers
  * External SIP trunks

👉 Example: Receiving incoming DID traffic from a carrier

---

### 3. RTP Servers

* Handles **media (audio) flow** for calls
* Ensures proper voice transmission between endpoints

👉 Learn more:
[https://docs.connexcs.com/setup/settings/servers/#real-time-transport-protocol-servers](https://docs.connexcs.com/setup/settings/servers/#real-time-transport-protocol-servers)

<img src= "/customer-portal/img/interconnect1.png" style="border: 2px solid #4472C4; border-radius: 8px;">

---

## How Interconnect Works

1. A call is initiated (inbound or outbound)
2. The system checks configured **Interconnect settings**
3. Based on routing rules:

   * Calls are sent to a **Termination Address**
   * OR accepted from an **Origination Address**
4. RTP servers handle the **media stream**

---

## Best Practices

* Use **IP authentication** wherever possible
* Ensure **RTP server proximity** for better call quality
* Regularly monitor call logs (CDRs) for issues
* Validate configurations after any changes

---

## Summary

The **Interconnect module** enables seamless communication between ConnexCS and external telephony systems by defining how calls enter and leave the platform, ensuring proper routing and media handling.

---

## Number Normalisation and Denormalisation

A phone number gets converted into a standard, or normal, form through the process of normalization. It's tricky to compare two phone numbers to determine if they're the same if the digits aren't normalised.

Streem Center can check and handle all the numbers by converting them into a regular form.

The customer needs to specify which format you wish your number should be and we (carrier) will provide you with the same format.

[E.164](https://en.wikipedia.org/wiki/E.164#:~:text=164%20defines%20a%20general%20format,a%20maximum%20of%20twelve%20digits.) format that specifies a numbering scheme for the public switched telephone network (PSTN) across the world as well as a few other data networks.

### Using E.164 with SIP

Several situations occurs which compel SIP apps to deal with phone numbers. It's impossible to route phone numbers using the conventional DNS resolution methods for SIP that rely on SIP URIs (Uniform Resource Identifiers). Thus, ENUM offers a way for converting E.164 numbers into URIs (SIP URIs).

A system called ENUM (E.164 Number Mapping) uses DNS to convert some phone numbers, like "+12025332600," into URIs, or RFC 2396-compliant addresses, like "sip:user@sipcarrier.com."

ENUM's main purpose is to make it easier for systems that use URIs to route transactions to link with those that depend on phone numbers.
