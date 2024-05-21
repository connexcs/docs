# WebPhone App

# Introduction

The ConnexCS WebPhone Application is fully customizable. It replaces the old legacy Web Phone Application.

Our new [Apps Platform](https://docs.connexcs.com/apps/introduction/) lets you build your ideal and robust WebPhone. You can configure the WebPhone that resonates with your preferences.

Customers can make calls over the internet with the ConnexCS WebPhone App (softphone). It operates straight from a browser, without the need to install any software.

This cross-platform application is ideal for call centers and similar deployments. It works with Windows, Mac, Android, iOS, and other operating systems.

## Technical Details

### Application

ConnexCS **WebPhone** is a PWA-based WebRTC application.

**WebRTC** (Real-Time Communications) is a browser protocol that runs on top of an HTTPS connection.

ConnexCS **WebPhone** uses WebRTC (HTTPS port 443) for SIP Signaling and WebSockets (random UDP ports) for the Media.

!!! warning "BitDefender and WebSockets"
    BitDefender blocks WebSockets unless the phone and WebRTC domains get whitelisted.

A [**PWA** (Progressive Web Application)](https://en.wikipedia.org/wiki/Progressive_web_application) is an application written inside the web browser, and it uses a modern API.

### State-level firewalls

WebRTC is effective for bypassing state-level firewalls by:

1. Running Signaling over a widely unblocked port (443).
2. Sending all Data (Signaling and Media) over an encrypted connection.

### Security and Encryption

ConnexCS **WebPhone** encrypts **all** information (Signaling & Media) between the browser and the ConnexCS platform.

You can achieve this by leveraging TLS (Transport Layer Security) protocol support on the underlying browsers. Presently, all modern browsers support TLS 1.0, 1.1, 1.2 & 1.3.

MITM (Man-in-the-Middle) attacks actively intercept traffic between endpoints, while still operating within a TLS framework. This kind of attack counteracts with PKI (Public Key Infrastructure), a native HTTPS feature.

PKI ensures end-point integrity, so you can be confident that the endpoint you connect with is the one you expect, without any intermediaries.

!!! tip "Debugging SIP Messages"
    If you need to debug Web Phone and see the SIP messages, you can enter `*#0*#` into the dial pad, this will switch on debugging mode in the browser console.

## Configure WebPhone

!!! tip
    Before you proceed with installing and using the WebPhone Application, make sure you meet the necessary prerequisites.

    1. A working ConnexCS account.
    
    2. Servers are deployed.
    
    3. WebRTC is configured. (Before proceeding, ensure that WebRTC is properly configured. If you haven’t set it up yet, click on the [link](https://docs.connexcs.com/webphone/#add-webrtc-to-server) to get started.)

### Step 1: Installing

1. Login to your account.
2. Navigate to **Setup** :material-menu-right: **App Store**. <img src= "/setup/img/wp1.png">
3. Click on **WebPhone**. <img src= "/setup/img/wp2.png">
4. Click **Install**.
5. After hitting the Install button. A window appears which has 2 fields, **App Name** and **Version**. We shall keep the default App name and the suggested version of the App.<br><img src= "/setup/img/wp3.png" width="600"></br>
6. Click on **Install** and the App will be installed on your user account. <img src= "/setup/img/wp4.png">

### Step 2: Publishing

1. Navigate to the **IDE** section, and from the dropdown select the **WebPhone App**.
2. Click on the **Domain**, and press the blue plus sign to add the domain of your WebPhone.
3. To keep things simple, we will use a top-level domain provider by ConnexCS.
4. Enter your unique name in the first part of the domain and we will deploy this for you on the **.cnx.page** domain.
5. Click on **Save**. <img src= "/setup/img/wp5.png">

!!! Note
    Please note you can change this later if you want to deploy this on your own domain.

### Step 3: Create Certificates

1. After you configure the domains, verify the certificates in **Setup :material-menu-right: Information :material-menu-right: Certificates:
2. If the domain isn't listed, click on `Add Certificate` and provide your domain name (for example: yourservername.host.connexcs.net).
3. If the certificates get listed but they don't have an issue or expiry date, click on "Refresh Certificates." This may take up to 10 minutes to complete.

### Step 4: Add WebRTC to server

To setup WebRTC on a server:

1. Ensure **Domain (B)** (signaling domain from above) points ONLY to the server where you enable WebRTC.
2. Navigate to **Setup :material-menu-right: Settings :material-menu-right: Servers :material-menu-right:** select the server, then Edit.
    * Update the FQDN (Fully Qualified Domain Name) to the server.
    * Ensure that you enable both **TLS** and **WebRTC**.
    * Run `Install Server` if any settings gets changed.

!!! tip "AnyEdge and WebRTC"
    If you are using AnyEdge, you can enable WebRTC automatically by adding a domain name to your AnyEdge Domain.

### Step 5: Configuring (Optional Step)

1. Go to **IDE :material-menu-right: WebPhone :material-menu-right: Environmental variables**.
2. Click on the blue plus sign to create a new variable.
3. A window will pop-up, where you need to enter the **key** as wsServers (example value) and **value** as yourservername.host.connexcs.net (example value). These values and will appear in the drop-down on the Webphone login-page.
    - Key = wsServers
    - Value = yourservername.host.connexcs.net (you can separate each with ' if there are multiple)
4. For selecting **Flags** [click here](https://docs.connexcs.com/apps/architecture/environmental-variables/#steps-for-configuring-the-variables).
5. Click on **Save**.

<img src= "/setup/img/wp10.png">

### Step 6: Login

1. Now let's have a look at the deployed domain.
2. Enter in the domain name in the URL e.g., webphone1.cnx.page.
3. Enter the **Username** and **Password**.
4. Select the **Server** from the dropdown. If you don’t want the customer to type-in the server, you can add the servers in the drop-down in the next step which is **Configuration**. You won't have the drop-down if you don’t fill out the information of the servers in the environmental variables.<br><img src= "/setup/img/wp7.png" width="600"></br>
5. After logging in you can dial from your WebPhone.<br><img src= "/setup/img/wp8.png" width="300"></br>


### Navigation

1. **Dialpad**: Dialpad for making and answering calls.
2. **Contacts**: This is the same Contacts database configured in **Class5 :material-menu-right: Phonebook**.
3. **Mic Off**: Mute the call.
4. **Hangup**: Disconnect the call.
5. **Call Hold**: Hold the call.

<img src= "/setup/img/wp9.png" width="300">