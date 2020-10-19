# Auth
Under the **Auth** tab users can configure IP or SIP (Username/Password) Authentication. To set either one, click the **`+`** button.


## IP Authentication
Click each tab to view configuration details.

=== "Basic"

    **Basic** configuration includes IP address, Channels, and Flow Speed. The Ingress and Egress selections are from the perspective of the customer switch (PBX, dialer, etc). 
    
    ![alt text][ipauth-basic]
    
=== "Advanced"

    + **Codecs**: all codecs are supported unless specific ones are specified here.
    + **Manufacturer and Version**: set the customer switch manufacturer and version if desired (these fields are not functional, they are for reference only).
    + **Protocol, Port, Dial Pattern**: the default selection is the standard for each parameter
    + **CLI Prefix, Tech Prefix, Strip Digits, Bandwidth**: these fields are all optional. Setting Bandwidth may be useful for customers with audio problems caused by slow speeds.
    + **Force From, Username, and Password**: these fields need to be set when using SIP registration
    + **Force NAT**: forces switch to read the IP address the traffic was received from, not the IP in the SIP packet.
    + **Intercept Reinvite**: helpful to use when customer equipment doesn't support reinvites (may correct issues with dropped calls). 

    ![alt text][ipauth-adv]
    
=== "Parameter Rewrite"

    The **Parameter Rewrite** tab is used to create automatic replacements for destination numbers or CLI, so a number is formatted in the appropriate [E164 format](https://www.twilio.com/docs/glossary/what-e164). 

    1. Click the **`+`**.
    2. Select the parameter you want to modify.
    3. Current: enter the prefix for the destination number, or the CLI.
    4. New: enter what should replace the current information.
    5. Use Testing to test what replacement will occur.
    6. Click **`Save`** when done. 

    ![alt text][ipauth-param]




!!! tip "Newly added IP immediately marked as Blocked under IP Authentication"
    Attempted calls from this IP will not be completed. This occurs because call requests are sent from the new IP before it is authorized. As a result, the ConnexCS fraud detection blocks the unauthorized IP in the firewall. To resolve the blocked IP, go to Setup :material-menu-right: Advanced :material-menu-right: Firewall. Selected the blocked IP, then delete it from the firewall. This unblocks the IP, but it will take up to 15 minutes for this change to become active in the switch 








## SIP User Authentication

**Basic** configuration: 

+ **Username** and **Password**: Must match configuration on the customer UAC. The password can be reset by clicking on the **`Password`** button on the **Customer** > **Auth** page. 
+ **NAT/SIP Ping**: refers to pings sent from ConnexCS back to the through customer firewall to their UAC. If enabled, they may keep a connection up for longer calls (typically either 1800 or 3600 seconds).
   + **Disabled**: no pings are sent
   + **Enabled**: UDP ping
   + **Enabled (Timeout)**: SIP ping (drops connection if ping can't be returned)

!!! warning "SIP Password security"
    SIP passwords are a requirement of the SIP protocol but can present security risks for a provider. They must be configured in ConnexCS when SIP authentication is setup but are not available for providers or customers to retrieve afterwards. Providers should generate a unique SIP password for each SIP user and send that to the customer. This gives the customer the responsibility of keeping track of the password and keeping it safe. Additionally, the unique password will allow for traceability if the customer's system is ever compromised. 

The **Parameter Rewrite** tab field descriptions are the same as for **IP Authentication** above.

**Voice Mail** tab

If Voice Mail is enabled, you can set which email address receives messages, reset the Voicemail Password, and view and delete current messages. 

![alt text][voicemail]

!!! tip
    Once NAT or SIP pings are enabled, the Latency tab will be available at the top of the SIP user screen. This can be helpful for troubleshooting audio problems. 

[ipauth-basic]: /customer/img/ipauth-basic.png "Edit Switch Basic"
[ipauth-adv]: /customer/img/ipauth-adv.png "Edit Switch Advance"
[ipauth-param]: /customer/img/ipauth-param.png "Edit Switch Parameters"
[voicemail]: /customer/img/voicemail.png "Voicemail"
