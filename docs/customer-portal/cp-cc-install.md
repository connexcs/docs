# Contact Center Setup & Usage Guide

This section will guide you to install the Contact Center application for your customers.

## Install Contact Center App

1. Login to your **Control Panel**.
2. Navigate to **Setup :material-menu-right: App Store**. <br><img src= "/customer-portal/img/1cc.png" style="border: 2px solid #4472C4; padding: 2.5px; border-radius: 8px;"></br>
3. Click on the **Contact Center** application. Click on `Install`. <br><img src= "/customer-portal/img/2cc.png" style="border: 2px solid #4472C4; padding: 2.5px; border-radius: 8px;"></br>
4. Modify the `App Name` (optional) and select the app `Version` (optional). Click `Install`. <br><img src= "/customer-portal/img/3cc.png" style="border: 2px solid #4472C4; padding: 2.5px; border-radius: 8px;"></br>

## Configure the Contact Center App

1. Click on `Config`. <br><img src= "/customer-portal/img/4cc.png" style="border: 2px solid #4472C4; padding: 2.5px; border-radius: 8px;"></br>

2. A window will pop-up where you need to select the `User API`, `Class 5 Server` and `Class 4 Server` and hit the `Next Step` button. <br><img src= "/customer-portal/img/5ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

        !!! Note "Important Note"
            Make sure to select a **Class 4 server** where **WebRTC** and **TLS** are enabled.

3. The user must select a database using the dropdown, or they can click on `New Database` to create and select a new one. Click `Confirm`. <br><img src= "/customer-portal/img/6ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

## Add the Domain

1. Navigate to **IDE :material-menu-right: Select the Contact Center App (you created) :material-menu-right: Domain**. Click on `Domain`. <br><img src= "/customer-portal/img/7cc.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

2. Click on the blue `+` sign.

3. Select the `App` and enter the `domain` for your dialer. Click `Save`. <br><img src= "/customer-portal/img/8ccnew.png" style="border: 2px solid #4472C4; border-radius: 8px;"></br>

[Click here](https://docs.connexcs.com/apps/architecture/domain/) to get more information on domains.

!!! Note "An internal number block range is required to create agents."

After following the above step, we've successfully installed the Contact Center application.

Next, we proceed to review the Contact Center application's setup process and understand its operational workflow.

You can **Rename** or **Reposition** the Contact Center button in the portal.

Click here for [Preview Dialer](https://bani-contact-center--connexcs-docs.netlify.app/customer-portal/cp-cc-pd/).

Click here for [Auto Dialer](https://bani-contact-center--connexcs-docs.netlify.app/customer-portal/cp-cc-ad/).

Click here for [Broadcast Dialer](https://bani-contact-center--connexcs-docs.netlify.app/customer-portal/cp-cc-bd/).