# Web Phone

**Setup :material-menu-right: Integrations :material-menu-right: Web Phone**

The ConnexCS **Web Phone** runs directly from a browser without the need to install anything, allowing customers to make calls via the internet using a softphone.

If the user wishes to install the application, supplementary functionality becomes available.

For example, push notification capabilities while closing the app.

With application cross-platform functionality (including Windows, Mac, Android, iOS, etc.), this makes it ideal in call centres and other similar deployments.
  
!!! warning "iOS limitations"
    iOS limits the ability to perform push notifications.

## Technical Details

### Application

ConnexCS **Web Phone** is a PWA-based WebRTC application.

**WebRTC** (Real-Time Communications) is a browser protocol that runs on top of an HTTPS connection.

ConnexCS **Web Phone** uses WebRTC (HTTPS port 443) for SIP Signaling and WebSockets (random UDP ports) for the Media.

!!! warning "BitDefender and WebSockets"
    BitDefender blocks WebSockets unless the phone and webrtc domains get whitelisted.

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

Navigate using the following sections in the footer menu at the bottom of Web Phone (see Menu tab under [**Config Options**](https://docs.connexcs.com/webphone/#configure-web-phone) below to change how these get displayed):

* **Agent:** Preview dialer
* **History:** Previously dialed numbers and extensions
* **Dialpad**: Dialpad for making and answering calls
* **Contacts:** This is the same Contacts database configured in **Class5 :material-menu-right: Phonebook**
* **Settings:** View the Display Name, SIP information, and WS URL.

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

### Add WebRTC to server

To setup WebRTC on a server:

1. Ensure **Domain (B)** (signaling domain from above) points ONLY to the server where you enable WebRTC.
2. Navigate to **Setup :material-menu-right: Settings :material-menu-right: Servers :material-menu-right:** select the server, then Edit.
    * Update the FQDN (Fully Qualified Domain Name) to the server.
    * Ensure that you enable both **TLS** and **WebRTC**.
    * Run `Install Server` if any settings gets changed.

!!! tip "AnyEdge and WebRTC"
    If you are using AnyEdge, you can enable WebRTC automatically by adding a domain name to your AnyEdge Domain.

### Setup Web Phone Domain

Once domains, certificates, and server settings get updated, we can add the Web Phone domain.

1. Go to **Setup :material-menu-right: Integrations :material-menu-right: Web Phone**
2. For **Domain**, enter **Domain (A)**
3. Set **WebRTC Host** as **Domain (B)**
4. Click **`Save`**

Your Web Phone should now be available.

## Configure Web Phone

*Click each tab to view the configuration details.*

=== "Basic"

    * **Domain** - The URL where the Web Phone is accessed (**Domain A** from the initial **Web Phone setup**).
    * **Brand Name** - This is what will display in the Web Phone; it won't display your Account name.
    * **WebRTC Host** - The primary end point (server address) that you will connect to (**Domain B** from the initial **Setup Domains** above). This is always a domain name and can be pointed directly to a server or to AnyEdge.
    * **Template Customer** - A pre-configured customer on your account which is used to hold the default values for independently created customers. Available values for this template customer are:
        * Customer [Fields in the customer itself, such as debit limit]
        * Routes
        * Payments
        * Alerts
        * Packages
        * Contracts
    * **Register Success HTML** - Customize a message to display to customers once they have completed their signup process.

    &emsp;![alt text][webphone-basic]
    
    !!! example "Template Customer Example"
        You want to give all your customers $5.00 credit. Create an account in **Management :material-menu-right: Customer**. In Payments for that account, add $5.00. When a new customer creates an account from the Customer Portal, they will see a payment created for $5.00 at the same the time account was created.

=== "Menu"

    Configure the Web Phone footer menu:

    * **Title** - The label used for this page.
    * **Icon** - The Icon displayed in this position. (Web Phone uses Material Design. If you wish to change an icon, you can find a list [**here**](https://cdn.materialdesignicons.com/5.2.45/).
    * **Position** - Determine Icon position, starting with 1 on the far left. Select Disabled if you don't wish to show this item.
    * **Template** - A Custom page can be used to display custom static & dynamic content. These are pre-built in **Setup :material-menu-right: Config :material-menu-right: Template**.

    &emsp;![alt text][webphone] 
    
    !!! tip "Frameless iframe"
        We have implemented an edge case. If you wish for the custom page to be an `iframe`, you can use the following code to ensure that it fills up all the available space (replace www.connexcs.com with the page you wish to display):

	   ```bash
	   <!-- NO-CONTAINER -->
	   <iframe src="https://www.connexcs.com" style="border: 0px; width: 100%;height: 100%"></iframe>
       ```

=== "Advanced"
    * **Flags**- Select display options for WebPhone
        * `Hide UUID`: UUID is a unique deploy & version identifier, this is what you should ask your end user for if you need to report a problem to us. It's displayed in the side menu.
        * `Menu Right`: Change the left menu into a right menu.
        * `Display Balance`: Show the balance of the account.
        * `Edit Settings`: As standard settings are non-editable, if you wish to allow a user to change settings, you can change this.
        * `Register`: Allow registration of new accounts, or only existing SIP Username / Passwords can login.
        * `Username as Title`: Change the title of the page to the username logged in.
        * `Accept Payment`: Accept payments, same as on the customer portal.
        * `Auto Answer`: Automatically answer an incoming call.
    * **Restrict Customer Login:** Select existing Companies from the dropdown to allow them access to WebPhone. If no companies are on the list, then all will have access.

    &emsp;![alt text][webphone-adv] 

## Web Phone Software Developer Kit

The **Web Phone SDK (Software Developer Kit)** allows developers to integrate WebPhone into your own custom projects. This is available as part of the ConnexCS deployment at no extra charge.

The [**Web Phone SDK Connector**](https://webphone-sdk.connexcs.com/) provides the developer documentation required to place a call.

You will need to provide the full URL (for example, <http://domain.connexcs.com>) and credentials to access Web Phone from within the connector.

[webphone-basic]: /setup/img/webphone-basic.png "WebPhone Basic"
[webphone]: /setup/img/webphone.png "WebPhone Menu"
[webphone-adv]: /setup/img/webphone-adv.png "WebPhone Advanced"
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTgzOTUzNzA1OF19
-->