# Prefix Sets
**Setup :material-menu-right: Advanced :material-menu-right: Prefix Set**

A **Prefix Set** allows you to group one or more prefixes to be referenced later.

!!! example "UK Landline prefixes"
    Enter the following prefixes to match UK landlines:
	```
	441
	442
	```

## Create Prefix Set

1. Click the **`+`**.
1. Enter the set Name.
1. Add desired the prefixes in the Data field. 
1. Click **`Save`**. 

## Apply Prefix Set
Prefix Sets can be applied to the following locations under the Management menu:

Customer :material-menu-right: Routing :material-menu-right: Ingress Routing :material-menu-right: Basic :material-menu-right: [Dial String Prefix Set](https://docs.connexcs.com/customer/routing/#basic)

Routing :material-menu-right: Routing Global :material-menu-right: Basic :material-menu-right: [Dial String Prefix Set](https://docs.connexcs.com/global-routing/)

Rate Card :material-menu-right: Customer Rate Cards :material-menu-right: Profits :material-menu-right: + :material-menu-right: Config :material-menu-right: [Prefix Set](https://docs.connexcs.com/customer-ratecard/#main-tab)

## Flags
Use Flags to create a *Global CLI Blacklist* or a *Global Dialled Number Blacklist* (Aka Block List). This will prevent all calls going through the system which match the defined prefix set. 

!!! warning "Blacklist or Do Not Call list"
    Flags are used for large amounts of numbers that change infrequently. If you are looking to manage a DNC list, take a look at our [**Do Not Call (DNC)**](https://docs.connexcs.com/dnc/) setup.
