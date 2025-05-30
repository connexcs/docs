# AI Agent

**Class 5 :material-menu-right: AI Agent**

## Overview

Traditional human call center agents are effective in handling inquiries but are constrained by availability, response time, and operational costs. In contrast, ConnexCS AI Call Center Agents deliver instant, 24/7 support with zero downtime. They automate repetitive interactions, and ensure highly scalable, latency-free communication, reducing reliance on human intervention while maintaining service accuracy and efficiency.

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
    + **App**: Associate the AI Agent with the [Application](https://docs.connexcs.com/apps/architecture/app/) that you have created in the IDE.
    + **Host**: It's the hosting server where your AI Agent runs and processes interactions.
    + **Destination**: Enter the Extension for the callers to call (essentially, the dial-in number).
    + **Company**: Associate the AI Agent with a customer.
    + **PBX Server**: Select the PBX Server from the drop-down.
    + **Platform**: Use either **ConnexCS Converse** or **ConnexCS Converse Direct** to model the AI Agent.
    + Click `Save`.
         <img src= "/class5/img/aiagent3.png">

=== "Model"

    + **Model**: Select a model for the selected platform. A model is a specific version or configuration of an AI system to perform tasks like text generation, real-time interactions etc.

        !!! Info
            Different Platforms offer specific Models suited to their capabilities.
    
    + **First Message**: The initial message spoken by the agent. For example, when the agent begins the conversation.
    + **LLM Timeout (sec)**: Refers to the predefined time-frame during which an LLM is granted permission to process a request.
    + **LLM Retries**: Number of attempts the LLM makes in performing back-end tasks.
    + **Prompt**: The prompt field allows you to enter the set of instructions to guide the AI Agent to perform certain tasks. It provides as the foundation for the AI to comprehend the context, interpret the user's purpose, and generate relevant results.
    + Click `Save`.
        <img src= "/class5/img/aiagent4.png">

=== "Transcriber"

    + **Transcriber**: Select the transcriber service to convert audio to text. You can select the transcriber depending on the selected platform.
    + **Answer Machine Detection Keywords**: If the AI Agent detects a phrase (any phrase entered by the user) like "Please leave a message" at the start of the call, it will automatically disconnect.
    + **Transcriber Timeout**: It defines the maximum time the system waits for a response during speech-to-text transcription before terminating the process. If no speech is detected within this period, the transcriber stops listening and times out. On timeout `<SILENT_TIMEOUT>` will be sent to the LLM.
    + **End Call Phrases**: Phrases or messages used to conclude a call or interaction with a customer.
    + Click `Save`.
      <img src= "/class5/img/aiagent5.png"> 

=== "Voice"

    + **Voice**: Select the voice for the text-to-speech service.
    + **Filler Words**: These are extra words people say in conversations that don’t add meaning but give them time to think. Examples include "um," "uh," "like," "you know," and "well." Select multiple filler words.
    + **Text To Speech(TTS)**: Select from various TTS models to convert your text into audio. You can select the transcriber depending on the selected platform.
    + **Min Filler Word Delay (sec)**: If the AI Agent fails to respond within the predefined time frame, the system will insert the selected filler words to maintain engagement with the customer.
    + **Interrupt Delay (sec)**: Refers to the time taken by the AI Agent to pause its current operation or response generation when interrupted by a user.
    + Click `Save`.
        <img src= "/class5/img/aiagent6.png">

=== "Advanced"

    + **Built-in Functions**:
        + **Hangup**: Use this flag to terminate the call. You can include a prompt such as, "When call ended, hangup.
        + **Set Variable**: Set variables locally. For example, in a prompt, you could ask, "What's your name?" and save the response to the variable `name`.
        + **Transfer**: Allows transfering calls to another agent.
    + **Tool Call Allow List**: Select from a list of `functions` available in Apps in IDE. 
    + **Guard Rails**: Choose from multiple Guard Rails options to define constraints for your AI Agent.
    + **Flags**: Select from various flags:
          + **Async Guard Rails**: *Currently not in use*.
          + **Local Voice Activity Detection**: It optimizes VoIP performance by identifying speech in real-time at the user’s device. 
          + **LLM Failover**: When an LLM model fails, the system dynamically shifts to a secondary model for uninterrupted operation.
          + **Disable ScriptForge**: Disables Scriptforge completely.
          + **Listen First**: Enabling this flag ensures the LLM prioritizes listening to the user before responding.
    + **Office Background Volume**: This feature enables the playback of background office sounds.
    + **Temperature**: Refers to a parameter that controls the creativity of the model's output.
        + **Low temperature (close to 0)** makes the model's responses more predictable by selecting the most probable words.
        + **High temperature (closer to 1 or above)** increases randomness, leading to more diverse and creative but potentially less coherent responses.
    
    + **Vars**<sup>TOML</sup>:  Select the variables you want pass into the ScriptForge script.
    
    + Click `Save`.
        <img src= "/class5/img/aiagent7.png"> 
    

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

#### Steps to Create a Task

1. Log in to your account.
2. Navigate to **Class 5 :material-menu-right: AI Agent**.
3. Click on **Task**.
4. Click on the blue `+` sign. <img src= "/class5/img/task1.png" style="border: 2px solid #4472C4; border-radius: 8px;">
5. Fill in the following fields to setup the task for your AI Agent:

=== "Basic"

    + **Name**: Enter the name of your task.
    + Click `Save`.
         <img src= "/class5/img/task2.png" style="border: 2px solid #4472C4; border-radius: 8px;">

=== "Model"

    + **Model**: Select a model for the selected platform. A model is a specific version or configuration of an AI system to perform tasks like text generation, real-time interactions, etc.

        !!! Info
            Different platforms offer specific models suited to their capabilities.
    
    + **First Message**: The initial message spoken by the agent. For example, when the agent begins the conversation.
    + **Prompt**: The prompt field allows you to enter a set of instructions to guide the AI Agent to perform certain tasks. It provides the foundation for the AI to comprehend the context, interpret the user's purpose, and generate relevant results.
    + Click `Save`.
        <img src= "/class5/img/task3.png" style="border: 2px solid #4472C4; border-radius: 8px;">

=== "Transcriber"

    + **Transcriber**: Select a single or multiple transcribers for converting audio to text. You can select the transcriber depending on the selected platform.
    + Click `Save`.
      <img src= "/class5/img/task4.png" style="border: 2px solid #4472C4; border-radius: 8px;"> 

=== "Advanced"

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
        <img src= "/class5/img/task5.png" style="border: 2px solid #4472C4; border-radius: 8px;"> 
    
    + To use this created task select it under [Advanced :material-menu-right:First Task](https://bani-aiagent1--connexcs-docs.netlify.app/class5/ai-agent/#__tabbed_1_5).
    
    !!! Note
        1. If `Include Primary Chat History` is `checked`, `Include Primary Prompt` will be ticked automatically.
        2. If `Sync Primary Chat History` is `checked`, `Include Primary Chat History` and `Include Primary Prompt` will be ticked automatically.

### AI Platforms, Models, Voices, TTS, Transcribers

|Platform|Model|Transcriber|Text To Speech (TTS)|Voice|
|--------|-----|-----------|--------------------|-----|
|**ConnexCS Converse**|Gemma 2 9bn, Gemma 7bn, Lamma 3 Tools 70bn, Lamma 3 Tools 8bn, Lamma 3.1 Tools 70bn, Lamma 3.1 Tools 8bn, Mixtral 8x7bn||Rime AI, Neets, Azure|Select from multiple options|
|**ConnexCS Converse Direct**|Select from the multiple options|ConnexCS Internal|Google|

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
1. Before initiating interaction with the AI chatbot, you must configure a few initial settings: <img src= "/class5/img/chat2.png" style="border: 2px solid #4472C4; border-radius: 8px;"> 
   1. `Add Context` (optional field): Allows you to provide additional information to the AI before or during a conversation so it can give more accurate, relevant, and helpful responses. You can either add `Text Input` or upload text files using `File Upload` option. <img src= "/class5/img/chat3.png" width= "300" style="border: 2px solid #4472C4; border-radius: 8px;"><img src= "/class5/img/chat4.png" width= "500" style="border: 2px solid #4472C4; border-radius: 8px;">. Click `Add to Chat`.
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
      1. Under the newly created app, add a Script Forge. [Click here](https://docs.connexcs.com/apps/architecture/script/) to know the steps.

3. **Define the Function**:
      1. Within the Script Forge, add the function you want the AI agent to access.

   !!! Example "Example Function"
        ```js
        /**
          * Transfer
          * @param {Object} param - Param Object
          * @param {string} param.name - The name of the person who you wish to transfer the call to.
            */
        function transfer() {
            return { action: 'transfer', destination: '160' }
        }
        ```

4. **Assign the App to the AI Agent**:
      1. Navigate to your AI agent that you have previously created.
      2. Under the **Basic** in the **App** field app, choose the created App.

5. **Allow Function Access**:
      1. Navigate to **Advanced** tab (in AI Agent), then select the created function in the **Tool Call Allow List** and grant access from the list.

Following these steps ensures that the AI agent has the necessary permissions to interact with the designated function.

!!! Example "Example Script"
    ```js
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
            ```js
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