# API
An **API (Application Programming Interface)** allows for more intricate control over your system, either by customization or the use of third-party applications. ConnexCS has two distinct API's. Each is accessible through a different URL, but both follow the same specifications. The API is **Restful JSON** accessible over HTTPS. It makes distinctions about `GET`, `POST`, `PUT` and `DELETE` and follows **CRUD** (CREATE, READ, UPDATE, and DELETE). Requests usually take advantage of request variables, while _JSON Documents_ may occasionally be posted where a more complex request is required. A _JSON Document_ will always be returned, and errors are handled on the HTTPS Layer.

## Switch Administration
The switch API provides **full administrative capabilities**. This means that every function accomplished through our web interface is available through our API. 

You can find the API specification here: **<https://docs.connexcs.com/cp-api>**

## Customer Administration
The API lets you perform customer-facing operations like communicating with the switch, information about current balances, and managing Call Detail Records (CDRs).  

You can find the specifications for the customer-facing API operations here: **<https://portal-api-docs.connexcs.com/>**

To view supported integrations, go to [**API Integrations**](https://docs.connexcs.com/setup/integrations/api-integrations/). 
