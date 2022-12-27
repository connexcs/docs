# Domain Name System

**Setup :material-menu-right: Settings :material-menu-right: DNS**

ConnexCS provides a managed **DNS (Domain Name System)** platform geared towards VoIP delivery, so low TTL's (Time to live) won't overload your DNS provider.

We provide a white-labeled `.sip.direct` domain name which you can use directly or setup as a `CNAME`.

!!! tip "DNS on Day 1"
    When you set up your first customer or provider interconnect, you should try to set up DNS wherever possible.

    This means at any point in the future, if you deploy a new server, scale up / down, migrate toward or away, there will be little to no disruption to customer service.

## Domain Name System Setup

Set up **DNS** to load balance multiple Session Initiation Protocol (SIP) servers without a load-balancer.

1. Click :material-plus:.

    ![alt text][dns]

2. Enter the **Domain** for your company.
3. Use The **(TLD) Top Level Domain** `sip.direct` to create the full URL.
4. After saving, the CNAME information will thus populate IP addresses.
5. Check the records against the server's IP.
6. Select the distribution methods with the "A Record' and 'SRV' tiers.
7. If necessary, select **Anycast Mirroring**.
8. Click **`Save`**.

For example:

+ ABC Telco is a company with the domain abctelco.com.
+ Set sip.abctelco.com CNAME to point to abctelco.sip.direct, with a TTL of 3600 (seconds).
+ When a call comes in for sip.abctelco.com, it's forwarded to abctelco.sip.direct, and all calls for the next hour are forwarded to this address without doing the lookup.

### Distribution methods

+ **A records**: The `A` record (pointing a domain such as `abc.com` to `13.224.230.90`) is the most common record in DNS.

    Select several `A` records to setup a round-robin DNS query. This is the simplest form of load-balancing.
+ **SRV records**: Unlike `A` records, `SRV` records send (mirror) data for the SIP client.

    The SIP client can then make an informed decision about which the servers to try and in what order.
    ConnexCS allows 3 tiers of Service records (SRV), though it's rare to use the Tertiary.

### AnyEdge Mirroring

To make the best use of DNS records, they should be aware of what's happening on the servers they serve.

With AnyEdge Mirroring, the SRV Tier will match what's set by that AnyEdge setup. This means if there is any failure on the AnyEdge server, the DNS SRV record will update to represent what config you have set on AnyEdge.

## Perfect Redundancy - High Availability

You can achieve redundancy in several ways and mitigate any single point of failure (SPOF).

Here is the ConnexCS recommended setup for HA:

1. Have more than one ConnexCS server in different datacenters within a cluster.
2. Use the ConnexCS AnyEdge system.
3. Setup DNS records with a domain such as `sip.mycompany.sip.direct` (TTL = 60 seconds).
4. Set the ConnexCS DNS configuration to:
   + 'A Record' pointing to AnyEdge
   + 'SRV Primary' pointing to AnyEdge
   + 'SRV Secondary' set under AnyEdge Mirroring
   + Depending on whether your servers are manually configured, `SRV Tertiary` will record all or some of them.

5. Setup `sip.yourdomain.com` as a `CNAME` for `sip.mycompany.sip.direct` (TTL = 3600+)
6. If you are deploying in multi-zones or larger in deployments, you can segment things further as needed.
7. On each server, set 302 redirects to a counter server, trying to avoid any more SPOFs or hotspots.

This gives you the following advantages:

+ Your customer sees your brand on the endpoint.
+ You have the last word when it comes to where your traffic goes, even if you move away from ConnexCS.
+ Your DNS provider doesn't have a high volume of traffic, so performance or dedicated performance isn't needed here.
+ TTL is 60 seconds on the records here, so you can change them instantly if needed.
+ If your server reaches capacity, a 302, the redirect will help traffic failover to your other server.
+ AnyEdge will still receive non-compliant SIP clients despite the absence of a Single Point Of Failure (SPOF).
+ If a server becomes unavailable, AnyEdge will detect this from a local zone and automatically mitigate it.
+ If a server becomes unavailable mid-call, AnyEdge will ensure that NAT hole-punching still works effectively for the registration, allowing calls to reach back to the network.
+ If AnyEdge becomes unavailable, DNS SRV records will direct traffic directly to the SIP servers, bypassing the AnyEdge failure.
+ If there is any localised failure, traffic distribution is still honoured as it's mirroring the AnyEdge configuration.
+ For any AnyEdge config problems (human error) or AnyEdge failure, the last resort is Tertiary, which will still get the call to a server.

## Optional Domain Name per Customer

It's possible to set up something like your customer on larger deployments where you may want more `control.sip.yourcompany.sip.direct` and even a `CNAME` for a vanity address.

While this may be more work, it will allow you to shape your customers traffic distribution, perform A-B testing, etc.

[dns]: /setup/img/dns.png "DNS load-balance"
