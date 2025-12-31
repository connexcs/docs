# Class 4 Softswitch

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Infrastructure & Connectivity / SIP Devices<br>
<strong>Audience</strong>: Network Engineers, Administrators, Support Team<br>
<strong>Difficulty</strong>: Intermediate to Advanced<br>
<strong>Time Required</strong>: Approximately 30–45 minutes<br>
<strong>Prerequisites</strong>: Active ConnexCS account with permissions to manage SIP devices (DIDs, gateways, SIP endpoints) and access to Device Configuration modules.<br>
<strong>Related Topics</strong>: 
<a href="https://docs.connexcs.com/sip-devices/">SIP Device</a><br>
<strong>Next Steps</strong>: After configuring your SIP devices, perform end-to-end call tests (inbound/outbound), monitor device registration and usage in the Reporting module, and schedule regular review of firmware and configuration settings for security compliance.<br>

</details>

**ConnexCS** is a Class 4 Cloud-based Softswitch (software switch).

This means the call never terminates with the **ConnexCS** system.

The platform only handles call routing.

**Class 5 switches** perform call termination functions such as answering calls, playing messages, and more.

**ConnexCS** is delivered as a service, more precisely as a **PaaS (Platform as a Service)**.

It enables clients to deploy a massively scalable distributed system across the globe with minimal technical expertise.

!!! question "SBC, Class 4 Softswitch, or Proxy?"
    We've given extensive consideration to whether to brand our system as a Class 4 cloudswitch or an **SBC (Session Border Controller).**

    The typical Border part of the Session Border Controller blurs out because our platform delivers Over The Top (OTT), sitting on cloud architecture.
 An SBC is almost always a Class 4 switch, but a Class 4 switch doesn't have to be an SBC.

 You can also deploy Class 5 switches or your dialers to communicate using our Class 4 Switch.
