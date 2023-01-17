# Billing Basics

## Balance Refresh Interval

The ConnexCS balance gets updated every 60 seconds.

### Breakout Reports

Breakout Reports update in Real-time scenario and the consistency checked every 24-hours.

### How to bill

Please make sure you aren't billing the customer based on the balance or associated delta.

Please make use of the CDR data for billing purposes.

You should try to avoid Billing for the current and wherever possible, export data 24 hours following the final day for which you are billing.

### Billing Increments

Billing Increments provide a breakdown of the minimum and incremental time units that get utilized to determine each call's duration.

Billing intervals might be as short as 6 seconds or as long as 60 seconds.

A "60/6" billing denotes a minimum of 60 seconds and following 6-second intervals. This implies, that a call lasting 10 seconds on a 60/6 billing scheme will get billed as 60 seconds; a call lasting 61 seconds on a 60/6 scheme will get billed as 66 seconds; if your call lasts for 67 seconds you will get billed for 72 seconds.

Here "30/6" means, "30" is **Maximum Call Duration (MCD)** and "6" is the **Pulse**. Here, **MCD** is the effective call duration.

For example,

| S.No | Actual Call Duration (seconds) | Billing Increments | Billing Duration (seconds) | Billing Rate ($) | Cost of Call ($) | Net Effective Rate ($) [(Billing Rate / Call Duration) * 60] |
|------|--------------------------------|--------------------|----------------------------|------------------|------------------|--------------------------------------------------------------|
| 1.| 7|6/6|12|0.015|0.00300| 0.02571|
| 2.| 7|12/6|12|0.015|0.00300| 0.02571|
| 3.| 7|30/6|30|0.015|0.00750| 0.06429 |
| 4.| 7|60/6|60|0.015|0.01500| 0.12857 |

### Duration Rounding, Billing Rounding and Precision

1. **Duration Rounding:** This method rounds the call duration up the nearest whole second.
   For example;

   A call with a duration of 1 second 400 milliseconds will get rounded down to the nearest whole second. The call duration will get recorded as 1 second.

   A call with a duration of 1 second 500 milliseconds will get rounded up to the nearest whole second. The call duration will get recorded as 2 seconds.

| S.No | Seconds | Full-Down | Full-Up |
|------|---------|-----------|---------|
| 1.   | 60.0    | 60        | 60      |
| 2.   | 60.1    | 60        | 61      |
| 3.   | 60.4    | 60        | 61      |
| 4.   | 60.5    | 61        | 61      |
| 5.   | 60.9    | 61        | 61      |

| S.No | Seconds | Half-Down | Half-Up |
|------|---------|-----------|---------|
| 1.   | 60.0    | 60        | 60      |
| 2.   | 60.11   | 60        | 61      |
| 3.   | 60.44   | 60        | 61      |
| 4.   | 60.56   | 61        | 61      |
| 5.   | 60.9    | 61        | 61      |

2. **Billing Rounding and Precision**

Carriers use cost rounding with billing increments to alter the price of each call and the net effective rate you get charged. This can have a big effect on the final cost in call centres since the vast majority of calls last under 30 seconds.

Precision means till what decimal places we want to do our billing calculations.

For example,

| S.No | Call Duration (seconds) | Rounded to | Cost of Call ($) | Net Effective Rate ($) [(Charged Amount / Call Duration) * 60] |
|------|-------------------------|-------------------|------------------|----------------------------------------------------------------|
|1.| 9| 2nd decimal place |0.01| 0.0666|
|2.| 9| 3rd decimal place |0.002| 0.0133|
|3.| 9| 4th decimal place |0.0018| 0.012|
|4.| 9| 5th decimal place |0.00175| 0.0116|

### Pulse Billing vs Effective Rate

**Effective Rate** is the amount charged after the billing rounding get processed.

In **Pulse Billing** each pulse represents an incremental cost.

For instance, if one pulse is 20 seconds and the cost of one pulse is fixed at, say, $0.015 consumers will have to pay $0.015 even if they talk on the phone for less than 20 seconds. In other words, callers will have to pay $0.015 even they have talked on the phone for 10 seconds.

#### Profitability

Profitability doesn't always mean that Selling price should be greater than Buying Price.

For example,

**Scenario:** You are buying at Buying at $0.005 with 60/60 (MCD / Pulse) and with 3dp Full-up rounding strategy.

 You are Selling at $0.006  with 1/1 (MCD / Pulse) and with 4dp Full-down rounding strategy.

**1/1** is always preferable to **Buying**.
**60/60** is preferable to **Selling**.

!!! info "Why is low ACD and ASR undesirable?"
    **Low ACD** means that your switch has to do more amount of work while the call doesn't last long.

    For example, you want to do 1000 minutes a day, the most promising way to make it cost-effective is that your switch processes a single call for 1000 minutes. This means your server has to process just one call.
    But if it's the other way round, meaning your server has to process 1000 calls which lasted for a minute, which means your switch has to do a lot of work.

    **Low ASR** means that the calls you dial don't get connected, but your switch is processing these calls and you don't get paid for it.

## Why is "Minutes" X "Cost Per Minute" not the same as what my totals say

Although there are some carriers that bill using this method, it's NOT the industry standard. It's unlikely that you're charged this way. Below is a simple example of why this doesn't work:

```mermaid
   graph TD
    A[Scenario] --> B(Rate: $0.005 USD)
    A[Scenario] --> C(Calls: 100) 
    A[Scenario] --> D(Duration: on all calls 9.1 seconds) 
    A[Scenario] --> E(Per Second Rounding: Full-Up)
    A[Scenario] --> F{Calculation Methods}
    F -->G(Correct)
    G --> I(Step 1: Calculate each callin this scenario, we'll do the same for 100 calls)
    I --> J(Step 2: 9.1/60 * 0.005 = $0.00075833 round till to 4 dp = 0.0008)
    F -->H(Incorrect)
    H --> K(Step 1: 100 calls * 9.1 seconds = 910 seconds = 15.16 minutes)
    K --> L(Step 2: 15.16 * 0.005 Rate = 0.005 = 0.0758 USD)  
    L --> M(Step 3: Repeat this process for each call, all 100 calls are the exact same)  
    M --> N(Step 4: 100 * 0.0008 = $0.08)
```

## Balance Mismatch

It's acceptable to get estimates of spends while comparing the balances on two different systems. Although, some systems also automatically deduct a buffer balance to prevent overspend.

!!! note "Please make sure you support your balance mismatch with some statements, else we will have difficulties supporting this problem."

You should derive Balances from a ledger (your CDR records).

## Investigating Balance / Billing issues

```mermaid
graph TD
BAL[Balance Mismatch] -->|Investigation Process|INV[Compare UTC/Common Daily Totals<br/> on both sides and isolate a day where <br/>the totals have substancial differences] --> QCONN
QCONN{Does the connected calls<br/>totals roughly match?}
QCONN -->| No | MISSINGCALLISSUE
MISSINGCALLISSUE[Some calls are missing,<br/>we need to find them] --> ISOLATEHOUR
ISOLATEHOUR[Try to reduce the CDR's on both sides to a smaller<br/>timeframe where a mismatch can be observed] --> DIFFCALLS
DIFFCALLS[Run a diff on the smaller dataset to isolate missing calls] --> REPORT
QCONN -->| Yes | QDUR[Problem Resolved]
QDUR{Does the durations <br/>totals roughly match?}
QDUR -->| No | DURATIONISSUE
DURATIONISSUE[Duration Issue] --> 1CALL
QDUR -->| Yes | RATINGISSUE[Problem Resolved]
RATINGISSUE[Rating Issue] --> 1CALL
1CALL[Try to isolate a single call,<br/>take a few random samples and<br/>find the one with the biggest difference] --> REPORT
REPORT[Report your finding to us<br/>and we can investigate further]
```
