# Carrier
**Management :material-menu-right: Carrier**

The **Carrier** section in **ConnexCS** allows for simplified Carrier management where you can add, configure, and delete Carriers. 

![alt text][carriers-main]

## Carrier Functions
From the **Carriers** page, you can perform several management operations. 

:material-plus::Add new Carriers (see [**Create Carrier**](https://docs.connexcs.com/carrier/#create-carrier) below for details.)

**Refresh** Refresh the page, helpful when making edits or looking at real-time changes. This page is built as a web app so some information will update automatically.

**Bulk Edit** Select multiple Carriers, then click the **Bulk Edit** button to modify fields such as Channels Status, Flow Speed (CPS), Portal Access, and Country. 

**Delete** To delete multiple carriers at a time, select one or more carriers from the list and then click the trash bin icon and confirm.

**?** Link to documentation for the current page. 

**Active** Used to sort Carriers based on the selected status. Results on the page will automatically arrange themselves according to the filter.

**Search** The search box on the Carrier Management screen is for finding specific information among your carrier listings.

**Audit Log** Click "View Audit Log" to the right of the Edit button to view changes made to the carrier configuration. 

**Credit column** Amounts listed here are purely informational, calls will still be connected by a carrier even if the amount here is at zero credit.     

## Carrier View Modification
* **Columns** pop out on the right allows you to add/remove options, change column order, in some cases you can create row groups and aggregate values for pivot functionality
* **Filters** pop out on the right allows you to filter your carriers
* Adjust Column ordering

## Create Carrier

2. Click the :material-plus: button.
3. Enter relevant carrier details.
4. Click **`Save`**.

*Click each tab for field explanations:*

=== "Basic"

    * **Carrier Name:** Enter a unique name for the carrier.
    * **Channels:** Add the number of channels (ports) in numeric digits. Set this to ZERO for unlimited channels.
    * **CPS:** Enter the carrier's max allotted calls-per-second.
    * **Status:** The carrier's status.  A drop-menu contains the following options:
        
        :material-menu-right: `Active`- carrier available to process calls.
        
        :material-menu-right: `Inactive`- carrier will not process any calls.
        
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
    * **P-Asserted-ID:** Considered a network level identifier, you can select how calls to the provider will be handled based on the PA-ID:
    
        :material-menu-right: `Default`- call passed to the provider (no manipulation)
        
        :material-menu-right: `Remove`- strips PA-ID before passing the call to the provider
        
        :material-menu-right: `If Available`- will add PA-ID if one has been provided, otherwise the call will still be allowed
        
        :material-menu-right: `Required`- call will not be delivered to the provider without the PA-ID
    
    * **Consec Fail Backoff:**(#consec-backoff) When Enabled, if a carrier goes down, only a fraction of calls will be sent to the carrier until the start to complete again (calls are not completely disabled otherwise there is no way to know when the carrier is back up again). the First Reply Timeout is skipped.  
    * **Tags** and **TOML**: not applicable to carriers

=== "Address"

    * **Address:** Add the carrier's address, including country and postcode/ZIP code.

=== "Verification"

    * **Propagate Username:** Enabling this will retain the display name of the FROM field in the SIP header (ex: Company Name, Username).
        


## Configure Carrier
To configure a **Carrier**, select the Carrier from the list, then configure the following areas:

### Main

![alt text][carrier]

+ **Contacts**: Helpful for keeping track of Support contacts for individual carriers
+ **Rates Grid**: Associated rate cards for this provider. See [**Provider Rate Cards**](https://docs.connexcs.com/provider-ratecard/) for configuration. 
+ **Code Consistency** measures changes to response codes (specifically SIP 200 and 404s) returned from the carrier. It is useful for identifying routes of varying or poor quality. Effective carriers try to maintain 100% code consistency.
+ **Consecutive Failure**: Shows a count of failed calls based on specific SIP failure responses. (The counter does not include SIP 200 responses for connected calls.) This simplistic measurement can measure a carrier's ability to connect calls or a particular route: a connected call resets the counter, a failed call increments the counter by one. Just a few Fails is not concerning, be on the lookout for higher numbers in the thousands. 

!!! note "Consec fails and false positives"
    This mechanism can show false positives if the customer sends missed call traffic or calls wrong numbers.  The counter is a quick way to see if a route is failing but should not be used as a comprehensive success monitor.
    
+ **Summary**: All calls through this carrier, whether in Live (last 24 hours), Daily, or Monthly formats, are all displayed in 24-hour UTC. This data is updated hourly. 

!!! warning "Auto Generate Invoice"
    Do not use the "Auto Generate Invoice" under the Carrier. Invoices should be managed via the [**Customer Invoice**](https://docs.connexcs.com/customer/invoices/) section.  

### Reply Management
Customers can use **Reply Management** to customize responses based on the SIP message (100 to 606) received from the carrier. This allows for more efficient messaging and system responses and can also be used by customers who have switches which require certain SIP code responses. See the [**Wikipedia List of SIP response codes**](https://en.wikipedia.org/wiki/List_of_SIP_response_codes) for additional details about each code. 

To edit Reply Codes:

1. Select **`Edit`** on the right of the code
2. Select the action
    * Failover (only available for some codes)- allows the call to try the next carrier
    * Replace- enter the New Code and New Reason
    
!!! example "Code Replace use case"
    Customer switch requires a SIP 180 response (Ringing) but is only receiving the 183 response (Session in Progress). The 180 (with SDP) tells the SIP phone to generate ringing locally (the audio is clear sounding since it is local), but with the 183 (no SDP) the ringing is generated at the network (this may play different ringing, perhaps for the local country). In this case, the 183 code can be modified in Reply Management to `Replace` with 180 instead.
    
!!! example "Code Failover use case"
    In some situations, carriers may not return SIP failure codes accurately. If the carrier sends a 404 (client side error) the customer equipment may not failover to the next carrier automatically. Use Reply Management to set 404 to `Failover` to the next carrier.

### Auth

1. Carrier **IP Authentication**: This uses IP addresses to allow or disallow attempts to access service. To add authorized IP address(es), click the :material-plus: button on the right. These fields are the same as in [**Customer Auth**](https://docs.connexcs.com/customer/auth/) except that they pertain to Carriers. The only exceptions are:
    
    + **User name and Password**: These are for the call to connect out to the carrier, if server is acting as a UAC
    + **Outbound Proxy** (for Ingress only switches): Enter an IP of a Proxy server for calls to route to, before being sent to the carrier. This rewrites the UAC IP in the VIA field of the SIP header. This reduces management overhead as a customer only needs to authorize the single IP. Additionally, multiple addresses can be load balanced using the AnyEdge system. 
    + **Weights**: If multiple switches configured in IP Authentication, this field sets weighting to determine which servers are preferred over others, essentially doing outbound distribution to a single carrier, but through multiple gateways to that carrier. 

2. Carrier **SIP User Authentication** would only be used to allow a carrier to connect into the system, not for outbound connections. Field details can be found under [**Customer Auth**](https://docs.connexcs.com/customer/auth/).  


### Failover
The **Failover** tab lists calls that failed with this carrier but connected with another carrier. This typically helps to troubleshoot an issue with carrier that is failing the calls. This can also be used to identify FAS (False Answer Supervision) billing fraud. 

!!! info "ConnexCS will halt routing on the following codes"
    - `3XX` (Re-write to 503)
    - `486`
    - `480`
    - `404`
 

### Latest Calls
The **Latest Calls** tab displays the most recent calls to pass through a given system. View recent calls and their SIP traces and run simulated calls. See [**Logging**](https://docs.connexcs.com/logging/) section for details on these functions. To view Latest Calls for all customers, to the Logging section in ConnexCS. 

To simulate a call: 

1. Click on the `Call ID`.
2. Click the **`Simulate`** button.
3. Complete details for **Dialed Number, CLI/ANI, Switch IP** etc.
4. Select **`Simulate`** button.



### Payment
The **Payment** tab shows payments made to the carrier. Add a new payment by clicking :material-plus:, fill in the payment information, and the click **`Save`**.

### Stats
View carrier-related statistics by clicking **Stats** tab. Descriptions for each of these graphs can be found under [**Customer Stats**](https://docs.connexcs.com/customer/stats/).

### Alerts
Use Carrier **Alerts** to contact a selected email address when `Consecutive Failovers` reaches a predetermined limit. See [**Customer Alerts**](https://docs.connexcs.com/customer/alerts/) for configuration details. 

### DID
The **DID** tab displays a list of DIDs that belong to that carrier.  New entries are added with the :material-plus: on the left. See [**Customer DID**](https://docs.connexcs.com/customer/did/) for configuration details. 

### CDR
The **CDR** tab displays call drop rates. Use **`Recalc CDR`** when CDR records are not accurate. See [**Customer CDR**](https://docs.connexcs.com/customer/cdr/#recalculate-cdr) for details. 

!!! danger "Rerating CDRs"
    If you select either Rerate" option when recalculating CDRs, please be aware this will change your CDRs and is not reversible. Original call durations will be modified according to the criteria selected.

## Special Considerations
[**Bandwidth.com**](https://www.bandwidth.com/) has diverged from the SIP spec and exposed an internal IP address required for sequential requests. To ensure compatibility, set the switch manufacturer to `bandwidth.com`.

[carriers-main]: /carrier/img/carriers-main.png "Carriers"
[carrier]: /carrier/img/carrier.png "Carrier Main"


