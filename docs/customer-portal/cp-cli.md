---
title: "Caller Line Identification (CLI) | Routing Rules & Caller ID | ConnexCS"
description: "Learn how Caller Line Identification (CLI) works in ConnexCS. Configure routing rules, manage caller IDs, and ensure reliable call delivery."
canonical_url: "https://docs.connexcs.com/customer/cli/"
---

# Caller Line Identification (CLI)

This page explains CLI Routing Rules...

# Caller Line Identification

For a complete guide to Caller Line Identification (CLI), including routing rules, see [CLI Documentation](https://docs.connexcs.com/customer/cli/#cli-routing-rules).

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

!!! note
    **Add Forced CLI** appears when the customer has forced a particular CLI in their account.

## Steps to add Approved CLIs

1. Login to your account.
2. Click on **CLI** on the left panel.
3. Click on the `blue +` button on the top right.
4. Enter the phone number with the country prefix.
5. Click on **Next Step**.

<img src= "/customer-portal/img/cli1.png" style="border: 2px solid #4472C4; border-radius: 8px;">

6.You will receive a call for the **Verification Code**.

7.Enter the verification code and the click **Verify Code**.

<img src= "/customer-portal/img/cli2.png" style="border: 2px solid #4472C4; border-radius: 8px;">

8.The CLI will be added as **Whitelist**. **Forced** CLI appears when the customer has forced a particular CLI in their account.

<img src= "/customer-portal/img/cli3.png" style="border: 2px solid #4472C4; border-radius: 8px;">
