# Circuit Test

A **Circuit Test** can aid troubleshooting by providing  details such as FAS, RTP quality, MOS, release reason, jitter, packet loss percentage, and answer delay measurement. This is done by initiating a call in the switch using a predefined DID. The call routes to a termination provider, out through the PSTN network and then back to the DID.  At this point, it checks DTMF, CLI, FAS, and MOS.

## Configure a Circuit Test

### Setup DID 

Navigate to **Global** > **DID** the click on the **`+`**.
2. **Basic** - Enter the Customer and Provider information, and the DID number
3. **Destination** - Select a destination to circuit test.
4. **Media** - Select the RTP Proxy & Media proxy (details found in the [Media section of Routing](https://docs.connexcs.com/customer/routing/#media) article), Timeouts, and Max Duration (default value is 3600 seconds).
6. Click **`Save`**.

### Configure the route
Navigate to **Setup** > **Settings** > **Options**. Edit the following parameters:

* **Origination Ingress Address** - Enter the origination ingress IP, and **`Save`**.
* **Termination Ingress Address** - Enter the termination ingress IP, and **`Save`**.
* **Circuit Test User** - Select the customer account, and **`Save`**.

![alt text][circuittest]

## Run the Circuit Test
Navigate to **Management** > **Circuit Test**

### Execute the Circuit Test
Under **Log**, select **`Run`** to execute the test. If the log entry doesn't appear, you can try refreshing the list. 

### Schedule the Circuit Test
Under **Schedule**, click the **`+`** to configure a time for the Circuit Test to be run. Note, most fields under Schedule allow for multiple selections. Ex: you can schedule the test for multiple days of the week. 

[circuittest]: /misc/img/circuittest.png "Circuit Test"
