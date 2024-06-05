# Template

## Introduction

Create your own **Templates** to customise the content displayed on outbound emails/SMS, the Customer Portal, and WebPhone.

ConnexCS **Templates** use the mustash-compatible template language [**Handlebars**](https://handlebarsjs.com/guide/).

!!! note "Template Syntax"
    It's important for you to follow the template syntax and enter fields such as `{email}` or `{account_name}` exactly. If not, the system won't  correctly replace when the template is rendered.

## How to Add a Template

1. Login to your account.

2. Navigate to **IDE** :material-menu-right: `+` icon :material-menu-right: **Template**.

<img src= "/apps/img/template12.png">

3.Fill out the following details:

   * Name of the **Template**.
   * Select the **Application** for which you want to integrate the template.
   * Fill out the template **Subject** for the **e-mail** communication (supports variables).
   * The **SMS** field doesn't actually send the SMS, but it's usable when other parts of the system have SMS set.

<img src= "/apps/img/template21.png" width="300">

4.Click on `Save`.

5.The created **Template** will be visible on the IDE panel under **Template**. Click on the created template.

6.Enter the HTML code. Click on `Save` and `Run`.

<img src= "/apps/img/template3.png">

7.**Preview** ![preview](image-3.png)is available on the right side of the screen.
Click on this arrow ![arrow](image-2.png) to maximize the preview screen.

<img src= "/apps/img/template4.png">

### Use Case

1. To display **Documentation** in **App Store** (Setup :material-menu-right: App Store :material-menu-right: Click on the App :material-menu-right: Documentation)

    * Follow the instructions above to add documentation for a specific built application, however note that **template name** should actually be **app_documentation**.

<img src= "/apps/img/appdoc.png">
<img src= "/apps/img/appdoc1.png">