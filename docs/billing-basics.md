# Billing Basics

## Generic Billing for Beginners.

### Q. Why is "Minutes" X "Cost Per Minute" not the same as what my totals say.

A. Although there are some carriers that bill using this method, it is NOT the industry norm and it is unlikely that this is how you are being charged. Below is a simple example of why this does not work:

* Rate: $0.005 USD
* Calls: 100
* Duration: (on all calls) 9.1 seconds
* Per Second Rounding: Full-Up

**Minutes X Duration (Incorrect Method)**

100 calls X 9.1 seconds = 910 seconds = 15.16 minutes

15.16 * $0.005 = $0.0758 USD

*This is the wrong way*

**The Correct Way**

Calculate each call (in this senario we will do the same for all 100 calls).

9.1 / 60 * 0.005 =  $0.00075833 (round up to 4dp = 0.0008)

Repeat this process for each call (in this *example* all 100 calls are the exact same)

100 * 0.0008 = $0.08

## Balances don't match.

If you are getting an estimated value from balances that is fine, however different systems update the balance at different times. Some systems also automatically deduct a buffer balance to prevent overspend.

Note: We will not entertain unsupported "balances don't match" statements. There is absolutely nothing that we can do to help you investigate this type of problem.

Balances should be derived from a ledger (your CDR records).

## The correct way to investigate billing problems:

1. Do the balances ROUGHLY match?
Yes - Its doubtful there is an issue.
No - Move to Step 2.
2. Do the daily totals costs match?
Yes - Further investigation is needed.
No - 

3. Do the daily total amount of connections match?
No - There are calls missing somewhere, this is the first thing that needs to be addressed.

4. Do the daily total durations match?
No - The problem is most likely long duration calls or Late Disconnection FAS.

5. Can you identify a single call which does not match up correctly.
Yes - There is an issue with individual call rating.


