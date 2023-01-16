# Federal Communications Commission Regulations on Secure Telephone Identity Revisited / SHAKEN

## Illegal Robocalling

In recent years, **Illegal Robocalling** is one of the most problematic activities for telecommunication providers. In these calls, callers mask their identity or spoof the number of a legitimate entity. With 4.6 billion robocalls a month in the U.S. alone, this activity impacts everyone in different ways:

1. Estimated value of Lost time from unwanted Robocalls for customers and consumers is around $3 billion/year. It doesn't include losses related to fraud.
2. Service providers are handling and manage constant service calls from customers. They also handle extra traffic on the networks.
3. Businesses can't reach customers since no one wants to answer the phone.

To address this issue, the U.S. FCC (Federal Communications Commission) has mandated to block the calls that aren't registered with a tracking database.

!!! note "Legitimate vs. Illegal Robocalls"
    Robocalling isn't considered illegal or necessarily bad.

    Legitimate examples of a robocall would be from:
    + Telephone campaigns (telemarketing or political)
    + Public service (from your child's school)
    + Emergency announcements (Amber Alert or Weather Advisory).
    
    When the technology of robocalling uses a spoofed number or otherwise illegal methods to reach end users, they're considered illegal. For example, bypassing Do Not Call lists.
    
    These calls are typically associated with some sort of added fraud or scam.

## TRACED Act

In December 2019, the U.S. Congress passed the TRACED Act. It provides the FCC "new tools to fight unwanted and often illegal robocalls. The top consumer complaint reported to the FCC annually" (from [**TRACED Act Implementation**](https://www.fcc.gov/TRACEDAct)).

This allowed the FCC to place requirements on Voice Providers to execute call authentication technology. It also gave the FCC authority to follow up with enforcement.

In March 2020, the FCC mandated the use of STIR/SHAKEN for this purpose.

Several details related to TRACED Act are important to understand:

+ Consider anyone providing voice service to an end user as a Service Provider which requires following all rules of the Act.
+ Service Providers must register with the new FCC database for robocall mitigation. It certifies that they have implemented either Robocall Mitigation or SHAKEN.
+ Smaller operators (<100,000 lines) can choose either the Robocall Mitigation or SHAKEN option.
+ Everyone holds the responsibility to help end robocalls.

    "Service Providers must police their networks."

    They can't execute SHAKEN alone and take responsibility for calls originating on their network.

The FCC has already begun sending cease and desist orders, and fines to operators.

Providers can submit the certification to the FCC [**Robocall Mitigation Database**](https://fccprod.servicenowservices.com/rmd?id=rmd_welcome) within 90 days. It's after the deadline for robocall mitigation program certifications (June 2021).

Service Providers MUST BLOCK all calls from Service Providers that aren't in the FCC database.

## Secure Telephone Identity Revisited

**STIR:** **S**ecure **T**elephone **I**dentity **R**evisited: The VoIP service provider adds an encrypted certificate to the SIP header of a call. It does so  after checking the number against known numbers for that customer.

**Attestation Values** (as defined in ATIS-1000074 section 5.2.3) define the level of trust that's associated with a call.

Providers set the Attestation Values and then the call gets a Secure Telephone Identity (STI) Authentication Token assigned.

Call analytics engines use the data in this token to assess the legitimacy of a call.

The 3 Attestation Values are:

+ **A:** Shows a trusted relationship between the Service Provider. The calling number and its user. This is the service provider level of trust that customers will expect)
+ **B:** Shows a trusted relationship with the customer. The Service Provider knows the customer at the other end of the trunk, but not specific numbers.
+ **C:** Show no trust. Intermediate or wholesale traffic with no real knowledge of where calls are originating.

!!! warning "Service Provider Accountability"
    Service Providers should accurately define their Attestation Values. Certifying a call with trust means you take on some responsibility for that traffic.

## SHAKEN (Signature-based Handling of Asserted Information)

**SHAKEN using toKENs:** This instructs providers on how to execute STIR to provide consumer protection.

### SHAKEN Policy Administrator

The **Secure Telephone Identity Governance Authority (STI-GA)**, [**launched by ATIS (Alliance for
Telecommunications Industry Solutions)**](https://www.atis.org/press-releases/secure-telephone-identity-governance-authority-launched-in-major-industry-effort-to-combat-unwanted-robocalling/) in 2018, defines SHAKEN policies.

The **SHAKEN Policy Administrator (STI-PA)** manages policy enforcement and such regulations.

![alt text][pa]
(*Image Credit:TransNexus*)

The **STI-PA** ([**iconnectiv**](https://iconectiv.com/) is in the U.S.) inspects which telephone Service Providers you can trust, as only certified carriers can sign calls.

SHAKEN then uses **PKI (Public Key Infrastructure)** for the authentication of calls. Only certified **Certificate Authorities (CAs)** can provide SHAKEN certs.

Service Provider must have **Service Provider Code (SPC)** token from the **STI-PA** to get a certificate.

**CA** can only provide certificates to a Service Provider that has a valid **SPC**.

!!! Warning
    Once you receive the certs, you can still revoke them if Service Providers misbehave.

## Voice Service Providers implementation

From the [**iconnectiv Secure Telephone Identity (STI) Service
Provider Methods and Procedures**](https://authenticate.iconectiv.com/sites/microsites/files/2021-01/STI-PA-US-METHODPROCSP-001%20Issue%205%20Rel%201-5%20-%20Onboarding%20Guide%20for%20SP.pdf), before registering, make sure you have:

1. Your **Operating Company Number (OCN)**. VoIP providers can register with [**NECA for an OCN**](https://www.neca.org/business-solutions/company-codes), even as an IP Enabled Service Provider (don't need to be a LEC).

    Use this to verify if the SP has access to numbers from NANPA and NPA pools.

2. Current **499-A form** on file with the FCC (filed with the [**Universal Service Administrative Company (USAC)**](https://www.usac.org/service-providers/making-payments/how-to-pay/).

    You need to provide a copy of this form during the registration process. Use the Annual Revenues listed here to assess fees.

3. A certification filed in the [**FCC Robocall Mitigation Database**](https://fccprod.servicenowservices.com/rmd?id=rmd_welcome).

Complete the [**Service Provider SHAKEN STI-PA Registration**](https://authenticate.iconectiv.com/service-provider-authenticate) after you have completed the preceding three procedures.

### Robocall Mitigation program

For Small / TDM operators that can't execute SHAKEN, **Robocall Mitigation** is the alternative.

FCC doesn't have any specific instructions or recommendations, but they have provided some guidelines:

+ "A robocall mitigation program is enough if it includes detailed practices. You can use these practices and expect reductions in illegal robocalls."
+ You must actually execute it on your network.
+ It must be public and transparent.
+ Providers must cooperate with the [**US Telecom Traceback Group**](https://www.ustelecom.org/the-industry-traceback-group-itg/) to produce requested Call Detail Records on time.

### SHAKEN for Time Division Multiplexing

**TDM (Time Division Multiplexing)** is no longer commonly found at the edge of telephony networks. But is still in use in the core of telephony networks.

If not accounted for, then you can lose all the meticulously gathered and certified SIP SHAKEN info when it hits TDM segments.

The TRACED Act specified that Service Providers must "no later than June 30, 2021, take "reasonable measures" to execute an effective Caller-ID authentication framework in the non-IP portions of their networks."

In response to this, the **Out-of-Band PASSporT Transmission Involving TDM Networks** was developed as the industry standard "reasonable measure."

As defined by the [**ATIS non-IP Call Authentication Task Force**](https://www.atis.org/committees-forums/ptsc/non-ip-call-authentication-task-force/), the PASSport uses out-of-band signaling. Its used to extend SHAKEN through TDM networks.

## FAQ

**Question:** What are my options if I am a smaller provider?

For providers with more than 100k lines, you *must* execute SHAKEN:

+ SHAKEN for SIP
+ Robocall mitigation for TDM interconnects

For providers with less than 100k lines, you have options:

+ SHAKEN or Robocall Mitigation for SIP
+ Robocall mitigation for TDM interconnects

**Question:** How does this impact calls originating from outside the US?

This only applies to US calling numbers, even if the carrier is outside of the US. If calls are originating outside the US with non-US numbers, none of this applies. Its required that US carriers drop calls received from US numbers that aren't verified for SHAKEN.

**Question:** Does ConnexCS provide SHAKEN?

ConnexCS will perform:

+ Certificate Signing of calls (you still need to get the certificate and install it in our Control Panel; instructions found [**here**](/setup/information/stir-shaken/)).
+ Attestation checks for inbound calls to Direct Inward Dial.
+ Attestation values will soon be available in the Control Panel for our customers. You can configure it per route.

**Question:** Does ConnexCS provide Robocall Mitigation?

Presently, we're researching an effective solution.

[pa]: /misc/img/trust-triangle.png "Trust Triangle"
