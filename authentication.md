# Table of Content

* [Table of Content](#table-of-content)
* [Authentication Methods](#authentication-methods)
   * [UAC](#uac)
      * [Username & Password](#username-&-password)
      * [IP Authentication](#ip-authentication)
      * [Multiple Customers Per IP](#multiple-customers-per-ip)
   * [UAS](#uas)
      * [Username & Password Authentication](#username-&-password-authentication)
   * [ConnexCS Independent Considerations](#connexcs-independenti-considerations)
      * [Additional Security](#additional-security) 

# Authentication Methods

ConnexCS supports 2 methods of authentication including User / Pass in UAS mode.

## UAC
_Authentication from user / customers_

### Username & Password
Username & Password authentication is supported on the ConnexCS platform. You can allow a customer to use this method of authentication with the following steps:

1. Click on customer and select the customer name you wish to add authentication for.
2. Click on the Authentication Tab.
3. In the right panel in the **User/Password Authentication** click on the blue plus.
4. Complete the Username & Password Box
5. Optionally you can also select: 
    * Channel Limit
    * CPS Limit
    * Codec Restriction
    * Prefix to be added to dialled number
    * Strip Digits to be removed from dialled number
    * CLI Prefix to be added to received CLI

### IP Authentication
IP authentication is supported on the ConnexCS platform. You can allow a customer to use this method of authentication with the following steps:

1. Click on customer and select the customer name you wish to add authentication for.
2. Click on the Authentication Tab.
3. In the left panel in the **IP Authentication** click on the blue plus.
4. Complete the IP Address Box, you may also enter multiple IP addresses 1 per line
5. Optionally you can also select: 
    * Channel Limit
    * CPS Limit
    * Codec Restriction
    * CLI Prefix to be added to received CLI
    * Force From to modify the `From` Field

#### Multiple Customers Per IP
ConnexCS Supports multiple customers per IP when using IP Authentication. To ensure clear identification between customers sharing the same IP address, a _tech prefix_ is **required**.

## UAS
_Authentication from the ConnexCS server against providers_

When sending calls out, as there is no action required on ConnexCS part, IP Authentication will work.

### Username & Password Authentication
ConnexCS supports Username / Password Authentication against upstream providers. You can add an upstream provider and instruct ConnexCS to respond to `407 Proxy Authentication Required` by using the following method:

1. Click on carrier and select the carrier name you wish to add authentication for.
2. Click on the Authentication Tab.
3. In the left panel in the **IP Authentication** click on the blue plus.
4. Complete the IP Address Box, you may also enter multiple IP addresses 1 per line
5. Click on Advanced and complete the Username & Password Boxes

## ConnexCS Independent Considerations

Username / Password Authentication is the prefered method of authorisation for end user devices & systems which have dynamic IP addresses.
IP Authentication is prefered if a static IP is available and with any PBX or other SIP Servers.

When authenticating with Username/Password Authentication the initiating server must first send an attempt without any authorisation headers. This is replied to with a `407 Proxy Authentication Required` (this does not mean that there is an error that needs fixing, this is just part of the SIP protocol). This response that contains a _nonce_, this is a random value which is used as salt with a hash and sent on a second `INVITE`, the server using the same _nonce_ creates its own hash and checks for a match. This process ensures that the username and password are compared without actually exchanging the username and password, the _nonce_ ensures that a repeat attack can't happen. This process causes some overhead as packets (with retransmissions) and additional cache hits. This is why the prefered method of authentication between carriers is by IP.

### Additional Security
Although there are other mechanisms for prevention of this. UDP packets (which SIP uses) can be spoofed. Sometimes a tech prefix is used not only for route disambiguation but also as a private shared identifier for an additional level of security.
