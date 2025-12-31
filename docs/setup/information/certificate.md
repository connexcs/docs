# Certificate

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Setup & Configuration → Information → Certificate<br>
<strong>Audience</strong>: Administrators, Engineers, Support Team<br>
<strong>Difficulty</strong>: Intermediate<br>
<strong>Time Required</strong>: 10–15 minutes<br>
<strong>Prerequisites</strong>: Access to the Setup → Information section of your ConnexCS Platform control panel; basic knowledge of TLS/SSL certificates and DNS domain configuration.<br>
<strong>Related Topics</strong>: <a href="https://docs.connexcs.com/webphone/">WebPhone Domain Setup</a> (requires certificate installation), <a href="https://docs.connexcs.com/setup/settings/servers/">Server Configuration – Certificates</a> (apply certificate to servers)<br>
<strong>Next Steps</strong>: Apply selected certificate to an appropriate server or Web domain after adding it — see Server Configuration or Domain Deployment sections.<br>

</details>

**Setup :material-menu-right: Information :material-menu-right: Certificate**

**Certificate** management for public-key cryptography, such as:

* Customer Portal
* WebPhone
* TLS SIP  
* WebRTC

*(**TLS**:Transport Layer Security, **SIP**: Session Initiation Protocol, **WebRTC**: Web Real-Time Communication)*

ConnexCS provides certificates free of charge courtesy of **[Let's Encrypt](https://letsencrypt.org/)** or User Provided.

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

The Status column has a :fontawesome-check: representing all passed checks.

The following exhibits a problem:
:fontawesome-exclamation-triangle:. If you hover your mouse, you will see a checklist explaining the issue.
