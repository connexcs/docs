# Apps

**Class 5 :material-menu-right: Apps**

The ConnexCS **Apps** feature allows providers to create small, simple, drag-and-drop applications and [ConneXML applications](https://docs.connexcs.com/class5/connexml/).
Some examples are Echo Tests, Conference, IVR setup.

## Build App

To create a new App:

1. Navigate to **Class 5 :material-menu-right: Apps**.
2. Click on the blue :material-plus: button.
3. Fill in the following details for the application.
    + **Name**: Enter the name of the application.
    + **Customer**: Select the customer from the drop-down list. By default, the app is available to all the customers.
    + **App Type**: Select the type of app you want to create from the drop-down **Call Flow** or **ConneXML**.
    + **Destination**: Enter the Extension for the callers to call (essentially, the dial-in number).
    + **PBX Server**: Select the relevant server for your customer.
4. Click **`Save`**.

<img src= "/class5/img/apps1.png" style="border: 2px solid #4472C4; border-radius: 8px;"> 

## Advanced Applications

To configure more complex applications, ConnexCS offers Class5 **[Programmable Voice](https://docs.connexcs.com/developers/scriptforge/#class-5-programmable-voice)** which allows you to build comprehensive applications using JavaScript.

## Class 5 Auto Add DNC for callback on IVR

In a Class 5 setup, you can configure an endpoint to redirect incoming calls to an IVR, where the caller can be added to the Do Not Call (DNC) list automatically.

## App Type

### Call Flow

A Call Flow App allows you to build Class 5 applications using a visual, **drag-and-drop editor**.

Each app is made by connecting nodes, where each node performs a specific telephony function.

By linking nodes together, you can design automated call handling, IVRs, announcements, tests, and more.

#### Node Types

|Node Type|Purpose|What It Does|Typical Use Cases|Config|
|---------|-------|------------|-----------------|------|
|**Echo**|Diagnostic media testing|Loops the caller’s RTP audio back to them without any modification|Latency/jitter testing, codec negotiation checks, RTP path validation|Not Applicable|
|**Audio**|Play pre-recorded messages|Streams a stored audio file or system prompt to the caller| Announcements, hold messages, compliance notices|`Audio`: Select the audio filefrom the drop-down menu|
|**Conference**|Multi-party communication  | Connects the caller to a conference room|Support bridges, team conferences, supervisor monitoring|[See **Conference Config** documentation](https://docs.connexcs.com/class5/creating-conference/#create-a-conference-call)|
|**TTS (Text-to-Speech)**|Dynamic spoken prompts| Converts text into synthesized speech and plays it to the caller| IVRs, OTP readouts, balance/usage announcements, automated alerts|`Text`: The exact message that the Text-to-Speech engine will read aloud|

#### Build your Call Flow App

1. Loign to your **Control Panel**.
2. Navigate to **Class 5 :material-menu-right: Apps**.
3. Click on blue `+` button.
4. A window will appear and prompt you to fill in the following fields:
      1. **Name** (*required*): Name of the Call Flow App.
      2. **Customer** (*optional*): Assign the app to a specific customer.
      3. **App Type** (*required*): Select `Call Flow` from the drop-down.
      4. **Destination** (*required*): Extension or dial-in number callers will dial.
      5. **PBX Server** (*required*): Choose the PBX server (Distributed server selects the closest one automatically).
      6. Click on `Save`.<br><img src= "/class5/img/callflow1.png" width= "900" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
5. After saving, the **Call Flow Editor** appears. This editor provides a canvas with draggable nodes you can connect to build your application logic.
6. The **black icon** on the canvas represents the **incoming call entry point**. When a caller dials the configured **Destination** `1234`, the system begins executing the nodes connected to this point.
7. **Example: Creating a Simple Call Flow**
      1. Drag the `TTS` node onto the canvas.
      2. Configure its `Text` field with the message you want the system to speak.
      3. Connect the TTS node to the incoming call entry point.
      4. Once connected, any inbound call will first hear the text spoken via TTS. <br><img src= "/class5/img/callflow2.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
      5. Drag the `Echo` node onto the canvas.
      6. Connect the Echo node to the TTS node.
      7. After the system speaks the TTS message, the call flows into the Echo node.
      8. Callers will hear their own voice repeated back, making it ideal for audio path testing. <br><img src= "/class5/img/callflow3.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
8. Additional Options: <br><img src= "/class5/img/callflow4.png" width= "300" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

### ConneXML

[Click here](https://docs.connexcs.com/class5/connexml/) to view the comprehensive guide on ConneXML.
