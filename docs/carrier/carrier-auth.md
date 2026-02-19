# Auth

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Carrier Management / Authentication & Gateway Setup<br>
<strong>Audience</strong>: Administrators, Engineers, Support Team<br>
<strong>Difficulty</strong>: Intermediate to Advanced<br>
<strong>Time Required</strong>: Approximately 1–2 hours<br>
<strong>Prerequisites</strong>: Active ConnexCS account with Carrier-module access; familiarity with SIP/IP authentication, gateway routing, and capacity-limiting concepts<br>
<strong>Related Topics</strong>: <a href="https://docs.connexcs.com/carrier/carrier-main/">Carrier Main Configuration</a>, <a href="https://docs.connexcs.com/limiting-cps/">Capacity Limiting (CPS & Channels)</a><br>
<strong>Next Steps</strong>: Define carrier IP authentication entries (including CIDR ranges, weights, proxy settings), configure SIP User authentication if required, set capacity limits per-gateway, and validate with test traffic<br>

</details>

**Management :material-menu-right: Carrier :material-menu-right: Auth**

<img src= "/carrier/img/carrierauth.png" style="border: 2px solid #4472C4; border-radius: 8px;">

## Introduction

1. Carrier **IP Authentication**: This uses IP addresses to allow or disallow attempts to access service. Bulk entry for IP authentication supported.
   To add authorized IP address(es), click :material-plus: on the right. These fields are the same as in [**Customer Auth**](https://docs.connexcs.com/customer/auth/) except that they pertain to Carriers. The only exceptions are:

    + **User name and Password**: These are for the call to connect out to the carrier, if server is acting as a User Account Control (UAC).
    + **Outbound Proxy** (only for Ingress switches): Enter the IP address of a proxy server to which calls should be routed before being sent to the carrier. This rewrites the UAC IP in the VIA field of the SIP header.  
    This reduces management overhead as a customer only needs to approve the single IP. Also, several addresses can be load balanced using the AnyEdge system.
    Used to route calls through a proxy before reaching the final carrier destination.
    Works similarly to an HTTP proxy but for SIP traffic.
    + **Weights**: When the configuration of several switches takes place in IP Authentication, this field sets weighting to find which servers are most preferred, essentially doing outbound distribution to a single carrier, but through several gateways to that carrier.
        + Allows traffic distribution between multiple carrier gateways.
        + Useful for load balancing and traffic optimization.

    !!! Example
        Assigning weights of 10 and 1 results in 10 out of 11 calls going to the first gateway and 1 out of 11 to the second.

    !!! Note "dr_gw_status"
        `dr_gw_status` indicates the operational status of the Dialing Rule–Gateway mapped to the Carrier under IP Authentication.

        **Flag Meaning:**
        * 🟢 **Green** – Gateway is active and available for routing.
        * 🔴 **Red** – Gateway is inactive, unreachable, or failing health checks.
        
        **Impact:** Determines whether traffic can route through the assigned gateway.
  
2. Carrier **SIP User Authentication** is only used to allow a carrier to connect to the system, not for outbound connections.
[**Customer Auth**](https://docs.connexcs.com/customer/auth/) gives information on the field details.

## Key Features & Benefits

+ **Comprehensive Credit Management**: Helps track and manage carrier credit effectively.
+ **Automated Failure Detection**: Identifies route failures without relying on manual monitoring
+ **Flexible SIP Response Handling**: Customizes responses to ensure compatibility with different carriers.
+ **Enhanced Security & Authentication**: Supports multiple authentication methods for secure carrier interactions.
+ **Optimized Routing & Load Balancing**: Enables intelligent traffic distribution across carrier gateways.
+ **Efficient Parameter Rewriting**: Ensures seamless call processing by maintaining a uniform number format.
