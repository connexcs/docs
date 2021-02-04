# Servers
**Setup :material-menu-right: Settings :material-menu-right: Servers**

The **Servers** section displays current servers and allows providers to configure servers, including functions such as load balancing. 

## Deploy a server
Before deploying your first server, make sure that you have completed the [**Getting Started**](https://docs.connexcs.com/getting-started/) checklist. Once this is complete, you will be able to choose a zone and server for deployment. Delivery is within 5 minutes.

!!! note "Available Balance needed for server deployment"
    To deploy a server, you must have $20 (+ $20 X other servers in your account) available balance.

!!! warning "Impact to services"
    If you are a serious carrier *Never let your account run out of credit*. It should go without saying, but if your account runs out of credit service will be impacted, it may not instantly be restored either. We will not consider any reactivation problems critical if you persistently top-up only enough credit to cover you for the next day.
    
## Server List
The **Servers** section provides an overview of deployed servers:

+ **IP**: The unique server IP address. To view SIP and ICMP latency, hover over the status icon next to the server IP. 
+ **Type**: Typically either **Dispatcher** (load-balancer) or **Switch** (cluster member)
+ **Cluster**: Indicates which cluster the server belongs to. 
+ **Channels**: How many of available active calls are in use.
+ **CPS**: Maximum calls per second. 
+ **Expires**: When the test period ends and the server will be disabled. 
+ **Status**: Indicates if the server will be able to process calls. (Ex: if account has not been paid, the Status will list the server as "Expired")

## Clusters
If you have multiple servers in a load-balance configuration, it is recommended they are put into a Cluster. To create a **Cluster**, click the **`Cluster`** button, then click **`+`** to enter the name. When a new server is deployed, there will be an option to select one of the configured Clusters. 

!!! info "Benefits of clustering"
    1. Better control over CPS and Channel load-balancing: If you set CPS to 10, clustered servers will allow 10 CPS total, un-clustered servers will allow 10 CPS per server, potentially going over the allowed CPS with a particular carrier.
    2. Shared User Location Information: Un-Clustered servers will have difficulty sharing registration information. It is possible to select "UAC Location Sharing" for each of the unclustered servers to share this information, but this is not recommended as it requires additional communications (and increases overhead) for each server to connect to the UAC every second to check for new/changed registrations. 

## RTP Servers
RTP Servers handle streaming media. To view RTP Servers in your system:

1. Click the **`RTP Servers`** button.
2. A list of your current RTP servers will appear, with columns for IP address, aliases, and zones.
3. The **`Refresh`** button will reload the page to show the most current changes, if any.

    ![alt text][rtpserver]

## Server Details
Click the server's IP address to view details. 

### Summary
These are the same fields found under **Server List** above. 

### Capacity Failover
When enabled, we can specify another server in the cluster to route traffic to if the server reaches capacity, based on the allowed CPS and Channels. Ex: CPS or Channels limit is reached, the next call will be blocked unless there is a another server that the call can be routed to. 

### Server Config

**Dispatcher**
Click the blue pencil to edit. 

+ **Add Load Balancer**: Add servers to the cluster.
+ **Flush**: Force a server update.

**Switch**

+ **FQDN**: The FQDN (Fully Qualified Domain Name) needs to be set for TLS security to be enabled directly on the server.
+ **Cluster**: Group servers to share information such as dialogues and throughput. Ex: if you set CPS to 10, clustered servers will allow 10 CPS, un-clustered servers will allow 10 CPS per server. 
+ **Reinvite Ping Interval**: *in progress*
+ **Interconnect**: Where the server is visible routing.
+ **UAC Auth**: Enables ConnexCS to register as a UAC (rather than UAS) to upstream providers with a username and password.
+ **WebRTC and TLS**: Enabled once the FQDN has been set, these also require a secure certificate. These are required for [**WebPhone**](https://docs.connexcs.com/setup/integrations/webphone/).
+ **Auto Upgrade**: When your server is ready for an upgrade, selecting this box will allow it to be performed when your server is at zero channels.
+ **Disable UAC Ping**: UAC Ping automatically sends out ping messages every second to registered UACs, retaining open NAT ports. Select this box to disable that functionality.
+ **UAC Location Array Sharing**: By sharing registration information with servers not in the cluster, calls can be connected between two ConnexCS servers. Clustering servers is the recommended method whenever possible. (If using this setting, you can disable UAC Ping above to gain some minor performance enhancements.)
+ **TLS Internals**: Requests made to the routing engine are kept in TLS, useful for high security (TLS) environments.
+ **Restrict Direct**: If servers are part of AnyEdge, they can't communicate directly, and must be routed through AnyEdge.
+ **TCP SIP Trace**: If you want to ensure that ALL of your SIP Traces are captured, you can use TCP instead of UDP. While providing higher reliability, in extremely high-traffic scenarios there may be a decrease in packet processing time.
+ **Use AnyReg Server**: This is an experimental platform SIP Registrar, should only be used if you know what you are doing. When used in conjunction with AnyEdge, the AnyEdge server will take the registration information and pass it to AnyReg, avoiding the need to check with customer equipment for registration. This negates the need for the UAC options above.
+ **US, EU**: Switch**: Servers in the US zone will process data (ex: CDRs, routing engines) at local servers rather than in some remote zone, avoiding server capacity issues due to longer data transit times.
+ **UDP, TCP, TLS Ports**: Specify port(s) for each protocol in addition to the protocol default (ex: to avoid firewall rules or ISP restrictions).





### Server Actions Menu
Click the **`Actions`** button to open the **Server Actions Menu**. The following actions are available:

* **Install Server**: installs the latest script to your server.
* **Start Server**: Activates the server.
* **Stop Server**: Deactivates the server
* **Restart Server**: Reboots the server.
* **OS Cycle**: Shut down the server using the operating system's mechanisms.
* **Power Cycle**: Shut down the server using a hard reset (emulates pressing the power button).

!!! warning "Impact to Services"
    These actions occur real time and performing any of them could affect services. We recommend that you avoid using them unless the results are understood. Keep in mind that the ConnexCS system is designed to run stateless, and actions such as reboots, restarts, and so on, rarely correct the types of issues seen in less sophisticated systems like PBX or common laptops. The only exception to this is the use of **Install Server**, which could be used for a clean installation from a standard image.

### Resize Capacity
Use this button to update the Channels for the selected server. The update will be active in 15 minutes.  

!!! warning "Impact to services"
    If you increase Channels to 1001 or more, the server will reboot as soon as you click **`Save`**. All calls will stop, and the server can take up to 10 minutes to finish rebooting and begin services again.   

### Run Server Update
This only needs to be run when the system indicates "There is a pending update on the server" at the top of the server details. 

### Server Reactivation
To reactivate a server:

1. Click the server's IP address.
2. Click **Reactivate** to activate your server.

    ![alt text][server-6]
    
## Server Clustering and User Location Registration
### User Location Registration
When a call is initiated, this generates a SIP `INVITE` which is sent to the remote server. When users connect from dynamic IP addresses, there must be a a way to map a known constant address (ex: a username) to a dynamic endpoint such as an IP address or port.

This is accomplished by the User Agent Client (UAC), or a soft phone / hard phone, connecting to the ConnexCS server with a `REGISTER` message which includes their current location and their username, along with additional information. The information is then stored, and made available as a lookup. When someone calls a user, it routes the call to their IP address.

### NAT Keep Alives
When a user is registers with UDP via NAT, a port mapping is created. However, the NAT will time out (and the call will disconnect) is the connection is not maintained by keep-alive by traffic. ConnexCS will perodically send keep-alive messages to the registered UAC, as either UDP or full SIP `OPTIONS` messages. While both work in this scenario, the SIP ```OPTIONS``` ping will reply back to the ConnexCS Server. From this ping, we can monitor the latency of the connection, and also discern if NAT has destroyed the connection or if the user has gone offline without notifying the system. Once a user is registered via UDP, the connection is verified once again.

### Deployment Options

1) **Single Server**: No additional configuration is needed for a single server.
2) **Server Array**: For multiple servers, decide whether users registered to _Server A_ can call users on _Server B_. If so, set the **UAC Location Array Sharing** option (found under [**Server Config**](https://docs.connexcs.com/setup/settings/servers/#server-config)) for the servers which will make the registrations.
3) **Server Cluster**: Servers in a cluster share all user location registrations. This is the best solution to scale into the many 1000's of registrations. Be advised: you will not be able to route calls to users registered against any servers outside the cluster. 

!!! tip "Ping Overhead"
    Due to design constraints that occur with multiple servers in an array, NAT Keep Alive Pings can be quite intensive. You could use *Disable UAC Ping* from the server page, upgrade to a cluster, or use a single registration server to solve this. More intricate measures can be arranged on a case-by-case basis.

[rtpserver]: /setup/img/rtpservers.png "RTP Server"
[server-6]: /setup/img/reactivateserver.png "Reactivate Server"
