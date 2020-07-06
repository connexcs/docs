# WebPhone

ConnexCS **WebPhone** is a WebRTC application using PWA. 

**WebRTC** (Real-Time Communications) is a browser protocol which runs on top of an HTTPS connection. ConnexCS **WebPhone** uses WebRTC (HTTPS port 443) for SIP Signaling and WebSockets (random UDP ports) for the Media.

!!! warning "BitDefender and WebSockets"
    BitDefender blocks WebSockets unless the phone. and webrtc. domains have been whitelisted. 

A [**PWA** (Progressive Web Application)](https://en.wikipedia.org/wiki/Progressive_web_application) is an application written inside the web browser. It uses modern API and has the potential to replace traditional proprietary app-stores.

The ConnexCS **WebPhone** runs directly from a browser without the need to install anything. If the user wishes to install the application, additional functionality can become available (ex: push notification capabilities while the app is closed).

This means that the application has cross-platform functionality, including Windows, Mac, Android, iOS, etc.

  
!!! warning "iOS limitations"
    iOS limits the ability to perform push notifications.

## Setup

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

Your WebPhone should now be working. 

## Config Options

### Basic

* **Brandname** - This is what will Display in the WebPhone. Your Account name will not be displayed.
* **Domain** - The URL where the WebPhone is accessed (**Domain A** from the initial **WebPhone setup**).
* **WebRTC Host** - The server address that you will be connecting to (**Domain B** from the initial **WebPhone setup**). This is always a domain name and can be pointed directly to a server or to AnyEdge.
* **Template Customer** - The customer account in the system which can be setup with all the default options created for your new customer.
* **Register Success HTML** - The contents of this box will be displayed to users after they have completed their signup process.

### Menu

There are 6 spaces at the bottom of the screen for Icons to be displayed, each icon links to a separate page. Icon positions can be changed by using the position selector. You can change the label by changing the first column and the actual icon displayed by changing the text in the Icon column. ConnexCS uses "Material Icons". More icons are available [here](https://cdn.materialdesignicons.com/5.2.45/). 

![alt text][webphonemenu] 

### Custom Page using Templates

A Custom Page allows you to create a dynamically generated page from within ConnexCS. To set this up:

1.  Go to Setup > Config > Templates and click the add button.
2.  Fill in a name and create the page in the HTML box at the bottom.
3.  Under WebPhone go to Menu and select the template that you have just created at the bottom of the page.
4.  Choose a Custom Title, Custom Icon, and Position, and click **`Save`**.

  
### Flags

* **HIDE\_UUID** - A Unique identifier is available in the side menu which can be passed back to our team should we need to investigate any issues. This option hides the UUID from being displayed in the menu
* **Menu Right** - Switch the menu from the left side of the screen to the right
* **Display Balance** - Shows the account balance inside the WebPhone
* **Edit Settings** - Enabling this option will allow the Settings Page to be editable. (These are not editable by default after deployment.)
* **Register** - Enabling this option will require users who have not registered for any account to create an account all in the WebPhone. (WebPhone default allows existing users to login with a username & password.)
* **Username as Title** - Replaces the brand name with the username of the provisioned user.
* **Accept Payment** - Displays payment gateways (which have been configured in the API section) in the control panel


## State-level firewalls
WebRTC is effective for bypassing state-level firewalls by:

1. Running Signaling over a widely unblocked port (443).
2. Sending all Data (Signaling and Media) over an encrypted connection.

  

## Security and Encryption
ConnexCS **WebPhone** encrypts **all** information (Signaling & Media) between the browser and the ConnexCS platform. This is accomplished by leveraging TLS (Transport Layer Security) protocol support on the underlying browsers. Currently, all modern browsers support TLS 1.0, 1.1, 1.2 & 1.3.

MITM (Man-in-the-Middle) attacks actively intercept traffic between endpoints, while still operating within a TLS framework. This type of attack is counteracted with PKI (Public Key Infrastructure), a native HTTPS feature. PKI ensures end-point integrity, so you can be confident the endpoint you connect with is the one you expect without any intermediaries.

  
!!! note "TLS 1.3 Support"
    ConnexCS Currently does not support TLS 1.3. This functionality is scheduled to be completed by Q3 2020.
    
    
    
[webphonemenu]: /misc/img/webphone.png "WebPhone Menu"
