<h2>Call Orgination</h2>

<b>Dial</b>
<b>Service Based Call Origination for Dialler Applications</b>
<b>API URL</b>

http://api.connexcs.com/api/dial/dial.[response_format]?trunk=[hostname/ip]&number=[number]&cli=[cli]

<h4>Request Parameters</h4>

Param 	Description
trunk 	Destination of outbound gateway to be dialled, (Hostname or IP Address)
cli 	CLI/ANI to be presented
number[] number[] 	Destination number to be dialled Can be provided multiple times
name 	Textual name of the number dialled (useful when routing back).
header_[?] 	Headers to be added to outbound call leg A (Max 4)
route_all 	Where to route calls to (IVR/[dialstring]), (not used if amd is enabled)
amd_enabled 	Enable AMD (Set Value to 1)
amd_initialsilence 	Default: 2500, Settings based on Asterisk AMD
amd_greeting 	Default: 1500, Settings based on Asterisk AMD
amd_aftergreetingsilence 	Default: 800, Settings based on Asterisk AMD
amd_totalanalysistime 	Default: 5000, Settings based on Asterisk AMD
amd_minwordlength 	Default: 100, Settings based on Asterisk AMD
amd_betweenwordssilence 	Default: 50, Settings based on Asterisk AMD
amd_maximumnumberofwords 	Default: 3, Settings based on Asterisk AMD
amd_silencethreshold 	Default: 256, Settings based on Asterisk AMD
amd_human 	Where to route calls which amd detects as HUMAN (hangup/ivr/[dialstring])
amd_machine 	Where to route calls which amd detects as MACHINE (hangup/ivr/[dialstring])
ivr_key_[?] 	Where to route calls to on Key Press x=(0,1,2,3,4,5,6,7,8,9,0,HASH,STAR) e.g ivr_key_1=incomming@my.server.net
msg_ivr 	URL of message which is to be played on the IVR
msg_key_[?] 	URL of message to be played when IVR key is pressed
msg_all 	URL of message to be played when call is answered
msg_human 	URL of message to be played when AMD detects human
msg_machine 	URL of message to be played when AMD detects machine

<h4>Response Parameters</h4>
Param 	Example 	Description
calls 	Array 	Array containing each number dialled and success/fail
