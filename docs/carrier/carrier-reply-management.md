# Reply Management

---

**Document Metadata**
<br>**Category**: Carrier Management / SIP Response & Routing Control</br>
**Audience**: Administrators, Engineers, Support Team
<br>**Difficulty**: Intermediate to Advanced</br>
**Time Required**: Approximately 1–1.5 hours
<br>**Prerequisites**: Active ConnexCS account with Carrier-module access; understanding of SIP response codes (100-606), carrier fail-over strategies, and routing logic.</br>
**Related Topics**: [Carrier Main Configuration](https://docs.connexcs.com/carrier/carrier-main/), [Carrier Failover Settings](https://docs.connexcs.com/carrier/carrier-failover/)
<br>**Next Steps**: Define and customise SIP reply code mappings for carriers, implement fail-over behaviours based on specific SIP responses, test end-to-end routing and monitor for correct response handling and fail-over activation.</br>

---

**Management :material-menu-right: Carrier :material-menu-right: Reply Management**

## Overview

Customers can use **Reply Management** to customize responses based on the SIP message (100 to 606) received from the carrier. This allows for more efficient messaging and system responses.

You can use this for customers who have switches that require certain SIP code responses.

<img src= "/carrier/img/reply1man.png" width= "800" style="border: 2px solid #4472C4; border-radius: 8px;">

See the [**Wikipedia List of SIP response codes**](https://en.wikipedia.org/wiki/List_of_SIP_response_codes) for extra details about each code.

### Key Features

+ **Response Code Modification**: Allows replacement of SIP responses (e.g., replacing 183 with 180 when required by specific switches).

+ **Failover Management**: Allows rewriting response codes for better compatibility.

## To edit Reply Codes

1. Select **`Add New Code`** on the right of the code.
2. Select the action:
    + `Default`: The Default action applies the system’s standard predefined behavior for the selected code without any custom modifications. <br><img src= "/carrier/img/reply2man.png" width= "450" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
    + `Failover` (only available for some codes): Allows the call to try the next carrier. <br><img src= "/carrier/img/reply3man.png" width= "450" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
    + `Replace`: Enter the **New Code** and **New Reason**. <br><img src= "/carrier/img/reply4man.png" width= "450" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

!!! example "Code Replace use case"
    The customer switch expects a SIP 180 response (ringing) but only receives a 183 response (session in progress).The 180 (with SDP) instructs the SIP phone to generate ringing locally (the audio is clear because it's local), whereas the 183 (without SDP) generates ringing at the network (this may play different ringing, possibly for the local country). In this case, the modified code 180 replaces the 183 code in `Replace` (Reply Management).

!!! example "Code Failover use case"
    In some situations, carriers may not return SIP failure codes accurately. If the carrier sends a 404 (client-side error) the customer equipment may not failover to the next carrier automatically. Set 404 to `Failover` to the next carrier using Reply Management.
