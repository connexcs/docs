# DID
**Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: DID**

A **Direct Inward Dial (DID)** number is one that exists on the public telephone network. When dialed, the carrier delivers the call to ConnexCS, which then passes it to the customer based on the settings configured here, allowing inbound calls to bypass a PBX or other routing to connect directly to the destination number. 

Create and edit **DID (Direct Inward Dial)** parameters within the individual customer cards, either using `Bulk Upload` or manually **Configure DID** as shown below. 

!!! tip "Stats Button"
    Use the **`Stats`** button to view the **Per Number Report** of DIDs.
    
!!! note "Global DID"
    DID may also be configured and managed for specific Customers or Carriers under **Global :material-menu-right: DID**, which displays all configured DID.
    


## Configure DID
To configured individual DIDs, click the :material-plus::

### Basic
+ **Customer**: Assign the number to the customer.
+ **Customer Card**: Select the desired billing (see [**Customer Rate Cards**](https://docs.connexcs.com/customer-ratecard/) for configuration).
+ **Provider**: Select the Carrier desired for routing.
+ **Provider Card**: Select from Carrier Cards assigned to that Carrier (see [**Provider Rate Cards**](https://docs.connexcs.com/provider-ratecard/) for configuration).
+ **DID**: Enter the specific number. 
+ **Retain Display Name**: If Enabled, it will display the Name in the FROM field of the SIP INVITE. 
+ **Enabled**: Enable or Disable the DID

### Destination
Select where to deliver calls that come in for the DID:

+ **URI**: Set the Destination DID (number or extension) and IP to forward calls to a specific SIP URI
+ **External**: To send the call back out to the internet, use a prefix (defined in Customer > Routing) to select the outbound route, then the number to send the call to
+ **Internal**: Send internally to an extension, a Class5 feature, or even to another customer
+ **Circuit Test**: *in progress*


### Capacity Limits
Set maximum number of INBOUND concurrent calls in **Channels**, and Calls Per Second (CPS) in **Flow Speed**. 

### Media
For more details on these fields, see [**Media in Customer Routing**](https://docs.connexcs.com/customer/routing/#media). 

+ **RTP Proxy Mode**: If connection via our service fails, and relaxed is selected, it will failover to backup automatically.
    
    :material-menu-right: `Strict`- This will enforce the proxy engagement. 
    
    :material-menu-right: `Relaxed`- This will perform best efforts to engage the RTP Proxy, if it can't then the calls will connect directly.

+  **RTP Media Proxy**: This defaults to Auto but selecting a zone (by continent) is the current recommendation. The following options allow you to set where RTP media server for this route for this customer:
    
    :material-menu-right: `Auto`- Selects the least expensive path between your customer and provider.
    
    :material-menu-right: `Direct RTP (no proxy)`- Bypass ConnexCS, so media flows directly between the customer and carrier. 
    
    :material-menu-right: `Zone (recommended)`- Select any of the regional servers

+ **Call Recording**: Select the percent of calls to record for this customer
    + Disabled- never record calls
    + 1% Sampling
    + 5% Sampling
    + 25% Sampling
    + 50% Sampling
    + Enabled (Always On)
+ **Timeout**: Set various options to help with call timeout for missed BYEs.
+ **Max Duration**: Set the maximum amount of time (in seconds) that the call will be allowed to exist before being terminated, typically in the case of a missed BYE.

### Billing
Select a predefined **Package** to determine costs and billing. This will decrement Frequency Match and Setup Cost against that package for the account. 

### Advanced

+ **Tags**: Add these for informational purposes
+ **P-Asserted-ID**: Either `Remove` the P-Asserted-ID so it doesn't reach the customer or leave it at `Default` so it is preserved. 

### Script Forge
Run a custom script on calls to the DID to performs actions such as route based on time of day or if specific users or numbers are active.

## Bulk Upload
For batches of DIDs, you can use Bulk Upload to add multple DIDs at one time using a CSV (comma-separated values) file. Part of the upload process includes mapping the 

How do I upload many DID numbers:  To upload multiple DID numbers, you must create a Comma-Separated Values (CSV) file and add the input fields and the values you specify in the regular workflow to add a DID to the Control Panel. You can edit and modify the values, after you upload them to the Control Panel. For more details about the CSV file, see the following procedure.

!!! Caution "CSV files ONLY"
    Use only a CSV file to upload DID numbers. If you upload a regular spreadsheet or another file, the Control Panel becomes unresponsive and you must log out and log in to use the Control Panel. 

Step 1: Create the CSV

1. In Microsoft Excel, open a new workbook and save it as a CSV (Comma delimited) file. 
2. In the first row, add the names of the input fields as column headers. In step 2, you will have a chance to map these fields to the exact fields in ConnexCS, so these don't need to be exact.
3. From the second row on, add the values of the input fields, one row per DID.

!!! tip "Tips for creating the CSV file"
	There are several steps you can take to ensure that the next step goes smoothly:
    + The CSV file must contain only one sheet.
    + Include as many fields as you can when creating your collumns to leverage the benefits of the bulk upload feature. 
    + Note the number of first and last rows, as these will be notd  values of the input fields to avoid disruptions or unexpected results when you upload and activate a DID number.
    d. For input fields that are drop-down lists, enter the exact values to associate the values with the DID number correctly. Otherwise, the Control Panel does not accept the input value. Effectively, Control Panel does not create values from drop-down lists on-the-fly.
    e. For input fields that are pre-created objects (for example, customer names, customer card names and so on), you can enter dummy values because you must associate the corresponding cell with the input value to the actual value (name of the pre-defined object) before you upload the DID numbers to the server.
    f. For input fields that use numerical or free-text values, enter the permissible range of values.
	g. For input fields that accept values on-the-fly (for example, tags), enter any meaningful value.
	h. Do not include input fields such as check boxes. You must manually select or clear a check box after you upload the DID number to the server.
	g. Do not include a DID number that already exists on the Control Panel. You cannot upload the DID numbers in the CSV file, if Control Panel finds at least One identical DID number.
	The following image illustrates an example of a CSV file.

Step 2: Upload the CSV to ConnexCS

2.  Log into the ConnexCS portal.
     ConnexCS displays the page you were on when you logged out of the portal.
3.  Click Global > DID in the navigation panel (located at the left of the page).
	The DID page appears.
4.  Click Bulk Upload located at the top of the page.
	The DID page displays the options to upload the DID numbers.
5.  Click Upload and fetch the CSV file.
	The DID page displays the values in the CSV file.
6.  Associate the input fields with the column headers in the CSV file. Do the following on the DID page:
Right-click a row (among the multiple rows of DIDs) and click Set Start Row.
Right-click any value in the DID (or the equivalent column in the CSV file), and click Map Column > DID.
	At this point, you can upload the DID numbers to the server. However, the associated values of the input fields are not uploaded to the server.
(Optional) If you want to change a value in a column that represents a drop-down list, click the cell and enter an different value in the drop-down list. 
(Optional) If you want to associate an input value in a column that represents a pre-created object such as the name of a customer, right-click the cell and click Map Column > <name of the input field>.
The column turn Red.
Right-click a cell, click Associate, and associate a value of the pre-defined object.
	The following image illustrate how to associate an input value of a pre-created object to a value in a cell.
	
(Optional) If you want to change a value in a column that accepts free-text or numerical values, click the cell and enter an different value in the drop-down list. 
(Optional) Change values for all cells in the columns that represent pre-created objects, drop-down lists, or accept free-text or numerical values, to reduce your operational time to fine-tune the DID numbers' input fields manually one-by-one, later.
7.  Click Upload to Server.
	Control Panel displays a confirmation pop-up.
8.  To upload the DID numbers to the Control Panel, click Yes.
	If the Control Panel finds all DID numbers in the CSV file to be unique (that is, not even one of them exist on the Control Panel), all DID numbers and the values you associated with them are uploaded to the server.
	You can see all DID numbers you uploaded, on the DID page.
	If the Control Panel finds even One duplicate entry, Control Panel displays an error message and none of the DIDs are uploaded to the Control Panel. Because the Control Panel does not highlight the duplicate entry or has options to ignore the duplicate DID, you must abort the upload task, fix the duplicate entry in the CSV file, and then upload the DID numbers from the CSV file.
9. (Optional) To abort uploading the DID numbers to the Control Panel, click Cancel.




See [**Script Forge**](https://docs.connexcs.com/developers/scriptforge/) for more information. 


