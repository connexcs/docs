# Carrier

**Management :material-menu-right: Carrier**

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Carrier Management / Termination & Origination Configuration<br>
<strong>Audience</strong>: Administrators, Engineers, Support Team<br>
<strong>Difficulty</strong>: Intermediate to Advanced<br>
<strong>Time Required</strong>: Approximately 1–2 hours<br>
<strong>Prerequisites</strong>: Active ConnexCS account with Carrier-module access; understanding of SIP trunking, termination/origination routing, and rate-card setup.<br>
<strong>Related Topics</strong>: <a href="https://docs.connexcs.com/rate-card-building/">Carrier Rate Cards</a>, <a href="https://docs.connexcs.com/routing/">Routing Overview</a><br>
<strong>Next Steps</strong>: Configure carrier authentication & endpoints, build provider routing strategies, and validate routing behaviour using Logs, Circuit Test, or Debugging Tools.<br>

</details>

## Overview

The Carrier Interface in ConnexCS provides functionalities for managing carrier settings, credit, authentication, and response handling.

Use the **Carrier** section in **ConnexCS** for simplified Carrier management where you can add, configure, and delete Carriers.

### Key Features

1. **Call Completion**:
      1. A call may not complete if a customer lacks credit.

      2. Calls will still connect if a carrier doesn't have credit; the carrier credit field is informational and doesn't prevent calls.

2. **Carrier Rate Card Structure**: Every carrier has one or more rate cards. Each rate card contains the charges imposed by the carrier.

!!! Tip "Key Considerations"
    The system doesn't display the "Auto-generate invoice" option in this section.

<img src= "/carrier/img/carriermain.png" style="border: 2px solid #4472C4; border-radius: 8px;">

## Carrier Functions

From the **Carriers** page, you can perform several management operations.

+ :material-plus::Add new Carriers (see [**Create Carrier**](https://docs.connexcs.com/carrier/#create-carrier) below for details.)

+ **Refresh**: Refresh the page, helpful when making edits or looking at real-time changes. This created page is like a web app so some information will update automatically.

+ **Bulk Edit**: Select several Carriers, then click **Bulk Edit** to change the fields such as Channels Status, Flow Speed (CPS), Portal Access, and Country.

+ **Delete**: To delete several carriers at a time, select one or more carriers from the list and then click the trash bin icon and confirm.

+ **?**: Link to documentation for the current page.

+ **Send**: ConnexCS includes Refer ConnexCS for your customers.

1. Select several customers using the tick-box selector on the left side of each row. (Customers aren't visible to each other in the sent message.)
2. Click on "Send" at the top right then choose Refer ConnexCS.
3. Refer ConnexCS: This feature allows you to send simple ConnexCS Referrals to you customers.
    + You can send referrals to multiple **Customers**.
    + You can select the **Template** from the drop-down list.
    + Enter the **Subject**.
    + Write the Body of the referral.
    + Click on `Send`.
  
<img src= "/carrier/img/carrier_referral.png" style="border: 2px solid #4472C4; border-radius: 8px;">

+ **Active**: Used to sort Carriers based on the selected status. Results on the page will automatically arrange themselves according to the filter.

+ **Search**: The search box on the Carrier Management screen is for finding specific information among your carrier listings.

+ **Audit Log**: Click "View Audit Log" to the right of the Edit button to view changes made to the carrier configuration.

+ **Credit column**: Amounts listed here are purely informational; calls are still connected by a carrier even if the amount listed here is at zero credit.

## Carrier View Modification

+ **Columns** pop out on the right allowing you to add / remove options, change column order, and in some cases you can create row groups and total values for pivot functionality.
+ **Filters** pop out on the right allowing you to filter your carriers.

+ Adjust Column ordering

## Create Carrier

1. Click :material-plus:.
2. Enter relevant carrier details.
3. Click **`Save`**.

*Click each tab for field explanations:*

=== "Basic"

    * **Carrier Name:** Enter a unique name for the carrier.
    * **Channels:** Add the number of channels (ports) in numeric digits. Set this to ZERO for unlimited channels.
    * **CPS:** Enter the carrier's max allotted calls-per-second.
    * **Status:** The carrier's status. A drop-menu contains the following options:
        
        :material-menu-right: `Active`- carrier available to process calls.
        
        :material-menu-right: `Inactive`- carrier won't process any calls.
        
        :material-menu-right: `Pending Approval`- carrier is undergoing a verification process, but their credentials are in the system.  
    
    * **Currency:** Choose the relevant currency for each carrier's country.

=== "Portal"

    * **URL:** Enter the carrier's portal URL, ex: portal.yourcarrier.com 
    * **Username:** Add a unique name for the portal.
    * **Password:** Enter the password used to sign into the carrier portal.
    * **Portal Access:** Decides if the current carrier has access to the portal.

=== "Timeout"

    * **First Reply Timeout:** Length of time for the carrier to respond after the **first invite**, which is the SIP 100 Trying (could be considered a ping message, regardless if the call completes, this should be received quickly). Default = 3 seconds. Recommended = 1 second.
    * **PDD Timeout:** Length of time for the carrier to respond to the call. If the carrier does not respond in the time selected, then another carrier will be tried. Default = 5 seconds. Recommended = 6 seconds. 
    * **Ring Timeout:** Length of time to ring, or the SIP 180/183 - Session in Progress. Default = 60 seconds. (The previous 2 timeouts are before carrier selection, this timeout is after carrier selection.)

=== "Config"

    * **PayPal Email:** Enter the PayPal e-mail associated with the carrier's account.
    * **Website:** Add the carrier's official website.
    * **P-Asserted-ID:** Consider a network level identifier, you can select how calls to the provider is handled based on the PA-ID:
    
        :material-menu-right: `Default`: Call passed to the provider (no manipulation).
        
        :material-menu-right: `Remove`: Strips PA-ID before passing the call to the provider.
        
        :material-menu-right: `If Available`: It will add PA-ID if one has been provided, otherwise the call will still be allowed.
        
        :material-menu-right: `Required`: Call won't be delivered to the provider without the PA-ID.
    
    * **Consec Fail Backoff:** When Enabled, if a carrier goes down, only a fraction of calls will be sent to the carrier until the start to complete again (calls aren't completely disabled otherwise there is no way to know when the carrier is back up again). The First Reply Timeout is skipped.
        * **Purpose**: Helps determine if a route is down.
        * **Functionality**:
            * Counts the number of consecutive failed calls.
            * Resets to zero when a call successfully connects.
            * If 10,000 consecutive calls fail, it indicates a route is likely down.
    * **Tags** and **TOML:** Not applicable to carriers.
    * **Ext.Accounting ID:** This is used to fill in work in an external accounting field to correlate between Connexcs and the external accountancy system.
    * **Call Recording Retention Days:** How long the customer wants to keep the recorded calls.
    * **Gateway Failover:** Enables automatic switching between multiple IP addresses configured within a carrier's authentication settings. By default, when a call reaches this carrier, it is attempted on one of the IPs configured in the carrier's authentication settings. If the call fails, it does not fail over to a different IP within the same carrier. However, enabling Gateway Failover allows the call to fail over to a different IP within the same carrier.
    Gateway Failover typically offers several options that determine the behavior when a call fails on the first IP:
        * *None*: No failover occurs.
        * *Failover 1*: After a call fails on the first IP, the system attempts to route the call through one alternative IP configured in the authentication setting.
        * *Failover 2*: After a call fails on the first IP, the system attempts to route the call through up to two alternative IPs.
        * *Failover 3*: After a call fails on the first IP, the system attempts to route the call through up to three alternative IPs.

=== "Address"

    * **Address:** Include the address of the carrier, including the country and postcode or ZIP code.

=== "Verification"

    * **Propagate Username:** Enable this to retain the display name of the FROM field in the SIP header (ex: Company Name, Username).

## Special Considerations

[**Bandwidth.com**](https://www.bandwidth.com/) has diverged from the SIP spec and exposed an internal IP address required for sequential requests.

To ensure compatibility, set the switch manufacturer to `bandwidth.com`.

[carriers-main]: /carrier/img/carriers-main.png "Carriers" style="border: 2px solid #4472C4; border-radius: 8px;"
[carrier]: /carrier/img/carrier.png "Carrier Main" style="border: 2px solid #4472C4; border-radius: 8px;"

## Headers from Customers to Providers

Customize the handling of X-Headers between the User Agent Client (UAC) and the carrier. By default, all UAC-originating X-Headers are removed for standardization, but this configuration allows selective retention of specific headers crucial for carrier communication.

When the Carrier requires information on the headers sent from the UAC, you can use below discussed process:

1. Login to your account.
2. Navigate to Management :material-menu-right: Customer :material-menu-right: Carrier :material-menu-right: blue `+` button :material-menu-right: Config :material-menu-right: Vars<sup>TOML</sup>.
3. Consider an example here: **Example of how to retain X-ng199 but remove all other X-headers**
4. Enter the code in the Vars<sup>TOML</sup> section.

```js linenums="1"
[headers] // configuration for headers
remove_regex="^X-(?:(?!(ng911)).)*" // only retain X-ng199 but remove all other X-headers
```

The **Default Setting** is:

```js linenums="1"
[headers]
remove_regex="^X-.*"
```

5.Click `Save`.

!!! Warning
    Misconfigured regular expressions may remove essential SIP headers and **break SIP protocol behaviour**, leading to call failures or service disruption. This is an advanced configuration and must be used with care.

<img src= "/carrier/img/regex.png" style="border: 2px solid #4472C4; border-radius: 8px;">

---

## Gateway Failover — Complete Configuration Guide

Gateway Failover allows ConnexCS to automatically try alternative IP addresses within the same carrier when a call fails on the primary IP. This is distinct from carrier-level failover, which switches to a different carrier entirely.

!!! Note
    Gateway Failover has no effect if only one IP address is configured in the carrier's Auth tab. You must add multiple IPs first before enabling this feature.

### Step 1 — Add Multiple IPs to Carrier Authentication

1. Navigate to **Management :material-menu-right: Carrier :material-menu-right: [Carrier Name]**
2. Click the **Auth** tab
3. Click the **:material-plus:** button to add an authentication entry
4. Enter the carrier IP address, port, and transport settings
5. Click **`Save`**
6. Repeat steps 3–5 for each additional IP you want available as a failover target

Each IP entry in the Auth tab represents a separate gateway endpoint. When Gateway Failover is enabled, ConnexCS will attempt these in sequence if the primary IP fails.

### Step 2 — Enable Gateway Failover

1. Navigate to **Management :material-menu-right: Carrier :material-menu-right: [Carrier Name]**
2. Click the **Config** tab
3. Locate the **Gateway Failover** field
4. Select the appropriate level:

    | Setting | Behaviour |
    |---|---|
    | **None** | No failover — call fails immediately if primary IP does not respond |
    | **Failover 1** | Tries 1 alternative IP after primary fails |
    | **Failover 2** | Tries up to 2 alternative IPs in sequence after primary fails |
    | **Failover 3** | Tries up to 3 alternative IPs in sequence after primary fails |

5. Click **`Save`**

### When Gateway Failover Activates

Gateway Failover triggers when:

- The primary IP does not respond within the **First Reply Timeout** period
- A SIP error response is received (e.g., 503 Service Unavailable)
- The connection is refused or times out at the network level

Gateway Failover does **not** trigger for:

- Calls that connect but fail for routing reasons (e.g., 404 Not Found)
- Calls that are answered and then disconnected mid-session

### Relationship with Consec Fail Backoff

Gateway Failover and Consec Fail Backoff are complementary features that serve different purposes:

| Feature | Purpose | Scope |
|---|---|---|
| **Gateway Failover** | Tries alternative IPs within the same carrier on a per-call basis | Per call |
| **Consec Fail Backoff** | Reduces traffic to a carrier after repeated consecutive failures | Sustained outage |

For maximum resilience, enable both when you have a carrier with multiple gateway IPs. Failover handles individual call failures; Consec Fail Backoff handles prolonged route degradation.

### Monitoring Failover Events

- View failed attempts and failover events in **Management :material-menu-right: Carrier :material-menu-right: [Carrier Name] :material-menu-right: Latest Calls**
- Filter by SIP response code to identify patterns — for example, repeated 503s from a specific IP
- Configure carrier alerts under **Management :material-menu-right: Carrier :material-menu-right: [Carrier Name] :material-menu-right: Alerts** to notify your team when failure rates exceed a threshold

### Example Configuration

**Scenario:** A carrier has three gateway IPs — one primary and two backups. You want the system to try all three before failing the call.

1. Add all three IPs to the carrier **Auth** tab
2. Set **Gateway Failover** to **Failover 2** in the **Config** tab
3. Set **First Reply Timeout** to **1 second** so non-responding gateways are detected quickly
4. Enable **Consec Fail Backoff** so traffic is automatically reduced if a gateway remains down for an extended period

---
