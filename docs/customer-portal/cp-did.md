# DID
A **Direct Inward Dial (DID)** number is one that exists on the public telephone network. When dialed, the carrier delivers through the platform and to you, based on the settings configured here. This allows inbound calls to bypass a PBX or other routing to connect directly to the destination number. 

To edit **DID (Direct Inward Dial)**:

1. Select one DID by clicking on the number, or select multiple and then click **`Bulk Edit`**
    + **URI**: Set the **Destination DID** (number or extension) and **Destination IP** to forward calls to, or a specific SIP URI (formatted without the initial `sip:`, ex: you would enter `1-999-123-4567@voip-provider.example.net`)
    + **External**: Prefix used to send the call back out to the internet then the number to send the call to
    + **Internal**: Send internally to an extension, a Class5 feature, or even to another customer
    + **Circuit Test**: *in progress*
3. Click **`Save`**.
