# Table of Contents
* [Table of Contents](#table-of-contents)
* [Calling Card](#calling-card)
  * [Manage Calling Card](#manage-calling-card)
     * [Generate New](#generate-new)
     * [Edit a Card](#edit-a-card)
     * [Delete a Card](#delete-a-card)
     * [Refresh List](#refresh-list)
     * [Manage Columns](#manage-columns)
  * [Manage SIP Devices](#manage-sip-devices)
     * [Add Device](#add-device)
     * [View and Edit Device](#view-and-edit-device)
     * [Delete a Device](#delete-a-device)
     * [Search Device](#search-device)
     * [Refresh Device List](#refresh-device-list)
     * [Manage Columns](#manage-columns-1)


# Calling Card

A [calling card](https://en.wikipedia.org/wiki/Telephone_card) is a way of pre-allocating credit and configuration to a short unique identification method (e.g a PIN Code).

As **ConnexCS** is a class 4 switch it does not have IVR menu's required to access number configuration. Therefore currently calling cards are only available as a Mobile Phone Application.

## Mobile Application
In **ConnexCS** calling cards can be created in bulk and assigned with credit and routing configuration.

### Provisioning Strategy
The ConnexCS Mobile Dialler application (aka: name pending), can be downloaded from [url] and is white-labelled.

Once a provisioning code is entered the app will make a request to our servers to download 2 pieces of information:
- Branding information for the providing company.
- Provision information to auto-setup credentials.

### Top-up
Inside the application will be a HTML Browser which will connect to your pre-setup ConnexCS Portal. Here regular payment options will be available for topup.

# Make Your Own
Remember ConnexCS has a full API for both Users and your Customers. If you already have a softphone integration it can be integrated with ConnexCS API with end user credentials.

From dashboard, expand the Management tab and look for Calling Card. 
 
![alt text][cc-1]
 
This module allows you to perform following actions:
1)	Manage calling cards
2)	Manage SIP devices

Let’s discuss each one of the above in more detail.

## Managing Calling Cards

When you have to manage your calling cards, what you can do is:

a)	Generate a new card
b)	Edit a card
c)	Delete an existing card
d)	Refresh the list
e)	Manage columns

### Generate New

To generate a new calling card;
1.	Click on "Generate New" button, as highlighted in the image below.

![alt text][cc-2]

2.	A new modal would open to provide the required info.

![alt text][cc-3]
 
Here,

•	Any customer that exists in the database can be selected from the "Customer" dropdown.
•	While generating the card, its status can be set on the go as available, used, or disabled. Each status has its own assigned colour.

3.	When the required info is provided, click on "Save" button.

You are all set with generating a new card.

### Edit a Card

To edit any card; 
1.	Select any desired row and click on "Edit Selected Rows" button.
 
![alt text][cc-5]

2.	A new modal will open to edit the desired info.

![alt text][cc-6]
 
3.	Once you are done with editing, click on "Save" button to save the entries.
Note: Multiple rows can also be selected and edited accordingly, in one go.

### Delete a Card

To delete an existing card;

1.	Select the desired row to complete the action and click on trash icon.

![alt text][cc-4]

2.	A confirmation modal will open to proceed.

![alt text][cc-7]

3.	Confirm to delete the selected record and your entry will be deleted from the list.

### Refresh List

To refresh the list of calling cards, click on “Refresh” button to get the updated list.

![alt text][cc-8]
 
### Manage Columns

Columns settings can be made from three bars present on top right.

![alt text][cc-9]
 
You can set the list of columns that needs to be shown on the grid.
Moreover, each column can be sorted and can be hidden, as shown in the image below.

![alt text][cc-10]
 
## Manage SIP Devices

To manage SIP devices, the following actions can be performed.
a)	Add a device
b)	View and edit a device
c)	Delete a device
d)	Search devices
e)	Refresh the list
f)	Manage columns

### Add Device

To add a new SIP device:
1)	Click on Add Device button.

![alt text][cc-9]

2)	A form will open. Select the customer for whom the device is to be added, enter the rest of information and click on Save button.

![alt text][cc-10]

A new device for that particular customer will be saved.

![alt text][cc-12]

### View and Edit Device

1)	To view a device, click on the icon under "View Device" column.
2)	A form will open. Click on Edit button.
 
![alt text][cc-13] 
 
3)	On this page you can edit device information as well as can add a device line too and save accordingly.

### Delete a Device

To delete a device from the list, select any row and click on trash icon.

![alt text][cc-14]
 

### Search Device

To search a particular device, type in the search field and results will be filtered out.

![alt text][cc-15]
 
### Refresh Device List

To get the most updated list of devices, click on “Refresh” button.
 
![alt text][cc-16]
 
### Manage Columns

You can also manage columns and select which columns you want to see in the grid.

Click on 3 horizontal lines to select the columns.

Moreover, every column can be sorted separately, as shown in the image below.
 
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
[cc-18]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/209.png "CC-18"
[cc-19]: https://raw.githubusercontent.com/digipigeon/connexcs-user-docs/master/new-images/210.png "CC-19"




