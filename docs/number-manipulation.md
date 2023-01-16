# Number Manipulation

ConnexCS offers several methods for number manipulation.

You can perform all methods of number manipulation in **Management :material-menu-right: Customer**:

+ Parameter Rewrite (add / remove): **Auth :material-menu-right: [IP or SIP] :material-menu-right: Parameter Rewrite**
+ Alias (modify): **Alias**
+ Routing (modify: **Routing :material-menu-right: CLI :material-menu-right: Rewrite CLI**

They're processed in the following order:
```mermaid
graph TD
A("1st: Parameter Rewrite") ==then==> B("2nd: Alias") 
B ==then==> C("3rd: Routing")
style A fill:#ECEFF1,stroke:#0D47A1,stroke-width:4px
style B fill:#ECEFF1,stroke:#1976D2,stroke-width:4px
style C fill:#ECEFF1,stroke:#2196F3,stroke-width:4px
```
