# Class 4 Softswitch

---

**Document Metadata** <br>**Category**: Class 4 and Class 5 Specifications</br>
**Audience**: Administrators, Engineers, Architects, Integrators <br>**Difficulty**: Intermediate to Advanced <br>**Time Required**: 15–30 minutes <br>**Prerequisites**: Familiarity with telecom/VoIP terminology and switching architecture—specifically Class 4 softswitch concepts. <br>**Related Topics**: [Scaling & Load Balancing](https://docs.connexcs.com/scaling-load-balancing/) (for deployment architecture), [Security](https://docs.connexcs.com/security/) (for compliance and design boundaries) <br>**Next Steps**: Review the Switch Administration or API Specification sections to align implementation details with the architectural overview.

---

**ConnexCS** is a Class 4 Cloud-based Softswitch (software switch).

This means the call never terminates with the **ConnexCS** system.

The platform only handles call routing.

**Class 5 switches** perform call termination functions such as answering calls, playing messages, and more.

**ConnexCS** is delivered as a service, more precisely as a **PaaS (Platform as a Service)**.

It enables clients to deploy a massively scalable distributed system across the globe with minimal technical expertise.

!!! question "SBC, Class 4 Softswitch, or Proxy?"
    We've given extensive consideration to whether to brand our system as a Class 4 cloudswitch or an **SBC (Session Border Controller).**

    The typical Border part of the Session Border Controller blurs out because our platform delivers Over The Top (OTT), sitting on cloud architecture.
 An SBC is almost always a Class 4 switch, but a Class 4 switch doesn't have to be an SBC.

 You can also deploy Class 5 switches or your dialers to communicate using our Class 4 Switch.
