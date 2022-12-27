# Direct Inward Dial (DID)

**Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: DID**

A **Direct Inward Dial (DID)** number is one that exists on the public telephone network.

When you dial the number, the carrier delivers the call to ConnexCS.

ConnexCS then passes it to the customer based on the configured settings. It allows inbound calls to bypass a PBX (Private Branch Exchange) or another routing to connect directly to the destination number.

Create and edit **DID parameters** within the individual customer cards. You can either use Bulk Upload or manually **Configure DID** as shown below.

!!! tip "Stats Button"
    Use **`Stats`** to view the **Per Number Report** of DIDs.

!!! note "Global DID"
    You can also configure and manage a DID for specific Customers or Carriers in **Global :material-menu-right: DID**, which displays all configured DID.

## Configure Direct Inward Call

To configure individual DIDs, click :material-plus::


### Basic

+ **Customer**: Assign the number to the customer.
+ **Customer Card**: Select the required billing (see [**Customer Rate Cards**](https://docs.connexcs.com/customer-ratecard/) for configuration).
+ **Provider**: Select the Carrier required for routing.
+ **Provider Card**: Select from Carrier Cards assigned to that Carrier (see [**Provider Rate Cards**](https://docs.connexcs.com/provider-ratecard/) for configuration).
+ **DID**: Enter the specific number.
+ **Retain Display Name**: If Enabled, it displays the Name in the FROM field of the SIP INVITE.
+ **Enabled**: Enable or Disable the DID.

### Destination

Select the destination to deliver incoming calls for the DID:


+ **URI**: Set the Destination DID (number or extension) and IP to forward calls to a specific SIP URI (Session Initiation Protocol, Uniform Resource Identifier).
+ **External**: To send the call back out to the internet, use a prefix (defined in Customer :material-menu-right: Routing ) to select the outbound route, then the number to send the call to.
+ **Internal**: Send internally to an extension, a Class5 feature, or even to another customer.
+ **Circuit Test**: *in progress*.


### Capacity Limits

Set the maximum number of INBOUND concurrent calls in **Channels**, and Calls Per Second (CPS) in **Flow Speed**.

### Media

For more details on these fields, see [**Media in Customer Routing**](https://docs.connexcs.com/customer/routing/#media).

<<<<<<< HEAD

+ **RTP Proxy Mode**: If relaxed is chosen and a connection through our service fails, it will automatically failover to backup.
=======
+ **RTP Proxy Mode**:  If you choose the relaxed setting and a connection through our service fails, it will automatically failover to backup.
>>>>>>> 0edcf7cc80529152fdd3e8730ca7238575d359ad

    :material-menu-right: `Strict`- This will enforce the proxy engagement.

    :material-menu-right: `Relaxed`- This will make every effort to connect to the RTP proxy; if it can't, the calls will connect directly.

+ **RTP Media Proxy**: The **recommended** RTP Media Proxy server is the **Closest (Elastic) Server**. The following options allow you to set the RTP media server for this route for this customer:

    :material-menu-right: `Direct RTP (no proxy)`- Bypass ConnexCS, so media flows directly between the customer and carrier.

    :material-menu-right: `Zone (recommended)`- Select any of the regional servers.


<<<<<<< HEAD

  + Disabled- never record calls
  + 1% Sampling
  + 5% Sampling
  + 25% Sampling
  + 50% Sampling
  + Enabled (Always On)
  
+ **Timeout**: Set various options to help with call timeout for missed BYEs.
=======
+ **Call Recording**: Select the % of calls to record for this customer:
    + Disabled- never record calls
    + 1% Sampling
    + 5% Sampling
    + 25% Sampling
    + 50% Sampling
    + Enabled (Always On)

+ **Timeout**: Set various options to assist with call timeout for missed BYEs.

>>>>>>> 0edcf7cc80529152fdd3e8730ca7238575d359ad
+ **Max Duration**: Set the maximum amount of time (in seconds) to allow the call to exist before it's terminated, typically in case of a missed BYE.

### Billing

Select a predefined **Package** to determine costs and billing. This will deduct Frequency Match and Setup Cost from the account's package.

### Advanced

+ **Tags**: Add these for informational purposes.
<<<<<<< HEAD

+ **P-Asserted-ID**: Either `Remove` the P-Asserted-ID so it doesn't reach the customer, or leave it `Default` to preserve it.
=======
+ **P-Asserted-ID**: Either `Remove` the P-Asserted-ID so it doesn't reach the customer or set it to `Default` to preserve it.
>>>>>>> 0edcf7cc80529152fdd3e8730ca7238575d359ad

### Script Forge


Run a custom script on calls to the DID to perform actions such as routing based on the time of day or if specific users or numbers are active.

## Bulk Upload

For batches of DIDs, you can use Bulk Upload to add multiple DIDs at one time using a CSV (comma-separated values) file.

During the upload process, it's then mapped to the correct values in Control Panel.

You can perform this for an individual Customer (**Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: DID**) or Globally (**Global :material-menu-right: DID**).  

!!! Caution "CSV files ONLY"
    Use only a CSV file to upload DID numbers. If you upload a regular spreadsheet or another file, the Control Panel becomes unresponsive.

    You must log out and log in to use the Control Panel.

**Step 1: Create the CSV**

1. In Microsoft Excel, open a new workbook and save it as a CSV (Comma delimited) file.

2. In the first row, add the names of the input fields as column headers. In step 2, you will have a chance to map these fields to the exact fields in ConnexCS, so these don't need to be exact.

<<<<<<< HEAD
**3.** The next step is to map the created columns into the system.

**4**. To map the columns, follow the listed steps:


+ Mapping is initiated by right-clicking the second row and selecting the "Set Start Row" option from the menu. You will see the first row highlighted in **Blue.**

+ After that, click on each column separately, choose the 'Map column' option, and select the options from the drop-down list to map that column.
=======
3. From the second row on, add the values of the input fields, one row per DID.
>>>>>>> 0edcf7cc80529152fdd3e8730ca7238575d359ad

!!! tip "Tips for creating the CSV file"
    Steps taken to ensure that you can perform the next steps effortlessly:

    + The CSV file must contain only one sheet.
    
    + Include various fields as you can when creating your columns to leverage the benefits of the bulk upload feature.
    
    + Note the number of first and last rows, as these will be the range (minimum and maximum) values in Step 2.
    
    + Input fields that correlate to drop-down lists: The entered value must match an existing entry (the Control Panel doesn't create values from drop-down lists on-the-fly).
    **For example**, "Retain Display Name" only accepts Enabled or Disabled; and rejects any other value.
    
    + Input fields that are pre-created objects (for example, customer names and customer card names).
    You can enter "dummy" values because you must associate the corresponding cell with the input value with the actual value (name of the pre-defined object) before you upload the DID numbers to the server.
    
    + Input fields that use numerical or free-text values: Enter the permissible range of values.
    
    + Input fields that accept values on-the-fly (for example, tags): Enter any meaningful value.
    
    + Don't include input fields such as checkboxes.
    You must manually select or clear a checkbox after you upload the DID number to the server.
    
    + Don't include a DID number that already exists on the Control Panel.
    The entered DID Bulk Upload will fail if Control Panel finds at least one identical DID number.

**Step 2: Upload the CSV to ConnexCS**

1. Click **Bulk Upload**.
2. Click **Upload** and select the CSV file (created in the earlier step).
3. The DID page displays the values in the CSV file.
4. Associate the input fields to the column headers in the CSV file.
    + Right-click the top row of data and select "Set Start Row."
    + Right-click any value in the DID column and click "Map Column" > "DID."
    + If the rest of the input fields match the Control Panel column headers, then you can upload the DID numbers to the server. If not, you should map the rest of the columns. To map, right-click and then select the corresponding headers in the "Map Column."
    + (Optional) If you want to change a value in a column that represents a drop-down list, click the cell and enter an different value in the drop-down list.
    + (Optional) If you want to associate an input value in a column that represents a pre-created object, such as the name of a customer, right-click the cell and click Map Column > [name of the input field].
    + (Optional) If you want to change a value in a column that accepts free-text or numerical values, click the cell and enter a different value in the drop-down list.
    + (Optional) Change values for all cells in the columns that represent pre-created objects, drop-down lists, or accept free-text or numerical values, to reduce your operational time to fine-tune the DID numbers' input fields manually, one-by-one, later.
5. Click **Upload to Server**, confirm the pop-up.
6. At this point, the DIDs and associated values get uploaded to the server. If there are any duplicate DIDs in the system, the entire operation will fail. The Control Panel doesn't have the ability to show which DID is the duplicate, so you will need to review the DIDs independently.

See [**Script Forge**](https://docs.connexcs.com/developers/scriptforge/) for more information.

