# Security

ConnexCS considers **Security** its top priority. We incorporate industry best practices into all our policies and procedures.

We use proven technology and the latest ideas to keep your systems safe from external and internal threats.

Below, we've compiled a top-level, abstract list of how we secure our systems.

The document is brief on limiting exposure to our underlying systems in a public forum.

**Feel free to contact us with specific questions.**

## Secure Sockets Layer Certificates

Our HTTPS traffic uses short-lived **SHA256bit** certificates with 2048bit keys. It rejects downgrade attacks like **SSL2,3**.

We use **HSTS (HTTP Strict Transport Security), Perfect Forward Secrecy,** and **OCSP Stapling** (Online Certificate Status Protocol).

You can see our server's SSL test results [**here**](https://www.ssllabs.com/ssltest/analyze.html?d=app.connexcs.com).

### Inter-zone Communication

All internal traffic travelling between zones traverses our mesh Virtual private network (VPN). It's protected by 4096-bit keys and managed by internal CA Servers.

## Logins

Our system uses an exponentially increasing delay on failed attempts and centralised reporting.

### Passwords

Our system hashes every password. Argon2 encrypts the ones needed for HTTP login. It's the winner of the [**Password Hashing Competition (PHC)**](https://github.com/P-H-C/phc-winner-argon2).

On every hash we use:

- Random Per Password Salt (With email hashed seasoning).
- Off-database site-pepper.
- High Time, Memory Cost, Parallelism Cost.

### Two-factor Authentication

All admins must use two-factor authentication (2FA / TFA) when signing into the system.

Two-Factor Authentication is also available for any user accounts using [**RFC 6238-style TOTP (Time Based One-time Passwords)**](https://tools.ietf.org/html/rfc6238).

Using applications such as Google Authenticator or Microsoft Authenticator.

### Server Keys

Using SSH Keys is necessary for any user with direct access to any servers.

In all systems where keys aren't possible, you must use long, multi-symbol passwords.

### Auto Detect & Block Hack Attempts

At ConnexCS, our Auto Detect & Block Hack Attempts feature enhances security by automatically detecting and preventing unauthorized access.

It identifies multiple failed login attempts, blocking further attempts from the source. This proactive defense mechanism safeguards sensitive data and ensures the integrity of your systems, providing robust protection against potential threats.

## Exceptions

We **don't** consider the following items insecure.

We understand the consequences of enabling these systems. But we believe their benefits outweigh the security implications.

This doesn't mean we don't observe activity on either of these. Also, we've automatically reactive systems to ensure uptime in the event of an attack.

### Internet Control Message Protocol Pings

ICMP (Internet Control Message Protocol) pings messages (for example, ping www.connexcs.com).

ICMP Pings informs if the destination is online and working and it turns down all the problems in the subsequent layers.

We (ConnexCS) don't block ICMP, because it's required to enable network analysis.

ICMP Ping attacks were once common (packet size versus available bandwidth). They still happen, but it's more useful to enable ICMP replies to efficiently establish the status of a server.

#### Using a TraceRoute / MTR

An easy command-line application for tracking the route an IP packet takes over one or more networks is **TraceRoute**. The main function of TraceRoute is network diagnostics.
TraceRoute provides information about internal traffic flows and reveals any erratic or inefficient routes. 

When used externally, TraceRoute may show the route taken by a packet as it travels over several networks. In some situations, even the various cities or geographical areas that the traffic is travelling through.

TraceRoute is used to see the routes, whether they are changing, and to get an idea of the latency.

**My TraceRoute (MTR)** combines TraceRoute with ping. It's another popular technique for gauging network connectivity and performance.

MTR displays continuously updated data regarding the latency, packet loss, and hops along the network path. This makes it easier to diagnose network problems since it gives you a real-time view of what's occurring along the way. It includes packet loss and jitter as well.

Similar to TraceRoute, MTR finds the network path and then periodically sends packets to continue gathering data. Then it offers an updated picture of the network's health and performance.

!!! note "Don't use MTR for packet loss"
    Since the pings aren't reliable from transit providers / intermediate hops. Only end to end pings are reliable in MTR.

    Use MTR to get an initial record of the packet loss. As MTR reports  packet loss on intermediary pings, it doesn't mean that there is extreme packet loss on the route.

!!! note "TraceRoute vs MTR"
    A **TraceRoute** is suitable if you only want to identify the routers your packet travels through.

    **MTR** also includes information on packet loss as well.

### Session Initiation Protocol / Real-time Transport Protocol Firewall Block on Default

Our Session Initiation Protocol (SIP) Servers only run SIP and nothing else.

Our Real-time Transport Protocol (RTP) Servers run RTP and nothing else.

5060 isn't fire-walled, nor are any of our RTP Ports on our RTP Servers.

This means that you will most likely see unauthorized traffic hitting your switch. Also, you will observe unauthorized calls getting blocked for failing authentication. This is normal, as it's still important to see failed traffic. It's done to make sure the authentication isn't blocking authorized callers.

## Intrusion Detection System / Intrusion Prevention System

We've application-level logic that identifies malicious activity.

It helps escalate issues with our Intrusion Detection System (IDS) systems.

It will further enforce feedback firewall rules in return.

## Data Usage

**Connex Carrier Services Worldwide, LTD** is an independent company.

ConnexCS servers retain All data and are never passed on third parties.

All employees must adhere to non-disclosure agreements that protect user data.

Also, it's made clear that we would take any data breach with severity.

## Secure Sockets Layer Certificates Deployment

One-click is all it takes to put the SSL certificates on your customer portal.

1. Click  **Setup** :material-menu-right: **Integrations**.
2. Click  **Domains**.
3. Click **Deploy Certificate**.

## User Enhanced Security

Besides the above ConnexCS security, we also recommend the following practices to protect your ConnexCS account.

1. **Passwords** (we recommend following the [**NIST guidelines**](https://pages.nist.gov/800-63-3/sp800-63b.html#sec5)):

    - 8 character minimum when a human sets it.
    - 6 character minimum when set by a system/service.
    - Support at least 64 characters maximum length.
    - It should support All the ASCII characters (including space).
    - When processing, it's not recommended to truncate the secret (password).
    - Check the chosen password with known password dictionaries.
    - Allow at least 10 password attempts before the lockout.
    - No complexity requirements.
    - No password expiration period.
    - No password hints.
    - No knowledge-based authentication (for example: who was your best friend in high school?).
    - No SMS for 2FA (use a one-time password from an app like Google Authenticator).

2. **Hardware Security Tokens:** Yubikey is an example of a hardware security token. It can never be digitally stolen or used for logins to ConnexCS.

3. **Duo Security or Google / Microsoft Authenticator:** According to the NIST recommendations, you shouldn't trust the above SMS for second-factor authentication.

    We apply both Duo Security and [TOTP; specified in RFC 6238](https://tools.ietf.org/html/rfc6238).You can use them by Google Authenticator or Microsoft Authenticator.

<iframe width="560" height="315" src="https://www.youtube.com/embed/_EqOmhahBQc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
