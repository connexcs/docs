# Servers

**Setup :material-menu-right: Settings :material-menu-right: Servers**

The **Servers** section displays current servers and allows providers to configure servers, including functions such as load balancing.

## Deploy a Server

Before deploying your first server, make sure to complete the [**Getting Started**](https://docs.connexcs.com/getting-started/) checklist. Once this is complete, you can choose a zone and server for deployment. Delivery is within 5 minutes.

!!! note "Available Balance needed for server deployment"
    To deploy a server, you must have $20 (+ $20 X other servers in your account) available balance.

!!! warning "Impact on services"
    If you are a serious carrier *Never let your account run out of credit*. It should go without saying, but if your account runs out of credit and your service is impacted, it may not be instantly restored either.

    We won't consider any reactivation problems critical if you persistently top up only enough credit to cover you for the next day.

## Server List

The **Servers** section provides an overview of deployed servers:

+ **IP**: Is is the unique server IP address. To view SIP and ICMP latency, hover over the status icon next to the server's IP.
+ **Type**: **Switch** (cluster member).
+ **Cluster**: Indicates which cluster the server belongs to.
+ **Channels**: The number of available active calls in use.
+ **CPS**: Maximum calls per second.
+ **Expires**: When the test period ends, the server is disabled.
+ **Status**: Indicates if the server is able to process calls.
For example, if account is unpaid, the Status lists the server as "Expired")

## Clusters

If you have multiple servers in a load-balance configuration, we recommend putting them into a Cluster.

To create a **Cluster**, click **`Cluster`**, and then click **:material-plus:** to enter the name.

When you deploy a new server, there is an option to select one of the configured Clusters.

!!! info "Benefits of clustering"
    **1. Better control over CPS and Channel load-balancing**: If you set CPS to 10, clustered servers will allow 10 CPS total; un-clustered servers will allow 10 CPS per server, going over the allowed CPS with a particular carrier.

    **2. Shared User Location Information**: UnClustered servers will have difficulty sharing registration information.

    It's possible to select "UAC Location Sharing" for each of the unclustered servers to share this information.

    But, this is not recommended as it requires additional communications (and increases overhead) for each server to connect to the User Account Control (UAC) every second to check for new/changed registrations.

## Real-Time Transport Protocol (RTP) Servers

Real-Time Transport Protocol (RTP) Servers handle streaming media. ConnexCS allows you to route your media through a global array of dedicated media servers.

RTP servers operate independently of your server.

For example, if your server is located in London, you can choose to run your media in New York (if, for example, you have customers there).

Each regional zone encompasses multiple servers to provide high availability.

To view RTP Servers:

1. Click on **`RTP Servers`**.

     A list of your current RTP servers appears, with columns for IP address, aliases, and zones.

2. Click **`Refresh`** to reload the page to show the most current changes, if any.

    ![alt text][rtpserver]

!!! Tip "Media Server Selection"
    You should choose a media server that adds the least latency to the call.

    For example, if your customer is in Bangalore and your carrier in New York, use either Bangalore or New York as your media proxy.

## Server Details

Click the server's IP address to view details.

### Summary

These are the same fields found under **Server List** above.

### Capacity Failover

When enabled, we can specify another server in the cluster to route the traffic, if the server reaches capacity based on the allowed CPS and Channels.

For example, if the CPS or Channels limit has been reached, the next call is blocked unless there is another server to route the call.

### Server Config

**Switch**

+ **Cluster**: Group servers to share information such as dialogues and throughput.
  For example, if you set CPS to 10, clustered servers will allow 10 CPS, and unclustered servers will allow 10 CPS per server.
+ **Interconnect**: Where the server is visible in the routing.
+ **UAC Auth**: Enables ConnexCS to register as a UAC (rather than UAS) with upstream providers with a username and password.
+ **WebRTC and TLS**: Enabled once the FQDN is set. They also require a secure certificate. They are required for [**WebPhone**](https://docs.connexcs.com/setup/integrations/webphone/).
+ **Auto Upgrade**: When your server is ready for an upgrade, select this box to allow it to perform when your server is at zero channels.
+ **Disable UAC Ping**: UAC Ping automatically sends out ping messages every second to registered UACs, retaining open NAT ports. Select this box to disable that functionality.
+ **UAC Location Array Sharing**: By sharing registration information with servers not in the cluster, calls are connected between two ConnexCS servers.

!!! note "Clustering servers is the recommended method whenever possible. (If you use this setting, you can disable UAC Ping above to gain some minor performance enhancements.)"

+ **TLS Internals**: Requests made to the routing engine are kept in Transport Layer Security (TLS), useful for high-security (TLS) environments.
+ **Restrict Direct**: If servers are part of AnyEdge, they can't communicate directly and must be routed through AnyEdge.
+ **TCP SIP Trace**: If you want to ensure that ALL of your Session Initiation Protocol (SIP) Traces are captured, you can use Transmission Control Protocol (TCP) instead of User Datagram Protocol (UDP).
  While providing higher reliability, in very high-traffic scenarios there may be a decrease in packet processing time.
+ **Use AnyReg Server**: When used in conjunction with AnyEdge, the AnyEdge server will take the registration information and pass it to AnyReg.

  It avoids the need to check customer equipment for registration. This negates the need for the UAC options above.
  
  !!! tip "Use AnyReg Server is an experimental platform for SIP Registrar, use only if you are confident."
  
+ **US, EU**: Servers in the US zone will process data (ex: CDRs, routing engines) at local servers rather than in some remote zone, avoiding server capacity issues due to longer data transit times.
+ **UDP, TCP, TLS Ports**: Specify port(s) for each protocol in addition to the protocol default (For example, to avoid firewall rules or ISP restrictions).

!!! note "Whenever any of the above settings are modified, it is recommended to hit the **Install Server**"

### Certificates

Select certificates to apply to the server.

&emsp;![alt text][server-cert1]

To add a Certificate to a sever,

**1.** Click :material-plus:.

+ **Certificate**: Select from a list of Certificates managed under **Setup :material-menu-right: Information :material-menu-right: [Certificate](/setup/information/certificate/)**.
  + **Type**: Select Server or Client as appropriate.

**2.** Click **`Save`**.

### Server Actions Menu

Click **`Actions`** to open the **Server Actions Menu**. The following actions are available:

+ **Install Server**: Installs the latest script on your server.
+ **Start Server**: Activates the server.
+ **Stop Server**: Deactivates the server
+ **Restart Server**: Reboots the server.
+ **OS Cycle**: Shuts down the server using the operating system's mechanisms.
+ **Power Cycle**: Shuts down the server using a hard reset (emulating pressing the power button).

!!! warning "Impact on Services"
    These actions occur in real-time and performing any of them could affect services.

    **We recommend you avoid using them unless you understand the results**.

    Keep in mind that the ConnexCS system is designed to run statelessly, and actions such as reboots, restarts, etc, rarely correct the types of issues seen in less sophisticated systems like PBX or common laptops. 

    The only exception to this is the use of **Install Server**, which is used for a clean installation from a standard image.

### Resize Capacity

Use this to update the Channels for the selected server. The update will be active in 15 minutes.  

!!! warning "Impact on   services"
    If you increase Channels to 1001 or more, the server will reboot as soon as you click **`Save`**.
    All calls will stop, and the server can take up to 10 minutes to finish rebooting and begin services again.

### Run Server Update

This only needs to be run when the system indicates "There is a pending update on the server" at the top of the server details.

&emsp;![alt text][server-update]

## Server Clustering and User Location Registration

### User Location Registration

When a call is initiated, this generates a SIP `INVITE` which is sent to the remote server.

When users connect from dynamic IP addresses, there must be a way to map a known constant address (ex: a username) to a dynamic endpoint such as an IP address or port.

This is accomplished by the User Agent Client (UAC), or a soft phone / hard phone, connecting to the ConnexCS server with a `REGISTER` message which includes their current location and their username, along with additional information.

The information is then stored, and made available as a lookup. When someone calls a user, it routes the call to their IP address.

### NAT Keep Alives

When a user endpoint registers with UDP via NAT, a port mapping is created. However, the NAT will time out (and the call will disconnect) if the connection isn't maintained keep-alive by traffic.

ConnexCS will periodically send keep-alive messages to the registered UAC, as either UDP or full SIP `OPTIONS` messages.

While both work in this scenario, the SIP ```OPTIONS``` ping will reply to the ConnexCS Server. From this ping, we can monitor the latency of the connection and discern if NAT has destroyed the connection or if the user has gone offline without notifying the system.

Once a user is registered via UDP, the connection is verified once again.

### Deployment Options

**1. Single Server**: No additional configuration is needed for a single server.
**2. Server Array**: For multiple servers, decide whether users registered to *Server A* can call users on *Server B*. If so, set the **UAC Location Array Sharing** option (found under [**Server Config**](https://docs.connexcs.com/setup/settings/servers/#server-config)) for the servers which will make the registrations.
**3. Server Cluster**: Servers in a cluster share all user location registrations. This is the best solution for scaling to many thousands of registrations.

!!! note "You won't be able to route calls to users registered against any servers outside the cluster."

!!! tip "Ping Overhead"
    Due to design constraints that occur with multiple servers in an array, NAT Keep Alive Pings can be quite intensive. You could use *Disable UAC Ping* from the server page, upgrade to a cluster, or use a single registration server to solve this.

    More intricate measures can be arranged on a case-by-case basis.

[rtpserver]: /setup/img/rtpservers.png "RTP Server"
[server-update]: /setup/img/server-update.png "Update Server"
[server-cert1]: /setup/img/server-cert1.png "Server Certificates"
[server-6]: /setup/img/reactivateserver.png "Reactivate Server"
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE2OTc5OTMzNTQsODkzMzM1NjE2XX0=
-->