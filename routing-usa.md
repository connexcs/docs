# Table of Contents
* [Table of Contents](#table-of-contents)
* [USA Routing](#usa-routing)
  * [NPA-NXX](#npa-nxx)
    * [Inter / Intra / Indet](#inter-intra-indet)
    * [Identification Examples](#identification-examples)
  * [LRN/LNP](#lrn-lnp)
    * [Charges](#charges)

# USA Routing
USA Routing is somewhat more complicated than international. If you are not familier with conventional (international routing) in ConnexCS please read [Routing](/en/latest/routing/) first.

## NPA-NXX
NPA-NXX refers to the first 6 digits of USA numbers excluding the country code, more information can be found here:
https://en.wikipedia.org/wiki/North_American_Numbering_Plan

### Inter / Intra / Indet
Inter/Intra state routing is dependant on the CLI (aka ANI) which is presented in the call. It is highly recommended that calls that pass through ConnexCS are normalised by routing rules into E164 format without any preceeding +. This will allow correct routing to be calculated.

**Intrastate (Intra)** is identified by calls which belong to the same state. Traditionally identified by the same NPA-NXX USA states now may have multiple area codes. These are compared for a matching state name.

**Interstate (Inter)** is identified by calls which belong to different states.

**Indeterminate (Indet)** is identified by a call which is placed to a NPA-NXX destination which does not have a matching NPA-NXX Origin (Either International, Non-geographic such as 1800, Unknown or Invalid).

### Identification Examples
| Destination / CLI           | UK (441782)   | New York (1212) | New York (1315) | Chicago (224) | Unknown       | Withheld      |
|-----------------------------|---------------|-----------------|-----------------|---------------|---------------|---------------|
| Destination UK (441782)     | International | International   | International   | International | International | International |
| Destination New York (1212) | Indeterminate | Intrastate      | Intrastate      | Interstate    | Indeterminate | Indeterminate |
| Destination New York (1315) | Indeterminate | Intrastate      | Intrastate      | Interstate    | Indeterminate | Indeterminate |
| Destination Chicago (224)   | Indeterminate | Interstate      | Interstate      | Intrastate    | Indeterminate | Indeterminate |


## LRN/LNP 
[LRN (Location Routing Number)](https://en.wikipedia.org/wiki/Location_Routing_Number) / [LNP (Local Number Portability)](https://en.wikipedia.org/wiki/Local_number_portability) is a method of allowing USA numbers to be ported between providers whilst allowing the receiving provider to assign their own charge to the number.

A call placed to a number that resolved to a different LRN number _may not_ be charged at the rate it is listed in the NPA-NXX Rate card.

The process is as follows
1. Customer A with CLI (A) places a call to customer B with number (B)
2. ConnexCS establishes if the customer or carrier card is an LRN card. If so, an "LRN DIP" is performed and number (C ) is returned. If the number is ported (C ) will be different than (B).
3. The call is passed to the upstream provider in the same format.
4. When the call is billed if the card is LRN it will charged as if the call was placed to the (C ) number.

ConnexCS allows you to have customer cards as non-LRN & provider cards as LRN, customer as non-LRN & provider as LRN, both non-LRN or both LRN. You can also mix LRN and non-LRN providers together and the LCR will still be routed correctly.

It is important to note, if you are using LRN you should use Dynamic Routing.

### Charges
ConnexCS Provides LRN Dips included for free under fair use. Fair use is defined as traffic does not exploit our billing strategy, e.g Per Minutes billing and sending missed call traffic. If you wish to send this type of traffic please contact us. We don't support "Bring your own LRN".
