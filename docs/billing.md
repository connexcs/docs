# Billing

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Setup → Billing<br>
<strong>Audience</strong>: Administrators, Engineers, Finance Team<br>
<strong>Difficulty</strong>: Intermediate<br>
<strong>Time Required</strong>: 15–25 minutes<br>
<strong>Prerequisites</strong>:<br>
<ul>
<li>A working understanding of your account’s billing model (per-minute vs. per-channel)</li>
<li>Access to your usage data or CDRs to understand how charges are incurred</li>
</ul>
<strong>Related Topics</strong>: Billing Basics (detailed billing increments, rounding), Billing Guide (overall billing models), Rate Card Overview (since rate cards tie into billing)<br>
<strong>Next Steps</strong>: Confirm your billing model, configure rate cards, set up MRC packages if required, and test with a sample invoice.<br>

</details>

## Two Directions of Billing

ConnexCS billing operates in two directions simultaneously:

**Customer billing** — you charge your customers for calls they place, based on rate cards, billing increments, and any monthly recurring packages.

**Supplier billing** — your carriers charge you for traffic you route through them. ConnexCS tracks these costs separately so you can reconcile supplier invoices against your own CDR-rated costs and monitor margin at every level.

Understanding both directions is essential before configuring any billing model.

---

## ConnexCS Billing Per Channel

Billing per channel is the traditional approach, where the customer pays for a set number of channels or ports — the VoIP equivalent of per-line billing in mobile networks.

### Advantages

- Cheaper than per-minute billing for systems with consistent, high traffic volumes.
- Free servers are available for several tiers of service.
- Predictable costs allow for stable billing cycles and simplified cost-benefit analysis.

### Disadvantages

- Inconsistent traffic often leads to higher costs relative to per-minute billing.
- Capacity planning is inherently less flexible.

---

## ConnexCS Billing Per Minute

In per-minute billing, the number of seconds used is tallied daily, combined with the per-minute cost, and deducted from the account balance.

### Advantages

- Scales precisely with actual usage — ideal for variable or unpredictable traffic patterns.
- Per-minute rates are granular enough to align costs closely with revenue at the route level.

### Disadvantages

- More expensive than per-channel billing when traffic is consistent and high-volume.
- Running multiple servers increases cost proportionally.

---

## Monthly Recurring Charges (MRC)

MRC packages allow you to apply fixed monthly fees to customer accounts on top of usage-based charges. Common use cases include:

- DID (Direct Inward Dialling) number rental fees
- Platform access or seat fees
- Bundled minute allowances billed at a flat rate

MRC packages are configured under **Setup → Config → Packages** and assigned at the customer account level. When an invoice is generated, all applicable MRC charges for the billing period are automatically included alongside usage-based charges. The invoice total reflects both components.

See [Packages](https://docs.connexcs.com/setup/config/packages/) for configuration steps.

---

## Re-Rating

Re-rating allows ConnexCS to reprocess historical CDRs using updated rate card values. This is useful when:

- A rate card error is discovered after calls have already been rated and invoiced.
- A carrier retrospectively adjusts their pricing and you need to realign costs.
- You are migrating from one rate card structure to another and need historical data to reflect the new model.

When re-rating is triggered, ConnexCS recalculates the cost and revenue for each affected CDR against the corrected rate card. Invoices and reports are updated to reflect the corrected totals.

!!! warning
    * Re-rating affects historical invoice data.
    * Always confirm the scope of CDRs to be re-rated and communicate any resulting invoice changes to affected customers before reprocessing.

---

## Minimum Charges

All accounts must reach a minimum spend per server per month to remain active. This prevents losses from stagnant or inactive accounts. See the [Pricing page](https://connexcs.com/pricing) for current minimums.

---

## Choosing the Right Model

| Consideration | Per Channel | Per Minute |
|---|---|---|
| Traffic pattern | Consistent, high volume | Variable or unpredictable |
| Cost predictability | High | Moderate |
| Scaling flexibility | Lower | Higher |
| Margin visibility | At channel level | At call/route level |

If you run a mix of business types — for example, wholesale interconnect alongside retail VoIP — you may operate both models simultaneously on different customer accounts.

---
