# RTP Block

**Setup :material-menu-right: Advanced :material-menu-right: RTP Block**

## Introduction

This feature is also known as **Block Media IP**. In simple terms, it enables you to block an IP address from sending media.

## Steps to enable RTP Block:

1. Go to Setup :material-menu-right: Advanced :material-menu-right: RTP Block and click on the `+` button.![rtp1](/setup/img/rtp1.jpg)

2. Enter the IP address in the [CIDR (Classless Inter-Domain Routing)](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) field you wish to block..![rtp2](/setup/img/rtp2.jpg) For example, if you are using a single IP address you may use 11.12.131.90/34 format.

3. If that IP address exists in the RTP block section and the call contains the IP address in the SDP section, then the call will be blocked. You will be able to see the SDP section in the **INVITE** header in the **SIP Trace**.

4. Click on `Save` button.

5. After the settings have been saved, you may check the **Status** in **Logging**.

<img src= "/setup/img/rtp11.png" width= "400">

!!! Note
    [Click here](https://cidr.xyz/) to view an interactive IP address and CIDR range visualizer.
