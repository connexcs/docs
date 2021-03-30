# Number Manipulation

There are several methods that ConnexCS offers for number manipulation. They are processed in the following order:
```mermaid
graph TD
A("1st: Parameter Rewrite (add/remove)") ==then==> B("2nd: Alias (modify)") ==then==> C("3rd: Routing (modify)")
style A fill:#ECEFF1,stroke:#0D47A1,stroke-width:4px
style B fill:#ECEFF1,stroke:#1976D2,stroke-width:4px
style C fill:#ECEFF1,stroke:#2196F3,stroke-width:4px
```

All methods of number maniulation are performed within **Management :material-menu-right: Customer**:

+ Parameter Rewrite: **Auth :material-menu-right: [IP or SIP] :material-menu-right: Parameter Rewrite**
+ Alias: **Alias**
+ Routing: **Routing :material-menu-right: CLI :material-menu-right: Rewrite CLI**
