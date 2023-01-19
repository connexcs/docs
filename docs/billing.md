# Billing

A ConnexCS subscription comes with two main tariffs used for billing: **per minute** and **per channel**.

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

All accounts must spend a minimum of $20 per-month / per-server to remain active. This helps to prevent incurring losses from stagnant accounts.

## Capacity Planning

Capacity planning is a way to extend our services in an advisory capacity.

It helps our customers choose the setup that works best for their business.

Shifting usage and the growing demands for scalability are always a consideration. But there is also the active management of changing traffic.

### Some Basic Capacity Planning Questions

**CAPACITY REQUIREMENTS**

1. How many channels are needed?

2. How many CPS are needed?

3. What is the ACD?

4. What is the ASR?

5. What percentage of this traffic is already running on your infrastructure?

6. Do all these calls require Media Proxy, if so please specify volumes?

7. Do you need Transcoding or Call Recording, if so please specify volumes?

**TOPOGRAPHICAL REQUIREMENTS**

1. Please list all your customers IP Addresses along with locations if known:

2. If the aforementioned traffic is not equally distributed between all IP addresses, please provide a break down.

3. Please list all carriers IP addresses where this traffic is most likely going to be sent to, along with locations if known.

4. If the aforementioned traffic is not equally distributed between all IP addresses, please provide a break down.

See [**Capacity Limiting**](/limiting-cps/) for tips on limiting usage.

## Migration Strategy

If a customer wants 1000 CPS, we need to know how are they going to pull up such a large volume in one go. It's advisable not to send large traffic volumes in one go to achieve success.
