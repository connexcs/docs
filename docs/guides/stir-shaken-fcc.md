# FCC Reglations Regarding Robocalling (TRACED Act)

## Illegal Robocalling
Illegal Robocalling has emerged as one of the most problematic activities for telecom providers in recent years. With roughly 4.6 billion robocalls a month in the US alone, somehwere around 2000 unwanted calls per second, this activity impacts everyone in different ways:

1. Customers and consumers lost time as a result of Robocalls is estimated to be valued around $3 billion /year (this does not include losses related to fraud). 
2. Service providers are handling and managing constant service calls from customer, along with the additional traffic on the networks. 
3. Buisness can't reach customers, since no one wants to answer the phone.

To address this issue, the US FCC (Federal Communications Commision) has mandated that calls not registered with a tracking database will need to be blocked. 

## TRACED Act overview and Orders
In December 2019, the U.S. Congress passed the TRACED Act, giving the FCC "new tools to fight unwanted, and often illegal, robocalls, the top consumer complaint reported to the FCC annually" (from https://www.fcc.gov/TRACEDAct). This allowed the FCC to place requirements on Voice Providers to implement call authentication technology, and also gave the FCC authority to follow up with enforcements. In March of 2020, the FCC mandated that STIR/SHAKEN be used for this purpose. 

There are several details related to TRACED Act that are important to understand:

+ *Anyone* providing voice service to an end user is considered a Service Provider, and is required to follow all rules of the Act
+ Service Providers must register with the new FCC database for robocall mitigation, certifiying that they have implemented either Robocall Mitigation or SHAKEN
+ Smaller operators (<100,000 lines) can chose either Robocall Mitigation or SHAKEN option
+ Everyone is responsible for helping to eliminate robocalls. "Service Providers must police their networks": they can't just implement SHAKEN alone, they must be responsible for calls originating on their network. 

FCC has already begun sending cease and desist orders, and giving fines to operators. Providers can submit certification to the FCC at https://fccprod.servicenowservices.com/rmd?id=rmd_welcome. 90 days after thde deadline for robocall mitigation program certifications, service providers MUST BLOCK all calls from service providers that are not in the FCC database. 

## Robocall Mitigation program
For small operators or TDM operators that cant implement SHAKEN, this is the alternattive. While there are no specific instructions or recomendations from the FCC, they have provided some guidelines:

+ "A robocall mitigation program is sufficient if it includes detailed practices that can reasonably be expected to significantly reduce the origination of ilegal robocalls".
+ It must actually be implemented on your network
+ It must be public and transparent
+ Providers must cooperate with the US Telecom Traceback Group (https://www.ustelecom.org/the-industry-traceback-group-itg/) in a timely manner to produce requested CDRs

## SHAKEN Policy Administrator
The **Secure Telephone Identity Governance Authority (STI-GA)**, [**launched by ATIS**](https://www.atis.org/press-releases/secure-telephone-identity-governance-authority-launched-in-major-industry-effort-to-combat-unwanted-robocalling/) in 2018, defines SHAKEN policies. These policies are run by the SHAKEN **Policy Adinistrator (STI-PA)** which is tasked with policy enforcement.
    
The **STI-PA** ([**iconnectiv**](https://iconectiv.com/) is in the U.S.) vets which telephone service providers are considered trusted as only certified carriers can sign calls. SHAKEN then uses **PKI (Public Key Infrastructure)** for authentication of calls. Only certified **Certificate Authorities (CAs)** can provide SHAKEN certs. Service Provider must have **Service Provider Code (SPC)** token from the **STI-PA** to get a certificate, and a **CA** can only provide certificates to a Service Provider that has a valid **SPC**. 

!!! Warning
   Once certs have been provided, they can still be revoked if Service Providers misbehave. 

