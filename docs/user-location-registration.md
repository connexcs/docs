# Table of Contents

- [Table of Contents](#table-of-contents)
- [What is User Location Registration](#what-is-user-location-registration)
  - [How to add CLI?](#how-to-add-cli)
  - [Block CLI's](#block-clis)
  
  
# User Location Registration

When a call is being sent to a server is is a simple case of sending an ```INVITE``` to the remote server. However if you have users connecting from dynamic IP addresses you will need a way to map a known constant address (e.g a username) to a dynamic endpoint (IP address, port, etc).

This is accomplished by the UAC (User Agent Client) (soft phone / hard phone) connecting to the ConnexCS server with a ```REGISTER``` sending amoungst other things their current location and their username. We will then store that information and make it available as a lookup. So when someone calls user1, it will route the call to their IP address.

## NAT Keep Alives
If a user is registered via UDP via NAT a port mapping is created, however the NAT will timeout this connection is not kept alive by traffic. The Connex Cloud Switch will perodically send keep-alive messages to the registered UAC. This can either be UDP or full SIP ```OPTIONS``` messages. Both will work, however SIP ```OPTIONS``` Ping will reply back to the ConnexCS Server. From this ping we can do 2 things. 1 Monitor the latency of the connection. 2. Know if the NAT has destroyed the rule or the user has gone offline without telling us so.

Once a user is registered (via UDP) we need to ensure that the connection is made

# Single Server

If you have a single server, there is nothing extra that is needed to be configured.

# Server Array

If you have multiple servers you need to make the decision if you will require users who are registered against _Server A_ to be able to call users on _Server B_. If so you will need to explicitly set the *UAC Location Array Sharing* Option in the servers which you wish to expose the registrations of (in this example _Server B_).

*Note:* Due to design constraints having multiple servers in an array, NAT Keep Alive Pings can be quite intensive. You could *Disable UAC Ping* from the server page, upgrade to a cluster, or only have a single registration server to solve this. We would be happy to discuss the options with you in more detail to make the best architectural decision on your network.

# Server Cluster

If you join servers together in a cluster they share all user location registrations, this is the best solution to scale into the many 1000's of registrations.

*Limitation:* You will not be able to route calls to any users registered against any servers outside the cluster. Contact us if this is a problem for you.
