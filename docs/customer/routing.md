# Routing

Routing allocates incoming attempts to a designated rate card, which in turn egresses through a specified provider. It allows multiple rate cards to be used with or without a prefix. This is checked according to the longest prefix first, then the shortest for a match. If no prefix is matched, it will match the rate cards with mutually exclusive destinations.  If there are multiple rate cards with the same prefixes, you must set up a dial plan with a tech prefix to identify the correct card.

## Basic

**Rate Card**: Also known as Tariff, this allows you to select the rate card used on a customer's account.

**Tech Prefix**: This is used to determine the routing. When multiple customers share the same IP address, each customer needs an individual tech prefix so the switch can sort them. It lets providers separate multiple rate cards.

**Dial String Prefix Set**: Setting a Dial String Prefix allows deterine routing based on a predefined prefix set (defined under Setup > Advanced > Prefix Set.)

**Dial String**: Used as an alternative to the predefined dial strings above, setting a dial string (or "dial pattern") here will only allow entered prefixes to pass. There are listed one per line, both prefix and regular expressions are allowed. For example, if you only wanted to allow UK Landline you could use:

    Prefix
    ```
    441
    442
    ```

    Regular Expression (RegEx)
    ```
    44(1|2)
    ```

    Combination (UK Landline & Canada)
    ```
    441
    442
    ^1(204|226|236|249|250|289|306|343|403|416|418|438|450|506|514|519|579|581|587|604|613|647|705|709|778|780|807|819|867|902|905)
    ```

**Enabled**: The route can be easily enabled and disabled here. 


## Price Limits

**Capped Rate** and **Provider Capped Rate** are used to set the maximum cost of a call. Calls that exceed the set rate willl not be connected. 

**Profit Assurance** can be enabled to check if calls are profitable. It is useful for A-Z routes or NPA-NXX rate cards. 
+ The default option is `Disabled`. While `Enabled`, additional PDD may be added to the call.

**Block Connect Cost** Enabling this feature will block any call that has a connection cost. 


## Capacity Limits

**Channels** is used to set the maximum number of channels

**Max Duration** is the maximum amount of time that the call will be allowed to exist before being terminated, typically in the case of a missed BYE missed. 

!!! info "Call Timeouts"
    A VoIP call is stateful, even though its protocol is stateless. This means that both sides of the conversation have to be told when to finish the call. They do this with a BYE message. If the BYE message goes missing, the call will continue forever. Max Duration is a method for setting up **Missing BYE Protection**. Another method is by using a **SIP Ping** to determine when the connection has timed out. This sends a SIP packet to the remote end of the conversation roughly every 30 seconds. This checks to see if the other side is still aware of an ongoing conversation. If it is not received back, or is told that the conversation is not active, then it shuts off the call. **RTP Time-out:** is another way to check for an active call based on whether audio is passing. If there is no audio passing for a pre-set interval, our RTP array will notify the switch and instruct it to terminate the call.  This won't work if RTP Mode is set to direct.

!!! warning "Asterisk pings"
    Asterisk does not have SIP Ping (OPTIONS) enabled as default, if your customer / carrier is using Asterisk you may need to disable       this if they don't have it enabled on their side as calls will typically disconnect after 30 seconds. 

**Flow Speed (CPS)** limits the calls per second. This must be set for each customer card assigned to the customer account

**CPS Spike Buffer** limits a spike in calls per second. are used to manage large volumes of calls over short periods of time. Once the buffer limit is reached then the calls per second kicks in, spreading the spike of calls over a longer period of time. 

!!! note "CPS Buffering"
    CPS Buffering is used to manage large volumes of calls over a short period of time. This process maximises saturation and increases call completion within a given CPS restriction. It does this by removing spikes and borrowing capacity from future seconds. If incoming traffic exceeds your pre-set CPS, it holds the call for one second, and then tries again. You can increase the second count in the CPS Spike Buffer field. Changing the CPS Buffering value only affects calls that exceed the CPS. The delay will show as increased PDD on the call, each second the system will emit a 100 Trying (High CPS, Buffering) response to indicate the status/progress of the call.

**ASR Plus** is a proprietary technology developed by ConnexCS to filter known failed non-existant / working numbers between the customer and the carrier for termination. This is particularly useful with the larger call volumes. 
<div class="admonition success">
<p class="admonition-title">Advantages of ASR</p>
    <ul>
      <li>Quick failure of known bad numbers.</li>
      <li>Reduces response time for your customers.</li>
      <li>Improves the ASR of the traffic that your upstream carrier sees.</li>
      <li>Highly effective for call centre traffic.</li>
    </ul>
</div>
<div class="admonition failure">
<p class="admonition-title">Disadvantages of ASR</p>
    <ul>
      <li>Marginal impact on your NER due to false positive matches. This is usually kept within tolerances of < 0.1%.</li>
      <li>Does not offer improvements for all destinations.</li>
    </ul>
</div>

**ASR Settings**

| Value         | Description                | 
| ------------- |----------------------------| 
| Off           | ASR+ Disabled              | 
| ASR+ (Low)    | Active on 30% of calls     | 
| ASR+          | Active                     |
| ASR?          | When ASR+ is enabled on the provider card |
| ASR+?         | When ASR+ is enabled on the provider card, only known connected calls will be allowed to pass to specific provider |
| ASR++         | Only known connected calls will be allowed to pass (Rarely used as usually too strict) |

Unless it's turned off or customized otherwise, ASR+ is active for 90% of calls, which grants the opportunity for the database to be replenished.


## ScriptForge

The PHP ScriptForge allows for custom code to run from within the ConnexCS platform.  Script are assigned to customers within routing. For more information about setup and operation, see the [ScriptForge](https://docs.connexcs.com/developers/scriptforge/) page.

## Locks
Used for troublshooting, you can remove carriers from a route and run a quick test.  
+ **Lock** Parent Card: Choose this option to lock a rate card from the list of available providers. 
+ **Exclude** Parent Card: Choose this option to exclude access to one or more of the rate cards in the list of available providers.

## Media

**Transcoding**
This option is limited. Best use case is for customers in low-bandwidth areas that want to use G.729. Be aware that if you don't have enough transcoding capacity, calls will fail. 

**SIP Ping**
Sends regular ping to ensure both sides of a call are still up, in case of potential failed ACK. Enabled is the recommended setting. 

**SIP Session Timer (SST)** 
When enabled, SST ensures there are no ghost or long-duration calls being billed when one or both sides have hung up. A timer is activated when the call starts and refreshes the call every X amount of seconds by sending a RE-INVITE. SST is currently the best way to prevent long-duration calls, superceeding SIP Ping Timeout. Note that any SST less than sixty (60) seconds will be rejected

Passive SST is enabled by default, Enabled is the recommended setting. 

|SST Options              | Result                                                                                           |
|-------------------------|:------------------------------------------------------------------------------------------------:|
| **Default**             | No headers are changed and no SST is engaged, all RE-INVITES will propagate through the system   |
| **Enabled Both**        | ConnexCS will send SIP Session Timers to both legs of the call                                   |
| **Enabled (Upstream)**  | ConnexCS will use SST with the carrier                                                           |
| **Enabled (Downstream)**| ConnexCS will use SST with the customer                                                          |
| **Suggest**             | Session-Expire headers and Min-SE are added to packets sent to carrier encouraging the use of SST|
| **Disabled**            | All ```timer``` headers are removed                                                              |



**RTP Media Proxy**
This defaults to Auto but selecting a zone is the current recommendation. Choose which RTP Proxy you want engaged:  

* **Auto**: uses the least expensive path between your customer and provider.  You can list various countries, though it is recommended you choose a location near a provider or your customer. 
* **Direct RTP (no proxy)**: media flows directly between the customer and carrier. Direct RTP also means that if there are audio issues, the issue can't be ConnexCS. Since it isn't likely to be the carrier, the issue typically exists on the customer's end. 


**RTP Proxy Mode**
If connection via our service fails, and relaxed is selected, it will failover to backup automatically. 

* **Strict**: This will enforce the proxy engagement. If the proxy can't engage with the call, the call will not be established. Note: Free accounts are limited to how many RTP Proxy channels are enabled, this may prevent calls connecting if you have more channels than our free accounts allow you to have.
* **Relaxed**: This will perform best efforts to engage the RTP Proxy, if it can't be engaged because of either network errors, or because you don't have enough RTP capacity, the calls will connect directly.


**RTP Proxy distinctions**
When a call is established between customer and provider, audio can be set-up in one of two ways:

|                        | **With RTP Proxy** |  **Without RTP Proxy** |
|------------------------|:------------------:|-----------------------:|
| **Audio Path**         | Indirect           | Direct                 |
| **Audio Quality**      | Excellent          | Unbeatable             |
| **Latency**            | Low                | Lowest                 |
| **Information Leakage**| No                 |  Yes*                  |

*While it's doubtful that any information will be logged in the customer/providers switch when the audio is engaged, it is possible for an engineer to learn this information from a SIP trace, pcap, or by looking at transit locations. DTMF Detection ONLY works when RTP Proxy mode is enabled.


!!! info "When should I use RTP Proxy?"
Use an RTP Proxy if you don't want your customers to know your providers.

!!! warning "When should I avoid using RTP Proxy?"
You have other equipment in your SIP set-up which will act as a Media Relay or you want to run a test to see if audio problems are related to the Connex Cloud Switch.


**Call Recording**


## Strategy
Part of RTP Proxy, calls are passed based on the routing strategy you set.

