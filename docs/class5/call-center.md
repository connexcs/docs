# Call Center

<details>
<summary><strong>Document Metadata</strong></summary>
<br>

<strong>Category</strong>: Class 5 Services / Call Center<br>
<strong>Audience</strong>: Administrators, Contact Center Supervisors, Engineers, Support Team<br>
<strong>Difficulty</strong>: Intermediate<br>
<strong>Time Required</strong>: Approximately 30–45 minutes<br>
<strong>Prerequisites</strong>: Active ConnexCS account with Class 5 Services enabled; PBX Server configured; SIP users/extensions created; basic understanding of call queues and agent routing<br>
<strong>Related Topics</strong>: AI Agent, PBX Server, SIP Users, Class 5 Extensions, Recordings, WebPhone<br>
<strong>Next Steps</strong>: Create a Call Center, configure queue settings, assign agents, define routing strategy, monitor live activity from the dashboard, and optimize queue performance using real-time statistics.<br>

</details>

**Class 5 :material-menu-right: Call Center**

## Overview

The **Call Center** module enables organizations to efficiently manage inbound customer calls by routing them through configurable queues to available agents.

It provides administrators with complete visibility into queue performance, agent availability, live calls, and service levels from a centralized dashboard.

The module supports configurable distribution strategies, wait time management, call recording, queue monitoring, agent performance tracking, and real-time operational statistics, making it suitable for customer support, sales teams, help desks, and internal service desks.

Unlike traditional PBX hunt groups, the Call Center provides advanced queue management with live analytics, agent prioritization, SLA monitoring, and operational reporting.

---

## Who is it for?

The Call Center module is ideal for organizations that need to efficiently distribute inbound calls among multiple agents, including:

- Customer Support Teams
- Sales & Lead Management Teams
- Technical Help Desks
- IT Service Desks
- Reception & Front Desk Operations
- Healthcare Appointment Centers
- Educational Institutions
- Financial Service Providers
- Managed Service Providers (MSPs)
- BPO and Contact Centers

---

## Use Cases

- Customer support call queues
- Sales enquiry handling
- Technical support desks
- Reception and operator services
- Appointment booking teams
- Internal IT help desks
- Multi-location customer service centers
- Overflow call handling between departments

---

## Benefits

- Intelligent call distribution
- Real-time queue monitoring
- Improved customer experience
- Better agent utilization
- Reduced caller wait times
- Live operational dashboards
- SLA monitoring and breach alerts
- Call recording support
- Queue performance reporting
- Scalable for teams of any size

---

## How the Call Center Works

The Call Center automatically routes incoming calls to eligible agents based on the configured queue settings, agent availability, and selected distribution strategy.

The sections below describe how an incoming call is processed at runtime, and how the **Consumers**, **Status**, **Distribution Strategy**, **Max No Answer**, and **Wrap Up Time** settings interact during an actual call.

---

### 1. Agent Availability (Status)

When a call enters the queue, the system checks the **Consumers** list to determine which agents are currently eligible to receive it.

Only agents whose **Status** is set to **Available** are considered for call distribution.

- An administrator or supervisor can change an agent's status manually.
- In custom-coded deployments, agents may also be permitted to change their own status (for example, toggling between Available, On Break, or Logged Out).

Agents whose status is **On Break**, **Logged Out**, or any other unavailable state are excluded from routing until their status changes back to Available.

---

### 2. Call Distribution

Once one or more agents are Available, the configured **Distribution Strategy** determines which of those agents is offered the next call:

- Ring All
- Longest Idle Agent
- Round Robin
- Top Down
- Agent With Least Talk Time
- Agent With Fewest Calls
- Sequentially By Agent Order
- Random

The strategy only ever selects from the pool of currently Available agents — so as that pool changes (agents logging in/out, going on break, or being auto-removed via Max No Answer), the strategy's behavior changes with it in real time.

---

### 3. Missed Calls & Max No Answer

If the selected agent doesn't answer within the configured **Ring Timeout**, the call is treated as missed and re-offered to another eligible agent according to the same Distribution Strategy — the queue does not wait or fail just because one agent missed the call.

Each agent also has a **Max No Answer** setting: the number of *consecutive* missed calls allowed before the system automatically changes that agent's status to whatever is configured under **Agent No-Answer Status**:

| Agent No-Answer Status | Agent auto-returns to Available? |
|---|---|
| Available | Yes — immediately |
| Available (On Demand) | Yes — when queue demand requires it |
| On Break | No — must be manually changed back |
| Logged Out | No — must log back in manually |

!!! Example "Example"

    **Max No Answer = 3**
    
    **Agent No-Answer Status = On Break**
    
    - The agent misses 3 consecutive queue calls.
    
    - Their status automatically changes to On Break.
    
    - They stop receiving queue calls and remain excluded until a supervisor (or the agent themself, if self-service is enabled) manually sets their status back to Available.

> Note: *This is what makes the Distribution Strategy dynamic rather than static: it isn't just reacting to who's logged in, it's continuously reacting to missed-call behavior as well.*

---

### 4. Call Handling

When an agent answers:

- The caller is connected to that agent.
- The agent is marked busy and removed from the pool of agents eligible for a *new* call until the current one ends.
- Other waiting callers remain queued until another eligible agent becomes available.

---

### 5. Wrap-Up Time

After a call ends, if **Wrap Up Time** is configured, the agent is held in a temporarily unavailable state — even though their status still shows Available — giving them time to finish notes, update CRM records, or otherwise prepare for the next call.

!!! Example "Example"

    **Wrap Up Time = 30 seconds**
    
    - Agent finishes a call at `10:15:00`.
    
    - The agent becomes eligible for the next queue call from `10:15:30` onward, provided they're otherwise Available.
    
    - Once Wrap Up Time expires, the agent automatically returns to the active pool — no manual action needed.

---

### Overall Call Flow

```text
Incoming call enters queue
            │
            ▼
   Check Consumers list
            │
            ▼
 Filter agents: Status = Available
            │
            ▼
   Apply Distribution Strategy
            │
            ▼
    Offer call to selected agent
            │
   ┌────────┴────────┐
   ▼                  ▼
Answered          No answer (Ring Timeout)
   │                  │
   ▼                  ▼
Call connects     Re-offer to next agent per
   │              Distribution Strategy
   ▼                  │
Call ends              ▼
   │              Max No Answer reached?
   ▼               ┌───────┴───────┐
Wrap Up Time      No               Yes
   │               │                │
   ▼               ▼                ▼
Auto-returns   Retry loop      Status auto-changes to
to Available   continues       configured Agent
   │           (back to                No-Answer Status
   │           "Offer call")            │
   │                              ┌─────┴─────┐
   │                              ▼             ▼
   │                       Available /    On Break /
   │                       Available      Logged Out
   │                       (On Demand)         │
   │                              │             │
   │                              ▼             ▼
   │                       Auto-returns    Requires manual
   │                       to pool         reset before
   │                                       receiving calls again
   └──────────────────────────────┬──────────────────────┘
                                   ▼
                    Agent eligible for next call
```

**Key takeaway:** only two things return an agent to the active pool *automatically* — the Wrap Up Time timer expiring, and a Max No Answer breach where the configured Agent No-Answer Status is itself "Available" or "Available (On Demand)". If the configured status is On Break or Logged Out, the agent needs a manual status change (by a supervisor, or by themselves if self-service is enabled) before they can receive queue calls again.

## Steps to Create a Call-Center

1. Login to your account.
2. Navigate to **Class 5 :material-menu-right: Call-Center**.
3. Click on the `List` tab.
4. Click on blue `+` button to add a new Call Center.<br><img src= "/class5/img/ccnew1.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

5. Configure the Call-Center by filling in the fields: <br><img src= "/class5/img/ccnew2.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

*Click each tab for field explanations:*

=== "Basic"

    * **Name:** Enter the name you want for the call-center.
    * **PBX Server**: Select the PBX Server for the call. The Distributed (Default) server will assign you a server near your location. 
    * **Class 4 Server**: Select the Class 4 Server that will process SIP signaling and route incoming calls to this Call Center queue. The selected server acts as the telephony gateway between external callers and the Call Center.
    * **Extension**: Specify the PBX extension assigned to this Call Center queue. Calls directed to this extension are automatically placed into the queue and distributed to available agents according to the configured routing strategy.
    * **Customer**: You can enter one or more customers who wish to use this feature.

=== "Distribution Strategy"

    It determines how the Call Center selects an agent for the next incoming call, helping balance workloads, improve customer experience, and maximize agent efficiency. <br>It also includes `**Tier Rules** and **Agent No-Answer settings**, allowing administrators to control call escalation between agent groups and define how unavailable agents are handled.</br><img src= "/class5/img/ccnew3.png" width= "300" style="border: 2px solid #4472C4; border-radius: 8px;">

    * **Strategy**

      Select the algorithm used to determine which agent receives the next incoming call.

      | Strategy  | Description | Balances Workload | Priority-Based | Fastest Response | Best Used For |
      | ----------|-------------|-------------------|----------------|------------------|-------------- | 
      | **Ring All** | Rings all available agents simultaneously. The first agent to answer receives the call, and ringing stops for all others|❌|❌|✅| Small teams, reception desks, sales teams, low-volume queues|
      | **Longest Idle Agent**| Routes the call to the available agent who has been idle for the longest time|✅ |❌|✅| Customer support teams, balanced workload distribution|
      | **Round Robin** | Distributes calls sequentially among available agents in rotation|✅|❌|✅| General-purpose queues requiring equal call distribution|
      | **Top Down** | Always offers the call to the highest-priority agent first. If unavailable, the system proceeds down the configured agent list|❌|✅|✅| Priority-based routing, receptionists, senior support teams|
      | **Agent With Least Talk Time** | Selects the available agent with the lowest cumulative talk time|✅|❌|✅| Balancing total conversation time across agents|
      | **Agent With Fewest Calls**| Routes the call to the available agent who has answered the fewest calls during the current session|✅|❌|✅| Equalizing call volume among agents|
      | **Sequentially By Agent Order** | Attempts agents one at a time based on their configured order until one answers|❌|✅|⚠️(*patrially*)| Fixed routing order, escalation workflows, seniority-based teams   |
      | **Random**| Randomly selects an available agent for each incoming call|⚠️(*partially*)|❌|✅| Small teamss, informal call distribution, randomized load balancing |

      > **Note:** "When Tier Rules are enabled, the selected distribution strategy is applied only to agents within the currently active tier. As the queue escalates to additional tiers, the same strategy is applied to agents in those tiers until the call is answered."

    * **Agent No-Answer Status**

      It defines the status assigned to an agent when they fail to answer a queued call. Changing the status helps prevent repeated routing attempts to unavailable agents.

      | Status | Description| Agent Receives New Queue Calls? | Best Used For |
      | -------|------------|---------------------------------|-------------- | 
      | **Available** | The agent remains available after missing a call and immediately continues receiving queue calls|✅| Environments where occasional missed calls are acceptable|
      | **Available (On Demand)** | The agent remains available but only participates in queue routing when additional capacity is required based on queue demand|✅ Yes (when required)| Overflow agents, backup teams, or secondary support groups|
      | **On Break**| The agent is automatically placed into the **On Break** state after missing a queue call. The agent must manually return to an available state before receiving new calls|❌| Preventing repeated routing to unattended workstations or temporarily unavailable agents|
      | **Logged Out**| The agent is automatically logged out of the queue after missing a call. The agent must log back in before becoming eligible to receive queue calls again|❌| High-accountability environments such as contact centers with strict attendance or compliance requirements|

      > **Note:** The selected Agent No-Answer Status only takes effect when an agent does not answer a queue call. It does not affect agents who manually change their status or log out of the queue."

    * **Tier Rules**

      Tier Rules control how calls are escalated between different agent levels when calls are not answered within the configured wait period.

      Instead of ringing every agent simultaneously, the queue can progressively include additional agent tiers.

      This is particularly useful for organizations that prioritize specialist agents before escalating calls to general support teams.

      | Setting | Description | Enabled | Disabled  |
      | --------|-------------|---------|---------- |
      | **Tier Rules Apply** | Enables tier-based call escalation| Calls are routed according to the configured tier hierarchy, escalating through agent tiers as required| The selected **Distribution Strategy** is applied across all available agents, regardless of tier|
      | **Tier Rule Wait Second** | Specifies the time the system waits before expanding the search to the next tier of agents| A lower value escalates calls more quickly, while a higher value gives higher-priority agents more time to answer before involving lower tiers| Not applicable|
      | **Tier Rule Wait Multiply Level** | Increases the wait time for each successive tier by multiplying the configured wait time by the tier level| Each tier waits longer than the previous one (e.g., Tier 1: 10s, Tier 2: 20s, Tier 3: 30s)| All tiers use the same configured wait time|
      | **Tier Rule No Agent No Wait**| Determines how the system behaves when no agents are available in the current tier| Immediately skips the empty tier and proceeds to the next available tier, reducing unnecessary wait time| Waits for the configured tier timeout before moving to the next tier, even if no agents are available|

    * **Wait Time & Abandonment**

      The Wait Time & Abandonment settings control how long callers remain in the queue, how calls are handled when no agents are available, when abandoned calls are discarded, and where calls are routed if the queue cannot process them. <br><img src= "/class5/img/ccnew4.png" width= "300" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

      | Setting | Description |
      | --------|-------------|
      | **Time Base Score**| Selects the reference point used to calculate the caller's waiting priority or queue score. This determines how waiting time is measured for call distribution and queue management|
      | **Max Wait Time** | Specifies the maximum time a caller can remain in the queue before the queue timeout action is triggered. A value of **0** disables the timeout|
      | **Max Wait Time With No Agent** | Defines how long a caller waits when no agents are currently available to receive calls. If the configured time expires, the queue follows its configured timeout or failover behaviour|
      | **Max Wait Time With No Agent (Time Reached)** | Specifies an additional timeout that applies once the **No Agent** wait condition has been reached. This determines how long the caller remains in the queue before the next configured action is executed|
      | **Discard Abandoned After** | Defines the period after which an abandoned caller is removed from the queue. Until this timeout expires, the abandoned call may still be eligible for queue processing depending on the queue configuration|
      | **Abandoned Resume Allowed** | When enabled, callers who reconnect after abandoning the queue can resume their previous queue position instead of joining at the end of the queue|
      | **Failover Destination** | Specifies the destination to which calls are routed if the queue cannot continue processing them, such as when wait limits are exceeded or no agents are available. The destination can be another queue, extension, IVR, or another configured customer destination|

      | Time Base Score Option | Description | Best Used For |
      | ---------- | ----------|-------------|
      | **Queue**  | Calculates the caller's waiting time and priority based on when they entered the current queue. If the call is transferred to another queue, the waiting time is reset and starts from the time the caller joins the new queue. | Independent queues where each queue manages its own waiting time and prioritization|
      | **System** | Calculates the caller's waiting time based on when they first entered the call center system. The accumulated waiting time is preserved even if the caller is transferred between multiple queues| Multi-queue environments where callers should retain their original waiting time and receive consistent priority across queue transfers|

    * **Recording & Hold**

      The Recording & Hold settings configure how calls are recorded and what callers hear while waiting in the queue.

      | Setting | Description |
      | --------|------------ | 
      | **MOH Sound** | Select the **Music on Hold (MOH)** audio file or playlist that will be played to callers while they are waiting in the queue or when an agent places the call on hold. The selected MOH helps keep callers informed and engaged during waiting periods|

=== "Consumers"

    The **Consumers** section is used to assign and manage the agents who can receive calls from the Call Center queue. <br>Each consumer represents a **SIP user (agent)** and includes settings that control call distribution priority, routing order, availability, and performance statistics.</br> <br><img src= "/class5/img/ccnew5new.png" width= "600" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

    Administrators can add, modify, or remove agents from the queue, assign priority levels, and monitor their current status and activity.

    * **Consumer Settings**

      | Field | Description |
      | ------|------------ |
      | **SIP User** | Select the SIP user (agent) to assign to the Call Center queue. Only assigned agents are eligible to receive queue calls|
      | **Level** | Defines the agent's **tier (priority level)** within the queue. Agents in lower-numbered levels (for example, Level 1) are offered calls before agents in higher levels when **Tier Rules** are enabled|
      | **Position** | Specifies the agent's order within the selected level. This value is primarily used by routing strategies that process agents sequentially, such as **Top Down** or **Sequentially By Agent Order**.     |
      | **Type** | Defines how the agent participates in the queue. For example, **Callback** allows the agent to receive callback requests generated by the queue or **UUID Standby** that configures the consumer as a standby agent identified by a unique UUID, enabling advanced call routing and failover scenarios|
      | **Status**| Displays or changes the agent's current queue status, such as **Available**, **On Break**, or **Logged Out**. Only eligible agents receive incoming queue calls|
      | **Waiting** | Displays the amount of time the agent has been idle or waiting since their last queue activity. This value is used by strategies such as **Longest Idle Agent**|
      | **Total Calls**  | Shows the total number of calls answered by the agent within the queue|
      | **Missed Calls** | Displays the number of queue calls that were offered to the agent but were not answered|

    * **SIP User**: When you click on a SIP User arrow `>`, the following parameters will appear:
      
      | Field | Description |
      | ------|------------ |
      | **Max No Answer** | Number of consecutive unanswered calls before the agent's status is changed to agent-no-answer-status|
      |**Wrap Up Time**|Seconds the agent is unavailable after a call ends before returning to Available|
      |**Reject Delay Time**| Seconds to wait before offering another call to an agent who rejected the previous one|
      |**Busy Delay Time**|Seconds to wait before offering another call to an agent whose line returned busy|
      |**No Answer Delay Time**| Seconds to wait before offering another call to an agent who did not answer|
      |**Ring Timeout**| maximum amount of time a system will let an outbound call ring before giving up and treating it as unanswered|

    * **Toolbar Actions**: The toolbar above the Consumers table provides quick management options.

      | Action            | Description  |
      | ----------------- | -------------|
      | **Search**        | Search for an agent by SIP user name |
      | **Add (+)**       | Add a new SIP user to the Call Center queue|
      | **Save Selected** | Save changes made to the selected consumer(s)|
      | **Refresh**       | Reload the consumer list and update the displayed statistics|
      | **Delete**        | Remove the selected consumer(s) from the queue|

      If **Tier Rules** are enabled:

      1. The system first attempts to deliver the call to **Level 1** agents.
      2. If no Level 1 agent answers within the configured tier wait time, the call escalates to **Level 2**.
      3. Within each level, the selected **Distribution Strategy** (for example, Ring All, Round Robin, or Top Down) determines which agent receives the call.

      > **Note:** The **Level** and **Position** fields influence call routing only when the selected **Distribution Strategy** or **Tier Rules** make use of them. Strategies such as **Ring All** generally ignore the **Position** field because all eligible agents at the active tier are rung simultaneously.

=== "Callers"

      The **Callers** section displays all callers currently waiting in or being served by the Call Center queue. <br>It provides real-time visibility into each caller's status, wait time, assigned agent, and queue priority, enabling supervisors to monitor queue activity and identify callers requiring attention. </br><br><img src= "/class5/img/ccnew7.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

      | Field | Description |
      | ------|------------ | 
      | **Caller** | Displays the caller's phone number or Caller ID|
      | **State** | Indicates the caller's current status, such as **Waiting**, **Connected**, or **Abandoned**|
      | **Joined** | Shows the time when the caller entered the queue|
      | **Waiting** | Displays the total time the caller has been waiting in the queue|
      | **Serving Agent** | Identifies the agent currently handling the call. This field remains empty until the call is assigned|
      | **Score**| Displays the caller's queue priority score, which is used by the routing engine to determine the order in which waiting callers are served|

6.Click `Save`. <br><img src= "/class5/img/ccnew6.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

7.Some additional actions:

| Action | Description |
| -------|-------------|
| **Reload** | Reloads the Call Center configuration and refreshes the queue settings without interrupting active calls. Use this after making configuration changes to apply the latest settings|
| **Destructive Reload** | Performs a full reload of the Call Center, clearing the current runtime state and reinitializing the queue with the latest configuration. This operation may interrupt active queue processing and should only be used when necessary, such as after major configuration changes or troubleshooting|
| **Refresh Live Data**  | Updates the dashboard with the latest real-time queue statistics, agent status, and call information without reloading the Call Center configuration|

> **Note:** Use **Reload** for routine configuration updates. **Destructive Reload** should only be performed during maintenance or troubleshooting, as it may affect active queue operations.

## Dashboard

The **Dashboard** provides a real-time overview of Call Center operations, enabling supervisors and administrators to monitor queue activity, agent availability, call handling performance, and service levels from a single interface.

It displays key performance indicators (KPIs), live call activity, queue health, and agent statistics, helping identify staffing issues, long wait times, and other operational conditions that may require attention. <br><img src= "/class5/img/ccnew8.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

---

### Dashboard Widgets

| Widget  | Description |
| --------|------------ | 
| **Agents** | Displays the number of agents currently logged in compared to the total number assigned to all queues|
| **Live Calls** | Shows the number of active calls currently being handled and callers waiting in the queue|
| **Calls Answered** | Displays the total number of calls successfully answered by agents during the current reporting period|
| **Abandonment Rate**  | Shows the percentage of callers who disconnected before being connected to an agent|
| **SLA Breaches** | Displays the number of callers whose waiting time exceeded the configured maximum wait time (SLA)|
| **Staffing Risk** | Indicates the number of agents assigned to queue tiers who are currently logged out, potentially affecting queue performance|
| **Near Auto-Removal** | Displays agents who are close to being automatically removed from their assigned queues due to missed call limits or configured queue rules|
| **On External Call**  | Shows the number of agents currently unavailable because they are handling calls outside the queue|
| **Untiered Agents**   | Displays agents that are not assigned to any queue tier and therefore are not eligible to receive queue calls|
| **Unstaffed Queues**  | Indicates queues that currently have no assigned agents and are unable to receive calls|

---

### Notifications

The Dashboard displays warning banners when administrator attention is required.

!!! Example "Examples include:"
      * Agents assigned to queue tiers but currently logged out.
      * Agents approaching automatic removal due to missed calls.
      * Other queue or staffing-related alerts.

These notifications help supervisors quickly identify and resolve operational issues.

---

### Live Calls

The **Live Calls** section displays all active calls currently waiting or being served.

| Column | Description  |
|--------|--------------|
| **Caller**    | Displays the caller's phone number or Caller ID |
| **Queue**     | Shows the queue handling the call|
| **Agent**     | Displays the assigned agent, if connected|
| **State** | Indicates the current call status (e.g., Waiting, Ringing, Connected)|
| **Wait Time** | Displays the total time the caller has been waiting in the queue |

Calls are automatically sorted by the **longest waiting caller first**, allowing supervisors to prioritize delayed calls.

---

### Queue Health

The **Queue Health** panel provides a summary of the operational status of each configured queue.

| Column  | Description  |
| --------|------------- | 
| **Queue** | Displays the queue name and description|
| **Live Staffing** | Shows the number of agents currently available, along with any agents not answering calls|
| **Answered / Abandoned** | Displays the number of answered and abandoned calls|
| **Abandonment Rate**     | Shows the percentage of callers who abandoned the queue before being connected to an agent|

Queues are sorted by the **highest abandonment rate first**, helping administrators identify queues that require immediate attention.

---

### Agent Leaderboard

The **Agent Leaderboard** provides real-time performance statistics for agents assigned to the Call Center.

| Column | Description|
| -------|----------- | 
| **#** | Agent ranking based on answered calls|
| **Agent** | Displays the SIP user and associated agent name|
| **Status** | Shows the agent's current availability (e.g., Available, Logged Out, Busy)|
| **Queues** | Displays the number of queues the agent is assigned to|
| **Answered / Missed** | Shows the number of answered and missed queue calls|
| **Answer Rate**       | Displays the percentage of offered calls answered by the agent|
| **Talk Time**         | Shows the total duration spent handling calls|
| **Idle Since**        | Displays how long the agent has been idle since their last completed call or status change. |

Agents are ranked by the **number of answered calls**, making it easy to compare individual performance.

---

⚠️ Note: This is a basic PBX queueing feature.
For advanced contact center capabilities (campaigns, scripts, leadsets), refer to the [Contact Center](/customer-portal/cp-contact-center/) (Apps Platform).
