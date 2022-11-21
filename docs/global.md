# Global

**Global**

The **Global** section of the ConnexCS Control Panel provides an account-wide overview of many of the same sections found in **Management :material-menu-right: Customer** or **Carrier**. This can be helpful for troubleshooting issues across customers or for situations where you are trying to locate the customer of a specific a Direct Inward Dial (DID). You can also configure and manage some sections from the Global view. 


## Alerts
View all the Alerts across the entire account. When creating an Alert from Global, you will need to select the Company that will use the Alert. wongs

*See [**Alerts**](https://docs.connexcs.com/customer/alerts) for configuration details and examples of Alerts that can be built.*

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

## CDR
View CDRs for all Customers. The Global CDR view also allows you to select specific CDRs for Recalculation. 

*See [**CDR**](https://docs.connexcs.com/customer/cdr) for configuration details.*

Alternate location(s):

* Customer :material-menu-right: [Customer Name] :material-menu-right: CDR
* Carrier :material-menu-right: [Carrier Name] :material-menu-right: CDR

## Dialog
View all active calls across the entire account. 

*See [**Dialogs**](https://docs.connexcs.com/customer/dialogs) for configuration details.*

Alternate location(s):

* Customer :material-menu-right: [Customer Name] :material-menu-right: Dialogs

## Routing
View overview of configured routes grouped by Customer, Customer Card, Provider Card, and all active Channels and current CPS calls per account. 

*See [**Routing Overview**](/routing) and [**Rate Card Overview**](/rate-card-building) for details.*

Alternate location(s):

* Customer :material-menu-right: [Customer Name] :material-menu-right: Routing :material-menu-right: Ingress Routing

## DID
View list of all DIDs, and configuration and editing. 

*See [**DID**](https://docs.connexcs.com/customer/did) for configuration details, including Bulk Upload.*

Alternate location(s):

* Customer :material-menu-right: [Customer Name] :material-menu-right: DID
* Carrier :material-menu-right: [Carrier Name] :material-menu-right: DID

Unlike the Customer DID section, the Global DID sections groups numbers as follows:

* **Assigned**: Numbers currently assigned to accounts.
* **Inventory**: Unassigned numbers.
* **Provision**: Uses ConnexCS [**ScriptForge**](https://docs.connexcs.com/developers/scriptforge/) Drivers interface with DID provider APIs so you can allocate new numbers.
* **Providers List**: Lists all DIDs and associated providers.

## IP Authentication
View all configured IP Authentication. 

*See [**IP Authentication**](https://docs.connexcs.com/customer/auth/#ip-authentication) for configuration details.*

Alternate location(s):

* Customer :material-menu-right: [Customer Name] :material-menu-right: Auth 
* Carrier :material-menu-right: [Carrier Name] :material-menu-right: Auth 

## Invoices
View all Invoices, access basic invoice functions (such as date range, unit price, tax), and allocate payments.

*See [**Invoices**](https://docs.connexcs.com/customer/invoices) for configuration details.*

Alternate location(s):

* Customer :material-menu-right: [Customer Name] :material-menu-right: Invoices

## Payment
All Payments across the account. 

*See [**Payment**](https://docs.connexcs.com/customer/payment) for configuration details.*

Alternate location(s):

* Customer :material-menu-right: [Customer Name] :material-menu-right: Payment

## SIP Registration
View currently registered SIP users. 

*There is no configuration or additional documentation for SIP Registration.*

**Inbound Registrations**
View active registrations (live calls) of desk phones in to ConnexCS. 

* Username: registered user
* IP: current IP
* Protocol: protocol it's registered from
* NAT: indicates that far-end NAT traversal has modified the entry
* TTL: time since request came in
* Send: click `Message` to send a note (select multiple entries if required)

**Outbound Registrations**
View active registrations (live calls)  from ConnexCS out.

* ADR: the username and address the ConnexCS switch has connected with
* Expires: time until expiry
* State: Current call status
* Cx Server: Server responsible for outbound connection
* Last Register Sent: when the last registration was sent
* Register Timeout: when the call is expected to timeout


!!! note "Global View Only"
    This section doesn't have a corresponding view from within individual Customers. 

## SIP User Authentication
View status of all SIP Users, reset the SIP Password (including the option to generate one), and send a message to the SIP User. 

*See [**SIP User Authentication**](https://docs.connexcs.com/customer/auth/#sip-user-authentication) for configuration details.*

Alternate location(s):

* Customer :material-menu-right: [Customer Name] :material-menu-right: Auth
* Carrier :material-menu-right: [Carrier Name] :material-menu-right: Auth


## Weylon
**Weylon** is a remote testing application which allows end users to run tests for call issues. Results are reported back to the Control Panel for review. For setup information, see [**Remote Testing**](/guides/remote-testing) under Troubleshooting. 

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEzNTMzMTIyMTIsMTczNjQxNTczMV19
-->