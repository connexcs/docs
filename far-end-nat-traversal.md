<h2>Far End NAT Traversal</h2>

<h4><b>Pre Text</b></h4>

Near end refers to the UA (User Agent) such as the softphone. Far End refers to the ConnexCS Switch.

NAT is the process that allows you to have an internal and external IP address.

#<h4><b>What is Far end Nat Traversal?</b></h4>

This is required if your UA (User Agent) or your NAT does not rewrite the SIP packets with correct external IP addresses. Thus if our switch does not re-write the data for you, we would end up trying to contact your server’s local IP address.

#<h4><b>What NAT detection methods do you use?</b></h4>

&#x25cf; Tests if client has a private IP address (as defined by RFC1918) in the Contact field of the SIP message.

&#x25cf; Tests if client has contacted ConnexCS from an address that is different from the one in the Via field. 

&#x25cf; Both the IP and port are compared by this test.

&#x25cf; Tests if client has a private IP address (as defined by RFC1918) in the top Via field of the SIP message.

&#x25cf; Tests if client has contacted ConnexCS from an address that is different from the one in the Contact field. Only IP is compared          by this test.
