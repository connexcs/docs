# DNS
**Setup :material-menu-right: Settings :material-menu-right: DNS**

ConnexCS provides a managed **DNS (Domain Name System)** platform geared towards VoIP delivery so low TTL's wont overload your DNS provider. We provide a white-labeled `.sip.direct` domain name which you can use directly or setup as a `CNAME`. 

!!! tip "DNS on Day 1"
    When you setup your first customer or provider interconnect, you should try wherever possible to setup DNS. This means at any point in the future if you deploy a new server, scale up/down, migrate towards or away, there will be little to no disruption to customer service.

## DNS Setup
Setting up **DNS** allows you to load balance multiple SIP servers without a load-balancer.

1. Click :material-plus: button.

    ![alt text][dns]

2. Enter the **Domain** for your company. 
3. The **(TLD) Top Level Domain** `sip.direct` will be used to create the full URL.
3. After saving, the CNAME information will eventually populate IP addresses. 
4. Check the records against the server IP.
5. Select the distribution methods with "A Record' and 'SRV' tiers. 
6. Select **Anycast Mirroring** if desired.
7. Click **`Save`**.

Example:

+ ABC Telco is the company, with domain abctelco.com
+ Set sip.abctelco.com CNAME to point to abctelco.sip.direct, with TTL of 3600 (seconds)
+ When a call comes in for sip.abctelco.com, it will be forwarded to abctelco.sip.direct, and all calls for the next hour will be forwarded to this address without doing the lookup

### Distribution methods

+ **A records**: The `A` record (point a domain such as `abc.com` to `13.224.230.90`) is the most common record in DNS and simply. Select multiple `A` records to set a round-robin DNS query. This is the simplest form of load-balancing.
+ **SRV records**: Unlike `A` records, `SRV` records send (mirror) data for the SIP client. The SIP client can then make an informed decision about which servers to try and in which order. ConnexCS allows 3 tiers of SRV records, though it is rare to use the Tertiary.

### AnyEdge Mirroring
To make best use of DNS records they should be aware of what is happening on servers which they serve, with AnyEdge Mirroring the SRV Tier will match what is set by that AnyEdge setup. This means should there be any failure on the AnyEdge server, the DNS SRV record will correctly update to represent what config you have set on AnyEdge.

## Perfect Redundancy - High Availability
There are many ways to achieve redundancy and mitigate any single-point-of-failure (SPOF). Here is the ConnexCS recommended setup for HA:

1. Have more than 1 server on ConnexCS in different datacentres inside a cluster.
2. Use ConnexCS AnyEdge system.
3. Setup DNS records with a domain such as `sip.mycompany.sip.direct` (TTL = 60 seconds). 
3. Set ConnexCS DNS configuration to:
    * 'A Record' pointing to AnyEdge
    * 'SRV Primary' pointing to AnyEdge
    * 'SRV Secondary' set under AnyEdge Mirroring
    * 'SRV Tertiary' records as all or some of your servers manually set.
4. Setup `sip.yourdomain.com` as a `CNAME` for `sip.mycompany.sip.direct` (TTL = 3600+)
5. If you are deploying in multi-zones or larger deployments, you can segment things further as needed.
6. On each server set 302 redirect to a counter server trying best to avoid any more SPOF, or hotspots.

This gives you the following advantages

* You customer see's your brand on the endpoint.
* You have the last word when it comes to where your traffic goes to, even if you move away from ConnexCS.
* Your DNS provider does not have a high volume of traffic, so performance or dedicated performance is not needed here.
* TTL is 60 seconds on the records here, so they can be changed quickly if needed.
* If your server reaches capacity a 302 redirect will help traffic failover to another one of your servers.
* Non-compatible SIP clients (no support for SRV records) will still be sending to AnyEdge which benefits by not having a SPOF.
* If a server becomes unavailable, AnyEdge will detect this from a local zone and automatically mitigate it.
* If a server becomes unavailable mid-call, AnyEdge will ensure that NAT hole-punching still works effectively for the registration allowing calls to reach back to inside the network.
* If AnyEdge becomes unavailable, DNS SRV records will direct traffic directly to the SIP servers bypassing the AnyEdge failure.
* If there is any localized failure, traffic distribution will still be honoured as it is mirroring AnyEdge config.
* For any AnyEdge config problems (human error) or AnyEdge failure, the last resort Tertiary will still get the call to a server.

## Optional Domain Name per Customer
On larger deployments where you may want more control its possible to setup something such as `yourcustomer.sip.yourcompany.sip.direct` and even a `CNAME` for a vanity address.
While this may be more work, it will allow you to shape your customers traffic distribution, perform A-B testing, etc.

[dns]: /setup/img/dns.png "DNS load-balance"

