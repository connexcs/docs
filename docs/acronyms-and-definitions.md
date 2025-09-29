# Acronyms and Definitions

ConnexCS uses standard telephony terminology in our Control Panel and documentation.

Find below the definitions for the most relevant telephony terms, along with some general networking terms and ConnexCS specific terms.

|Term|Definition|Explanation|
|---|---|---|
|**ACD \ ALOC**|*Average Call Duration \ Average Length of Call*|The average length of calls. Average Call Duration or otherwise called Average Length of Call is a retrospective calculation of how long calls last, that is the mean average. Typically only connected calls are included in this calculation, so it is simply the total time that all of the calls were connected divided by the total number of connected calls.|
|**ASR**|*Answer-Seisure Ratio*|The call answer rates as a percentage (connected calls divided by total calls).|  
|**Channel**|n/a|An ongoing live call on the system. |
|**CLI**|*Calling Line Identification*|Identifies the caller's telephone number, which is often displayed to the call recipient in the form of Caller-ID.|
|**CPS (Flow Speed)**|*Calls Per Second*|The volume of calls, referred to the number of calls handled per second, rather than the number of calls a system can receive.|
|**CDR**|*Call Detail Records*|In-depth information about calls that pass through a VoIP exchange. CDRs are a source data for billing and consumer tracking.|
|**Codec**|*Coder-Decoder*|Encodes and decodes data between analog and digital signals, with some form of compression.|
|**DID**|*Direct Inward Dial*|By assigning a public number to an internal location, outside callers can reach a destination without going through a PBX.|
|**DTMF**|*Dual-Tone Multi-Frequency*|A signalling system that connects points in the telephony network, typically between telephone equipment, communications devices, and switching centers. See [**Wikipedia DTMF**](https://en.wikipedia.org/wiki/Dual-tone_multi-frequency_signaling) for more details.|
|**E.123**|*Specific Number Format*|A standard that includes a number format beginning with a + followed by a country code and subscriber number.|
|**E.164**|*Specific Number Format*|As described by the ITU, the E.164 general format must contain only digits split as follows: Country code (1 to 3 digits) Subscriber number (max 12 digits).|
|**FAS**|*False Answer Supervision*|A kind of billing fraud, it bills a call for a length of time that was longer than the actual call duration.|
|**Flow Speed**|n/a|The number of allowed calls per second. ConnexCS uses this term and **Calls Per Second (CPS)** interchangeably.|
|**FQDN**|*Fully Qualified Domain Name*|A domain name, which also includes a hostname, that points to or references an IP. For example, sip.connexcs.com.|
|**IVR**|*Interactive Voice Response*|Sometimes known as a "phone tree," this allows callers to select different options that connect them to different end-points (For example, extensions or users) in your system.|
|**Jitter**|n/a|This refers to the variation in time between received packets. In a VoIP system, Jitter may explain voice quality issues such as robotic-sounding voices, static, or choppy audio.|
|**LCR**|*Least-Cost Route*|The practice of managing traffic in a VoIP network in the least expensive way. 'Expensive' can relate to the actual cost, or it can abstractly refer to time and effort.|
|**LRN**|*Location Routing Number*|[**Wikipedia LRN**](https://en.wikipedia.org/wiki/Location_routing_number). A number portability system used to route NPA-NXX calls and allow the receiving carrier to find the price of the call, not the destination number.|
|**MOS**|*Mean Opinion Score*|This score can show the general call quality of a system, a carrier, or a customer.|
|**NAT**|*Network Address Translation*|This is a networking practice that allows private IPs in a defined network to share a public IP that can route over the internet, helping to conserve the dwindling supply of public IPs.|
|**NER**|*Network Effectiveness Ratio*|Measures a network's ability to deliver phone calls independent of user actions like a terminal reject.|
|**NPA-NXX**|*Numbering Plan Area-1st 3 digits*|The number is followed by four more identifying digits, making it NPA-NXX-XXXX.  The 'N' in NXX is different because it represents digits from 2 9 instead of 0–9, as it's with 'X'. See [**USA Routing**](https://docs.connexcs.com/routing-usa/) for further explanation.|  
|**P-Asserted-ID**|n/a|A header field in the SIP INVITE that has the identity of the caller (typically used for caller-ID / network identifier). It shouldn't be delivered to the end-user.|
|**PDD**|*Post-Dial Delay*|The time between the last digit dialled and a ringer or equal action on the other end. This is useful to check to see if a carrier is slow to connect a call.|
|**PSTN**|*Public Switched Telephone Network*|A broad term that encompasses most telephone networks, including telephone lines, mobile networks, and communication satellites.|
|**RTP**|*Real-time Transfer Protocol*|A network protocol used to move media across IP-based systems.|
|**SIP**|*Session Initiation Protocol*|A TCP/IP-based network protocol used in VoIP telephony to establish connections for telephone calls.|
|**SIP Trace**|n/a|A log of SIP signalling messages, this is an essential tool for troubleshooting registration, call completion, and other issues.|
|**Transcoding**|n/a|Converts file from one format to another. In ConnexCS, this refers to the process of converting audio from one codec to another, often when there is low-bandwidth.|
|**Channel**|n/a| Channels are analogous to dialogs. Channels are counted even if the call wasn't connected or even ringing hasn't begun. It's counted even if the call geeing setup. For example, if 100 channels exist, it means 100 active calls exist.|
|**Dialog**|n/a| A Dialog is a single call.|
|**2FA/TFA**|Two-Factor Authentication|A login method requiring two types of verification, usually a password plus a code or approval from a device. This adds an extra security layer beyond just a password.|
|**Web Auth N / FIDO2**|Web Authentication / Fast Identity Online 2|A modern authentication standard that allows secure, passwordless logins using methods like security keys, biometrics, or device-based credentials. It reduces reliance on passwords and strengthens protection against phishing|
|**ASR+**|Answer Seizure Ratio+|ASR Plus is a proprietary ConnexCS technology that filters known failed, non-existent / working numbers between the customer and the terminating, or destination, carrier.|
|**AnyEdge**|n/a| It balances the traffic between the SIP servers and the customers.|
|**Spam Scout Scoring**|n/a| It blocks Spam calls based on the CLIs.|
|**IPQS**|IP Quality Score|Tt blocks the calls based on the spam score. The spam score is provided by a third party IPQS.|
|**PAID**|P-Asserted-ID|It is the caller’s address, taken from the “From” header, which may vary if the caller uses multiple identities.|
|**RTP Firewall**|n/a|It will bypass the media Firewall.|
|**STIR/Shaken**|**STIR**: Secure Telephone Identity Revisited. <br>**SHAKEN**: Signature-based Handling of Asserted Information Using toKENs</br>|required step for call origination providers to authenticate and validate caller identities.|
|**CIDR**|Classless Inter-Domain Routing|A method of allocating IP addresses and routing that replaces the older class-based system. It uses a suffix (e.g., /24) to show how many bits define the network portion of the address. For example, 192.168.1.0/24 represents 256 IP addresses from 192.168.1.0 to 192.168.1.255.|
|**STUN**| Session Traversal Utilities for NAT|Clients can use STUN to determine their external IP address and update SIP packets accordingly.|
|**ALG**|Application Layer Gateway|NAT devices can rewrite SIP packets to use external IP addresses, though this method is unreliable.|
|Far-end NAT Traversal|n/a| The system can detect and adjust for NAT by checking IP headers and assuming the correct external IP address.|
|**UAC**|User Agent Client|Acts as a client, typically used when sending calls out.|
|**UAS**|User Agent Server| Acts as a server, typically used when receiving calls.|
|**Tech Prefix**|n/a|a unique code assigned to each customer sharing an IP, enabling the switch to identify the route, correctly route calls, and distinguish between different rate cards.|
|**Dial String**|n/a| Restricts outgoing calls to numbers matching the defined dial string or pattern. If left blank, all calls are allowed|
|**Dial String Prefix Set**|n/a| A collection of commonly used prefixes (e.g., for the UK) that can be selected for customers, avoiding the need to enter each prefix individually.|
|**FTC DNC Report ANI Block (USA)**| |Blocks known spam numbers.|
| **DNO** | Do Not Originate| Blocks numbers that should never be used for outgoing calls, including spoofed, unassigned, unallocated, or inbound-only numbers. Helps prevent illegal, fraudulent, or malicious traffic.|
|**DNC**|Do Not Call| The customer won't be able to able to dial the numbers in the specified DNC list.|
|**TCPA Litigator DNC**|**TCPA**: Telephone Consumer Protection Act. <br>**DNC**: Do Not Call |Prevents calls to phone numbers reported as TCPA litigators, reducing the risk of legal action under the Telephone Consumer Protection Act (TCPA).|
|**SST**|SIP Session Timer|Prevents ghost or long-duration calls.|
|**Active RTCP Generation** |na|Controls RTCP packet generation|
|**RTP Codec**|na|Manages audio/video codecs|
|**Ptime(ms)**|Packetization Time|Sets how much audio/video data each RTP packet carries; higher values = longer chunks, lower = shorter.|
|**ASR+ (Low)**|Answer Seizure Ratio+ Low|Active on 30% of calls|
|**ASR?**||When ASR+ gets enabled on the provider card
|**ASR+?**||When ASR+ gets enabled on the provider card, only known connected calls pass-through specific providers
|**ASR++**||Only known connected calls pass-through|
|**Channel Breach**||This will identify instances when customers have exceeded your preset thresholds.|
|**404 Hits**||It indicates the number of times an unavailable URL on your website has been accessed.|
|**200 Hits**||It indicates the number of successful requests.|
|**No Matches**||It indicates the number of misses.|
|**FTC Block**||It indicates the number of calls blocked by the FTC Block.|
|**CPS Breach**||When a customer is passing more calls per second than permitted.|
|**KYC**|Know Your Customer|A process used to verify the identity of customers to prevent fraud, money laundering, or other illegal activities.|
|**Circuit Test**|n/a|For trouleshooting purposes.|
| **First Reply Timeout** |n/a|*Carrier initial response time* |
|**PDD Timeout**|Post-dial delay limit|Time for the carrier to respond to the call before trying another.|
|**Ring Timeout**||Time the call rings after carrier selection.|
|**Code Consistency**|| Identifies route quality and detect carriers who may misrepresent call outcomes.|
|**Failover**|n/a|Lists calls that failed with this carrier but succeeded with another, helping troubleshoot carrier issues and identify FAS.|
|**Reverse LCR**||First, it selects the most expensive route.|
|**Tier**|| Distributes calls across rate cards based on assigned weights.|
|**LCR Performance**||Chooses lowest-cost carriers, prioritizing those with better performance.|
|**Max Duration**|| Ends calls after a set time or via SIP Ping checks if the other side is still active.|
|**RTP Timeout**|| Ends calls if no RTP (audio) is detected for a set interval; not effective in direct RTP mode.|
|**CPS Spike Buffer**|| Spreads sudden spikes of calls over time by buffering, then releasing them at the set calls-per-second rate.|
|**Balance Disconnect**|| Checks balance every 60s and disconnects calls if balance plus debit limit drops below $0.|

CONTINUE FROM **GLOBAL**.
!!! info
    ```mermaid
    graph TD
    A[ACD Calculation] -->B[Correct Method]
    A[ACD Calculation] -->C[Incorrect Method]
    B -->D[Total Duration- answered calls /  Total Connected-answered calls]
    C -->E[Total Duration / Total Calls]
    ```

!!! Info
    | S.No | ASR Score     | Inference          |
    |------|---------------|--------------------|
    | 1.   | 60% and above | Exceptionally good |
    | 2.   | 40% to 50%    | Acceptable         |
    | 3.   | Less than 40% | Poor               |

!!! Note

    1. **ASR Calculation**
    Total Connected / Total Calls
    
    2. **Strict ASR (Removing NER) Calculation**
    Total Connected / Non-carrier failure

    3. **NER Calculation**
    Client Side Response Codes / Client + Server Codes
    4. **Channels** = CPS * ACD

!!! note "CLI vs PAID"
    **PAID** is the address of the person who placed the call. This is same as the address in the "From" header, but it may change if the caller uses several identities and needs to represent the one that applies to the destination.

    For example, consider a call from alice@sip.com to the PSTN, where the P-Asserted-Identity field can be changed to the "alice" phone number.

    **CLI** gives the calling phone's number to the party receiving the call. CLI is used to determine the caller or the place where a call originated.

    The P-Asserted-Identity contains the caller id information for the call on the INVITE SIP packet. P-asserted-ID header may contain either Tel URI or SIP URI. For CLI identification purposes multiple P-Asserted-ID headers should not be used unless there is a P-asserted-ID containing Tel URI and/or a P-asserted-ID containing SIP URI and user=phone. In this case both type of URIs must contain the same phone number. If none of the above exist and contain a valid E.164 number, CLI will not be considered valid.

!!! note "Missed Call Traffic"
    Missed Call Traffic is placing calls which DONT connect and / or have a VERY SHORT duration.
    It's not advisable not to have large volumes of Missed Call Traffic.
  