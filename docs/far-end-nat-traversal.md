# Far-End NAT Traversal
**Near-end** refers to a UA (User Agent), such as a softphone. **Far-End** refers to the ConnexCS Switch. **NAT**, or Network Address Translation, is the process that associates your private local IP address with an external IP address which can be routed on the internet. (See [**Network Address Translation**](https://en.wikipedia.org/wiki/Network_address_translation) for a detailed description of NAT.)

## What is Far End Nat Traversal?
Not all networking devices (firewalls, gateways, or other NAT devices) support SIP ALG (Application Layer Gateway). It is required if your User Agent or NAT doesn't rewrite SIP packets with the correct external IP addresses. 

There are 3 methods to correct this issue:

1. Client-end configuration ([using **STUN** to replace the private IP with the public IP](https://en.wikipedia.org/wiki/STUN)
2. NAT device configuration (setup ALG on the device)
3. Carrier configuration (this is Far-End NAT Traversal)

This means if for some reason our switch doesn't re-write data for you, we will contact your server’s local IP address. This is the preferred method because it is typically easier and more efficient to apply this type of fix at the carrier level, rather than requiring each individual customer perform complex configuration changes to their equipment. 

## What NAT detection methods does ConnexCS use?

* Tests if client has a private IP address--as defined by RFC1918--in the Contact field of the SIP message.
* Tests if client has contacted ConnexCS from an address that is different from the one in the Via field.
* Compare the IP and port.
* Tests if client has a private IP address (as defined by RFC1918) in the top Via field of the SIP message.
* Tests if client has contacted ConnexCS from an address that is different from the one in the Contact field. Only IP is compared by this test.

Additional NAT detection capabilities, including to set rules per domain or source IP address, are documented at [**AnyEdge Platform**](/anyedge/anyedge/).
