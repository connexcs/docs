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

A **DID** number is one that exists on the public telephone network. When dialed, the carrier delivers through the platform and to you, based on the settings configured here. This allows inbound calls to bypass a Private Branch Exchange (PBX) or another routing to connect directly to the destination number.

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
