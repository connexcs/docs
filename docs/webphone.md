# WebPhone

ConnexCS **WebPhone** is a WebRTC application using PWA. 

**WebRTC** (Real-Time Communications) is a browser protocol which runs on top of an HTTPS connection. The ConnexCS **WebPhone** uses WebRTC (HTTPS port 443) for SIP Signaling and WebSockets (random UDP ports) for the Media.

A [**PWA** (Progressive Web Application)](https://en.wikipedia.org/wiki/Progressive_web_application) is an application written inside the web browser. It uses modern API and has the potential to replace traditional proprietary app-stores.

The ConnexCS **WebPhone** runs directly from a browser without the need to install anything. If the user wishes to install the application, additional functionality can become available. (Such as the capability to receive push notification messages when the app is closed).

This means that the application is functionality cross platforms, Windows, Mac, Android, iOS, etc.

  
!!! warning "Limitations"
    iOS limits the ability to perform push notifications

  

## State-level firewalls
WebRTC does better at bypassing state-level firewalls due to

1. Signaling running over a widely unblocked port 443.
2. All data (Signaling and Media) running over encrypted connection.

  

## Security and Encryption
ConnexCS **WebPhone** encrypts **all* information (Signaling & Media) between the browser and the ConnexCS platform. This is accomplished by leveraging TLS (Transport Layer Security) protocol support on the underlying browsers. Currently, all modern browsers support TLS 1.0, 1.1, 1.2 & 1.3.

MITM (Man-in-the-Middle) attacks actively intercept traffic between endpoints, while still operating within a TLS framework. This type of attack can be counteracted with PKI (Public Key Infrastructure), a native HTTPS features. PKI ensures end-point integrity, so you can be confident the endpoint you connect with is the one you expect without any intermediaries.

  
!!! note "TLS 1.3 Support"
    ConnexCS Currently does not support TLS 1.3, however this is expected to be completed by Q3 2020.
