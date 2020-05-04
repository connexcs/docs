# Capacity Limiting

## Limiting CPS & Channels

Limiting CPS and Channels is a mechanism that lets providers put caps on their services. Channels represent the number of active calls while CPS tracks the number of calls made in a given second. 

The switch can limit CPS and Channels on the entire account, or on specific customers or carriers.  

|Type of limit | Location |
|----|----|
|The entire ConnexCS account | 
|Per Customer|Management->Customer->click on customer name->Edit|
|Per Customer IP Address or SIP user|Under the customer, Routing-> click the name->Capacity Limits.|
|Per Carrier|Management->Carrier-> Select Carrier name->Edit|
|Per Carrier IP Address (specific gateway)|Auth-> IP Auth-> click on the IP address|
|Ingress Routing|

Click [here]( https://docs.connexcs.com/customer/routing/#capacity-limits) for additional details on Capacity Limiting. 
 
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
