# ScriptForge
 

It provides a JavaScript-based environment where users can develop scripts and applications.

Use ConnexCS **ScriptForge** to write ECMAScript 2015 (ES6) (aka JavaScript) and execute it in a secure sandbox on the server. It's designed to have low latency and high throughput.

It's made for scripts and small applications. Any larger applications are best executed on external hardware through ScriptForge.

A fair-usage policy applies; if there is unnecessary resource use or attempts to break the sandbox, your script may not function as expected.

### F-A-A-S (Function-as-a-Service)

ConnexCS exposes ScriptForge as a **Function-as-a-Service (F-A-A-S)**.

In this model you deploy small, single-purpose JavaScript functions that execute on-demand inside a secure, ephemeral sandbox managed by ConnexCS.

The platform automatically handles scaling, isolation, and the lifecycle of each function invocation so you can focus on application logic rather than infrastructure.

- **Short-lived executions**: Functions are intended for quick tasks and low-latency processing.
- **Managed scaling**: The platform transparently scales concurrent executions.
- **Resource limits**: Fair-usage limits apply; long-running or resource-intensive workloads should be hosted externally.
 