# Table of Contents

- [Table of Contents](#table-of-contents)
- [Authentication Methods](#authentication-methods)
    - [User Acces Control (UAC)](#user-acces-control-uac)
        - [Username and Password](#username-and-password)
        - [IP Authentication](#ip-authentication)
        - [Multiple Customers Per IP](#multiple-customers-per-ip)
    - [UAS](#uas)
        - [Username / Password with Upstream Providers](#username--password-with-upstream-providers)
    - [ConnexCS Independent Considerations](#connexcs-independent-considerations)
        - [Additional Security](#additional-security)

# Authentication Methods

ConnexCS supports two methods of authentication: **Username/Password** in UAS mode and **IP Authentication**.

## User Acces Control (UAC)
_Authentication from user / customers_

### Username and Password
Username & Password authentication is supported on the ConnexCS platform. Follow these steps to allow it for your customers:

1. Click **customer** and select the customer's name that needs authentication.
2. Click on the **Authentication** tab.
3. In the right panel, select the blue `+` (plus icon) in **User/Password Authentication**.
4. Fill out an original Username and Password in the designated boxes.
5. Note that in this screen you can also manage:
    * Channel Limits
    * CPS Limits
    * Codec Restrictions
    * Prefixes
    * Strip Digits
    * CLI Prefixes


### IP Authentication
IP authentication is supported on the ConnexCS platform. You can allow a customer to use this method of authentication with the following steps:

1. Click **customer** and select the customer name you wish to add authentication for.
2. Click on the Authentication Tab.
3. In the left panel in the **IP Authentication** click on the blue plus.
4. Complete the IP Address Box, you may also enter multiple IP addresses 1 per line
5. Note that in this screen you can also manage: 
    * Channel Limit
    * CPS Limit
    * Codec Restriction
    * CLI Prefix to be added to received CLI
    * Force From to modify the `From` Field

### Multiple Customers Per IP
ConnexCS Supports multiple customers per IP when using IP Authentication. To ensure clear identification between customers sharing the same IP address, a _tech prefix_ is **required**.

## UAS
_Authentication from the ConnexCS server against providers_

No action is required on ConnexCS's part for outgoing calls; IP Authentication will work.

### Username / Password with Upstream Providers
ConnexCS supports Username / Password Authentication against upstream providers. You can add an upstream provider, and instruct ConnexCS to respond to `407 Proxy Authentication Required` using the following method:

1. Click **carrier**, and select the carrier's name.
2. Click the **Authentication** Tab.
3. In the left panel, select the blue `+` (plus icon) for **IP Authentication**.
4. Type an IP address into the box labeled as such.  Multiple IPs per line is acceptable.
5. Click **Advanced** and complete the Username and Password Boxes

## ConnexCS Independent Considerations

Username / Password Authentication is the prefered authorization method for end-user devices and systems which have dynamic IP addresses. IP Authentication is preferred if a static IP address is available, and with any PBX or other SIP Servers.

Before it authenticates with Username/Password Authentication,the initiating server must send an attempt without any authorization headers. The reply is `407 Proxy Authentication Required`, but this doesn't mean there's an error, as this is part of the SIP protocol. The response that contains a _nonce_ is a random value used as salt with a hash and sent on a second `INVITE`, and the server using the same _nonce_ creates its own hash and checks for a match. The process compares the username and password without actually exchanging them, and the _nonce_ eliminates the possibility of a repeat attack. There will be some overhead in the form of packets with retransmissions and additional cache hits, however, so the prefered method of authorization between carriers is still IP authentication.

### Additional Security
Be warned that the UDP packets that the SIP uses can be spoofed.  ConnexCS used tech prefixes for route disambiguation, and as a private shared identifier for additional security.
