# Packages
Setup :material-menu-right: Config :material-menu-right: Packages

![alt text][package-1]

A package represents a product or service offered to customers, often as a recurring charge based on goods delivrered at a required interval.
A package is a global entity in the system that is allocated to each customer as required.
A package may include incentives for MRC like DIDs, phone system rentals, or other hardware. 
 
 ![alt text][package-2]
 
The actions that you can perform in this section are:

## Add Package

To add a package:

1. Click the **`+`** button.
2. Give a name to the package.
3. Provide cost and quantity.
4. Select frequency plan as daily, weekly, or monthly. Choosing weekly or monthly will allow you to select multiple days for each.  
5. Provide a description for the package.
6. Click **`Save`**.

![alt text][package-5] 

## Fields

| Field Name      | Description                                                                                         |
|------------------|-----------------------------------------------------------------------------------------------------|
| Name             | The name of the package                                                                             |
| Retail           | The price that you will charge to your customer (Recurring Charge)                                  |
| Cost             | The price which you pay for this package (Recurring Charge)                                         |
| Frequency        | How often should this package charge repeat.                                                        |
| Frequency Match  | On which days should this repeat (not selecting more than 1 day will make this bill multiple times) |
| Description      | Your description                                                                                    |
| Setup Cost       | Non-recurring price this items costs you                                                            |
| Setup Retail     | Non-recurring price you charge to your customer                                                     |
| ConnexCS Package | See below                                                                                           |
| Minimum Spend    | See below                                                                                           |

### Minimum Spend

Use this if you bill your customers for a minimum spend per-month based on minutes consumption.
The mechanism will calculate the customer's spend in the previous interval, subtract it from the minimum spend, and then pass that charge to their account.

### ConnexCS Package

If there is a service that you have from ConnexCS which you then re-brand and sell to your customer, you must select it here, this way ConnexCS can enable that feature on your customer account.
 
[package-1]: /misc/img/245.png "package-1"
[package-2]: /misc/img/246.png "package-2"
[package-3]: /misc/img/247.png "package-3"
[package-4]: /misc/img/248.png "package-4"
