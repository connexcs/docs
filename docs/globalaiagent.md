# Global AI Agent

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: AI & Automation → Global AI Agent<br> <strong>Audience</strong>: Developers, Product Teams, System Administrators, Support Teams<br> <strong>Difficulty</strong>: Beginner–Intermediate<br> <strong>Time Required</strong>: 5–10 minutes<br> <strong>Prerequisites</strong>: ConnexCS account with AI Agent access; basic understanding of chat interfaces and automation workflows<br> <strong>Related Topics</strong>: MCP Server, AI Chat, App Platform, Automation Tools<br> <strong>Next Steps</strong>: Configure AI Agent settings, connect MCP servers, start conversations, and integrate with workflows.<br>

</details>

---

## Overview

The **Global AI Agent** is an intelligent assistant integrated across the platform, designed to streamline workflows, enhance productivity, and simplify user interactions.

It serves as a unified interface that allows users to:

- Interact with platform features using natural language

- Retrieve account-related information instantly

- Automate operational tasks and workflows

- Access contextual help and guidance

The AI Agent combines conversational intelligence with system-level execution, enabling both **informational queries** and **action-based operations**.

---

## Key Capabilities

### 1. Conversational Assistance
The AI Agent allows users to interact using natural language to:

- Ask questions about features, settings, or configurations

- Get step-by-step guidance

- Troubleshoot issues

---

### 2. Workflow Automation
Users can automate tasks directly through prompts, such as:

- Configuring services

- Managing resources

- Performing operational actions

The AI Agent translates user input into executable workflows, reducing manual effort.

---

### 3. Context-Aware Responses
The system understands user context and provides:

- Personalized responses

- Relevant suggestions

- Accurate, account-specific insights (when applicable)

---

### 4. Tool Integration (MCP Support)
The AI Agent integrates with backend tools via **MCP (Model Context Protocol) servers**, enabling it to:

- Fetch account-specific data

- Execute actions within the system

- Interact with platform services in real time

---

## MCP Dependency

The AI Agent operates in two modes depending on the type of request:

### When MCP is Required
MCP is used for:

- Accessing account-specific information

- Executing actions (e.g., configurations, updates)

- Running workflows tied to platform services

### When MCP is Not Required
MCP is not needed for:

- General questions

- Documentation-related queries

- Concept explanations

In these cases, the AI Agent responds independently without invoking backend tools.

---

## How to Use the Global AI Agent

1. **Open AI Chat**

      * Navigate to the **AI interface**.
      * Click on **New Conversation (`+`)**. Enter your query or command in **natural language**.
      * **Explore More (Advanced Suggestions)**: It provides enhanced, personalized suggestions based on your queries.
          * Generates deeper insights and recommendations.
          * May consume additional tokens.
          * Useful for advanced users seeking optimization tips<br><img src= "/misc/img/gaa1_new.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

2. **Configure Initial Settings**:
      1. `Add Context` (optional field): Allows you to provide additional information to the AI before or during a conversation so it can give more accurate, relevant, and helpful responses. You can either add `Text Input` or upload text files using `File Upload` option. <br><img src= "/class5/img/chat3.png" width= "400" style="border: 2px solid #4472C4; border-radius: 8px;"></br><br><img src= "/class5/img/chat4.png" width= "400" style="border: 2px solid #4472C4; border-radius: 8px;"> <br>Click `Add to Chat`.</br>
      2. Select the mode of the model:
         1. `General` (default): A fast model focused on quick results.
         2. `Expert`: A reasoning model, takes longer to respond.
       3. `MCP Severs`: Allows you to select the MCP server the AI uses to access tools, data, and integrations for performing actions during the conversation.
       4. `Toggle` for fullscreen.
       5. `PAID`: It provides a token-level usage breakdown for the Global AI Agent—showing daily free quota consumption, exhaustion state, transition to paid billing, total billable tokens used, and the active model’s per-token pricing rate. <br><img src= "/misc/img/gaa2.png" width= "300" style="border: 2px solid #4472C4; border-radius: 8px;"></br> [Click here](/globalaiagent/#token-usage-paid-feature) for detailed information on **Token Usage**.
       6. If your tokens have expired and you still want to continue with the **General/Expert** mode then you need to enable packages under **Setup :material-menu-right: Settings :material-menu-right: Account :material-menu-right: General LLM Tokens/Expert LLM Tokens**. It will be visible under `PAID USGAE`. Daily usage is automatically reset and reflected here.

3. **Start Interaction**

      * Type your query in the chat box (e.g., *“Show me any issues in my account”*)
      * AI responds with insights, actions, or recommendations <br><img src= "/misc/img/gaa1.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

## Token Usage (Paid Feature)

The platform uses a **token-based system** to measure AI usage.

### What Tokens Represent
- Each query and response consumes tokens
- More complex requests use more tokens

### Usage Visibility
Users can:

- View token consumption per interaction

- Monitor overall usage

- Track detailed breakdowns (if enabled)

### Token Expiry & Limits
If your tokens are exhausted or expired:

- AI responses may be limited or paused

- You may need to upgrade or renew your plan

## Example Use Cases

1. **Account Monitoring**

      * Check system health and status
      * Identify misconfigurations

2. **Issue Detection**

      * Detect alerts or anomalies
      * Get proactive recommendations

3. **Optimization Guidance**

      * Improve routing, performance, or setup
      * Receive AI-driven suggestions

4. **Feature Discovery**

      * Learn about unused capabilities
      * Explore additional modules

5. **AI-Assisted Operations**

      * Reduce manual navigation

---

## Best Practices

To get the most out of the AI Agent:

- Use **clear and specific prompts**
- Break complex tasks into smaller steps
- Verify critical outputs before execution
- Use Explore More for deeper insights when needed

## Limitations

While powerful, the AI Agent has some limitations:

- May not fully understand highly ambiguous queries

- Requires MCP for real-time data and actions

- Output accuracy depends on input clarity

---

## Security & Data Handling

- Account-specific actions require MCP authorization  
- Sensitive operations are executed within secure system boundaries  
- The AI Agent only accesses data necessary to fulfill requests  

---

## Error Handling

In case of issues:

- If MCP fails → the system will notify you and may retry  

- If a request cannot be completed → a fallback response is provided  

- Users may rephrase or retry commands for better results  

---

## Summary
The Global AI Agent enhances the platform by combining:

- Conversational intelligence  

- Workflow automation  

- Real-time system interaction  

It enables users to move faster, reduce manual effort, and interact with the system more intuitively.
