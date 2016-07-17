<h2>Smart Lookup</h2>

Smart lookup combines: ASR+, TPS, Range, HLR, LRN & Ping, into a single request, which is also capable of performing multiple lookups.

<h4>API URL</h4>

http://api.connexcs.com/api/lookup/smart.[response_format]?number=[number]&type=[type]

<h4>Multiples</h4>

You can request multiple lookups to be performed with the type parameter for example

http://api.connexcs.com/api/lookup/smart.[response_format]?number=[number]&type=asrplus,hlr

<b>OR</b>

http://api.connexcs.com/api/lookup/smart.[response_format]?number=[number]&type[]=asrplus&type[]=hlr

<h4>You can perform lookups of multiple numbers with the following format:</h4>

http://api.connexcs.com/api/lookup/smart.[response_format]?number=44123456789,441987321546&type=[type]

<b>OR</b>

http://api.connexcs.com/api/lookup/smart.[response_format]?number[]=44123456789,number[]=441987321546&type=[type]

<h4>Request Parameters</h4>
<table>
<tr><td><b>Param</b></td><td>Description</td></tr>
<tr><td>number</td><td>This parameter contains the number which you wish to query against our database. (E164 format)</td></tr>
<tr><td>type</td><td>1 or more of the following: asrplus, tps, range, lrn, hlr, ping</td></tr>
</table>

<h4>Response Parameters</h4>

Responses will be nested in the number type then the lookup type, for example if we queried the numbers 123456789 and 987654321 with asrplus and range we may get a result in the following structure

&#x25cf; 123456789
&#x25cf; asrplus {...}
&#x25cf; range {...}
&#x25cf; 987654321
&#x25cf; asrplus {...}
&#x25cf; range {...}

<h4>ASRPlus</h4>
<table><thead><tr><th>Param</th>
<th>Example</th>
<th>Description</th>
</tr></thead><tbody><tr><td>code</td>
<td>404</td>
<td>The SIP Code response that we have cached in our system, usually 404.</td>
</tr><tr><td>reason</td>
<td>Not Found</td>
<td>The SIP Response code that we have cached. </td>
</tr><tr><td>date/time</td>
<td>1357907962</td>
<td>The date/time (in unix timestamp format) when the record was added.</td>
</tr><tr><td>age</td>
<td>970150</td>
<td>Age in seconds since this record was added.</td>
</tr><tr><td>age_days</td>
<td>11</td>
<td>Age in days since the record was added, we keep the record for a maximum of 30 days.</td>
</tr></tbody></table><h2><strong>UK Lookup</strong></h2>
<table class="table"><thead><tr><th>Param</th>
<th>Example</th>
<th>Description</th>
</tr></thead><tbody><tr><td>area_code</td>
<td>1132</td>
<td>The UK area code that this number belongs to</td>
</tr><tr><td>de</td>
<td>00</td>
<td>The Zone Range</td>
</tr><tr><td>fg</td>
<td>BT</td>
<td>Who this number range belongs to</td>
</tr><tr><td>status</td>
<td>Allocated</td>
<td>One of (Allocated / Free for National Dialling Only / Protected / Free / Unusable / Withdrawn / Designated / Unavailable)</td>
</tr><tr><td>date_modified</td>
<td>24/09/2004</td>
<td>Date in which the record was last changed.</td>
</tr></tbody></table><h2><strong>HLR Lookup</strong></h2>
<table class="table"><thead><tr><th>Param</th>
<th>Example</th>
<th>Description</th>
</tr></thead><tbody><tr><td>mcc</td>
<td>234</td>
<td>Mobile Country Code.</td>
</tr><tr><td>mnc</td>
<td>10</td>
<td>Mobile Network Code</td>
</tr><tr><td>country</td>
<td>United Kingdom(+44)</td>
<td>The Country information as returned by HLR</td>
</tr><tr><td>brand</td>
<td>O2 (UK)</td>
<td>Network Brand.</td>
</tr><tr><td>operator</td>
<td>Telefonica Europe</td>
<td>The Mobile Network Operator</td>
</tr><tr><td>status</td>
<td>Operational</td>
<td>Status of Number</td>
</tr><tr><td>bank</td>
<td>GSM 900 / GSM 1800 / UMTS 2100 &amp; 900</td>
<td>What network bands are supported by this network</td>
</tr><tr><td>notes</td>
<td> </td>
<td>Additional information on the operator</td>
</tr><tr><td>mcc_country</td>
<td>United Kingdom</td>
<td>Alternative Country Lookup</td>
</tr><tr><td>imsi</td>
<td>23410</td>
<td>IMSI Number</td>
</tr></tbody></table><h2><strong>LRN Lookup</strong></h2>
<table class="table"><thead><tr><th>Param</th>
<th>Example</th>
<th>Description</th>
</tr></thead><tbody><tr><td>tn</td>
<td>14128255115</td>
<td>Queried Number</td>
</tr><tr><td>lrn</td>
<td>14126931999</td>
<td>Locally Routed Number</td>
</tr><tr><td>ocn</td>
<td>2514</td>
<td>Operating Company Number</td>
</tr><tr><td>lata</td>
<td>234</td>
<td>Local Access and Transport Area</td>
</tr><tr><td>city</td>
<td>0</td>
<td>City</td>
</tr><tr><td>state</td>
<td>PA</td>
<td>State</td>
</tr><tr><td>jurisdiction</td>
<td>INTERSTATE</td>
<td>Jurisdiction (Interstate/Intrastate)</td>
</tr><tr><td>lec</td>
<td>0</td>
<td>LEC</td>
</tr><tr><td>local</td>
<td>no</td>
<td>Is Local</td>
</tr></tbody></table><h2><strong>Number Ping</strong></h2>
<table class="table"><thead><tr><th>Param</th>
<th>Example</th>
<th>Description</th>
</tr></thead><tbody><tr><td>Short</td>
<td>Live</td>
<td>Short Response (Live/Dead/Re-Try)</td>
</tr><tr><td>msg</td>
<td> </td>
<td>|Live|Detailed information about status</td></tr></tbody></table>
