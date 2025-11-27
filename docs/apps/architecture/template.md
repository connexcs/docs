# Template

---

**Document Metadata** <br>**Category**: Applications Architecture / Template System</br>
**Audience**: Developers, Engineers, App Builders</br>
**Difficulty**: Intermediate</br>
**Time Required**: Approximately 20–40 minutes</br>
**Prerequisites**: Active ConnexCS account with access to the Applications module; familiarity with the Apps platform, component structure, and JSON-based configuration</br>
**Related Topics**: [Applications Architecture – App Structure](https://docs.connexcs.com/apps/architecture/app/), [ScriptForge](https://docs.connexcs.com/apps/architecture/scriptforge/), [Page Builder/Components](https://docs.connexcs.com/apps/page-builder/)
**Next Steps**: Review how templates define reusable UI and logic patterns, then create or modify a template to standardize layouts or behaviors across your applications.</br>

---

## Introduction

ConnexCS offers a powerful templating system for automating communication.

Create your own **Templates** to customise the content displayed on outbound emails/SMS, the Customer Portal, and WebPhone.

ConnexCS **Templates** use the mustash-compatible template language [**Handlebars**](https://handlebarsjs.com/guide/).

!!! note "Template Syntax"
    It's important for you to follow the template syntax and enter fields such as `{email}` or `{account_name}` exactly. If not, the system won't  correctly replace when the template is rendered.

## How to Add a Template

1. Login to your account.

2. Navigate to **IDE** :material-menu-right: `+` icon :material-menu-right: **Template**.

<img src= "/apps/img/template12.png" width="500" style="border: 2px solid #4472C4; border-radius: 8px;">

3.Fill out the following details:

   * Name of the **Template**.
   * Select the **Application** for which you want to integrate the template.
   * Fill out the template **Subject** for the **e-mail** communication (supports variables).
   * The **SMS** field doesn't actually send the SMS, but it's usable when other parts of the system have SMS set.

<img src= "/apps/img/template21.png" width="300" style="border: 2px solid #4472C4; border-radius: 8px;">

4.Click on `Save`.

5.The created **Template** will be visible on the IDE panel under **Template**. Click on the created template.

6.Enter the HTML code. Click on `Save` and `Run`.

<img src= "/apps/img/template3.png" style="border: 2px solid #4472C4; border-radius: 8px;">

7.**Preview** ![prev1](image-6.png) is available on the right side of the screen. Click here to open the preview section.
Click on this arrow ![arr](image-5.png) to maximize the preview screen.

<img src= "/apps/img/template4.png" width="300" style="border: 2px solid #4472C4; border-radius: 8px;">

8.You can `Run` and `Save` the code, `Toggle Console`, `Preview (errors)`, `Request Cancellation` for cancelling any ongoing requests, for example taking longer to execute, `Settings` you can edit, Set Vars, Copy file ID, Copy UUID using Settings.

<img src= "/apps/img/sc.png" width= "400" style="border: 2px solid #4472C4; border-radius: 8px;">

!!! Note
    A **File ID** serves as the unique identifier for a file, while a **UUID** is used to expose a **ScriptForge File** to external systems.

### Use Case

1. To display **Documentation** in **App Store** (Setup :material-menu-right: App Store :material-menu-right: Click on the App :material-menu-right: Documentation)

    * Follow the instructions above to add documentation for a specific built application, however note that **template name** should actually be **app_documentation**.

<img src= "/apps/img/appdoc.png" style="border: 2px solid #4472C4; border-radius: 8px;">
<img src= "/apps/img/appdoc1.png" style="border: 2px solid #4472C4; border-radius: 8px;">