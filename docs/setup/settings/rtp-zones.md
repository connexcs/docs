# RTP Zones

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Setup / Settings / RTP Zones<br>
<strong>Audience</strong>: Administrators, Network Engineers, Operations Team<br>
<strong>Difficulty</strong>: Intermediate<br>
<strong>Time Required</strong>: Approximately 30–45 minutes<br>
<strong>Prerequisites</strong>: Active ConnexCS account with Setup-Settings access; understanding of RTP (Real-Time Transport Protocol) media paths, geographic media proxy zones, and call-quality issues.<br>
<strong>Related Topics</strong>: <a href="https://docs.connexcs.com/setup/settings/servers/">Servers – Deploying & Managing</a>, <a href="https://docs.connexcs.com/guides/tshoot-media/">Call Quality / Media Issues</a><br>
<strong>Next Steps</strong>: Navigate to <code>Setup → Settings → RTP Zones</code>, click <code>+</code> to create a new zone or edit an existing one, assign it the closest or optimal media proxy server based on geography, update call-flows or routing to use the zone, then monitor latency and packet-loss metrics to validate call-quality.<br>

</details>

**Setup :material-menu-right: Settings :material-menu-right: RTP Zones**

## Introduction

RTP Zones allow you to change the zone in case of any change of location.

## Steps to change the Zone

**1.** Navigate to Setup :material-menu-right: Settings :material-menu-right: RTP Zones.

**2.** Click on `+` on the top right.

**3.** A dialog will box will open with various Zone options.  

<img src= "/setup/img/rtpzones.jpg" width= "500" style="border: 2px solid #4472C4; border-radius: 8px;">

!!! tip "The recommended **RTP Media Proxy**" is **Closest (Elastic) Server**.<br>If in case any media issue occurs and Closest (Elastic) Server is not working properly, then you can enable RTP Zones and select it accordingly."

<img src= "/setup/img/rtpzones1.jpg" style="border: 2px solid #4472C4; border-radius: 8px;">
