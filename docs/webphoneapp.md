# WebPhone App

# Introduction

The ConnexCS WebPhone Application is fully customizable. It replaces the old legacy Web Phone Application.

Our new [Apps Platform](https://docs.connexcs.com/apps/introduction/) lets you build your ideal and robust WebPhone. You can configure the WebPhone that resonates with your preferences.

Customers can make calls over the internet with the ConnexCS WebPhone App (softphone). It operates straight from a browser, without the need to install any software.

This cross-platform application is ideal for call centers and similar deployments. It works with Windows, Mac, Android, iOS, and other operating systems.

## Technical Details

### Application

ConnexCS **Web Phone** is a PWA-based WebRTC application.

**WebRTC** (Real-Time Communications) is a browser protocol that runs on top of an HTTPS connection.

ConnexCS **Web Phone** uses WebRTC (HTTPS port 443) for SIP Signaling and WebSockets (random UDP ports) for the Media.

!!! warning "BitDefender and WebSockets"
    BitDefender blocks WebSockets unless the phone and WebRTC domains get whitelisted.

A [**PWA** (Progressive Web Application)](https://en.wikipedia.org/wiki/Progressive_web_application) is an application written inside the web browser, and it uses a modern API.

### State-level firewalls

WebRTC is effective for bypassing state-level firewalls by:

1. Running Signaling over a widely unblocked port (443).
2. Sending all Data (Signaling and Media) over an encrypted connection.

### Security and Encryption

ConnexCS **Web Phone** encrypts **all** information (Signaling & Media) between the browser and the ConnexCS platform.

You can achieve this by leveraging TLS (Transport Layer Security) protocol support on the underlying browsers. Presently, all modern browsers support TLS 1.0, 1.1, 1.2 & 1.3.

MITM (Man-in-the-Middle) attacks actively intercept traffic between endpoints, while still operating within a TLS framework. This kind of attack counteracts with PKI (Public Key Infrastructure), a native HTTPS feature.

PKI ensures end-point integrity, so you can be confident that the endpoint you connect with is the one you expect, without any intermediaries.

!!! tip "Debugging SIP Messages"
    If you need to debug Web Phone and see the SIP messages, you can enter `*#0*#` into the dial pad, this will switch on debugging mode in the browser console.

## Navigation

## Enable Web Phone

### Setup Domains

ConnexCS **Web Phone** needs the following two domains to function efficiently:

1. **Web Server (Domain A):** This location hosts the phone, and the customers receives the URL. Create a CNAME on your domain, such as `webphone.yourdomain.com`, and point it to our web server at `portal.connexcs.com` (responsible for web services, and yes, this is the same as the customer portal).
2. **SIP Switch (Domain B):** Create the WebRTC domain and it's CNME should point towards the [DNS you create](https://docs.connexcs.com/setup/settings/dns/).

   2.1 Navigate to **Setup :material-menu-right: Settings :material-menu-right: DNS :material-menu-right:** to create your DNS.

   2.2 Enter the domain (ex: test1), then select the checkbox for the A record for the IP of the server you want to use.

 This is the SIP signaling domain (WebRTC) and attached to your server. Navigate to **Setup :material-menu-right: Settings :material-menu-right: DNS :material-menu-right:**. Enter the domain (ex: test1), then select the checkbox for the A record for the IP of the server you want to use.

It's recommended to setup a DNS (Domain Name System) record within ConnexCS, then point a CNAME on your domain to the ConnexCS setup domain.

### Create Certificates

After you configure the domains, verify the certificates in **Setup :material-menu-right: Information :material-menu-right: Certificates:

* If the domain isn't listed, click on `Add Certificate` and provide your domain name.
* If the certificates get listed but they don't have an issue or expiry date, click on "Refresh Certificates." This may take up to 10 minutes to complete.

## Configure Webphone (video script + photos)

!!! example "Template Customer Example"
        You want to give all your customers $5.00 credit. Create an account in **Management :material-menu-right: Customer**. In Payments for that account, add $5.00. When a new customer creates an account from the Customer Portal, they will see a payment created for $5.00 at the same the time account was created.

## Phone Book/Sync Directory

This is an interesting feature, that sync's the contacts which you add in the **Control Panel** to the **Webphone**.

1. Login to the **Control Panel**.
2. Navigate to **Management :material-menu-right: Customer :material-menu-right: Customer [Name] :material-menu-right: Class 5 :material-menu-right: Phonebook**.
3. Click on the blue `+` button on the right top. <img src= "/misc/img/ph1.png">
4. Enter the **Customer's Name** which is required field, remaining fields are optional.
5. Click `Save`. <img src= "/misc/img/ph2.png" width= "500">
6. Click on the **Phone Numbers** on the right-side. <img src= "/misc/img/ph3.png">
7. Click on the blue `+` button on the right top of the window.
8. Enter the **Name** and **Number** which are mandatory fields. You may also add the extension.
9. Click `Save`. <img src= "/misc/img/ph4.png">
10. Login to your **Webphone**.
11. Click on **Contacts**, and you will see the contact you added is now available on the **Webphone**.
<img src= "/misc/img/ph5.png">

<iframe width="560" height="315" src="/misc/img/ph0.mp4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>