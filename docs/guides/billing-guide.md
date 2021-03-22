# Billing
See [**Connex Billing**](billing) for details on Per Channel and Per Minute models. 

See [**Credit Control**](/credit-control) for tips on managing customer credit. 

## CDRs
**Call Detail Records (CDRs)** are historical records of all calls in a given period. These have been rated as billable, and are the recommend data set for referencing for billing and invoice questions. See the [**Customer CDR**](/customer/cdr) for more details. 

## Invoices
Use ConnexCS **Invoices** for basic invoicing functions. See [**Customer :material-menu-right: Invoice**](/customer/invoices) for more details. 

## Payments
Use **Payments** to view and approved paymnets made on customer accounts. See [**Customer  :material-menu-right:Payment**](/customer/payment) for more details. 

## Vouchers
**Vouchers** function like calling cards and also allow you to apply credits. See [**Topical Guides :material-menu-right: Billing :material-menu-right: Vouchers**](/voucher) for more details. 

## Billing FAQ
Q: Why does my Balance show one thing but the Summary shows something else? Which is correct?
A: The Balance (found at the top of Management > Customer > Main) is a floating balance. Each call that gets made decrements the balance at the same time as writing a Record. In contrast, Summary (on the right of the same page) is historic data (from Records) for all calls in that time period which have gone through the final processing steps (ex: rounding, correcting double processing, etc). The floating balance is meant to be a rough estimate of the live Balance. Records can't be used to make a live balance because this has to be calculated from potentially millions of calls per day. This just isn't possible to do in real time. 

It is not uncommon to see a difference between Balance and Summary. To account for this, they are synchronized regularly to reduce this "drift" between the two: each day the Balance recalculates from the Record to keep them aligned. Ultimately, the difference is not likely to be a very large amount. 

It is important to note that when generating bills for customers, this should always be done using the historical Records in Summary to ensure the most accurate billing. 
