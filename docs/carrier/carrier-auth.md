# Auth

**Management :material-menu-right: Carrier :material-menu-right: Auth**

<img src= "/carrier/img/carrierauth.png">

1. Carrier **IP Authentication**: This uses IP addresses to allow or disallow attempts to access service.
   To add authorized IP address(es), click :material-plus: on the right. These fields are the same as in [**Customer Auth**](https://docs.connexcs.com/customer/auth/) except that they pertain to Carriers. The only exceptions are:

    + **User name and Password**: These are for the call to connect out to the carrier, if server is acting as a User Account Control (UAC).
    + **Outbound Proxy** (only for Ingress switches): Enter the IP address of a proxy server to which calls should be routed before being sent to the carrier. This rewrites the UAC IP in the VIA field of the SIP header.  
    This reduces management overhead as a customer only needs to approve the single IP. Also, several addresses can be load balanced using the AnyEdge system.
    + **Weights**: When the configuration of several switches takes place in IP Authentication, this field sets weighting to find which servers are most preferred, essentially doing outbound distribution to a single carrier, but through several gateways to that carrier.

2. Carrier **SIP User Authentication** is only used to allow a carrier to connect to the system, not for outbound connections.
[**Customer Auth**](https://docs.connexcs.com/customer/auth/) gives information on the field details.  
