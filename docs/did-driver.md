# DID

A DID Driver will allow you to connect an external DID provider to the ConnexCS system. The DID driver can be written in ScriptForge (Javascript) and is agnostic through a standard interface.

## DID Driver

The following is an empty did driver:

```
module.export = {
	search: async function (vars) { // vars: {number: '1234'}
		return []; // [{did: '123456789'}]
	},
	allocate: async function (vars) { // vars: {did: '123456789'}
		return {}; // The return object will be passed into the DID (POST) request for adding a new DID.
	},
	release: async function (vars) { // vars: {did: '123456789'}
		// Unless an error is thrown the DID will be deleted from the ConnexCS database after execution
		return true;
	},
	list: async function () {
		return [] // [{did: 123456789}]
	}
}

```
