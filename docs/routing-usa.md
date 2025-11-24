# USA Routing

---

**Document Metadata**
<br>**Category**: Routing / USA Number Routing (NPA-NXX & LRN)</br>
**Audience**: Administrators, Engineers, Network & Ops Team
<br>**Difficulty**: Intermediate to Advanced</br>
**Time Required**: Approximately 1–2 hours
<br>**Prerequisites**: Active ConnexCS account with routing permissions; understanding of North American Numbering Plan (NPA-NXX), Local Number Portability (LNP), and routing logic for interstate/intrastate calls.</br>
**Related Topics**: [Routing Overview](https://docs.connexcs.com/routing/), [Rate Card Building](https://docs.connexcs.com/rate-card-building/)
<br>**Next Steps**: Segregate USA calls by NPA-NXX prefix, enable LRN/LNP settings if required, configure appropriate interstate/intrastate routing and pricing, then test routing using live traffic and DIP logic.</br>

---

**USA Routing** is more complicated than international routing. If you are unfamiliar with conventional (international) routing in ConnexCS, please see our page about [**Routing**](https://docs.connexcs.com/routing/) first.

## NPA-NXX

**NPA-NXX** refers to the first six (6) digits of USA numbers, excluding the country code.

An example number, following the NPA-NXX-xxxx format, might be 202-515-1234. For more information, review the Wikipedia article on the [**North American Numbering Plan**](https://en.wikipedia.org/wiki/North_American_Numbering_Plan).

### IntER / IntRA / Indet

Inter / Intra state routing depends on the Calling Line Identification (CLI) (or Automatic number identification (ANI)) presented in the call.

You can perform Normalization of ConnexCS calls by routing rules into E164 format, without any preceding plus sign (+). This allows for accurate routing calculations within our system.

* **Interstate (IntER)**: Calls routing from one state to another.
* **Intrastate (IntRA)**: Originally identified by the same NPA-NXX, it's now required to match with state names now as several USA states have multiple area codes.
* **Indeterminate (InDET)**: Calls routed to an NPA-NXX destination without a matching NPA-NXX Origin (either International, Non-geographic, Unknown, or Invalid).

### Identification Examples

| Destination / CLI           | UK (441782)   | New York (1212) | New York (1315) | Chicago (224) | Unknown       | Withheld      |
|-----------------------------|---------------|-----------------|-----------------|---------------|---------------|---------------|
| **Destination UK (441782)**     | International | International   | International   | International | International | International |
| **Destination New York (1212**) | Indeterminate | Intrastate      | Intrastate      | Interstate    | Indeterminate | Indeterminate |
| **Destination New York (1315)** | Indeterminate | Intrastate      | Intrastate      | Interstate    | Indeterminate | Indeterminate |
| **Destination Chicago (224)**   | Indeterminate | Interstate      | Interstate      | Intrastate    | Indeterminate | Indeterminate |

## Local Routing Number / Local Number Portability

[**LRN (Location Routing Number**)](https://en.wikipedia.org/wiki/Location_Routing_Number) / [**LNP (Local Number Portability)**](https://en.wikipedia.org/wiki/Local_number_portability) is a method used in the USA to port numbers between providers, where the receiving provider can assign extra charges. This means **it's possible to charge a number differently than what's specified on the NPA-NXX Rate card if it resolves to an LRN.**

The steps are as follows:

1. Customer A (with CLI A) places a call to Customer B (with Number B).
2. ConnexCS establishes if the customer or carrier card is an LRN card. If so, it performs an "LRN DIP" and returns Number C. If the service ports Number C from another carrier, the charge to deliver the call to the new carrier may be different than for Number B.
3. The call passes to the upstream provider in the same format.
4. LRN card will perform billing for the call. It's charged as if it placed the call to Number C.

ConnexCS allows you to have customer cards as non-LRN and provider cards as LRN and vice versa, both turned off or both turned on.

This means you can mix LRN and non-LRN providers, and it will still correctly route the Least Cost Routing (LCR).

 Dynamic Routing is strongly recommended for LRN.

### Charges

ConnexCS includes LRN Dips free of charge under fair use. Fair use means traffic doesn't exploit our billing strategy. To send this kind of traffic, please contact us, as we don't support external LRNs.
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEzNjYwMDQyMTddfQ==
-->