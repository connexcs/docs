# Table of Content

* [Table of Contents](#table-of-contents)
* [API](#api)
   * [Switch Administration](#switch-administration)
   * [Customer Administration](#customer-administration)
   * [Lookup Services](#lookup-services)

# API
ConnexCS has 3 distinct API's each accessible through a different URL but all follow the same specification.

The API is _Restful JSON_ and accessible over HTTPS. It makes distinction around `GET`, `SET`, `PUT` and `DELETE` and follows CRUD. Requests primarly take advantage of request variables however _JSON Documents_ may occasionally be posted where a more complex request is required. A _JSON Document_ will always be returned. Errors are provides on the HTTPS Layer.

## Switch Administration
The switch API provide **full administrative capabilies**, by this we mean "every function that you can accomplish through our web interface is available through our API".

You can find the API Spec here: <https://docs.connexcs.com>

## Customer Administration
If your customers wish to be able to talk to your switch and get information such as current balance or CDR's this is the API you need.
You can find the API Spec here: <https://portal.connexcs.com/docs>


## Lookup Services
ConnexCS Lookup services are hosted seperate from the switch as this is a seperate product and is built to tollerate high requests/second..

You can find the API Spec here: <https://api2.connexcs.com/docs>
