<h2>Smart Lookup</h2>

Smart lookup combines: ASR+, TPS, Range, HLR, LRN & Ping, into a single request, which is also capable of performing multiple lookups.
API URL

http://api.connexcs.com/api/lookup/smart.[response_format]?number=[number]&type=[type]

Multiples

You can request multiple lookups to be performed with the type parameter for example

http://api.connexcs.com/api/lookup/smart.[response_format]?number=[number]&type=asrplus,hlr

OR

http://api.connexcs.com/api/lookup/smart.[response_format]?number=[number]&type[]=asrplus&type[]=hlr

You can perform lookups of multiple numbers with the following format:

http://api.connexcs.com/api/lookup/smart.[response_format]?number=44123456789,441987321546&type=[type]

OR

http://api.connexcs.com/api/lookup/smart.[response_format]?number[]=44123456789,number[]=441987321546&type=[type]

Request Parameters
Param 	Description
number 	This parameter contains the number which you wish to query against our database. (E164 format)
type 	1 or more of the following: asrplus, tps, range, lrn, hlr, ping
Response Parameters

Responses will be nested in the number type then the lookup type, for example if we queried the numbers 123456789 and 987654321 with asrplus and range we may get a result in the following structure

* 123456789
* asrplus {...}
* range {...}
* 987654321
* asrplus {...}
* range {...}

ASRPlus
Param 	Example 	Description
code 	404 	The SIP Code response that we have cached in our system, usually 404.
reason 	Not Found 	The SIP Response code that we have cached. 
date/time 	1357907962 	The date/time (in unix timestamp format) when the record was added.
age 	970150 	Age in seconds since this record was added.
age_days 	11 	Age in days since the record was added, we keep the record for a maximum of 30 days.
UK Lookup
Param 	Example 	Description
area_code 	1132 	The UK area code that this number belongs to
de 	00 	The Zone Range
fg 	BT 	Who this number range belongs to
status 	Allocated 	One of (Allocated / Free for National Dialling Only / Protected / Free / Unusable / Withdrawn / Designated / Unavailable)
date_modified 	24/09/2004 	Date in which the record was last changed.
HLR Lookup
Param 	Example 	Description
mcc 	234 	Mobile Country Code.
mnc 	10 	Mobile Network Code
country 	United Kingdom(+44) 	The Country information as returned by HLR
brand 	O2 (UK) 	Network Brand.
operator 	Telefonica Europe 	The Mobile Network Operator
status 	Operational 	Status of Number
bank 	GSM 900 / GSM 1800 / UMTS 2100 & 900 	What network bands are supported by this network
notes 	  	Additional information on the operator
mcc_country 	United Kingdom 	Alternative Country Lookup
imsi 	23410 	IMSI Number
LRN Lookup
Param 	Example 	Description
tn 	14128255115 	Queried Number
lrn 	14126931999 	Locally Routed Number
ocn 	2514 	Operating Company Number
lata 	234 	Local Access and Transport Area
city 	0 	City
state 	PA 	State
jurisdiction 	INTERSTATE 	Jurisdiction (Interstate/Intrastate)
lec 	0 	LEC
local 	no 	Is Local
Number Ping
Param 	Example 	Description
Short 	Live 	Short Response (Live/Dead/Re-Try)
msg 	  	|Live|Detailed information about status
