# Table of Contents

* [Table of Contents](#table-of-contents)
* [Customer Rate Card](#customer-rate-card)
  * [Adding Customer Card](#adding-customer-card)
    * [Basic Level](#basic-level)
    * [Advanced Level](#advanced-level)
  * [Refreshing the list](#refreshing-the-list)
  * [Uploading a file](#uploading-a-file)
  * [Deleting the Customer Rate Card](#deleting-the-customer-rate-card)
  * [Customer Rate Card details](#customer-rate-card-details)
  * [Profit](#profit)
  * [Searching Text field](#searching-text-field)
  * [Email Ratecard](#email-rate-card)
  * [Revision Tab](#revision-tab)  



# Customer Rate Card

Customer rate cards let you manage the rates for your customers. There are two ways to build these: 

1. Internal: Internal method lets you add a profit to your provider cards or set a flat rate.
2. External: This is done by uploading the custom rate card & setting up the Dynamic routing

 # The Internal method 

Please follow the instructions below.

1. Click on Management> Rate Cards> Customer rate card> Add New> Name the card> Select the carrier> Click Save

2. Select Profits> Click on Add New Row

3. Enter your required prefix in the prefix field. This will usually be an international country code & not a provider or customer tech    prefix. Adding this symbol ^ on the prefix field will draw all the associated prefixes from the provider card. If you wish to specify    a particular set of prefixes add ^ and prefixes, example: ^441

4. In the cost field add the sell price & in the next column choose ABSOLUTE or RELATIVE.
   Absolute will set a flat cost, for example your customer will be charged the price you set in the cost field. 
   Relative costs will be added to the price you entered in cost field. example: provider cost 0.008 Relative cost 0.0006 = 0.0086, this    is the amount that will be billed to your customer.
   
5. If you do not wish to use Absolute or Relative, you can instead use a PERCENTAGE markup, Example: You can enter 10 percent in the        Percent field and choose Percent in the Profit Type. Eg: Provider Cost 0.008, 10% markup = 0.0088 Sell cost.

6. Select the billing type, example: 1/1 or 6/6

7. Enter the connection cost if there is one.

8. Select the Rounding method which can be upto 6 decimal places, but is usually 4.

9. Select the status to Profit

10. And Click the Apply To for Cost. If it is a NPA-NXX card you can select Inter/intra/cost

11. Once you complete all these steps now it is time to BUILD the card by clicking on Build from Carrier Card button.


# The External method 

Please follow the instructions below.

1. Click on Management> Rate Cards> Customer rate card> Add New> Name the card> Select the carrier> go to Advanced> Select the providers inside the Dynamic Routing box> Click Save.

2. Click on the Upload button in centre of the screen.

3. Click on the blue upload button and browse the file from your device, select the required file and click open, your file will appear on the screen, click on upload again

4. Once the upload completes click on the file name, Map the rate card fields against the system fields. (Add GIF here)

5. Click on Import to card button & select the Customer card & click save.

6. Your rate card file will be imported to your customer rate card & you will be notfied with a popup once the import is complete. the card is now live and ready to use.

NB. You do not need to BUILD a rate card created in this way.

This can be done in two ways:
 
In this section, the following actions can be performed.

1.	Adding Customer Card.
2.	Refreshing the list.
3.	Uploading a file.
4.	Deleting the customer rate card.

### Advanced Level

In advanced level, you need to fill in more details.

1.	Users will add the Name that will be public.
2.	Users can add the notes, both public and private, in the respective fields.
3.	Users will select the Public Options from the given check-list. 
4.	Users will select Force Presentation from drop-down menu options as default, single rate or intER/intRA.
5.	Users will select the dialling type from dropdown menu.
6.	Users will select the strategy options as LCR, random, round robin or reverse LCR.
7.	Users will select the Collapse Option.
8.	User can use the Dynamic Routing when a Custom Rate card is uploaded. You can select the provider rate cards to which you want to send traffic.

![alt text][advance]

## Refreshing the list

The Rate Card list can be refreshed by simply clicking on the Refresh button.

## Deleting the Customer Rate Card

You can also delete the customer rate card by simply selecting the name from the list and then click the trash icon, which is right next to the Upload File button.

Note: Users get help about the Rate Card by clicking on the button with the “?”. 

## Other functions of the Customer Rate Card section includes:

1.	Searching text field.
2. Email Rate Card

### Searching Text field

Users can also search any details related to Customer Rate Card, by simply writing in the search text field and the results will appear instantly.

## Email Rate Card

With this feature you can email the rate card to your customer's email address as an attachment.

1. Click on Management> Rate Card> Customer Rate Card
2. Click on the rate card name

![alt text][email-ratecard-1]

3. Click on Email button

![alt text][email-ratecard-2]

4. Enter the email address and click on send

![alt text][email-ratecard-3]

## Revision Tab 

The revision tab lets us see the previous changes that have been made to a rate card, for example the previous Rule count, Presentation, Currency, date created, Billing etc.

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

