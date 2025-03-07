# Template

## Introduction

ConnexCS offers a powerful templating system for rendering pages and automating communication.

Create your own **Templates** to customise the content displayed on outbound emails/SMS, the Customer Portal, and WebPhone.

ConnexCS **Templates** use the mustash-compatible template language [**Handlebars**](https://handlebarsjs.com/guide/).

!!! note "Template Syntax"
    It's important for you to follow the template syntax and enter fields such as `{email}` or `{account_name}` exactly. If not, the system won't  correctly replace when the template is rendered.

### Key Features:

+ **Supports**:
    + Sending emails
    + Sending text messages
+ **Utilizes CXREST API for system communication**:
    + Create, delete, read, and update customer records.
+ **Template Literals & Variables**:
    + Placeholders within the template (template literals/variables) are dynamically replaced with actual data.
+ **Pre-Built Templates**:
    + **Reset Password Template**: Provides a ready-to-use layout when customers reset their passwords.
    + **Voicemail Notification**: A simple message indicating “you have a new voicemail.”
+ **Customization**:
    + Modify layouts and content to suit various use cases (e.g., complex scenarios like web phone interactions).
    + Can be used to customize the customer control panel.
    + Ability to create custom pages within the ConnexCS platform.

### Benefits

+ **Enhanced Customization**: Allows designers to separate static design from dynamic user content.
+ **Dynamic Content Integration**: Ensures that template variables are automatically replaced with live data.
+ **Versatile Usage**: Suitable for both simple notifications and more intricate user interface designs.
+ **Flexibility in Design**: The ability to add and reset templates offers complete control over system alerts.

### Alert Management through Templates

**Purpose**: Customize and manage system alerts through editable templates.

**Usage**: Change the default alert template or add entirely new ones to design custom pages.

**Key Features**:

+ **Editable Alert Templates**:
    + Modify the default alert appearance as needed.
    + Supports multiple alert templates to cover different scenarios.

+ **Adding New Templates**: You can add custom templates that don’t already exist.

+ **Reset Functionality**: A simple reset option reverts the alert template to its original system default, removing any customizations.

+ **ScriptForge Integration**:
    + **Custom Variables Injection**: Execute ScriptForge to inject custom variables into the global space.

!!! question "How It Works?"
    Although ScriptForge runs asynchronously (which might delay processing), its output is merged into the global space for synchronous template variable execution.
    This method bridges the gap between asynchronous processing (ScriptForge) and synchronous template variable replacement, ensuring seamless functionality.

## How to Add a Template

1. Login to your account.

2. Navigate to **IDE** :material-menu-right: `+` icon :material-menu-right: **Template**.

<img src= "/apps/img/template12.png" width="500" >

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

7.**Preview**![prev1](image-6.png) is available on the right side of the screen. Click here to open the preview section.
Click on this arrow ![arr](image-5.png) to maximize the preview screen.

<img src= "/apps/img/template4.png">

8.You can `Run` and `Save` the code, `Toggle Console`, `Preview (errors)`, `Request Cancellation` for cancelling any ongoing requests, for example taking longer to execute, `Settings` you can edit, Set Vars, Copy file ID, Copy UUID using Settings.

<img src= "/apps/img/sc.png" width= "275">

!!! Note
    A **File ID** serves as the unique identifier for a file, while a **UUID** is used to expose a **ScriptForge File** to external systems.

### Use Case

1. To display **Documentation** in **App Store** (Setup :material-menu-right: App Store :material-menu-right: Click on the App :material-menu-right: Documentation)

    * Follow the instructions above to add documentation for a specific built application, however note that **template name** should actually be **app_documentation**.

<img src= "/apps/img/appdoc.png">
<img src= "/apps/img/appdoc1.png">