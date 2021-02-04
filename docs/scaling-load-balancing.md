# Scaling and Load Balancing

The ConnexCS platform is highly scalable in terms of Channels, CPS, and single or multiple zones.  All configurations are available through a single control panel, no matter how many servers or zones are present.  Our goal is to run all servers at a maximum of 50% capacity, which allows us to handle unforeseen bursts of traffic effectively. While we benchmark for much higher limits,  we recommend no more than 1,000 channels / 100 cps per server. This is always subject to traffic profiles, however.

## Capacity Failover
If you have multiple servers in your network, **Capacity Failover** helps elimiate overload on any single server. If a server reaches capacity (CPS or Channels), it responds with a 302 instead of a 500,  directing another server in its cluster to handle the call.  Capacity failover is not the same as load-balancing, though, nor is it mutually exclusive. It is a mechantic to allow for some overflow from any specific zones without drops.   

## What is a zone?

A zone is a geographical region consisting of one or more datacenters. Current zones are: UK, USA East, USA West, Germany, Amsterdam, and Singapore.

## How can I scale in a Single Zone?
The following lists the methods for scaling in a single zone:

**Stage 1**

Single Server.

**Stage 2**

Two(2) Servers: If you need to scale beyond a server in a single zone, the recommended method is primary / secondary. This two-server setup points all calls to a single server which that passes calls secondary server when capacity is reached.

**Stage 2 (Alternative)**

If you use  DNS to provide connectivity, you can set up round robin or SRV records with the provider to distribute calls at the DNS level. This allows multiple servers to act as the primary server on a call-by-call basis.

**Stage 3**

If your capacity requirements exceed the above, can deploy a load balancer, a server dedicated to spreading calls to other servers equally. The advantage over DNS is that you maintain stricter control of your calls, assuring they are distributed evenly without using your customers' resources to support SRV records. 

We have two options here for you. You can have your dedicated load balancer. Or you can use our [**AnyEdge Platform**](/anyedge/anyedge/)

Even with a load balancer we recommend using DNS records wherever possible.
With a Load Balancer, you can exceed well beyond 5,000 CPS before any concerns arise.

## How can I scale in Multiple Zones?

This is where you need to look at traffic sources and destinations. Setting up servers in proximity to customers and providers allows the least latent routes, ensuring a more consistent quality of service.  You can also failover in multiple zones using the same techniques for a single zone, but remember, a latency hit occurs when you move between different zones.

## Best practices

Proper DNS setup is always a good idea, as DNS offers a level of redundancy completely independent of its underlying servers.

If you are using multiple zones, use a Global Traffic Redirector on your domain.  You can give your customers a single SIP and, based on their IP proximity, redirect them to the nearest zone using DNS. 

## FAQ  -  Scaling and Load Balancing

**Does using ConnexCS guarantee a High Availability (HA) solution?**

This depends on the specifics of your setup. If you have a single server, the stability of that server will be as good as we can make it. However, a single server can still have faults and data center outages that are beyond our control. If you deploy across multiple zones, however, you can achieve high availability.

**How quickly could I deploy Five(5) servers in each zone with load balancers and DNS?**

Currently, we can assist in deploying a top end multi-zone geographically redundant carrier grade solution in less than 24 hours. This will be high throughput and tolerant of failures in multiple zones.

**Can you help me with my DNS requirements?**

Yes. We can advise on DNS settings, or we can manage the DNS service for you completely.
