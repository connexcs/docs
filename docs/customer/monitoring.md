# Monitoring
Monitor various aspects of customer performance. 

## Stats
On the **Stats** tab, view graphs related to calling and call quality statistics and reports. All graphs may be filtered by different time segments and are available to be downloaded. 

### Main
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


### RTP
View call quality metrics. 

|Graph|Description |
|:------------|:-------------------------------------------------|
|MOS |The Mean Opinion Score is an average measure of voice quality|
|Round Trip Time |Displays how long traffic takes to be sent and received|
|Jitter |Variance of packet delivery across the network causes information to arrive out of order. A higher jitter (50+ ms) may point towards potential voice quality issues|
|Packet Loss |Loss of packets may cause some voice quality issues, or it may not be detectable|

### Reports
View any reports that have been setup for a customer. 

## Route Stats
**Route Stats** displays Channel, Channel Breach, and CPS Breach data based on individual routes.

## Latest Calls
The **Latest Calls** tab provides records of incoming and outgoing calls. View calls and refresh the list of simulated calls.

To simulate a call: 

1. Click on the **Simulate** button.
3. Complete details for **Dialed Number, CLI/ANI, Switch IP** etc.
4. Select **`Simulate`** button.

![alt text][simulate-call]


## Dialogs
The **Dialogs** tab shows the active calls on the account so you can easily see active calls with one click.

## Alerts
**Alerts** allow you to generate alerts to your customers when specific events are triggered, or to disable accounts autonomously when set thresholds are reached. You can view all configured alerts by clicking on this tab.

To add a customized alert, click the **`+`** button and provide the following:
1. **Title**: describe what the alert is for
2. **Email/Phone**: where to send the alert
3. **Area**: select the parameter which is being monitored
4. **Operator**: compared to Threshold selected below
5. **Threshold**: the limit to trigger the alert, in units related to the selected Area above
6. **Reset Threshold**: retriggers alert at the new limit 
7. **Sample Period**: how frequent the alert is sent
8. **Penalty**: autonomously disable the account for the selected time frame (system will automatically enable after the time period has elapsed)
6. Click **`Save`**.

![alt text][alerts]


[simulate-call]: /customer/img/52.png "Simulate Call"
[alerts]: /customer/img/alerts.png "Alerts"
