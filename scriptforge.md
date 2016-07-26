# ScriptForge

The ScriptForge allows you to write your own application which can be run at specific events in the system, currently the following places support scripting functionality:

* Routing Engine (runs in line the call setup process)
* Post Billing (runs after billing has taken place)

Requests to your application are processed via a messaging bus and will be queued if your application can not process them fast enough. If you run your application in the routing engine you must ensure that it can complete quickly so as not to induce high PDD.

## Design Considerations

#### Memory

For speed enhancements variables in your application may be present between messages, however you should not assume this behaviour. Your application will be automatically distributed across multiple nodes and active variables will not be persistent (If you require persistence across messages you can use the datastore class). The memory of your application may be limited (default to 100MB). You should ensure that you don't try to use more than the allocated amount or your application may crash.

#### CPU (Time Limit)

There are no hard CPU restrictions on your application, however its run time is limited (default 2 seconds).

The first message to be processed can take up to 300ms to instantiate, further messages (in proximity) will be processed near instantaneously.

#### Javascript

The exit() function must be called to return the result and mark the message processing as complete. If exit() is not called the process will be terminated at the limited time. Once exit() is called the process will continue to run for x2 the allocated time to finish any asynchronous tasks issued to it. At which point the process is frozen until another message arrives. If it stays frozen with no new messages for 60 seconds the process is terminated.

#### PHP

PHP runs as a single-thread non-concurrent process. A PHP process must return a result with the standard return syntax. As there is no concurrency this marks the end of processing the message. The process will remain idle for the next 60 seconds, if there are no messages within this time, the process is terminated.

#### Durability

If a message is not processed in time or fails half way through processing, it will be reset to the unconsumed state and will be available for further processing. A message should not ever be lost.

#### Scalability

Your application may run across multiple zones (data centres) and by default is allowed 1 process per script.

If your application is intensive and/or you need to scale further please contact us to arrange more resources to be dedicated to your application.

#### Functionality

Your programming environment is locked down for security reasons, but we provide classes/helpers to achieve greater functionality, you can find out more about them in the Knowledge Base.
