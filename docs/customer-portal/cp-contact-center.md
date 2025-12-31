# Contact Center

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Customer Portal / Contact Center<br>
<strong>Audience</strong>: Administrators, Support Team, Engineers<br>
<strong>Difficulty</strong>: Intermediate<br>
<strong>Time Required</strong>: Approximately 20–40 minutes<br>
<strong>Prerequisites</strong>: Active ConnexCS account, access to the Customer Portal module, basic understanding of contact-center workflows and portal navigation<br>
<strong>Related Topics</strong>: Customer Portal Overview, <a href="https://docs.connexcs.com/customer/main/#contacts">Contacts Management</a>, <a href="https://docs.connexcs.com/customer/customer/#customer-dashboard">Customer Dashboard</a>, <a href="https://docs.connexcs.com/setup/integrations/portal/">Portal Access Configuration</a><br>
<strong>Next Steps</strong>: Review portal permissions for contact-center access, configure roles and workflows, test portal login and contact-center operations, and integrate with customer account & contacts data<br>

</details>

## Overview

Our Dialer is a comprehensive contact center solution designed to streamline outbound and inbound campaigns.

It includes a Dialer Dashboard, Agent Management, Campaign Management, and Lead Management functionalities.

The dialer supports **Auto Dialer**, **Preview Dialer** and **Broadcast Dialer (AI Agent)** for flexibility in call operations.

## Types of Dialer

Here, we've three types of dialers at your disposal.

**1. Preview Dialer**

**2. Auto Dialer**

**3. Broadcast Dialer**

### Preview Dialer

A Preview Dialer is an outbound dialing system, where the agent has detailed information about the customer before dialing.

The agent gets enough time to review and decide whether to call the person and hit the call button to initiate the call.

!!! question "How it works?"
    ```mermaid
    flowchart TD
        style A fill:#E1F5FE,stroke:#0277BD,stroke-width:2,rx:10,ry:10
        style B fill:#FFF3E0,stroke:#EF6C00,stroke-width:2,rx:10,ry:10
        style C fill:#F3E5F5,stroke:#6A1B9A,stroke-width:2,rx:10,ry:10
        style D fill:#E8F5E9,stroke:#2E7D32,stroke-width:2,rx:10,ry:10
        style E fill:#FFEBEE,stroke:#C62828,stroke-width:2,rx:10,ry:10
        style F fill:#E0F2F1,stroke:#00796B,stroke-width:2,rx:10,ry:10

        A(["👩‍💼 Agent becomes available<br/>🟢 Marks as 'Ready'"]) --> B(["📋 System selects the contact<br/>🔍 Displays profile:<br/>- First/Last Name<br/>- Address, Contact<br/>- City, Gender<br/>- Email<br/>- Comments"])
        B --> C(["🧠 Agent reviews info:<br/>📜 Assess script<br/>🎯 Prepare pitch<br/>🤳 Decide to dial"])
        B --> G(["🧠 Agent reviews info: <br> ❌ Decides to skip"</br>])
        G --> B
        C --> D(["📞 Agent clicks 'Dial'<br/>"])
        D --> E(["📝 Call ends<br/>Agent adds:<br/>- Notes<br/>- Tags<br/>- Disposition"])
        E --> F(["🔄 Next preview pops up"])
        F --> B
    ```

### Auto Dialers

 Its an outbound dialing system that automatically dials numbers from a contact list and connects answered calls to available agents in real-time.

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
        D -- "✅ Yes" --> E(["Call enters the queue"])
        E --> F(["🤝 Connect call<br/>to the available agent immediately"])
        D -- "❌ No" --> G(["⏭️ Skip to next number"])
        G --> B
        F --> A
    ```

### Broadcast Dialer (AI Agent)

A Broadcast Dialer is an automated outbound calling system where an AI Agent initiates and manages the entire interaction with the customer — without any human intervention.

Once activated, the system starts dialing contacts in bulk. The AI Agent engages with each person using natural conversation, guided by a predefined script and logic.

In addition to AI-driven interactions, the Broadcast Dialer also supports **IVR (Interactive Voice Response)**, allowing customers to respond to prompts (e.g., by pressing keypad numbers) for routing, surveys, confirmations, or other automated workflows.

You can create your own personal AI Agent. [Click here](https://docs.connexcs.com/class5/ai-agent/) to know more.

**Pros**:

+ High speed and efficiency — thousands of calls per hour.
+ Consistent, 24/7 availability.
+ Reduced cost due to no human involvement.

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
        C --> D(["📝 AI logs outcome:<br/>- Call summary<br/<br/>- Disposition<br/>- Optional transcription"])
        D --> E(["🔄 Moves to next contact automatically"])
        E --> B
    ``` 

From this point forward, we move into the next section [Setting up and using the Contact Center](https://docs.connexcs.com/customer-portal/cp-cc-install/).
