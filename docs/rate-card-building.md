# Rate Card Overview

**Rate Cards** are an important ConnexCS feature as this is how most information is organized. Rate Cards define both how customer calls are routed and also how those calls will be billed. When a dialed number comes in, it hits a customer card first. The Customer Card is assoicated with one or more Provider Cards, each of which will have different means for routing the calls and billing the call. We can also say that Customer Cards are built from Provider Cards. 

!!! tip "Rate Card Terminology"
    Several terms in ConnexCS can be used interchangeably when talking about Rate Cards:

    + Provider = Carrier
    + Provider Rate Card = Parent Card 
    + Customer Rate Card = Child Rate Card

There are four sections for Rate Cards in the ConnexCS Control Panel:

+ **Provider Cards** govern routing and rates based on the carrier. Details found under [**Provider Rate Cards**](https://docs.connexcs.com/provider-ratecard/). 
+ **Customer Cards** are typically derived from Provider Cards, and allow for additional customer management. Details found under [**Customer Rate Cards**](https://docs.connexcs.com/customer-ratecard/). 
+ **Routing** gives an overview of the routing for customers, and links to configure customers. 
+ **Global Search** provides a way to search for routes and rates based on the Provider and Direction. 

&emsp;![alt text][rc-global]

## Code and Billing Accuracy
It is always sound practice to base Rate Cards on the information in Provider cards. Code accuracy is perhaps one of the most important of these benefits. In any system with card-based profiles, code accuracy is one of the means to ensure the accuracy of the whole system, and to make all passed or collected data more reliable.

## Rate Card Compilation Engine
ConnexCS features a comprehensive rate card building engine which can import multiple rate carrier rate cards (Parent Rate cards) in either NPA-NXX or single-cost (column) and output NPA-NXX or single-cost. These can take the minimum, maximum, or average values.

### Different Length Prefixes
The ConnexCS rate card engine handles arbitrary length prefixes and understands the strict rules required to merge them.

!!! note "Why do I have so many long prefixes?"
    To ensure accuracy, it may be necessary to **normalize** rate cards when combining them. The process makes may add prefixes to make all cards comparable. (These changes are safe, however, and are included to increase granularity; they won't introduce errors.) After compilation, additional scripts are run to make the rate card smaller; however, the primary goal of the engine is accuracy.

### Combining
#### Between Cards
If you have multiple carrier cards and you want to compile them into a single card, pay attention to the **Rate Compact** variable. It will form the strategy we use to output a cost per destination. For instance, use Min if you are dealing with cost sensitive routing, or Max if you are looking at quality driven prices.

!!! note "What happens when Min route fails?"
    If you use Min as default, calls will be routed to the cheapest provider first, but if that provider does not take the call, it will failover to a more expensive provider.  Keep in mind that this provider may be higher than your profit margins. You can enable Profit Assurance to help alleviate this, but be prepared, Profit Assurance cannot protect against different billing pulses or connection fees.

#### Different Card Types
If you wish to transform an NPA-NXX price into a single cost-per-code, you will need to collapse your rate card. This takes similar settings to **Rate Compact**, however this rule is used when picking out a single cost per prefix per provider. It is joined with other providers AFTER this process has taken place.


### Why should I Use Rate Card Building?
#### Example 1

You may want to provide UK landlines to your customers, and decide to add `441` in your rate deck. Your carrier may charge more to deliver calls to Gurnsey, so they would have a higher cost for `441481`.  Building your own rate cards might make discrepancies like this less apparent.

One possible consequence is that your carrier will charge you more in these instances. Profit Assurance can protect you against this in some cases, but not if your carrier bills on 60/60 and you are selling at 1/1, or if your carrier has connection fees. Also, customers might expect to connect calls to prefixes that aren't included if you rely purely on profit assurance.

#### Example 2

If you sell NPA-NXX, but you also have a few flat rates (and cherry picking is allowed) with just one prefix, you can combine multiple cards to generate the most competitive pricing. Then, you can place the margins at 20% once a carrier issues you a new rate card, click regenerate, and the system will deal with all 200,000 prefixes on each and generate new pricing.

#### Example 3
Take the following cards, each with a different Rate Compact. 


| Prefix  |     Destination     |  Cost |
|----------|:-------------:|------:|
| **Provider Rate Card A**|   |  |
| 441 |    UK Landline |  0.01 |
| 442 | UK Landline |    0.01 |
| **Provider Rate Card A** |  |     |
| 441 | UK Landline |  0.0075 |
| 442 | UK Landline |   0.0075 |
| **Provider Rate Card A** |  |  |
| 441 |  UK Landline |  0.02|
| 442 |  UK Landline |    0.02 |


After merging the 3 providers, we would have the following 3 cards output:

| Prefix  |     Destination     |  Merged Cost |
|----------|:-------------:|------:|
| **Merged Cost (min)**|   |  |
| 441 |    UK Landline |  0.0075 |
| 442 | UK Landline |   0.0075 |
| **Merged Cost (max)**|   |  |
| 441 |    UK Landline |  0.02 |
| 442 | UK Landline |   0.02 |
| **Merged Cost (avg)**|   |  |
| 441 |    UK Landline |  0.0125 |
| 442 | UK Landline |   0.0125 |


[rc-global]: /img/rc-global.png "Rate Card Global"
