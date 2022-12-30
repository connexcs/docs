# Troubleshoot Media

Media refers to the actual audio payload part of a call. For more information about ConnexCS media servers, see [**RTP Servers**](https://docs.connexcs.com/setup/settings/servers/#rtp-servers).

**RTP (Real-time Transport Protocol)**, operating on top of User Datagram Protocol (UDP), is a data transport protocol. A signaling protocol, such as Session Initiation Protocol (SIP), initiates the RTP session. Once established, the audio gets streamed across the network.

By using UDP, data gets transmitted at higher rates, some loss will occur and can be partly mitigated by built in correction mechanisms (versus Transmission Control Protocol (TCP) which runs slower to ensure reliability).

!!! info "RTP on Wikipedia"
    For a detailed description of RTP, see the [**Wikipedia Real-time Transport Protocol article**](https://en.wikipedia.org/wiki/Real-time_Transport_Protocol).

**RTCP (RTP Control Protocol)** doesn't carry any actual data payload but helps with delivery. Use RTCP to report on media quality statistics after call completion.

## ConnexCS Media Servers

ConnexCS lets you route your media through a global array of dedicated media servers.

Each regional zone encompasses several servers to provide high availability.

These servers operate independently of your server.

For example, your server could be in London and your media server runs in New York.

!!! tip "Location can impact latency"
    You should choose a media server that adds the least latency to the call.

    For example, if your customer is in Bangalore and your carrier is in New York, use either Bangalore or New York as your media proxy.

## Call Quality Issues

Call Quality / Media issues are typically related to media handling and related protocols. This could be a result of problems with the customer's equipment, the ConnexCS configuration, the carrier, or the far end.

Common issues related to the media stream can include choppy or robotic voice, echo, one-way audio, static, and anything else relating to the quality of a call that's in session.

!!! tip "Check for known issues"
    Before troubleshooting any issue, please check our [**Status Page**](https://status.connexcs.com/). We monitor 45+ metrics on each of our 30+ RTP servers.

    In the odd event that we experience media problems, it's possible that the problems are already on the **Status Page.** It saves you and your customer from unnecessary tasks by identifying the problem.

## Standard Media Troubleshooting

**Check the SIP Headers and SDP Body** If you have one-way audio, check the SDP (Session Description Protocol) body for compatible codecs and Network Address Translation (NAT) which may be causing problems.

**Check Firewalls** Check to see if there are any firewalls in place that's blocking the calls. It's important to remember that your media doesn't flow through the same server as your SIP.

**Ensure you have the best media zone** Ensure a media server that's close to your customer or carrier.

**Change the media zone** It's possible that there are latent / lossy connections between your customer and the media servers. Try changing the media server (Customer :material-menu-right: Routing :material-menu-right: Media :material-menu-right: Media Proxy).

**Try sending the media direct**  Set the media server as direct to let your media flow from your customer directly to your carrier, bypassing ConnexCS. If the issue persists, it's with either the customer, the carrier, or the far end.

!!! Warning
    If your customer (or carrier) is behind a NAT (and you change the media to Direct), ConnexCS won't be able to correctly perform Far-End-NAT Traversal, making the problem worse.

!!! Danger
    If the SIP packets and / or RTP endpoints get investigated, sending media direct exposes your carrier's identity to your customer and vice versa.

**Echo Test** Use our class 5 features to set up an Echo Test. When dialed, all audio spoken gets echoed back. This can be a quick way of checking a customer's audio quality.

**RTCP Metrics** If you enable RTCP on your customer and carrier, meta data about the RTP stream (packet counters, round trip time) gets exchanged. This information is available on the logging page of the call. These graphs can help to identify the problems.

**User Latency** If the UAC is connecting by SIP Auth directly to ConnexCS, it's possible to view latency graphs.

For this, make sure to enable the SIP Ping from Customer :material-menu-right: Auth :material-menu-right: NAT / SIP Ping :material-menu-right: Enabled. Also, ensure to deselect the "Disable UAC Ping" in your Server.

## Advanced Media Troubleshooting

**ConnexCS Circuit Test** Setup ConnexCS to perform automated circuit tests. An outbound call is made and can complete a full circuit, as well as test other metrics and select MOS. This is a measure of audio quality; a long running test can notice trends even before your customers do.

**Modified Ping (Linux)** If the endpoint responds to the ping message, you can tweak the regular ping to make it behave like an RTP Packet. This helps debug connections further.

Make the following settings to simulate SIP packets (ulaw). You can also tweak these parameters as required to achieve your ideal test scenario.

```bash
ping 1.2.3.4 -s 160 -t 200 -i 0.02 -f
-t 200 [allowed round trip time]
-s 160 [bytes per packet]
-i 0.02 [how frequently to send packets (50 / second)]
-f [display output as .]
```

!!! Warning
    Trace Route (`tracert` / `mtr`) are great tool for checking the IP route. They're not made to analyse RTP packet loss. Also, intermediate hops DON'T prioritize Internet Control Message Protocol (ICMP) packets. They shouldn't use this as a method to debug media issues.

**Smokeping / long-running pings:** An added part of your arsenal for identifying trends outside. This may be to set up a long-standing Ping in your monitoring environment for your customers / carrier equipment. This can identify long-term trends in customer / carrier latency.

There're also plenty of SaaS ping monitoring systems, such as Pingdom.

**Call Recording / Packet Capture** Enable call recording on ConnexCS. It also captures packets on the customer's or the carrier's end. Compare the results.
