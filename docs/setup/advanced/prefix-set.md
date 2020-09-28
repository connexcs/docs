# Prefix Sets
Setup :material-menu-right: Advanced :material-menu-right: Prefix Set

A prefix set is a 1 or more numbers  which you can add and create into a group to be references later on.

!!! example
	UK Landline
	```
	441
	442
	```

A prefix set may be used in Management :material-menu-right: Customer :material-menu-right: Routing :material-menu-right: Basic :material-menu-right: Dial String Prefix Set
or in Management :material-menu-right: Global Routing :material-menu-right: Basic :material-menu-right: Dial String Prefix Set. You can also
use this when bulding rate cards 
Rate Card :material-menu-right: Customer Rate Card :material-menu-right: Profits :material-plus: Config :material-plus: Prefix Set

## Adding a new Prefix Set

1. Click the **`+`**.
1. Enter the set Name.
1. Add desired the prefixes in the Data field. 
1. Click **`Save`**. 

The new set will now be available in Ingress Routing.

## Flags

You can also use Flags to create a *Global CLI Blacklist* or a *Global Dialled Number Blacklist*.
This will prevent all calls going through the system which match the prefix set added

!!! warning
	This is meant for 100's of numbers which change inoften. If you are looking to manage a DNC list, take a look at our [ScriptForge](/developers/scriptforge) Options.