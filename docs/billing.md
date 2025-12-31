# Billing

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Setup → Billing<br>
<strong>Audience</strong>: Administrators, Engineers, Finance Team<br>
<strong>Difficulty</strong>: Intermediate<br>
<strong>Time Required</strong>: 10–20 minutes<br>
<strong>Prerequisites</strong>:<br>
<ul>
<li>A working understanding of your account’s billing model (per-minute vs. per-channel)</li>
<li>Access to your usage data or CDRs to understand how charges are incurred</li>
</ul>
<strong>Related Topics</strong>: Billing Basics (detailed billing increments, rounding), Billing Guide (overall billing models), Rate Card Overview (since rate cards tie into billing)<br>
<strong>Next Steps</strong>: Review which billing model your plan uses (per-minute or per-channel), verify your minimum charges and ensure alignment with your traffic patterns.<br>

</details>

## ConnexCS Billing Per Channel

Billing per-channel is the traditional approach, where the consumer pays for a set number of channels or ports. It's like the VoIP equivalent of per-line billing in mobile networks.

### Advantages of Billing Per Channel

+ Cheaper than per-minute billing in systems with consistent traffic and high usage.
+ Free servers are available for several tiers of service.
+ Predictable costs allow for more stable billing cycles and simplified cost-benefit analysis.

### Disadvantages of Billing Per Channel

+ Inconsistent traffic often leads to higher costs.
+ Capacity planning is inherently less flexible.

## ConnexCS Billing per minute

In per-minute billing, the number of seconds you use gets tallied daily. Its combined with the per-minute cost, and then subtracted from your account.

### Advantages of ConnexCS Billing per minute

1. Channels come with peripheral considerations that make it more challenging to scale a billing unit. But per-minute rates are exact enough to scale with the system.

### Disadvantages of ConnexCS Billing per minute

1. Expensive with consistent traffic.
2. Multiple servers are more expensive.

## Minimum Charges

All accounts must spend a minimum cost per-server to remain active. Check [Pricing](https://connexcs.com/pricing) here. This helps to prevent incurring losses from stagnant accounts.
