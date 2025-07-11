# AnyEdge

**Setup :material-menu-right: AnyEdge**

ConnexCS **AnyEdge** acts as a load-balancer / dispatcher. It balances the traffic between the SIP servers and the customers.

It's a next-generation solution for the Edge Session Initiation Protocol (SIP).

It provides high-reliability and custom Call Distribution algorithms (Weights and Priorities).

!!! Info "Global Redundancy"
    Global redundancy in AnyEdge ensures high availability by distributing traffic across multiple edge servers located in different geographical regions.
    This minimizes downtime and provides seamless service continuity even during outages or failures in any single location.

Each customer benefits from a unique, dedicated IP address through AnyEdge

Calls are routed to the nearest AnyEdge server for optimal performance and reduced latency.

!!! Info "AnyEdge Features"
    1. We provide 10,000+ CPS to all customers for optimal scalability and performance.
    2. All our customers benefit from 100Gbps DDoS protection.

## AnyEdge Setup

### Configure AnyEdge

Click the :material-plus: button to set the following:

* **User Account Control (UAC) Test (NAT)**: Select the method used to detect whether NAT is in use.

    See [**Far-End NAT Traversal**](https://docs.connexcs.com/anyedge/anyedge/#far-end-nat-traversal) for details.

* **Algorithm**: How to distribute calls.

    See [**Inbound Proxy / Dispatcher / Load Balancer**](https://docs.connexcs.com/anyedge/anyedge/#inbound-proxy-dispatcher-load-balancer) for details.
* **Cyber-Physical System(CPS)**: Total calls per second allowed.

    See [**Metrics**](https://docs.connexcs.com/anyedge/anyedge/#metrics) for details

* **Insertion**: Set whether the server acts 'Stateless' (no reply needed) or 'Transactional' (waits for a reply).
  
* **Validate**: Find the checks to use, if any.

    **For example**, a Basic Check will verify if all the fields are appropriately formed, or else it will reject the package (protecting from attacks such as buffer overflow). Select one or more checks to validate those fields.

    Select one or more checks to validate those fields.

    See [**SIP Packet Validation**](https://docs.connexcs.com/anyedge/anyedge/#sip-packet-validation) for details.

* **Compress In**: Select method(s) to compress inbound data, not only for lower bandwidth use but also to avoid User Datagram Protocol (UDP) fragmentation.

    See [**Compaction and Compression**](https://docs.connexcs.com/anyedge/anyedge/#compaction-and-compression) for details.

* **Compress Out**: Helps when using Outbound Proxy.

    See [**Compaction and Compression**](https://docs.connexcs.com/anyedge/anyedge/#compaction-and-compression) for details.

* **Flags**: You may choose from 2 types of flags:
    * **Registrations to AnyReg**: The AnyReg registration server will hold the AnyEdge registrations for all your customers.
    * **AnyEdge SIP Ping Replies**: [**Click here**](https://docs.connexcs.com/anyedge/anyedge/#anyedge-sip-ping-replies) to know more.
  
* **Primary Attempts**: (not useful for less than 3 servers) Set the number of attempts before going to a second zone.
  
* **Secondary Attempts**: (not useful for less than 3 servers) Set the number of attempts before going to a third zone.

<img src= "/anyedge/anyedge12.png" style="border: 2px solid #4472C4; border-radius: 8px;">

!!! Note "Increase AnyEdge Ports"
    1. Login to your account.
    2. Navigate to **Setup :material-menu-right: AnyEdge :material-menu-right: blue `+` icon :material-menu-right: modify CPS limit**.

    <img src= "/anyedge/any45.png">

### AnyEdge Domain

After AnyEdge configuration is complete, click **:material-plus:** next to **Domains** to configure a specific domain with the same settings as Configure AnyEdge.

It can provide added **Transport Layer Security (TLS)/ Secure Sockets Layer (SSL)** configuration for SIP protection.

1. You can choose various versions of SSL and TLS certificates from the drop-down menu.
2. If you enable the **Verify Certificate** option, then it will verify the client's certificate.
3. If you enable the **Require Certificate** option, it means the client should have the certificate.

<img src= "/anyedge/anyedge13.png" style="border: 2px solid #4472C4; border-radius: 8px;">

!!! Info "Custom TLS Ciphers & Curves"
     ConnexCS AnyEdge supports custom TLS ciphers, cryptographic algorithms and elliptic curves, allowing administrators to precisely configure security protocols and ensure compatibility with specific client or server requirements.

### AnyEdge Destinations

Click :material-plus: button to specify the Destination IP, and one or more Limit (Primary) and Backup (Secondary) Zones.

* **Destination**: Enter the Customer's server's IP address.
* **Weight**: You can allocate the weight to the server that permits the highest traffic or call volume through that server. This means the server with the highest weight will handle more traffic or calls compared to other servers.

!!! Note
    You can now set weight up to 50 now for server under Anyedge.

* **Limit Zones**:  Limit Zones control access to specific servers within a load balancer. By defining limit zones, you restrict access to certain servers from designated zones. For example, if Sydney isn't added to the limit zone configuration, individuals from Sydney will be unable to access this designated server within the load balancer.
* **Backup Zones**: Whenever the server of the main zone fails, the traffic will route to the zone selected in the Backup Zones field.

<img src= "/anyedge/anyed1.png" style="border: 2px solid #4472C4; border-radius: 8px;">

## Capabilities

The ConnexCS **AnyEdge** load balancer is a high-performance application designed for maximum throughput using several cores.

Combined with global PoPs and detailed metrics, we’ve got you covered even if you have requirements that exceed 10K calls per second.

### Far End NAT Traversal

NAT (Network Address Translation) is a technique that intermediates communication between a LAN (Local Area Network) and a WAN (Wide Area Network aka. Internet).

When a packet traverses NAT, the UDP packet headers are appropriately rewritten by your NAT device; thus, the headers in the SIP packet are often not rewritten.

Here are some ways that AnyEdge facilitates these SIP rewrites:

1. Hardcode the external IP Address.
2. Session Traversal Utilities for NAT (STUN) to find the external IP address.
3. SIP (Session Initiation Protocol) ALG (Application Layer Gateway).
4. Far End NAT Traversal.

You can use any of the following indicators to detect if NAT is present in the UAC.

* Search the Contact header  field for occurrences of RFC1918 / RFC6598 addresses.
* Use the "received" test: "address in Via" to compare against the source IP address used for signaling.
* Search the top-most VIA for the occurrences of RFC1918 / RFC6598 addresses.
* Search the Session Description Protocol (SDP) for the occurrences of RFC1918 / RFC6598 addresses.
* Test if the source port is different from the "port in Via."
* Compare the "address in Contact" with the source IP address used for signaling.
* Compare the "Port in Contact" with the source port used for signaling.

### Inbound Proxy / Dispatcher / Load Balancer

The primary use case for **AnyEdge** is to disseminate calls to a pool of SIP Servers. You can configure the following call strategies as follows:

* Hash over callid
* Hash over from uri
* Hash over to uri
* Hash over request-uri
* Weighted round-robin (next destination) - the destination's weight determines the number of times it's selected before going to the next on
* Hash over authorization-username (Proxy-Authorization or "normal" authorization) - If a username isn't found, use weighted round-robin.
* Random (using *rand()*)
* It selects the first entry in the set.

### Metrics

You must set the load balancer's CPS limit. You can view both the CPS and the totals for the number of calls that failed because of the CPS breach.

The CPS limit of the load balancer needs setting up. You can view both the CPS and the totals for the number of calls that failed because of the CPS breach.

Use the following graphs to view the metrics:

1. CPS - Calls Per Second
2. CPS Breach

### SIP Packet Validation

Malformed packets can cause problems for your internal network, such as, buffer overflow attacks.

To avoid these problems, you can select some specific options while enabling SIP Packet Validation:

* Check the integrity of the SDP body (if it exists).
* Check the format and the integrity of each header body.
* Don't check the "Max-Forwards" header.
* Checks the "R-URI" and whether the domain has valid characters.
* Checks the URI of the "From" field and whether the domain has valid characters.
* Checks the URI of the "To" field and whether the domain has valid characters.
* Checks the URI of the "Contact" field.

If a packet fails to validate, you can select a method to handle it. You can handle this with a "400" error or with an "X-Validate-Fail" header.

The reasons why a packet fails to validate are:

* No SIP message
* Header Parsing error
* No "Call-ID" header
* No "Content-Length" header for transports that require it (for example, TCP)
* Invalid Content-Length, different from the size of the actual body
* SDP body parsing error
* No "Cseq" header
* No "From" header
* No "To" header
* No "Via" header
* Request URI parse error
* Bad hostname in "R-URI"
* No "Max-Forwards" header
* No "Contact" header
* Path user for non-Register request
* No "Allow" header in the 405 reply
* No "Min-Expire" header in the 423 reply
* No "Proxy-Authorize" header in the 407 reply
* No "Unsupported" header in the 420 reply
* No "WWW-Authorize" header in the 401 reply
* No "Content-Type" header
* "To" header parse error
* "From" header parse error
* Bad hostname in the "To" header
* Bad hostname in "From" header
* "Contact" header parse error

### Compaction and Compression

To reduce the size of packets (to prevent fragmentation), you can apply compaction and compression.

Compression uses an algorithm such as "gzip" and compressing the message at the level of the data.

Compaction uses well-established short notations for longer headers.

#### Compaction

To use compaction, you need to select **Compact Enabled.**

You can also create an allow list of fields if you don't want to compact them.

You can enable Compaction for calls in and/or calls out.

See the table for available headers.

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

You can enable Compression or Decompression for Inbound and/or Outbound by selecting either "Compress Enabled (Deflate)," "Compress Enabled GZip," or "Decompress Enabled."

The process of data compression depends on how auxiliary flags control it.

### Registration Proxy

Having High Availability (HA) with registrations ensures that you will always have an IP address which matches the hole punched when the UAC registers.

Unlike other HA setups, **AnyEdge** ensures that standard NAT hole-punching can work with UAC > UAS calls / messages even after the end-point connected to the UAC fails.

### Outbound Proxy

If you have a pool of several servers, you can proxy your communications via **AnyEdge**, allowing a single IP address to communicate externally.

## AnyEdge SIP Ping Replies

The UAS is pinging the AnyEdge Loadbalancer and further, the Loadbalancer passes the pings to the Opensips Servers. Further, the Opensips Servers reply to the Laodbalancer, and then the ping gets to the UAS. In case, any of the SIP servers are slow, it slows down the AnyEdge Loadbalancer as well. Thus, introducing Latency in the system.

<img src= "/anyedge/any3.jpg" style="border: 2px solid #4472C4; border-radius: 8px;">

Therefore, the AnyEdge SIP Ping Replies feature will help fix this issue. This feature will allow the AnyEdge Loadbalancer to reply to the UAS ping messages without passing them to the Opensips Server. This feature will fix the latency issue, and the application latency will be closer match to what we expect.

This feature adds another capability where the AnyEdge Laodbalancer is aware of the latency of the Opensips (backend) servers. The AnyEdge Loadbalancer measures the latency on backend servers by checking that the servers are online. This can be done by adding the **Timestamps**.

According to RFC 3261, there is a proper header Timestamp available. We include this Timestamp header with the message we're going to send. When we get a reply, it comes along with the Timestamp as well. The Timestamp of the message and reply should be identical, which measures the latency or calculates the difference.

### How to Enable AnyEdge SIP Ping Replies

1. Go to Setup :material-menu-right: AnyEdge and click on the `Edit` button. <img src= "/anyedge/any1.jpg" style="border: 2px solid #4472C4; border-radius: 8px;">
2. You will a window, select the **AnyEdge SIP Ping Replies** from the dropdown in **Flags** to enable this feature. <img src= "/anyedge/any2.jpg" style="border: 2px solid #4472C4; border-radius: 8px;">
3. Click on `Save`.
