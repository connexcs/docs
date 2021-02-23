# Troubleshoot Media
Media refers to the actual audio payload portion of a call. For more information about ConnexCS media servers, see [**RTP Servers**](https://docs.connexcs.com/setup/settings/servers/#rtp-servers).

**RTP (Real-time Transport Protocol)**, operating on top of UDP, is a data transport protocol. The RTP session is setup by a signalling protocol such as SIP. One established, audio is streamed across the network. By using UDP, data can be transmitted at higher rates, with the understanding that some loss will occur and can be at least partially mitigated by built in correction mechanisms (versus TCP which runs slower to ensure reliability). 

!!! info "RTP on Wikipedia"
    For detailed description of RTP, see the [**Wikipedia Real-time Transport Protocol article**](https://en.wikipedia.org/wiki/Real-time_Transport_Protocol). 

**RTCP (RTP Control Protocol)** does not carry any actual data payload, but helps with delivery. RTCP is used to report on media quality statstics after the call is completed. 

## Call Quality Issues
Call Quality/Media issues are typically related to media handling and related protocols. This could be a result of problems with the customer equipment, the ConnexCS configuration, the carrier, or the far-end. Common issues related to the media stream can include choppy or robotic voice, echo, one-way audio, static, and anything else relating to the quality of a call that is in session. 

!!! tip "Check for known issues"
    Before troubleshooting any issue, please check our [**Status Page**](https://status.connexcs.com/). We monitor 45+ metrics on each of our 30+ RTP servers. In the unlikely event that we are having media issues, the issue may already be reported here, saving you and your customer unnecessary work diagnosing the issue. 

## Standard Media Troubleshooting
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

## Advanced Media Troubleshooting 

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

