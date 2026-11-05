# AI Agent

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Class 5 Services / AI Agent<br>
<strong>Audience</strong>: Administrators, Engineers, Support Team<br>
<strong>Difficulty</strong>: Intermediate<br>
<strong>Time Required</strong>: Approximately 30–45 minutes<br>
<strong>Prerequisites</strong>: Active ConnexCS account with Carrier-module access; familiarity with traffic metrics such as Channels, CPS, ASR, ACD, and SIP signalling<br>
<strong>Related Topics</strong>: <a href="https://docs.connexcs.com/carrier/carrier-main/">Carrier Main Configuration</a>, <a href="https://docs.connexcs.com/customer/stats/">Customer Stats</a><br>
<strong>Next Steps</strong>: Navigate to the Stats tab for a carrier, review key performance graphs (e.g., Channels, ACD, ASR), filter by time period, identify under-performing routes or carriers, then generate alerts or take corrective actions as required<br>

</details>

**Class 5 :material-menu-right: AI Agent**

## Overview

Traditional human call center agents are effective in handling inquiries but are constrained by availability, response time, and operational costs.

In contrast, ConnexCS AI Call Center Agents deliver instant, 24/7 support with zero downtime. They automate repetitive interactions, and ensure highly scalable, latency-free communication, reducing reliance on human intervention while maintaining service accuracy and efficiency.

With AI-driven automation, businesses can enhance customer experience while significantly lowering operational overhead.

### Use Cases

+ **AI Receptionist**:
    + Front Desk Automation
    + Appointment Scheduling
    + Customer Query Handling
    + After hours support
+ **Conversational Data Collection**
+ **Scheduling call back**

### Benefits

+ 24/7 Availability
+ Reduced Operational Costs
+ Faster Query Resolution
+ Improved Appointment Management
+ Automatic collection and updation of records

## Steps to create AI Agent

1. Login to your account.
2. Navigate to **Class 5 :material-menu-right: AI Agent**.
3. Click on the blue `+` icon.
<img src= "/class5/img/aiagent1.png">
4. A window will open up where you can create your customizable AI Agent for your customers.
<img src= "/class5/img/aiagent2.png">
5. Fill in the following fields to setup your AI Agent:
   1. **Name**: Give a name to your AI Agent.
   2. **Destination**: Enter the Extension for the callers to call (essentially, the dial-in number).
   3. **Host**: It's the hosting server where your AI Agent runs and processes interactions.
   4. **PBX Server**: Select the PBX Server from the drop-down.
   5. **Company**: Associate the AI Agent with a customer.

=== "Model"

    + **Model**: Select a model for the selected platform. A model is a specific version or configuration of an AI system to perform tasks like text generation, real-time interactions etc.

        !!! Info
            Different Platforms offer specific Models suited to their capabilities.
    
    + **LLM Provider**: A company or platform that develops and provides access to AI language models that understand and generate human-like text.   
    + **First Message**: The initial message spoken by the agent. For example, when the agent begins the conversation.
    + **End Call Phrases**: Phrases or messages used to conclude a call or interaction with a customer.
    + **Temperature**: Refers to a parameter that controls the creativity of the model's output.
        + **Low temperature (close to 0)** makes the model's responses more predictable by selecting the most probable words.
        + **High temperature (closer to 1 or above)** increases randomness, leading to more diverse and creative but potentially less coherent responses.
    + **LLM Timeout (sec)**: Refers to the predefined time-frame during which an LLM is granted permission to process a request.
    + **LLM Retries**: Number of attempts the LLM makes in performing back-end tasks.
        <img src= "/class5/img/aiagent4new.png" style="border: 2px solid #4472C4; border-radius: 8px;">

=== "Transcriber"

    + **Transcriber**: Select single or multiple transcriber for converting audio to text. You can select the transcriber depending on the selected platform.
    + **End Turn Threshold**: A sidecar classifier that detects the probability the user has finished speaking.
        + When the classifier gives a **low value**, it means the system thinks the person is still speaking — maybe just taking a **short pause**.
        + A **high value** means the system thinks the person has **finished talking**.
    
    |Value|Description|
    |-----|-----------|
    |0|Will never evaluate, will always assume end of speech
    |0.1|Mainly assume that the speech has ended|
    |0.9|main assume that the speech will continue|
    |1|Always Assume that there is more speech to come|
    
    + **ASR Provider** (*Automatic Speech Recognition Provider*) is a company or platform that provides speech-to-text services, converting spoken language into written text.
    + **Answer Machine Detection Keywords**: If the AI Agent detects a phrase (any phrase entered by the user) like "Please leave a message" at the start of the call, it will automatically disconnect. **Enter multiple keywords, each on a new line (*use `Enter` to separate*)**. 
    + **Transcriber Timeout**: It defines the maximum time the system waits for a response during speech-to-text transcription before terminating the process. If no speech is detected within this period, the transcriber stops listening and times out. On timeout `<SILENT_TIMEOUT>` will be sent to the LLM.
    + **Transcriber Silence Threshold (sec)**: Defines the maximum duration (in seconds) the system will wait for a response from the ASR (Automatic Speech Recognition) engine. If no transcription is received within this threshold, the transcriber will stop waiting and proceed accordingly. <br><img src= "/class5/img/trans1234.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

=== "Voice"

    + **Text To Speech Provider (*TTS Provider*)**: Select from various TTS models to convert your text into audio. You can select the transcriber depending on the selected platform.
    + **Filler Words**: These are extra words people say in conversations that don’t add meaning but give them time to think. Examples include "um," "uh," "like," "you know," and "well." Select multiple filler words.
    + **Min Filler Word Delay (sec)**: If the AI Agent fails to respond within the predefined time frame, the system will insert the selected filler words to maintain engagement with the customer.
    + **Interrupt Delay (sec)**: Refers to the time taken by the AI Agent to pause its current operation or response generation when interrupted by a user.
    + **Precache Phrases** are predefined phrases that the system processes in advance to enable faster and more efficient playback or response when required.
    + **Office Background Volume**: This feature enables the playback of background office sounds.
        <img src= "/class5/img/aiagent6new.png" style="border: 2px solid #4472C4; border-radius: 8px;">

=== "MCP Servers"

    **MCP Servers** (*Model Context Protocol Servers*) allow an AI Agent to connect with external applications, tools, databases, and services so it can retrieve information and perform actions beyond its built-in capabilities.

    In simple terms, MCP servers act as a bridge between an AI Agent and external systems, allowing the agent to interact with them through a standardised protocol. <br><img src= "/class5/img/mcpserveraiagent.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

=== "Settings"

    + **Guard Rails**: Choose from multiple Guard Rails options to define constraints for your AI Agent.
    + **Flags**: Select from various flags:
        + **Async Guard Rails**: *Currently not in use*. Implements safeguards against prompt injection, mitigates hallucination risks, and enforces output validation for system integrity.
        + **Local Voice Activity Detection**: It optimizes VoIP performance by identifying speech in real-time at the user’s device.
        + **Disable ScriptForge**: Disables Scriptforge completely. Enabling this flag will deactivate the Tool Call Support functionality.
        + **Listen First**: Enabling this flag ensures the LLM prioritizes listening to the user before responding.
        + **Vad Start Interrupt**: A VAD Start Interrupt is triggered when the system detects the onset of voice activity, indicating that speech has begun.
        + **Complete Word on Interrupt**: If the AI is interrupted, it will complete the current word before stopping execution.
        + **Async First Greeting**: When `enabled`, only the first message of the main prompt will be executed before proceeding directly to the first task. When `disabled`, the system will follow the default behavior and execute the entire main prompt sequence.
    + **Built-in Functions**:
        + **Hangup**: Use this flag to terminate the call. You can include a prompt such as, "When call ended, hangup.
        + **Set Variable**: Set variables locally. For example, in a prompt, you could ask, "What's your name?" and save the response to the variable `name`.
        + **Search Knowledge Base**: Allows the AI to query indexed documents in the Knowledge Base and return relevant information in response to a user's question.
        + **Transfer**: Allows transfering calls to another agent.
    + **Knowledge Base**: Allows you to select which indexed documents an AI Agent can reference when answering user queries. 
    + **First Task**: Select the list of pre-created tasks, so that your AI will perform this task as the first task and rest prompts after this task. [Click here](/class5/ai-agent/#task) to know more about tasks.
    + **Vars**<sup>TOML</sup>:  Select the variables you want pass into the ScriptForge script. <br><img src= "/class5/img/settings1.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br> <br><img src= "/class5/img/settings2.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

=== "System Prompt"

    A System Prompt is a set of core instructions that defines how an AI agent should behave, respond, and perform its tasks. It acts as the agent's guidelines and tells it what role to play, what its purpose is, and how to interact with users.

    !!! Example "Example Prompt"
        **Introduction:**  
        Hello! I’m your AI assistant from **ConnexCS**, a leader in **VoIP and cloud communication solutions**. I'm here to assist you with **product details, services, and billing inquiries**.  

        **Ask the Customer:**  
        Would you like to learn about our **VoIP solutions** like **Class 4 SIP Cloud Switch, WebRTC as a Service, or STIR/SHAKEN compliance**, or do you need details on **billing and pricing**?  

        **Products & Services:**  
        **Class 4 SIP Cloud Switch** – Scalable VoIP carrier solution.  
        **Class 5 PBX** – Multi-tenant business communication platform.  
        **Anycast SIP Load Balancers** – High-availability SIP routing.  
        **WebRTC as a Service** – Seamless SIP-to-WebRTC integration.  
        **STIR/SHAKEN Compliance** – Secure, authenticated VoIP calls.  
        **Carrier-Grade SIP Switching** – High-volume global VoIP.  
        **Call Recording & Transcription** – Compliance & insights.  
        **Anycast Load Balancing** – Prevents service disruptions.  

        **Billing Plans:**  
        **Per Channel**: `$1`per channel/month  
        **Per Minute**: `$0.0003/min` (usage-based allocation)  
        **Server Cost**: `$20` per server  
        **AnyEdge**: `$20` per server  

        **Guidelines:**  
        - Adapt to **technical & non-technical users**.  
        - Keep responses **clear, professional, and concise**.  
        - Provide **pricing & additional details** as needed.  
        - Avoid abbreviations and ensure clarity.  

        !!! Tip "Note: You have NOT YET collected any customer  information, ignore any pre-set variables"
            Add this in the prompt to tell your LLM that no customer information has been gathered so far, and any variables or configurations that might have been pre-set should be disregarded at this stage. This ensures that the process begins with a clean slate, without relying on or being influenced by previously defined or assumed data.

## How to Enable Reseller Billing for AI Agent Services?

Our AI Agent comes equipped with robust reseller capabilities. For instance, if you’ve created and assigned a package to a customer, you can associate their company with the AI Agent. Once this connection is in place, charges for using the AI Agent are automatically deducted. With the package already linked to your customer, managing reselling becomes effortless and efficient.

!!! question "How does it work?"
    1. Create a package under **Setup :material-menu-right: Config :material-menu-right: Packages**. Click on the blue `+` sign.
    2. Enter the **Name** of the package (`Test123` in this example).
    3. Enter cost in the **Retail** field.
    4. Select the **ConnexCS Package** like ConnexCS Converse, ConnexCS Converse Direct etc.
    5. Click `Save`. <img src= "/class5/img/aiagent8.png">
    6. Then Navigate to **Management :material-menu-right: Customer :material-menu-right: Customer [Name] :material-menu-right: Packages**. Click on the blue `+` sign.
    7. Select the **Package** (`Test123` in this example), **Quantity**, **Start Date**, always enable **Auto Decrement Credit**.
    8. Click `Save`. <img src= "/class5/img/aiagent9.png">
