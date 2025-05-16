# Contact Center

## Overview

Our Dialer is a comprehensive contact center solution designed to streamline outbound and inbound campaigns.

It includes a Dialer Dashboard, Agent Management, Campaign Management, and Lead Management functionalities.

The dialer supports **Auto Dialer**, **Preview Dialer** and **Broadcast Dialer (AI Agent)** for flexibility in call operations.

## Types of Dialer

Here, we've three types of dialers at your disposal.

### Preview Dialer

A Preview Dialer is an outbound dialing system, where the agent has detailed information about the customer before dialing.

The agent gets enough time to review and decide whether to call the person and hit the call button to initiate the call.

**Pros**:

+ Personalization, higher quality interactions.
+ Agents feel more in control, less rushed.
+ Agents align calls to customer needs.

**Cons**:

+ Slower pace.
+ Fewer calls per hour as compared to Auto Dialer.
+ Skips Lead Automation.
+ More agent involvement leads to inconsistent flow.

!!! question "How it works?"
    ```mermaid
    flowchart TD
        style A fill:#E1F5FE,stroke:#0277BD,stroke-width:2,rx:10,ry:10
        style B fill:#FFF3E0,stroke:#EF6C00,stroke-width:2,rx:10,ry:10
        style C fill:#F3E5F5,stroke:#6A1B9A,stroke-width:2,rx:10,ry:10
        style D fill:#E8F5E9,stroke:#2E7D32,stroke-width:2,rx:10,ry:10
        style E fill:#FFEBEE,stroke:#C62828,stroke-width:2,rx:10,ry:10
        style F fill:#E0F2F1,stroke:#00796B,stroke-width:2,rx:10,ry:10

        A(["👩‍💼 Agent becomes available<br/>🟢 Marks as 'Ready'"]) --> B(["📋 System selects next contact<br/>🔍 Displays profile:<br/>- First/Last Name<br/>- Address, Contact<br/>- City, Gender<br/>- Email<br/>- Comments"])
        B --> C(["🧠 Agent reviews info:<br/>📜 Assess script<br/>🎯 Prepare pitch<br/>⏭️ Decide to dial or skip"])
        C --> D(["📞 Agent clicks 'Dial'<br/>(Manual Mode)"])
        D --> E(["📝 Call ends<br/>Agent adds:<br/>- Notes<br/>- Tags<br/>- Disposition"])
        E --> F(["🔄 Next preview pops up"])
        F --> B
    ```
Best for: Complex or high-value calls where agents need context (e.g., sales or support follow-ups).

### **Auto Dialers**

 Its an outbound dialing system that automatically dials numbers from a contact list and connects answered calls to available agents in real-time.

This auto dialer dials one number per available agent only after they finish their current call. It’s safer but a bit slower.

**Pros**:

+ **Accuracy**: Reduction in dropped calls as calls are made only when agent is available.
+ **Better agent control**: Agents aren't overwhelmed with back-to-back calls.
+ **Improved call quality**: Agents get better to prepare between calls.
+ **Easier integration and implementation**

**Cons**:

+ **Reduced Call Efficiency**: Auto dialers may not always optimize call routing, leading to lower actual call connection rates despite high dialing volumes.

+ **Increased Call Abandonment**: Over-dialing can result in more calls being dropped if not enough agents are available to answer, negatively impacting customer experience.

+ **Limited Preparation Time**: Agents often have little to no time to review customer details before the call connects, which can reduce the quality of interactions.

+ **Agent Burnout Risk**: Continuous back-to-back calls with minimal breaks can lead to fatigue, decreased morale, and higher agent turnover.
  
**Key Features**:

+ 1:1 dialing ratio is one call per agent.
+ No calls are made unless the agents are available/ready.

!!! question "How it works?"
    ```mermaid
    flowchart TD
        style A fill:#E0F7FA,stroke:#006064,stroke-width:2,rx:10,ry:10
        style B fill:#FFF3E0,stroke:#EF6C00,stroke-width:2,rx:10,ry:10
        style C fill:#F1F8E9,stroke:#33691E,stroke-width:2,rx:10,ry:10
        style D fill:#F3E5F5,stroke:#6A1B9A,stroke-width:2,rx:10,ry:10
        style E fill:#E8F5E9,stroke:#2E7D32,stroke-width:2,rx:10,ry:10
        style F fill:#FFEBEE,stroke:#C62828,stroke-width:2,rx:10,ry:10

        A(["👩‍💼 Agent finishes call<br/>🔄 Marks as 'Ready'"]) --> B(["📋 System pulls<br/>next number from list"])
        B --> C(["📞 System auto-dials<br/>the contact"])
        C --> D{"📲 Call Answered?"}
        D -- "✅ Yes" --> E(["🤝 Connect call<br/>to agent immediately"])
        D -- "❌ No<br/>(Busy / Voicemail / No Answer)" --> F(["⏭️ Skip to next number"])
        F --> B
        E --> A
    ```

### Broadcast Dialer (AI Agent)

A Broadcast Dialer is an automated outbound calling system where an AI Agent initiates and handles the entire interaction with the customer. This dialer involves no human intervention.

Once activated, the system starts dialing contacts in bulk. The AI Agent engages with each person using natural conversation, guided by a predefined script and logic.

You can create your own personal AI Agent. [Click here](https://docs.connexcs.com/class5/ai-agent/) to know more.

**Pros**:

+ High speed and efficiency — thousands of calls per hour.
+ Consistent, 24/7 availability.
+ Reduced cost due to no human involvement.

**Cons**:

+ Limited to structured or semi-structured conversations.
+ May not handle highly emotional or unpredictable interactions as well as a human.
+ Requires upfront setup and testing for smooth operation.

!!! question "How it works?"
    ```mermaid
    flowchart TD
        style A fill:#F3E5F5,stroke:#6A1B9A,stroke-width:2,rx:10,ry:10
        style B fill:#E8F5E9,stroke:#2E7D32,stroke-width:2,rx:10,ry:10
        style C fill:#FFEBEE,stroke:#C62828,stroke-width:2,rx:10,ry:10
        style D fill:#E1F5FE,stroke:#0277BD,stroke-width:2,rx:10,ry:10
        style E fill:#FFF3E0,stroke:#EF6C00,stroke-width:2,rx:10,ry:10

        A(["🤖 AI Agent becomes active<br/>🟢 Starts broadcast campaign"]) --> B(["📞 System auto-dials next contact"])
        B --> C(["🧠 AI Agent interacts:<br/>- Uses custom script<br/>- Detects intents<br/>- Responds in real-time"])
        C --> D(["📝 AI logs outcome:<br/>- Call summary<br/>- Sentiment<br/>- Disposition<br/>- Optional transcription"])
        D --> E(["🔄 Moves to next contact automatically"])
        E --> B
    ``` 

From this point forward, we move into the next section [Setting up and using the Contact Center]([add link](https://bani-contact-center--connexcs-docs.netlify.app/customer-portal/cp-cc-install/).

The steps outlined here are common to all three dialer types and form the baseline configuration required for effective operation.
