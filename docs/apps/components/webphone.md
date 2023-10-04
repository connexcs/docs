# Webphone

## Description

The Webphone is a SIP over WebRTC Softphone in the browser.

The Webphone component is available as an instant component with no programming required, or can be incrementally hidden and allows entire functionality delivered by the API.

It allows you to create a fully customised solution.

## Use Case

Add Audio/Video Bi-directional communication for use in
- OTT Mobile Application
- Call Center Agent Dashboard
- Click-2-Call
- Live Website Help
- Embedded Applications
- Conference Applications

## API

### Config

| **Name**| **Description**|
|-----------------------|----------------------------------------------------------------------------------------------------------------------------------------|
|**ID**| This is a unique identifier which is used to access the field by the API and the key of the field when the form is saved|
|**Show (Dialpad)**| Show a numeric dial-pad 0-9 # and *|
|**Show (Dialled Number)**| A text input box containing the number to be dialled|
|**Show (Answer)**| Show an Answer button|
|**Show (Hang Up)**| Show a Hang Up button|
|**Show (Hold)**| Show a Hold button (Places the call on a Network Level Hold)|
|**Show (Mute)**| Show a Mute Button (Mute microphone channel)|
|**Show (Dial)**| Show a Dial Button (Which is to be clicked on the start the call)|
|**Show (Status)**| Show the Registration and Call Status|
|**Auto Register**| Automatically register when credentials are presented|
|**Host**| The WebRTC socket to connect to (format: wss://sip.example.com), supports failover separated by a comma ','|
|**Username**| Username for SIP Authentication|
|**Password**| Password for SIP Authentication|
|**Display Name**| The From Name on outgoing calls|
|**CLI**| The From Number on outbound calls|
| **Realm**| The Authorization Domain (usually the same as the host without the protocol, e.g sip.example.com)|

### Events

|**Name**|**Description**|
|------------------------|-----------------------------------------------------------|
|**onAnswer (detail)**|Triggers when a call is answered by the other party|
|**onRingingOut (detail)**|Triggers when 180/183 is receiver from the other party|
|**onRingingIn (detail)**| Triggers when an incoming call starts ringing|
|**onEnd (cdrDetails)**| After the call ends, provides the client CDR details|
|**onRegistered ()**| Triggers when SIP registration is successful|
|**onUnregistered ()**| Triggers when SIP is un-registration|
|**onError (error)**| Triggers on any internal error|

### Methods

|**Name**|**Description**|
|------------------------|-----------------------------------------------------------|
|**setConfig ({wsServers: String, username: String, password: String, displayName: String, cli: String, realm: String})**|This method is used to set the configuration for the communication component. The following parameters are required:|
||**wsServers**: A list of web sockets servers to connect to|
||**username**: The username to use to authenticate with the communication server|
||**password**: The password to use to authenticate with the communication server|
||**displayName**: The display name to use when communicating with other users|
||**cli**: The CLI to use for communication|
||**realm**: The realm to use for communication|
|**async register()**|This method is used to register with the communication server. This must be called before making any other calls to the communication component|
|**async unregister()**|This method is used to un-register from the communication server. This should be called when the communication component is no longer being used|
|**dialpadPress(digit String)**|This method is used to press a digit on the dial-pad. This can be used to dial a phone number or to enter DTMF tones|
|**answer()**|This method is used to answer an incoming call|
|**hangup()**|This method is used to hang up a call|
|**makeCall(address)**|This method is used to make a call to the specified address|
|**hold()**|This method is used to put the current call on hold|
|**mute**()|This method is used to mute the microphone|

### Interactivity