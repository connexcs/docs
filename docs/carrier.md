# Carrier

**Management :material-menu-right: Carrier**

Use the **Carrier** section in **ConnexCS** for simplified Carrier management where you can add, configure, and delete Carriers.

<img src= "/carrier/img/carriermain.png">

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
  
<img src= "/carrier/img/carrier_referral.png">

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
    * **P-Asserted-ID:** Considered a network level identifier, you can select how calls to the provider is handled based on the PA-ID:
    
        :material-menu-right: `Default`- call passed to the provider (no manipulation)
        
        :material-menu-right: `Remove`- strips PA-ID before passing the call to the provider
        
        :material-menu-right: `If Available`- will add PA-ID if one has been provided, otherwise the call will still be allowed
        
        :material-menu-right: `Required`- call won't be delivered to the provider without the PA-ID
    
    * **Consec Fail Backoff:** When Enabled, if a carrier goes down, only a fraction of calls will be sent to the carrier until the start to complete again (calls aren't completely disabled otherwise there is no way to know when the carrier is back up again). The First Reply Timeout is skipped.  
    * **Tags** and **TOML:** Not applicable to carriers.
    * **Ext.Accounting ID:** This is used to fill in work in an external accounting field to correlate between Connexcs and the external accountancy system.
    * **Call Recording Retention Days:** How long the customer wants to keep the recorded calls.
    * **Gateway Failover:** This feature allows you to swtich to another IP if the call(s) doesn't pass through or fails on the first IP. It has 4 options:
        * *None*: The call will not switch to any other IP.
        * *Failover 1*: The call will only to switch to 1 of the IP's that you've configured in the Auth .
        * *Failover 2*: The call will only to switch to 2 of the IP's that you've configured in the Auth .
        * *Failover 3*: The call will only to switch to 3 of the IP's that you've configured in the Auth section.

=== "Address"

    * **Address:** Include the address of the carrier, including the country and postcode or ZIP code.

=== "Verification"

    * **Propagate Username:** Enable this to retain the display name of the FROM field in the SIP header (ex: Company Name, Username).

## Configure Carrier

To configure a **Carrier**, select the Carrier from the list, then configure the following areas:

### Main

![alt text][carrier]

+ **Contacts**: Helpful for keeping track of Support contacts for individual carriers.
+ **Rates Grid**: Associated rate cards for this provider. See [**Provider Rate Cards**](https://docs.connexcs.com/provider-ratecard/) for configuration.
+ **Code Consistency** measures changes to response codes (specifically SIP 200 and 404s) returned from the carrier.
It's useful for identifying routes of varying or poor quality.
Effective carriers try to maintain 100% code consistency.
+ **Consecutive Failure**: Shows a count of failed calls based on specific SIP failure responses.  
  The counter doesn't include SIP 200 responses for connected calls.
  This simplistic measurement can measure a carrier's ability to connect calls or a particular route: a connected call resets the counter, a failed call increments the counter by one.
Some Fails aren't alarming, but be on the lookout for higher numbers in the thousands.

!!! note "Consec fails and false positives"
    This mechanism can show false positives if the customer sends missed call traffic or calls wrong numbers.

    The counter is a quick way to see if a route is failing, but you shouldn't use it as a comprehensive success monitor.

+ **Summary**: Display All calls through this carrier, whether in Live (last 24 hours), Daily, or Monthly formats are in 24-hour UTC. This data updates every hour.

!!! warning "Auto Generate Invoice"
    Don't use "Auto Generate Invoice" under the Carrier. You should manage invoices via the [**Customer Invoice**](https://docs.connexcs.com/customer/invoices/) section.  

### Reply Management

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

### Auth

1. Carrier **IP Authentication**: This uses IP addresses to allow or disallow attempts to access service.
   To add authorized IP address(es), click :material-plus: on the right. These fields are the same as in [**Customer Auth**](https://docs.connexcs.com/customer/auth/) except that they pertain to Carriers. The only exceptions are:

    + **User name and Password**: These are for the call to connect out to the carrier, if server is acting as a User Account Control (UAC).
    + **Outbound Proxy** (only for Ingress switches): Enter the IP address of a proxy server to which calls should be routed before being sent to the carrier. This rewrites the UAC IP in the VIA field of the SIP header.  
    This reduces management overhead as a customer only needs to approve the single IP. Also, several addresses can be load balanced using the AnyEdge system.
    + **Weights**: When the configuration of several switches takes place in IP Authentication, this field sets weighting to find which servers are most preferred, essentially doing outbound distribution to a single carrier, but through several gateways to that carrier.

1. Carrier **SIP User Authentication** is only used to allow a carrier to connect to the system, not for outbound connections.
[**Customer Auth**](https://docs.connexcs.com/customer/auth/) gives information on the field details.  

### Failover

The **Failover** tab lists calls that failed with this carrier but connected with another carrier. This typically helps to troubleshoot an issue with the carrier that's failing the calls. You can also use this to identify FAS (False Answer Supervision) billing fraud.

!!! info "ConnexCS will halt routing on the following codes"
    - `3XX` (Re-write to 503)
    - `486`
    - `480`
    - `404`

### Latest Calls

The **Latest Calls** tab displays the most recent calls to pass through a given system. View recent calls and their SIP traces and run simulated calls.

See [**Logging**](https://docs.connexcs.com/logging/) section for details on these functions. To view Latest Calls for all customers, go to the Logging section in ConnexCS.

To simulate a call:

1. Click on the `Call ID`.
2. Click **`Simulate`**.
3. Complete details for **Dialed Number, CLI/ANI, Switch IP** etc.
4. Click **`Simulate`**.

### Payment

The **Payment** tab shows payments made to the carrier. To add a new payment, click :material-plus:, fill in the payment information, and then click **`Save`**.

### Stats

Click **Stats** tab to view carrier-related statistics. You can find the descriptions for each of these graphs in [**Customer Stats**](https://docs.connexcs.com/customer/stats/).

### Alerts

Use Carrier **Alerts** to contact a selected email address when `Consecutive Failovers` reach a predetermined limit. See [**Customer Alerts**](https://docs.connexcs.com/customer/alerts/) for configuration details.

### Direct Inward Dial

The **DID** tab displays a list of DIDs that belong to that carrier. You can add new entries with the :material-plus: on the left.

See [**Customer DID**](https://docs.connexcs.com/customer/did/) for configuration details.

### Call Detail Record

The **CDR** tab displays call drop rates. Use **`Recalc CDR`** when CDR records aren't accurate.

See [**Customer CDR**](https://docs.connexcs.com/customer/cdr/#recalculate-cdr) for details.

!!! danger "Rerating CDRs"
    If you select either "Rerate" option when recalculating CDRs, this will change your CDRs and isn't reversible. You can revise Original call durations according to the criteria selected.

## Special Considerations

[**Bandwidth.com**](https://www.bandwidth.com/) has diverged from the SIP spec and exposed an internal IP address required for sequential requests.

To ensure compatibility, set the switch manufacturer to `bandwidth.com`.

[carriers-main]: /carrier/img/carriers-main.png "Carriers"
[carrier]: /carrier/img/carrier.png "Carrier Main"

## Headers from Customers to Providers

Customize the handling of X-Headers between the User Agent Client (UAC) and the carrier. By default, all UAC-originating X-Headers are removed for standardization, but this configuration allows selective retention of specific headers crucial for carrier communication.

When the Carrier requires information on the headers sent from the UAC, you can use below discussed process:

1. Login to your account.
2. Navigate to Management :material-menu-right: Customer :material-menu-right: Carrier :material-menu-right: blue `+` button :material-menu-right: Config :material-menu-right: Vars<sup>TOML</sup>.
3. Consider an example here: **Example of how to retain X-ng199 but remove all other X-headers**
4. Enter the code in the Vars<sup>TOML</sup> section.

```js
[headers] // configuration for headers
remove_regex="^X-(?:(?!(ng911)).)*" // only retain X-ng199 but remove all other X-headers
```

The **Default Setting** is:

```js
[headers]
remove_regex="^X-.*"
```

5.Click `Save`.

!!! Danger Note
    Please note you can use the regex pattern according to your requirement.

<img src= "/carrier/img/regex.png">

<!--stackedit_data:
eyJoaXN0b3J5IjpbMTkwMTM2NjQxM119
-->