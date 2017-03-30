# Table of Contents

* [Table of Contents](#table-of-contents)
* [Far End NAT Traversal](#far-end-nat-traversal)
  * [Pre Text](#pre-text)
    * [What is Far end Nat Traversal?](#what-is-far-end-nat-traversal)
    * [What NAT detection methods does ConnexCS use?](#what-nat-detection-methods-does-connexcs-use)

# Far End NAT Traversal

## Pre Text

Near end refers to the UA (User Agent) such as the softphone. Far End refers to the ConnexCS Switch.
NAT is the process that allows you to have an internal and external IP address.

### What is Far End Nat Traversal?

This is required if your UA (User Agent) or your NAT does not rewrite the SIP packets with correct external IP addresses. Thus, if our switch does not re-write the data for you, we would end up trying to contact your server’s local IP address.

### What NAT detection methods does ConnexCS use?

* Tests if client has a private IP address (as defined by RFC1918) in the Contact field of the SIP message.
* Tests if client has contacted ConnexCS from an address that is different from the one in the Via field. 
* Both the IP and port are compared by this test.
* Tests if client has a private IP address (as defined by RFC1918) in the top Via field of the SIP message.
* Tests if client has contacted ConnexCS from an address that is different from the one in the Contact field. Only IP is compared by this test.
