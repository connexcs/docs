# Table of Contents

* [Table of Contents](#table-of-contents)
* [Customer Rate Card](#customer-rate-card)
   * [The Internal Method](#the-internal-method)
   * [The External Method](#the-external-method)
* [Revision Tab](#revision-tab)  



# Customer Rate Card

Customer rate cards let you manage the rates for your customers. There are two ways to build these: 

1. Internal: Internal method lets you add a profit to your provider cards or set a flat rate.
2. External: This is done by uploading the custom rate card & setting up the Dynamic routing

## The Internal Method 

Please follow the instructions below.

1. Click on Management> Rate Cards> Customer rate card> click on **‘+’** button. 
2. Name the card> Select the carrier> Click Save.
 
  ![alt text][customer-card-1]

  ![alt text][customer-card-2]

3. Select Profits> Click on ‘+’ button 

  ![alt text][customer-card-3]

4. Enter your required prefix in the prefix field. This will usually be an international country code & not a provider or customer tech    prefix. Adding this symbol ^ on the prefix field will draw all the associated prefixes from the provider card. If you wish to specify   a particular set of prefixes add ^ and prefixes, example: ^441

5. In the cost field add the sell price & in the next column choose ABSOLUTE or RELATIVE.
   Absolute will set a flat cost, for example your customer will be charged the price you set in the cost field. 
   Relative costs will be added to the price you entered in cost field. example: provider cost 0.008 Relative cost 0.0006 = 0.0086, this    is the amount that will be billed to your customer.
   
6. If you do not wish to use Absolute or Relative, you can instead use a PERCENTAGE markup, Example: You can enter 10 percent in the        Percent field and choose Percent in the Profit Type. Eg: Provider Cost 0.008, 10% markup = 0.0088 Sell cost.

7. Select the billing type, example: 1/1 or 6/6

 ![alt text][customer-card-4]

8. Enter the connection charge if there is one.

9. Select the Rounding method which can be upto 6 decimal places, but is usually 4.

10. Select the status to Profit

11. And Click the Apply To for Cost. If it is a NPA-NXX card you can select Inter/intra/cost

12. Once you complete all these steps now it is time to BUILD the card by clicking on Build from Carrier Card button.

## The External Method 

Please follow the instructions below.

1. Click on Management> Rate Cards> Customer rate card> 
2. Click on ‘+’ button> Name the card> Select the carrier
3. Go to properties> Advanced> Select the providers inside the Dynamic Routing box> Click Save.

 ![alt text][customer-card-7]
 
4. Click on the Upload button.

  ![alt text][customer-card-8]

5. Click on the blue upload button and browse the file from your device, select the required file and click open, your file will appear on the screen, click on upload again

  ![alt text][customer-card-9]

6. Once the upload completes click on the file name, map the rate card fields against the system fields. 

7. Click on Import to card button & select the Customer card & click save.

8. Your rate card file will be imported to your customer rate card & you will be notfied with a popup once the import is complete. The  card is now live and ready to use.

NB. You do not need to **BUILD** a rate card created in this way.

## Deleting the Customer Rate Card

You can also delete the customer rate card by simply selecting the name from the list and then click the trash icon, which is right next to the Upload File button.

Note: Clicking on the “?” will show the list of provider cards that are associated with this customer rate card. 

## Email the Rate Card

With this feature you can email the rate card to your customer's email address as an attachment.

1. Click on Management> Rate Card> Customer Rate Card
2. Click on the rate card name

  ![alt text][customer-card-10]

3. Click on Email button
4. Enter the email address and click on send

  ![alt text][customer-card-11]

## Revision Tab 

The revision tab lets us see the previous changes that have been made to a rate card, for example the previous Rule count, Presentation, Currency, date created, Billing etc.



[customer-card-1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/121.png "Customer-card-1"
[customer-card-2]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/122.png "Customer-card-2"
[customer-card-3]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/123.png "Customer-card-3"
[customer-card-4]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/124.png "Customer-card-4"
[customer-card-5]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/125.png "Customer-card-5"
[customer-card-6]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/126.png "Customer-card-6"
[customer-card-7]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/127.png "Customer-card-7"
[customer-card-8]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/128.png "Customer-card-8"
[customer-card-9]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/129.png "Customer-card-9"
[customer-card-10]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/130.png "Customer-card-10"
[customer-card-11]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/131.png "Customer-card-11"


[email-ratecard-1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/email-ratecard-1.png "Email-Ratecard-1"
[email-ratecard-2]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/email-ratecard-2.png "Email-Ratecard-2"
[email-ratecard-3]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/email-ratecard-3.png "Email-Ratecard-3"


[ratecard-dashboard]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/ratecard-dashboard.png "Ratecard-Dashboard"
[customer-ratecard]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/customer-ratecard.png "Customer-Ratecard"
[basic]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/basic.png "basic"
[advance]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/advance.png "advance"
[card-details]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/card-details.png "Card-Details"
[profittab]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/profittab.png "Profit-Tab"
[popup]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/popup.jpg "Popup"
[edittab]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/edittab.png "Edit-Tab"


[customer-ratecard1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/customer-ratecard1.png "customer-ratecard1"
[customer-ratecard2]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/customer-ratecard2.png "customer-ratecard2"
[customer-ratecard3]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/customer-ratecard3.png "customer-ratecard3"
[customer-ratecard4]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/customer-ratecard4.png "customer-ratecard4"
[customer-ratecard5]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/customer-ratecard5.png "customer-ratecard5"
[customer-ratecard6]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/customer-ratecard6.png "customer-ratecard6"



[customer-ratecard-advance1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/customer-ratecard-advance1.png "customer-ratecard-advance1"
[customer-ratecard-advance2]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/customer-ratecard-advance2.png "customer-ratecard-advance2"
[customer-ratecard-advance3]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/customer-ratecard-advance3.png "customer-ratecard-advance3"
[customer-ratecard-advance4]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/customer-ratecard-advance4.png "customer-ratecard-advance4"
[customer-ratecard-advance5]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/customer-ratecard-advance5.png "customer-ratecard-advance5"
[customer-ratecard-advance6]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/customer-ratecard-advance6.png "customer-ratecard-advance6"
[customer-ratecard-advance7]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/customer-ratecard-advance7.png "customer-ratecard-advance7"
[customer-ratecard-advance8]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/customer-ratecard-advance8.png "customer-ratecard-advance8"

[map-giff]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-img/map-giff.gif "map-giff"
