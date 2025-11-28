# Scaling and Load Balancing

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Architecture → Scaling and Load Balancing<br>
<strong>Audience</strong>: Administrators, Engineers, Network & Infrastructure Teams<br>
<strong>Difficulty</strong>: Intermediate to Advanced<br>
<strong>Time Required</strong>: 15–30 minutes<br>
<strong>Prerequisites</strong>: Understanding of basic VoIP/SIP infrastructure, load-balancing concepts (CPS, channels, zones), and access to the system’s server-deployment settings.<br>
<strong>Related Topics</strong>: 
<a href="https://docs.connexcs.com/setup/settings/servers/">Servers</a> (setting up servers, load-balancer config), 
<a href="https://docs.connexcs.com/anyedge/anyedge/">AnyEdge Load Balancer</a> (global traffic distribution), 
<a href="https://docs.connexcs.com/limiting-cps/">Capacity Limiting</a> (CPS & channel caps)<br>
<strong>Next Steps</strong>: Implement multi-server or multi-zone configuration according to scaling needs, monitor CPS & channel usage, and plan for geographic zones.<br>

</details>

The ConnexCS platform is highly scalable in Channels, CPS (Calls Per Second), and single or several zones.

All configurations are available through a single control panel, no matter how many servers or zones are present.

Our goal is to run all servers at a maximum of 50% capacity, which allows us to handle unforeseen bursts of traffic effectively.

While we benchmark for much higher limits, we recommend no more than 1,000 channels / 100 cps per server. This is always subject to traffic profiles.

## Capacity Failover

If you have several servers in your network, **Capacity Failover** helps remove overload on any single server.

If a server reaches its capacity (CPS or Channels), it responds with a 302 instead of a 500, directing another server in its cluster to handle the call.

Capacity failover isn't the same as load-balancing, though and neither is it mutually exclusive.

It's a mechanic to allow for some overflow from any specific zone without drops.

## What's a zone?

A zone is a geographic region consisting of one or more data-centers. Current zones are: UK, USA East, USA West, Germany, Amsterdam, and Singapore.

## How can I scale in a Single Zone?

The following lists the methods for scaling in a single zone:

**Stage 1**

Single Server.

**Stage 2**

Two (2) Servers: If you need to scale beyond a server in a single zone, the recommended method is primary / secondary.

This two-server setup points all calls to a single server, which then passes calls to a secondary server when it reaches capacity.

**Stage 2 (Alternative)**

If you use the Domain Name System (DNS) to provide connectivity, you can set up round-robin or SRV records with the provider to distribute calls at the DNS level. This allows several servers to act as the primary server on a call-by-call basis.

**Stage 3**

If your capacity requirements exceed the above, you can deploy a load balancer, a server dedicated to spreading calls to other servers uniformly.

The advantage over DNS is that you maintain stricter control of your calls, ensuring they're distributed evenly without using your customers' resources to Support Service Records (SRV).

We've got two options here for you. You can have your own dedicated load balancer, or you can use our [**AnyEdge Platform**](/anyedge/anyedge/).

Even with a load balancer, we recommend using DNS records wherever possible.

With a Load Balancer, you can exceed well beyond 5,000 CPS before any concerns arise.

## How can I scale across Multiple Zones?

This is where you need to look at traffic sources and destinations. Setting up servers close to customers and providers allows for the least amount of latent routes, resulting in a more consistent quality of service.

You can also failover in several zones using the same techniques as for a single zone, but remember that a latency hit occurs when you move between different zones.

## Best practices

Proper DNS setup is always a good idea, as DNS offers a level of redundancy entirely independent of its underlying servers.

If you are using several zones, use a Global Traffic Re-director on your domain.

You can give your customers a single SIP and, based on their IP proximity, redirect them to the nearest zone using DNS.

## FAQ  -  Scaling and Load Balancing

**Does using ConnexCS guarantee a High Availability (HA) solution?**

This depends on the specifics of your setup. If you have a single server, the stability of that server will be as good as we can make it.

A single server can still have faults and data center outages that are beyond our control. If you deploy across several zones, you can achieve high availability.

**How quickly could I deploy Five (5) servers in each zone with load balancers and DNS?**

Presently, we can assist in deploying a top-end, multi-zone, geographically redundant carrier-grade solution in less than 24 hours. This will have high throughput and be tolerant of failures in several zones.

**Can you help me with my DNS requirements?**

Yes. We can guide you on DNS settings, or we can manage the DNS service for you completely.
