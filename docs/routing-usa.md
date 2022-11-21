# USA Routing
**USA Routing** is more complicated than international routing. If you are unfamiliar with conventional (international) routing in ConnexCS, please see our page about [**Routing**](https://docs.connexcs.com/routing/) first.

## NPA-NXX
**NPA-NXX** refers to the first six (6) digits of USA numbers, excluding the country code. An example number, following the NPA-NXX-xxxx format, might be 202-515-1234. For more information, review the Wikipedia article on [**North American Numbering Plan**](https://en.wikipedia.org/wiki/North_American_Numbering_Plan).


### IntER / IntRA / Indet
Inter/Intra state routing depends on the 	Calling Line Identification (CLI) (or Automatic number identification (ANI)) presented in the call. ConnexCS calls should be normalized by routing rules into E164 format, without any preceding plus sign (+). This allows for accurate routing calculations within our system.

* **Interstate (IntER)** - Calls routing from one state to another.
* **Intrastate (IntRA)** - Calls routing within the same state. Originally identified by the same NPA-NXX, many USA states now have multiple area codes, so these are compared for matching state names.
* **Indeterminate (InDET)** - Calls routed to an NPA-NXX destination without a matching NPA-NXX Origin (either International, Non-geographic, Unknown, or Invalid).

### Identification Examples
| Destination / CLI           | UK (441782)   | New York (1212) | New York (1315) | Chicago (224) | Unknown       | Withheld      |
|-----------------------------|---------------|-----------------|-----------------|---------------|---------------|---------------|
| Destination UK (441782)     | International | International   | International   | International | International | International |
| Destination New York (1212) | Indeterminate | Intrastate      | Intrastate      | Interstate    | Indeterminate | Indeterminate |
| Destination New York (1315) | Indeterminate | Intrastate      | Intrastate      | Interstate    | Indeterminate | Indeterminate |
| Destination Chicago (224)   | Indeterminate | Interstate      | Interstate      | Intrastate    | Indeterminate | Indeterminate |


## LRN/LNP 
[**LRN (Location Routing Number**)](https://en.wikipedia.org/wiki/Location_Routing_Number) / [**LNP (Local Number Portability)**](https://en.wikipedia.org/wiki/Local_number_portability) is a method used in the USA to port numbers between providers, where the receiving provider can assign additional charges. This means **a number that resolves to an LRN can be charged differently from what's listed in the NPA-NXX Rate card.**

The process is as follows:

1. Customer A (with CLI A) places a call to Customer B (with Number B).
2. ConnexCS establishes if the customer or carrier card is an LRN card. If so, an "LRN DIP" is performed and Number C is returned. If Number C has been ported from another carrier, the charge to deliver the call to the new carrier may be different than for Number B.
3. The call is passed to the upstream provider in the same format.
4. When the call is billed, if the card is LRN it is charged as if the call was placed to Number C.

ConnexCS allows you to have customer cards as non-LRN and provider cards as LRN and vice versa, both turned off, or both turned on. This means you can mix LRN and non-LRN providers, and the Least Cost Routing (LCR) will still be routed correctly. Dynamic Routing is strongly recommended for LRN.

### Charges
ConnexCS includes LRN Dips for free under fair use. Fair use means traffic doesn't exploit our billing strategy. To send this type of traffic, please contact us, as we don't support external LRNs.
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEzNjYwMDQyMTddfQ==
-->