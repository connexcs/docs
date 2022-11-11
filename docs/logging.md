# Logging
**:material-menu-right: Logging**

The **Logging** function checks real-time call attempts, Session Initiation Protocol (SIP) traces, routing status, and simulates a call. As soon as a call hits the ConnexCS system, it will display in the Logging area. Most issue debugging occurs in the Logging section. 

## Register Logging
To view calls that are having issues registering, click **`Register Logging`**, and then click on a specific Call ID to view the [**Call Details**](https://docs.connexcs.com/logging/#call-id-details) and [**SIP Trace**](https://docs.connexcs.com/logging/#sip-traces).

## Fraud Logging
View the log of Fraud events. See [**Setup Fraud Detection**](https://docs.connexcs.com/setup/advanced/fraud/#setup-a-fraud-detection) for configuration. 

## Simulate
Simulating calls lets providers to identify areas of concern, or just to verify functionality, by testing in different setups and operational configurations. 

To Simulate Calls:

Click **`Simulate`** either from the **Logging** screen or from within a specific **Call ID**:

&emsp;![alt text][logging-4]

+ **Dialed Number**: Where the call will end (destination). 
+ **CLI/ANI**: Where the call will originate from (configured on ConnexCS). 
+ **Switch IP**: Where the call will traverse.
+ **Customer IP**: The ConnexCS Customer IP address where the call will originate.
+ **Registered User**: (Optional) Enter a SIP extension user.
+ **Routing Engine**: Select the regional zone. 

Click **`Simulate`**. 

The simulation call result will appear in logging. The Call ID will begin with a **`SIM`** tag. Click the Call ID to view the call's routing status.

!!! info "Testing a fixed issue"
    After you have fixed a routing issue with a specific call, you can go into the Call ID and run the Simulate tool to ensure any routing issues are resolved and the call is now successful. 

## Searching the Logs

To search the Logs, at the top-right of the Logging page, enter search for calls by phone number, Call ID, or IP address into the text box and click **`Search`**.

### Call ID Details
Click on a specific Call ID to view details and run call tools. 

* **Call Details**: The initial screen shows current details which include Routing Status, Authentication, Induced PDD (Post-Dial Delay), Real-time Transfer Protocol (RTP), Routing Engine ID, Dual-Tone Multi-Frequency (DTMF), and more information. At the bottom, view the Providers, Billing details and RTP information such as Jitter and Packet Loss. 
* **Raw Data**: Underlying data that populates for the call. 
* **SIP Trace**: Visual representation of SIP communications, see details in **SIP Traces**. 
* **Simulate**: See details above for **Simulating Calls**. 
* **Class5**: If you use Class5 system, there will be some additional information such as Request Parameters. 
* **Refresh**: For Live calls, use **`Refresh`** to reload the logs to show the most recent changes. This is necessary as some of the data must be processed through CDR before it is displayed. 

!!! Tip "More on Call-IDs"
    See [**Call-ID**](/guides/howto/callid) for further information and troubleshooting.

### SIP Traces
**SIP Tracing** is a diagnostic tool for phone systems using SIP (Session Initiation Protocol) for interactions across trunks and between endpoints. Traces give detailed information about calls and call attempts when debugging and troubleshooting. Since SIP protocol is used for call setup, maintenance, and tear-down, this tool is typically used only for call connection issues. Call quality issues are often identified using other methods.

!!! info "SIP Trace Captures"
    The **ConnexCS** system supports always-on **SIP Trace** capture. We keep a record of every packet sent and received by your server over the last seven (7) days. 

To view the SIP Trace of a call:

1. Click a **Call ID** to view its SIP traces.
2. Click **`SIP traces`** to view the SIP trace.

      ![alt text][logging-sip]

3. Toggle between Relative Time and Absolute Time for specific time of day
4. Options to download as Text or an Image

!!! note "Known issues with SIP Traces"
    * Missing SIP data: SIP traces aren't always guaranteed. SIP packets are carried by UDP, which may cause the traces to be lossy at times. This is to be expected due to the nature of the architecture.
    * Missed call attempts: If using SIP authentication, because there are 2 requests it's possible that they hit our database out of order. This may cause the logging page to only display the first call attempt.
    * These are considered reporting calls, and don't impact the calls directly. They're both rare, typically observed in less than 1 in every 50,000 calls

[logging-sip]: /misc/img/logging-sip.png "SIP Traces"
[logging-4]: /misc/img/236.png "logging-4"

## Call Release Reasons

The causes of a dropped call are:

 **1. Downstream BYE**: When the call has been disconnected from the **originator's** side via a **BYE** message.

<img src="/logging/downstreambye.png" alt="downstreambye" width="260"/>

 **2. Upstream BYE**: When the call has been disconnected from the **receiver** side via a **BYE** message.

<img src="/logging/upstreambye.png" alt="upstreambye" width="260"/>


**3. MI Termination**: The system terminates the call when it finds that there has been no audio connection between the call's originator and the receiver.<br>The system triggers a BYE message on both sides within the application.

**4. Ping Timeout**: If the Sip ping is enabled under Customer>Routing. OPTION packets are sent every X no. of seconds to both legs of the call which is supposed to be replied to with 200 OK by every leg. If any leg of the call misses sending the 200 OK, the call is ended with release reason as ping timeout to prevent any long-duration calls as the system recognizes that leg to be inactive.






<!--stackedit_data:
eyJoaXN0b3J5IjpbMzMzNjM2ODEwLC0yMjg3NjQ4MTgsLTc4MT
I4MjMwOCw4MjEzMzIzMTQsLTg1OTc1NDY0NywzOTQyNDkyMzks
LTEwMDE4NTA0LDE2MTA0MjI3OTQsLTE2NzgxNjgwMDQsLTQ4OD
c3NTQxOCwxMDQxMTc3NDAzLDg2NjQyMTMxMCwtMTczNjk4OTg3
MywtMTA4Mjk0NjU5MiwxMjk0MzgwOTgzLDYyNTExNzQ0Niw2ND
A3MjA4NDQsMTIyMjQ3MjE1NF19
-->