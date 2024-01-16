# Webphone

## Description

The Webphone is a SIP over WebRTC Softphone in the browser.

The Webphone component is available as an instant component with no programming required, or can be incrementally hidden and allows entire functionality delivered by the API.

It allows you to create a fully customised solution.

## Use Case

Add Audio/Video Bi-directional communication for use in:
OTT Mobile Application

1. Call Center Agent Dashboard
2. Click-2-Call
3. Live Website Help
4. Embedded Applications
5. Conference Applications

<img src= "/apps/components/img/webphone.png" width="300">

### Interactivity

## API

### Events

|**Name**|**Description**|
|------------------------|-----------------------------------------------------------|
|`onAnswer (detail)`|Triggers when a call is answered by the other party|
|`onRingingOut (detail)`|Triggers when 180/183 is receiver from the other party|
|`onRingingIn (detail)`| Triggers when an incoming call starts ringing|
|`onEnd (cdrDetails)`| After the call ends, provides the client CDR details|
|`onRegistered ()`| Triggers when SIP registration is successful|
|`onUnregistered ()`| Triggers when SIP is un-registration|
|`onError (error)`| Triggers on any internal error|

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

## Config

| **Name**| **Description**|**Icon**|
|-----------------------|----------------------------------------------------------------------------------------------------------------------------------------|------------|
|**ID**| This is a unique identifier which is used to access the field by the API and the key of the field when the form is saved|<img src= "/apps/components/img/input_id.png">|
|**Width**| [**Optional**] To set the width of the field|<img src= "/apps/components/img/input_width.png">|
|**Show (Dialpad)**<br>| Show a numeric dial-pad 0-9 # and *|<img src= "/apps/components/img/webphone_show.png">|
|**Show (Dialled Number)**| A text input box containing the number to be dialled|
|**Show (Answer)**| Show an Answer button|
|**Show (Hang Up)**| Show a Hang Up button|
|**Show (Hold)**| Show a Hold button (Places the call on a Network Level Hold)|
|**Show (Mute)**| Show a Mute Button (Mute microphone channel)|
|**Show (Dial)**| Show a Dial Button (Which is to be clicked on the start the call)|
|**Show (Status)**| Show the Registration and Call Status|
|**Auto Register**| Automatically register when credentials are presented|<img src= "/apps/components/img/webphone_autoregister.png">|
|**Default SIP Server**| The WebRTC socket to connect to (format: wss://sip.example.com), supports failover separated by a comma ','|<img src= "/apps/components/img/webphone_sipserver.png">|
|**Default Realm**| The Authorization Domain (usually the same as the host without the protocol, e.g sip.example.com)|<img src= "/apps/components/img/webphone_realm.png">|
|**Default Display Name**| The From Name on outgoing calls|<img src= "/apps/components/img/webphone_displayname.png">|
|**Default CLI**| The From Number on outbound calls|<img src= "/apps/components/img/webphone_cli.png">|
|**Default Username**| Username for SIP Authentication|<img src= "/apps/components/img/webphone_username.png">|
|**Default Password**| Password for SIP Authentication|<img src= "/apps/components/img/webphone_password.png">|
|**Attribute Action**|Enable **Hidden** action to hide the field|<img src= "/apps/components/img/alert_arrtibuteaction.png">|

## First time User?

If you are using the Page Builder components on the ConnexCS platform first time, we request you to use our guide on <a href="https://bani-appsection--connexcs-docs.netlify.app/apps/page-builder/#steps-to-use-components-in-the-page-builder" target="_blank">steps to use the Components</a>.