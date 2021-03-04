# Credit Control

## Pre-pay / Post-Pay
ConnexCS uses the **Debit Limit** to differentiate between Pre-Pay and Post-Pay customers. It is a value (in the customer’s currency) that allows the account to drop to a specified amount before calls are no longer allowed.

1. **Pre-Pay** - Set the Debit Limit to 0.00 for pre-paid customers, indicating their balances should be paid _before_ they are allowed to use services.

2. **Post-Pay** - Set the Debit Limit to the maximum amount you wish to allow for customers. This does not affect the payment terms, but the "negative debit" simply acts as a form of credit.

3. **Pre Pay with Credit Buffer** - Set the Debit Limit to the NEGATIVE of your buffer value. To avoid overspending, set a buffer credit on the customer account.  This will give the non-real-time mechanics in the system a chance to catch up or to send customer warnings about cancellation when they near their limits.  Example: To set a buffer to disable dialing for an account once it reaches $5.00, set the debit limit to -$5.00. 

### Automatic Cut-Off 
The Automatic Cut-Off mechanism is partly real-time, whereas Credit Control is real-time with these exceptions:

* Credit Control only applies to new calls. Calls in progress continue to flow even if customers run out of balance.
* The current account credit is cached by the routing engine for sixty (60) seconds, which means live credit can be delayed by a minute.

### Real-Time Considerations
While it is not possible to implement a 100% real-time credit control that stops account action exactly on 0, there are workarounds. Credit control techniques like Channel/CPS throttling based on available credit, active call spending, and call duration/spend prediction are all options for scaling systems.  They are not inherent in ConnexCS because they are not conducive to high throughput, so we leave that to advanced users.
