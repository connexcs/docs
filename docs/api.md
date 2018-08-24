# Table of Contents

* [Table of Contents](#table-of-contents)
* [API](#api)
   * [Switch Administration](#switch-administration)
   * [Customer Administration](#customer-administration)
   * [Lookup Services](#lookup-services)

# API
ConnexCS has 2 distinct API's each accessible through a different URL, but all follow the same specification.

The API is _Restful JSON_ and accessible over HTTPS. It makes distinction around `GET`, `SET`, `PUT` and `DELETE` and follows CRUD. Requests primarly take advantage of request variables however _JSON Documents_ may occasionally be posted where a more complex request is required. A _JSON Document_ will always be returned. Errors are provided on the HTTPS Layer.

## Switch Administration
The switch API provides **full administrative capabilities**, by this we mean "every function that you can accomplish through our web interface is available through our API".

You can find the API Spec here: <https://docs.connexcs.com/api>

## Customer Administration
If your customers wish to be able to talk to your switch and get information such as current balance or CDRs this is the API you need.
You can find the API Spec here: <https://docs.connexcs.com/customer-api/>




