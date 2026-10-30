# WebPhone App

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Setup & Configuration → Integrations → WebPhone<br>
<strong>Audience</strong>: Administrators, Engineers, Support Team<br>
<strong>Difficulty</strong>: Intermediate<br>
<strong>Time Required</strong>: 20–30 minutes<br>
<strong>Prerequisites</strong>: ConnexCS account with WebRTC-capable server setup (TLS, WebSocket, DNS)<br>
<strong>Related Topics</strong>:
<a href="https://docs.connexcs.com/setup/integrations/api/">API & SDK Integrations</a> (for embedding WebPhone),
<a href="https://docs.connexcs.com/setup/information/certificate/">Certificates & Domain Setup</a><br>
<strong>Next Steps</strong>: <a href="https://docs.connexcs.com/webphoneapp/">WebPhone App Platform</a><br>

</details>

!!! Warning
    We advise users to switch to this new [App Platform](https://docs.connexcs.com/apps/introduction/) (WebPhone App) as the previous WebPhone development has been put on hold.

## Introduction

The ConnexCS WebPhone Application is fully customizable. It replaces the old legacy Web Phone Application.

Our new [Apps Platform](https://docs.connexcs.com/apps/introduction/) lets you build your ideal and robust WebPhone. You can configure the WebPhone that resonates with your preferences.

Customers can make calls over the internet with the ConnexCS WebPhone App (softphone). It operates straight from a browser, without the need to install any software.

This cross-platform application is ideal for call centers and similar deployments. It works with Windows, Mac, Android, iOS, and other operating systems.

The ConnexCS WebPhone is fully compatible with smartphones, ensuring seamless usability across mobile devices.

## Key Components

1. **WebRTC**: A technology that enables voice and video communication via a web browser.

2. **WebPhone**: A browser-based SIP client that serves as the user interface for making and receiving calls.

3. **SIP Server**: The backend component responsible for handling call signaling and connections.

4. **DNS Records**: Required to configure domain names for WebPhone and WebRTC services.

5. **Certificates**: Used for secure communications.

## Benefits and Features

1. **Seamless Browser-Based Communication**:
      + Eliminates the need for standalone SIP clients.
      + Works directly within modern web browsers.

2. **Automatic Certificate Deployment**: Ensures secure connections without manual intervention.

3. **Flexible DNS Configuration**:

      + CNAME records allow quick switching between servers in case of failures.
      + Users can update DNS settings via ConnexCS without downtime.

4. **Multi-Server Support**:

      + Customers can distribute traffic across multiple WebRTC servers.
      + Ensures redundancy and failover support.

## Technical Details

### Application

ConnexCS **WebPhone** is a PWA-based WebRTC application.

**WebRTC** (Real-Time Communications) is a browser protocol that runs on top of an HTTPS connection.

ConnexCS **WebPhone** uses WebRTC (HTTPS port 443) for SIP Signaling and WebSockets (random UDP ports) for the Media.

!!! warning "BitDefender and WebSockets"
    BitDefender blocks WebSockets unless the phone and WebRTC domains get whitelisted.

A [**PWA** (Progressive Web Application)](https://en.wikipedia.org/wiki/Progressive_web_application) is an application written inside the web browser, and it uses a modern API.

### State-level firewalls

WebRTC is effective for bypassing state-level firewalls by:

1. Running Signaling over a widely unblocked port (443).
2. Sending all Data (Signaling and Media) over an encrypted connection.

### Security and Encryption

ConnexCS **WebPhone** encrypts **all** information (Signaling & Media) between the browser and the ConnexCS platform.

You can achieve this by leveraging TLS (Transport Layer Security) protocol support on the underlying browsers. Presently, all modern browsers support TLS 1.0, 1.1, 1.2 & 1.3.

MITM (Man-in-the-Middle) attacks actively intercept traffic between endpoints, while still operating within a TLS framework. This kind of attack counteracts with PKI (Public Key Infrastructure), a native HTTPS feature.

PKI ensures end-point integrity, so you can be confident that the endpoint you connect with is the one you expect, without any intermediaries.

!!! tip "Debugging SIP Messages"
    If you need to debug Web Phone and see the SIP messages, you can enter `*#0*#` into the dial pad, this will switch on debugging mode in the browser console.

## Configure WebPhone

!!! tip
    Before you proceed with installing and using the WebPhone Application, make sure you meet the necessary prerequisites.

    1. A working ConnexCS account.
    
    2. Servers are deployed.
    
    3. WebRTC is configured. (Before proceeding, ensure that WebRTC is properly configured. If you haven’t set it up yet, click on the [link](https://docs.connexcs.com/webphone/#add-webrtc-to-server) to get started.)

### Step 1: Installing

1. Login to your account.
2. Navigate to **Setup** :material-menu-right: **App Store**.
3. Click on **Install**. <br><img src= "/setup/img/webnew6.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
4. Click **Install** again. <br><img src= "/setup/img/webnew7.png" width= "350" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
5. The WebPhone app is now installed. Click the installed app to continue with its configuration. <br><img src= "/setup/img/webnew1.png" width= "300" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

### Step 2: Configuration

1. Click on `Webphone Config`. Allows users to configure SIP server connections, WebSocket settings, general WebPhone behaviour, and custom domains.<br><img src= "/setup/img/webnew2.png" width="600" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
2. `Webphone Config`: <br><img src= "/setup/img/webphoneconfig.png" width= "450" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

   1. `SIP Servers`: Displays the SIP servers configured for the project. If no servers have been added, the message `No servers configured yet` is displayed.

   2. `Add New Server`: Allows users to configure and add a SIP server.

      1. `SIP Server`: Select the SIP server type from the drop-down list. The screenshot shows `Custom` selected.
      2. `Custom SIP Server`: Enter the hostname or address of the custom SIP server, such as `sip.example.com`.
      3. `WebSocket URL`: Enter the WebSocket URL used by the WebPhone to connect to the SIP server, such as `wss://sip.example.com`.
      4. `Add Server`: Adds the configured SIP server to the list. The button appears disabled until the required information is provided.

   3. `General Settings`: Allows users to configure the general behaviour of the WebPhone.

      1. `Use CLI as Username`: When enabled, uses the Username value as the Calling Line Identification (CLI) instead of requiring a separate CLI value.
         - `Enabled`: The setting is active.
         - `Disabled`: The setting is inactive.
      2. `Debug Mode`: Enables verbose JsSIP debug logging in the browser console for all WebPhone users.
         - `Enabled`: Verbose debug logging is enabled.
         - `Disabled`: Verbose debug logging is disabled.
      3. `Registration Expiry (seconds)`: Specifies how long each SIP REGISTER request remains valid before the WebPhone re-registers. The screenshot shows `600` seconds as the default value. The displayed guidance indicates a configurable range of `60–3600` seconds.

   4. `Domain Configuration`: Allows users to manage custom domains for the project.

      1. `Configured Domains`: Displays the custom domains already configured for the project. If no domains have been added, the message `No domains configured yet` is displayed.
      2. `Add New Domain`: Enter the domain name to add, such as `example.com`.
      3. `Add`: Adds the entered domain to the project's domain configuration. The button appears disabled until the required information is provided.

!!! Note "Please note you can change this later if you want to deploy this on your own domain."

### Step 3: Create Certificates

There are 2 ways to create a certificate:

1. Use ConnexCS's domain, for example `yourservername.host.connexcs.net`.

2. Use your own domain.

      1. **SIP Switch (Domain B):** Create the WebRTC domain and it's CNAME should point towards the [DNS you create](https://docs.connexcs.com/setup/settings/dns/).

           1. Navigate to **Setup :material-menu-right: Settings :material-menu-right: DNS :material-menu-right:** to create your DNS.

           2. Enter the domain (ex: test1), then select the checkbox for the A record for the IP of the server you want to use.
           3. Setup a DNS (Domain Name System) record within ConnexCS, then point a `CNAME` on your domain to the ConnexCS setup domain.

      2. After you configure the domains, verify the certificates in **Setup :material-menu-right: Information :material-menu-right: Certificates**.

### Step 4: Add WebRTC to server

To setup WebRTC on a server:

1. Ensure **Domain (B)** (signaling domain from above) points ONLY to the server where you enable WebRTC.
2. Navigate to **Setup :material-menu-right: Settings :material-menu-right: Servers :material-menu-right:** select the server, then Edit.
    * Update the FQDN (Fully Qualified Domain Name) to the server.
    * Ensure that you enable both **TLS** and **WebRTC**.
    * Run `Install Server` if any settings gets changed.

!!! tip "AnyEdge and WebRTC"
    If you are using AnyEdge, you can enable WebRTC automatically by adding a domain name to your AnyEdge Domain.

#### Custom Domain Setup

**Step 1: Set up the CNAME record**

1. Access your domain account at your domain host.

2. Locate the page for updating your domain's DNS (Domain Name System) records.

3. Locate the `CNAME` records for your domain.

4. Add a new domain record such as `app.mycustomdomain.com`.

5. Point it toward `cnx.page`.

**Step 2: Add a Domain to App**

[Click here](https://docs.connexcs.com/apps/architecture/domain/#steps-for-setting-up-the-domain) to check the steps for adding the Domain to your App.

### Step 5: Login

1. Now let's have a look at the deployed domain.
2. Enter in the domain name in the URL e.g., `test4.cnx.page`.
3. A login window will appear withe th following fields: <br><img src= "/setup/img/webphonecalllogs.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
   1. Select a **Server** from the dropdown if `multiple servers` are available. If only `one server` has been added, it is selected automatically. If `no servers` have been added, you will need to enter the server details manually.
   2. Enter the **SIP Username**.
   3. Enter the **Password**.
   4. Enter the **CLI** *only if* the `Use CLI as Username` setting is **enabled**.
4. After logging in you can dial from your WebPhone. <br><img src= "/setup/img/webnew4.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

#### Navigation

> **Note**: When Debug Mode is enabled, the Console option becomes available, displaying call-related information that you can use to troubleshoot and debug calls.

1. **Dialpad**: Dialpad for making and answering calls.
2. **Call Logs**: Displays call records in ConnexCS for monitoring call activity, reviewing outcomes, and troubleshooting call-related issues. <br><img src= "/setup/img/webphonecalllogs1.png" width= "500" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
3. **Mic Off**: Mute the call.
4. **Hangup**: Disconnect the call.
5. **Call Hold**: Hold the call.
6. **Clipboard**: When you copy something on your computer, it's stored on the clipboard. You can then paste it on the Webphone.
7. **Log Out** (top-right): Click on this button to sign out of the Webphone.
8. **Current Call Time**: Displays the duration of the ongoing call. <br><img src= "/setup/img/webphonecall.png" width= "500" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

## Troubleshooting Logs

Troubleshooting Logs in ConnexCS WebPhone provide diagnostic information about calls made or received during the current session.

Users can review call status, termination details, call timing, and a chronological timeline of call events to understand how a call progressed and identify potential issues.

The logs remain in memory for the current session only. Users can inspect individual call records, copy the diagnostic information, or download a call log for further analysis.

### Key Features

- **Call history**: Displays calls captured during the current WebPhone session.
- **Call status**: Identifies the call outcome, such as a normal termination.
- **Call details**: Displays information such as call direction, number, start time, answer time, talk time, and termination cause.
- **Event timeline**: Shows call events in chronological order with timestamps.
- **Copy logs**: Copies the available call log information for further investigation.
- **Download call log**: Downloads the diagnostic information for offline review.
- **Session-based storage**: Keeps troubleshooting logs in memory for the current session only.

### How to Use?

#### Step 1 — Open Troubleshooting Logs

1. Open ConnexCS WebPhone.
2. Open the navigation menu.
3. Select **Troubleshooting Logs**, labelled **Why a call failed**. <br><img src= "/setup/img/webphonetroubleshooting1.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

### Step 2 — Review the call list

The Troubleshooting Logs panel displays the calls captured during the current session.

Each call entry includes the following information:

| Field | Description |
|---|---|
| **Number** | Displays the phone number or destination associated with the call. |
| **Call summary** | Provides a brief description of the call outcome, such as `Hung up from this webphone`. |
| **Date and time** | Displays when the call event occurred. |
| **Status label** | Indicates the call classification, such as `Normal`. |
| **Arrow (>)** | Opens the detailed troubleshooting information for the selected call. |

The panel also includes a close (**X**) button to close the troubleshooting view.

**Screenshot explanation:**

The example shows call `160`, with the summary `Hung up from this webphone`, recorded on October 29, 2026, at 6:47:34 PM. The `Normal` status indicates that the call ended normally rather than being identified as a failure. <br><img src= "/setup/img/webphonetroubleshooting2.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

### Step 3 — Inspect the call details

1. In the Troubleshooting Logs panel, select the call you want to investigate.
2. The call details view opens.
3. Review the call status, call information, and event timeline. <br><img src= "/setup/img/webphonetroubleshooting3.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

#### Call status summary

The top section displays a status message explaining the call outcome.

In the example screenshot:

- **Source: Normal**: Identifies the classification assigned to the call.
- **Hung up from this webphone**: Indicates that the WebPhone user ended the call.
- **Status description**: Explains that the call connected and ended normally through the WebPhone.

The status summary helps determine whether the call completed as expected before examining the detailed events.

#### Call details fields

| Field | Description |
|---|---|
| **Direction** | Indicates whether the call was outgoing or incoming. |
| **Number** | Displays the number associated with the call. |
| **Started** | Displays the date and time when the call started. |
| **Answered after** | Displays the elapsed time between call initiation and answer. |
| **Talk time** | Displays the duration of the connected conversation. |
| **Ended by** | Identifies the endpoint or party recorded as ending the call, such as WebPhone. |
| **Cause** | Displays the recorded call termination cause, such as `Terminated`. |
| **Call-ID** | Displays the call identifier when available. This can help correlate the call with other diagnostic records. |

**Screenshot explanation:**

The example shows an outgoing call to `160`. The call was answered after approximately 1.9 seconds, remained connected for 7.2 seconds, and was ended by the WebPhone. The recorded cause is `Terminated`.

These fields provide a summary of the call lifecycle and help distinguish between call setup issues, answer delays, and call termination events.

### Step 4 — Review the event timeline

The **Timeline** section displays call events in chronological order. Each entry includes a relative timestamp and a description of the event.

The example screenshot shows the following sequence:

| Timestamp | Event | Explanation |
|---|---|---|
| `+0.000s` | WebPhone sent call request (INVITE) upstream | The WebPhone initiated the call by sending a SIP INVITE request. |
| `+1.894s` | Media connectivity (ICE): checking | The WebPhone began checking possible network paths for media connectivity. |
| `+1.909s` | Call answered (200 OK) | A successful SIP response indicated that the call was answered. |
| `+1.911s` | Call confirmed (ACK) | The WebPhone sent an acknowledgement confirming the successful call setup. |
| `+2.043s` | Media connectivity (ICE): connected | The media connectivity check completed successfully. |
| `+9.137s` | User pressed hang up — sending BYE | The WebPhone user initiated call termination. |
| `+9.144s` | Call ended by this webphone: Terminated | The call ended, and the WebPhone recorded the termination event. |

The timestamps are relative to the start of the call. They help establish the order of events and identify delays between call setup, answer, media connectivity, and termination.

> **Note:** The example represents a call that connected and ended normally. If a call fails, examine the timeline for unsuccessful responses, missing expected events, media connectivity issues, or unexpected termination messages. The precise events displayed depend on the call and the diagnostic information available.

### Step 5 — Copy or download the call log

The call details view provides the following actions at the bottom of the panel:

- **Clear**: Clears the troubleshooting logs from the current session.
- **Copy**: Copies the available call log information so it can be shared or reviewed elsewhere.
- **Download call log**: Downloads the call log for further investigation or to share with the support team.

To investigate a call:

1. Open the relevant call record.
2. Review the status summary, call details, and timeline.
3. Click **Copy** to copy the log or **Download call log** to save it.
4. Review the diagnostic information or provide it to the technical support team when assistance is required.

> **Important:** Use **Clear** carefully, as it removes the available troubleshooting logs from the current session. The logs are session-based and should be copied or downloaded before the session ends if they're needed later.

### Troubleshooting Guidelines

| Observation | What to check |
|---|---|
| The call wasn't answered. | Review the call timeline for SIP responses and check whether an answer event appears. |
| The call connected but had no audio. | Inspect the ICE connectivity events and investigate possible network or media connectivity issues. |
| The call ended unexpectedly. | Check the `Ended by` field, termination cause, and final timeline events. |
| The call took too long to connect. | Compare the call initiation, answer, and media connectivity timestamps. |
| Further investigation is required. | Copy or download the call log and correlate the available details with other diagnostic records. |

### WebPhone Console (Debug Mode)

The WebPhone Console displays diagnostic messages that help troubleshoot SIP registration, authentication, signalling, and call connectivity issues. When Debug Mode is enabled, users can access the browser's Developer Tools to inspect these messages.

#### How to Access the Console

1. Enable **Debug Mode** in WebPhone.
2. Press **F12** on your keyboard to open the browser's Developer Tools.
3. Select the **Console** tab to view the diagnostic messages generated by WebPhone.<br><img src= "/setup/img/webphoneconsole.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

#### Console Fields and Messages

The Console displays various diagnostic messages and SIP protocol details.

- **`JsSIP:DigestAuthentication`**: Displays SIP digest authentication activity, including the generation of authentication responses.
- **`JsSIP:Transport`**: Displays transport activity, such as sending SIP messages.
- **`REGISTER sip`**: Indicates that WebPhone is sending a SIP registration request to register its endpoint.
- **`Via`**: Contains routing and transport information for the SIP request.
- **`To` and `From`**: Identify the intended recipient and the originator of the SIP request.
- **`Call-ID`**: Provides a unique identifier used to correlate SIP messages belonging to a call or signalling transaction.
- **`CSeq`**: Identifies the sequence number and method of a SIP request.
- **`Authorization`**: Contains authentication information used to authorize the SIP request.
- **`Contact`**: Specifies the contact address associated with the SIP endpoint.
- **`Expires`**: Indicates the requested registration expiry interval. In the screenshot, the value is `60` seconds.
- **`Allow`**: Lists the SIP methods supported by the endpoint, such as `INVITE`, `ACK`, `CANCEL`, and `BYE`.
- **`Supported`**: Lists additional SIP protocol extensions supported by the endpoint.
- **`User-Agent`**: Identifies the SIP library and version used by WebPhone. The screenshot shows `JsSIP 3.10.1`.
- **`Content-Length`**: Indicates the length of the SIP message body in bytes. A value of `0` means the message has no body.

#### Troubleshooting

Use the Console to investigate issues such as failed registration, authentication errors, or unsuccessful call setup. Review the sequence of messages and any error responses to identify where the process fails.

> **Note:** Console output may contain sensitive information. Avoid sharing logs publicly, particularly when they include authentication headers or account details. Redact sensitive information before sharing logs with the ConnexCS support team.
