# Routes
All **Termination Routes**, or outbound calls. 

## Edit a Route
Click on either the Route **`Name`** or **`Prefix`** to view and change the following settings:

+ **Rate Card**: Name of the card which determines your rates and tariffs. This is Read-Only. 

+ **Tech Prefix**: Distinguishes a route from an inbound party. Contact Support for help to set up a Tech Prefix. 

+ **Channels**: Set the maximum number of channels/live calls allowed for this route.

+ **Max Duration**: Set the maximum amount of time (in seconds) to allow the call to exist before it is cut off, usually after a missed BYE.

!!! **Info:** "Call Timeouts"-
    A VoIP call is stateful, even though its protocol is stateless. This means that the call's end time must be communicated to both sides in the conversation. They do this with a BYE message. If the BYE message goes missing, the call will continue forever. Max Duration is a method for setting up Missing BYE Protection. Another method is by using a Session Initiation Protocol (SIP) Ping to find when the connection has timed out. See **SIP Ping** below. 

+ **Flow Speed (CPS)**: Limits the calls per second. This must be set for each customer card assigned to the customer account.

+ **SIP Ping**: This sends a SIP packet to the remote end of the conversation around every 30 seconds. This checks to see if the other side is still aware of an ongoing conversation. Call is terminated if it does not receive back, or is told that the conversation is not active. 

    |Option                          | Result                                            |
    |--------------------------------|:--------------------------------------------------|
    | **Disabled**                   | No SIP pings are sent.                        |
    | **Enabled (Both Sides)**       | SIP pings are sent in both directions.        |
    | **Enabled (Downstream Only)**  | SIP Pings sent towards where the call is FROM (originated). |
    | **Enabled (Upstream Only)**    | SIP Pings sent towards where the call is TO (terminated). |

!!! **Warning:** "Asterisk pings"-
     By default, Asterisk does'nt have SIP Ping (OPTIONS) enabled. If you are using Asterisk, you may need to enable this to avoid disconnected calls after 30 seconds.     
 + **Notes** and **Route Notes**: Notes made for a particular route. **Notes** are read-only, **Route Notes** is available to edit. If you don't have the ability to edit these, please contact us for assistance. 

## View Card
Select this option to view prefix and billing details:

+ **Prefix**: The part of the dialed number that must match to trigger use of the card.

+ **Name**: Optional name for the card.

+ **Cost** (or Indeterminate): Refers to international calls, Toll Free (800, 888, etc) numbers, or anything else that is neither Inter or Intra. 

+ **Billing**: Call is billed based on the MCD (Minimum Call Duration) and Pulse, represented as x/x. Each call using this Rate Card is rounded up to MCD, then in increments of Pulse. Call durations is rounded up based on these settings, then that new duration is what is billed.

!!! **Abstract:** "Billing Example"-
    In our example, MCD is set to 30 and Pulse is set to 6. The Billing column shows 30/6. Calls are billed as follows:
   
    |Call Duration|MCD?|Pulse|Billed Duration|
    |---|---|---|---|
    |1 sec| round up to 30|n/a|30 sec|
    |20 sec|round up to 30|n/a|30 sec|
    |30 sec|round up to 30|n/a|30 sec|
    |31 sec|met|6|36 sec|
    |35 sec|met|6|36 sec|
    |36 sec|met|6|36 sec|
    |37 sec|met|6|42 sec|

## Card Info
Use the `Download` or `Email This Card` options to save the card details. 
