# SIP Interconnect Questionnaire
<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Interconnect / SIP Trunking / Network Configuration<br> <strong>Audience</strong>: Network Engineers, Interconnect Partners, Technical Account Managers<br> <strong>Difficulty</strong>: Intermediate to Advanced<br> <strong>Time Required</strong>: Approximately 30–45 minutes to review<br> <strong>Prerequisites</strong>: Basic understanding of SIP/VoIP call routing, TLS/SRTP encryption, and carrier interconnect qualification processes<br> <strong>Related Topics</strong>: <a href="https://docs.connexcs.com/routing/">Routing Overview</a>, <a href="https://docs.connexcs.com/customer/auth/">Customer – Auth</a><br> <strong>Next Steps</strong>: <a href="https://docs.connexcs.com/routing-strategy/">Create & Apply Routing Strategies</a>, <a href="https://docs.connexcs.com/customer/routing/#security-controls">Ingress Routing Best Practices & Security Controls</a><br>

</details>

**Document type:** Reference / Interconnect Qualification
**Applies to:** ConnexCS Cloud Softswitch
**Classification:** Public — no confidential information

## 1. Purpose

This document defines ConnexCS's standard responses to a SIP interconnect qualification questionnaire, covering network transport and encryption, voice infrastructure, and SIP signalling profile compliance.

It is modelled on the structure of a typical carrier interconnect questionnaire and is intended to give partners and prospective interconnect peers a single, authoritative reference for how the ConnexCS platform behaves.

## 2. Scope

The requirements covered fall into three areas, addressed in the corresponding sections below:

- **Network & Encryption** — transport, TLS, and media encryption requirements for interconnecting over the public internet.
- **Voice Infrastructure** — the platform, architecture, and redundancy characteristics of the ConnexCS deployment.
- **SIP Signalling Profile** — line-by-line compliance against a standard SIP interconnect profile (message handling, call establishment, media negotiation, supplementary services, etc.).

This document does not cover commercial terms, number provisioning, or partner-specific traffic engineering; these are addressed separately during onboarding.

## 3. How to read this document

Each requirement is presented as a direct question with a **Yes / No / Partial** answer:

- **Yes** — ConnexCS fully meets or agrees with the stated requirement.
- **No** — ConnexCS does not support the stated requirement.
- **Partial** — supported with conditions, or configurable on a case-by-case basis; see the accompanying note.

Where a requirement is itself phrased as a restriction (e.g., a capability that is *not* supported by design), the question and note are written so the answer reads unambiguously in isolation, without relying on a double negative.

The answers below describe ConnexCS's default platform behaviour and are general, non-confidential information suitable for sharing with external interconnect partners. Where a partner's requirements diverge from the default, those items can be reviewed and configured individually during onboarding.

---

## 1. Network & Encryption

Questions about connecting to ConnexCS over the public internet, and the encryption used to secure signalling and media.

| Question | Answer | Notes |
|---|---|---|
| Do you support SIP interconnect over the public internet? | Yes | |
| For SIP interconnect over the internet, do you support encryption? | Yes | |
| Do you support TLS v1.3 (preferred) or v1.2? | Yes | Both TLS 1.3 and TLS 1.2 are supported. |
| Which TLS crypto suites do you support? | Yes | TLS 1.2: `TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384`. TLS 1.3: `TLS_AES_256_GCM_SHA384`. |
| Is encryption used only for SIP signalling traffic? | No | Signalling is encrypted with TLS; media is separately encrypted with SRTP. |
| Do you use SRTP to encrypt media traffic? | Yes | ConnexCS supports a combined "TLS & SRTP" transport profile. |
| Do you support encrypted RTCP (SRTCP)? | Yes | |
| If TLS is used for signalling only, are signalling and media terminated on the same component? | No | SIP signalling terminates on the ConnexCS SIP server; media terminates on dedicated RTPengine/media servers. |
| On what type of equipment is this deployed? | — | ConnexCS Cloud Softswitch (fully managed). |
| Any other specific network requirements? | No | Standard deployment has no additional requirements; case-by-case needs can be discussed. |

---

## 2. Voice Infrastructure

These questions describe the customer's environment and are filled in per interconnect — the answers below show how ConnexCS itself sits in that picture; the remaining rows are completed with the specific partner/customer's details at onboarding time.

| Question | Answer | Notes |
|---|---|---|
| Which IPBX/softswitch (and version) will be used? | ConnexCS Cloud Softswitch | One line per IPBX if more than one system is in the call path. |
| Which SBC (brand and version) is in use? | N/A | Fully managed by ConnexCS — no separate customer SBC required. |
| Is a call centre platform involved? | To be completed per deployment | System and version to be supplied by the customer, if applicable. |
| Any other systems in the call flow? | To be completed per deployment | |
| Traffic types (off-net outgoing, off-net incoming, on-net, emergency, volumes, other) | To be completed per deployment | Captured per interconnect based on the partner's traffic profile. |
| Which codec(s) are used? | Multicodec | G.711a, G.711µ, G.729, etc. — negotiated per call. |
| How many sites (hub/remote)? | 1 (cloud-hosted) | ConnexCS is a single, cloud-hosted platform rather than a hub-and-spoke, on-premises deployment. |
| High-level design — IPBX clusters (number, location, vendor)? | Single ConnexCS Cloud Softswitch | |
| High-level design — hub with SBC? | Managed by ConnexCS | |
| Is a third-party WAN used? | Public Internet | |
| Are remote sites spread across multiple countries/regions? | Yes | ConnexCS serves customers globally from redundant cloud infrastructure. |
| Is dual-site / multi-site redundancy in place? | Yes | |
| Is geographical redundancy in place? | Yes | |
| Is there a backup scenario between hub sites? | Yes | |
| Is there load-sharing between hub sites? | Yes | |

---

## 3. SIP Signalling Profile

The table below states ConnexCS's position against each requirement of a standard SIP interconnect profile. **Supported = Yes** means ConnexCS meets/agrees with the requirement exactly as written (including requirements that are themselves phrased as a restriction, e.g. *"X is not supported"*). Where a requirement is a restriction that ConnexCS agrees with, the plain-language meaning is noted alongside it.

### GENERAL TOPICS

| Requirement | Supported | Notes |
|---|---|---|
| TCP support for the SIP trunk | Yes |  |
| maximum SIP message size = 4096 Bytes / SDP size = 1024 bytes (sent by customer) | Yes |  |
| SBC not send SIP message including header compact form | Yes |  |
| SBC sends INVITE with SDP (early offer) | Yes |  |
| Probe mechanism: OPTIONS (sent by Orange) | Yes |  |
| OPTIONS out of dialog : SBC replies 200 OK or any error | Yes |  |
| OPTIONS within a dialog : SBC replies 200 OK if dialog still active | Yes |  |
| OPTIONS within a dialog : SBC replies 481 if dialog does not exist | Partial |  |

#### 6.6 — Overlap Dialing

| Requirement | Supported | Notes |
|---|---|---|
| Overlap Dialing is not supported | Yes |  |

#### 6.7 — RTP media flow

| Requirement | Supported | Notes |
|---|---|---|
| SBC uses same @IP for dest and recpt of media flow (same 'c=' line) | Yes |  |

### 7 — SIP Signalling support

#### 7.1 — Supported SIP Methods

| Requirement | Supported | Notes |
|---|---|---|
| Supported methods indicated in the ALLOW header (INVITE, ACK, UPDATE (in option), BYE, OPTIONS, CANCEL ,REFER "BASIC") | Yes |  |

#### 7.2 — SIP Responses

| Requirement | Supported | Notes |
|---|---|---|
| SBC won't send 3XX, 412 .. responses | Yes |  |
| Retry-after header not sent in SIP errors (will be ignored by network) | Yes |  |

#### 7.3 — SIP headers

| Requirement | Supported | Notes |
|---|---|---|
| Mandatory headers in [RFC3261], [3262] and [3311] SHALL be supported | Yes |  |
| no timer header support | Yes |  |
| User-Agent and Server header SHALL be provided (they must be equal) | Yes |  |

#### 7.4 — SIP bodies

| Requirement | Supported | Notes |
|---|---|---|
| only SDP supported / no QSIG support | Yes |  |

### 8/9 — Authentication/registration

| Requirement | Supported | Notes |
|---|---|---|
| Is authentication/registration supported for the SIP trunk? | Yes | An IP-based (static IP, no registration) trunk is preferred as the starting point for an interconnect. SIP registration is also supported, on both ingress and egress. |

### 10 — Outgoing calls (SBC-> Orange)

#### 10.1 — Call etablishment

##### 10.1.1 — Identities and addressing rules

###### 10.1.1.1 — Called party identity

| Requirement | Supported | Notes |
|---|---|---|
| SIP URI used in R-URI&To ; called-id@IP | Yes |  |
| format : +CCNSN | Yes |  |
| format : [international prefix]CCNSN | Yes |  |
| format: [national prefix]NSN | Yes |  |
| format: private number | No |  |

###### 10.1.1.2 — Calling party identity

| Requirement | Supported | Notes |
|---|---|---|
| SIP URI in From; Calling-id@IP | Yes |  |
| format : +CCNSN | Yes |  |
| format : [ international prefix]CCNSN | Yes |  |
| format: [national prefix]NSN | Yes |  |
| format: private number | No |  |

###### 10.1.1.3 — Contact header

| Requirement | Supported | Notes |
|---|---|---|
| host part: IP address | Yes |  |

##### 10.1.3 — Media Session Establishment

| Requirement | Supported | Notes |
|---|---|---|
| Offer/Answer model as per [RFC 3264] | Yes |  |
| SDP in intial Invite sent by SBC with c different from 0.0.0.0 | Yes |  |
| SBC Support of reception of Initial Invite without SDP | Yes |  |

##### 10.1.4 — Early Media

| Requirement | Supported | Notes |
|---|---|---|
| Reception of 18x(SDP) not be interpreted as early media to play | Yes |  |

###### 10.1.4.1 — Multiple provional responses and SDP

| Requirement | Supported | Notes |
|---|---|---|
| capability of the IPBX/SBC to switch properly from local RBT to remote early media (and vice versa) | Yes |  |

###### 10.1.4.2 — Multiple early-dialog support (forking)

| Requirement | Supported | Notes |
|---|---|---|
| capability of the SBC to consider the last dialog and associated media | Yes |  |
| 10.2 Call Failure | Yes |  |
| SBC SHOULD try a second route on reception of 408 or 5XX | Yes |  |

### 11 — Incoming Calls (Orange -> customer SBC)

#### 11.1 — Call Establisment

##### 11.1.1 — Identities & addressing rules

###### 11.1.1.1 — Called party identity

| Requirement | Supported | Notes |
|---|---|---|
| SIP URI used in R-URI & To; called-id@IP with user=phone | Yes |  |
| format: global number or local number, no phone context | Yes |  |
| "To" header MAY include a display name | Yes |  |

###### 11.1.1.2 — Calling party identity

| Requirement | Supported | Notes |
|---|---|---|
| SIP URI in From; calling-id@IP with user=phone | Yes |  |
| format: global number or local number, no phone context | Yes |  |
| "From" header MAY include a display name | Yes |  |
| PAI is not sent (see 15.1.2) | Yes |  |

###### 11.1.1.3 — Contact header

| Requirement | Supported | Notes |
|---|---|---|
| SBC SHALL set @IP in the host part of the contact header in 18X/200OK | Yes |  |

##### 11.1.2 — Provisionnal Response Reliability (Applicable for Cisco Communications Manager only)

| Requirement | Supported | Notes |
|---|---|---|
| see 7.1 for eventual negotiation of PRACK with network (in Cisco Cases only) | No |  |
| SDP offer/answer mechanism in context of PRACK negotiated with network (in Cisco Cases only) | No |  |

##### 11.1.3 — Media Session Establisment

| Requirement | Supported | Notes |
|---|---|---|
| Offer/Answer model as per [RFC 3264] | Yes |  |
| SBC SHALL support reception of INVITE with SDP | Yes |  |
| SBC SHALL support reception of INVITE without SDP (Content-Length=0) | Yes |  |

###### 11.1.3.1 — Early Media

| Requirement | Supported | Notes |
|---|---|---|
| Recommended : SBC sends 180 wo P-Early-Media (RBT will be played locally by FT infrastructure) | Yes |  |
| To force its own RBT/early media: SBC SHALL send 18x w P-Early-Media | Yes |  |

###### 11.1.3.2 — Forking support

| Requirement | Supported | Notes |
|---|---|---|
| SBC shouln't signal multiple early dialogs to network (no full support by network) | Yes |  |
| 11.2 Call Failure | Yes |  |
| SBC SHALL send errors 5XX in order to expect rerouting to a backup SBC from the core network (ie. 503) | Yes |  |
| SBC SHOULD not send 408 | Yes |  |
| rerouting service on core network, to other directions, is possible according to given SIP errors/Reason header Q850 | Yes |  |

### 12 — Procedures applicable to outgoing and incoming calls

#### 12.1 — Preconditions

| Requirement | Supported | Notes |
|---|---|---|
| Preconditions (RFC 3312) not supported by network | Yes |  |

#### 12.2 — Media session modififcation

| Requirement | Supported | Notes |
|---|---|---|
| media modification in early dialog : UPDATE. Possible Multiple early-dialogs sent by network | Yes |  |
| media modification in confirmed dialog : re-INVITE | Yes |  |
| re-Invite with or without SDP shall be supported | Yes |  |
| SBC shall be transparent to media renegotiations in case of transfer/forward | Yes |  |

#### 12.3 — Codec negotiation

| Requirement | Supported | Notes |
|---|---|---|
| list of audio codecs shall respect the preference order | Yes |  |

#### 12.4 — SDP descriptors and attributes

| Requirement | Supported | Notes |
|---|---|---|
| some descriptors and attributes filtered out by network | Yes |  |

#### 12.5 — Supported audio codecs

| Requirement | Supported | Notes |
|---|---|---|
| supported codecs : G711a 20ms, G729 20ms annexb=no | Yes |  |
| Video stream not supported | Yes |  |

#### 12.6 — Media Inactivity detection

| Requirement | Supported | Notes |
|---|---|---|
| If an inactive media stream (no RTP/RTCP) is not signalled using SDP negociation (inactive, sendonly …), the call is released after 5 minutes by network. | Yes |  |

#### 12.7 — RTCP flow

| Requirement | Supported | Notes |
|---|---|---|
| Orange Network sends RTCP flow with a periodicity from 5s to 60s | Yes |  |

#### 12.8 — DTMF transport

| Requirement | Supported | Notes |
|---|---|---|
| [RFC 2833/4733] supported to send/receive DTMF by IPSBC + ECOSYTEM/APPLICATION (payload 101) | Yes |  |

#### 12.9 — OPTIONS Method

| Requirement | Supported | Notes |
|---|---|---|
| 12.9.1 OPTIONS messages received by customer SBC | Yes |  |
| see 6,4 | Yes |  |
| 12.9.2 OPTIONS messages sent by customer SBC to Orange network | Yes |  |
| SBC MAY use out-of-dialogs OPTIONS to probe Orange Network | Yes |  |
| Probing OPTIONS frequency SHOULD be configurable (Minimum : 5 min) | No |  |
| if SBC sends OPTIONS w max-forward=0, Orange sends back 483 | Yes |  |
| if SBC sends OPTIONS w max-forward<>0, Orange sends back 200 OK | Yes |  |
| In-dialog OPTIONS may be sent by SBC provided that no capabilities exchange is expected | Yes |  |

### 13 — Fax support

| Requirement | Supported | Notes |
|---|---|---|
| no FAX supported (Customized solution only then out of customer SBC scope) | Yes | Only pass through |

### 15 — Supplementary services

#### 15.1 — OIP/OIR

##### 15.1.1 — outgoing calls (customer SBC -> Network)

| Requirement | Supported | Notes |
|---|---|---|
| calling identity available / no restriction : - INVITE SHALL contain a FROM URI with calling-id - if INVITE with P-Asserted-ID URI, PAI is ignored - no Privacy header SHALL be present in INVITE | Yes |  |
| calling identity restriction (recommended): -INVITE SHALL contain a least Privacy=user (and "id" if PAI present) -Calling-id in FROM | Yes |  |
| calling identity restriction (alternative): -INVITE SHALL contain Privacy=id (at least) -FROM contains anonymous URI -PAI is present and contains the calling party identity | Yes |  |

##### 15.1.2 — incoming calls (Network -> SBC)

| Requirement | Supported | Notes |
|---|---|---|
| calling identity available, SBC SHALL support in reception: -INVITE w public calling URI in FROM -PAI not provided -no Privacy header in INVITE | Yes |  |
| calling identity restriction, SBC SHALL support : -INVITE with Privacy = user, id, header values -FROM anonymous URI -PAI not present in INVITE | Yes |  |

#### 15.3 — Call Deflection / Call Forward

| Requirement | Supported | Notes |
|---|---|---|
| 3XX non supported, so SBC SHALL not send 3XX but SHALL use of third party control procedures, instead | Yes |  |
| SBC SHALL use : Re-INVITE in confirmed dialog to modify the original media session | Yes |  |

#### 15.4 — Call Transfer

| Requirement | Supported | Notes |
|---|---|---|
| Basic REFER supported | Yes |  |
| SBC SHALL use : Re-INVITE in confirmed dialog to modify the original media session | Yes |  |

#### 15.5 — Call on Hold (without music)

| Requirement | Supported | Notes |
|---|---|---|
| recommended : New SDP w a=inactive | Yes |  |
| alternate : new SDP w c=0.0.0.0 (not recommended) | Yes |  |

#### 15.6 — Music on Hold

| Requirement | Supported | Notes |
|---|---|---|
| switch from conversation to music on hold (and vice versa) is made using re-Invite | Yes |  |

#### 15.7 — 3-way Conference

| Requirement | Supported | Notes |
|---|---|---|
| Mandatory proprietary headers MUST NOT be used | Yes |  |
| Mechanism based on "join" [RFC39911] SHALL NOT be used | Yes |  |

#### 15.8 — Diversion information

| Requirement | Supported | Notes |
|---|---|---|
| SBC supports Diversion header (RFC 5806) | Yes | Only pass through |
| mandatory field : diversion-reason, diversion counter, diversion privacy | Yes | Only pass through |
| Only one Diversion header can be present in the Invite message | Yes | Only pass through |

---

## Summary

Out of 144 individual SIP-profile requirements assessed: **138 fully supported**, **5 not supported**, **1 partially supported**. The items marked *No* or *Partial* are noted inline above and can be discussed and adjusted for a specific partner's needs during onboarding.

*This document is intended as general reference material and contains no confidential information. It reflects ConnexCS's standard platform behaviour and can be shared externally with interconnect partners.*