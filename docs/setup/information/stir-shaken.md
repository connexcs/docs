# STIR / SHAKEN Cert

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

&emsp;![alt text][stirshaken]

[stirshaken]: /setup/img/stirshaken.png "Add Stir-Shaken Cert"
