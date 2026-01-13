# ScriptForge (FaaS)

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Applications Architecture / Scripting Engine<br>
<strong>Audience</strong>: Engineers, Developers, Architects<br>
<strong>Difficulty</strong>: Intermediate to Advanced<br>
<strong>Time Required</strong>: Approximately 30–60 minutes<br>
<strong>Prerequisites</strong>: Active ConnexCS account, access to the Applications / Developer module, familiarity with scripting basics and ConnexCS architecture concepts<br>
<strong>Related Topics</strong>: <a href="https://docs.connexcs.com/apps/architecture/architecture">ConnexCS Applications Overview</a>, <a href="https://docs.connexcs.com/apps/architecture/scriptforge/">ScriptForge Scripting Reference</a>, <a href="https://docs.connexcs.com/apps/architecture/database/">Database Integration</a><br>
<strong>Next Steps</strong>: Review the ScriptForge architecture documentation; plan how scripts will integrate with your application logic or data flows; experiment with example scripts; validate integration with existing modules<br>

</details>

## Introduction

**ScriptForge** is a powerful scripting engine that allows users to extend and customize the functionality of ConnexCS.

It provides a JavaScript-based environment where users can develop scripts and applications.

Use ConnexCS **ScriptForge** to write ECMAScript 2015 (ES6) (aka JavaScript) and execute it in a secure sandbox on the server. It's designed to have low latency and high throughput.

It's made for scripts and small applications. Any larger applications are best executed on external hardware through ScriptForge.

A fair-usage policy applies, and if there is unnecessary resource use or if there are any attempts to break the sandbox, your script may not function as expected.

It's designed to work as **FaaS** (Functions as a Service), and our redundant infrastructure handles your application's auto scaling needs.

## ScriptForge as FaaS (Functions-as-a-Service)

ScriptForge operates as a **FaaS (Functions-as-a-Service)** platform within ConnexCS. This means scripts are executed on-demand in a secure, auto‑scaling, server-side environment. Each execution runs in an isolated sandbox, ensuring low latency, high throughput, and efficient resource usage.

This FaaS model aligns ScriptForge closely with modern serverless architectures, enabling developers to extend ConnexCS functionality without managing servers or runtime environments.

{{ external_markdown('https://cdn.cnxcdn.com/scriptforge-api-docs/api/README.md', '') }}