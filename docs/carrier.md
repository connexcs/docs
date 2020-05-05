# Carrier Management

**ConnexCS** allows for simplified carrier management through the **Carrier** tab. Here, you can add, modify, and delete carriers. It is found in the **Management** tab, the four horizontal lines beneath the **Home** icon in the dashboard:

![alt text][carrier-list]

## Carrier Overview tab

### Add Carrier

![alt text][add-carriers]

To add carriers:

1. Navigate to **Management** > **Carrier**.
2. Click the **`+`** button.
3. Enter relevant carrier details. (See Carrier Configuration below.) 
4. Click **`Save`**.

![alt text][carrier-details]
        
### Delete Carrier

To delete existing **Carriers**:

1. Select a carrier from the list using its checkbox.
2. Click the trash bin icon and confirm.

### Consecutive failures
Consecutive failures is a primitive way to measure a carrier's ability to connect calls. Once a call connects, the counter resets; if it fails, the counter is increased by one.  The counter does not include SIP 200 responses (connected).

Note that this mechanic can show false positives if the customer sends missed call traffic or calls wrong numbers.  The counter is a quick way to see if a route is failing rather than a comprehensive success monitor.

### Sort Carrier by Status

![alt text][carriers-sorting]

The status screen is for checking carrier information. To check status:

1. Click the **`Active`** button.
2. Select an option from the dropdown menu to filter results.
3. The display will change automatically according to your selection.

### Searching Carrier

The search box on the Carrier Management screen is for finding specific information among your carrier listings.

### Customising The View

The **Carriers** view can be customized to display certain columns and filter results.  Click the menu buttons on the extreme right and use the checkboxes to modify the view and filter results.

## Carrier Configuration

To edit **Carriers**, select an entry from the list, and follow the procedure on the next page:

1. Press the **`Edit Carrier`** button.
2. Change the carrier's details and then press **`Save`**.

![alt text][carrier-dashboard]

### Reply Management

**Reply Management** is a module that allows for efficient message and response system. Actions and their responses are set according to codes, and these responses can also be customized. 

To edit reply codes, select the **Replace** radio button, prompting the **New Code** and **New Reason** fields to appear. After that, choose a code from the list and enter a reason.

### Auth

Carrier **Authentication** uses IP addresses to allow or disallow attemps to access service.

![alt text][carrier-authentication] 
 
Add new authorized IP addresses by clicking the **`+`** button on the right.

![alt text][carrier-ip-1] 
 
Add details in the **Basic** and **Advanced** tabs to complete the IP's entry. Then click **`Save`**.


### Failover
 
The **Failover** tab lists information about unsuccessful calls.

![alt text][carrier-failover] 

!!! info "ConnexCS will halt routing on the following codes"
    - `3XX` (Re-write to 503)
    - `486`
    - `480`
    - `404`

![alt text][carrier-reply] 
 

### Latest Calls

The **Latest Calls** tab (next to Authentication) is a log of the latest calls to pass through a given system. You can also simulate a call by clicking the green **`Simulate`** button.

![alt text][carrier-calls] 


### Payment

The **Payment**  tab shows payments made to date. Add a new payment by clicking **`+`**, fill in the payment information,and the click **`Save`**.

![alt text][carrier-payment] 


### Stats

View carrier-related statistics by clicking **Stats** tab.

![alt text][carrier-stats] 

### Alerts

The **Alerts**  tab lets you create, manage, and remove alerts that fire when specific events are triggered. See the [Alerts] page for details on how to manage them.

![alt text][carrier-alert-1]

![alt text][carrier-alert-2]

### DID

The **DID** tab displays a list of DIDs.  New entries are added with the **`+`** on the left. After adding details, click **`Save`**.

![alt text][carrier-did]

### CDR

The **CDR** tab displays call drop rates. Recalculate CDRs for a specific month by entering the dates and clicking **`Recalc CDR`**.

![alt text][carrier-cdr] 

## Code Consistency

Code consistency measures changes to response codes on numbers returned from the carrier. It is useful for identifying routes of varying or poor quality. Effective carriers try to maintain 100% code consistency.

The metric considers 200 and 404s.



## Special Considerations
**Bandwidth.com** has diverged from the SIP spec and exposed an internal IP address required for sequential requests. To ensure compatibility, set the switch manafacturer to `bandwidth.com`.

[carrier-list]: /carrier/img/99.png "Carrier-List"
[add-carriers]: /carrier/img/100.png "Add-Carrier"
[carrier-details]: /carrier/img/101.png "Carrier-Details"
[carriers-sorting]: /carrier/img/102.png "Carriers-Sorting"
[carrier-dashboard]: /carrier/img/103.png "Carrier-Dashboard"
[carrier-stats]: /carrier/img/104.png "Carrier Stats"
[carrier-reply]: /carrier/img/105.png "Carrier Reply"
[carrier-authentication]: /carrier/img/106.png "Carrier Authentication"
[carrier-ip-1]: /carrier/img/107.png "Carrier IP 1"
[carrier-calls]: /carrier/img/108.png "Carrier Calls"
[carrier-failover]: /carrier/img/109.png "Carrier Failover"
[carrier-payment]: /carrier/img/110.png "Carrier Payment"
[carrier-cdr]: /carrier/img/111.png "Carrier CDR"
[carrier-did]: /carrier/img/112.png "Carrier DID"
[carrier-alert-1]: /carrier/img/113.png "Carrier Alert-1"
[carrier-alert-2]: /carrier/img/114.png "Carrier Alert-2"

[Alerts]: <https://docs.connexcs.com/alert/> "Alerts"
