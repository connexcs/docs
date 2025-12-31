# Number Manipulation

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: ConnexCS Basics → Number Manipulation<br>
<strong>Audience</strong>: Administrators, Engineers, Support Team<br>
<strong>Difficulty</strong>: Intermediate<br>
<strong>Time Required</strong>: 5–10 minutes<br>
<strong>Prerequisites</strong>: Understanding of number formatting and call-routing prefixes; access to customer routing or CLI configuration sections.<br>
<strong>Related Topics</strong>: <a href="https://docs.connexcs.com/setup/advanced/prefix-set/">Prefix Set</a> (for prefix rules), <a href="https://docs.connexcs.com/customer/cli/">CLI / Number Rewrite Rules</a> (for CLI manipulation)<br>
<strong>Next Steps</strong>: Define your number formatting rules (e.g., strip leading zeros, add country code), then test routing flows to confirm correct number presentation.<br>

</details>

ConnexCS offers several methods for number manipulation.

You can perform all methods of number manipulation in **Management :material-menu-right: Customer**:

+ Parameter Rewrite (add / remove): **Auth :material-menu-right: [IP or SIP] :material-menu-right: Parameter Rewrite**
+ Alias (modify): **Alias**
+ Routing (modify: **Routing :material-menu-right: CLI :material-menu-right: Rewrite CLI**)

They're processed in the following order:
```mermaid
graph TD
A("1st: Parameter Rewrite") ==then==> B("2nd: Alias") 
B ==then==> C("3rd: Routing")
style A fill:#ECEFF1,stroke:#0D47A1,stroke-width:4px
style B fill:#ECEFF1,stroke:#1976D2,stroke-width:4px
style C fill:#ECEFF1,stroke:#2196F3,stroke-width:4px
```
