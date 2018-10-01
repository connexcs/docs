# Table of Contents

- [Table of Contents](#table-of-contents)
- [Routing](#routing)

# Routing

Routing in ConnexCS Cloudswitch occurss in the following stages:

![alt text][call-flow]

1. An incoming call is identified as a customer, and is verified by source IP or User/Pass Authentication
* Ingress Routing checks for prefixes, then against available rate cards. There can be multiple ingress routes per customer.
* A Customer Rate Card is built from carriers above it, so the call can be presented to any carrier who is the parent of the customer rate card.
* The Carriers Rate Card links into the specific carrier.
* The selected Carrier can have multiple IP addresses. The call will be sent randomly, but carrier CPS and Channel limits will be obeyed.

A rate card in **_ConnexCS_** is represents a call path. If the rate card is incoming, it identifies the carrier providing that rate card. A customer rate identifies which carrier rate cards are used in its construction.

[call-flow]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/call-flow.jpg "Call-Flow"
