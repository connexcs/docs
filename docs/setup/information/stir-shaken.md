# STIR / SHAKEN Cert

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Setup & Configuration → Information → STIR/SHAKEN Cert<br>
<strong>Audience</strong>: Administrators, Engineers, Carrier / VoIP Originators<br>
<strong>Difficulty</strong>: Intermediate to Advanced<br>
<strong>Time Required</strong>: 15–30 minutes<br>
<strong>Prerequisites</strong>:<br>
<ul>
<li>A valid STIR/SHAKEN certificate issued by a recognised authority (e.g., Iconectiv as STI-PA in the U.S.).</li>
<li>Operating Company Number (OCN), FCC Form 499-A registration (for U.S.), and access to the certificate key/CSR process.</li>
<li>Access to the Connex Carrier Services (ConnexCS) control panel in the “Information → STIR/SHAKEN Cert” section to upload certificate and key.</li>
</ul>
<strong>Related Topics</strong>: <a href="https://docs.connexcs.com/customer/cli/">Caller Line Identification (CLI)</a> (integration of attestation and CLI rules), <a href="https://docs.connexcs.com/guides/stir-shaken-fcc/">New FCC Regulations on STIR/SHAKEN</a><br>
<strong>Next Steps</strong>: Configure STI/SHAKEN routing and attestation levels for your CLIs in <code>Customer → CLI</code> settings after certificate upload.<br>

</details>

**Setup :material-menu-right: Information :material-menu-right: STIR/SHAKEN Cert**

*(***STIR***: Secure Telephone Identity Revisited, ***SHAKEN***: Signature-based Handling of Asserted Information Using toKENs)*

The [**STIR / SHAKEN Cert**](https://docs.connexcs.com/setup/information/stir-shaken/#add-stir-shaken-cert) is a necessary prerequisite step for call origination providers to adopt to authenticate telephone calls in the future.

The adoption of this standard helps to mitigate spoofing, robocalling, scam calls, etc.

For more detailed information, see our article, [**FCC Regulations Regarding Robocalling (TRACED Act)**](/guides/stir-shaken-fcc).

*(***FCC***: Federal Communications Commission; ***Ofcom***: Office of Communications)*

ConnexCS doesn't provide the STIR / SHAKEN Certificate.

You must get it from a designated authority, such as Ofcom or the FCC (for the FCC, this began June 30, 2021).

Once you have the certificate, it's added to ConnexCS as described in the steps below.

!!! info "STIR/SHAKEN background"
    See Wikipedia [**STIR / SHAKEN**](https://en.wikipedia.org/wiki/STIR/SHAKEN) and the FCC [**Report on Selection of Governance Authority and Timely Deployment of SHAKEN/STIR**](https://docs.fcc.gov/public/attachments/DOC-350542A1.pdf) for details.

!!! Note
    [Click here](https://test-shaken.sansay.cloud) to test your Stir-Shaken.

## Add STIR / SHAKEN Cert

To add a certificate:

1. Click on the :fontawesome-plus: symbol.
2. Complete the **Name (indicated as "Alpha" in Control Panel)**, **Certificate**, and **Key** fields from the certificate provided by the issuing authority.
3. Click **`Save`**.

<img src= "/setup/img/stirshaken12.png" style="border: 2px solid #4472C4; border-radius: 8px;">
