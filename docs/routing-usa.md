# Table of Contents
- [Table of Contents](#table-of-contents)
- [USA Routing](#usa-routing)
  - [NPA-NXX](#npa-nxx)
    - [Inter / Intra / Indet](#inter--intra--indet)
    - [Identification Examples](#identification-examples)
  - [LRN/LNP](#lrnlnp)
    - [Charges](#charges)

# USA Routing
USA Routing is more complicated than international routing. If you are unfamilier with conventional (international) routing in ConnexCS, please see our page about [Routing](/en/latest/routing/) first.

## NPA-NXX
NPA-NXX refers to the first six(6) digits of USA numbers, excluding the country code. More information can be found here:
https://en.wikipedia.org/wiki/North_American_Numbering_Plan

### Inter / Intra / Indet
Inter/Intra state routing depends on the CLI (or ANI) presented in the call. ConnexCS calls should be normalized by routing rules into E164 format, without any preceeding plus sign (+). This allows for accurate routing calculations within our system.

**Intrastate (Intra)** are calls that belong to the same state. Traditionally identified by the same NPA-NXX, many USA states have multiple area codes, so these are compared for matching state names.

**Interstate (Inter)** are calls that belong to different states.

**Indeterminate (Indet)** is a call placed to a NPA-NXX destination without a matching NPA-NXX Origin--either International, Non-geographic, Unknown or Invalid).

### Identification Examples
| Destination / CLI           | UK (441782)   | New York (1212) | New York (1315) | Chicago (224) | Unknown       | Withheld      |
|-----------------------------|---------------|-----------------|-----------------|---------------|---------------|---------------|
| Destination UK (441782)     | International | International   | International   | International | International | International |
| Destination New York (1212) | Indeterminate | Intrastate      | Intrastate      | Interstate    | Indeterminate | Indeterminate |
| Destination New York (1315) | Indeterminate | Intrastate      | Intrastate      | Interstate    | Indeterminate | Indeterminate |
| Destination Chicago (224)   | Indeterminate | Interstate      | Interstate      | Intrastate    | Indeterminate | Indeterminate |


## LRN/LNP 
[LRN (Location Routing Number)](https://en.wikipedia.org/wiki/Location_Routing_Number) / [LNP (Local Number Portability)](https://en.wikipedia.org/wiki/Local_number_portability) is a method to port USA numbers between providers, where the receiving provider can assign additional charges.  This means **a number that resolves to an LRN can be charged differently that what is listed in the NPA-NXX Rate card.**

The process is as follows:
1. Customer A with CLI (A) places a call to customer B with number (B).
2. ConnexCS establishes if the customer or carrier card is an LRN card. If so, an "LRN DIP" is performed and (C ) is returned. If the number is ported (C ) will be different than (B).
3. The call is passed to the upstream provider in the same format.
4. When the call is billed, if the card is LRN it will be charged as if the call was placed to (C ).

ConnexCS allows you to have customer cards as non-LRN and provider cards as LRN and vice versa, both turned off, or both turned on. This means can mix LRN and non-LRN providers, and the LCR will still be routed correctly.  Dynamic Routing is strongly recommened for LRN.

### Charges
ConnexCS includes LRN Dips for free under fair use. Fair use means traffic does not exploit our billing strategy.  To send this type of traffic, please contact us, as we do not support external LRNs.
