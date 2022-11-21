# Ingress Routing
**Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: Routing**

**Ingress Routing** is the process that allocates an incoming call (dialed by our customers) based on the assigned Customer Rate Card, which then Egresses the call to a specified provider. This allows multiple rate cards to be used with or without a prefix. First, a check is done for the longest prefix, then the shortest prefix is checked for a match. If no prefix is matched, it will match the rate cards with mutually exclusive destinations. If there are multiple rate cards with the same prefixes, you must set up a dial plan with a Tech Prefix to identify the correct card.

!!! info "Routing Templates and more"
    Create templates for customer routing in [**Routing Global**](https://docs.connexcs.com/global-routing/). For more information on Routing, see [**Routing Setup**](https://docs.connexcs.com/video-guide/#routing-setup) in our Video Guides for a detailed walkthrough. You can find additional documentation in the [**Routing Overview**](https://docs.connexcs.com/routing/) and [**Routing Strategy**](https://docs.connexcs.com/routing-strategy/) sections.


## Configure Routing
View and configure existing routes on the Routing tab in the Customer card. To create a new route, click material-plus: in **Ingress Routing**. 

   ![alt text][ingress-routing]

### Basic

+ **Rate Card**: Also known as Tariff, this allows you to select the rate card used on a customer's account. You can handle these calls in the following 3 ways:

    + Internal: Send a call to the ConnexCS Class5 (Voice Mail, Interactive voice response (IVR), etc). If selected, the "Auto" option becomes available, which will generate dial strings from all possible internal extensions.
    + Extension: (uses SIP users in Customer > Auth configured SIP Users) Send a call to a Session Initiation Protocol (SIP) Authenticated user on the account.
    + Customer IP: (uses IPs in Customer > Auth configured IPs) Send a call from an agent back to the customer's Private Branch eXchange (PBX), using either the Tech Prefix (Ex: #9) or a Dial String (Ex: `^[0-9](4)$`).
    + To Carriers: Select a carrier to send the call to terminate somewhere outside of the ConnexCS system.

+ **Tech Prefix**: This Lets you distinguish a route from an inbound party. When multiple customers share the same IP address, each customer needs an individual Tech Prefix so the switch can route calls correctly. It lets providers separate multiple rate cards.
+ **Dial String Prefix Set**: Helpful for commonly used sets of prefixes. Rather than entering a complete list of prefixes for the UK, for example, you can create a predefined Prefix Set (defined under **Setup :material-menu-right: Advanced :material-menu-right:** [**Prefix Set**](/setup/advanced/prefix-set/)) and then select it here for appropriate customers. 
+ **Dial String**: Only lets a dialed number through if it matches the defined dial string (or "dial pattern"). (If you don't enter anything, it will match everything, and try to send all calls. This doesn't work if you have more than one Rate Card as the system won't know which one to use.) Each prefix is listed once per line, both prefix and regular expressions are allowed:

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

!!! warning "Using Rate Cards for multiple countries"
    Ingress Routing isn't independently aware of the card type you are using, and more specifically the appropriate dial strings it needs to send. For example, you are using both UK and US cards; you need to enter appropriate dial strings in the routes you set up for each card type.

+ **Enabled**: The route can be easily enabled and disabled here. 


### Price Limits

+ **Capped Rate** and **Provider Capped Rate**: Set the maximum cost of a call. Calls that exceed the set rate won't be connected. Ex: For customer's with flat rate accounts, which are allowed to dial all UK number but premium numbers, you would set the Provider Capped Rate at 0.01, so any call that the provide might charge over that amount would not be completed. 

+ **Profit Assurance**: When `Enabled`, only calls that are profitable will be allowed, any call that costs more than the retail rate won't be allowed to complete. This is particularly useful for A-Z routes or NPA-NXX rate cards. Keep in mind that when this is enabled, additional Post Dial Delay (PDD) is added to the call.

+ **Block Connect Cost**: Block any call that has a connection fee. 

+ **FTC DNC Report ANI Block (USA)**: When `Enabled`, ConnexCS will take a copy of FTC data (using the [FCC's **Do Not Call (DNC) Reported Calls Data API**](https://www.ftc.gov/developer/api/v0/endpoints/do-not-call-dnc-reported-calls-data-api)) and add it to the system. We can then block callers from known spammer CLI/ANI's.


### Capacity Limits

+ **Channels**: Set the maximum number of channels/live calls allowed for this route.

+ **Max Duration**: Set the maximum amount of time (in seconds) that the call will be allowed to exist before being terminated, typically in the case of a missed `BYE`. 

!!! info "Call Timeouts"
    A VoIP call is stateful, even though its protocol is stateless. This means that both sides of the conversation must be told when to finish the call. They do this with a BYE message. If the BYE message goes missing, the call will continue forever. 
    Max Duration is a method for setting up **Missing BYE Protection**. Another method is by using a **SIP Ping** to determine when the connection has timed out. This sends a SIP packet to the remote end of the conversation roughly every 30 seconds. This checks to see if the other side is still aware of an ongoing conversation. If it's not received back, or is told that the conversation isn't active, then it shuts off the call. **RTP Time-out:** is another way to check for an active call based on whether audio is passing. If there is no audio passing for a pre-set interval, our Real-time Transport Protocol (RTP) array will notify the switch and instruct it to end the call. This won't work if RTP Mode is set to direct.

!!! Warning "Asterisk pings"
    Asterisk doesn't have SIP Ping (OPTIONS) enabled as default. If your customer / carrier is using Asterisk you may need to disable this if they don't have it enabled on their side as calls will typically disconnect after 30 seconds. 

+ **Flow Speed (CPS)**: Limits the calls per second. This must be set for each customer card assigned to the customer account.

+ **CPS Spike Buffer**: Limit a spike of calls by spreading it over a longer period of time. This essentially manages a large volume of calls over a short period of time. Once the buffer limit is reached then the calls per second kicks in, distributing the spike of calls. 

!!! Note "CPS Buffering"
    **CPS Buffering**: Used to manage large volumes of calls over a short period of time. This process maximises saturation and increases call completion within a given CPS restriction. It does this by removing spikes and borrowing capacity from future seconds. If incoming traffic exceeds your pre-set CPS, it holds the call for one second, and then tries again. You can increase the second count in the CPS Spike Buffer field. Changing the CPS Buffering value only affects calls that exceed the CPS. The delay will show as increased PDD on the call, each second the system will emit a 100 Trying (High CPS, Buffering) response to indicate the status/progress of the call.

+ **ASR Plus** assists capacity management by helping you define how to handle connections to known failed numbers. For information on the ASR Plus options, see [**ASR Plus Details**](https://docs.connexcs.com/customer/routing/#asr-plus-details) below. 


### ScriptForge

+ **ScriptForge**: Set a custom JavaScript to run from within the ConnexCS platform in-line with the call. Some example operations could be checking a Do Not Call list or forcing a CLI. For more information about setup and operation, see the [**ScriptForge**](https://docs.connexcs.com/developers/scriptforge/) page.

+ **Timeout**: Set how long the script may run.

+ **VARS(TML)**: Set variables to be passed into the select ScriptForge script. 

### Locks
Used for troubleshooting, you can remove carriers from a route and run a quick test.  

+ **Lock** (Allow): One or more rate cards from the list of available providers.
+ **Exclude** (Deny): Exclude access to one or more rate cards in the list of available providers.

!!! tip "Exclude Use Case"
    If a customer reports an issue with a carrier or route, you can come here and set the carrier/route in Exclude and **`Save`**, then come back and remove it, and do a **`Delay and Save`** for a later date. 

### Media

+ **Transcoding**: Enter the numbers of channels allowed for transcoding. This option is limited. The best use case is for customers in low-bandwidth areas that want to use G.729. Be aware that if you don't have enough transcoding capacity, calls will fail. 
+ **SIP Ping**: Send regular pings to ensure both sides of a call are still up. `Enabled` is the recommended setting.

    |Option                          | Result                                            |
    |--------------------------------|:--------------------------------------------------|
    | **Disabled**                   | No SIP pings will be sent.                        |
    | **Enabled Both Sides**         | SIP pings will be sent in both directions.        |
    | **Enabled (Downstream Only)**  | SIP Pings sent towards where the call is FROM (originated). |
    | **Enabled (Upstream Only)**    | SIP Pings sent towards where the call is TO (terminated). |

+ **SIP Session Timer (SST)**: SST is Passive by Default, but **Enabled** is the recommended setting. When enabled, SST ensures there are no ghost or long-duration calls being billed when one or both sides have hung up. A timer is activated when the call starts and refreshes the call every X number of seconds by sending a RE-INVITE. SST is currently the best way to prevent long-duration calls, superseding SIP Ping Timeout. Note that any SST less than sixty (60) seconds will be rejected.

    |SST Option              | Result                                                                                           |
    |-------------------------|:------------------------------------------------------------------------------------------------|
    | **Default**             | Passive SST, No headers are changed and no SST is engaged, all RE-INVITES will propagate through the system   |
    | **Enabled Both**        | ConnexCS will send SIP Session Timers to both legs of the call                                  |
    | **Enabled (Upstream)**  | ConnexCS will use SST with the carrier                                                           |
    | **Enabled (Downstream)**| ConnexCS will use SST with the customer                                                          |
    | **Suggest**             | Session-Expire headers and Min-SE are added to packets sent to carrier encouraging the use of SST|
    | **Disabled**            | All ```timer``` headers are removed                                                              |


+ **RTP Media Proxy**: This defaults to Auto, but selecting a zone (by continent) is the current recommendation. The following options allow you to set where RTP media server for this route for this customer: 
+ 
    :material-menu-right: `Direct RTP (no proxy)`- Bypass ConnexCS, so media flows directly between the customer and carrier. If the customer is using a firewall or other NAT device incorrectly then media may not flow between carrier and customer. Using this setting also means that if there are audio issues, the issue can't be ConnexCS. Since it isn't likely to be the carrier, the issue would typically exist on the customer's end. 

    :material-menu-right: `Zone`- Select any of the regional servers, but it's recommended you choose a location near a provider or your customer. Temporarily selecting a different region to route media traffic can be helpful in diagnosing call problems. 

!!! tip "The recommended RTP Media Proxy servers are the **Closest (To ConnexCS) Server** or the **Closest (Elastic) Server**."
    
+ **RTP Proxy Mode**: If connection via our service fails, and relaxed is selected, it will fail over to backup automatically. 

    :material-menu-right: `Strict`- This will enforce the proxy engagement. If the proxy can't engage with the call, the call won't be established. Note: Free accounts are limited to how many RTP Proxy channels are enabled, this may prevent calls from connecting if you have more channels than our free accounts allow you to have.

    :material-menu-right: `Relaxed`- This will perform best efforts to engage the RTP Proxy, if it can't be engaged because of either network errors, or because you don't have enough RTP capacity, the calls will connect directly.


!!! Success "When should I use RTP Proxy?"
    Use an RTP Proxy if you don't want your customers to know your providers.

!!! Warning "When should I avoid using RTP Proxy?"
    You have other equipment in your SIP set-up which will act as a Media Relay or you want to run a test to see if audio problems are related to the ConnexCS switch.
    
!!! info "RTP Proxy distinctions"
    When a call is established between customer and provider, audio can be set-up in one of the two ways:

    |                        | **With RTP Proxy** |  **Without RTP Proxy** |
    |------------------------|:------------------:|-----------------------:|
    | **Audio Path**         | Indirect           | Direct                 |
    | **Audio Quality**      | Excellent          | Unbeatable             |
    | **Latency**            | Low                | Lowest                 |
    | **Information Leakage**| No                 |  Yes*                  |

    *While it's doubtful that any information will be logged in the customer/providers switch when the audio is engaged, it's possible for an engineer to learn this information from a SIP trace, PCAP, or by looking at transit locations. DTMF Detection ONLY works when RTP Proxy mode is enabled.*

+ **Call Recording**: This allows you to record and store calls, which are then found in **Setup > Information > [Browsing Record](https://docs.connexcs.com/setup/information/recording/)**. There is an additional charge, per recorded call, of 0.003 in addition to existing fees or charges, so choose carefully how many calls to record:
    
    :material-menu-right: `Disabled`- no calls are recorded
    
    :material-menu-right: `Sampling`- Choose from 1%, 5%, 25% or 50% sample of your calls (ex: 1% will record 1 of every 100, 25% records 25 of every 100, etc.)
    
    :material-menu-right: `Enabled (Always On)`- Record all calls

!!! tip "The Call Recording setting is disabled"
    You need to enable the feature first on the account in **Setup > Settings > Account > [Packages](https://docs.connexcs.com/setup/settings/account/#packages)** before it can be enabled here for individual customers. 

### Strategy
For advanced routing, click :material-plus: to select a [**Prefix Set**](https://docs.connexcs.com/setup/advanced/prefix-set/) and assign a [**Routing Strategy**](https://docs.connexcs.com/routing-strategy/). This gives you greater control over how routes are selected for a given customer. 

### Notes

+ **Public Notes**: Notes entered here are displayed on the Customer Portal when logged in.
+ **Private Notes**: These will display to the customer in the Control Panel.

### Fraud

+ **Fraud Profile**: Apply one of the Fraud Profiles configured under **Setup > Advanced > [Fraud Profile](https://docs.connexcs.com/setup/advanced/fraud/#setup-fraud-detection)**.
+ **Fraud Mode**: Specify how strictly the profile will be applied, this is dependent on the [**Fraud Mode Thresholds**](https://docs.connexcs.com/setup/advanced/fraud/#fraud-mode) configured in the Profile. 
    
    :material-menu-right: `Disabled`
    
    :material-menu-right: `Low - Alert or Block Calls`
    
    :material-menu-right: `High - Block Calls or Account`

## Disabled Routes
Routes highlighted in red on the customer Routing page are disabled. To enable them, open the route, click **Enabled**, then **`Save`**. 

&emsp; ![alt text][routing-disabled]


## Use Case for Tech Prefix
Using Tech Prefix with SIP User "Parameter Rewrites" allows for significant granularity to manage permissions for how to connect a user's calls.

1. Use Parameter Rewrite on the SIP User (found in **Customer :material-menu-right: Auth :material-menu-right: SIP User :material-menu-right: Parameter Rewrite**) to add a number for calls from this SIP User:

    ![alt text][techprefix-usecase]

2. Add Tech Prefix for that user in Routing. In this example, it would be 1234. 
3. Set how you want those calls routed: Internal to Class5, out to a provider, etc. 


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
    + Doesn't offer improvements for all destinations.

[ingress-routing]: /customer/img/ingress-routing.png "Ingress Routing"
[routing-disabled]: /customer/img/routing-disabled.png "Disabled Routing"
[techprefix-usecase]: /customer/img/techprefix-usecase.png "Tech Prefix Use Case"
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTgzMDE3MTYxOCwxNzY0NTExNDI4LC0zNT
QwODUzOTgsMTYyMTY3NTAxOCwtMTMyOTIzODE4MCwtMzAyMDcw
NjUwLDQxNjEwNzkyMiwtMjA0NzcyODE5Ml19
-->