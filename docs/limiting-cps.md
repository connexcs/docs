# Table of Contents

- [Table of Contents](#table-of-contents)
- [Limiting CPS & Channels](#limiting-cps--channels)
    - [What happens when my server reaches capacity?](#what-happens-when-my-server-reaches-capacity)
    - [Load Balancing using DNS (Domain Name System)](#load-balancing-using-dns-domain-name-system)


# Limiting CPS & Channels

Limiting CPS and Channels is a mechanism that lets providers put caps on their services. The switch can limit CPS and channels in the following areas:

*  The entire ConnexCS account
*   Per Customer
*   Per Customer IP Address
*   Per Carrier
*   Per Carrier IP Address
*   Ingress Routing

 
## What happens when my server reaches capacity?

When a server reaches capacity, the standard response is: *Request Terminated: Server at max cps/channels*. If you have multiple servers, you can send a 302 response if the server reaches capacity, advising the client of an alternative location to complete the call.

## Load Balancing using DNS (Domain Name System)

For multiple SIP servers, you can load balance the calls without a load balancer server using DNS. To configure the DNS, follow these steps:

1. Click **Setup** > **Integrations**.
2. Click **Domains**.
3. Click **`+`** under **Server**.

   ![alt text][load-balance]

4. Enter the domain name under the **Domain** field. 
5. Select Top Level Domain(TLD) to sip.direct.
6. Check the records against the server IP
7. Click **`Save`**.

[load-balance]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/218.png "load-balance"
