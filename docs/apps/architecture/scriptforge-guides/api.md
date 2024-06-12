# How to Map a ScriptForge API Endpoint to a Public API Endpoint

## Abstract

### Application Programming Interface (API)

An **API endpoint** is a unique URL that acts as a gateway for communicating with a service via an API.

Each endpoint is associated with a certain function that the API provides, enabling clients to access, create, update, and remove data resources.

Consider an endpoint to be the official route for communication between an API-exposing underlying system and a client application.

### Mapping ScriptForge to Public API Endpoints

Mapping refers to the process of connecting a particular ScriptForge API endpoint to a corresponding public API endpoint.

Thus, we're exposing our **Internal API** to the **External Internet** without any authentication requirements.

This capability allows our customers or external users to connect to our system for example, databases, libraries etc. even if they don't have an account with us.

It's mainly used to receive the `http request`, process the request and respond.

!!! Example
    ConnexCS wants to share payment status to an external person who doesn't have an account with ConnexCS.  
   Thus, we use an API endpoint to automatically update the payment status.

### Use Cases

1. **Integration**: Mapping endpoints helps in integrating various systems or services.
2. **Automation**: By utilising API's endpoints, scripts and programmes can communicate with them to automate various tasks in the system.
3. **Data Exchange**: Public APIs frequently offer useful information or features. You can leverage external services without having to start from scratch by mapping ScriptForge endpoints to public ones.

### Methods to access the Script at ConnexCS

1. **ScriptForge (script), :material-menu-right: Page Builder (User Interface) :material-menu-right: Button Builder (Internal access)**
2. **ScriptForge (script), :material-menu-right: Page Builder (User Interface) :material-menu-right: Domain (External access)**
3. **`${host}api/script/${scriptUuid}/${functionName}`** (External Access)

## Libraries

## Script Example

```js
// External Computer
function main (data) {
	const item = {
		"item": "potato",
		"price": "12",
		"currency": "USD"
	}
	return totalPayments(data)
}

function totalPayments (payment) {
	// Check Database for total reported and stored payment from Binance
	return 50
}

// Our Computer Logic (Script-Forge)
function checkItem (item) {
	if (item.price > 10) {
		return "item approved"
	} else {
		return "price too low"
	}
	// const discount = 5
	// return Number(data.price - discount)
}
```

```js
// Get total from scriptforge funcion totalPayments
const total = await this.scriptForge('script_forge_total_payment')

// Set total to text field with ID total_count
this.setData({
  total_count: total
})
```

* Access through **Button Builder**

<img src= "/apps/img/api1.png" width="400">

<img src= "/apps/img/api3.png">

In this case the ScriptForge is accessible on the Customer Portal.

* Access through **Domain**

[Create a Domain](https://docs.connexcs.com/apps/architecture/domain/#steps-for-setting-up-the-domain), for example `https://totalpayment.cnx.page/`

<img src= "/apps/img/api6.png">

* Access through **Script UUID**
https://portal.test.connexcs.com/api/uuid/checkItem

<img src= "/apps/img/api4.png" width= "1000">

https://portal.test.connexcs.com/api/uuid/main

<img src= "/apps/img/api5.png" width= "1000">
