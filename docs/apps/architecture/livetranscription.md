# Live transcription via WebSocket

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Developer Guide / Real-Time Transcription & WebSocket Integration<br> <strong>Audience</strong>: Developers, Solutions Engineers, Technical Integrators<br> <strong>Difficulty</strong>: Intermediate to Advanced<br> <strong>Time Required</strong>: Approximately 20–30 minutes<br> <strong>Prerequisites</strong>: Access to platform control panel, familiarity with WebSocket concepts, basic scripting knowledge, and ability to generate JWT tokens<br> <strong>Related Topics</strong>: [Script Forge Overview](/apps/architecture/scriptforge/), [WebSocket Integration](/apps/architecture/cxWebSocket/), [JWT Authentication](/setup/integrations/jwt/#introduction)<br> <strong>Next Steps</strong>: Validate real-time transcription flow, integrate the WebSocket stream into your application (e.g., dashboards or analytics tools), implement error handling and reconnection logic, and secure token management for production use.<br>

</details>

## Overview

Live transcription via WebSocket enables real-time streaming of call transcripts as they are generated.

By combining transcription with a persistent WebSocket connection, transcription events can be captured instantly and delivered to external systems for immediate processing, monitoring, or display, eliminating the need to retrieve data after the call ends.

## What is this guide about?

This guide provides an introduction to setting up live call transcription streaming using WebSocket.

It outlines how to enable transcription, configure a Script Forge script to capture transcription events, and establish a secure connection to receive real-time data.
This setup allows systems to access and use call transcripts instantly as they are generated, enabling faster insights and real-time processing.

## How to Use?

### Step 1 — Enable transcription on a route

1. Navigate to **Management :material-menu-right: Customer :material-menu-right: Route**, open the route you want to transcribe, and enable the `Transcription` toggle.
2. Save the route.

### Step 2 — Create the Script Forge script

1. Go to **IDE :material-menu-right: Script Forge** and click **`+` Add Script**.
2. In the script settings, change the **App Type** dropdown to **App+**. This mode supports persistent WebSocket connections and the `cxWebSocket` and `cxPubSub` APIs.
3. Paste the script below and save.
4. After saving, copy the numeric **script ID** visible in the URL and script list (e.g. `10141`). You will need this in **Step 4**.

```js
import { publish, subscribe } from 'cxPubSub'
import * as socket from 'cxWebSocket'
export async function onData(data) {
    console.log({ data })
}
export async function main(data, ws) {
    console.log('socketrun')
    // Subscribe to all transcription events and forward them
    // to the connected WebSocket client as they arrive.
    const subscription = subscribe('transcription', '*', msg => socket.send(msg))
    // Keep the script alive until the client disconnects.
    await socket.waitForClose()
}
How it works: subscribe('transcription', '*', ...) listens for every transcription event on the internal bus. Each event is immediately forwarded over the open WebSocket connection via socket.send(). waitForClose() suspends execution until the client closes the connection, keeping the subscription alive.
After saving, copy the numeric script ID visible in the URL and script list (e.g. 10141). You will need this in Step 4.
import { publish, subscribe } from 'cxPubSub'
import * as socket from 'cxWebSocket'
export async function onData(data) {
    console.log({ data })
}
export async function main(data, ws) {
    console.log('socketrun')
    // Subscribe to all transcription events and forward them
    // to the connected WebSocket client as they arrive.
    const subscription = subscribe('transcription', '*', msg => socket.send(msg))
    // Keep the script alive until the client disconnects.
    await socket.waitForClose()
}
```

!!! Question "How it works"
    `subscribe('transcription', '*', ...)` listens for every transcription event on the internal bus. Each event is immediately forwarded over the open WebSocket connection via `socket.send()`. `waitForClose()` suspends execution until the client closes the connection, keeping the subscription alive.

### Step 3 — Get a JWT access token

1. Navigate to **Setup :material-menu-right: Integrations :material-menu-right: JWT Keys**. Generate or copy a key with type set to **Access Token**. This token is used to authenticate the WebSocket connection from your server.

!!! Warning "Warning"
    Keep this token secret. Anyone who holds it can connect to your Script Forge endpoint and receive live transcription data.

### Step 4 — Connect your WebSocket client

Install the `websocket-client` Python library and run the script below. Replace the `TOKEN` and the script ID in the URL with your own values.

**Install dependency:**
`pip install websocket-client`

**Python client — replace TOKEN and script ID (10141):**

```js
import websocket
import datetime

URL   = "wss://app.connexcs.com/api/cp/scriptforge/10141"   # ← your script ID
TOKEN = "eyJhbGci..."                                        # ← your JWT token

def on_open(ws):
    print(f"[{datetime.datetime.now()}] Connected")

def on_message(ws, message):
    print(f"[{datetime.datetime.now()}] {message}")

def on_error(ws, error):
    print(f"[ERROR] {error}")

def on_close(ws, code, reason):
    print(f"[CLOSED] code={code} reason={reason}")

ws = websocket.WebSocketApp(
    URL,
    header={"Authorization": f"Bearer {TOKEN}"},
    on_open=on_open,
    on_message=on_message,
    on_error=on_error,
    on_close=on_close
)
ws.run_forever()
```

**URL format**: `wss://app.connexcs.com/api/cp/scriptforge/{SCRIPT_ID}` — replace `{SCRIPT_ID}` with the numeric ID copied from **Step 2**. The `Authorization: Bearer` header carries the JWT token from **Step 3**.
