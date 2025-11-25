# Capacity Limiting

---

**Document Metadata** <br>**Category**: Traffic & Call-Routing Management / Call Rate Limiting (CPS)</br> **Audience**: Administrators, Network Engineers, Support Team <br>**Difficulty**: Intermediate to Advanced</br> **Time Required**: Approximately 30–45 minutes <br>**Prerequisites**: Active ConnexCS account, access to Routing and Traffic Management modules, knowledge of CPS (Calls Per Second) concepts</br> **Related Topics**: [Routing](https://docs.connexcs.com/routing/), [Traffic Metrics](https://docs.connexcs.com/customer/custom-reports/) <br>**Next Steps**: After setting CPS limits, monitor actual traffic via the Reporting module and configure alert thresholds so you get notified when usage approaches limits.</br>

---

## Limiting Calls per Second and Channels

The ability to Limit CPS (Flow Speed) and Channels allows providers to place caps on specific services.

* Channels represent the number of active calls on the system.
* CPS (Calls per Second) tracks the number of calls made in a given second.

ConnexCS offers a range of options to limit CPS and Channels across the entire account, per carrier, or per customer.

|Scope of limit | Configuration location |
|----|----|
|**Per ConnexCS account**|
|**Per Carrier**|Management :material-menu-right: Carrier :material-menu-right: select carrier name :material-menu-right: Edit|
|**Per Carrier IP Address (outbound traffic to a specific gateway)**|Under the carrier, go to Auth :material-menu-right: IP Auth :material-menu-right: select the IP address|
|**Per Carrier DID (inbound traffic to a specific number)**| Global :material-menu-right: DID :material-menu-right: select the DID :material-menu-right: Capacity Limits|
|**Per Customer**|Management :material-menu-right: Customer :material-menu-right: select customer name :material-menu-right: Edit|
|**Per Customer IP Address or SIP user**|Under the customer, Routing :material-menu-right: select the IP or username :material-menu-right: Capacity Limits|
|**Per Customer Ingress Routing (to carrier)**|Under the customer, go to Routing :material-menu-right: select the name :material-menu-right: Capacity Limits

*(*DID: Direct Inward Dialing*)

*[**More details on CPS Spike Buffering**](https://docs.connexcs.com/customer/routing/#capacity-limits) as part of the routing strategy.*

!!! info "Server capacity error"
    When a server reaches capacity, the standard response is: *Request Terminated: Server at max cps / channels*.

    If you have several servers, you can send a 302 response if the server reaches capacity, advising the client of an alternative location to complete the call.

!!! warning "CPS on load-balanced servers"
    If you have several servers in load balancing configuration, it's recommended that you enable "Cluster."

    For example, if you set CPS to 10, clustered servers will allow 10 CPS total and un-clustered servers will allow 10 CPS per server. See [**Servers**](https://docs.connexcs.com/setup/settings/servers/) for more details.
