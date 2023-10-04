# Far-End Network Address Translation Traversal

**NAT** (Network Address Translation) is the process that associates your private local IP address with an external IP address that routes on the internet.

See [**Network Address Translation**](https://en.wikipedia.org/wiki/Network_address_translation) for a detailed description of NAT.

**Near-end** refers to a UA (User Agent), such as a softphone. **Far-End** refers to the ConnexCS Switch.

## Far End Nat Traversal

Not all networking devices (firewalls, gateways, or other NAT devices) support SIP ALG (Application Layer Gateway).

If your User Agent or NAT doesn't rewrite Session Initiation Protocol (SIP) packets with the correct external IP addresses, you will need it.

The three solutions to this problem are as follows:

1. Client-end configuration (using [**STUN**](https://en.wikipedia.org/wiki/STUN) to replace the private IP with the public IP)
2. NAT device configuration (setup ALG on the device)
3. Carrier configuration (this is Far-End NAT Traversal)

The third option, Carrier configuration, means if, for some reason, our switch doesn't rewrite data for you, we will contact your server’s local IP address.

This is the preferred method because it's easier and more efficient. To apply this kind of fix at the carrier level rather than requiring each individual customer to perform complex configuration changes to their equipment.

## NAT detection methods used by ConnexCS

* Tests if the client has a private IP address--as defined by RFC1918--in the Contact field of the SIP message.
* Tests if the client has contacted ConnexCS from an address different from the one in the Via field.
* Compare the IP and port.
* Tests if the client has a private IP address (as defined by RFC1918) in the top Via field of the SIP message.
* Tests if client has contacted ConnexCS from an address different from the one in the Contact field. This test only compares IP.

See [**AnyEdge Platform**](/anyedge/anyedge/).

For more information on Additional NAT detection capabilities, such as setting rules per domain or source IP address.

!!! note "Why does SIP Systems have Network Traversal Problems?"
    If you ask some information from the website and the system replies to you through the open communication socket. Thus, you receive the information just as you sent. But, in SIP systems this isn't completely the same, because you don't open the socket and wait for the information to come back from that socket because mostly its the UDP.
    For example, there is a packet in the IP level and it goes through NAT, it will automatically handle the re-write of the packet information on layer 3 / 4. If the packet goes and comes back, there is no problem.
    The problem occurs when in the invite packet, the sender should send reply or following replies to the **contact header**. The reply is independent of the protocol used (TCP / IP or UDP), it happens inside the SIP packet. Thus, SIP does a different level of re-writing that's why it requires an Application Level Gateway. This is because on the OSI model, the ALT operates on the Application layer, wheres as NAT operates on layer 3 / 4.
