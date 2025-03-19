# Introduction

To fully appreciate the features of Class 5 services, it's essential to first understand Class 4 services and the key differences between them.

## Class 4 vs. Class 5 Softswitch

### What is a Class 4 Softswitch?

A Class 4 softswitch is primarily responsible for routing traffic from one carrier to another.

ConnexCS operates as a Class 4 softswitch.

The call never connects to ConnexCS itself; it simply passes through from Point A to Point B.

It can perform advanced routing functions, but does not handle call termination, media processing, or IVR.

### What is a Class 5 Softswitch?

A Class 5 softswitch is responsible for call termination and media handling.

It can perform actions like:
+ Answering calls
+ Playing messages
+ Providing voicemail and IVR services
+ Unlike Class 4, a Class 5 switch manages end-user call features.

**Key Difference Between Class 4 and Class 5 Softswitches**

|Feature|Class 4 Softswitch (ConnexCS)|	Class 5 Softswitch|
|-------|-----------------------------|-------------------|
|Call Routing|✅|✅|
|Call Termination|❌|✅|
|IVR & Media Services|❌|✅|
|End-User Features|❌|✅|