# ASR, TTS, LLM in Programmable Voice

## Abstract

A Class5 feature, and a proof of concept of the **Autonomous Speech Recognition (ASR)**, **Text-to-Speech (TTS)** and **Large Language Model (LLM)** using ConnexCS.

Some pre-requisites are required for this system to function:

1. Google Transcribe
2. Google Text-to-Speech

* With the help of `await ctx.transcribeStart()}`, the call is transcribed in real time. Sentence splitting is used to transcribing.
* After the transcription process is completed, it displays the transcribed text using  `ctx.on('transcription', async text => {` and stops the transcription process.
* Consequently, it will speak the text that you spoke using the **Google Text-To-Speech**

!!! Example
    This capability can be used in a situation where a ChatBot receives audio, interprets it, and responds appropriately. The ChatBot's response will thus be spoken by the **Google TTS**.

## Libraries

## Script Example

```js
const llm = require('cxLLM')
async function main(data, ctx) {
	let chatId = null;
	console.log('Starting Class 5 Application')
	await ctx.answer();
	await ctx.log(`Enterd 2626`);

	ctx.on('transcription', async text => {
		console.log('ScriptForge Transcription:', text);
		await ctx.transcribeStop();
		const result = await llm.chat('asst_MTbETp3jyb9tG9eAepFGxgPb', text, chatId);
		chatId = result.chat_id;
		await ctx.tts(result.response, { provider: 'google' });
		await ctx.transcribeStart();
	});

	await ctx.transcribeStart();

	//	await ctx.transcribeStop();

	return ctx.waitForHangup();
}

function sleep(timeout = 5) {
	return new Promise(resolve => setTimeout(resolve, timeout * 1000))
}
```
