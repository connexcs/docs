# Contact Center

## Overview

The ConnexCS Dialer is a comprehensive contact center solution designed to streamline outbound and inbound campaigns.

It includes a Dialer Dashboard, Agent Management, Campaign Management, and Lead Management functionalities.

The dialer supports both Auto Dialer and Preview Dialer modes for flexibility in call operations.

## Types of Dialer

At ConnexCS we've three types of dialers at your disposal.

### **Auto Dialers**

 Its an outbound dialing system that automatically dials numbers from a contact list and connects answered calls to available agents in real-time.

This auto dialer dials one number per available agent only after they finish their current call. It’s safer but a bit slower.

**Pros**:

+ **Accuracy**: Reduction in dropped calls as calls are made only when agent is available.
+ **Better agent control**: Agents aren't overwhelmed with back-to-back calls.
+ **Improved call quality**: Agents get better to prepare between calls.
+ **Easier integration and implementation**

**Cons**:

+ Lower call volume throughput.
+ More dropped calls as the system may over-dial.
+ Shorter lead time for agents.
+ Back-to-back calls can make agents frustrated.

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

### Preview Dialer

A Preview Dialer is an outbound dialing system, where the agent has detailed information about the customer before dialing.

The agent gets enough time to review and decide whether to call the person and hit the call button to initiate the call

!!! question "How it works?"
    ```mermaid
    flowchart TD
        style A fill:#E1F5FE,stroke:#0277BD,stroke-width:2,rx:10,ry:10
        style B fill:#FFF3E0,stroke:#EF6C00,stroke-width:2,rx:10,ry:10
        style C fill:#F3E5F5,stroke:#6A1B9A,stroke-width:2,rx:10,ry:10
        style D fill:#E8F5E9,stroke:#2E7D32,stroke-width:2,rx:10,ry:10
        style E fill:#FFEBEE,stroke:#C62828,stroke-width:2,rx:10,ry:10
        style F fill:#E0F2F1,stroke:#00796B,stroke-width:2,rx:10,ry:10

        A(["👩‍💼 Agent becomes available<br/>🟢 Marks as 'Ready'"]) --> B(["📋 System selects next contact<br/>🔍 Displays profile:<br/>- First/Last Name<br/>- Address, Contact<br/>- City, Gender<br/>- Call Count, Email<br/>- Comments"])
        B --> C(["🧠 Agent reviews info:<br/>📜 Assess script<br/>🎯 Prepare pitch<br/>⏭️ Decide to dial or skip"])
        C --> D(["📞 Agent clicks 'Dial'<br/>(Manual Mode)"])
        D --> E(["📝 Call ends<br/>Agent adds:<br/>- Notes<br/>- Tags<br/>- Disposition"])
        E --> F(["🔄 Next preview pops up"])
        F --> B
    ```
Best for: Complex or high-value calls where agents need context (e.g., sales or support follow-ups).

**Pros**:

+ Personalization, higher quality interactions.
+ Agents feel more in control, less rushed.
+ Agents align calls to customer needs.

**Cons**:
+ Slower pace.
+ Fewer calls per hour as compared to Auto Dialer.
+ Skips Lead Automation.
+ More agent involvement leads to inconsistent flow.

### Broadcast

## Contact Center Setup & Usage Guide

### Step-I: Install Contact Center App

1. Login to your **Control Panel**.
2. Navigate to **Setup :material-menu: App Store**. <img src= "cc1.png">
3. Click on the **Contact Center** application. Click on `Install`. <img src= "cc2.png">
4. Modify the `App Name` (optional) and select the app `Version` (optional). Click `Install`. <img src= "cc3.png">
5. Click on `Config`. <img src= "cc4.png">
6. A window will pop-up where you need to select the `User API`, `Class 5 Server` and `Class 4 Server` and hit the `Next Step` button. <img src= "cc5.png">
7. Select a pre-loaded database or click on `Continue With New Database`. [Click here](https://docs.connexcs.com/datasuite/) to follow the steps for database creation. Click `Confirm`. <img src= "cc6.png">.
8. **Adding the Domain**
   1. Navigate to **IDE :material-menu: Select the Contact Center App (you created) :material-menu: Domain**. Click on `Domain`. <img src= "cc7.png">
   2. Click on the blue `+` sign.
   3. Select the `App` and enter the `domain` for your dialer. Click `Save`. <img src= "cc8.png">
   [Click here](https://docs.connexcs.com/apps/architecture/domain/) to get more information on domains.

After following the above step, we've successfully installed the Contact Center application.

Next, proceed to the Customer Portal to review the Contact Center application's setup process and understand its operational workflow.

### Dialer Dashboard: Features and Functions

1. Navigate to **Customer Portal :material-menu-right: Contact Center**.
2. **Accessing the Dialer**:
   1. The dashboard provides a real-time overview of campaign activities, agent statuses, data remaining and call progress.
3. **Dashboard Features**:
   1. **Agents Logged In**: Tracks number of active agents.
   2. **Agents Paused**: Number of agents currently not available take calls but are logged in the system.
   3. **Agents Waiting**: Number of agents available and ready to take the call.
   4. **Agents in Call**: Number of agents actively involved in a live conversation.
   5. **Active Calls**: Total number of live and ongoing calls.
   6. **Calls Waiting**: Displays the number of queued calls.
   7. **Calls Ringing**: Total number of calls initiated but not answered yet.
   8. **Data Remaining**: Shows the number of contacts left to be dialed.

<img src= "cc8.png">

4. **Campaign Overview**: Summarizes ongoing campaigns, including active calls, answered calls, and failed calls.


### Step-II(a): Setup Auto Dialer






















Campgain:

2 types:

Preview dialer
Auto dialer: beneficial for outbound calls; automatically loads up the contact details; call transfer option to manager; submit and go on pause option; if the call gets disconnected and the agent is taking more than 30 seconds to select/set the disposition, the agent will ne removed from the queue.
