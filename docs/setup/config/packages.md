# Packages
Setup :material-menu-right: Config :material-menu-right: Packages

A **Package** represents a product or service offered to customers, often as a recurring charge based on goods delivrered at a required interval. CoonexCS **Packages** are global entities which are allocated to each customer as required. Each package may include incentives for MRC like DIDs, phone system rentals, or other hardware. 
 
 
## Add Package

1. Click the **`+`** button.
2. Complete fields as needed (details below). 
3. Click **`Save`**.

![alt text][addpackage] 

## Fields

| Field Name      | Description                                                                                         |
|------------------|-----------------------------------------------------------------------------------------------------|
| Name             | The name of the package                                                                             |
| Retail           | The price that you will charge to your customer (Recurring Charge)                                  |
| Cost             | The price which you pay for this package (Recurring Charge)                                         |
| Frequency        | How often should this package charge repeat (choosing weekly or monthly will allow you to select multiple days for each)                                                        |
| Description      | Your description                                                                                    |
| Setup Cost       | Non-recurring price this items costs you                                                            |
| Setup Retail     | Non-recurring price you charge to your customer                                                     |
| ConnexCS Package | See below                                                                                           |
| Minimum Spend    | See below                                                                                           |

### Minimum Spend

Select this if you bill your customers for a minimum spend per-month based on minutes consumption. The mechanism will calculate the customer's spend in the previous interval, subtract it from the minimum spend, and then pass that charge to their account.

### ConnexCS Package

If there is a service that you have from ConnexCS which you then re-brand and sell to your customer, you must select it here, so that ConnexCS can enable that feature on your customer account.


[addpackage]: /misc/img/addpackage.png "Add Package"
