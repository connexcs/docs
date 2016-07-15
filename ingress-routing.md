<h2>Ingress Routing</h2>

Ingress routing allows incoming attempts to be sent to the correct rate card which in turn egress through the specified provider.

Ingress routing allows for lots of rate cards to be used with or without a prefix. This is checked according to the longest prefix first through to the shortest for a match. If no prefix is matched then it will begin matching the rules of the rate cards. Rate cards with mutually exclusive destinations will route without problems, but rate cards which have prefixes with collisions will have no guarantee which the calls will be sent to.

Tariff

Tariff lets you select the rate card to be used on the customer account

Tech Prefix

It is possible for multiple customers to share the same IP address and to be distinguished by Tech Prefix. Multiple rate cards can be separated with the help of a tech prefix

Channels

This will impose a limit on how many channels are allowed through this ingress route. This is an independent setting from any customer imposed channel limitations which will still apply.

Dial string

Dial string will let only the entered prefixes through, listed as one per line. Note: Both prefix and regular expressions are allowed, for example, if you only wanted to allow UK Landline you could use

Prefix

441
442

Regular Expression (RegEx)

44(1|2)

Combination (UK Landline & Canada)

441
442
^1(204|226|236|249|250|289|306|343|403|416|418|438|450|506|514|519|579|581|587|604|613|647|705|709|778|780|807|819|867|902|905)

Missing BYE Protection

A VoIP call is stateful, however its protocol is stateless. This means that both sides of the conversation have to be told when to finish the call. They do this with a BYE message, if the BYE message goes missing, then the call will continue forever, we have the following preventions put in place to stop this happening.
Maximum Duration

In the event that a BYE gets missed, the Maximum Duration will be the maximum amount of time that the call will be allowed to exist before being terminated.

Time-out Methods

SIP Ping

This sends a SIP packet to the remote end of the conversation roughly every 30 seconds. This helps to check if the other side is still aware of an ongoing conversation. If this is not received back, or is told that the conversation is not active then it shuts off the call.

RTP Time-out

Another way to check for an active call is to detect if there is audio passing. If there is no audio passing for a pre-set interval, our RTP array will notify the switch and instruct it to terminate the call.

Note: this will not work if RTP Mode is set direct

Profit Assurance

If you wish to check every call to ensure it is profitable you can enable Profit Assurance here. This is very useful for A-Z routes or NPA-NXX rate cards, however if you have a very simple rate card, where you know you will always be profitable on ALL upstream routes, you can disable this.

The default option here is Disabled, as Enabled can add additional PDD to the call while the checks take place.

Lock Parent Card

If you wish to lock a particular rate card from the list of providers you have added, you can choose this option. This will allow only the rate cards which have been selected.

Exclude Parent Cards:

If you wish to access rate cards from all the providers on your list except for one particular rate card that has to be excluded you can choose this option.

ScriptForge

The PHP ScriptForge allows your own custom code to be run from within the ConnexCS platform.

RTP Proxy Modes

When a call is established between customer and provider, there are two ways in which the audio can be set-up.
<table>
<tr><td></td><td>With RTP Proxy</td><td>Without RTP Proxy</td></tr>
<tr><td>Audio Path</td><td>Indirect</td><td>Direct</td></tr>
<tr><td>Audio Quality</td><td>Excellent</td><td>Unbeatable</td></tr>
<tr><td>Latency</td><td>Low</td><td>Lowest</td></tr>
<tr><td>Information Leakage</td><td>No</td><td>Yes*</td></tr>
</table>
 	

Note: It is important to be aware, although its doubtful that any information will be logged in the customer/providers switch where the audio is engaged. It is entirely possible for an engineer to find this information out from a SIP trace, pcap or watching transit locations.

Please note DTMF Detection ONLY works when RTP Proxy mode is enabled

When should I use with/without RTP Proxy?

You should use an RTP Proxy if:

    You don't want your customers to know your providers.

You could not use an RTP Proxy if:

    You have other equipment in your SIP set-up which will act as a Media Relay.
    You want to run a test to see if audio problems are related to the Connex Cloud Switch.

    Options:-

RTP Media Proxy

Selection of which (if any RTP Proxy you want engaged).

    Auto will select the least cost path between your customer and provider.

    Various countries will be listed, its recommended that you choose a location that is near your provider or your customer.
    Direct (No RTP Proxy) - This will DISABLE RTP Proxy Engagement.

RTP Proxy Mode

    Strict - This will enforce the proxy engagement, if the proxy cant engage with the call, the call will not be established. Note: Free accounts are limited to how many RTP Proxy channels are enabled, this may prevent calls connecting if you have more channels than our free accounts allow you to have.
    Relaxed - This will perform best efforts to engage the RTP Proxy, if it can't be engaged because of either network errors, or because you don't have enough RTP capacity, the calls will connect directly.

Strategy

Strategy lets you pass the calls based on the routing strategy you set.
