# Table of Contents
* [Table of Contents](#table-of-contents)
* [Calling Cards](#calling-cards)
  * [Mobile Application](#mobile-application)
    * [Provisioning Strategy](#provisioning-strategy)
    * [Top-up](#top-up)
* [Make Your Own](#make-your-own)

# Calling Cards
A [calling card](https://en.wikipedia.org/wiki/Telephone_card) is a method pre-allocating credit and configuration to a short unique identification method (e.g a PIN Code).

As ConnexCS is a class 4 switch it does not have IVR menu's required for access number configuration. Therefor currently calling cards are only available as an OPT application (aka Mobile Phone Application / Mobile Dialler).

## Mobile Application
In ConnexCS calling cards can be created in bulk and assigned with credit and routing configuration.

### Provisioning Strategy
The ConnexCS Mobile Dialler application (aka: name pending), can be downloaded from [url] and is white-labeled.

Once a provisioning code is entered the app will make a request to our servers to download 2 peices of information:
- Branding information for the providing company.
- Provision information to auto-setup credentials.

### Top-up
Inside the application will be a HTML Browser which will connect to your pre-setup ConnexCS Portal. Here regular payment options will be available for topup.

# Make Your Own
Remember ConnexCS has a full API for both Users and your Customers. If you already have a softphone integration it can be integrated with ConnexCS API with end user credentials.
