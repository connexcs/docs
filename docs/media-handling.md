# Table of Contents

- [Table of Contents](#table-of-contents)
- [ConnexCS Media Handling](#connexcs-media-handling)
    - [Server Specific optimizations](#server-specific-optimizations)


# ConnexCS Media Handling

When an SIP session is created with the ConnexCS Cloudswitch, the switch decides which zone to route your media through, such as USA East, USA West, or Europe (unless you use ingress routing).

These zones are broad enough to encompass multiple data centers and sub-availability zones within the target zone. A zone may contain teb or more RTP Media Relays, or as few as two, but either way these are made available for all ConnexCS customers.

We use multiple availability zones because it is important to us that media streams never suffer avoidable packet loss or latency. Ideally, media servers run at less than half-capacity, and we we deploy additional servers if this increases.

## Server Specific optimizations

It may seem logical to run media and signaling together, but it's really counter-intuitive. Servers processing billions of media packets put different stresses on a system than processing SIP packets. Isolating these gives us the following benefits:

* Flexibility for the customer to relay media in different zones.

   If your customer and provider are in the UK, but your server is in the US, you don't need to bring the audio back to the USA when we have a local media zone.

* An extra dimension of scaling capabilities.

   Separating the two allows us to scale the CPS and Media throughputs independently, without concern over one aspect affecting another.

* Sharing of Media Servers

   Allowing multiple customers to share media servers reduces hops, if multiple parts of the route go through customers of ConnexCS.
