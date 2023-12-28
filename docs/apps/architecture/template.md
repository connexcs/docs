# Introduction

Create your own **Templates** to customise the content displayed on outbound emails/SMS, the Customer Portal, and WebPhone.

ConnexCS **Templates** use the mustash-compatible template language [**Handlebars**](https://handlebarsjs.com/guide/).

!!! note "Template Syntax"
    It's important for you to follow the template syntax and enter fields such as `{email}` or `{account_name}` exactly. If not, the system won't  correctly replace when the template is rendered.

## How to Add a Template

1. Navigate to **IDE** :material-menu-right: `+` sign :material-menu-right: **Template**.

<img src= "/apps/img/template1.png">

2.Fill out the following details:
   + Name of the **Template**.
   + Select the **Application** for which you want to integrate the template.
   + Fill out the template **Subject**.
   + Enter the **SMS** details.
   + Enter the **Text**.

<img src= "/apps/img/template2.png" width="300">

3.Click on `Save`.

4.The created **Template** will be visible on the IDE panel under **Template**. Click on the created template.
5.Enter the HTML code. Click on `Save` and `Run`.

<img src= "/apps/img/template3.png">

6.**Preview** is available on the right side of the screen.

<img src= "/apps/img/template4.png">
