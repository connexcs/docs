# Billing Guide

See [**Connex Billing**](/billing) for details on Per Channel and Per Minute models.

See [**Credit Control**](/credit-control) for tips on managing customer credit.

## Call Detail Records

**Call Detail Records (CDRs)** are historical records of all calls in a given period. These are billable and are the suggested data set for referring to questions about billing and invoices.

See the [**Customer CDR**](/customer/cdr) for more details.

## Invoices

Use ConnexCS **Invoices** for basic invoicing functions.

See [**Customer :material-menu-right: Invoice**](/customer/invoices) for more details.

## Payments

Use **Payments** to view and approve payments made on customer accounts. See [**Customer  :material-menu-right:Payment**](/customer/payment) for more details.

## Vouchers

**Vouchers** function like calling cards, and you can also apply for credits.

See [**Topical Guides :material-menu-right: Billing :material-menu-right: Vouchers**](/voucher) for more details.

## Billing FAQ

Q: Why does my Balance show one thing, but the Summary shows something else? Which is correct?

A: The Balance (found at the top of Management :material-menu-right: Customer :material-menu-right: Main) is a floating balance. Every call that's placed decreases the balance while also writing a Record.

In contrast, Summary (on the right of the same page) is historic data (from Records) for all calls in that time that have gone through the final processing steps (for example, rounding, correcting double processing, etc).

The floating balance provides a rough estimate of the live Balance.

You shouldn't use Records to make a live balance because it's calculated from millions of calls per day. This isn't possible to do in real time.

It's not uncommon to see a difference between Balance and Summary. To take this into account, they're synced to reduce this "drift" between the two: each day, the Balance updates from the Record to maintain alignment.

In the end, the difference isn't likely to be a large amount.

It's important to note that when generating bills for customers, you should always use the historical Records in the Summary to ensure the most accurate billing.
