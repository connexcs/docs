# Certificate
### Setup :material-mdi-menu-right: Information :material-mdi-menu-right: Certificate


Certificate management for public-key cryptography

Certificates ca be used in
* Customer Portal
* WebPhone
* TLS SIP
* WebRTC

ConnexCS provides certificates free of charge courtesy of [Let's Encrypt](https://letsencrypt.org/) or User Provided.

To add a certificate you can click on the :fontawesome-plus: symbol.

## Let's Encrypt

If you wish for us to manage the certificates for you you must ensure that the DNS records are correctly set to they are pointing to the correct server of ours.
After entering the domain name and clicking save our system will provision the certificate for you.

Renewals will be managed automatically.

## Use Provided

1. Enter the domain name for this certificate.
2. Ensure that you have user provided to set to "Yes".
3. Certificate and keys should be in PEM (base64 format).
4. Paste your certificate starting with `-----BEGIN CERTIFICATE-----` and ending with `-----END CERTIFICATE-----`.
5. Paste your private key starting with `-----BEGIN PRIVATE KEY-----` and ending with `-----END PRIVATE KEY-----`.
6. Paste in your Certificate Authority certificate starting with `-----BEGIN CERTIFICATE-----` and ending with `-----END CERTIFICATE-----`.

You will be responsible for renewing this certificate.

## Checking Certificate

The status column contains an icon :fontawesome-check: representing all checks having passed.

A problem is represented by :fontawesome-exclamation-triangle:. If you hover your mouse you will see a checklist explaining where the problem is.