# Some Interesting Features

## makeCall Feature

When we initiate **makeCall** we pass a number that we're dialing, for example:

```js linenums="1"
this.makeCall('200')
  .then(res => {
    res.$on('onStatusChanged', status => {
      console.log('Auto Status Change', status.session);
    });
    console.log('Before Dial');
  })
  .catch(err => {
    console.log('error', err);
    console.log('Before Dial');
  });
```

Then, the **makeCall** features return a **Promise** (an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value), which results in an **Event Manager** (refers to the process of handling and responding to events that occur in a web page or application).

A **Promise** uses `.then` and `.catch`that enables you to listen to a **Promise**.

You can consider **Event Manager** as a response from the **Promise**.

Thus, when you listen to an event it returns a **Status**. In the above example, the event is `onStatusChanged` and the response you can expect is `status`.
Thus, whenever the status changes, the **SIP-client** releases the `onStatusChanged` event. The various statuses can be establishing, idle, initial, terminating, etc.

## getProv Feature

It's a feature that works every time you sign-in to the Webphone.

Thus, the Webphone needs to provision a specific user with a set of specific features.

getProv feature return some specific information or **Promise**.

For example, `this.getProv().then` returns the user's provision information such as their user name.

```js linenums="1"
this.getData().then(async data => {
    this.getProv().then(prov => { 
        data.agentId = prov.sipUser.username;
    })
})
```

To sum up we can say, getProv gets data from the servers after provisioning a user.

For example you can get the following information on the Webphone when you use the getProv feature:

```js linenums="1"
 "prov": {
        "brandName": "Cacious WebPhone",
        "menu": [
            {
                "id": "home",
                "title": "Home",
                "url": "/",
                "icon": "mdi-home",
                "order": 1
            },
            {
                "id": "dialpad",
                "title": "Dialpad",
                "url": "/dialpad",
                "icon": "mdi-dialpad",
                "order": 2
            },
            {
                "id": "agent",
                "title": "Agent",
                "url": "/agent",
                "icon": "mdi-account-tie-voice",
                "order": 3
            },
            {
                "id": "history",
                "title": "History",
                "url": "/call-log",
                "icon": "mdi-history",
                "order": 4
            },
            {
                "id": "contacts",
                "title": "Contacts",
                "url": "/contacts",
                "icon": "mdi-card-account-phone",
                "order": 5
            },
            {
                "id": "settings",
                "title": "Settings",
                "url": "/settings",
                "icon": "mdi-cog",
                "order": 6
            }
        ],
        "currency": "USD",
        "flags": [
            "BALANCE",
            "EDIT_SETTINGS",
            "TITLE_USERNAME",
            "OTP_LOGIN"
        ],
        "codec": {
            "delete": [
                "opus.*",
                "pcm.*",
                "telephone.*",
                "cn.*",
                "isac.*"
            ],
            "priority": [
                "red.*"
            ]
        },
        "setup": true,
        "paymentMethods": {
            "paypal": {
                "label": "PayPal",
                "currencies": [
                    "USD",
                    "GBP",
                    "EUR"
                ],
                "min_payment": 0
            },
            "stripe": {
                "label": "Credit Card",
                "currencies": [
                    "usd",
                    "gbp",
                    "AUD"
                ],
                "min_payment": 0,
                "key": "********"
            }
        },
        "balance": 2045.1765,
        "sipUser": {
            "displayName": "cacious",
            "cli": null,
            "username": "cacious",
            "password": "****,
            "wsServer": "wss://test1.host.connexcs.net",
            "realm": "test1.host.connexcs.net"
        },
```
