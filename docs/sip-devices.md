# Session Initiation Protocol Devices

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
