# DID
**Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: DID**

A **Direct Inward Dial (DID)** number is one that exists on the public telephone network. When dialed, the carrier delivers the call to ConnexCS, which then passes it to the customer based on the settings configured here, allowing inbound calls to bypass a PBX or other routing to connect directly to the destination number. 

Create and edit **DID (Direct Inward Dial)** parameters within the individual customer cards, either using bulk uploads and edits or manually. 

!!! tip "Stats Button"
    Use the **`Stats`** button to view the **Per Number Report** of DIDs.
    
!!! note "Global DID"
    DID may also be configured and managed for specific Customers or Carriers under **Global :material-menu-right: DID**, which displays all configured DID.
    


## Configure DID
Click the **`+`** to configure a new DID:

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

+ **Call Recording**: disabled
+ **Timeout**: Set various options to help with call timeout for missed BYEs.
+ **Max Duration**: Set the maximum amount of time (in seconds) that the call will be allowed to exist before being terminated, typically in the case of a missed BYE.

### Billing
Select a predefined **Package** to determine costs and billing. This will decrement Frequency Match and Setup Cost against that package for the account. 

### Advanced

+ **Tags**: Add these for informational purposes
+ **P-Asserted-ID**: Either `Remove` the P-Asserted-ID so it doesn't reach the customer or leave it at `Default` so it is preserved. 

### Script Forge
Run a custom script on calls to the DID to performs actions such as route based on time of day or if specific users or numbers are active. 

See [**Script Forge**](https://docs.connexcs.com/developers/scriptforge/) for more information. 


