# Stats
**Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: Stats**

Use **Stats** to view graphs related to calling and call quality statistics and reports. Use the selectors at the top to define the time and date range for the graphs.  All graphs are managed using the [**Analytics**](https://docs.connexcs.com/developers/analytics/) section. 

## Main
Data related to SIP signaling and call completion.  

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
|Codes |SIP response codes ([**List of SIP Response Codes**](https://en.wikipedia.org/wiki/List_of_SIP_response_codes))|
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
|Round Trip Time |The amount of time it takes for a control packet from the RTP server to do a round trip to the customers equipment and back again; similar to an ICMP Ping. ([**Round-trip delay time**](https://en.wikipedia.org/wiki/Round-trip_delay_time) from Wikipedia)|
|Packet Loss |The number of packets lost during transit from the customer side going to our RTP server. Loss of packets may cause some voice quality issues, or it may not be detectable. ([**Packet Loss**](https://en.wikipedia.org/wiki/Packet_loss) from Wikipedia) |
|Jitter |The number of packets which arrive in the wrong order; ex: Packet #51 arrives before #50, but was sent after #50.) A higher jitter (50+ ms) may point towards potential voice quality issues. ([**Jitter**](https://en.wikipedia.org/wiki/Jitter) from Wikipedia)|
|MOS |The Mean Opinion Score takes into account all the above factors and produces a value which represents overall voice quality; essentially an average measure of RTCP to generate a score for voice quality (ranges from 0 to 6, over 4 is good). ([**Mean Opinion Score**](https://en.wikipedia.org/wiki/Mean_opinion_score) from Wikipedia)|

