# Open Systems Interconnections Model

Computer systems interact via networks using 7 layers, as described by the OSI model.

In the 1980s, all significant computer and telecommunications companies accepted it. It's the first industry standard for network communications.

In the year 1984, the International Organization for Standardization (ISO) created OSI. It has a 7-layer architecture, with each layer carrying out a particular duty. To transport data from one person to another across the world, all 7- layers must work together.

## Open Systems Interconnections Model Layers

<img src= "/guides/img/osi12.png">

### Physical Layer

It's in charge of the wired / wireless connections that physically connect network nodes.

It specifies the connection / electrical cable / wireless technology that connects the devices.

It regulates the bit rate and the transmission of the raw data, which is just a stream of 0s and 1s.

### Data Link Layer

It creates and breaks connections between two network nodes.

Packets get disintegrated into Frames, which are then sent from the source to the destination.

This layer comprises of 2 components: Media Access Control (MAC), and Logic Link Control (LLC).

MAC utilises MAC addresses to link devices. It establishes permissions to send and receive data.

LLC identifies network protocols, does error checking, and synchronises frames.

### Network Layer

The network layer serves two primary purposes. One is dividing segments into network packets, which are then put back together at the other end. The other is packet routing with the best route. To route packets to a target node, the network layer needs network addresses (IP addresses).

### Transport Layer

Data sent at the session layer gets divided into "segments" by the transport layer. It happens at the receiving end.

On the receiving end, it's in charge of putting the segments back together. It provides data that the session layer may use.

The transport layer performs error control. It determines if data gets transmitted at an incorrect rate.

It also performs flow control. It checks if data gets transmitted at the same rate as the receiving device.

### Session Layer

The session layer creates communication channels, called sessions, between devices. It's responsible for opening sessions. It ensures the sessions remain open and functional while data is getting transferred. It also closes the sessions when communication ends.

This layer can set checkpoints during a data transfer for any session interruption.

Devices can resume data transfer from the last checkpoint.

### Presentation Layer

The presentation layer prepares data for the application layer. It defines how two devices should encode, encrypt, and compress data. It's done so that the received data correctly on the other end.

The presentation layer takes the data transmitted by the application layer and prepares it for transmission over the session layer.

### Application Layer

End-user applications like web browsers and email clients operate at the application layer.

It offers protocols that let computer programs send and receive data.

## Network vs Application Level Latency

**Network latency (lag)** characterizes delays in network communication. In networking, it's the time it takes for a data packet to pass through several devices before getting received at its destination and then getting decoded.

A low-latency network is one that has short transmission delays.

A high-latency network has greater transmission delays (not so desirable). High-latency networks that experience lengthy delays impede communication.

In the worst circumstances, it resembles vehicles trying to merge into a single lane.

Depending on the cause of the delays, high latency reduces transmission capacity. It can be either be on temporary or permanent.

Latency is described as a ping rate and measured in milliseconds. Performance improves as the ping rate decreases. Ping rates of less than 100ms are acceptable. For best performance, latency in the range of 30–40ms gets preference.

Thus, the definition of a network's typical latency varies slightly depending on the context. Latency problems change from network to network.

Application Latency: Before the data gets transmitted to the application, received data segments must get saved in a buffer until a full range of data gets received.

This implies that the application must wait for any missed segments to get retransmitted and received before it can use any successfully delivered packets.

### Relationship between Network and Application latency

Moving a data center can alter network-related latency. The geographic separation between the client and server affects network latency. The delay may get doubled by relocating the server farther from the user. The end users will be further affected as it will slow down processes. It also decreases the application throughput.

Here is an example showing a link between network latency and application latency.

![netlatency](/guides/img/netlatency.jpg)

150 transactions would expire for a local user with a 1-ms network latency between the client and the server in 0.15s.

The speed of these transactions didn't decrease by 50ms when a typical cross-country WAN connection's 50ms of network latency included (0.05s). The same 150 operations, took 7.5 seconds.

Even little variations in network latency highly impact application performance.

## VoIP Latency

The time delay between the time a voice packet gets delivered and when it arrives at its destination is latency in VoIP.

For VoIP conversations, a delay of 20 ms is common. A latency of up to 150 ms is perceptible and hence acceptable. But once you get over that, the quality starts to suffer. When it reaches 300 ms or more, it's unacceptable.

VoIP call quality gets affected by high latency, leading to:

1. Slow and interrupted phone conversations
2. Conflicting and overlapping noises
3. Echo
4. Disruption of speech and other data type synchronization, notably during video conferencing
