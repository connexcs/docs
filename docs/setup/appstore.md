# App Store

**Setup :material-menu-right: App Store**

The **ConnexCS App Store** lets you discover, download, and install applications on your user account.

The Apps created using the IDE are available for use in the App Store when published.

The Apps can be created by other customers or developers and used by ConnexCS's customers.

## Steps to install Apps

1. Login to your account. Navigate to Setup :material-menu-right: App Store. Click on the App you wish to install.
2. Click on **Install**.

<img src= "/setup/img/appstore.png">

3.After hitting the '**Install**' button, a window appears with two fields. The first field is '**App Name**', where you can either change the name of the application or keep it the same. The second field allows you to select the **Version** of the application.

4.Click on **Install** and the App will be installed on your user account.

<img src= "/setup/img/appstore1.png" width= "500">

5.You can view the **Description**, **Installed Versions**, **All Versions** and any **Documentation** related to the Application.

<img src= "/setup/img/appstore2.png" width= "500">

!!! Note
    See this icon? ![owner](image-1.png). It means you built this application and the ownership belongs to you.

## How to Display documentation for your Application

1. You can add information about your specific application by using the **Template** component in the **IDE** section.
2. [Click here](https://docs.connexcs.com/apps/architecture/template/#how-to-add-a-template) to follow the instructions on how to create a template and add documentation, however, note that **template name** should actually be **app_documentation**.

<img src= "/apps/img/appdoc.png">
<img src= "/apps/img/appdoc1.png">

## Useful Tools and Applications

### DID Spam Score

#### **Overview**

This application will help you update the Spam Score of your DIDs and send a report to the provided email ID.

!!! Note "Please note that this service is chargeable and the cost for each DID spam score check is $0.004 ."

#### Prerequisites

Before using the app, ensure that the [**Spam Score package**](https://docs.connexcs.com/setup/config/packages/) is added to your account.

#### Steps to Use the App

1. Setup Email that will be used as API user.
2. Navigate to **IDE :material-menu-right: DID Spam Score App :material-menu-right: Environmental Variables**.
3. Locate the `cx_api_user`variable. <img src= "/apps/img/fli.png">
4. Enter the email address you use to login in value.<img src= "/apps/img/fli1.png">
5. Select **DIDs** for **Spam Score Check**.
6. Navigate to **Global :material-menu-right: DID**.
7. Select the DIDs you want to check.
8. Once selected, click on the `Spam Score button` at the top of the page.<img src= "/apps/img/fli2.png">
9. Send the `Spam Score Report`.
10. After clicking the Spam Score button, you will be prompted to enter the **email address** to which the DID spam report will be sent.
11. Enter the desired email address and click `Spam Scout`. <img src= "/apps/img/fli3.png">
