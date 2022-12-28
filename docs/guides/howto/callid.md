
# What's a Call-ID?

A **Call-ID** is a unique identifier that's automatically generated for every call.

It's assigned at the origination point when you place the call and is present in every Session Initiation Protocol (SIP) packet either sent or received.

!!! note "Topology Hiding"
    ConnexCS use **Topology Hiding** which obscures specific infrastructure information for more security. This essentially means that the outgoing Call-ID is different than the incoming Call-ID.

## Why is the Call-ID important?

If an issue gets reported with a phone number, we may have many examples over several days to review. We would either have to guess at the cause or ask for further clarification.

A Call-ID is a brief, clear piece of information. If we've got the Call-ID to look for, we can identify the exact call that had the issue and start troubleshooting.

## Locating a Call-ID

You can find the Call-ID using any one of these methods, it's not necessary to perform every method.

1. Since the Call-ID sets up at the origination point, it's possible to extract this from the log file of the hardphone / softphone / dialler.

    Sometimes the device needs to have more verbose logging enabled.

2. Tools such as `wireshark`, `tshark`, `tcpdump`, or `sngrep` help inspect traffic in transit and extract the Call-ID.

3. You can use our **Logging** page to [**Search the logs**](/logging/#searching-the-logs) for a call, and then find the Call-ID.

    You will need the destination number, origination number, and / or date / time to locate the correct call. If you can't find the call on the logging page, some problems that can be causing this are:

  3.1 The IP address exists in our firewall.
       You can check this from Setup :material-menu-right: Advanced material-menu-right Firewall.

  3.2 The call isn't reaching our platform. We would request that you first check with the sender. If the sender is sure about sending the call flawlessly, we would require proof of this, such as a Packet Capture (pcap) file (See Point 1).

  3.3 If both of the first two are ok, then we could assume that there is a platform fault. Unless we've got an active known problem on the ConnexCS platform (which would affect all customers), it's necessary to rule out the first two options.
