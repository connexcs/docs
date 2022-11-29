# AnyEdge

**Setup :material-menu-right: AnyEdge**

ConnexCS **AnyEdge** acts as a load-balancer / dispatcher. It balances the traffic between the SIP servers and the customers.

It's a next-generation solution for the Edge Session Initiation Protocol (SIP).

It provides high-reliability and custom Call Distribution algorithms (Weights and Priorities).

## AnyEdge Setup

### Configure AnyEdge

Click the :material-plus: button to set the following:

+ **User Account Control (UAC) Test (NAT)**: Select the method used to detect whether NAT is in use. See [**Far-End NAT Traversal**](https://docs.connexcs.com/anyedge/anyedge/#far-end-nat-traversal) for details.
+ **Algorithm**: How to distribute calls. See [**Inbound Proxy / Dispatcher / Load Balancer**](https://docs.connexcs.com/anyedge/anyedge/#inbound-proxy-dispatcher-load-balancer) for details.
+ **Calls per Second (CPS)**: Total calls per second allowed. See [**Metrics**](https://docs.connexcs.com/anyedge/anyedge/#metrics) for details.
+ **Insertion**: Set whether the server acts 'Stateless' (no reply needed) or 'Transactional' (waits for a reply).
+ **Validate**: Find the checks to use, if any. For example, a Basic Check will verify if all the fields are properly filled in. If the fields are not verified the packet is rejected. It protects from attacks such as buffer overflow). Select one or more checks to confirm those fields. See SIP Packet Validation for details. Select one or more checks to validate those fields. See [**SIP Packet Validation**](https://docs.connexcs.com/anyedge/anyedge/#sip-packet-validation) for details.
+ **Compress In**: Select method(s) to compress inbound data, not only for lower bandwidth use but also to avoid User Datagram Protocol (UDP) fragmentation. See [**Compaction & Compression**](https://docs.connexcs.com/anyedge/anyedge/#compaction-compression) for details.
+ **Compress Out**: This is useful when using Outbound Proxy. See [**Compaction & Compression**](https://docs.connexcs.com/anyedge/anyedge/#compaction-compression) for details.
+ **Flags**: currently n/a
+ **Primary Attempts**: Set the number of attempts before going to a second zone. It is not useful for less than 3 servers.
+ **Secondary Attempts**: Set the number of attempts before going to a third zone. It is not useful for less than 3 servers.

### AnyEdge Domain

After AnyEdge configuration is complete, click **:material-plus:** next to Domains to configure a specific domain. Complete it with the same settings as Configure AnyEdge. It also provides an extra Transport Layer Security (TLS) configuration for SIP protection.

### AnyEdge Destinations

Click :material-plus: button to specify the Destination IP and one or more Limit (Primary) and Backup (Secondary) Zones.

## Capabilities

The ConnexCS **AnyEdge** load balancer is a high-performance application. It is designed for utmost throughput using multiple cores. Combined with global PoPs and detailed metrics, we’ve got you covered even if you have requirements that exceed 10K calls per second.

### Far End NAT (Network Address Translation) Traversal

NAT (Network Address Translation) is a technique that intermediates communication between a LAN (Local Area Network) and a WAN (Wide Area Network, aka. the Internet).

When a packet traverses NAT, the UDP packet headers are correctly rewritten by your NAT device. But the headers in the SIP packet are often not rewritten. Here are some ways that AnyEdge facilitates these SIP rewrites:

**1.** Hardcode the external IP Address.

**2.** Session Traversal Utilities for NAT (STUN) to find the external IP address.

**3.** SIP (Session Initiation Protocol) and ALG (Application Layer Gateway).

**4.** Far End NAT Traversal.

You can use any of the following indicators to detect if NAT is present in the UAC.

+ Search the Contact header  field for occurrences of RFC1918 / RFC6598 addresses.
+ Use the "received" test: "address in Via" to compare against the source IP address used for signaling.
+ Search the top-most VIA for the occurrences of RFC1918 / RFC6598 addresses.
+ Search the Session Description Protocol(SDP) for the occurrences of RFC1918 / RFC6598 addresses.
+ Test if the source port is different from the "port in Via."
+ Compare the "address in Contact" with the source IP address used for signaling.
+ Compare the "Port in Contact" with the source port used for signaling.

### Inbound Proxy / Dispatcher / Load Balancer

The primary use case for **AnyEdge** is to disseminate calls to a pool of SIP Servers. Configure the servers using the following call strategies:

+ Hash over callid.
+ Hash over from uri.
+ Hash over to uri.
+ Hash over request-uri.
+ Weighted round-robin (next destination) - the destination's weight determines the number of times it is selected before going to the next one.
+ Hash over authorization-username (Proxy-Authorization or "normal" authorization) - A weighted round-robin is employed if a username cannot be found.
+ Random (using *rand()*).
+ The first entry is selected in the set.

### Metrics

The CPS limit of the load balancer needs to be set-up. You can view both the CPS and the totals for the number of calls that failed because of the CPS breach.

Use the following graphs to view the metrics:

1. CPS - Calls Per Second
2. CPS Breach

### SIP (Session Initiation Protocol) Packet Validation

Malformed packets can cause problems for your internal network, such as, buffer overflow attacks. These problems can be stopped at the edge by selecting specific options when enabling SIP Packet Validation:

+ Check the integrity of the SDP body (if it exists).
+ Check the format and integrity of each header body.
+ Don't check the "Max-Forwards" header.
+ Checks the "R-URI" and whether the domain has valid characters.
+ Checks the URI of the "From" field and whether the domain has valid characters.
+ Checks the URI of the "To" field and whether the domain has valid characters.
+ Checks the URI of the "Contact" field.

If a packet fails to validate, you can choose how to handle it. You can handle this with a "400" error or with an "X-Validate-Fail" header. The reasons why a packet fails to validate are:

+ No SIP message.
+ Header Parsing error.
+ No "Call-ID" header
+ No "Content-Length" header for transports that require it (for example, TCP).
+ Invalid Content-Length, different from the size of the actual body.
+ SDP body parsing error.
+ No "Cseq" header.
+ No "From" header.
+ No "To" header.
 No "Via" header.
+ Request URI parse error.
+ Bad hostname in "R-URI."
+ No "Max-Forwards" header.
+ No "Contact" header.
+ Path user for non-Register request.
+ No "Allow" header in the 405 reply.
+ No "Min-Expire" header in the 423 reply.
+ No "Proxy-Authorize" header in the 407 reply.
+ No "Unsupported" header in the 420 reply.
+ No "WWW-Authorize" header in 401 reply.
+ No "Content-Type" header.
+ "To" header parse error.
+ "From" header parse error.
+ Bad hostname in the "To" header.
+ Bad hostname in "From" header.
+ "Contact" header parse error.

### Compaction & Compression

To reduce the size of packets (to prevent fragmentation), you can apply compaction and compression. Compression uses an algorithm such as "gzip" for compressing the message at the level of the data. Compaction uses well-established short notations for longer headers.

#### Compaction

To use compaction, you need to select "Compact Enabled". If you don't want some fields to be compacted, you can allow some of them. Compaction can be enabled for calls in and/or calls out. See the table for available headers.

|Abbreviation|Header|Abbreviation|Header|
|:---:|---|:---:|---|
|a|Accept-Contact|m|Contact|
|b|Referred-By|o|Event|
|c|Content-Type|r|Refer-To|
|d|Request-Disposition|s|Subject|
|e|Content-Encoding|t|To|
|f|From|u|Allow-Events|
|i|Call-ID|v|Via|
|j|Reject-Contact|x|Session-Expires|
|k|Supported|y|Identity|
|l|Content-Length|||

#### Compression

You can enable Compression or Decompression for Inbound and/or Outbound by selecting either "Compress Enabled (Deflate)", "Compress Enabled GZip", or "Decompress Enabled." There are extra flags to control how the data must be compressed.

### Registration Proxy

Having High Availability (HA) with registrations ensures that you will always have an IP address that matches the hole punched when the UAC registers. Unlike other HA setups, **AnyEdge** ensures that standard NAT hole-punching can work with UAC > UAS calls / messages even after the end-point connected to the UAC fails.

### Outbound Proxy

If you have a pool of multiple servers, you can proxy your communications via **AnyEdge**, allowing a single IP address to communicate externally.
