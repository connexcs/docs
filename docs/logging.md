# Logging

**Logging** is used to check real-time call attempts, SIP traces, routing status, and to simulate a call.

## SIP traces
To view the SIP traces of a call, follow the steps below.

1. Click **Management** > **Logging**.

![alt text][logging-1]

2. Click a call ID to view its SIP traces.

![alt text][logging-2]

3. Click the **`SIP traces`** button to view the SIP trace image.

**Please note the SIP traces are not always guaranteed.**

## Simulating Calls
Simulating calls lets providers test different setups and operations to identify areas of concern, or just to verify functionality.  To simulate calls:

![alt text][logging-3]

1. Click **Management**>**Logging**>**Simulate**. A form will appear:

![alt text][logging-4]

2. Enter the dialed number and CLI/ANI number
3. Select a switch IP from the drop down menu.
4. Enter the IP address.
5. Optionally, add the SIP extension user
6. Select the routing engine zone
7.  Click **`Simulate`**

The simulation call result will appear in logging. The call id will start with a SIM name. Click the call id to view the call's routing status.

## Refreshing the Logs

The **`Refresh`** button will reload the logs to show the most recent changes.  Uses this buttone to be sure you're always looking at the most current information.

## Searching the Logs

You can search for calls by phone number, call ID, or IP address, but entering one of these attributes into the text box at the top-right of the Logging page and clicking the **`Search `** button.

![alt text][logging-6]

[logging-1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/233.png "logging-1"
[logging-2]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/234.png "logging-2"
[logging-3]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/235.png "logging-3"
[logging-4]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/236.png "logging-4"
[logging-5]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/237.png "logging-5"
[logging-6]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/238.png "logging-6"



[logging-dashboard-new]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/logging-dashboard-new.png "logging-dashboard"

[simulate]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/simulate.png "simulate"

[simulate-call]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/simulate-call.png "simulate-call"

[lookup]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/lookup.png "lookup"

[lookup-query]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/lookup-query.png "lookup-query"

[refresh]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/refresh.png "refresh"

[sip-trace-1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/sip-trace-1.png "sip trace 1"

[sip-trace-2]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/sip-trace-2.png "sip trace 2"

[sip-trace-3]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/sip-trace-3.png "sip trace 3"

[sip-trace-4]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/sip-trace-4.png "sip trace 4"

 
[attempts1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/attempts1.png "attempts1"

[simulate-1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/simulate-1.png "simulate-1"
[lookup-1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/lookup-1.png "lookup-1"
[lookup-2]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/lookup-2.png "lookup-2"
[lookup-3]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/lookup-3.png "lookup-3"
[lookup-4]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/lookup-4.png "lookup-4"

### Known Problems
- SIP Traces can be lossy, this is due to the nature of the architecture.
- If using SIP authentication, because there are 2 requests it is possible that they hit our database out of order. So the logging page may only display the first call attempt.

Neither of the above two problem affect calls and are typically observed in less than 1 in every 50,000 calls.

