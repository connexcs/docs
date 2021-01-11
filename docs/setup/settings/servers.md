# Servers
**Setup :material-menu-right: Settings :material-menu-right: Servers**

The **Servers** section displays current servers and allows providers to configure servers, including functions such as load balancing. 

## Deploy a server
Before deploying your first server, make sure that you have completed the [Getting Started](https://docs.connexcs.com/getting-started/) checklist. Once this is complete, you will be able to choose a zone and server for deployment. Delivery is within 5 minutes.

!!! note "Available Balance needed for server deployment"
    To deploy a server, you must have $20 (+ $20 X other servers in your account) available balance.

## Server List
The **Servers** section provides and overview of deployed servers:

+ **IP**: The unique server IP address. To view SIP and ICMP latency, hover over the status icon next to the server IP. 
+ **Type**: Either **Dispatcher** (Load balancer) or **Switch** (cluster member)
+ **Cluster**: Indicates which cluster the server belongs to. 
+ **Channels**: How many of available active calls are in use.
+ **CPS**: Maximum calls per second. 
+ **Expires**: When the test period ends and the server will be disabled. 
+ **Status**: Indicates if the server will be able to process calls. (Ex: if account has not been paid, the Status will list the server as "Expired")

## Clusters
To create a **Cluster**, click the **`Cluster`** button, then click **`+`** to name and create a cluster. When a new server is deployed, there will be an option to select one of the configured Clusters. 

!!! info inline end 
    Benefits of clustering
    1. Better control over CPS and Channel load-balancing: If you have multiple servers in load balance configuration, it is recommended "Cluster" is enabled. (Ex: if you set CPS to 10, clustered servers will allow 10 CPS total, un-clustered servers will allow 10 CPS per server, potentially going over the allowed CPS with a particular carrier.)
    2. Shared User Location Information: Un-Clustered servers will have a difficult time 

## RTP Servers
RTP Servers handle streaming media. To view RTP Servers in your system:

1. Click the **`RTP Servers`** button.
2. A list of your current RTP servers will appear, with columns for IP address, aliases, and zones.
3. The **`Refresh`** button will reload the page to show the most current changes, if any.

## Server Details
Click the server's IP address to view details. 

|Field|Switch type|Description|
|:----------------:|---|---|
|Add Load Balancer|Dispatcher|Add servers to the cluster|
|Flush|Dispatcher|Force a server update|
|Capacity Failover|Switch|Specify where traffic will go if the server reaches capacity|
|Server Config Options|Switch|(click the blue pencil to edit)|
|FQDN|Switch|The FQDN (Fully Qualified Domain Name) needs to be set for TLS security to be enabled directly on the server|
|Cluster|Switch|Group servers to share information such as dialogues and throughput. Ex: if you set CPS to 10, clustered servers will allow 10 CPS, un-clustered servers will allow 10 CPS per server. |
|UAC Auth|Switch|Register to your carriers with a username and password|
|WebRTC and TLS|Switch|Enabled once the FQDN has been set, these also require a secure certificate.|
|Auto Upgrade|Switch|When your server is ready for an upgrade, ticking this box will allow it to be performed when your server is at zero channels.|
|Disable UAC Ping|Switch|System will automatically send out ping messages to registered UACs, which will then provide details such as latency|
|UAC Location Array Sharing|Switch|Allows users registered on one server to call customers on another server (unnecessary for clustered servers)|
|TLS Internals|Switch|Useful for high security environments, only used in TLS environments, will enable TLS behind the scenes.|
|US EU|Switch|Allows servers to be serviced by US zone, failovers occur to the EU zone|
|UDP, TCP, TLS Ports|Switch|Specify additional ports for each protocol|
|TCP SIP Trace|Switch|If you want to ensure that ALL of your SIP Traces are captured, you can use TCP instead of UDP, this gives higher reliability however in extremely high traffic scenarios this may cause a slowdown in packet processing time|
|Use AnyReg Server|Switch|This is an experimental platform SIP Registrar, should only be used if you know what you are doing.|

## Server Actions Menu
Click the **`Actions`** button to open the **Server Actions Menu**. The following actions are available:

* **Install Server**: installs the latest script to your server.
* **Start Server**: Activates the server.
* **Stop Server**: Deactivates the server
* **Restart Server**: Reboots the server.
* **OS Cycle**: Shut down the server using the operating system's mechanisms.
* **Power Cycle**: Shut down the server using a hard reset (emulates pressing the power button).

!!! warning "Impact to Services"
    These actions occur real time and performing any of them could affect services. We recommend that you avoid using them unless the results are understood.

## Server Reactivation

!!! warning 
    If you are a serious carrier *Never let your account run out of credit*. It should go without saying, but if your account runs out of credit service will be impacted, it may     not instantly be restored either. We will not consider any reactivation problems critical if you persistently top-up only enough credit to cover you for the next day.

To reactivate a server:

1. Click the server's IP address.
2. Click **Reactivate** to activate your server.

   ![alt text][server-6]

[rtpserver]: /misc/img/rtpservers.png "RTP Server"
[server-6]: /misc/img/244.png "server-6"
