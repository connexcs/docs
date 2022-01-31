
# What is a Call-ID?
A **Call-ID** is a unique identifier that is automatically generated for every call. It is assigned at the origination point when the call is placed and is present in *every* SIP packet which is sent or received. ConnexCS use Topology Hiding which means that the call going out will be different than the call coming in.

## Why is the Call-ID important?
If an issue is reported with a phone number, we may have many examples over different days that we will need to review. We would either have to guess the problem or ask for further clarification. A Call-ID is succinct piece of information with no abmguity. If we have the Call-ID to look for, we can identify the exact call that had the issue. 

## How to find a Call-ID?
Anyone of these methods may reveal the Call-ID, it is not necessary to perform all of them. 

1. Since the Call-ID is set at the origination point, it may be possible to extract this from the log file of the hardphone / softphone / dialler. Sometimes it may require more verbose logging to be enabled on the device.
2. Tools such as `wireshark`, `tshark`, `tcpdump` or `sngrep` can be used to inspect traffic in transit and extract the Call-ID.
3. You can use our [Logging]() page to search for a call, and then find the Call-ID. You will need the destination number, origination number and/or date/time to locate the correct call. If the call can not be found in the logging page, there are just a few problems that can be causing this:
   1. The IP address exists in our firewall. You can check this from Setup > Advanced > Firewall.
   2. The call is not reaching our platform. We would request you to check the sender first. If the sender is adamant that the call is being sent correctly we would like evidence of this such as a pcap (See Point 1).
   3. If both of the first two are ok, then we could assume that there is a platform fault. However, unless we have an active known problem on the ConnexCS platform (which would affect all customers), the two above options must be ruled out first.
 

