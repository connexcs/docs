# Table of Contents

* [Table of Contents](#table-of-contents)
* [Limiting CPS & Channels](#limiting cps-&-channels)
    * [What happens when my server reaches capacity?](#what-happens-when-my-server-reaches-capacity)
    * [Load Balancing using DNS (Domain Name System)](#load-balancing-using-dns-domain-name-system)


# Limiting CPS & Channels

The switch can limit CPS and channels in the following areas:

 1. Your entire ConnexCS account
 2. Per Customer
 3. Per Customer IP Address
 4. Per Carrier
 5. Per Carrier IP Address
 6. Ingress Routing

 
## What happens when my server reaches capacity?

The standard response is a Request Terminated: Server at max cps/channels. If you have multiple servers you can set it up so that,
if the server reaches maximum capacity, is sends a 302 response advising the client of an alternative location to try and complete the call.

## Load Balancing using DNS (Domain Name System)

When using more than one SIP server, you can load balance the calls without a load balancer server using the DNS method. To configure the DNS please follow the steps below:

1. Click on Setup> My Account
2. Click  on Domains
3. Click on + under Server

   ![alt text][load-balance]

4. Enter the domain name under Domain field. Example your company name without spaces.
5. Select TLD (Top Level Domain) to sip.direct.
6. Check the records accordingly against the server IP
7. Click Save.

[load-balance]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/218.png "load-balance"
