# Carrier
**Management :material-menu-right: Carrier **

The **Carrier** section in **ConnexCS** allows for simplified Carrier management where you can add, confiure, and delete carriers. 

## Carrier View Modification
* **Columns** pop out on the right allows you to add/remove options, change column order, in some cases you can create row groups and aggregate values for pivot functionality
* **Filters** pop out on the right allows you to filter your carriers
* Adjust Column ordering

## Carrier Management and Functions
From the **Carriers** page, you can perform several management operations. 

**+**: Add new Carriers (see [**Add Carrier**ADD LINK]() below for details.)

**Refresh**: Refresh the page, helpful when making edits or looking at real-time changes. This page is built as a web app so some information will update automatically.

**Bulk Edit**: Select multiple Carriers, then click the **Bulk Edit** button to modify fields such as Channels Status, Flow Speed (CPS), Portal Access, and Country. 

**Delete**: To delete multiple carriers at a time, select one or more carriers from the list and then click the trash bin icon and confirm.

**?**: Link to documentation for the current page. 

**Active**: To sort Carriers based on status, click **`Actice`** and select one of the status options. Results on the page will automatically arrange themselves according to the filter.

**Search**: The search box on the Carrier Management screen is for finding specific information among your carrier listings.

    
![alt text][carriers-sorting]

## Add Carrier
![alt text][add-carriers]

2. Click the **`+`** button.
3. Enter relevant carrier details.
4. Click **`Save`**.

*Click each tab for field explanations:*

=== "Basic"

    * **Carrier Name:** Enter a unique name for the carrier.
    * **Channels:** Add the number of channels (ports) in numeric digits. Set this to ZERO for unlimited channels.
    * **CPS:** Enter the carrier's max allotted calls-per-second.
    * **Status:** The carrier's status.  A drop-menu contains the following options:
       *  **Active** - carrier available to process calls.
       *  **Inactive** - carrier will not process any calls.
       *  **Pending Approval** - carrier is undergoing a verification process, but their credentials are in the system.  
    * **Currency:** Choose the relevant currency for each carrier's country.

=== "Portal"

    * **Portal URL:** Enter the carrier's portal URL, ex: portal.yourcarrier.com 
    * **Portal Username:** Add a unique name for the portal.
    * **Portal Password:** Enter the password used to sign into the carrier portal.
    * **Portal Access:** Decides if the current carrier has access to the portal.

=== "Timeout"

    * **First Reply Timeout:** Length of time for the carrier to respond after the **first invite**. Default = 30 seconds.
    * **PDD Timeout:** Length of time for the carrier to respond to the call. Default = 5 seconds.
    * **Ring Timeout:** Length of time the call may ring before it times out and sends a cancel message. Default = 60 seconds.

=== "Config"    

    * **PayPal Email:** Enter the PayPal e-mail associated with the carrier's account.
    * **Website:** Add the carrier's official website.
    * **P-Asserted-ID:** Select display options for this CLI field
    * **Consec Fail Backoff:** IF Enabled, when a carrier goes down, the First Reply Timeout is skipped.  

=== "Address"

    * **Address:** Add the carrier's address, including country and postcode/ZIP code.

=== "Verification"

    * **Propagate Username:** Used when the customer is sending information in addition to CLI information (ex: Company Name, Username)

    ![alt text][carrier-details]
        


## Configure Carrier
To configure a **Carrier**, select the Carrier from the list, then configured based on the following options:

1. Press the **`Edit`** button.
2. Change the carrier's details and then press **`Save`**.

![alt text][carrier-dashboard]

### Main

+ **Contacts**:
+ **Rate Grid**:
+ **Code Consistency** measures changes to response codes (specifically SIP 200 and 404s) returned from the carrier. It is useful for identifying routes of varying or poor quality. Effective carriers try to maintain 100% code consistency.

![alt text][code-consistency]

+ **Consecutive Failures**: The **Consec Fails (Consecutive Failures)** column increments a count of SIP failure responses. (The counter does not include SIP 200 responses for connected calls.) This simplistic measurement can measure a carrier's ability to connect calls: a connected call resets the counter, a failed call increments the counter by one. 

!!! note "Consec fails and false positives"
    This mechanism can show false positives if the customer sends missed call traffic or calls wrong numbers.  The counter is a quick way to see if a route is failing but should not be used as a comprehensive success monitor.
    
+ **Summary**:

### Reply Management
Customers can use the **Reply Management** tab to customize responses based on the SIP message received from the carrier. This allows for more efficient messaging and system responses. 

To edit Reply Codes:

1. Select **`Edit`** on the right
2. Select the action
    * Failover- allows the call to try the next carrier
    * Replace- enter the New Code and New Reason


### Auth
Carrier **Authentication** uses IP addresses to allow or disallow attempts to access service.

To add a new authorized IP address:

1. Click the **`+`** button on the right.
2. Add details in the **Basic** and **Advanced** tabs to complete the IP's entry. 
3. Then click **`Save`**.

!!! info "Outbound Proxy"
    On the Advanced tab, setting the Outbound Proxy and related Weights will route traffic through the specific IP. This reduces management overhead as a customer only needs to authorize the single IP. Additionally, multiple addresses can be load balanced using the AnyEdge system.  

### Failover
The **Failover** tab lists calls that failed with this carrier but connected with another carrier. This typically helps to troubleshoot an issue with carrier that is failing the calls. This can also be used to identify FAS (False Answer Supervision) billing fraud. 

!!! info "ConnexCS will halt routing on the following codes"
    - `3XX` (Re-write to 503)
    - `486`
    - `480`
    - `404`
 

### Latest Calls
The **Latest Calls** tab displays the most recent calls to pass through a given system. You can also simulate a call by clicking the green **`Simulate`** button.

![alt text][carrier-calls] 


### Payment
The **Payment** tab shows payments made to date. Add a new payment by clicking **`+`**, fill in the payment information, and the click **`Save`**.

![alt text][carrier-payment] 


### Stats
View carrier-related statistics by clicking **Stats** tab.

![alt text][carrier-stats] 

### Alerts
Use the **Alerts** tab to manage alerts that are tied to Balance or Consecutive Failures. These alerts can be sent to an email or phone number. See the [Alerts] page for details on how to manage them.

![alt text][alerts-carrier]

### DID
The **DID** tab displays a list of DIDs.  New entries are added with the **`+`** on the left. After adding details, click **`Save`**.

![alt text][carrier-did]

### CDR

The **CDR** tab displays call drop rates. Recalculate CDRs for a specific month by entering the dates and clicking **`Recalc CDR`**.

![alt text][carrier-cdr] 

## Special Considerations
**Bandwidth.com** has diverged from the SIP spec and exposed an internal IP address required for sequential requests. To ensure compatibility, set the switch manufacturer to `bandwidth.com`.


[add-carriers]: /carrier/img/100.png "Add-Carrier"
[carrier-details]: /carrier/img/101.png "Carrier-Details"
[carriers-sorting]: /carrier/img/102.png "Carriers-Sorting"
[carrier-dashboard]: /carrier/img/carrier-dashboard.png "Carrier-Dashboard"
[code-consistency]: /carrier/img/code-consistency.png "Code Consistency"
[carrier-stats]: /carrier/img/104.png "Carrier Stats"
[carrier-reply]: /carrier/img/105.png "Carrier Reply"
[carrier-authentication]: /carrier/img/106.png "Carrier Authentication"
[carrier-ip-1]: /carrier/img/107.png "Carrier IP 1"
[carrier-calls]: /carrier/img/108.png "Carrier Calls"
[carrier-payment]: /carrier/img/110.png "Carrier Payment"
[carrier-cdr]: /carrier/img/111.png "Carrier CDR"
[carrier-did]: /carrier/img/112.png "Carrier DID"
[alerts-carrier]: /carrier/img/alerts-carrier.png "Carrier Alert"

[Alerts]: <https://docs.connexcs.com/alert/> "Alerts"
