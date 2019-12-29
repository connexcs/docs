# Far End NAT Traversal

Near end refers to a UA (User Agent), such as a softphone. Far End refers to the ConnexCS Switch. NAT is the process that allows you to have an internal and external IP address.

## What is Far End Nat Traversal?

It is required if your User Agent or NAT doesn't rewrite SIP packets with the correct external IP addresses. This means if for some reason our switch doesn't re-write data for you, we will contact your server’s local IP address.

## What NAT detection methods does ConnexCS use?

* Tests if client has a private IP address--as defined by RFC1918--in the Contact field of the SIP message.
* Tests if client has contacted ConnexCS from an address that is different from the one in the Via field.
* Both the IP and port are compared.
* Tests if client has a private IP address (as defined by RFC1918) in the top Via field of the SIP message.
* Tests if client has contacted ConnexCS from an address that is different from the one in the Contact field. Only IP is compared by this test.

If you want more control over NAT detection capabilities, including to set rules per domain or source IP address, take a look at [AnyEdge Platform](/anyedge/anyedge/)
