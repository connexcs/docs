# API Integrations
Setup :material-menu-right: Integrations :material-menu-right: API

**API Integrations** are configured to allow ConnexCS to connect to external services. For inbound APIs, please see the [API](/api) in the Architecture documentation. 

## Available Integrations

* **Paypal Instant Checkout** - Allows online checkout via the customer portal using a [Paypal](https://www.paypal.com) Account.
* **Paypal IPN** - For customers who wish to use a PayPal feature called MassPay, or want send money from the PayPal portal without using your site, IPN can be enabled. This notifies the system of incoming PayPal payments and we can top-up based on that notification. See [Mass Payments with PayPal IPN](/customer-payments/) for specific details and setup. 
* **Stripe** - Possibly the world's best credit card processor, [Stripe](https://www.stripe.com) can be made available on your customer portal.
* **Duo Security** - With [Duo Security](https://duo.com/) we can provide 2FA (2 Factor Authentication) via an out-of-band push notification to your mobile device when you sign in. This can then be approved and also benefit from fingerprint authentication. 
* **Moneris** - A Canadian Credit Card Processing service, [Moneris](https://www.moneris.com/]) can be made available on your customer portal.
* **ScriptForge** - [ScriptForge](/developers/scriptforge/) is ConnexCS's Javascript Sandbox environment which you can use to write drivers to intermediate connectivity to a large variety of providers.
* **Razor Pay** - [Razor Pay](https://razorpay.com/) is a large payment processor from India.

## Enable API Integration

1. Click the **`Add`** button.
2. Select the desired service from the drop-list.

    ![alt text][api]

3. (PayPal and Stripe only) Select the Mode: **Test** for testing connections or **Live** for an active account.
4. Complete the dialog box and press the **`Save `** button.

!!! info "API Service details"
    Each service requires different details. These can be obtained using your account with the specific provider(s). 

[api]: /setup/img/api.png "API Integration"
