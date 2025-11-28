# Failover

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Carrier Management / Fail-over & Redundancy Configuration<br>
<strong>Audience</strong>: Administrators, Engineers, Support Team<br>
<strong>Difficulty</strong>: Intermediate to Advanced<br>
<strong>Time Required</strong>: Approximately 1–2 hours<br>
<strong>Prerequisites</strong>: Active ConnexCS account with Carrier-module access; understanding of SIP routing, carrier fail-over strategies, and rate-card sequencing<br>
<strong>Related Topics</strong>: <a href="https://docs.connexcs.com/carrier/carrier-main/">Carrier Main Configuration</a>, <a href="https://docs.connexcs.com/carrier/carrier-reply-management/">Reply Management</a><br>
<strong>Next Steps</strong>: Define fail-over settings for carriers (including alternative IPs or backup carriers), configure sequential fail-over logic per SIP response codes, test fail-over via real-call scenarios, and monitor using fail-over logs<br>

</details>

**Management :material-menu-right: Carrier :material-menu-right: Failover**

<img src= "/carrier/img/carrierfailover.png" style="border: 2px solid #4472C4; border-radius: 8px;">

The **Failover** tab lists calls that failed with this carrier but connected with another carrier. This typically helps to troubleshoot an issue with the carrier that's failing the calls. You can also use this to identify FAS (False Answer Supervision) billing fraud.

!!! info "ConnexCS will halt routing on the following codes"
    - `3XX` (Re-write to 503)
    - `486`
    - `480`
    - `404`
