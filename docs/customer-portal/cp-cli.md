# CLI

**CLI (Caller Line Identification)** (or "Automatic Number Identification") refers to *From* header in SIP, and represents the senders number in an outgoing telephone call. It is the technical term for the mechanism we know as Caller ID. In VoIP systems, CLI is more than just a way to display the number of incoming calls. It is used as a defense against unidentified call attempts, provides information to sort incoming calls, and is an important component of billing. On our platform, CLI allows you to restrict and allow CLIs, which then allows or restricts calls based on whether they match. 

!!! tip "CLI Best Practice"
    Best practice is to only have one Forced CLI.

## Forced
Toggle a CLI between `Forced` and `Whitelist` depending on how you would like those calls to be routed. 

+ **Forced**: When choosing Forced, if there is no match present, the CLI listed is used to replace the CLI being sent on a call. For example, if the CLI is set to 111111111111, that is what will be sent on any outbound calls, regardless of what is provisioned on your endpoint.
+ **Whitelist**: Setting to Whitelist will allow a call if there are no specific matches. 
