# Paypal Integration
ConnexCS integrates the PayPal merchant platform and its API to allow easier transfers between VoIP providers and their associated PayPal accounts.

# Add PayPal Integration
Integrating PayPal requires admin access to ConnexCS and PayPal settings for provider accounts. Switching between them is noted by the "**Login to [application]**" headers.

**Login to ConnexCS**

1. In the dashboard go to **Setup** > **Integrations**
2. Click the green **`Add`** button in the top right and select **Paypal IPN** from the drop-list, or select an existing **paypal_ipn** from the list.
3. Copy the IPN URL at the top and leave in your OS's clipboard for now.
4. Check **Verify Transaction** if to have transactions verified (recommended).
5. Select a payment type (Mass Pay, Send Money)
6. Select currency type (USD, GBP, EUR)

 ![alt text][paypal-5]

5. Click **`Save`**.

**Log in to PayPal**
1. Click **Profile**.
2. Find **Instant payment notifications**. 
3. Click **Update**.
4. Click **API  Access**.
5. Select **View API Signature**.
6. Copy the API Username, API Password, and Signature. 

We recommend copying each of these one at a time instead of saving them to a single document for convenience, as this places too much sensitive login information in one file. The safest way to move this info is to have ConnexCS and PayPal open in separate browser tabs, where you can perform the three copy/past operations efficiently.

 ![alt text][paypal-3]

 ![alt text][paypal-12]

 ![alt text][paypal-6]
 
 ![alt text][paypal-8] 
 
 ![alt text][paypal-9] 
 
**Login to ConnexCS**

1. Return to **Setup**>**Integrations**.
2. Click the green **`Add`** button in the top right and select **Paypal** from the drop-list, or select an existing **paypal** from the list. Note that the system marks the PayPal API as simply "paypal" and the IPN as "paypal_ipn".
3. Enter the credentials you copied from PayPal (username, password, signature) into their respective fields.
4. Click **`Save`**.

 ![alt text][paypal-16]



## Setting the Customer Paypal Email Address into ConnexCS

1. Click **Management** > **Customer** > [customer name].
2. Click the green **`Edit`** button in the top-right.
3. Navigate to the **Config** tab.
4. Enter the PayPal e-mail into the **PayPal Email** text box.
5. Click **`Save`**.


[paypal-3]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/paypal-3.png "Paypal-3"
[paypal-6]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/paypal-6.png "Paypal-6"
[paypal-8]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/paypal-8.png "Paypal-8"
[paypal-9]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/paypal-9.png "Paypal-9"
[paypal-2]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/paypal-2.png "Paypal-2"
[paypal-5]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/paypal-5.png "Paypal-5"
[paypal-12]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/paypal-12.png "Paypal-12"
[paypal-16]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/img/paypal-16.png "Paypal-16"

