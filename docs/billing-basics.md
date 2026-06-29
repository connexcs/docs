# Billing Basics

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Billing Basics<br>
<strong>Audience</strong>: Administrators, Engineers, Finance/Accounting Team<br>
<strong>Difficulty</strong>: Intermediate<br>
<strong>Time Required</strong>: 10–20 minutes<br>
<strong>Prerequisites</strong>: Understanding of telecom billing fundamentals (CDRs, call durations, rate slopes), access to usage data and CDRs<br>
<strong>Related Topics</strong>: <a href="https://docs.connexcs.com/guides/billing-guide/">Billing Guide</a> (for broader context), <a href="https://docs.connexcs.com/billing/">ConnexCS Billing</a> (tariff models)<br>
<strong>Next Steps</strong>: Review your current billing increments and rounding strategies; apply the rules when configuring rate-cards or reconciling bills<br>

</details>

## Balance Refresh Interval

The ConnexCS account balance updates every 60 seconds. Do not use the balance or its delta as a billing source — always derive charges from CDR records.

### Breakout Reports

Breakout Reports update in real time and are consistency-checked every 24 hours.

### How to Bill

- Bill from CDR data, not from balance changes.
- Wherever possible, export CDR data at least 24 hours after the final day of the billing period to ensure all records are fully processed.
- Calculate the cost for each individual call separately, then sum the results. Do not multiply total minutes by a rate — this produces incorrect totals. See [Why Minutes × Rate ≠ Invoice Total](#why-minutes-x-cost-per-minute-is-not-the-same-as-what-the-totals-say) below.

---

## Billing Increments

Billing increments define the minimum chargeable duration and the step size used to round each call's duration before pricing is applied.

Increments are expressed as **MCD/Pulse**, where:

- **MCD (Minimum Call Duration)** — the shortest duration that will be billed, regardless of actual call length.
- **Pulse** — the step size by which duration is rounded up after the MCD.

**Example — 60/6 billing:**
A call must be at least 60 seconds. After that, duration rounds up in 6-second steps.

- 10-second call → billed as 60 seconds
- 61-second call → billed as 66 seconds
- 67-second call → billed as 72 seconds

**Increment comparison at $0.015/min:**

| # | Actual Duration (s) | Increment | Billed Duration (s) | Cost ($) | Effective Rate ($/min) |
|---|---|---|---|---|---|
| 1 | 7 | 6/6 | 12 | 0.00300 | 0.02571 |
| 2 | 7 | 12/6 | 12 | 0.00300 | 0.02571 |
| 3 | 7 | 30/6 | 30 | 0.00750 | 0.06429 |
| 4 | 7 | 60/6 | 60 | 0.01500 | 0.12857 |

The same 7-second call can cost anywhere from $0.003 to $0.015 depending on the increment scheme applied.

---

## Duration Rounding, Billing Rounding, and Precision

### Duration Rounding

Duration rounding determines how fractional seconds in a call's raw duration are handled before billing increments are applied.

A call of 1.4 seconds rounds down to 1 second (Full-Down). A call of 1.5 seconds rounds up to 2 seconds (Half-Up). The rounding method used affects every CDR.

| # | Seconds | Full-Down | Full-Up | Half-Up | Half-Down |
|---|---|---|---|---|---|
| 1 | 60.0 | 60 | 60 | 60 | 60 |
| 2 | 60.1 | 60 | 61 | 60 | 60 |
| 3 | 60.4 | 60 | 61 | 60 | 60 |
| 4 | 60.5 | 60 | 61 | 61 | 60 |
| 5 | 60.6 | 60 | 61 | 61 | 61 |

### Billing Rounding and Precision

Precision sets the number of decimal places used when calculating the cost of each call. More decimal places reduces rounding error per call, but the difference compounds significantly across high call volumes — particularly in contact centres where most calls are under 30 seconds.

**Precision impact at $0.015/min on a 9-second call:**

| # | Call Duration (s) | Precision | Cost ($) | Effective Rate ($/min) |
|---|---|---|---|---|
| 1 | 9 | 2 dp | 0.01 | 0.0666 |
| 2 | 9 | 3 dp | 0.002 | 0.0133 |
| 3 | 9 | 4 dp | 0.0018 | 0.012 |
| 4 | 9 | 5 dp | 0.00175 | 0.0116 |

Rounding to 2 decimal places charges nearly six times the effective rate of rounding to 5 decimal places on a short call.

---

## Pulse Billing vs Effective Rate

**Pulse billing** charges a fixed amount for each complete pulse interval. A customer using a 20-second pulse at $0.015 per pulse pays $0.015 whether they talk for 5 seconds or 20 seconds.

**Effective rate** is the actual per-minute cost after billing rounding has been applied. It varies per call depending on the call's actual duration relative to the increment and rounding scheme.

---

## Profitability and Margin

### What Drives Margin

Margin is the difference between what you charge your customer (sell rate) and what your carrier charges you (buy rate). However, because both sides may use different billing increment schemes, the actual margin on any given call can differ significantly from what the raw rate difference implies.

This means **you can lose margin even when your sell rate is higher than your buy rate** if the increment or rounding schemes are unfavourable.

### Buy-Side vs Sell-Side Increment Strategy

The following example illustrates how increment configuration affects margin:

**Scenario:**

- **Buy:** $0.005/min, 60/60 increment (60-second minimum, 60-second pulse), 3 decimal places, Full-Up rounding
- **Sell:** $0.006/min, 1/1 increment (1-second minimum, 1-second pulse), 4 decimal places, Full-Down rounding

For a 7-second call:

- **Buy cost:** 7 seconds rounds up to 60 seconds → $0.005 × (60/60) = **$0.005**
- **Sell revenue:** 7 seconds rounds to 7 seconds → $0.006 × (7/60) = **$0.0007**

The sell rate ($0.006) is higher than the buy rate ($0.005), yet this call generates a **loss of ~$0.0043**.

**Key principle:** On the buy side, aggressive increment schemes (60/60) inflate your costs. On the sell side, granular schemes (1/1) reduce your revenue for short calls. The most margin-protective configuration is:

- **Buy side:** favour small increments (1/1 or 6/6) so you are only charged for actual usage.
- **Sell side:** favour larger minimum durations (30/6 or 60/6) so short calls still generate meaningful revenue.

### Margin Impact of ACD and ASR

**Low ACD (Average Call Duration)** means calls connect but end quickly. Your switch processes the overhead of each call — authentication, routing, media negotiation — for very little billable time. Short calls also interact unfavourably with increment schemes if your sell-side MCD is not set appropriately.

**Low ASR (Answer Seizure Ratio)** means calls are being attempted but not connecting. Your switch bears the routing cost of unanswered calls without generating any revenue. Carriers may also charge for failed call attempts on some routes.

Maintaining healthy ASR and ACD is therefore not just a quality concern — it is a margin concern. Monitor both metrics per customer and per route using the [Reports](https://docs.connexcs.com/report/) and per-customer [Stats](https://docs.connexcs.com/customer/stats/) pages.

### Customer-Level Profitability

ConnexCS profit reports provide revenue, cost, and margin visibility at the customer and route level. These reports draw from the same rated CDR data that produces invoices, ensuring the figures are consistent.

Typical fields in a customer profitability report:

| Customer | Revenue | Cost | Profit | Margin % | Minutes |
|---|---|---|---|---|---|
| Example Co | $21,200 | $14,800 | $6,400 | 30% | 141,000 |

Use the Reports section to filter by period, sort by margin or profit, and export data for finance review. A customer with a margin below your target threshold may need a rate card adjustment, or may indicate a route cost problem on the buy side.

---

## Why "Minutes × Cost Per Minute" ≠ Invoice Total

Multiplying total call minutes by the per-minute rate does not produce an accurate invoice. This is not how industry-standard billing works, and the error grows with call volume.

**Why it fails:** Each call must be rated individually, with its own duration rounding and billing increment applied, before costs are summed. Aggregating minutes first and then applying the rate ignores the per-call rounding that occurs at each step.

**Example:**

- 100 calls, each 9.1 seconds, at $0.005/min, Full-Up duration rounding, 4 decimal places

**Incorrect method:**
100 × 9.1s = 910s = 15.16 min → 15.16 × $0.005 = **$0.0758**

**Correct method:**
Per call: 9.1s → rounded up to 10s → 10/60 × $0.005 = $0.000833 → rounded to 4dp Full-Up = **$0.0009**
100 calls × $0.0009 = **$0.09**

The discrepancy here is $0.0142 across just 100 calls. At high call volumes this difference becomes material.

!!! important
    Always calculate the cost for each call **individually** and then sum. Never aggregate durations before applying the rate.

---

## Balance Mismatch

Some variance between your ConnexCS balance and an external system's balance is expected. Reasons include:

- Buffer balances that some systems automatically reserve to prevent overspend.
- Timing differences in when CDRs are processed and posted.
- Differing rounding or precision configurations between systems.

When investigating a balance mismatch, support your case with CDR statements rather than balance screenshots alone. Balances should always be derivable from your CDR ledger.

---

## Investigating Balance and Billing Issues

Use the following process to isolate the cause of a billing discrepancy:

```
1. Compare daily CDR totals (call count, duration, rated cost) on both sides
   for the disputed period.

2. Does the connected call count roughly match?
   → No: Some calls are missing. Narrow down to a smaller timeframe
         (e.g., a single hour) and run a diff on the two datasets
         to identify missing records.
   → Yes: Proceed to step 3.

3. Do the duration totals roughly match?
   → No: Duration discrepancy. Isolate a single call sample with a large
         difference and compare the raw duration recorded on each side.
   → Yes: Proceed to step 4.

4. Do the rated costs match despite matching durations?
   → No: Rating discrepancy. Check increment scheme, rounding method,
         and precision settings on both sides. A 60/60 vs 6/6 difference
         will produce different costs from identical durations.

5. Report the isolated finding — a specific call ID or time window
   with the difference quantified — for further investigation.
```

!!! tip "When comparing two systems, always align on UTC timestamps first. Timezone mismatches account for a significant share of apparent balance discrepancies."
