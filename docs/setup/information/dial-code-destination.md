# Dial Code / Destination Database
Setup :material-menu-right: Information :material-menu-right: Dial Code / Destination

The Dial Code database is a quick goto resource to checking international numbering plans.

## Advanced CLI Match & Manipulation
The CLI system uses Regular Expressions to match and replace numbers. Here are a few examples:

| Column Name |            CLI | Replace CLI |                                      Description |
|-------------|---------------:|------------:|-------------------------------------------------:|
| 123456789   |          ^1234 |             |   Allows only numbers starting with 1234 to pass |
| 123456789   |           789$ |             |      Allows only numbers ending with 789 to pass |
| 12345678912 | ^[0-9]{11,12}$ |             | Allows only numbers with 11 or 12 digits to pass |
| +123456789  |   ^\+([0-9]+)$ |          \1 |                                 Remove leading + |
| 01782123456 |    ^0([1-9]+)$ |        44\1 |             Remove leading 0 and replace with 44 |


### Columns
| Column Name | Description                                                                 |
|-------------|-----------------------------------------------------------------------------|
| Prefix      | The leftmost part of the phone number.                                      |
| Type        | Such as Mobile / Landline / Special Services                                |
| Operator    | The Operator Name / Range Holder of the number (Note numbers can be ported) |
| Description | Additional information about the number                                     |

