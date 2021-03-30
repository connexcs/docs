# Number Manipulation

There are several methods that ConnexCS offers for number manipulation. 

All methods of number manipulation are performed within **Management :material-menu-right: Customer**:

+ Parameter Rewrite (add/remove): **Auth :material-menu-right: [IP or SIP] :material-menu-right: Parameter Rewrite**
+ Alias (modify): **Alias**
+ Routing (modify: **Routing :material-menu-right: CLI :material-menu-right: Rewrite CLI**


They are processed in the following order:
```mermaid
graph TD
A("1st: Parameter Rewrite") ==then==> B("2nd: Alias") ==then==> C("3rd: Routing")
style A fill:#ECEFF1,stroke:#0D47A1,stroke-width:4px
style B fill:#ECEFF1,stroke:#1976D2,stroke-width:4px
style C fill:#ECEFF1,stroke:#2196F3,stroke-width:4px
```

