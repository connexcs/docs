# Customer Rate Card

Customer Rate Cards let you manage the rates for customers, edit customer profiles, and view important information. There are two types of rate cards: 
* The **Internal** method lets you add a profit to your provider cards or set a flat rate.
* **External** rate cards are completed by uploading the custom rate card, and then setting up dynamic routing.

## The Internal Method 

To set up an internal Rate Card in ConnexCS:

1. Click **Management** > **Rate Cards** > **Customer Rate Card**.
2.  Select the **`+`** button. 
3. Name the card, select a carrier, then click **`Save`**.
 
  ![alt text][customer-card-1]

  ![alt text][customer-card-2]

4. Select **Profits**.
5. Click the **`+`** button. 

  ![alt text][customer-card-3]

6. Enter the required prefix in the prefix field, usually an international country code instead of a provider or customer tech  prefix. Adding an up arrow `^` on the prefix draws all associated prefixes from the provider card. To specify a set of prefixes add, `^` and prefixes (e.g. ^441).
7. In the cost field, add the sell price.
8. There are three choices for costs:
   * **Absolute** sets a flat cost, taken from the cost field. 
   * **Relative** costs are added to the price you entered in cost field. 
   * Add a percentage (%) to the **Percentage** field if you don't want to use an absolute or relative value.  For example, a '10' in the box equals a 10% markup.
9. Select the billing type.

 ![alt text][customer-card-4]

9. Enter the connection charge, if it applies.

10. Select the Rounding method.  It can be up to six(6) decimal places, but is is usually four(4).

11. Select **Cost** under the drop-down list for **Apply To**. If it is a NPA-NXX card you can select Inter/intra/cost
    
12.  Select **Profit** from the Status drop-down list.

13. Select **Build** from Carrier Card button to build the rate card.

## The External Method 

The following instructions detail the external method for building Customer Rate Cards. 

1. Click **Management** > **Rate Cards** > **Customer rate card**. 
2. Click the **`+`** button, name the card, and select the carrier.
3. Go to **Properties** > **Advanced**, and then select the providers inside the Dynamic Routing box. 
4. Click **`Save`**.

 ![alt text][customer-card-7]
 
5. Click the **`Upload`** button.  A dialog window will allow you to upload a file from your local device.

  ![alt text][customer-card-8]

  ![alt text][customer-card-9]

5. Once the upload completes, select the new file by name.
6. Map the rate card fields against the system fields. 
7. Click the **`Import to card`** button and select the customer card.
8. Click **`Save`**.

The rate card file is imported the customer rate card, and a notfication will signal its completion.  Unlike the internal alternative, there is no need to build an external rate card.

## Deleting the Customer Rate Card

Delete a customer rate card by selecting its name from the list and then clicking the trash bin icon. Clicking **`?`** button will show a list of provider cards associated with the current customer rate card. 

## Email the Rate Card

This feature lets providers email rate cards to customers as attachments. To email rate cards:

1. Click **Management** > **Rate Card** > **Customer Rate Card**.
2. Select the rate card by name.

  ![alt text][customer-card-10]

3. Click the **`Email`** button.
4. Enter the email address, and click **Send**.

  ![alt text][customer-card-11]

## Revision Tab 

The revision tab shows previous changes made to rate cards. For example: previous Rule count, Presentation, Currency, date created, and Billing.



[customer-card-1]: /card/img/121.png "Customer-card-1"
[customer-card-2]: /card/img/122.png "Customer-card-2"
[customer-card-3]: /card/img/123.png "Customer-card-3"
[customer-card-4]: /card/img/124.png "Customer-card-4"
[customer-card-5]: /card/img/125.png "Customer-card-5"
[customer-card-6]: /card/img/126.png "Customer-card-6"
[customer-card-7]: /card/img/127.png "Customer-card-7"
[customer-card-8]: /card/img/128.png "Customer-card-8"
[customer-card-9]: /card/img/129.png "Customer-card-9"
[customer-card-10]: /card/img/130.png "Customer-card-10"
[customer-card-11]: /card/img/131.png "Customer-card-11"
[map-giff]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/map-giff.gif "map-giff"
