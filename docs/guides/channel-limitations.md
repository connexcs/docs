# Channel Limitation Settings

---

**Document Metadata** <br>**Category**: Traffic & Call-Routing Management / Channel Limitations</br> **Audience**: Administrators, Network Engineers, Support Team <br>**Difficulty**: Intermediate</br> **Time Required**: Approximately 25–30 minutes <br>**Prerequisites**: Active ConnexCS account with access to Routing/Capacity modules, and the ability to view or configure channel limits (trunks, gateways, DID blocks)</br> **Related Topics**: [Limiting CPS (Calls Per Second)](https://docs.connexcs.com/limiting-cps/), [Monitoring & Alerts](https://docs.connexcs.com/guides/monitoring/) <br>**Next Steps**: After reviewing the channel-limitations guide, map your key trunks and gateways, document current channel limits, set threshold alerts for approaching capacity, and schedule a periodic review of trend behaviour and channel-utilisation trends.</br>

---

The ConnexCS platform allows you to apply channel limitations in multiple ways.

You can configure these limitations from the following locations:

1. **Customer Management**:
      1. **Basic Settings**: Management :material-menu-right: Customer :material-menu-right: Customer [Name] :material-menu-right: Main :material-menu-right: Edit :material-menu-right: Basic :material-menu-right: Channels.
      2. **IP Auth**: Management :material-menu-right: Customer :material-menu-right: Customer [Name] :material-menu-right: Auth :material-menu-right: IP Authentication :material-menu-right: blue `+` sign (new user) or existing user :material-menu-right: Basic :material-menu-right: Channels.
      3. **SIP Auth**: Management :material-menu-right: Customer :material-menu-right: Customer [Name] :material-menu-right: Auth :material-menu-right: SIP User Authentication :material-menu-right: blue `+` sign (new user) or existing user :material-menu-right: Basic :material-menu-right: Channels.
      4. **Ingress Routing**: Management :material-menu-right: Customer :material-menu-right: Customer [Name] :material-menu-right: Routing :material-menu-right: Ingress Routing :material-menu-right: blue `+` sign (new user) or existing user :material-menu-right: Capacity Limits :material-menu-right: Channels.
2. **Carrier Management**
      1. **Basic Settings**: Management :material-menu-right: Carrier :material-menu-right: Main :material-menu-right: blue `+` sign (new carrier) or existing carrier :material-menu-right: Edit :material-menu-right: Basic :material-menu-right: Channels.
      2. **Rate Grids**: Management :material-menu-right: Carrier :material-menu-right: Main :material-menu-right: Rate Grids (select a Rate Card) :material-menu-right: Properties :material-menu-right: Advanced :material-menu-right: Channels.
      3. **IP Auth**: Management :material-menu-right: Carrier :material-menu-right: Carrier [Name] :material-menu-right: Auth :material-menu-right: IP Authentication :material-menu-right: blue `+` sign (new user) or existing user :material-menu-right: Basic :material-menu-right: Channels.
      4. **SIP Auth**: Management :material-menu-right: Carrier :material-menu-right: Carrier [Name] :material-menu-right: Auth :material-menu-right: SIP User Authentication :material-menu-right: blue `+` sign (new user) or existing user :material-menu-right: Basic :material-menu-right: Channels.
