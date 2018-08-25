# Table of Contents

- [Table of Contents](#table-of-contents)
- [API](#api)
    - [Switch Administration](#switch-administration)
    - [Customer Administration](#customer-administration)

# API
ConnexCS has two distinct API's that are accessible through different URLs, but each follows the same specifications. The API is _Restful JSON_ and accessible over HTTPS. It makes distinctions about `GET`, `SET`, `PUT` and `DELETE` and follows CRUD. Requests usually take advantage of request variables, while _JSON Documents_ may occasionally be posted where a more complex request is required. A _JSON Document_ will always be returned. Errors are handled on the HTTPS Layer.

## Switch Administration
The switch API provides **full administrative capabilities**.  This means that every function accomplished through our web interface is available through our API.

You can find the API Spec here: <https://app.connexcs.com/docs>

## Customer Administration
The API lets you perform customer-facing operations like communicating with the switch, information about current balances, and managing Call Detail Records (CDRs).  Specifications for the API are found here: <https://docs.connecxs.com/customer-api>