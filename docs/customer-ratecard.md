# Customer Rate Card

Customer Rate Cards let you manage the rates for customers, edit customer profiles, and view important information. The Rate Card Management screen is found under **Management > Rate Card > Customer Rate Cards**.

## Compile 
The **Compile** column shows which Customer Rate Cards are in sync with the Provider Rate Cards. 

## Delete the Customer Rate Card

Delete a customer rate card by selecting its name from the list and then clicking the trash bin icon. Clicking **`?`** button will show a list of provider cards associated with the current customer rate card. 

## Email the Rate Card

A Rate Card configuration may be emailed as an attachment to customers by clicking the **`Email`** button while in the customer rate card.

## Customer Rate Card manual setup (internal profit generation) 
To set up an Internal Customer Rate Card, and add a profit to your provider cards or set a flat rate:

2. Select the **`+`** button under **Customer Rate Card**. 
     ![alt text][ccard-9] 
3. Name the Card, select Carrier(s), Currency, 
        
     ![alt text][ccard-10] 
         
6. Click Config
7. Change the presentation to Inter/Intra/Indet under **Force Presentation**. LRN can be enabled from the **Dialing** option screen.
7. then click **`Save`**.
   ![alt text][ccard-11] 
4. Select **Profits**.
5. Click the **`+`** button. 

    ![alt text][customer-card-3]

10. Fill out Edit Profit screen (configuration details found [here](https://staging--connexcs-docs.netlify.app/customer-ratecard/#profits).

6. Enter the required prefix in the prefix field. This is typically an international country code, not a provider or customer tech prefix. Adding an up arrow `^` on the prefix draws all associated prefixes from the provider card. To specify a set of prefixes add, `^` and prefixes (e.g. ^441).
7. In the cost field, add the sell price.
8. Select Profit Type (see [Profits](https://docs.connexcs.com/customer-ratecard/#profits) below). 
9. Select the billing type.
9. Enter the connection charge, if it applies.
10. Select the Rounding method.  It can be up to six (6) decimal places, but is usually four (4).
11. Select **Cost** under the drop-down list for **Apply To**. If it is an NPA-NXX card you can select Inter/intra/cost
12.  Select **Profit** from the Status drop-down list.
13. Select **Build** from Carrier Card button to build the rate card.
   ![alt text][ccard-13] 
   
12. Click the **`Build`** button and confirm.  A notification will tell you if the build was successful.
    
    ![alt text][ccard-14] 

   

    
## Rate Card settings

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
The Profit Rules allows you to configure:

* **Match** - Define what prefix to match, either a Regular Expression or a standard prefix (numeric only). For example, if you enter '49, it will include '491', '492', '4912345', and so on.
* **Profit Type**
    * Absolute - actual value charged
    * Relative - amount entered is added to the cost from the carrier
    * Percent - cost from the carrier multipled by this percent
* **Status** - Use Blocked, here or after importing a Carrier Rate Card, to disable specific prefixes
* When **MCD (Minimum Call Duartion)**, **Pulse**, or **Rounding** are disabled, that setting will select the worst case scenario as defined by the carrier. 

!!! note "Profit Type"
    Using Absolute and Relative can be useful, especially when dealing with large cards and your providers prices change; a single click is all that is needed to regenerate the customer rate cards.

### Rounding Methods
All of the following apply to the n+1 digit (e.g if your card is billed to 4 decimal places, this cares about the 5th digit). For our example: 0.1234**5** (rounded to 4 decimal places):

 * **Full Down** - Rounded down regardless of n+1 digit (0.1234)
 * **Half Down** - Values 0-5 are rounded down. (0.1234)
 * **Half Up** - Values 5-9 are rounded up.  (0.1235)
 * **Full Up** - Rounded up regardless of n+1 digit (0.1235)


[customer-card-3]: /card/img/123.png "Customer-card-3"
[customer-card-7]: /card/img/127.png "Customer-card-7"

[ccard-8]: /card/img/146.png "ccard-8"
[ccard-9]: /card/img/147.png "ccard-9"
[ccard-10]: /card/img/148.png "ccard-10"
[ccard-11]: /card/img/149.png "ccard-11"
[ccard-12]: /card/img/150.png "ccard-12"
[ccard-13]: /card/img/151.png "ccard-13"
[ccard-14]: /card/img/152.png "ccard-14"
