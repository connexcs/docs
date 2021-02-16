# Troubleshooting Guide

## VoIP basics
When troubleshooting VoIP and general telephony issues, it is helpful to understand some of the basic technical concepts. We can use this knowledge to then narrow our troubleshooting efforts by determining what type of issue the customer is experiencing. 

ConnexCS uses a SIP-based technologies in which phone calls are based on two discint processes- signaling and media. Both processes need to be working for phone calls to work properly 

### Signalling
Signalling is a general term that decribes how telephony systems setup, maintain, and end calls. While there are many different signalling protocols used for vrious types of deployments, ConnexCS uses the following:

**SIP (Session Initiation Protocol)** is used to communicate between the customer's equipment and the ConnexCS platform, and from ConnexCS to the providers/carriers that connect calls to the far-end. Messages are sent between each leg of a path, where the elements agree to commnicate. Once a path is extablished, meaning all the elements between the customer and the far-end agree to carry the call, then the actual audio payload (see Media below) of the call may begin. While the call is up, SIP sends periodic confimration, maintaining the call. When one end or the other hangs up, SIP then initiates the end of the call, as each point agrees to terminate the connection. 

1. **Setup**- This is the process of connecting a call between our customer and an endpoint, creating path through various telecommunciations devices along the way. This can be originated by our customer (outbound call) or from the far-end (inbound call). For an outbound call placed by our customer, this is the part of the call after the number is dialed, when the customer UAC communicates with ConenxCS, which then determines where to send the call, what caller-ID to display, and so on. This information is all transitted to the carrier, and on until it reaches the destination number at the far-end. (This process is reversed for calls destined in to one of our customers, and as such we have no control of the information that is provided to us by the carrier delivering the call to the ConnexCS switch.)
2. **Maintenance**- Once the call is connected, SIP sends periodic registration messages while the call is active, so it doesn't get disconnected accidentally. 
3. **Tear-Down**- The process of ending a call by closing down the SIP session between all the components in the path between the two endpoints. 

!!! info "SIP on Wikipedia"
    For detailed description of SIP, see the [**Wikipedia Session Initial Protocol article**](https://en.wikipedia.org/wiki/Session_Initiation_Protocol). 

**DTMF (Dual-Tone Multi-Frequency)/MF4**, also known as "Touch-Tone", is the tones that you hear over the phone when you dial a number. In the ConnexCS system, DTMF is used between the customer phone and their SIP enabled device (UAC). The only time DTMF is used to communicate with ConnexCS is when using Class 5 features such as call conferecing or voicemail.  

!!! info "DTMF on Wikipedia"
    For detailed description of SIP, see the [**Wikipedia Dual-Tone Multi-Frequency article**](https://en.wikipedia.org/wiki/Dual-tone_multi-frequency_signaling). 

### Media
Media refers to the actual audio payload portion of a call. For more information about ConnexCS media servers, see [**RTP Servers**](https://docs.connexcs.com/setup/settings/servers/#rtp-servers).

**RTP (Real-time Transport Protocol) 

**RTCP (RTP Control Protocol)

## Call Connectivity Issues
When calls won't connect or stay connected, this is typically related to signalling (connecting, maintaining, and ending calls) and related protocols. Troubleshooting should focus on the customer equipment, the ConnexCS configuration, the carrier, or the far-end. 

### Calls won't connect
+ Setup Issues- outbound calls don't connect (typically there is an error message), inbound calls are not delivered to the correct desitnation or are not received by the ConnexCS switch at all

### Calls disconnect randomly
+ Maintenance Issues- calls disconnect on their own (neither ends hangs up)

### Calls don't disconnect after both sides hang up
+ Tear Down issues- customer is billed for call duration in excess of the actual call duration

## Call Quality Issues
Call Quality/Media issues are typically related to media handling and related protocols. This could be a result of problems with the customer equipment, the ConnexCS configuration, the carrier, or the far-end. Common issues related to the media stream can include choppy or robotic voice, echo, one-way audio, static, and anything else relating to the quality of a call that is in session. 

!!! tip "Check for known issues"
    Before troubleshooting any issue, please check our [**Status Page**](https://status.connexcs.com/). We monitor 45+ metrics on each of our 30+ RTP servers. In the unlikely event that we are having media issues, the issue may already be reported here, saving you and your customer unnecessary work diagnosing the issue. 

### Standard Media Troubleshooting
**Check the SIP Headers & SDP Body** If you have one-way audio, check the SDP body for compatible codecs and NAT which may be causing problems.

**Check Firewalls** Check to see if there any firewalls in place that may be blocking the calls. It is important to remember that your media does not flow through the same server as your SIP.

**Ensure you have the best media zone** Ensure that the media server you use is close to your customer or carrier.

**Change the media zone** It is possible that there are latent / lossy connections between your customer and our media servers. Try changing the media server (Customer > Routing > Media >Media Proxy).

**Try sending the media direct** Allow your media to flow from your customer directly to your carrier by setting the media server as direct, bypassing ConnexCS. If the issue persists, it is with either the customer or the carrier or the far-end. 

!!! Warning
    If your customer (or carrier) is behind a NAT (and you change the media to Direct). ConnexCS will not correctly be able to perform Far-End-NAT Traversal, potentially making the problem worse.

!!! Danger
    By sending media direct you will be leaking information about who your carrier is to your customer and visa-versa, if the SIP packets and/or RTP endpoints are investigated.

**Echo Test** Use our class 5 features to setup an Echo Test. When dialled all audio spoken will be echoed back. This can be a quick way of checking a customer's audio quality.

**RTCP Metrics** If RTCP is enabled on your customer and carrier, meta data about the RTP stream (packet counters, round trip time) will be exchanged. This information will be available in the logging page when looking at the call. These graphs can help to identify the problems.

**User Latency** If the UAC is connecting by SIP Auth directly to ConnexCS. It is possible to view latency graphs. For this make sure that SIP Ping is enabled from Customer > Auth > NAT / SIP Ping > Enabled. Also ensure that "Disable UAC Ping" is unticked in your Server.

### Advanced Media Troubleshooting 

**ConnexCS Circuit Test** ConnexCS can be setup to perform automated circuit tests. A call is sent outbound and can complete a full circuit, as well as testing other metrics, MOS is checked. This is a measure of audio quality, a long running test can notice trends even before your customers do.

**Modified Ping (Linux)** If the endpoint responds to the ping message, you can tweak the regular ping to make it behave a bit more like an RTP Packet. This can help to debug connections further. The following settings are made to roughly simulate SIP packets (ulaw), you can tweak these parameters as required to achieve your ideal test scenario.

```
ping 1.2.3.4 -s 160 -t 200 -i 0.02 -f
-t 200 [allowed round trip time]
-s 160 [bytes per packet]
-i 0.02 [how frequently to send packets (50 / second)]
-f [display output as .]
```

!!! Warning
    Trace Route (`tracert` / `mtr`) are great tools for checking the IP route. They are not made to analyse RTP packet loss. Additionally intermediate hops DON'T prioritize ICMP packets, and so should not be used as a method of debugging media issues.

**Smokeping / long running pings** An additional part of your arsenal for identifying trends outside ConnexCS may be to setup a long standing Ping in your monitoring environment to your customers / carrier equipment. This can identify long term trends in customer / carrier latency. There are also plenty of SaaS ping monitoring systems such as Pingdom.

**Call Recording / Packet Capture** Enable call recording on ConnexCS & capture packets either on the customer or the carrier. Compare the results.

## Billing issues
These issues are typically due to an issue with the carrier or with how ConnexCS has been configured by the customer. 
