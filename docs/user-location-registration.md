# Table of Contents

- [Table of Contents](#table-of-contents)
- [User Location Registration](#user-location-registration)
  - [NAT Keep ALives](#nat-keep-alives)
  - [Single Server](#single-server)
  - [Server Array](#server-array)
  - [Server Cluster](#server-cluster)
  
  
# User Location Registration

A call sent to a server is actually an ```INVITE``` sent to a remote server. However, if users connect from dynamic IP addresses, there must be a a way to map a known constant address, e.g a username, to a dynamic endpoint such as an IP address or port.

This is accomplished by the User Agent Client (UAC), or a soft phone / hard phone, connecting to the ConnexCS server with a ```REGISTER``` sending their current location and their username, along with additional information. The information is then stored, and made available as a lookup. When someone calls a user, it routes the call to their IP address.

## NAT Keep Alives
If a user is registered via UDP via NAT, a port mapping is created. However, the NAT will time out, and this connection is not kept alive by traffic. The Connex Cloud Switch will perodically send keep-alive messages to the registered UAC. This can either be UDP or full SIP ```OPTIONS``` messages. Both are acceptable, though the SIP ```OPTIONS``` ping will reply back to the ConnexCS Server. From this ping, we can monitor the latency of the connection, and also discern if the the NAT has destroyed the rule or if the user has gone offline without notifying the system. Once a user is registered via UDP, the connection is verified once again.

# Single Server

No additional configuration is needed for a single server.

# Server Array

For multiple servers, decide whether or notusers registered to _Server A_ can call users on _Server B_. If so, set the *UAC Location Array Sharing* Option in the servers to which you wish to expose the registrations, which in this example is _Server B_.

*Note:* Due to design constraints that occur with multiple servers in an array, NAT Keep Alive Pings can be quite intensive. You could use *Disable UAC Ping* from the server page, upgrade to a cluster, or use a single registration server to solve this. More intricate measures can be arranged on a case-by-case basis.

# Server Cluster

Joined servers in a cluster share all user location registrations. This is the best solution to scale into the many 1000's of registrations. Be advised: you will not be able to route calls to users registered against any servers outside the cluster. 
