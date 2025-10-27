# Network Ping

!!! Danger  " The **Network Ping** tool is currently in **Alpha mode**. Functionality, data accuracy, and visual behavior may change as the feature is still under active development and testing."

**Setup :material-menu-right: Network Ping**

The **Network Ping** tool in ConnexCS provides a visual and analytical overview of how an IP address interacts across the network.

It helps you trace the **source**, **destination**, and **relay servers** involved in network communication, giving a real-time view of latency and connection flow.

---

## Purpose

The Network Ping feature allows users to:

* Identify the **geographic origin** (source) of an IP address.
* Analyze the **destination** where the IP address is being resolved.
* Observe how ConnexCS **AnyEdge servers** communicate with the target address.
* Measure **average packet response times (ping latency)** to evaluate network performance.

---

## Use Case

Network Ping helps administrators quickly:

* Troubleshoot latency or routing issues.
* Verify AnyEdge server reachability.
* Monitor performance of global ConnexCS zones.
* Validate connectivity for VoIP traffic and external endpoints.

## How to Use

1. Navigate to **Setup :material-menu-right: Network Ping**.<br><img src="/misc/img/nwping1.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
2. Enter the **IP Address**. Click on Search button.
3. The results are displayed as shown below. <br><img src="/misc/img/nwping2.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

## How It Works

When you enter an IP address, the system performs a lookup and displays three key network components:

|**Color**|**Represents**|**Description**|
|---------|--------------|---------------|
|🟥 **Red Dot**|**Destination (Entered IP)**| The IP address you entered for lookup.<br>Shows the exact target location of the ping.</br>|
|🟦 **Blue Dot**|**AnyEdge Server**| Intermediate ConnexCS servers that relay or test connectivity to the destination.|
|🟩 **Green Dots**| **ConnexCS Zones**| Physical or virtual ConnexCS servers located globally.<br>These represent where the pings originate.</br>|

---

## Ping Flow

1. The **ConnexCS Zone servers (green)** send ping requests to the **destination IP (red)**.
2. The **AnyEdge (blue)** servers act as routing intermediaries or reference points.
3. The visual map shows **directional flow**. The data moving **towards the destination**.
4. Each connection displays a **ping turnaround time**, showing how quickly each zone reaches the target.

---

## Average Packets / Latency

The **Average Packets** metric represents the **round-trip time (RTT)**. Its the duration between sending a ping request and receiving a response.
This helps measure:

* Network delay between servers and destination.
* Performance of the route taken through AnyEdge.
* Stability and responsiveness of the target IP.

---

## Interactive Visualization

* Hovering over any **zone (green dot)** highlights the corresponding record in the **grid panel** on the right.
* The grid displays zone names, ping times, and additional connection details.
* The **directional lines** on the map are **animated** for clarity, but not real-time path tracers.
* Ping times, however, are updated **in real time**.

---

## Recent Improvements

* Optimized the lookup process for better accuracy.
* Filtered out unnecessary data for clearer visualization.
* Enhanced AnyEdge representation and ping mapping.
* Improved UI responsiveness when hovering over map elements.

---
