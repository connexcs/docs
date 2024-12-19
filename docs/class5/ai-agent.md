# AI Agent

**Class 5 :material-menu-right: AI Agent**

ConnexCS's AI Agent promise to deliver cutting-edge solutions that simplify and enhance your telecom experience.

Its a transformative step to optimize your business operations and elevate the services you offer to your customers.

AI Agents leverage advanced machine learning and automation capabilities to perform critical functions such as real-time call routing optimization, fraud detection, predictive analytics, and automated customer support.

The AI agents seamlessly integrate into the ConnexCS platform, enabling businesses to streamline operations, reduce overhead costs, and achieve greater accuracy in decision-making.

## Use Cases

1. **Real-Time Call Routing Optimization**
    + **Function**: AI agents dynamically analyze real-time traffic patterns, latency, call quality, and costs to determine the optimal routing for calls.
    + **Benefits**:
        + Reduces dropped calls and improves call quality.
        + Minimizes operational costs by selecting the most efficient carriers or routes.

2. **Advanced Fraud Detection and Prevention**
    + **Function**: AI agents monitor call data to detect anomalous patterns indicative of toll fraud, premium number abuse, or unauthorized access.
    + **Benefits**:
        + Proactive blocking of fraudulent activity.
        + Reduces revenue leakage and enhances system security.

3. **Intelligent Traffic Management**
      + **Function**: AI agents distribute network load intelligently during peak times, prioritizing critical calls or services.
      + **Benefits**:
          + Prevents congestion.
          + Ensures a seamless experience for high-priority users.

4. **Predictive Analytics for Resource Management**
    + **Function**: AI agents analyze historical data to predict future demand, enabling proactive resource allocation and planning.
    + **Benefits**:
        + Prevents overloading during high-traffic periods.
        + Reduces costs by aligning resources with demand.

5. **Automated Customer Support and Troubleshooting**
      + **Function**: Chatbots and virtual assistants powered by AI agents handle customer inquiries, provide technical troubleshooting, and escalate issues when necessary.
      + **Benefits**:
        + 24/7 availability for customer support.
        + Reduced response times and improved customer satisfaction.

6. **Call Quality Monitoring and Enhancement**
      + **Function**: AI agents continuously assess and improve call quality by identifying jitter, packet loss, and latency issues.
      + **Benefits**:
          + Automatically resolves quality issues through route adjustments.
          + Ensures consistent QoS (Quality of Service) for users.

7. **Billing and Invoice Automation**
    + **Function**: AI agents generate accurate, real-time invoices by tracking customer usage and identifying discrepancies.
    + **Benefits**:
        + Reduces billing errors.
        + Enhances transparency and builds customer trust.

8. **Personalized Customer Recommendations**
    + **Function**: AI agents analyze customer behavior and usage patterns to recommend tailored pricing plans, feature upgrades, or add-ons.
    + **Benefits**:
        + Improves customer retention.
        + Increases revenue through targeted up-selling.

9. **Real-Time Network Monitoring and Alerts**
    + **Function**: AI agents monitor the health of the telecom infrastructure, sending alerts for potential outages or performance degradation.
    + **Benefits**:
        + Reduces downtime through proactive maintenance.
        + Ensures high availability and reliability of services.

10.  **Voice and Sentiment Analytics**
    + **Function**: AI agents analyze call transcripts for sentiment and intent, enabling ConnexCS customers to gain insights into user satisfaction and trends.
    + **Benefits**:
        + Improves customer service strategies.
        + Identifies areas for operational improvement.

11. **Scalable Multi-Region Management**
    + **Function**: AI agents coordinate traffic, billing, and monitoring across multiple regions to ensure compliance and seamless operations.
    + **Benefits**:
        + Simplifies management of global telecom operations
        + Ensures region-specific customization for pricing and regulations.

12. **Dynamic Compliance Enforcement**
    + **Function**: AI agents ensure adherence to regional telecom regulations by dynamically applying compliance rules, such as call recording consent or data privacy policies.
    + **Benefits**:
        + Reduces risk of legal penalties.
        + Enhances trust with end-users and regulatory bodies.

13. **Marketing Campaign Automation**
    + **Function**: AI agents analyze customer data to design and execute targeted marketing campaigns, such as promotional offers or loyalty rewards.
    + **Benefits**:
        + Increases engagement and drives customer acquisition.
        + Optimizes ROI on marketing efforts.

14. **Create custom databases** and **create functions** to update the databases as well.

## Steps to create AI Agent

1. Login to your account.
2. Navigate to **Class 5 :material-menu-right: AI Agent**.
3. Click on the blue `+` icon.
<img src= "ai1">
4. A window will open up where you can create your customizable AI Agent for your customers.
<img src= "ai2">
5. Fill in the following fields to setup your AI model:
    + **Name**: Give a name to your AI Agent.
    + **App**: Select the [Application](https://docs.connexcs.com/apps/architecture/app/) you want to run your AI model.
    + **Company**: Select your customer you want to apply the AI model for.
    + **Destination**: Enter the Extension for the callers to call (essentially, the dial-in number).
    + **Platform**: Use either **OpenAI**, **ConnexCS Converse** or **ConnexCS Converse Direct** to model the AI Agent.
    + **Model**: Select a model for the selected platform. A model is a specific version or configuration of an AI system to perform tasks like text generation, real-time interactions etc.

    !!! Info
        Different Platforms offer specific Models suited to their capabilities.

    + **Transcriber**: Select the transcriber service to convert spoken words to text. You can select from either **OpenAI** or **ConnexCS Internal** depending on the selected platform.
    + **Text To Speech(TTS)**: Select from various TTS models to convert your text into audio. You can select from either **Google**, **Rime AI**, **Neets**, or **Azure** depending on the selected platform.
    + **Voice**: Select the voice for the test-to-speech service.
    + **Temperature**: Refers to a parameter that controls the randomness (variability or unpredictability) of the model's output.
        + **Low temperature (close to 0)** makes the model's responses more predictable by selecting the most probable words.
        + **High temperature (closer to 1 or above)** increases randomness, leading to more diverse and creative but potentially less coherent responses.
    + **First Message**: The initial message spoken by the agent. For example, when the agent begins the conversation.
    + **End Call Phrases**: Phrases or messages used to conclude a call or interaction with a customer.
    + **Prompt**: The prompt field allows you to enter the set of instructions to guide the AI model to perform certain tasks. It provides as the foundation for the AI to comprehend the context, interpret the user's purpose, and generate relevant results.
    + Click `Save`.

!!! Example "Example Prompt"
    Ava is a sophisticated AI training assistant, crafted by experts in customer support and AI development. Designed with the persona of a seasoned customer support agent in her early 30s, Ava combines deep technical knowledge with a strong sense of emotional intelligence. Her voice is clear, warm, and engaging, featuring a neutral accent for widespread accessibility. Ava's primary role is to serve as a dynamic training platform for customer support agents, simulating a broad array of service scenarios—from basic inquiries to intricate problem-solving challenges.

    Ava's advanced programming allows her to replicate diverse customer service situations, making her an invaluable tool for training purposes. She guides new agents through simulated interactions, offering real-time feedback and advice to refine their skills in handling various customer needs with patience, empathy, and professionalism. Ava ensures every trainee learns to listen actively, respond thoughtfully, and maintain the highest standards of customer care.

    **Major Mode of Interaction:**
    Ava interacts mainly through audio, adeptly interpreting spoken queries and replying in kind. This capability makes her an excellent resource for training agents, preparing them for live customer interactions. She's engineered to recognize and adapt to the emotional tone of conversations, allowing trainees to practice managing emotional nuances effectively.

    **Training Instructions:**
      - Ava encourages trainees to practice active listening, acknowledging every query with confirmation of her engagement, e.g., "Yes, I'm here. How can I help?"
      - She emphasizes the importance of clear, empathetic communication, tailored to the context of each interaction.
      - Ava demonstrates how to handle complex or vague customer queries by asking open-ended questions for clarification, without appearing repetitive or artificial.
      - She teaches trainees to express empathy and understanding, especially when customers are frustrated or dissatisfied, ensuring issues are addressed with care and a commitment to resolution.
      - Ava prepares agents to escalate calls smoothly to human colleagues when necessary, highlighting the value of personal touch in certain situations.
    
    Ava's overarching mission is to enhance the human aspect of customer support through comprehensive scenario-based training. She's not merely an answer machine but a sophisticated platform designed to foster the development of knowledgeable, empathetic, and adaptable customer support professionals.

### AI Platforms, Models, Voices, TTS, Transcribers

|Platform|Model|Transcriber|Text To Speech (TTS)|Voice|
|--------|-----|-----------|--------------------|-----|
|**OpenAI**|GPT 4o, GPT 4o Mini, GPT 4o Realtime|OpenAI|Google|
|**ConnexCS Converse**|Gemma 2 9bn, Gemma 7bn, Lamma 3 Tools 70bn, Lamma 3 Tools 8bn, Lamma 3.1 Tools 70bn, Lamma 3.1 Tools 8bn, Mixtral 8x7bn||Rime AI, Neets, Azure|Select from multiple options|
|**ConnexCS Converse Direct**|LLamma, Phi3|ConnexCS Internal|Google|

|Model|Description (based on required output)|
|-----|-----------|
|**GPT 4o**|For deep, detailed, and complex interactions. Supports ScriptForge|
|**GPT 4o Mini**|For faster responses with efficiency in mind|
|**GPT 4o Real-time**|For instant interactions where low latency is critical|
|**Gemma 2 9bn**| Strong performance in tasks like text generation, translation, and summarization|
|**Gemma 2 7bn**|Excels in areas like creative text generation, translation, and code generation|
|**Lamma 3 To   ols 8b**|Complex reasoning, instruction following, multilingual capabilities, contextual understanding, and knowledge base integration. Supports ScriptForge|
|**Lamma 3.1 Tools 70bn**| Offers improved reasoning, factual accuracy, context understanding, and multilingual capabilities over its predecessor, Llama 3 7B. Suports ScriptForge|
|**Mixtral 8x7bn**|Natural Language Processing (NLP), Data Analysis, Code Generation, Multi Modal (text, images, or audio)|
|**Llama**|Llama boasts a 128k token context window, ethical alignment, text-in, text-out interaction, strong logical reasoning, and multilingual capabilities|
|**Phi3**|Excel in language understanding, reasoning, coding, and math, outperforming larger models in these areas, and offer multimodal capabilities|

|Transcriber|Description|
|-----------|-----------|
|**OpenAI**|Converts spoken language into text using advanced machine learning models. It handles various accents, languages, and audio qualities to provide accurate transcripts for voice assistants, transcription services, and content creation|
|**ConnexCS Internal**|ConnexCS offers a transcription service that converts live and recorded calls into text with English as the default language and additional language support upon request. It includes configurable duration limits per call, advanced search with query modifiers and Boolean operators, and the ability to set custom pricing. The service integrates easily into existing workflows, enabling seamless incorporation of transcriptions into reports and analytics for improved efficiency|

|Text To Speech (TTS)|Description|
|--------------------|-----------|
|**Google**|Excels in naturalness, global language support, and customization, making it ideal for diverse applications|
|**Rime AI**|Focuses on emotional expressiveness and real-time interaction, suitable for conversational agents|
|**Neets**|Offers a simpler, cost-effective solution for basic TTS needs with limited features|
|**Azure**| It stands out for its extensive language and voice options, enterprise-grade security, and advanced customization capabilities|

## How to use Functions for the Large Language Models (LLMs)?

1. Develop an application utilizing the provided [link](https://docs.connexcs.com/apps/architecture/app/).
2. Create an **Agent** using the provided [link]().
3. Click on [Scriptforge](https://docs.connexcs.com/apps/architecture/script/) to create a script to access the AI Agent.

!!! Example "Example Script"
    ```js
    const llm = require('cxLLM'); // imports a module named `cxLLM` used for interacting with the LLM
    const moment = require('moment'); // imports the `moment` library used for  working with dates and times

    function main () {
        return llm.listFunctions(); //its an introspection capability; it parses the information and returns it as an object
    }

    /**
    * Retrieves the current day of the week // description of the function in `jsdoc` notation 
    *
    * @permissions Agent[123456] // indicates that these functions are restricted to agents with the specified permissions.
    * @returns {Promise<Object|string>} // functions return either a Promise (likely asynchronous) or a value (e.g., string or object); returns the current day of the week
    */
    function dayOfWeek() { // function retrieves the current day of the week using the moment library.
        return moment().format('dddd'); //  returns the full name of the day (e.g., "Monday").
    //    return {response: 'Monday'};
    }
    /**
    * Transfer the call // description of the function in `jsdoc` notation
    *
    * @permissions Agent[123456] // similar to the dayOfWeek function, it requires a specific permission (Agent[123456])
    * @param {Object} param - Param Object // function takes an object param with a property name, which is the name of the person to whom the call should be transferred
    * @param {string} param.name - The name of the person who you wish to transfer the call to.
    * @returns {Promise<Object|string>} - returns the current day of the week //  function returns a promise that resolves to either an object or a string
    */
    function transfer({name}) { // handles call transfer logic
        console.log(`We are going to transfer the call to ${name}`) //  name of the person to whom the call should be transferred
        return {action: 'transfer', data: {number: '160'}} // returns an object with `action: specifies the transfer action` and  `data:  Includes call transfer details like number (extension)`
    }
    ```

    ```mermaid
    flowchart TD
    %% Main Functionality
    A[Start] --> B[Main Function]
    B --> C[Call llm.listFunctions]
    C --> D[Return List of Functions]
    D --> E[End]

    %% dayOfWeek Functionality
    A --> F[dayOfWeek Function]
    F --> G[Get Current Date]
    G --> H[Call moment format 'dddd']
    H --> I[Return Current Day of the Week]

    %% Transfer Functionality
    A --> J[Transfer Function]
    J --> K[Receive name Parameter]
    K --> L[Log: Transfer Call to name]
    L --> M[Create Transfer Object]
    M --> N[Return action: transfer, data: number 160]

    %% Permissions
    F --> O[Requires Permission for Agent 123456]
    J --> O

    %% Styles
    style A fill:#f5f,stroke:#333,stroke-width:2.5px
    style B fill:#f9f,stroke:#333,stroke-width:2.5px
    style C fill:#ff,stroke:#333,stroke-width:2.5px
    style D fill:#ff,stroke:#333,stroke-width:2.5px
    style E fill:#ff,stroke:#333,stroke-width:2.5px
    style F fill:#f9f,stroke:#333,stroke-width:2.5px
    style G fill:#ff,stroke:#333,stroke-width:2.5px
    style H fill:#ff,stroke:#333,stroke-width:2.5px
    style I fill:#ff,stroke:#333,stroke-width:2.5px
    style J fill:#f9f,stroke:#333,stroke-width:2.5px
    style K fill:#ff,stroke:#333,stroke-width:2.5px
    style L fill:#ff,stroke:#333,stroke-width:2.5px
    style M fill:#ff,stroke:#333,stroke-width:2.5px
    style N fill:#ff,stroke:#333,stroke-width:2.5px
    style O fill:#ff,stroke:#333,stroke-width:2.5px
    ```

!!! Note "JSDoc Notation"
    Using JSDoc for optimizing function usage within LLMs:
     +  Provides clear descriptions of each function, parameter, and return type, making the purpose and behavior of LLM-related functions easy to understand.
     +  Reduces confusion and errors.
     +  With multiple developers working on an LLM project, JSDoc serves as a standardized way to share knowledge.
     +  LLM will exactly know how to interact with the code (Scriptforge).

    !!! Tip
        The function description must be brief, sharp, and accurate. Expanding it unnecessarily may create significant risks.
