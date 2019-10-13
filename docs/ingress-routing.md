# Routing

Routing allocates incoming attempts to a designated rate card, which in turn egresses through a specified provider. It allows multiple rate cards to be used with or without a prefix. This is checked according to the longest prefix first, then the shortest for a match. If no prefix is matched, it will match the rate cards with mutually exclusive destinations.  If there are multiple rate cards with the same prefixes, you must set up a dial plan with a tech prefix to identify the correct card.

## Tariff

Tariffs let you select which rate card is used on a customer's account.

## Tech Prefix

It is possible for multiple customers to share the same IP address, and to be sorted by Tech Prefix. It lets providers separate multiple rate cards.

## Channels

Here you can place limits on how many channels are allowed through each route. It is independent of any customer-imposed channel limitations, which still apply.

## Dial string

A dial string will only allow entered prefixes to pass, listed as one per line. Both prefix and regular expressions are allowed. For example, if you only wanted to allow UK Landline you could use:

* Prefix

```
441
442
```

* Regular Expression (RegEx)
```
44(1|2)
```
* Combination (UK Landline & Canada)
```
441
442
^1(204|226|236|249|250|289|306|343|403|416|418|438|450|506|514|519|579|581|587|604|613|647|705|709|778|780|807|819|867|902|905)
```
## Missing BYE Protection

A VoIP call is stateful, even though its protocol is stateless. This means that both sides of the conversation have to be told when to finish the call. They do this with a BYE message. If the BYE message goes missing, the call will continue forever.  The following are the methods we use to stop that from happening.

* **Maximum Duration**: If a BYE gets missed, Maximum Duration is the maximum amount of time that the call will be allowed to exist before being terminated.
* **Time-out Methods**

    * **SIP Ping:** This sends a SIP packet to the remote end of the conversation roughly every 30 seconds. This checks to see if the other side is still aware of an ongoing conversation. If this is not received back, or is told that the conversation is not active then it shuts off the call. 
Note: Asterisk does not have SIP Ping (OPTIONS) enabled as default, if your customer / carrier is using Asterisk you may need to disable this if they don't have it enabled on their side as calls will typically disconnect after 30 seconds. 
    * **RTP Time-out:** Another way to check for an active call is to detect if there is audio passing. If there is no audio passing for a pre-set interval, our RTP array will notify the switch and instruct it to terminate the call.  This won't work if RTP Mode is set to direct.

## Profit Assurance

To check if calls are profitable, enable **Profit Assurance**. It is useful for A-Z routes or NPA-NXX rate cards. 

The default option is `Disabled`, while `Enabled` can add additional PDD to the call.

## Lock Parent Card

To lock a rate card from the list of providers you have added, choose this option. 

## Exclude Parent Cards

To exclude access to one or more of the rate cards from providers on your list, choose this option.

## ScriptForge

The PHP ScriptForge allows for custom code to run from within the ConnexCS platform.  For more information, see the [ScriptForge] page.

## RTP Proxy 

When a call is established between customer and provider, audio can be set-up in one of two ways:

|                        | **With RTP Proxy** |  **Without RTP Proxy** |
|------------------------|:------------------:|-----------------------:|
| **Audio Path**         | Indirect           | Direct                 |
| **Audio Quality**      | Excellent          | Unbeatable             |
| **Latency**            | Low                | Lowest                 |
| **Information Leakage**| No                 |  Yes*                  |

 	
While it's doubtful that any information will be logged in the customer/providers switch when the audio is engaged, it is possible for an engineer to learn this information from a SIP trace, pcap, or by looking at transit locations. DTMF Detection ONLY works when RTP Proxy mode is enabled.

**When should I use with/without RTP Proxy?**

Use an RTP Proxy if you don't want your customers to know your providers.

You should **not** use an RTP Proxy if:

* You have other equipment in your SIP set-up which will act as a Media Relay.
* You want to run a test to see if audio problems are related to the Connex Cloud Switch.

**RTP Options**

Choose which RTP Proxy you want engaged:  

* Selecting **Auto** will use the least expensive path between your customer and provider.  You can list various countries, though it is recommended you choose a location near a provider or your customer. 
* Choosing **Disable** will disable RTP Proxy Engagement.
* **Strategy** lets you pass the calls based on the routing strategy you set.

There are two RTP proxy modes:

* **Strict**-This will enforce the proxy engagement. If the proxy can't engage with the call, the call will not be established. Note: Free accounts are limited to how many RTP Proxy channels are enabled, this may prevent calls connecting if you have more channels than our free accounts allow you to have.
* **Relaxed**-This will perform best efforts to engage the RTP Proxy, if it can't be engaged because of either network errors, or because you don't have enough RTP capacity, the calls will connect directly.

## CPS Buffering

CPS Buffering is a process that maximises saturation and increases call completion within a given CPS restriction. It does this by removing spikes and borrowing capacity from future seconds. If incoming traffic exceeds your pre-set CPS, it holds the call for one second, and then tries again. You can increase the second count in the CPS Spike Buffer field.

Changing the CPS Buffering value only affects calls that exceed the CPS. The delay will show as increased PDD on the call, each second the system will emit a 100 Trying (High CPS, Buffering) response to indicate the status/progress of the call.

**CPS Limitation** 

**Calls Per Second** can be limited in Ingress Routing. You can set CPS limitations on each customer card assigned to the customer account

## SIP Session Timers (SST)
**SIP Session Timers** ensure there are no ghost or long-duration calls being billed when one or both sides have hung up. A timer is activated when the call starts and refreshes the call every X amount of seconds by sending a RE-INVITE. SST is currently the best way to prevent long-duration calls, superceeding SIP Ping Timeout. Note that any SST less than sixty(60) seconds will be rejected

Passive SST is enabled by default, and all RE-INVITES will propagate through the system. It is also possible to be proactive about the RE-INVITES, instructing the ConnexCS switch to send upstream to the carrier, downstream to the customer, or in both directions.

**SST Options**

 - **Default:** No headers are changed and no SST is engaged
 - **Disabled:** All ```timer``` headers are removed
 - **Suggest:** Session-Expire headers and Min-SE are added to packets sent to carrier encouraging the use of SST.
 - **Enabled Both:** ConnexCS will send SIP Session Timers to both legs of the call.
 - **Enabled (Upstream(:** ConnexCS will use SST with the carrier.
 - **Enabled (Downstream):** ConnexCS will use SST with the customer.

## ASR+
ASR+ is a proprietary technology developed by ConnexCS to filter known failed non-existant / working numbers between the customer and the carrier for termination.

**Advantages of ASR**

* Quick failure of known bad numbers.
* Reduces response time for your customers.
* Improves the ASR of the traffic that your upstream carrier sees.
* Highly effective for call centre traffic.

**Disadvantages of ASR**

* Marginal impact on your NER due to false positive matches. This is usually kept within tolerances of < 0.1%.
* Does not offer improvements for all destinations.

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
