<h2>Ingress Routing</h2>

Ingress routing allows incoming attempts to be sent to the correct rate card which in turn egress through the specified provider.

Ingress routing allows for lots of rate cards to be used with or without a prefix. This is checked according to the longest prefix first through to the shortest for a match. If no prefix is matched then it will begin matching the rules of the rate cards. Rate cards with mutually exclusive destinations will route without problems, but rate cards which have prefixes with collisions will have no guarantee which the calls will be sent to.

<h4><b>Tariff</b></h4>

Tariff lets you select the rate card to be used on the customer account

<h4><b>Tech Prefix</b></h4>

It is possible for multiple customers to share the same IP address and to be distinguished by Tech Prefix. Multiple rate cards can be separated with the help of a tech prefix

<h4><b>Channels</b></h4>

This will impose a limit on how many channels are allowed through this ingress route. This is an independent setting from any customer imposed channel limitations which will still apply.

<h4><b>Dial string</b></h4>

Dial string will let only the entered prefixes through, listed as one per line. Note: Both prefix and regular expressions are allowed, for example, if you only wanted to allow UK Landline you could use

<h4>Prefix</h4>

 1. 441
 2. 442

<h4>Regular Expression (RegEx)</h4>

44(1|2)

 <h4>Combination (UK Landline & Canada)</h4>

 441
 442
 ^1(204|226|236|249|250|289|306|343|403|416|418|438|450|506|514|519|579|581|587|604|613|647|705|709|778|780|807|819|867|902|905)

<h4><b>Missing BYE Protection</b></h4>

A VoIP call is stateful, however its protocol is stateless. This means that both sides of the conversation have to be told when to finish the call. They do this with a BYE message, if the BYE message goes missing, then the call will continue forever, we have the following preventions put in place to stop this happening.

<h4><b>Maximum Duration</b></h4>

In the event that a BYE gets missed, the Maximum Duration will be the maximum amount of time that the call will be allowed to exist before being terminated.

<h4><b>Time-out Methods</b></h4>

&#x25cf; SIP Ping

This sends a SIP packet to the remote end of the conversation roughly every 30 seconds. This helps to check if the other side is still aware of an ongoing conversation. If this is not received back, or is told that the conversation is not active then it shuts off the call.

&#x25cf; RTP Time-out

Another way to check for an active call is to detect if there is audio passing. If there is no audio passing for a pre-set interval, our RTP array will notify the switch and instruct it to terminate the call.

<b>Note:</b> this will not work if RTP Mode is set direct

<h4><b>Profit Assurance</b></h4>

If you wish to check every call to ensure it is profitable you can enable Profit Assurance here. This is very useful for A-Z routes or NPA-NXX rate cards, however if you have a very simple rate card, where you know you will always be profitable on ALL upstream routes, you can disable this.

The default option here is Disabled, as Enabled can add additional PDD to the call while the checks take place.

<h4><b>Lock Parent Card</b></h4>

If you wish to lock a particular rate card from the list of providers you have added, you can choose this option. This will allow only the rate cards which have been selected.

<h4><b>Exclude Parent Cards:</b></h4>

If you wish to access rate cards from all the providers on your list except for one particular rate card that has to be excluded you can choose this option.

<h4><b>ScriptForge</b></h4>

The PHP ScriptForge allows your own custom code to be run from within the ConnexCS platform.

<h4><b>RTP Proxy Modes</b></h4>

When a call is established between customer and provider, there are two ways in which the audio can be set-up.

<table>
<tr><td></td><td><b>With RTP Proxy</b></td><td><b>Without RTP Proxy</b></td></tr>
<tr><td><b>Audio Path</b></td><td>Indirect</td><td>Direct</td></tr>
<tr><td><b>Audio Quality</b></td><td>Excellent</td><td>Unbeatable</td></tr>
<tr><td><b>Latency</b></td><td>Low</td><td>Lowest</td></tr>
<tr><td><b>Information Leakage</b></td><td>No</td><td>Yes*</td></tr>
</table>
 	
Note: It is important to be aware, although its doubtful that any information will be logged in the customer/providers switch where the audio is engaged. It is entirely possible for an engineer to find this information out from a SIP trace, pcap or watching transit locations.

Please note DTMF Detection ONLY works when RTP Proxy mode is enabled

<b>When should I use with/without RTP Proxy?</b>

You should use an RTP Proxy if:

You don't want your customers to know your providers.

You could not use an RTP Proxy if:

1. You have other equipment in your SIP set-up which will act as a Media Relay.
2. You want to run a test to see if audio problems are related to the Connex Cloud Switch.

<h4><b>Options:-</b></h4>

<b>RTP Media Proxy</b>

Selection of which (if any RTP Proxy you want engaged).

Auto will select the least cost path between your customer and provider.

1. Various countries will be listed, its recommended that you choose a location that is near your provider or your customer.
2. Direct (No RTP Proxy) - This will DISABLE RTP Proxy Engagement.

<b>RTP Proxy Mode</b>

1. Strict - This will enforce the proxy engagement, if the proxy cant engage with the call, the call will not be established. Note: Free accounts are limited to how many RTP Proxy channels are enabled, this may prevent calls connecting if you have more channels than our free accounts allow you to have.

2. Relaxed - This will perform best efforts to engage the RTP Proxy, if it can't be engaged because of either network errors, or because you don't have enough RTP capacity, the calls will connect directly.

<b>Strategy</b>

Strategy lets you pass the calls based on the routing strategy you set.
