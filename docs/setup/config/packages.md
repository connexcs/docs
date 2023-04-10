# Packages

**Setup :material-menu-right: Config :material-menu-right: Packages**

A **Package** represents a product or service offered to customers, often as a recurring charge based on goods delivered at a required interval.

ConnexCS **Packages** are global entities allocated to each customer according to their needs.

Each package may include incentives for Monthly Recurring Charges (MRC) like Direct Inward Dialing (DID), phone system rentals, or other hardware.

## Add Package

Click the :material-plus: button.

&emsp;![pack1][/setup/img/pack1.jpg]

+ **Name:** The name of the package.
+ **Cost:** The recurring price which you (the provider) pay for this package (based on Frequency set below).
+ **Retail:** The recurring price that you charge to your customer (based on Frequency set below).
+ **Setup Cost:**: One-time cost of this item that you (the provider) pay when you use the package.
+ **Setup Retail**: One-time price you (the provider) charge to your customer when you setup the package.
+ **Frequency** and **Frequency Match**: Use this when the package charge repeats.

    Most providers bill on monthly basis.

    If you select Weekly or Monthly, you can select several days for each bill.

    For example, to bill bi-monthly, set the **Frequency** to "Monthly," and then **Frequency Match** to 15 and 31 to bill on those days of the month.

+ **Description**: Describe the product provided in this package.
  
+ **ConnexCS Package**:  If you have a ConnexCS service that you revamp and sell to your customers, you must select it here to enable that feature on the customer account.
  
+ **Minimum Spend**: This calculates the customer spend for the billing period.

    If spend is below the Retail amount configured above, the spend get subtracted from Retail, and that charge adds to their account.

    For example, Retail value is to 50, but customer only spends 25, an extra charge of 25 applies for that billing cycle.

+ **Minimum Days**: When you choose a package with the minimum days, it means you won't be able to delete the package for the duration you have entered in the field.

Click **`Save`** to make the Package available to assign to customer accounts.

## Assign Package

Once created, you can assign packages either to the [**Customer**](https://docs.connexcs.com/customer/package/) or directly to a [**DID**](https://docs.connexcs.com/customer/did/#billing).  

[addpackage]: /setup/img/addpackage.png "Add Package"
