# Contact Center

## Overview

The ConnexCS Dialer is a comprehensive contact center solution designed to streamline outbound and inbound campaigns.

It includes a Dialer Dashboard, Agent Management, Campaign Management, and Lead Management functionalities.

The dialer supports both Auto Dialer and Preview Dialer modes for flexibility in call operations.

## Types of Dialer

At ConnexCS we've three types of dialers at your disposal.

1. **Auto Dialers**

 Its an outbound dialing system that automatically dials numbers from a contact list and connects answered calls to available agents in real-time.

This auto dialer dials one number per available agent only after they finish their current call. It’s safer but a bit slower.

**Pros**: Reduces dropped calls.

**Cons**: Lower call volume throughput.

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

**Key Features**:

+ 1:1 dialing ratio is one call per agent.
+ No calls are made unless the agents are available/ready.
+ Skips busy, no-answer, or failed numbers automatically. **DO WE HAVE THIS FEATURE?**
+ Minimizes downtime between calls without overwhelming agents. **DOES THIS HAPPEN WITH OUR DIALER?**

**Advantages**:

+ **Accuracy**: Reduction in dropped calls as calls are made only when agent is available.
+ Better agent control

We start from creating an **Agent**

Campgain:

2 types:

Preview dialer
Auto dialer: beneficial for outbound calls; automatically loads up the contact details; call transfer option to manager; submit and go on pause option; if the call gets disconnected and the agent is taking more than 30 seconds to select/set the disposition, the agent will ne removed from the queue.

Script: the agent will follow the script