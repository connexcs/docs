# Getting Started

The ConnexCS Anycast Loadbalancer the next next generation solution for Edge SIP.

## Technical Specification

 - CPS & CPS Breach Metrics
 - Customisable Far End NAT Traversal
 - Registration Proxy
 - Outbound Proxy
 - Custom Call Distribution Algorithm, (Weights and Priorities)

### Capabilities
The ConnexCS Anycast Loadbalancer is a high performance application designed for maximum throughput using multiple cores, this combined with our global pop's and detailed metrics mean that even if you have requirements that exceed 10K calls per second we have you covered.

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

### SIP Packet Validation

Malformed packets can cause all sorts of problems for your internal network such as buffer overflow attacks, its a good idea to stop these at the edge. We have a number of selectable options when enabeling SIP Packet Validation:

 - Check the integrity of the SDP body (if it exists).
 - Check the format and integrity of each header body.
 - Don't check the Max-Forwards header.
 - Checks the R-URI and whether the domain contains valid characters.
 - Checks the URI of the 'From' field and whether the domain contains valid characters.
 - Checks the URI of the 'To' field and whether the domain contains valid characters.
 - Checks the URI of the 'Contact' field.

If a packet fails validation, you can choose how this is to be handeled, either with a `400` error or an `X-Validate-Fail` header. The fail reasons are as follows

 - No SIP message
 - Header Parsing error
 - No Call-ID header
 - No Content-Length header for transports that require it ( eg. TCP )
 - Invalid Content-Length, other from the size of the actual body
 - SDP body parsing error.
 - No Cseq header.
 - No From header.
 - No To header.
 - No Via header.
 - Request URI parse error.
 - Bad hostname in R-URI.
 - No Max-Forwards header.
 - No Contact header.
 - Path user for non-Register request.
 - No allow header in 405 reply.
 - No Min-Expire header in 423 reply.
 - No Proxy-Authorize header in 407 reply.
 - No Unsupported header in 420 reply.
 - No WWW-Authorize header in 401 reply.
 - No Content-Type header
 - To header parse error
 - From header parse error
 - Bad hostname in To header
 - Bad hostname in From header
 - Contact header parse error


### Compaction & Compression
To in an effort to reduce the size of packets (to prevent fragmentation), you can apply compaction and compression. Compression is using an algorithim such as gzip and compressing the message on the data level. Compaction uses well established short notations for longer headers


#### Compaction

To use compaction you need to select "Compact Enabled". You can also whitelist a number of fields should you not wish for them to be compacted. Compaction can be enabled for calls in and/or calls out.

The following short headers are available

 - y - Identity
 - x - Session-Expires
 - v - Via
 - u - Allow-Events
 - t - To
 - s - Subject
 - r - Refer-To
 - o - Event
 - m - Contact
 - l - Content-Length
 - k - Supported
 - j - Reject-Contact
 - i - Call-ID
 - f - From
 - e - Content-Encoding
 - d - Request-Disposition
 - c - Content-Type
 - b - Referred-By
 - a - Accept-Contact

#### Compression

Compression or Decompression can be enabled for Inbound and/or Outbound by selecting either "Compress Enabled (Deflate)", "Compress Enabled GZip" or "Decompress Enabled". There are further flags which control how the compression takes place.

<!---
 * Written by Jonathan Hulme
 * Last Updated by Jonathan Hulme on Friday 26th July, 2019
 * Approved by Cate Wheatley - Pending on
 * Approved by Ashok - Pending
--->