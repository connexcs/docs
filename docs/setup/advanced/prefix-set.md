# Prefix Sets
Setup :material-menu-right: Advanced :material-menu-right: Prefix Set

A **Prefix Set** is 1 or more numbers which you can add and create into a group to be referenced later.

!!! example
	UK Landline
	```
	441
	442
	```

## Create Prefix Set

1. Click the **`+`**.
1. Enter the set Name.
1. Add desired the prefixes in the Data field. 
1. Click **`Save`**. 

*The new set will now be available in Ingress Routing.

## Apply Prefix Set
Prefix Sets can be applied to the following locations under the Management menu:

* Customer :material-menu-right: Routing :material-menu-right: Basic :material-menu-right: Dial String Prefix Set
* Routing Global :material-menu-right: Basic :material-menu-right: Dial String Prefix Set
* Rate Card :material-menu-right: Customer Rate Cards :material-menu-right: Profits :material-menu-right: Config :material-menu-right: Prefix Set

## Flags
Use Flags to create a *Global CLI Blacklist* or a *Global Dialled Number Blacklist* (Aka Block List). This will prevent all calls going through the system which match the prefix set added

!!! warning
	Flags are used for large amounts of numbers that change infrequently. If you are looking to manage a DNC list, take a look at our [ScriptForge](/developers/scriptforge) Options.
