# Capacity Limiting

## Limiting CPS & Channels

The ability to Limit CPS (Flow Speed) and Channels allows providers to place caps on specific services. 

* Channels represent the number of active calls on the system
* CPS (Calls per Second) tracks the number of calls made in a given second

ConnexCS offers a range of options to limit CPS and Channels across the entire account, per carrier, or per customer. 

|Scope of limit | Configuration location |
|----|----|
|Per ConnexCS account| 
|Per Carrier|Management > Carrier > select carrier name > Edit|
|Per Carrier IP Address (outbound traffic to a specific gateway)|Under the carrier, go to Auth > IP Auth > select the IP address|
|Per Carrier DID (inbound traffic to a specific number)| Global > DID > select the DID > Capacity Limits|
|Per Customer|Management > Customer > select customer name > Edit|
|Per Customer IP Address or SIP user|Under the customer, Routing > select the IP or username > Capacity Limits|
|Per Customer Ingress Routing (to carrier)|Under the customer, go to Routing > select the name > Capacity Limits

*(*DID: Direct Inward Dialing*)

*[**More details on CPS Spike Buffering**](https://docs.connexcs.com/customer/routing/#capacity-limits) as part of the routing strategy.*
 
!!! **Info:** "Server capacity error"-
    When a server reaches capacity, the standard response is: *Request Terminated: Server at max cps/channels*. If you have multiple servers, you can send a 302 response if the server reaches capacity, advising the client of an alternative location to complete the call.
    
!!! **Warning:** "CPS on load-balanced servers"-
    If you have multiple servers in load balance configuration, you are advised to enable "Cluster". Ex: If you set CPS to 10, clustered servers will allow 10 CPS total, un-clustered servers will allow 10 CPS per server. See [**Servers**](https://docs.connexcs.com/setup/settings/servers/) for more details. 
