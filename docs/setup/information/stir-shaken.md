# STIR / SHAKEN Cert

**Setup :material-menu-right: Information :material-menu-right: STIR/SHAKEN Cert**

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Setup & Configuration → Information → STIR/SHAKEN Cert<br>
<strong>Audience</strong>: Administrators, Engineers, Carrier / VoIP Originators<br>
<strong>Difficulty</strong>: Intermediate to Advanced<br>
<strong>Time Required</strong>: 15–30 minutes (upload only); allow 2–4 weeks for certificate procurement if not already obtained<br>
<strong>Prerequisites</strong>:<br>
<ul>
<li>A valid STIR/SHAKEN certificate issued by a recognised STI-CA authority (e.g., <a href="https://authenticate.iconectiv.com/">Iconectiv</a> as STI-PA in the U.S.).</li>
<li>Operating Company Number (OCN) and FCC Form 499-A registration (U.S. providers only).</li>
<li>An SPC token issued by the STI-PA, required to obtain signing certificates.</li>
<li>Your certificate and private key in PEM format, ready to upload.</li>
<li>Active ConnexCS account with access to <strong>Setup → Information → STIR/SHAKEN Cert</strong>.</li>
</ul>
<strong>Related Topics</strong>: 
<a href="https://docs.connexcs.com/customer/cli/">Caller Line Identification (CLI)</a> — configure attestation levels per CLI after certificate upload · 
<a href="https://docs.connexcs.com/guides/stir-shaken-fcc/">New FCC Regulations on STIR/SHAKEN</a> — regulatory background and compliance obligations · 
<a href="https://docs.connexcs.com/setup/information/audit-log/">Audit Log</a> — review certificate changes and configuration events<br>
<strong>Next Steps</strong>: After uploading your certificate, configure attestation levels for your outbound CLIs at <a href="https://docs.connexcs.com/customer/cli/">Customer → CLI</a>. Then validate signing using a test call and SIP trace as described in the <a href="https://docs.connexcs.com/setup/information/stir-shaken/#testing-validation">Testing & Validation</a> section below.<br>
<strong>Need a Certificate?</strong>: ConnexCS can assist with certificate procurement. <a href="https://connexcs.com/contact-us">Contact us</a> or visit the <a href="https://authenticate.iconectiv.com/">Iconectiv STI-PA portal</a> to begin the process independently.<br>
<strong>Meta Description</strong>: Configure STIR/SHAKEN certificates in ConnexCS to authenticate outbound calls, assign attestation levels, and meet FCC and Ofcom compliance requirements.<br>

</details>

## Overview

**STIR/SHAKEN** is a framework designed to reduce caller ID spoofing and improve trust in voice communications.
It enables service providers to digitally sign outbound calls and verify inbound calls using SIP Identity headers and certificate-based authentication.

**STIR (Secure Telephone Identity Revisited)** defines how caller identity information is signed and transmitted, while **SHAKEN (Signature-based Handling of Asserted information using toKENs)** defines the operational framework used by service providers.

**Implementing STIR/SHAKEN helps providers**:

* Reduce robocalls and caller ID spoofing
* Improve call trust and answer rates
* Support regulatory compliance requirements
* Reduce spam labeling risks
* Improve call authentication visibility

The [**STIR / SHAKEN Cert**](https://docs.connexcs.com/setup/information/stir-shaken/#add-stir-shaken-cert) is a necessary prerequisite step for call origination providers to adopt to authenticate outbound telephone calls and improve caller identity trust.

The adoption of this standard helps to mitigate spoofing, robocalling, scam calls, etc.

For more detailed information, see our article, [**FCC Regulations Regarding Robocalling (TRACED Act)**](/guides/stir-shaken-fcc).

*(***FCC***: Federal Communications Commission; ***Ofcom***: Office of Communications)*

ConnexCS doesn't provide the STIR / SHAKEN Certificate. [Contact us](https://connexcs.com/contact-us) if you need further assistance.

You must get it from a designated authority, such as Ofcom or the FCC (for the FCC, this began June 30, 2021).

Once you have the certificate, it's added to ConnexCS as described in the steps below.

!!! info "STIR/SHAKEN background"
    See Wikipedia [**STIR / SHAKEN**](https://en.wikipedia.org/wiki/STIR/SHAKEN) and the FCC [**Report on Selection of Governance Authority and Timely Deployment of SHAKEN/STIR**](https://docs.fcc.gov/public/attachments/DOC-350542A1.pdf) for details.

!!! Note
    [Click here](https://test-shaken.sansay.cloud) to test your Stir-Shaken.

---

## How STIR/SHAKEN Works

The STIR/SHAKEN workflow generally follows these steps:

1. A call originates from a customer or carrier.
2. The originating provider validates the caller identity.
3. The provider assigns an attestation level.
4. ConnexCS generates a SIP Identity header containing a signed PASSporT token.
5. The downstream provider validates the signature using the public certificate.
6. The terminating provider determines whether the caller identity can be trusted.

This process helps downstream providers identify whether a call has been authenticated by the originating service provider.

---

## Attestation Levels

STIR/SHAKEN uses attestation levels to indicate the provider’s confidence in the caller identity.

| Level  | Description  |
| -------|------------- | 
| **A Attestation** | The provider has verified the customer identity and confirms the customer is authorized to use the caller ID. |
| **B Attestation** | The provider knows the customer but cannot fully verify ownership of the caller ID. |
| **C Attestation** | The provider received the call from another network and cannot verify the source or caller ID ownership. |

!!! Warning
    Incorrect attestation assignment may result in traffic blocking, spam labeling, or regulatory compliance issues.

---

## STIR/SHAKEN Call Flow

STIR/SHAKEN signing occurs during outbound SIP call processing.

The workflow includes:

* Caller identity validation
* PASSporT token generation
* SIP Identity header insertion
* Certificate-based digital signing
* Downstream verification

When the receiving provider receives the call, it validates the SIP Identity header using the originating provider’s public certificate.

If validation succeeds, the call may be treated as trusted traffic.

---

## Caller ID & Routing Considerations

Caller ID configuration directly affects STIR/SHAKEN behavior.

Important considerations:

* Invalid caller IDs may fail attestation validation
* Caller ID formatting should follow regional requirements
* Customer routing policies may affect attestation handling
* Upstream carriers may reject improperly signed traffic

Ensure outbound caller IDs are valid, authorized, and properly formatted before enabling STIR/SHAKEN signing.

---

## Common STIR/SHAKEN Issues

### Missing SIP Identity Header

Possible causes:

* STIR/SHAKEN not enabled
* Missing certificate configuration
* Invalid routing policy
* Unsupported SIP signaling path

Recommended checks:

* Verify certificate upload
* Confirm STIR/SHAKEN is enabled
* Review SIP traces
* Validate outbound routing configuration

---

### Certificate Validation Failure

Possible causes:

* Expired certificate
* Invalid SPC token
* Incorrect certificate upload
* Certificate mismatch

Recommended checks:

* Verify certificate expiration date
* Confirm uploaded certificate and key pair
* Validate SPC token assignment
* Re-upload certificates if necessary

---

### Invalid Attestation

Possible causes:

* Unauthorized caller ID
* Invalid customer CLI
* Incorrect attestation assignment

Recommended checks:

* Verify caller ID ownership
* Review attestation policy
* Confirm customer authorization

---

## Testing & Validation

After configuration, validate STIR/SHAKEN operation using SIP traces and test calls.

Recommended validation steps:

1. Place a test outbound call.
2. Capture the SIP INVITE.
3. Verify the presence of the SIP Identity header.
4. Confirm PASSporT information is included.
5. Validate attestation values.
6. Confirm downstream verification succeeds.

You can also use supported STIR/SHAKEN validation tools to confirm proper signing and verification behavior.

---

## Add STIR / SHAKEN Cert

To add a certificate:

1. Click on the :material-menu-right: symbol.
2. Complete the **Name (indicated as "Alpha" in Control Panel)**, **Certificate**, and **Key** fields from the certificate provided by the issuing authority.
3. Click **`Save`**.

<img src= "/setup/img/stirshaken12.png" style="border: 2px solid #4472C4; border-radius: 8px;">

## Operational Best Practices

* Keep certificates up to date
* Monitor certificate expiration dates
* Use appropriate attestation levels
* Validate customer caller IDs before signing
* Monitor rejected or spam-labeled traffic
* Regularly test STIR/SHAKEN verification flows

---

## Monitoring & Troubleshooting

Monitor the following for operational visibility:

* SIP Identity header presence
* Verification failures
* Certificate expiration
* Attestation mismatch events
* Rejected outbound calls
* Spam labeling patterns

SIP traces and call logs can help identify STIR/SHAKEN-related routing or authentication issues.
