# DID Purchase

## Overview

The DID Purchase application allows customers to browse and acquire DIDs (phone numbers) that are made available by their carrier through the ConnexCS platform.

ConnexCS does not sell or resell DIDs directly — instead, it provides the infrastructure for carriers to list, manage, and distribute their own DID inventories to their customers.

Each DID may have a different subscription plan, which can include flexible billing options such as monthly, weekly, or daily cycles, depending on how the carrier has configured its offerings.

## Why Use DID Purchase?

Provisioning new phone numbers is often a manual, back-and-forth process involving support tickets or carrier portals. DID Purchase removes that friction by giving customers a self-service storefront for numbers, so they can:

* Search available DIDs by number prefix (e.g. area code or country code).
* View setup cost, recurring cost, and billing interval for each number before purchasing.
* Select one or multiple DIDs and add them to a cart.
* Review a running cart total, including setup cost, before checkout.
* Complete the purchase and provision the number without leaving the app.

## Key Features

* **DID Search**: Quickly find available numbers by entering a prefix, area code, or partial number in the search bar.

* **Transparent Pricing**: View the one-time **Setup Cost**, **Recurring** charge, and billing **Interval** (e.g. Month) for every number before adding it to the cart.

* **Multi-Select Purchasing**: Select multiple DIDs at once using checkboxes, allowing bulk purchases in a single transaction.

* **Live Shopping Cart**: See selected numbers, their pricing, and a running **Setup Total** update in real time as items are added or removed.

* **Flexible Checkout Flow**: Choose to **Add to Cart** and keep browsing, or jump straight to **Checkout** to complete the purchase immediately.

* **Self-Service Provisioning**: Numbers are purchased and provisioned directly through the app, without needing to raise a support request.

## Benefits

* Eliminates manual, ticket-based number requests.
* Gives customers full visibility into costs before committing to a purchase.
* Speeds up number acquisition with an instant, self-service checkout flow.
* Reduces administrative overhead for support and provisioning teams.
* Supports bulk purchasing for customers who need multiple numbers at once.
* Improves the overall customer experience with a familiar, e-commerce-style interface.

## Steps to Use the App

1. Navigate to **Setup :material-menu-right: App Store :material-menu-right: Yoco** and click `Install`. A window will open hit the `Install` button again. <br><img src= "/apps/img/didp1.png" width= "400" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

2. Click on the installed App and click on `Config`. <br><img src= "/apps/img/didp2.png" width= "400" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

3. A config window will open, prompting you to enter the following details:
      + `API User Token`: The ConnexCS API authentication token used by the DID Purchase app to communicate with the platform's DID provisioning API. The value is masked by default (click the eye icon to reveal it) and is **stored encrypted using AES-256-GCM**. It's tagged `ENCRYPTED`, indicating this field is never exposed in plain text once saved.
      + `Currency`: The ISO currency code (e.g. `USD`, `EUR`, `GBP`) used to display DID setup and recurring pricing throughout the app. Tagged `PUBLIC`, meaning this value is visible to end users.
      + `Mask Size`: The number of trailing digits to hide when displaying DID numbers in search results (e.g. showing `1423xxxxxxx` instead of the full number until purchased). Default appears to be `4`. Tagged `PUBLIC`, so this setting affects what end users see.
      + Click `Save Changes`. <br><img src= "/apps/img/didp3.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

4. Click on `App Settings`.
5. `Custom Domains`: The Custom Domains section allows a domain to be mapped to the application, enabling it to be served under a branded or dedicated hostname rather than a default system URL. This is applicable to customer-facing applications such as DID Purchase, which expose a storefront interface to end users.
   1. Selecting `+ Add` opens the `Add Domain` dialog.
   2. The Domain field accepts a fully qualified domain name (e.g. test.cnx.page).
   3. Upon creation, the application is automatically rebuilt and republished to bind the new domain. No manual redeployment step is required.
   4. If no domains are configured, the system displays: "*No custom domains configured yet*."
6. `Assigned Buttons`: The Assigned Buttons section lists the portal entry points registered to this application, indicating where end users can access it within the ConnexCS interface.<br><img src= "/apps/img/didp4.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>