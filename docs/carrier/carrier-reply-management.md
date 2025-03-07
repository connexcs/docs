# Reply Management

**Management :material-menu-right: Carrier :material-menu-right: Reply Management**

<img src= "/carrier/img/carrierreply.png">

Customers can use **Reply Management** to customize responses based on the SIP message (100 to 606) received from the carrier. This allows for more efficient messaging and system responses.

You can use this for customers who have switches that require certain SIP code responses.

See the [**Wikipedia List of SIP response codes**](https://en.wikipedia.org/wiki/List_of_SIP_response_codes) for extra details about each code.

To edit Reply Codes:

1. Select **`Edit`** on the right of the code.
2. Select the action:
    + Failover (only available for some codes)- allows the call to try the next carrier
    + Replace- enter the New Code and New Reason

!!! example "Code Replace use case"
    The customer switch expects a SIP 180 response (ringing) but only receives a 183 response (session in progress).The 180 (with SDP) instructs the SIP phone to generate ringing locally (the audio is clear because it's local), whereas the 183 (without SDP) generates ringing at the network (this may play different ringing, possibly for the local country). In this case, the modified code 180 replaces the 183 code in `Replace` (Reply Management).

!!! example "Code Failover use case"
    In some situations, carriers may not return SIP failure codes accurately. If the carrier sends a 404 (client-side error) the customer equipment may not failover to the next carrier automatically. Set 404 to `Failover` to the next carrier using Reply Management.