# Connexamine

<details>
<summary><strong>Document Metadata</strong></summary>
<br>

<strong>Category</strong>: Tools / Connexamine<br>
<strong>Audience</strong>: Network Administrators, VoIP Engineers, NOC Engineers, Support Team, Customers Troubleshooting SIP Connectivity<br>
<strong>Difficulty</strong>: Intermediate<br>
<strong>Time Required</strong>: Approximately 20–30 minutes<br>
<strong>Prerequisites</strong>: Linux system with root or packet capture permissions, basic understanding of SIP signalling, call setup flow, and network troubleshooting<br>
<strong>Related Topics</strong>: SIP Signalling, Call Setup Analysis, Class 4 Services, sngrep, Network Diagnostics<br>
<strong>Next Steps</strong>: Install Connexamine, run Interactive mode to analyze live call setup, or configure Daemon mode for continuous monitoring and remote diagnostics through ConnexCS.<br>

</details>

**Global :material-menu-right: ConnExamine**

## Overview

**Connexamine** is a **lightweight SIP call-setup inspector** built by **ConnexCS**.

It watches outbound SIP INVITEs on a host — a PBX, a session border controller, a trunk gateway — and tells you, in plain terms, how long call setup is taking and where it's failing: how fast the far end acknowledged the INVITE, how long it took to start ringing, and how long it took to answer.

ConnExamine is purpose-built to rapidly diagnose call setup delays and failures on a connection. Instead of functioning as a full protocol analyzer, it focuses on the key metrics required to troubleshoot SIP call establishment.

Connexamine is designed to work with the customer's own server — it isn't limited to servers hosted by ConnexCS. If the customer runs a server outside of ConnexCS's infrastructure (for example, a dialer server), Connexamine authenticates to it by entering that server's proxy details.

## What problem it solves- Simplifying SIP Troubleshooting

Most SIP issues that get escalated to a provider aren't caused by complicated protocol errors. They're usually **first-hop connectivity problems** — things like:

* A trunk that's slow to send back `100 Trying`
* A carrier that takes too long to send `180 Ringing`
* A destination that never sends any SIP response at all, and just times out

Normally, tracking down these issues means manually digging through call traffic with tools like `sngrep`, `tcpdump`, or `Wireshark` — capturing the SIP packets yourself and tracing each INVITE through to its response, call by call.

**Connexamine does this correlation automatically**. It skips the manual packet-tracing and surfaces just the handful of metrics you actually need to diagnose this kind of problem.

| Metric  | Measurement  | Purpose |
| --------|--------------|-------- |
| **Trying Time** | Time from **INVITE** to **`100 Trying`** | Measures how quickly the destination acknowledges the SIP INVITE, indicating whether the far end is reachable and responsive|
| **Post Dial Delay (PDD)** | Time from **INVITE** to **`180 Ringing`** or **`183 Session Progress`** | Measures the time taken before the destination starts ringing or provides early media to the caller|
| **Ring Time** | Time from **`180/183`** to **`200 OK`** | Measures how long the call rings before it is answered|
| **Final Disposition** | Final SIP response code or timeout stage | Indicates the final outcome of the call, including the SIP response code returned or the stage at which the call timed out without receiving a response. |

## Comparision with sngrep and similar tools

| | ConnExamine | sngrep / generic SIP capture tools |
|---|---|---|
| **Audience** | Support staff, junior NOC engineers, customers troubleshooting their own connection | Experienced SIP/telecom engineers |
| **Scope** | Outbound call **setup** on UDP/5060 only | Full SIP traffic, all transports, all dialog types |
| **Output** | Pre-computed timing metrics with color-coded pass/fail | Raw call flows and message dumps you interpret yourself |
| **Primary use case** | "Is this connection healthy? Where exactly is it slow or failing?" | General-purpose SIP debugging, deep packet-level inspection |
| **Continuous/remote use** | Yes — daemon mode reports to ConnexCS for ongoing monitoring | No — interactive, on-box, session-by-session |

ConnExamine is deliberately **narrower and more opinionated** than a general SIP capture tool.

## Benefits

* Enables **continuous monitoring** of call setup performance instead of one-time troubleshooting sessions.
* Eliminates the need for customers to **reproduce issues** while support engineers monitor an interactive session.
* Streams **real-time call setup metrics** to the ConnexCS backend for ongoing analysis.
* Provides **per-destination performance metrics**, making it easier to identify issues with specific carriers or trunks.
* Collects **failure samples** to help diagnose intermittent or recurring call setup problems.
* Reports **host health information**, including CPU, memory, disk usage, and system load, to distinguish network issues from server performance problems.
* Gives ConnexCS support **continuous visibility** into connection health through the ConnexCS portal.
* Bridges the gap between **interactive, on-demand debugging** and **long-term remote monitoring**, enabling faster issue detection and resolution.

**It doesn't aim to replace `sngrep` for deep protocol debugging (call transfers, re-INVITEs, media negotiation, non-INVITE dialogs)** — it aims to get a first-hop connectivity problem diagnosed by someone who isn't a SIP specialist, in minutes, without needing to learn how to read a SIP ladder diagram.

## How to use ConnExamine?

### Installation of ConnExamine on your server

1. Go to the server to run the following script:

      ```bash
      curl -fsSL https://cdn.cnxcdn.com/connexamine/install.sh | bash
      ```

2. Run the folllowing command to enter the `Deamon Mode` for continuous monitoring, reports to your provider:

      ```bash
      sudo connexamine --auto
      ```

3. This will generate the `Code/Daemon Token` to be used in the `Claim Box` for authentication purposes.

#### The two modes

ConnExamine runs in one of two modes, selected at startup:

1. **Interactive mode** (`default`) — a live terminal session for hands-on debugging.
2. **Daemon / auto mode** (`--auto`) — an unattended background service for continuous monitoring, reporting to ConnexCS.

>Note: **These modes run on the server terminal.**

##### Interactive mode

This is the default mode. Run the program to see calls as they happen in a simple, color-coded table.

> Note: Every call is **color-coded** (good / average / poor) against sensible defaults, so a non-specialist can glance at a terminal and see a problem — no protocol expertise required to interpret it.

Use the following to start the **interactive mode** on the server terminal:

```bash
sudo connexamine
```

!!! Example "Typical use"
    A support engineer or customer runs this directly on the box while reproducing or observing a problem, watches call setup timings scroll by in real time, and immediately sees which stage (Trying / PDD / Ring) is slow or timing out, and against which SIP response code.

```
     UTC Date/Time      │   Trying Time   │      PDD      │    Ring Time    │       SIP Code - Reason        │ Call-ID
                        │   FROM Number   │   TO Number   │                 │                                │
═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════
2026-07-29 01:03:20.219 │         1023 ms │       5000 ms │        15000 ms │ 200 - OK                       │ abc123@...
                        │    +15551234567 │    +15559876543 │                 │                                │
```

**Key options**:

| Flag | Purpose |
|---|---|
| `-i, --interface <name>` | Network interface to capture on (default: `any`) |
| `--trying-timeout`, `--pdd-timeout`, `--ring-timeout` | Thresholds (ms) at which a stage is considered a timeout rather than just slow |
| `--destination-ip <ip>` | Only show calls to a specific destination |
| `--sip-code <code>` | Only show calls that ended with a specific final SIP response code |
| `--debug` | Verbose packet-processing output |
| `--test-mode` | Simulate call traffic instead of capturing — no root/pcap needed, useful for a quick demo |

Interactive mode is entirely local: nothing is sent off the box. It ends when you exit the process (`Ctrl+C`).

##### Daemon mode (`--auto`)

**Daemon mode** runs the same capture and analysis engine unattended, in the background, and streams the resulting metrics to a ConnexCS-operated endpoint instead of a terminal.

It turns a one-off debugging session into **continuous monitoring of a customer's connection**, so ConnexCS support can see call-setup health on an upstream trunk over time — without anyone needing to be logged into the box, running the tool, or reading its output.

Use the following to start the **deamon mode** on the server terminal:

```bash
sudo connexamine --auto
```

### Commands for the terminal

|Command Name|Example|
|------------|-----------|
|`sudo connexamine`|Interactive mode- live terminal debugging|
|`sudo connexamine -i eth0`|Specific interface|
|`sudo connexamine --trying-timeout 3000 --pdd-timeout 15000`|Custom timeouts|
|`sudo connexamine --auto`|Daemon mode (continuous monitoring, reports to your provider)|
|`connexamine --help`|Help and options|

---

### How to use ConnExamine on the Control Panel (Grid View)?

1. Login to your account.
2. Navigate to **Global :material-menu-right: ConnExamine**.
3. `Grid View`: Displays all monitored sessions in a tabular layout, providing an overview of their connection status, location, associated customer, last update time, and system resource utilisation.
4. Click on the `+ Claim Box` button.
5. Enter the `Code`- which is the `Deamon Token` or the `IP Address`.
6. Click on `Claim`. <br><img src= "/misc/img/connex1.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
7. All the session information is visible on the ConnExamine dashboard.<br><img src= "/misc/img/connex2.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
8. Click on the `Session ID` to get more insights on the current session.<br><img src= "/misc/img/connex3.png" width= "400" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
9. **Session details explained**:

   * **Overview**

Displays general information about the active Connexamine monitoring session.

| Field  | Description |
| -------|------------ |
| **Session ID**   | Unique identifier assigned to the monitored Connexamine agent. This identifier is used to associate telemetry with the corresponding customer or support session|
| **IP** | Public IP address of the monitored host|
| **Customer** | Customer account associated with the monitored host. Displays **-** until the session has been linked to a customer|
| **Last Updated** | Date and time when the most recent telemetry was received from the agent|

   * **Box Info**

Displays information about the monitored host and the installed Connexamine agent.

| Field  | Description  |
| -------|------------- |
| **Hostname** | Hostname of the monitored system|
| **Agent Version** | Version of the installed Connexamine agent|
| **OS / Arch**     | Operating system and CPU architecture of the monitored host|
| **Capabilities**  | Lists the features supported by the connected agent. Each capability indicates functionality that is available for monitoring or remote diagnostics|

   * **Capability Definitions**

| Capability | Description |
| -----------|------------ |
| **metrics** | Reports aggregated call setup metrics to the ConnexCS portal|
| **vitals** | Reports host health metrics, including CPU, memory, disk usage, uptime, and system load. |
| **failure_samples**  | Collects representative failed call samples for troubleshooting|
| **clock_skew** | Detects and reports system clock drift or synchronization issues|
| **diagnostics_ping** | Allows remote ICMP ping diagnostics to a specified IP address|
| **diagnostics_mtr**  | Allows remote MTR (My Traceroute) diagnostics for network path analysis|
| **self_update**| Supports automatic and remotely triggered agent updates|

   * **Vitals**

Displays the current health and resource utilization of the monitored host.

| Field | Description |
| ------|-------------|
| **Load Avg (1 \| 5 \| 15 min)** | Average system load over the previous 1, 5, and 15 minutes|
| **CPU** | Current CPU utilization of the monitored host|
| **Memory (Used / Total)**  | Amount of memory currently in use compared to the total installed memory|
| **Disk Free** | Available disk space on the monitored host|
| **Uptime** | Time elapsed since the monitored system was last restarted|

   * **Metrics (5s)**

Displays call setup statistics collected during the previous **5-second** reporting interval.

| Field | Description |
| ------|------------ |
|**By Destination** | Groups call setup metrics by destination IP address. Each destination includes aggregated statistics such as INVITE count, Trying responses, latency measurements, and other call setup metrics for that reporting interval|

   * **Failure Samples (60s)**

Displays representative call failures collected during the previous **60-second** sampling interval.

| Field | Description |
| ------|------------ |
| **Categories** | Groups failures by SIP response code or timeout category (for example, `sip_480`, `sip_481`, `sip_503`). Selecting a category displays representative failed call samples to assist with troubleshooting recurring issues|

   * **Some Additional Fields**

| Field  | Description  |
| -------|--------------|
| **Location** | Geographic location of the monitored host, determined from its public IP address or associated metadata|
| **Status** | Current connection status of the Connexamine agent (for example, **Connected** or **Disconnected**)|
| **Window (s)** *(Metrics)*| Specifies the reporting interval, in seconds, over which call setup metrics are aggregated before being sent to the ConnexCS portal|
| **Window (s)** *(Failure Samples)* | Specifies the sampling interval, in seconds, during which failed call samples are collected and grouped before being reported|

### How to use ConnExamine on the Control Panel (Stats View)?

The **Stats** view in ConnExamine provides a graphical representation of server performance, system resource utilisation, signalling activity, clock synchronisation, and agent information. It allows administrators to monitor connected servers, compare performance across different agents, and identify potential issues over a selected time period.

To access the Stats view:

1. Navigate to **Global :material-menu-right: ConnExamine** in the Control Panel.
2. Click the **Stats** tab to view the graphical statistics.
3. Select the required time range, agent, or date range to filter the displayed information.

#### 1. Configure the Statistics View

Before analysing the charts, configure the following filters:

- **Time Range**: Select a predefined time range to display statistics for the last 5 minutes, 15 minutes, 30 minutes, 1 hour, 6 hours, 24 hours, 7 days, or 30 days.
- **Agent Selection**: Select one or more agents to compare their performance and resource utilisation. The charts display separate data series for each selected agent.
- **Date Range**: Specify a custom start date and end date to view statistics for a particular period.
- **Auto-refresh**: Enable this option to refresh the statistics automatically at regular intervals.
- **Refresh**: Click the refresh icon to manually reload the displayed statistics.

#### 2. Overview

The **Overview** tab provides a consolidated view of important performance and resource metrics. It displays the following charts:

- **CPU Usage**: Displays CPU utilisation for each selected agent, helping identify variations in processing load.
- **Session Up**: Shows the number of active sessions over the selected period.
- **Memory**: Displays memory utilisation, including used and total memory for each agent.
- **Load Average (1m)**: Shows the system load average over one minute.
- **Failures (avg)**: Displays the average number of failures recorded over time.

> **Note**: Hover over a chart to view the corresponding date, agent, and metric values. Click the expand icon on a chart to view it in a larger format. <br><img src= "/misc/img/stats1.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

The expanded chart provides a detailed view of the selected metric, making it easier to examine individual data points and compare values across agents. <br><img src= "/misc/img/stats2.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

#### 3. Performance & Latency

The **Performance & Latency** tab displays call performance metrics and latency measurements to help identify delays and variations in call processing.

It includes the following charts:

- **Answered Latency**: Displays the minimum, average, and maximum latency recorded for answered calls.
- **Answered Calls (avg)**: Shows the average number of answered calls over the selected period.
- **Answered Latency Std Dev**: Displays the standard deviation of answered-call latency, helping identify variations in response times.
- **Trying Latency**: Displays the minimum, average, and maximum latency associated with call attempts.
- **Trying Attempts (avg)**: Shows the average number of call attempts over time.
- **Trying Latency Std Dev**: Displays the standard deviation of latency for call attempts.

These metrics help administrators identify latency spikes, inconsistent call response times, and changes in call-processing performance. <br><img src= "/misc/img/stats3.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

#### 4. System Resources

The **System Resources** tab provides detailed information about the resource utilisation and operational health of each selected agent.

It includes the following charts:

- **CPU Usage (detail)**: Displays detailed CPU utilisation over time for each agent.
- **Load Average (1m/5m/15m)**: Shows system load averages calculated over 1-minute, 5-minute, and 15-minute intervals.
- **Memory (detail)**: Displays memory utilisation, including used and total memory.
- **Memory Free %**: Shows the percentage of available memory over time.
- **Disk Free**: Displays the available disk space for each agent.
- **Process Uptime**: Shows how long the monitored process has been running.

These metrics help administrators monitor resource consumption, identify potential capacity issues, and investigate unexpected changes in system performance.<br><img src= "/misc/img/stats4.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

#### 5. Signalling & Traffic

The **Signalling & Traffic** tab provides information about call signalling activity, incoming requests, and signalling-related failures.

It includes the following charts:

- **Invites Sent (avg)**: Displays the average number of INVITE requests sent over the selected period.
- **Trying Received (avg)**: Shows the average number of incoming TRYING responses or messages received.
- **Messages Received (by type, avg)**: Displays the average number of received messages grouped by message type, such as `clock_skew_alert`, `failure_samples`, `hello`, `metrics`, `update_status`, and `vitals`.
- **Failures (avg)**: Displays the average number of signalling failures over time.
- **Failures by SIP Code (avg)**: Groups failures by SIP response code, helping identify the response codes associated with unsuccessful call attempts.
- **Failures by Timeout Kind (avg)**: Displays failures grouped by timeout category, helping identify issues such as `no_ringing_pdd_exceeded`, `no_trying`, and `ring_timeout_no_answer`.

These charts help administrators analyse signalling traffic, monitor request activity, and identify recurring SIP errors or timeout-related issues.<br><img src= "/misc/img/stats5.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

#### 6. Clock & Sync

The **Clock & Sync** tab displays clock-related metrics for the selected agents. It helps administrators monitor synchronisation between servers and identify clock discrepancies.

It includes the following charts:

- **Clock RTT**: Displays the round-trip time (RTT) associated with clock synchronisation measurements for each agent, in milliseconds.
- **Clock Skew**: Shows the difference between the clock of an agent and the reference clock, in milliseconds.

These metrics help identify clock synchronisation issues and discrepancies that may affect timestamp accuracy and coordination between servers.<br><img src= "/misc/img/stats6.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

#### 7. Agent Info

The **Agent Info** tab displays the technical details of the agents connected to ConnExamine.

The table includes the following fields:

- **Host**: Displays the hostname or identifier of the monitored agent.
- **Instance**: Displays the instance associated with the agent, if available.
- **Agent Version**: Displays the installed ConnExamine agent version.
- **OS / Arch**: Displays the operating system and system architecture on which the agent is running.
- **Git Commit**: Displays the Git commit reference associated with the agent build, if available.
- **Last Reported**: Displays the date and time when the agent last reported its information.

This information helps administrators verify agent versions, identify the operating environment, and check when each agent last communicated with the Control Panel.<br><img src= "/misc/img/stats7.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

> **Note:** The charts support interactive inspection. Hover over individual data points to view their corresponding values, use the expand icon to examine a chart in detail, and use the available time and agent filters to compare performance across different periods and agents.

## How to use ConnExamine with ConnexCS Terminal

1. Log in to your account.
2. Click on the `CLI Terminal` icon.
3. A command-line terminal appears, where you can execute supported ConnExamine commands and view the results. <br><img src= "/misc/img/conterm1.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>
4. Below are the supported commands:

   | Command | Description  | Example Use Case|  Syntax | Example |
   | ------- | -------------|-----------------|---------|---------|
   | `adopt` | Claims a Connexamine box using its unique code or IP address, allowing it to be managed from your account | Claim a newly deployed Connexamine box before running diagnostics | `connexamine adopt <code\|ip>` | `connexamine adopt A1B2C3` |
   | `list`  | Lists all adopted Connexamine sessions. You can also select a session to open its live monitoring dashboard | View all available Connexamine boxes and open the dashboard for a specific one | `connexamine list [--json \| --plain]` then select the `connexamine box` | `connexamine list` |
   | `mtr`   | Runs an **MTR (My Traceroute)** test from a selected Connexamine box and streams the results in real time | Diagnose packet loss or routing issues between the Connexamine box and a remote destination | `connexamine mtr <session-id> <target>` | `connexamine mtr sess-001 example.com` |
   | `ping`  | Sends ICMP echo requests from a selected Connexamine box and streams the live output | Verify network connectivity and latency to a remote host | `connexamine ping <session-id> <target>` | `connexamine ping sess-001 example.com` |
   | `rm` | Removes (forgets) a saved Connexamine session from your local client. This does **not** remove or reset the actual Connexamine box | Clean up old or unused Connexamine sessions from your CLI | `connexamine rm <session-id> [-f \| --force]` | `connexamine rm sess-001 --force` |
   | `show`  | Displays the complete telemetry snapshot for a specific Connexamine session, including collected diagnostic information | Review detailed telemetry and health information for a Connexamine box | `connexamine show <session-id> [--json]` | `connexamine show sess-001` |

## Understanding Security in ConnExamine

This section details the operational behavior of ConnExamine, including the network traffic it inspects, the data it collects, and the security measures implemented to support safe deployment in production environments, particularly when running in `Daemon (--auto)` mode.

### Key Analysis Areas

ConnExamine only inspects **SIP signaling traffic on UDP port 5060**. **It does not capture or process**:

- Media (RTP/audio) at all
- SIP over TCP, TLS (SIPS), or non-standard ports
- Any non-SIP traffic on the interface it's watching

Within that SIP traffic, it only actively **tracks** outbound INVITEs — calls your host originates. Inbound INVITEs and other SIP methods (BYE, REGISTER, etc.) may be seen in passing but are not tracked or reported as calls.

### Data Collection & Purpose

| Data | Collected? | Why |
|---|---|---|
| Call timing (Trying/PDD/Ring, per call) | Yes | This is the entire point of the tool — measuring call-setup health |
| SIP response codes / timeout reasons | Yes | Distinguishes a real carrier rejection (e.g. `486 Busy`) from a silent timeout, which point to very different root causes |
| Call-ID | Yes | The only way to let a human correlate a reported metric back to a specific, real call for investigation |
| Destination/source IP | Yes | Identifies *which* upstream connection a problem belongs to — essential when a box has more than one trunk |
| Host vitals (CPU, memory, disk, load, uptime) | Yes, in `--auto` mode only | Distinguishes "the connection is unhealthy" from "the box itself is overloaded," which otherwise look identical from the outside |
| Caller / called phone numbers (FROM/TO) | Shown locally only — never transmitted | Interactive mode displays them on-screen for the person actively debugging, because they're often necessary context in the moment. Daemon mode's telemetry to ConnexCS deliberately omits them — they aren't needed to measure call-setup timing, and there's no reason for that data to leave the box |
| Call content / audio | Never | Connexamine never touches media, only signaling headers |
| SIP message bodies (SDP, etc.) | Never | Only specific signaling headers (Call-ID, From, To, response codes) are parsed |

> **In short**: what leaves the box in `--auto` mode is *timing statistics, response codes, Call-IDs, IPs, and host health* — the minimum needed to diagnose a connectivity problem remotely. It is not a call log and cannot be used to reconstruct who called whom.

## Monitoring ViciDial with ConnExamine

### Overview

Install ConnExamine on your ViciDial server and you get continuous, SIP-level monitoring of every outbound call setup, reported to the ConnexCS Control Panel. You see slow or failing trunks before your agents or customers complain.

ViciDial's own real-time reports focus on agents, campaigns and queues. They don't show what happens at the SIP level between your dialer and your carrier. So when a trunk slows down or starts rejecting calls, most teams only find out from a complaint or a sudden drop in connect rates.

A "channel unavailable" message is not observability. It tells you a call failed, not where or why. ConnExamine fills that gap by measuring each stage of call setup and grouping failures by SIP response code.

> **Who this guide is for:** ViciDial administrators, NOC engineers and support staff who send ViciDial traffic through ConnexCS or any other SIP provider.

### What ConnExamine measures

ConnExamine is a lightweight SIP call-setup inspector built by ConnexCS. It runs on your own ViciDial server, watches outbound SIP INVITEs, and works out how long each stage of call setup takes and where calls fail.

It works on servers outside ConnexCS's infrastructure, so a self-hosted ViciDial box is fully supported.

For every outbound call, it records four things:

| Metric | What it measures | What a bad value tells you |
| --- | --- | --- |
| **Trying Time** | INVITE to `100 Trying` | The far end is slow to respond or unreachable |
| **Post Dial Delay (PDD)** | INVITE to `180 Ringing` or `183 Session Progress` | The carrier is slow to route the call; callers hear dead air |
| **Ring Time** | `180/183` to `200 OK` | How long the call rang before it was answered |
| **Final Disposition** | Final SIP response code, or the stage where it timed out | Whether a call was rejected (for example `503`) or silently timed out |

In the Control Panel it also shows host health for the ViciDial box: CPU, memory, disk, load and uptime. That lets you tell "the carrier is failing" apart from "the dialer server is overloaded," which otherwise look the same.

> **How it compares to sngrep:** sngrep and Wireshark show raw SIP traffic for an engineer to interpret. ConnExamine pre-calculates the timings, colour-codes them good, average or poor, and can report continuously. Use sngrep for deep protocol work such as transfers or re-INVITEs; use ConnExamine to answer "is this connection healthy, and where is it failing?"

### Install ConnExamine on your ViciDial server

Setup takes about 10 minutes: install the agent, start it in daemon mode, then claim the box in the Control Panel.

**Before you start, check that:**

- You have root or sudo access to the ViciDial (Linux) server.
- Your ViciDial trunks send SIP over **UDP port 5060**. ConnExamine does not see SIP over TCP, TLS or non-standard ports.
- You can log in to the ConnexCS Control Panel.
- If you run a ViciDial cluster, you know which servers place outbound calls. Install the agent on each of them.

**Steps:**

1. Log in to the ViciDial server's terminal and run the installer:

    ```
    curl -fsSL https://cdn.cnxcdn.com/connexamine/install.sh | bash
    ```

2. Start ConnExamine in daemon mode, so it runs in the background and reports continuously:

    ```
    sudo connexamine --auto
    ```

3. Copy the **Daemon Token** (code) it displays. You need it to claim the box.
4. In the ConnexCS Control Panel, go to **Global → ConnExamine**.
5. Click **+ Claim Box**, enter the Daemon Token or the server's IP address, and click **Claim**.
6. The ViciDial box now appears on the ConnExamine dashboard with status **Connected**.

You can also claim a box from the ConnexCS Terminal (the **CLI Terminal** icon in the Control Panel) with `connexamine adopt <code|ip>`.

> **Quick check without daemon mode:** run `sudo connexamine` to open interactive mode. Calls scroll past in a colour-coded table, and nothing leaves the server. Press `Ctrl+C` to exit. Add `--test-mode` to see simulated traffic for a demo.

### Read the ConnExamine dashboard

Open **Global → ConnExamine** and click a box's **Session ID** to see its live view. Each panel answers a different question about your ViciDial server:

| Panel | What it shows | Question it answers |
| --- | --- | --- |
| **Overview** | Session ID, public IP, linked customer, last update time | Is this box reporting, and whose is it? |
| **Box Info** | Hostname, agent version, OS / architecture, capabilities | Which server is this, and what can the agent do? |
| **Vitals** | Load average (1, 5, 15 min), CPU, memory used / total, disk free, uptime | Is the ViciDial server itself healthy? |
| **Metrics (5s)** | Call setup stats grouped by destination IP over the last 5 seconds: INVITE count, Trying responses, latency | Which carrier or trunk is slow right now? |
| **Failure Samples (60s)** | Failed calls grouped by SIP code or timeout, for example `sip_480`, `sip_503` | What kind of failure is happening, and how often? |
| **Status** | **Connected** or **Disconnected** | Is the agent still running? |

**Comparing trunks:** because Metrics groups everything by destination IP, a ViciDial server with several carriers shows each one side by side. If one destination has far higher PDD or more timeouts than the rest, the problem is that carrier, not your dialer.

**Comparing over time:** check the same box at busy and quiet hours. If timings only degrade at peak and Vitals show high CPU or load, the ViciDial server is the bottleneck.

#### Diagnose a ViciDial failure

When agents report dead air, dropped calls or low connect rates, work through these steps from the ConnexCS Terminal or the dashboard.

1. **List your boxes.** Run `connexamine list` and pick the ViciDial server. This opens its live dashboard.
2. **Check Status and Vitals.** If the box is Disconnected, or CPU and load are maxed out, fix the server first.
3. **Find the slow stage in Metrics.** Look at each destination IP:
    - High Trying Time: the carrier is slow to acknowledge, or unreachable.
    - High PDD: the carrier is slow to route; callers hear silence before ringing.
    - Timeouts with no SIP response: likely a network or firewall problem.
4. **Read the failure category.** Open **Failure Samples** and select a category to see real failed calls with their Call-IDs.
5. **Test the network path.** From the box, run:
    - `connexamine ping <session-id> <target>` for reachability and latency.
    - `connexamine mtr <session-id> <target>` for packet loss along the route.
6. **Pull the full snapshot** with `connexamine show <session-id>` (add `--json` to export it), and share the Call-IDs with your carrier or ConnexCS support.

**Common SIP codes in Failure Samples:**

| Code | Meaning | Usual next step |
| --- | --- | --- |
| `480` | Temporarily unavailable | Check the destination numbers and the carrier's capacity |
| `481` | Call / transaction does not exist | Check for NAT or session timer problems |
| `486` | Busy here | Normal at low volume; investigate if it spikes |
| `503` | Service unavailable | The carrier is rejecting traffic; check limits or failover |
| Timeout | No response at that stage | Check firewall rules, routing and the carrier's IP |

This SIP-level view is what ViciDial doesn't give you on its own.

#### Best practices and limitations

Run ConnExamine in daemon mode on every outbound ViciDial server all the time, not only when something breaks. Continuous data means you can see when a problem started, without having to reproduce it.

**Best practices:**

- Install on every dialer node in a cluster, so each one reports separately.
- Check the dashboard at the start of each shift and after any carrier or routing change.
- Compare PDD and failure rates per carrier weekly, to spot a trunk that is slowly degrading.
- Use custom thresholds in interactive mode to match your campaigns, for example:

    ```
    sudo connexamine --trying-timeout 3000 --pdd-timeout 15000
    ```

- Keep the server clock in sync; the agent reports clock skew if it drifts.

**What ConnExamine does not cover:**

- Only SIP on **UDP 5060**: no TCP, TLS or custom ports.
- Only **outbound** INVITEs; inbound calls are not tracked.
- No media or audio, so it won't detect one-way audio or poor call quality.
- No ViciDial agent, campaign or queue metrics; keep using ViciDial's real-time report for those.

ConnExamine does not yet replace every kind of dialer monitoring. Use it as the SIP and server-health layer alongside ViciDial's own reports.

> **Data and privacy:** in daemon mode the agent sends only timing statistics, SIP response codes, Call-IDs, IP addresses and host health, encrypted in transit. Caller and called numbers appear only on screen in interactive mode and are never sent. Audio and SIP message bodies are never captured.

## Summary

Connexamine is built to be safe to run unattended, with production SIP traffic, on a customer's edge:

- It only looks at SIP signaling, never media or call content.
- What it sends off the box is deliberately minimal — enough to diagnose connectivity problems, nothing that amounts to a call log.
- Everything sent over the network is encrypted in transit.
- The one remote-control surface (diagnostics) is narrowly scoped and validated before anything is ever executed.