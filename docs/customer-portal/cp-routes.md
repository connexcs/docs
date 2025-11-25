# Routes

---
**Document Metadata** <br>**Category**: Customer Portal / Routes Management </br> **Audience**: Administrators, Engineers, Support Team <br>**Difficulty**: Intermediate <br>**Time Required**: Approximately 25–35 minutes</br> **Prerequisites**: Active ConnexCS Customer Portal account with routing permissions and familiarity with rate-cards, prefix sets, and call routing logic. </br>**Related Topics**: [Routing Overview](https://docs.connexcs.com/routing/) , [Restricting Calling Plans](https://docs.connexcs.com/guides/howto/restrict-calling-plan/) </br> **Next Steps**: Identify the route you wish to edit, Update settings such as Channels (max live calls), Max Duration (to cut calls missing BYE), Flow Speed (CPS limit), Enable/adjust SIP Ping mode, Review Tech Prefix and Dial String rules, then Monitor call behavior (ASR/ACD) for any unintended blocking or routing issues.</br>

---

All **Termination Routes** or **Outbound Calls** can be viewed. You can also access the **Rate Card** associated with **Termination Routes**."

## Edit a Route

Click on either the Route **`Name`** or **`Prefix`** to view and change the following settings:

+ **Rate Card**: Name of the card that determines your rates and tariffs. This is **Read-Only**.

+ **Tech Prefix**: Distinguishes a route from an inbound party. Contact Support for help setting up a Tech Prefix.

+ **Channels**: Set the maximum number of channels / live calls allowed for this route.

+ **Max Duration**: Set the maximum amount of time (in seconds) to allow the call to exist before it's cut off, usually after a missed BYE.

!!! info "Call Timeouts"
    A VoIP call is stateful, even though its protocol is stateless. This means that the call's end time must be communicated to both sides of the conversation. They do this with a BYE message.

    If the BYE message goes missing, the call will continue forever. Max Duration is a method for setting up Missing BYE Protection.
    
    Another method is to usel a Session Initiation Protocol (SIP) Ping to find when the connection has timed out.
    
    See **SIP Ping** below.

+ **Flow Speed (CPS)**: Limits the calls per second.

    You should set it for each customer card assigned to the customer account.

+ **SIP Ping**: This sends a SIP packet to the remote end of the conversation around every 30 seconds. This checks to see if the other side is still aware of an ongoing conversation.

    The call gets terminated if it doesn't receive back, or told that the conversation isn't active.

    |Option| Result|
    |--------------------------------|:--------------------------------------------------|
    | **Disabled**| No SIP pings sent.|
    | **Enabled (Both Sides)**| SIP pings sent in both directions.|
    | **Enabled (Downstream Only)**| SIP Pings sent towards where the call is FROM (originated).|
    | **Enabled (Upstream Only)**| SIP Pings sent towards where the call is TO (terminated).|

!!! warning "Asterisk pings"
     By default, Asterisk doesn't have SIP Ping (OPTIONS) enabled.

     If you are using Asterisk, you may need to enable this to avoid disconnected calls after 30 seconds.

**Notes** and **Route Notes:** Notes made for a particular route. **Notes** are read-only, **Route Notes** is available to edit. If you don't have the ability to edit these, please contact us for guidance.

## View Card

Select this option to view prefix and billing details:

+ **Prefix:** The part of the dialled number that must match to trigger the use of the card.

+ **Name**: Optional name for the card.

+ **Cost (or Indeterminate):**  Refers to international calls, Toll Free (800, 888, etc) numbers, or anything else that's neither Inter or Intra.

+ **Billing:** Call gets billed based on the MCD (Minimum Call Duration) and Pulse, represented as x/x.

    Each call using this Rate Card gets rounded up to MCD, then in increments of Pulse.

    A call durations gets rounded up based on these settings, and then that new duration is what's billed.

!!! abstract "Billing Example"
    In our example, MCD's value is 30 and Pulse value to 6. The Billing column shows 30/6.

    The billing for calls is as follows

    |Call Duration|MCD?|Pulse|Billed Duration|
    |---|---|---|---|
    |**1 sec**| round up to 30|n/a|30 sec|
    |**20 sec**|round up to 30|n/a|30 sec|
    |**30 sec**|round up to 30|n/a|30 sec|
    |**31 sec**|met|6|36 sec|
    |**35 sec**|met|6|36 sec|
    |**36 sec**|met|6|36 sec|
    |**37 sec**|met|6|42 sec|

## Card Info

Use the `Download` or `Email This Card` options to save the card details.
