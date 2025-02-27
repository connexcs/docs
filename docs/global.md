# Global

## Overview

The **Global Section** in the ConnexCS Control Panel provides an account-wide overview of many of the same sections found under **Management :material-menu-right: Customer** or **Management :material-menu-right: Carrier**.

Its an essential tool for system-wide management, offering key functionalities that allow for streamlined troubleshooting, efficient DID and routing lookup, and centralized authentication and logging.

Whether managing Class 4 call routing or expanding developer capabilities, the Global Section enhances efficiency and oversight across all customer accounts.

### What the Global Section Offers?

+ **Increased Efficiency**: Access and manage multiple customer settings in one place.

+ **Faster Troubleshooting**: Quickly identify and resolve system-wide issues.

+ **Better Visibility**: Provides a complete overview of routing, authentication, and logging.

+ **Simplified DID Management**: Locate and manage DIDs without navigating through multiple customer profiles.

+ **Enhanced Debugging**: Real-time logging and debugging tools help streamline issue resolution.

+ **Scalability**: Supports large-scale operations by offering a holistic view of system-wide configurations.

## Alerts

View all the Alerts across the entire account. When creating an Alert from Global, you will need to select the Company that will use the Alert.

*See [**Alerts**](https://docs.connexcs.com/customer/alerts) for configuration details and examples for building Alerts.*

Alternate location(s):

* Customer :material-menu-right: [Customer Name] :material-menu-right: Alerts
* Carrier :material-menu-right: [Carrier Name] :material-menu-right: Alerts

!!! tip "Testing"
    Click **`Test`** (only available here) to simulate the Alert.

## Contacts

View all Customer Contacts. When creating a Contact from Global, you will need to select the Company where the Contact exists.

*See [**Contacts**](https://docs.connexcs.com/customer/main/#contacts) for configuration details.*

Alternate location(s):

* Customer :material-menu-right: [Customer Name] :material-menu-right: Main
* Carrier :material-menu-right: [Carrier Name] :material-menu-right: Main

## Call Detail Record

View CDRs (Call Detail Record) for all Customers. The Global CDR view also allows you to select specific CDRs for Recalculation.

*See [**CDR**](https://docs.connexcs.com/customer/cdr) for configuration details.*

Alternate location(s):

* Customer :material-menu-right: [Customer Name] :material-menu-right: CDR
* Carrier :material-menu-right: [Carrier Name] :material-menu-right: CDR

## Dialog

View all active calls across the entire account.

*See [**Dialogs**](https://docs.connexcs.com/customer/dialogs) for configuration details.*

Alternate location(s):

* Customer :material-menu-right: [Customer Name] :material-menu-right: Dialogs.

## Routing

View overview of configured routes grouped by Customer, Customer Card, Provider Card, and all active Channels and current CPS calls per account.

*See [**Routing Overview**](/routing) and [**Rate Card Overview**](/rate-card-building) for details.*

Alternate location(s):

* Customer :material-menu-right: [Customer Name] :material-menu-right: Routing :material-menu-right: Ingress Routing

## Caller Line Identification

View CLIs for all the customers.

*See [**CLI**](https://docs.connexcs.com/customer/cli/) for more details.*

Alternate location(s):

* Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: Routing :material-menu-right: CLI.

## Direct Inward Dial

View a list of all DIDs (Direct Inward Dialing) and configure and edit them.

*See [**DID**](https://docs.connexcs.com/customer/did) for configuration details, including Bulk Upload.*

Alternate location(s):

* Customer :material-menu-right: [Customer Name] :material-menu-right: DID
* Carrier :material-menu-right: [Carrier Name] :material-menu-right: DID

Unlike the Customer DID section the Global DID sections groups numbers as follows:

* **Assigned**: Numbers currently assigned to accounts.
* **Inventory**: Unassigned numbers.
* **Provision**: Uses ConnexCS [**ScriptForge**](https://docs.connexcs.com/developers/scriptforge/) Drivers interface with DID provider APIs so you can assign new numbers.
* **Providers List**: Lists all DIDs and associated providers.

## IP Authentication

View all configured IP Authentication.

*See [**IP Authentication**](https://docs.connexcs.com/customer/auth/#ip-authentication) for configuration details.*

Alternate location(s):

* Customer :material-menu-right: [Customer Name] :material-menu-right: Auth
* Carrier :material-menu-right: [Carrier Name] :material-menu-right: Auth

## Invoices

View all Invoices, access basic invoice functions (such as date range, unit price, tax), and assign payments.

*See [**Invoices**](https://docs.connexcs.com/customer/invoices) for configuration details.*

Alternate location(s):

* Customer :material-menu-right: [Customer Name] :material-menu-right: Invoices

## Payment

All Payments across the account.

*See [**Payment**](https://docs.connexcs.com/customer/payment) for configuration details.*

Alternate location(s):

* Customer :material-menu-right: [Customer Name] :material-menu-right: Payment

## SIP Registration

View the current list of registered SIP users.

*SIP Registration has no supplementary documentation or configuration options.*

**Inbound Registrations**

View active registrations (live calls) of desk phones into ConnexCS.

* Username: Registered user.
* IP: Current IP.
* Protocol: The protocol from which it's registered.
* NAT: Indicates that far-end NAT traversal has modified the entry.
* TTL: Time since the request came in.
* Send: Click `Message` to send a note (select several entries if required).

**Outbound Registrations**

View active registrations (live calls) from ConnexCS out.

* ADR: The username and address the ConnexCS switch has connected with.
* Expires: Time until expiry date.
* State: Current call status.
* Cx Server: Server responsible for the outbound connection.
* Last Register Sent: When was the Last registration sent.
* Register Timeout: Expected timeout of the call.

!!! note "Global View Only"
    This section doesn't have a corresponding view from within individual Customers.

## SIP User Authentication

View status of all SIP Users, reset the SIP Password (including the option to generate one), and send a message to the SIP User.

*See [**SIP User Authentication**](https://docs.connexcs.com/customer/auth/#sip-user-authentication) for configuration details.*

Alternate location(s):

* Customer :material-menu-right: [Customer Name] :material-menu-right: Auth
* Carrier :material-menu-right: [Carrier Name] :material-menu-right: Auth

## Transcription

A transcription service translates voice communication, whether live or recorded, into text.

* Customer :material-menu-right: [Customer Name] :material-menu-right: Transcription

## Weylon

**Weylon** is a remote testing application that allows end users to run tests for call issues.

The Control Panel receives results for review.

For setup information, see [**Remote Testing**](/guides/remote-testing) under Troubleshooting.

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEzNTMzMTIyMTIsMTczNjQxNTczMV19
-->