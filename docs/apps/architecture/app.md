# App

<details> <summary><strong>Document Metadata</strong></summary> <br>

<strong>Category</strong>: Applications Platform / App Structure & Best Practices<br>
<strong>Audience</strong>: Engineers, Developers, Technical Leads<br>
<strong>Difficulty</strong>: Advanced<br>
<strong>Time Required</strong>: Approximately 30–40 minutes<br>
<strong>Prerequisites</strong>: Access to the ConnexCS Apps Platform (Page Builder, ScriptForge, Data Services), understanding of modular web-app architecture<br>
<strong>Related Topics</strong>: <a href="https://docs.connexcs.com/apps/architecture/architecture/">Apps Architecture Overview</a>, <a href="https://docs.connexcs.com/apps/use-case/">App Use-Cases</a><br>
<strong>Next Steps</strong>: Define modules → build UI (Page Builder) → add logic (ScriptForge) → connect data → test → document and version<br>

</details>

## Introduction

The **App** feature is like an umbrella, which holds the features like **Button Builder**, **Database**, **Domain**, **Key Value Store**, **Page Builder**, **ScriptForge**, **Templates**, and **Query Builder**.

An **App** is a discrete component can be installed and uninstalled.

You can create your own App and publish it to the **ConnexCS App Store**. Also, other people can also download your Apps.

## Step to create an App

1. Login to your account.

2. Navigate to **IDE** :material-menu-right: `+` sign :material-menu-right: **App**.

3. Enter the **Name** of your application.

4. Click on **Save**.

<img src= "/apps/img/app1.png" style="border: 2px solid #4472C4; border-radius: 8px;">

4.The created application will be visible on the App interface.

<img src= "/apps/img/app2.png" width="215" style="border: 2px solid #4472C4; border-radius: 8px;">

5.You have the option to **Publish** it using the `Settings`⚙️ button and provide a **Version** to it as well.

<img src= "/apps/img/app3.png" width="250" style="border: 2px solid #4472C4; border-radius: 8px;">

<img src= "/apps/img/app4.png" width="250" style="border: 2px solid #4472C4; border-radius: 8px;">

!!! Example

    For instance, you create a **Calculator** app.

    You use the ScriptForge, Pages and Button Builder for creating the Calculator.

6.Click `Refresh` ↻ to refresh the Apps or Files.

7.You also have the `Search` field, which allows you to search a file by its ID. For example, you can search a Query, ScriptForge, Database, Page Builder etc.

!!! warning

    If you intend to remove an App, you must also remove all the data associated with it, including those in Buttons, ScriptForge, Variables, Pages, and Templates.
