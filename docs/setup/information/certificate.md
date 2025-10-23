# Certificate

**Setup :material-menu-right: Information :material-menu-right: Certificate**

## Overview

**Certificate** management for public-key cryptography, such as:

* Customer Portal
* WebPhone
* TLS SIP  
* WebRTC

It manages secure certificate deployment for the customer portal and related services.

Also ensures that end-user connections are protected via SSL/TLS.

*(**TLS**:Transport Layer Security, **SIP**: Session Initiation Protocol, **WebRTC**: Web Real-Time Communication)*

ConnexCS provides certificates free of charge courtesy of **[Let's Encrypt](https://letsencrypt.org/)** or User Provided.

### Key Features & Benefits

+ **Automated Certificate Deployment**:
    + Customers are asked to point a CNAME record (e.g., to portal.connectcs.com) to enable certificate provisioning.
    + Once the CNAME is in place, the system deploys a secure certificate automatically.

+ **Domain & Branding Synchronization**:
    + Certificate deployment is linked to domain and brand name settings.
    + Simplifies the process of establishing trust with end users.

+ **Development & Troubleshooting**: Provides visibility into certificate status (e.g., alerts when a certificate has expired during development).

## Add Certificate

To add a certificate:

1. Click on the :fontawesome-plus: symbol.
2. See the configuration details below to use either **Let's Encrypt** or a **User Provided** certificate.

### Let's Encrypt

1. Enter the **Domain** name for this certificate. To allow ConnexCS to manage your certificates, you must ensure that the DNS records are appropriately set to point to our server.
2. Set **User Provided** to "No."
3. Click **`Save`** and the system will provide you with the certificate.

**Let's Encrypt** renewals get  managed automatically.

### User Provided

1. Enter the domain name for this certificate.
2. Ensure that you have set **User Provided** to "Yes."
3. Certificate and keys should be in PEM (base64 format).
4. Enter your **Certificate** with the BEGIN and END tags as follows:

    ```bash
    -----BEGIN CERTIFICATE-----

    <enter certificate here>

    -----END CERTIFICATE-----
    ```

5. Enter your Private **Key** with the BEGIN and END tags as follows:

    ```bash
    -----BEGIN PRIVATE KEY-----

    <enter certificate here>

    -----END PRIVATE KEY-----
    ```

6. Enter your **CA(Certificate Authority) Certificate** with the BEGIN and END tags as follows:

    ```bash
    -----BEGIN CERTIFICATE-----

    <enter certificate here>

    -----END CERTIFICATE-----
    ```

Renewals for **User Provided** certificates are your responsibility.

## Checking Certificates

|Column|Description|
|------|-----------|
|**Domain**|Certificate domain name|
|**Name**|Either `Lets Encrypt` or `User Provided`|
|**Subject CN**|Refers to the Common Name (CN), which is a field within the subject of a certificate that identifies the specific domain name or entity the certificate is issued to, often matching the website's domain name|
|**Issued On**|Date when the certificate was issued|
|**Expires On**| Date when your certificate expires|
|**Status**| An alert associated with your certificate with needs correction, like if certificate is expired or domain name doesn't match with the subject|
|**Deployed**|If your certificate is deployed it will display a `check-circle` icon|