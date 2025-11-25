# Session Initiation Protocol Devices

---

**Document Metadata** <br>**Category**: Infrastructure & Connectivity / SIP Devices</br> **Audience**: Network Engineers, Administrators, Support Team <br>**Difficulty**: Intermediate to Advanced</br> **Time Required**: Approximately 30–45 minutes <br>**Prerequisites**: Active ConnexCS account with permissions to manage SIP devices (DIDs, gateways, SIP-endpoints) and access to Device Configuration modules</br> **Related Topics**: [SIP Device](https://docs.connexcs.com/sip-devices/) <br>**Next Steps**: After configuring your SIP devices, perform end-to-end call tests (inbound/outbound), monitor device registration and usage in the Reporting module, and schedule regular review of firmware/firmware settings for security compliance.</br>

---

!!! danger "This feature is currently in Alpha Version. We're working on it. Please contact us for any queries."

**Management :material-menu-right: SIP Devices**

**SIP Devices** allows providers the ability to set a config file for a wide range of SIP phone make and models.

It's mainly used by MSPs (Managed Service Providers).

## Add Session Initiation Protocol Device

To add a new SIP device:

1. Click :material-plus:.

2. Specify the MAC / IMIE / UUID to directly provision a customer device.

    **MAC:** Media Access Control Address;
    **IMEI:** International Mobile Equipment Identity
    **UUID:** Universally Unique Identifier

3. Select the customer and enter any required information.

4. At the bottom of the edit screen, there is an **`Edit Device Item`** button that allows you to configure the Line #, Display Name, CLI, and other settings.

5. Click **`Save`**.

    <img src= "/misc/img/sip-device1.png" style="border: 2px solid #4472C4; border-radius: 8px;">

!!! info "Advanced provisioning"
    Use the **Vars** field to configure custom parameters such as shared line extensions and customer Phonebook.

## View and edit Device

Allows you to view and edit device information, including the addition of device lines.

1. To view a device, select any device. A form appears.
2. Select **`Edit`**.

## Delete Device

To delete a device from the list, select any row and click the trash bin icon.
