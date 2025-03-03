# Global

## Overview

The **Global Section** in the ConnexCS Control Panel provides an account-wide overview of many of the same sections found under **Management :material-menu-right: Customer** or **Management :material-menu-right: Carrier**.

It provides a centralized view of all customer-related data. Instead of accessing individual customer records, this section allows users to see and manage all data across accounts in one place.

It serves as a comprehensive control center for ConnexCS users.

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

Views all contacts across customer accounts.

Provides easy access for quick lookup and management.

When creating a Contact from Global, you will need to select the Company where the Contact exists.

*See [**Contacts**](https://docs.connexcs.com/customer/main/#contacts) for configuration details.*

Alternate location(s):

* Customer :material-menu-right: [Customer Name] :material-menu-right: Main
* Carrier :material-menu-right: [Carrier Name] :material-menu-right: Main

## Call Detail Record

+ Displays all call records in the system.

+ Includes options to Recalculate CDRs:

  + Select and recalculate CDRs using checkboxes.
  + Alternative method: Specify date and time range for recalculations.

Note: Queries may take longer if a customer has a large number of calls.
*See [**CDR**](https://docs.connexcs.com/customer/cdr) for configuration details.*

Alternate location(s):

* Customer :material-menu-right: [Customer Name] :material-menu-right: CDR
* Carrier :material-menu-right: [Carrier Name] :material-menu-right: CDR

## Dialog

+ View all active calls and past calls across the entire account.
+ Clicking on a call redirects users to the Logging section.

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

View a list of all DIDs (Direct Inward Dialing) and their statuses. You can also configure and edit them.

+ **DID Sections**

  + **Assigned Numbers**: Displays all numbers assigned to customer accounts.
  + **Inventory**: Lists unassigned numbers available for allocation.
  + **Provisioning**: Allows provisioning of new numbers from external providers using Drivers.
  + **Bulk Operations**:
    + Bulk upload of numbers.
    + Bulk editing capabilities.
  + **Statistics**: Provides number-based reports when multiple DIDs are selected.
  + **Provider Comparison Report**: Compares provider-assigned DIDs with ConnexCS system records to detect discrepancies.

+ **DID Drivers and Provisioning**:
  + ConnexCS uses a driver system to integrate with external DID providers.
  + Drivers act as a middleware layer between external DID systems and ConnexCS, enabling:
      + Number lookup and purchase automation.
      + Real-time number provisioning.
      + Seamless integration with multiple DID providers (e.g., DIDX, DIDWW, VoxBone, etc.).

  + **Call Flow Management**:
    + Numbers are routed through multiple layers: **`Provider → ConnexCS → Customer`**.
    + The system supports automatic destination updates for external providers.
    + Bulk destination updates are available.

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

+ View all configured IP Authentication across the system.
+ Search function enables lookup of an IP address at the customer level.
+ Identifies whether an IP belongs to both a carrier and a customer.

*See [**IP Authentication**](https://docs.connexcs.com/customer/auth/#ip-authentication) for configuration details.*

Alternate location(s):

* Customer :material-menu-right: [Customer Name] :material-menu-right: Auth
* Carrier :material-menu-right: [Carrier Name] :material-menu-right: Auth

## Invoices

View all Invoices, access basic invoice functions (such as date range, unit price, tax), and assign payments.

**Features include**:

+ Invoice generation and download in PDF format.
+ Payment allocation to invoices.

*See [**Invoices**](https://docs.connexcs.com/customer/invoices) for configuration details.*

Alternate location(s):

* Customer :material-menu-right: [Customer Name] :material-menu-right: Invoices

## Payment

+ Displays all payments made across customer accounts.

+ Allows tracking of test and live transactions.

*See [**Payment**](https://docs.connexcs.com/customer/payment) for configuration details.*

Alternate location(s):

* Customer :material-menu-right: [Customer Name] :material-menu-right: Payment

## SIP Registration

View the current list of registered SIP users.

*SIP Registration has no supplementary documentation or configuration options.*

**Inbound SIP Registrations**

View active registrations (live calls) of desk phones into ConnexCS.

* **Username:** Registered user.
* **IP**: Current IP.
* **Protocol**: The protocol from which it's registered (UDP, TCP, TLS).
* **NAT** status: Indicates that far-end NAT traversal has modified the entry.
* **TTL**: Time since the request came in.
* **Send**: Click `Message` to send a note (select several entries if required).
* **SIP endpoints** registered within ConnexCS.
* **Registration expiry time**.
* Contact headers and received IP addresses.
* **Future enhancement suggestion**: Display absolute expiry time when hovering over registration entries.

**Outbound Registrations**

View active registrations (live calls) from ConnexCS external SIP endpoints.

* **ADR**: The username and address the ConnexCS switch has connected with.
* **Expires**: Time until expiry date.
* **State**: Current call status.
* **Cx Server**: Server responsible for the outbound connection.
* **Last Register Sent**: When was the Last registration sent.
* **Register Timeout**: Expected timeout of the call.

!!! Info "These records are temporary and disappear when unregistered."

!!! note "Global View Only"
    This section doesn't have a corresponding view from within individual Customers.

## SIP User Authentication

View status of all SIP Users, reset the SIP Password (including the option to generate one), and send a message to the SIP User.

It Mirrors the User Authentication section from the Management module.

Also displays authentication details for SIP users.

*See [**SIP User Authentication**](https://docs.connexcs.com/customer/auth/#sip-user-authentication) for configuration details.*

Alternate location(s):

* Customer :material-menu-right: [Customer Name] :material-menu-right: Auth
* Carrier :material-menu-right: [Carrier Name] :material-menu-right: Auth

## Transcription

A transcription service translates voice communication, whether live or recorded, into text.

*See [**Transcription**](https://docs.connexcs.com/transcription/) for configuration details.*

* Customer :material-menu-right: [Customer Name] :material-menu-right: Transcription

## Weylon

**Weylon** is a remote testing application that allows end users to run tests for call issues.

The Control Panel receives results for review.

For setup information, see [**Remote Testing**](/guides/remote-testing) under Troubleshooting.
