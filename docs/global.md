# Global

---

**Document Metadata**
<br>**Category**: Platform Administration / Global Configuration</br>
<br>**Audience**: Administrators, Engineers, Operations Team</br>
<br>**Difficulty**: Intermediate to Advanced</br>
**Time Required**: Approximately 1–1.5 hours
<br>**Prerequisites**: Active ConnexCS account with admin access; familiarity with system-wide configuration, global settings, and multi-domain management.</br>
**Related Topics**: [Getting Started](https://docs.connexcs.com/getting-started/), [Servers & Infrastructure](https://docs.connexcs.com/setup/settings/servers/)
<br>**Next Steps**: Review and modify global settings (language, time-zone, domains), manage global aliases and global transcription settings, implement naming and template conventions, then audit global logs and permissions.</br>

---

## Overview

The **Global Section** in the ConnexCS Control Panel provides an account-wide overview of many of the same sections found under **Management :material-menu-right: Customer** or **Management :material-menu-right: Carrier**.

The Global section enhances efficiency and oversight across all customer accounts.

### What the Global Section Offers?

+ **Increased Efficiency**: Access and manage multiple customer settings in one place.

+ **Better Visibility**: Provides a complete overview of routing, authentication, and logging.

+ **Simplified DID Management**: Locate and manage DIDs without navigating through multiple customer profiles.

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

## Caller Line Identification (CLI)

View CLIs for all the customers.

*See [**CLI**](https://docs.connexcs.com/customer/cli/#cli-routing-rules) for more details.*

Alternate location(s):

* Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: Routing :material-menu-right: CLI.

**Creating a Record**

Click :material-plus: under **CLI**.

_Field details:_

+ **Company**: Select the company from the drop-down.

+ **CLI**: To allow the required CLIs, enter the required number or a regular expression (to match and replace).

+ **Rewrite CLI**: A CLI can be rewritten. For example, you can add `123456789` in the CLI box and then rewrite by adding `987654321` in the rewrite CLI box. (For more advanced CLI manipulation, see [**Advanced CLI Match & Manipulation**](https://docs.connexcs.com/customer/cli/#advanced-cli-match-and-manipulation) below.)

+ The **P-Asserted-ID** manipulation uses the same syntax as the Replace CLI.

    !!! tip "P-Asserted-ID Use Case"
        If you wanted to allow all calls but assign a specific number (such as the Main Billable number for the business), you would set CLI as ".*" and then enter the desired P-Asserted ID.
        All calls will then have this number as the P-Asserted-ID.

+ **Rewrite P-Asserted-ID**: This is a SIP Header almost same as the FROM header but classified as a private, or network-level identifier.
Telephone companies use it to identify call originators. As it's stripped at the call server, the client end-points only see the FROM field.
This is helpful when callers obscure their CLI / FROM information, as the network level still requires origination details.

+ **Forced**: Enabling this will allow a call if there are no other matching CLIs in the system. This will also replace the CLI that's presented with the CLI entered here.

    !!! Example
        Create a permitted list of CLIs, then select **Forced** on the CLI to use if none of the others in the permitted list match. (Best practice is to have one unique **Forced** CLI.)

+ **Direction Applied**:
    + **Outbound Calls (Termination)**: Customer dials a number; CLI rules control which caller IDs are allowed to pass.
    + **Inbound Calls (Origination)**: Calls coming into the system (DID/DDI) can be filtered based on CLI rules.

    !!! Example
        1. Create a permitted list that exclusively allows calls to or from the same country.
        2. Only allow incoming calls with a CLI starting with 44 (UK numbers).

+ **Allow Type**: You can select from various options like Mobile, Paging, VoIP, Satellite etc to allow the CLIs.

+ **Use DID**: Pull in DIDs from the customer's account to use either as a Filter or as a Replacement.  

    !!! Example
        If Dialled matched number is starting with **1**, the CLI routes to 11111.
     The CLI can be a Regular Expression also.

    !!! Note "If you choose Disabled/Filer"
        1. **Hit Limit**: Usage Limit of this CLI.
        2. **Hit Interval**: Duration for which the hit limit remains active.

    !!! Note "If you choose Performance"
        1. **Performance Top Batch Size** choose how many of the top CLIs we use together.
        2. **Performance Interval**: Choose from the dropdown how long this batch stays active(in seconds). You can choose from the minimum value of 5 minutes and maximum value of 1 day with intervals of 300 seconds.
        3. **Performance Ban Time**: How long a used DID is paused for. You can choose the value from the dropdown with minimum value being 5 minutes and maximum value being 90 days. The value is stored in **seconds**.

+ **Database** (To add CLI and PAID from a database):

    1. Upload a list of numbers you choose as CLI or PAID under **Developer > Database**.
    2. Go to **Global > CLI** add the same database under database field . Under rewrite PAID field add this database.

    !!! note
        Make sure you select  the **Forced** option as **Yes**.

+ **Dialed Number Match**: To route to a specific CLI, you dialled match number.

    !!! Note "CLI per Route"
        If a `Tech Prefix` is specified in Routing (Ingress Routing :material-menu-right: Basic :material-menu-right: Tech Prefix) and the same `Tech Prefix` is added to the `Dialed Number Match` (using ^), the corresponding CLI rule will be applied to that specific route.

+ **Notes**: Notes give you information about the CLI.

+ **STIR / SHAKEN Certificate:** If you apply any STIR / SHAKEN Certificate to a customer's account for calls verification, for example, whether the calls are spam.

    + **STIR / SHAKEN Attestation:** This is the level of a certification you can select from 3 levels `A`, `B`, or `C`.

+ **Flags**:
    + *Performance CLI Selection*: When you select **Forced** as **Yes** and select a **Database**, you get an option to select a flag which is Performance CLI Selection. The Performance CLI Selection chooses the CLI with the best ASR
    + *Stir Shaken Required*: Choose this option when no certificate is selected.
    + *Stir Shaken Replace*: Choose this option when you wish to apply your Stir-shaken certificate instead of which is  already applied (for a call).

+ Click **`Save`** to complete the CLI configuration.

<img src="/misc/img/globalcli.png" style="border: 2px solid #4472C4; border-radius: 8px;">

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