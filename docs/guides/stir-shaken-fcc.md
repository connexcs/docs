# FCC Regulations Regarding Robocalling (TRACED Act)

## Illegal Robocalling
**Illegal Robocalling** has emerged as one of the most problematic activities for telecom providers in recent years. With 4.6 billion robocalls a month in the U.S. alone, roughly 2000 unwanted calls per second, this activity impacts everyone in different ways:

1. Lost time, from unwanted Robocalls, for customers and consumers is estimated to be valued around $3 billion/year (not including losses related to fraud). 
2. Service providers are handling and managing constant service calls from customer, along with the additional traffic on the networks. 
3. Businesses can't reach customers, since no one wants to answer the phone.

To address this issue, the U.S. FCC (Federal Communications Commission) has mandated that calls not registered with a tracking database will need to be blocked. 

## TRACED Act
In December 2019, the U.S. Congress passed the TRACED Act, giving the FCC "new tools to fight unwanted, and often illegal, robocalls, the top consumer complaint reported to the FCC annually" (from [**TRACED Act Implementation**](https://www.fcc.gov/TRACEDAct)). This allowed the FCC to place requirements on Voice Providers to implement call authentication technology, and also gave the FCC authority to follow up with enforcements. In March of 2020, the FCC mandated that STIR/SHAKEN be used for this purpose. 

Several details related to TRACED Act are important to understand:

+ *Anyone* providing voice service to an end user is considered a Service Provider, and is required to follow all rules of the Act.
+ Service Providers must register with the new FCC database for robocall mitigation, certifying that they have implemented either Robocall Mitigation or SHAKEN
+ Smaller operators (<100,000 lines) can choose either Robocall Mitigation or SHAKEN option
+ Everyone is responsible for helping to eliminate robocalls. "Service Providers must police their networks". They can't just implement SHAKEN alone, they must be responsible for calls originating on their network. 

The FCC has already begun sending cease and desist orders, and fines to operators. Providers can submit certification to the FCC [**Robocall Mitigation Database**](https://fccprod.servicenowservices.com/rmd?id=rmd_welcome). 90 days after the deadline for robocall mitigation program certifications (June 2021), Service Providers MUST BLOCK all calls from Service Providers that are not in the FCC database. 

## SHAKEN Policy Administrator (PA)
The **Secure Telephone Identity Governance Authority (STI-GA)**, [**launched by ATIS (Alliance for
Telecommunications Industry Solutions)**](https://www.atis.org/press-releases/secure-telephone-identity-governance-authority-launched-in-major-industry-effort-to-combat-unwanted-robocalling/) in 2018, defines SHAKEN policies. These policies are run by the SHAKEN **Policy Administrator (STI-PA)** which is tasked with policy enforcement.

![alt text][pa] 
(*Image Credit:TransNexus*)

The **STI-PA** ([**iconnectiv**](https://iconectiv.com/) is in the U.S.) vets which telephone Service Providers are considered trusted as only certified carriers can sign calls. SHAKEN then uses **PKI (Public Key Infrastructure)** for authentication of calls. Only certified **Certificate Authorities (CAs)** can provide SHAKEN certs. Service Provider must have **Service Provider Code (SPC)** token from the **STI-PA** to get a certificate, and a **CA** can only provide certificates to a Service Provider that has a valid **SPC**. 

!!! Warning
    Once certs have been provided, they can still be revoked if Service Providers misbehave. 

## Requirements for Voice Service Providers
From the **iconnectiv ["Secure Telephone Identity (STI) Service
Provider Methods and Procedures"**](https://authenticate.iconectiv.com/sites/microsites/files/2021-01/STI-PA-US-METHODPROCSP-001%20Issue%205%20Rel%201-5%20-%20Onboarding%20Guide%20for%20SP.pdf), prior to registering, make sure you have:

1. Your **Operating Company Number (OCN)**. VoIP providers can register with [**NECA for an OCN**](https://www.neca.org/business-solutions/company-codes), even as an IP Enabled Service Provider (do not need to be a LEC). This is used to verify the SP has access to numbers from NANPA and NPA pools.  
2. Current **499-A form** on file with the FCC (filed with the [**Universal Service Administrative Company (USAC)**](https://www.usac.org/service-providers/making-payments/how-to-pay/). You will need to provide a copy of this form during the registration process. Annual Revenues listed here will be used to assess fees.
3. A certification filed in the [**FCC Robocall Mitigation Database**](https://fccprod.servicenowservices.com/rmd?id=rmd_welcome). 

Once the above 3 are complete, it is time to complete [**Service Provider SHAKEN STI-PA Registration**](https://authenticate.iconectiv.com/service-provider-authenticate). 

## Robocall Mitigation program
For small operators or TDM operators that can't implement SHAKEN, **Robocall Mitigation** is the alternative. While there are no specific instructions or recommendations from the FCC, they have provided some guidelines:

+ "A robocall mitigation program is sufficient if it includes detailed practices that can reasonably be expected to significantly reduce the origination of illegal robocalls".
+ It must actually be implemented on your network.
+ It must be public and transparent.
+ Providers must cooperate with the [**US Telecom Traceback Group**](https://www.ustelecom.org/the-industry-traceback-group-itg/) in a timely manner to produce requested CDRs.


## Attestation Values
SHAKEN **Attestation Values** (as defined in ATIS-1000074 section 5.2.3) define the level of trust that is associated with a call. Attestation Values are set by providers and then the call gets an STI Authentication Token assigned. The information in this token can be used by call analytics engines to determine legitimacy of call. The 3 Attestation Values are:

* **A**: Indicates a trusted relationship between the Service Provider and the calling number and its user (this is service provider level of trust that customers will expect)
* **B**: Indicates a trusted relationship with the customer, essentially the Service Provider knows the customer at the other end of the trunk, but not the specific numbers. 
* **C**: Indicates no trust, typically intermediate/wholesale traffic with no real knowledge of where calls are originating.

!!! warning "Service Provider Accountability"
    Service Providers are expected to accurately define their Attestation Values. Certifying a call with trust means you take on some responsibility for that traffic. 

## SHAKEN for TDM
**TDM (Time Division Multiplexing** is no longer commonly found at the edge of telephony networks but is still very much in use in the core of telephony networks. If not accounted for, then all the meticulously gather and certified SIP SHAKEN info will be lost when it hits TDM segments. The TRACED Act specified that Service Providers must "no later than June 30 2021, take "reasonable measures" to implement an effective Caller-ID authentication framework in the non-IP portions of the their networks". In response to this, the **Out-of-Band PASSporT Transmission Involving TDM Networks** was developed as the industry standard "reasonable measure". Defined by the [**ATIS non-IP Call Authentication Task Force**](https://www.atis.org/committees-forums/ptsc/non-ip-call-authentication-task-force/), the **PASSport** uses out-of-band signaling to extend SHAKEN through TDM networks. 



## FAQ

Question: What are my options if I am a smaller provider?

For providers with more than 100k lines, you *must* implement SHAKEN:

+ SHAKEN for SIP
+ Robocall mitigation for TDM interconnects

For providers with less than 100k lines, you have options:

+ SHAKEN or Robocall Mitigation for SIP 
+ Robocall mitigation for TDM interconnects

Question: How does this impact calls originating from outside the US? 

This only applies to US calling numbers, even if the carrier is outside the US. If calls are originating outside the US with non-US numbers, none of this applies. US carriers are required to drop calls received from US numbers that are not verified for SHAKEN.

Question: Does ConnexCS provide SHAKEN?

ConnexCS will perform:

+ Certificate Signing of calls (you still need to acquire the certificate and install it in our Control Panel, instructions found [**here**](/setup/information/stir-shaken/)).
+ Attestation checks for inbound calls to DIDs.
+ Attestation values will eventually be available in the Control Panel for our customers to set on a per route basis.

Question: Does ConnexCS provide Robocall Mitigation?

We are in the process of researching an effective solution. 




[pa]: /misc/img/trust-triangle.png "Trust Triangle"
