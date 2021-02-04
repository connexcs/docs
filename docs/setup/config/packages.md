# Packages
**Setup :material-menu-right: Config :material-menu-right: Packages**

A **Package** represents a product or service offered to customers, often as a recurring charge based on goods delivered at a required interval. ConnexCS **Packages** are global entities which are allocated to each customer as required. Each package may include incentives for MRC like DIDs, phone system rentals, or other hardware. 

## Add Package

1. Click the **`+`** button.

    ![alt text][addpackage]

+ **Name**: The name of the package.
+ **Cost**: The recurring price which you (the provider) pay for this package (based on Frequency set below).
+ **Retail**: The recurring price that you charge to your customer (based on Frequency set below).
+ **Setup Cost**: One-time cost of this item to you (the provider) when the package is used.
+ **Setup Retail**: One-time price you (the provider) charge to your customer when the package is setup.
+ **Frequency** and **Frequency Match**: When his package charge repeats. Most providers bill monthly. If you select Weekly or Monthly, you can select multiple days for each (ex: to bill bi-monthly, set the Frequency to Monthly then the Match to 15 and 31 to bill on those days of the month).
+ **Description**: Describe the product provided in this package.
+ **ConnexCS Package**: If there is a service that you have from ConnexCS which you then re-brand and sell to your customer, you must select it here to enable that feature on the customer account.
+ **Minimum Spend**: This calculates the customer spend for the billing period. If spend is below the Retail amount configured above, the spend is subtracted from Retail, and that charge is added to their account. (Ex: Retail is set to 50, but customer only spends 25, an additional 25 will be charged for that billing cycle.)

## Assign Package
Once created, packages are assigned either to the [**Customer**](https://docs.connexcs.com/customer/package/) or directly to a [**DID**](https://docs.connexcs.com/customer/did/#billing).  

[addpackage]: /setup/img/addpackage.png "Add Package"
