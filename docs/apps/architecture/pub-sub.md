# Pub/Sub Bus

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Applications Platform / Project Management & Organization<br>
<strong>Audience</strong>: Engineers, Developers, DevOps & Integration Teams<br>
<strong>Difficulty</strong>: Beginner to Intermediate<br>
<strong>Time Required</strong>: Approximately 15–20 minutes (to create a new Project and understand workflow)<br>
<strong>Prerequisites</strong>: Access to ConnexCS Apps IDE, account privileges to create Projects and Applications<br>
<strong>Related Topics</strong>: <a href="https://docs.connexcs.com/apps/architecture/app/">Applications – App Structure & Creation</a>, <a href="https://docs.connexcs.com/apps/architecture/architecture/">Apps Architecture Overview</a>, <a href="https://docs.connexcs.com/apps/architecture/architecture/#version-locking-vs-continuous-integration">Versioning & Deployment Workflow</a><br>
<strong>Next Steps</strong>: After creating a Project, add one or more applications under it; define versioning/branching strategy; for each app, configure environment variables, Pub/Sub channels, and associate components (pages, scripts, databases) — then publish and track under the Project umbrella<br>

</details>

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
