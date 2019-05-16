# Carrier Management

**ConnexCS** allows for simplified carrier management through the **Carrier Management** tab. Here, you can add, modify, and delete carriers. It is found in the **Management** tab, the four horizontal lines beneath the **Home** icon in the dashboard:

![alt text][carrier-list]

## Adding Carrier

![alt text][add-carriers]

To add carriers:

1. Navigate to **Management** > **Carrier**.
2. Click the **`+`** button.
3. Enter relevant carrier details.  A description of these atrributes can be found below.
4. Click **`Save`**.

Figure: A **Carrier** dialogue box.

![alt text][carrier-details]
        
**Carrier Fields**
        
* **Carrier Name:** Enter a unique name for the carrier.
* **Channels:** Add the number of channels (ports) in numeric digits. Set this to ZERO for unlimited channels.
* **CPS:** Enter the carrier's max allotted calls-per-second.
* **PayPal Email:** Enter the PayPal e-mail associated with the carrier's account.
* **Website:** Add the carrier's official website.
* **Portal URL:** Enter the carrier's portal URL, eg: portal.yourcarrier.com 
* **Portal Username:** Add a unique name for the portal.
* **Portal Password:** Enter the password used to sign in to the carrier portal.
* **Portal Access:** Decides if the current carrier has access to the portal.
* **Status:** The carrier's status.  A drop-menu contains the following options:
*  **Active** - carrier available to process calls.
*  **Inactive** - carrier will not process any calls.
*  **Pending Approval** - carrier is undergoing a verification process, but their credentials are in the system.  
* **Currency:** Choose the relevant currency for each carrier's country.
* **Address:** Add the carrier's address,  including country and postcode/ZIP code.
* **First Reply Timeout:** This is the length of time that you give for the carrier to respond after the **first invite**. Default value     is set to 30 seconds.
* **PDD Timeout:** This is the length of time that you give for the carrier to respond to the call. The default value is 5 seconds.
* **Ring Timeout:** This is the length of time that the call is allowed to ring before it times out and sends a cancel message. The         default value is 60 seconds.

## Deleting Carriers

To delete existing **Carriers**:

1. Select a carrier from the list using its checkbox.

2. Click the trash bin icon and confirm.

## Checking The Status

![alt text][carriers-sorting]

The status screen is for checking carrier information. To check status:

1. Click the **`Active`** button.
2. Select an option from the dropdown menu to filter results.
3. The display will change automatically according to your selection.

## Searching Carrier

The search box on the Carrier Management screen is for finding specific information among your carrier listings.

## Customising The View

The **Carriers** can be customized to display to display certain columns and omit others.  Click the menu button on the extreme right and use the checkboxes to turn columns on or off.

## Edit Carrier

To edit **Carriers**, select an entry from the list, and follow the procedure on the next page:

1. Press the **`Edit Carrier`** button.
2. Change the carrier's details and then press **`Save`**.

![alt text][carrier-dashboard]

### Stats

View carrier-related statistics by clicking **Stats** tab.

![alt text][carrier-stats] 

### Reply Management

**Reply Management** is a module that allows for efficient message and response system. Actions and their responses are set according to codes, and these responses can also be customized. 

To edit reply codes, select the **Replace** radio button, prompting the **New Code** and **New Reason** fields to appear. After that, choose a code from the list and enter a reason.

![alt text][carrier-reply] 
 
### Authentication

Carrier authentication uses IP addresses to allow or disallow attemps to access service.

![alt text][carrier-authentication] 
 
Add new authorized IP addresses by clicking the **`+`** button on the right.

![alt text][carrier-ip-1] 
 
Add details in the **Basic** and **Advanced** tabs to complete the IP's entry. Then click **`Save`**.

### Latest Calls

The **Latest Calls** tab (next to Authentication) is a log of the latest calls to pass through a given system. You can also simulate a call by clicking the green **`Simulate`** button.

![alt text][carrier-calls] 

### Failover
 
The **Failover** tab lists information about unsuccessful calls.

![alt text][carrier-failover] 
 
### Payment

The **Payment**  tab shows payments made to date. Add a new payment by clicking **`+`**, fill in the payment information,and the click **`Save`**.

![alt text][carrier-payment] 

#### CDR

The **CDR** tab displays call drop rates. Recalculate CDRs for a specific month by entering the dates and clicking **`Recalc CDR`**.

![alt text][carrier-cdr] 
 
### DID

The **DID** tab displays a list of DIDs.  New entries are added with the **`+`** on the left. After adding details, click **`Save`**.

![alt text][carrier-did]

### Alerts

The **Alerts**  tab lets you create, manage, and remove alerts that fire when specific events are triggered. See the [Alerts] page for details on how to manage them.

![alt text][carrier-alert-1]

![alt text][carrier-alert-2]

## Code Consistency

Code consistency measures changes to response codes on numbers returned from the carrier. It is useful for identifying routes of varying or poor quality. Effective carriers try to maintain 100% code consistency.

The metric considers 200 and 404s.

## Consecutive failures
Consecutive failures is a primitive way to measure a carrier's ability to connect calls. Once a call connects, the counter resets; if it fails, the counter is increased by one.  

Note that this mechanic can show false positives if the customer sends missed call traffic or calls wrong numbers.  The counter is a quick way to see if a route is failing rather than a comprehensive success monitor.

## Special Considerations
**Bandwidth.com** has diverged from the SIP spec and exposed an internal IP address required for sequential requests. To ensure compatibility, set the switch manafacturer to `bandwidth.com`.

[carrier-list]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/99.png "Carrier-List"
[add-carriers]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/100.png "Add-Carrier"
[carrier-details]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/101.png "Carrier-Details"
[carriers-sorting]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/102.png "Carriers-Sorting"
[carrier-dashboard]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/103.png "Carrier-Dashboard"
[carrier-stats]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/104.png "Carrier Stats"
[carrier-reply]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/105.png "Carrier Reply"
[carrier-authentication]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/106.png "Carrier Authentication"
[carrier-ip-1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/107.png "Carrier IP 1"
[carrier-calls]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/108.png "Carrier Calls"
[carrier-failover]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/109.png "Carrier Failover"
[carrier-payment]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/110.png "Carrier Payment"
[carrier-cdr]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/111.png "Carrier CDR"
[carrier-did]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/112.png "Carrier DID"
[carrier-alert-1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/113.png "Carrier Alert-1"
[carrier-alert-2]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/114.png "Carrier Alert-2"
[Alerts]: <https://docs.connexcs.com/alert/> "Alerts"
