# API
ConnexCS has two distinct API's that are accessible through different URLs, but each follows the same specifications. The API is **Restful JSON** accessible over HTTPS. It makes distinctions about `GET`, `POST`, `PUT` and `DELETE` and follows **CRUD**. Requests usually take advantage of request variables, while _JSON Documents_ may occasionally be posted where a more complex request is required. A _JSON Document_ will always be returned, and errors are handled on the HTTPS Layer.

## Switch Administration
The switch API provides **full administrative capabilities**.  This means that every function accomplished through our web interface is available through our API.

You can find the API Spec here: <https://docs.connexcs.com/cp-api>

## Customer Administration

The API lets you perform customer-facing operations like communicating with the switch, information about current balances, and managing Call Detail Records (CDRs).  

Specifications for the customer-facing API operations are found here: <https://docs.connexcs.com/customer-api-docs/>
