# SIP Devices

**Management :material-menu-right: SIP Devices**

## Overview

**SIP (Session Initiation Protocol) devices** are essential components in VoIP networks, enabling seamless communication over IP-based networks.

These devices include physical desk phones, mobile devices, and other VoIP-enabled hardware.

ConnexCS provides a provisioning system to simplify device setup and management for customers and Managed Service Providers (MSPs).

SIP Devices allows providers the ability to set a config file for a wide range of SIP phone make and models.

!!! Example "Use Case Examples"
    1. **Efficient Deployment Strategy**:
          1. Pre-configure devices before shipment.
          2. Scan MAC addresses before dispatch.
          3. Modify configurations while devices are in transit.
          4. Customers receive plug-and-play devices, reducing setup time.

    2. **Remote Management Benefits**:
          1. Easily reassign devices to different users.
          2. Automatic nightly updates ensure accurate configurations.
          3. No need for manual on-site configuration.

## SIP Device Provisioning

**Key Features**:

**Automated Provisioning**: Devices automatically configure themselves when connected to the network.

**Remote Management**: Modify device settings remotely via the provisioning system.

**Device-Specific Configuration**: Custom variables allow personalized settings per device.

**Support for Multiple Device Types**: Hard phones, mobile devices (identified by IMEI), and other devices (identified by UUID).

**Audit Logs**: Track provisioning changes and updates.

### Provisioning Process

1. **Device Authentication**:

      + Customers can log in using assigned usernames and passwords.
      + Managed Service Providers (MSPs) can enter SIP phone details for their clients.

2. **Device Identification**:

      + Each device is identified uniquely using:
           + MAC Address (for hard phones)
           + IMEI Number (for mobile devices)
           + UUID (for other devices)

3. **Device Configuration**:

      + Assign a customer to the device.
      + Specify make and model.
      + Set the device status (active/inactive).
      + Define username and password for authentication.
      + Configure additional variables via Vars <sup>[Toml]</sup>.

4. **Billing and Packages**:

      + Assign rental packages to devices, ensuring automatic billing for leased hardware.

5. **Phone Book and Firmware Updates**:

      + **Phone Book URI**: Directs the device to a company directory for seamless contact management.
      + **Firmware URI**: Allows automatic firmware updates.

6. **Provisioning Endpoint**:

      + **Provision URI**: Endpoint where the device fetches its configuration settings from ConnexCS servers.

## Add SIP Device

### Device Line Configuration

+ **Key Features**:
    + Multiple lines per device.
    + Customizable settings per line.
    + NAT Traversal support using STUN

To add a new SIP device:

1. Click :material-plus:.

2. Specify the MAC / IMIE / UUID to directly provision a customer device.

    **MAC:** Media Access Control Address;
    **IMEI:** International Mobile Equipment Identity
    **UUID:** Universally Unique Identifier

3. Select the customer and enter any required information.

4. At the bottom of the edit screen, there is an **`Edit Device Item`** button that allows you to configure the Line #, Display Name, CLI, and other settings.

5. Click **`Save`**.

    ![alt text][sip-device]

!!! info "Advanced provisioning"
    Use the **Vars** field to configure custom parameters such as shared line extensions and customer Phonebook.

## View and edit Device

Allows you to view and edit device information, including the addition of device lines.

1. To view a device, select any device. A form appears.
2. Select **`Edit`**.

## Delete Device

To delete a device from the list, select any row and click the trash bin icon.

[sip-device]: /misc/img/sip-device.png "Edit SIP Devices"
