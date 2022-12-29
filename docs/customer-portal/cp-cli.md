# Caller Line Identification

**CLI (Caller Line Identification)** (or "Automatic Number Identification") refers to the *From* header in Session Initiation Protocol (SIP) and represents the senders number in an outgoing telephone call. It's the technical term for the Caller ID mechanism.

In VoIP systems, CLI is more than just a way to display the number of incoming calls. It serves as a defense against unidentified call attempts, provides information to sort incoming calls, and is an important part of billing.

On our platform, CLI allows you to restrict and allow CLIs, which then allow or restrict calls based on the match.

!!! tip "CLI Best Practice"
    It's recommended to have one Forced CLI.

## Forced

Depending on how you want to route the calls, toggle a CLI between `Forced` and `Allow list`.

+ **Forced:** If there is no match when you select Forced, the CLI listed replaces the CLI sent on the call. For example, if you set the CLI to 111111111111, that's what's sent on any outbound calls, regardless of what's provisioned on your endpoint.
+ **Allow list:** Setting the list to "Allow List" will permit a call if there are no specific matches.

!!! tip "Adding CLIs"
    If you want to add CLIs from the Customer Portal, please contact support to have "Approved CLIs Only" enabled.

    Any CLI you add will need to get approval before it's functional here.

<!--stackedit_data:
eyJoaXN0b3J5IjpbNjA5NjA2Mjk2XX0=
-->
