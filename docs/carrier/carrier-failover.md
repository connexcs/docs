# Failover

**Management :material-menu-right: Carrier :material-menu-right: Failover**

## Overview

The Failover tab lists calls that failed with this carrier but connected with another carrier.

This typically helps to troubleshoot an issue with the carrier that's failing the calls.

You can also use this to identify FAS (False Answer Supervision) billing fraud.

<img src= "/carrier/img/carrierfailover.png" style="border: 2px solid #4472C4; border-radius: 8px;">

## False Answer Supervision (FAS)

**1. What is FAS?**

+ A fraudulent practice where a carrier connects a call to an unintended destination (e.g., a radio message or a low-cost number) instead of the intended recipient.

+ The caller is charged, but the carrier avoids paying termination fees.

**2. How FAS Affects Failover Reporting?**

+ Calls that appear in the failover list may include fraudulent connections from a carrier utilizing FAS.

+ Carrier A may falsely report calls as successfully connected when they weren't genuinely completed.

!!! info "ConnexCS will halt routing on the following codes"
    - `3XX` (Re-write to 503)
    - `486`
    - `480`
    - `404`
