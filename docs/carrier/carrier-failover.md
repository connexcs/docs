# Failover

---

**Document Metadata**
**Category**: Carrier Management / Fail-over & Redundancy Configuration
**Audience**: Administrators, Engineers, Support Team
**Difficulty**: Intermediate to Advanced
**Time Required**: Approximately 1–2 hours
**Prerequisites**: Active ConnexCS account with Carrier-module access; understanding of SIP routing, carrier-failover strategies, and rate-card sequencing.
**Related Topics**: [Carrier Main Configuration](https://docs.connexcs.com/carrier/carrier-main/), [Reply Management](https://docs.connexcs.com/carrier/carrier-reply-management/)
**Next Steps**: Define fail-over settings for carriers (including alternative IPs or backup carriers), configure sequential fail-over logic per SIP response codes, test fail-over via real-call scenarios and monitor using fail-over logs.

---

**Management :material-menu-right: Carrier :material-menu-right: Failover**

<img src= "/carrier/img/carrierfailover.png" style="border: 2px solid #4472C4; border-radius: 8px;">

The **Failover** tab lists calls that failed with this carrier but connected with another carrier. This typically helps to troubleshoot an issue with the carrier that's failing the calls. You can also use this to identify FAS (False Answer Supervision) billing fraud.

!!! info "ConnexCS will halt routing on the following codes"
    - `3XX` (Re-write to 503)
    - `486`
    - `480`
    - `404`
