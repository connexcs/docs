---
title: "Caller Line Identification (CLI) | Routing Rules & Caller ID | ConnexCS"
description: "Learn how Caller Line Identification (CLI) works in ConnexCS. Configure routing rules, manage caller IDs, and ensure reliable call delivery."
canonical_url: "https://docs.connexcs.com/customer/cli/#cli-routing-rules"
---

# Caller Line Identification (CLI)

This page explains CLI Routing Rules...

# Caller Line Identification

## Overview
For a complete guide to Caller Line Identification (CLI), including routing rules, see [CLI Documentation](https://docs.connexcs.com/customer/cli/#cli-routing-rules).

**CLI (Caller Line Identification)** (or "Automatic Number Identification") refers to the *From* header in Session Initiation Protocol (SIP) and represents the senders number in an outgoing telephone call. It's the technical term for the Caller ID mechanism.

CLI (Caller Line Identification), aka ANI (Automatic Number Identification), is the From header in SIP. It represents the sender's number in a telephone call. It's the technical term for the mechanism we know as Caller ID.

In VoIP systems, CLI is more than just a way to display the number of incoming calls. It's used as a defense against unidentified call attempts.

CLI provides information to sort incoming calls. It's an important component of billing.

In ConnexCS, CLI lets you restrict and manipulate CLIs and Pre-Asserted Identity on customer calls so that any caller without a valid match gets rejected instantly.

It's also referred to as the A-number or A-leg, representing the incoming call to the switch. The B-number, or B-leg, is the dialed number, representing the outgoing call from the switch.

!!! tip "CLI Best Practice"
    It's recommended to have one Forced CLI.

### Key Features

1. **Granular Control**: Define which CLIs can pass through the system.
2. **Security & Compliance**: Restrict unauthorized calls based on CLI rules.
3. **Pattern Matching**: Utilize regular expressions to allow or block specific CLIs.
4. **Forced CLI Assignments**: Ensure calls use predefined numbers when necessary.
5. **Peer-Asserted Identity Management**: Manage trust and visibility of caller IDs at the network level.
6. **Directional Routing**: Apply rules to both inbound (origination) and outbound calls.

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
