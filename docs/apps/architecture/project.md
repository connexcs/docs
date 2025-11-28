# Project

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

A project serves as an umbrella under which various applications can be organized.

These applications may differ in versions and features.

Importantly, every application you publish must be linked to a specific project for organization and tracking.

## How to Add a Project

1. Login to your account.

2. Navigate to **IDE** :material-menu-right: `+` icon :material-menu-right: **Project**.

<img src= "/apps/img/project.png" style="border: 2px solid #4472C4; border-radius: 8px;">

3.Fill out the following details:

   * Name of the **Project**.
   * Explain the project that you are setting-up in the **Description** field.
   * Set-up an **Icon** for the Project.

<img src= "/apps/img/project1.png" style="border: 2px solid #4472C4; border-radius: 8px;">

4.Click on `Save and Continue`.

5.The created project will be visible on the IDE panel under **Project**.

<img src= "/apps/img/project2.png" style="border: 2px solid #4472C4; border-radius: 8px;">

### How to add an Application under a Project

1. Login to your account.
2. Navigate to **IDE :material-menu-right: Select an Application to be placed under the Project :material-menu-right: Settings :material-menu-right: Publish App**.

<img src= "/apps/img/project3.png" width= "300" style="border: 2px solid #4472C4; border-radius: 8px;">

3.Select the created **Project** and **Version** and click `Publish App`.
