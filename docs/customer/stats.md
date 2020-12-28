# Stats
**Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: Stats**

Use **Stats** to view graphs related to calling and call quality statistics and reports. Use the selectors at the top to define the time and date range for the graphs.  

## Main
Data realted to SIP signalling and call completion.  

|Graph|Description |
|:------------|:-------------------------------------------------|
|Channels |Details historic channel usage|
|ACD|Average Call Duration can be viewed as a Total, or you can isolate traffic on a per carrier basis (click on a customer to remove/add it from the graph); if ACD is lower on one carrier, that is indicative of potential line quality issues|
|ASR |Answer Seizure Ratio can be viewed as a Total, or you can isolate traffic on a per carrier basis (click on a customer to remove/add it from the graph); if some carriers are lower than others this may indicate an issue|
|Customer Carrier ACD|Plots ACD for each carrier on separate lines, useful for identifying underperforming carriers|
|Customer Carrier ASR|Plots ASR for each carrier on separate lines, useful for identifying underperforming carriers|
|Attempts |Useful to compare total connected calls to total attempted calls (will roughly correlate to CPS below)|
|Balance |Balance Over Time|
|CPS | Calls per Second over time|
|Customer Carrier Duration |Click on the carriers to select/deselect individual carriers to view desired stats|
|DTMF |DTMF (Dual Tone Modulated Frequency) percentages|
|Customer Carrier DTMF |DTMF percentages for each carrier|
|Codes |SIP response codes ([List of SIP Response Codes](https://en.wikipedia.org/wiki/List_of_SIP_response_codes))|
|Codes Total|Allows you to see SIP codes as a percentage, helpful to identify potential issues|
|PDD |The lower the Post Dial Delay the better, however typically not viewed as problematic until it gets over 7 seconds|
|Destinations |Displays all call destinations|
|CLI ASR |View ASR statistics per CLI|
|Channel and CPS Breach |This will identify instances when customers have exceeded your preset thresholds|
|Fraud F1 |Internal metric used to identify if a customer is potentially dialing many different numbers as opposed to similar/same numbers (may indicate potential fraud situation)|


## RTP
View call media stats and quality metrics. 

|Graph|Description |
|:------------|:-------------------------------------------------|
|MOS |The Mean Opinion Score is an average measure of RTCP to generate a score for voice quality (ranges from 0 to 6, over 4 is good)|
|Round Trip Time |Displays how long traffic takes to be sent and received|
|Jitter |Variance of packet delivery across the network causes information to arrive out of order. A higher jitter (50+ ms) may point towards potential voice quality issues|
|Packet Loss |Loss of packets may cause some voice quality issues, or it may not be detectable|

