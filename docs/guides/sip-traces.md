# SIP Traces

## SIP Traces

**SIP Tracing** is a diagnostic tool for phone systems using SIP (Session Initiation Protocol) for interactions across trunks and between endpoints. Traces give detailed information about calls and call attempts while debugging and troubleshooting.

Uses of SIP protocol include call setup, maintenance, and tear-down, this tool is typically used only for call connection issues.

Call quality issues are often identified using other methods.

Here is an example describing a SIP trace:

```mermaid
    sequenceDiagram
    autonumber
    Alice->>Bob: INVITE
    Bob-->>Alice: 100 Trying
    Bob-->>Alice: 180 Ringing
    Bob->>Alice: 200 OK (Connected)
    Alice->>Bob: ACK
    Note over Alice,Bob: The call is active
    Alice->>Bob: BYE
    Bob->>Alice: 200 OK
```

Alice and Bob represent the parties on the call. Alice sends an **INVITE** packet to Bob. Then Bob sends a **100 Trying** (provides you the feedback that your request is getting processed by a SIP Application) message together with **180 Ringing** (the Destination User Agent has received the INVITE message and is alerting the user of the call).

Further, **200 OK** is sent which means the calls are connected.

The **ACK** message is sent from Alice to Bob confirming that the call has been connected.

![sip trace](/logging/sipserver.jpg)

!!! info "SIP Trace Captures"
    The **ConnexCS** system supports always-on **SIP Trace** capture.

    We keep a record of every packet sent and received by your server over the last seven (7) days.

To view the SIP Trace of a call:

1. Click a **Call ID** to view its SIP traces.
2. Click **`SIP traces`** to view the SIP trace.

      ![alt text][logging-sip]

3. Toggle between Relative Time and Absolute Time for a specific time of day.
4. Options to download as Text or an Image.

!!! note "Known issues with SIP Traces"

    * **Missing SIP data**: SIP traces aren't always guaranteed. SIP packets are carried by UDP, which may cause the traces to be lossy at times. You can expect this due to the nature of the architecture.
    * **Missed call attempts**: If using SIP authentication, because there are two requests, it's possible that they hit our database out of order. This may cause the logging page to only display the first call attempt.
    * Considered for reporting calls and don't impact the calls directly. They're both rare, typically observed in less than 1 in every 50,000 calls.

+ **How to correlate a Reply to an Initial Request**

The correlation of a Reply to an Initial Request can be done when the Invites have the same CSequence

```mermaid
    sequenceDiagram
    autonumber
    Alice->>Bob: INVITE (cseq 123)
    Bob-->>Alice: 100 Trying
    Bob-->>Alice: 180 Ringing
    Bob->>Alice: 408 Ring Timeout (cseq 123 INVITE)
```

### **Re-Transmissions**

Re-transmissions occur when the same INVITE is sent more than once. This means the `same` packets were sent more than once.

Re-transmissions only happen on UDP. Re-transmissions occur when packets either don't reach the receiver or get lost in transmission. Thus, re-transmissions are done after a certain time interval using specific timers.

Here is an example describing Re-transmissions:

```mermaid
sequenceDiagram
autonumber
rect rgb(127, 0, 255)
rect rgb(100, 180, 255)
rect rgb(252, 110,153)
Alice->>Bob: INVITE (cseq 1)
end
Note over Alice,Bob: 500ms delay
rect rgb(252, 110,153)
Alice->>Bob: INVITE (cseq 1)
end
rect rgb(252, 110,153)
Bob-->>Alice: 100 Trying
end
rect rgb(252, 110,153)
Bob-->>Alice: 180  Ringing
end
rect rgb(252, 110,153)
Bob->>Alice: 200 OK (Connected)
end
rect rgb(252, 110,153)
Alice->>Bob: ACK
end
end
Note over Alice,Bob: The call is active
rect rgb(100, 180, 255)
rect rgb(252, 110,153)
Alice->>Bob: BYE
end
rect rgb(252, 110,153)
Bob->>Alice: 200 OK
end
end
end
```

Alice and Bob represent the parties on the call. Alice sends an INVITE packet to Bob. INVITE is an initial request.

Then Bob sends a 100 Trying (provides you the feedback that your request is getting processed by a SIP Application) message along with 180 Ringing (the Destination User Agent has received the INVITE message and is alerting the user of the call). 100 Trying and 180 Ringing are provisional responses.

The re-invites get absorbed when they're received. When Bob receives the INVITE packet and a special timer is set (please see the below timer table) as to how long it should wait for re-transmissions. If any packet is received within this time frame, the packet gets ignored.

Further, 200 OK is sent which means the calls are connected. 200 OK is a final reply.

The ACK is message is sent from Alice to Bob confirming that the call has been connected.

Each line is a Message.

From 1 message (INVITE) to message 5 (ACK), it's considered as a single Transaction.

Similarly, messages 6 (BYE) and 7 (200 OK) are also considered as a single Transaction.

From message 1 to message 7, the whole conversation is a Dialog.

!!! note "Note"
    Message displayed in Pink color.
    Transaction displayed in Blue color.
    Dialog displayed in Violet color.

You can have take a look at the various SIP Timers in the table below:

|**Timer**|**Default value**|**Section**|**Meaning**|
|-------------|-------------------------|-------------|------------------------------------------------------------------------------|
| **T1** | 500 ms | 17.1.1.1 | Round-trip time (RTT) estimate|
| **T2** | 4 sec.| 17.1.2.2| Maximum retransmission interval for non-INVITE requests and INVITE responses |
| **T4** | 5 sec.| 17.1.2.2| Maximum duration that a message can remain in the network|
| **Timer A** | initially T1| 17.1.1.2 | INVITE request retransmission interval, for UDP only |
| **Timer B** | 64*T1| 17.1.1.2| INVITE transaction timeout timer |
| **Timer D** | > 32 sec. for UDP| 17.1.1.2 | Wait time for response retransmissions|
|| 0 sec. for TCP and SCTP|
| **Timer E** | initially T1| 17.1.2.2 | Non-INVITE request retransmission interval, UDP only|
| **Timer F** | 64*T1| 17.1.2.2| Non-INVITE transaction timeout timer|
| **Timer G** | initially T1| 17.2.1| INVITE response retransmission interval|
| **Timer H** | 64*T1| 17.2.1| Wait time for ACK receipt|
| **Timer I** | T4 for UDP| 17.2.1| Wait time for ACK retransmissions|
|| 0 sec. for TCP and SCTP|
| **Timer J** | 64*T1 for UDP| 17.2.2| Wait time for retransmissions of non-INVITE requests|
| | 0 sec. for TCP and SCTP|
| **Timer K** | T4 for UDP| 17.1.2.2| Wait time for response retransmissions|

<font size="2">*Table source*: [**IBM**](https://www.ibm.com/docs/en/was/8.5.5?topic=timers-sip-timer-summary); *Original Ref*: [**RFC 3261**](https://www.ietf.org/rfc/rfc3261.txt)</font size>

+ **Various Timers**

```mermaid
     sequenceDiagram
    autonumber
    Alice->>Bob: INVITE
    Note over Alice,Bob: First Reply Timer (500ms)
    Bob-->>Alice: 100 Trying
    Note over Alice,Bob: PDD Timer (5s)
    Bob-->>Alice: 180 Ringing
    Note over Alice,Bob: Ring Timer (30s)
    Bob->>Alice: 200 OK (Connected)
    Alice->>Bob: ACK
    Note over Alice,Bob: Max Call Duration Timer (1 hour)
    Alice->>Bob: BYE
    Bob->>Alice: 200 OK
```

Here, Alice sends an invite to Bob and it's expected to get a reply (100 Trying) within in 500ms which is a **First Reply Timer**.

Then a **PDD timer** is set for 5s to hear the ringing. Post-dial delay (PDD) is the measurement of how long it takes for a calling party to hear a ring-back tone after initiating a call.

The time from when the respondent's phone starts ringing until it's answered; is a **Ring Timer**.

When the call is active **Max Call Duration Timer** comes into the picture. When this timer is active, the active call gets disconnected when it reaches the maximum time of an active call.

[logging-sip]: /misc/img/logging-sip.png "SIP Traces"
[logging-4]: /misc/img/236.png "logging-4"

### Re-Invite

```mermaid
   sequenceDiagram
   autonumber
   Alice->>Bob: INVITE (cseq 1)
    Bob-->>Alice: 100 Trying
    Bob->>Charlie: INVITE (cseq 1)
    Charlie-->>Bob: 100 Trying
    Charlie-->>Bob: 180 Ringing
    Bob-->>Alice: 180 Ringing
    Charlie->>Bob: 200 OK (Connected)
    Bob->>Alice: 200 OK (Connected)
    Alice->>Bob: ACK
    Bob->>Charlie: ACK
    Note over Alice,Charlie: The call is active
    Bob->>Alice: REINVITE
    Alice->>Bob: 200 OK
    Bob->>Charlie: REINVITE
    Charlie->>Bob: 200 OK
    Note over Alice,Charlie: Call Disconnects
    Charlie->>Bob: BYE
    Bob->>Alice: BYE
    Alice->>Bob: 200 OK
    Bob->>Charlie: 200 OK
```
In case of a Re-Invite, it re-establishes an entire call.

Here, Alice starts a call with Bob, the call is active without any issues and the media is through UK. But as a provider we detect the call isn't going through UK. Thus, we send the Re-Invite to Alice to send the media through us and we can place the call on a different server in real-time and in the middle of the call. Thus, a Re-Invite can contain some extra information also.
