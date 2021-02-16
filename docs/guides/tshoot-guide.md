# Troubleshooting Guide

## VoIP basics
When troubleshooting VoIP and general telephony issues, it is helpful to understand some of the basic technical concepts. We can narrow our troubleshooting efforts by determining what type of issue the customer is experiencing. 

### Signalling
Signalling is a general term that decribes how telephony systems setup, maintain, and end calls. While there are many different signalling protocols used for vrious types of deployments, ConnexCS uses the following:

**SIP (Session Initiation Protocol)** is used to communicate between the customer's equipment and the ConnexCS platform, and from ConnexCS to the providers/carriers that connect calls to the far-end. Messages are sent between each leg of a path, where the elements agree to commnicate. Once a path is extablished, meaning all the elements between the customer and the far-end agree to carry the call, then the actual audio payload (see Media below) of the call may begin. While the call is up, SIP sends periodic confimration, maintaining the call. When one end or the other hangs up, SIP then initiates the end of the call, as each point agrees to terminate the connection. 

+ Setup- For an outbound call placed by our customer, this is the part of the call after the number is dialed, when the customer UAC communicates with ConenxCS, which then determines where to send the call, what caller-ID to display, and so on. This information is all transitted to the carrier, and on until it reaches the destination number at the far-end. (This process is reversed for calls destined in to one of our customers, and as such we have no control of the information that is provided to us by the carrier delivering the call to the ConnexCS switch.)

+ Maintenance- Once the call is connected, SIP sends periodic registration messages

+ Tear-Down- this is the process of closing down the SIP session after one or both ends of hte call have terminated it.

!!! info "SIP on Wikipedia"
    For detailed description of SIP, see the [**Wikiperdia Session Initial Protocol article**](https://en.wikipedia.org/wiki/Session_Initiation_Protocol). 

**DTMF (Dual-Tone Multi-Frequency)/MF4**, also known as "Touch-Tone", is the tones that you hear over the phone when you dial a number. In the ConnexCS system, DTMF is used between the customer phone and their SIP enabled device (UAC). The only time DTMF is used to communicate with ConnexCS is when using Class 5 features such as call conferecing or voicemail.  

!!! info "DTMF on Wikipedia"
    For detailed description of SIP, see the [**Wikiperdia Dual-Tone Multi-Frequency article**](https://en.wikipedia.org/wiki/Dual-tone_multi-frequency_signaling). 

### Media
Media refers to the actual audio payload, the voice, portion of a call. Common issues related to the media stream can include choppy or robotic voice, echo, one-way audio, static, and anything else relating to the quality of a call that is in session. 

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
Call quality issues are typically related to media handling and related protocols. This could be a result of problems with the customer equipment, the ConnexCS configuration, the carrier, or the far-end. 

### Billing issues
These issues are typically due to an issue with the carrier or with how ConnexCS has been configured by the customer. 
