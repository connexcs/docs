# ASR, TTS, LLM in Programmable Voice

## Abstract

This Class5 feature serves as a proof of concept for Autonomous Speech Recognition (ASR), Text-to-Speech (TTS), and Large Language Model (LLM) integration using ConnexCS.

It's an example of how to call into a Class5 endpoint on the System. ASR will listen to the conversation and then convert it into text. It then gets passed to the LLM, which curates an intelligent reply, this reply can be spoken using the TTS technology.

``` mermaid
graph LR
A[User Speaks] --> B{ASR: Convert to Text}
B --> C{LLM: Generate Reply}
C --> D{TTS: Convert to Speech}
D --> E[User Hears Reply]
```

 The system demonstrates how real-time voice interactions can be managed and processed effectively.

## Prerequisites:

1. Google Transcribe
2. Google Text-to-Speech

## Key Features:

1. **Real-Time Transcription:** Utilizing await ctx.transcribeStart(), the system transcribes incoming calls in real time, with sentence splitting for accurate transcription.
2. **Transcription Handling:** Upon completion of transcription, the transcribed text is processed within the event listener ctx.on('transcription', async text => {, which then halts the transcription temporarily.
3. **Text-to-Speech Response:** The system converts the transcribed text into speech using Google Text-to-Speech, providing real-time spoken responses.
4. **Interactive Voice Conversation:** The transcription process continues in a loop, enabling continuous interaction between the caller and the language model.

## Example Use Case:

This technology can be deployed in scenarios where a ChatBot needs to receive audio input, interpret it using a language model, and respond verbally. The ChatBot's responses are articulated through Google TTS, enabling interactive and autonomous voice communication.

## Code Explanation:

The JavaScript code defines an asynchronous function, main, which handles a Class 5 telephony application that interacts with a language model for real-time voice interactions. The application, upon receiving a call, answers it and starts transcribing the caller's speech. It logs key events and processes transcribed text by sending it to a language model (via the cxLLM module) to generate responses. These responses are then spoken back to the caller using text-to-speech (TTS) functionality. The transcription process continues in a loop, allowing for an interactive voice conversation. The application waits for the call to end before completing its execution.

## Libraries

   * cxLLM: For interacting with a language model.
   * ctx: A class 5 real-time interface used for managing call actions, logging, transcription, and TTS.

## Script Example

```javascript title="AgentAI" linenums="1"
// Import the cxLLM module which is used for handling language model interactions
const llm = require('cxLLM'); 
// The main function that contains the core logic of the Class 5 Application
async function main(data, ctx) {
    // Initialize chatId to null; this will be used to maintain the chat session with the language model
    let chatId = null;

    // Answer the incoming call
    await ctx.answer();

    // Log an informational message to the context
    await ctx.log(`Entered 2626`);

    // Set up an event listener for transcription events
    ctx.on('transcription', async text => {

        // Stop transcription temporarily to process the current input
        await ctx.transcribeStop();

        // Send the transcribed text to the language model chat function, using a specific assistant ID
        // The chatId is used to maintain context in the conversation
        const result = await llm.chat('asst_MTbETp3jyb9tG9eAepFGxgPb', text, chatId);

        // Update chatId with the current session's chat ID returned from the language model
        chatId = result.chat_id;

        // Use text-to-speech to speak out the response from the language model
        await ctx.tts(result.response, { provider: 'google' });

        // Restart transcription to continue listening for further input
        await ctx.transcribeStart();
    });

    // Start transcription to begin capturing audio input for real-time transcription
    await ctx.transcribeStart();

    // Wait for the call to hang up before completing the script
    return ctx.waitForHangup();
}
```
