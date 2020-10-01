# AnyEdge
The ConnexCS **AnyEdge** is an anycast load balancer, and the next generation solution for Edge SIP. 

## Technical Specification

 - CPS & CPS Breach Metrics
 - Customisable Far End NAT Traversal
 - Registration Proxy
 - Outbound Proxy
 - Custom Call Distribution Algorithm, (Weights and Priorities)

### Capabilities
The ConnexCS **AnyEdge** load balancer is a high-performance application designed for maximum throughput using multiple cores. Combined with our global PoPs and detailed metrics, we have you covered even if you have requirements that exceed 10K calls per second.

### Far End NAT Traversal
NAT (Network Address Translation) is a technique which intermediates communication between a LAN (Local Area Network) and a WAN (Wide Area Network aka. Internet).

When a packet traverses a NAT, the UDP packet headers are correctly re-written by your NAT device. However the headers in the SIP packet are often not rewritten. Here are some ways that AnyEdge facilitates these SIP rewrites:

1. Hardcode the external IP Address
2. STUN to find the external IP address
3. SIP ALG
4. Far End NAT Traversal

We can use any of the following indicators to detect if NAT is present in the UAC.

 - Search the Contact header field for the occurrences of RFC1918 / RFC6598 addresses
 - Use the "received" test: "address in Via" is compared against the source IP address used for signaling
 - Search the top most VIA for the occurrences of RFC1918 / RFC6598 addresses
 - Search the SDP for the occurrences of RFC1918 / RFC6598 addresses
 - Test if the source port is different from the "port in Via"
 - Compare the "address in Contact" against the source IP address used for signaling
 - Compare the "Port in Contact" against the source port used for signaling

### Metrics

You can use the following graphs to view the metrics:

1. CPS - Calls Per Second
2. CPS Breach

The load balancer's CPS limit must be set. You can view both the CPS and the totals on the amounts of calls which have failed because the CPS was breached.

### Inbound Proxy / Dispatcher / Load Balancer

The primary use case for **AnyEdge** is to disseminate calls to a pool of SIP Servers. These can be configured by the following call strategies:

 - Hash over callid
 - Hash over from uri
 - Hash over to uri
 - Hash over request-uri
 - Weighted round-robin (next destination) - the destination's weight determines how many times it is chosen before going to the next one
 - Hash over authorization-username (Proxy-Authorization or "normal" authorization) - If a username is not found, weighted round-robin is used.
 - Random (using rand())
 - The first entry in set is chosen

### Outbound Proxy

If you have a pool of multiple servers, you can proxy your communications via **AnyEdge**, allowing for a single IP address to communicate externally.

### Registration Proxy

Having high availability with registrations ensures that you will always have an IP address which matches the hole punched, when the UAC registers. Unlike other high availability setups, **AnyEdge** ensures that standard NAT hole-punching can work with UAC > UAS calls/messages after the end point that the UAC connects to, fails.

### SIP Packet Validation

Malformed packets can cause all sorts of problems for your internal network, such as, buffer overflow attacks. These problems can be stopped at the edge by selecting specific options when enabling SIP Packet Validation:

 - Check the integrity of the SDP body (if it exists)
 - Check the format and the integrity of each header body
 - Don't check the "Max-Forwards" header
 - Checks the "R-URI" and whether the domain contains valid characters
 - Checks the URI of the "From" field and whether the domain contains valid characters
 - Checks the URI of the "To" field and whether the domain contains valid characters
 - Checks the URI of the "Contact" field

If a packet fails to validate, you can choose how this must be handled. You can handle this with a "400" error or with an "X-Validate-Fail" header. The reasons why a packet fails to validate are:

 - No SIP message
 - Header Parsing error
 - No "Call-ID" header
 - No "Content-Length" header for transports that require it (for example, TCP )
 - Invalid Content-Length, different from the size of the actual body
 - SDP body parsing error
 - No "Cseq" header
 - No "From" header
 - No "To" header
 - No "Via" header
 - Request URI parse error
 - Bad hostname in "R-URI"
 - No "Max-Forwards" header
 - No "Contact" header
 - Path user for non-Register request
 - No "Allow" header in the 405 reply
 - No "Min-Expire" header in the 423 reply
 - No "Proxy-Authorize" header in the 407 reply
 - No "Unsupported" header in the 420 reply
 - No "WWW-Authorize" header in 401 reply
 - No "Content-Type" header
 - "To" header parse error
 - "From" header parse error
 - Bad hostname in the "To" header
 - Bad hostname in "From" header
 - "Contact" header parse error


### Compaction & Compression
To reduce the size of packets (to prevent fragmentation), you can apply compaction and compression. Compression uses an algorithm such as "gzip" and compressing the message at the level of the data. Compaction uses well-established short notations for longer headers.


#### Compaction

To use compaction, you need to select "Compact Enabled". You can also whitelist a number of fields if you do not want them to be compacted. Compaction can be enabled for calls in and/or calls out.

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

Compression or Decompression can be enabled for Inbound and/or Outbound by selecting either "Compress Enabled (Deflate)", "Compress Enabled GZip" or "Decompress Enabled". There are additional flags to control how data must be compressed.

<!---
 * Written by Jonathan Hulme
 * Last Updated by Jonathan Hulme on Friday 26th July, 2019
 * Approved by Cate Wheatley - Pending on
 * Approved by Ashok - Pending
--->
