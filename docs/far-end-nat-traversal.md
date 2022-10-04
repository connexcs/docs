# Far-End NAT Traversal
**NAT**, or Network Address Translation, is the process that associates your private local IP address with an external IP address which is routed on the internet. (See [**Network Address Translation**](https://en.wikipedia.org/wiki/Network_address_translation) for a detailed description of NAT.) **Near-end** refers to a UA (User Agent), such as a softphone. **Far-End** refers to the ConnexCS Switch. 

## What's Far End Nat Traversal?
Not all networking devices (firewalls, gateways, or other NAT devices) support SIP ALG (Application Layer Gateway). You will require it if your User Agent or NAT doesn't rewrite Session Initiation Protocol (SIP) packets with the correct external IP addresses. 

The 3 methods to correct this issue are:

1. Client-end configuration (using[ **STUN**](https://en.wikipedia.org/wiki/STUN) to replace the private IP with the public IP)
2. NAT device configuration (setup ALG on the device)
3. Carrier configuration (this is Far-End NAT Traversal)

The third option, Carrier configuration, means if for some reason our switch doesn't re-write data for you, we will contact your server’s local IP address. This is the preferred method because it's typically easier and more efficient to apply this type of fix at the carrier level, rather than requiring each individual customer perform complex configuration changes to their equipment.

## What NAT detection methods does ConnexCS use?

* Tests if client has a private IP address--as defined by RFC1918--in the Contact field of the SIP message.
* Tests if client has contacted ConnexCS from an address that's different from the one in the Via field.
* Compare the IP and port.
* Tests if client has a private IP address (as defined by RFC1918) in the top Via field of the SIP message.
* Tests if client has contacted ConnexCS from an address that's different from the one in the Contact field. Only IP is compared by this test.

For information related to Additional NAT detection capabilities, including set rules per domain or source IP address, see [**AnyEdge Platform**](/anyedge/anyedge/).
