# Failover

**Management :material-menu-right: Carrier :material-menu-right: Failover**

<img src= "/carrier/img/carrierfailover.png" style="border: 2px solid #4472C4; border-radius: 8px;">

The **Failover** tab lists calls that failed with this carrier but connected with another carrier. This typically helps to troubleshoot an issue with the carrier that's failing the calls. You can also use this to identify FAS (False Answer Supervision) billing fraud.

!!! info "ConnexCS will halt routing on the following codes"
    - `3XX` (Re-write to 503)
    - `486`
    - `480`
    - `404`
