# Customer Rate Card

Customer Rate Cards let you manage the rates for customers, edit customer profiles, and view important information. 

## Rate Card Management 
The Rate Card Management screen is located under **Management > Rate Card > Customer Rate Cards**.

### Compile 
The **Compile** column shows which Customer Rate Cards are in sync with the Provider Rate Cards. 

### Delete a Customer Rate Card
Delete a customer rate card by selecting its name from the list and then clicking the trash bin icon. Clicking **`?`** button will show a list of provider cards associated with the current customer rate card. 

### Email the Rate Card
A Rate Card configuration may be emailed as an attachment to customers by clicking the **`Email`** button while in the customer rate card.

## Add new Customer Rate Card (internal profit generation) 
To set up an Internal Customer Rate Card, and add a profit to your provider cards or set a flat rate:

1. Select the **`+`** button under **Customer Rate Card**. 
2. Name the Card, select Carrier(s), Currency, 
3. Select the Config tab
3. Set **Force Presentation** to IntER/IntRA/Indeterminate
4. Enable **LRN** using **Dialler**.
5. Click **`Save`**.
   
   ![alt text][ccard-11] 
   
6. Select **Profits** then click the **`+`** button. 

    ![alt text][customer-card-3]

7. **Edit Profit** field details are found [here](https://staging--connexcs-docs.netlify.app/customer-ratecard/#profits).
8. Click the **`Build`** button and confirm.  A notification will tell you if the build was successful.
    
    ![alt text][ccard-14] 

   
!!! info "Import/Upload Customer Rate Cards"
    Steps to import/upload Customer Rate Cards can be found [here](). 
    
## Customer Rate Card settings

### Main 
* **Parent Cards** are the Provider Rate Cards associated to this card
* **Customers** lists the specific Customers using this card
* **Profits** displays configured profit rules


### Revisions  

The revision tab shows previous changes made to rate cards. For example: previous Rule Count, Presentation, Currency, Date Created, and Billing.

### Properties
 * **Rate Cards** - Define how customer routing is built as well as how customer prices are derived.
 * **Manual Ordering** - Allow granular ordering of specific prefixes and which carriers to use. 
 * **Contract** - Specify a default contract that applies to a specific rate card. 
 * **Collapse Using** - Select how you want to merge data with the carrier cards.
 * **Rate Compacts** - Apply after **Collapse Using**, it calculates the Minimum, Maximum, or Average cost (as selected) based on the Rate Cards selected on the right

### Profits
The **Profits** section allows you to configure:

* **Match**
    * Enter the prefix to match, either a Regular Expression or a standard prefix (numeric only, typically an international country code, not a provider or customer tech prefix). 
    * Adding an up arrow `^` on the prefix draws all associated prefixes from the provider card. For example, if you enter '49, it will include '491', '492', '4912345', and so on.
* **Profit Type**
    * Absolute - actual value charged
    * Relative - amount entered is added to the cost from the carrier
    * Percent - cost from the carrier multiplied by this percent
* **Status** - Use Blocked, here or after importing a Carrier Rate Card, to disable specific prefixes
* When **MCD (Minimum Call Duration)**, **Pulse**, or **Rounding** are disabled, that setting will select the worst case scenario as defined by the carrier. 

!!! note "Profit Type"
    Using Absolute and Relative can be useful, especially when dealing with large cards and your providers prices change; a single click is all that is needed to regenerate the customer rate cards.

### Rounding Methods
All of the following apply to the n+1 digit (e.g if your card is billed to 4 decimal places, this cares about the 5th digit). For our example: 0.1234**5** (rounded to 4 decimal places):

 * **Full Down** - Rounded down regardless of n+1 digit (0.1234)
 * **Half Down** - Values 0-5 are rounded down. (0.1234)
 * **Half Up** - Values 5-9 are rounded up.  (0.1235)
 * **Full Up** - Rounded up regardless of n+1 digit (0.1235)

[ccard-11]: /card/img/149.png "ccard-11"
[customer-card-3]: /card/img/123.png "Customer-card-3"
[ccard-14]: /card/img/152.png "ccard-14"

