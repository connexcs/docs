# Auth

**Management :material-menu-right: Carrier :material-menu-right: Auth**

<img src= "/carrier/img/carrierauth.png">

1. Carrier **IP Authentication**: This uses IP addresses to allow or disallow attempts to access service. Bulk entry for IP authentication supported.
   To add authorized IP address(es), click :material-plus: on the right. These fields are the same as in [**Customer Auth**](https://docs.connexcs.com/customer/auth/) except that they pertain to Carriers. The only exceptions are:

    + **User name and Password**: These are for the call to connect out to the carrier, if server is acting as a User Account Control (UAC).
    + **Outbound Proxy** (only for Ingress switches): Enter the IP address of a proxy server to which calls should be routed before being sent to the carrier. This rewrites the UAC IP in the VIA field of the SIP header.  
    This reduces management overhead as a customer only needs to approve the single IP. Also, several addresses can be load balanced using the AnyEdge system.
    Used to route calls through a proxy before reaching the final carrier destination.
    Works similarly to an HTTP proxy but for SIP traffic.
    + **Weights**: When the configuration of several switches takes place in IP Authentication, this field sets weighting to find which servers are most preferred, essentially doing outbound distribution to a single carrier, but through several gateways to that carrier.
        + Allows traffic distribution between multiple carrier gateways.
        + Useful for load balancing and traffic optimization
            !!! Example
                Assigning weights of 10 and 1 results in 10 out of 11 calls going to the first gateway and 1 out of 11 to the second.
  
2. Carrier **SIP User Authentication** is only used to allow a carrier to connect to the system, not for outbound connections.
[**Customer Auth**](https://docs.connexcs.com/customer/auth/) gives information on the field details.  

   1. **Capability**:
         1. Allows carriers to authenticate via SIP user credentials.
         2. Typically not required but available for advanced configurations.

   2. **Key Features & Benefits**:
         1. + **Comprehensive Credit Management**: Helps track and manage carrier credit effectively.
         2. **Automated Failure Detection**: Identifies route failures without relying on manual monitoring.
         3. **Flexible SIP Response Handling**: Customizes responses to ensure compatibility with different carriers.
         4. **Enhanced Security & Authentication**: Supports multiple authentication methods for secure carrier interactions.
         5. **Optimized Routing & Load Balancing**: Enables intelligent traffic distribution across carrier gateways.
         6. **Efficient Parameter Rewriting**: Ensures seamless call processing by maintaining a uniform number format.
