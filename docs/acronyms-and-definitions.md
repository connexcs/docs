# Acronyms and Definitions
ConnexCS uses standard telephony terminology in our Control Panel and documentation. Below you will find definitions for the most relevant telephony terms, along with some general networking terms, and ConnexCS specific terms. 

|Term|Definition|Explanation|
|---|---|---|
|**ACD**|*Average Call Duration*|The average length of calls. ACD can be a marker of how efficient phone systems are at solving problems quickly.|
|**ALOC**|*Average Length of Call*|See ACD.|
|**ASR**|*Answer-Seisure Ratio*|The call answer rates as a percentage (connected calls divided by total calls).|  
|**Channel**|n/a|A currently live call on the system. |
|**CLI**|*Calling Line Identification*|Identifies the caller's telephone number, which is often then displayed to the call recipient in the form of Caller-ID.|
|**CPS**|*Calls Per Second*|The volume of calls, usually referring to how many calls can be handled per second, rather than how many a system can receive.|   
|**CDR**|*Call Detail Records*|In-depth information about calls that pass through a VoIP exchange.  CDRs are generally a source data for billing and consumer tracking.|
|**Codec**|*Coder-Decoder*|Encodes and decodes data between analog and digital signals, usually with some form of compression.|
|**DID**|*Direct Inward Dial*|By assigning a public number to an internal location, outside callers can reach a destination without going through a PBX.|
|**DTMF**|*Dual-Tone Multi-Frequency*|A signaling system which connects points in the telephony network, typically between telephone equipment, communications devices, and switching centers. See [Wikipedia DTMF]() for more details.|
|**FAS**|*False Answer Supervision*|A type of billing fraud, a call is billed for a length of time which was longer than the actual call duration.|
|**Flow Speed**|n/a|The number of allowed calls each second, ConnexCS uses this term and **Calls Per Second (CPS)** interchangeably.|
|**FQDN**|*Fully Qualified Domain Name*|A domain name, which also includes a hostname, that points to or references an IP. Ex: sip.connexcs.com. |
|**IVR**|*Interactive Voice Response*|Sometimes known as a "phone tree", this allows callers to select different options which connect them to different end-points (ex: extensions or users) in your system.|
|**Jitter**|n/a|This refers to the variation in time between when packets are received. In a VoIP system, Jitter may explain voice quality issues such as robotic sounding voices, static, or choppy audio.|
|**LCR**|*Least-Cost Route*|The practice of managing traffic in a VoIP network in the least expensive way. 'Expensive' can relate to the actual cost, or it can abstractly refer to time and effort.|
|**LRN**|*Location Routing Number*|[Wikipedia LRN](https://en.wikipedia.org/wiki/Location_routing_number). A number portability system used to route NPA-NXX calls and allow the receiving carrier to determine the price of the call, not the destination number.|
|**MOS**|*Mean Opinion Score*|This score can indicate the general call quality in a system or for a carrier or customer. |
|**NAT**|*Network Address Translation*|This is a networking practice which allows private IPs in a define network share a public IP which can route over the internet, helping to conserve a dwindling supply of public IPs.|
|**NER**|*Network Effectiveness Ratio*|Measures a network's ability to deliver phone calls independent of user actions like a terminal reject.|   
|**NPA-NXX**|*Numbering Plan Area-1st 3 digits*|The number is usually followed by four more identifying digits, making it NPA-NXX-XXXX.  The 'N' in NXX is different because it represents digits from 2-9 instead of 0-9, as it is with 'X'. See [USA Routing](https://docs.connexcs.com/routing-usa/) for further explanation. |  
|**P-Asserted-ID**|n/a|A header field in the SIP INVITE which contains the identity of the caller (typically used for caller-ID).|
|**PDD**|*Post-Dial Delay*|The time between the last digit dialed and a ringer or equal action on the other end. This is useful to check to determine if a carrier is slow to connect a call.| 
|**PSTN**|*Public Switched Telephone Network*|A broad term that encompasses most telephone networks, including telephone lines, mobile networks, and communication satellites.| 
|**RTP**|*Real-time Transfer Protocol*|A network protocol used to move media across IP-based systems.|   
|**SIP**|*Session Initiation Protocol*|A TCP/IP-based network protocol used in VoIP telephony to establish connections for telephone calls.| 
|**SIP Trace**|n/a|A log of SIP signalling messages, this is an essential tool for troubleshooting registration, call completion, and other issues.|
|**Transcoding**|n/a|Converts file from one format to another. In ConnexCS, this refers to the process of converting audio from one codec to another, typically in the case of low-bandwidth situations.|
