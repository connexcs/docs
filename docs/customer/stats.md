# Stats
Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: Stats

On the **Stats** tab, view graphs related to calling and call quality statistics and reports. All graphs may be filtered by different time segments and are available to be downloaded. 

## Main
View several useful graphs with details around usage or to identify potential issues. 

|Graph|Description |
|:------------|:-------------------------------------------------|
|Channels |Details channel usage|
|ACD|Average Call Duration can be viewed as a Total, or you can isolate traffic on a per carrier basis (click on a customer to remove/add it from the graph); if ACD is lower on one carrier, that is indicative of potential line quality issues|
|ASR |Answer Seizure Ratio can be viewed as a Total, or you can isolate traffic on a per carrier basis (click on a customer to remove/add it from the graph); if some carriers are lower than others this may indicate an issue|
|Attempts |Useful to compare total connected calls to total attempted calls|
|Balance |Balance Over Time|
|CPS | Calls per Second over time|
|Customer Carrier Duration |Click on the carriers to select/deselect individual carriers to view desired stats|
|DTMF |Dual Tone Frequency Modulation percentages|
|Codes |SIP response codes ([List of SIP Response Codes](https://en.wikipedia.org/wiki/List_of_SIP_response_codes))|
|PDD |The lower the Post Dial Delay the better, however typically not viewed as problematic until it gets over 7 seconds|
|Destinations |Displays all call destinations|
|CLI ASR |View ASR statistics per CLI|
|Channel and CPS Breach |This will identify instances when customers have exceeded your preset thresholds|
|Fraud F1 |Internal metric used to identify a customer is potentially dialing many different numbers as opposed to similar/same numbers (may indicate potential fraud situation)|


## RTP
View call quality metrics. 

|Graph|Description |
|:------------|:-------------------------------------------------|
|MOS |The Mean Opinion Score is an average measure of voice quality|
|Round Trip Time |Displays how long traffic takes to be sent and received|
|Jitter |Variance of packet delivery across the network causes information to arrive out of order. A higher jitter (50+ ms) may point towards potential voice quality issues|
|Packet Loss |Loss of packets may cause some voice quality issues, or it may not be detectable|

