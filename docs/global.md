# Global

The **Global** section of the ConnexCS Control Panel provides a company-wide overview of the same data found under Customer. This data can also be configured and managed from the Global view. 

___
**Alerts**: View all the Alerts across the entire account. 

*See [Alerts](https://docs.connexcs.com/customer/alerts) for configuration details.*

Alternate location(s):

* Customer :material-menu-right: [Customer Name] :material-menu-right: Alerts
* Carrier :material-menu-right: [Carrier Name] :material-menu-right: Alerts
___
**Contacts**: View all Customer Contacts. 

*See [Contacts](https://docs.connexcs.com/customer/contacts) for configuration details.* 

Alternate location(s):

* Customer :material-menu-right: [Customer Name] :material-menu-right: Main
* Carrier :material-menu-right: [Carrier Name] :material-menu-right: Main
___
**CDR**: View CDRs for all Customers. The Global CDR view also allows you to select specific CDRs for Recalculation. 

*See [CDR](https://docs.connexcs.com/customer/cdr) for configuration details.*

Alternate location(s):

* Customer :material-menu-right: [Customer Name] :material-menu-right: CDR
* Carrier :material-menu-right: [Carrier Name] :material-menu-right: CDR
___
**Dialogs**: View all active calls across the entire account. 

*See [Dialogs](https://docs.connexcs.com/customer/dialogs) for configuration details. *

Alternate location(s):

* Customer :material-menu-right: [Customer Name] :material-menu-right: Dialogs
___
**DID**: View list of all DIDs. 

*See [DID](https://docs.connexcs.com/customer/did) for configuration details. *

Alternate location(s):

* Customer :material-menu-right: [Customer Name] :material-menu-right: DID
* Carrier :material-menu-right: [Carrier Name] :material-menu-right: DID

Unlike the Customer DID section, the Global DID sections groups numbers as follows:

* **Assigned**: Numbers currently assigned to accounts.
* **Inventory**: Unallocated numbers.
* **Provision**: Uses ConnexCS [ScriptForge](https://docs.connexcs.com/developers/scriptforge/) Drivers to assign numbers.
* **Providers List**: Lists all DIDs and associated providers.
___
**IP Authentication**: View all configured IP Authentication. 

*See [IP Authentication](https://docs.connexcs.com/customer/auth/#ip-authentication) for configuration details. *

Alternate location(s):

* Customer :material-menu-right: [Customer Name] :material-menu-right: Auth 
* Carrier :material-menu-right: [Carrier Name] :material-menu-right: Auth 
___
**Invoices**: View all Invoices and allocate payments. 

*See [Invoices](https://docs.connexcs.com/customer/invoices)** for configuration details. *

Alternate location(s):

* Customer :material-menu-right: [Customer Name] :material-menu-right: Invoices
___
**Payment**: All Payments across the account. 

*See [Payment](https://docs.connexcs.com/customer/payment) for configuration details. *

Alternate location(s):

* Customer :material-menu-right: [Customer Name] :material-menu-right: Payment
___
**SIP Registration**: View currently registered SIP users. 

*There is no configuration or additional documentation for SIP Registration. *

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
___
**SIP User Authentication**: View status of all SIP Users. 

*See [SIP User Authentication](https://docs.connexcs.com/customer/auth/#ip-authentication) for configuration details.  *

Alternate location(s):

* Customer :material-menu-right: [Customer Name] :material-menu-right: Auth
* Carrier :material-menu-right: [Carrier Name] :material-menu-right: Auth
