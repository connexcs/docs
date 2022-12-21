# Servers

**Setup :material-menu-right: Settings :material-menu-right: Servers**

The **Servers** section displays current servers and allows providers to configure servers, including functions such as load balancing.

## Deploy a Server

Before deploying your first server, make sure to complete the [**Getting Started**](https://docs.connexcs.com/getting-started/) checklist.

Once this is complete, you can choose a zone and server for deployment.

Delivery is within 5 minutes.

!!! note "Available Balance needed for server deployment"
    To deploy a server, you must have $20 (+ $20 X other servers in your account) available balance.


!!! warning "Impact on services"
    If you are a serious carrier *Never let your account run out of credit*. It should go without saying, but if your account runs out of credit, it impacts the service and it's restoration may not be instant.

    It's difficult for us to consider any reactivation problems critical if you persistently top-up only enough credit to cover you for the next day.

## Server List

The **Servers** section provides an overview of deployed servers:

+ **IP**: The unique server IP address. To view SIP and ICMP latency, hover over the status icon next to the server IP.
+ **Type**: Typically either **Dispatcher** (load-balancer) or **Switch** (cluster member).
+ **Cluster**: Indicates which cluster the server belongs to.
+ **Channels**: The number of available active calls in use.
+ **CPS**: Maximum calls per second.
+ **Expires**: When the test period ends, it disables the server.
+ **Status**: Indicates if the server is able to process calls.

    For example, if an account is unpaid, the Status lists the server as "Expired."

## Clusters

If you have multiple servers in a load-balancing configuration, we recommend putting them into a Cluster.

To create a **Cluster**, click **`Cluster`**, and then click **:material-plus:** to enter the name.

When you deploy a new server, there is an option to select one of the configured Clusters.

!!! info "Benefits of clustering"

    1. **Better control over CPS and Channel load-balancing:** If you set CPS to 10, clustered servers will allow 10 CPS total; un-clustered servers will allow 10 CPS per server, going over the allowed CPS with a particular carrier.
    2. **Shared User Location Information:** Un-Clustered servers will have difficulty sharing registration information. It's possible to select "UAC Location Sharing" for each of the un-clustered servers to share this information.

        But, this isn't recommended as it requires supplementary  communications (and increases overhead) for each server to connect to the User Account Control (UAC) every second to check for new/changed registrations.

## Real-Time Transport Protocol Servers

Real-Time Transport Protocol (RTP) Servers handle streaming media.

ConnexCS allows you to route your media through a global array of dedicated media servers.

These servers operate independently of your server.

If your server is in London, you can choose to run your media in New York (if you have customers there). Each regional zone encompasses multiple servers to provide high availability.

To view RTP Servers:

1. Click **`RTP Servers`**.

     A list of your current RTP servers appears, with columns for IP address, aliases, and zones.

2. Click **`Refresh`** to reload the page to show the most current changes, if any.

    ![alt text][rtpserver]

!!! Tip "Media Server Selection"
    You should choose a media server that adds the least latency to the call.
    If your customer is in Bangalore and your carrier is in New York, use either Bangalore or New York as your media proxy.

## Server Details

Click the server's IP address to view details.

### Summary

These are the same fields found under **Server List** above.

### Capacity Failover

When enabled, we can specify another server in the cluster to route the traffic, if the server reaches capacity based on the allowed CPS and Channels.


For example, if the CPS or Channels limits have reached, capacity failover will block the next call unless there is another server to route the call.

### Server Config

**Switch**

+ **Cluster:** Group servers to share information such as dialogues and throughput.
  
  For example, if you set CPS to 10, clustered servers will allow 10 CPS and un-clustered servers will allow 10 CPS per server.
  
+ **Interconnect:** Where the server is in the visible routing.

+ **UAC Auth:** Enables ConnexCS to register as a UAC (rather than a UAS) with upstream providers with a username and password.

+ **WebRTC and TLS**: Enabled when the FQDN sets live.

    They also require a secure certificate.

    They're required for [**WebPhone**](https://docs.connexcs.com/webphone/).

+ **Auto Upgrade:** When your server is ready for an upgrade, select this box to allow it to perform when your server is at zero channels.
  
+ **Disable UAC Ping:** UAC Ping automatically sends out ping messages every second to registered UACs, retaining open NAT ports. Select this box to disable that functionality.
  
+ **UAC Location Array Sharing:** By sharing registration information with servers, not in the cluster, calls connect between two ConnexCS servers.

    Clustering servers is the recommended method whenever possible.

    If you use this setting, you can disable UAC Ping above to gain some minor performance enhancements.
  
+ **TLS Internals:** The routing engine consists of the Requests made to the Transport Layer Security (TLS), useful for high security (TLS) environments.
  
+ **Restrict Direct:** AnyEdge-enabled servers require routing through AnyEdge to communicate with one another.
  
+ **TCP SIP Trace:** If you want to ensure that ALL your Session Initiation Protocol (SIP) Traces get captured, you can use Transmission Control Protocol (TCP) instead of User Datagram Protocol (UDP).

    While providing higher reliability, in high-traffic scenarios there may be a decrease in packet processing time.
  
+ **Use AnyReg Server:** This is an experimental platform SIP Registrar; use only if you are confident. When used in conjunction with AnyEdge, the AnyEdge server will take the registration information and pass it to AnyReg, avoiding the need to check customer equipment for registration. This negates the need for the UAC options above.
  
+ **US, EU:** Servers in the US zone will process data (ex: CDRs, routing engines) at local servers rather than in some remote zone, avoiding server capacity issues due to longer data transit times.
  
+ **UDP, TCP, TLS Ports:** Specify port(s) for each protocol with the protocol default.

    For example, to avoid firewall rules or ISP restrictions.

### Certificates

Select certificates to apply to a server.

&emsp;![alt text][server-cert1]

To add a Certificate to a sever,

1. Click :material-plus:.
2. **Certificate**: Select from a list of Certificates managed under **Setup :material-menu-right: Information :material-menu-right: [Certificate](/setup/information/certificate/)**.
3. **Type**: Select Server or Client as appropriate.
4. Click **`Save`**.

### Server Actions Menu

Click **`Actions`** to open the **Server Actions Menu**. The following actions are available:

+ **Install Server**: Installs the latest script on your server.
+ **Start Server**: Activates the server.
+ **Stop Server**: Deactivates the server
+ **Restart Server**: Reboots the server.
+ **OS Cycle**: Shuts down the server using the operating system's mechanisms.
+ **Power Cycle**: Shuts down the server using a hard reset (emulating pressing the power button).

!!! warning "Impact on Services"

    These actions occur in real-time, and performing any of them could affect services.

    We recommend you avoid using them unless you understand the results. 
    
    Keep in mind that the ConnexCS system is designed to run statelessy, and actions such as reboots, restarts, etc, rarely correct the types of issues seen in less sophisticated systems like PBX or common laptops. 
    
    The only exception to this is the use of **Install Server**, which is used for a clean installation from a standard image.

### Resize Capacity

Use this to update the Channels for the selected server. The update will be active in 15 minutes.  


!!! warning "Impact on services"
    If you increase Channels to 1001 or more, the server will reboot as soon as you click **`Save`**. All calls will stop, and the server can take up to 10 minutes to finish rebooting and begin services again.

### Run Server Update

This only needs to run when the system indicates "There is a pending update on the server" at the top of the server details.

&emsp;![alt text][server-update]

## Server Clustering and User Location Registration

### User Location Registration

When a call initiates, this generates a SIP `INVITE` sent to the remote server. When users connect from dynamic IP addresses, there must be a way to map a known constant address (for example, a username) to a dynamic endpoint such as an IP address or port. User Agent Client (UAC), or a softphone / hard phone, helps in accomplishing this by connecting to the ConnexCS server with a `REGISTER` message, which includes their current location and their username, along with extra information. The information is then stored, and made available as a lookup. When someone calls a user, it routes the call to their IP address.

### Network Address Translation Keep Alives

When a user endpoint registers with UDP via NAT, it creates a port mapping. Thus, the NAT will time out (and the call will disconnect) if the connection isn't maintained by keep-alive by traffic. ConnexCS will periodically send keep-alive messages to the registered UAC, as either UDP or full SIP `OPTIONS` messages. While both work in this scenario, the SIP ```OPTIONS``` ping will reply to the ConnexCS Server. From this ping, we can monitor the latency of the connection and discern if NAT has destroyed the connection or if the user has gone offline without notifying the system. Once a user is registered via UDP, the connection is verified once again.

### Deployment Options

1. **Single Server**: No additional configuration is needed for a single server.
2. **Server Array**: For multiple servers, decide whether users registered with *Server A* can call users on *Server B*. If so, set the **UAC Location Array Sharing** option (found under [**Server Config**](https://docs.connexcs.com/setup/settings/servers/#server-config)) for the servers that will make the registrations.
3. **Server Cluster**: Servers in a cluster share all user location registrations. This is the best solution for scaling to thousands of registrations.

    Recommendation: You won't be able to route calls to users registered against any servers outside the cluster.

!!! tip "Ping Overhead"
    Due to design constraints that occur with multiple servers in an array, NAT Keep Alive Pings can be quite intensive. You could use *Disable UAC Ping* from the server page, upgrade to a cluster, or use a single registration server to solve this.

    We can help with more intricate measures on a case-by-case basis.

[rtpserver]: /setup/img/rtpservers.png "RTP Server"
[server-update]: /setup/img/server-update.png "Update Server"
[server-cert1]: /setup/img/server-cert1.png "Server Certificates"
[server-6]: /setup/img/reactivateserver.png "Reactivate Server"