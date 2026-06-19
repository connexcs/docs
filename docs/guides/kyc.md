# KYC & Identity Verification

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Compliance & Security<br>
<strong>Audience</strong>: New Customers, Account Holders, Compliance Teams<br>
<strong>Difficulty</strong>: Beginner<br>
<strong>Related Topics</strong>: <a href="https://docs.connexcs.com/guides/gdpr/">Data Protection & GDPR</a>, <a href="https://docs.connexcs.com/customer/documents/">Customer Documents</a><br>
<strong>Next Steps</strong>: Submit your KYC documents via the Customer Portal<br>

</details>

---

## Overview

ConnexCS implements Know Your Customer (KYC) and Customer Due Diligence (CDD) procedures to verify the identity of customers, prevent fraud, protect platform integrity, and support compliance with applicable legal and regulatory requirements.

As a UK-based technology provider serving customers globally, ConnexCS processes all personal data in accordance with the **UK General Data Protection Regulation (UK GDPR)** and the **Data Protection Act 2018**. Verification procedures align with KYC good-practice guidance published by Ofcom and international standards set by the **Financial Action Task Force (FATF)**.

KYC verification may be required before certain services are activated or account privileges are granted.

!!! info "Data Minimisation"
    ConnexCS collects only the information strictly necessary for a defined purpose. Under UK GDPR Article 5(1)(c), personal data must be adequate, relevant, and limited to what is necessary for the purposes for which it is processed.

---

## Lawful Bases for Processing

| Basis | UK GDPR Article | Application |
|---|---|---|
| **Contractual necessity** | 6(1)(b) | Required to perform the contract with you or your organisation |
| **Legitimate interests** | 6(1)(f) | Platform fraud prevention and misuse detection |
| **Legal obligation** | 6(1)(c) | Applicable regulatory and sanctions-screening requirements |

Biometric data collected during identity verification is special-category data under UK GDPR Article 9. ConnexCS processes this data under Article 9(2)(g) (substantial public interest — fraud prevention), read with Schedule 1, Part 2 of the Data Protection Act 2018.

---

## Personal Contact Information

The following fields are collected for the individual acting as the primary account contact.

### Full Name

The account holder's full legal name is collected to:

- Identify the authorised representative on the account
- Verify identity during onboarding
- Maintain contractual and billing records
- Facilitate account-related communications

### Phone Number

A valid telephone number is collected to:

- Contact the account holder regarding urgent operational or compliance matters that cannot be resolved by email
- Verify account ownership when required
- Communicate service-impacting incidents or security concerns
- Conduct periodic service reviews

### Email Address

A valid email address is required for:

- Account notifications and service announcements
- Security alerts
- Billing and administrative communications
- Support correspondence
- Policy updates and formal communications

---

## Identity Verification

All customers must pass identity verification before account activation. Verification consists of two stages.

### Document Verification

A government-issued identity document must be submitted. Accepted documents include:

- Passport
- National identity card
- Driving licence

Document verification is used to:

- Confirm the identity of the account holder
- Prevent impersonation and fraudulent account creation
- Support customer due diligence requirements

This requirement aligns with:

- **JMLSG Guidance** (Part I) — Customer Due Diligence standards
- **FATF Recommendation 10** — Customer identification and verification using reliable, independent documentary sources
- Ofcom KYC good-practice guidance, adopted as an industry benchmark

### Liveness and Facial Match

Where required, an automated liveness-detection and facial-match check is performed by ConnexCS's accredited KYC processing partner. These checks are used to:

- Confirm that a real individual is present during verification
- Validate that the individual matches the submitted identity document
- Reduce the risk of identity fraud

!!! warning "Biometric Data"
    Liveness and facial-match verification processes biometric data. This data is used solely to confirm identity at onboarding. It is not retained on ConnexCS systems and is not used for any secondary purpose.

---

## Legal Entity Verification

Following individual identity verification, the legal entity associated with the account must be established. Requirements differ depending on whether the account is registered as a company or as an individual.

---

### Company Accounts

#### Company Verification

ConnexCS verifies that the company is a legitimate, legally trading entity. Verification is performed using publicly available corporate registries (such as Companies House for UK entities) and trusted third-party verification services.

Checks confirm:

- The company exists as a registered legal entity
- There are no legal impediments to doing business (dissolution, insolvency, regulatory prohibition)
- The company does not appear on sanctions lists maintained by HM Treasury (OFSI), the UN Security Council, or other applicable authorities

This is consistent with **UK MLR 2017**, **FATF Recommendation 10**, and applicable international sanctions obligations.

#### Registered Address

The company's registered or trading address is collected to:

- Confirm its place of incorporation
- Establish the jurisdiction in which the business operates
- Maintain accurate records for correspondence and legal purposes

#### Authorised Representatives and Key People

ConnexCS verifies that the individual creating or managing the account has authority to act on behalf of the organisation. Authorised representatives may include:

- Directors
- Owners or partners
- Officers or administrators
- Other individuals holding written authority to act on the company's behalf

ConnexCS also identifies **beneficial owners** — persons holding 25% or more of shares or voting rights — who are subject to separate KYC verification. Where the account contact is not a beneficial owner or key decision-maker, a KYC check against a key decision-maker may be required separately.

This approach is consistent with **JMLSG Guidance Part I, Chapter 5** and **FATF Recommendation 24** (beneficial ownership transparency).

---

### Individual Accounts and Sole Traders

#### Residential or Business Address

Where an account is held by an individual or sole trader operating without a registered company, a residential or business address is required. This is used to:

- Corroborate identity against address records as part of standard individual CDD
- Establish the jurisdiction in which the individual operates
- Provide a contact address for formal correspondence
- Support contractual and legal obligations

#### Database Screening

Individual account holders are screened against external databases as part of Customer Due Diligence (CDD). Verification results may be used to assess account eligibility and identify potentially fraudulent activity.

| Check | Purpose | Reference |
|---|---|---|
| **Sanctions screening** | Confirms the individual does not appear on HM Treasury (OFSI), UN Security Council, or other applicable sanctions lists | UK MLR 2017; OFSI |
| **Politically Exposed Persons (PEPs)** | Identifies individuals holding or having held a prominent public function; triggers enhanced due diligence where applicable | UK MLR 2017 Reg. 35; FATF Rec. 12 |
| **Adverse media** | Open-source screening for credible information indicating financial crime risk | FATF Rec. 13 |
| **Fraud prevention databases** | Cross-references identity against known fraud indicators | Industry standard |

These checks are applied consistently to all individual account holders and are not indicative of any assumption of wrongdoing. They are a standard component of CDD under **UK MLR 2017 Regulations 27–28** and **FATF Recommendations 12 and 13**.

---

## Data Storage and Access

ConnexCS does not store identity verification documents directly within its operational platform. All KYC documentation and personal data submitted during verification is processed and retained by ConnexCS's approved KYC processing partner, operating under appropriate security and privacy controls.

Access to verification data is restricted and occurs only when required for:

- Initial verification and onboarding
- Periodic re-verification where required by applicable KYC standards or following a material change to the account
- Fraud, compliance, or security investigations
- Legal or regulatory requests — for example, in response to a lawful request from a regulatory authority, law enforcement agency, or court order

All processing is performed in accordance with applicable data protection requirements and contractual obligations.

### International Data Transfers

ConnexCS serves an international customer base. Where personal data is transferred to systems located outside the UK, appropriate safeguards under **UK GDPR Chapter V** are in place — including Standard Contractual Clauses or adequacy decisions — to ensure equivalent levels of protection.

### Retention

KYC records are retained for the period necessary to fulfil the purposes described in this document and to comply with applicable legal obligations, including statutory retention periods prescribed by financial crime legislation.

---

## Your Rights

Under UK GDPR, you have the following rights in relation to your personal data:

- **Right of access** — to obtain a copy of the personal data held about you
- **Right to rectification** — to have inaccurate data corrected
- **Right to erasure** — to request deletion of data where no longer necessary (subject to legal retention obligations)
- **Right to restriction** — to restrict processing in certain circumstances
- **Right to object** — to object to processing based on legitimate interests
- **Right to data portability** — to receive your data in a structured, machine-readable format

To exercise any of these rights, contact: [INSERT PRIVACY CONTACT EMAIL]

To raise a complaint about how ConnexCS handles your personal data, contact the **Information Commissioner's Office (ICO)** at [ico.org.uk](https://ico.org.uk).

For full details of data processing activities, refer to the [ConnexCS Privacy Notice](https://connexcs.com/company-policies/data-privacy-policy).

---

## Applicable Standards

| Standard | Body | Relevance |
|---|---|---|
| UK GDPR & Data Protection Act 2018 | ICO (UK) | Lawful basis for processing personal data |
| Money Laundering Regulations 2017 (MLR 2017) | HM Treasury | Customer due diligence and beneficial ownership |
| FATF Recommendations 10, 12, 13, 24 | FATF | International CDD, PEP, and beneficial ownership standards |
| JMLSG Guidance (Parts I & II) | JMLSG | UK industry CDD guidance for individuals and corporate customers |
| Ofcom KYC Guidance | Ofcom | Good-practice framework for the communications sector |
| OFSI Consolidated List | HM Treasury | UK financial sanctions targets |
| UN Security Council Consolidated List | United Nations | International sanctions screening |

---
