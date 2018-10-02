# Table of Contents
- [Table of Contents](#table-of-contents)
- [Calling Card](#calling-card)
  - [Mobile Application](#mobile-application)
    - [Provisioning Strategy](#provisioning-strategy)
    - [Top-up](#top-up)
- [Make Your Own](#make-your-own)
  - [Managing Calling Cards](#managing-calling-cards)
    - [Generate New](#generate-new)
    - [Edit a Card](#edit-a-card)
    - [Delete a Card](#delete-a-card)
    - [Refresh List](#refresh-list)
  - [Manage SIP Devices](#manage-sip-devices)
    - [Add Device](#add-device)
    - [View and Edit Device](#view-and-edit-device)
    - [Delete a Device](#delete-a-device)
    - [Search Device](#search-device)
    - [Refresh Device List](#refresh-device-list)
    - [Manage Columns](#manage-columns)


# Calling Card

A [calling card](https://en.wikipedia.org/wiki/Telephone_card) is a way to pre-allocate credit and configuration data to a short, unique identification method, like a PIN code. **ConnexCS** is a Class 4 switch, so it is without the IVR menu's required to access number configuration. Currently, calling cards are only available as a mobile phone application.

## Mobile Application
In **ConnexCS**, calling cards are created in bulk, and then assigned with credit and routing configuration.

### Provisioning Strategy
The white-labeled ConnexCS Mobile Dialler application can be downloaded from [url]. 

Once a provisioning code is entered, the app  requests two pieces of information from our servers:
- Branding information for the providing company.
- Provision information to auto-setup credentials.

### Top-up
In the application, an HTML Browser connects to a pre-setup ConnexCS Portal, where regular payment options are available for top-up.

# Make Your Own
Remember, ConnexCS has a full API for users and customers, and softphone an be integrated with ConnexCS API with end user credentials.

From the dashboard, expand the Management tab and look for Calling Card. This module allows lets you manage calling cards and SIP devices. 

![alt text][cc-1]

## Managing Calling Cards

The following is a list of available actions in the calling card management screen, with explanations about how they work.

### Generate New Calling Card

To generate a new calling card:
1. From the dashboard, select **Management** > **Calling Cards**.
2. Click the **`+`** button.  An entry form open as shown below, requesting customer information.

![alt text][cc-3]

2.	The **Customer** box is a dropdown windown that lists available customers for the current system. Note the red asterisk that indicates it is the only required field to save a calling card.   
3. **Credit** is 
4. The **Count** is 
5.	A card's **Status** can be set to available, used, or disabled, and each status has its own assigned colour.
6. Click **`Save`**. 

### Edit a Card

Edits existing calling cards.  To edit a calling card:c
1.	Select a row and click **`Edit Selected Rows`**. An entry form opens to allow parameter edits.  Note that **Count** can no longer be changed.
3.	Click **`Save`**.

![alt text][cc-5]

### Delete a Card

Deletes an exiting card.  To complete this action:

1.	Select the desired row and click the trash bin icon.

![alt text][cc-6]

### Refresh List

Provides an updated list of calling cards, ensuring recent changes are presented.  To enact, simply click **`Refresh`**.

![alt text][cc-8]

## Manage SIP Devices

The following is a list of available actions in the SIP Device Management screen.

### Add Device

To add a new SIP device:
1.	Click the **`sip devices`** button.
2.	Click the **`+`** button.
1. A form will open. Select a customer and enter relevant information.
2. Click **`Save`**.

![alt text][cc-12]

### View and Edit Device
Lets you view and edit device information, including the addition of device lines.
1)	To view a device, select any device
2)	Select the **`Edit`** button from the form that opens.

![alt text][cc-13]

### Delete a Device

To delete a device from the list, select any row and click the trash bin icon.

![alt text][cc-14]


### Search Device

To search for a particular device, type its name in the search field to see filtered results.

![alt text][cc-15]

### Refresh Device List

For an updated list of devices, click the **`Refresh`** button.

![alt text][cc-16]

### Manage Columns

You can also manage columns, and select which columns to show on the grid by selecting the three horizontal lines.  Every column can be sorted separately:

![alt text][cc-17]   

[cc-1]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/193.png "CC-1"
[cc-2]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/194.png "CC-2"
[cc-3]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/195.png "CC-3"
[cc-4]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/196.png "CC-4"
[cc-5]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/197.png "CC-5"
[cc-6]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/198.png "CC-6"
[cc-7]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/199.png "CC-7"
[cc-8]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/200.png "CC-8"
[cc-9]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/201.png "CC-9"
[cc-10]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/202.png "CC-10"
[cc-12]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/203.png "CC-12"
[cc-13]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/204.png "CC-13"
[cc-14]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/205.png "CC-14"
[cc-15]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/206.png "CC-15"
[cc-16]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/207.png "CC-16"
[cc-17]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/208.png "CC-17"
