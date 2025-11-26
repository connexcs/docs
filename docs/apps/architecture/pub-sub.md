# Pub/Sub Bus

---

**Document Metadata**
<br>**Category**: Applications Platform / Architecture – Pub-Sub Messaging </br>
**Audience**: Engineers, Developers, Platform Integrators, System Architects
<br>**Difficulty**: Intermediate to Advanced</br>
**Time Required**: Approximately 20–30 minutes (to read and understand Pub/Sub usage in ConnexCS)
<br>**Prerequisites**: Access to the ConnexCS Apps Platform, familiarity with asynchronous/event-driven programming concepts (e.g. publish/subscribe pattern), and basic JavaScript/ScriptForge knowledge for integration.</br>
**Related Topics**: Apps Architecture – Overview of App Platform, ScriptForge (Custom Logic), Page-Builder & UI Components
<br>**Next Steps**: Identify use cases for async event messaging (chat, notifications, state updates) → import cxPubSub module and use publish(topic, payload) / subscribe(topic, callback) → design topic naming strategy </br>

---

## Introduction

A **Pub/Sub** bus, short for **Publish/Subscribe** bus, is a messaging system that enables asynchronous communication between different parts of an application or system. It functions like a central communication hub where:

* **Publishers**: Emit events or messages containing information about something that happened (for example, a user logged in, a product was purchased, a sensor detected a change).

* **Subscribers**: Register to receive specific types of events. They're notified and receive the published messages whenever an event relevant to their interests occurs.

We explain an example of Pub/Sub bus which is a **Server Side Chat Application**.

```js linenums="1"
    function main(_, ws) { // defines main function
	const ws = this.scriptForge('myScriptForge')//ScriptForge integration
	const {publish, subscribe} = require('cxPubSub');//Pub/Sub Messaging:
	subscribe('chat', data => ws.send(data))//Subscribing to 'chat' topic
	wc.on('data', data => publish('chat', data))//Publishing to 'chat' topic
	}
```

Thus, this code:

1. Establishes a WebSocket connection through ScriptForge.
2. Integrates with a Pub/Sub messaging system.
3. Subscribes to the 'chat' topic to receive messages and forward them over the WebSocket.
4. Listens for incoming data on the WebSocket and publishes it to the 'chat' topic, making it accessible to other parts of the application that might be interested in chat messages.
