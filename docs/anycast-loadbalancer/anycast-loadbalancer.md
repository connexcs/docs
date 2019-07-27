# Getting Started

The ConnexCS Anycast Loadbalancer the next next generation solution for Edge SIP.

## Technical Specification

 - CPS & CPS Breach Metrics
 - Customisable Far End NAT Traversal
 - Registration Proxy
 - Outbound Proxy
 - Custom Call Distribution Algorithm, (Weights and Priorities)

<!---

### Far End NAT Traversal

NAT (Network Address Translation) is a a technique which intermediates communication between a LAN (Local Area Network) and a WAN (Wide Area Network aka. Internet).

When a packet traverses a NAT, the UDP packet headers are correctly re-written by your NAT device. However the headers in the SIP packet are often not rewritten. There are 3+ ways in which this can be done.

1. Hardcode the external IP Address.
2. STUN to find the external IP address.
3. SIP ALG
4. Far End NAT Traversal

We can use any of the following indicators to detect if NAT is present in the UAC.

 - Contact header field is searched for occurrence of RFC1918 / RFC6598 addresses.
 - The "received" test is used: address in Via is compared against source IP address of signaling
 - Top Most VIA is searched for occurrence of RFC1918 / RFC6598 addresses
 - SDP is searched for occurrence of RFC1918 / RFC6598 addresses
 - Test if the source port is different from the port in Via
 - Address in Contact is compared against source IP address of signaling
 - Port in Contact is compared against source port of signaling

### Metrics

At present we have 2 graphs available in our system
1. CPS - Calls Per Second.
2. CPS Breach.

The Loadbalancer will have a CPS limit set. You can view both CPS and totals on the amounts of calls which have failed because the CPS was breached.

### Inbound Proxy / Dispatcher / Load Balancer

The primary use case is for the Anycast Loadbalancer to diseminate calls to a pool of SIP Servers. These can be configures by the following call strategies:

 - Hash over callid
 - Hash over from uri.
 - Hash over to uri.
 - Hash over request-uri.
 - Weighted round-robin (next destination). the destination's weight determines how many times it is chosen before going to the next one
 - Hash over authorization-username (Proxy-Authorization or "normal" authorization). If no username is found, weighted round-robin is used.
 - Random (using rand()).
 - The first entry in set is chosen.

### Outbound Proxy

If you have a pool of multiple servers, you may wish to proxy your communications via the Anycast Load Balancer. This means that you will have a single IP address responsible for communicating with externally.

### Registration Proxy

Having high availability with registrations mean that you will always have an IP address which is matches the hole punched when the UAC registers. Unlike other high availability, anycast is the only way to ensure that standard NAT hole-punching can work with UAC > UAS calls/messages after the failure of the end point that the UAC connects to.

--->


<!---
 * Written by Jonathan Hulme
 * Last Updated by Jonathan Hulme on Friday 26th July, 2019
 * Approved by Cate Wheatley - Pending on
 * Approved by Ashok - Pending
--->