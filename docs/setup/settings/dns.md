# DNS
Setup :material-menu-right: Settings :material-menu-right: DNS

ConnexCS provides a managed DNS platform geared towards VoIP delivery so low TTL's wont overload your DNS provider.
We provide a white-labeled `.sip.direct` domain name which you can use directly or setup as a `CNAME`

!!! tip "DNS on Day 1"
	When you setup your first customer or provider interconnect, you should try wherever possible to setup DNS. This means at any point in the future
	if you deploy a new server, scale up/down, migrate towards or away you are interupting your customer as little as possible.

Setting up **DNS (Domain Name System)** allows you to load balance multiple SIP servers without a load balancer server.

1. Click **`+`** under **Server**.

    ![alt text][dns]

2. Enter the **Domain** name. 
3. **(TLD) Top Level Domain** is set to sip.direct.
4. Check the records against the server IP
5. Setup **Anycast Mirroring** if desired
7. Click **`Save`**.

## A records

An `A` record is the most common record in DNS and simply points a domain such as `abc.com` to `13.224.230.90`.

When selecting multiple `A` records they are offered to the client performing the query in a round-robin fashion. This is the simplest form of load balancing.

## SRV records

Unlike `A` records `SRV` records send all the possible options including weights and tiers to the SIP client. The SIP client can then make an informed decision about
how which servers to try and in which order. ConnexCS keeps things simple, does not offer weight's and allows 3 tiers.

## AnyEdge Mirroring

To make best use of DNS records they should be aware of what is happening on servers which they serve, with AnyEdge Mirroring the SRV Tier will match
what is set by that AnyEdge setup. This means should there be any failure on the AnyEdge server, the DNS SRV record will correctly update to represent
what config you have set on AnyEdge.

## Perfect Redundancy - High Availability

There are many ways to achieve redundancy and mittigate any single-point-of-failure (SPOF). We our recipe is as follows.

1. Have more than 1 server on ConnexCS in different datacentres inside a cluster.
2. Use ConnexCS AnyEdge system.
3. Setup DNS records with a domain such as `sip.mycompany.sip.direct` (This will have a TTL of 60 seconds). Setup with
	* A record pointing to AnyEdge
	* Use SRV Primary pointing to AnyEdge
	* Use SRV Secondary AnyEdge Mirroring
	* Use Tertiary SRV records as all or some of your servers manually set.
4. Setup `sip.yourdomain.com` as a `CNAME` for `sip.mycompany.sip.direct`, TTL 3600+
5. If you are deploying in multi-zones or larger deployments you can segment things further as per your requirements.
6. On each server set 302 redirect to a counter server trying best to avoid any more spof, or hotspots.

This gives you the following advantages
* You customer see's your brand on the endpoint
* You have the last word when it comes to where your traffic goes to, even if you move away from ConnexCS
* Your DNS provider does not have a high volume of traffic, so performance or dedicated performance is not needed here.
* TTL is 60 seconds on the records here, so they can be changed quickly if needed.
* If your server reaches capacity a 302 redirect will help traffic failover to another one of your servers.
* Non-compatible SIP clients (which dont support SRV records) will still be sending to AnyEdge which benefits by not having a SPOF.
* If a server becomes unavailable AnyEdge will detect this from a local zone and automatically mittigate it.
* If a server becomes unavailable mid-call AnyEdge will ensure that NAT hole-punching still works effectively for the registration allowing calls to reach back to inside the network.
* If AnyEdge becomes unavailable DNS SRV records will direct traffic directly to the SIP servers bypassing the AnyEdge failure.
* If there is any localized failure Traffic distribution should still be honoured as its mirroring anyedge config.
* If there is any AnyEdge config problems (human error) as well as an AnyEdge failure, the last resort Tertiary will still get the call to a server.

## Optionally Domain Name per Customer

On larger deployments where you may want more control its possible to setup something such as `yourcustomer.sip.yourcompany.sip.direct` and even a `CNAME` for a vanity address.
This of course is much more work, however it will allow you to shape your customers traffic distribution, perform A-B testing, etc.

[dns]: /misc/img/dns.png "DNS load-balance"

