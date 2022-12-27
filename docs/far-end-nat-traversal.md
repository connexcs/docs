# Far-End Network Address Translation Traversal

**NAT** (Network Address Translation) is the process that associates your private local IP address with an external IP address that routes on the internet.

See [**Network Address Translation**](https://en.wikipedia.org/wiki/Network_address_translation) for a detailed description of NAT.

**Near-end** refers to a UA (User Agent), such as a softphone. **Far-End** refers to the ConnexCS Switch.

## What's Far End Nat Traversal?

Not all networking devices (firewalls, gateways, or other NAT devices) support SIP ALG (Application Layer Gateway).

If your User Agent or NAT doesn't rewrite Session Initiation Protocol (SIP) packets with the correct external IP addresses, you will need it.

The three solutions to this problem are as follows:

1. Client-end configuration (using [**STUN**](https://en.wikipedia.org/wiki/STUN) to replace the private IP with the public IP)
2. NAT device configuration (setup ALG on the device)
3. Carrier configuration (this is Far-End NAT Traversal)

The third option, Carrier configuration, means if, for some reason, our switch doesn't rewrite data for you, we will contact your server’s local IP address.

This is the preferred method because it's easier and more efficient. To apply this kind of fix at the carrier level rather than requiring each individual customer to perform complex configuration changes to their equipment.

## What NAT detection methods does ConnexCS use?

* Tests if the client has a private IP address--as defined by RFC1918--in the Contact field of the SIP message.
* Tests if the client has contacted ConnexCS from an address different from the one in the Via field.
* Compare the IP and port.
* Tests if the client has a private IP address (as defined by RFC1918) in the top Via field of the SIP message.
* Tests if client has contacted ConnexCS from an address different from the one in the Contact field. This test only compares IP.

See [**AnyEdge Platform**](/anyedge/anyedge/).

For more information on Additional NAT detection capabilities, such as setting rules per domain or source IP address.
