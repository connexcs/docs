# ConnexCS Media Handling

## Why do I see different media IP addresses?

When a SIP session is created with your ConnexCS Cloudswitch, the switch decides (or you can choose from ingress routing) a zone to route your media through, e.g USA East, USA West, Europe.

These zones are specifically broad to encompass (if possible) multiple datacenter and sub-availability zones within the target zone. A zone may contain 10 or more RTP Media Relays, or as few as 2, which are available for all ConnexCS customers.

It is important to us that media streams never suffer avoidable packet loss or latency, hence multiple availability zones. We try to keep media servers running at < 50% capacity. If this increases we will deploy additional servers.

## Why do you not run media and signaling together?

## Server Specific optimizations

Although it may seem logical to have both of these running together, it’s actually counter intuitive. Servers processing billions of ephemeral media packets put different stresses on a system than what is required for processing SIP packets. Isolating these gives us the following benefits:

* Flexibility for the customer to relay media in different zones.

   If your customer and your provider are in the UK but your server is in the USA, you should not  have to bring the audio back to the USA when we have a local media zone

* Extra dimension of scaling capabilities.

   Separating the two allows us to scale the CPS and Media throughputs independently.

* Sharing of Media Servers

   Allowing multiple customers to share media servers also adds the advantage of reducing hops if multiple parts of the route use go through customers of ConnexCS.
