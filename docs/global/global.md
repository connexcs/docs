# Global

The **Global** section of the ConnexCS Control Panel provides a company-wide overview of the same data found under Customer. This data can also be configured and managed from the Global view. 

## Alert
View all the Alerts across the entire account. See **[Alerts](https://docs.connexcs.com/customer/alerts)** for configuration details. 

Also found under Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: Alerts

## Contacts
View all Customer Contacts.

Also found under Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: Main

## CDR
View CDRs for all Customers. The Global CDR view also allows you to select specific CDRs for Recalculation.

Also found under Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: CDR

## Dialogs
View all active calls across the entire account. 
Also found under Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: Dialogs

## DID
View list of all DIDs.
Also found under Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: DID

Unlike the Customer DID section, the Global DID sections groups numbers as follows:

* **Assigned**: Numbers currently assigned to accounts.
* **Inventory**: Unallocated numbers.
* **Provision**: Uses ConnexCS [ScriptForge](https://docs.connexcs.com/developers/scriptforge/) Drivers to assign numbers.
* **Providers List**: Lists all DIDs and associated providers.

## IP Authentication
View all configured IP Authentication.
Also found under Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: Auth 

## Invoices
View all Invoices and allocate payments. Also found under Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: Invoices

## Payment
All Payments across the account. Also found under Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: Payment

## SIP Registration
View currently registered SIP users. 

**Inbound Registrations**

* Username: registered user
* IP: current IP
* Protocol: protocol it is registered from
* NAT: indicates that far-end NAT traversal has modified the entry
* TTL: time since request came in
* Send: click `Message` to send a note (select multiple entries if desired)

**Outbound Registrations**

* ADR: the username and address the ConnexCS switch has conected with
* Expires: time until expiry
* State: Current call status
* Cx Server: Server responsible for outbound connection
* Last Register Sent: when the last regitration was sent
* Register Timeout: when the call is expected to timeout


!!! note "Global View Only"
    This section does not have a corresponding view from within individual Customers. 

## SIP User Authentication
View status of all SIP Users.

Also found under Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: Alerts
