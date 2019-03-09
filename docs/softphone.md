-- Incomplete --

# ConnexCS Softphone

The ConnexCS Softphone is a Progressive Web Application provided free of charge and delivered via your customer portal.

As with most progressive web applications you can use the softphone without installation, however installing gives additional functionality (such as push notifications.

It is compatible with Chrome & Firefox on PC and Android & iOS on Mobile.

## Pre-requisites
- Setup Customer Portal
- Switch needs a FQDN set (this can be one which we provide, however the same name will have to be set in your portal as certificates are used and checked with WebRTC).
- WebRTC needs to be enabled on the server (and install ran after any config changes).

## Access

Once that is complete you can access the doftphone by going to. https://portal.yourdomain.com/softphone

## Provisioning Options

There are currently 3 ways your softphone can be provisioned.

### Existing

This will use an existing username & password combination setup for SIP Authentication. The system will automatically fill in the rest of the settings

### Code

Designed for calling card usage, the system will allow deployment (and account creation) and crediting an account based on a calling card which was generated. It will also add the appropriate amount of credit and mark the calling card as _Used_.

### SMS
For increased identifiability you can enforce that an SMS / Phone call is placed to a phone number before allowing an account to be created.

## Firewall Traversal / Bandwidth Saving / Security

- Firewall Traversal: By its design WebRTC runs over well known ports and uses the latest
technologies for traversing firewalls and NAT.

- Bandwidth Saving: Unlike add on technologies WebRTC uses modern codecs with dynamic compression built in, this allows dynamic utilisation of bandwidth allowances.

- Security: WebRTC signalling and media is encrypted ensuring high security intrinsic to the protocol.

## Setup Interface

## Softphone Interface
