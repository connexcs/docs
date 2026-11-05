# Class 5

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Infrastructure & Connectivity / PBX<br> <strong>Audience</strong>: Network Engineers, Administrators, Support Team<br> <strong>Difficulty</strong>: Beginner to Intermediate<br> <strong>Time Required</strong>: Approximately 20–30 minutes<br> <strong>Prerequisites</strong>: Active ConnexCS account with the Class 5 module enabled; familiarity with core Class 4 softswitch concepts (routing, SIP devices).<br> <strong>Related Topics</strong>: <a href="https://docs.connexcs.com/spec/">Class 4 Softswitch</a>, <a href="https://docs.connexcs.com/customer/class5/">Class5</a>, <a href="https://docs.connexcs.com/class5/creating-group/">Groups</a>, <a href="https://docs.connexcs.com/class5/creating-ivr/">IVR</a>, <a href="https://docs.connexcs.com/class5/call-center/">Call Center</a>, <a href="https://docs.connexcs.com/class5/creating-conference/">Conference</a>, <a href="https://docs.connexcs.com/class5/voicemail/">Voicemail</a><br> <strong>Next Steps</strong>: After reviewing the concepts below, configure your first <a href="https://docs.connexcs.com/class5/creating-group/">Hunt Group</a> or <a href="https://docs.connexcs.com/class5/creating-ivr/">IVR</a>, set up <a href="https://docs.connexcs.com/class5/call-center/">Call Queues</a> for a call center use case, and test an end-to-end call flow through Class 4 into Class 5.<br>

</details>

---

To fully appreciate the features of Class 5 services, it's essential to first understand Class 4 services and the key differences between them.

## Class 4 vs. Class 5 Softswitch

### What is a Class 4 Softswitch?

A Class 4 softswitch is primarily responsible for routing traffic from one carrier to another.

ConnexCS operates as a Class 4 softswitch.

The call never connects to ConnexCS itself; it simply passes through from Point A to Point B.

It can perform advanced routing functions, but does not handle call termination, media processing, or IVR.

### What is a Class 5 Softswitch?

A Class 5 softswitch is responsible for call termination and media handling.

It can perform actions like:

- Answering calls
- Playing messages
- Providing voicemail and IVR services
- Unlike Class 4, a Class 5 switch manages end-user call features.

**Key Difference Between Class 4 and Class 5 Softswitches**

| Feature | Class 4 Softswitch (ConnexCS) | Class 5 Softswitch |
|---|---|---|
| Call Routing | ✅ | ✅ |
| Call Termination | ❌ | ✅ |
| IVR & Media Services | ❌ | ✅ |
| End-User Features | ❌ | ✅ |

---

## What is Class 5 Cloud PBX?

A PBX (Private Branch Exchange) is a system that manages an organization's outgoing and incoming calls and enables internal communication within a business.

ConnexCS's Class 5 offering is a multi-tenant, cloud-hosted PBX that runs on the same globally redundant infrastructure as the Class 4 switch. The two are designed to work together: Class 4 handles routing and interconnect between carriers, while Class 5 handles the terminating applications — IVR, queues, voicemail, and conferencing — at the point a call reaches an end user.

---

## Core Components

### Hunt Groups (Ring Groups)

A Hunt Group rings a defined set of member numbers/extensions simultaneously when a call arrives for the associated group.

- Members are grouped by department or function.
- No load-balancing logic is applied — all group members ring concurrently.
- Suited to lower call-volume scenarios where simple distribution is sufficient, as opposed to Call Queues, which apply active balancing.
- Available as a standard feature across all plans.

See: [Groups](https://docs.connexcs.com/class5/creating-group/)

### Call Queues (ACD)

Call Queues (Automatic Call Distribution) extend beyond Hunt Group behavior by adding call-balancing, overflow, and escalation logic.

**Supported configuration options**:

- Team-based and skill-based agent grouping.
- Overflow designation — agents/teams that absorb excess call volume during high-traffic periods.
- Multi-skill queue membership, allowing an agent to belong to more than one queue.
- Smart routing — calls are only routed to currently available agents.
- Configurable wrap-up time between calls per agent.
- Trainee/new-agent designation to throttle call volume routed to a given agent.
- Real-time queue metrics and live call tracking, exposed to administrators.

All configuration changes are applied remotely without on-site intervention, consistent with the platform's hosted delivery model.

See: [Call Center](https://docs.connexcs.com/class5/call-center/), [Contact Center Setup](https://docs.connexcs.com/customer-portal/cp-cc-install/)

### IVR (Interactive Voice Response)

An IVR presents callers with digit-based menu options. Keypad input is sent as a DTMF tone to the host system, which maps the received digit to a configured action (e.g., transfer to a queue, play a message, route to voicemail).

- Designed to handle high call volumes without requiring a live agent for routing or basic information delivery.
- Typical use cases: automated account/banking lookups, scheduling information lines, automated voting/polling lines.

See: [IVR](https://docs.connexcs.com/class5/creating-ivr/)

### Conference Bridges

Multi-party audio conferencing hosted on the Class 5 platform.

See: [Conference](https://docs.connexcs.com/class5/creating-conference/)

### Voicemail

Per-extension voicemail, integrated with the other Class 5 call-handling components (Hunt Groups, Queues, IVR).

See: [Voicemail](https://docs.connexcs.com/class5/voicemail/)

---

## Architecture: Class 4 + Class 5 Together

Class 5 does not operate as a standalone termination point — it is deployed in combination with the Class 4 switch:

1. Inbound traffic reaches the platform via the Class 4 layer (routing, carrier interconnect, ingress via AnyEdge where configured).
2. Calls destined for a Class 5-hosted extension, queue, or IVR are handed off from Class 4 to Class 5 for termination.
3. Class 5 answers the call and executes the configured application logic (IVR menu, queue distribution, hunt group ring, voicemail, or conference join).

This separation keeps routing/interconnect (Class 4) and call termination/application logic (Class 5) as distinct layers, while running on shared underlying infrastructure.

See: [Class4](https://docs.connexcs.com/spec/), [Class5](https://docs.connexcs.com/customer/class5/)

---
