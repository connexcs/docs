# Servers
Setup :material-menu-right: Settings :material-menu-right: Servers

The **Servers** section displays current servers. Here providers may configure servers, including functions such as load balancing. 

## Deploy a server

Make sure that you have completed the [Getting Started](/getting-started) checklist in order to be able to deploy your first server.

After which you will be able to choose a server and and a zone to deploy your server into. Delivery is within 5 minutes.

## Servers
Click the server's IP address to view details. 

**Dispatcher** - This is the load balancer

|Field|Description|
|:----------------:|---|
|Add LoadBalancer|Add servers to the cluster|
|Flush|Force a server update|

**Switch** - Individual servers

|Field|Description|
|:----------------:|---|
|Capacity Failover|Specify where traffic will go if the server reaches capacity|
|Server Config Options|(click the blue pencil to edit)|
|FQDN|The FQDN (Fully Qualified Domain Name) needs to be set for TLS security to be enabled directly on the server|
|Cluster|allows servers to share information such as dialogues and throughput. Ex: if you set CPS to 10, clustered servers will allow 10 CPS, un-clustered servers will allow 10 CPS per server. |
|UAC Auth|allows you to register to your carriers with a username and password|
|WebRTC and TLS|will be enabled once the FQDN has been set, these also require a secure certificate.|
|Auto Upgrade|When your server is ready for an upgrade, ticking this box will allow it to be performed when your server is at zero channels.|
|Disable UAC Ping|system will automatically send out ping messages to registered UACs, which will then provide details such as latency|
|UAC Location Array Sharing|allows users registered on one server to call customers on another server (unnecessary for clustered servers)|
|TLS Internals|useful for high security environments, only used in TLS environments, will enable TLS behind the scenes.|
|US EU|allows servers to be serviced by US zone, failovers occur to the EU zone|
|UDP, TCP, TLS Ports|specify additional ports for each protocol|
|TCP SIP Trace|If you want to ensure that ALL of your SIP Traces are captured, you can use TCP instead of UDP, this gives higher reliability however in extreemtly high traffic senarios this may cause a slowdown in packet processing time|
|Use AnyReg Server|This is an experimental platform SIP Registrar, should only be used if you know what you are doing.|

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

## RTP Servers
RTP Servers handle streaming media. To view RTP Servers in your system:

1. Click the **`RTP Servers`** button.
2. A list of your current RTP servers will appear, with columns for IP address, aliases, and zones.
3. The **`Refresh`** button will reload the page to show the most current changes, if any.

## Server Reactivation

!!! warning 
    If you are a serious carrier *Never let your account run out of credit*. It should go without saying, but if your account runs out of credit
	service will be impacted, it may not instantly be restored either. We will not consider any reactivation problems critical if you persistantly topup
	only enough credit to cover you for the next day.

To reactivate a server:

1. Click **Setup**>**Settings**>**Servers**.

   ![alt text][server-6]

2. Click the server's IP address.
3. Click **Reactivate** to activate your server.

!!! note "Balance needed to deploy server"
    To deploy a server, you must have $20 (+ $20 X other servers in your account) available balance.

[rtpserver]: /misc/img/rtpservers.png "RTP Server"
[server-6]: /misc/img/244.png "server-6"
