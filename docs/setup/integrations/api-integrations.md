# API Integrations
There are several **API Integrations** which can enhance customer administration, including communicating with the switch, information about current balances, and managing Call Detail Records (CDRs).  

Specifications for the customer-facing API operations are found here: <https://portal-api-docs.connexcs.com/>

## Avalable Integrations

* **Paypal Instant Checkout** - Allows online checkout via the customer portal using a Paypal Account. [More Info](https://www.paypal.com)
* **Paypal IPN** - Often your customers may wish to use a feature inside paypal called MassPay, or they may wish to just send money from the PayPal portal without touching your site. If you enable IPN we will be notified of incomming paypal payments and we can topup based on that notification.
* **Stripe** - Possibly the worlds best credit card processor. [Stripe](https://www.stripe.com) made available on your customer portal to your customers.
* **Duo Security** - With Duo Security we can provide 2FA (2 Factor Authentication) via an out-of-band push notification to your mobile device when you sign in.
This can then be approved and also benefit from fingerprint authentication. [More Info](https://duo.com/)
* **Moneris** - Credit Card Processing, more information can be found here [Moneris](https://www.moneris.com/]) made available on your customer portal to your customers.
* **ScriptForge** - ScriptForge is ConnexCS Javascript Sandbox environment. Using this you can write drivers which intermediate connectivity to a large variety of providers


## Configure APIs  
Navigate to **Setup**>**Integrations**>**API**. 


### Add New API

To add a new API:

1. Click the **`Add`** button.

![alt text][paypal-1]

2. Select **PayPal** or **Stripe** from the drop-list.

![alt text][paypal]

3. Fill in the dialog box and press the **`Save `** button.

#### For PayPal

![alt text][stripe]
 
1. Select the Mode, between **Test** for testing connections, and **Live** for an active account.
2. Enter a username and password
3. Enter an email and signatures.
4. Select user currency type.

Lean more about the PayPal API [here]<https://docs.connexcs.com/customer-payments>.

#### For Stripe

![alt text][stripe1]

1. Select the Mode, between **Test** for testing connections, and **Live** for an active account.
2. Enter a **Public Key** and **Private Key** in the respective text fields. These can be obtained from your Stripe account.
3. Select the user's currency type.
4. Click the **`Save`** button.

#### Edit APIs

Edit API information by clicking its name from the list. A window will open similar to the 'Add New' screen where you can edit details.

#### Refresh APIs

Click the **`Refresh`** button to update the current list of APIs on the screen to the most recent. This is to ensure you are working with the most recent information.

#### Delete APIs

To delete an API, select it from the list and click the **`Delete`** button. 


[paypal-1]: /setup/img/73.png "Paypal 1"
[paypal]: /setup/img/74.png "Paypal"
[stripe]: /setup/img/75.png "Stripe"
[stripe1]: /setup/img/76.png "Stripe1"
