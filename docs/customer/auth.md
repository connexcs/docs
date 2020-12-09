# Auth

**Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: Auth**

Under the **Auth** tab, configure IP or SIP (Username/Password) Authentication for users. To set either one, click the **`+`** button.

!!! note "Global IP and SIP Authentication"
    Both IP and SIP Authentication may also be configured and managed for Customers and Carriers under **Global :material-menu-right: IP Authentication or SIP User Authentication**.


## IP Authentication
When you setup **IP Authentication**, you associate the IP of a customer switch to their account. This add a layer of security by ensuring the calls are coming from a trusted source. 

*Click each tab to view configuration details.*

=== "Basic"

    + **IP**: enter the IP of the customer switch.
    + **Switch Direction**: The `Ingress` and `Egress` selections are from the perspective of the customer switch (PBX, dialer, etc), and describe how that switch interacts with the ConnexCS switch. For switches that send and receive calls from ConnexCS, there will need to be separate entries for each direction. 
        * Ingress: This switch *receieves* calls from ConnexCS. (Note: when selected, this gives the option of using the FQDN rather than the switch IP.)
        * Egress: This switch *sends* calls to ConnexCS
    + **Channels**: Set the maximim number of concurrent calls for this switch. 
    + **Flow Speed**: Set the Calls Per Second (CPS) (0 = unlimited calls).   
    
    ![alt text][ipauth-basic]
    
=== "Advanced"

    + **Manufacturer and Version**: These references fields allow you to enter the customer switch Manufacturer and Version if desired (these fields are not functional; they are informational only).
    + **Protocol**: This sets the type of signalling protocol for call setup, maintenance, and tear down. ConnexCS uses SIP for signalling, but here you select the transport protocol. (Note: SMPP, for SMS, is not currently supported.)
    + **Port**: Default = 5060. If using TLS protocol, this should be set to 5061. 
    + **Dial Pattern**: the default selection is the industry standard.
    + **CLI Prefix, Tech Prefix, Strip Digits**:  Do NOT Use these fields. Use the Parameter Rewrite tab to modify numbers. 
    + **Bandwidth, Force From**: Do NOT Use these fields.
    + **Username, and Password**: Set when sending calls out (egress switch direction) to a remote system, setting this will allow the ConnexCS switch to operate as a client, or UAC. Not typically recommended unless the customer has a very specilized system. 
    + **Force NAT**: Forces the switch to read the IP address the traffic was received from, not the IP in the SIP packet. (See [**NAT Traversal**](https://docs.connexcs.com/far-end-nat-traversal/) for more details on how ConnexCS handles NAT for SIP.)
    + **Intercept Reinvite**: The only situation where this is recommended is when a customer's equipment doesn't support REINVITES. Enabling this may correct issues with dropped calls by having ConnexCS generate the REINVITES, which can help keep calls up if they are being disconnected by the far-end switch. 
    + **Flags**: Set CLI Authetnication for situations where Accounts are unable to use [Tech Prefix]() to differentiate customers using the same IP. 
 
=== "Codec"    
    
    All Codecs are supported unless specifically set as "Restricted" here. 
    
=== "Parameter Rewrite"

    The **Parameter Rewrite** tab is used to manipulate data as it comes into the system. It is most usedful when you need to create automatic replacements for destination numbers or CLI, so a number is formatted in the appropriate [E164 format](https://www.twilio.com/docs/glossary/what-e164). 

    1. Click the **`+`**.
    2. Type: Select the parameter to modify.
    3. Current: Enter the prefix for the destination number, or the CLI.
    4. New: enter what should replace the current information.
    5. Use Testing `Input` field to verify the replacement is working as expected. 
    6. Click **`Save`** when done. 
    
    Example: International calls coming in with a + should be replaced with a specific country code. 

    ![alt text][parameter-rewrite]
    

!!! tip "IP Authentication Audit Log"
    After IP Authentication has been setup, click on the IP to view configuration, and at the top of the page you can click "View Audit Log" to view changes specific to these settings. 

!!! error "Newly added IP immediately marked as Blocked under IP Authentication"
    This occurs because call requests were sent from the new IP before it is authorized. As a result, ConnexCS fraud detection blocked the unauthorized IP in the firewall. Attempted calls from this IP will not be completed. To resolve the blocked IP, go to **Setup :material-menu-right: Advanced :material-menu-right: Firewall**. Select the blocked IP, then delete it from the firewall. This unblocks the IP, but it will take up to 15 minutes for the change to become active in the switch. See [Threat Detection](https://docs.connexcs.com/setup/advanced/firewall/) for more details. 

___

## SIP User Authentication
When **SIP Authetnication** is enabled, ConnexCS will reject the initial SIP INVITE with a "407 Autehtnication Required", which includes a 'nonce' (a uniquely randomly geenrated number, which is then hashed). The customer switch will send appropriate authentication information to ConnexCS, which will connect the call. 

### Enabled SIP User Authenticaiton 
*Click each tab to view configuration details.*

=== "Basic"

    + **Username**: This will be the Username used for SIP authentication (must match configuration on the customer UAC). If The Customer has [Internal Number Block](https://docs.connexcs.com/customer/main/#internal-number-block) set on the **Main** tab, the Username may only be selected from available extensions. If a Username is already in use on the Account, they will get an error saying "Duplicate User Detected".
    + **Password**: Must match configuration on the customer UAC.
    + **Channels, Flow Speed, Bandwidth**; Do NOT set use these fields. 
    + **Protocol**: This sets the type of signalling protocol for call setup, maintenance, and tear down. ConnexCS uses SIP for signalling, but here you select the transport protocol. (Note: SMPP, for SMS, is not currently supported.)
    + **IP Whitelist**: Enter specific IPs, or use CIDR notation to specify an entire subnet. 
    + **NAT/SIP Ping**: Set behavior of pings sent from ConnexCS back to the through customer firewall to their UAC. Once NAT or SIP pings are enabled, the **Latency** tab will be available at the top of the SIP user screen. This can be helpful for troubleshooting audio problems. 
        + **Disabled**: No pings are sent
        + **Enabled**: Enables UDP ping, helping to keep some longer calls (1800 or 3600 seconds) up. 
        + **Enabled (Timeout)**: Enables SIP ping, the connext will drop if the pings aren't returned.

     ![alt text][sip-b]
     

=== "Codecs"

    All Codecs are supported for the SIP user unless specifically set as "Restricted" here. 

=== "Parameter Rewrite"

    The **Parameter Rewrite** tab is used to create automatic replacements for destination numbers or CLI, so a number is formatted in the appropriate [E164 format](https://www.twilio.com/docs/glossary/what-e164). 

    1. Click the **`+`**.
    2. Select the parameter you want to modify.
    3. Current: enter the prefix for the destination number, or the CLI.
    4. New: enter what should replace the current information.
    5. Use Testing to test what replacement will occur.
    6. Click **`Save`** when done. 

=== "Voice Mail"

    If Voice Mail is enabled, you can set which email address receives messages, reset the Voicemail Password, and view and delete current messages. 

### Use Case for NAT/SIP Pings 

**Troubleshooting Scenario**
The Customer reports they are able to register and make outbound calls, but they are unable to receive inbound calls. 

**What is happening**
In a typical configuration, a packet is sent from the customer UAC out through a NAT/firewall, and then the packet is delivered to the UAS: 
    
Ex: Customer switch :material-menu-right: NAT/firewall :material-menu-right: ConnexCS switch
    
+ When a packet goes out, a hole is punched in the firewall, and the source port is recorded. When a packet is returned on that port, the firewall knows to deliver back to the UAC.  
+ This works well when using TCP, which sends regular keep-alive packets.
+ UDP does not send keep alives (no connected state as with TCP). SIP does maintain a connected state, registration, but may have long periods of inactivity. 
+ Without regular traffic passing between UAS and UAC in the form of keep alives/registration (a normal occurance), NAT will eventualy time out and shut down the connection. 
+ Enabling UDP or SIP pings can demonstrate to the NAT/firewall that the signalling path is still valid and in use. 

### Reset SIP Password

Click the `Password` key next to the SIP user to reset the password. 

!!! warning "SIP Password security"
    SIP passwords are a requirement of the SIP protocol but can present security risks for a provider. They must be configured in ConnexCS when SIP authentication is setup but are not available for providers or customers to retrieve afterwards. Providers should generate a unique SIP password for each SIP user and send that to the customer. This gives the customer the responsibility of keeping track of the password and keeping it safe. Additionally, the unique password will allow for traceability if the customer's system is ever compromised. 
    
### Send message to SIP Users
Use the `Send` button next to the SIP User to send a direct message. 

[ipauth-basic]: /customer/img/ipauth-b.png "Edit Switch Basic"
[parameter-rewrite]: /customer/img/parameter-rewrite.png "Parameter Rewrite"
[ipauth-adv]: /customer/img/ipauth-adv.png "Edit Switch Advance"
[ipauth-param]: /customer/img/ipauth-param.png "Edit Switch Parameters"
[sip-b]: /customer/img/sip-b.png "SIP Codecs"
[voicemail]: /customer/img/voicemail.png "Voicemail"
