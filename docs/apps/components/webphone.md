# Webphone

## Description

The Webphone is a SIP over WebRTC softphone in the browser.

The Webphone component is available as an instant component with no programming required, or can be incrementally hidden and allows entire functionality delivered by the API, allowing you to create a fully customised solution.

## Use Case

Add Audio/Video Bi-directional communication for use in
- OTT Mobile Application
- Call Center Agent Dashboard
- Click-2-Call
- Live Website Help
- Embedded Applications
- Conference Applications

## Config

| Name                  | Description                                                                                                                            |
|-----------------------|----------------------------------------------------------------------------------------------------------------------------------------|
| ID                    | This is a unique identifier which is used which is used to access the field by the API and the key of the field when the form is saved |
| Show (Dialpad)        | Show a numeric dialpad 0-9 # and *                                                                                                     |
| Show (Dialled Number) | A text input box containing the number to be dialled                                                                                   |
| Show (Answer)         | Show an Answer button                                                                                                                  |
| Show (Hang Up)        | Show a Hang Up button                                                                                                                  |
| Show (Hold)           | Show a Hold button (Places the call on a Network Level Hold                                                                            |
| Show (Mute)           | Show a Mute Button (Mute microphone channel)                                                                                           |
| Show (Dial)           | Show a Dial Button (Which is to be clicked on the start the call)                                                                      |
| Show (Status)         | Show the Registration & Call Status                                                                                                    |
| Auto Register         | Automatically register when credentials are presented                                                                                  |
| Host                  | The webrtc socket to connect to (format: wss://sip.example.com), supports failover seperated by a comma ,                              |
| Username              | Username for SIP Authentication                                                                                                        |
| Password              | Password for SIP Authentication                                                                                                        |
| Display Name          | The From Name on outgoing calls                                                                                                        |
| Cli                   | The From Number on outbound calls                                                                                                      |
| Realm                 | The Authorization Domain (usually the same as the host without the protocol, e.g sip.example.com)                                      |


## Events

| Name                   | Description                                               |
|------------------------|-----------------------------------------------------------|
| onAnswer (detail)      | Triggers when a call is answered by the other party       |
| onRingingOut (detail)  | Triggers when 180/183 is reciever from the other party    |
| onRingingIn (detail)   | Triggers when an incoming call starts ringing             |
| onEnd (cdrDetails)     | Afte the call ends, provides the client CDR details       |
| onRegistered ()        | Triggers when SIP registration is successful              |
| onUnregistered ()      | Triggers when SIP is unregistration                       |
| onError (error)        | Triggers on any internal error                            |
