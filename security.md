# Table of Contents

* [Table of Contents](#table-of-contents)
* [Security](#security)
  * [SSL Cerficiates](#ssl-certificates)
  * [Inter-zone Communication](#inter-zone-communication)
  * [Logins](#logins)
    * [Passwords](#passwords)
    * [2FA / TFA](#2fa-tfa)
    * [Server Keys](#server-keys)
  * [Exceptions](#exceptions)
    * [IMCP Pings](#imcp-pings)
    * [SIP / RTP Firewall Block on Default](#sip-rtp-firewall-block-on-default)
    * [IDS / IPS](#ids-ips)
  * [Data Usage](#data-usage)

# Security

Security is a topic that we take very seriously and we have utilized many best practices, reliable proven technology and latest ideas to keep everything safe.

We have compiled a top-level abstract list on how we do some things. This document is *purposely* kept brief in order to limit the exposure of our underlying systems, but please feel free to contact us if you have any specific questions about anything here.

## SSL Certificates
For all our HTTPS traffic we use short-lived SHA256bit certificates with 2048bit keys. Reject downgrade attacks such as SSL2,3. We use HSTS, Perfect Forward Secrecy, and OCSP Stapling. You are welcome to see our servers SSL test results here:
https://www.ssllabs.com/ssltest/analyze.html?d=app.connexcs.com

### Inter-zone Communication
All internal traffic travelling between zones traverses our mesh VPN protected by 4096 bit keys and managed by our internal CA Servers.

## Logins
Our system uses an expodentially increasing delay on failed attempts and centralised reporting.

### Passwords
All passwords are hashed in our system. The ones required for HTTP login are encrypted by Argon2, the winner of the Password Hashing Competition (PHC) https://github.com/P-H-C/phc-winner-argon2

On every hash we use:
- Random Per Password Salt (With email hashed seasoning)
- Off-database site-pepper
- High Time, Memory Cost, Parallelism Cost

### 2FA / TFA
All admins are required to use Two-factor authentication when signing in to the system. Two Factor Authentication is also avaialble for any user accounts using  RFC 6238 (https://tools.ietf.org/html/rfc6238) style TOTP (Time Based One-time Passwords) using applications such as Google Authenticator or Microsoft Authenticator.

### Server Keys
Anyone who has direct access to any servers is required to use SSH Keys. All systems where keys are not possible, long multi-symbol passwords are used.

## Exceptions
We **DON'T** consider the following items insecure. We completely understand the consequences of enabling these systems but we believe that their benefits outweigh the security implications.

This does **NOT** mean that we don't monitor activity on either of these, nor does it mean that we don't have automatic reactive systems in place to help ensure uptime in the event of attacks.

### IMCP Pings
IMCP (Internet Message Control Protocol) Ping messages (e.g ping www.connexcs.com). There once was a time when IMCP Ping attacks were common, this was related to the packet size vs available bandwidth. Although IMCP Ping attacks may still happen, it is far more useful to enable IMCP replies to correctly establish the status of a server.

### SIP / RTP Firewall Block on Default.
Our SIP Servers only run SIP, nothing else. Our RTP Servers run RTP Nothing else.

This means that you **WILL** see unauthorized traffic hitting your switch, however you will note that the call was blocked because of authentication reasons. This is normal as it is important to see failed traffic as it may be misconfiguration authentication.

5060 is not firewalled, nor are any of our RTP Ports on our RTP Servers.

## IDS / IPS
We have application level logic that identifies malicious activity which will escalate issues upwards through to our IDS systems which will in return feedback firewall rules.

# Data Usage
Connex Carrier Services Worldwide LTD is an independent company, not owned by a parent company or affiliates. All data is retained in ConnexCS on ConnexCS servers and is never passed to any 3rd parties. All staff have to abide by company non-disclosure policies and it is clear that any data breach would be treated with the utmost severity.
