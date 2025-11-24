# Capacity Planning

---

**Document Metadata** <br>**Category**: Setup → Guides → Capacity Planning</br>
**Audience**: Administrators, Engineers, Infrastructure/Network Teams <br>**Difficulty**: Intermediate to Advanced</br>
**Time Required**: 15–30 minutes <br>**Prerequisites**: Understanding of VoIP/SIP traffic metrics (channels, CPS), existing traffic volumes and growth forecasts, basic infrastructure sizing knowledge <br>**Related Topics**: [Capacity Limiting](https://docs.connexcs.com/limiting-cps/) (for controlling CPS & channels), [Scaling & Load Balancing](https://docs.connexcs.com/scaling-load-balancing/) (for multi-server/zone scaling) <br>**Next Steps**: Collect your current usage metrics (calls per second, active channels, topologies), then model future growth and work with infrastructure/hosting to size accordingly.

---

Capacity planning is a way to extend our services in an advisory capacity.

It helps our customers choose the setup that works best for their business.

Shifting usage and the growing demands for scalability are always a consideration. But there is also the active management of changing traffic.

## Some Basic Capacity Planning Questions

**CAPACITY REQUIREMENTS**

1. The number of channels required?

2. The number of CPS required?

3. What's the ACD?

4. What's the ASR?

5. What percentage of this traffic is already running on your infrastructure?

6. Do all these calls require Media Proxy, if so please specify volumes?

7. Do you need Transcoding or Call Recording, if so please specify volumes?

**TOPOGRAPHICAL REQUIREMENTS**

1. Please list all your customers IP Addresses along with locations if known:

2. If the aforementioned traffic isn't equally distributed between all IP addresses, please provide a break down.

3. Please list all carriers IP addresses where this traffic is most likely going to get transmitted to, along with locations if known.

4. If the aforementioned traffic isn't equally distributed between all IP addresses, please provide a break down.

See [**Capacity Limiting**](/limiting-cps/) for tips on limiting usage.

## Migration Strategy

If a customer wants 1000 CPS, we need to know how are they going to pull up such a large volume in one go. It's advisable not to send large traffic volumes in one go to achieve success.
