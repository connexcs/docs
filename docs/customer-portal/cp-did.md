# Direct Inward Dial

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Customer Portal / DID Management<br>
<strong>Audience</strong>: Administrators, Customer Success Team, Support Team<br>
<strong>Difficulty</strong>: Intermediate<br>
<strong>Time Required</strong>: Approximately 20–30 minutes<br>
<strong>Prerequisites</strong>: Active ConnexCS Customer Portal account with permissions to manage Direct Inward Dialing (DID) resources<br>
<strong>Related Topics</strong>: <a href="https://docs.connexcs.com/customer-portal/cp-dashboard/">Customer Portal – Dashboard Overview</a>, <a href="https://docs.connexcs.com/customer-portal/cp-cdr/">Customer Portal – CDR</a><br>
<strong>Next Steps</strong>: Review your DID inventory, confirm assignments and routing, correct any unassigned or misconfigured DIDs, update routing aliases as required, and schedule regular audits to optimise DID usage and ensure compliance.<br>

</details>

A **DID** number is one that exists on the public telephone network.

When dialed, the carrier delivers through the platform and to you, based on the settings configured here.
This allows inbound calls to bypass a Private Branch Exchange (PBX) or another routing to connect directly to the destination number.

To edit **DID (Direct Inward Dial)**:

1. Click on a DID number to select a single DID, or select multiple DIDs and click **`Bulk Edit`**.
2. For a single DID, click the number, **enable the toggle**, and then click the **Edit** (beside Destination)button that appears. A new window will open displaying the following fields. <br><img src= "/customer-portal/img/did1.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

    + **URI:** Set the **Destination DID** (number or extension) and **Destination IP** to forward calls to, or a specific Session Initiation Protocol (SIP) Uniform Resource Identifier (URI).
    + **External:** Prefix sends the call back out to the internet and then the number to send the call to.
    + **Internal:** Send internally to an extension, a Class5 feature, or even to another customer.
    + **Circuit Test**: Enables users to verify the integrity and performance of call routing. By pointing a Direct Inward Dialing (DID) number back to the Circuit Test system, users can evaluate critical metrics such as MOS, DTMF, and Caller ID consistency. This process ensures that the purchased routes meet expected standards.
    + **ConneXML**: The incoming call is routed to a ConneXML script, which defines the subsequent call behavior.

3. Click **`Save`**. <br><img src= "/customer-portal/img/did2new.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

4. You have another fields here, **Tags**, it's a **label** which helps you to describe and help organize information. <br><img src= "/customer-portal/img/did3.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
