# Direct Inward Dial

A **DID** number is one that exists on the public telephone network. When dialed, the carrier delivers through the platform and to you, based on the settings configured here. 

This allows inbound calls to bypass a Private Branch Exchange (PBX) or another routing to connect directly to the destination number.

**Key Features**:

1. **Inbound Call Routing**: Calls from the public network are directed to customer systems.
2. **Custom Destination Management**: Calls can be forwarded to SIP URIs, external numbers, or internal extensions.
3. **Retain Display Name Option**: Configurable settings to preserve caller name information. By default, the display name is stripped to prevent unnecessary data exposure.
4. **Capacity Limits**: Manage call flow with channel restrictions.
5. **Media and Call Recording Settings**: Control media proxy modes and enable call recording.
6. **Billing Packages**: Assign recurring cost structures to DIDs.
ScriptForge Integration: Custom script-based call handling.

!!! question "How does it work?"

    When you dial the number, the carrier delivers the call to ConnexCS. ConnexCS then passes it to the customer based on the configured settings. It allows inbound calls to bypass a PBX (Private Branch Exchange) or another routing to connect directly to the destination number.

    ```mermaid
        flowchart TD
    A[Dialed Number] --> B[Carrier Delivers Call to ConnexCS]
    B --> C[ConnexCS Processes Call]
    C --> D{Check Routing Rules}
    D -->|Direct Routing| E[Forward Call to Customer]
    D -->|PBX Bypass| F[Connect Directly to Destination Number]
    E --> G[Call Successfully Connected]
    F --> G
    ```

To edit **DID (Direct Inward Dial)**:

1. Select one DID by clicking on the number, or select multiple and then click **`Bulk Edit`**.
2. For single DID, click on number, click on **Edit** (beside Destination) and you will see the following fields in a new window.

    + **URI:** Set the **Destination DID** (number or extension) and **Destination IP** to forward calls to, or a specific Session Initiation Protocol (SIP) Uniform Resource Identifier (URI).
    + **External:** Prefix sends the call back out to the internet and then the number to send the call to.
    + **Internal:** Send internally to an extension, a Class5 feature, or even to another customer.

3. Click **`Save`**.

<img src= "/customer-portal/img/did1.png" style="border: 2px solid #4472C4; border-radius: 8px;">

<img src= "/customer-portal/img/did2.png" style="border: 2px solid #4472C4; border-radius: 8px;">

You have another filed here, **Tags**, it's a **label** which helps you to describe and help organize information.

<img src= "/customer-portal/img/did3.png" style="border: 2px solid #4472C4; border-radius: 8px;">

4.For multiple DIDs, select multiple DIDs, then click on **Bulk Edit**.
5.Click on **Edit** (beside Destination)

<img src= "/customer-portal/img/did4.png" style="border: 2px solid #4472C4; border-radius: 8px;">

6.Enter the values for various fields like **URI**, **External**, or **Internal**.

<img src= "/customer-portal/img/did5.png" style="border: 2px solid #4472C4; border-radius: 8px;">
