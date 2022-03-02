# Routes
All **Termination Routes** (or calls made to)

## View Card
Select this option to view the Card details:

+ **Prefix**: 
+ **Name**:
+ **Cost**:
+ **Billing**: 

!!! tip "Card Info"
    Use the `Download` or `Email This Card` options to save the card details. 


## Edit a Route
Click on either the Route **`Name`** or **`Prefix`** to view and modify the following settings:

+ **Rate Card**: This is the name of the card, and will determine your rates and tarriffs. Also known as Tariff, this allows you to select the rate card used on a customer's account. There are 3 ways these calls can be handled:

Internal: Send a call to the ConnexCS Class5 (Voice Mail, IVR, etc). If selected, the "Auto" option becomes available, which will generate dial strings from all possible internal extensions.
Extension: (uses SIP users in Customer > Auth configured SIP Users) Send a call to a SIP Authenticated user on the account.
Customer IP: (uses IPs in Customer > Auth configured IPs) Send a call from an agent back to the customer's PBX, using either the Tech Prefix (Ex: #9) or a Dial String (Ex: ^[0-9](4)$).
To Carriers: Select a carrier to send the call to terminate somewhere outside of the ConnexCS system.

+ **Tech Prefix**: Allows you to distinguish a route from an inbound party. When multiple customers share the same IP address, each customer needs an individual Tech Prefix so the switch can route calls correctly. It lets providers separate multiple rate cards.

!!! "Use Case for Tech Prefix"
    Using Tech Prefix with SIP User "Parameter Rewrites" allows for significant granularity to manage permissions for how to connect a user's calls.

    1. Use Parameter Rewrite on the SIP User (found at **Authentication :material-menu-right: SIP User :material-menu-right: Parameter Rewrite**) to add a number for calls from this SIP User:

    ![alt text][techprefix-usecase]

    2. Add Tech Prefix for that user in Routing. In this example, it would be 1234. 
    3. Set how you want those calls routed: Internal to Class5, out to a provider, and so on. 

+ **Channels**: Set the maximum number of channels/live calls allowed for this route.

+ **Max Duration**: Set the maximum amount of time (in seconds) that the call will be allowed to exist before being terminated, typically in the case of a missed BYE.

!!! info "Call Timeouts"
    A VoIP call is stateful, even though its protocol is stateless. This means that both sides of the conversation must be told when to finish the call. They do this with a BYE message. If the BYE message goes missing, the call will continue forever. Max Duration is a method for setting up Missing BYE Protection. Another method is by using a SIP Ping to determine when the connection has timed out. This sends a SIP packet to the remote end of the conversation roughly every 30 seconds. This checks to see if the other side is still aware of an ongoing conversation. If it is not received back, or is told that the conversation is not active, then it shuts off the call. RTP Time-out: is another way to check for an active call based on whether audio is passing. If there is no audio passing for a pre-set interval, our RTP array will notify the switch and instruct it to terminate the call. This won't work if RTP Mode is set to direct.

!!! warning "Asterisk pings"
    Asterisk does not have SIP Ping (OPTIONS) enabled as default. If your customer / carrier is using Asterisk you may need to disable this if they don't have it enabled on their side as calls will typically disconnect after 30 seconds.

+ **Flow Speed (CPS)**: Limits the calls per second. This must be set for each customer card assigned to the customer account.

+ **SIP Ping**: Send regular pings to ensure both sides of a call are still up, in case of potential failed ACK. `Enabled` is the recommended setting.

    |Option                          | Result                                            |
    |--------------------------------|:--------------------------------------------------|
    | **Disabled**                   | No SIP pings will be sent.                        |
    | **Enabled Both Sides**         | SIP pings will be sent in both directions.        |
    | **Enabled (Downstream Only)**  | SIP Pings sent towards where the call is FROM (originated). |
    | **Enabled (Upstream Only)**    | SIP Pings sent towards where the call is TO (terminated). |
    
 + **Notes** and **Route Notes**: These are notes we have made for a particular route. You don't have the ability to edit these. 
