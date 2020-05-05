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

Click [here]( https://docs.connexcs.com/customer/routing/#capacity-limits) for additional details on CPS Spike Buffering as part of the routing strategy. 
 
!!! info "Server capacity error"
    When a server reaches capacity, the standard response is: *Request Terminated: Server at max cps/channels*. If you have multiple servers, you can send a 302 response if the server reaches capacity, advising the client of an alternative location to complete the call.

## Load Balancing using DNS (Domain Name System)

For multiple SIP servers, you can load balance the calls without a load balancer server using DNS. To configure the DNS, follow these steps:

1. Click **Setup** > **Integrations**.
2. Click **Domains**.
3. Click **`+`** under **Server**.

    ![alt text][load-balance]

4. Enter the domain name under the **Domain** field. 
5. Select Top Level Domain(TLD) to sip.direct.
6. Check the records against the server IP
7. Click **`Save`**.

[load-balance]: /misc/img/218.png "load-balance"
