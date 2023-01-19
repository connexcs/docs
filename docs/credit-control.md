# Credit Control

## Pre-pay / Post-Pay

ConnexCS uses the **Debit Limit** to differentiate between Pre-Pay and Post-Pay customers.

It's a value (in the customer’s currency) that lets the account drop to a specified amount before the calls stop.

To setup **Pre-pay** or **Post-Pay** limit go to Management :material-menu-right: Customer :material-menu-right: Basic :material-menu-right: Debit Limitand the limits as discussed:

1. **Pre-Pay:** Set the Debit Limit to 0.00 for pre-paid customers, indicating their balances should be paid _before_ they may access services.

2. **Post-Pay:** Set the Debit Limit to the maximum amount you wish to allow customers.

    This doesn't affect the payment terms, but the **negative debit** just acts as a form of credit.

3. **Pre Pay with Credit Buffer:**
4. Set the Debit Limit to the NEGATIVE of your buffer value. To avoid overspending, set a buffer credit on the customer's account.

    This will give the non-real-time mechanics in the system a chance to catch up or to send customers. The warnings are about cancellation when they near their limits

    For example, to set a buffer to disable dialling for an account once it reaches $5.00; set the debit limit to -$5.00.

### Automatic Cut-Off

The Automatic Cut-Off mechanism is partly real-time, whereas Credit Control is real-time with these exceptions:

* Credit Control applies only to new calls.

    Calls in progress continue to flow even if customers run out of balance.

* The current account credit gets cached by the routing engine for sixty (60) seconds, which means live credit gets delayed by a minute.

### Real-Time Considerations

While it's impossible to execute 100% real-time credit control that stops account action exactly at 0, there are workarounds.

Credit control techniques like Channel/CPS throttling based on available credit, active call spending, and call duration / spend prediction are all options for scaling systems.

They're not inherent in ConnexCS because they're not conducive to high throughput, so we leave that to advanced users.
