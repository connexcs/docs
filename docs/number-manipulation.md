# Number Manipulation

There are several methods that ConnexCS offers for number manipulation. All are found under Management :material-menu-right: Customer. 

|Order of Processing|Name and Action|Location|
|---|---|---|
|1|Parameter Rewrite (add or remove)|Auth :material-menu-right: [IP or SIP] :material-menu-right: Parameter Rewrite|
|2|Alias (modify)|Alias|
|3|Routing (modify)|Routing :material-menu-right: CLI :material-menu-right: Rewrite CLI|


graph TD
A("1st: Parameter Rewrite (add/remove)") -->|then| B("2nd: Alias (modify)") -->|then| C("Routing (modify)")
style A fill:#ECEFF1,stroke:#0D47A1,stroke-width:4px
style B fill:#ECEFF1,stroke:#1976D2,stroke-width:4px
style C fill:#ECEFF1,stroke:#2196F3,stroke-width:4px
linkStyle 0 stroke:#212121,stroke-width:2px
linkStyle 1 stroke:#212121,stroke-width:2px
