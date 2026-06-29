# Billing Guide

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Billing Guide<br>
<strong>Audience</strong>: Administrators, Engineers, Finance Team<br>
<strong>Difficulty</strong>: Intermediate<br>
<strong>Time Required</strong>: 20–35 minutes<br>
<strong>Prerequisites</strong>: Familiarity with rate cards, CDRs, and your account's billing model (per-minute or per-channel)<br>
<strong>Related Topics</strong>: <a href="https://docs.connexcs.com/billing-basics/">Billing Basics</a> — details on increments and rounding, <a href="https://docs.connexcs.com/billing/">ConnexCS Billing</a> — overview of billing models (per-minute, per-channel)<br>
<strong>Next Steps</strong>: Configure billing cycles per customer, assign rate cards and MRC packages, enable balance alerts, verify invoice output.<br>

</details>

## The Billing Lifecycle

Every invoice in ConnexCS originates from a call. The full lifecycle moves through six stages:

**1. Customer call** — A call is placed through the ConnexCS switch. The Class 4 platform handles routing and begins capturing call detail information from the moment the call connects.

**2. CDR generated** — A Call Detail Record is produced when the call ends. The CDR records the originating number, destination, start time, duration, route used, and other metadata. CDRs are the authoritative source of billing truth in ConnexCS — always use CDR data for billing purposes, not account balance deltas.

**3. Rating** — The CDR is rated against the applicable customer rate card. Billing increments, rounding rules, and precision settings are applied at this stage. See [Billing Basics](https://docs.connexcs.com/billing-basics/) for a detailed explanation of how rounding and increments affect the final charge.

**4. Invoice created** — At the end of the configured billing cycle (daily, weekly, or monthly), ConnexCS compiles all rated CDRs for the period and generates an invoice. Any MRC (Monthly Recurring Charges) packages assigned to the account are automatically included alongside usage totals.

**5. Payment recorded** — When a payment is received and recorded against the account, the account balance is updated and a payment confirmation can be sent. See [Customer Payment](https://docs.connexcs.com/customer/payment/).

**6. Reporting updated** — Profit reports, breakout reports, and spend reports all draw from the same rated CDR data that produced the invoice, ensuring consistency between what you invoice and what your reports show.

---

## Call Detail Records (CDRs)

CDRs are the historical record of every call in a given period. They are the recommended dataset for answering any question about billing or invoice discrepancies.

!!! tip
    Do not base billing on account balance changes. Always derive charges from CDR records. Where possible, export CDR data at least 24 hours after the final day of the billing period to ensure all records have been captured and processed.

See [Customer CDR](https://docs.connexcs.com/customer/cdr/) for filtering, exporting, and working with CDR data.

---

## Invoice Generation

ConnexCS generates invoices automatically on the billing cycle configured for each customer account. Each customer can have an independent cycle — one customer might bill monthly, another weekly — depending on the agreement in place.

**What the invoice includes:**

- All rated CDR usage for the billing period
- Any MRC package charges assigned to the account
- Tax amounts calculated at the account level (see [Tax Handling](#tax-handling) below)
- Invoice totals in the customer's configured currency

When the billing cycle triggers, ConnexCS compiles the usage data, applies any recurring charges, calculates tax, and produces a PDF invoice. The invoice is made available to the customer through the customer portal and can be delivered by email.

See [Customer Invoices](https://docs.connexcs.com/customer/invoices/) for managing and reviewing invoices.

---

## Multi-Currency Support

ConnexCS supports billing customers and paying suppliers in different currencies. Customer accounts can each be configured with their own billing currency, allowing you to invoice a UK customer in GBP, a US customer in USD, and a European carrier in EUR — all within the same platform.

Exchange rate handling is configurable at the account level. Check your account settings under **Setup → Settings → Account** for currency configuration options.

---

## Tax Handling

Tax can be configured and applied to customer invoices at the account level. This allows you to apply different tax rates or exemptions depending on the customer's billing jurisdiction.

Tax amounts are calculated during invoice generation and appear as a line item on the PDF invoice. Configure tax settings per customer account under the customer's billing or main settings.

!!! note
    * ConnexCS applies tax based on the configuration you set.
    * Ensuring the correct tax rates are applied for each jurisdiction is the responsibility of the account administrator
    * Consult your local regulatory requirements when configuring tax for cross-border billing.

---

## Automated Billing Alerts and Notifications

ConnexCS triggers notifications automatically based on billing events, balance thresholds, and call quality metrics. Configuring these alerts reduces manual monitoring overhead and helps catch potential billing issues before they escalate.

### Low Balance Alerts

Trigger an alert when a customer account balance falls below a configured threshold. Useful for prepay customers approaching zero balance.

Configure under the customer account's **Alerts** tab. See [Customer Alerts](https://docs.connexcs.com/customer/alerts/).

### Payment Notifications

Notify customers and internal teams when a payment is recorded against an account. Confirmation messages can be sent automatically on payment receipt.

### ASR and ACD Quality Alerts

Answer Seizure Ratio (ASR) and Average Call Duration (ACD) alerts fire when call quality metrics fall outside expected ranges. Low ASR or ACD can indicate route problems that generate costs without corresponding revenue — catching these early reduces billing disputes.

- **Low ASR** means calls are being attempted but not connecting. Your switch is processing the load without generating billable revenue.
- **Low ACD** means calls are connecting but ending very quickly, which increases switch workload relative to revenue generated.

Configure ASR/ACD thresholds under the customer's **Alerts** tab.

### Scheduled Reports

Automated report delivery can be configured on fixed schedules for finance and operations teams. Reports draw from rated CDR data and reflect the same figures as customer invoices.

---

## Profit Assurance and Pre-Call Guardrails

ConnexCS enforces billing protection rules before each call connects, not after. This prevents revenue loss from misconfigured rate cards, unexpected carrier surcharges, or accounts that have reached their credit limit.

The following guardrails are applied on every call in real time:

**Profit Assurance** — If the provider buy rate for a route exceeds the customer sell rate, the call is blocked before it connects. This prevents negative-margin calls from completing.

**Rate Cap** — A maximum per-minute rate can be set for provider routes. Any route priced above the cap is excluded from routing, preventing unexpected carrier surcharge exposure.

**Balance Monitor** — Account balances are checked every 60 seconds. When a prepay customer's balance reaches the configured debit limit, new calls are blocked until the balance is replenished.

!!! tip
    * Profit Assurance and Rate Cap are configured at the routing or rate card level.
    * Balance thresholds are set per customer account.
    * Review these settings whenever you update rate cards or onboard a new carrier.

---

## Payments

Use the Payments section to view and approve payments recorded against customer accounts. Payments update account balances and are reflected in financial reports.

See [Customer Payment](https://docs.connexcs.com/customer/payment/) for full details.

---

## Vouchers

Vouchers function like calling cards and can also be used to apply account credits. They are an alternative top-up mechanism for prepay customers.

See [Vouchers](https://docs.connexcs.com/voucher/) for configuration and usage.

---

## Supplier Billing Reconciliation

In addition to billing your customers, ConnexCS tracks what your carriers charge you. Supplier costs are rated separately from customer revenue, allowing you to reconcile incoming carrier invoices against your CDR-rated costs.

To investigate a discrepancy between a supplier invoice and your internal records:

1. Pull CDR data for the billing period in question, filtered by the carrier route.
2. Compare the CDR totals (duration, call count, rated cost) against the supplier invoice line items.
3. Check for differences in billing increments — your supplier may use a 60/60 rounding scheme while your internal CDRs use 6/6. See [Billing Basics](https://docs.connexcs.com/billing-basics/) for how increment differences affect totals.
4. Raise any discrepancy with the carrier using your CDR export as the supporting dataset.

---
