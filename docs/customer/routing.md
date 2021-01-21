# Ingress Routing
**Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: Routing**

**Ingress Routing** is the process which allocates an incoming call (dialed by our customers) based on the assigned Customer Rate Card, which then Egresses the call to a specified provider. This allows multiple rate cards to be used with or without a prefix. First, a check is done for the longest prefix, then shortest prefix is checked for a match. If no prefix is matched, it will match the rate cards with mutually exclusive destinations.  If there are multiple rate cards with the same prefixes, you must set up a dial plan with a Tech Prefix to identify the correct card.

!!! info "Routing Templates and more"
    Create templates for customer routing in [Routing Global](https://docs.connexcs.com/global-routing/). For more information on Routing, see [Routing Setup](https://docs.connexcs.com/video-guide/#routing-setup) in our Video Guides for a detailed walkthrough. Additional documentation can be found in the [Routing Overview](https://docs.connexcs.com/routing/) and [Routing Strategy](https://docs.connexcs.com/routing-strategy/) sections.


## Configure Routing
View and configure existing routes on the Routing tab in the Customer card. Click the `+` under **Ingress Routing** to create a new route. 

   ![alt text][ingress-routing]

### Basic

+ **Rate Card**: Also known as Tariff, this allows you to select the rate card used on a customer's account. There are 3 ways these calls can be handled:

    + Internal: Send a call to the ConnexCS Class5 (Voice Mail, IVR, etc). If selected, the "Auto" option becomes available, which will generate dial strings from all possible internal extentions
    + Extension: (uses SIP users in Customer > Auth configured SIP Users) Send a call to a SIP Authenticated user on the account
    + Customer IP: (uses IPs in Customer > Auth configured IPs) Send a call from an agent back to the customer's PBX, using either the Tech Prefix (Ex: #9) or a Dial String (Ex: `^[0-9](4)$`)
    + To Carriers: select a carrier to send the call to terminate somewhere outside of the ConnexCS system

+ **Tech Prefix**: Allows you to distinguish a route from an inbound party. When multiple customers share the same IP address, each customer needs an individual Tech Prefix so the switch can route calls correctly. It lets providers separate multiple rate cards.
+ **Dial String Prefix Set**: Helpful for commonly used sets of prefixes. Rather than entering a complete list of prefixes for UK, for example, you can create a predefined Prefix Set (defined under [Setup > Advanced > Prefix Set](https://docs.connexcs.com/setup/advanced/prefix-set/)) and then select it here for appropriate customers. 
+ **Dial String**: Only allows a dialed number through if it matches the defined dial string (or "dial pattern"). (If nothing is entered, it will match everything and try to send all calls. This doesn't work if you have more than one Rate Card as the system will not know which one to use.) Each prefix is listed one per line, both prefix and regular expressions are allowed. For example, if you only wanted to allow UK Landline you could use:

    Prefix
    ```
    441
    442
    ```

    Regular Expression (RegEx)
    ```
    ^44(1|2)
    ```

    Combination (UK Landline & Canada)
    ```
    441
    442
    ^1(204|226|236|249|250|289|306|343|403|416|418|438|450|506|514|519|579|581|587|604|613|647|705|709|778|780|807|819|867|902|905)
    ```

+ **Enabled**: The route can be easily enabled and disabled here. 


### Price Limits

+ **Capped Rate** and **Provider Capped Rate**: Set the maximum cost of a call. Calls that exceed the set rate will not be connected. Ex: For customer's with flat rate accounts, which are allowed to dial all UK number but premium numbers, you would set the Provider Capped Rate at 0.01, so any call that the provide might charge over that amount would not be completed. 

+ **Profit Assurance**: When `Enabled`, only calls that are profitable will be allowed, any call that costs more than the retail rate will not be allowed to complete. This is particularly useful for A-Z routes or NPA-NXX rate cards. Keep in mind that when this is enabled, additional PDD may be added to the call.

+ **Block Connect Cost**: Block any call that has a connection fee. 


### Capacity Limits

+ **Channels**: Set the maximum number of channels/live calls allowed for this route.

+ **Max Duration**: Set the maximum amount of time (in seconds) that the call will be allowed to exist before being terminated, typically in the case of a missed `BYE`. 

!!! info "Call Timeouts"
    A VoIP call is stateful, even though its protocol is stateless. This means that both sides of the conversation must be told when to finish the call. They do this with a BYE message. If the BYE message goes missing, the call will continue forever. 
    Max Duration is a method for setting up **Missing BYE Protection**. Another method is by using a **SIP Ping** to determine when the connection has timed out. This sends a SIP packet to the remote end of the conversation roughly every 30 seconds. This checks to see if the other side is still aware of an ongoing conversation. If it is not received back, or is told that the conversation is not active, then it shuts off the call. **RTP Time-out:** is another way to check for an active call based on whether audio is passing. If there is no audio passing for a pre-set interval, our RTP array will notify the switch and instruct it to terminate the call.  This won't work if RTP Mode is set to direct.

!!! Warning "Asterisk pings"
    Asterisk does not have SIP Ping (OPTIONS) enabled as default. If your customer / carrier is using Asterisk you may need to disable this if they don't have it enabled on their side as calls will typically disconnect after 30 seconds. 

+ **Flow Speed (CPS)**: Limits the calls per second. This must be set for each customer card assigned to the customer account.

+ **CPS Spike Buffer**: Limit a spike of calls by spreading it over a longer period of time. This essentially manages a large volume of calls over a short period of time. Once the buffer limit is reached then the calls per second kicks in, distributing the spike of calls. 

!!! Note "CPS Buffering"
    **CPS Buffering**: Used to manage large volumes of calls over a short period of time. This process maximises saturation and increases call completion within a given CPS restriction. It does this by removing spikes and borrowing capacity from future seconds. If incoming traffic exceeds your pre-set CPS, it holds the call for one second, and then tries again. You can increase the second count in the CPS Spike Buffer field. Changing the CPS Buffering value only affects calls that exceed the CPS. The delay will show as increased PDD on the call, each second the system will emit a 100 Trying (High CPS, Buffering) response to indicate the status/progress of the call.

+ **ASR Plus** assists capacity management by helping you define how to handle connections to known failed numbers. For information on the ASR Plus options, see [ASR Plus Details](https://docs.connexcs.com/customer/routing/#asr-plus-details) below. 


### ScriptForge

+ **ScriptForge**: Set a custom JavaScript to run from within the ConnexCS platform in-line with the call. Some example operations could be checking a Do Not Call list or forcing a CLI. For more information about setup and operation, see the [ScriptForge](https://docs.connexcs.com/developers/scriptforge/) page.

+ **Timeout**: Set how long the script may run.

+ **VARS(TML)**: Set variables to be passed into the select ScriptForge script. 

### Locks
Used for troubleshooting, you can remove carriers from a route and run a quick test.  

+ **Lock** (Whitelist): Select one or more rate cards from the list of available providers. 
+ **Exclude** (Blacklist): Exclude access to one or more rate cards in the list of available providers.

### Media

+ **Transcoding**: This option is limited. Best use case is for customers in low-bandwidth areas that want to use G.729. Be aware that if you don't have enough transcoding capacity, calls will fail. 
+ **SIP Ping**: Send regular pings to ensure both sides of a call are still up, in case of potential failed ACK. Enabled is the recommended setting. 
+ **SIP Session Timer (SST)**: SST is Passive by default, however **Enabled** is the recommended setting. When enabled, SST ensures there are no ghost or long-duration calls being billed when one or both sides have hung up. A timer is activated when the call starts and refreshes the call every X number of seconds by sending a RE-INVITE. SST is currently the best way to prevent long-duration calls, superseding SIP Ping Timeout. Note that any SST less than sixty (60) seconds will be rejected.

    |SST Option              | Result                                                                                           |
    |-------------------------|:------------------------------------------------------------------------------------------------|
    | **Default**             | Passive SST, No headers are changed and no SST is engaged, all RE-INVITES will propagate through the system   |
    | **Enabled Both**        | ConnexCS will send SIP Session Timers to both legs of the call                                   |
    | **Enabled (Upstream)**  | ConnexCS will use SST with the carrier                                                           |
    | **Enabled (Downstream)**| ConnexCS will use SST with the customer                                                          |
    | **Suggest**             | Session-Expire headers and Min-SE are added to packets sent to carrier encouraging the use of SST|
    | **Disabled**            | All ```timer``` headers are removed                                                              |

+ **RTP Media Proxy**: This defaults to Auto, but selecting a zone (by continent) is the current recommendation. The following options allow you to set where RTP media server for this route for this customer:  

    * **Auto**: Selects the least expensive path between your customer and provider, however failovers are not automated which is why this option is not recommended.  
    * **Direct RTP (no proxy)**: Bypass ConnexCS, so media flows directly between the customer and carrier. If the customer is using a firewall or other NAT device incorrectly then media may not flow between carrier and customer. Using this setting also means that if there are audio issues, the issue can't be ConnexCS. Since it isn't likely to be the carrier, the issue would typically exist on the customer's end. 
    * **Zone**: Select any of the regional servers, however it is recommended you choose a location near a provider or your customer. Temporarily selecting a different region to route media traffic can be helpful in diagnosing call problems. 

+ **RTP Proxy Mode**: If connection via our service fails, and relaxed is selected, it will failover to backup automatically. 

    * **Strict**: This will enforce the proxy engagement. If the proxy can't engage with the call, the call will not be established. Note: Free accounts are limited to how many RTP Proxy channels are enabled, this may prevent calls connecting if you have more channels than our free accounts allow you to have.
    * **Relaxed**: This will perform best efforts to engage the RTP Proxy, if it can't be engaged because of either network errors, or because you don't have enough RTP capacity, the calls will connect directly.


+ **RTP Proxy distinctions**: When a call is established between customer and provider, audio can be set-up in one of two ways:

    |                        | **With RTP Proxy** |  **Without RTP Proxy** |
    |------------------------|:------------------:|-----------------------:|
    | **Audio Path**         | Indirect           | Direct                 |
    | **Audio Quality**      | Excellent          | Unbeatable             |
    | **Latency**            | Low                | Lowest                 |
    | **Information Leakage**| No                 |  Yes*                  |

*While it's doubtful that any information will be logged in the customer/providers switch when the audio is engaged, it is possible for an engineer to learn this information from a SIP trace, PCAP, or by looking at transit locations. DTMF Detection ONLY works when RTP Proxy mode is enabled.*


!!! Success "When should I use RTP Proxy?"
    Use an RTP Proxy if you don't want your customers to know your providers.

!!! Warning "When should I avoid using RTP Proxy?"
    You have other equipment in your SIP set-up which will act as a Media Relay or you want to run a test to see if audio problems are related to the ConnexCS switch.

+ **Call Recording**: This allows you to record and store calls, which are then found under **Setup > Information > [Browsing Record](https://docs.connexcs.com/setup/information/recording/)**. The feature will first need to be enabled on the account under **Setup > Settings > Account > [Packages](https://docs.connexcs.com/setup/settings/account/#packages)** before it can be enabled here for individual customers. There is an additional charge of 0.003 on top of any existing fees or charges. 

### Strategy
For advanced routing, click the **`+`** to select a [Prefix Set](https://docs.connexcs.com/setup/advanced/prefix-set/) and assign a [Routing Strategy](https://docs.connexcs.com/routing-strategy/). This gives you greater control over how routes are selected for a given customer. 

### Notes

+ **Public Notes**: Notes entered here are displayed on the Customer Portal when logged in.
+ **Private Notes**: These will display to the customer in the Control Panel.

## Disabled Routes
Routes highlighted in red on the customer Routing page are disabled. To enable them, open the route, click **Enabled**, then **`Save`**. 

   ![alt text][routing-disabled]


## Use Case for Tech Prefix
Using Tech Prefix with SIP User "Parameter Rewrites" allows for significant granularity to manage permissions for how to connect a user's calls.

1. Use Parameter Rewrite on the SIP User (found at Customer > Auth > SIP User > Parameter Rewrite) to add a number for calls from this SIP User:

    ![alt text][techprefix-usecase]

2. Add Tech Prefix for that user in Routing. In this example, it would be 1234. 
3. Set how you want those calls routed: Internal to Class5, out to a provider, and so on. 


## ASR Plus Details
ASR (Answer Seizure Ratio) is the number of connected calls divided by the total calls (represented as a %). **ASR Plus** is a proprietary ConnexCS technology which filters known failed non-existent / working numbers between the customer and the terminating, or destination, carrier. This is especially useful with larger call volumes. Unless it's turned off or customized otherwise, ASR+ is active for 90% of calls, which grants the opportunity for the database to be replenished.

| Value         | Description                | 
| ------------- |----------------------------| 
| Off           | ASR+ Disabled              | 
| ASR+ (Low)    | Active on 30% of calls     | 
| ASR+          | Active                     |
| ASR?          | When ASR+ is enabled on the provider card |
| ASR+?         | When ASR+ is enabled on the provider card, only known connected calls will be allowed to pass to specific provider |
| ASR++         | Only known connected calls will be allowed to pass (Rarely used as usually too strict) |

!!! success "Advantages of ASR"
    + Quick failure of known bad numbers.
    + Reduces response time for your customers.
    + Improves the ASR of the traffic that your upstream carrier sees.
    + Highly effective for call centre traffic.
    
!!! failure "Disadvantages of ASR"
    + Marginal impact on your NER due to false positive matches. This is usually kept within tolerances of < 0.1%.
    + Does not offer improvements for all destinations.

[ingress-routing]: /customer/img/ingress-routing.png "Ingress Routing"
[routing-disabled]: /customer/img/routing-disabled.png "Disabled Routing"
[techprefix-usecase]: /customer/img/techprefix-usecase.png "Tech Prefix Use Case"
