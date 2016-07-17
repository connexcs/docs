<h2>Call Orgination</h2>

<b>Dial</b>
<b>Service Based Call Origination for Dialler Applications</b>
<b>API URL</b>

http://api.connexcs.com/api/dial/dial.[response_format]?trunk=[hostname/ip]&number=[number]&cli=[cli]

<h4>Request Parameters</h4>
<table class="table"><thead><tr><th>Param</th>
<th>Description</th>
</tr></thead><tbody><tr><td>trunk</td>
<td>Destination of outbound gateway to be dialled, (Hostname or IP Address)</td>
</tr><tr><td>cli</td>
<td>CLI/ANI to be presented</td>
</tr><tr><td>number[] <em>number[]</em></td>
<td>Destination number to be dialled <em>Can be provided multiple times</em></td>
</tr><tr><td>name</td>
<td>Textual name of the number dialled (useful when routing back).</td>
</tr><tr><td>header_[?]</td>
<td>Headers to be added to outbound call leg A (Max 4)</td>
</tr><tr><td>route_all</td>
<td>Where to route calls to (IVR/[dialstring]), (not used if amd is enabled)</td>
</tr><tr><td>amd_enabled</td>
<td>Enable AMD (Set Value to 1)</td>
</tr><tr><td>amd_initialsilence</td>
<td>Default: 2500, Settings based on <a title="Asterisk AMD" href="http://www.voip-info.org/wiki/view/Asterisk+cmd+AMD/" rel="nofollow">Asterisk AMD</a></td>
</tr><tr><td>amd_greeting</td>
<td>Default: 1500, Settings based on <a title="Asterisk AMD" href="http://www.voip-info.org/wiki/view/Asterisk+cmd+AMD/" rel="nofollow">Asterisk AMD</a></td>
</tr><tr><td>amd_aftergreetingsilence</td>
<td>Default: 800, Settings based on <a title="Asterisk AMD" href="http://www.voip-info.org/wiki/view/Asterisk+cmd+AMD/" rel="nofollow">Asterisk AMD</a></td>
</tr><tr><td>amd_totalanalysistime</td>
<td>Default: 5000, Settings based on <a title="Asterisk AMD" href="http://www.voip-info.org/wiki/view/Asterisk+cmd+AMD/" rel="nofollow">Asterisk AMD</a></td>
</tr><tr><td>amd_minwordlength</td>
<td>Default: 100, Settings based on <a title="Asterisk AMD" href="http://www.voip-info.org/wiki/view/Asterisk+cmd+AMD/" rel="nofollow">Asterisk AMD</a></td>
</tr><tr><td>amd_betweenwordssilence</td>
<td>Default: 50, Settings based on <a title="Asterisk AMD" href="http://www.voip-info.org/wiki/view/Asterisk+cmd+AMD/" rel="nofollow">Asterisk AMD</a></td>
</tr><tr><td>amd_maximumnumberofwords</td>
<td>Default: 3, Settings based on <a title="Asterisk AMD" href="http://www.voip-info.org/wiki/view/Asterisk+cmd+AMD/" rel="nofollow">Asterisk AMD</a></td>
</tr><tr><td>amd_silencethreshold</td>
<td>Default: 256, Settings based on <a title="Asterisk AMD" href="http://www.voip-info.org/wiki/view/Asterisk+cmd+AMD/" rel="nofollow">Asterisk AMD</a></td>
</tr><tr><td>amd_human</td>
<td>Where to route calls which amd detects as HUMAN (hangup/ivr/[dialstring])</td>
</tr><tr><td>amd_machine</td>
<td>Where to route calls which amd detects as MACHINE (hangup/ivr/[dialstring])</td>
</tr><tr><td>ivr_key_[?]</td>
<td>Where to route calls to on Key Press x=(0,1,2,3,4,5,6,7,8,9,0,HASH,STAR) e.g ivr_key_1=incomming@my.server.net</td>
</tr><tr><td>msg_ivr</td>
<td>URL of message which is to be played on the IVR</td>
</tr><tr><td>msg_key_[?]</td>
<td>URL of message to be played when IVR key is pressed</td>
</tr><tr><td>msg_all</td>
<td>URL of message to be played when call is answered</td>
</tr><tr><td>msg_human</td>
<td>URL of message to be played when AMD detects human</td>
</tr><tr><td>msg_machine</td>
<td>URL of message to be played when AMD detects machine</td>
</tr></tbody></table><h2><strong>Response Parameters</strong></h2>
<table class="table"><thead><tr><th>Param</th>
<th>Example</th>
<th>Description</th>
</tr></thead><tbody><tr><td>calls</td>
<td>Array</td>
<td>Array containing each number dialled and success/fail</td></tr></tbody></table>
