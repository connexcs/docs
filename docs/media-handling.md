# Media Handling

## ConnexCS Media Servers

ConnexCS allows you to route your media through a global array of dedicated media servers. These servers operate independently of your server.

Your server may be located in London, but you can run your media in New York

!!! Tip
    You should choose a media server that adds the least latency to the call.
	If your customer is in Bangalore and your carrier in New York, use either Bangalore or New York as your media proxy.

Each zone encompasses multiple servers, to provide high availability

## How to debug media issues.

!!! note
    We monitor 45+ metrics on each of our 30+ RTP servers. In the unlikely event that we are having media issues, please see here [our status page](https://status.connexcs.com/)
	
Below are a few steps which you may follow to debug customer audio issues:

**1. Check the SIP Headers & SDP Body**
	If you have 1 way audio check the SDP body for compatible codecs and NAT which may be causing problems.
	
**2. Check Firewalls**
	Are there any firewalls in place that may be blocking the calls? Note that your media does not flow through the same server as your SIP.
	
**3. Ensure you have the best media zone**
	Ensure that the media server you use is close to your customer or carrier.

**4. Change the media zone**
	It is possible that there are latent / lossy connections between your customer and our media servers. Try changing the media server (Customer > Routing > Media >Media Proxy).

**5. Try Sending the media direct**
	Allow your media to flow from your customer directly to your carrier by setting the media server as direct.

!!! Info
	If you are sending the media direct, ConnexCS will not participate in the exchange of any audio. It goes between your customer and your carrier directly. If you have audio, but it is poor quality, the problem exists outside of ConnexCS control.

!!! Warning
    If your customer (or carrier) is behind a NAT (and you change the media to Direct). ConnexCS will not correctly be able to perform Far-End-NAT Traversal. This means it may make the problem worse.

!!! Danger
	By sending media direct you will be leaking information about who your carrier is to your customer and visa-versa, if the SIP packets and/or RTP endpoints are investigated.

**6. Echo Test**
	Use our class 5 features to setup an Echo Test. When dialled all audio spoken will be echoed back. This can be a quick way of checking a customer's audio quality.

**7. RTCP Metrics**
	If RTCP is enabled on your customer and carrier, meta data about the RTP stream (packet counters, round trip time) will be exchanged. This information will be available in the logging page when looking at the call. These graphs can help to identify the problems.

**8. User Latency**
	If the UAC is connecting by SIP Auth directly to ConnexCS. It is possible to view latency graphs. For this make sure that SIP Ping is enabled from Customer > Auth > NAT / SIP Ping > Enabled. Also ensure that "Disable UAC Ping" is unticked in your Server.

**9. Call Recording / Packet Capture**
	Enable call recording on ConnexCS & capture packets either on the customer or the carrier. Compare the results.

**10. Modified Ping (Linux)**
	If the endpoint responds to the ping message, you can tweak the regular ping to make it behave a bit more like an RTP Packet. This can help to debug connections further.

```
ping 1.2.3.4 -s 160 -t 200 -i 0.02 -f
-t 200 [allowed round trip time]
-s 160 [bytes per packet]
-i 0.02 [how frequently to send packets (50 / second)]
-f [display output as .]
```
These settings are made to roughly simulate SIP packets (ulaw), you can tweak these parameters as required to achieve your ideal test scenario.

!!! Warning
    Trace Route (`tracert` / `mtr`) are great tools for checking the IP route. They are not made to analyse RTP packet loss. Additionally intermediate hops DON'T prioritize ICMP packets, and so should not be used as a method of debugging media issues.
**11. Smokeping / long running pings**
An additional part of your arsenal for identifying trends outside ConnexCS may be to setup a long standing Ping in your monitoring environment to your customers / carrier equipment. This can identify long term trends in customer / carrier latency. There are also plenty of SaaS ping monitoring systems such as Pingdom.

**12. ConnexCS Circuit Test**
	ConnexCS can be setup to perform automated circuit tests. A call is sent outbound and can complete a full circuit, as well as testing other metrics, MOS is checked. This is a measure of audio quality, a long running test can notice trends even before your customers do.
