# Architecture

---

**Document Metadata** <br>**Category**: Applications Platform / Apps Architecture</br>
**Audience**: Engineers, Developers, Technical Leads <br>**Difficulty**: Advanced</br>
**Time Required**: Approximately 35-45 minutes</br>
<br>**Prerequisites**: An active ConnexCS account with the Apps platform enabled, basic understanding of web application architecture and backend services</br> **Related Topics**: [Apps – Introduction](https://docs.connexcs.com/apps/introduction/) , [Apps – Use-Case Examples](https://docs.connexcs.com/apps/use-case/) <br>**Next Steps**: Map your app to architecture layers (UI, business-logic, data-services), assign components to hosting platforms (Page Builder, ScriptForge, REST), and update standards accordingly.</br>

---

## Introduction

The Application Platform is distributed over global, stateless web servers that includes the sessions.

It serves via AnyCast on Edge Nodes. If any server goes offline, it goes to the next available node.

Sessions are managed by encrypted cookies.

All Assets are served via a global CDN.

We give you the option to lock the system to a particular version termed as **Version Locking**.

Another option we provide is **Continuous Integration** which includes updating latest features along with patches (worry free).

For example, there are 2 Call Centers "A" and "B". Call Center "A" doesn't want any automatic updates and on the other hand Call Center "B" expects their system updated each time any update is available. Thus, Call Center "A" can go for Version Locking and Call Center "B" can choose Continuous Integration.

The Bank-end links to ScriptForge and from there you can access the following:

* Database
* KV Access
* Jobs
* ConnexCS Introspection API
* Pub-Sub
* Call Origination / Class 5 Features
* Version Locking (Repeatable Delivery) OR Continuous Integration (Latest Features and Patches Worry Free)

It's a Server Side Chat Application.

## Platform Features

1. **Button Builder** helps you create a button that you can place in an existing menu on the site.
2. **Database** allows you to create custom persistent data storage.
3. **Domain** where the Application will be publicly accessible.
4. **Key Value Store** is a type of data storage software that uses a simple approach to storing and retrieving data.
5. **Page Builder** allows you to customise the Control Panel, Customer Portal, and Web Phone and helps you enhance the functionality of these interfaces.
6. **ScriptForge** helps you create scripts and applications.
7. **Templates** customise the content displayed on outbound emails/SMS, the Customer Portal, and WebPhone.
8. **Query Builder** streamline database query construction, enabling developers to create queries intuitively and often without direct SQL knowledge.

## Authentication

1. **Customer Login/Login/Company Login**: When you login using your name and password it gives you normal information. This allows you to login to the Customer Portal.
2. **SIP Login**: When you login it gives you SIP information. Another thing which is done here is passing a `jwt` which is a `json` web token. You can send this token to Control Panel API or WebPhone API. It will help you communicate with other systems like Control Panel or WebPhone etc.
