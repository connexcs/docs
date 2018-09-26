# Table of Contents

- [Table of Contents](#table-of-contents)
- [Security](#security)
  - [SSL Certificates](#ssl-certificates)
    - [Inter-zone Communication](#inter-zone-communication)
  - [Logins](#logins)
    - [Passwords](#passwords)
    - [2FA / TFA](#2fa--tfa)
    - [Server Keys](#server-keys)
  - [Exceptions](#exceptions)
    - [IMCP Pings](#imcp-pings)
    - [SIP / RTP Firewall Block on Default.](#sip--rtp-firewall-block-on-default)
  - [IDS / IPS](#ids--ips)
- [Data Usage](#data-usage)
  - [Deploying SSL Certificates](#deploying-ssl-certificates)

# Security

We take **Security** seriously at ConnexCS, emphasizing the industry's best practices in all our policies and procedures. We use proven technology and the latest ideas to keep your systems safe from threats both external and internal.

Below, we have compiled a top-level abstract list on how we secure our systems. The document is kept brief in to limit exposure to our underlying systems in a public forum, but feel free to contact with specific questions.

## SSL Certificates
Our HTTPS traffic uses short-lived **SHA256bit** certificates with 2048bit keys, rejecting downgrade attacks like **SSL2,3**. We use **HSTS, Perfect Forward Secrecy,** and **OCSP Stapling**. You are welcome to see our servers SSL test results here:
https://www.ssllabs.com/ssltest/analyze.html?d=app.connexcs.com

### Inter-zone Communication
All internal traffic travelling between zones traverses our mesh VPN, protected by 4096-bit keys and managed by internal CA Servers.

## Logins
Our system uses an exponentially increasing delay on failed attempts and centralised reporting.

### Passwords
All passwords are hashed in our system. The ones required for HTTP login are encrypted by Argon2, the winner of the Password Hashing Competition (PHC) https://github.com/P-H-C/phc-winner-argon2

On every hash we use:
- Random Per Password Salt (With email hashed seasoning)
- Off-database site-pepper
- High Time, Memory Cost, Parallelism Cost

### 2FA / TFA
All admins are required to use two-factor authentication when signing into the system. Two-Factor Authentication is also available for any user accounts using RFC 6238 (https://tools.ietf.org/html/rfc6238)-style TOTP (Time Based One-time Passwords), using applications such as Google Authenticator or Microsoft Authenticator.

### Server Keys
Any user with direct access to any servers is required to use SSH Keys. In all systems where keys are not possible, long multi-symbol passwords are used.

## Exceptions
We **do not** consider the following items insecure. We completely understand the consequences of enabling these systems, but we believe their benefits outweigh the security implications.

This **does not** mean we don't monitor activity on either of these, nor does it mean that we don't have automatically reactive systems to ensure uptime in the event of an attack.

### IMCP Pings
IMCP (Internet Message Control Protocol) pings messages (e.g ping www.connexcs.com). IMCP Ping attacks were once common, related to the packet size versus available bandwidth. They still happen, but it is more useful to enable IMCP replies to correctly establish the status of a server.

### SIP / RTP Firewall Block on Default.
Our SIP Servers only run SIP, and nothing else. Our RTP Servers run RTP, and nothing else. 5060 is not firewalled, nor are any of our RTP Ports on our RTP Servers.

This means that you will most likely see unauthorized traffic hitting your switch, but you will also see unauthorized calls being blocked for failing authentication. This is normal, as it is still important to see failed traffic to make sure the authentication isn't blocking authorized callers.

## IDS / IPS
We have application-level logic that identifies malicious activity, which will escalate issues to our IDS systems, which will enforce feedback firewall rules in return.

# Data Usage
Connex Carrier Services Worldwide, LTD is an independent company. All data is retained on ConnexCS servers, and **never** passed to third parties. All staff are required to abide by non-disclosure policies that protect user data, and it is made clear any data breach would be treated with severity.

## Deploying SSL Certificates 

The SSL certificate can be deployed on your customer portal with a single click.

1. Click  **Setup** > **Integrations**.
2. Click  **Domains**.
3. Click **Deploy Certificate**.


