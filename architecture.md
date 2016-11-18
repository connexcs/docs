# Table of Contents

* [Table of Contents](#table-of-contents)
* [Architecture](#architecture)
  * [API](#api)
     * [Switch Administration](#switch-administration)
     * [Customer Administration](#customer-administration)
     * [Lookup Services](#lookup-services)
  * [Security](#security)
    * [SSL Cerficiates](#ssl-certificates)
    * [Inter-zone Communication](#inter-zone-communication)
    * [Logins](#logins)
      * [Passwords](#passwords)
      * [2FA / TFA](#2fa-tfa)
      * [Server Keys](#server-keys)
    * [Exceptions](#exceptions)
      * [IMCP Pings](#imcp-pings)
      * [SIP / RTP Firewall Block on Default](#sip-rtp-firewall-block-on-default)
      * [IDS / IPS](#ids-ips)
    * [Data Usage](#data-usage)
  * [ConnexCS Media Handling](#connexcs-media-handling)
     * [Server Specific optimizations](#server-specific-optimizations)
  * [Scaling and Load Balancing](#scaling-and-load-balancing)
    * [What is a zone?](#what-is-a-zone)
    * [How can I scale in a Single Zone?](#how-can-i-scale-in-a-single-zone)
      * [Stage 1](#stage-1)
      * [Stage 2 (Alternative)](#stage-2-alternative)
      * [Stage 3](#stage-3)
    * [How can I scale in Multiple Zones?](#how-can-i-scale-in-multiple-zones)
    * [Best practices](#best-practices)
    * [Does using ConnexCS guarantee a HA (High Availability) solution?](#does-using-connexcs-guarantee-a-ha-high-availability-solution)
    * [How quickly could I deploy 5 servers in each zone with load balancers and DNS?](#how-quickly-could-i-deploy-5-servers-in-each-zone-with-load-balancers-and-dns)
    * [Can you help me with my DNS requirements?](#can-you-help-me-with-my-dns-requirements)

# Architecture

## API
ConnexCS has 3 distinct API's each accessible through a different URL but all follow the same specification.

The API is _Restful JSON_ and accessible over HTTPS. It makes distinction around `GET`, `SET`, `PUT` and `DELETE` and follows CRUD. Requests primarly take advantage of request variables however _JSON Documents_ may occasionally be posted where a more complex request is required. A _JSON Document_ will always be returned. Errors are provides on the HTTPS Layer.

### Switch Administration
The switch API provide **full administrative capabilies**, by this we mean "every function that you can accomplish through our web interface is available through our API".

You can find the API Spec here: <https://docs.connexcs.com>

### Customer Administration
If your customers wish to be able to talk to your switch and get information such as current balance or CDR's this is the API you need.
You can find the API Spec here: <https://portal.connexcs.com/docs>


### Lookup Services
ConnexCS Lookup services are hosted seperate from the switch as this is a seperate product and is built to tollerate high requests/second..

You can find the API Spec here: <https://api2.connexcs.com/docs>


## Security

Security is a topic that we take very seriously and we have utilized many best practices, reliable proven technology and latest ideas to keep everything safe.

We have compiled a top-level abstract list on how we do some things. This document is *purposely* kept brief in order to limit the exposure of our underlying systems, but please feel free to contact us if you have any specific questions about anything here.

### SSL Certificates
For all our HTTPS traffic we use short-lived SHA256bit certificates with 2048bit keys. Reject downgrade attacks such as SSL2,3. We use HSTS, Perfect Forward Secrecy, and OCSP Stapling. You are welcome to see our servers SSL test results here:
https://www.ssllabs.com/ssltest/analyze.html?d=app.connexcs.com

### Inter-zone Communication
All internal traffic travelling between zones traverses our mesh VPN protected by 4096 bit keys and managed by our internal CA Servers.

### Logins
Our system uses an exponentially increasing delay on failed attempts and centralised reporting.

#### Passwords
All passwords are hashed in our system. The ones required for HTTP login are encrypted by Argon2, the winner of the Password Hashing Competition (PHC) https://github.com/P-H-C/phc-winner-argon2

On every hash we use:
- Random Per Password Salt (With email hashed seasoning)
- Off-database site-pepper
- High Time, Memory Cost, Parallelism Cost

#### 2FA / TFA
All admins are required to use Two-factor authentication when signing in to the system. Two Factor Authentication is also avaialble for any user accounts using  RFC 6238 (https://tools.ietf.org/html/rfc6238) style TOTP (Time Based One-time Passwords) using applications such as Google Authenticator or Microsoft Authenticator.

#### Server Keys
Anyone who has direct access to any servers is required to use SSH Keys. All systems where keys are not possible, long multi-symbol passwords are used.

### Exceptions
We **DON'T** consider the following items insecure. We completely understand the consequences of enabling these systems but we believe that their benefits outweigh the security implications.

This does **NOT** mean that we don't monitor activity on either of these, nor does it mean that we don't have automatic reactive systems in place to help ensure uptime in the event of attacks.

#### IMCP Pings
IMCP (Internet Message Control Protocol) Ping messages (e.g ping www.connexcs.com). There once was a time when IMCP Ping attacks were common, this was related to the packet size vs available bandwidth. Although IMCP Ping attacks may still happen, it is far more useful to enable IMCP replies to correctly establish the status of a server.

#### SIP / RTP Firewall Block on Default.
Our SIP Servers only run SIP, nothing else. Our RTP Servers run RTP Nothing else.

This means that you **WILL** see unauthorized traffic hitting your switch, however you will note that the call was blocked because of authentication reasons. This is normal as it is important to see failed traffic as it may be misconfiguration authentication.

5060 is not firewalled, nor are any of our RTP Ports on our RTP Servers.

### IDS / IPS
We have application level logic that identifies malicious activity which will escalate issues upwards through to our IDS systems which will in return feedback firewall rules.

## Data Usage
Connex Carrier Services Worldwide LTD is an independent company, not owned by a parent company or affiliates. All data is retained in ConnexCS on ConnexCS servers and is never passed to any 3rd parties. All staff have to abide by company non-disclosure policies and it is clear that any data breach would be treated with the utmost severity.


## ConnexCS Media Handling

* **Why do I see different media IP addresses?**

When a SIP session is created with your ConnexCS Cloudswitch, the switch decides (or you can choose from ingress routing) a zone to route your media through, e.g USA East, USA West, Europe.

These zones are specifically broad to encompass (if possible) multiple datacenter and sub-availability zones within the target zone. A zone may contain 10 or more RTP Media Relays, or as few as 2, which are available for all ConnexCS customers.

It is important to us that media streams never suffer avoidable packet loss or latency, hence multiple availability zones. We try to keep media servers running at < 50% capacity. If this increases we will deploy additional servers.

* **Why do you not run media and signaling together?**

### Server Specific optimizations

Although it may seem logical to have both of these running together, it’s actually counter intuitive. Servers processing billions of ephemeral media packets put different stresses on a system than what is required for processing SIP packets. Isolating these gives us the following benefits:

* Flexibility for the customer to relay media in different zones.

   If your customer and your provider are in the UK but your server is in the USA, you should not  have to bring the audio back to the USA when we have a local media zone

* Extra dimension of scaling capabilities.

   Separating the two allows us to scale the CPS and Media throughputs independently.

* Sharing of Media Servers

   Allowing multiple customers to share media servers also adds the advantage of reducing hops if multiple parts of the route use go through customers of ConnexCS.

## Scaling and Load Balancing

The ConnexCS platform is highly scalable in terms of Channels, CPS and in single / multiple zones.

We aim to run all servers at a maximum of 50% their capacity. This enables us to accept unforecast bursts comfortably.

Although we benchmark much higher we recommend no more than 1000 channels / 100cps per server. However, this is always subject to traffic profiles.

One extra amazing feature of ConnexCS is that no matter how many servers you have or how many zones you have, all your configuration is available through a single control panel and data does not change if you add / remove servers, it's still just as easy to use.

### What is a zone?

A zone is a geographical region consisting of 1 or more datacenters, current zones are (UK, USA East, USA West, Germany, Amsterdam, Singapore).

#### How can I scale in a Single Zone?

##### Stage 1

Single Server.

##### Stage 2

2 Servers: If you wish to scale beyond a server in a single zone the first  recommended method is primary / secondary. This 2 server setup points all calls to a single server which when capacity is reached (on a call by call basis) calls are     passed over to the secondary server.

##### Stage 2 (Alternative)

If you are using DNS to provide connectivity to your customers, you can setup round robin or, even better, SRV records with your DNS provider to distribute calls on the DNS level. This allows multiple servers to act as the primary server on a call by call basis.

##### Stage 3

If your capacity requirement exceeds beyond this you can have a load balancer deployed. This is a single server which has the sole purpose of disseminating calls to other servers equally. The advantage here over the DNS load balancing option is: you remain in stricter control of your calls, they will be distributed evenly and you don’t require your customers hardware/software to support SRV records. With a Load Balancer you can have as many servers behind it as you want, and as the load balancer does minimal work, you can exceed well beyond 5,000 cps before you have to worry about anything.

### How can I scale in Multiple Zones?

This is where you need to take a look at your traffic sources and destinations. You are best setting up your servers in proximity to your customers and/or providers. This allows the least latent route to be taken and ensures best delivery and quality of your service.

You can failover in multiple zones using the same techniques for a single zone, but always be aware of a latency hit when moving between different zones.

### Best practices

Regardless of using load balancers, primary-secondary or single servers, correct DNS setup is always a good idea. DNS offers a level of redundancy that is completely independent of any underlying servers.

It’s fairly trivial to setup sip.uk.yourcompany.com and sip.usa.yourcompany.com (as an example). Then if there is any time of server downtime, capacity limitation, IP address changes you have full control to direct your traffic to a different location without interrupting your customers.

One stage even better if you are using multiple zones is, a Global Traffic Redirector on your domain. This means that you can give your customers a single sip.yourdomain.com and based on their IP proximity you can redirect them on a DNS level to the nearest zone. You can still then set-up various DNS failover if zones become unavailable.

### Does using ConnexCS guarantee a HA (High Availability) solution?

This is very dependant on your specific setup. If you have a single server with us, the stability of that server will be as good as we can make it. However, a single server can still have faults and data center outages are still something that can happen which are completely beyond our control. But if you deploy across multiple zones you can achieve high availability.

### How quickly could I deploy 5 servers in each zone with load balancers and DNS?

At present we can assist you in deploying a top end multi-zone geographically redundant carrier grade solution in less than 24 hours. This will be high throughput and tolerant of failures in multiple zones.

### Can you help me with my DNS requirements?

Yes, we can advise you on these setting or we can manage the DNS service for you completely.

