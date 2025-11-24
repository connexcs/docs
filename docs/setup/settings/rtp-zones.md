# RTP Zones

---

**Document Metadata**
<br>**Category**: Setup / Settings / RTP Zones</br>
**Audience**: Administrators, Network Engineers, Operations Team
<br>**Difficulty**: Intermediate</br>
**Time Required**: Approximately 30–45 minutes
<br>**Prerequisites**: Active ConnexCS account with Setup-Settings access; understanding of RTP (Real-Time Transport Protocol) media paths, geographic media proxy zones, and call-quality issues.</br>
**Related Topics**: [Servers – Deploying & Managing](https://docs.connexcs.com/setup/settings/servers/), [Call Quality / Media Issues](https://docs.connexcs.com/guides/tshoot-media/)
<br>**Next Steps**: Navigate to `Setup → Settings → RTP Zones`, click `+` to create a new zone or edit an existing one, assign it the closest or optimal media proxy server based on geography, update call-flows or routing to use the zone, then monitor latency and packet-loss metrics to validate call-quality.</br>

---

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
