# Payment Log

**Setup :material-menu-right: Information :material-menu-right: Payment Log**

## Overview

The Payment Log captures and records all payment transactions processed via the system.

It integrates with multiple payment providers to ensure seamless financial operations.

Payments made through your customer portal or using PayPal Instant Payment Notification (IPN) get logged here for debugging purposes.

### Key Features & Benefits

+ **Multi-Gateway Integration**:
    + Supports standard PayPal (renamed to PayPal Express Checkout), PayPal IPN (Instant Payment Notification), Stripe, Moneris, and Razorpay.
    + Offers the flexibility to choose between live and test modes.

+ **Transaction Verification & Fee Management**:
    + The system logs back into PayPal to verify incoming transactions.
    + Option to deduct payment processor fees automatically.

+ **Dynamic Currency Options**:
  + Allows specification of acceptable currencies for incoming payments.
  + Ensures that financial records are maintained in the desired currency format.