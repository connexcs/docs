# Main

---

**Document Metadata**
<br>**Category**: Carrier Management / Termination & Origination</br> Configuration</br>
**Audience**: Administrators, Engineers, Support Team
<br>**Difficulty**: Intermediate to Advanced</br>
**Time Required**: Approximately 1–2 hours
<br>**Prerequisites**: Active ConnexCS account with Carrier-module access; understanding of SIP trunking, termination/origination flows, and provider configuration fundamentals.</br>
**Related Topics**: [Carrier Rate Cards](https://docs.connexcs.com/rate-card-building/), [Routing Overview](https://docs.connexcs.com/routing/)
<br>**Next Steps**: Add and configure carrier accounts, set up authentication (IP/SIP credentials), define channel/CPS limits, connect rate cards, and validate behaviour through Routing Tools, Logs, and Circuit Test.</br>

---

**Management :material-menu-right: Carrier :material-menu-right: Main**

## Configure Carrier

To configure a **Carrier**, select the Carrier from the list, then configure the following areas:

<img src= "/carrier/img/carriermain.png" style="border: 2px solid #4472C4; border-radius: 8px;">

+ **Contacts**: Helpful for keeping track of Support contacts for individual carriers.
+ **Rates Grid**: Associated rate cards for this provider. See [**Provider Rate Cards**](https://docs.connexcs.com/provider-ratecard/) for configuration.
+ **Code Consistency**: The purpose is to assess carrier reliability by comparing SIP 200 (OK) and 404 (Not Found) response codes. Consistent response codes help identify route quality and detect carriers who may misrepresent call outcomes.
    * **Analyzing Inconsistencies**: 200 vs. 404 Comparison: Our primary measure of code consistency. A clear distinction between 404 and 200 responses helps identify whether a provider is connecting calls inappropriately or mislabeling the status of a non-existent number.
This provider should have returned a 404 at least once for reliable data.
+ **Consecutive Failure**: Shows a count of failed calls based on specific SIP failure responses.  
  The counter doesn't include SIP 200 responses for connected calls.
  This simplistic measurement can measure a carrier's ability to connect calls or a particular route: a connected call resets the counter, a failed call increments the counter by one.
Some Fails aren't alarming, but be on the lookout for higher numbers in the thousands.

!!! note "Consec fails and false positives"
    This mechanism can show false positives if the customer sends missed call traffic or calls wrong numbers.

    The counter is a quick way to see if a route is failing, but you shouldn't use it as a comprehensive success monitor.

+ **Summary**: Display All calls through this carrier, whether in Live (last 24 hours), Daily, or Monthly formats are in 24-hour UTC. This data updates every hour.

!!! warning "Auto Generate Invoice"
    Don't use "Auto Generate Invoice" under the Carrier. You should manage invoices via the [**Customer Invoice**](https://docs.connexcs.com/customer/invoices/) section.  
