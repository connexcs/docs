# AI Agent

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

=== "Basic"

    + **Name**: Give a name to your AI Agent.
    + **Destination**: Enter the Extension for the callers to call (essentially, the dial-in number).
    + **Company**: Associate the AI Agent with a customer.
    + **App**: Associate the AI Agent with the [Application](https://docs.connexcs.com/apps/architecture/app/) that you have created in the IDE.
    + **PBX Server**: Select the PBX Server from the drop-down.
    + **Platform**: Use either **ConnexCS Converse** or **ConnexCS Converse Direct** to model the AI Agent.
    + **Host**: It's the hosting server where your AI Agent runs and processes interactions.
    + Click `Save`.
         <img src= "/class5/img/aiagent3new.png" style="border: 2px solid #4472C4; border-radius: 8px;">

=== "Model"

    + **Model**: Select a model for the selected platform. A model is a specific version or configuration of an AI system to perform tasks like text generation, real-time interactions etc.

        !!! Info
            Different Platforms offer specific Models suited to their capabilities.
    
    + **First Message**: The initial message spoken by the agent. For example, when the agent begins the conversation.
    + **LLM Timeout (sec)**: Refers to the predefined time-frame during which an LLM is granted permission to process a request.
    + **LLM Retries**: Number of attempts the LLM makes in performing back-end tasks.
    + **End Call Phrases**: Phrases or messages used to conclude a call or interaction with a customer.
    + **Prompt**: The prompt field allows you to enter the set of instructions to guide the AI Agent to perform certain tasks. It provides as the foundation for the AI to comprehend the context, interpret the user's purpose, and generate relevant results.
    + Click `Save`.
        <img src= "/class5/img/aiagent4new.png" style="border: 2px solid #4472C4; border-radius: 8px;">

=== "Transcriber"

    + **Transcriber**: Select single or multiple transcriber for converting audio to text. You can select the transcriber depending on the selected platform.
    + **Answer Machine Detection Keywords**: If the AI Agent detects a phrase (any phrase entered by the user) like "Please leave a message" at the start of the call, it will automatically disconnect. **Enter multiple keywords, each on a new line (*use `Enter` to separate*)**. 
    + **Transcriber Language**: The spoken language the AI Agent listens for when converting speech into text.
    + **Transcriber Timeout**: It defines the maximum time the system waits for a response during speech-to-text transcription before terminating the process. If no speech is detected within this period, the transcriber stops listening and times out. On timeout `<SILENT_TIMEOUT>` will be sent to the LLM.
    + **Transcriber Silence Threshold (sec)**: Defines the maximum duration (in seconds) the system will wait for a response from the ASR (Automatic Speech Recognition) engine. If no transcription is received within this threshold, the transcriber will stop waiting and proceed accordingly.
    
    + **End Turn Threshold**: A sidecar classifier that detects the probability the user has finished speaking.
        + When the classifier gives a **low value**, it means the system thinks the person is still speaking — maybe just taking a **short pause**.
        + A **high value** means the system thinks the person has **finished talking**.

    |Value|Description|
    |-----|-----------|
    |0|Will never evaluate, will always assume end of speech
    |0.1|Mainly assume that the speech has ended|
    |0.9|main assume that the speech will continue|
    |1|Always Assume that there is more speech to come|

    + Click `Save`.
      <img src= "/class5/img/trans1234.png" style="border: 2px solid #4472C4; border-radius: 8px;">

=== "Voice"

    + **Text To Speech(TTS)**: Select from various TTS models to convert your text into audio. You can select the transcriber depending on the selected platform.
    + **Filler Words**: These are extra words people say in conversations that don’t add meaning but give them time to think. Examples include "um," "uh," "like," "you know," and "well." Select multiple filler words.
    + **Voice**: Select the voice for the text-to-speech service.
    + **Min Filler Word Delay (sec)**: If the AI Agent fails to respond within the predefined time frame, the system will insert the selected filler words to maintain engagement with the customer.
    + **Interrupt Delay (sec)**: Refers to the time taken by the AI Agent to pause its current operation or response generation when interrupted by a user.
    + Click `Save`.
        <img src= "/class5/img/aiagent6new.png" style="border: 2px solid #4472C4; border-radius: 8px;">

=== "Advanced"

    + **Built-in Functions**:
        + **Hangup**: Use this flag to terminate the call. You can include a prompt such as, "When call ended, hangup.
        + **Set Variable**: Set variables locally. For example, in a prompt, you could ask, "What's your name?" and save the response to the variable `name`.
        + **Transfer**: Allows transfering calls to another agent.
        + **Search Knowledge Base**: Allows the AI to query indexed documents in the Knowledge Base and return relevant information in response to a user's question. 
    + **Tool Call Allow List**: Select from a list of `functions` available in Apps in IDE. 
    + **Guard Rails**: Choose from multiple Guard Rails options to define constraints for your AI Agent.
    + **Flags**: Select from various flags:
          + **Async Guard Rails**: *Currently not in use*.
          + **Local Voice Activity Detection**: It optimizes VoIP performance by identifying speech in real-time at the user’s device.
          + **Disable ScriptForge**: Disables Scriptforge completely. Enabling this flag will deactivate the Tool Call Support functionality.
          + **Listen First**: Enabling this flag ensures the LLM prioritizes listening to the user before responding.
          + **Vad Start Interrupt**: A VAD Start Interrupt is triggered when the system detects the onset of voice activity, indicating that speech has begun.
          + **Complete Word on Interrupt**: If the AI is interrupted, it will complete the current word before stopping execution.
          + **Async First Greeting**: When `enabled`, only the first message of the main prompt will be executed before proceeding directly to the first task. When `disabled`, the system will follow the default behavior and execute the entire main prompt sequence.
    
    + **Precache Phrases** are predefined phrases that the system processes in advance to enable faster and more efficient playback or response when required.
    
    + **Office Background Volume**: This feature enables the playback of background office sounds.
    
    + **Temperature**: Refers to a parameter that controls the creativity of the model's output.
        + **Low temperature (close to 0)** makes the model's responses more predictable by selecting the most probable words.
        + **High temperature (closer to 1 or above)** increases randomness, leading to more diverse and creative but potentially less coherent responses.
    
    + **First Task**: Select the list of pre-created tasks, so that your AI will perform this task as the first task and rest prompts after this task. [Click here](https://bani-aiagenttask--connexcs-docs.netlify.app/class5/ai-agent/#task) to know more about tasks.
    
    + **Knowledge Base**: Allows you to select which indexed documents an AI Agent can reference when answering user queries. 
    
    + **Vars**<sup>TOML</sup>:  Select the variables you want pass into the ScriptForge script.
    
    + Click `Save`.
        <img src= "/class5/img/aiagent7new17new.png" style="border: 2px solid #4472C4; border-radius: 8px;">

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

### Task

A **Task** refers to a specific goal or objective that the agent is designed to accomplish.

It usually involves processing inputs, making decisions, and taking actions to achieve the desired outcome.

!!! question "How it works?"
    ```mermaid
    flowchart TB
    A([📝 Create Initial Task]) --> B([⚙️ Go to Advanced Settings])
    B --> C([📌 Set as First Task])
    C --> D([🔧 Configure Task Settings])
    D --> E([➕ Add Next AI Agent Task])
    E --> F{🧠 Is Condition Met?}

    F -- ✅ Yes --> G([➡️ Proceed to Next Task])
    F -- ❌ No --> H([⏸️ Stop])

    G --> I([🔁 Repeat for Next Task])
    I --> E

    %% Styling
    classDef step fill:#E0F7FA,stroke:#00ACC1,stroke-width:2px,color:#004D40;
    classDef decision fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#E65100;
    class A,B,C,D,E,G,I,Z step;
    class F,H decision;
    ```

#### Steps to Create a Task

1. Log in to your account.
2. Navigate to **Class 5 :material-menu-right: AI Agent**.
3. Click on **Task**.
4. Click on the blue `+` sign (**Add next node**). It will update the first task. <img src= "/class5/img/task1new.png" style="border: 2px solid #4472C4; border-radius: 8px;">
5. Fill in the following fields to setup the task for your AI Agent:

      1. **Basic**:
         + **Name**: Enter the name of your task.

            <img src= "/class5/img/task2new.png" style="border: 2px solid #4472C4; border-radius: 8px;">

      2. **Model**:

          + **Model**: Select a model for the selected platform. A model is a specific version or configuration of an AI system to perform tasks like text generation, real-time interactions, etc.

            !!! Info
                Different platforms offer specific models suited to their capabilities.

          + **First Message**: The initial message spoken by the agent. For example, when the agent begins the conversation.
          + **Prompt**: The prompt field allows you to enter a set of instructions to guide the AI Agent to perform certain tasks. It provides the foundation for the AI to comprehend the context, interpret the user's purpose, and generate relevant results.


            <img src= "/class5/img/task3new.png" style="border: 2px solid #4472C4; border-radius: 8px;">

      3. **Transcriber**

          + **Transcriber**: Select a single or multiple transcribers for converting audio to text. You can select the transcriber depending on the selected platform.

            <img src= "/class5/img/task4new.png" style="border: 2px solid #4472C4; border-radius: 8px;"> 

      4. **Advanced**

          + **Built-in Functions**:
              + **Hangup**: Use this flag to terminate the call. You can include a prompt such as, "When call ended, hangup.".
             + **Set Variable**: Set variables locally. Set variables locally. For example, in a prompt, you could ask, "What's your name?" and save the response to the variable `name`.
             + **Transfer**: Allows transferring calls to another agent.
          + **Tool Call Allow List**: Select from a list of `functions` available in **Apps** in **IDE**.
       
          + **Guard Rails**: Choose from multiple Guard Rails options to define constraints for your AI Agent.
       
          + **Flags**: Select from various flags:
              + **Async Guard Rails**: *Currently not in use*.
              + **Local Voice Activity Detection**: Optimizes VoIP performance by identifying speech in real time at the user’s device. 
              + **Disable ScriptForge**: Disables ScriptForge completely. Enabling this flag will deactivate the Tool Call Support functionality.
              + **Listen First**: Enabling this flag ensures the LLM prioritizes listening to the user before responding.
              + **Vad Start Interrupt**: A  VAD Start Interrupt is triggered when the system detects the onset of voice activity, indicating that speech has begun.
              + **Complete Word on Interrupt**:  If the AI is interrupted, it will complete the current word before stopping execution.
              + **Async First Greeting**: When enabled, only the first message of the main prompt will be executed before proceeding directly to the first task. When disabled, the system will follow the default behavior and execute the entire main prompt sequence.
              + **Include Primary Chat History**: Includes the full conversation history from the primary session, allowing the AI to access prior interactions for better context and continuity.
              + **Include Primary Prompt**: Appends the initial prompt from the primary task to the current session, ensuring the AI has visibility into the original instruction or objective.
              + **Sync Primary Chat History**: Enables real-time synchronization with the primary chat session, so updates and responses are reflected across both the original and current contexts.
              + **Summarize History on Exit**: Generates a concise summary of the conversation when the task concludes.
              + **Bill Task Separately**: Marks this task to be billed independently from the rest of the session

          + **Office Background Volume**: This feature enables the playback of background office sounds.

          + **Temperature**: Refers to a parameter that controls the creativity of the model's output.
          + **Low temperature (close to 0)** makes the model's responses more predictable by selecting the most probable words.
          + **High temperature (closer to 1 or above)** increases randomness, leading to more diverse and creative but potentially less coherent responses.

          + **Vars**<sup>TOML</sup>:  Select the variables you want pass into the ScriptForge script.

    + Click `Save`.


        <img src= "/class5/img/task5new.png" style="border: 2px solid #4472C4; border-radius: 8px;"> 

    + To use this created task select it under [Advanced :material-menu-right:First Task](https://bani-aiagent1--connexcs-docs.netlify.app/class5/ai-agent/#__tabbed_1_5).

    !!! Note
        1. If `Include Primary Chat History` is `checked`, `Include Primary Prompt` will be ticked automatically.
        2. If `Sync Primary Chat History` is `checked`, `Include Primary Chat History` and `Include Primary Prompt` will be ticked automatically.

##### AI Agent Task Conditions

In the AI Agent Task configuration, the **Condition field** defines the rule that determines when a specific task should be executed.

It allows you to control the flow of conversation by linking one task to another based on user input, recognized entities, or system logic.

* **Field Description**

    * **Condition**: The logic that triggers an AI Agent Task. If the condition evaluates as true, the defined task will run.

    * **AI Agent Task**: Its the current task.

    * **Next AI Agent Task**: This task will be executed if the condition is met.

* **Types of Conditions**

    * **Default**: Executes when no other specific condition is met.

      * **Example**: If the caller has not given a recognizable input, the AI Agent moves forward with the default task.

  * **Custom Conditions**: Allows branching based on input or context.

    * **Common use cases**:

      * **User Input**: If the caller says “yes” or “no.”

      * **Entity Recognition**: If the system has captured an email address, phone number, or name.

      * **System Variables**: If a variable (e.g., customerID) exists or matches a value.

* **Benefits of Using Conditions**

    * Enables dynamic branching in AI conversations.

    * Improves user experience by adapting responses to input.

    * Provides greater control over workflow design.

<img src= "/class5/img/condition.png" style="border: 2px solid #4472C4; border-radius: 8px;"> <img src= "/class5/img/nondefaultcondition.png" width= "450" style="border: 2px solid #4472C4; border-radius: 8px;">


You can pass variables using JSON in the prompt section to configure or initialize them.

Make sure you select `SetVariable` under **Advanced :material-menu-right: Built-in Functions :material-menu-right: Set Variable**

!!! Example "Example Use Case"
    Store the caller's name by calling the setVariable function with `name=name` and `value=[The customers name]`.

### AI Platforms, Models, Voices, TTS, Transcribers

|Platform|Model|Transcriber|Text To Speech (TTS)|Voice|
|--------|-----|-----------|--------------------|-----|
|**ConnexCS Converse Direct**|Select from the multiple options|ConnexCS Internal|Google, PlayHT|

!!! Note "While accessing the **ConnexCS Converse Direct** Platform, you will notice that models in the drop-down menu are labeled with **"(Tools)"**. Selecting a model without the (Tools) designation will prevent you from accessing **ScriptForge** and performing behind-the-scenes tasks."

## Chat

The **Chat** interface will provide responses based on the prompts you submit. Each reply will be tailored specifically to the content and context of your input, ensuring relevant and accurate information is delivered efficiently.

To improve the relevance and accuracy of the AI's replies, you can use the **Add Context** feature.

Before starting, choose a model mode—Standard for fast results (default) or Expert for deeper reasoning with longer response times

#### How to access the Chat feature?

1. Login to your account.
2. Navigate to **Class 5 :material-menu-right: AI Agent**.
3. Click on **Chat**.
4. Click on **Start Chat**.

    <img src= "/class5/img/chat1.png" style="border: 2px solid #4472C4; border-radius: 8px;"> 

5. Before initiating interaction with the AI chatbot, you must configure a few initial settings:

   <img src= "/class5/img/chat2.png" style="border: 2px solid #4472C4; border-radius: 8px;"> 

   1. `Add Context` (optional field): Allows you to provide additional information to the AI before or during a conversation so it can give more accurate, relevant, and helpful responses. You can either add `Text Input` or upload text files using `File Upload` option.

      <img src= "/class5/img/chat3.png" width= "400" style="border: 2px solid #4472C4; border-radius: 8px;">

      <img src= "/class5/img/chat4.png" width= "400" style="border: 2px solid #4472C4; border-radius: 8px;">. <br>Click `Add to Chat`.</br>

   2. Select the mode of the model:
      1. `Standard` (default): A fast model focused on quick results.
      2. `Expert`: A reasoning model, takes longer to respond.
   3. `Toggle` for fullscreen.

!!! Example "Example for Standard Mode"
    <img src= "/class5/img/chat5.png" style="border: 2px solid #4472C4; border-radius: 8px;">

!!! Example "Example for Expert Mode"
    <img src= "/class5/img/chat6.png" style="border: 2px solid #4472C4; border-radius: 8px;">

## How to use Functions for the Large Language Models (LLMs)?

To grant access to functions for an AI agent, follow these steps:

1. **Create an App from IDE**:
      1. Login to your account
      2. Navigate to **IDE :material-menu-right: Application**.
      3. Create a new App. [Click here](https://docs.connexcs.com/apps/architecture/app/) to follow the steps.

2. **Add a Script Forge**:
    Under the newly created app, add a Script Forge. [Click here](https://docs.connexcs.com/apps/architecture/scriptforge/) to know the steps.

3. **Define the Function**:
    Within the Script Forge, add the function you want the AI agent to access.

    !!! Example "Example Function"
        ```js linenums="1"
        /**
        * Transfer
        * @param {Object} param - Param Object
        * @param {string} param.name - The name of the person who you wish to transfer the call to.
        */
        function transfer() {
            console.log(`We are going to transfer the call`)
            return { action: 'transfer', destination: '4423456526787365' }
        }
        ```

4. **Assign the App to the AI Agent**:
      1. Navigate to your AI agent that you have previously created.
      2. Under the **Basic** in the **App** field app, choose the created App.

5. **Allow Function Access**:
      1. Navigate to **Advanced** tab (in AI Agent), then select the created function in the **Tool Call Allow List** and grant access from the list.

!!! Example "Example Function"
    ```js linenums="1"
    /**
    * Transfer
    * @param {Object} param - Param Object
    * @param {string} param.name - The name of the person who you wish to transfer the call to.
    */
    function transfer() {
    return { action: 'transfer', destination: '160' }
    }
    ```

Following these steps ensures that the AI agent has the necessary permissions to interact with the designated function.

!!! Example "Example Script"
    ```js linenums="1"
    /**
    * update the database with user details. 
    * @param {Object} param - Param Object
    * @param {String} param.last - last name.
    * @param {String} param.first - first name.
    * @param {String} param.phone - phone number.
    * @param {String} param.address - address.
    * @param {String} param.from - from
    */
    async function updateDatabase(data) { // Declares an asynchronous function named `updateDatabase`, which takes `data` (an object) as a parameter.
	    const data2 = await cxUserspace.read('mydatabase12345', data.from) // Reads a record from the datastore `mydatabase12345` using `data.from` as a key
	    const area = 'databaseadam'; // Datastore name
	    const userId = data.phone; // Unique key for the user record
	    const userData = { // Constructs an object (userData) containing user details
		    first_name: data.first,
		    last_name: data.last,
		    phone_code: data.phone,
		    address1: data.address,
		    middle_initial: data2.value // The middle_initial field is extracted from data2.value, which was fetched from the database earlier
	    };
	    await cxUserspace.create(area, userId, userData); // Saves the user record in the 'databaseadam' datastore. Uses `userId` (phone number) as the unique key and stores `userData` as the associated record
    }
    ```

!!! Note "JSDoc Notation"
    Using JSDoc for optimizing function usage within LLMs:

     +  Provides clear descriptions of each function, parameter, and return type, making the purpose and behavior of LLM-related functions easy to understand.
     
     +  Reduces confusion and errors.
     
     +  With multiple developers working on an LLM project, JSDoc serves as a standardized way to share knowledge.
     
     +  LLM will exactly know how to interact with the code (Scriptforge).

    !!! Tip "The function description must be brief, sharp, and accurate. Expanding it unnecessarily may create significant risks."

### Call Transfer Techniques

Calls can be routed to another agent through two different transfer options.

1. **Using the built-in `Transfer` function**:
      1. Select `Transfer` from the  **Advanced :material-menu-right: Built-in Functions** tab.
      2. Navigate to the **Model** tab and insert the given prompt in the **Prompt** section.
            **If requested you please call the transfer function with `input phone number` as the parameter `destination`**.

    !!! danger "Security Warning"
        Implementing this way will give the LLM the capability to transfer to **ANY number**. If a carefully executed instructions are passed to the LLM via a caller, it MAY be possible to encourage the LLM to dial a DIFFERENT number.

        We would recommend against this method outside testing. Furthermore, it's highly advisable that the routing is additionally protected, to all additional layers of security.
                
        **See below for a recommended strategy to implement transfers.**

2. **Using Transfer function with Script Forge**:
      1. Login to you account.
      2. Navigate to **IDE :material-menu-right: ScriptForge**.
      3. The script is as follows:
            ```js linenums="1"
            /**
             * Transfer
             * @param {Object} param - Param Object
             * @param {string} param.name - The name of the person who you wish to transfer the call to.
             */
            function transfer() {
                return { action: 'transfer', destination: 'input phone number' }
            }
            ```
      4. Navigate to **Class 5 :material-menu-right: AI Agent**.
      5. In the **Basic** tab select the created transfer application from the dropdown in the **App** field.
      6. Navigate to the **Advanced** tab and select the created `transfer function` in the **Tool Call Allow List**.

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

## Integrating Knowledge Base into Your AI Agent

1. [Create your AI Agent](https://docs.connexcs.com/class5/ai-agent/#steps-to-create-ai-agent).
2. A few more adjustments are needed:
      1. Select `Search Knowledge Base` from the `Built-in Functions` option
      2. Select your `Knowlegde Base` from the `Knowledge Base` drop-down.
3. Click `Save`.

<img src= "/class5/img/aiagent10.png" style="border: 2px solid #4472C4; border-radius: 8px;">

<img src= "/class5/img/aiagent11.png" style="border: 2px solid #4472C4; border-radius: 8px;">

!!! Info "Info"
    For the most accurate and helpful results from the integrated knowledge base, try phrasing your prompt like this:
    ```js
    Instructions 
    You can call the knowledge base only when you are required to and search for info that you require only 
    Only do one 1 lookup per human interaction.
    Keep your replies short
    ```

## List of available LLMs

### 01.AI

- 01.AI: Yi Large
- 01.AI: Yi Large FC
- 01.AI: Yi Large Turbo
- 01.AI: Yi Vision

### AI21

- AI21: Jamba Large 1.7(Tools)
- AI21: Jamba Mini 1.7(Tools)
- AI21: Jamba 1.5 Large
- AI21: Jamba 1.5 Mini
- AI21: Jamba 1.6 Large
- AI21: Jamba Instruct
- AI21: Jamba Mini 1.6

### Aetherwiing

- Aetherwiing: Starcannon 12B

### Agentica

- Agentica: Deepcoder 14B Preview
- Agentica: Deepcoder 14B Preview (free)

### AionLabs

- AionLabs: Aion-1.0
- AionLabs: Aion-1.0-Mini
- AionLabs: Aion-RP 1.0 (8B)

### AlfredPros

- AlfredPros: CodeLLaMa 7B Instruct Solidity

### AllenAI

- AllenAI: Molmo 7B D
- AllenAI: Olmo 2 32B Instruct

### Amazon

- Amazon: Nova Lite 1.0(Tools)
- Amazon: Nova Micro 1.0(Tools)
- Amazon: Nova Pro 1.0(Tools)

### Anthropic

- Anthropic: Claude 3 Haiku(Tools)
- Anthropic: Claude 3 Opus(Tools)
- Anthropic: Claude 3.5 Haiku(Tools)
- Anthropic: Claude 3.5 Haiku (2024-10-22)(Tools)
- Anthropic: Claude 3.5 Sonnet(Tools)
- Anthropic: Claude 3.5 Sonnet (2024-06-20)(Tools)
- Anthropic: Claude 3.7 Sonnet(Tools)
- Anthropic: Claude 3.7 Sonnet (thinking)(Tools)
- Anthropic: Claude Opus 4(Tools)
- Anthropic: Claude Opus 4.1(Tools)
- Anthropic: Claude Sonnet 4(Tools)
- Anthropic: Claude 3 Sonnet
- Anthropic: Claude Instant v1
- Anthropic: Claude Instant v1.0
- Anthropic: Claude Instant v1.1
- Anthropic: Claude v1
- Anthropic: Claude v1.2
- Anthropic: Claude v2
- Anthropic: Claude v2.0
- Anthropic: Claude v2.1

### Arcee AI

- Arcee AI: Virtuoso Large(Tools)
- Arcee AI: Arcee Blitz
- Arcee AI: Caller Large
- Arcee AI: Coder Large
- Arcee AI: Maestro Reasoning
- Arcee AI: Spotlight
- Arcee AI: Virtuoso Medium V2

### ArliAI

- ArliAI: QwQ 32B RpR v1
- ArliAI: QwQ 32B RpR v1 (free)

### Baidu

- Baidu: ERNIE 4.5 21B A3B
- Baidu: ERNIE 4.5 300B A47B
- Baidu: ERNIE 4.5 VL 28B A3B
- Baidu: ERNIE 4.5 VL 424B A47B

### Bytedance

- Bytedance: UI-TARS 72B
- Bytedance: UI-TARS 7B

### Cohere

- Cohere: Command R(Tools)
- Cohere: Command R (03-2024)(Tools)
- Cohere: Command R (08-2024)(Tools)
- Cohere: Command R+(Tools)
- Cohere: Command R+ (04-2024)(Tools)
- Cohere: Command R+ (08-2024)(Tools)
- Cohere: Command
- Cohere: Command A
- Cohere: Command R7B (12-2024)

### DI

- DI / Llama-3.3-70B-Instruct-Turbo(Tools)
- DI / Phi4 Multi-Modal Instruct(Tools)

### Databricks

- Databricks: DBRX 132B Instruct

### DeepSeek

- DeepSeek: DeepSeek V3 0324(Tools)
- DeepSeek: DeepSeek V3 0324 (free)(Tools)
- DeepSeek: DeepSeek V3.1(Tools)
- DeepSeek: DeepSeek Prover V2
- DeepSeek: Deepseek R1 0528 Qwen3 8B
- DeepSeek: Deepseek R1 0528 Qwen3 8B (free)
- DeepSeek: DeepSeek R1 Zero
- DeepSeek: DeepSeek V3
- DeepSeek: DeepSeek V3 Base
- DeepSeek: DeepSeek V3.1 (free)
- DeepSeek: DeepSeek V3.1 Base
- DeepSeek: R1
- DeepSeek: R1 (free)
- DeepSeek: R1 0528
- DeepSeek: R1 0528 (free)
- DeepSeek: R1 Distill Llama 70B
- DeepSeek: R1 Distill Llama 70B (free)
- DeepSeek: R1 Distill Llama 8B
- DeepSeek: R1 Distill Qwen 1.5B
- DeepSeek: R1 Distill Qwen 14B
- DeepSeek: R1 Distill Qwen 14B (free)
- DeepSeek: R1 Distill Qwen 32B
- DeepSeek: R1 Distill Qwen 7B

### EleutherAI

- EleutherAI: Llemma 7b

### Fireworks

- Fireworks: FireLLaVA 13B

### G

- G / Llama 3.3 70b versatile(Tools)
- G / Meta llama/llama prompt guard 2 22m
- G / Qwen/qwen3 32b
- G / Allam 2 7b
- G / Moonshotai/kimi k2 instruct 0905
- G / Meta llama/llama 4 maverick 17b 128e instruct
- G / Llama 3.1 8b instant
- G / Whisper large v3 turbo
- G / Meta llama/llama prompt guard 2 86m
- G / Playai tts arabic
- G / Deepseek r1 distill llama 70b
- G / Openai/gpt oss 20b
- G / Gemma2 9b it
- G / Fast/compound mini
- G / Fast/compound
- G / Moonshotai/kimi k2 instruct
- G / Playai tts
- G / Whisper large v3
- G / Meta llama/llama 4 scout 17b 16e instruct
- G / Meta llama/llama guard 4 12b
- G / Openai/gpt oss 120b

### Google

- Google: Gemini 1.5 Flash(Tools)
- Google: Gemini 1.5 Flash 8B(Tools)
- Google: Gemini 1.5 Pro(Tools)
- Google: Gemini 2.0 Flash(Tools)
- Google: Gemini 2.0 Flash Experimental (free)(Tools)
- Google: Gemini 2.0 Flash Lite(Tools)
- Google: Gemini 2.5 Flash(Tools)
- Google: Gemini 2.5 Flash Lite(Tools)
- Google: Gemini 2.5 Flash Lite Preview 06-17(Tools)
- Google: Gemini 2.5 Pro(Tools)
- Google: Gemini 2.5 Pro Experimental(Tools)
- Google: Gemini 2.5 Pro Preview 05-06(Tools)
- Google: Gemini 2.5 Pro Preview 06-05(Tools)
- Google: Gemini 1.5 Flash Experimental
- Google: Gemini 1.5 Pro Experimental
- Google: Gemini 2.5 Flash Image Preview
- Google: Gemini 2.5 Flash Image Preview (free)
- Google: Gemini 2.5 Flash Preview 04-17
- Google: Gemini 2.5 Flash Preview 05-20
- Google: Gemini Experimental 1114
- Google: Gemini Experimental 1121
- Google: Gemma 1 2B
- Google: Gemma 2 27B
- Google: Gemma 2 9B
- Google: Gemma 2 9B (free)
- Google: Gemma 3 12B
- Google: Gemma 3 12B (free)
- Google: Gemma 3 1B
- Google: Gemma 3 27B
- Google: Gemma 3 27B (free)
- Google: Gemma 3 4B
- Google: Gemma 3 4B (free)
- Google: Gemma 3n 2B (free)
- Google: Gemma 3n 4B
- Google: Gemma 3n 4B (free)
- Google: Gemma 7B
- Google: PaLM 2 Chat
- Google: PaLM 2 Chat 32k
- Google: PaLM 2 Code Chat
- Google: PaLM 2 Code Chat 32k

### Hugging Face

- Hugging Face: Zephyr 7B

### Inception

- Inception: Mercury(Tools)
- Inception: Mercury Coder(Tools)

### Infermatic

- Infermatic: Mistral Nemo Inferor 12B

### Inflatebot

- Inflatebot: Mag Mell R1 12B

### Inflection

- Inflection: Inflection 3 Pi
- Inflection: Inflection 3 Productivity

### LatitudeGames

- LatitudeGames: Wayfarer Large 70B Llama 3.3

### Liquid

- Liquid: LFM 3B
- Liquid: LFM 40B MoE
- Liquid: LFM 7B

### Lynn

- Lynn: Llama 3 Soliloquy 7B v3 32K
- Lynn: Llama 3 Soliloquy 8B v2

### Mancer

- Mancer: Weaver (alpha)

### Meta

- Meta: Llama 3 70B Instruct(Tools)
- Meta: Llama 3 8B Instruct(Tools)
- Meta: Llama 3.1 405B Instruct(Tools)
- Meta: Llama 3.1 70B Instruct(Tools)
- Meta: Llama 3.1 8B Instruct(Tools)
- Meta: Llama 3.3 70B Instruct(Tools)
- Meta: Llama 3.3 70B Instruct (free)(Tools)
- Meta: Llama 3.3 8B Instruct (free)(Tools)
- Meta: Llama 4 Maverick (free)(Tools)
- Meta: Llama 4 Scout(Tools)
- Meta: Llama 4 Scout (free)(Tools)
- Meta: CodeLlama 34B Instruct
- Meta: CodeLlama 70B Instruct
- Meta: Llama 2 13B Chat
- Meta: Llama 2 70B Chat
- Meta: Llama 3 70B (Base)
- Meta: Llama 3 8B (Base)
- Meta: Llama 3.1 405B (base)
- Meta: Llama 3.1 405B Instruct (free)
- Meta: Llama 3.2 11B Vision Instruct
- Meta: Llama 3.2 1B Instruct
- Meta: Llama 3.2 3B Instruct
- Meta: Llama 3.2 3B Instruct (free)
- Meta: Llama 3.2 90B Vision Instruct
- Meta: Llama 4 Maverick
- Meta: Llama Guard 4 12B
- Meta: LlamaGuard 2 8B

### Microsoft

- Microsoft: Phi-3 Medium 128K Instruct(Tools)
- Microsoft: Phi-3 Mini 128K Instruct(Tools)
- Microsoft: Phi-3.5 Mini 128K Instruct(Tools)
- Microsoft: MAI DS R1
- Microsoft: MAI DS R1 (free)
- Microsoft: Phi 4
- Microsoft: Phi 4 Multimodal Instruct
- Microsoft: Phi 4 Reasoning
- Microsoft: Phi 4 Reasoning Plus
- Microsoft: Phi-3 Medium 4K Instruct

### MiniMax

- MiniMax: MiniMax M1
- MiniMax: MiniMax-01

### Mistral

- Mistral: Codestral 2501(Tools)
- Mistral: Codestral 2508(Tools)
- Mistral: Devstral Medium(Tools)
- Mistral: Devstral Small 2505(Tools)
- Mistral: Devstral Small 2505 (free)(Tools)
- Mistral: Magistral Medium 2506(Tools)
- Mistral: Magistral Medium 2506 (thinking)(Tools)
- Mistral: Magistral Small 2506(Tools)
- Mistral: Ministral 8B(Tools)
- Mistral: Mistral 7B Instruct(Tools)
- Mistral: Mistral 7B Instruct (free)(Tools)
- Mistral: Mistral 7B Instruct v0.3(Tools)
- Mistral: Mistral Medium 3(Tools)
- Mistral: Mistral Medium 3.1(Tools)
- Mistral: Mistral Small 3.1 24B(Tools)
- Mistral: Mistral Small 3.1 24B (free)(Tools)
- Mistral: Mistral Small 3.2 24B (free)(Tools)
- Mistral: Mixtral 8x22B Instruct(Tools)
- Mistral: Mixtral 8x7B Instruct(Tools)
- Mistral: Pixtral Large 2411(Tools)
- Mistral: Saba(Tools)
- Mistral: Codestral Mamba
- Mistral: Devstral Small 1.1
- Mistral: Ministral 3B
- Mistral: Mistral 7B Instruct v0.1
- Mistral: Mistral 7B Instruct v0.2
- Mistral: Mistral Nemo
- Mistral: Mistral Nemo (free)
- Mistral: Mistral Small 3
- Mistral: Mistral Small 3 (free)
- Mistral: Mistral Small 3.2 24B
- Mistral: Mixtral 8x22B (base)
- Mistral: Pixtral 12B

### MoonshotAI

- MoonshotAI: Kimi K2 (free)(Tools)
- MoonshotAI: Kimi Dev 72B
- MoonshotAI: Kimi Dev 72B (free)
- MoonshotAI: Kimi K2
- MoonshotAI: Kimi VL A3B Thinking
- MoonshotAI: Kimi VL A3B Thinking (free)
- MoonshotAI: Moonlight 16B A3B Instruct

### Morph

- Morph: Fast Apply
- Morph: Morph V3 Fast
- Morph: Morph V3 Large

### NVIDIA

- NVIDIA: Llama 3.1 Nemotron 70B Instruct(Tools)
- NVIDIA: Llama 3.1 Nemotron Nano 8B v1
- NVIDIA: Llama 3.1 Nemotron Ultra 253B v1
- NVIDIA: Llama 3.1 Nemotron Ultra 253B v1 (free)
- NVIDIA: Llama 3.3 Nemotron Super 49B v1
- NVIDIA: Nemotron-4 340B Instruct

### NeverSleep

- NeverSleep: Llama 3 Lumimaid 70B
- NeverSleep: Llama 3 Lumimaid 8B
- NeverSleep: Lumimaid v0.2 70B
- NeverSleep: Lumimaid v0.2 8B

### Nous

- Nous: Hermes 4 405B(Tools)
- Nous: Hermes 4 70B(Tools)
- Nous: Capybara 34B
- Nous: Capybara 7B
- Nous: DeepHermes 3 Llama 3 8B Preview (free)
- Nous: DeepHermes 3 Mistral 24B Preview
- Nous: Hermes 13B
- Nous: Hermes 2 Mistral 7B DPO
- Nous: Hermes 2 Mixtral 8x7B DPO
- Nous: Hermes 2 Mixtral 8x7B SFT
- Nous: Hermes 2 Theta 8B
- Nous: Hermes 2 Vision 7B (alpha)
- Nous: Hermes 2 Yi 34B
- Nous: Hermes 3 405B Instruct
- Nous: Hermes 3 70B Instruct
- Nous: Hermes 70B

### NousResearch

- NousResearch: Hermes 2 Pro - Llama-3 8B

### OpenAI

- OpenAI: Codex Mini(Tools)
- OpenAI: GPT-3.5 Turbo(Tools)
- OpenAI: GPT-3.5 Turbo (older v0613)(Tools)
- OpenAI: GPT-3.5 Turbo 16k(Tools)
- OpenAI: GPT-4(Tools)
- OpenAI: GPT-4 (older v0314)(Tools)
- OpenAI: GPT-4 Turbo(Tools)
- OpenAI: GPT-4 Turbo (older v1106)(Tools)
- OpenAI: GPT-4 Turbo Preview(Tools)
- OpenAI: GPT-4.1(Tools)
- OpenAI: GPT-4.1 Mini(Tools)
- OpenAI: GPT-4.1 Nano(Tools)
- OpenAI: GPT-4o(Tools)
- OpenAI: GPT-4o (2024-05-13)(Tools)
- OpenAI: GPT-4o (2024-08-06)(Tools)
- OpenAI: GPT-4o (2024-11-20)(Tools)
- OpenAI: GPT-4o (extended)(Tools)
- OpenAI: GPT-4o Audio(Tools)
- OpenAI: GPT-4o-mini(Tools)
- OpenAI: GPT-4o-mini (2024-07-18)(Tools)
- OpenAI: GPT-5(Tools)
- OpenAI: GPT-5 Mini(Tools)
- OpenAI: GPT-5 Nano(Tools)
- OpenAI: o1(Tools)
- OpenAI: o3(Tools)
- OpenAI: o3 Mini(Tools)
- OpenAI: o3 Mini High(Tools)
- OpenAI: o3 Pro(Tools)
- OpenAI: o4 Mini(Tools)
- OpenAI: o4 Mini High(Tools)
- OpenAI: ChatGPT-4o
- OpenAI: GPT-3.5 Turbo (older v0301)
- OpenAI: GPT-3.5 Turbo 16k
- OpenAI: GPT-3.5 Turbo 16k (older v1106)
- OpenAI: GPT-3.5 Turbo Instruct
- OpenAI: GPT-4 32k
- OpenAI: GPT-4 32k (older v0314)
- OpenAI: GPT-4 Vision
- OpenAI: GPT-4.5 (Preview)
- OpenAI: GPT-4o Search Preview
- OpenAI: GPT-4o-mini Search Preview
- OpenAI: GPT-5 Chat
- OpenAI: gpt-oss-120b
- OpenAI: gpt-oss-120b (free)
- OpenAI: gpt-oss-20b
- OpenAI: gpt-oss-20b (free)
- OpenAI: o1-mini
- OpenAI: o1-mini (2024-09-12)
- OpenAI: o1-preview
- OpenAI: o1-preview (2024-09-12)
- OpenAI: o1-pro

### OpenGVLab

- OpenGVLab: InternVL3 14B
- OpenGVLab: InternVL3 2B

### Other

- Mistral Large(Tools)
- Mistral Large 2407(Tools)
- Mistral Large 2411(Tools)
- Mistral Small(Tools)
- Mistral Tiny(Tools)
- No Tools
- Airoboros 70B
- Auto Router
- Bagel 34B v0.2
- Chronos Hermes 13B v2
- Cinematika 7B (alpha)
- Cypher Alpha
- DeepSeek V2.5
- Dolphin 2.6 Mixtral 8x7B 🐬
- Dolphin 2.9.2 Mixtral 8x22B 🐬
- Dolphin Llama 3 70B 🐬
- Dolphin3.0 Mistral 24B
- Dolphin3.0 Mistral 24B (free)
- Dolphin3.0 R1 Mistral 24B
- Dolphin3.0 R1 Mistral 24B (free)
- EVA Llama 3.33 70B
- EVA Qwen2.5 14B
- EVA Qwen2.5 32B
- EVA Qwen2.5 72B
- Fimbulvetr 11B v2
- Goliath 120B
- Horizon Alpha
- Horizon Beta
- Llama 3.1 Tulu 3 405B
- Llama Guard 3 8B
- LLaVA 13B
- LLaVA v1.6 34B
- lzlv 70B
- Magnum 72B
- Magnum v2 72B
- Magnum v4 72B
- Midnight Rose 70B
- Mistral Medium
- Mistral Nemo 12B Celeste
- Mistral OpenOrca 7B
- MythoMax 13B
- MythoMist 7B
- Neural Chat 7B v3.1
- Noromaid 20B
- Noromaid Mixtral 8x7B Instruct
- OLMo 7B Instruct
- OlympicCoder 32B
- OpenChat 3.5 7B
- OpenChat 3.6 8B
- OpenHands LM 32B V0.1
- OpenHermes 2 Mistral 7B
- OpenHermes 2.5 Mistral 7B
- Optimus Alpha
- Psyfighter 13B
- Psyfighter v2 13B
- Qrwkv 72B
- Quasar Alpha
- Qwen 1.5 110B Chat
- Qwen 1.5 14B Chat
- Qwen 1.5 32B Chat
- Qwen 1.5 4B Chat
- Qwen 1.5 72B Chat
- Qwen 1.5 7B Chat
- Qwen 2 72B Instruct
- Qwen 2 7B Instruct
- Qwen2.5 72B Instruct
- Qwen2.5 72B Instruct (free)
- Qwen2.5 7B Instruct
- Qwen2.5 Coder 32B Instruct
- Qwen2.5 Coder 32B Instruct (free)
- Reflection 70B
- ReMM SLERP 13B
- RWKV v5 3B AI Town
- RWKV v5 World 3B
- SorcererLM 8x22B
- StarCoder2 15B Instruct
- StripedHyena Hessian 7B (base)
- StripedHyena Nous 7B
- Switchpoint Router
- Synthia 70B
- Toppy M 7B
- Typhoon2 70B Instruct
- Typhoon2 8B Instruct
- WizardLM-2 7B
- WizardLM-2 8x22B
- Xwin 70B
- Yi 1.5 34B Chat
- Yi 34B (base)
- Yi 34B 200K
- Yi 34B Chat
- Yi 6B (base)
- Zephyr 141B-A35B

### Perplexity
- Perplexity: Llama 3.1 Sonar 70B Online
- Perplexity: Llama 3.1 Sonar 8B Online
- Perplexity: Llama3 Sonar 70B
- Perplexity: Llama3 Sonar 70B Online
- Perplexity: Llama3 Sonar 8B
- Perplexity: Llama3 Sonar 8B Online
- Perplexity: R1 1776
- Perplexity: Sonar
- Perplexity: Sonar Deep Research
- Perplexity: Sonar Pro
- Perplexity: Sonar Reasoning
- Perplexity: Sonar Reasoning Pro

### Phind
- Phind: CodeLlama 34B v2

### Pygmalion
- Pygmalion: Mythalion 13B

### Qwen
- Qwen: Qwen-Max(Tools)
- Qwen: Qwen-Plus(Tools)
- Qwen: Qwen-Turbo(Tools)
- Qwen: Qwen3 14B(Tools)
- Qwen: Qwen3 235B A22B(Tools)
- Qwen: Qwen3 235B A22B (free)(Tools)
- Qwen: Qwen3 235B A22B Thinking 2507(Tools)
- Qwen: Qwen3 30B A3B Instruct 2507(Tools)
- Qwen: Qwen3 30B A3B Thinking 2507(Tools)
- Qwen: Qwen3 4B (free)(Tools)
- Qwen: Qwen3 Coder 30B A3B Instruct(Tools)
- Qwen: Qwen3 Coder 480B A35B(Tools)
- Qwen: Qwen3 Coder 480B A35B (free)(Tools)
- Qwen: Qwen VL Max
- Qwen: Qwen VL Plus
- Qwen: Qwen2.5 32B Instruct
- Qwen: Qwen2.5 Coder 7B Instruct
- Qwen: Qwen2.5 VL 32B Instruct
- Qwen: Qwen2.5 VL 32B Instruct (free)
- Qwen: Qwen2.5 VL 3B Instruct
- Qwen: Qwen2.5 VL 72B Instruct
- Qwen: Qwen2.5 VL 72B Instruct (free)
- Qwen: Qwen2.5-VL 7B Instruct
- Qwen: Qwen3 0.6B
- Qwen: Qwen3 1.7B
- Qwen: Qwen3 14B (free)
- Qwen: Qwen3 235B A22B Instruct 2507
- Qwen: Qwen3 30B A3B
- Qwen: Qwen3 30B A3B (free)
- Qwen: Qwen3 32B
- Qwen: Qwen3 8B
- Qwen: Qwen3 8B (free)
- Qwen: QwQ 32B
- Qwen: QwQ 32B (free)
- Qwen: QwQ 32B Preview

### RWKV v5
- RWKV v5: Eagle 7B

### Reka
- Reka: Flash 3 (free)

### SW
- SW / Llama 3.3 70b Instruct(Tools)

### Sao10K
- Sao10K: Llama 3 8B Lunaris
- Sao10K: Llama 3 Stheno 8B v3.3 32K
- Sao10K: Llama 3.1 70B Hanami x1
- Sao10K: Llama 3.1 Euryale 70B v2.2
- Sao10K: Llama 3.3 Euryale 70B

### Sao10k
- Sao10k: Llama 3 Euryale 70B v2.1

### Sarvam AI
- Sarvam AI: Sarvam-M

### SentientAGI
- SentientAGI: Dobby Mini Plus Llama 3.1 8B

### Shisa AI
- Shisa AI: Shisa V2 Llama 3.3 70B
- Shisa AI: Shisa V2 Llama 3.3 70B (free)

### Snowflake
- Snowflake: Arctic Instruct

### SteelSkull
- SteelSkull: L3.3 Electra R1 70B

### Swallow
- Swallow: Llama 3.1 Swallow 8B Instruct V0.3

### THUDM
- THUDM: GLM 4 32B
- THUDM: GLM 4 9B
- THUDM: GLM 4.1V 9B Thinking
- THUDM: GLM Z1 32B
- THUDM: GLM Z1 9B
- THUDM: GLM Z1 Rumination 32B

### TNG
- TNG: DeepSeek R1T Chimera
- TNG: DeepSeek R1T Chimera (free)
- TNG: DeepSeek R1T2 Chimera (free)

### Tencent
- Tencent: Hunyuan A13B Instruct
- Tencent: Hunyuan A13B Instruct (free)

### TheDrummer
- TheDrummer: Rocinante 12B(Tools)
- TheDrummer: UnslopNemo 12B(Tools)
- TheDrummer: Anubis 70B V1.1
- TheDrummer: Anubis Pro 105B V1
- TheDrummer: Skyfall 36B V2
- TheDrummer: Valkyrie 49B V1

### Venice
- Venice: Uncensored (free)

### Z.AI
- Z.AI: GLM 4 32B(Tools)
- Z.AI: GLM 4.5(Tools)
- Z.AI: GLM 4.5 Air(Tools)
- Z.AI: GLM 4.5V(Tools)
- Z.AI: GLM 4.5 Air (free)

### xAI
- xAI: Grok 2 1212(Tools)
- xAI: Grok 3(Tools)
- xAI: Grok 3 Beta(Tools)
- xAI: Grok 3 Mini(Tools)
- xAI: Grok 3 Mini Beta(Tools)
- xAI: Grok 4(Tools)
- xAI: Grok Code Fast 1(Tools)
- xAI: Grok 2
- xAI: Grok 2 mini
- xAI: Grok 2 Vision 1212
- xAI: Grok Beta
- xAI: Grok Vision Beta
