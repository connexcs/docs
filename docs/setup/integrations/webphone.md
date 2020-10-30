# Web Phone
Setup :material-menu-right: Integrations :material-menu-right: Webphone

## Web Phone Technical Details

### Application
ConnexCS **WebPhone** is a WebRTC application using PWA. 

**WebRTC** (Real-Time Communications) is a browser protocol which runs on top of an HTTPS connection. ConnexCS **WebPhone** uses WebRTC (HTTPS port 443) for SIP Signaling and WebSockets (random UDP ports) for the Media.

!!! warning "BitDefender and WebSockets"
    BitDefender blocks WebSockets unless the phone. and webrtc. domains have been whitelisted. 

A [**PWA** (Progressive Web Application)](https://en.wikipedia.org/wiki/Progressive_web_application) is an application written inside the web browser. It uses modern API and has the potential to replace traditional proprietary app-stores.

The ConnexCS **WebPhone** runs directly from a browser without the need to install anything. If the user wishes to install the application, additional functionality can become available (ex: push notification capabilities while the app is closed).

This means that the application has cross-platform functionality, including Windows, Mac, Android, iOS, etc.

  
!!! warning "iOS limitations"
    iOS limits the ability to perform push notifications.
    

### State-level firewalls
WebRTC is effective for bypassing state-level firewalls by:

1. Running Signaling over a widely unblocked port (443).
2. Sending all Data (Signaling and Media) over an encrypted connection.

  

### Security and Encryption
ConnexCS **WebPhone** encrypts **all** information (Signaling & Media) between the browser and the ConnexCS platform. This is accomplished by leveraging TLS (Transport Layer Security) protocol support on the underlying browsers. Currently, all modern browsers support TLS 1.0, 1.1, 1.2 & 1.3.

MITM (Man-in-the-Middle) attacks actively intercept traffic between endpoints, while still operating within a TLS framework. This type of attack is counteracted with PKI (Public Key Infrastructure), a native HTTPS feature. PKI ensures end-point integrity, so you can be confident the endpoint you connect with is the one you expect without any intermediaries.

  
!!! note "TLS 1.3 Support"
    ConnexCS Currently does not support TLS 1.3. This functionality is scheduled to be completed by Q3 2020.
    
!!! tip "Debugging SIP Messages"
    If you need to debug the webphone and see the SIP messages, you can enter `*#0*#` into the dialpad, this will switch on debugging mode in the browser console.
    

## Web Phone Setup and Configuration

### Setup Domains

ConnexCS **WebPhone** needs 2 domains to function correctly:

* **Domain (A)** - This is the location where the phone will be hosted and needs to be provided to your customers. Create a CNAME on your domain pointing to `portal.connexcs.com.` (yes, this is the same as the customer portal).
* **Domain (B)** This is the signaling domain and is attached to your server. 

It is recommended to setup a DNS record within ConnexCS, then point a CNAME on your domain to the ConnexCS setup domain.

### Verify Certificates

After the domains are configured, verify the certificates are in the certificate page under Setup > Information > Certificates:

* If the domain is not listed, click on `Add Certificate`.
* If the certificates are listed but they don't have an issue or expiry date, click on "Refresh Certificates". This may take up to 10 minutes to complete.

### Enable WebRTC

To setup WebRTC on a server:

1. Ensure **Domain (B)** (signalling domain from above) points ONLY to the server where you enable WebRTC. 
2. Update your server at Setup > Settings > Servers > select the server then Edit:
   * Update the FQDN to the server
   * Ensure that both **TLS** and **WebRTC** are enabled
   * Run `Install Server` if any settings were changed

!!! tip "AnyEdge and WebRTC"
    If you are using AnyEdge, you can enable WebRTC automatically by adding a domain name to your AnyEdge Domain.

### Add WebPhone Domain

Once domains, certificates, and server settings are updated, we can add the WebPhone domain. 

1. Go to Setup > Integrations > WebPhone
1. For **Domain**, enter **Domain (A)** 
2. Set **WebRTC Host** as **Domain (B)**
3. Click **`Save`**

Your Web Phone should now be working. 

## Web Phone Configuration

Step 1: Set up CNAME record

1. Sign in to your domain's account at your domain host.
2. Locate the page for updating your domain's DNS records. The page might be called something like DNS Management, Name Server Management, or Advanced Settings.
3. Locate the CNAME records for your domain.
4. Add a new domain record, (such as `webphone.yourdomain.com`, where `yourdomain.com` is the domain that you own.
5. Point it towards `portal.connexcs.com.`
6. If you get asked for a TTL, we recommend setting this at 300 (seconds) - 5 minutes
7. Once the domain has been configired with your provider you can add it on ConnexCS.

!!! note
	Your Customer Portal must be exposed via a CNAME which you setup. This won't work with A records or pointing directly.
	
Step 2: Add Domain to Portal

1. Click the **`+`** button under **WebPhone**.
2. Enter the details in their respective fields of the ensuing window.
3. Click the **`Save`** button. A certificate will be issued for the domain soon afterwards

## Config Options
*Click each tab to view configuration details. 

=== "Basic"

    * **Domain** - The URL where the WebPhone is accessed (**Domain A** from the initial **WebPhone setup**).
    * **Brandname** - This is what will Display in the WebPhone. Your Account name will not be displayed.
    * **WebRTC Host** - The server address that you will be connecting to (**Domain B** from the initial **WebPhone setup**). This is always a domain name and can be pointed directly to a server or to AnyEdge.
    * **Template Customer** - A pre-configured customer on your account which is used to hold the default values for independently created customers. Available values for this template customer are:
    * Customer [Fields in the customer itself, such as debit limit]
    * Routes
    * Payments
    * Alerts
    * Packages
    * Contracts
    * **Register Success HTML** - The contents of this box will be displayed to users after they have completed their signup process.

    !!! example "Template Customer Example"
    You want to give all of your customers $5.00 credit. Create an account from: Management  Customer. Under Payments for that account, add $5.00. When a new customer creates an account from the Customer Portal, they will see a payment created for $5.00 at the same the time account was created.

=== "Menu"

    The bottom menu on the webphone is controled here

    * **Title** - The label used for this page.
    * **Icon** - The Icon disaplyed in this position. (Web Phone uses Material Design. If you wish to change an icon, you can find a list [here](https://cdn.materialdesignicons.com/5.2.45/).
    * **Position** - Determine Icon position, starting with 1 on the far left. Select Disabled if you don't wish to show this item.
    * **Template** - A Custom page can be used to display custom static & dynamic content. This is generated from a [template](/setup/config/templates/).

    !!! tip "Frameless iframe"
    We have implemented an edge case. If you wish for the custom page to be an `iframe`, you can use the following code to ensure that it fills up all the available space. Replace www.connexcs.com with the page you wish for it to display.
	```
	<!-- NO-CONTAINER -->
	<iframe src="https://www.connexcs.com" style="border: 0px; width: 100%;height: 100%"></iframe>
        ```	

    ![alt text][webphone] 

    
=== "Flags"

* **Hide UUID** - UUID is a unique deploy & version identifier, this is what you should ask your end user for if you need to report a problem to us. It is displayed in the side menu.
* **Menu Right** - Change the normally left menu into a right menu.
* **Display Balance** - Show the balance of the account.
* **Edit Settings** - As standard settings are non-editable, if you wish to allow a user to change settings, you can change this.
* **Register** - Allow registration of new accounts. - Alternatively only existing SIP Username / Passwords can login.
* **Username as Title** - Change the title of the page to the username logged in.
* **Accept Payment** - Accept payments on the softphone, similar to on the customer portal.
* **Auto Answer** - Automatically answer an incoming call.


[webphone]: /misc/img/webphone.png "WebPhone Menu"
