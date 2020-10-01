# API Integrations
Setup :material-menu-right: Integrations :material-menu-right: API

ConnexCS has an API to allow external services to send requests in. This page is to configure an API for ConnexCS to connect out to.

## Avalable Integrations

* **Paypal Instant Checkout** - Allows online checkout via the customer portal using a Paypal Account. [More Info](https://www.paypal.com)
* **Paypal IPN** - Often your customers may wish to use a feature inside paypal called MassPay, or they may wish to just send money from the PayPal portal without touching your site. If you enable IPN we will be notified of incomming paypal payments and we can topup based on that notification.
* **Stripe** - Possibly the worlds best credit card processor. [Stripe](https://www.stripe.com) made available on your customer portal to your customers.
* **Duo Security** - With Duo Security we can provide 2FA (2 Factor Authentication) via an out-of-band push notification to your mobile device when you sign in.
This can then be approved and also benefit from fingerprint authentication. [More Info](https://duo.com/)
* **Moneris** - Credit Card Processing, more information can be found here [Moneris](https://www.moneris.com/]) made available on your customer portal to your customers.
* **ScriptForge** - ScriptForge is ConnexCS Javascript Sandbox environment. Using this you can write drivers which intermediate connectivity to a large variety of providers
* **Razor Pay** - A large payment processor from India. [More Info](https://razorpay.com/)

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

## Inbound API's

### ConnexCS API

If you are looking for the ConnexCS API, please check here <https://api-docs.connexcs.com/>. 

### ConnexCS Customer API

If you wish to provide a machine interface with authorization centered around your customer, check here: <https://portal-api-docs.connexcs.com/>

[paypal-1]: /setup/img/73.png "Paypal 1"
[paypal]: /setup/img/74.png "Paypal"
[stripe]: /setup/img/75.png "Stripe"
[stripe1]: /setup/img/76.png "Stripe1"
