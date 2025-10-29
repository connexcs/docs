# Network Ping

!!! Danger  " The Network Ping tool is currently in Alpha mode. Functionality, data accuracy, and visual behavior may change as the feature is still under active development and testing."

**Setup :material-menu-right: Network Ping**

The Network Ping tool allows you to test how reachable an IP address is from different ConnexCS servers worldwide.

It provides a **visual view** of **latency** and **packet response times**, helping you understand how quickly ConnexCS servers can communicate with a given IP.

---

## Purpose

The Network Ping feature allows users to:

* Check connectivity and response time between ConnexCS infrastructure and any target IP.
* Identify which ConnexCS AnyEdge zones can reach the destination and how they perform.
* Measure average latency to evaluate network health and routing quality.

---

## Use Case

Network Ping helps administrators quickly:

* Troubleshoot latency problems between ConnexCS and external IPs.
* Verify network reachability for customer or carrier endpoints.
* Monitor performance of global ConnexCS zones.

## How to Use

1. Navigate to **Setup :material-menu-right: Network Ping**.<br><img src="/misc/img/nwping1.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
2. Enter the **IP Address**. Click on Search button.
3. The results are displayed as shown below. <br><img src="/misc/img/nwping2.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

## How It Works

When you enter an IP address, the system performs a lookup and displays three key network components:

|**Color**|**Represents**|**Description**|
|---------|--------------|---------------|
|🟥 **Red Dot**|Destination (Entered IP)|The IP address you entered. <br>It’s the endpoint being tested for reachability.</br>|
|🟦 **Blue Dot**|AnyEdge Server|The AnyEdge Zone this IP will connect to.|
|🟩 **Green Dots**|ConnexCS Zones|Global ConnexCS servers from which the ping tests originate.|

---

## Ping Flow

1. The ConnexCS Zone servers send ping requests to the destination IP (red).
2. The visual map shows **directional flow**. The data moving towards the destination.
3. Each connection displays a **ping turnaround time**, showing how quickly each zone reaches the target.

---

## Average Packets / Latency

The **Average Packets** metric represents the **round-trip time (RTT)**.

Its the duration between sending a ping request and receiving a response.

This helps measure:

* **Network delay** between servers and destination.
* **Performance** of the route taken through AnyEdge.
* **Stability** and **responsiveness** of the target IP.

---

## Interactive Visualization

* Hovering over any **zone (green dot)** highlights the corresponding record in the grid panel on the right.
* The grid displays zone names, ping times, and additional connection details.
* The **directional lines** on the map are animated for clarity, but not real-time path tracers.
* Ping times, however, are updated in **real-time**.

---
