# Servers
The **Servers** section displays current servers. Here providers may configurate servers, including functions such as load balancing. This is accessed via **Setup** > **Settings** > **Servers**.

## Servers
Click the server's IP address to view details. 

**Dispatcher** - This is the load balancer

* Add LoadBalancer- add servers to the cluster
* Flush- force a server update

**Switch** - Individual servers

* Capacity Failover- allows you to specify where traffic will go if the server reaches capacity
* Server Config (click the blue pencil to edit)
    * FQDN- The FQDN (Fully Qualified Domain Name) needs to be set for TLS security to be enabled directly on the server
    * Cluster allows servers to share information such as dialogues and throughput. Ex: if you set CPS to 10, clustered servers will allow 10 CPS, un-clustered servers will allow 10 CPS per server. 
    * UAC Auth- allows you to register to your carriers with a username and password
    * WebRTC and TLS- will be enabled once the FQDN has been set
    * Auto Upgrade- will upgrade server only after hours, when there are no customer calls coming through
    * Disable UAC Ping- system will automatically send out ping messages to registered UACs, which will then provide details such as latency
    * UAC Location Array Sharing- allows users registered on one server to call customers on another server (unnecessary for clustered servers)
    * TLS Internals- useful for high security environments, only used in TLS environments, will enable TLS end to end
    * US EU- allows servers to be serviced by US zone, failovers occur to the US zone
    * UDP, TCP, TLS Ports- specify additional ports for each protocol


## Server Actions Menu
Click the **`Actions`** button to open the **Server Actions Menu**. The following actions are available:

* **Install Server**: installs the latest script to your server.
*  **Start Server**: Activates the server.
*  **Stop Server**: Deactivates the server
*  **Restart Server**: Reboots the server.
*  **OS Cycle**: Shut down the server using the operating system's mechanisms.
*  **Power Cycle**: Shut down the server using a hard reset (emulates pressing the power button).

!!! warning "Impact to Services"
    These actions occur real time and performing any of them could affect services. We recommend that you avoid using them unless the results are understood.

## RTP Servers
RTP Servers handle streaming media. To manage RTP Servers in your system:

1. Click the **`RTP Servers`** button.
2. A list of your current RTP servers will appear, with columns for IP address, aliases, and zones.
3. The **`Refresh`** button will reload the page to show the most current changes, if any.

Below is a list of all our RTP Servers:

![alt text][rtpserver]


## Server Reactivation
To reactivate a server:
1. Click **Setup**>**Settings**>**Servers**.

 ![alt text][server-6]

2. Click the server's IP address.
3. Click **Reactivate** to activate your server.

!!! note "Balance needed to deploy server
    To deploy a server, you must have $20 (+ $20 X other servers in your account) available balance.

[rtpserver]: /misc/img/rtpserver.png "RTP Server"
[server-6]: /misc/img/244.png "server-6"
