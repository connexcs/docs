# Authentication (Auth)
Use the **Auth** tab to configure IP or SIP (Username/Password) Authentication. 

## IP Authentication
When you enable **IP Authentication**, you associate the IP of a customer switch to their account. This adds a security layer by ensuring the calls come from a trusted source.

!!! **Error:** "Newly added IP immediately marked as Blocked under IP Authentication"-
    This occurs as a result of call requests being sent from the new IP before it had been authorised. As a result, ConnexCS fraud detection blocked the unauthorized IP in the firewall. You can't complete attempted calls from this IP.
       
To resolve the blocked IP, 
+ go to **Setup :material-menu-right: Advanced :material-menu-right: Firewall**. 
+ Select the blocked IP, then delete it from the firewall. This unblocks the IP, but it will take up to 15 minutes for the change to become active in the switch. See [**Threat Detection**](https://docs.connexcs.com/setup/advanced/firewall/) for more details. 

### Enable IP Authentication 
To enable, click **:material-plus:** next to IP Authentication:

*Click each tab to view the configuration details*

=== "Basic"

    + **IP**: Enter the IP(s) or Hostname of the switch.
    + **Channels**: Set the maximum number of concurrent calls for this switch. 
    + **Flow Speed**: Set the Calls Per Second (CPS) (0 = unlimited calls).   
    
    ![alt text][cp-ipauth-basic]
    
=== "Advanced"

    + **Codecs**: All Codecs are supported unless specifically set as "Restricted" here. 
    + **Manufacturer and Version**: These reference fields allow you to enter the switch Manufacturer and Version if required (these fields are not functional; they are informational only).
    + **Protocol**: Select **SIP (UDP)** for the protocol (**`SMPP`**: SMPP, for SMS, is currently not supported).
    + **Port**: Default = 5060. If using TLS protocol, this should be set to 5061. 
    + **Dial Pattern**: Default = E164. The default selection is the industry standard.
    + **CLI Prefix, Tech Prefix, Strip Digits**:  Do NOT use these fields. Please contact us for assistance if required. 
    + **Bandwidth, Force From**: Do NOT use these fields.
    + **Username, and Password**: Set when sending calls out (egress switch direction) to a remote system. Setting this will allow the ConnexCS switch to operate as a client, or UAC. Not typically recommended unless you have a very specialized system. 
    + **Switch Direction**: The available options are from the perspective of the customer switch (PBX, dialer, etc), and describe how that switch interacts with the ConnexCS switch. For switches that send and receive calls from ConnexCS, there will need to be separate entries for each direction. 
        
        :material-menu-right: `Ingress`: This switch *receives* calls from ConnexCS.
        
        :material-menu-right: `Egress`: This switch *sends* calls to ConnexCS.    
    
___    

### IP Authentication Audit Log
After you setup IP Authentication, click on the IP to view the configuration. At the top of the Authentication page, select "View Audit Log" to view changes specific to these settings. 

## Session Initiation Protocol (SIP) User Authentication
When you enable **SIP Authentication**, ConnexCS will reject the initial SIP INVITE with a "407 Authentication Required". This message includes a 'nonce' (a uniquely randomly generated number, which is hashed). Your switch will send appropriate authentication information to ConnexCS, which connects the call. 

Generic SIP Trace showing the Challenge Response:

&emsp; ![alt text][407-trace]

### Enable SIP User Authentication 
To enable, click **:material-plus:** next to SIP User Authentication:

+ **Username**: The Username used for SIP authentication (must match with the configuration on your UAC). 
+ **Password**: Must match with the configuration on your UAC.
+ **Channels, Flow Speed, Bandwidth**; Do NOT set use these fields. Please contact us for assistance. 
+ **Protocol**: Select the protocol for SIP (call signaling) RTP (transport/audio). 
    
    :material-menu-right: **`UDP`**: SIP and RTP are unencrypted and transported over UDP.
        
    :material-menu-right: **`TCP`**: SIP is sent over TCP, RTP over UDP. 
        
    :material-menu-right: **`TLS`**: SIP is sent over TLS (TCP), RTP over UDP. 
        
    :material-menu-right: **`TLS & SRTP`**: SIP is sent over TLS (over TCP), RTP is encrypted with SRTP.
        
    :material-menu-right: **`SMPP`**: SMPP, for SMS, is not currently supported.
	
*(**SIP**: Session Initiation Protocol, **UAC**: User Account Control, **RTP**: Real-Time Transport Protocol, **UDP**: User Datagram Protocol, **TCP**: Transmission Control Protocol, **TLS**: Transport Layer Security, **SRTP**: Secure Real-Time Transport Protocol or Secure RTP, **SMPP**: Short Message Peer-to-Peer, **SMS**: Short Message Service )*
+ **Dial Pattern**: Default = E164. The default selection is the industry standard.
+ **Codecs**: All Codecs are supported for the SIP user unless specifically set as "Restricted" here.
+ **IP Whitelist**: Enter specific IPs, or use CIDR notation to specify an entire subnet. 

![alt text][cp-sipauth]
     


### Reset SIP Password
Click the SIP Username, then replace the password and click **`Save`**.   

## Delete IP or SIP User
To delete an IP or SIP User Authentication, select the box next to the IP Address or Username, and then click the Trash Can icon for that section. 


[cp-ipauth-basic]: /customer-portal/img/cp-ipauth-basic.png "Edit IP Auth Basic"
[407-trace]: /customer-portal/img/407-trace.png "SIP Trace Error 407"
[cp-sipauth]: /customer-portal/img/cp-sipauth.png "SIP Auth"


