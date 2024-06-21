# Packages

**Setup :material-menu-right: Config :material-menu-right: Packages**

A **Package** represents a product or service offered to customers, often as a recurring charge based on goods delivered at a required interval.

ConnexCS **Packages** are global entities allocated to each customer according to their needs.

Each package may include incentives for Monthly Recurring Charges (MRC) like Direct Inward Dialing (DID), phone system rentals, or other hardware.

## Add Package

Click the :material-plus: button.

<img src= "/setup/img/free.png">

+ **Name:** The name of the package.
+ **Cost:** The recurring price which you (the provider) pay for this package (based on Frequency set below).
+ **Retail:** The recurring price that you charge to your customer (based on Frequency set below).
+ **Setup Cost:**: One-time cost of this item that you (the provider) pay when you use the package.
+ **Setup Retail**: One-time price you (the provider) charge to your customer when you setup the package.
+ **Frequency** and **Frequency Match**: Use this when the package charge repeats.

    Most providers bill on monthly basis.

    If you select the Frequency Weekly or Monthly, Frequency Match option will populate which allows you to select several days for each bill.

    For example, to bill bi-monthly, set the **Frequency** to "Monthly," and then **Frequency Match** to 15 and 31 to bill on those days of the month.

+ **ConnexCS Package**:  If you have a ConnexCS service that you revamp and sell to your customers, you must select it here to enable that feature on the customer account.

+ **Description**: Describe the product provided in this package.

+ **Minimum Days**: When you choose a package with the minimum days, it means you won't be able to delete the package for the duration you have entered in the field.

+ **Type**: Our system offers a **Free Minutes** option (select from the drop-down menu). This allows you to allocate complimentary calling minutes to your customers. For more details, please [click here](https://bani-minutes--connexcs-docs.netlify.app/customer/package/#assign-free-minutes-package).

+ **Destination**: Selecting the **Type** will unlock the **Destination** tab. This tab allows you to specify the regions where the Free Minutes bundle will be applicable, such as the UK, India, or the USA  (^44|^91|^1).
  
+ **Minimum Spend**: This calculates the customer spend for the billing period.

    If spend is below the Retail amount configured above, the spend get subtracted from Retail, and that charge adds to their account.

    For example, Retail value is to 50, but customer only spends 25, an extra charge of 25 applies for that billing cycle.

Click **`Save`** to make the Package available to assign to customer accounts.

!!! Warning
    Ensure you select **Type** as **Free Minutes** while creating a package to allocate a free minutes bundle to your customers.
    If you don't select this option, the **Minutes** tab (Customer :material-menu-right: Packages) won't be visible, and you will be unable to allocate free minutes to your customers.

## Assign Package

Once created, you can assign packages either to the [**Customer**](https://docs.connexcs.com/customer/package/) or directly to a [**DID**](https://docs.connexcs.com/customer/did/#billing).  

[addpackage]: /setup/img/addpackage.png "Add Package"
