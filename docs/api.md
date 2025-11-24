# Application Programming Interface

---
**Document Metadata**  
**Category:** Development & Integration  
**Audience:** Developers, System Integrators  
**Difficulty:** Intermediate  
**Time Required:** 1-2 hours (initial setup)  
**Prerequisites:** [Getting Started](getting-started.md), [Developer knowledge ](https://docs.connexcs.com/ide/) 
<br>**Related Topics:** [IDE](ide.md), [API Integration](setup/integrations/api.md), [JWT Keys](setup/integrations/jwt.md)</br>  
**Next Steps:** [API Integration Setup](setup/integrations/api.md), [Apps Platform](apps/introduction.md)

---

An **API (Application Programming Interface)** allows for more intricate control over your system. It's either through customization or the use of third-party applications.

ConnexCS has two distinct APIs. Each is accessible through a different URL, but both follow the same specifications.

The API is **Restful JSON** accessible over HTTPS. It makes distinctions about `GET`, `POST`, `PUT` and `DELETE` and follows **CRUD** (CREATE, READ, UPDATE, and DELETE).

 Requests take advantage of request variables, while _JSON Documents_ may sometimes post where they require a more complex request.

 A _JSON Document_ will always be returned and HTTPS Layer handles the errors.

## Switch Administration

The switch API provides **full administrative capabilities**.

This means that every function accomplished through our web interface is available through our API.

You can find API Specification here: <https://api-docs.connexcs.com/>

## Customer Administration

The API lets you perform customer-facing operations like communicating with the switch, information about current balances, and managing Call Detail Records (CDRs).  

You can find the specifications for the customer-facing API operations here: <https://portal.test.connexcs.com/api/docs/>

To view supported integrations, go to [**API Integrations**](https://docs.connexcs.com/setup/integrations/api/).
