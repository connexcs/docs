# Table of Contents

* [Table of Contents](#table-of-contents)
* [Credit Control](#credit-control)
  * [Pre-pay/Post Pay](#pre-pay-post-pay)
    * [Automatic Cut Off (Is it Real time?)](#automatic-cut-off-is-it-real-time)
    * [What's the best way to make sure I don't overspend by a single penny?](#whats-the-best-way-to-make-sure-i-dont-overspend-by-a-single-penny)
    * [Is it possible to implement a 100% real-time credit control that stops my account exactly on 0?](#is-it-possible-to-implement-a-100-real-time-credit-control-that-stops-my-account-exactly-on-0)


# Credit Control

## Pre-pay / Post Pay

The ConnexCS system does not have a distinct setting to differentiate between Pre and Post pay customers. This is simply determined by the debit limit.

The debit limit is a value, in denominations of the customer’s currency, which when set will allow spends below 0 of the specified amount before calls are stopped.

* **Pre Pay** - Set the debit limit to 0.00
* **Post Pay** - Set the debit limit to the maximum credit risk you wish to allow for this customers. This does not affect the payment terms.
* **Pre Pay with Credit Buffer** - Set the debit limit to the NEGATIVE of your buffer value. E.g If you want a float/buffer value in your customer’s account of $5.00, meaning the account will stop dialing when your customer only has $5.00 left in their account you will set the debit limit to -$5.00

### Automatic Cut Off (Is it Real time?)
1. Is the automatic cut off real-time?
2. Partly

The credit control can be considered real-time apart from the following considerations:

1. The credit control is only applicable for new calls. This means that calls in progress will continue to flow even if customers run out of balance.

2. The current account credit is cached by the routing engine for 60 seconds. This means that the live credit can be delayed by 60 seconds.

### What's the best way to make sure I don't overspend by a single penny?

Set a Buffer Credit on the customer's account as mentioned above.

### Is it possible to implement a 100% real-time credit control that stops my account exactly on 0?

Short Answer. No.

Long Answer, yes this is possible however the implementation of such strict features is not conducive to a high throughput platform. 
As multiple credit control techniques such as channel/cps throttling based on available credit; active call spending; and call duration/spend prediction, would all need to be implemented to make this type of feature scale effectively. If you REALLY want this feature, then you are welcome to request it in the Idea’s section of this site.
