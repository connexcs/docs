# Table of Contents

* [Table of Contents](#table-of-contents)
* [Ingress Routing](#ingress-routing)
    * [Tariff](#tariff)
    * [Tech Prefix](#tech-prefix)
    * [Channels](#channels)
    * [Dial String](#dial-string)
    * [Missing BYE Protection](#missing-bye-protection)
    * [Maximum Duration](#maximum-duration)
    * [Time-out Methods](#time-out-methods)
    * [Profit Assurance](#profit-assurance)
    * [Lock Parent Card](#lock-parent-card)
    * [Exclude Parent Cards](#exclude-parent-cards)
    * [ScriptForge](#scriptforge)
    * [RTP Proxy Modes](#rtp-proxy-modes)
    * [Options](#options)
    * [CPS Buffering](#cps-buffering)
    * [CPS Limitation ](#cps-limitation)
	* [SIP Session Timers](#sip-session-timers)
    * [ASR+](#asr-plus)

# Ingress Routing

Ingress routing allows incoming attempts to be sent to the correct rate card which in turn egress through the specified provider.

Ingress routing allows for lots of rate cards to be used with or without a prefix. This is checked according to the longest prefix first through to the shortest for a match. If no prefix is matched then it will begin matching the rules of the rate cards and rate cards with mutually exclusive destinations will route without problems.  If there are multiple rate cards with the same prefixes in ingress routing, you must specify a dial plan of a tech prefix to correctly identify the correct card to be used.

## Tariff

Tariff lets you select the rate card to be used on the customer account.

## Tech Prefix

It is possible for multiple customers to share the same IP address and to be distinguished by Tech Prefix. Multiple rate cards can be separated with the help of a tech prefix.

## Channels

This will impose a limit on how many channels are allowed through this ingress route. This is an independent setting from any customer imposed channel limitations which will still apply.

## Dial string

A dial string will only let the entered prefixes pass through, listed as one per line. Note: Both prefix and regular expressions are allowed, for example, if you only wanted to allow UK Landline you could use:

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

A VoIP call is stateful, however its protocol is stateless. This means that both sides of the conversation have to be told when to finish the call. They do this with a BYE message, if the BYE message goes missing, then the call will continue forever, we have the following preventions in place to stop this happening.

## Maximum Duration

In the event that a BYE gets missed, the Maximum Duration will be the maximum amount of time that the call will be allowed to exist before being terminated.

## Time-out Methods

* SIP Ping

This sends a SIP packet to the remote end of the conversation roughly every 60 seconds. This helps to check if the other side is still aware of an ongoing conversation. If this is not received back, or is told that the conversation is not active then it shuts off the call. Also please note that any SST < 60 seconds will be rejected

* RTP Time-out

Another way to check for an active call is to detect if there is audio passing. If there is no audio passing for a pre-set interval, our RTP array will notify the switch and instruct it to terminate the call.

**Note:** this will not work if RTP Mode is set to: direct.

## Profit Assurance

If you wish to check every call to ensure it is profitable you can enable Profit Assurance here. This is very useful for A-Z routes or NPA-NXX rate cards, however if you have a very simple rate card, where you know you will always be profitable on ALL upstream routes, you can disable this.

The default option here is disabled, as Enabled can add additional PDD to the call while the checks take place.

## Lock Parent Card

If you wish to lock a particular rate card from the list of providers you have added, you can choose this option. This will allow only the rate cards which have been selected.

## Exclude Parent Cards

If you wish to access rate cards from all the providers on your list except for one particular rate card that has to be excluded you can choose this option.

## ScriptForge

The PHP ScriptForge allows your own custom code to be run from within the ConnexCS platform.

## RTP Proxy Modes

When a call is established between customer and provider, there are two ways in which the audio can be set-up.

|  |      **With RTP Proxy**      |  **Without RTP Proxy** |
|----------|:-------------:|------:|
| **Audio Path** |  Indirect | Direct |
| **Audio Quality** |    Excellent  |  Unbeatable|
| **Latency** | Low |    Lowest |
| **Information Leakage**| No |   Yes* |

 	
**Note:** It is important to be aware, although it's doubtful that any information will be logged in the customer/providers switch where the audio is engaged. It is entirely possible for an engineer to find this information out from a SIP trace, pcap or watching transit locations.

Please note DTMF Detection ONLY works when RTP Proxy mode is enabled

**When should I use with/without RTP Proxy?**

You should use an RTP Proxy if:

You don't want your customers to know your providers.

You should not use an RTP Proxy if:

1. You have other equipment in your SIP set-up which will act as a Media Relay.
2. You want to run a test to see if audio problems are related to the Connex Cloud Switch.

## Options

* RTP Media Proxy

Selection of which, if any, RTP Proxy you want engaged.

Auto will select the least cost path between your customer and provider.

1. Various countries will be listed, it's recommended that you choose a location that is near your provider or your customer.
2. Direct (No RTP Proxy) - This will DISABLE RTP Proxy Engagement.

**RTP Proxy Mode**

1. Strict - This will enforce the proxy engagement. If the proxy can't engage with the call, the call will not be established. Note: Free accounts are limited to how many RTP Proxy channels are enabled, this may prevent calls connecting if you have more channels than our free accounts allow you to have.

2. Relaxed - This will perform best efforts to engage the RTP Proxy, if it can't be engaged because of either network errors, or because you don't have enough RTP capacity, the calls will connect directly.

**Strategy**

Strategy lets you pass the calls based on the routing strategy you set.

## CPS Buffering

CPS Buffering is a process to maximise saturation and increase call completion within a given CPS restriction. It does this by removing spikes and borrow capacity from future seconds.

If the incoming traffic exceeds your pre-set CPS, it holds the call for 1 second then tries again. It does this for as many seconds as you set in the CPS Spike Buffer field.

Changing this value only affects calls which exceed the CPS, no other calls will be affected. This delay will show as increased PDD on the call, each second the system will emit a 100 Trying (High CPS, Buffering) response to indicate the status/progress of the call.

## CPS limitation 

The Calls Per Second can be limited on Ingress Routing. This means you can set the CPS limitation on each customer card that you assign on the customer account

## SIP Session Timers
SIP session timers is a method of ensuring that there are no ghost or long duration calls which are being billed, even though one or both sides have hung up. This works by a timer created when the call starts and refreshes the call every X seconds by sending a RE-INVITE.

Passive SST is enabled as default and without changing any settings, all RE-INVITES will propagate through the system.
It is also possible to be proactive about the RE-INVITES, instructing the ConnexCS switch to send these: upstream to the carrier, downstream to the customer or in both directions.

SST is currently the best way to prevent long duration calls and superceeds SIP Ping Timeout.

## ASR+
ASR+ is a proprietary technology developed by ConnexCS to help filter known failed non-existant / working numbers between the customer and the carrier for termination.

### Advantages
- Quick failure of known bad numbers, reduces response time for your customers.
- Improves the ASR of the traffic that your upstream carrier sees.
- Highly effective for call center traffic.

### Disadvantages
- Marginal impact on your NER due to false positive matches. This is usually kept within tolerances of < 0.1%.
- Does not off improvements over all destinations.

### Settings
| Value         | Description                | 
| ------------- |----------------------------| 
| Off           | ASR+ Disabled              | 
| ASR+ (Low)    | Active on 30% of calls     | 
| ASR+          | Active     |
| ASR?          | When ASR+ is enabled on the provider card |
| ASR+?         | When ASR+ is enabled on the provider card, only known connected calls will be allowed to pass to specific provider |
| ASR++         | Only known connected calls will be allowed to pass (Rarely used as usually too strict) |

* Unless off or otherwise mentioned, ASR+ is active for 90% of calls, this gives the opportunity for the database to be replinished.
