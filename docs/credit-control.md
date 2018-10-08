# Table of Contents

- [Table of Contents](#table-of-contents)
- [Credit Control](#credit-control)
  - [Pre-pay / Post Pay](#pre-pay--post-pay)
    - [Automatic Cut-Off](#automatic-cut-off)
    - [Real-Time Considerations](#real-time-considerations)


# Credit Control

## Pre-pay / Post Pay

The ConnexCS system, the **debit limit**  is used to differentiate between pre-pay and post-pay customers. It is a value in the customer’s currency that allows a scecified number of spins below 0 before calls are stopped.

1. **Pre Pay** - Set the debit limit to 0.00 for pre-paid customers, indicating their balanaces should be paid _before_ they are allowed to use services.

2. **Post Pay** - Set the debit limit to the maximum amount you wish to allow for customers. This does not affect the payment terms, but the "negative debit" simply acts as a form of credit.

3. **Pre Pay with Credit Buffer** - Set the debit limit to the NEGATIVE of your buffer value. To avoid overspending, set a buffer credit on the customer account.  This will give the non-real-time mechanics in the system a chance to catch up or to send customer warnings about cancellation when they near their limits.  For example, if you want a buffer in your customer’s account of $5.00--meaning the account will stop dialing when your customer only has $5.00 left in their account--set the debit limit to -$5.00. 

### Automatic Cut-Off 

The automatic cut-off mechanism is partly real-time, whereas credit control is real-time with these exeptions:
* Credit control only applies to new calls. Calls in progress continue to flow even if customers run out of balance.
* The current account credit is cached by the routing engine for sixty (60) seconds, which means live credit can be delayed by a minute.

### Real-Time Considerations
While it is not possible to implement a 100% real-time credit control that stops account action exactly on 0, there are workarounds. Credit control techniques like channel/cps throttling based on available credit, active call spending, and call duration/spend prediction are each options for scaling systems.  They are not inherent in ConnexCS because they are not conducive to high throughput, so we leave that to advanced users. However, implementations such as these can always be put forth in the [Ideas](Link_to_ideas_page) section of this website.