# Packages

**Management :material-menu-right: Customer :material-menu-right: [Customer Name] :material-menu-right: Packages**

Use **Packages** to offer predefined products and services to each customer.

Packages allow customers to define  recurring charges, including spend limits and automatic credit deductions.

## Key Features

+ **Customer-Specific Packages**:
    + Packages can be applied at the DID level or directly to the customer.
    + Configurable parameters such as quantity, start and end dates.

+ **Customization**:
    + Specify quantity, which multiplies cost accordingly.
    + Define start and end dates for package validity.

+ **Auto Decrement Credit**:
    + Automatically deducts a specified amount from the customer's credit at a set frequency (e.g., daily deductions).

## Assign Packages

1. Click :material-plus:

   + Select the **Package** you want to assign to the customer. Package Details will appear below.
   + Enter the required **Quantity** and **Start Date**.
   + Select **End Date**, if required.
   + Selecting **Auto Decrement Credit** will debit the package amount from the customer's account. It's based on the Frequency and Frequency Match under Package details.

2. Click **`Save`**.

&emsp; ![alt text][customer-packages]

!!! info "Managing Packages"
    You can create and manage **Packages** in **Setup :material-menu-right: Config :material-menu-right: Packages**. See **[Packages](https://docs.connexcs.com/setup/config/packages/)** for more information.

### Free Minutes Package

#### Setup Free Minutes Package

1. Navigate to Setup :material-menu-right: Config :material-menu-right: Packages :material-menu-right: Click on blue `+` icon.
2. Fill in the details and in the **Type** field select **Free Minutes**.
3. You may enter the **Destination**. Its an optional field.
4. Click on `Save` to build your package.

<img src= "/customer/img/free1.png">

#### Assign Free Minutes Package

1. Navigate to Management :material-menu-right: Customer :material-menu-right: Customer[Name] :material-menu-right: Packages :material-menu-right: Click on blue `+` icon
2. Select the Package created for allocating free minutes.
3. Fill out the required fields.
4. Enter the number of free minutes to be allocated to the customer.
5. Click on `Save`.

<img src= "/customer/img/free2.png"> 

## Run Package

It allows you to simulate making a charge against the package:

1. **Customer:** Select the customer you want to run the package for.
2. **Simulate:** You can select `yes` (it will generate a report) if you want to the run the package or `no` (it will again charge for the package).
3. **Date:** You can select the date on which you want to simulate the package.

![runpackage](/misc/img/runpackage.jpg)

[customer-packages]: /customer/img/customer-packages.png "Customer Packages"
