# Troubleshoot Signalling
Signalling is the process telephony systems use to establish a connection across a network or the internet. This includes functions such as device registration, as well as setup, maintainance, and tear-down of calls. While there are many different signalling protocols used for various types of deployments, ConnexCS uses the SIP protocol. 

## Signalling Protocols
**SIP (Session Initiation Protocol)** is used to communicate between the customer's equipment and the ConnexCS platform, and from ConnexCS to the providers/carriers that connect calls to the far-end. Messages are exchanged between each leg of a path, so the elements can agree to commnicate. Once a path is extablished, meaning all the elements between the customer and the far-end agree to carry the call, then the actual audio payload (or Media) of the call may begin. While the call is up, SIP sends periodic confirmation, maintaining the call. When one end or the other hangs up, SIP then initiates the end of the call, as each point agrees to terminate the connection. 

1. **Setup**- This is the process of connecting a call between our customer and an endpoint, creating path through various telecommunciations devices along the way. This can be originated by our customer (outbound call) or from the far-end (inbound call). For an outbound call placed by our customer, this is the part of the call after the number is dialed, when the customer UAC communicates with ConenxCS, which then determines where to send the call, what caller-ID to display, and so on. This information is all transitted to the carrier, and on until it reaches the destination number at the far-end. (This process is reversed for calls destined in to one of our customers, and as such we have no control of the information that is provided to us by the carrier delivering the call to the ConnexCS switch.)
2. **Maintenance**- Once the call is connected, SIP sends periodic registration messages while the call is active, so it doesn't get disconnected accidentally. 
3. **Tear-Down**- The process of ending a call by closing down the SIP session between all the components in the path between the two endpoints. 

!!! info "SIP on Wikipedia"
    For detailed description of SIP, see the [**Wikipedia Session Initial Protocol article**](https://en.wikipedia.org/wiki/Session_Initiation_Protocol). 

**DTMF (Dual-Tone Multi-Frequency)/MF4**, also known as "Touch-Tone", is the tones that you hear over the phone when you dial a number. In the ConnexCS system, DTMF is used between the customer phone and their SIP enabled device (UAC). The only time DTMF is used to communicate with ConnexCS is when using Class 5 features such as call conferecing or voicemail.  

!!! info "DTMF on Wikipedia"
    For detailed description of SIP, see the [**Wikipedia Dual-Tone Multi-Frequency article**](https://en.wikipedia.org/wiki/Dual-tone_multi-frequency_signaling). 
    
## Call Connectivity Issues
When calls won't connect or stay connected, this is typically related to signalling (connecting, maintaining, and ending calls) and related protocols. Troubleshooting should focus on the customer equipment, the ConnexCS configuration, the carrier, or the far-end. 

!!! tip "Check for known issues"
    Before troubleshooting any issue, please check our [**Status Page**](https://status.connexcs.com/). We monitor 45+ metrics on each of our 30+ RTP servers. In the unlikely event that we are having media issues, the issue may already be reported here, saving you and your customer unnecessary work diagnosing the issue. 
    
### Calls won't connect
Calls may fail to connect, whether that is calls placed by our customers or calls that are routed in to out customers. 

**Outbound calls** When outbound don't connect this could be an issue with the ConnexCS configuration or it could be due to some sort of issue on the platform or with the carrier, or even the far-end/desitnation carrier/customer/configuration. Here is a suggested flow for troubleshooting:

&emsp;![alt text][signal-flow]

[![SIGF](https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVERcbiAgICBBW0NoZWNrIENvbm5leENTIFN0YXR1cyBQYWdlLl0tLT58Tm8gaXNzdWUgUmVwb3J0ZWR8IEN7e0NoZWNrIFJlZ2lzdGVyIExvZ2dpbmd9fVxuICAgIEFbQ2hlY2sgQ29ubmV4Q1MgU3RhdHVzIFBhZ2UuXS0tPnxLbm93biBJc3N1ZXwgQltbRm9sbG93IEluc3RydWN0aW9ucyBvbiBTdGF0dXMgUGFnZV1dXG4gICAgQyAtLT58Q2FsbCBub3QgZm91bmR8IEV7e0NoZWNrIFNJUCBUcmFjZXN9fSAgICBcbiAgICBDIC0tPnxDYWxsIGlzIGxpc3RlZCB0aGVyZXwgRFtbVHJvdWJsZXNob290IHJlZ2lzdHJhdGlvbi5dXVxuICAgIEUgLS0-fENhbGwgbm90IGZvdW5kfCBHe3tTaW11bGF0ZSBjYWxsLn19XG4gICAgRSAtLT58Q2FsbCBpcyBsaXN0ZWR8IEZbW1Ryb3VibGVzaG9vdCBTSVAgRXJyb3IgQ29kZS5dXVxuICAgIEcgLS0-fEkgY2FuIGZpeCB0aGlzfCBIe0VuZC59XG4gICAgRyAtLT58SSBuZWVkIGFkZGl0aW9uYWwgYXNzaXN0YW5jZXwgSXtSZXBvcnQgYSBwcm9ibGVtLn1cbiAgICBCIC0tPnxJIG5lZWQgYWRkaXRpb25hbCBhc3Npc3RhbmNlfCBJe1JlcG9ydCBhIHByb2JsZW0ufVxuICAgIEQgLS0-fEkgbmVlZCBhZGRpdGlvbmFsIGFzc2lzdGFuY2V8IEl7UmVwb3J0IGEgcHJvYmxlbS59XG4gICAgRiAtLT58SSBuZWVkIGFkZGl0aW9uYWwgYXNzaXN0YW5jZXwgSXtSZXBvcnQgYSBwcm9ibGVtLn1cblxuICAgIGNsaWNrIEEgY2FsbCBjYWxsYmFjayhodHRwczovL3N0YXR1cy5jb25uZXhjcy5jb20vKVxuICAgIGNsaWNrIEMgY2FsbCBjYWxsYmFjayhodHRwczovL2RvY3MuY29ubmV4Y3MuY29tL2xvZ2dpbmcvI3JlZ2lzdGVyLWxvZ2dpbmcpXG4gICAgY2xpY2sgRSBjYWxsIGNhbGxiYWNrKGh0dHBzOi8vZG9jcy5jb25uZXhjcy5jb20vbG9nZ2luZy8jc2lwLXRyYWNlcylcbiAgICBjbGljayBHIGNhbGwgY2FsbGJhY2soaHR0cHM6Ly9kb2NzLmNvbm5leGNzLmNvbS9sb2dnaW5nLyNzaW11bGF0ZSlcbiAgICBjbGljayBJIGNhbGwgY2FsbGJhY2soaHR0cHM6Ly9kb2NzLmNvbm5leGNzLmNvbS9yZXBvcnRpbmctcHJvYmxlbXMvI3JlcG9ydC1hLXByb2JsZW0pXG5cbiIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9)](https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggVERcbiAgICBBW0NoZWNrIENvbm5leENTIFN0YXR1cyBQYWdlLl0tLT58Tm8gaXNzdWUgUmVwb3J0ZWR8IEN7e0NoZWNrIFJlZ2lzdGVyIExvZ2dpbmd9fVxuICAgIEFbQ2hlY2sgQ29ubmV4Q1MgU3RhdHVzIFBhZ2UuXS0tPnxLbm93biBJc3N1ZXwgQltbRm9sbG93IEluc3RydWN0aW9ucyBvbiBTdGF0dXMgUGFnZV1dXG4gICAgQyAtLT58Q2FsbCBub3QgZm91bmR8IEV7e0NoZWNrIFNJUCBUcmFjZXN9fSAgICBcbiAgICBDIC0tPnxDYWxsIGlzIGxpc3RlZCB0aGVyZXwgRFtbVHJvdWJsZXNob290IHJlZ2lzdHJhdGlvbi5dXVxuICAgIEUgLS0-fENhbGwgbm90IGZvdW5kfCBHe3tTaW11bGF0ZSBjYWxsLn19XG4gICAgRSAtLT58Q2FsbCBpcyBsaXN0ZWR8IEZbW1Ryb3VibGVzaG9vdCBTSVAgRXJyb3IgQ29kZS5dXVxuICAgIEcgLS0-fEkgY2FuIGZpeCB0aGlzfCBIe0VuZC59XG4gICAgRyAtLT58SSBuZWVkIGFkZGl0aW9uYWwgYXNzaXN0YW5jZXwgSXtSZXBvcnQgYSBwcm9ibGVtLn1cbiAgICBCIC0tPnxJIG5lZWQgYWRkaXRpb25hbCBhc3Npc3RhbmNlfCBJe1JlcG9ydCBhIHByb2JsZW0ufVxuICAgIEQgLS0-fEkgbmVlZCBhZGRpdGlvbmFsIGFzc2lzdGFuY2V8IEl7UmVwb3J0IGEgcHJvYmxlbS59XG4gICAgRiAtLT58SSBuZWVkIGFkZGl0aW9uYWwgYXNzaXN0YW5jZXwgSXtSZXBvcnQgYSBwcm9ibGVtLn1cblxuICAgIGNsaWNrIEEgY2FsbCBjYWxsYmFjayhodHRwczovL3N0YXR1cy5jb25uZXhjcy5jb20vKVxuICAgIGNsaWNrIEMgY2FsbCBjYWxsYmFjayhodHRwczovL2RvY3MuY29ubmV4Y3MuY29tL2xvZ2dpbmcvI3JlZ2lzdGVyLWxvZ2dpbmcpXG4gICAgY2xpY2sgRSBjYWxsIGNhbGxiYWNrKGh0dHBzOi8vZG9jcy5jb25uZXhjcy5jb20vbG9nZ2luZy8jc2lwLXRyYWNlcylcbiAgICBjbGljayBHIGNhbGwgY2FsbGJhY2soaHR0cHM6Ly9kb2NzLmNvbm5leGNzLmNvbS9sb2dnaW5nLyNzaW11bGF0ZSlcbiAgICBjbGljayBJIGNhbGwgY2FsbGJhY2soaHR0cHM6Ly9kb2NzLmNvbm5leGNzLmNvbS9yZXBvcnRpbmctcHJvYmxlbXMvI3JlcG9ydC1hLXByb2JsZW0pXG5cbiIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9)

+ Inbound calls are not delivered to the correct desitnation or are not received by the ConnexCS switch at all

### Calls disconnect randomly
+ Maintenance Issues- calls disconnect on their own (neither ends initiates the hang up, but the call disconnects)

### Calls don't disconnect after both sides hang up
+ Tear Down issues- customer is billed for call duration in excess of the actual call duration

## Using SIP Traces to diagnose issues
ConnexCS records and stores SIP trace captures for all calls for 7 days. This data is accessed in [**Logging**](/logging)


[signal-flow]: /guides/img/signal-flow.png "Troubleshoot Signalling Issues"
