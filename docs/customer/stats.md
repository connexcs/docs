# Stats

**Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: Stats**

Use **Stats** to view graphs related to calling and call quality statistics and reports.

Use the selectors at the top to define the time and date range for the graphs. The [**Analytics**](https://docs.connexcs.com/developers/analytics/) section helps manage all graphs.

## Main

Data related to Session Initiation Protocol (SIP) signalling and call completion.  
| **Graph**                     | **Description**                                                                                                                                                                                                                               |
|-------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Channels**                  | Details of historic channel usage                                                                                                                                                                                                             |
| **ACD**                       | You can view Average Call Duration as a Total, or you can isolate traffic on a per-carrier basis (click on a customer to remove / add it from the graph). If ACD is lower on one carrier, that's indicative of potential line quality issues |
| **ASR**                       | You can view Answer Seizure Ratio as a Total, or you can isolate traffic on a per-carrier basis (click on a customer to remove / add it from the graph). If some carriers are lower than others, this may create an issue                  |
| **Customer Carrier ACD**      | Plots ACD for each carrier on separate lines. It's useful for identifying under-performing carriers                                                                                                                                           |
| **Customer Carrier ASR**      | Plots ASR for each carrier on separate lines. It's useful for identifying under-performing carriers                                                                                                                                           |
| **Attempts**                  | It's helpful to compare total connected calls to total attempted calls (which correlates to CPS below)                                                                                                                                 |
| **Balance**                   | Balance over time                                                                                                                                                                                                                             |
| **CPS**                       | Calls per Second over time                                                                                                                                                                                                                    |
| **Customer Carrier Duration** | To view desired stats, click on the carriers to select or deselect individual carriers                                                                                                                                                        |
| **DTMF**                      | DTMF (Dual Tone Modulated Frequency) percentages                                                                                                                                                                                              |
| **Customer Carrier DTMF**     | DTMF percentages for each carrier                                                                                                                                                                                                             |
| **Codes**                     | SIP response codes ([**List of SIP Response Codes**](https://en.wikipedia.org/wiki/List_of_SIP_response_codes))                                                                                                                               |
| **Codes Total**               | Allows you to see SIP codes as a percentage, which is useful for identifying potential problems                                                                                                                                               |
| **PDD**                       | The lower the Post Dial Delay the better; typically not viewed as problematic until it gets over 7 seconds                                                                                                                            |
| **Destinations**              | Displays all possible call destinations                                                                                                                                                                                                       |
| **CLI ASR**                   | View ASR statistics per CLI                                                                                                                                                                                                                   |
| **Channel and CPS Breach**    | This will identify instances when customers have exceeded your preset thresholds                                                                                                                                                              |
| **Fraud F1**                  | Internal metric used to determine whether a customer dials plenty of different numbers rather than similar or identical ones (which may show a potential fraud situation)                                                         |

## Round Trip Time

View call media stats and quality metrics

| **Graph**           | **Description**                                                                                                                                                                                                                                                                                                                                                                             |
|---------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| **Round Trip Time (RTP)** | The time it takes for an RTP server control packet to make a round trip to the customer's equipment and back, same as an Internet Control Message Protocol (ICMP) ping.([**Round-trip delay time**](https://en.wikipedia.org/wiki/Round-trip_delay_time) from Wikipedia)                                                                                                                 |
| **Packet Loss**     | The number of packets lost during transit from the customer end going to the RTP server. A loss of packets may cause some voice quality issues, or it may not be detectable. ([**Packet Loss**](https://en.wikipedia.org/wiki/Packet_loss) from Wikipedia)                                                                                                                                  |
| **Jitter**          | The number of packets that arrive in the wrong order. For example, Packet #51 arrives before #50, but sent after #50. A higher jitter (50+ ms) may point towards potential voice quality issues. ([**Jitter**](https://en.wikipedia.org/wiki/Jitter) from Wikipedia)                                                                                                                     |
| **MOS**             | Mean Opinion Score considers all the above-mentioned factors and generates a value that represents total voice quality; essentially, an average measure of Real-Time Transport Control Protocol (RTCP) to generate a score for voice quality (ranging from 0 to 6; greater than 4 is good).([**Mean Opinion Score**](https://en.wikipedia.org/wiki/Mean_opinion_score) from Wikipedia)|
