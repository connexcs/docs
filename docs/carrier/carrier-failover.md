# Failover

**Management :material-menu-right: Carrier :material-menu-right: Failover**

## Overview

The **Failover** tab lists calls that failed with this carrier but connected with another carrier.

This typically helps to troubleshoot an issue with the carrier that's failing the calls.

You can also use this to identify FAS (False Answer Supervision) billing fraud.

Failover is a powerful feature that enables seamless call routing between multiple carriers to ensure connectivity and optimize performance.


<img src= "/carrier/img/carrierfailover.png" style="border: 2px solid #4472C4; border-radius: 8px;">

!!! question "How Failover works?"
    1. Calls are initially routed through a primary carrier (e.g., Carrier B).
    2. If the call fails with Carrier B, it automatically attempts to connect via an alternative carrier (e.g., Carrier A).
    3. The failover list shows all calls that were initially attempted through a specific carrier but succeeded with another carrier.
    ```mermaid
    graph TD
    A[Incoming Call] --> B[Route via Primary Carrier - Carrier B]
    B -- Call Success --> C[Call Connected]
    B -- Call Failed --> D[Attempt Alternative Carrier - Carrier A]
    D -- Call Success --> C
    D -- Call Failed --> E[Call Failure Logged]

    C --> F[Update Call Records]
    C --> G[Record in Failover List if Carrier Switched]
    ```

## Key Features

+ **Automatic Call Rerouting**: Ensures that failed calls are attempted through backup carriers.
+ **Monitoring & Analysis**: Provides visibility into which calls failed and which carrier successfully connected them.
+ **Quality Assurance**: Identifies carriers that should have connected calls but didn’t, allowing for troubleshooting.

## Exception: False Answer Supervision (FAS)

**What is FAS?**
  
  + A fraudulent practice where a carrier connects a call to an unintended destination (e.g., a radio message or a low-cost number) instead of the intended recipient.
  
  + The caller is charged, but the carrier avoids paying termination fees.

**How FAS Affects Failover Reporting?**

+ Calls that appear in the failover list may include fraudulent connections from a carrier utilizing FAS.

+ Carrier A may falsely report calls as successfully connected when they weren't genuinely completed.

## Benefits of Failover

+ **Ensures High Call Completion Rates**: Reduces call failures by providing alternate routing options.
+ **Enhances Call Quality & Reliability**: Identifies problematic carriers and prevents routing through unreliable networks.
+ **Protects Against Fraudulent Practices**: Helps detect carriers engaging in FAS and mitigates financial loss.

!!! info "ConnexCS will halt routing on the following codes"
    - `3XX` (Re-write to 503)
    - `486`
    - `480`
    - `404`
